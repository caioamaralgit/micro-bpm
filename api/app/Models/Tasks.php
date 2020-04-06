<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title', 'description', 'type', 'flow_id'
    ];

    public function flow() 
    {
        return $this->belongsTo(Flows::class, 'flow_id');
    }

    public function buttons() 
    {
        return $this->hasMany(TasksButtons::class, 'task_id');
    }
}
