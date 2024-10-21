---
title: All you need to know to get started with Public Cloud
excerpt: Find out some basic tips to get started in the Public Cloud environment
updated: 2024-04-19
---

## Objective

OVHcloud Public Cloud is an environment that gathers a large number of cloud products, available worldwide, compatible with one another, and whose use can be considered for a short period of time (an hour, a few days) or longer (several months, years).

The delivery is almost instantaneous, and the billing is directly adapted to your usage, bringing simplicity and flexibility to your practices.

This guide will help you find out what you need to know to make sure your products are used properly.
<br>We will first introduce you to a [global approach to the Public Cloud](#global-approach) and some general concepts, then a [concrete approach](#concrete-approach) with the benefits provided by the Public Cloud, as well as the first steps for getting started.
<br>Finally, we offer resources for [going further](#gofurther).

If you are already familiar with these concepts, you can continue discovering the OVHcloud Public Cloud by browsing the following guides:

- [Open an OVHcloud account](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [Create your first Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project)
- [How to use the Public Cloud interface](/pages/public_cloud/compute/03-public-cloud-interface-walk-me)
- [Create your first instance](/pages/public_cloud/compute/public-cloud-first-steps)
- [Manage quotas](/pages/public_cloud/compute/increasing_public_cloud_quota)

## Global approach <a name="global-approach"></a>

### An ecosystem of on-demand resources

All of the products available in the Public Cloud (such as servers, Kubernetes clusters, disk volumes, etc.) form an ecosystem.
<br>Each item corresponds to a function and meets a need, it can be used alone or in addition to other items in the catalogue.
<br>For example, an instance (an on-demand server) can be used as an addition to storage elements such as object storage. If your application requires a database, there is also an element to meet this need.

All of these components are integrated into an environment to facilitate the deployment and utilisation of these resources.
<br>As a result, it is very easy to start resources like an instance or a Kubernetes cluster. Deployment takes a few seconds.
<br>You can also delete these resources a few hours later, and only pay for this usage time. This is called on-demand resources.

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Resources available everywhere

The Public Cloud catalogue offers low-level resources, such as private instances or networks, and managed resources in higher layers, such as a database.
<br>These resources are provided as a service, in the sense that the user does not need to buy the elements, he uses them for a time (like a rental) and simply pays the price corresponding to the time of use.
<br>Most of the time, you are not required to use these resources for a set period of time (unless you are billed monthly to reduce costs).

When the proposed resource is “managed”, we often talk about a resource in the high layers, already close to the application, like a database cluster, a Kubernetes cluster, a model training solution for AI etc.
<br>“Managed” refers to the fact that the platform is deployed, monitored, and maintained (upgraded) by OVHcloud. You do not have to worry about all this management and you benefit directly from the service.

These resources are available in our various data centres across the globe. OVHcloud offers Public Cloud services in Europe, North America, Asia and Oceania.
<br>You can start a resource in each of these locations by simply selecting the desired location.

![Public Cloud geolocation](images/geolocation.png){.thumbnail}

### A cloud service provider in a mature market

OVHcloud Public Cloud is positioned alongside well-known cloud providers such as AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (from Microsoft) and Alibaba Cloud. Our offer is distinguished by [the particularly advantageous rates](https://www.ovhcloud.com/en/public-cloud/prices/) and the use of standard APIs that leave our users free to change, without adhering to any proprietary technology.

## Practical approach <a name="concrete-approach"></a>

### Use cases: some concrete examples and their advantages

- **More flexibility**: *You have an application that currently runs on a standard hosting like a dedicated server (or several) and you want more flexibility in its use.* Using Public Cloud instances is very similar to using a dedicated server, but it does give you the ability to resize your server easily, keep up with hardware changes, add hot storage, configure your network architecture as you wish, schedule backups, or clone your server in a few simple actions.

- **More scalability**: *You are developing a cloud-native application, and you want an infrastructure that can handle high load variations.* Kubernetes clusters can react and adapt dynamically depending on load. They can add nodes to the cluster automatically as the pressure on the infrastructure increases.

- **More cost control**: *You have an application in production that is subject to seasonalities, and you want to deport the compute load at peak times, without maintaining significant infrastructure costs throughout the year.* Hourly billed instances can complete tasks in a short time, and can be deleted once the need is met.

- **More serenity**: *You need a database but you do not want to manage the engine and maintain it.* Managed databases are available in a few seconds and are fully managed by OVHcloud. You can directly use the database service without having to worry about installation, maintenance, updates etc.

### Usage: a simple interface and standard APIs

There are several ways to manage Public Cloud resources. Whether you are an advanced user or a new user, using OVHcloud Public Cloud products remains simple.

- To discover the products, the OVHcloud Control Panel helps you create resources by leading you to choose the performance of the product, its location, the customisation you want, or other parameters such as its billing method.

- To automate deployments and industrialise your architectures, you can also use market tools by logging directly in to standard APIs like the S3 API, OpenStack APIs or even Kubernetes.

### Starting: handling

#### The project

To get started, you will first need an OVHcloud [customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

You will then need to [create a Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project). A project is an environment that you will dedicate to a context.

For example, you can choose to separate your test and production environments in two projects.
<br>Or you can use different projects for your different applications (public website, online store, business application, document management etc.).

To start a project, you will need to save a payment method when you create the project.

#### Billing

> [!primary]
> For Virtual Machine instances specifically, the billing meter starts when an instance reaches the `ACTIVE` status (displayed as `Activated` in the OVHcloud Control Panel). In other words, the period of time during which the instance is in `BUILD` status is not billed.

Since your payment method has been saved, it will be used to debit the amount calculated for your [billing at the end of the month](/pages/public_cloud/compute/analyze_billing). This calculation is based on the usage time of each resource, depending on the price of the resources.

Example: During the month, you used 1 d2-8 instance for the whole month, and 3 b2-60 instances, which together account for 32 hours.
<br>Your bill will be 720 (number of hours in the month) x €0.0325 ex. VAT (price per hour of a d2-8) + 32 x €0.4589 ex. VAT (price per hour of a b2-60). This amounts to €38.08 ex. VAT.

#### Quota management

You may have to deal with the quota issue.
<br>The Public Cloud quota defines the maximum number of resources you can start. It depends on certain settings (fore example: age of account, previous invoices).
<br>These quotas are allocated by region (in the OpenStack sense). As a result, you may reach the maximum possible resources for your project, and you may need to [increase these quotas](/pages/public_cloud/compute/increasing_public_cloud_quota).

![Public Cloud quota](images/quota.png){.thumbnail}

#### User management

You may need to manage several users who will be involved in your project.
<br>You then have two options:

- If you would like to use the OpenStack or S3 APIs, or the Horizon interface, you will need to [create users](/pages/public_cloud/compute/create_and_delete_a_user) to do this. Users may have limited permissions to secure the action perimeters.
- If you do not need access to the APIs or Horizon, you can [link another OVHcloud](/pages/public_cloud/compute/delegate_projects) customer account as an add-on to your project.

## Go further <a name="gofurther"></a>

Here are some general resources that will help you get started with the Public Cloud:

|Documentation|Details|
|---|---|
|[FAQ](/pages/public_cloud/compute/faq_pci)|Frequently asked questions about Public Cloud.|
|[Glossary](/pages/public_cloud/compute/introduction_about_instances)|The concepts and definitions you will need to move forward.|
|[Availability of services by location](https://www.ovhcloud.com/fr/public-cloud/regions-availability/)|Service availability tables across different locations.|
|[Image Changelog](/pages/public_cloud/compute/image_changelog)|Changes to publicly available system images.|

Here are some guides to help you with the first steps:

|Documentation|Details|
|---|---|
|[Create your first instance](/pages/public_cloud/compute/public-cloud-first-steps)|First practical guide to starting a cloud server from the OVHcloud Control Panel.|
|[Using an SSH key](/pages/public_cloud/compute/creating-ssh-keys-pci)| To log in to a Linux instance, you will need to log in via an SSH connection. This guide details the procedure.|
|[Private Network Configuration](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)|At OVHcloud, private networks are powered by vRack technology. This guide will help you get started.|
|[Attach an additional disk to an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)|This guide will help you add additional storage to your first instance.|
|[Accessing the Horizon interface](/pages/public_cloud/compute/introducing_horizon)|The Horizon interface of OpenStack allows some advanced actions, here is how to connect to it.|
|[Creating a Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster)|This guide will help you step by step in creating your first Kubernetes cluster.|
|[Configuring an Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)|Additional IPs can allow you to switch traffic from one instance to another. This guide will explain how to configure this.|
|[Installing the OpenStack CLI](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)|OpenStack can also be used in the command line. Here is how to install the tools.|

One of the big advantages of using standard and open technologies, like OpenStack or Kubernetes, is that you can use all the documentation already available.

|Documentation|Details|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient)|Extensive documentation for the essential openstack command-line client. Documentation for the Stein version, please refer to the [availability table](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) to find out what services are available.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/)|Extensive documentation of OpenStack APIs Documentation for the Stein version, please refer to the [availability table](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) to find out what services are available.|
|[End user documentation](https://docs.openstack.org/stein/user/)|The full documentation for the OpenStack user, in Stein version.|
|[Developer documentation](https://developer.openstack.org/)|The documentation for developers who want to connect their application to OpenStack APIs using the available libraries/SDKs.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/)| The documentation for the essential command line client 'kubectl'.|
|[Kubernetes APIs Overview](https://kubernetes.io/docs/reference/using-api/)| The documentation of the Kubernetes API, useful for an overview of the possibilities.|

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
