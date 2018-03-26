---
title: Avoid the common pitfalls of making your website secure with SSL
excerpt: Avoid the common pitfalls of making your website secure with SSL
slug: avoid_the_common_pitfalls_of_making_your_website_secure_with_ssl
legacy_guide_number: g2220
---


## Mixed content
Your website is not loading external elements, such as Facebook and Twitter buttons? Interactions on your webpage are not working as they did in HTTP? You probbably have an issue with mixed content. 

For a few years, web browsers including Google Chrome, Mozilla Firefox and Internet Explorer have been preventing HTTPS websites from loading page elements if they are on an HTTP URL. This is so that the confidentiality provided by HTTPS is not compromised by an element loaded in HTTP. 

In most cases, this refers to external scrips, from other websites like social networks. In this instance you just have to replace http with https in order to load these scripts. 

Please take note however, some websites use CDNs to host Javascript libraries (like JQuery for example) If the CDNs deliver the library with a URL in http, your website could be affected. 

How do I know if my website is affected?

Debugging tools provided by Mozilla Firefox and Google Chrome can tell you whether or not your website contains elements which are blocked due to mixed content. The documentation available on [the Mozilla Developer Network](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/MixedContent) tells you more about using these tools for mixed content.


## Duplicate content
"Duplicate content" means having the same content on several different urls. Search engines do not appreciate this because they see it as an attempt to improve ranking. They therefore penalise websites with duplicate content. 

In order to avoid this type of problem, we suggest that when your site works correctly in HTTPS, you should redirect HTTP content to HTTPS. This will mean that your visitors will be automatically sent to the HTTPS address and only one address will be available for the same content. 

Here is an example redirection to implement within an .htaccess file at the root of the website:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```




## Go back to HTTP from HTTPS
If you want to restrict your website to HTTP and not use the HTTPS protocol, you just have to force it via the .https file. 

In doing so, you visitors will be automatically sent to the HTTP address and only one address will be available for the same content, even if they access it in HTTPS. 

Here is an example redirection to implement in the .htaccess file at the root of your website, to redirect HTTPS to HTTP:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.votredomaine.fr/$1 [R,L]
```



