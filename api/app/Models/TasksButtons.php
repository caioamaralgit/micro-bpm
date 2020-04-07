<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TasksButtons extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name', 'class', 'task_id'
    ];

    public function task() 
    {
        return $this->belongsTo(Tasks::class, 'task_id');
    }

    public function nextTask() 
    {
        return $this->hasOne(Tasks::class, 'id', 'next_task_id');
    }
}
