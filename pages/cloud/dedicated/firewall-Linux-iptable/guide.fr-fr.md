---
title: Configuer le firewall software sous Linux avec IPtables
excerpt: Découvrez comment sécuriser un serveur avec iptables
slug: firewall-software-Linux-IPtables
section: Premiers pas
order: 7
---

**Dernière mise à jour le 13/12/2021**


## Objectif

Lorsque vous commandez votre serveur dédié, aucun protocole de sécurité n'est implémenté de manière native. Il vous revient donc de le sécuriser. En effet, OVHcloud ne pourra être tenu responsable d'un défaut de sécurisation de votre machine.

**Apprenez à sécuriser votre serveur dédié grâce à iptable.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Être connecté en SSH (accès root) sous Linux en tant qu'administrateur.


## En pratique

> [!primary]
>
> Ce guide est à usage général. Il est possible que vous deviez adapter quelques commandes en fonction de la distribution et/ou du système d'exploitation que vous utilisez. Certains conseils pourront vous suggérer l'utilisation d'outil tiers. En cas de question quant à leur utilisation, veuillez vous référer à leur documentation officielle.  
>

### Mettre à jour votre système

Les développeurs de systèmes de distribution et d'exploitation proposent des mises à jour fréquentes de progiciels, très souvent pour des raisons de sécurité. **Garder votre distribution ou votre système d'exploitation à jour est primordial pour la sécurisation de votre serveur.**

Il s'agit d'un processus en deux parties qui implique la mise à jour de la liste des paquets (la liste des applications logicielles installées) et celle des paquets en eux-mêmes.

#### Mettre à jour la liste des paquets

Mettez à jour la liste des paquets sur votre serveur de la manière suivante :

```sh
apt-get update
```

#### Mettre à jour les paquets

Mettez ensuite à jour les paquets sur votre serveur de la manière suivante :

```sh
apt-get upgrade
```

Une fois les mises à jour terminées, votre système sera entièrement à jour. Cette opération doit être effectuée de manière régulière.


### Configurer le pare-feu interne : iptables


La distribution nue dispose d’un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles sur ce pare-feu. Pour plus d'informations sur la configuration des iptables, reportez-vous à la documentation officielle de votre distribution Linux.


#

Vous aurez besoin d'une solution de sauvegarde tierce pour répliquer vos données et les transférer vers votre stockage de sauvegarde.

Pour plus d'informations sur nos solutions de stockage de sauvegarde, consultez notre [guide](../services-backup-storage/){.external} de stockage de sauvegarde.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
