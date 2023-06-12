---
title: Désinstallation du service de monitoring RTM v2
excerpt: Découvrez comment désinstaller le service de monitoring RTM sur votre service
updated: 2023-06-08
---


## Objectif

Le service de monitoring OVH RTM v2 est désormais déprécié et les dépôts de celui-ci ont été supprimés. Nous vous recommandons donc de désinstaller ce service et de supprimer tous les packages qui y sont liés.

**Ce guide a pour objectif de vous guider dans le nettoyage des packages utilisés par ce service.**

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) avec RTM v2 installé
- Avoir un accès administrateur (*root*) à votre serveur via SSH

## En pratique

Connectez-vous à votre serveur via SSH et supprimez les packages ci-dessous :

### Distributions basées sur Debian

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

### CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

Ensuite, vous devez supprimer les dépôts. Si les fichiers mentionnés dans les exemples ci-dessous n'apparaissent pas, cela signifie que vous n'avez pas les paquets RTM v2, vous n'avez donc rien à faire.

### Debian / Ubuntu

**Vérifier si les packages sont installés :**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Si la commande ne retourne aucune valeur, cela signifie que les packages ne sont pas installés, vous pouvez donc passer à l'étape de vérification des dépôts. Dans le cas contraire, vous pouvez les supprimer via la commande ci-dessous :

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

**Vérifier si les dépôts existent :**

```bash
ls /etc/apt/sources.list.d/
``` 

Si les fichiers `ovh-metrics.list` et `ovh-rtm.list` ne sont pas listés, alors vous n'avez rien à faire. Dans le cas contraire, vous pouvez les supprimer via la commande ci-dessous :

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

**Vérifier si les packages sont installés :**

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Si la commande ne retourne aucune valeur, cela signifie que les packages ne sont pas installés, vous pouvez donc passer à l'étape de vérification des dépôts. Dans le cas contraire, vous pouvez les supprimer via la commande ci-dessous :

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

**Vérifier si les dépôts existent :**

```bash
ls /etc/yum.repos.d/
```

Si les fichiers `OVH-metrics.repo` et `OVH-rtm.repo` ne sont pas listés, alors vous n'avez rien à faire. Dans le cas contraire, vous pouvez les supprimer via la commande ci-dessous : 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

