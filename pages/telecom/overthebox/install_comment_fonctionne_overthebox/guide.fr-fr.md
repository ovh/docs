---
title: Comment fonctionne OverTheBox?
keywords: Fonctionnement, Principe
legacy_guide_number: 2237
description: Comment fonctionne OverTheBox?
slug: comment-fonctionne-overthebox
excerpt: Le boitier  OverTheBox  ne possede qu’un seul port Ethernet. Pourtant, c’est grace a ce boitier que vos differentes connexions sont agregees pour n’en former qu’une.  Comment cela fonctionne?
section: Fondamentaux
---


## Branchements finaux


> [!alert]
>
> La photo suivante illustre les branchements finaux. Avant d'en arriver là sur
> votre installation, il est impératif de suivre le  processus d'installation
> disponible sur le guide suivant : legacy:2228
> 


![overthebox](images/4316.png){.thumbnail}


## Fonctionnement
Le principe est simple, tous les éléments du réseau sont reliés physiquement entre eux par le biais des ports Ethernet de l'un des modems (qui sera donc  **le Modem Principal** ). Cela inclut :

- Le deuxième modem (câble vert )
- L' OverTheBox (câble jaune )
- Vos Ordinateurs/Téléphones etc. ( port libre sur le modem principal)

C'est donc ce  **Modem Principal**  qui permet la liaison physique de tous ces éléments.

Lorsque votre ordinateur, branché sur le  **Modem Principal** , effectue une requête sur Internet; celle-ci transite d'abord par l' **OverTheBox**  qui va ensuite router les paquets intelligemment vers les 2 connexions Internet grâce aux ports Ethernet du  **Modem Principal** . Comme le montre l'illustration suivante :


![overthebox](images/4317.gif){.thumbnail}