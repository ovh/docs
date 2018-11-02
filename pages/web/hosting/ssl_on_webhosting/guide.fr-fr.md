---
title: 'Gérer un certificat SSL sur son hébergement web'
slug: les-certificats-ssl-sur-les-hebergements-web
excerpt: 'Apprenez à gérer un certificat SSL sur votre hébergement web OVH'
section: SSL
order: 1
---

**Dernière mise à jour le 02/11/2018**

## Objectif

Votre hébergement web vous permet de gérer un certificat SSL. Celui-ci peut être obtenu par le biais d'OVH ou par vos propres moyens en décidant de l'importer sur votre hébergement. Une fois installé sur celui-ci, il permettra à un ou plusieurs de vos sites de bénéficier d'une connexion sécurisée SSL et donc de fonctionner en HTTPS. 

**Apprenez à gérer un certificat SSL sur votre hébergement web OVH.**

## Prérequis

- Posséder une offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}.
- Disposer au moins d'un [nom de domaine](https://www.ovh.com/fr/domaines/){.external}.
- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

La gestion du certificat SSL sur votre hébergement web OVH s'effectue par le biais de plusieurs manipulations. Poursuivez la lecture de cette documentation selon celle que vous souhaitez réaliser.

- [Activer un certificat SSL sur son hébergement](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-son-hebergement){.external} : vous permet d'activer un certificat SSL sur votre hébergement via une offre gratuite ou payante d'OVH par l'importation de votre propre certificat SSL.

- [Activer le SSL sur un multisite](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-le-ssl-sur-un-multisite){.external} : si votre offre ou votre certificat SSL le permettent, vous pouvez faire bénéficier plusieurs de vos multisites d'une connexion sécurisée SSL.

