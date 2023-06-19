---
title: Workers
updated: 2021-05-11
---

**Last updated 11th May 2021**



## Objective  

Every application may also define zero or more worker instances.  A worker instance runs as its own container independently of the web instance and has no Nginx instance running.  The router service cannot direct public requests to it, either, so running your own web server on a worker is not useful.

A worker instance is the exact same code and compilation output as a web instance.  The container image is built only once, and then deployed multiple times if needed.  That is, the `build` hook and `dependencies` may not vary from one instance to another.  What may vary is how the container is then configured and how resources are allocated.

Worker instances are well suited for background tasks such as queue workers, updating indexes, or for running periodic reporting tasks that are too long to make sense as a cron job.  (Although those should often be broken up into queue tasks.)

A basic, common worker configuration could look like this:

```yaml
workers:
    queue:
        size: S
        commands:
            start: |
                ./worker.sh
```

That defines a single worker named `queue`, which will be a "small" container, and will run the command `./worker.sh` on startup.  If `worker` ever exits it will be automatically restarted.

Any number of workers may be defined with their own distinct name, subject to available resources on your plan. For resource allocation reasons, using workers in your project requires a Medium plan or larger.

## Accessing the Worker Container

Like with any other application container Web PaaS allows you to connect to the worker instance through SSH to inspect logs and interact with it.

Using the WebPaas CLI you would use the `--worker` switch, like so:

```bash
webpaas ssh --worker=queue
```

To output the SSH command you can use:

```bash
webpaas ssh --worker=queue --pipe
```

You will see the url is the name of the worker added to the user name after the application name part of the SSH url preceded by a double dash (`--`).

For example given a project with id `3seb7f2j6ogbm` you would connect to its master environment for an app called `app` with a url such as:

```bash
ssh 3seb7f2j6ogbm-master-7rqtwti--app@ssh.us-2.platform.sh
```

To connect to a worker called `queue` (as in the example above) you would use an SSH url that would look as follows:

```bash
ssh 3seb7f2j6ogbm-master-7rqtwti--app--queue@ssh.us-2.platform.sh
```

## Stopping a worker

If a worker instance needs to be updated during a new deployment, a `SIGTERM` signal will first be sent to the worker process to allow it to shut down gracefully.  If your worker process cannot be interrupted mid-task, make sure it reacts to `SIGTERM` to pause its work gracefully.

If the process is still running after 15 seconds, a `SIGKILL` message will be sent that force-terminates the worker process, allowing the container to be shut down and restarted.

## Workers vs Cron

Both worker instances and cron tasks address similar use cases: They both address out-of-band work that an application needs to do but that should not or cannot be done as part of a normal web request.  They do so in different ways, however, and so are fit for different use cases.

A Cron job is well suited for tasks when:

* They need to happen on a fixed schedule, not continually.
* The task itself is not especially long, as a running cron job will block a new deployment.
* Or it is long, but can be easily divided into many small queued tasks.
* A delay between when a task is registered and when it actually happens is acceptable.

A dedicated worker instance is a better fit if:

* Tasks should happen "now", but not block a web request.
* Tasks are large enough that they risk blocking a deploy, even if they are subdivided.
* The task in question is a continually running process rather than a stream of discrete units of work.

The appropriateness of one approach over the other also varies by language; single-threaded languages would benefit more from either cron or workers than a language with native multi-threading, for instance.  If a given task seems like it would run equally well as a worker or as a cron, cron will generally be more efficient as it does not require its own container.

## Commands

The `commands` key defines the command to launch the worker application.  For now there is only a single command, `start`, but more will be added in the future.  The `commands.start` property is required.

The `start` key specifies the command to use to launch your worker application.  It may be any valid shell command, although most often it will run a command in your application in the language of your application.  If the command specified by the `start` key terminates it will be restarted automatically.

Note that [`deploy` and `post_deploy` hooks](/pages/web/web-paas/configuration-app/build), as well as [`cron` commands](/pages/web/web-paas/configuration-app/cron), will run only on the [`web`](/pages/web/web-paas/configuration-app/web) container, not on workers.

## Inheritance

Any top-level definitions for [`size`](/pages/web/web-paas/configuration-app/size), [`relationships`](/pages/web/web-paas/configuration-app/relationships), [`access`](/pages/web/web-paas/configuration-app/access), [`disk` and `mount`](/pages/web/web-paas/configuration-app/storage), and [`variables`](/pages/web/web-paas/configuration-app/variables) will be inherited by every worker, unless overridden explicitly.

That means, for example, that the following two `.platform.app.yaml` definitions produce identical workers.

