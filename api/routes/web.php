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

/**
 * Set route groups inside variables
 */
$buttons = function () use ($router) {
    $router->get('/', 'TasksButtonsController@index');

    $router->post('/', 'TasksButtonsController@store');

    $router->put('{button}', 'TasksButtonsController@update');

    $router->delete('{button}', 'TasksButtonsController@delete');
};

$flows = function () use ($router) {
    $router->get('/', 'FlowsController@index');
    
    $router->post('/', 'FlowsController@store');

    $router->put('{flow}', 'FlowsController@update');

    $router->delete('{flow}', 'FlowsController@delete');
};

$tasks = function () use ($router, $buttons) {
    $router->get('/', 'TasksController@index');

    $router->post('/', 'TasksController@store');

    $router->put('{task}', 'TasksController@update');

    $router->delete('{task}', 'TasksController@delete');

    $router->group(['prefix' => '{task}/buttons'], $buttons);
};

/**
 * Define routes
 */
$router->group(['prefix' => 'api'], function () use ($router, $flows, $tasks) {

    $router->get('roles', 'RolesController@index');

    $router->group(['prefix' => 'flows'], $flows);

    $router->group(['prefix' => 'tasks'], $tasks);
});