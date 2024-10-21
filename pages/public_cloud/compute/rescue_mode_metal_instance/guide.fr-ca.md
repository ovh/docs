---
title: Passer une instance Metal en mode rescue
excerpt: 'Découvrez comment activer le mode rescue sur une instance Metal'
hidden: true
updated: 2023-01-04
---

## Objectif

Contrairement aux autres instances Public Cloud pour lesquelles le mode rescue peut être activé depuis l'espace client OVHcloud, cette option n'est pas encore disponible pour les instances Metal. Pour activer le mode rescue sur une instance Metal, vous devez passer par l'interface en ligne de commande. Cela peut être fait via Openstack.

**Ce guide explique comment activer le mode rescue sur une instance Metal via CLI.**

> [!primary]
>
> Ce guide s'applique uniquement aux instances Metal. Pour accéder au mode rescue pour tous les autres types d'instances, suivez [ce guide principal](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud.
- Une [instance Metal Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) dans votre projet.

## En pratique

Avant toute chose, il est recommandé d'effectuer les opérations suivantes :

- [Préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d'environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

### Passer une instance Metal en mode rescue à l'aide de l'OpenStack CLI

Une fois que votre environnement est configuré, établissez une connexion SSH à votre instance et exécutez la commande suivante pour lister vos instances existantes :

```bash
#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| f12124f8-c058-4ee7-8b89-5a732ca8079b | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 21.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
``` 

Une fois que vous avez récupéré l'ID de l'instance, exécutez la commande suivante pour redémarrer l'instance en mode rescue :

```bash
openstack server rescue f12124f8-c058-4ee7-8b89-5a732ca8079b --password "csdsdf6dKcj5"
(openstack-client) ➜  openstack-client ssh root@xx.xx.xx.xx
The authenticity of host 'xx.xx.xx.xxx (xx.xx.xx.xxx)' can't be established.
ED25519 key fingerprint is SHA256:ddWp0YK4A3mN339daofocdJ3xlL++sTn7ppo4Lz4Ju0.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'xx.xx.xx.xxx' (ED25519) to the list of known hosts.
root@xx.xx.xx.xxx's password:
Linux rescue 5.10.0-8-amd64 #1 SMP Debian 5.10.46-4 (2021-08-03) x86_64The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
root@rescue:~# 
```

### Désactiver le mode rescue

Une fois que vous avez terminé vos opérations, vous pouvez utiliser la commande suivante pour retirer votre instance du mode rescue :

```bash
$ openstack server unrescue SERVERID
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.