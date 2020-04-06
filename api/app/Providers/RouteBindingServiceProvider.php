<?php

namespace App\Providers;

use mmghv\LumenRouteBinding\RouteBindingServiceProvider as BaseServiceProvider;

class RouteBindingServiceProvider extends BaseServiceProvider
{
    /**
     * Boot the service provider
     */
    public function boot()
    {
        // The binder instance
        $binder = $this->binder;

        // Here we define our bindings
        $binder->bind('flow', 'App\Models\Flows');
        $binder->bind('task', 'App\Models\Tasks');

        $binder->compositeBind(['task', 'button'], function($taskId, $buttonId) {
            $task = \App\Models\Tasks::findOrFail($taskId);
            $button = $task->buttons()->findOrFail($buttonId);

            return [$task, $button];
        });

    }
} 
