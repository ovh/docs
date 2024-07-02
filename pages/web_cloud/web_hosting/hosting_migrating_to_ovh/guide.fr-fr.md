---
title: "Migrer son site web et ses services associés vers OVHcloud"
excerpt: "Découvrez comment migrer votre site web, votre nom de domaine, votre base de données et vos e-mails chez OVHcloud sans interruption de services"
updated: 2024-06-24
---

## Objectif

Ce guide vous présente les différentes actions à réaliser pour migrer l'ensemble de votre site web, vos dossiers, votre nom de domaine, votre base de données et vos adresses e-mail chez OVHcloud, sans interruption de services.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Avoir accès à la gestion du nom de domaine de votre site web (ce dernier doit aussi exister depuis plus de 60 jours).
- Avoir accès à la zone DNS (Domain Name System) active de votre nom de domaine.
- Avoir accès aux fichiers et à la base de données de votre site web chez votre hébergeur actuel.
- Disposer des identifiants (utilisateur, mot de passe, serveur) de vos adresses e-mail actuelles.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!success]
>
> Les instructions de ce guide référencent plusieurs produits de l'univers Web Cloud, nous vous recommandons de lire toutes les étapes ci-dessous **avant** de vous lancer dans la migration de vos services.
>

Migrer l'intégralité de votre site internet et vos e-mails vers OVHcloud **sans interruption de service** nécessite d'appliquer une procédure précise en 10 étapes :

