---
title: Access
slug: access
section: App
updated: 2021-03-26
---

**Last updated 26th March 2021**



## Objective  

The `access` key in `.platform.app.yaml` defines the user roles who can log in via SSH to the environments they have permission to access.  The specified role is a minimum; anyone with an access level of this role or higher can access the container via SSH.

Possible values are `admin`, `contributor`, and `viewer`.  The default is `contributor`.

## How do I restrict SSH access only to project administrators?

The following block in `.platform.app.yaml` will restrict SSH access to just those users with "admin" privileges on the project or on the specific deployed environment.

```yaml
access:
  ssh: admin
```
