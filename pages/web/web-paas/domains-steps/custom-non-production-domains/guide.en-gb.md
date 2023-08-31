---
title: Set up a custom domain on your non-production environments
slug: custom-non-production-domains
section: Steps
---

**Last updated 31st August 2023**



## Objective  

{{< partial "progressive-rollout/body.md" >}}

When a custom domain is [set up on your production environment](../steps/_index.md),
it can't be used for the other, non-production environments in your project.

Therefore, by default and for each non-production environment,
{{< vendor/name >}} automatically replaces the custom production domain
with an automatically generated URL.

If you don't want to use these default URLs,
you can add a custom domain to each of your non-production environments
(`staging` or `development` environment types).

To do so, you don't need to modify your [routes configuration](../../define-routes/_index.md).
You just need to attach each new custom non-production domain to the custom production domain it replaces.
If you have multiple custom production domains,
you need to select which one you are replacing when you add a custom non-production domain.

> [!primary]  
> 
> You have two environments, a production environment and a staging environment.
> You've added the `example.com` custom domain to your production environment.
> 
> You want to add the `staging.example.com` custom domain to your staging environment.
> To do so, you need to attach the new `staging.example.com` custom domain
> to its corresponding custom production domain `example.com`. 
> 
> You can then access your staging environment through `staging.example.com`
> and still access your production environment through `example.com`.
> 
> 

If you have multiple custom domains on your production environment,
when you create a custom non-production domain,
you don't need to update your [routes configuration](../../define-routes/_index.md) either.
{{< vendor/name >}} automatically figures out the routing of your non-production environment
based on the following elements:

- The custom production domains in your existing [routes configuration](../../define-routes/_index.md)

- The custom non-production domains attached to each of those custom production domains


## Before you start

You need:

- A Grid or {{% names/dedicated-gen-3 %}} project on which you have **admin rights** <BR> 


> [!primary]  
> 
>   If you have a {{% names/dedicated-gen-2 %}} project,
>   currently you can only add a custom domain to the dedicated environments of your project (production and staging).
>   To do so, [contact Support](https://console.platform.sh/-/users/~/tickets/open).
> 
> 

  If you use a [Managed Fastly](../cdn/managed-fastly.md) CDN,
  it needs to be configured to operate with custom non-production domains.
  For more information, [contact Support](https://console.platform.sh/-/users/~/tickets/open).   
- A production environment with at least one custom domain already set up

- At least one non-production (staging or development) environment

- Optional: The [{{< vendor/name >}} CLI](../../administration/cli/_index.md) (v4.8.0+)


To prevent abuse, by default you can add custom domains to up to 5 environments per project only.
This limit doesn't include the production environment,
and you can increase it without charge.
To do so, [contact Support](../../overview/get-support.md).

> [!primary]  
> 
> If you delete a custom production domain,
> all of the attached custom non-production domains are deleted too.
> You need to rebuild the affected non-production environments for the deletion to be complete.
> 
 > 

If you downgrade from an Elite or Enterprise plan to a Professional plan,
all of the custom domains set on non-production environments are automatically removed.
Downgrading your plan doesn't affect custom domains set on your production environments.

## Add a custom domain to a non-production environment

To add a custom domain to a non-production environment, follow these steps:

> [!tabs]      

> [!primary]  
> 
> You can’t update a custom non-production domain.
> You can only delete it and create a new one as a replacement.
> 
> 

### Example

You've added the `mysite.com` custom domain to your production environment.
You now want to add the `mydev.com` custom domain to a development environment called `Dev`.

To do so, follow these steps:

> [!tabs]      

In the above example, the `Dev` environment needs to exist
for you to add the `mydev.com` custom domain successfully.
If the `Dev` environment is later removed,
the `mydev.com` custom domain is removed too.

## List the custom domains of a non-production environment

> [!tabs]      

## Get a specific custom non-production domain

> [!tabs]      

## Remove a custom domain from a non-production environment

> [!tabs]      
