---
title: What else can you do with the .htaccess file?
excerpt: This guide explains how else you can use the .htaccess file
updated: 2023-05-23
---

**Last updated 23rd May 2023**

## Objective

This tutorial introduces you to the main features of the file ".htaccess" for your web hosting.

The .htaccess file is an Apache configuration file (HTTP) that is run by the web server of your Web Hosting plan. It allows you to define specific rules for a directory and all of its subdirectories. You can create multiple .htaccess files in [the FTP space](/pages/web_cloud/web_hosting/ftp_connection/) of your Web Hosting plan. 

If it does not already exist in your FTP space, you can add it by creating a file that you name **.htaccess** in the directory for which you want to apply one or more of the rules described in this tutorial.

To use the .htaccess file correctly, you need to know and follow the following rules: 

- Place **only one** ".htaccess" file per directory or subdirectory to avoid conflicts between different .htaccess files.
- The .htaccess file is invisible to users visiting your website.
- The rules declared in a .htaccess file apply to the entire directory where the ".htaccess" file is installed, as well as to all subdirectories in that same directory.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ca/directory/) and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>
> The following examples should be set up in a ".htaccess" file. Please note that the rules you define in this file have a direct impact on your website. Always check the rules you add before applying them to your website. 
> 

**Find out the main operations you can do with a .htaccess file.**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/)

## Instructions

### Allow or restrict access to a directory or website for one or more IP addresses

This feature is very useful and strengthens security for your websites. It can help reduce the risk of your website being hacked.

For more information, see our tutorial: ["How do I block access to my website for certain IP addresses via a .htaccess file?"](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Set an encrypted access password to access a directory or website

Via the .htaccess file, you can set up protected access (with an encrypted password) to your data stored on your hosting.

For more information, see our tutorial ["Protect your website’s administration interface with a .htaccess file"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/).

### Specify a different index file

By default, the **index** file in a directory is *index.html*, *index.htm*, or *index.php*. If you prefer it to be another file, you can add a line of this type in your .htaccess:

```bash
DirectoryIndex File_Name
```

For example, if you want to use the page **home.html** as your index page, add the following line:

```bash
DirectoryIndex home.html
```

### Prevent listing of directory contents

To prevent users from viewing a list of all files in a directory without an **index** file (.cgi, .html, .php, etc.), create a **.htaccess** file containing the line below:

```bash
Options -Indexes
```

### Rewrite URLs

With the **mod_rewrite** module of the Apache HTTP Web server preinstalled on your Web Hosting plan, you can use this feature to redirect:

- All HTTP requests to a single file on your website.
- A portion of HTTP requests to a single file on your website.
- Your domain name to its www subdomain.
- Requests to a particular folder, without displaying the folder concerned.
- Website requests to HTTPS when a URL was opened in HTTP.

You can find more information in our tutorial: ["Rewrite the URL for accessing my website with mod_rewrite via the .htaccess file"](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Redirect error messages

To customise and/or redirect your error messages to a web page, create a **.htaccess** file containing the following line of code:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Replace **Error_Code_Number** with the corresponding Apache HTTP error code number. 

You can find more information on this feature in the [official Apache documentation](https://httpd.apache.org/docs/trunk/en/custom-error.html){.external}.

The most common HTTP error codes are:

- 401: Authorisation required: This error is generated when a visitor enters an incorrect login/password when accessing a protected file or directory.
- 403: Access denied: This error appears when accessing a directory where the *index.html* file (or *index.cgi*, etc.) is missing and if the server configuration prevents the directory files from being displayed.
- 404: Not Found: The file the visitor is trying to view does not exist.
- 500: Internal Server Error: This error appears when a script has not run correctly or the script or script rights are incorrect.

Replace **Message_Or_Destination** with the action to perform. To display a message directly, type the message in quotation marks. To redirect to a specific page, enter the path to that page. 

Below are two concrete examples:

- You want to indicate *"Sorry, you do not have permission to access this file"* if the visitor encounters an error **403**. Add the line below to your .htaccess file:

```bash
ErrorDocument 403 "Sorry, you do not have permission to access this file"
```

- You want to replace **404** errors by your custom page *404.html* (for your domain name: domain.tld). Add the line below to your .htaccess file:

```bash
ErrorDocument 404 http://domain.tld/404.html
```

You can also redirect an error to a **C**ommon **G**ateway **I**nterface (**CGI**) script. You can code a script in **CGI** to, for example, do the following:
 
- Display a message
- Redirect the visitor to another file according to the URL initially requested (available in the environment variable **REQUEST_URI**)
- Send an email

For example, to redirect an error to a **CGI** script, add the following line to your .htaccess file:

```bash
ErrorDocument 404 /cgi-bin/error.cgi?type=404
```

The line above will redirect any visitor who encounters an error **404** to your script *error.cgi*. This will execute the directives it contains, specifically against error **404**.

## Go further <a name="go-further"></a>

[Logging in to your Web Hosting plan’s FTP space](/pages/web_cloud/web_hosting/ftp_connection/)

[Tutorial - How do I block access to my website for certain IP addresses via a .htaccess file?](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Protecting your website's administration interface with a .htaccess file](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/)

[Tutorial - Rewrite the URL for accessing your website using mod_rewrite via the .htaccess file](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
