---
title: 'Web hosting: How to fix the 500 Internal Server Error'
excerpt: 500 Internal Server Error
id: '1987'
slug: web_hosting_how_to_fix_the_500_internal_server_error
legacy_guide_number: g1987
---


## .htaccess
If the .htaccess syntax is incorrect, the web server will return a 500 Internal Server Error. To confirm whether .htaccess is the cause, rename the .htaccess file .htaccess_bak for example. 

Find out more:[]({legacy}1967)


## Permissions:
You must follow a few security rules concerning the permissions you give to your scripts. 

- your website's root folder must be set to 705 (the default permissions set up by OVH). This is your FTP server / (slash) or . (point) directory, do not change it. 
- other directories must be set to no higher than 755,
- php/cgi scripts must be set to no higher than 755.




## Script error
If you program in perl for example, an error in your script is summed up by a 500 error. Due to security you will not be given more details. To debug your scripts, you can use the telnet/ssh connection (available with Professional hosting and upwards).

Click here for more information: []({legacy}1962)

