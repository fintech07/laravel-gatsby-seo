<?php
namespace App\Http\Controllers\Web;
use Contentful\Delivery\Client as DeliveryClient;

class Sitemap extends Base
{

    private $client;
    const THEME_OPTION = '56h552SD6oGyUQa4mweQau';
    
    /**
     * Product constructor.
     */
    public function __construct(DeliveryClient $client)
    {
        $this->client = $client;
        $this->robots();
    }

    public function index()
    {
        $urls = [];

        $client = new DeliveryClient(config('contentful.token'),config('contentful.space'));
        
        try {
            
            /*get projects*/
            $queryProject = new \Contentful\Delivery\Query(); 
            $queryProject->setContentType('project');
            $entriesProjects = $client->getEntries($queryProject);
            
            /*get pages*/
            $queryPage = new \Contentful\Delivery\Query(); 
            $queryPage->setContentType('pageContent');
            $entriesPages = $client->getEntries($queryPage);
            
            foreach ($entriesProjects as $project) {
                $urls[] = env('APP_URL') . "/project/" . $project->getSlug();
            }
            
            foreach ($entriesPages as $page) {
                $urls[] = env('APP_URL') . "/page/" . $page->getSlug();
            }

            return response()->view('web.sitemap.index', [
                'urls' => $urls,
                'home' => env('APP_URL')
            ])->header('Content-Type', 'text/xml');

        } catch (\Contentful\Core\Exception\NotFoundException $exception) {
            // Entry does not exist
        }
    }

    public function robots(){

        $client = new DeliveryClient(config('contentful.token'),config('contentful.space'));

        try {

            $entry = $client->getEntry(static::THEME_OPTION);
            $content = $entry->robotsTxtGeneral;

            if (!$entry) {
                abort(404);
            }

            file_put_contents(public_path() . '/robots.txt', $content);

        } catch (\Contentful\Core\Exception\NotFoundException $exception) {
            // Entry does not exist
        }

    }

}
