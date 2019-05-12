<?php

namespace App\Http\Middleware;

use Closure;

class OldPageRedirector
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Get path name
        $url = $request->path();

        // Redirect olo pages to new pages by redirect map csv file
        // Import redirect map data
        $filename = 'redirect_map.csv';
        $redirects = array();

        // Check if file exist and readable
        if (file_exists($filename) && is_readable($filename)) {
            
            // Read .csv file data
            if (($handle = fopen($filename, 'r')) !== false ) {
                while (($row = fgetcsv($handle, 1000, ',')) !== false) {
                    // Make an array with (key, value)
                    $redirects[$row[0]] = $row[1];
                }
                fclose($handle);
            }

            if (array_key_exists($url, $redirects)){
                return redirect($redirects[$url], 301);
            }
        }

        return $next($request);
    }
}
