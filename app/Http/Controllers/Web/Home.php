<?php
namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;

class Home extends Controller
{

    public function index()
    {
        return view('web.home.index');
    }
}
