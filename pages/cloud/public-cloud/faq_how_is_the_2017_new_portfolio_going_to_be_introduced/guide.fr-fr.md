---
title: Comment va se passer l’introduction de la nouvelle gamme 2017 ?
slug: faq-comment-va-se-passer-l-introduction-de-la-nouvelle-gamme-2017
excerpt: FAQ traitant des differentes Étapes et consequences relatives a l’introduction de la nouvelle gamme d’instances 2017 sur l’offre Public Cloud.
section: FAQ
---

Cette FAQ explique l'introduction de la nouvelle gamme d'instance 2017 dans l'offre Public Cloud, cette nouvelle gamme apporte certaines nouveautés comme [une simplification du catalogue](https://docs.ovh.com/fr/public-cloud/faq-quels-sont-les-changements-sur-les-flavors-apportes-par-la-nouvelle-gamme-2017/){.ref}, une amélioration du stockage des instances et l'ajout de [nouvelles régions](https://docs.ovh.com/fr/public-cloud/faq-quelles-sont-les-differences-entre-les-regions/){.ref}. Le lancement de cette gamme 2017 est prévue pour fin Février - début Mars.


## Pourrai-je continuer d'utiliser mes instances actuelles dans mon projet existant ?
Les projets existants pourront toujours continuer à utiliser leurs instances actuelles sans aucun problème. La création de nouvelles instances basées sur l'ancienne gamme restera également possible pendant un moment.

A terme, cette ancienne gamme ne sera plus disponible pour la création de nouvelles instances mais vous serez bien évidement prévenu de ce changement.


## Sera-t-il possible de faire cohabiter des projets de l'ancienne gamme et d'autres de la nouvelle gamme ?
Oui, les projets déjà existants vont continuer à fonctionner et la nouvelle gamme sera proposée pour les nouveaux projets. Ces deux types de projets pourront fonctionner en parallèle sans problème et évoluer indépendamment.


## Comment pourrai-je faire communiquer des instances d'un projet existant avec celles d'un nouveau projet avec la nouvelle gamme ?
Les réseaux privés de public cloud sont portés par la technologie vRack d'OVH. Vous pouvez associer plusieurs projets public cloud (ancien ou nouveau) à un même vRack pour les faire communiquer entre eux.

Une fois les projets liés au vRack, vous devrez créer des réseaux privés avec le même numéro de VLAN pour que les instances puissent communiquer entre elles.


## Pourrai-je mixer les deux gammes dans un meme projet ?
Non, pour le moment les projets sont liés à une gamme d'instances spécifique.


## Pourrai-je continuer de créer des projets associes a l'ancienne gamme ?
Par défaut, les nouveaux projets seront paramétrés pour utiliser la nouvelle gamme. Mais pendant quelques semaines il sera toujours possible de créer un nouveau projet adressant l'ancienne gamme. Une option spécifique sera disponible à la création d'un nouveau projet.


## Comment pourrai-je retrouver le comportement des instances basees sur un disque Ceph ?
Pour ceux qui sont attachés à l'ancienne gamme, il sera toujours possible de démarrer une instance basée sur un disque Ceph distant si vous le souhaitez en utilisant les volumes et la fonction "Démarrer depuis un volume".