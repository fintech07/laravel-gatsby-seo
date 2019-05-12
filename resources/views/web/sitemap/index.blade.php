@extends('web.layout.sitemap')

@section('content')
    <?php $date = date('Y-m-d'); ?>

    <urlset 
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        @if(!empty($urls))
            <url>
                <loc>{!! $home !!}</loc>
                <lastmod>{{$date}}</lastmod>
            </url>
            @foreach ($urls as $url)
                <url>
                    <loc>{!! $url !!}</loc>
                    <lastmod>{{$date}}</lastmod>
                </url>
            @endforeach
        @endif
    </urlset>
@stop
