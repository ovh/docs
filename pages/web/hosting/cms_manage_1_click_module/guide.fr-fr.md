---
title: Comment gérer votre module en 1 clic ?
excerpt: Découvrez comment gérer votre module en 1 clic depuis votre espace client OVHcloud
slug: gestion_module_1_clic
section: CMS
order: 2
---

**Dernière mise à jour le 14/10/2021**

## Objectif

Les modules en 1 clic permettent l’installation facile et rapide d’un logiciel en ligne d'assistance à la création d'un site Internet (CMS). OVHcloud vous propose les CMS les plus connus : WordPress, PrestaShop, Drupal et Joomla.

**Découvrez comment gérer votre module en 1 clic depuis votre espace client OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](https://www.ovh.com/fr/hebergement-web/) permettant l'installation d'un module en 1 clic (seule l'offre gratuite [Start10M](../activer-start10m/) n'est pas concernée)
- Avoir créé un module en 1 clic sur cet hébergement (Si vous n'avez pas encore effectué cette installation, suivez les instructions de ce [guide](../modules-en-1-clic/))
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Accéder à votre site

Pour accéder à la partie publique de votre site suite à l'installation de votre module, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Accéder au module`{.action}.

> [!primary]
>
> Si votre site ne s'affiche pas correctement suite à cette manipulation, consultez nos guides de [Diagnostic](../) :
>
> - [Que faire si mon site est inaccessible ?](../erreur-serveur-inaccessible/)
> - [Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](../erreurs-frequentes-modules-en-1-clic/)
> - [Que faire en cas d’erreur « Votre connexion n’est pas privée » ?](../erreur-site-non-securise/)
> - [Résoudre les erreurs les plus fréquentes liées aux bases de données](../erreurs-frequentes-bases-de-donnees/)
> - [Résoudre l’erreur « Site non installé »](../erreur-site-non-installe/)
> - [Que faire en cas d’erreur 500 Internal Server Error ?](../erreur-500-internal-server-error/)
> - [Que faire en cas de page « Index of » ?](../diagnostic-index-of/)
> - [Que faire en cas de page « 403 forbidden » ?](../diagnostic-403-forbidden/)
>

### Accéder à l'interface administrateur de votre site

Pour accéder à la partie de votre site réservée aux administrateurs, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Accéder à l'interface d'administration du module`{.action}.

### Modifier le mot de passe de votre module 1 clic

Pour modifier le mot de passe d'accès à l'interface d'administration de votre site, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Modifier le mot de passe`{.action}.

Vous pouvez également modifier ce mot de passe en vous rendant directement sur la page de connexion à l'espace réservé aux administrateurs :

|CMS|Page de connexion|
|---|---|
|Wordpress|![admin_wordpress](images/admin_wordpress.png){.thumbnail}|
|Joomla|![admin_joomla](images/admin_joomla.png){.thumbnail}|
|Prestashop|![admin_prestashop](images/admin_prestashop].png){.thumbnail}|
|Drupal|![admin_drupal](images/admin_drupal.png){.thumbnail}|

> [!primary]
>
> Que faire si vous n'avez pas reçu l'e-mail de réinitialisation du mot de passe administrateur de votre site ? 
>
> Vérifiez tout d'abord l'adresse e-mail associée à votre compte OVHcloud depuis votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) : Cliquez sur votre nom en haut à droite de votre écran puis, dans le menu contextuel à droite de l'écran, cliquez sur vos initiales (`Gérer mon compte`{.action}).

### Supprimer votre module en 1 clic

> [!warning]
>
> La sauvegarde de vos données fait partie des opérations essentielles à la [sécurisation de vos sites](../). Nous vous conseillons d'importer régulièrement des sauvegardes de l'ensemble de vos données sur un support local, tel qu'une clé USB ou un disque dur externe, en suivant les instructions de ce [guide](../exporter-son-site-web/).
>

#### Identifier la base de données de votre site

Pour supprimer votre module 1 clic, vous devez commencer par identifier sa base de données de façon certaine. Rendez-vous pour cela dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur l'onglet `Bases de données`{.action} 

Si vous disposez d'une seule base de données dans cette partie de votre espace client et que vous ne possédez pas de solutions [SQL privé]() ou [Cloud Database](), vous pouvez considérer qu'il s'agit de celle de votre site.

Dans le cas contraire, rendez vous dans [l'espace FTP de votre hébergement] puis retrouvez son fichier de configuration en fonction du CMS utilisé : 

- 


#### Sauvegarder votre site

Pour sauvegarder votre site, suivez les instructions de ce [guide](../exporter-son-site-web/), afin de récupérer à la fois ses fichiers sur l'espace FTP de votre hébergement et sa base de données.

#### Supprimer votre site

rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action}, `Hébergements`{.action}, sur l'hébergement concerné puis sur `Modules en 1 clic`{.action}.

Cliquez ensuite sur le bouton `...`{.action} à droite de la ligne concernant votre module puis sur `Supprimer le module`{.action}.

> [!warning]
>
> La suppression du module 1 clic **n'entraîne pas automatiquement celle de sa base de données**. Pour supprimer entièrement votre module, vous devrez donc aussi vous rendre dans l'onglet Bases de données, toujours dans la partie `Web cloud`{.action}, `Hébergements`{.action} et dans l'hébergement concerné sur votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), puis cliquer à droite 
>

Section "Supprimer votre module en 1 clic" : pour les clients qui ont une offre perso ou une autre offre avec toutes les bases de données créées, le fait de supprimer le module ne supprimera pas la base. La re-création d'un module ne fonctionnera donc pas en mode automatique.

### Retrouver les identifiants de connexion à votre module en 1 clic

(chemin dans l'espace client)
Section "Retrouver les identifiants de connexion à votre module en 1 clic" : l'identifiant de connexion créé automatiquement lors de la mise en place du module ne permettra l'accès au backoffice qu'à la condition que cet identifiant n'ait pas été supprimé( par exemple dans la section Utilisateurs de wordpress).

### Bonnes pratiques

(liens vers guides bonne pratiques mdp manager)
(captcha sur les formulaires)
(ne pas installer n'importe quoi)
(faire des sauvegardes locales régulièrement)

## Aller plus loin <a name="aller-plus-loin"></a>

(liens vers les docs / communauté des différents cms)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.