<?php
namespace App\Http\Controllers\Web;
use Contentful\Delivery\Client as DeliveryClient;
use DebugBar\DebugBar;

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
                $metaRobort = $project->getMetaRobotsProject();
                if (strpos($metaRobort, 'NOINDEX') === false) {
                    $urls[] = env('APP_URL') . "/project/" . $project->getSlug();
                } else {
                    //error_log("noindex meta tag");
                }
            }

            foreach ($entriesPages as $page) {
                //$metaRobort = $page->getMetaRobortsPage();
                //if (strpos($metaRobort, 'NOINDEX') === false) {
                    $urls[] = env('APP_URL') . "/page/" . $page->getSlug();
                //}
            }

            $content = '<urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

            $date = date('Y-m-d');

            if (!empty($urls)) {
                $content .= '<url>
                                <loc>' . env('APP_URL') . '</loc>
                                <lastmod>' . $date . '</lastmod>
                            </url>';
                foreach ($urls as $url) {
                    $content .=
                        '<url>
                            <loc>' . $url . '</loc>
                            <lastmod>' . $date . '</lastmod>
                        </url>';
                }
            }

            $content .= '</urlset>';

            file_put_contents(public_path() . '/sitemap.xml', $content);

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
