---
title: "VMware Cloud Director - The fundamentals of vCD"
excerpt: "Discover the basic concepts of vCD"
updated: 2024-04-16
flag: hidden
---

## Objective

**This guide details the fundamentals of vCD at OVHcloud.**

## Fundamental concepts

In this section, we will detail the essential foundations of VMware Cloud Director (VCD). 

By defining these principles in a clear and concise way, we will provide the necessary foundation for effective and successful VCD use. Whether it’s for administrators looking to deploy complex infrastructures, or for users looking to access resources seamlessly, this exploration of VCD basics is a vital starting point.

### Organizations

An organization is an administrative entity that groups together specific users, groups, and IT resources. 

Users authenticate at the organization level by providing credentials established by an organization administrator when they are created or imported. 

System administrators are responsible for creating and provisioning organizations, while organization administrators are responsible for managing users, groups, and catalogs specific to the organization.

### Users and Groups

An organization can have a variable number of users and groups. Users can be created directly by the organization administrator or imported from a directory service.

Groups must be imported from the directory service. Within an organization, permissions are managed by assigning specific rights and roles to users and groups.

### Virtual Data Centers (vDC)

A virtual datacentre offers resources to an organization, creating an environment where virtual systems can be stored, deployed and operated.

It also provides storage space for virtual CDs and DVDs. It is important to note that an organization may have multiple virtual datacentres to meet their specific IT resource requirements.

### Organization Virtual Data Center Networks

An organization’s virtual datacentre network is encapsulated in a specific virtual datacentre created with VMware Cloud Director, and is accessible to all of that organization’s vApps. This network allows an organization's different vApps to communicate with each other seamlessly. It can be configured to be connected to an external network or kept isolated and internal to the organization.

Only system administrators have the privilege to create such networks, but organization administrators are able to manage the configurations of organization virtual datacentre networks, including the network services they offer.

### vApp Networks

A vApp network is included in a vApp, and facilitates communication between the vApp’s various virtual machines. 

It is possible to connect a vApp network to an organization's virtual datacentre network, which allows the vApp to communicate with other vApps within the organization. 

Furthermore, if the organization’s virtual datacentre network is connected to an external network, this allows the vApp to communicate outside the organization as well.

### Catalogs

Organizations use catalogs to store vApp templates and media files. 

Authorized members within an organization can access these catalogs to use the vApp templates and the media files contained within them to create their own vApps. 

In addition, organization administrators have the ability to copy items from public catalogs into their organization-specific catalog.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
