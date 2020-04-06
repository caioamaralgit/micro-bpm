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

    $router->get('flows', 'FlowsController@index');

    $router->put('flows/{flowId}', function () use ($router) {
        return $router->app->version();
    });

    $router->group(['prefix' => 'tasks'], function () use ($router) {
        $router->get('/', 'TasksController@index');

        $router->post('/', function () use ($router) {
            return $router->app->version();
        });

        $router->put('{taskId}', function () use ($router) {
            return $router->app->version();
        });

        $router->delete('{taskId}', function () use ($router) {
            return $router->app->version();
        });
    });
});
