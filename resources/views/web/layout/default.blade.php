<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset=utf-8>
    <meta http-equiv="content-language" content="vi"/>
    <meta name="language" content="vietnamese"/>
    <meta content="en,vi" http-equiv="Content-Language"/>
    <meta content="IE=edge" http-equiv=X-UA-Compatible>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="google-site-verification" content="7rAvy-mh1fvQQE8sVTyYQBdSTFQ64fjUp7H44nCM7_8" />
    
    <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-touch-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-touch-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-touch-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-touch-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-touch-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-touch-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-touch-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-touch-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon-180x180.png"/>
    <link rel="icon" type="image/png" href="/img/icons/favicon-32x32.png" sizes="32x32"/>
    <link rel="icon" type="image/png" href="/img/icons/favicon-96x96.png" sizes="96x96"/>
    <link rel="icon" type="image/png" href="/img/icons/android-chrome-192x192.png" sizes="192x192"/>
    <link rel="icon" type="image/png" href="/img/icons/favicon-16x16.png" sizes="16x16"/>
    <link rel="stylesheet" href="/css/app.css"/>

    <script src="https://use.typekit.net/sbj4klj.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77795233-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-77795233-1');
    </script>
</head>

<body>
<div id="app">

</div>

@section('footer.script')
    <script src="{{asset('js/app.js')}}" async></script>
@show

</body>
</html>
