<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index() {
        $tasks = new Tasks();
        return $tasks->all();
    }

    public function store(Request $request) {
        $task = Tasks::create([
            "title" => $request->title,
            "description" => $request->description,
            "type" => $request->type,
            "flow_id" => $request->flow_id
        ]);

        return [ "success" => true, "data" => $task ];
    }

    public function update(Request $request, Tasks $task) {
        if (
            !$request->title || 
            !$request->description ||
            !$request->type ||
            !$request->flow_id
        ) {
            return [ "success" => false, "error" => "Missing field" ];
        }

        $task->title = $request->title;
        $task->description = $request->description;
        $task->type = $request->type;
        $task->flow_id = $request->flow_id;
        $task->save();

        return [ "success" => true, "data" => $task ];
    }

    public function delete(Tasks $task) {
        $task->delete();

        return [ "success" => true ];
    }
}
