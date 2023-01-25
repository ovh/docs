---
title: "Tutorial - Installation and configuration of Cecil, a static site generator (SSG) in PHP"
slug: install-configure-cecil
excerpt: "This tutorial explains how Cecil allows you to create your static website using a modern template engine (Jamstack)"
section: 'Tutorials'
order: 04
---

**Last updated 17th January 2023**

## Objective

This tutorial will show you how to install and configure [Cecil](https://cecil.app/){.external}. It is an application written in PHP that can generate and manage static web pages.

A website essentially composed of static web pages guarantees a better loading time for your visitors and greater security. Without dynamic content, your pages are more robust against cyber attacks. By creating a static website, you get more freedom to create the website of your choice. You will also save time since you will not have to start from scratch.

**This tutorial explains how Cecil allows you to create your static website using a modern template engine (Jamstack).**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> If you experience any difficulties following the steps in this tutorial, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/directory/) or reach out to the OVHcloud community. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- Have an [OVHcloud web hosting plan](https://www.ovhcloud.com/asia/web-hosting/) that includes SSH access. With this access, you can install one or more alternative solutions online, to those offered by default in our web hosting plans.
- Be familiar with command line input.
- Be able to transfer files via FTP with a client like [FileZilla](https://docs.ovh.com/asia/en/hosting/web_hosting_filezilla_user_guide/).
- Configure your DNS zone to point your domain name (or subdomain) to your web hosting plan. This is particularly useful if you would like to host several websites in [multisites](https://docs.ovh.com/asia/en/hosting/multisites-configuring-multiple-websites/) on your shared web hosting plan.
- Install [Composer](https://getcomposer.org/){.external} with the file `composer.phar` in the root of your web hosting or in the target folder of your domain name.

## Instructions

You can use [shared web hosting](https://www.ovhcloud.com/asia/web-hosting/) to declare domains or subdomains on multiple websites. You need a domain or subdomain to deploy your website created with **Cecil**.

To help you declare a domain or subdomain on multiple websites on your hosting plan, go to our page “[Hosting multiple websites on your hosting plan](https://docs.ovh.com/asia/en/hosting/multisites-configuring-multiple-websites/)”.

### Create the directory where your files will be located

Once you have logged in to your web hosting plan via SSH, create a root directory with the following command:

```sh
mkdir mystaticwebsite
```

Replace `mystaticwebsite` with the folder name of your choice (no accents and no spaces).

Then go to this directory:

```sh
cd mystaticwebsite
```

Replace `mystaticwebsite` with your folder name.

### Download

In the directory you just created, download Cecil:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Installation

Start the Cecil installation with the following command:

```sh
php cecil.phar new:site
```

Enter the information requested:

- Your website _(title)_
- A _baseline_
- Your website URL (e.g. `https://mywebsite.ovh`)
- A description of your website

![Cecil Installation](images/static_website_installation_cecil01.png){.thumbnail}

Once you have entered this information, you will now need to deploy the website by typing the following command:

```sh
php cecil.phar build
```

If you view the contents of the directory, you will see a `_site` directory. This directory will contain all HTML files and assets:

![Cecil Installation](images/static_website_installation_cecil02.png){.thumbnail}

You can now see the result by going to your domain name:

![Cecil Installation](images/static_website_installation_cecil03.png){.thumbnail}

#### Configuration of the pointing of the domain or subdomain

To view your website's results in your browser, change the way your domain or subdomain points to the `_site` directory you created when you installed **Cecil**.

If your domain name or subdomain is hosted at OVHcloud, please refer to our guides for [DNS configuration](https://docs.ovh.com/asia/en/domains/web_hosting_how_to_edit_my_dns_zone/) and setting up [multisites on your web hosting plan](https://docs.ovh.com/asia/en/hosting/multisites-configuring-multiple-websites/).

### Configure your website

You can configure general information for your website in the file `config.yml`:

```sh
nano config.yml
```

Replace the default information with your own and save the file.

![YAML configuration file](images/static_website_installation_cecil04.png){.thumbnail}

### Create a new page

You can create pages containing your website’s data using files in the Markdown format. These pages are customisable. **Cecil** includes [Twig](https://twig.symfony.com/){.external}, the template engine used by default with the [Symfony](https://symfony.com/){.external} framework.

Folders and files are organised as follows:

- `assets`: Contains graphics, audio, video, JavaScript, and styles (CSS, Sass).
- `layouts`: Contains templates.
- `pages`: Contains Markdown files.
- `_site`: Directory that contains the generated files and is pointed to by your domain name.
- `static`: Contains all static PDF files.

### Create a Markdown file in the command line

At the root of the site, type the following command:

```sh
php cecil.phar new:page mypage.md
```

A file `mypage.md` is then created in the root directory `/pages`.

Replace `mypage` with the name of your own page.

![Cecil Installation](images/static_website_installation_cecil05.png){.thumbnail}

#### Generate static files

At the root, type the following command:

```sh
php cecil.phar build
```

Your file is located in the directory `_site/mypage/`:

![Cecil Installation](images/static_website_installation_cecil06.png){.thumbnail}

You can view it on your server by typing your website URL, followed by `/mypage/`:

![Browser Result](images/static_website_installation_cecil07.png){.thumbnail}

### Customise your website files

#### Change on server

You can edit Markdown files directly on the Web Hosting server. With your [Performance Hosting](https://www.ovhcloud.com/asia/web-hosting/performance-offer/) SSH access, you can use [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} or [vim](https://www.vim.org/){.external}.
The screenshots of this tutorial were taken under **GNU nano**.

Edit the file `mypage.md` located in the `pages` directory by typing the following command if you are at the root of your site:

```sh
nano pages/mypage.md
```

Replace `mypage` with the name of your own page.

![Editing file in GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Add a few lines using the Markdown syntax:

![Adding content to file](images/static_website_installation_cecil09.png){.thumbnail}

Delete the files in the cache using the following command:

```sh
php cecil.phar clear
```

Rebuild your pages after saving your file:

```sh
php cecil.phar build
```

Then return to your page to see the result:

![Page updated](images/static_website_installation_cecil10.png){.thumbnail}

#### Change your workstation

If you prefer to use your usual code editor on your computer, log on to your server with an FTP client and retrieve the files:

![FileZilla Download](images/static_website_installation_cecil11.png){.thumbnail}

You can now edit the files in your I.D.E.:

![View in Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

Simply upload your modified files or new files to your server and rebuild to get your pages online.

### Add the page generated to your site menu

To add this new page to the website menu, manually change the header of the `.md` file by adding the following line:

```sh
menu: main
```

### Conclusion

**Cecil** is a tool to effectively build a static site from *Markdown* files, a markup language easier to implement than HTML. Organising Markdown files determines the hierarchy of your web pages.<br/>
Using a template engine, widely used in the web developer community, will allow you to easily find many sources on the Internet to design a professional looking interface.

## Go further <a name="go-further"></a>

[Cecil application official website](https://cecil.app/){.external}

[A Markdown format guide](https://www.markdownguide.org/){.external}

[Our FileZilla user guide](https://docs.ovh.com/asia/en/hosting/web_hosting_filezilla_user_guide/)