---
title: "Learn versioning and repositories basics"
updated: 2025-02-15
---

## Objective

This tutorial demonstrates how to use the Platform's native versioning system or how to setup a Git repository to track the changes in your [Data Processing Actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index). 

* [Introduction](#introduction)
    * [Requirements](#requirements)
    * [Concepts overview](#concepts-overview)
* [Use the Platform version control system](#use-the-platform-version-control-system)
* [Use a repository linked to Git](#use-a-repository-linked-to-git)
    * [Linking a repository to Git](#linking-a-repository-to-git)
    * [Commiting and pushing](#committing-and-pushing)
    * [Pulling and merging](#pulling-and-merging)
  
## Introduction

### Requirements

To follow this tutorial, you need to be familiar with the [Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/00-dpe-index) and you should preferably have done the [Getting Started guide](/pages/public_cloud/data_platform/getting-started/00-getting-started-index). The essential is that you know what [Actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index) are for and how to use them.

### Concepts overview

Editing actions is always on autosave mode. When you are trying to iterate on existing actions, it is recommended to create several versions of the actions' code. This lets you incrementally introduce variations to experiment and test your work, while keeping the version in production always intact.

**On the Platform, this versioning happens at the level of the repositories**. The repositories are the tabs you see at the top of the Actions' tree view.

![repos](images/repos.png){.thumbnail}

You cannot version an individual action, but rather a whole repository of actions. The versioning panel can be accessed at the top right of the repository header:

![etl-versioning](images/versioning-panel.png){.thumbnail}

There are 2 versioning systems on the Platform:

- [Data Platform version control system](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index#use-the-platform-version-control-system): the default versioning system on all repositories
- [Git versioning](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index#use-a-repository-linked-to-git): if you decide to synchronize your repository with Git

Now let's see how all of this works in practice!

## Use the Platform version control system

By default, each repository of actions on the platform has an integrated version control system which allows you to manually manage the different versions of the code (i.e. actions) they contain. 

Repositories all have:

- a *deployed version*, which is the version served when [executing the job](/pages/public_cloud/data_platform/product/dpe/jobs/00-jobs-index). 
- an *editing version*, which is the version currently being edited through the editor panel.

> [!primary]
> If your repository only has *one version*, the active version is the same as the deployed version, which means that you are editing your actions in production.  
If your repository has *two versions or more*, the deployed version cannot be edited. It can be viewed in read-only mode.

Versions need to be created manually. To create a new version for the repository, open the versioning panel at the top right and click on the **+** icon.

![etl-versioning](images/versioning-fp1.png){.thumbnail}

Choose which version to duplicate to create the new version.

![etl-versioning](images/versioning-fp2.png){.thumbnail}

After creating the new version, the *deployed version* will not change. You are able to edit the new version directly.

![etl-versioning](images/versioning-fp3.png){.thumbnail}

Click on the **Play** button to set a new version as the deployed version: the version of the code used when actions of the repo are executed.

![etl-versioning](images/versioning-fp4.png){.thumbnail}

## Use a repository linked to Git

Each repository can be linked to an external Git repository in which case versions are synced with Git commits. This allows you to update & test actions continuously without affecting the version deployed in production.

### Linking a repository to Git

To link your repository on the platform to Git, you must click on the gear icon to edit an existing repository or create a new a one. Either of this actions will open the repository configuration window.

![img1](images/repository_configuration_window.png){.thumbnail}

Click on *Connect to Git* to expand the window.

![img1](images/repository_configuration_full.png){.thumbnail}

Here the first thing you need to enter is the Repository SSH URL. 

It is generally found on repository cloning options of common Git solutions. On GitHUB, for instance, it can be found on Code > Clone > SSH.

![github](images/github.png){.thumbnail}

Next click on *FETCH* to get the distant branches and select the branch you desire to use.

Finally, copy the Public SSH key given at the bottom and paste it in the list of SSH keys associated to your account on your Git solution. For GitHUB, you can follow [this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Committing and pushing

After changing an object in a repo, your repo will display the uncommitted changes as shown in the image below. You can commit and push them by clicking on the arrow pointing upwards indicated in the image.

![commit](images/commit_push.png){.thumbnail}

> [!primary]
> If there is a conflict when you push, your changes will not be pushed to the branch you configured, instead they will be pushed to a new branch with same name of the current branch and a suffix of *_conflictN*, where N is the number of the conflict. For example, if your branch is named *current-branch* and your push causes a conflict, the new branch will be named *current-branch_conflict1*. If there is a conflict again when you push, the new branch will be named *current-branch_conflict2*.

### Pulling and merging

Pull distant changes by clicking on the arrow pointing downwards indicated in the image, a popup window will prompt you to confirm your decision. All uncommitted changes will be lost and both branches will be merged together.

![pull](images/pull_merge.png){.thumbnail}

## Go further

Join our [community of users](/links/community).