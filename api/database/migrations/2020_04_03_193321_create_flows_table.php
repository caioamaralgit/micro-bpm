<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlowsTable extends Migration
{
    public function up()
    {
        Schema::create('flows', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('description', 2000);
            $table->unsignedInteger('starting_task_id')->nullable();

            $table->foreign('starting_task_id')->references('id')->on('tasks')->name('fk_starting_task_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('flows');
    }
}
