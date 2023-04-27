---
title: Activer les connexions Okta SSO avec votre compte OVHcloud
slug: connect-saml-sso-okta
excerpt: "Apprenez à associer votre service Okta à votre compte OVHcloud via SAML 2.0"
section: 'Utilisation avancée'
updated: 2023-04-18
---

## Objectif

Vous pouvez utiliser l'authentification SSO (*Single Sign-On*) pour vous connecter à votre compte OVHcloud. Pour activer ces connexions, votre compte et vos comptes Okta doivent être configurés à l'aide de SAML (*Security Assertion Markup Language*).

**Ce guide vous explique comment associer votre compte OVHcloud à un service Okta externe.**

## Prérequis

- Être administrateur d'un service Okta
- Disposer d'un [compte OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

## En pratique

> [!primary]
>
> Afin qu’un prestataire de services (par exemple, votre compte OVHcloud) établisse une connexion SSO avec un fournisseur d'identité (par exemple, votre service Okta), l’essentiel est d’établir une relation de confiance mutuelle en enregistrant la connexion SSO dans les deux services.
>

### Enregistrer OVHcloud auprès d'Okta

Votre service Okta agit en tant que fournisseur d'identité. Les demandes d'authentification de votre compte OVHcloud ne seront acceptées que si vous l'avez préalablement déclaré comme organisme tiers de confiance.

Cela signifie qu'il doit être ajouté en tant qu'`Application`.

Connectez-vous à l'interface d'administration d'Okta avec votre compte administrateur.

Rendez-vous dans `Applications`{.action} puis de nouveau dans `Applications`{.action}.

![Ajouter une application SAML, étape 1](images/OKTA_add_application_step1.png){.thumbnail}

Cliquez sur `Create App Integration`{.action} et sélectionnez `SAML 2.0`{.action}.

![Ajouter une application SAML, étape 2](images/OKTA_add_application_step2.png){.thumbnail}

À l'étape « General Settings », ajoutez un nom pour cette application, **OVHcloud** par exemple, et un logo si vous le souhaitez. Cliquez sur `Next`{.action}.

![Ajouter une application SAML, étape 3](images/OKTA_add_application_step3.png){.thumbnail}

À l'étape « Configure SAML », complétez les champs `Single sign-on URL` et `Audience URI` avec les valeurs de votre région : 

- Région UE : **URL** d'authentification unique : `https://www.ovhcloud.com/eu/auth/saml/acs` et **Audience URI** : `https://www.ovhcloud.com/eu/auth/`
- Région CA : **URL** d'authentification unique : `https://www.ovhcloud.com/ca/auth/saml/acs` et **Audience URI** : `https://www.ovhcloud.com/ca/auth/`

![Ajouter une application SAML, étape 4](images/OKTA_add_application_step4.png){.thumbnail}

Définissez ensuite les `Attribute Statements` :

- **Name** : `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` et **Value** : `user.login`
- **Name** : `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` et **Value** : `user.email`
- **Name** : `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` et **Value** : `user.displayName`

Définissez les `Group Attribute Statements` :

- **Name** : `groups` et **Filter**: `Matches regex:.*` (Adaptez le filtre si vous souhaitez être plus précis)

Cliquez sur `Next`{.action}.

![Ajouter une application SAML, étape 5](images/OKTA_add_application_step5.png){.thumbnail}

À l'étape « Feedback », sélectionnez l'option en fonction et cliquez sur `Finish`{.action}.

Ouvrez ensuite l'application, accédez à l'onglet `Sign On`{.action} et affectez des utilisateurs ou des groupes à l'application.

![Affecter des utilisateurs](images/OKTA_add_user.png){.thumbnail}

Avant de passer à la section suivante, rendez-vous dans l'onglet `Sign On`{.action}, accédez à **Metadata URL** et enregistrez le fichier XML fourni.

![Récupérer les métadonnées](images/OKTA_retrieve_metadata.png){.thumbnail}

Votre service Okta fait désormais confiance à OVHcloud en tant que prestataire de services. L'étape suivante consiste à vous assurer que le compte OVHcloud fait confiance à votre Okta en tant que fournisseur d'identité.

### Enregistrer Okta sur le compte OVHcloud et configurer la connexion

