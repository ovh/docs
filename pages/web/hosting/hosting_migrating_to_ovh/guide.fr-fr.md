---
title: Migrer son site et ses e-mails vers OVHcloud
slug: migrer-mon-site-chez-ovh
excerpt: Découvrez comment migrer votre site internet, vos e-mails et votre nom de domaine chez OVHcloud sans interruption de services
section: Premiers pas
order: 08
---

**Dernière mise à jour le 14/11/2022**

## Objectif

Ce guide vous présente les différentes actions à réaliser pour migrer l'ensemble de votre site web, votre nom de domaine et vos adresses e-mail chez OVHcloud, sans interruption de services.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Avoir accès à la gestion du nom de domaine de votre site Web (ce dernier doit aussi exister depuis plus de 60 jours).
- Avoir accès à la zone DNS (Domain Name System) active de votre nom de domaine.
- Avoir accès aux fichiers et à la base de données de votre site Web chez votre hébergeur actuel.
- Disposer des identifiants (utilisateur, mot de passe, serveur) de vos adresses e-mail actuelles.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

> [!success]
>
> Les instructions de ce guide référencent plusieurs produits de l'univers Web Cloud, nous vous recommandons de lire toutes les étapes ci-dessous **avant** de vous lancer dans la migration de vos services.
>

Migrer votre site internet et vos e-mails vers OVHcloud **sans interruption de service** nécessite d'appliquer une procédure précise en 10 étapes :

