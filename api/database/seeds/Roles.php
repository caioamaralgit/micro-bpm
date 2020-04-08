<?php

use Illuminate\Database\Seeder;

class Roles extends Seeder
{
    public function run()
    {
        DB::table('roles')->delete();
        DB::table('roles')->insert([
            ["id" => 1, 'title' => 'general', 'description' => 'Includes all company colaborators.'],
            ["id" => 2, 'title' => 'it', 'description' => 'All colaborators which works in IT area.'],
            ["id" => 3, 'title' => 'finances', 'description' => 'Finance area employees.'],
        ]);
    }
}
