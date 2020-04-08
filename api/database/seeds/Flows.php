<?php

use Illuminate\Database\Seeder;

class Flows extends Seeder
{
    public function run()
    {
        DB::table('flows')->delete();
        DB::table('flows')->insert([
            ["id" => 1, 'title' => 'IT Suport', 'description' => 'Need suport to fix some computer error or change device.'],
            ["id" => 2, 'title' => 'Request vacations', 'description' => 'General employee vacation request.'],
            ["id" => 3, 'title' => 'Blank Flow', 'description' => 'An empty flow'],
        ]);
    }
}