- [Regénérer le certificat SSL de l'hébergement](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#regenerer-le-certificat-ssl-de-lhebergement){.external} : permet de regénérer le certificat SSL de votre hébergement web lorsque vous venez d'activer le SSL sur un ou plusieurs multisites. 

- [Supprimer le certificat SSL de l'hébergement](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#supprimer-le-certificat-ssl-de-lhebergement){.external} : permet de supprimer le certificat SSL de votre hébergement OVH. Cette manipulation n'est cependant pas sans risque si vous possédez des sites utilisant actuellement ce certificat. 

### Activer un certificat SSL sur son hébergement

Votre hébergement web OVH vous permet d'activer un [certificat SSL selon plusieurs solutions](https://www.ovh.com/fr/ssl/){.external} :

- le certificat SSL gratuit Let's Encrypt [compris avec une offre d'hébergement web compatible](https://www.ovh.com/fr/ssl/){.external} ;
- un certificat SSL payant [en option avec un hébergement web compatible](https://www.ovh.com/fr/ssl/){.external} ;
- l'import d'un certificat SSL obtenu par vos soins sur votre hébergement web.

Pour débuter l'activation du certificat, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. En dessous de « Certificat SSL », la mention « Non » devrait apparaître, vous indiquant qu'aucun certificat SSL n'est installé sur votre hébergement web. Cliquez alors sur le bouton représentant trois points à côté de « Certificat SSL », puis sur `Commander un certificat SSL`{.action}.

A contrario, si la mention « Oui » apparaît, ceci indique qu'un certificat SSL est déjà installé sur l'hébergement. Vous ne pourrez donc pas en commander un tant que l'existant est installé.

![managessl](images/manage-ssl-step1.png){.thumbnail}

Sur la fenêtre qui apparaît, sélectionnez le certificat SSL que vous souhaitez obtenir. Selon votre [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/){.external} ou sa configuration, il est possible que toutes les solutions spécifiées ci-dessus ne soient pas disponibles. Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

Selon la solution sélectionnée, des étapes supplémentaires peuvent apparaître :

- **si vous avez sélectionné un certificat SSL gratuit** : aucune action supplémentaire ne devrait être nécessaire, sauf si un élément technique empêche l'activation du certificat SSL (un message s'affiche alors dans l'espace client, vous indiquant les éléments que vous devez vérifier) ou la validation de votre nom de domaine pour la délivrance du certificat SSL. Vous serez alors averti et devrez suivre les indications communiquées ;

- **si vous avez sélectionné un certificat SSL payant** : vous devrez compléter les étapes de la commande qui s'affichent afin d'obtenir votre certificat. Une validation particulière peut être requise pour certains types de certificats SSL. Il est donc possible que vous receviez un ou plusieurs e-mails concernant cette validation. Suivez alors les informations mentionnées dans ces derniers jusqu'à finaliser l'installation ;

- **si vous avez sélectionné l'import d'un certificat SSL** : vous devrez renseigner ses informations dans les différentes cases qui apparaissent. Reportez-vous aux informations communiquées par le prestataire vous ayant fourni le certificat. 

Un temps de quelques minutes à plusieurs jours selon le type de certificat sélectionné est nécessaire pour sa mise en place. Pour vérifier si le certificat SSL est installé sur votre hébergement web, repositionnez-vous sur l'onglet `Informations générales`{.action} de votre espace client. La mention « Oui » devrait alors apparaître en dessous de « Certificat SSL ». 

![managessl](images/manage-ssl-step4.png){.thumbnail}

Une fois installé, poursuivez vers la manipulation « [Activer le SSL sur un multisite](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-le-ssl-sur-un-multisite){.external} » afin de vous assurer que le ou les sites concernés bénéficient bien d'une connexion sécurisée SSL active.

### Activer le SSL sur un multisite

Selon le [certificat SSL](https://www.ovh.com/fr/ssl/){.external} dont vous disposez, vous avez la possibilité d'activer une connexion sécurisée SSL sur un ou plusieurs de vos multisites. Pour cela, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Positionnez-vous ensuite sur l'onglet `Multisite`{.action}.

Le tableau qui s’affiche contient tous les noms de domaine qui ont été ajoutés à votre hébergement. La colonne « SSL » vous permet de voir l'état d'activation de la connexion sécurisée SSL pour vos différents multisites. 

![managessl](images/manage-ssl-step5.png){.thumbnail}

Trois états peuvent alors apparaître :

|États|Description|
|---|---|
|Activé|Indique que le SSL est déjà activé pour ce multisite. Si votre site internet n'est cependant pas en HTTPS, reportez-vous aux instructions décrites dans notre documentation « [Passer son site internet en HTTPS grâce au SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/){.external} ».|
|À générer|Indique que le SSL a été activé pour ce multisite, mais qu'il n'est techniquement pas encore actif. Pour cela, vous devez regénérer le certificat SSL de votre hébergement pour y inclure le ou les nouveaux noms de domaine.|
|Désactivé|Indique que le SSL n'est pas activé pour ce multisite. Pour l'activer, réalisez les instructions décrites ci-dessous.|

Pour activer le SSL sur un multisite, cliquez sur l'icône en forme de roue dentée à droite de celui concerné, puis sur `Modifier`{.action}. Sur la fenêtre qui apparaît, cochez la case `SSL`{.action}, puis poursuivez les étapes jusqu'à valider la modification.

Une fois l'activation demandée, l'état de la connexion sécurisée SSL pour le multisite concerné s'actualise en quelques secondes pour afficher « À générer ». Répétez la manipulation si vous souhaitez activer le SSL sur d'autres multisites. Vous pouvez ensuite poursuivre vers la manipulation « [Regénérer le certificat SSL de l'hébergement](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#regenerer-le-certificat-ssl-de-lhebergement){.external} ».

![managessl](images/manage-ssl-step6.png){.thumbnail}

### Regénérer le certificat SSL de l'hébergement

> [!primary]
>
> Cette manipulation ne concerne que les certificats permettant d'activer une connexion sécurisée SSL sur plusieurs multisites.
>

Après avoir activé la connexion sécurisée SSL sur un ou plusieurs de vos multisites, l'état indique alors : « À générer ». Cette génération est indispensable pour ajouter au certificat SSL de votre hébergement le ou les noms de domaine concernées. 

Pour cela, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton représentant trois points à côté de « Certificat SSL », puis sur `Regénérer le certificat SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Sur la fenêtre qui apparaît, prenez connaissance des informations affichées, puis cliquez sur le bouton `Valider`{.action}. Patientez alors le temps que la regénération de votre certificat SSL s'effectue. Ceci peut nécessiter plusieurs heures.

Prenez cependant en considération que Let's Encrypt, l'autorité qui délivre le cerificat SSL gratuit pour votre hébergement web impose une [limite de cinq regénérations par semaine](https://letsencrypt.org/docs/rate-limits/){.external}. Nous vous invitons donc à être vigilant sur les différentes regénérations que vous pourriez entreprendre à court terme afin de ne pas être temporairement bloqué.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Supprimer le certificat SSL de l'hébergement

Vous avez la possibilité de supprimer le certificat SSL actuellement installé sur votre hébergement web. Cependant, avant d'entamer cette manipulation, **nous vous conseillons vivement de vous assurer que la suppression du certificat ne perturbera pas l'accessibilité à vos sites internet**. Prenez en considération que vos visiteurs rencontreront une erreur de sécurité s'ils accèdent à un site internet fonctionnant en HTTPS, mais ne bénéficiant pas d'une connexion sécurisée SSL. 

Cette vérification étant inhérente aux paramètres de votre ou vos sites internet, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos. 

Dès que vous êtes prêt à supprimer le certificat SSL, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton représentant trois points à côté de « Certificat SSL », puis sur `Supprimer le SSL`{.action}.

Sur la page qui apparaît, validez alors la suppression. Celle-ci sera effective sous quelques heures maximum. 

![managessl](images/manage-ssl-step9.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.