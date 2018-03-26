---
title: Modifier le hostname d’une instance
slug: modifier-le-hostname-dune-instance
legacy_guide_number: 1928
section: Tutoriels
---


## Préambule
Cloud-Init permet de configurer votre instance Public Cloud lors de sa création mais aussi à chaque redémarrage. Par conséquent, si vous souhaitez reconfigurer votre hostname, que cela soit du à une erreur lors de la création de votre instance, ou bien afin de reconfigurer votre serveur mail par exemple, il vous sera nécessaire de désactiver le module Cloud-Init qui se charge de configurer le hostname afin que celui ci ne soit pas rétabli.

Ce guide vous explique comment reconfigurer cloud-init afin d'être en mesure de modifier le hostname de votre instance.


### Prérequis
- Une instance


## Modification du hostname

### Desactivation du module cloud-init
- Modifier le fichier de configuration :

```bash
admin@serveur-1:~$ sudo vim /etc/cloud/cloud.cfg
```

- Modifier l'état de ces modules :

```bash
preserve_hostname: true
manage_etc_hosts: false
```



### Modification du hostname
- Modifier le fichier /etc/hostname :

```bash
admin@serveur-1:~$ sudo vim /etc/hostname
webserver
```

- Modifier le fichier /etc/hosts :

```bash
admin@serveur-1:~$ sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

- Redémarrer l'instance

```bash
admin@serveur-1:~$ sudo reboot
```


Suite au redémarrage la modification du hostname a correctement été prise en compte :


```bash
admin@webserver:~$ sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```