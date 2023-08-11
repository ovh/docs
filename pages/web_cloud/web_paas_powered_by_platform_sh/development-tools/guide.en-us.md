---
title: Tools
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Git

Git is the open source version control system that is utilized by Web PaaS.

Any change you make to your Web PaaS project will need to be committed via Git. You can see all the Git commit messages of an environment in the activity feed of the management console.

Before getting started, make sure you have it installed on your computer to be able to interact with Web PaaS.

> [!primary]  
> * [Install Git](https://help.github.com/articles/set-up-git/)
> * [Learn more about Git](https://git-scm.com/)
> 

## SSH

Secure Shell (SSH) is a secure, encrypted connection between your computer and the Web PaaS environment.  That includes connecting to your Git repository.  SSH offers two secure types of authentication, key-based and certificate-based.  We support both.

Certificate-based authentication will be used automatically when you use the [WebPaas CLI](/pages/web_cloud/web_paas_powered_by_platform_sh/development-cli) and run `webpaas ssh`.  You may force a login using `webpaas login -f` on the command line, provided you have a web browser available.

If you wish to use keypair authentication, see the [SSH page](/pages/web_cloud/web_paas_powered_by_platform_sh/development-ssh#keypair-based-authentication).
