---
title: Migrer son site et ses e-mails vers OVHcloud
slug: migrer-mon-site-chez-ovh
excerpt: Découvrez comment migrer votre site internet, vos e-mails et votre domaine chez OVHcloud sans interruption
section: Premiers pas
order: 08
---

**Dernière mise à jour le 19/10/2022**

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

- Gérer le nom de domaine de votre site Web (ce dernier doit aussi exister depuis plus de 60 jours).
- Accéder à la zone DNS (Domain Name System) active de votre nom de domaine
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
- [Etape 8 : Reconfigurer vos logiciels de messagerie](#step8)
- [Etape 9 : Changer les serveurs DNS actifs de votre domaine par ceux d'OVHcloud](#step9)
- [Etape 10 : Transférer votre nom de domaine chez OVHcloud](#step10)

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

Il existe plusieurs offres d'hébergement mutualisé chez OVHcloud qui contiennent une offre e-mail « MX Plan ». Cette offre e-mail permet de créer des adresses e-mail POP/IMAP avec un espace de stockage de 5Go maximum pour chaque adresse. Choisissez parmi les offres d'hébergement ci-dessous en fonction de la version PHP, de la version SQL, du nombre d'adresses e-mail dont vous avez besoin et de la taille de votre site à migrer :

- L'hébergement [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) avec 10 adresses e-mail « MX Plan »
- L'hébergement [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) avec 100 adresses e-mail « MX Plan »
- L'hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) avec 1000 adresses e-mail « MX Plan » : offre déclinée en 4 "sous-offres"
- L'hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/) avec 200 adresses e-mail « MX Plan » : offre utilisée par les développeurs d'applications.

Si vous n'êtes pas encore client OVHcloud et une fois votre offre d'hébergement choisie, cliquez sur le bouton `Commander`{.action} présent sur chacune des pages commerciales ci-dessus ou commander sur <https://www.ovh.com> puis poursuivez les étapes du tunnel de commande **sans demander le transfert de votre domaine**.

Si non, vous pouvez effectuer la commande depuis votre [Espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois connecté, cliquez sur la partie `Web Cloud`{.action}, cliquez ensuite sur le bouton bleu `Commander`{.action} puis sur le carré dans lequel est mentionné `Hébergement`{.action}. Poursuivez ensuite les étapes du tunnel de commande **sans demander le transfert de votre domaine**.

Une fois le paiement validé, l'installation de l'hébergement va démarrer. Un e-mail sera envoyé à votre adresse mail de contact. Celui-ci contiendra les identifiants d'accès à l'espace de stockage FTP (File Transfert Protocol) de votre hébergement Web.

> [!Primary]
>
> OVHcloud propose d'autres offres mail en plus de l'offre « MX Plan ». Vous pouvez, par exemple, combiner à des adresses mail « MX Plan » des adresses [« Email-Pro »](https://www.ovhcloud.com/fr/emails/email-pro/) et/ou des comptes [« Exchange »](https://www.ovhcloud.com/fr/emails/hosted-exchange/).
>


### Etape 2 : Créer et pré-configurer une zone DNS pour votre domaine chez OVHcloud <a name="step2"></a>

Lorsque votre hébergement est créé, connectez-vous à votre [Espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) puis créez une zone DNS pour votre nom de domaine **sans préciser les « www »**.
Ceci à l'aide de notre guide sur la [création d'une zone DNS chez OVHcloud](https://docs.ovh.com/fr/domains/creer-une-zone-dns-pour-un-domaine-externe/).

Une fois la zone DNS créée, rendez-vous sur celle-ci à l'aide de notre guide sur la [gestion d'une zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) puis ajoutez à l'intérieur les entrées suivantes si elles ne sont pas déjà placées :

- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx1.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx2.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx3.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers l'adresse IP cible de type « A » de votre hébergement OVHcloud. Pour récupérer la bonne adresse IP, consultez notre guide listant les [adresses IP des différents clusters d'hébergemet mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
- Votre nom de domaine (avec les « www ») vers votre nom de domaine (sans les « www ») à l'aide d'une entrée de type « CNAME ».

**Exemple** : Si on prend le domaine "domain.tld" le rendu doit être le suivant :

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Profitez-en pour récupérer les deux valeurs cibles des deux premières entrées de type « NS ». Vous en aurez besoin lors de l'[étape 9](#step9) de ce guide.
>
> Ce sont les serveurs DNS dont vous aurez besoin pour appliquer la configuration de cette zone DNS à votre domaine.
> 

### Etape 3 : Récupérer une sauvegarde complète de votre site Web <a name="step3"></a>

Récupérez le contenu de l'espace de stockage FTP de votre hébergement actuel ainsi qu'une sauvegarde de votre base de données (si votre site en utilise une pour fonctioner). 

> [!Primary]
>
> Ces opérations se font exclusivement auprès de votre fournisseur d'hébergement actuel, contactez-le si vous éprouvez des difficultés à récupérer une sauvegarde complète de votre site Web.
>

### Etape 4 : Installer la sauvegarde de votre site Web sur votre offre d'hébergement OVHcloud <a name="step4"></a>

Pour installer la sauvegarde de l'espace de stockage FTP récupérée chez votre ancien prestataire, [connectez-vous à l'espace de stockage FTP de votre hébergement OVHcloud](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) et placez la sauvegarde dans le dossier racine « www » (ou dans un autre dossier racine que vous devrez préalablement créer dans votre espace de stockage FTP).

> [!primary]
>
> Nous vous recommandons d'utiliser le logiciel gratuit [Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) pour téléverser votre sauvegarde FTP à l'intérieur de votre hébergement.
>
> Si votre fichier de sauvegarde est compressé (zippé), décompressez-le dans un dossier vide sur votre ordinateur avant de téléverser vos fichiers sur l'hébergement OVHcloud.
>

Pour la sauvegarde de votre base de données, [créez une nouvelle base de données](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/) puis [Importer votre sauvegarde de base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/) à l'intérieur.

> [!primary]
>
> OVHcloud propose des serveurs de base de données SQL Privé/Cloud DB. Si vous souhaitez utiliser cette offre avec votre site web, retrouvez l'ensemble de notre documentation sur ce produit [ici](https://docs.ovh.com/fr/clouddb/).
>

Liez ensuite votre base de données OVHcloud avec les fichiers présents dans l'espace de stockage FTP de votre hébergement OVHcloud.
Pour cela, remplacez les informations de connexion de votre ancienne base de données par celles de votre nouvelle base de données OVHcloud. Ces informations se trouvent dans le fichier de "configuration/connexion à votre base de données" de votre site web.

> [!success]
>
> Pour lier votre nouvelle base de données et si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez des informations sur leurs fichiers de configuration grâce à **l'étape 2** du guide sur la [modification du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/)
>

Si ce n'est pas déjà le cas, déclarez/autorisez votre domaine externe sur votre hébergement web OVHcloud via notre guide sur la [gestion des multisites d'un hébergement web OVHcloud](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Déclarez bien le nom du "dossier racine" dans lequel vous avez placé vos fichiers dans l'espace FTP de votre hébergement OVHcloud au début de cette étape.

> [!warning]
>
> **Soyez très prudent lors de la réalisation de cette opération.** Si elle n'est pas réalisée correctement, votre site internet ne s'affichera plus tant que vous n'aurez pas renseigné les bons éléments. Respectez bien la syntaxe notamment pour l'entrée « TXT ».
>
> Comme votre domaine n'est pas encore chez OVHcloud, vous devrez ajouter une entrée DNS de type « TXT » avec le « token OVHcontrol » et changer le pointage de type « A » de votre domaine. Ceci directement dans la zone DNS active de votre domaine chez votre fournisseur actuel.
>
> Faites la même chose pour votre sous-domaine en « www ».
>
> N'hésitez pas à contacter le gestionnaire actuel de votre zone DNS pour effectuer correctement la manipulation.
>

**Exemple** : Pour le domaine "domain.tld" :

![hosting](images/DNSmultisite.png){.thumbnail}

> [!warning]
>
> La modification des entrées DNS « A », « CNAME » et « TXT » se réalise auprès du fournisseur DNS actuel de votre nom de domaine et nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effectif.
>

Après la propagation DNS, le site qui s'affichera avec votre nom de domaine sera celui hébergé chez OVHcloud.

### Etape 5 : Recréer vos adresses e-mail à l'identique chez OVHcloud <a name="step5"></a>

Recréez à l'identique les adresses mail présentes chez votre fournisseur de mails à l'aide de notre guide sur la [création d'addresses e-mail « MX Plan »](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

> [!Primary]
>
> Si vous avez opté pour une solution « Email-Pro » ou « Exchange », consultez notre documentation sur le sujet pour créer vos adresses e-mail :
>
> - Pour « Email-Pro » : <https://docs.ovh.com/fr/emails-pro/premiere-configuration/>
> - Pour « Exchange » : <https://docs.ovh.com/fr/microsoft-collaborative-solutions/premiere-configuration-exchange/>
>

### Etape 6 : Déclarer les serveurs mail OVHcloud dans la zone DNS active de votre nom de domaine <a name="step6"></a>

Cette étape consiste à effectuer le changement des serveurs mails « MX » dans la zone DNS active de votre nom de domaine.
Cela aura pour effet de réceptionner vos nouveaux mails sur vos nouvelles adresses mail OVHcloud.

Remplacez (sans laisser les anciennes entrées) chez votre fournisseur vos anciennes entrées « MX » par les trois entrées suivantes :

- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx1.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx2.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : : « mx3.mail.ovh.net. ».

> [!warning]
>
> Le changement des serveurs « MX » se réalise auprès du fournisseur DNS actuel de votre nom de domaine et nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effectif.
>
> Cela signifie que pendant la propagation DNS de la modification, vos mails seront reçus de moins en moins sur vos anciennes adresses mail et de plus en plus sur vos nouvelles adresses mail OVHcloud.
>
> Une fois la propagation terminée, tous les nouveaux mail reçus seront réceptionnés sur vos adresses mail OVHcloud.
>

> [!primary]
>
> Nous vous conseillons de faire le changement des entrées « MX » **avant** d'effectuer la migration du contenu des adresses mail.
>
> En effet, avec cette méthode, cela vous évite de refaire une migration pour les quelques mails reçus sur vos anciennes adresses mail pendant la propagation DNS.
>

### Etape 7 : Transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles chez OVHcloud <a name="step7"></a>

Après la propagation DNS , vos nouveaux mails sont désormais tous reçus sur vos nouvelles adresses mail mais vos anciens mails sont toujours enregistrés sur votre ancien serveur mail.

Pour migrer le contenu de vos anciennes adresses, deux possibilités s'offrent à vous.

**Possibilité 1** : Utilisez notre outil [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} permettant de copier le contenu des adresses e-mail enregistrées chez votre ancien prestataire vers celles créées chez OVHcloud.

> [!warning]
>
> Nous vous conseillons de ne pas utiliser dans la partie `Compte source`{.action} le `Type de serveur`{.action} *POP*.
>
> En effet, ce protocole efface les mails de votre ancien serveur pour les envoyer vers le serveur OVHcloud de destination.
>
> Vous ne pourrez alors plus comparer le contenu de l'ancienne et de la nouvelle adresse mail.
>

Pour la partie `Compte de destination`{.action}, renseignez uniquement l'adresse mail OVHcloud concernée et son mot de passe associé.
Ceci en laissant le `Type de serveur`{.action} en `Hosted by OVH (Autodetect)`{.action}.

Une fois la migration terminée, connectez-vous à votre adresse mail OVHcloud à l'aide du [Webmail OVHcloud](https://www.ovhcloud.com/fr/mail/) pour vérifier que tous vos mails sont bien présents dans le nouveau compte.

Réitérez l'opération pour l'ensemble de vos comptes mail.

> [!primary]
>
> Vous devez posséder les identifiants d'accès de tous vos anciens comptes mail ainsi que le nom du serveur mail de votre ancien prestaraire pour réaliser cette action. 
>
> Si vos adresses mail étaient configurées en POP sans conservation de copies des mails sur votre ancien serveur mail ou si vous disposez des mails enregistrés "en local" sur vos appareils, seul la **possibilité 2** pourra être réalisée.
>

**Posibilité 2** : Effectuez une sauvegarde du contenu de vos adresses mail à l'aide d'un logiciel de messagerie (Outlook, Mail de Mac, ...), reconfigurez votre logiciel de messagerie puis importez la sauvegarde dans votre nouvelle adresse mail OVHcloud.

> [!success]
>
> Pour connaître les paramètres de configuration d'un logiciel de messagerie avec une adresse mail OVHcloud, rendez-vous à l'[Etape 8 : Reconfiguration de vos logiciels de messagerie](#step8) de ce guide.
>

### Etape 8 : Reconfigurer vos logiciels de messagerie <a name="step8"></a>

Une fois vos anciennes adresses mail migrées chez OVHcloud avec la **Possibilité 1** de l'étape précédente ou pour poursuivre dans la **Possibilité 2**, reconfigurez vos logiciels de messagerie à l'aide de l'ensemble de nos guides sur le sujet.

#### Pour les adresses mail « MX Plan » : 

- Retrouvez l'ensemble des paramètres de configuration dans la section **"2. Utiliser le logiciel de votre choix"** du guide indiquant les [généralités sur les e-mails « MX Plan »](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/#2-utiliser-le-logiciel-de-votre-choix). Vous y trouverez également les liens vers les guides de configuration personalisés pour les principaux logiciels de messagerie. 

#### Pour les adresses mail « Email-Pro » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration sur ordinateur` et `Configuration sur smartphone` de notre documentation sur l'offre [Email-Pro](https://docs.ovh.com/fr/emails-pro/).

#### Pour les comptes mail « Exchange » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration Exchange sur ordinateur` et `Configuration Exchange sur smartphone` de notre documentation sur l'offre [Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

> [!warning]
>
> Les logiciels de messagerie étant développés par des sociétés tierces, seul les informations présentées dans les guides ci-dessus pourront être communiquées par OVHcloud.
>
> Si vous rencontrez des difficultés pour configurer ou reconfigurer votre logiciel de messagerie, contactez directement le support de votre logiciel. Aucune assistance ne sera réalisée côté OVHcloud sur l'utilisation de ces logiciels.
>

### Etape 9 : Changer les serveurs DNS actifs de votre domaine par ceux d'OVHcloud <a name="step9"></a>

La zone DNS pré-configurée lors de l'[étape 2](#step2) n'est pas encore appliquée à votre domaine.

Remplacez les serveurs DNS actuels de votre domaine par les deux serveurs DNS déclarés dans la zone DNS OVHcloud.

> [!warning]
>
> Le changement des serveurs DNS se réalise dans le bureau d'enregistrement actuel de votre nom de domaine et nécessite un temps de propagation de 24 à 48 heures maximum avant d’être pleinement effectif.
>

### Etape 10 : Transférer votre nom de domaine chez OVHcloud <a name="step10"></a>

Une fois la propagation DNS terminée, testez votre site et vérifiez l'envoi/réception de mails depuis vos adresses mail.
Si tout est en ordre, déverrouillez votre domaine et récupérez son "code de transfert", "EPP" ou "AuthCode" chez votre bureau d'enregistrement actuel. 

Transférez ensuite votre domaine à l'aide de notre guide sur le [transfert d'un nom de domaine chez OVHcloud](https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/).

Une fois le transfert de vos données et services entièrement terminés, il ne vous reste plus qu'à résilier vos anciens services chez votre (vos) ancien(s) fournisseur(s).

## Aller plus loin <a name="go-further"></a>

[Généralités sur les e-mails mutualisés](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/){.external}.

[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}.

[Créer une adresse e-mail mutualisé](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/){.external}.

[Importation d’une base de donnees MySQL](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.

[Gestion d’une base de donnees depuis un hébergement mutualisé](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.