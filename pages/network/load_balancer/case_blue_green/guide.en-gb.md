---
title: 'Deploying a blue-green infrastructure'
excerpt: 'This guide will show you how to deploy a blue-green infrastructure with the OVHcloud Load Balancer'
updated: 2025-10-24
---

## Objective

This guide demonstrates a specific use case for the OVHcloud Load Balancer: the configuration of a service to facilitate seamless traffic switching between production and new production candidate environments, also called a **blue-green infrastructure**.

With a blue-green infrastructure, you can stop your infrastructure from experiencing any downtime. The main benefit of this deployment type is that you can prepare updates and/or maintenance in an environment that is isolated from your production environment. This way, you can test your changes before they are put into production, undo them quickly if you detect any faults, and do all of this with virtually zero downtime.

**This guide will show you how to deploy a blue-green infrastructure with the OVHcloud Load Balancer.**

## Requirements

To deploy a blue-green infrastructure, you need the following components:

- An [OVHcloud Load Balancer](/links/network/load-balancer) service
- Access to the [OVHcloud Control Panel](/links/manager)
- Two [dedicated servers](/links/bare-metal/bare-metal), one hosting your production environment, and a similarly configured server hosting your staging environment

## Instructions

### Scenario

You have an infrastructure designed to host your live website.

This environment hosts the website’s code, in addition to all essential applications (web servers, database servers, etc.). You need to update your applications and/or your code on a regular basis. You want to be able to test your updates without impacting the website's availability or functionality for end-users.

One way to achieve this is by deploying a blue-green infrastructure.

The principle of a blue-green deployment involves being able to switch easily from a development infrastructure to a production infrastructure, and vice versa. This switch must be done in a way that is transparent for your users. To do this, public traffic will be routed to the standard HTTP port 80 for access to the production infrastructure, and a non-standard port, such as 8888, will be used to access the development infrastructure.

## Deploy the infrastructures

In this scenario, your Load Balancer service plays a central role. It is the element you use to expose your two infrastructures (production and development) to different users at the same time.

The production infrastructure can be accessed by your customers on the standard HTTP service (port 80), and your development infrastructure can be accessed by developers and admins on the non-standard port 8888.

During the initial setup phase, roles are provisionally assigned to each infrastructure component. **Infrastructure A** serves as the initial production environment, while **Infrastructure B** serves as the staging environment. At this stage, we will consider them to be similar to one another.

A blue-green infrastructure involves switching from infrastructure A to infrastructure B, once infrastructure B has been fully updated and validated. The Load Balancer will manage this switch.

The diagram below gives a general idea of the architecture:

![General diagram of blue-green architecture](images/scheme.png){.thumbnail}

### Infrastructure A

This infrastructure is made up of a server farm that will later be associated with a front-end of your Load Balancer. This farm will expose an HTTP, TCP or UDP service to the front-end. It also balances loads by sending the front-end’s incoming traffic to the servers. For more details on the role of the various components of the OVHcloud Load Balancer service, please refer to the following guide: [Introduction to the OVHcloud Load Balancer](/pages/network/load_balancer/use_presentation).

In our scenario, we will declare a farm of servers for the HTTP service. Please note that you can create as many farms (as well as TCP and/or UDP services) as are required for your final service to be exposed to your customers.

#### Via the OVHcloud Control Panel

