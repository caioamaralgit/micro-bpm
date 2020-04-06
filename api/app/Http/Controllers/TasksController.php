<?php

namespace App\Http\Controllers;

use App\Models\Tasks;

class TasksController extends Controller
{
    public function index() {
        $tasks = new Tasks();
        return $tasks->all();
    }
}
