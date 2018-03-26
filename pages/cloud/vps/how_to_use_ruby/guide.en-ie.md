---
title: How to use Ruby
excerpt: General information on the ruby distribution
slug: how_to_use_ruby
section: Advanced usage
---


## 
During the creation of the Ruby distribution, we stayed as close as possible to the default configuration. This will allow you to freely customize your VPS.
We installed the dependencies you need to install / compile your rubygems and use RubyOnRails.

Here are the components of your VPS:

- Debian Wheezy
- Rbenv (allows to use the version of ruby of your choice)
- Passenger (Apache or Nginx)
- Database (MySQL, PostgreSQL or MongoDB)




## 
root: used for general administration server (updates, creation of databases, etc..).
webmaster: used to manage your application (installation of ruby, application deployment, etc..).


## 
The version of ruby you requested is installed via rbenv for user 'webmaster' and Passenger. The rest of the system uses the version of ruby packaged in Debian Wheezy (1.9.3p194 rédation at the time of this article).

To change the version of ruby, login with the user webmaster and enter:

```
rbenv update (mise à jour de rbenv et ses plugins)
rbenv install --list (pour connaître toutes les versions de ruby disponibles)
rbenv install <version>
rbenv global <version>
```




## 
Passenger was installed from the official repositories of Phusion. So you have the latest stable version of Phusion Passenger. Passenger uses the same version of ruby that the user webmaster.

Your VPS comes with a VirtualHost default name (vpsXXXXX.ovh.net).
You can use it directly in deploying your application in /var/www/vpsXXXXX.ovh.net
But you can also customise or copy to deploy multiple applications.


For condition and memory consumption Passenger:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Configuring your application is in /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Restart the server: 
```
service apache2 restart (root)
```

Restart the application only: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


For a detailed documentation of Passenger:
[Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
Configuring your application is in /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Restart the serveur : 
```
service nginx restart (root)
```

Restart the application only: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


For a detailed documentation of Passenger: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Your database was installed with the default settings and configured to be accessible only from your VPS.

