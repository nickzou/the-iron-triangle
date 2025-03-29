<?php

$theme_dir = get_template_directory();

if (file_exists("$theme_dir/vendor/autoload.php")) {
    require_once "$theme_dir/vendor/autoload.php";
}

use eftec\bladeone\BladeOne;

function get_blade_instance()
{
    $theme_dir = get_template_directory();
    $views = "$theme_dir/views";

    $cache = "$theme_dir/cache";

    if (!file_exists($cache)) {
        mkdir($cache, 0755, true);
    }

    // BladeOne mode: 0=fast, 1=forced, 2=strict, 5=debug
    // Use 5 (debug) for development, 0 for production
    $mode = WP_DEBUG ? 5 : 0;

    return new BladeOne($views, $cache, $mode);
}

function view($template, $data = [])
{
    try {
        $blade = get_blade_instance();
        echo $blade->run($template, $data);
    } catch (Exception $e) {
        if (WP_DEBUG) {
            echo "Template error: " . $e->getMessage();
        }
    }
}
