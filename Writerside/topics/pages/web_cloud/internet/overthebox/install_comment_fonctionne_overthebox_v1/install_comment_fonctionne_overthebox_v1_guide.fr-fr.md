---
title: 'Comment fonctionne OverTheBox v1 (Intel & IT) ?'
excerpt: "Découvrez le fonctionnement d'OverTheBox Intel et IT v1"
updated: 2021-04-14
---

> [!warning]
>
> Ce guide est déprécié et concerne la configuration d'équipements OverTheBox qui ne sont plus disponibles à la vente.
>

## Branchements finaux

> [!alert]
>
> La photo suivante illustre les branchements finaux pour une OverTheBox Intel.
> Avant d'en arriver là sur votre installation, il est impératif de suivre le  processus d'installation :
> [Installation OverTheBox Intel ou IT v1](intel_itv1_installation1.)
>

![overthebox](4316.png){.thumbnail}

## Fonctionnement

Le principe est simple, tous les éléments du réseau sont reliés physiquement entre eux par le biais des ports Ethernet de l'un des modems (qui sera donc  **le Modem Principal** ). Cela inclut :

- Le deuxième modem (câble vert )
- L' OverTheBox (câble jaune )
- Vos ordinateurs/téléphones etc. (port libre sur le modem principal)

C'est donc ce  **Modem Principal**  qui permet la liaison physique de tous ces éléments.

Lorsque votre ordinateur, branché sur le  **Modem Principal** , effectue une requête sur Internet, celle-ci transite d'abord par l' **OverTheBox**  qui va ensuite router les paquets intelligemment vers les 2 connexions Internet grâce aux ports Ethernet du  **Modem Principal** . Comme le montre l'illustration suivante :

![overthebox](4317.gif){.thumbnail}

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
