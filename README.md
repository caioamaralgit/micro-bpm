# Micro BPM

Micro BPM is a sample of how to integrate a web front built in [ReactJS][1] with an API built with [Lumen][2], simulating a BPM tool. It uses a MySQL database by default.

Some of the concepts used in the project:
* **Isolated backend:** PHP API built using Lumen Framework, a "light version" of Laravel Framework.
* **ORM management:** The application talks to the database through a ORM manager, called Eloquent. It handle the tables as entities, reducing the work involved in communicating with the database.
* **Nested resources routing:** Some of the resources only make sense within the context of another resource, so it was necessary to nest some routes.
* **Single Page Application:** ReactJS provides a SPA approach, eliminating the need to reload the application whenever the user accesses another resource.
* **Lazy Loading:** The application loads only the information necessary for what the user needs, avoiding loading massive data and overloading the API.
* **Atomic Design:** The frontend was built based on Atomic Design, which tries to reduce all components into as small parts as possible, and finally combine then into larger molecules and particles. This significantly reduces rework on larger projects.
* **Docker environment:** Docker provides an easy way to deploy the application. Through Docker Compose, all the necessary configuration and enviroment are deployed and you can run app.

### Project context

The project was made within the following use case:
> As user, I want to create, edit and delete tasks which will be used in the workflows. For each task I want to register:
> * Title
> * Description
> * Type
>   * Opening
>   * Intermediate
>   * Ending
> 
> For each task I would like also to create, edit and delete buttons to proceed to the next task. The buttons must have:
> * Name
> * Target task (Provide the tasks already registered in the previous step)

### Running the project

First clone the project, and enter the folder.

```shell
git clone https://github.com/caioamaralgit/micro-bpm.git
cd micro-bpm
```

After that, you need to create a .env file in the `.docker` and `api` folders. You can use the default config if you want:

```shell
cp .docker/.env.example .docker/.env
cp api/.env.example api/.env
```

Now you have to build and run the docker containers. Make sure that the port 80 is free. It might take a while.

```shell
cd .docker
docker-compose build --no-cache
docker-compose up
```
*(Some errors may appear, because MySQL container takes a while to start. You just need to wait MySQL gets ready, then PHP container will create the database. It's reported in [issue #4](https://github.com/caioamaralgit/micro-bpm/issues/4))*

Finally, you can access the app through the link [http://localhost][3].


### Issues and enhancements

There are many things to do in the project. You can follow the identified issues and future improvements in the [issues section][4]. Suggestions are welcome.


[1]: https://github.com/facebook/react
[2]: https://github.com/laravel/lumen
[2]: http://localhost
[3]: https://github.com/caioamaralgit/micro-bpm/issues