Pour ajouter Okta en tant que fournisseur d'identité de confiance, vous devez fournir les métadonnées du fournisseur d'identité dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

Une fois connecté, cliquez sur votre profil en haut à droite.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Cliquez sur votre nom pour accéder à la page de gestion de votre profil.

![User Information OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Ouvrez l'onglet `Gestion des utilisateurs`{.action}.

![OVHcloud menu profile](images/ovhcloud_profile_menu.png){.thumbnail}

Cliquez sur le bouton `Connexion SSO`{.action} .

![Connexion SSO OVHcloud étape 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Renseignez les métadonnées XML de votre service Okta. Complétez le champ « Nom d'attribut de groupe » avec la valeur `groups`. Cliquez sur `Confirmer`{.action}.

![Connexion SSO OVHcloud étape 2](images/ovhcloud_add_federation.png){.thumbnail}

Vous devez maintenant retrouver votre Okta en tant que fournisseur d'identité, ainsi que les groupes par défaut.

![Connexion SSO OVHcloud étape 3](images/ovhcloud_add_federation_success.png){.thumbnail}

Pour plus d'informations, cliquez sur le lien sous « URL du service SSO ».

![Connexion SSO OVHcloud étape 4](images/ovhcloud_idp_details.png){.thumbnail}

Le bouton `...`{.action} permet de mettre à jour ou de supprimer le SSO, et d'en consulter les détails.

![Connexion SSO OVHcloud étape 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Votre service Okta est désormais considéré comme un fournisseur d'identité de confiance. Cependant, vous devez tout de même ajouter des groupes à votre compte OVHcloud.

> [!warning]
> Si vous essayez à ce stade de vous connecter via SSO, un message d'erreur `Not in valid groups` s'affichera probablement.
>
> En effet, votre compte OVHcloud vérifie si l'utilisateur s'authentifiant appartient à un groupe existant sur le compte.
>

Vous devez à présent attribuer des **rôles** aux groupes d'utilisateurs Okta chez OVHcloud. Dans le cas contraire, votre compte OVHcloud ne sait pas ce que l'utilisateur est autorisé à faire et, par défaut, aucun droit n'est attribué.

Depuis votre espace client, ajoutez un groupe en cliquant sur le bouton `Déclarer un groupe`{.action} et en remplissant les champs :

- **Group name** : Nom du groupe dans Okta
- **Role**: Niveau de droits accordés à ce groupe

![Groupes de gestion des utilisateurs Okta](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Groupes de gestion des utilisateurs Okta](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Vous pourrez ensuite vérifier que le groupe est ajouté à votre compte OVHcloud dans la section « Groupes » :

![Groupes de gestion des utilisateurs Okta](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Lorsque vous vous connecterez ultérieurement avec un utilisateur du groupe **Intern**, votre compte OVHcloud reconnaîtra que l'utilisateur a le rôle "UNPRIVILEGED" spécifié par son groupe.

Vous pourrez ensuite vous déconnecter de votre compte et vous reconnecter avec votre Okta en tant que fournisseur d'identité.

### Connexion via SSO

Sur [la page d'identification OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), renseignez votre [identifiant](/pages/account/customer/ovhcloud-account-creation#quel-est-mon-identifiant-client) suivi de **/idp** sans mot de passe et cliquez sur le bouton `Connexion`{.action}.

![Connexion à la fédération OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Vous serez ensuite redirigé vers votre page de connexion à Okta. Entrez l'identifiant et le mot de passe d'un utilisateur de votre Okta, puis cliquez sur le bouton `Sign in`{.action} .

![OVHcloud Federation login Redirection Okta](images/OKTA_login.png){.thumbnail}

Vous êtes maintenant connecté avec le même identifiant client, mais via votre utilisateur Okta.

![OVHcloud User Info Federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Aller plus loin

[Création d'un compte OVHcloud](/pages/account/customer/ovhcloud-account-creation)

[Sécuriser mon compte OVHcloud et gérer mes informations personnelles](/pages/account/customer/all_about_username)

[Configuration et gestion du mot de passe de votre compte](/pages/account/customer/manage-ovh-password)

[Sécuriser son compte OVHcloud avec la double authentification](/pages/account/customer/secure-ovhcloud-account-with-2fa)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.