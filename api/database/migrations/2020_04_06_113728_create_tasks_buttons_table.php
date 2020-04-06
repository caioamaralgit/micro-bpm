<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksButtonsTable extends Migration
{
    public function up()
    {
        Schema::create('tasks_buttons', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('class', 20);
            $table->unsignedInteger('task_id')->nullable();
            $table->unsignedInteger('next_task_id')->nullable();

            $table->foreign('task_id')->references('id')->on('tasks')->name('fk_task_id');
            $table->foreign('next_task_id')->references('id')->on('tasks')->name('fk_next_task_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tasks_buttons');
    }
}
