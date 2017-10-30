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
    <title>riuir - 控制台</title>
    <style>
        body,html{height:100%}body{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;background-image:url(/assets/img/girl.jpg)}body *{margin:0;padding:0;box-sizing:border-box}body h1{font-size:30px;line-height:42px;font-weight:300;margin-bottom:20px;text-align:center;color:#fff}body form{width:360px;height:280px}body form div{margin-bottom:20px}body form div input{color:#888;width:100%;height:42px;outline-width:0;border:1px solid #e5e5e5;transition:all .2s linear;transition-property:border,background,color,box-shadow,padding;padding:4px 6px;font-size:16px;font-family:inherit;letter-spacing:1px}body form div input:focus{border-color:#489be0;outline-width:0;background:#fff;color:#888}body form div input:-webkit-autofill{box-shadow:inset 0 0 0 100px #e9fbfe!important;background-color:#e9fbfe!important;border-color:#e4f4f9!important}body form div input::placeholder{color:#888;letter-spacing:1px;font-family:inherit}body form div span{margin:4px 6px}body form div span strong{display:inline-block;margin:20px 0 10px;color:#bf5329}body form button{width:100%;height:55px;line-height:55px;font-size:18px;text-align:center;transition:all .2s ease-in-out;background-color:#489be0;color:#fff;border-color:transparent;border-width:0;font-family:inherit;cursor:pointer}body form button:hover{background-color:#3a94e0}body form button:focus{outline-width:0}
    </style>
</head>
<body>
<h1>Sign in to your account</h1>
<form method="POST" action="{{ route('login') }}">
    {{ csrf_field() }}

    <div>
        <input id="email" placeholder="Username" type="email" name="email" value="{{ old('email') }}" required autofocus>

        @if ($errors->has('email'))
            <span class="help-block">
                <strong>{{ $errors->first('email') }}</strong>
            </span>
        @endif
    </div>

    <div>
        <input id="password" placeholder="Password" type="password" name="password" required>

        @if ($errors->has('password'))
            <span class="help-block">
                <strong>{{ $errors->first('password') }}</strong>
            </span>
        @endif
    </div>

    <button type="submit">
        Sign in
    </button>
</form>
<script src="{{ version('/assets/js/manifest.js') }}"></script>
<script src="{{ version('/assets/js/vendor.js') }}"></script>
<script src="{{ version('/assets/js/app.js') }}"></script>
</body>
</html>
