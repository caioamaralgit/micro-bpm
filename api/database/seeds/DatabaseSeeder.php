<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([ 
            Roles::class,
            Flows::class,
            Tasks::class,
            TasksButtons::class
        ]);
    }
}