![Add a new HTTP farm dedicated to infrastructure A](images/ferme1.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> 

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

With the additional calls listed below, you can list, modify and delete your server farms respectively:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm
> 

Link a dedicated server to your farm if it hosts your production infrastructure. The service is exposed to the front-end via the server’s port 8080. Note that you may LINK one or more servers with each farm (for example, to balance the load or offer higher fault tolerance).

#### Via the OVHcloud Control Panel

![Add a new server to the farm HTTP A](images/serveur1.png){.thumbnail}

![Enter the HTTP A server’s configuration](images/server1.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

|Setting|Required|Meaning|Example|
|---|---|---|---|
|serviceName|Required|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|farmId|Required|Your server farm ID|77212|
|address|Required|Your server's IPv4 address|10.10.1.100|
|displayName||The name of the server associated with your farm|HTTP A server|
|port||The server port associated with your farm|8080|

With the additional calls listed below, you can list, modify and delete your servers respectively:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

### Infrastructure B

Functionally, this second infrastructure is identical to the first. It is also composed of a server farm that will later be associated with a second front-end of your Load Balancer. This server farm exposes the same service to the front-end as the first server farm. This service is supplied on the servers by port 8080.

Deploy the server farm for the HTTP service (and/or any other TCP or UDP services required for your final service to be exposed to your customers).

#### Via the OVHcloud Control Panel

![Add a new HTTP farm dedicated to infrastructure B](images/ferme2.png){.thumbnail}

![Create a second farm dedicated to infrastructure B](images/backend2.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> 

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

Associate a server with your farm. Here, it involves one or more physical servers hosting your development infrastructure.

#### Via the OVHcloud Control Panel

![Add a new server to the farm HTTP B](images/serveur2.png){.thumbnail}

![Enter the HTTP B server’s configuration](images/server2.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

|Setting|Required|Meaning|Example|
|---|---|---|---|
|serviceName|Required|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|farmId|Required|Your server farm ID|77213|
|address|Required|Your server's IPv4 address|10.10.2.100|
|displayName||The name of the server associated with your farm|HTTP B server|
|port||The server port associated with your farm|8080|

At this stage, here is the configuration status for your two farms:

![Farm configuration](images/farms.png){.thumbnail}

## Front-ends

The magic of blue-green deployment lies in the configuration of your front-ends. At this stage, we have configured two functionally identical infrastructures. For both infrastructures, you have declared one or more server farms, each with their own set of associated servers.

To switch simply from one infrastructure to another, we will use front-ends.

To do this, we need to declare two front-ends. The first one will give you access to your production infrastructure, whereas the second will give you access to your development infrastructure. You can control access to one infrastructure or the other using the ports you expose to your customers.

> [!warning]
>
> If the final service you expose to your customers requires several server farms (e.g. ports 80 and 443), you will need to declare a **front-end** for each of your farms.
> 

### Blue front-end

This **front-end** is dedicated to accessing the production infrastructure. The ports exposed to your customers are the standard ports for accessing the service. In this case, we are exposing an HTTP service, so we will use port 80 (443 if you would like an SSL termination).

#### Via the OVHcloud Control Panel

![Adding a front-end dedicated to production, a blue front-end](images/frontend1.png){.thumbnail}

![Enter the blue front-end’s configuration](images/fblue.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Setting|Required|Meaning|Example|
|---|---|---|---|
|serviceName|Required|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|defaultFarmId||Your production farm’s ID|77212|
|displayName||The name given to the front-end|Blue front-end|
|port|Required|The port exposed to your customers by your front-end|80|
|zone|Required|The zone in which you want to deploy your front-end|all|

### Green front-end

This **front-end** is dedicated to accessing the development infrastructure. The ports exposed to your customers will be non-standard ports that you can choose arbitrarily. In this case, we will expose the HTTP development service on port 8888.

#### Via the OVHcloud Control Panel

![Add the green front-end, dedicated to development](images/frontend2.png){.thumbnail}

![Enter the green front-end’s configuration](images/fgreen.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Setting|Required|Meaning|Example|
|---|---|---|---|
|serviceName|Required|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|defaultFarmId||Your production farm’s ID|77213|
|displayName||The name given to the front-end|Green front-end|
|port|Required|The port exposed to your customers by your front-end|8888|
|zone|Required|The zone in which you want to deploy your front-end|all|

## Manage the deployments

### Initial deployment

Once you have finished configuring the components of the OVHcloud Load Balancer service, the only thing left to do is apply your changes.

#### Via the OVHcloud Control Panel

![Apply your changes to the zone](images/deploy.png){.thumbnail}

#### Via the OVHcloud API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

### The production/staging switch

At this stage, our initial environment is deployed and ready to use. Now, you need to switch over your front-ends from one server farm to another.

Let’s take a look at our scenario:

- The production infrastructure (A) is deployed on **HTTP farm A** (id 77212), which in turn is attached to **HTTP server A**. This infrastructure can be accessed through the **blue front-end**.
- The development infrastructure (B) is deployed on **HTTP farm B** (id 77213), which in turn is attached to **HTTP server B**. This infrastructure can be accessed through the **green front-end**.

Once you have modified/applied updates to **infrastructure B** and checked that the service is working properly, you can decide to put it into production.

To switch between the two farms, you can simply update your different front-ends by modifying the ID of the farm it is attached to, and applying the modification.

The **blue front-end** (id 70089) will then be associated with **Farm B** (infrastructure B, new production, id 77213).

The **green front-end** (id 70090) will then be associated with **Farm A** (infrastructure A, new development, id 77212).

This should be the result on the OVHcloud Control Panel after updating the front-ends and applying the new configuration:

![Result after updating front-ends](images/switch.png){.thumbnail}

#### Via the OVHcloud API

- Updating front-ends and applying modifications:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Setting|Meaning|Example|
|---|---|---|
|serviceName|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|frontendId|Your production front-end ID|70089|
|defaultFarmId|Your development server farm ID|77213|

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Setting|Meaning|Example|
|---|---|---|
|serviceName|Your Load Balancer service ID|loadbalancer-abcdef0123456789|
|frontendId|Your production front-end ID|70090|
|defaultFarmId|Your development server farm ID|77212|

- To apply your changes and effectively switch over the production and development environments:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

## Conclusion

You have successfully implemented a highly available infrastructure for managing blue-green deployments.

Developers have access to a development environment on port 8888 (or any configurable non-standard port), while your customers continue to access the service in production via the standard HTTP port (80).

The infrastructure presented here is limited to just one port, but it can be expanded by adding other ports. For example, you can also expose your website on the standard HTTPS port (443). You can do this by defining new farms dedicated to each port you want to expose, and associating them with their corresponding front-ends (one for the standard port exposed in production, the second for the arbitrary port dedicated to development).

Another way to consolidate your infrastructure even further is by multiplying the servers attached to your farms. This way, you can make your services more redundant (guaranteeing availability as a result), and also add a load balancing capacity.

## Go further

Join our [community of users](/links/community).