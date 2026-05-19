---
title: "Modifier le mot de passe d'un utilisateur FTP"
excerpt: "Découvrez comment changer le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage de fichiers en ligne utilisable via le protocole **FTP** : l'espace de stockage FTP.

L'accès à cet espace est possible à l'aide d'un **utilisateur FTP** et de son mot de passe associé.

Cet accès permet notamment de [mettre en ligne votre site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Découvrez comment modifier le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### Modifier le mot de passe d'un utilisateur FTP

> [!primary]
>
> Pour plus d'informations sur les bonnes pratiques en matière de gestion de mots de passe, consultez le guide « [Modifier le mot de passe de votre compte](/pages/account_and_service_management/account_information/manage-ovh-password) ».

Selon votre offre d'[hébergement web OVHcloud](/links/web/hosting), le mot de passe de votre utilisateur FTP se modifie de deux façons différentes.

**Cliquez sur votre offre pour afficher le contenu.**

<!-- CP-STEPS-START:change-ftp-password-perso -->
/// details | Offres Perso et Hébergement gratuit 100M (un seul utilisateur FTP)

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Étape 3**
>>
>> Un tableau affiche les *utilisateurs FTP* créés sur votre hébergement web. Cliquez sur le *pictogramme en forme de crayon* dans la colonne `Mot de passe`{.action}, renseignez le nouveau mot de passe **en respectant la politique des mots de passe** puis confirmez le changement en cliquant sur le *bouton vert* de validation.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-perso -->

<!-- CP-STEPS-START:change-ftp-password-pro-performance -->
/// details | Offres Pro et Performance (plusieurs utilisateurs FTP)

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Étape 3**
>>
>> Un tableau affiche les *utilisateurs FTP* créés sur votre hébergement web. Cliquez sur le bouton `...`{.action} à droite de l'utilisateur FTP concerné puis sur `Changer le mot de passe`{.action}. Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe souhaité **en respectant la politique des mots de passe**, confirmez en le saisissant une seconde fois puis cliquez sur le bouton `Valider`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-pro-performance -->

> [!primary]
>
> Votre nouveau mot de passe doit respecter la **politique des mots de passe** suivante :
>
> - Minimum 9 caractères ;
> - Maximum 30 caractères ;
> - Au moins une lettre majuscule ;
> - Au moins une lettre minuscule ;
> - Au moins un chiffre ;
> - Être composé uniquement de chiffres et de lettres.

Consultez l'onglet `Tâches en cours`{.action} et rafraîchissez la page régulièrement. Le changement ne nécessite que quelques minutes pour être effectif.

### Accéder à votre espace de stockage

Pour accéder à votre espace de stockage FTP, consultez notre guide [« Se connecter à l’espace de stockage de son hébergement web »](/pages/web_cloud/web_hosting/ftp_connection).

## Aller plus loin <a name="go-further"></a>

[Modifier le mot de passe de votre compte](/pages/account_and_service_management/account_information/manage-ovh-password)

[Se connecter à l’espace de stockage de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection)

[Mettre en ligne votre site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).