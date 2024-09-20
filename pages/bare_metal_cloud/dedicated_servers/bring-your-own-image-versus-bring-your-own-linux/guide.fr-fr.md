---
title: Comparaison entre Bring Your Own Image (BYOI) et Bring Your Own Linux (BYOLinux)
excerpt: Trouvez le service d'images OS personnalisées qui convient le mieux à vos usages
updated: 2024-01-31
---

## Objectif

Malgré [les nombreux Systèmes d'Exploitation (OS) disponibles dans le catalogue OVHcloud pour les serveurs dédiés](/links/bare-metal/os), vous pouvez avoir de bonnes raisons d'installer un OS personnalisé :

- l'OS que vous souhaitez installer ne fait pas partie [du catalogue OVHcloud](/links/bare-metal/os) ;
- vous souhaitez avoir une version de build spécifique de l'OS ;
- vous souhaitez un OS avec une version bien spécifique du noyau.

Il existe deux services différents permettant d'installer un OS personnalisé sur votre serveur dédié :

- **Bring Your Own Image** (BYOI)
- **Bring Your Own Linux** (BYOLinux)

Cette page vous présente les différences entre **Bring Your Own Image** et **Bring Your Own Linux**, afin que vous puissiez en tirer le meilleur parti.

## Fonctionnalités

|Nom de la fonctionnalité|Description de la fonctionnalité|BYOI|BYOLinux|
|-|-|-|-|
|Image personnalisée|Fournir une URL de téléchargement qui pointe vers l'image d'un OS personnalisé|✅|✅|
|Personnalisation du partitionnement¹|Exploiter toutes les possibilités de l'[API de partitionnement OVHcloud](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh) afin de configurer les partitions, le RAID logiciel, LVM, ZFS dans votre image personnalisée lors de l'installation OS|❌|✅|
|Format d'Image|l'URL de l'image fournie doit pointer vers un format de fichier qui est compatible|RAW, QCOW2|QCOW2|
|Raid Matériel²|Exploiter l'API OVHcloud pour configurer la contrôleur RAID matériel de votre serveur dédié lors de l'installation OS|✅|✅|
|OS autre que Linux|En plus des OS basés sur Linux, utilisez n'importe quel OS: UNIX, Windows, FreeBSD etc.|✅|❌|

¹ Votre image doit être construite en conséquence.<br />
² En supposant que votre serveur est compatible.<br />

## Aller plus loin

[Bring Your Own Image (BYOI)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)

[Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-linux)

[API OVHcloud et installation d'un OS](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

Échangez avec notre [communauté d'utilisateurs](/links/community).
