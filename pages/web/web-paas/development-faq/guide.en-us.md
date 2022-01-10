---
title: Frequently Asked Questions (FAQ)
slug: development-faq
section: Development
order: 5
---

**Last updated 7th January 2022**


## What is the difference between a Platform, a Project and an Environment?

WebPaas or Web PaaS is the infrastructure which is running all your projects.

A project is the site that you're working on.
Each project corresponds to one Git repository.
A project may contain multiple applications that run in their own isolated containers.
Each branch of a project may be deployed in its own environment.

An environment is a standalone copy of your site, complete with code, data, and running services.
Your default branch is the production environment, while any other branch can be setup as an otherwise identical testing environment.

## How can I cancel my subscription?

If you want to delete a project and cancel your subscription,
go to the project settings and click **Edit plan**.
Then click **Delete project**.

This delete your project and stops invoicing for this project.
If you have multiple projects, your subscription continues until you don't have any projects left.

## How do I delete my Web PaaS account?

If you would like to delete your Web PaaS account,
log in and select **Support** from the dropdown options when you click your name in the management console.
Create a new ticket, and request for your account to be deleted in the form provided there.
A support agent receives your request and deletes your account shortly thereafter. 

## Does branching an environment duplicate services?

Yes! Branching an environment creates an exact copy (snapshot) of the parent environment,
containing the files, the database, and code.
Each environment runs independently of every other,
so if you have four active environments,
you have four copies of your application, four copies of your database, four copies of your files, and so on.

## Do you have a local writable file-system?

Yes! Web PaaS supports non-ephemeral storage.
When you configure your application you can tell it what directories you want to be read/write.
(These are called [mounts](../configuration-app/app-reference#mounts).)
These are mounted on a distributed file system (which is transparent for you).
When you backup your environment, they are backed up as well.
When you create a new staging environment,
these mounts are cloned with the rest of your data.

## What happens if I push a local branch to my project?

If you push a local branch that you created with Git,
you create what's called an `inactive environment`, an environment that isn't deployed.

This means there aren't any services attached to this branch.

You are able to convert an `inactive environment` into an `active environment`
and vice versa back from the environment configuration page
or using the CLI with `webpaas environment:activate`.

## How does my live site scale?

Your production environment gets a pool of resources based on your plan size,
which is then split up between the applications and services you have defined.
(For example, PHP 40%, MySQL 30%, Redis 10%, Solr 20%).
Increasing your plan size increases the pool of CPU and RAM that gets split among all of the containers.

All containers on development plans are "small" containers.

See configuration options for [apps](../configuration/app/app-reference.md#sizes)
and [services](../configuration/services/_index.md#sizes).

## What exactly am I SSHing into?

The `webpaas ssh` command allows you to log into your application container (where your PHP app or Node app or Java app is running).
It's a fully running Linux environment,
but almost all of the disk is read-only, with the exception of mounts you have defined.

## Can I edit a quick fix on a WebPaas environment without triggering a rebuild?

No. Changes to the code can only be made through deploying new Git commits.
That ensures that "hot patches" don't get lost in the net update, that all changes can be audited,
and that if a security break-in happens the attacker still can't modify your application code.

## What do I see when I push code?

When you `git push` new code, Web PaaS rebuilds and redeploys the application.
What shows on the command line is the output of your build process
(such as Composer, pip, or Bundler plus your own build hook) followed by the deploy process.
It ends with a description of what was just deployed and the URLs that are now active.

To suppress the output, run `webpaas push -W`.
The `-W` means `--no-wait` and disconnects the connection once the commits are pushed so that you can continue to use your local terminal.
The exact same output is also available in the Web Management Console.

## What Linux distribution is Web PaaS using?

Web PaaS is built on Debian.

## If I choose the Development plan, can I use that plan for production?

No. The Development plan provides all the tools to build your website.
You can create as many development profiles as you wish for yourself and for your team. 
However, it doesn't allow for full production-level resources on the production branch
and doesn't allow you to configure a custom domain name.

Once your project is complete and ready for production, you can choose another plan to go live.
These plans are available on the [pricing page](https://www.ovhcloud.com/fr/web-paas/).

## I am getting weird errors when I push (something with `paramiko`..)

Validate the syntax of your YAML file.
Don't use tabs.
If all else fails, contact support.

## Which geographic zones does Web PaaS cover?

Web PaaS is currently available in France: Gravelines (GRA7).
including Amazon Web Services, Microsoft Azure, Google Cloud, OVHcloud, and Orange.
We offer public Grid regions in several parts of the world:
USA (East Coast), USA (West Coast), Canada (East Coast), Europe (Dublin), Europe (Germany), United Kingdom (London), and Australia (Sydney).



## IDE Specific Tips

MAMP pro:

In order for MAMP to work well with the symlinks created by the [Web PaaS CLI](https://github.com/ovh/webpaas-cli),
add the following to the section under Hosts \> Advanced called "Customized virtual host general settings".
For more details visit [MAMP Pro documentation page](https://documentation.mamp.info/).

```bash
<Directory>
        Options FollowSymLinks
        AllowOverride All
</Directory>
```

> [!primary]  
> 
> When you specify your document root,
> MAMP follows the symlink and substitutes the actual build folder path.
> This means that when you rebuild your project locally,
> you need to point the document root to the symlink again so that it refreshes the build path.
> 
> 


