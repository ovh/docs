---
title: 'Gérer un certificat SSL sur son hébergement web'
slug: les-certificats-ssl-sur-les-hebergements-web
excerpt: 'Apprenez à gérer un certificat SSL sur votre hébergement web OVH'
section: SSL
order: 1
---

**Dernière mise à jour le 31/05/2019**

## Objectif

Votre hébergement web vous permet de gérer un certificat SSL. Vous pouvez commander celui-ci via OVH ou en obtenir un par vos propres moyens et l'importer sur votre hébergement. Une fois configuré et installé, ce certificat fournit à un ou plusieurs de vos sites web une connexion SSL sécurisée, ce qui permet aux sites de fonctionner en HTTPS.

**Apprenez à gérer un certificat SSL sur hébergement web OVH.**

## Prérequis

- Posséder un [hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}.
- Avoir enregistré au moins un [nom de domaine](https://www.ovh.com/fr/domaines/){.external}.
- Avoir accès à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, partie « Web ».

## En pratique

Il existe plusieurs manières de gérer un certificat SSL sur votre hébergement web OVH. Nous vous recommandons de lire ces chapitres et de vous concentrer sur la méthode que vous souhaitez suivre.

- [Activer un certificat SSL sur votre hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-votre-hebergement-web){.external} : vous aide à activer un certificat SSL sur votre hébergement web. Il peut s'agir d'un certificat gratuit ou payant commandé auprès d'OVH. Vous pouvez également importer votre propre certificat SSL commandé auprès d'un autre fournisseur.

- [Activer un certificat SSL sur un multisite](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite){.external} : si votre solution ou votre certificat SSL vous le permettent, vous pouvez faire bénéficier plusieurs de vos multisites d'une connexion sécurisée SSL.

- [Regénérer un certificat SSL sur un hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#regenerer-un-certificat-ssl-sur-un-hebergement-web){.external} : vous permet de regénérer un certificat SSL sur votre hébergement web lorsque vous activez le SSL sur un ou plusieurs multisites. 

- [Supprimer un certificat SSL sur un hébergement web.](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#supprimer-un-certificat-ssl-sur-un-hebergement-web){.external} : vous permet de supprimer un certificat SSL sur votre hébergement web OVH. Veuillez noter que cela peut présenter des risques si l'un de vos sites web utilise actuellement le certificat que vous avez l'intention de supprimer. 

### Activer un certificat SSL sur votre hébergement web

Votre hébergement web OVH vous permet d'activer un [certificat SSL selon plusieurs solutions](https://www.ovh.com/fr/ssl/){.external} :

- un certificat SSL gratuit Let's Encrypt [inclus avec une offre d'hébergement web compatible](https://www.ovh.com/fr/ssl/){.external} ;
- un certificat SSL payant [en option avec un hébergemet web compatible](https://www.ovh.com/fr/ssl/){.external} ;
- l'importation d'un certificat SSL commandé auprès d'un autre fournisseur.

Pour activer votre certificat, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis sélectionnez l'hébergement concerné. Cliquez sur l'onglet `Informations générales`{.action}. Sous l'onglet « Certificat SSL », la mention « Non » devrait apparaître, indiquant qu'aucun certificat SSL n'a été configuré ni installé sur votre hébergement web. Cliquez sur les trois points à côté de « Certificat SSL », puis `Commander un certificat SSL`{.action}.

Si le mot « Oui » apparaît, cela signifie qu'un certificat SSL a déjà été installé et configuré sur l'hébergement web. Par conséquent, vous ne pourrez pas commander un autre certificat tant que le certificat existant est installé.

![managessl](images/manage-ssl-step1.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le certificat SSL que vous souhaitez commander. Selon votre [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/){.external} et sa configuration, il se peut qu'aucune des solutions répertoriées ci-dessous ne soit disponible. Une fois que vous avez sélectionné une option, cliquez sur le bouton `Suivant`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

Selon la solution que vous avez sélectionnée, il peut y avoir des étapes supplémentaires :

- **si vous avez sélectionné un certificat SSL gratuit :** vous n'avez pas besoin d'effectuer d'autres actions, à moins qu'un élément technique empêche l'activation du certificat SSL (un message apparaîtra alors dans l'espace client OVH répertoriant les éléments à vérifier) ou la validation de votre nom de domaine pour la délivrance du certificat SSL. Dans ce cas, vous serez prévenu et devrez suivre les instructions qui vous seront communiquées ;

- **si vous avez sélectionné un certificat SSL payant :** vous devrez terminer le processus de commande pour recevoir un certificat. Une validation spécifique peut être requise pour certains types de certificats SSL. Vous pouvez recevoir un ou plusieurs e-mails concernant cette validation. Si c'est le cas, lisez les informations contenues dans ces derniers et suivez les instructions fournies pour terminer la configuration ;

- **si vous avez choisi d'importer un certificat SSL :** vous devrez renseigner les détails du certificat dans les zones qui s'affichent. Consultez les informations envoyées par le fournisseur de services auprès duquel vous avez commandé le certificat. 

La configuration du certificat peut prendre entre plusieurs minutes et plusieurs jours, selon le type de certificat choisi. Pour vérifier si le certificat SSL a été configuré sur votre hébergement web, accédez à l'onglet `Informations générales`{.action} de votre espace client OVH. Le mot « Oui » doit alors apparaître sous « Certificat SSL ». 

![managessl](images/manage-ssl-step4.png){.thumbnail}

Une fois la configuration effectuée, passez à l'étape « [Activer un certificat SSL sur un multisite](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite){.external} » pour vous assurer que tous les sites web concernés disposent d'une connexion SSL sécurisée active.

### Activer un certificat SSL sur un multisite

Selon le [certificat SSL ](https://www.ovh.com.fr/ssl/){.external} que vous avez commandé, vous pouvez activer une connexion SSL sécurisée sur un ou plusieurs de vos multisites. Pour ce faire, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Positionnez-vous ensuite sur l'onglet ` Multisite`{.action}.

Le tableau qui s'affiche contient tous les noms de domaine ajoutés à votre hébergement web. La colonne « SSL » vous montre l'état d'activation des connexions SSL sécurisées sur vos multisites. 

![managessl](images/manage-ssl-step5.png){.thumbnail}

Trois états peuvent alors apparaître :

|États|Description|
|---|---|
|Activé|Un certificat SSL a déjà été activé pour ce multisite. Cependant, si votre site web n'est pas disponible en HTTPS, reportez-vous aux instructions répertoriées dans notre guide « [Passer son site en HTTPS grâce au SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/){.external} ».|
|À générer|Un certificat SSL a été activé pour ce multisite, mais celui-ci n'est toujours pas techniquement actif. Pour cela, vous devrez le regénérer afin qu'il inclue les nouveaux noms de domaine du multisite.|
|Désactivé|Aucun certificat SSL n'est activé pour ce multisite. Pour l'activer, suivez les étapes ci-dessous.|

Pour activer SSL sur un multisite, cliquez sur l'icône en forme de roue dentée à droite de celui concerné, puis sur `Modifier`{.action}. Dans la fenêtre qui s'affiche, cochez la case `SSL`{.action}, puis suivez les étapes jusqu'à confirmer la modification.

Une fois que vous avez soumis la demande d'activation, l'état de la connexion sécurisée SSL pour le multisite concerné doit être actualisé dans quelques secondes, le statut étant remplacé par « À générer ». Répétez cette action si nécessaire si vous souhaitez activer SSL pour d'autres multisites. Vous pouvez ensuite accéder à « [Regénérer un certificat SSL sur un hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/#regenerer-un-certificat-ssl-sur-un-hebergement-web){.external} ».

![managessl](images/manage-ssl-step6.png){.thumbnail}

### Regénérer un certificat SSL sur un hébergement web

> [!primary]
>
> Cette opération s'applique uniquement aux certificats permettant d'activer une connexion SSL sécurisée pour plusieurs multisites.
>

Une fois que vous avez activé une connexion SSL sécurisée sur un ou plusieurs de vos multisites, l'état indique alors « À générer ». Cette génération est essentielle pour pouvoir ajouter au certificat SSL de votre hébergement web.

Pour ce faire, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements` dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Cliquez sur l'onglet ` Informations générales`{.action}. Cliquez ensuite sur les trois points à côté de « Certificat SSL », puis sur`Regénérer le certificat SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Dans la fenêtre qui apparaît, prenez connaissance des informations affichées, puis cliquez sur le bouton `Valider`{.action}. Attendez ensuite que votre certificat SSL soit regénéré. Cette étape peut prendre plusieurs heures.

Veuillez noter que Let's Encrypt, l'autorité qui fournit le certificat SSL inclus avec avec votre hébergement web, impose une [limite de cinq regénérations par semaine](https://letsencrypt.org/docs/rate-limits/){.external}. Par conséquent, nous vous invitons à être vigilant sur les différentes regénérations que vous pourriez entreprendre à court terme  afin de ne pas être temporairement bloqué.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Supprimer un certificat SSL sur un hébergement web

Vous pouvez également supprimer le certificat SSL actuellement installé sur votre hébergement web. Avant de commencer à apporter des modifications, ** nous vous conseillons vivement de vous assurer que la suppression du certificat ne rendra pas vos sites web inaccessibles**. N'oubliez pas que vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils accèdent à un site internet fonctionnant en HTTPS, mais ne disposant pas d'une connexion SSL sécurisée. 

Cette vérification étant inhérente aux paramètres de votre ou vos sites internet, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce propos.

Dès que vous êtes prêt à supprimer le certificat SSL, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur les trois points à côté de « Certificat SSL », puis sur `Supprimer le SSL`{.action}.

Sur la page qui apparaît, confirmez la suppression. Celle-ci sera effective sous quelques heures au maximum. 

![managessl](images/manage-ssl-step9.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.