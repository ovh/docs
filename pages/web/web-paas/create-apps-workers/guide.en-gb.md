---
title: Work with workers
slug: create-apps-workers
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

Workers are instances of your code that aren't open to connections from other apps or services or the outside world.
They're good for handling background tasks.
See how to [configure a worker](./app-reference.md#workers) for your app.

Note that to have enough resources to support a worker and a service, you need at least a [{{< partial "plans/multiapp-plan-name" >}} plan](../administration/pricing/_index.md#multiple-apps-in-a-single-project).

## Access the worker container

Like with any other application container,
{{< vendor/name >}} allows you to connect to the worker instance through SSH to inspect logs and interact with it.

Use the `--worker` switch in the {{< vendor/name >}} CLI, like so:

```bash
webpaas ssh --worker=queue
```

## Stopping a worker

If a worker instance needs to be updated during a new deployment,
a `SIGTERM` signal is first sent to the worker process to allow it to shut down gracefully.
If your worker process can't be interrupted mid-task, make sure it reacts to `SIGTERM` to pause its work gracefully.

If the process is still running after 15 seconds, a `SIGKILL` message is sent that force-terminates the worker process,
allowing the container to be shut down and restarted.

To restart a worker manually, [access the container](#access-the-worker-container) and run the following commands:

```bash
sv stop app
sv start app
```

## Workers vs cron jobs

Worker instances don't run cron jobs.
Instead, both worker instances and cron tasks address similar use cases.
They both address out-of-band work that an application needs to do
but that shouldn't or can't be done as part of a normal web request.
They do so in different ways and so are fit for different use cases.

A cron job is well suited for tasks when:

* They need to happen on a fixed schedule, not continually.
* The task itself isn't especially long, as a running cron job blocks a new deployment.
* It's long but can be divided into many small queued tasks.
* A delay between when a task is registered and when it actually happens is acceptable.

A dedicated worker instance is a better fit if:

* Tasks should happen "now", but not block a web request.
* Tasks are large enough that they risk blocking a deploy, even if they're subdivided.
* The task in question is a continually running process rather than a stream of discrete units of work.

The appropriateness of one approach over the other also varies by language;
single-threaded languages would benefit more from either cron or workers than a language with native multi-threading, for instance.
If a given task seems like it would run equally well as a worker or as a cron,
cron is generally more efficient as it doesn't require its own container.

## Commands

The `commands` key defines the command to launch the worker application.
For now there is only a single command, `start`, but more will be added in the future.
The `commands.start` property is required.

The `start` key specifies the command to use to launch your worker application.
It may be any valid shell command, although most often it runs a command in your application in the language of your application.
If the command specified by the `start` key terminates, it's restarted automatically.

Note that [`deploy` and `post_deploy` hooks](./hooks/_index.md) as well as [`cron` commands](./app-reference.md#crons)
run only on the [`web`](./app-reference.md#web) container, not on workers.

## Inheritance

Any top-level definitions for [`size`](./app-reference.md#sizes), [`relationships`](./app-reference.md#relationships),
[`access`](./app-reference.md#access), [`disk`](./app-reference.md), [`mount`](./app-reference.md#mounts), and [`variables`](./app-reference.md#variables)
are inherited by every worker, unless overridden explicitly.

That means, for example, that the following two `{{< vendor/configfile "app" >}}` definitions produce identical workers.

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

In both cases, there are two worker instances named `queue` and `mail`.
Both have access to a MySQL/MariaDB service defined in `{{< vendor/configfile "services" >}}` named `mysqldb` through the `database` relationship.
Both also have their own separate, independent local disk mount at `/app/test` with 256 MB of allowed space.

## Customizing a worker

The most common properties to set in a worker to override the top-level settings are `size` and `variables`.
`size` lets you allocate fewer resources to a container that is running only a single background process
(unlike the web site which is handling many requests at once),
while `variables` lets you instruct the application to run differently as a worker than as a web site.

For example, consider the following configuration:

```yaml {configFile="services"}
db:
  type: "mariadb:10.4"
  disk: 2048

rabbitqueue:
    type: rabbitmq:3.11
    disk: 512
```

```yaml {configFile="app"}
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

There's a lot going on here, but it's all reasonably straightforward.
The configuration in `{{< vendor/configfile "app" >}}` takes a single Python 3.7 code base from your repository,
downloads all dependencies in `requirements.txt`, and then installs Gunicorn.
That artifact (your code plus the downloaded dependencies) is deployed as three separate container instances, all running Python 3.7.

The `web` instance starts a Gunicorn process to serve a web application.

* It runs the Gunicorn process to serve web requests, defined by the `project/wsgi.py` file which contains an `application` definition.
* It has an environment variable named `TYPE` with value `web`.
* It has a writable mount at `/app/uploads` with a maximum space of 2048 MB.
* It has access to both a MySQL database and a RabbitMQ server, both of which are defined in `{{< vendor/configfile "services" >}}`.
* {{< vendor/name >}} automatically allocates resources to it as available on the plan, once all fixed-size containers are allocated.

The `queue` instance is a worker that isn't web-accessible.

* It runs the `queue-worker.py` script, and restart it automatically if it ever terminates.
* It has an environment variable named `TYPE` with value `worker`.
* It has a writable mount at `/app/scratch` with a maximum space of 512 MB.
* It has access to both a MySQL database and a RabbitMQ server,
  both of which are defined in `{{< vendor/configfile "services" >}}` (because it doesn't specify otherwise).
* It has "Medium" levels of CPU and RAM allocated to it, always.

The `mail` instance is a worker that isn't web-accessible.

* It runs the `mail-worker.py` script, and restart it automatically if it ever terminates.
* It has an environment variable named `TYPE` with value `worker`.
* It has no writable file mounts at all.
* It has access only to the RabbitMQ server, through a different relationship name than on the `web` instance.
  It has no access to MySQL.
* It has "Small" levels of CPU and RAM allocated to it, always.

This way, the web instance has a large upload space, the queue instance has a small amount of scratch space for temporary files,
and the mail instance has no persistent writable disk space at all as it doesn't need it.
The mail instance also doesn't need any access to the SQL database so for security reasons it has none.
The workers have known fixed sizes, while web can scale to as large as the plan allows.
Each instance can also check the `TYPE` environment variable to detect how it's running
and, if appropriate, vary its behavior accordingly.
