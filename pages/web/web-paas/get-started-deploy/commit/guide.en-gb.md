---
title: Git commit
slug: commit
section: Deploy
---

**Last updated 31st August 2023**



## Objective  

Once you have your project initialized, it's time to add the basics to get it deployed.

In your repository, create a file to hold your app configuration:

```bash
touch {{< vendor/configfile "app" >}}
```

This file holds all the configuration for the container where your app lives.
By keeping the configuration in this file,
you ensure it remains the same across all environments, from development to production.

Start by adding basic properties for your app, such as its name and language.
You can adjust the file to fit your code, such as the `start` command to start your app, or desires, such as changing the `name`.

{{% get-started/basic-app %}}

{{% get-started/build-hook %}}

Commit your changes (to save your changes):

```bash
git add .
git commit -m "Add {{< vendor/name >}} files"
```

Push your changes (to share your changes with everyone with access to your project/repository):

```bash
webpaas push
```

{{% get-started/service-needed %}}

{{< get-started/next-button next="/get-started/add-data/branch.html" nextText="I'm ready to branch" >}}
