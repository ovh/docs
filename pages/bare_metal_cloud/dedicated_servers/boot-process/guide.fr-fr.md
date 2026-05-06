---
title: "Comprendre le processus de démarrage des serveurs dédiés"
excerpt: "Découvrez comment les serveurs dédiés OVHcloud démarrent et pourquoi le PXE doit rester en premier dans l'ordre de boot"
updated: 2026-02-06
---

## Objectif

Les serveurs dédiés OVHcloud utilisent un processus de démarrage réseau (netboot) qui offre flexibilité et sécurité. Ce guide explique le fonctionnement du processus de démarrage et pourquoi vous ne devez pas modifier l'ordre de boot directement dans les paramètres BIOS/UEFI, mais plutôt via l'[espace client OVHcloud](/links/manager) ou l'[API OVHcloud](/links/api).

**Ce guide vous aidera à comprendre :**

- Le fonctionnement du processus de démarrage OVHcloud
- Les modes de démarrage disponibles
- Pourquoi le PXE doit rester en premier dans l'ordre de boot BIOS/UEFI
- Comment les mises à jour de microcode sont appliquées automatiquement

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud
- Un accès à l'[API OVHcloud](/links/api) (facultatif)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

### Fonctionnement du processus de démarrage

Les serveurs dédiés OVHcloud utilisent [iPXE](https://ipxe.org/), un firmware de démarrage réseau avancé. Lorsque vous définissez un mode de démarrage pour votre serveur, OVHcloud configure automatiquement le script iPXE correspondant. Au démarrage du serveur, la séquence suivante s'exécute :

![Aperçu du processus de démarrage](images/boot-process.svg){.thumbnail}

1. **Démarrage PXE via DHCP** : Le serveur démarre depuis le réseau en utilisant DHCP sur l'interface publique.
2. **Téléchargement d'iPXE** : Le serveur DHCP fournit l'adresse IP publique du serveur et un nom de fichier pour télécharger iPXE.
3. **Requête au service de boot** : iPXE interroge un service de boot interne OVHcloud pour récupérer le script à exécuter.
4. **Exécution du script** : iPXE exécute le script en fonction du mode de démarrage configuré.

Ce processus se produit à chaque démarrage de votre serveur.

### Modes de démarrage

Vous pouvez configurer votre serveur pour démarrer dans l'un des modes suivants :

| Mode de démarrage | Description | Cas d'usage |
|-------------------|-------------|-------------|
| **Démarrage sur disque** | Démarre le système d'exploitation installé sur le disque | Fonctionnement normal |
| **Mode rescue** | Démarre sur un système d'exploitation temporaire | Dépannage, récupération, configuration initiale |
| **Script de boot personnalisé** | Exécute un script iPXE défini par l'utilisateur | Cas avancés (OS volatile, déploiement personnalisé) |

#### Démarrage sur disque

En mode **démarrage sur disque**, le processus de boot suit ces étapes :

**1\. Mise à jour du microcode**

Le système télécharge et applique le dernier [microcode CPU](https://blog.ovhcloud.com/ovhcloud-microcode-management-at-scale/) pour votre processeur (AMD ou Intel). Cela se fait de manière transparente et fournit des correctifs de sécurité sans nécessiter de mises à jour au niveau de l'OS ou du BIOS/UEFI.

> [!primary]
>
> Les mises à jour de microcode sont vérifiées (signature contrôlée) avant d'être appliquées. Si le téléchargement du microcode échoue, le processus de démarrage continue normalement — votre serveur démarrera quand même.
>

**2\. Démarrage du système d'exploitation**

- **Serveurs en boot Legacy** : iPXE utilise [`sanboot`](https://ipxe.org/cmd/sanboot) pour démarrer directement depuis le premier disque.
- **Serveurs en boot UEFI** : iPXE utilise [`sanboot`](https://ipxe.org/cmd/sanboot) pour démarrer le bootloader EFI (`efiBootloaderPath`) spécifié lors de l'[installation de l'OS](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#install) (par exemple, `\efi\debian\grubx64.efi`).

    Lorsqu'OVHcloud installe un système d'exploitation, l'ordre de boot n'est pas modifié (par exemple, GRUB est installé avec l'option `--no-nvram`) afin que le PXE reste en premier.

    Si `sanboot` échoue (par exemple, le fichier spécifié est corrompu ou introuvable), iPXE bascule sur rEFInd, qui détecte automatiquement les bootloaders EFI.

    Le paramètre `efiBootloaderPath` peut être modifié via l'[API OVHcloud](/links/api) :

    > [!api]
    >
    > @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
    >

#### Mode rescue

Un système d'exploitation temporaire pour le dépannage, la récupération et la configuration initiale. Les mises à jour de microcode sont appliquées avant le démarrage en rescue, comme pour le démarrage sur disque. Pour plus d'informations, consultez notre guide « [Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) ».

#### Scripts de boot personnalisés

Pour les cas d'usage avancés, vous pouvez configurer un script iPXE personnalisé via l'[API OVHcloud](/links/api). Pour plus d'informations, consultez notre guide « [Configurer un script iPXE personnalisé](/pages/bare_metal_cloud/dedicated_servers/ipxe-scripts) ».

> [!warning]
>
> Les scripts de boot personnalisés ne bénéficient pas du chargement automatique du microcode décrit ci-dessus.
>

### Pourquoi ne pas modifier l'ordre de boot

> [!warning]
>
> Ne modifiez pas l'ordre de boot dans les paramètres BIOS/UEFI de votre serveur ou via des outils comme `efibootmgr`. Le PXE (démarrage réseau) doit rester la première option de boot.
>
> Si vous installez un système d'exploitation manuellement, assurez-vous que votre bootloader ne modifie pas l'ordre de boot NVRAM (par exemple, utilisez `grub-install --no-nvram`).
>

OVHcloud s'appuie sur le processus de démarrage réseau pour :

- **Sélectionner le mode de boot** : Le service de boot détermine s'il faut démarrer en rescue, sur disque ou avec un script personnalisé.
- **Démarrage sur disque UEFI** : OVHcloud ne crée pas d'entrées de boot EFI — iPXE utilise `efiBootloaderPath` pour chaîner vers le bootloader.
- **Appliquer les mises à jour de microcode** : Les correctifs de sécurité sont appliqués pendant le processus de démarrage.

**Si vous modifiez l'ordre de boot :**

- ❌ Les changements de mode de boot effectués dans l'espace client OVHcloud ou via l'API OVHcloud n'auront aucun effet.
- ❌ Les serveurs UEFI pourraient ne pas démarrer (aucune entrée de boot EFI n'existe pour le bootloader sur disque).
- ❌ Le mode rescue ne sera plus accessible.
- ❌ Les mises à jour de microcode ne seront plus appliquées automatiquement.
- ❌ Le support OVHcloud pourrait ne pas être en mesure de vous aider en cas de problème de démarrage.

### Serveurs avec interfaces privées uniquement (OLA)

Si votre serveur utilise **[OLA (OVHcloud Link Aggregation)](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)** — une configuration *vRack-only* sans interface publique — le processus netboot standard ne fonctionnera pas. Les réseaux privés ne peuvent pas atteindre l'infrastructure DHCP et de boot OVHcloud.

Dans ce cas, vous devez déployer vos propres services DHCP, TFTP et de boot au sein de votre réseau privé. Pour des instructions détaillées, consultez le guide « [Gérer le redémarrage de votre serveur avec OVHcloud Link Aggregation](/pages/bare_metal_cloud/dedicated_servers/pxe-with-full-private-dedicated) ».

> [!primary]
>
> En février 2026, OVHcloud travaille sur le support natif du netboot sur les réseaux privés. Ce guide sera mis à jour lorsque la fonctionnalité sera disponible.
>

## Aller plus loin

[Installation de l'OS](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#install)

[Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Configurer un script iPXE personnalisé](/pages/bare_metal_cloud/dedicated_servers/ipxe-scripts)

[Gérer le redémarrage de votre serveur avec OVHcloud Link Aggregation](/pages/bare_metal_cloud/dedicated_servers/pxe-with-full-private-dedicated)

[OVHcloud microcode management at scale](https://blog.ovhcloud.com/ovhcloud-microcode-management-at-scale/)

Échangez avec notre [communauté d'utilisateurs](/links/community).
