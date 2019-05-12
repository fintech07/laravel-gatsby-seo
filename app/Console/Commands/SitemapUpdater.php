<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\Web\Sitemap as Sitemap;

class SitemapUpdater extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'SitemapUpdater:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update sitemap.xml with robot.txt daily';


    private $sitemap;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Sitemap $sitemap)
    {
        parent::__construct();
        $this->sitemap = $sitemap;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        error_log("run sitemap updater");
        $this->sitemap->index();
    }
}
