<?php

namespace App\Http\Controllers;

use App\Models\Flows;

class FlowsController extends Controller
{
    public function index() {
        $flows = new Flows();
        return $flows->all();
    }
}
