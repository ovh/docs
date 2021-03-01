---
title: Résoudre le cas « Site non installé »
slug: erreur-site-non-installe
excerpt: Diagnostiquez l'erreur « Site non installé »
section: "Configuration de l'hébergement"
order: 2
---

**Dernière mise à jour le 17/02/2021**


## Objectif

Votre site peut afficher une page **Site non installé**, notamment lors de sa mise en place.

![site-not-installed](images/site-not-installed.png)

**Trouvez l'origine de la page « Site non installé »**

> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](../erreur-site-non-installe/#aller-plus-loin_1) de ce guide.

## Prérequis

- Vous disposez d'une [offre d'hébergement mutualisé](https://www.ovh.com/fr/hebergement-web/)
- Vous êtes connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Vous disposez également de la gestion de la [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) à laquelle est rattachée votre nom de domaine.

## En pratique

La page **Site non installé** s’affiche dans deux situations :

1. L'adresse de votre site n’apparaît pas dans l'onglet [multisite](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite) de votre hébergement.

2. Votre nom de domaine n'est pas relié à l’adresse IP de votre hébergement via sa `zone DNS`{.action}. 

Les étapes suivantes vous permettront de corriger l’erreur `Site non installé` dans ces deux situations.

### Étape 1 : Vérifier que votre domaine est bien présent dans l'onglet multisite de votre hébergement

Dirigez-vous dans la section `Web cloud`{.action} en haut, puis sur `Hébergements`{.action} dans la colonne de gauche.

Sélectionnez l'hébergement concerné dans la liste, puis cliquez sur l’onglet `Multisite`{.action}. Plusieurs sénarios sont possibles : 

|Sénarios|Action à entreprendre|
|---|---|
|Le nom de votre site apparaît dans le tableau.|Si vous venez d’ajouter le nom de votre site dans le multisite de votre hébergement, patientez une vingtaine de minutes puis rafraichissez le cache de votre navigateur. Si le message « Site non installé » apparaît toujours, passez à [l'étape 2](../#checkdomainlink)|
|Le nom de votre site n’apparaît pas dans le tableau.|Vous n'avez pas encore ajouté votre site dans l'onglet `multisite`{.action} de votre hébergement web. Pour effectuer cette manipulation, consultez notre documentation [Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Le nom de domaine n’est pas entièrement géré depuis votre compte et a été supprimé sans action de votre part.|Cette situation peut apparaître lorsque le nom de domaine de votre site ou sa zone DNS ne sont pas gérés depuis votre espace client OVHcloud. Pour effectuer l’ajout de votre domaine dans cette situation, consultez notre documentation [Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|

### Étape 2 : Vérifier que votre nom de domaine est relié à votre hébergement par sa zone DNS <a name="checkdomainlink"></a>

Cette étape vise à vérifier que votre domaine, via sa zone DNS, est bien relié à l’hébergement de votre site.

#### Étape 2.1 : Accéder à la gestion du nom de domaine et sa zone DNS

Vous devez d’abord accéder à l'interface par laquelle votre nom de domaine est géré, afin de déterminer les serveurs DNS auxquels il est relié. 

Il peut s’agir notamment :

- De votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou de celui de prestataire, dans le cas d'un nom de domaine enregistré chez OVHcloud
- De l'interface de gestion externe du nom de domaine si celui-ci n'est pas enregistré chez OVHcloud. 

Pour déterminer le nom de l’entreprise qui gère techniquement votre nom de domaine (sous la mention « registrar ») et les serveurs DNS auxquels il est lié, vous pouvez également utiliser notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl)

> Attention : selon votre nom de domaine, il est possible que ces informations ne soient pas visibles dans le WHOIS. Nous vous invitons alors à vous référer au site du registre de votre nom de domaine (Vous pourrez retrouver ce dernier en tapant `NIC` suivi de l'extension de votre nom de domaine (.com, .fr, etc.) dans votre moteur de recherche).

#### Étape 2.2 : Déterminer les serveurs DNS de votre domaine

- Si votre nom de domaine est géré chez OVHcloud, vous retrouverez les serveurs DNS depuis la section `Web cloud`{.action} en haut, puis sur `Domaines`{.action} dans la colonne de gauche. Sélectionnez votre nom de domaine et dirigez-vous dans l’onglet `Serveurs DNS`{.action}. 

> Attention : si, dans cette partie, le titre apparaissant dans le haut de la page est `Zone DNS`{.action} de (votre domaine) et non votre nom de domaine uniquement, c’est que ce dernier n’est pas géré depuis cet espace client OVHcloud.

- Si votre nom de domaine n'est géré par OVHcloud, contactez l'entreprise concernée.

#### Étape 2.3 : Retrouver l’adresse IP indiquée dans la zone DNS de votre domaine

Vous avez accès à l’interface de gestion de votre domaine et vous connaissez les serveurs DNS auxquels il est rattaché. 

Vous pouvez maintenant vérifier, dans sa zone DNS, si l'adresse IP de votre nom de domaine correspond bien à celle de l’hébergement de votre site. 

Plusieurs cas sont alors possibles : 

|Scénarios |Action à entreprendre|
|---|---|
|Votre nom de domaine, ses serveurs DNS et sa zone DNS sont gérés depuis un espace client OVHcloud.|Vous retrouverez son adresse IP dans l’onglet `Zone DNS` (Enregistrement de type A pour IPv4 ou enregistrement de type AAAA pour IPv6) dans la colonne de droite. Notez cette adresse et passez à l’étape 2.4.|
|Votre nom de domaine et ses serveurs DNS sont gérés depuis votre espace client OVHcloud, mais sa zone DNS est inaccessible.|Cette situation intervient lorsque la zone DNS de votre domaine est gérée par un autre compte client OVHcloud. Disposez-vous d’un autre compte ? Avez-vous vérifié s’il ne comporte pas cette zone DNS ? Il est également possible que la gestion de ce domaine vous ait été donnée par un tiers. Avez-vous contacté cette personne à ce sujet ? Peut-être qu'elle a simplement omis de vous donner la gestion de la zone DNS pour ce domaine ? Pour les opérations permettant de récupérer la gestion de votre zone DNS depuis un autre compte client, Consultez notre gudie [Gérer les contacts de ses services](https://docs.ovh.com/fr/customer/gestion-des-contacts/#modifier-les-contacts-dun-service).|
|Votre nom de domaine est géré par OVHcloud, mais pas les serveurs DNS qui lui sont associés. |Dans cette situation, si vous n’avez pas accès à sa zone DNS ou que vous ne retrouvez pas son adresse IP, contactez la société qui gère les DNS de votre domaine.|
|Votre nom de domaine et/ou sa zone DNS sont gérés par OVHcloud, mais par un espace client auquel vous n’avez pas accès.|Vous devrez donc contacter la personne qui en a la gestion. Si cette personne est injoignable et que vous êtes propriétaire de votre nom de domaine, vous pourrez également en récupérer la gestion par cette [procédure](https://www.ovh.com/fr/cgi-bin/fr/procedure/procedureChangeContacts.cgi).|

#### Étape 2.4 : Récupérer l’adresse IPV4 de votre hébergement OVHcloud

Vous disposez de l’adresse IP à laquelle est rattachée votre nom de domaine. Vous devez maintenant vérifier qu’elle correspond bien à celle de votre serveur d’hébergement web.

Pour retrouver cette dernière, cliquez sur `Hébergements` dans la colonne de gauche, sélectionnez l'hébergement concerné et cliquez sur l’onglet `Informations générales`.

![hosting-general-informations](images/hosting-general-informations.png)

Vous pouvez à présent comparer une des adresses IPv4 ou IPv6 et celle inscrite dans la zone DNS active de votre domaine.

|Scénarios possibles|Action à entreprendre|
|---|---|
|Aucune adresse IP n'est indiquée dans la zone DNS de votre domaine|Ajoutez l'adresse `IPv4` de votre hébergement (entrée de type `A`) puis patientez 24 heures maximum.|
|Les adresses IP sont identiques|Ceci indique que la configuration de votre nom de domaine est correcte. Suite aux dernières modifications dans vos DNS, patientez 48 heures maximum (Délai de propagation DNS). Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.|
|Les adresses IP ne sont pas identiques|Vous devrez donc remplacer l’adresse IP indiquée dans la zone DNS active de votre domaine par celle de votre hébergement.|

Si votre domaine est lié à une zone DNS OVHcloud, nous vous invitons à consulter [Éditer une zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/). Dans le cas contraire, suivez les indications décrites dans l'interface de l’hébergeur de votre domaine. 

## Aller plus loin

[Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/)

[Liste des adresses IP des clusters et hebergements web](../liste-des-adresses-ip-des-clusters-et-hebergements-web/)

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/)

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
