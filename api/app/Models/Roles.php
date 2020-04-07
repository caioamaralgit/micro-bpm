<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title', 'description',
    ];

    public function tasks() {
        return $this->belongsToMany(Tasks::class, 'tasks_roles', 'role_id', 'task_id');
    }
}