- [Etape 1 : commander l'hébergement et les adresses e-mail chez OVHcloud](#step1)
- [Etape 2 : créer et pré-configurer une zone DNS pour votre nom de domaine chez OVHcloud](#step2)
- [Etape 3 : récupérer une sauvegarde complète de votre site Web](#step3)
- [Etape 4 : importer la sauvegarde de votre site Web sur votre offre d'hébergement OVHcloud](#step4)
- [Etape 5 : recréer vos adresses e-mail à l'identique chez OVHcloud](#step5)
- [Etape 6 : déclarer les serveurs e-mail OVHcloud dans la zone DNS active de votre nom de domaine](#step6)
- [Etape 7 : transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles adresses chez OVHcloud](#step7)
- [Etape 8 : reconfigurer vos logiciels de messagerie](#step8)
- [Etape 9 : remplacer les serveurs DNS actifs de votre nom de domaine par ceux d'OVHcloud](#step9)
- [Etape 10 : transférer votre nom de domaine chez OVHcloud](#step10)

En suivant ces 10 étapes **dans l'ordre**, vous n'aurez pas d'interruption de service pour l'accès à votre site Web et pour la réception de vos nouveaux e-mails.

Cependant, en fonction de votre bureau d'enregistrement, de votre fournisseur d'hébergement ou de votre fournisseur de services e-mail, il est possible que ces derniers coupent l'accès à vos anciens services s'ils constatent que votre nom de domaine n'est plus configuré par le biais de leurs infrastructures.<br>
Dans ce cas, une interruption de service peut survenir.

Si une telle interruption devait avoir lieu, ce guide est construit de telle sorte à en minimiser la durée.

### Etape 1 : commander l'hébergement et les adresses e-mail chez OVHcloud <a name="step1"></a>

Plusieurs offres d'hébergement mutualisé OVHcloud contiennent une offre e-mail « MX Plan ». Cette offre e-mail permet de créer des adresses e-mail avec un espace de stockage de 5 Go maximum pour chaque adresse. Choisissez parmi les offres d'hébergement ci-dessous en fonction de la version PHP, de la version SQL, du nombre d'adresses e-mail dont vous avez besoin et de la taille de votre site à migrer :

- L'hébergement [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) avec **10 adresses e-mail** « MX Plan »
- L'hébergement [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) avec **100 adresses e-mail** « MX Plan »
- L'hébergement [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) avec **1000 adresses e-mail** « MX Plan ». Cette offre est déclinée en 4 « sous-offres ».
- L'hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/) avec **200 adresses e-mail** « MX Plan ». Cette offre est utilisée par les développeurs d'applications.

Une fois votre offre d'hébergement choisie, si vous n'êtes pas encore client OVHcloud, cliquez sur le bouton `Commander`{.action} présent sur les pages commerciales ci-dessus. Suivez les étapes de la commande **sans demander le transfert de votre nom de domaine**.

Vous pouvez aussi effectuer la commande depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois connecté, cliquez sur la partie `Web Cloud`{.action}, cliquez ensuite sur le bouton `Commander`{.action}, dans la partie supérieure gauche, puis sur `Hébergement`{.action}. Poursuivez les étapes de la commande **sans demander le transfert de votre nom de domaine**.

Une fois le paiement validé, l'installation de l'hébergement va démarrer. Un e-mail sera envoyé sur votre adresse e-mail de contact. Celui-ci contiendra les identifiants d'accès à l'espace de stockage FTP (File Transfert Protocol) de votre hébergement Web.

> [!primary]
>
> OVHcloud propose d'autres offres e-mail en plus de l'offre « MX Plan ». Vous pouvez, par exemple, combiner à des adresses e-mail « MX Plan » des adresses [« Email-Pro »](https://www.ovhcloud.com/fr/emails/email-pro/) et/ou des comptes [« Exchange »](https://www.ovhcloud.com/fr/emails/hosted-exchange/).
>

### Etape 2 : créer et préconfigurer une zone DNS pour votre nom de domaine chez OVHcloud <a name="step2"></a>

Lorsque votre hébergement est créé, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) puis créez une zone DNS pour votre nom de domaine **sans les « www »**. Vous pouvez vous aider de notre guide sur la [création d'une zone DNS chez OVHcloud](https://docs.ovh.com/fr/domains/creer-une-zone-dns-pour-un-domaine-externe/).

Une fois la zone DNS créée, accédez à sa gestion à l'aide de notre guide « [Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) ». Si elles ne sont pas présentes, renseignez les entrées suivantes :

- Votre nom de domaine sans les « www », vers la cible de type « MX » : « mx1.mail.ovh.net. ».
- Votre nom de domaine sans les « www », vers la cible de type « MX » : « mx2.mail.ovh.net. ».
- Votre nom de domaine sans les « www », vers la cible de type « MX » : « mx3.mail.ovh.net. ».
- Votre nom de domaine sans les « www », vers l'adresse IP cible de type « A » de votre hébergement OVHcloud. Pour récupérer la bonne adresse IP, consultez notre guide listant les [adresses IP des différents clusters d'hébergement mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
- Votre nom de domaine **avec** les « www », vers votre nom de domaine sans les « www », à l'aide d'une entrée de type « CNAME ».

**Exemple** : Pour le nom de domaine « domain.tld », le rendu doit être le suivant :

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Notez les deux valeurs cibles des deux premières entrées de type « NS ». Elles serviront lors de l'[étape 9](#step9) de ce guide.
>
> Ces valeurs correspondent aux serveurs DNS associés à cette zone DNS pour votre nom de domaine.
>

### Etape 3 : récupérer une sauvegarde complète de votre site Web <a name="step3"></a>

Récupérez le contenu de l'espace de stockage FTP de votre hébergement actuel, ainsi qu'une sauvegarde de votre base de données si votre site en utilise une.

Ces opérations se font exclusivement auprès de votre hébergeur actuel. Contactez-le si vous éprouvez des difficultés à récupérer une sauvegarde complète de votre site Web.

### Etape 4 : importer la sauvegarde de votre site Web sur votre offre d'hébergement OVHcloud <a name="step4"></a>

Pour importer la sauvegarde de l'espace de stockage FTP de votre ancien prestataire, [connectez-vous à l'espace de stockage FTP de votre hébergement OVHcloud](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) et téléversez la sauvegarde dans le dossier racine « www » (ou dans un autre dossier racine que vous aurez préalablement créé).

Nous vous recommandons d'utiliser le logiciel [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) pour téléverser votre sauvegarde FTP sur votre hébergement.

Si votre fichier de sauvegarde est compressé (zippé), décompressez-le dans un dossier vide sur votre ordinateur avant de téléverser vos fichiers sur l'hébergement OVHcloud.

Pour la sauvegarde de votre base de données, [créez une nouvelle base de données](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/) puis [importez votre sauvegarde dans votre nouvelle base de données](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/).

> [!primary]
>
> OVHcloud propose des serveurs de base de données CloudDB. Si vous souhaitez utiliser cette offre avec votre site web, retrouvez l'ensemble de notre documentation sur ce produit sur notre page dédiée <https://docs.ovh.com/fr/clouddb/>.
>

Liez ensuite votre base de données OVHcloud avec le fichier de configuration de votre site présent dans l'espace de stockage FTP de votre hébergement OVHcloud.
Pour cela, remplacez les informations de connexion de votre ancienne base de données par celles de votre nouvelle base de données OVHcloud. Ces informations se trouvent dans le fichier de « configuration/connexion à votre base de données » de votre site web.

> [!success]
>
> Pour lier votre nouvelle base de données si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez les informations sur leurs fichiers de configuration depuis **l'étape 2** du guide « [modification du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/) ».
>

Déclarez/autorisez votre nom de domaine externe sur votre hébergement web OVHcloud via notre guide « [gestion des multisites d'un hébergement web OVHcloud](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) ». Déclarez bien le « nom » du dossier racine que vous avez choisi au début de l'[étape 4](#step4). Pour rappel, il s'agit du dossier dans lequel vous avez placé vos fichiers dans votre espace de stockage FTP.

> [!warning]
>
> **La réalisation de cette opération est cruciale**, votre site internet ne s'affichera pas tant que vous n'aurez pas renseigné les bons éléments. Respectez particulièrement la syntaxe de l'entrée DNS « TXT ».
>
> Comme votre nom de domaine n'est pas encore chez OVHcloud, vous devrez ajouter une entrée DNS de type « TXT » avec le « token OVHcontrol » et changer le pointage de type « A » de votre nom de domaine. Ceci directement dans la zone DNS active de votre nom de domaine chez votre fournisseur actuel.
>
> Faites la même chose pour votre sous-domaine en « www ».
>
> Contactez, si nécessaire, le gestionnaire actuel de votre zone DNS pour effectuer la manipulation.
>

**Exemple** : pour le nom de domaine « domain.tld » :

![hosting](images/DNSmultisite.png){.thumbnail}

**La modification des entrées DNS « A », « CNAME » et « TXT » doit être effectuée auprès du fournisseur DNS actuel de votre nom de domaine et nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effectif.**

Après la propagation DNS, le site qui s'affichera avec votre nom de domaine sera celui hébergé chez OVHcloud.

### Etape 5 : recréer vos adresses e-mail à l'identique chez OVHcloud <a name="step5"></a>

Recréez à l'identique les adresses e-mail présentes chez votre fournisseur e-mail à l'aide de notre guide sur la [création d'adresses e-mail « MX Plan »](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

Si vous avez opté pour une solution « Email Pro » ou « Exchange », consultez notre documentation sur le sujet pour créer vos adresses e-mail :

- Pour « Email-Pro » : <https://docs.ovh.com/fr/emails-pro/premiere-configuration/>
- Pour « Exchange » : <https://docs.ovh.com/fr/microsoft-collaborative-solutions/premiere-configuration-exchange/>

### Etape 6 : déclarer les serveurs e-mail OVHcloud dans la zone DNS active de votre nom de domaine <a name="step6"></a>

Cette étape consiste à effectuer le changement des serveurs e-mail « MX » dans la zone DNS active de votre nom de domaine.
Cela aura pour effet de réceptionner vos nouveaux e-mails sur vos nouvelles adresses e-mail OVHcloud.

Remplacez (sans laisser les anciennes entrées), chez votre fournisseur, vos anciennes entrées « MX » par les trois entrées suivantes :

- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : « mx1.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : « mx2.mail.ovh.net. ».
- Votre nom de domaine (sans les « www ») vers la cible de type « MX » : « mx3.mail.ovh.net. ».

Le changement des serveurs « MX » s'effectue auprès du fournisseur DNS actuel de votre nom de domaine et nécessite un temps de **propagation de 4 à 24 heures** maximum avant d’être pleinement effectif.<br>
Cela signifie que, pendant la propagation DNS de la modification, vos e-mails seront reçus de moins en moins sur vos anciennes adresses e-mail et de plus en plus sur vos nouvelles adresses e-mail OVHcloud.<br>
Une fois la propagation terminée, tous les nouveaux e-mails reçus seront réceptionnés sur vos adresses e-mail OVHcloud.

Nous vous conseillons de faire le changement des entrées « MX » **avant** d'effectuer la migration du contenu des adresses e-mail.
En effet, cette méthode vous évite de refaire une migration pour les quelques e-mails reçus sur vos anciennes adresses e-mail pendant la propagation DNS.

### Etape 7 : transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles adresses chez OVHcloud <a name="step7"></a>

Après la propagation DNS , vos nouveaux e-mails sont désormais tous reçus sur vos nouvelles adresses e-mail. Vos anciens e-mails sont toutefois toujours enregistrés sur votre ancien serveur e-mail.

Pour migrer le contenu de vos anciennes adresses, deux options s'offrent à vous.

**Option 1** : utilisez notre outil [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui permet de copier le contenu des adresses e-mail enregistrées chez votre ancien prestataire vers celles créées chez OVHcloud. Vous pouvez vous aider de notre guide « [Migrer des comptes e-mail via OVH Mail Migrator](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/) ».

Nous vous conseillons de ne pas utiliser le `Type de serveur`{.action} **POP** dans la partie `Compte source`{.action}. En effet, ce protocole efface les e-mails de votre ancien serveur pour les envoyer vers le serveur OVHcloud de destination. Vous ne pourriez alors plus comparer le contenu de l'ancienne adresse et de la nouvelle adresse e-mail.

Pour la partie `Compte de destination`{.action}, renseignez uniquement l'adresse e-mail OVHcloud concernée et son mot de passe associé. Ceci en laissant le `Type de serveur`{.action} en `Hosted by OVH (Autodetect)`{.action}.

Une fois la migration terminée, connectez-vous à votre adresse e-mail OVHcloud à l'aide du [webmail OVHcloud](https://www.ovhcloud.com/fr/mail/) pour vérifier que tous vos e-mails sont bien présents dans le nouveau compte.

Réitérez l'opération pour l'ensemble de vos comptes e-mail.

> [!primary]
>
> Vous devez posséder les identifiants d'accès de tous vos anciens comptes e-mail ainsi que le nom du serveur e-mail de votre ancien prestataire pour réaliser cette action.
>
> Si vos adresses e-mail étaient configurées en POP sans conservation de copies des e-mails sur votre ancien serveur e-mail, ou si vous disposez des e-mails enregistrés « en local » sur vos appareils, seule l'**option 2** pourra être réalisée.
>

**Option 2** : effectuez une sauvegarde du contenu de vos adresses e-mail à l'aide d'un logiciel de messagerie (Outlook, Mail de Mac, ...), reconfigurez votre logiciel de messagerie puis importez la sauvegarde dans votre nouvelle adresse e-mail OVHcloud.

### Etape 8 : reconfigurer vos logiciels de messagerie <a name="step8"></a>

Une fois vos anciennes adresses e-mail migrées chez OVHcloud, reconfigurez vos logiciels de messagerie à l'aide de l'ensemble de nos guides sur le sujet.

#### Pour les comptes e-mail « MX Plan » : 

- Retrouvez l'ensemble des paramètres de configuration dans notre guide « [Généralités sur les e-mails MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/#2-utiliser-le-logiciel-de-votre-choix) ». Vous y trouverez également les liens vers les guides de configuration personnalisés pour les principaux logiciels de messagerie.

#### Pour les comptes « Email-Pro » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration sur ordinateur` et `Configuration sur smartphone` de [notre documentation sur l'offre Email-Pro](https://docs.ovh.com/fr/emails-pro/).

#### Pour les comptes e-mail « Exchange » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration Exchange sur ordinateur` et `Configuration Exchange sur smartphone` de [notre documentation sur l'offre Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

### Etape 9 : remplacer les serveurs DNS actifs de votre nom de domaine par ceux d'OVHcloud <a name="step9"></a>

La zone DNS pré-configurée lors de l'[étape 2](#step2) n'est pas encore appliquée à votre nom de domaine.

Remplacez les serveurs DNS actuels de votre nom de domaine par les deux serveurs DNS déclarés dans la zone DNS OVHcloud.

> [!warning]
>
> Le changement des serveurs DNS doit être effectué depuis le bureau d'enregistrement actuel de votre nom de domaine et nécessite un temps de **propagation de 24 à 48 heures** maximum avant d’être pleinement effectif.
>

### Etape 10 : transférer votre nom de domaine chez OVHcloud <a name="step10"></a>

Une fois la propagation DNS terminée, testez votre site et vérifiez l'envoi et la réception des e-mails depuis vos adresses e-mail.
Si tout est en ordre, déverrouillez votre nom de domaine et récupérez son « code de transfert », « EPP » ou « AuthCode » depuis votre bureau d'enregistrement actuel.

Transférez ensuite votre nom de domaine à l'aide de notre guide sur le [transfert d'un nom de domaine chez OVHcloud](https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/).

Une fois le transfert de vos données et services terminé, il ne vous reste plus qu'à résilier vos anciens services chez votre (vos) ancien(s) fournisseur(s).

## Aller plus loin <a name="go-further"></a>

[Généralités sur les e-mails mutualisés](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/).

[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).

[Créer une adresse e-mail mutualisée](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

[Importation d’une base de données MySQL](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/).

[Gestion d’une base de données depuis un hébergement mutualisé](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
