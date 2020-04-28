---
title: 'How to password protect a directory on your website'
slug: how_to_password_protect_a_directory_on_your_website
excerpt: 'How to password protect a directory on your website'
legacy_guide_number: g1968
---

## Create the password file
Firstly, you have to create the file which will contain the list of usernames and passwords which are allowed to access the site. Usually, you create a .htpasswd file for this which will then be used by the .htaccess file. It is a simple text file, which contains usernames and their encrypted passwords. 

In Windows, you cannot directly create a file named .htaccess or .htpasswd. You must give it another name, transfer it to your web space and then rename it .htaccess or .htpasswd using your FTP client.

The .htpasswd should not necessarily be in the same location as the .htaccess file. For example, you could place it in the webroot, and use it to protect different website directories, given that a single .htpasswd file can be used by several .htaccess files. The .htpasswd file must contain one line per user specifying the username and password.

These lines are as follows:

```
username:encrypted_password
```

Example for username: "Admin" and password: "ovh1234" this will give the following: Admin:gl0IiOirI2n6M

Once the .htpasswd password has been created, you just have to place it where you have chosen, and go to the next step: creating .htaccess files.

Remember to add a carriage return after the encrypted password.

## Create the .htaccess file
To block access to an entire directory, create a .htaccess text file as follows and place it in to the directory you want to password protect. 

IMPORTANT, In the following example, you have to replace your_ftp_username with your FTP username, you will find this in your control panel.


```
AuthUserFile /home/your_ftp_username/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Restricted access"
AuthType Basic
require valid-user
```


In the example above, your .htpasswd file is located in the /www folder on your web server.

## For previous products
For the Start and 1000GP solutions, the path you need to place in the authuserfile is different. 
You will have got it in the activation email. If not, or if you have lost this email, you can use the following PHP script:

```
<?php
echo realpath("path.php");
?>
```




## Block access to one or more specific files
To block access to one or more specific files, you just have to add the tags (one FILES tag per file):


```
<Files test.php>

AuthUserFile /home/your_ftp_login/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Restricted access"
AuthType basic
require valid-user

</Files>
```