- [Etape 1 : commander l'hébergement et les adresses e-mail chez OVHcloud](#step1)
- [Etape 2 : créer et pré-configurer une zone DNS pour votre nom de domaine chez OVHcloud](#step2)
- [Etape 3 : récupérer une sauvegarde complète de votre site web](#step3)
- [Etape 4 : importer la sauvegarde de votre site web sur votre offre d'hébergement OVHcloud](#step4)
- [Etape 5 : recréer vos adresses e-mail à l'identique chez OVHcloud](#step5)
- [Etape 6 : déclarer les serveurs e-mail OVHcloud dans la zone DNS active de votre nom de domaine](#step6)
- [Etape 7 : transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles adresses chez OVHcloud](#step7)
- [Etape 8 : reconfigurer vos logiciels de messagerie](#step8)
- [Etape 9 : remplacer les serveurs DNS actifs de votre nom de domaine par ceux d'OVHcloud](#step9)
- [Etape 10 : transférer votre nom de domaine chez OVHcloud](#step10)

En suivant ces 10 étapes **dans l'ordre**, vous n'aurez pas d'interruption de service pour l'accès à votre site web et pour la réception de vos nouveaux e-mails.

Cependant, en fonction de votre bureau d'enregistrement, de votre fournisseur d'hébergement ou de votre fournisseur de services e-mail, il est possible que ces derniers coupent l'accès à vos anciens services s'ils constatent que votre nom de domaine n'est plus configuré par le biais de leurs infrastructures.<br>
Dans ce cas, une interruption de service peut survenir.

Si une telle interruption devait avoir lieu, ce guide est construit de telle sorte à en minimiser la durée.

### Etape 1 : commander l'hébergement et les adresses e-mail chez OVHcloud <a name="step1"></a>

Plusieurs [offres d'hébergement mutualisé OVHcloud](/links/web/hosting) contiennent une offre e-mail « [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) ». Cette offre e-mail permet de créer des adresses e-mail avec un espace de stockage de 5 Go maximum pour chaque adresse. Choisissez parmi les offres d'hébergement ci-dessous en fonction de la version PHP, de la version SQL, du nombre d'adresses e-mail dont vous avez besoin et de la taille de votre site web à migrer :

- L'hébergement [Perso](/links/web/hosting-personal-offer) avec **10 adresses e-mail** « MX Plan »
- L'hébergement [Pro](/links/web/hosting-professional-offer) avec **100 adresses e-mail** « MX Plan »
- L'hébergement [Performance](/links/web/hosting-performance-offer) avec **1000 adresses e-mail** « MX Plan ». Cette offre est déclinée en 4 « sous-offres ».
- L'hébergement [Cloud Web](/links/web/hosting-cloud-web-offer) avec **200 adresses e-mail** « MX Plan ». Cette offre est utilisée par les développeurs d'applications.

Une fois votre offre d'hébergement choisie, si vous n'êtes pas encore client OVHcloud, cliquez sur le bouton `Commander`{.action} présent sur les pages commerciales ci-dessus. Suivez les étapes de la commande **sans demander le transfert de votre nom de domaine** (cette action sera effectuée à l'étape 10 de ce guide).

Vous pouvez aussi effectuer la commande depuis votre [espace client OVHcloud](/links/manager). Une fois connecté, suivez les instructions suivantes :

- Rendez-vous sur l'onglet `Web Cloud`{.action}.
- En haut à gauche de l'interface, cliquez sur le bouton `Commander`{.action} puis sur `Hébergement`{.action}.
- Poursuivez les étapes de la commande **sans demander le transfert de votre nom de domaine** (cette action sera effectuée à l'étape 10 de ce guide).

Une fois le paiement validé, l'installation de l'hébergement va démarrer. Un e-mail sera envoyé sur votre adresse e-mail de contact. Celui-ci contiendra les identifiants d'accès à l'espace de stockage FTP (File Transfert Protocol) de votre hébergement Web.

> [!primary]
>
> OVHcloud propose d'autres offres e-mail en plus de l'offre « MX Plan ». Vous pouvez, par exemple, combiner à des adresses e-mail « MX Plan » des adresses [« Email-Pro »](/links/web/email-pro) et/ou des comptes [« Exchange »](/links/web/emails-hosted-exchange).
>

### Etape 2 : créer et préconfigurer une zone DNS pour votre nom de domaine chez OVHcloud <a name="step2"></a>

Si votre domaine se trouve chez un autre prestataire et que vous souhaitez le transférer chez OVHcloud, vous devez dans un premier temps créer et pré-configurer une zone DNS avant d'initier le transfert, afin d'éviter une interruption de services.

Lorsque votre hébergement est créé, connectez-vous à votre [espace client OVHcloud](/links/manager) puis créez une zone DNS pour votre nom de domaine **sans les « www »**. Vous pouvez vous aider de notre guide sur la [création d'une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_create).

Une fois la zone DNS créée, accédez à sa gestion à l'aide de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

Si elles ne sont pas présentes, renseignez les entrées suivantes :

**Exemple**  (pour le nom de domaine « domain.tld ») :

|Domaine|Type d'enregistrement|Priorité|Cible|
|---|---|---|---|
|domain.tld.|MX|1|mx1.mail.ovh.net.|
|domain.tld.|MX|5|mx2.mail.ovh.net.|
|domain.tld.|MX|100|mx3.mail.ovh.net.|
|www.domain.tld.|CNAME|-|domain.tld.|
|domain.tld.|A|-|`adresse_IP_cible`|

Pour récupérer la bonne adresse IP cible de votre hébergement OVHcloud, consultez notre guide listant les [adresses IP des différents clusters d'hébergement mutualisés](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

**Exemple** : Pour le nom de domaine « domain.tld », le rendu des entrées de votre nom de domaine doit être le suivant :

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-mx-a-cname.png){.thumbnail}

> [!success]
>
> Notez les deux valeurs cibles ayant pour type d'enregistrement « NS ». Ces valeurs, de type `dnsXX.ovh.net` et `nsXX.ovh.net` (ou `dns200.anycast.me` et `ns200.anycast.me`), correspondent aux serveurs DNS associés à cette zone DNS pour votre nom de domaine. Elles serviront lors de l'[étape 9](#step9) de ce guide.
>

### Etape 3 : récupérer une sauvegarde complète de votre site web <a name="step3"></a>

Récupérez le contenu de l'espace de stockage FTP de votre hébergement actuel, ainsi qu'une sauvegarde de votre base de données si votre site web en utilise une.

Ces opérations se font exclusivement auprès de votre hébergeur actuel. Contactez-le si vous éprouvez des difficultés à récupérer une sauvegarde complète de votre site web.

### Etape 4 : importer la sauvegarde de votre site web sur votre offre d'hébergement OVHcloud <a name="step4"></a>

Pour importer la sauvegarde de l'espace de stockage FTP de votre ancien prestataire, [connectez-vous à l'espace de stockage FTP de votre hébergement OVHcloud](/pages/web_cloud/web_hosting/ftp_connection) et téléversez la sauvegarde dans le dossier racine « www » (ou dans un autre dossier racine que vous aurez préalablement créé).

Nous vous recommandons d'utiliser le logiciel [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) pour téléverser votre sauvegarde FTP sur votre hébergement.

Si votre fichier de sauvegarde est compressé (zippé), décompressez-le dans un dossier vide sur votre ordinateur avant de téléverser vos fichiers sur l'hébergement OVHcloud.

Pour la sauvegarde de votre base de données, [créez une nouvelle base de données](/pages/web_cloud/web_hosting/sql_create_database) puis [importez votre sauvegarde dans votre nouvelle base de données](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud propose des serveurs de base de données Web Cloud Databases. Si vous souhaitez utiliser cette offre avec votre site web, retrouvez l'ensemble de notre documentation sur ce produit sur [notre page dédiée](/products/web-cloud-clouddb).
>

Liez ensuite votre base de données OVHcloud avec le fichier de configuration de votre site web présent dans l'espace de stockage FTP de votre hébergement OVHcloud.
Pour cela, remplacez les informations de connexion de votre ancienne base de données par celles de votre nouvelle base de données OVHcloud. Ces informations se trouvent dans le fichier de « configuration/connexion à votre base de données » de votre site web.

> [!success]
>
> Pour lier votre nouvelle base de données si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez les informations sur leurs fichiers de configuration depuis **l'étape 2** du guide « [modification du mot de passe d'une base de données](/pages/web_cloud/web_hosting/sql_change_password) ».
>

Déclarez/autorisez votre nom de domaine externe sur votre hébergement web OVHcloud via notre guide « [gestion des multisites d'un hébergement web OVHcloud](/pages/web_cloud/web_hosting/multisites_configure_multisite) ». Déclarez bien le « nom » du dossier racine que vous avez choisi au début de l'[étape 4](#step4). Pour rappel, il s'agit du dossier dans lequel vous avez placé vos fichiers dans votre espace de stockage FTP.

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

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-a-txt-cname.png){.thumbnail}

**La modification des entrées DNS « A », « CNAME » et « TXT » doit être effectuée auprès du fournisseur DNS actuel de votre nom de domaine et nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effectif.**

Après la propagation DNS, le site web qui s'affichera avec votre nom de domaine sera celui hébergé chez OVHcloud.

### Etape 5 : recréer vos adresses e-mail à l'identique chez OVHcloud <a name="step5"></a>

Recréez à l'identique les adresses e-mail présentes chez votre fournisseur e-mail à l'aide de notre guide sur la [création d'adresses e-mail « MX Plan »](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

Si vous avez opté pour une solution « Email Pro » ou « Exchange », consultez notre documentation sur le sujet pour créer vos adresses e-mail :

- Pour [Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- Pour [Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

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

Nous vous conseillons de faire le changement des entrées « MX » **avant** d'effectuer la migration du contenu de vos anciennes adresses e-mail.
En effet, cette méthode vous évite de refaire une migration pour les quelques e-mails reçus sur vos anciennes adresses e-mail pendant la propagation DNS.

### Etape 7 : transférer le contenu de vos anciennes adresses e-mail dans vos nouvelles adresses chez OVHcloud <a name="step7"></a>

Après la propagation DNS, vos nouveaux e-mails sont désormais tous reçus sur vos nouvelles adresses e-mail. Mais vos anciens e-mails sont toujours enregistrés sur votre ancien serveur e-mail.

Pour migrer le contenu de vos anciennes adresses e-mail, deux options s'offrent à vous.

**Option 1** : utilisez notre outil [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} qui permet de copier le contenu des adresses e-mail enregistrées chez votre ancien prestataire vers celles créées chez OVHcloud. Vous pouvez vous aider de notre guide « [Migrer des comptes e-mail via OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) ».

Nous vous conseillons de ne pas utiliser le `Type de serveur`{.action} **POP** dans la partie `Compte source`{.action}. En effet, ce protocole efface les e-mails de votre ancien serveur pour les envoyer vers le serveur OVHcloud de destination. Vous ne pourriez alors plus comparer le contenu de l'ancienne et de la nouvelle adresse e-mail.

Pour la partie `Compte de destination`{.action}, renseignez uniquement l'adresse e-mail OVHcloud concernée et son mot de passe associé. Ceci en laissant le `Type de serveur`{.action} en `Hosted by OVH (Autodetect)`{.action}.

Une fois la migration terminée, connectez-vous à votre adresse e-mail OVHcloud à l'aide du [webmail OVHcloud](/links/web/email) pour vérifier que tous vos e-mails sont bien présents dans le nouveau compte.

Réitérez l'opération pour l'ensemble de vos comptes e-mail.

> [!primary]
>
> Vous devez posséder les identifiants d'accès de tous vos anciens comptes e-mail ainsi que le nom du serveur e-mail de votre ancien prestataire pour réaliser cette action.
>
> Si vos adresses e-mail étaient configurées en POP sans conservation de copies des e-mails sur votre ancien serveur e-mail, ou si vous disposez des e-mails enregistrés « en local » sur vos appareils, seule l'**option 2** pourra être réalisée.
>

**Option 2** : effectuez une sauvegarde du contenu de vos anciennes adresses e-mail à l'aide d'un logiciel de messagerie (Outlook, Mail pour macOS, etc.). Reconfigurez votre logiciel de messagerie puis importez la sauvegarde dans votre nouvelle adresse e-mail OVHcloud.

### Etape 8 : reconfigurer vos logiciels de messagerie <a name="step8"></a>

Une fois vos anciennes adresses e-mail migrées chez OVHcloud, reconfigurez vos logiciels de messagerie à l'aide de l'ensemble de nos guides sur le sujet.

#### Pour les comptes e-mail « MX Plan » : 

- Retrouvez l'ensemble des paramètres de configuration dans notre guide « [Généralités sur les e-mails MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities#2-utiliser-le-logiciel-de-votre-choix) ». Vous y trouverez également les liens vers les guides de configuration personnalisés pour les principaux logiciels de messagerie.

#### Pour les comptes « Email-Pro » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration sur ordinateur` et `Configuration sur smartphone` de [notre documentation sur l'offre Email-Pro](/products/web-cloud-email-collaborative-solutions-email-pro).

#### Pour les comptes e-mail « Exchange » :

- Retrouvez l'ensemble de nos guides d'aide à la configuration dans les sections `Configuration Exchange sur ordinateur` et `Configuration Exchange sur smartphone` de [notre documentation sur l'offre Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange).

### Etape 9 : remplacer les serveurs DNS actifs de votre nom de domaine par ceux d'OVHcloud <a name="step9"></a>

La zone DNS pré-configurée lors de l'[étape 2](#step2) n'est pas encore appliquée à votre nom de domaine. Actuellement, votre nom de domaine utilise toujours les serveurs DNS de votre fournisseur d'origine.

Remplacez les serveurs DNS actuels (du registrar d'origine) par les deux serveurs DNS déclarés dans la zone DNS OVHcloud (de type `dnsXX.ovh.net` et `nsXX.ovh.net` ou `dns200.anycast.me` et `ns200.anycast.me`). Cette manipulation se fait dans l'interface de gestion du registrar d'origine.

> [!warning]
>
> Le changement des serveurs DNS doit être effectué depuis le bureau d'enregistrement actuel de votre nom de domaine et nécessite un temps de **propagation de 24 à 48 heures** maximum avant d’être pleinement effectif.
>

### Etape 10 : transférer votre nom de domaine chez OVHcloud <a name="step10"></a>

Une fois la propagation DNS terminée, vérifiez que l'ensemble de votre site web est fonctionnel. Naviguez sur votre site internet pour vérifier que toutes les pages s'affichent correctement et qu'aucune erreur 404 n'est renvoyée. Vérifiez également l'envoi et la réception des e-mails depuis vos adresses e-mail.

Si tout est en ordre, déverrouillez votre nom de domaine et récupérez son « code de transfert », « EPP » ou « AuthCode » depuis votre bureau d'enregistrement actuel.

Transférez ensuite votre nom de domaine à l'aide de notre guide sur le [transfert d'un nom de domaine chez OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain).

Une fois le transfert de vos données et services terminé, il ne vous reste plus qu'à résilier vos anciens services chez votre (vos) ancien(s) fournisseur(s).

### Conclusion

Après avoir suivi les dix étapes dans l'ordre, l'intégralité de votre site web est maintenant migrée chez OVHcloud, tout cela sans interruption de service.

## Aller plus loin

[Généralités sur les e-mails mutualisés](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Généralités sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information).

[Créer une adresse e-mail mutualisée](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

[Importation d’une base de données MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Gestion d’une base de données depuis un hébergement mutualisé](/pages/web_cloud/web_hosting/sql_create_database).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).