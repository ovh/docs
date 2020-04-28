---
title: What else can you do with the .htaccess file?
excerpt: This guide explains how else you can use the .htaccess file
id: '1972'
slug: what_else_can_you_do_with_the_htaccess_file
legacy_guide_number: g1972
---


## Prevent the content of a directory from being listed
To prevent users from listing all the files contained in a directory in the absence of an index (.cgi, .html, .php etc ....), create an .htaccess file containing the following line:


```
Options -Indexes
```




## Redirect error messages
If you want to use custom error messages or associate each type of error with an associated error page, create a .htaccess file containing the following lines: 


```
ErrorDocument error number 
message_or_destination
```


Replace "error_number" with the corresponding number. The most common errors are as follows:


- 401: Authorisation required. This error is generated when a visitor enters an incorrect username/password when acessing a protected file or directory.
- 403: Access denied. This error is created when accessing a directory which does not contain an index.html (or index.cgi, etc.) file and the server configuration prohibits files in the directory being displayed. 
- 404: Not Found. The file the visitor is trying to -see doesn't exist. 
- 500: Internal Server Error. Usually this indicates a permissions error on your CGI script.


Replace "message_or_destination" with the action to take. To display a simple message, type the following message in inverted commas. 
To redirect to a page, use the file's access page. Here are to examples, to clarify:


- You should write "Sorry you do not have permission to access this file" when you get a 403 error. You add the line underneath your .htaccess file:


```
ErrorDocument 403 "Sorry, you do not have the right to access this file"
```


- You should send 404 errors to your custom 404.html page (for your domain: domain.com):


```
ErrorDocument 404 http://www.domain.com/404.php
```



You can also redirect the error to a CGI script which will show a message

You can also redirect the error to a CGI script that will display a message, redirect the visitor to another file depending on the URL that was originally requested (available in the REQUEST_URI environment variable), and/or send an email, etc. To do this, add the following line to your .htaccess file:


```
Errordocument 404 /cgi-bin/error.cgi?type=404
```


You only need to make an adjustment if the page requested is in https (SSL). In this case, you have to add:


```
Errordocument 401 /~login/error.html
```


If that doesn't work, check the Internet Explorer properties > Advanced tab and then untick 
"Show simplified HTTP error messages".


## Specify a different index file
The server default for a directory's default file is index.html, index.htm or index.php. If you want to set your DirectoryIndex to another file,you can insert the code format to your .htaccess file:


```
DirectoryIndex file_name
```


For example, if you want to use the home.html as the index page, add the following code:


```
DirectoryIndex home.html
```




## Redirections
To do this, click on: [This link](https://www.ovh.co.uk/g1339.redirection-nom-de-domaine#redirection_web_via_le_htaccess)


## URL rewriting
For URL rewriting, click on: [This link](https://www.ovh.co.uk/g1971.reecriture_durl_grace_au_mod_rewrite)


## 
Find out all about the .htaccess file [Here](https://www.ovh.co.uk/g1967.mutualise_tout_sur_le_fichier_htaccess)

