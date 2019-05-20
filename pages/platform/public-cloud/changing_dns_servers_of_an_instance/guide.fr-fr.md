---
title: Modifier les serveurs DNS d’une instance
slug: modifier-les-serveurs-dns-dune-instance
legacy_guide_number: 1985
section: Base de connaissances
---


## Préambule
Le serveur DNS configuré sur les instances sera par défaut celui d'OVH ( 213.186.33.99 ). Il est possible que vous souhaitiez modifier celui ci ou bien que vous souhaitez en ajouter un autre. Cependant, les serveurs DNS sont configurés automatiquement grâce au serveur DHCP et vous ne serez pas en mesure de les modifier simplement en éditant le fichier resolv.conf.

Ce guide vous explique la procédure à suivre afin de modifier la configuration DHCP de votre instance pour pouvoir modifier les serveurs DNS de vos instances.


### Prérequis
- Une instance


## Modification des serveurs DNS
- Se connecter sur l'instance en SSH
- Passer root



> [!success]
>
> Il est possible de lire le fichier  resolv.conf  afin de vérifer quel est
> le serveur DNS configuré :
> 
> ```bash
> root@instance:~$ cat /etc/resolv.conf
> 
> domain local
> search local
> nameserver 213.186.33.99
> ```
>
- Éditer le fichier /etc/dhcp/dhclient.conf
- Y ajouter la ligne permettant d'ajouter le nouveau serveur DNS en plus de celui par défaut

Une fois cela fait, votre instance disposera donc de 2 serveurs DNS configurés :


```bash
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
nameserver 127.0.0.1
```