<?php

use Illuminate\Database\Seeder;

class TasksButtons extends Seeder
{
    public function run()
    {
        DB::table('tasks_buttons')->delete();
        DB::table('tasks_buttons')->insert([
            ["id" => 1, 'name' => 'Request', 'class' => 'bg-blue-500', 'task_id' => 1, 'next_task_id' => 2],
            ["id" => 2, 'name' => 'Fulfill', 'class' => 'bg-blue-500', 'task_id' => 2, 'next_task_id' => 3],
            ["id" => 3, 'name' => 'Reprove', 'class' => 'bg-red-500', 'task_id' => 3, 'next_task_id' => 2],
            ["id" => 4, 'name' => 'Approve', 'class' => 'bg-green-500', 'task_id' => 3, 'next_task_id' => 4],
            ["id" => 5, 'name' => 'Finish', 'class' => 'bg-green-500', 'task_id' => 4, 'next_task_id' => 0],
            ["id" => 6, 'name' => 'Send', 'class' => 'bg-blue-500', 'task_id' => 5, 'next_task_id' => 6],
        ]);
    }
}
