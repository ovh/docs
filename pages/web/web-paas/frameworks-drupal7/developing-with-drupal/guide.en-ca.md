---
title: Developing with Drupal
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Push changes to an environment

Here, we'll see how to make code changes to an environment.

> [!primary]  
> You should never be working on the Master branch since it's supposed to be your production environment.
> 

Make sure you're on a working environment. In this example we're on the
*sprint1* branch:

```bash
$ git checkout sprint1
```

Now that you're set up on your working branch, you can start developing
on your website by making code changes and pushing those changes to
WebPaas to test them live.

There are three common ways you will be making code changes to Platform:

1\.  Add contributed modules, themes, distributions, third-party

    libraries in the make file
2\.  Create custom code (*modules, themes, profiles, libraries*) and

    commit them to your WebPaas codebase
3\.  Modify the services grid configuration


### Add contributed projects

Each time you push a commit, Web PaaS will rebuild your environment
and run the Drush make command if a proper make file has been found.

#### Add a Drupal module

Each Drupal module you want to install on your project should be
included in the make file. For example, if you want to add Drupal
Commerce, you need to add the following lines to your `project.make`:

```ini
; Modules
projects[addressfield][version] = "1.0-beta4"
projects[addressfield][subdir] = "contrib"

projects[ctools][version] = "1.3"
projects[ctools][subdir] = "contrib"

projects[commerce][version] = "1.8"
projects[commerce][subdir] = "contrib"

projects[entity][version] = "1.2"
projects[entity][subdir] = "contrib"

projects[rules][version] = "2.6"
projects[rules][subdir] = "contrib"

projects[views][version] = "3.7"
projects[views][subdir] = "contrib"
```

#### Add a Drupal theme

You'd do the same if you want to add a theme. Add the following lines to
your `project.make`:

```ini
; Zen Theme
projects[] = zen
```

#### Add a third-party library

You'd do the same if you want to add a third-party library. For our
example here, we're adding the HTML5 Boilerplate library. Add the
following lines to your `project.make`:

```ini
; Libraries
libraries[html5bp][download][type] = "file"
libraries[html5bp][download][url] = "http://github.com/h5bp/html5-boilerplate/zipball/v3.0.2stripped"
```

### Add custom code

To commit your custom modules, themes or libraries, you need to commit
them under a `modules`, `themes` or `libraries` folder at the root of
your Git repository.

```bash
$ ls
  libraries/
  modules/
  project.make
  themes/
```

When you push your code, WebPaas will build your environment and move
your modules, themes, libraries to the correct location on your site
(usually `sites/default/`).

### Change the services configuration

You can change and define the topology of the services used in an
environment, by modifying the configuration files.

This means that you're able to define and configure the services you
want to use.

### Push your changes

When you're done, commit your changes to test them on your online
environment.

```bash
$ git add .
$ git commit -m "Made changes to my make file."
$ git push
```

You will see that WebPaas has found a make file and is starting to
rebuild your environment.

When it's completed, you can see your changes on your site by clicking
`View this website` under the name of **Sprint1** environment on the
Web PaaS management console.

> [!primary]  
> The Drush Make processing doesn't create any file in your Git repository. Your Git repository is the *input* of the process and not the *output*. You can see the directory structure that has been created by connecting via SSH to the environment. See the information in the `Access information` below the title of the environment.
> 

## Merge code changes to Master

Once you've got a branch with some changes, you'll want to be able to
push those changes up to your live environment. Web PaaS has a great
button called `Merge` that you can click on and it will push the
appropriate changes to master.

![Merge your changes.](images/header.png "0.3")

A dialog box will appear that will provide commands to execute future merges from the command line using the [Web PaaS CLI](/pages/web/web-paas/development-cli).

![Merge confirmation cli](images/header-merge-box.png "0.4")

Just click on the "Merge" button again and all of the commits you made on your
branch will be merged into the master environment.

## Synchronizing data

The easiest way to do that is to use Drush and the sql-sync command.
You'll need to have Drush aliases for both your
Web PaaS site and your local site. If you are using the CLI and
you've run `webpaas get [platform_id]` for a project, then your Drush
aliases have already been set up.

With the Drush aliases (depending on how yours are set up), you
could use a command similar to this:

```bash
$ drush sql-sync @platform.master @platform._local
```

An alternate method that is appropriate for larger databases is to use
the pipe | to stream the data, instead of making copies.

```bash
$ drush @platform.master sql-dump | drush @platform._local sqlc
```