```yaml
name: app

type: python:3.5

disk: 256
mounts:
    test:
        source: local
        source_path: test

relationships:
    database: 'mysqldb:mysql'

workers:
    queue:
        commands:
            start: |
                python queue-worker.py
    mail:
        commands:
            start: |
                python mail-worker.py
```

```yaml
name: app

type: python:3.5

workers:
    queue:
        commands:
            start: |
                python queue-worker.py
        disk: 256
        mounts:
            test:
                source: local
                source_path: test
        relationships:
            database: 'mysqldb:mysql'
    mail:
        commands:
            start: |
                python mail-worker.py
        disk: 256
        mounts:
            test:
                source: local
                source_path: test
        relationships:
            database: 'mysqldb:mysql'
```

In both cases, there will be two worker instances named `queue` and `mail`.  Both will have access to a MySQL/MariaDB service defined in `services.yaml` named `mysqldb` through the `database` relationship.  Both will also have their own separate, independent local disk mount at `/app/test` with 256 MB of allowed space.

## Customizing a worker

The most common properties to set in a worker to override the top-level settings are `size` and `variables`.  `size` lets you allocate fewer resources to a container that will be running only a single background process (unlike the web site which will be handling many requests at once), while `variables` lets you instruct the application to run differently as a worker than as a web site.

For example, consider this `.platform.app.yaml`:

```yaml
name: app

type: "python:3.7"

disk: 2048

hooks:
   build: |
       pip install -r requirements.txt
       pip install -e .
       pip install gunicorn

relationships:
    database: 'mysqldb:mysql'
    messages: 'rabbitqueue:rabbitmq'

variables:
    env:
        type: 'none'

web:
    commands:
        start: "gunicorn -b $PORT project.wsgi:application"
    variables:
        env:
            type: 'web'
    mounts:
        uploads:
            source: local
            source_path: uploads
    locations:
         "/":
             root: ""
             passthru: true
             allow: false
         "/static":
             root: "static/"
             allow: true

workers:
    queue:
        size: 'M'
        commands:
            start: |
                python queue-worker.py
        variables:
            env:
                type: 'worker'
        disk: 512
        mounts:
            scratch:
                source: local
                source_path: scratch



    mail:
        size: 'S'
        commands:
            start: |
                python mail-worker.py
        variables:
            env:
                type: 'worker'
        disk: 256
        mounts: {}
        relationships:
            emails: 'rabbitqueue:rabbitmq'
```

There's a lot going on here, but it's all reasonably straightforward.  This configuration will take a single Python 3.7 code base from your repository, download all dependencies in `requirements.txt`, and the install Gunicorn.  That artifact (your code plus the downloaded dependencies) will be deployed as three separate container instances, all running Python 3.7.

The `web` instance will start a gunicorn process to serve a web application.

* It will run the gunicorn process to serve web requests, defined by the `project/wsgi.py` file which contains an `application` definition.
* It will have an environment variable named `TYPE` with value `web`.
* It will have a writable mount at `/app/uploads` with a maximum space of 2048 MB.
* It will have access to both a MySQL database and a RabbitMQ server, both of which are defined in `services.yaml`.
* Web PaaS will automatically allocate resources to it as available on the plan, once all fixed-size containers are allocated.

The `queue` instance will be a worker that is not web-accessible.

* It will run the `queue-worker.py` script, and restart it automatically if it ever terminates.
* It will have an environment variable named `TYPE` with value `worker`.
* It will have a writable mount at `/app/scratch` with a maximum space of 512 MB.
* It will have access to both a MySQL database and a RabbitMQ server, both of which are defined in `services.yaml` (because it doesn't specify otherwise).
* It will have "Medium" levels of CPU and RAM allocated to it, always.

The `mail` instance will be a worker that is not web-accessible.

* It will run the `mail-worker.py` script, and restart it automatically if it ever terminates.
* It will have an environment variable named `TYPE` with value `worker`.
* It will have no writable file mounts at all.
* It will have access only to the RabbitMQ server, through a different relationship name than on the `web` instance.  It will have no access to MySQL whatsoever.
* It will have "Small" levels of CPU and RAM allocated to it, always.

This way, the web instance has a large upload space, the queue instance has a small amount of scratch space for temporary files, and the mail instance has no persistent writable disk space at all as it doesn't need it.  The mail instance also does not need any access to the SQL database so for security reasons it has none.  The workers have known fixed sizes, while web can scale to as large as the plan allows.  Each instance can also check the `TYPE` environment variable to detect how it's running and, if appropriate, vary its behavior accordingly.
