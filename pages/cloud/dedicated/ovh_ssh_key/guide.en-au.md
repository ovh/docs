---
title: Installation of OVH SSH key
slug: ovh-ssh-key
excerpt: This guide explains how to install the SSH key OVH on your server to allow the intervention of our technicians.
section: Security
---


## Requirements
- Having a root access in SSH.

To allow OVH employees to intervene on your dedicated server without your root password, you can install the OVH SSH key. Only authorized employees of OVH can use it.

To remove the OVH access, you may simply remove the key.


## Procedure

### Step 1 &#58; Installation of key
1. Connect to your server via SSH (see the manual: [Introduction to SSH](../guide.en-au.md){.ref} )
1. Type the following command as root:
If your server is located in OVH Europe :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```
If your server is located in OVH Canada :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```
If this operation is completed successfully, the authorized_keys2 file will be created. It contains:

```sh
root@server$ cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Step 2 &#58; Solving problems
Even if the SSH key correctly installed, our technicians may have problems with connection to your server. Then you need to check:


#### Verify that /root/.ssh/authorized_keys2 exists
```sh
cat /root/.ssh/authorized_keys2
```

#### Verify that the SSH server accept connections from root user
To verify the source of problem, you need to check the following parameters in /etc/ssh/sshd_config:


```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Then restart SSH server (/etc/init.d/sshd restart).


#### Verify that the home directory of the root is really /root
You can use /etc/passwd to verify this like so:

```sh
root@julien /# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```
The /root string should be the 6th element in the line.


### Step 3 &#58; Key desactivation
If you don't want OVH to have access to your server, you may deactivate the SSH key.

To do it, you only need to edit authorized_keys2 file and either comment (with #) those two lines as shown below or simply delete them:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```