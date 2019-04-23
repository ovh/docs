---
title: 'An introduction to instances and other cloud-based terms'
slug: introduction-to-instances-and-other-cloud-based-terms
section: Information and Concepts
---

## Introduction
There are many terms specific to cloud computing that are often ill-defined. This document provides some details on aspects of vocabulary, particularly for **instances**.


## Terminology
If you have some questions after reading the sentence below, we will clarify some concepts for a better understanding.

"By creating a snapshot of my first instance, I create a new image in the catalogue which I can use to boot a new instance, potentially using a more powerful flavor."

We will explain all of this below.


### Instance
The term instance is often used to simply talk about servers in a cloud computing service. It might sometimes be used to refer to a cloud server.

In any case, it is the same thing — a server managed by a cloud computing platform that can be used **as-a-Service**. The user is then billed on a "Pay-as-you-go" basis, and has an API that can be used to manage the infrastructure with compatible tools.

Please note that although an instance is usually a virtual server, as is the case in the OVH Public Cloud, it may well be used to refer to something else, like a physical server.

An instance is a cloud server booted from a system **image** and a **flavor** (see below). Each time an instance is booted, it results in a new image deployment. The system image is "instanced" to create a new server.


### Image
An image is a pre-installed, ready-to-use operating system. It can be a Linux distribution, a Windows operating system or any other system that has been designed to work on a cloud computing platform.

These images can be "minimal", i.e. the operating system is reduced to what is strictly necessary for standard use. They can also be equipped with pre-installed applications, so that the user can avoid having to re-install them each time an instance is rebooted.

Typically, the images used for the cloud include some post-startup configuration tools that can be used to set information that is unique to the instance, such as its host name.



> [!primary]
>
> When you take a snapshot of an instance, you create a new image. It can then be re-used to boot other instances.
> 

All of the available images make up the "catalogue". Among these are public images provided by OVH, and private images which are specific to each cloud project.

For VMware, the equivalent of an image is called a template.


### Flavor
This term is unique to OpenStack. A flavor is the instance model defining its characteristics in terms of resources. Usually, a flavor defines the volume of CPU, RAM and disk volume. This is the equivalent of the term "envelope" for VMware.

For example, flavor b2-30 defines 8 vCPUs, 30 GB RAM, and 200 GB primary disk space.


### OpenStack
OpenStack is the software suite used by OVH to build the foundation of the Public Cloud service. Over the years, this technology has become a market standard, and many tools are directly compatible with OpenStack.


### Volume
A volume is an independent additional disk. It can be hot-attached to and hot-detached from an instance. The size of this volume is set by the user according to their needs.


## Usage
The definitions of ‘instance’, ‘Pay-as-you-go’ and ‘on-demand service’ offer new opportunities in terms of how they can be used.

While it is possible to use a cloud computing service the same way as you use a standard server long-term, you can use the product’s full potential with automation.

We will only touch on some concepts, but these short explanations can help us understand cloud philosophy better.


### Cloud-ready
A cloud-ready application or use simply means that the feature has been adapted to take full advantage of cloud computing.

A simple example will give you a better understanding.

The need: a developer needs a development environment on a server to carry out a project.

A standard possible implementation: creating a server (virtual or physical) that has a cost, even when the person doesn't work on it, e.g. during the night, and on days that they are working on other projects.

A cloud-ready implementation: an image is created with all the tools required for development. Whenever the person wants to work on the project, a new instance is booted based on that image. A volume can be attached to it, to store useful data from time to time. All of this can be automated through a script and API calls, or directly from an orchestration tool. Whenever they need to do so, the developer can use the same environment using the same image, flavor and volume, but they will not be billed for the instance between two uses.


### Cloud-native
A "cloud-native" application is a fully-automated application in terms of how its architecture is managed, and its design directly integrates cloud computing concepts that meet three principles:

- Allocation: The application load must be allocated dynamically across multiple nodes to manage the scaling of the activity.
- Distribution: The application’s critical elements (data, services, etc.) should be distributed in several locations to minimise the impact of any infrastructure failures.
- Self-healing: When an element of the infrastructure is lost, the application recognises the failure, and takes action to fix the problem. Often, an orchestration tool is used alongside a monitoring tool to manage these cases.