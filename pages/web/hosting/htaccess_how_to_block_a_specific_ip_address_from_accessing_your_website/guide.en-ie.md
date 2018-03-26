---
title: '.htaccess, how to block a specific IP address from accessing your website'
excerpt: How to block a specific IP address from accessing your website
slug: htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website
legacy_guide_number: g1970
---

You just have to create a file called .htaccess and place it in the www folder (or in a particular directory that you wish to restrict access to).

## To deny access
This file should contain the deny rules. Each rule is specified on a line as follows:


```
deny from IP_address
or deny from IP_block
or deny from domain
```


Then all you have to do is replace the generic term with the element that you wish to block. Here are some examples:


- If you want to block the 192.168.1.2 IP address, you type:


```
deny from 192.168.1.2
```


- If you want to block all the 192.168.x.x IP addresses, you type:


```
deny from 192.168
```


- If you wanted to block all the IPs with a Wanadoo ID (this is just an example...), you would type:


```
deny from .wanadoo.com
```





## To allow
In order to allow certain IPs, you should replace deny with allow (compared to the examples above)

Example:
If you want to allow the 192.168.1.2 IP address, you type:


```
order deny,allow
deny from all
allow from 192.168.1.2
```


However, you cannot allow an incomplete IP block, in other words you can enter:


```
order deny,allow
deny from all
allow from 192.168.1
```


This will work, but if you enter the following you will get a 500 error, for example: 


```
order deny,allow
deny from all
allow from 192.168
```




## 
Find out more about the .htaccess file in the following guide: [Click here](https://www.ovh.co.uk/g1967.mutualise_tout_sur_le_fichier_htaccess)

