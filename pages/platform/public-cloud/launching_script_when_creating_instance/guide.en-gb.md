---
title: 'Launching a script when an instance is created'
slug: launch-a-script-when-instance-is-created
legacy_guide_number: 1932
section: Knowledge Base
---

## Overview
In some situations, you will need to launch a script when you create an instance. For example, you may want to do this if you need to configure multiple SSH keys for your instance, or configure your SSH service automatically.

This guide explains how to launch a script when an instance is created, via Cloud-init and OpenStack APIs.


### Requirements
- an environment that is ready to use the OpenStack API
- OpenStack environment variables set


## Create an instance with with a script.

### Create a script.
There are several different scripts that are useful for you to launch when you create an instance. For example, you can use **shell scripts**:

- Add a new user:

```bash
#!/bin/bash

adduser ovh -gecos "" --disabled-password
echo "ovh ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

mkdir /home/ovh/.ssh
echo "YOUR_PUBLIC_SSH_KEY" > /home/ovh/.ssh/authorized_keys
```


With this script, you can create a user named "**ovh**". Then we give this user **sudo** access, and add their SSH key.

- Modify SSH configuration:

```bash
#!/bin/bash

sed -i 's/Port\ 22/Port\ 2211/g' /etc/ssh/sshd_config
sed -i 's/PermitRootLogin\ yes/PermitRootLogin\ no/g' /etc/ssh/sshd_config
service ssh restart
```


With this script, you can modify the default SSH port (22 -> 2211) and block the connection using the **root** user privileges.

- Update packets and set up a web server:

```bash
#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y apache2 php5
```




> [!alert]
>
> This script can increase the time it takes to create the instance.
> 

It is also possible to run cloud-config scripts when you create your instance, e.g.:

- Create a user with 2 SSH keys:

```bash
#cloud-config

users:
  - name: ovh
    groups: sudo
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    ssh-authorized-keys:
      - SSH_KEY1
      - SSH_KEY2
```


With this script, you create an “** ovh**” user with sudo permissions, and they can connect via 2 different SSH keys.



> [!alert]
>
> The user "admin" will not be created, but will be replaced by your
> user.
> 


### Create the instance.
After you have retrieved the list of images and instance templates, you can launch the script with Cloud-init via the **--user- data** argument:


```bash
root@server:~# nova boot --key_name SSH_KEY --image bdcb5042-3548-40d0-b06f-79551d3b4377 --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --user-data ./adduser.sh Instance1
```

After we have double-checked the details, our user is correctly added after the instance has been created, and they have all of the permissions required:


```bash
root@server:~# ssh ovh@149.xxx.xxx.194

Last login: Tue Oct 20 07:51:58 2015 from proxy-109-190-254-35.ovh.net

ovh@instance1:~$ sudo su
root@instance1:/home/ovh#
```