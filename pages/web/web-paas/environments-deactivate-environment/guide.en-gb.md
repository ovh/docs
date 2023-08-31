---
title: Deactivate an environment
slug: environments-deactivate-environment
section: Environments
---

**Last updated 31st August 2023**



## Objective  

If you have environments you aren't using, you may want to deactivate them to save resources for what you need.
To deactivate an environment, you need to be an admin for the project or the given environment.

> [!primary]  
> 
> Your default environment is protected.
> It can't be deactivated through the Console or the CLI.
> To change which environment is the default, see how to [rename the default branch](./default-environment.md).
> 
> 

Deactivating the project results in the following:

* The environment becomes [inactive](../other/glossary.md#inactive-environment).
  Unless it's reactivated, it's no longer deployed and isn't accessible from the web or via SSH.
* All services running on this environment are deleted.
* All data specific to the environment is deleted.
  If the environment is reactivated, it syncs data from its parent environment.

## Deactivate an environment

To deactivate an environment, follow these steps:

> [!tabs]      

## Delete the branch

Inactive environments still have branches in Git.
To delete the branch entirely, run the following command:

```bash
git push origin --delete {{< variable "BRANCH_NAME" >}}
```

## Reactivate an environment

Reactivating an environment [syncs](../other/glossary.md#sync) data from its parent environment.

To reactivate an inactive environment, follow these steps:

> [!tabs]      
