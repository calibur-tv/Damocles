<?php
function version($path)
{
    static $manifests = [];
    if (! file_exists($manifestPath = public_path('/mix-manifest.json'))) {
        return new Illuminate\Support\HtmlString($path.'?'.rand(0, time()));
    }

    $manifests['/'] = $manifest = json_decode(file_get_contents($manifestPath), true);

    if (! array_key_exists($path, $manifest)) {
        return new Illuminate\Support\HtmlString($path.'?'.rand(0, time()));
    }

    return new Illuminate\Support\HtmlString($manifest[$path]);
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta id="_csrf" name="csrf-token" content="{{ csrf_token() }}">
    <title>riuir - 控制台</title>
    <link rel="stylesheet" href="{{ version('/assets/css/style.css') }}">
</head>
<body>
<div id="app"></div>
<script src="{{ version('/assets/js/manifest.js') }}"></script>
<script src="{{ version('/assets/js/vendor.js') }}"></script>
<script src="{{ version('/assets/js/app.js') }}"></script>
</body>
</html>