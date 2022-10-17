---
title: Migrer son site et ses e-mails vers OVHcloud
slug: migrer-mon-site-chez-ovh
excerpt: Découvrez comment migrer votre site internet, vos e-mails et votre domaine chez OVHcloud sans interruption
section: Premiers pas
order: 08
---

**Dernière mise à jour le 14/10/2022**

## Objectif

Ce guide vous présente les différentes actions à réaliser pour migrer l'ensemble de votre site web, votre domaine et vos adresses e-mail chez OVHcloud sans interruption de service.

> [!success]
>
> Les informations qui vont suivre font appel à divers produits de l'univers Web, nous vous recommandons de lire ce guide une première fois en entier avant de vous lancer dans la migration de vos services chez OVHcloud.
>

**Découvrez comment migrer votre site internet, vos e-mails et votre domaine chez OVHcloud sans interruption de service.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Gérer le nom de domaine de votre site Web.
- Accéder à la zone DNS (Domain Name System) active de votre domaine
- Accéder aux fichiers et à la base de données de votre site Web chez votre hébergeur actuel.
- Disposer des identifiants (utilisateur, mot de passe, serveur) de vos adresses e-mail actuelles.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

Migrer votre site internet et vos e-mails vers OVHcloud **sans interruption de service** nécessite d'appliquer une procédure précise en 10 étapes :

