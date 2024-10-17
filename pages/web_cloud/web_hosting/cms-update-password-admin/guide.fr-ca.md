---
title: "Comment changer le mot de passe administrateur d'un CMS"
excerpt: "Découvrez comment modifier le mot de passe administrateur de votre CMS directement via l’interface d’administration du CMS ou en utilisant phpMyAdmin depuis l’espace client OVHcloud"
updated: 2024-10-15
---

## Objectif

Vous avez perdu l’accès à votre interface d’administration de WordPress, PrestaShop, Joomla! ou Drupal ? Ou vous souhaitez juste renforcer la sécurité de votre site web en modifiant le mot de passe administrateur ? Dans ce guide, retrouvez pas à pas comment procéder, que ce soit directement via l’interface d’administration du CMS ou en utilisant phpMyAdmin depuis l’espace client OVHcloud.

**Découvrez comment modifier votre mot de passe administrateur sur les CMS WordPress, PrestaShop, Joomla!, et Drupal, afin de garantir la sécurité et l'accès optimal à votre site web.**

## Prérequis

- Disposer d'une [offre d'hébergement Web](/links/web/hosting) permettant l'installation d'un module en 1 clic.
- Avoir créé un module en 1 clic sur votre hébergement web (si vous n'avez pas encore effectué cette installation, suivez les instructions de ce [guide](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Être connecté à votre [espace client OVHcloud](/links/manager) (uniquement pour la partie liée à phpMyAdmin).

## En pratique

Plusieurs méthodes existent pour modifier le mot de passe administrateur de votre CMS selon votre situation :

- [via l'e-mail automatique (mot de passe oublié)](#via-email)
- [via l'interface d'administration de votre CMS](#via-cms)
- [via phpMyAdmin depuis votre espace client OVHcloud](#via-phpmyadmin)

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) ou l'éditeur du CMS ue vous aurez choisi d'installer si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce tutoriel.
>
> Pour contacter les différents éditeurs des CMS cités ci-dessus, retrouvez ci-après les liens vers leurs pages officielles respectives :
>
> - [WordPress](https://wordpress.com/fr/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Modifier son mot de passe administrateur via l'e-mail automatique (mot de passe oublié) <a name="via-email"></a>

Vous avez encore accès à vos e-mails et à l’interface de connexion ? Cette méthode est la plus rapide en évitant d'accéder aux paramètres du CMS ou de passer par phpMyAdmin.

> [!tabs]
> WordPress
>>
>> Pour modifier votre mot de passe administrateur WordPress via l'option « Mot de passe oublié », suivez les étapes de la section « [Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer) » de la documentation officielle de WordPress.
>>
> PrestaShop
>>
>> Accédez à l'interface de connexion PrestaShop de votre site web (de type `https://votre-domaine.com/admin/`), puis cliquez sur « Mot de passe oublié » pour recevoir un e-mail vous invitant à réinitialiser votre mot de passe.
>>
> Joomla!
>>
>> Pour modifier votre mot de passe administrateur Joomla! via l'option « Mot de passe oublié », suivez les étapes de la section « [Frontend](https://docs.joomla.org/Resetting_a_user_password/en) » de la documentation officielle de Joomla!.
>>
> Drupal
>>
>> Pour modifier votre mot de passe administrateur Drupal via l'option « Mot de passe oublié », suivez ces étapes :
>>
>> - Accédez à l'interface de connexion administrateur.
>> - Cliquez sur le lien « Demander un nouveau mot de passe ».
>> - Dans la boîte de dialogue qui apparaît, saisissez soit le nom d’utilisateur, soit l'adresse e-mail associée au compte administrateur.
>> - Cliquez sur « Envoyer un nouveau mot de passe » ou « E-mail nouveau mot de passe ».
>> - Ouvrez l'e-mail reçu et cliquez sur le lien fourni.
>> - Saisissez votre nouveau mot de passe et confirmez.
>> - Retournez sur la page de connexion de Drupal et connectez-vous avec le nouveau mot de passe que vous venez de définir.

### Modifier son mot de passe administrateur via le CMS <a name="via-cms"></a>

Vous avez accès à l'interface d'administration du CMS et vous connaissez votre mot de passe actuel ? Changez votre mot de passe directement depuis les paramètres de votre compte administrateur.

> [!tabs]
> WordPress
>> Pour modifier votre mot de passe administrateur WordPress via l'interface de gestion du CMS, suivez les étapes de la section « [To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password) » de la documentation officielle de WordPress.
>>
> PrestaShop
>>
>> La documentation officielle de PrestaShop n'explique pas comment modifier le mot de passe administrateur via l'interface de connexion. Reportez-vous à la [documentation officielle de PrestaShop](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) afin de trouver une autre méthode pour mettre à jour votre mot de passe.
>>
> Joomla!
>>
>> Pour modifier votre mot de passe administrateur Joomla! via l'interface d'administration, suivez les étapes de la section « [Backend](https://docs.joomla.org/Resetting_a_user_password/en) » de la documentation officielle de Joomla!.
>>
> Drupal
>>
>> La documentation officielle de Drupal n'explique pas comment modifier le mot de passe administrateur via l'interface de connexion. Reportez-vous à la [documentation officielle de Drupal](https://www.drupal.org/node/44164) afin de trouver une autre méthode pour mettre à jour votre mot de passe.

### Modifier son mot de passe administrateur via phpMyAdmin depuis l'espace client OVHcloud <a name="via-phpmyadmin"></a>

Vous n'avez plus accès à l'interface d'administration du CMS ou vous ne pouvez pas utiliser la fonctionnalité « Mot de passe oublié » parce que l'adresse email associée est inaccessible ? Utilisez phpMyAdmin depuis votre [espace client OVHcloud](/links/manager) pour réinitialiser le mot de passe directement depuis la base de données.

Connectez-vous à votre [espace client OVHcloud](/links/manager) puis sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} et choisissez l'offre concernée. Dans l'onglet `Bases de données`{.action}, identifiez la base de données utilisée par votre CMS, cliquez sur le bouton `...`{.action} puis sur `Accéder à phpMyAdmin`{.action}.

Saisissez les identifiants de la base de données (nom d'utilisateur et mot de passe) que vous avez définis lors de la création de la base de données. Une fois connecté à phpMyAdmin, cliquez sur l'onglet concerné ci-dessous.

> [!tabs]
> WordPress
>>
>> Suivez les étapes de la section « [Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin) » de la documentation officielle de WordPress.
>>
> PrestaShop
>>
>> Suivez les étapes de la section « [You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) » de la documentation officielle de PrestaShop.
>>
> Joomla!
>>
>> Suivez les étapes de la section « [Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en) » de la documentation officielle de Joomla!.
>>
> Drupal
>>
>> Une fois connecté à phpMyAdmin, suivez ces étapes :
>> 
>> - Sélectionnez la base de données que Drupal utilise pour votre site web.
>> - Localisez la table `users_field_data` (pour Drupal 8 et versions ultérieures) ou users (pour Drupal 7 et versions antérieures).
>> - Trouvez l’utilisateur administrateur avec `uid = 1`.
>> - Cliquez sur `Modifier`.
>> - Dans le champ `pass`, sélectionnez `MD5` dans la colonne `Fonction` à droite du champ.
>> - Entrez un nouveau mot de passe dans la colonne de la valeur.
>> - Validez et enregistrez les modifications.

## Aller plus loin <a name="go-further"></a>

[Comment gérer votre module en 1 clic](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutoriel - Installer manuellement WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutoriel - Installer manuellement Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutoriel - Installer manuellement Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutoriel - Installer manuellement PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).