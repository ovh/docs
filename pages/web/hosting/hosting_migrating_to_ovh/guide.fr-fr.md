---
title: Migrer son site et ses e-mails vers OVH
slug: migrer-mon-site-chez-ovh
excerpt: Découvrez comment migrer votre site internet et vos e-mails vers OVH sans interruption
section: Premiers pas
---

**Dernière mise à jour le 19/12/2017**

## Objectif

Ce guide vous présente les différentes étapes de la migration d'un site internet, d'une ou plusieurs bases de données et de vos adresses e-mail depuis n'importe quelle plateforme chez OVH. La procédure de migration peut différer si vous souhaitez migrer ces derniers sans interruption.

**Découvrez comment migrer votre site internet et vos e-mails vers OVH sans interruption de service.**

## Prérequis

- Pouvoir gérer le nom de domaine concerné.
- Avoir accès aux fichiers du site.
- Avoir accès à la base de données du site, le cas échéant.
- Être en possession des informations (utilisateur, mot de passe, serveurs) permettant de se connecter aux adresses e-mail actuelles.
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

Migrer votre site internet et vos e-mails vers OVH nécessite l'application d'une procédure de migration précise. Cette dernière peut être divisée en plusieurs étapes.

|Étapes|Description| 
|---|---| 
|Commander l'hébergement|Permet de disposer de l'hébergement OVH dans lequel vous hébergerez votre site internet et bénéficierez d'adresses e-mail.| 
|Transférer le site|En récupérant une sauvegarde complète de ce dernier, vous pourrez le transférer sur votre nouvel hébergement OVH.| 
|Transférer les adresses e-mail|En recréant au préalable les mêmes adresses e-mail chez OVH, vous pourrez transférer le contenu de ces dernières de votre ancien prestataire vers OVH.| 
|Changer la configuration DNS du domaine|En changeant la configuration de votre domaine, ce dernier utilisera l'hébergement OVH (pour votre site internet et vos adresses e-mail) et non plus les services de votre ancien prestataire.| 
|Transférer le domaine|Changer le bureau d’enregistrement de votre domaine pour choisir OVH.| 

Selon le bureau d'enregistrement dans lequel est déposé votre nom de domaine, l'ordre des étapes ci-dessus peut être différent.

> [!warning]
>
> Certains bureaux d'enregistrement coupent la résolution DNS de votre nom de domaine, si cette dernière est configurée chez eux, dès qu'ils reçoivent une demande de transfert sortant.
> Ceci a pour effet de rendre inaccessible votre nom de domaine et donc les services qui en dépendent, comme votre site internet et vos adresses e-mail. Nous vous invitons vivement à prendre contact avec le bureau d'enregistrement de votre nom de domaine afin de vous assurer de sa politique lors d'un transfert sortant.
>

Tenant compte de cette probabilité, nous mettons à disposition deux procédures de migration :

- une migration sans interruption de vos services ;
- une migration avec probable interruption de vos services.

### Migration sans interruption de service

#### Étape 1 : commander votre hébergement chez OVH

Depuis le site d'[OVH](https://ovh.com/){.external}, réalisez la commande de votre hébergement web. Assurez-vous de ne pas demander le transfert de votre domaine, vous le réaliserez par la suite. Dès réception de votre règlement, l'installation de l'hébergement débutera. Vous recevrez un e-mail vous confirmant l'installation de ce dernier.

