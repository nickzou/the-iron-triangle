<!DOCTYPE html>
<html {{ language_attributes() }}>
<head>
    <meta charset="{{ bloginfo('charset') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {!! wp_head() !!} 
</head>

<body {{ body_class() }}>
    {!! wp_body_open() !!}
    <header class="text-red-600">
        <h1><a href="{{ home_url() }}">{{ bloginfo('name') }}</a></h1>
        <p>{{ bloginfo('description') }}</p>
    </header>
