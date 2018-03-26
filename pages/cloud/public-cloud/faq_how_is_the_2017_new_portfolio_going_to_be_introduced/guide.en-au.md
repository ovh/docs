---
title: What to know about the introduction of the new 2017 range?
slug: faq-what-to-know-about-the-introduction-of-the-new-2017-range
excerpt: FAQ concerning the steps and impact related to the introduction of the new 2017 range of instances for the Public Cloud offer.
section: Knowledge base
---


## Will I still be able to use my current instances in my existing project?
Existing projects will still be able to use their current instances seamlessly. You will also be able to create new instances based on the former range for a while.

Eventually, this former range will no longer be available for creating new instances but we will inform you about any changes in advance.


## Can projects from the former range and others from the new one coexist?
Yes, already existing projects will continue to work and the new range will be offered for new projects. These two types of projects can seamlessly work concurrently and function independently from each other.


## How can I connect instances from an existing project to those from a new project with the new range?
Public cloud private networks rely on the OVH vRack technology. You can associate several (former or new) public cloud projects with a single vRack to connect them.

Once the projects are linked to the vRack, you must create private networks with the same VLAN number to enable instances to connect.


## Will I be able to use both ranges in the same project?
No, projects are associated with a specific range of instances for now.


## Will I still be able to create projects associated with the former range?
By default, new projects will be set to use the new range. But for few weeks, you will still be able to create a new project using the former range. A specific option will be available when creating a new project.


## How to get the behavior of instances based on a Ceph disk?
For those that are attached to the former range, you will still be able to start an instance based on a remote Ceph disk if you wish, using volumes and the "Start from a volume” function.