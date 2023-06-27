---
title: One site or many
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Web PaaS supports running multiple "application containers" in a single project.  That can be extremely powerful in some cases, but if misused can lead to unnecessary maintenance difficulty and excessive costs.

The way to determine what setup is appropriate for your use case is to think of your project as a collection of services, some of which you've written yourself.  That is, put "your code" and "the database" on the same level.  (That is essentially true from the Web PaaS perspective.)  Does your project consist of multiple "your code" pieces, but they all are parts of the same project?  Or are they discrete applications that conceptually exist independently of each other?

## Discrete projects

If your applications are discrete systems that are only incidentally related (such as because you wrote both of them), make them separate projects.  That will provide the most flexible development workflow.  It will also be cheaper, as running multiple applications in a single project requires at least a Medium plan, which costs more than two Standard plans.

Discrete projects are appropriate if:

* You want to deploy new releases of each application independently of the others.
* The projects are for different customers/clients.
* The projects do not need deep internal knowledge of each other's data.
* Different teams will be working on different applications.
* You want to develop true-microservices, where each microservice is fully stand-alone process with its own data.

If you are uncertain how your needs map to projects, it probably means they should be separate, discrete projects.

## Clustered applications

A clustered application is one where your project requires multiple "app services", written by you, but are all part of the same conceptual project.  That is, removing one of the app services would render the others broken.

In a clustered application, you either have [multiple `.platform.app.yaml`](/pages/web/web-paas/configuration-app/multi-app) files in different directories with separate code bases that deploy separately or you have a single application that spawns one or more [worker instances](/pages/web/web-paas/configuration-app/workers) that run background processes.  (See the link for details on how to set those up.)

A Clustered application requires at least a Medium plan.

With a clustered application, you often will not need multiple service instances.  The [MySQL, MariaDB](/pages/web/web-paas/configuration-services/mysql), and [Solr](/pages/web/web-paas/configuration-services/solr) services support defining multiple databases on a single service, which is significantly more efficient than defining multiple services.  [Redis](/pages/web/web-paas/configuration-services/redis), [Memcached](/pages/web/web-paas/configuration-services/memcached),   and [RabbitMQ](/pages/web/web-paas/configuration-services/rabbitmq) natively support multiple bins, or queues, or indexes (the terminology varies) defined by the client application as part of the request so they need no additional configuration on Web PaaS, although they may need application configuration.

Clustered applications are appropriate if:

* You want one user-facing application and an entirely separate admin-facing application that are both operating on the same data.
* You want to have a user-facing application and a separate worker process (either the same code or separate) that handles background tasks.
* You want a single conceptual application written in multiple programming languages, such as a PHP frontend with Node.js background worker.

## Multi-site applications

Some Content Management Systems or other applications support running multiple logical "sites" off of a single code base.  Those will usually work on Web PaaS depending on the configuration details of the application but are generally not recommended.  Often their multi-site logic is dependant on the domain name of the incoming request, which on Web PaaS will vary by branch.  They also often recommend running multiple databases, which while supported just fine on Web PaaS makes the setup process for each site more difficult.

Leveraging multi-site capabilities of an application are appropriate if, and only if:

* There is only a single team working on all of the "sites" involved.
* All "sites" should be updated simultaneously as a single unit.
* Each individual site is relatively low traffic, such that the aggregate traffic is appropriate for your plan size.
* All sites really do use the same codebase with no variation, just different data.

If any of those is not the case, discrete projects will be a better long term plan.
