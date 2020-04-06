<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flows extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title', 'description', 'starting_task_id'
    ];

    public function startingTask() 
    {
        return $this->hasOne(Tasks::class, 'id', 'starting_task_id');
    }

    public function tasks() 
    {
        return $this->hasMany(Tasks::class, 'flow_id');
    }
}
