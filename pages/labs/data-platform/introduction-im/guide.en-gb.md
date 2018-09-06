---
title: Managing users and privileges
excerpt: Learn how to use the Data Platform Identity Manager to manage users groups and permissions
section: Users and Security
order: 1
---

## Data Platform identity Manager

To help you manage your users and groups, you can use the integrated identity Manager (idM).
The idM federates many modules to manage hosts and users:

- LDAP
- Kerberos
- DNS
- Certificate management

![idM](images/idm.png)

### Why idM?
idM is a single end-point to manager users and host-based rules that are automatically propagated to all the hosts.
You can control SSH rules, sudo rules, and each user can manage its passwords, SSH keys and two-factor authentication.

### Existing Active Directory
The Data Platform idM can be federated with an existing Active Directory inside your vRack. That allows your cluster users
to be in sync with your existing AD users.
