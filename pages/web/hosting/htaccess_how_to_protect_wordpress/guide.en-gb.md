---
title: "Tutorial - Using the htaccess file with WordPress"
slug: use-htaccess-with-wordpress
excerpt: "Find out how to secure your WordPress blog with one or more htaccess files"
section: 'Tutorials'
order: 07
---

**Last updated 07th February 2023**

## Objective

This tutorial will show you how to configure certain features of your web hosting plan with one or more **.htaccess** files, namely to modify settings for part or all of your website (redirections, access bans, restricted permissions, cache control, etc.).


> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) or the [WordPress support](https://wordpress.com/support/){.external} if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

**This tutorial explains how to secure your WordPress with one or more .htaccess files.**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) with WordPress installed
- Using an FTP client such as [FileZilla](https://filezilla-project.org/), as explicated in our [FileZilla tutorial](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/)

**.htaccess** files can be created and modified with text editors, for example:

- [Notepad](https://support.microsoft.com/en-gb/windows/help-in-notepad-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c){.external} on Windows
- [TextEdit](https://support.apple.com/en-gb/guide/textedit/welcome/mac){.external} on macOS 
- [Notepad++](https://notepad-plus-plus.org/){.external}

## FAQ

### What is a **.htaccess** file?

You can use a **.htaccess** file to configure a web server. For web hosting plans, this is the open source web server **Apache**. The syntax of this file is defined by the organisation that develops and maintains **Apache**. Unlike most configuration files on a server, **.htaccess** files are located in the directories of websites, more precisely in the FTP storage space of your web hosting plan. A **.htaccess** file will affect the directory in which it is located and all its subdirectories.

Our web hosting plans do not allow server configuration files. However, **.htaccess** files provide the ability to modify certain characteristics and behaviours. In addition, you do not need to reboot the **Apache** server for the instructions and modifications written to the **.htaccess** file to be applied. All of our [OVHcloud web hosting](https://www.ovhcloud.com/en-gb/web-hosting/) offers allow you to configure **.htaccess** files.

The dot in front of the file name **.htaccess** (which itself does not have an extension) denotes a hidden file. Furthermore, these files are not accessible by external users visiting your website.

### What is a web server?

A web server is software that enables information to be exchanged over a network using the Hypertext Transfer Protocol (HTTP).<br>
There are several, including *Apache*, *Nginx*, *Tomcat* or the http module included in *NodeJS*.

### What precautions should be taken?

An incorrect configuration of your **.htaccess** file may generate errors on your server (such as a 500 error: *Internal Server Error*), and make your service totally unavailable, even for you. Get in the habit of making systematic backups of the versions of your functional files, so that you can return to an earlier state in the event of an anomaly following a modification.

Similarly, if you are not used to working with this type of file, try each item you edit. This way, you will not have to waste time to find the line(s) that are causing your web server to stop working. A configuration error or a simple typo can compromise your web server’s configuration and therefore its operation.

### Which tools to use?

- An FTP client to transfer your files (FileZilla, Cyberduck)
- A text editor

### Where are the .htaccess files located in WordPress?

As mentioned in the introduction, you can have several **.htaccess** files on a single web hosting plan. Each of these files defines the rules for the directory where it is located, as well as the subdirectories of this parent folder.

The majority of modifications will be made to the **root of the website**. The **.htaccess** file at the root of the website, installed by default, contains the following lines:

```bash
# BEGIN WordPress
# The directives (lines) between “BEGIN WordPress” and “END WordPress” are generated
# dynamically, and must be modified only through WordPress filters.
# Any changes to directives between these markers will be overwritten.

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

**Explanations of the above code**:

- **#**: Character used to indicate a comment line.
- **RewriteEngine On**: Enables the Apache `mod_rewrite` module, which allows URL rewriting on the fly (also allows you to redirect a URL to another URL).
- **RewriteRule**: This syntax is written using the `RewriteRule Template Substitution` schema. The script can appear several times in the **.htaccess** file. (This is the case in the default file that you find at the root of your WordPress installation.) The order in which you write to the file is important. Be careful about the order in which you write your rules.
- **RewriteBase**: Indicates that the root of the site is `/`.
- **RewriteCond**: These are preconditions for the rule that follows directly. In our case, the first precondition excludes URLs containing a path to an actual file, while the second precondition excludes subdirectories.

### What can I add to a **.htaccess** file with WordPress?

There are several ways to modify the settings that will change the server's behaviour (although there are some limitations depending on the hosting):

- Edit your server’s configuration files
- Add or edit directives in the **wp-config.php** configuration file in the root directory of your website
- Modify or add directives in the **.htaccess** file at the root directory

## Instructions

> [!warning]
>
> Before following the steps below, you must redirect HTTP requests to HTTPS. To do this, follow the instructions in our guide [“Activating HTTPS on your website with an SSL certificate”](https://docs.ovh.com/gb/en/hosting/activate-https-website-ssl/#step-1-activate-the-ssl-certificate-on-the-web-hosting-plan).

### Prevent the display of directories and subdirectories

To prevent your website visitors from viewing the contents of subdirectories (and incidentally give information to hackers about the themes or extensions used), block the visualisation of the content by adding this line to your **.htaccess** file:

```bash
Options All -Indexes
```

### Protect your configuration file

Your **wp-config.php** file, located at the root of your website, contains sensitive configuration information. Block access to this file by adding the following lines to your **.htaccess** file:

```bash
<Files ~ "^.*\.([Hh][Tt][AaPp])">
    order allow,deny
    deny from all
    satisfy all
</Files>
```

### Block an IP address

If you have identified a malicious IP address, enter the following line in your **.htaccess** file:

```bash
<Limit GET POST>
    order allow,deny deny from xxx.xxx.xxx.xxx
    allow from all
</Limit>
```

Replace `xxx.xxx.xxx.xxx` with the IP address to block.

For more information on this subject, please refer to our [guide on IP access restriction via the .htaccess file](https://docs.ovh.com/gb/en/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

#### Block access to the wp-admin directory (or other directories) by IP

The **wp-admin** directory is used to access your administration interface. (The method also works with other directories whose URLs do not lead to an administrative interface.) To protect this directory, restrict access to one or more IP addresses using the following code to place in your **.htaccess**:

```bash
<Limit GET POST PUT>
    order deny,allow deny from all
    allow from xxx.xxx.xxx.xxx
    allow from xxx.xxx.xxx.xxx
</Limit>
```

### Important information to remember

- Save a working version of your **.htaccess** file before you make any changes.
- If the modifications you have made cause an error, replace (via your FTP client) the online **.htaccess** file with the previous version.
- You can manage some settings in your **wp-config.php** file.
- **.htaccess** files are particularly effective for URL management, redirections and website security.

## Go further <a name="go-further"></a>

[Official Apache .htaccess tutorial](https://httpd.apache.org/docs/2.4/en/howto/htaccess.html)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
