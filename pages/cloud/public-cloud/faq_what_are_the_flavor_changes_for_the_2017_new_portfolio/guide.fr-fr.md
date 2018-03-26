---
title: Quels sont les changements sur les flavors apportes par la nouvelle gamme 2017 ?
slug: faq-quels-sont-les-changements-sur-les-flavors-apportes-par-la-nouvelle-gamme-2017
excerpt: FAQ introduisant les changements dans les specifications techniques des instances issues de la gamme 2017.
section: FAQ
---


## Ce qui change
Suite à un nombre important de remontés client, le stockage du disque principal des instances est modifié pour une solution plus simple, plus performante et plus sécurisée.

Toutes les nouvelles instances bénéficient d'un stockage local sur disque SSD, sécurisé par du RAID pour proposer des volumétries allant de 50 Go à 800 Go suivant le type d'instance. Les applications vont ainsi gagner en rapidité grâce à la latence très faible des SSD.

Il n'y aura alors plus à choisir entre les instances de type "*HA*" et les instances de type "*SSD*" comme sur la gamme 2015. Toutes les instances seront de type "*SSD RAID*".



> [!primary]
>
> Il est toujours possible d'utiliser des instances basées sur un disque Ceph
> pour retrouver le comportement des instances HA de la gamme 2015. Pour cela,
> il suffit d'utiliser la fonction "Démarrer depuis un volume" d'OpenStack ou
> directement depuis l'interface client OVH.
> 


## Ce qui ne change pas
Les ressources sont toujours garanties (sauf la gamme Sandbox). Les ressources sont accessibles à 100% de leurs capacités à tout moment.

Les ratios CPU/RAM restent également les mêmes que ceux de l'ancienne gamme.