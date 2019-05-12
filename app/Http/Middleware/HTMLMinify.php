<?php

namespace App\Http\Middleware;

use Closure;

class HTMLMinify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if(env('HTML_MINIFY') == true){
            $response->setContent($this->minify($response->getContent()));
        }

        return $response;
    }

    private function minify($data)
    {
        $data = preg_replace(array('/<!--(.*)-->/Uis', "/[[:blank:]]+/", "/\/\/\s(.*)\n/"), array('', ' ', ''), $data);

        return str_replace(array("\n", "\r", "\t"), '', $data);
    }

}
