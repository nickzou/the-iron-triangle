<?php

function load_theme_files()
{
    $directories = [
        'config',
    ];

    foreach ($directories as $dir) {
        $full_dir = get_template_directory() . '/inc/' . $dir;

        if (!is_dir($full_dir)) {
            continue;
        }

        // Get all PHP files in this directory
        $files = glob($full_dir . '/*.php');

        foreach ($files as $file) {
            require_once $file;
        }
    }
}

// Load all theme files in order
load_theme_files();