#### Étape 2 : transférer votre site internet

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Récupérer une sauvegarde du site|Il s'agit d'une sauvegarde intégrale de votre site internet incluant les fichiers ainsi que la base de données (le cas échéant). Cette sauvegarde complète est essentielle pour migrer votre site chez OVH.|
|2|Mettre en ligne votre site chez OVH|Connectez-vous à votre espace de stockage (FTP) afin d'y importer les fichiers de votre site. Vous devrez les mettre en ligne dans le dossier **"www"**. Les identifiants de connexion au FTP vous sont transmis par e-mail.|
|3|Création d'une base de données OVH|Si votre site fonctionne avec une base de données, vous devrez en [créer une nouvelle chez OVH](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external} depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4|Importer les données de la base|Importez la sauvegarde de votre base de données en utilisant [l'outil OVH mis à disposition dans votre espace client](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.|
|5|Lier le site à la nouvelle base|Les informations de votre ancienne base de données sont toujours présentes dans le fichier de configuration de votre site. Sur votre espace de stockage OVH, modifiez ce fichier en y renseignant les informations de la base de données OVH.|

La configuration de votre nom de domaine restant inchangée, l'hébergement utilisé pour afficher votre site internet reste toujours celui de votre prestataire actuel.

#### Étape 3 : recréer vos adresses e-mail chez OVH

Une fois le site internet transféré, vous devez [recréer chez OVH les mêmes adresses](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external} que vous utilisez chez votre prestataire actuel. Celles-ci devront porter le même nom. Depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la barre de services à gauche, rendez-vous dans la section `E-mails`{.action}, puis sur l'hébergement web que vous venez de commander (portant le même intitulé que votre nom de domaine). Suivez les étapes de création en cliquant sur le bouton `Créer une adresse e-mail`{.action}.

La configuration de votre nom de domaine restant inchangée, la réception des nouveaux messages s'effectue toujours sur les adresses e-mail créées chez votre prestataire actuel. Vous devez toujours utiliser ces dernières pour réaliser vos envois.

#### Étape 4 : modifier la configuration de votre nom de domaine

Maintenant que votre site internet est transféré et vos adresses e-mail recréées chez OVH, il est nécessaire de modifier la configuration de votre nom de domaine. Cela passe par la modification des serveurs DNS de ce dernier pour ceux d'OVH (envoyés par e-mail et également affichés dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}). Cette manipulation a deux effets :

- **lier techniquement votre domaine aux solutions OVH** : votre hébergement OVH sera utilisé pour afficher votre site internet et la réception des nouveaux messages s'effectuera sur vos adresses e-mail OVH ;
- **empêcher une interruption de service** : si votre bureau d'enregistrement décide de couper sa propre configuration DNS lorsque vous transférerez votre nom de domaine, cela n'aura pas d'incidence étant donné que vous utiliserez déjà la configuration OVH.

> [!warning]
>
> Le changement des serveurs DNS se réalise dans le bureau d'enregistrement actuel de votre nom de domaine et nécessite un temps de propagation de 24 à 48 heures maximum avant d’être pleinement effectif.
>

#### Étape 5 : transférer le contenu de vos adresses e-mail

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Migrer le contenu des adresses chez OVH|Utilisez l’outil [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui vous permet de copier le contenu des adresses e-mail enregistrées chez votre ancien prestataire vers celles créées chez OVH.|
|2|Utiliser vos adresses|Vos adresses e-mail OVH sont accessibles depuis une application en ligne ([webmail](https://mail.ovh.net/){.external}). Si vous aviez paramétré l'une des adresses sur un client de messagerie (comme Outlook), vous devez la configurer de nouveau pour y renseigner [les serveurs d'OVH](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/) à la place de ceux de votre ancien prestataire.|

#### Étape 6 : transférer votre nom de domaine vers OVH

Il ne reste plus qu'à transférer votre nom de domaine vers OVH ! Pour cela, plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Déverrouiller votre domaine|Le verrouillage d'un domaine empêche de le transférer dans un autre bureau d'enregistrement comme OVH. Il est donc nécessaire de le déverrouiller au préalable dans votre bureau d'enregistrement actuel.|
|2|Récupérer le code de transfert|Le code de transfert vous est remis par votre bureau d'enregistrement actuel lorsque vous déverrouillez votre domaine.|
|3|Réaliser la commande de transfert chez OVH|Depuis le site d'[OVH](https://ovh.com/){.external}, réalisez votre commande de transfert. Vous devrez y renseigner le code de transfert obtenu précédemment.|
|4|Payer la commande|Dès réception de votre règlement, le transfert de votre nom de domaine débutera.|
|5|Valider ou attendre la validation du transfert| Cette étape diffère selon l'extension de votre domaine. Lorsqu'une validation est requise, une demande par e-mail est généralement envoyée. La procédure à suivre y est renseignée. Vous devrez suivre ces étapes menant à la confirmation de la demande de transfert.| 

Une fois le transfert arrivé à son terme, votre site internet, vos adresses e-mail et votre nom de domaine ont bien été migrés vers OVH sans interruption de service !

### Migration avec probable interruption de service

#### Étape 1 : commander le transfert et l'hébergement de vos services chez OVH

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Déverrouiller votre domaine|Le verrouillage d'un domaine empêche de le transférer dans un autre bureau d'enregistrement comme OVH. Il est donc nécessaire de le déverrouiller au préalable dans votre bureau d'enregistrement actuel.|
|2|Récupérer le code de transfert|Le code de transfert vous est remis par votre bureau d'enregistrement actuel lorsque vous déverrouillez votre domaine.|
|3|Réaliser la commande chez OVH|Depuis le site d'[OVH](https://ovh.com/){.external}, réalisez votre commande de transfert de nom de domaine et d'hébergement web. Vous devrez y renseigner le code de transfert obtenu précédemment. Lors du choix des serveurs DNS, précisez ceux de votre prestataire actuel.|
|4|Payer la commande|Dès réception de votre règlement, le transfert de votre nom de domaine débutera ainsi que l'installation de votre hébergement. **Selon la politique interne du bureau d'enregistrement actuel de votre nom de domaine, la résolution DNS de ce dernier peut être stoppée, rendant inaccessible l'ensemble des services qui en dépendent (site internet et adresses e-mail notamment).**|
|5|Valider ou attendre la validation du transfert|Cette étape diffère selon l'extension de votre domaine. Lorsqu'une validation est requise, une demande par e-mail est envoyée. La procédure à suivre y est renseignée. Vous devrez suivre ces étapes menant à la confirmation de la demande de transfert.|

#### Étape 2 : transférer votre site internet

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Récupérer une sauvegarde du site|Il s'agit d'une sauvegarde intégrale de votre site internet incluant les fichiers ainsi que la base de données (le cas échéant). Cette sauvegarde complète est essentielle pour migrer votre site chez OVH.|
|2|Mettre en ligne le site chez OVH|Connectez-vous à votre espace de stockage (FTP) afin d'y importer les fichiers de votre site. Vous devrez les mettre en ligne dans le dossier **"www"**. Les identifiants de connexion au FTP vous sont transmis par e-mail.|
|3|Création d'une base de données OVH|Si votre site fonctionne avec une base de données, vous devrez en [créer une nouvelle chez OVH](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external} depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4|Importer les données de la base|Importez la sauvegarde de votre base de données en utilisant [l'outil OVH mis à disposition dans votre espace client](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.|
|5|Lier le site à la nouvelle base|Les informations de votre ancienne base de données sont toujours présentes dans le fichier de configuration de votre site. Sur votre espace de stockage OVH, modifiez ce fichier en y renseignant les informations de la base de données OVH.|

La configuration de votre nom de domaine restant inchangée, l'hébergement utilisé pour afficher votre site internet reste toujours celui de votre prestataire actuel si la résolution DNS est toujours active.

#### Étape 3 : recréer vos adresses e-mail chez OVH

**Une fois le transfert de votre domaine terminé**, vous recevrez un e-mail vous informant que le service e-mail lié à votre hébergement vient d'être installé. Dès lors, vous devez [recréer chez OVH les mêmes adresses e-mail](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external} que celles que vous utilisez chez votre prestataire actuel (elles devront porter le même nom). Depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la barre de services à gauche, rendez-vous dans la section `E-mails`{.action}, puis sur l'hébergement web que vous venez de commander (portant le même nom que votre domaine). Suivez les étapes de création en cliquant sur le bouton `Créer une adresse e-mail`{.action}.

La configuration de votre nom de domaine restant inchangée, la réception des nouveaux messages s'effectue toujours sur les adresses e-mail créées chez votre prestataire actuel si la résolution DNS est toujours effective. Utilisez toujours ces dernières pour réaliser vos envois.

#### Étape 4 : modifier la configuration de votre nom de domaine

Maintenant que votre site internet est transféré, vos adresses e-mail recréées et votre nom de domaine transféré chez OVH, il est nécessaire de modifier la configuration de ce dernier. Cela passe par la modification des serveurs DNS de votre nom de domaine pour ceux d'OVH.

Vous devrez les modifier depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Une documentation intitulée *[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}* peut vous accompagner dans cette démarche.

Cette manipulation peut avoir plusieurs conséquences :

- **lier techniquement votre domaine aux solutions OVH** : votre hébergement OVH sera utilisé pour afficher votre site internet et la réception des nouveaux messages s'effectuera sur vos adresses e-mail OVH ;
- **résoudre une interruption de service** : si votre bureau d'enregistrement a coupé sa propre configuration DNS lorsque vous avez transféré votre nom de domaine, ceci permettra à ce dernier d'être de nouveau joignable.

> [!warning]
>
> Le changement des serveurs DNS d'un nom de domaine nécessite un temps de propagation de 24 à 48 heures maximum avant d’être pleinement effectif.
>

#### Étape 5 : transférer le contenu de vos adresses e-mail

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Migrer le contenu des adresses chez OVH|Utilisez l’outil [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui vous permet de copier le contenu des adresses e-mail créées chez votre ancien prestataire vers celles créées chez OVH.|
|2|Utiliser vos adresses|Vos adresses e-mail OVH sont accessibles depuis une application en ligne [Webmail](https://mail.ovh.net/){.external}. Si vous aviez paramétré l'une de vos adresses sur un client de messagerie (comme Outlook), vous devez la configurer de nouveau pour y renseigner [les serveurs d'OVH](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/) à la place de ceux de votre ancien prestataire.|

Votre site internet, vos adresses e-mail et votre nom de domaine ont bien été migré vers OVH !

## Aller plus loin

[Généralités sur les e-mails mutualisés](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/){.external}.

[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}.

[Créer une adresse e-mail mutualisé](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external}.

[Importation d’une base de donnees MySQL](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.

[Gestion d’une base de donnees depuis un hébergement mutualisé](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).