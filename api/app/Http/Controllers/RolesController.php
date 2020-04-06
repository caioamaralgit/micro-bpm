<?php

namespace App\Http\Controllers;

use App\Models\Roles;

class RolesController extends Controller
{
    public function index() {
        $roles = new Roles();
        return $roles->all();
    }
}
