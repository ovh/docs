---
title: FAQ
excerpt: 'Retrouvez les questions les plus fréquemment posées sur les hébergements web OVHcloud'
slug: faq-hebergement
section: 'Premiers pas'
---

**Dernière mise à jour le 13/05/2020**

## FAQ hébergements web OVHcloud


### Que faire si mon site web dysfonctionne ? 

Plusieurs raisons peuvent expliquer le dysfonctionnement de votre site internet. Pour en identifier la cause, commencez par vérifier que tous vos services sont bien renouvelés et actifs, en vous connectant à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Une fois cette vérification faite, consultez les [tâches travaux en cours](http://travaux.ovh.net/){.external}. Si tous vos services sont actifs et qu'aucune tâche travaux n'impacte votre site, nous vous invitons à réaliser un diagnostic plus approfondi en vous aidant de [nos guides de diagnostic](../).

**Trucs et Astuces** : Si votre site est soudainement indisponible suite à une manipulation de votre part, vous pouvez restaurer son contenu depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Pour cela, dirigez-vous sur l'onglet `FTP - SSH` de votre hébergement et cliquez sur le bouton `Restaurer une sauvegarde`{.action}, situé à droite de votre écran. Vous pouvez également vous appuyer sur la documentation suivante : [Restaurer l’espace de stockage de son hébergement web](../restauration-ftp-filezilla-espace-client/).

### Comment configurer mon hébergement ? 

Pour configurer votre hébergement, connectez-vous tout d'abord à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Depuis la rubrique `Hébergement` vous pourrez notamment gérer vos certificats SSL, vos versions PHP, vos CDN, vos multisites, vos bases de données, ...

**Trucs et Astuces** : Pour vous aider à configurer votre hébergement, nous vous invitons à prendre connaissance de la rubrique <br> « Premiers pas » que vous retrouverez [ici](../).

### Comment créer ou supprimer un élément sur mon produit/service (compte e-mail, base de données, ….) ?

Pour créer ou supprimer un élément, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} puis sélectionnez le produit concerné <br> (`E-mail`, `Base de données`, `Modules`). Vous pourrez ainsi faire évoluer votre produit à votre convenance.

**Trucs et Astuces** : depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, vous avez la possibilité de réaliser des sauvegardes régulières de vos bases de données.

### Comment gérer mes mots de passe ? 

Pour gérer vos mots de passe, vous devez tout d'abord vous connecter à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. En cas d'oubli de votre identifiant ou de votre mot de passe, cliquez sur `Identifiant ou mot de passe oublié`{.action} sous la fenêtre de connexion. Un e-mail vous sera envoyé avec une procédure de réinitialisation. 
Vous pouvez également consulter le guide [Définir et gérer le mot de passe de votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/){.external}.

Une fois connecté à votre espace client, vous pourrez gérer vos différents accès tels que : 

* l'accès à votre serveur FTP et aux bases de données. Pour ce faire, accédez à la rubrique `Hébergement` de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} et sélectionnez le produit/service concerné .
* l'accès à vos e-mails, depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, rubrique `E-mail`.

**Trucs et Astuces** : Dans le cas d'une offre E-mail Pro ou Exchange, vous pouvez également gérer vos accès depuis les webmails respectifs de ces offres.

### Comment mettre en ligne mon site ? 

Pour mettre en ligne votre site chez OVHcloud, vous devez disposer d'un nom de domaine, qui correspondra à l'adresse depuis laquelle votre site sera accessible (exemple : ovh.com). Vous devez également disposer d'un hébergement web sur lequel vous allez mettre en place votre site. Vous pouvez également consulter ce guide : [Mettre en ligne un site internet sur son hébergement web](../mettre-mon-site-en-ligne)

**Trucs et Astuces** : Pour vous aider à créer votre site internet, OVHcloud met à votre disposition des modules en 1 clic tels que Wordpress, Prestashop, Joomla ou encore Drupal. Retrouvez-les [ici](https://www.ovh.com/ca/fr/hebergement-web/site/).external}. Vous pouvez également vous aider de [notre documentation](../modules-en-1-clic/).

### Comment migrer mon site internet et mes e-mails vers OVHcloud ? 

Pour migrer votre site internet et vos e-mails vers OVHcloud, vous devez disposer d'une [offre d'hébergement Web](https://www.ovh.com/ca/fr/hebergement-web/){.external} ainsi que d'une [offre e-mail OVHcloud](https://www.ovh.com/ca/fr/emails/){.external}. Vous pourrez ensuite vous connecter au serveur FTP de votre hébergement afin d'y transférer les fichiers de votre site. Si vous disposez actuellement d'une base de données, pensez également à réaliser une sauvegarde de celle-ci. 

Pour migrer les e-mails, vous devrez recréer vos comptes chez OVHcloud, puis utiliser notre outil de migration [OMM (OVH Mail Migrator)](https://omm.ovh.net/) que vous trouverez [ici](https://omm.ovh.net/). 

Une fois ces étapes réalisées, vous pourrez modifier la zone DNS de votre domaine afin qu'elle puisse sous 1 à 24 heures pointer sur notre infrastructure. Si vous souhaitez des informations complémentaires, n'hésitez pas à consulter le guide [Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/).

**Trucs et Astuces** : Pour le transfert de vos fichiers, vous pouvez utiliser un logiciel tel que Filezilla ou Cyberduck en vous appuyant sur [notre documentation](../mutualise-guide-utilisation-filezilla/).

### Comment héberger plusieurs sites web sur un même hébergement mutualisé ?

Pour les utilisateurs experts, vous pouvez héberger plusieurs sites internet sur le même hébergement mutualisé. Pour cela, vous devez attacher un autre nom de domaine ou attacher un sous-domaine à cet hébergement. La procédure pour attacher ou détacher un domaine est expliquée dans [ce guide](../multisites-configurer-un-multisite-sur-mon-hebergement-web/).

### Que faire si après publication de mon site, la page « Félicitations » d'OVHcloud reste affichée ?

À l'installation de votre hébergement, OVHcloud met en place une page d'attente, le temps que vous déposiez les fichiers de votre site internet. Si vous déposez simplement vos fichiers dans le dossier « www » sans supprimer le contenu déposé par OVHcloud, vous risquez de rencontrer ce souci. 

Afin de corriger cela, vous devez supprimer ou renommer le fichier « index.html » mis en place par OVHcloud sur votre hébergement. 
Il peut être intéressant de simplement le renommer afin de vous permettre de le réactiver à tout moment et de vous en servir comme page d'attente. 

**Autre information utile** : les fichiers de votre site doivent être déposés dans le dossier « www » afin d'être pris en compte.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
