<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('description', 2000);
            $table->char('type', 1)->default('I');
            $table->unsignedInteger('flow_id');

            $table->foreign('flow_id')->references('id')->on('flows')->name('fk_flow_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
