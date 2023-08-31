---
title: Modifier la valeur de la MTU pour les machines qui communiquent avec la OVHcloud Gateway SSL
excerpt: Découvrez comment vérifier la taille actuelle de votre MTU et l'ajuster à la valeur recommandée par OVHcloud
updated: 2023-08-22
---

## Objectif

La valeur de *Maximum Transmission Unit* (MTU) au niveau du réseau est la taille maximale d'un paquet de données qu'un périphérique connecté au réseau peut accepter.
Nous vous recommandons de paramétrer votre MTU sur **1500**, non seulement sur l'interface sortante mais aussi de bout en bout dans votre infrastructure communiquant avec l'infrastructure VMware on OVHcloud. Cela vous évitera les problèmes de communication / réseau lors de l'utilisation d'un logiciel de sauvegarde par exemple.

Si votre valeur actuelle de la MTU est supérieure à 1500, vous pouvez rencontrer des timeouts en raison de paquets réseau non reçus sur la Private Gateway côté OVHcloud.

**Découvrez comment vérifier la taille actuelle de votre MTU et l'ajuster à la valeur recommandée par OVHcloud.**

## Prérequis

- Une [infrastructure VMware on OVHcloud](https://www.ovhcloud.com/fr-ca/hosted-private-cloud/vmware/)

## En pratique

### Vérifier la valeur actuelle de la MTU

Pour vérifier la valeur de la MTU actuellement utilisée sur votre interface réseau, vous pouvez utiliser la commande suivante :

#### Linux

```bash
ifconfig | grep mtu
```

#### Windows

```bash
netsh int ipv4 show subinterface
```

### Définir une nouvelle valeur de MTU

#### Linux

Pour modifier la valeur de la MTU de maière temporaire :

```bash
ifconfig **<Interface_name>** mtu **<mtu_size>** up
```

Pour modifier la valeur de la MTU de manière permanente :

- Pour un adressage IP dynamique, la taille de la MTU est définie par le DHCP. Vous devez configurer le fichier de configuration DHCP situé dans `/etc/dhcp/dhclient.conf`.
- Pour les adresses IP statiques, vous devez éditer le fichier de configuration de l'interface réseau situé dans `/etc/network/interfaces`.

#### Windows

```bash
netsh int ipv4 set subinterface **<Interface_name>** mtu=**<mtu_size>** store=persistent
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
