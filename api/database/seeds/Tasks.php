<?php

use Illuminate\Database\Seeder;

class Tasks extends Seeder
{
    public function run()
    {
        DB::table('tasks')->delete();
        DB::table('tasks')->insert([
            ["id" => 1, 'title' => 'Request IT Support', 'description' => 'Type your problem with details.', 'type' => 'S', 'flow_id' => 1],
            ["id" => 2, 'title' => 'Aswer Request', 'description' => 'Send step-by-step instructions and answers.', 'type' => 'I', 'flow_id' => 1],
            ["id" => 3, 'title' => 'Review Request Response', 'description' => 'Check if the problem was solved.', 'type' => 'I', 'flow_id' => 1],
            ["id" => 4, 'title' => 'Get Advised', 'description' => 'Type down the final details.', 'type' => 'E', 'flow_id' => 1],
            ["id" => 5, 'title' => 'Write Vacation Request', 'description' => 'Formalize your vacation request.', 'type' => 'S', 'flow_id' => 2],
            ["id" => 6, 'title' => 'Check company availability', 'description' => 'Check the company budget.', 'type' => 'I', 'flow_id' => 2],
        ]);

        DB::table('tasks_roles')->delete();
        DB::table('tasks_roles')->insert([
            ["task_id" => 1, "role_id" => 1],
            ["task_id" => 2, "role_id" => 2],
            ["task_id" => 3, "role_id" => 1],
            ["task_id" => 4, "role_id" => 2],
            ["task_id" => 5, "role_id" => 1],
            ["task_id" => 6, "role_id" => 3],
        ]);
    }
}
