---
title: What to do if your WordPress site is hacked
excerpt: ''
slug: what_to_do_if_your_wordpress_site_is_hacked
legacy_guide_number: g1874
---


## 
You have a WordPress website hosted at OVH, and you realise that your website is no longer reachable, redirects to another site, or is full of unwanted messages. 

OVH does not offer WordPress support by email or phone. However we can tell you the steps to take if you are hacked.


## Why was my website hacked?
Why was my website hacked? What am I supposed to do now?

A website is usually hacked because the product is out of date, an unofficial plugin has been used or the password is too simple. 

There is no way to elimiate risk but we can limit it.  

There are a number of practical measures that you can take to fix the problem once it has happened, or to prevent it from happening (for example by regularly updating your version of WordPress, your themes and plugins...).

This guide will detail the steps to take to recover your website.


## Scan your local computer
Before you start recovering your website, you must make sure that your computer was not the origin of the attack. 

Check your local computer for viruses and/or infections with malware. It is a good idea to use more than one (local and online). This advice stands for Windows, Mac and Linux.


## Assess the damage
Now it is time to assess the situation and plan how to proceed.
First, work out when you were hacked to see whether or not OVH can recover your data. 
In the rest of this guide we will explain how to locate the intrusion, and then explain how to deal with two different scenarios.


## 
Before restoring your website, it is important to check when your web files (FTP) were last modified, in order to find and fix security flaws.
It is not possible to undertake a detailed procedure to locate the exact source of the intrusion, but usually a hacker will have exploited a flaw in the script in order to make an HTTP request. 

All the HTTP requests are available in your server logs (https://logs.ovh.net/your_domain).
Replace "your_domain" with your domain name and the extension. ex: "ovh.com".

- 1 Locate the date and time contained in the email you received*
- 2 Look at your logs starting with this time, gradually enlarging the search field to include earlier times until you find an incorrect entry (strange, different to others, etc.). This might take some practice or a little bit of understanding about the format requests take depending on the case. Pay particular attention to POST requests, which are the main source of a hack
- 3 Locate the script used for this request
- 4 Analyse the script to locate the flaw
- 5 Fix the flaw


*You will only get an email if your website has been blocked. If it has not been blocked, you have to check the date of the last modification from the FTP space (the file dates).

Just deleting the malicious code added by the hacker is not enough, you have to fix the flaw in its entirety.

We recommend that you ask a [web master](https://partners.ovh.com) to help with this sort of task and/or seek guidance from the official WordPress forum.
The OVH support team cannot provide direct assistance for this type of request under any circumstances.


## Restoring your backup
WordPress is made up of files and a database. You can restore your files to an earlier date. OVH gives you a 3-week history of the files in your webspace. As for the database you can go back seven days.
Restore does not fix the security flaws, you just replace all the infected files with files from an uninfected backup.


## Restore your files via FTP
You can restore the whole of your FTP space from the control panel but this can be complicated if you have multiple domains attached to the same hosting package. 

If you have multiple websites on your webspace, it is better to only restore the directory in question. See this guide for more [info](https://www.ovh.co.uk/g1593.retrieve-full-backup-or-specific-file-in-FTP-via-FileZilla)


## Restoring your SQL database
If you need to, see our two guides, to [export](http://www.ovh.co.uk/g1394.exportation-bases-de-donneesde) your database.

Once you have backed up your database (dump), you have to delete all the tables from [phpMyAdmin](https://phpmyadmin.ovh.net) in order to import your backup.


## What should I do once I have restored my backup?
To close known security holes, you must update all applications, plugins, extensions and themes. 

You should also uninstall any plugins that you do not need.

If the attack occurred before the last backup period, here's how to reset your WordPress site:

## You cannot log in to your WordPress administrator panel
In this instance, reset your [administrator password](https://codex.wordpress.org/Resetting_Your_Password) by following the official WordPress guide. 

If you find this too complicated, you can update your email from [phpMyAdmin](https://phpmyadmin.ovh.net) in the userstable. Then go back to the login page, click on Forgotten password, and wait to receive an email.


## Download new WordPress files and replace the existing ones.
By installing new database files you can guarantee that you are using non-infected content. 

- Go to the official [WordPress](https://fr.wordpress.org).


Usually there will be a link where you can download the latest stable version of the CMS. 

The file you download will normally be compressed (zipped), you have to be able to decompress (unzip) it. There is help available for this online. 

Once it is decompressed, transfer the files to your FTP space. You can follow this guide if you need to [here](https://www.ovh.co.uk/hosting/guides/g1374.mutualise_mettre_mon_site_en_ligne).

If you have multiple websites on the same web space, the files must be transfered to the directory in question. 

You have to modify the wp-config.php file to activate the database link.

To do this you will need the email you received when you created the database. 

If you cannot remember your database password, you can change it from your customer account. The procedure is explained in this [guide](https://www.ovh.co.uk/g1374.mettre-mon-site-en-ligne)
Important: check for updates in the WordPress admin panel.


## Useful information
We recommend that you only use official WordPress plugins. Non-official plugins are not necessarily maintained by the software publisher. They might also contain malicious code.

