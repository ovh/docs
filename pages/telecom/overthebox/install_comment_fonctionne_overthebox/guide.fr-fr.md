---
title: 'Comment fonctionne OverTheBox Intel ou ITv1?'
keywords: 'Fonctionnement, Principe'
legacy_guide_number: 2237
description: 'Comment fonctionne OverTheBox Intel ou ITv1?'
slug: comment-fonctionne-overthebox
excerpt: 'Le boitier OverTheBox ne possède qu’un seul port Ethernet. Pourtant, c’est grâce à ce boitier que vos différentes connexions sont agrégées pour n’en former qu’une. Comment cela fonctionne-t-il ?'
section: "OverTheBox Intel et IT v1"
updated: 2021-04-14
---

**Dernière mise à jour le 14/04/2021**

> [!warning]
>
> Ce guide est déprécié et concerne la configuration d'équipements OverTheBox qui ne sont plus disponibles à la vente.
>

## Branchements finaux

> [!alert]
>
> La photo suivante illustre les branchements finaux pour une OverTheBox Intel.
> Avant d'en arriver là sur votre installation, il est impératif de suivre le  processus d'installation :
> [Installation OverTheBox Intel ou IT v1](../intel-itv1-installation/)
>

![overthebox](images/4316.png){.thumbnail}

## Fonctionnement

Le principe est simple, tous les éléments du réseau sont reliés physiquement entre eux par le biais des ports Ethernet de l'un des modems (qui sera donc  **le Modem Principal** ). Cela inclut :

- Le deuxième modem (câble vert )
- L' OverTheBox (câble jaune )
- Vos ordinateurs/téléphones etc. (port libre sur le modem principal)

C'est donc ce  **Modem Principal**  qui permet la liaison physique de tous ces éléments.

Lorsque votre ordinateur, branché sur le  **Modem Principal** , effectue une requête sur Internet, celle-ci transite d'abord par l' **OverTheBox**  qui va ensuite router les paquets intelligemment vers les 2 connexions Internet grâce aux ports Ethernet du  **Modem Principal** . Comme le montre l'illustration suivante :

![overthebox](images/4317.gif){.thumbnail}

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
