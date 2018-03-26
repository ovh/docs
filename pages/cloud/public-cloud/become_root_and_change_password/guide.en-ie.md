---
title: Become root and select a password
excerpt: Become root and select a password
slug: become_root_and_select_a_password
legacy_guide_number: g1786
---


## 
To carry out certain actions, you may need to become root. These include:

- Installing packages
- Selecting a password for a user or root user (This is necessary for KVM access)
- Carrying out certain administrative tasks




## Prerequisites

- []({legacy}1775)
- You must be logged in as the default user (admin or the distribution name for the most recent images)



## Information
We are assuming in this guide that the default user is called admin.


## Enter a password

- Enter a password for the admin user (For security reasons, the password will not be shown as you type it):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated 
successfully
```





## Further examples

- Update repositories (Debian/Ubuntu)

```
~$ sudo apt-get update
```


- Update the system (CentOS/Fedora)

```
~$ sudo yum update
```


- Edit a configuration file: 

```
~$ sudo vi /etc/hosts.allow
```





## 
Become root

```
~$ sudo su -
~#
```



- Enter a root password (after becoming root):

```
~# passwd
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```


- Enter a password for the admin user 

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
 

