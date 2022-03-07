---
title: FAQ
excerpt: Retrouvez les questions les plus fréquemment posées sur les hébergements web OVHcloud
slug: faq-hebergement
section: Premiers pas
order: 2
---

**Dernière mise à jour le 07/03/2022**

## Gestion de votre offre

### Comment configurer mon hébergement ?

Pour configurer votre hébergement, connectez-vous tout d'abord à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Depuis la rubrique `Hébergement`, vous pourrez notamment gérer vos certificats SSL, la version PHP, l'option CDN, le multisite, les bases de données, etc.

**Trucs et Astuces** : Pour vous aider à configurer votre hébergement, nous vous invitons à prendre connaissance de la rubrique « Premiers pas » que vous retrouverez [ici](https://docs.ovh.com/fr/hosting/).

### Comment gérer mes mots de passe ?

Pour gérer vos mots de passe, vous devez tout d'abord vous connecter à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). En cas d'oubli de votre identifiant ou de votre mot de passe, cliquez sur `Identifiant ou mot de passe oublié`{.action} sous la fenêtre de connexion. Un e-mail vous sera envoyé avec une procédure de réinitialisation.

Vous pouvez également consulter le guide [Définir et gérer le mot de passe de votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).

Une fois connecté à votre espace client :

* Pour modifier le mode passe de votre espace FTP, suivez les instructions de ce [guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
* Pour modifier le mode passe de votre base de données, suivez les instructions de ce [guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).
* Pour modifier le mode passe de votre adresse e-mail MX Plan, suivez les instructions de ce [guide](https://docs.ovh.com/fr/emails/modifier-mot-de-passe-adresse-email/).

### Comment mettre en ligne mon site ? 

Pour mettre en ligne votre site, vous devez disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/), qui correspondra à l'adresse depuis laquelle votre site sera accessible (exemple : ovhcloud.com). Vous aurez également besoin d'un [hébergement Web](https://www.ovhcloud.com/fr/web-hosting/) sur lequel installer votre site. Afin suivre pas à pas les étapes pour construire votre nouveau site Web, consultez cette [page](https://www.ovhcloud.com/fr/web-hosting/uc-website/) puis suivez les instructions de ce [guide](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/).

**Trucs et Astuces** : Pour vous aider à créer votre site Internet, OVHcloud vous permet d'installer grâce aux [modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/) des outils tels que Wordpress, Prestashop, Joomla ou encore Drupal.

### Comment transférer mon site et mes e-mails sur les serveurs OVHcloud ? 

Consultez le guide [Migrer son site et ses e-mails vers OVH](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/).

### Comment héberger plusieurs sites web sur un même hébergement mutualisé ?

Les offres OVHcloud vous permettent d'héberger plusieurs sites sur un seul hébergement. Pour cela, vous devez attacher un autre nom de domaine ou attacher un sous-domaine à cet hébergement, en suivant les instructions du guide [Partager son hébergement entre plusieurs sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/).

### Comment changer de formule d'hébergement ?

> [!primary]
>
> Afin de commander l'offre la plus adaptée à vos besoins, consultez notre page consacrée aux [hébergements web](https://www.ovhcloud.com/fr/web-hosting/).
>

Pour changer d'offre d'[hébergement mutualisé](https://www.ovhcloud.com/fr/web-hosting/), dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur `Web Cloud`{.action}, puis sur `Hébergements`{.action}. Choisissez l'hébergement concerné puis, dans la partie `Abonnement`, cliquez sur le bouton `...`{.action} dans la rubrique  `Offre` puis sur `Changer d'offre`{.action}.

Sélectionnez ensuite votre nouvelle formule d'hébergement et la durée de votre nouvel abonnement. Validez les contrats correspondants puis cliquez sur `Valider`[action].

> [!warning]
>
> Avant de passer d'une offre supérieure à une offre inférieure (par exemple, avant de passer d'une offre [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) à une offre [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/), vérifiez que votre utilisation de l'hébergement est compatible avec votre nouvelle formule :
>
> - Si vous avez créé trop d'adresses e-mail pour passer à une offre inférieure, sauvegardez puis supprimez les adresses les moins utilisées.
>
> - Si le quota de la nouvelle offre d'hébergement est insuffisant, connectez-vous en [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) à votre hébergement, sauvegardez puis supprimez les dossiers et fichiers non nécessaires.
>
> - Si votre nouvelle offre d'hébergement comporte un nombre de bases de données ou un volume de stockage insuffisants, supprimez les données ou les bases de données non utilisées. Vous pouvez également commander une offre de [serveur de bases de données](https://www.ovh.com/fr/cloud-databases/).
>
> - Si vous avez créé des [mailing lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) avec votre offre d'hébergement, vérifiez que votre nouvelle offre comporte cette fonctionnalité.
>
> En cas de doute sur les manipulations à effectuer, contactez les [partenaires](https://partner.ovhcloud.com/fr/directory/) ou la [communauté OVHcloud](https://community.ovh.com/).
>


## Diagnostic

> [!warning]
>
> Si vous rencontrez une anomalie non répertoriée dans cette FAQ, consultez la partie « Diagnostics » sur cette [page](https://docs.ovh.com/fr/hosting/).
>

### Que faire si mon site web dysfonctionne ? 

Plusieurs raisons peuvent expliquer le dysfonctionnement de votre site Internet. Pour en identifier la cause, commencez par vérifier que tous vos services sont bien renouvelés et actifs en vous connectant à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois cette vérification faite, consultez les [évéments en cours sur notre infrastructure](https://www.status-ovhcloud.com/). Si tous vos services sont actifs et ne sont impactés par aucun incident ou maintenance, nous vous invitons à réaliser un diagnostic plus approfondi à l'aide des questions suivantes.

**Trucs et Astuces** : Si votre site est soudainement indisponible suite à une manipulation de votre part, vous pouvez restaurer son contenu depuis votre espace client. Pour cela, dirigez-vous sur l'onglet `FTP-SSH` de votre hébergement et cliquez sur le bouton `Restaurer une sauvegarde`{.action}, situé à droite de votre écran. Vous pouvez également vous appuyer sur la documentation suivante : [Restaurer l’espace de stockage de son hébergement web](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/).

### Que faire si après publication de mon site, la page « Site en construction » d'OVHcloud reste affichée ?

![site_en_construction](images/site_en_construction.png){.thumbnail}

À l'installation de votre hébergement, OVHcloud met en place cette page d'attente, sous la forme d'un fichier **index.html** contenu dans le dossier **www** de votre serveur FTP.

Ce fichier est automatiquement désactivé lors de la création de votre [module en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

Si vous avez choisi [d'installer votre site manuellement](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/), [connectez-vous à votre espace FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) afin de le renommer en **index.html.old**.

### Que faire si mon site s'affiche sur une adresse web de type « xxxxx.cluster0xx.hosting.ovh.net » ?

![url-cluster](images/url-cluster.png){.thumbnail}

Deux scénarii sont possibles. Soit votre site a été créé sous cette adresse web, soit celle-ci est apparue suite à une modification :

#### Scénario 1 : votre site a été créé sur une adresse web de type « xxxxx.cluster0xx.hosting.ovh.net »

> [!warning]
>
> La suppression d'une base de données, comme celle d'un module en 1 clic, est définitive. Elles entraînent également la suppression des sauvegardes des données concernées. Avant de supprimer votre site sur l'hébergement OVHcloud, assurez-vous d'être capable de le recréer à l'identique. Si vous n'êtes pas certain des manipulations à effectuer, contactez votre webmaster ou l'un de nos [partenaires](https://partner.ovhcloud.com/fr/directory/).
>

Dans le premier cas, après avoir réalisé toutes les sauvegardes nécessaires, supprimez votre module depuis la partie `Hébergements` de votre espace client OVHcloud :

![delete_a_module](images/delete_a_module.png){.thumbnail}

Puis sa base de données depuis l'onglet du même nom situé à droite de votre écran, toujours dans la partie `Hébergements` :

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Puis relancez son installation sur le nom de domaine souhaité, en utilisant la fonctionnalité [Module en 1 clic](https://docs.ovh.com/fr/hosting/1-click-module-management/).

#### Scénario 2 : votre site s'affiche sous une adresse web de type « xxxxx.cluster0xx.hosting.ovh.net » suite à une modification

Si votre site s'affiche sous cette url suite à une manipulation, restaurez-le à son état antérieur.

> [!alert]
>
> La restauration de votre hébergement OVHcloud entraînera celle de l'ensemble des sites qu'il contient.
>
> Lors d'une restauration, le contenu de votre espace FTP, ou celui de votre base de données, est remplacé par une sauvegarde. Vous ne pourrez donc pas récupérer ensuite les données présentes sur le serveur FTP ou celles de la base de données juste avant la restauration.
>

Pour restaurer le code source de votre site, consultez notre guide [Restaurer l’espace de stockage de son hébergement web](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/).

Si votre site comporte une base de données, consultez notre guide [Restaurer une sauvegarde de votre base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client).

### Que faire si mon site redirige vers le webmail OVHcloud ?

![webmail](images/webmail.png){.thumbnail}

Cette anomalie indique une configuration erronée au niveau des [serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/) ou de la [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) associés à votre nom de domaine.

Le cas le plus courant est lié au fait que votre nom de domaine et votre hébergement ayant été commandés séparément, ils ne sont pas reliés entre eux.

Rendez-vous dans la partie `Domaines`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur le nom de domaine concerné puis sur l'onglet `Serveurs DNS`{.action}.

Notez ensuite les serveurs DNS indiqués puis rendez vous dans l'onglet `Zone DNS`{.action}. 

Comparez les `Cibles` des entrées de type `NS` indiquées dans l'onglet `Zone DNS`{.action} avec les `Serveurs DNS` indiqués dans l'onglet du même nom :

- Si les éléments sont identiques, remplacez la cible `213.186.33.5` par le code à quatre nombres noté dans l'onglet `Informations générales` sous la mention `IPv4` (Pour les manipulations à effectuer, suivez les instructions de ce [guide](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/#en-pratique)).
- Si les éléments ne sont pas identiques, mais que les `Serveurs DNS` indiqués dans l'onglet du même nom apparaissent dans cette [liste](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/), effectuez une réinitialisation en suivant les instructions de ce [guide](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/#reinitialiser-les-serveurs-dns).

### Que faire si mon site affiche une erreur « Too many redirect » ?

> [!alert]
>
> La restauration de votre hébergement OVHcloud entraînera celle de l'ensemble des sites qu'il contient.
>
> Lors d'une restauration, le contenu de votre espace FTP, ou celui de votre base de données, est remplacé par une sauvegarde. Vous ne pourrez donc pas récupérer ensuite les données présentes sur le serveur FTP ou celles de la base de données juste avant la restauration.
>

Si vous ne souhaitez pas faire appel à un Webmaster, restaurez votre site à son état précédent :

- Pour restaurer le code source de votre site, consultez notre guide [Restaurer l’espace de stockage de son hébergement web](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/).

- Si votre site comporte une base de données, consultez notre guide [Restaurer une sauvegarde de votre base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client).

Dans le cas contraire ou si les restaurations ne vous permettent pas de rétablir l'accès à votre site, consultez le site de nos [partenaires](https://partner.ovhcloud.com/fr/directory/).

### Que faire si mon site affiche une erreur « 503 error Backend fetch failed (Varnish cache) » ?

![503_varnish](images/503_varnish.png){.thumbnail}

Si vous avez activé l'option [CDN](https://docs.ovh.com/fr/hosting/accelerer-mon-site-web-en-utilisant-le-cdn/) de votre hébergement, désactivez le mode *Maintenance* sur votre site Wordpress ou Prestashop.

Si vous n'avez pas activé cette option ni utilisé le mode *Maintenance*, contactez votre Webmaster ou consultez le site de nos [partenaires](https://partner.ovhcloud.com/fr/directory/).

### Que faire si mon site affiche une erreur  « Your request has been blocked » ?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

Ce message indique que le type de requête HTTP que vous tentez de faire sur votre site est interdit pour un temps limité. Dans cette situation, [examinez les logs]() de votre site, afin de déterminer quelles requêtes ont 

### Que faire si mon site affiche une erreur  « Your IP has been banned » ?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}



### Le nom de domaine qui apparaît dans mon espace client ne correspond pas à celui que j'ai commandé. Que dois-je faire ? (notation IDN)

![](images/.png){.thumbnail}



## Aller plus loin <a name="allerplusloin"></a>

[FAQ - E-mails mutualisés MX Plan](https://docs.ovh.com/fr/emails/faq-emails/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
