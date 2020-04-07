<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use App\Models\TasksButtons;
use Illuminate\Http\Request;

class TasksButtonsController extends Controller
{
    public function index(Tasks $task) {
        $buttons = $task->buttons()->with('nextTask')->get();

        return $buttons;
    }

    public function store(Request $request, Tasks $task) {
        $button = TasksButtons::create([
            "name" => $request->name,
            "class" => $request->class,
            "task_id" => $task->id,
            "next_task_id" => $request->next_task_id
        ]);

        return [ "success" => true, "data" => $button ];
    }

    public function update(Request $request, Tasks $task, TasksButtons $button) {
        $button->name = $request->name;
        $button->class = $request->class;
        $button->next_task_id = $request->next_task_id;
        $button->save();

        return [ "success" => true, "data" => $button ];
    }

    public function delete(Tasks $task, TasksButtons $button) {
        $button->delete();

        return [ "success" => true ];
    }
}
