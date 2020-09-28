---
title: '.htaccess, URL rewriting using mod_rewrite'
excerpt: Mod_rewrite is available on all web hosting packages
slug: htaccess_url_rewriting_using_mod_rewrite
legacy_guide_number: g1971
---


## Simple redirection

- Edit the .htaccess file:


```
RewriteEngine On
RewriteRule .* testing.php
```



This code redirects each request to the testing.php script. 


- or:


```
RewriteEngine On
RewriteRule letstest /test_wslash/testing.php
```



This code redirects each /letstest request to the /test_wslash/testing.php script.


## Redirect example.com to www.example.com

- This restricts website access to www.example.com, which is good for SEO:


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^example.com$
Rewriterule ^(.*) http://www.example.com/$1 [QSA,L,R=301]
```





## Redirect to a particular folder without displaying the folder in question

- If your website is not in the target folder, this will force all requests to use www.example.com, when in reality the page is called: ww.example.com/MySite


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^example.com
Rewritecond %{REQUEST_URI} !^/MySite
Rewriterule ^(.*)$ /MySite/
```





## URL rewriting

mod_rewrite enables URL rewriting


- .htaccess :


```
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```



These rules run the testing.php script with the GET variable containing the URL. 


- php:


```
<?
print("testing server <br/>\n");
print("var: {$_GET['var']}\n");
?>
```





## Automatically redirect visitors to SSL when they visit the unsecured version of the website

The mod_rewrite module enables you to rewrite URLs. 


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.example.com/$1 [R,L]
```


## Go further

Join our community of users on https://community.ovh.com/en/.
