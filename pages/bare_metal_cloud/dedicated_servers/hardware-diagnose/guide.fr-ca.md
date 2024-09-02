---
title: 'Diagnostiquer des dysfonctionnements matériels sur un serveur dédié'
excerpt: 'Découvrez comment utiliser les outils de diagnostic pour identifier des dysfonctionnements matériels sur votre serveur'
updated: 2024-05-06
---

## Objectif

À un certain moment de la vie de votre serveur, vous pouvez rencontrer une panne en raison d'un problème matériel. Lorsque le serveur est démarré via le mode rescue OVHcloud, vous disposez de plusieurs outils de diagnostic permettant d'identifier les composants matériels défectueux.

**Découvrez comment diagnostiquer des dysfonctionnements matériels sur votre serveur.**

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal).
- Avoir redémarré le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

## En pratique

Ce guide vous détaille les tests à réaliser pour diagnostiquer :

- le ou les processeurs ;
- la connexion du réseau ;
- la mémoire RAM ;
- disques et partitions.
 
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

### Disk Health

Vous pouvez utiliser *Smartmontools* pour vérifier l'état de vos disques en lisant leurs données `SMART`. Par exemple, pour afficher tous les détails du disque intitulé `nvme1n1`, entrez :

```bash
smartctl -a /dev/nvme1n1
```

Pour en savoir plus sur la sortie de cette commande et son interprétation, consultez [la documentation officielle *Smartmontools*](https://www.smartmontools.org/wiki/TocDoc).

### Partitions du disque

Le test des partitions comprend un test d'accès au disque et une vérification du système de fichiers. Le test d'accès au disque vérifie si le système peut communiquer avec les disques durs de votre serveur. La vérification du système de fichiers utilise la commande `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
