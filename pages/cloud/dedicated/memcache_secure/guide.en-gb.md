---
title: 'Securing a server with a Memcached service'
slug: securing-server-with-memcached-service
excerpt: 'Find out how to secure your Memcached service'
section: 'Advanced use'
---

**Last updated 02nd March 2018**


## Objective

Memcached is an in-memory database service. It is mainly used to speed up web applications, by caching static content and database request results. The way it works is very simple: it’s a key-value in-memory database for non-persistent storage. 

By default, Memcached is not protected by authentication. If the server is accessible, anyone can access the data stored on it. For this reason, it is highly important that you secure this database.


**This guide is designed to assist you with the configuration changes required to secure your service.**


> [!warning]
>
> OVH is providing you with machines that you are responsible for. We have no access to these machines, and therefore cannot manage them. You are responsible for your own software and security management.
>
> This guide is designed to assist you with common tasks as much as possible. However, we recommend that you contact a specialist service provider if you experience any issues or doubts when it comes to managing, using or securing your server. You can find more information in the “Go further” section of this guide.
>


## Requirements

- You must have access to the server with the Memcached service (via SSH for Linux environments, or via remote desktop for Windows).
- You will need to identify the services that are using Memcached. To do this, answer the following questions:
    - Are the services that use Memcached stored on the same server? Are they being used in a private network?
    - Do the services that use Memcached require it to be publicly accessible on the internet?


## Instructions

### Securing Memcached by changing its configuration

To secure your Memcached server, you will need to follow two steps:

- Restrict the service’s listening address.
- Only accept TCP connections.


For versions older than /1.5.6/, Memcached authorises TCP and UDP connections by default. This default configuration can be exploited, and used to launch amplified DDoS attacks.
The developers have pointed out that UDP connections were highly important when the software was first built, since this kind of technology was rarer at the time.
In this guide, we will assume that you are one of the 99% of users who do not require UDP connections.

If your Memcached server is only used by your local server, you can limit the listening address to `127.0.0.1`.
If other servers need to connect to to your Memcached server via a private network, force it to listen on a private IP (e.g. `10.0.0.1`. You will need to adapt this according to your network class).

**In all cases**, disable UDP listening by running the `-U 0` command.

We will now detail the configuration aspects of the most commonly used operating systems.


#### Debian/Ubuntu

By default, Debian and Ubuntu use `service memcached status/start/restart/force-reload` to manage the Memcached service. If you are using Debian or Ubuntu, edit the `/etc/memcached.conf` file while you are logged in as the root user.

You can start by adding this option, which disables UDP listening. As mentioned previously, UDP listening is a legacy technology, and is not required by Memcached users.

```sh
# Disable UDP protocol
-U 0
```
If your Memcached server is only used by your local server, you will need to enable the following option, which will stop your service from being exposed on the internet:

```sh
-l 127.0.0.1
```

Once you have made the required configuration changes, save the config file, and run one of the following two commands to reload your configuration:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS/Fedora/Red Hat


By default, CentOS, Fedora and RedHat use `service memcached status/start/restart/force-reload` to manage the Memcached service. If you are using CentOS, Fedora or RedHat, edit the `/etc/sysconfig/memcached` file while you are logged in as the root user.


If your Memcached server is only used by your local server, we recommend adding the `OPTIONS` line below, which will prevent your service from being exposed on the internet by disabling the UDP protocol. As mentioned previously, UDP is now a legacy technology that is not required by Memcached users.

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


If your Memcached server is also used by third-party servers, add the following `OPTIONS` line, which will only disable the UDP protocol:

```sh
OPTIONS="-U 0"
```

Once you have made the required configuration changes, save the config file and run the following command to reload the configuration:

```sh
sudo service memcached force-reload
```


#### Arch Linux


By default, Arch Linux uses `systemctl start/restart/stop memcached` to manage the Memcached service. If you are using Arch Linux, edit the `/usr/lib/systemd/system/memcached` file while you are logged in as the root user.

If your Memcached server is only used by your local server, we recommend adding the following line, which will prevent your service from being exposed on the internet by disabling the UDP protocol. As mentioned previously, UDP is now a legacy technology that is not required by Memcached users.

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


If your Memcached server is also used by third-party servers, add the following line, which will only disable the UDP protocol:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Once you have made the required configuration changes, save the config file, and run one of the following two commands to reload the configuration:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.