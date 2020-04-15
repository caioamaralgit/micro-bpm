<?php

namespace App\Http\Controllers;

use App\Models\Flows;
use Illuminate\Http\Request;

class FlowsController extends Controller
{
    public function index() {
        $flows = Flows::with(['tasks.roles'])->get();
        return $flows;
    }

    public function store(Request $request) {
        $flow = Flows::create([
            "title" => $request->title,
            "description" => $request->description
        ]);

        return [ "success" => true, "data" => $flow->load('tasks.roles') ];
    }

    public function update(Request $request, Flows $flow) {
        if (!$request->title || !$request->description) {
            return [ "success" => false, "error" => "Missing field" ];
        }

        $flow->title = $request->title;
        $flow->description = $request->description;
        $flow->save();

        return [ "success" => true, "data" => $flow->load('tasks.roles')];
    }

    public function delete(Flows $flow) {
        $flow->delete();

        return [ "success" => true ];
    }
}
