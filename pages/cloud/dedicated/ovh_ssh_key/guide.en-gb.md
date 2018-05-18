---
title: 'Installing an OVH SSH key'
slug: ovh-ssh-key
excerpt: 'This guide will explain how to install an OVH SSH key, allowing our administrators to make changes'
section: 'Getting started'
---

**Last updated 12th February 2018**

## Objective

In some cases, OVH administrators will need to perform interventions on your dedicated server. 

**This guide will explain how to install an OVH SSH key, allowing our administrators to make changes. It will also explain how to disable it.**


## Requirements

- You must be [logged in via SSH](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/){.external} (root access).


## Instructions

### Step 1: install the key

Once you are logged in via SSH, enter the following command (listed in French below):

- If your server is hosted by OVH in Europe:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- If your server is hosted by OVH in Canada:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

If this operation is complete, the file `authorized_keys2` will have been created. It contains information in this form:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Step 2: troubleshoot

Even if the key is correctly installed, our administrators still may not be able to access your server. If this is the case, please check the following points:

#### Check that the file */root/.ssh/authorized_keys2* exists

To check that this file exists, enter the following command:

```sh
cat /root/.ssh/authorized_keys2
```

#### Check that the SSH server is configured to accept connections from the root user.

To do this, check the following settings in the `/etc/ssh/sshd_config` folder:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Then restart the SSH service:

```sh
/etc/init.d/sshd restart
```

#### Check that the default root user directory is /root.

You can use `/etc/passwd` to check this:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

The 6th part of the line (parts are separated by **:**) must be /root.

#### Check that the firewall software will not block access.

If you are using firewall software, you will need to add an authorisation rule for the source cache-ng.ovh.net (cache-ng.ovh.ca for servers in Canada) with your SSH port as a destination port (port 22 by default). Below is an example of an iptables rule:

**For a server in France:**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**For a server in Canada:**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Check that the SSH port has not been customised.

If you have customised your SSH port, please specify which port you have chosen so that the administrator can log in.
 

### Step 3: disable the key

Once the administrator has finished with the intervention, you can disable the SSH key. To do this, simply modify the file `authorized_keys2` and add a comment (with **#**), as shown below:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Go further

[Introduction to SSH](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/).

Join our community of users on <https://community.ovh.com/en/>.