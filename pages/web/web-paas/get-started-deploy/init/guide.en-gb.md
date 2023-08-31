---
title: Git init
slug: init
section: Deploy
---

**Last updated 31st August 2023**



## Objective  

The basic unit for organizing work within {{< vendor/name >}} is a project.
Each project represents one Git repository, a centralized place to store code and work history.
For now, {{< vendor/name >}} represents the source of truth for your repository.
You can later set up an integration with GitHub, Bitbucket, or GitLab.

To deploy your app, you need to connect its repository to a project in {{< vendor/name >}}.

First, create a {{< vendor/name >}} project by running the following command:

```bash
webpaas project:create
```

Then go through each of the steps to create the project:

1\. Give it a title.

2\. Choose a [region](../../development/regions.md).

   The CLI lists each region's location, cloud provider, and average carbon intensity.
3\. Choose a plan.

   A Development plan is enough before you deploy anything.
   During a free trial, you can't choose production plans so you won't see this option.
4\. Select enough environments.

   This defaults to 3 environments, which are included in any production-level plan, but you can add more.
5\. Select enough storage.

   This defaults to 5 GiB, which is included in any production-level plan, but you can add more.
6\. Choose a default branch.

   This defaults to `main`, but you can always [change it later](../../environments/default-environment.md).

A Git repository is automatically initialized and {{< vendor/name >}} is set as a remote.

Now your project is initialized and ready for you to make changes.

{{< get-started/next-button next="/get-started/deploy/commit.html" nextText="I'm ready to commit" >}}
