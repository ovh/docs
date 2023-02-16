---
title: Name
slug: name
section: App
updated: 2021-03-26
---

**Last updated 26th March 2021**



## Objective  

The `name` is the unique identifier of the application. Web PaaS supports multiple applications within a project, so each application must have a **unique name** within a project. The name may only be composed of lower case alpha-numeric characters (a-z0-9).

> [!primary]  
> Changing the `name` of your application after it has been deployed will destroy all storage volumes and result in the loss of all persistent data.  This is typically a Very Bad Thing to do. It could be useful under certain circumstances in the early stages of development but you almost certainly don't want to change it on a live project.
> 

This name is used in the `.platform/routes.yaml` file to define the HTTP upstream.  For instance, if you called your application `app` you will need to use `app:http` in the upstream field.

You can also use this name in multi-application relationships.
