<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksRolesTable extends Migration
{
    public function up()
    {
        Schema::create('tasks_roles', function (Blueprint $table) {
            $table->unsignedInteger('task_id')->nullable();
            $table->unsignedInteger('role_id')->nullable();

            $table->foreign('role_id')->references('id')->on('roles')->name('fk_role_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tasks_roles');
    }
}
