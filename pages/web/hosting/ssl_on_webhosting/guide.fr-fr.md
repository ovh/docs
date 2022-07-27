---
title: 'Gérer un certificat SSL sur son hébergement web'
slug: les-certificats-ssl-sur-les-hebergements-web
excerpt: 'Apprenez à gérer un certificat SSL sur votre hébergement web OVHcloud'
section: SSL
order: 1
---

**Dernière mise à jour le 26/07/2022**

## Objectif

Votre hébergement web vous permet de gérer un certificat SSL. Vous pouvez commander celui-ci via OVHcloud ou en obtenir un par vos propres moyens et l'importer sur votre hébergement. Une fois configuré et installé, ce certificat fournit à un ou plusieurs de vos sites web une connexion SSL sécurisée, ce qui permet aux sites de fonctionner en HTTPS.

**Apprenez à gérer un certificat SSL sur hébergement web OVHcloud.**

## Prérequis

- Posséder un [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.
- Avoir enregistré au moins un [nom de domaine](https://www.ovhcloud.com/fr/domains/){.external}.
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie « Web ».

## En pratique

Plusieurs étapes sont nécessaires pour générer un certificat SSL sur votre hébergement web OVHcloud. Nous vous recommandons de suivre **dans l'ordre** les 3 étapes décrites ci-dessous.

[1. Activer un certificat SSL sur un hébergement web](#enablessl) : vous aide à activer un certificat SSL sur votre hébergement web. Il peut s'agir d'un certificat gratuit ou payant commandé auprès d'OVHcloud. Vous pouvez également importer votre propre certificat SSL commandé auprès d'un autre fournisseur.

[2. Attribuer le certificat SSL à une entrée multisite](#multisite) : si votre solution ou votre certificat SSL vous le permettent, vous pouvez faire bénéficier plusieurs de vos multisites d'une connexion sécurisée SSL.

[3. Regénérer le certificat SSL sur un hébergement web](#regeneratessl) : vous permet de regénérer un certificat SSL Let's Encrypt sur votre hébergement web lorsque vous activez le SSL sur un ou plusieurs multisites.

Vous pouvez également [supprimer le certificat SSL sur un hébergement web](#deletessl). **Veuillez noter que cela peut présenter des risques si l'un de vos sites web utilise actuellement le certificat que vous avez l'intention de supprimer**.

### 1. Activer un certificat SSL sur un hébergement web <a name="enablessl"></a>

Votre hébergement web OVHcloud vous permet d'activer un [certificat SSL selon plusieurs solutions](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external} :

- un certificat SSL gratuit Let's Encrypt [inclus avec une offre d'hébergement web compatible](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external} ;
- un certificat SSL payant [en option avec un hébergement web compatible](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external} ;
- l'importation d'un certificat SSL commandé auprès d'un autre fournisseur.

Pour activer votre certificat, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis sélectionnez l'hébergement concerné. Cliquez sur l'onglet `Informations générales`{.action}. Sous l'onglet « Certificat SSL », la mention « Non » devrait apparaître, indiquant qu'aucun certificat SSL n'a été configuré ni installé sur votre hébergement web.

> [!primary]
>
> Avant de procéder à cette configuration, assurez-vous que l'étape précédente d'[activation d'un certificat SSL sur un site multisite](#multisite) a été effectuée correctement. Au moins un domaine doit avoir l'option SSL `Activée` ou l'état `A générer` pour activer le certificat SSL.<br>
> Ces informations ne s'appliquent pas si vous sélectionnez `Certificat payant`{.action} ou `Importer de votre certificat SSL`{.action}.
>

Cliquez sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur `Commander un certificat SSL`{.action}.

Si le mot « Oui » apparaît, cela signifie qu'un certificat SSL a déjà été installé et configuré sur l'hébergement web. Par conséquent, vous ne pourrez pas commander un autre certificat tant que le certificat existant est actif.

![managessl](images/manage-ssl-step1.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le certificat SSL que vous souhaitez commander. Selon votre [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external} et sa configuration, il se peut qu'aucune des solutions répertoriées ci-dessous ne soit disponible. Une fois que vous avez sélectionné une option, cliquez sur le bouton `Suivant`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

Selon la solution que vous avez sélectionnée, il peut y avoir des étapes supplémentaires :

- **si vous avez sélectionné un certificat SSL gratuit :** vous n'avez pas besoin d'effectuer d'autres actions, à moins qu'un élément technique empêche l'activation du certificat SSL (un message apparaîtra alors dans l'espace client OVHcloud répertoriant les éléments à vérifier) ou la validation de votre nom de domaine pour la délivrance du certificat SSL. Dans ce cas, vous serez prévenu et devrez suivre les instructions qui vous seront communiquées ;

- **si vous avez sélectionné un certificat SSL payant :** vous devrez terminer le processus de commande pour recevoir un certificat. Une validation spécifique peut être requise pour certains types de certificats SSL. Vous pouvez recevoir un ou plusieurs e-mails concernant cette validation. Si c'est le cas, lisez les informations contenues dans ces derniers et suivez les instructions fournies pour terminer la configuration ;

- **si vous avez choisi d'importer un certificat SSL :** vous devrez renseigner les détails du certificat dans les zones qui s'affichent. Consultez les informations envoyées par le fournisseur de services auprès duquel vous avez commandé le certificat.

La configuration du certificat peut prendre entre plusieurs minutes et plusieurs jours, selon le type de certificat choisi. Pour vérifier si le certificat SSL a été configuré sur votre hébergement web, accédez à l'onglet `Informations générales`{.action} de votre espace client OVHcloud. Le mot « Oui » doit alors apparaître sous « Certificat SSL ».

![managessl](images/manage-ssl-step4.png){.thumbnail}

### 2. Attribuer le certificat SSL à une entrée multisite <a name="multisite"></a>

> [!primary]
>
> Avant d'attribuer le certificat SSL à l'une de vos entrées multisite, assurez-vous d'avoir activé au préalable un certificat SSL sur votre hébergement. Pour cela, consultez [l'étape précédente](#enablessl).

Selon le [certificat SSL](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external} que vous souhaitez commander, vous pouvez activer une connexion SSL sécurisée sur un ou plusieurs de vos multisites. Pour ce faire, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Positionnez-vous ensuite sur l'onglet `Multisite`{.action}.

Le tableau qui s'affiche contient tous les noms de domaine ajoutés à votre hébergement web. La colonne « SSL » vous montre l'état d'activation des connexions SSL sécurisées sur vos multisites.

![managessl](images/manage-ssl-step5.png){.thumbnail}

Trois états peuvent alors apparaître :

|État|Description|
|---|---|
|Activé|Un certificat SSL a déjà été activé pour ce multisite. Cependant, si votre site web n'est pas disponible en HTTPS, reportez-vous aux instructions répertoriées dans notre guide « [Passer son site en HTTPS grâce au SSL](../passer-site-internet-https-ssl/){.external} ».|
|À générer|Un certificat SSL a été activé pour ce multisite, mais celui-ci n'est toujours pas techniquement actif. Pour cela, vous devrez le regénérer afin qu'il inclue les nouveaux noms de domaine du multisite.|
|Désactivé|Aucun certificat SSL n'est activé pour ce multisite. Pour l'activer, suivez les étapes ci-dessous.|

Pour activer SSL sur un multisite, cliquez sur le bouton `...`{.action} à droite du multisite concerné, puis sur `Modifier le domaine`{.action}. Dans la fenêtre qui s'affiche, cochez la case `SSL`{.action}. Vous pouvez également activer l'option pour modifier le sous-domaine www en même temps que le nom de domaine associé. Suivez les étapes jusqu'à confirmer la modification.

Une fois que vous avez soumis la demande d'activation, l'état de la connexion sécurisée SSL pour le multisite concerné doit être actualisé au bout de quelques secondes, le statut étant remplacé par « À générer ». Répétez cette action si nécessaire si vous souhaitez activer SSL pour d'autres multisites.

> [!primary]
>
> Vous pouvez avoir deux situations dans cet état:
>
> - **Vous n'avez pas de certificat.**
> Pousuivez la lecture de ce guide à la section [Activer un certificat SSL sur votre hébergement web](#enablessl) et choisissez le « Certificat gratuit (Let's Encrypt) » qui prend en charge les sites multisites.
>
> - **Le certificat SSL est actif, mais vous avez activé le certificat SSL sur d'autres entrées multisites.**
> Pousuivez la lecture de ce guide à la section [Régénérer un certificat SSL sur un hébergement web](#regeneratessl) pour régénérer le certificat SSL pour les multisites restants.
>

### 3. Regénérer un certificat SSL sur un hébergement web <a name="regeneratessl"></a>

> [!primary]
>
> Cette opération s'applique uniquement aux certificats SSL gratuit Let's Encrypt [inclus avec une offre d'hébergement web compatible](https://www.ovhcloud.com/fr/web-hosting/options/ssl/) permettant d'activer une connexion SSL sécurisée pour plusieurs multisites.
>

Une fois que vous avez activé une connexion SSL sécurisée sur un ou plusieurs de vos multisites, l'état indique alors « À générer ». Cette génération est essentielle pour pouvoir ajouter les noms de domaines concernés au certificat SSL sur votre hébergement web.

Pour ce faire, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Cliquez sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur`Regénérer le certificat SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Prenez connaissance des informations affichées dans la fenêtre qui apparaît, puis cliquez sur le bouton `Valider`{.action}. Attendez ensuite que votre certificat SSL soit regénéré. Cette étape peut prendre plusieurs heures.

Veuillez noter que Let's Encrypt, l'autorité qui fournit le certificat SSL inclus avec avec votre hébergement web, impose une [limite de cinq regénérations par semaine](https://letsencrypt.org/docs/rate-limits/){.external}. Par conséquent, nous vous invitons à être vigilant sur les différentes regénérations que vous pourriez entreprendre à court terme  afin de ne pas être temporairement bloqué.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Supprimer un certificat SSL sur un hébergement web <a name="deletessl"></a>

Vous pouvez également supprimer un certificat SSL qui a été installé sur votre hébergement web. Avant de commencer à apporter des modifications, **nous vous conseillons vivement de vous assurer que la suppression du certificat ne rendra pas vos sites web inaccessibles**. N'oubliez pas que vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils essaieront d'accéder à un site internet fonctionnant en HTTPS, mais ne disposant pas d'une connexion SSL sécurisée.

Cette vérification étant inhérente aux paramètres de votre ou vos sites internet, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce propos.

Dès que vous êtes prêt à supprimer le certificat SSL, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Cliquez sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur `Supprimer le SSL`{.action}.

Sur la page qui apparaît, confirmez la suppression. Celle-ci sera effective sous quelques heures au maximum.

![managessl](images/manage-ssl-step9.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.