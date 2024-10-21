---
title: "Comment gérer votre module en 1 clic ?"
excerpt: "Découvrez comment gérer votre module en 1 clic depuis votre espace client OVHcloud"
updated: 2022-09-05
---

## Objectif

Les modules en 1 clic permettent l’installation facile et rapide d’un logiciel en ligne d'assistance à la création de site Internet (communément appelé « CMS »). OVHcloud vous propose les plus connus d'entre eux : WordPress, PrestaShop, Drupal et Joomla!.

**Découvrez comment gérer votre module en 1 clic depuis votre espace client OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](/links/web/hosting) permettant l'installation d'un module en 1 clic.
- Avoir créé un module en 1 clic sur votre hébergement (Si vous n'avez pas encore effectué cette installation, suivez les instructions de ce [guide](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Accéder à votre site

Pour accéder à la partie publique de votre site suite à l'installation d'un module en 1 clic, rendez-vous dans votre [espace client OVHcloud](/links/manager), cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Accéder au module`{.action}.

> [!primary]
>
> Si votre site ne s'affiche pas correctement suite à cette manipulation, consultez les guides OVHcloud liés aux hébergements mutualisés dans la section [Diagnostic](/products/web-cloud-hosting).
>

### Accéder à l'interface administrateur

Pour accéder à la partie de votre site réservée aux administrateurs, rendez-vous dans votre [espace client OVHcloud](/links/manager), cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Accéder à l'interface d'administration du module`{.action}.

### Retrouver l'identifiant administrateur

Cliquez sur l'onglet `Modules en 1 clic`{.action} depuis la partie `Hébergements`{.action} de votre espace client. L'identifiant administrateur de votre module apparaît dans la colonne `Login`.

Vous pouvez également rechercher l'e-mail reçu lors de la création de votre module depuis votre [espace client OVHcloud](/links/manager) : cliquez sur votre nom en haut à droite de l'écran puis, dans le menu qui apparaît, cliquez sur `Emails de service`{.action}.

### Modifier le mot de passe de votre module <a name="password-change"></a>

Vous pouvez modifier le mot de passe de votre module depuis votre [espace client OVHcloud](/links/manager) ou en vous rendant directement sur la page de connexion à l'espace administrateur de votre site Web.
Dans les deux cas, un e-mail de réinitialisation de mot de passe vous sera envoyé.

> [!primary]
>
> **Que faire si vous n'avez pas reçu l'e-mail de réinitialisation du mot de passe administrateur de votre site ?**
>
> Sur la boîte e-mail concernée, vérifiez les dossiers `Spams`{.action} et `Corbeille`{.action}.
>
> Vous pouvez également retrouver l'ensemble des e-mails envoyés par nos services depuis votre [espace client OVHcloud](/links/manager) : cliquez sur votre nom en haut à droite de votre écran puis, dans le menu contextuel à droite de l'écran, cliquez sur `Emails de service`{.action}.
>
> **Durée de validité des liens :**
>
> - Après avoir reçu l'e-mail de changement de mot de passe, le lien de réinitialisation restera valide pendant 48 heures. 
> - Après avoir cliqué sur le lien, celui-ci n'est valide que pendant 30 minutes.
>

> [!warning]
>
> La modification du mot de passe d’accès à l’interface d’administration de votre CMS depuis l’espace client OVHcloud peut se faire **uniquement si les conditions suivantes sont respectées** :
>
> -	Le CMS a été installé à l’aide de l’option « module en 1 clic » lors de la commande de votre hébergement ou depuis l’espace client OVHcloud.
> -	L’utilisateur (nom d’utilisateur, adresse e-mail, etc) n’a pas été modifié via le CMS ou la base de données.
> -	La page d’accès à l’interface d’administration de votre CMS n’a pas été modifiée. En particulier, l’URL d’accès à l’interface d’administration de votre CMS ne doit pas avoir été modifiée via le CMS. Des restrictions sur cette même page ne doivent pas avoir été mises en place.
> -	Le « préfixe » des tables présentes dans votre base de données n’a pas été modifié depuis le CMS ou depuis la base de données directement.
>
> Dans le cas contraire, vous devrez suivre la documentation officielle du CMS que vous utilisez ou contacter directement l’éditeur du CMS. 
>

Pour modifier le mot de passe d'accès à l'interface d'administration de votre site **via l'espace client OVHcloud**, cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Modifier le mot de passe`{.action}. Cliquez sur `Valider`{.action}. Vous recevrez sous quelques minutes par e-mail un lien de réinitialisation de votre mot de passe.

> [!primary]
>
> Si vous ne pouvez pas modifier votre mot de passe d’accès à l’interface d’administration de votre CMS depuis l’espace client OVHcloud pour les raisons citées plus haut, vous trouverez ci-après la documentation officielle pour les différents CMS proposés en installation sur nos hébergements mutualisés :
>
> -	WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> -	Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> -	Drupal : L’éditeur de ce logiciel ne propose pas, à date, de documentation pour changer le mot de passe d’accès à l’interface d’administration de Drupal. Nous vous invitons à contacter directement l'éditeur sur ce sujet. Pour plus d'informations, consultez les pages officielles [drupal.org](https://www.drupal.org/){.external} ou [drupal.fr](https://www.drupal.fr/){.external}.
> -	PrestaShop : L’éditeur de ce logiciel ne propose pas, à date, de documentation pour changer le mot de passe d’accès à l’interface d’administration de PrestaShop. Nous vous invitons à contacter directement l'éditeur sur ce sujet. Pour plus d'informations, cliquez [ici](https://www.prestashop.com){.external} pour vous rendre sur leur page officielle.
>

Il est également possible de changer le mot de passe d’accès à l’interface d’administration de votre CMS directement depuis votre base de données.<br>
Toutefois, nous vous recommandons vivement d’effectuer l’opération à l’aide de la documentation proposée par l’éditeur de votre CMS  ou de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.

### Supprimer votre module

> [!warning]
>
> La sauvegarde de vos données fait partie des opérations essentielles à la [sécurisation de vos sites](/pages/web_cloud/web_hosting/secure_your_website). Nous vous conseillons d'importer régulièrement et **avant toute suppression** la sauvegarde de vos données sur un support local, tel qu'une clé USB ou un disque dur externe, en suivant les instructions de ce [guide](/pages/web_cloud/web_hosting/exporter-son-site-web).
>

#### Étape 1 : identifier la base de données liée à votre module <a name="step1"></a>

Pour supprimer votre module en 1 clic, vous devez commencer par identifier sa base de données de façon **certaine**. Rendez-vous pour cela dans votre [espace client OVHcloud](/links/manager). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Bases de données`{.action}.

Dans le cas contraire, rendez-vous dans l'onglet `Multisite`{.action}. Notez le nom du `Dossier racine` : il s'agit du répertoire dans lequel se trouvent les fichiers qui constituent votre module en 1 clic sur le serveur FTP.

Connectez-vous ensuite à [l'espace FTP de votre hébergement](/pages/web_cloud/web_hosting/ftp_connection). Ouvrez le `Dossier racine` trouvé précédemment dans l'onglet `Multisite`{.action} et recherchez le fichier de configuration de votre module :

- Pour WordPress : **« wp-config.php »** (le nom de la base de données apparaît sous la mention **« DB_NAME »**).
- Pour Joomla! : **« configuration.php »** (le nom de la base de données apparaît sous la mention **« public $db »**).
- Pour Drupal : **« settings.php »** (Pour le retrouver, rendez-vous dans le dossier **« sites »** puis **« default »**. Le nom de la base de données apparaît sous la mention **« database »**).
- Pour PrestaShop : **« parameters.php »** (Pour le retrouver, rendez-vous dans le dossier **« app »** puis **« config »**. Le nom de la base de votre module apparaît sous la mention **« database_name »**).

#### Étape 2 : sauvegarder votre module

Pour sauvegarder votre site, suivez les instructions de ce [guide](/pages/web_cloud/web_hosting/exporter-son-site-web), afin de récupérer à la fois ses fichiers sur l'espace FTP de votre hébergement et sa base de données.

#### Étape 3 : supprimer votre module

> [!alert]
>
> La suppression de votre module en 1 clic et de sa base de données entraîneront également celle de **l'ensemble de leurs sauvegardes**. Les données supprimées ne pourront pas être récupérées par la suite.
>

Pour supprimer votre module en 1 clic, rendez-vous dans votre [espace client OVHcloud](/links/manager), cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne désignant votre module puis sur la commande `Supprimer le module`{.action}.

> [!warning]
>
> La suppression de votre module 1 clic **n'entraînera pas automatiquement celle de sa base de données**. Si vous lancez l'installation d'un nouveau CMS sans avoir supprimé préalablement la base de données du précédent (et que votre hébergement ne permet pas la création automatique d'une nouvelle base), le message « [Une erreur s’est produite lors du chargement des informations (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#une-erreur-sest-produite-lors-du-chargement-des-informations-you-need-at-least-one-free-database) » s'affichera sur votre espace client.
>
> Si vous disposez d'un hébergement [Perso](/links/web/hosting-personal-offer) ou si vous avez déjà créé quatre bases de données sur votre hébergement [Pro](/links/web/hosting-professional-offer) ou [Performance](/links/web/hosting-performance-offer), vous devrez donc supprimer la base de données identifiée à [l'étape 1](#step1) **AVANT** de pouvoir créer un nouveau module en 1 clic.
>

Pour finaliser la suppression de votre module, rendez-vous donc dans l'onglet `Bases de données`{.action}, toujours dans la partie `Web cloud`{.action}, `Hébergements`{.action} et dans l'hébergement concerné sur votre [espace client OVHcloud](/links/manager) puis cliquer sur `...`{.action} à droite de la ligne désignant la base et sur le bouton `Supprimer la base de données`{.action}.

Avant de relancer l'installation d'un nouveau module, vérifiez que les tâches de suppression demandées précédemment ont bien été finalisées via l'onglet `Tâches en cours`{.action}.

### Bonnes pratiques

Sécurisez votre site en suivant les instructions de ce [guide](/pages/web_cloud/web_hosting/secure_your_website).

Ajoutez des outils de test de type CAPTCHA sur les formulaires de votre site.

N'installez pas sur votre site de plugins ou de templates qui n'ont pas été recommandés par les communautés officielles de votre CMS : 

- [WordPress](https://wpfr.net/){.external}
- [Joomla!](https://forum.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/forum){.external}
- [PrestaShop](https://www.prestashop.com/forums/){.external}

## Aller plus loin <a name="go-further"></a>

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).