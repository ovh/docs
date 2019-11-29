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
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- If your server is hosted by OVH in Canada:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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
