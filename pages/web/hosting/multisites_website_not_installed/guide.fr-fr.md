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

**Trouvez l'origine de la page « Site non installé »**

![site-not-installed](images/site-not-installed.png)

> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](../erreur-site-non-installe/#aller-plus-loin_1) de ce guide.

## Prérequis

- Vous disposez d'une [offre d'hébergement mutualisé](https://www.ovh.com/fr/hebergement-web/)
- Vous êtes connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Vous disposez également de la gestion de la [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) à laquelle est rattachée votre nom de domaine.

## En pratique

La page **Site non installé** s’affiche dans deux situations :

- Le nom de votre site n’apparaît pas dans le [multisite](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite) de votre hébergement.

- Votre domaine n'est pas relié à l’adresse **IPV4** (exemple : `213.186.33.24`) de votre hébergement via sa `zone DNS`. 

> Vous pouvez retrouver l’adresse `IPv4` de votre hébergement web dans votre espace client OVHcloud : 
- Cliquez sur `Web Cloud`, puis sur le nom de votre site dans la rubrique `Hébergements`. 
- L'adresse IPV4 apparaîtra alors dans l’onglet `Informations générales`.
> 
> Si votre nom de domaine est géré depuis votre espace client OVH, les serveurs DNS auxquels il est connecté sont indiqués dans la partie `Domaines` et dans l'onglet `serveurs DNS`.

Les étapes suivantes vous permettront de résoudre l’erreur `Site non installé` dans ces deux situations.

### Étape 1 : Vérifier que votre domaine est bien présent dans le multisite de votre hébergement

Dans votre espace client OVHcloud, cliquez sur `Web cloud` en haut de votre écran. Rendez vous ensuite dans `Hébergements`. 

Dans la liste de vos hébergements, choisissez celui de votre site. Allez dans l’onglet `Multisite`. Plusieurs scénarios sont possibles : 

|Scénarios possibles|Action à entreprendre|
|---|---|
|Le nom de votre site apparaît dans le tableau.|Si vous venez d’ajouter le nom de votre site dans le multisite de votre hébergement, patientez une vingtaine de minutes puis redémarrez votre ordinateur ou votre tablette. Si le message « Site non installé » apparaît encore, poursuivez vers [l'étape 2](../erreur-site-non-installe/#etape-2-verifier-la-configuration-dns-du-nom-de-domaine)|
|Le nom de votre site n’apparaît pas dans le tableau.|Vous n'avez pas encore ajouté votre site au multisite de votre hébergement web OVH. Pour effectuer cette manipulation, suivez les étapes décrites [ici](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Le nom de domaine n’est pas entièrement géré depuis votre compte et a été supprimé sans action de votre part.|Cette situation peut apparaître lorsque le nom de domaine de votre site ou sa zone DNS ne sont pas gérés depuis votre espace client OVHcloud.
Pour effectuer correctement l’ajout de votre domaine dans cette situation, suivez les étapes décrites [ici](../multisites-configurer-un-multisite-sur-mon-hebergement-web/%23etape-22-ajouter-un-nom-de-domaine-externe).|

### Étape 2 : Vérifier que votre nom de domaine est relié à votre hébergement par sa zone DNS

Cette étape vise à vérifier que votre domaine, via sa zone DNS, est bien relié à l’hébergement de votre site.

#### Étape 2.1 : Accéder au site qui gère votre domaine

Vous devez d’abord accéder à l’espace client par lequel votre domaine est géré, afin de déterminer les serveurs DNS auxquels il est relié. Il peut s’agir notamment :

- De votre espace client OVHcloud, ou de celui de votre webmaster, collègue, associé, etc.
- De son équivalent chez l’ancien hébergeur de votre site ou de l’espace client sur lequel la gestion de votre domaine a été transférée récemment.

Pour déterminer le nom de l’entreprise qui gère techniquement votre domaine (sous la mention « registrar ») et les serveurs DNS auxquels il est lié, vous pouvez également utiliser notre outil [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl) FIN RELECTURE

> Attention : selon votre nom de domaine, il est possible que ces informations ne soient pas visibles dans le WHOIS. Nous vous invitons alors à vous référer au site du registre de votre nom de domaine (Vous pourrez retrouver ce dernier en tapant « NIC [extension de votre nom de domaine (.fr, .com, etc.)] dans votre moteur de recherche).

#### Etape 2.2 : Déterminer les serveurs DNS de votre domaine

Vous êtes connecté à l’espace client qui gère votre nom de domaine. Vous pouvez maintenant déterminer ses serveurs DNS. 

Si votre nom de domaine est géré dans un espace client OVH, ses serveurs DNS sont notés dans la partie `Web cloud`, puis `Domaines` (cliquez sur le nom de votre site dans la liste) et sur l’onglet `Serveurs DNS`. 

> Attention : si, dans cette partie, le titre apparaissant dans le haut de la page est `Zone DNS` de [votre domaine] et non votre nom de domaine uniquement, c’est que ce dernier n’est pas géré depuis votre espace client OVH.

Si votre nom de domaine est géré par une autre entreprise qu’OVHcloud, nous vous conseillons, en cas de besoin, de contacter cette société.

#### Etape 2.3 : Retrouver l’adresse IP indiquée dans la zone DNS de votre domaine

Vous avez accès à l’interface de gestion de votre domaine et vous savez à quels serveurs DNS, il est rattaché. Il vous faut maintenant retrouver, dans sa zone DNS, l’adresse IP à laquelle il est connecté. Ceci afin de vérifier qu’elle correspond bien à celle de l’hébergement sur lequel vous avez installé votre site. 

Plusieurs cas sont alors possibles : 

|Scénarios possibles|Action à entreprendre|
|---|---|
|Votre nom de domaine, ses serveurs DNS et sa zone DNS sont gérés depuis un espace client OVHcloud.|Vous retrouverez cette adresse IP dans l’onglet « Zone DNS » (Entrée de type A) dans la colonne de droite. Notez cette adresse et passez à l’étape 2.4.|
|Votre nom de domaine et ses serveurs DNS sont gérés depuis votre espace client OVHcloud, mais sa zone DNS est inaccessible.|Cette situation intervient lorsque la zone DNS de votre domaine est gérée par un autre compte client OVHcloud. Disposez-vous d’un autre compte ? Avez-vous vérifié s’il ne comporte pas cette zone DNS ? Il est également possible que la gestion de ce domaine vous ait été délivrée par un tiers. Avez-vous contacté cette personne à ce sujet ? Peut-être que cette personne a simplement omis de vous donner la gestion de la zone DNS de votre nom de domaine ?
Pour les opérations permettant de récupérer la gestion de votre zone DNS depuis un autre compte client, cliquez [ici](https://docs.ovh.com/fr/customer/gestion-des-contacts/#modifier-les-contacts-dun-service).|
|Votre nom de domaine est géré par OVHcloud, mais pas les serveurs DNS qui lui sont associés. |Dans cette situation, si vous n’avez pas accès à la zone DNS à laquelle est rattaché votre domaine ou que vous ne retrouvez pas son adresse IP, vous devrez contacter la société qui gère ses DNS.|
|Votre nom de domaine et/ou sa zone DNS sont gérés par OVHcloud, mais par un espace client auquel vous n’avez pas accès.|Vous devrez donc contacter la personne qui en a la gestion. Si cette personne est injoignable et que vous êtes propriétaire de votre nom de domaine, vous pourrez également en récupérer la gestion par cette [procédure](https://www.ovh.com/fr/cgi-bin/fr/procedure/procedureChangeContacts.cgi).|

#### Etape 2.4 : Récupérer l’adresse IPV4 de votre hébergement OVHcloud

Vous disposez de l’adresse IP à laquelle est rattachée votre nom de domaine. Vous devez maintenant vérifier qu’elle correspond bien à celle de votre serveur d’hébergement web.
Pour retrouver cette dernière, rendez-vous dans la partie « Hébergements » de votre espace client OVHcloud et positionnez-vous dans l’onglet Informations générales.

![hosting-general-informations](images/hosting-general-informations.png)

Vous pouvez à présent comparer cette adresse IP et celle inscrite dans la zone DNS active de votre domaine. Deux cas possibles : 

|Scénarios possibles|Action à entreprendre|
|---|---|
|Les adresses IP sont identiques|Ceci indique que la configuration de votre nom de domaine est correcte. Si vous avez modifié sa configuration DNS il y a moins de 48 heures, laissez passer ce délai afin que le changement soit pleinement effectif. Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.|
|Les adresses IP ne sont pas identiques|Vous devrez donc remplacer l’adresse IP indiquée dans la zone DNS de votre domaine par celle inscrite dans la partie « Informations générales » de votre hébergement OVH.
Si vous ne disposez pas de la gestion de la zone DNS concernée, merci de contacter la personne qui possède cette gestion.
Si votre domaine est lié à une zone DNS OVH, nous vous invitons à suivre les étapes décrites dans notre documentation «[Éditer une zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)». Dans le cas contraire, suivez les indications décrites dans l'interface de l’hébergeur de votre domaine. 
Une fois la modification effectuée, un temps de propagation de 24 heures maximum est nécessaire afin que le changement soit effectif.|

## Aller plus loin

[Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/)

[Éditer une zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

[Liste des adresses IP des clusters et hebergements web](../liste-des-adresses-ip-des-clusters-et-hebergements-web/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
