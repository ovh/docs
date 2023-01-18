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

## Requirements

- Have an [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) that includes SSH access. With this access, you can install one or more alternative solutions online, to those offered by default in our web hosting plans.
- Be familiar with command line input.
- Be able to transfer files via FTP with a client like [FileZilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/).
- Configure your DNS zone to point your domain name (or subdomain) to your web hosting plan. This is particularly useful if you would like to host several websites in [multisites](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/) on your shared web hosting plan.
- Install [Composer](https://getcomposer.org/){.external} with the file 'composer.phar' in the root of your web hosting or in the target folder of your domain name.

## Instructions

You can use [shared web hosting](https://www.ovhcloud.com/en-gb/web-hosting/) to declare domains or subdomains on multiple websites. You need a domain or subdomain to deploy your website created with **Cecil**.

To help you declare a domain or subdomain on multiple websites on your hosting plan, go to our page “[Hosting multiple websites on your hosting plan](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/)”.

### Create the directory where your files will be located

Once you have logged in to your web hosting plan via SSH, create a root directory with the following command &nbsp;:

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

In the directory you just created, download Cecil&nbsp;:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Installation

Start the Cecil installation with the following command&nbsp;:

```sh
php cecil.phar new:site
```

Enter the information requested&nbsp;:

- your website title _(title)_
- _baseline_
- your website URL (e.g. `https://mywebsite.ovh`)
- a description of your website

![Cecil Installation](images/static_website_installation_cecil01.png){.thumbnail}

Once you have entered this information, you will now need to deploy the website by typing the following command&nbsp;:

```sh
php cecil.phar build
```

If you view the contents of the directory, you will see a `_site` directory. This directory will contain all HTML files and assets&nbsp;:

![Cecil Installation](images/static_website_installation_cecil02.png){.thumbnail}

You can now see the result by going to your domain name&nbsp;:

![Cecil Installation](images/static_website_installation_cecil03.png){.thumbnail}

#### Configuration of the pointing of the domain or subdomain

To view your website's results on your browser, change the way your domain or subdomain points to the `_site` directory you created when you installed **Cecil**.

If your domain name or subdomain is hosted at OVHcloud, please refer to our guides for [DNS configuration](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/) and setting up [multisites on your web hosting plan](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/).

### Configure your website

You can configure general information for your website in the file `config.yml`&nbsp;:

```sh
nano config.yml
```

Replace the default information with your own and save the file.

![YAML configuration file](images/static_website_installation_cecil04.png){.thumbnail}

### Create a new page

You can create pages containing your website’s data using files in the _Markdown_ format. These pages are customisable. **Cecil** includes the _template_ [Twig](https://twig.symfony.com/){.external} engine, which is used by default with the _framework_ [Symfony](https://symfony.com/){.external}.

Folders and files are organised as follows:

- `assets`: contains graphics, audio, video, JavaScript, and styles (CSS, Sass) 
- `layouts`: directory where will be the _templates_
- `pages`: where your _Markdown_ files will be
- `_site`: directory that contains the generated files and is pointed to by your domain name
- `static`: all static PDF files

### Create a _Markdown_ file in the command line

At the root of the site, type the following command:

```sh
php cecil.phar new:page mypage.md
```

A file `mypage.md` is then created in the root directory `/pages`.

Replace `mypage` with the name of your own page.

![Cecil Installation](images/static_website_installation_cecil05.png){.thumbnail}

#### Generate static files

At the root, type the following command &nbsp;:

```sh
php cecil.phar build
```

Your file is located in the directory `_site/mypage/`&nbsp;:

![Cecil Installation](images/static_website_installation_cecil06.png){.thumbnail}

You can view it on your server by typing your website URL, followed by `/mypage/`&nbsp;:

![Browser Result](images/static_website_installation_cecil07.png){.thumbnail}

### Customise your website files

#### Change on server

You can edit _Markdown_ files directly on the Web Hosting server. With your [Performance Hosting](https://www.ovhcloud.com/en-gb/web-hosting/performance-offer/) SSH access, you can use [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} or [vim](https://www.vim.org/){.external}.
The screenshots of this tutorial were taken under **GNU nano**.

Edit the file `mypage.md` located in the `pages` directory by typing the following command if you are at the root of your site&nbsp;:

```sh
 nano pages/mypage.md
```

Replace `mypage` with the name of your own page.

![Editing file in GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Add a few lines using the _Markdown_&nbsp; syntax:

![Adding content to file](images/static_website_installation_cecil09.png){.thumbnail}

Delete the files in the cache using the following command&nbsp;:

```sh
php cecil.phar clear
```

Rebuild your pages after saving your file&nbsp;:

```sh
php cecil.phar build
```

Then return to your page to see the result&nbsp;:

![Page updated](images/static_website_installation_cecil10.png){.thumbnail}

#### Change your workstation

If you prefer to use your usual code editor, log in with an FTP client on your server to retrieve the files on your computer&nbsp;:

![FileZilla Download](images/static_website_installation_cecil11.png){.thumbnail}

You can now edit the files in your I.D.E.&nbsp;:

![View in Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

Simply upload your modified files or new files to your server and *rebuilder* to get your pages online.

### Add the page generated to your site menu

To add this new page to the website menu, manually change the header of the file '.md' by adding the following line&nbsp;:

```sh
menu: main
```

### Conclusion

**Cecil** is a tool to effectively build a static site from *Markdown* files, a markup language easier to implement than HTML. Organising Markdown files determines the hierarchy of your web pages.<br/>
Using a template engine, widely used in the web developer community, will allow you to easily find many sources on the internet to design a professional looking interface.

## Go further

[Cecil application official website](https://cecil.app/){.external}

A [Markdown format guide](https://www.markdownguide.org/){.external}

Our [FileZilla user guide](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/)