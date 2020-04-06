<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use App\Models\TasksButtons;
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

        foreach ($request->buttons as $button) {
            $nextTaskId = $button["next_task_id"] ?? null;

            TasksButtons::create([
                "name" => $button["name"],
                "class" => $button["class"],
                "task_id" => $task["id"],
                "next_task_id" => $nextTaskId
            ]);
        }

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