- [Etape 1 : Commander l'hébergement et les adresses e-mail chez OVHcloud](#step1)
- [Etape 2 : Créer et pré-configurer une zone DNS pour votre domaine chez OVHcloud](#step2)
- [Etape 3 : Récupérer une sauvegarde complète de votre site Web](#step3)
- [Etape 4 : Installer la sauvegarde de votre site Web sur votre offre d'hébergement OVHcloud](#step4)
- [Etape 5 : Recréer vos adresses e-mail à l'identique chez OVHcloud](#step5)
- [Etape 6 : Déclarer les serveurs mail OVHcloud dans la zone DNS active de votre nom de domaine](#step6)
- [Etape 7 : Transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles chez OVHcloud](#step7)
- [Etape 8 : Changer les serveurs DNS actifs de votre domaine par ceux d'OVHcloud](#step8)
- [Etape 9 : Transférer votre nom de domaine chez OVHcloud](#step9)
- [Etape 10 : Reconfiguration de vos logiciels de messagerie](#step10)

> [!Primary]
>
> En suivant **dans l'ordre** ces 10 étapes, vous n'aurez pas d'interruption de service sur l'accès à votre site Web et sur la réception de vos nouveaux mails.
>
> Cependant et en fonction de votre bureau d'enregistrement, votre fournisseur d'hébergement ou votre fournisseur de services mail, il est possible que ces derniers coupent l'accès à vos anciens services s'ils constatent que votre domaine n'est plus configuré avec eux.
>
> Dans ce cas, il est possible que vous rencontriez tout de même une interruption de service.
>
> Si cette interruption a lieu, notre documentation est construite de telle sorte à ce que celle-ci soit la plus courte possible.
>

### Etape 1 : Commander l'hébergement et les adresses e-mail chez OVHcloud <a name="step1"></a>

Il existe plusieurs offres d'hébergement mutualisé chez OVHcloud qui contiennent une offre e-mail "MX Plan". Cette offre e-mail permet de créer des adresses e-mail POP/IMAP avec un espace de stockage de 5Go maximum pour chaque adresse. Choisissez parmi les offres d'hébergement ci-dessous en fonction de la version PHP, de la version SQL, du nombre d'adresses e-mail dont vous avez besoin et de la taille de votre site à migrer :

- L'hébergement [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) avec 10 adresses e-mail "MX Plan"
- L'hébergement [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) avec 100 adresses e-mail "MX Plan"
- L'hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) avec 1000 adresses e-mail "MX Plan" : offre déclinée en 4 "sous-offres"
- L'hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/) avec 200 adresses e-mail "MX Plan" : offre utilisée par les développeurs d'applications.

Si vous n'êtes pas encore client OVHcloud et une fois votre offre d'hébergement choisie, cliquez sur le bouton `Commander`{.action} présent sur chacune des pages commerciales ci-dessus ou sur <https://www.ovh.com> puis poursuivez les étapes du tunnel de commande **sans demander le transfert de votre domaine**.

Si non, vous pouvez effectuer la commande depuis votre [Espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois connecté, cliquez sur la partie `Web Cloud`{.action}, cliquez ensuite sur le bouton bleu `Commander`{.action} puis sur le carré dans lequel est mentionné `Hébergement`{.action}. Poursuivez ensuite les étapes du tunnel de commande **sans demander le transfert de votre domaine**.

Une fois le paiement validé, l'installation de l'hébergement va démarrer. Un e-mail sera envoyé à votre adresse mail de contact contenant les identifiants d'accès à l'espace de stockage FTP (File Transfert Protocol) de votre hébergement Web.

> [!Primary]
>
> OVHcloud propose d'autres offres mail en plus de l'offre "MX Plan". Vous pouvez par exemple combiner à des adresses mail "MX Plan" des adresses ["Email-Pro"](https://www.ovhcloud.com/fr/emails/email-pro/) ou des comptes ["Exchange"](https://www.ovhcloud.com/fr/emails/hosted-exchange/).
>


### Etape 2 : Créer et pré-configurer une zone DNS pour votre domaine chez OVHcloud <a name="step2"></a>

### Etape 3 : Récupérer une sauvegarde complète de votre site Web <a name="step3"></a>

### Etape 4 : Installer la sauvegarde de votre site Web sur votre offre d'hébergement OVHcloud <a name="step4"></a>

### Etape 5 : Recréer vos adresses e-mail à l'identique chez OVHcloud <a name="step5"></a>

### Etape 6 : Déclarer les serveurs mail OVHcloud dans la zone DNS active de votre nom de domaine <a name="step6"></a>

### Etape 7 : Transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles chez OVHcloud <a name="step7"></a>

### Etape 8 : Changer les serveurs DNS actifs de votre domaine par ceux d'OVHcloud <a name="step8"></a>

### Etape 9 : Transférer votre nom de domaine chez OVHcloud <a name="step9"></a>

### Etape 10 : Reconfiguration de vos logiciels de messagerie <a name="step10"></a>

#### Étape 2 : transférer votre site internet

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Récupérer une sauvegarde du site|Il s'agit d'une sauvegarde intégrale de votre site internet incluant les fichiers ainsi que la base de données (le cas échéant). Cette sauvegarde complète est essentielle pour migrer votre site chez OVHcloud.|
|2|Mettre en ligne votre site chez OVHcloud|Connectez-vous à votre espace de stockage (FTP) afin d'y importer les fichiers de votre site. Vous devrez les mettre en ligne dans le dossier **"www"**. Les identifiants de connexion au FTP vous sont transmis par e-mail.|
|3|Création d'une base de données OVHcloud|Si votre site fonctionne avec une base de données, vous devrez en [créer une nouvelle chez OVHcloud](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external} depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.|
|4|Importer les données de la base|Importez la sauvegarde de votre base de données en utilisant [l'outil OVHcloud mis à disposition dans votre espace client](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.|
|5|Lier le site à la nouvelle base|Les informations de votre ancienne base de données sont toujours présentes dans le fichier de configuration de votre site. Sur votre espace de stockage OVHcloud, modifiez ce fichier en y renseignant les informations de la base de données OVHcloud.|

> [!success]
>
> Pour la section **5** du tableau ci-dessus et si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez des informations sur leurs fichiers de configuration grâce à **l'étape 2** du guide sur la [modification du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/)
>

La configuration de votre nom de domaine restant inchangée, l'hébergement utilisé pour afficher votre site internet reste toujours celui de votre prestataire actuel.

#### Étape 3 : recréer vos adresses e-mail chez OVHcloud

Une fois le site internet transféré, vous devez [recréer chez OVHcloud les mêmes adresses](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external} que vous utilisez chez votre prestataire actuel. Celles-ci devront porter le même nom. Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, rendez-vous dans la section `E-mails`{.action}, puis sur l'hébergement web que vous venez de commander (portant le même intitulé que votre nom de domaine). Suivez les étapes de création en cliquant sur le bouton `Créer une adresse e-mail`{.action}.

La configuration de votre nom de domaine restant inchangée, la réception des nouveaux messages s'effectue toujours sur les adresses e-mail créées chez votre prestataire actuel. Vous devez toujours utiliser ces dernières pour réaliser vos envois.

#### Étape 4 : modifier la configuration de votre nom de domaine

Maintenant que votre site internet est transféré et vos adresses e-mail recréées chez OVHcloud, il est nécessaire de modifier la configuration de votre nom de domaine. Cela passe par la modification des serveurs DNS de ce dernier pour ceux d'OVHcloud (envoyés par e-mail et également affichés dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}). Cette manipulation a deux effets :

- **lier techniquement votre domaine aux solutions OVHcloud** : votre hébergement OVHcloud sera utilisé pour afficher votre site internet et la réception des nouveaux messages s'effectuera sur vos adresses e-mail OVHcloud ;
- **empêcher une interruption de service** : si votre bureau d'enregistrement décide de couper sa propre configuration DNS lorsque vous transférerez votre nom de domaine, cela n'aura pas d'incidence étant donné que vous utiliserez déjà la configuration OVHcloud.

> [!warning]
>
> Le changement des serveurs DNS se réalise dans le bureau d'enregistrement actuel de votre nom de domaine et nécessite un temps de propagation de 24 à 48 heures maximum avant d’être pleinement effectif.
>

#### Étape 5 : transférer le contenu de vos adresses e-mail

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Migrer le contenu des adresses chez OVHcloud|Utilisez l’outil [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui vous permet de copier le contenu des adresses e-mail enregistrées chez votre ancien prestataire vers celles créées chez OVHcloud.|
|2|Utiliser vos adresses|Vos adresses e-mail OVHcloud sont accessibles depuis une application en ligne ([webmail](https://mail.ovh.net/){.external}). Si vous aviez paramétré l'une des adresses sur un client de messagerie (comme Outlook), vous devez la configurer de nouveau pour y renseigner [les serveurs d'OVHcloud](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/) à la place de ceux de votre ancien prestataire.|

#### Étape 6 : transférer votre nom de domaine vers OVHcloud

Il ne reste plus qu'à transférer votre nom de domaine vers OVHcloud ! Pour cela, plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Déverrouiller votre domaine|Le verrouillage d'un domaine empêche de le transférer dans un autre bureau d'enregistrement comme OVHcloud. Il est donc nécessaire de le déverrouiller au préalable dans votre bureau d'enregistrement actuel.|
|2|Récupérer le code de transfert|Le code de transfert vous est remis par votre bureau d'enregistrement actuel lorsque vous déverrouillez votre domaine.|
|3|Réaliser la commande de transfert chez OVHcloud|Depuis le site d'[OVHcloud](https://ovh.com/){.external}, réalisez votre commande de transfert. Vous devrez y renseigner le code de transfert obtenu précédemment.|
|4|Payer la commande|Dès réception de votre règlement, le transfert de votre nom de domaine débutera.|
|5|Valider ou attendre la validation du transfert| Cette étape diffère selon l'extension de votre domaine. Lorsqu'une validation est requise, une demande par e-mail est généralement envoyée. La procédure à suivre y est renseignée. Vous devrez suivre ces étapes menant à la confirmation de la demande de transfert.| 

Une fois le transfert arrivé à son terme, votre site internet, vos adresses e-mail et votre nom de domaine ont bien été migrés vers OVHcloud sans interruption de service !

### Migration avec probable interruption de service

#### Étape 1 : commander le transfert et l'hébergement de vos services chez OVHcloud

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Déverrouiller votre domaine|Le verrouillage d'un domaine empêche de le transférer dans un autre bureau d'enregistrement comme OVHcloud. Il est donc nécessaire de le déverrouiller au préalable dans votre bureau d'enregistrement actuel.|
|2|Récupérer le code de transfert|Le code de transfert vous est remis par votre bureau d'enregistrement actuel lorsque vous déverrouillez votre domaine.|
|3|Réaliser la commande chez OVHcloud|Depuis le site d'[OVHcloud](https://ovh.com/){.external}, réalisez votre commande de transfert de nom de domaine et d'hébergement web. Vous devrez y renseigner le code de transfert obtenu précédemment. Lors du choix des serveurs DNS, précisez ceux de votre prestataire actuel.|
|4|Payer la commande|Dès réception de votre règlement, le transfert de votre nom de domaine débutera ainsi que l'installation de votre hébergement. **Selon la politique interne du bureau d'enregistrement actuel de votre nom de domaine, la résolution DNS de ce dernier peut être stoppée, rendant inaccessible l'ensemble des services qui en dépendent (site internet et adresses e-mail notamment).**|
|5|Valider ou attendre la validation du transfert|Cette étape diffère selon l'extension de votre domaine. Lorsqu'une validation est requise, une demande par e-mail est envoyée. La procédure à suivre y est renseignée. Vous devrez suivre ces étapes menant à la confirmation de la demande de transfert.|

#### Étape 2 : transférer votre site internet

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Récupérer une sauvegarde du site|Il s'agit d'une sauvegarde intégrale de votre site internet incluant les fichiers ainsi que la base de données (le cas échéant). Cette sauvegarde complète est essentielle pour migrer votre site chez OVHcloud.|
|2|Mettre en ligne le site chez OVHcloud|Connectez-vous à votre espace de stockage (FTP) afin d'y importer les fichiers de votre site. Vous devrez les mettre en ligne dans le dossier **"www"**. Les identifiants de connexion au FTP vous sont transmis par e-mail.|
|3|Création d'une base de données OVHcloud|Si votre site fonctionne avec une base de données, vous devrez en [créer une nouvelle chez OVHcloud](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external} depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.|
|4|Importer les données de la base|Importez la sauvegarde de votre base de données en utilisant [l'outil OVHcloud mis à disposition dans votre espace client](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.|
|5|Lier le site à la nouvelle base|Les informations de votre ancienne base de données sont toujours présentes dans le fichier de configuration de votre site. Sur votre espace de stockage OVHcloud, modifiez ce fichier en y renseignant les informations de la base de données OVHcloud.|

> [!success]
>
> Pour la section **5** du tableau ci-dessus et si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez des informations sur leurs fichiers de configuration grâce à **l'étape 2** du guide sur la [modification du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/)
>

La configuration de votre nom de domaine restant inchangée, l'hébergement utilisé pour afficher votre site internet reste toujours celui de votre prestataire actuel si la résolution DNS est toujours active.

#### Étape 3 : recréer vos adresses e-mail chez OVHcloud

**Une fois le transfert de votre domaine terminé**, vous recevrez un e-mail vous informant que le service e-mail lié à votre hébergement vient d'être installé. Dès lors, vous devez [recréer chez OVHcloud les mêmes adresses e-mail](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external} que celles que vous utilisez chez votre prestataire actuel (elles devront porter le même nom). Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, rendez-vous dans la section `E-mails`{.action}, puis sur l'hébergement web que vous venez de commander (portant le même nom que votre domaine). Suivez les étapes de création en cliquant sur le bouton `Créer une adresse e-mail`{.action}.

La configuration de votre nom de domaine restant inchangée, la réception des nouveaux messages s'effectue toujours sur les adresses e-mail créées chez votre prestataire actuel si la résolution DNS est toujours effective. Utilisez toujours ces dernières pour réaliser vos envois.

#### Étape 4 : modifier la configuration de votre nom de domaine

Maintenant que votre site internet est transféré, vos adresses e-mail recréées et votre nom de domaine transféré chez OVHcloud, il est nécessaire de modifier la configuration de ce dernier. Cela passe par la modification des serveurs DNS de votre nom de domaine pour ceux d'OVHcloud.

Vous devrez les modifier depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Une documentation intitulée *[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}* peut vous accompagner dans cette démarche.

Cette manipulation peut avoir plusieurs conséquences :

- **lier techniquement votre domaine aux solutions OVHcloud** : votre hébergement OVHcloud sera utilisé pour afficher votre site internet et la réception des nouveaux messages s'effectuera sur vos adresses e-mail OVHcloud ;
- **résoudre une interruption de service** : si votre bureau d'enregistrement a coupé sa propre configuration DNS lorsque vous avez transféré votre nom de domaine, ceci permettra à ce dernier d'être de nouveau joignable.

> [!warning]
>
> Le changement des serveurs DNS d'un nom de domaine nécessite un temps de propagation de 24 à 48 heures maximum avant d’être pleinement effectif.
>

#### Étape 5 : transférer le contenu de vos adresses e-mail

Plusieurs sous-étapes sont à réaliser.

|Sous-étapes|Description|Détails|
|---|---|---|
|1|Migrer le contenu des adresses chez OVHcloud|Utilisez l’outil [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui vous permet de copier le contenu des adresses e-mail créées chez votre ancien prestataire vers celles créées chez OVHcloud.|
|2|Utiliser vos adresses|Vos adresses e-mail OVHcloud sont accessibles depuis une application en ligne [Webmail](https://mail.ovh.net/){.external}. Si vous aviez paramétré l'une de vos adresses sur un client de messagerie (comme Outlook), vous devez la configurer de nouveau pour y renseigner [les serveurs d'OVHcloud](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/) à la place de ceux de votre ancien prestataire.|

Votre site internet, vos adresses e-mail et votre nom de domaine ont bien été migré vers OVHcloud !

## Aller plus loin <a name="go-further"></a>

[Généralités sur les e-mails mutualisés](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/){.external}.

[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}.

[Créer une adresse e-mail mutualisé](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external}.

[Importation d’une base de donnees MySQL](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.

[Gestion d’une base de donnees depuis un hébergement mutualisé](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.