<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {

    $router->get('roles', 'RolesController@index');

    $router->group(['prefix' => 'flows'], function () use ($router) {
        $router->get('/', 'FlowsController@index');
        
        $router->post('/', 'FlowsController@store');

        $router->put('{flow}', 'FlowsController@update');
    });

    $router->group(['prefix' => 'tasks'], function () use ($router) {
        $router->get('/', 'TasksController@index');

        $router->post('/', 'TasksController@store');

        $router->put('{task}', 'TasksController@update');

        $router->delete('{task}', 'TasksController@delete');
    });
});
