---
title: 'Connect to your Data Platform using SSH'
excerpt: 'Connect to your platform through your terminal, either to run complex data jobs or to administrate the platform.'
section: How-to
order: 3
---

## Connecting to the bastion

All the nodes of your Data Platform are isolated inside private network (vRack).
To connect to any instance, you must use a "jump host" also known as bastion.

> [!primary]
>
> First, you need to [add your SSH key on IPA](../manage-users/guide.en-gb.md)
>

To connect to your bastion as an admin user:
```bash
$ ssh admin@{bastion_IP}
```

When connected as the bastion you can then access any other host using its
hostname. For example, connecting to a edge node would be
```bash
$ ssh admin@ovh-enode0
```


> [!primary]
>
> All the commands ran while connected to your bastion are logged for your administrator to audit.
As an administrator, [learn how to audit](../bastion-audit/guide.en-gb.md).
>
