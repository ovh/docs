---
title: 'Diagnostiquer des dysfonctionnements matériels sur un serveur dédié'
slug: diagnostic-dysfonctionnements-materiels-serveur-dedie
excerpt: 'Découvrez comment utiliser les outils de diagnostic pour identifier des dysfonctionnements matériels sur votre serveur'
section: Sécurité
order: 03
---

**Dernière mise à jour le 15/12/2022**

## Objectif

L’usure progressive d’un serveur peut amener des dysfonctionnements matériels causant des erreurs. Votre serveur est équipé de plusieurs outils de diagnostic permettant d'identifier les composants matériels défectueux.

**Découvrez comment diagnostiquer des dysfonctionnements matériels sur votre serveur.**

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/).
- Avoir redémarré le serveur en [mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/).

## En pratique

Ce guide vous détaille les tests à réaliser pour diagnostiquer :

- le ou les processeurs ;
- la connexion du réseau ;
- la mémoire RAM ;
- les partitions du disque.
 
### Processeurs

Le test du processeur vérifie le bon fonctionnement du processeur de votre serveur et nécessite environ 30 minutes pour s'exécuter correctement. Si le serveur tombe en panne pendant ce test, cela signifie que le processeur est défectueux.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Connexion au réseau

Le test de connexion réseau vérifie votre connexion et votre bande passante externe. Ces données vous sont fournies à titre indicatif, il ne s'agit pas d'un test de performances.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Mémoire RAM

Le test de mémoire vérifie l'intégrité des modules RAM de votre serveur. Si le serveur tombe en panne pendant ce test, cela signifie qu’un ou plusieurs modules RAM sont défectueux.

> [!warning]
> Attention, ce test peut être très long.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Partitions du disque

Le test des partitions comprend un test d'accès au disque et une vérification du système de fichiers. Le test d'accès au disque vérifie si le système peut communiquer avec les disques durs de votre serveur. La vérification du système de fichiers utilise la commande `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
