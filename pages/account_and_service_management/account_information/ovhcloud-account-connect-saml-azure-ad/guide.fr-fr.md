---
title: Activer les connexions Entra ID SSO avec votre compte OVHcloud
excerpt: "Découvrez comment associer votre Entra ID (anciennement Azure Active Directory) à votre compte OVHcloud en utilisant SAML 2.0"
updated: 2024-07-05
---

## Objectif

Vous pouvez utiliser l'authentification **SSO** (*Single Sign-On*) pour vous connecter à votre compte OVHcloud. Pour activer ces connexions, votre compte et votre Entra ID (anciennement Azure Active Directory) doivent être configurés à l'aide de SAML (*Security Assertion Markup Language*).

**Découvrez comment associer votre compte OVHcloud à un Entra ID externe.**

## Prérequis

- Avoir accès aux rôles **Administrateur d'applications** et **Administrateur d'utilisateurs** d'un service Entra ID
- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> [!primary]
>
> Afin qu’un fournisseur de services (par exemple, votre compte OVHcloud) établisse une connexion SSO avec un fournisseur d’identité (par exemple, votre Entra ID), vous devez établir une relation de confiance mutuelle en enregistrant la connexion SSO dans les deux services.
>

### Utilisateurs et groupes Entra ID

Votre Entra ID agit en tant que fournisseur d'identité. Les demandes d'authentification de votre compte OVHcloud ne seront acceptées que si vous l'avez d'abord déclaré comme tiers de confiance.

Concentrons-nous un instant sur les identités du côté du fournisseur d'identité.

#### Utilisateurs Entra ID

Pour commencer, accédez à votre tableau de bord Entra ID.

![Tableau de bord Entra ID](images/azure_ad_dashboard.png){.thumbnail}

Cliquez ensuite sur `Users`{.action} dans le menu de gauche.

![Utilisateur du menu Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Créez autant d'utilisateurs que vous le souhaitez et/ou vérifiez vos utilisateurs en cliquant dessus.

Pour cet exemple, l'utilisateur **John Smith** sera utilisé.

![Utilisateur Entra ID](images/azure_ad_user.png){.thumbnail}

Lorsqu'une authentification SSO est effectuée, l'identité de **John Smith** est fournie par Entra ID au compte OVHcloud. Cependant, il est nécessaire que cette identité contienne au moins un groupe. Si aucun groupe n'existe, retrouvez ci-dessous comment en créer un pour y ajouter **John Smith**.

#### Groupes Entra ID

Cliquez sur `Groups`{.action} dans le menu de gauche.

![Groupes de menus Entra ID](images/azure_ad_menu_groups.png){.thumbnail}

Cliquez sur `New group`{.action} dans le menu du haut et complétez toutes les informations nécessaires.

Pour cet exemple, le groupe **manager@ovhcloudsaml** sera utilisé.

![Entra ID Group étape 1](images/azure_ad_group_1.png){.thumbnail}

Cliquez sur le bouton `Create`{.action} pour afficher toutes les informations sur ce groupe.

![Entra ID Group étape 2](images/azure_ad_group_2.png){.thumbnail}

Maintenant, les utilisateurs qui seront utilisés pour l'authentification SSO doivent être ajoutés à un groupe.

Dans cet exemple, associons l'utilisateur **John Smith** au groupe **manager@ovhcloudsaml**.

Dans l’interface du groupe sélectionné, cliquez sur `Members`{.action} dans le menu de gauche, puis cliquez sur `Add members`{.action} dans le menu du haut.

![Entra ID Group User Assignment étape 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Sélectionnez l'utilisateur à ajouter dans ce groupe, puis cliquez sur le bouton `Select`{.action}.

![Entra ID Group User Assignment étape 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Maintenant, l'utilisateur est assigné au groupe.

Pour effectuer des authentifications SSO, une application Entra ID doit être créée.

L'authentification unique doit être configurée sur cette application.

### Applications Entra ID

Tout d’abord, créez une application si elle n’existe pas encore.

#### Créer une application Entra ID

Cliquez sur `Enterprise applications`{.action} dans le menu de gauche.

![Applications de menu Entra ID](images/azure_ad_menu_applications.png){.thumbnail}

Cliquez sur `New application`{.action} dans le menu du haut.

![Applications Entra ID étape 1](images/azure_ad_applications_1.png){.thumbnail}

Cliquez sur `Create your own application`{.action} dans le menu du haut.

![Applications Entra ID étape 2](images/azure_ad_applications_2.png){.thumbnail}

Sélectionnez `Non-gallery`{.action} dans le menu de gauche et cliquez sur le bouton `Create`{.action}.

![Applications Entra ID étape 3](images/azure_ad_applications_3.png){.thumbnail}

Les détails de l'application seront alors affichés.

![Applications Entra ID étape 4](images/azure_ad_applications_4.png){.thumbnail}

L'application Entra ID est maintenant créée. Les utilisateurs souhaitant effectuer des authentifications SSO via cette application doivent à présent y être ajoutés.

#### Application Entra ID - Affectation d'utilisateurs

> [!primary]
>
> Pour qu'un utilisateur effectue une authentification SSO à partir d'une application Entra ID, il doit être ajouté à cette application. Retrouvez ci-dessous comment ajouter un utilisateur à une application Entra ID.
>
> Cependant, il est préférable d'ajouter un groupe d'utilisateurs plutôt que des utilisateurs si vous disposez d'**Entra ID Premium**.
>

Cliquez sur `Users and groups`{.action} dans le menu de gauche, puis cliquez sur `Add user/group`{.action} dans le menu du haut.

Cliquez ensuite sur la section `Users`{.action}, sélectionnez l'utilisateur à ajouter à l'application puis cliquez sur le bouton `Select`{.action}.

![Entra ID Application User Assignment étape 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Assignment étape 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

L’application est créée, l'utilisateur est assigné, il ne vous reste plus qu’à mettre en place le SSO via SAML.

#### Entra ID application SSO

Revenez à la vue d'ensemble via le bouton `Overview`{.action} dans le menu de gauche, puis cliquez sur la section `Set up single sign on`{.action}.

![Entra ID SSO étape 1](images/azure_ad_sso_1.png){.thumbnail}

Cliquez sur la section `SAML`{.action} .

![Entra ID SSO étape 2](images/azure_ad_sso_2.png){.thumbnail}

Cliquez sur `Upload metadata file`{.action} dans le menu du haut.

![Entra ID SSO étape 3](images/azure_ad_sso_3.png){.thumbnail}

Cliquez sur l'icône du bouton `Select a file`{.action} , sélectionnez le fichier de métadonnées OVH Service Provider et cliquez sur le bouton `Add`{.action}.

Vous pouvez obtenir le fichier de métadonnées approprié via les liens suivants :

- [Métadonnées de région UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Métadonnées de région CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Téléchargez le fichier de métadonnées, vous en aurez besoin plus tard.

![Entra ID SSO étape 5](images/azure_ad_sso_5.png){.thumbnail}

La configuration SAML s'affiche.

![Entra ID SSO étape 6](images/azure_ad_sso_6.png){.thumbnail}

Dans la section `Attributes & Claims`{.action}, cliquez sur le bouton `Modifier`{.action}.

![Entra ID SSO étape 9](images/azure_ad_sso_9.png){.thumbnail}

Ajoutez l'attribut UPN (User Principal Name) aux infos SAML pour informer OVHcloud de l'e-mail de l'utilisateur. Cette étape est indispensable.

Cliquez sur `Add a new claim`{.action} dans le menu du haut.

Dans le champ `Name`{.action}, saisissez la valeur `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`.

Dans le champ `Source attribute`{.action}, saisissez `user.mail`{.action}.

Votre interface devrait alors être assez similaire à la capture d'écran suivante :

![Azure AD SSO saisie UPN](images/azure_ad_sso_9bis.png){.thumbnail}

Cliquez sur `Save`{.action}

Déclarez maintenant l'attribut utilisé pour le groupe de l'utilisateur.

Cliquez sur `Add a group claim`{.action} dans le menu du haut.

![Entra ID SSO étape 10](images/azure_ad_sso_10.png){.thumbnail}

Sélectionnez `Security groups`{.action} et **Group ID** dans `Source attribute`{.action} puis cliquez sur le bouton `Save`{.action}.

![Entra ID SSO étape 11](images/azure_ad_sso_11.png){.thumbnail}

La revendication de **groups** doit maintenant apparaître dans la liste.

Copiez et enregistrez la valeur du **Claim name** quelque part (un bloc-notes par exemple), vous en aurez besoin ultérieurement.

![Entra ID SSO étape 12](images/azure_ad_sso_12.png){.thumbnail}

Dans la section `SAML certificates`{.action}, copiez la valeur du champ `App Federation Metadata Url`{.action}.

Utilisez ce lien pour télécharger le fichier de métadonnées de l'application Entra ID afin de l'utiliser ultérieurement dans le compte OVHcloud.

![Entra ID SSO étape 8](images/azure_ad_sso_8.png){.thumbnail}

### Établir la confiance d'un compte OVHcloud et configurer la connexion

L'ajout de votre application Entra ID en tant que fournisseur d'identité approuvé s'effectue dans [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) où vous pouvez fournir les métadonnées du fournisseur d'identité.

#### Établir la confiance OVHcloud

Cliquez sur le nom de votre compte en haut à droite, puis de nouveau sur votre nom dans la barre latérale.

![Accès au menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Vous pouvez accéder au menu IAM via l’entrée dédiée dans votre espace client.

![Accès au menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Cliquez ensuite sur l'onglet `Identités`{.action} pour accéder à la gestion des utilisateurs locaux.

![Accès au menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Cliquez alors sur le bouton `Connexion SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Complétez le champ **Nom d'attribut d'utilisateur** avec la valeur de claim d'applications Entra ID **upn** et le champ **Nom d'attribut de groupe** avec la valeur de claim **groups** enregistrée précédemment.

Remplissez les métadonnées XML de votre application Entra ID à partir du fichier enregistré précédemment.

Il est possible de conserver les utilisateurs locaux en cochant la case `Conserver les utilisateurs OVHcloud actifs`.

Cliquez sur le bouton `Valider`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

L'ajout de votre application Entra ID en tant que fournisseur d'identité est donc établie mais vous devez quand même ajouter des groupes à votre compte OVHcloud.

> [!warning]
> Si vous essayez à ce stade de vous connecter via SSO, un message d'erreur «`Not in valid groups`» s'affichera probablement.
>
> En effet, votre compte OVHcloud vérifie si l'utilisateur authentifié appartient à un groupe existant sur le compte.
>

Pour résoudre cette situation, vérifiez l'attribut «Group» retourné par votre application Entra ID : le champ **Object Id**.

#### Déclaration des groupes OVHcloud

![Entra ID Group étape 2](images/azure_ad_group_2.png){.thumbnail}

Ajoutez-le en cliquant sur le bouton `Declarer un groupe`{.action}.

![Groupes de gestion des utilisateurs Ovhcloud étape 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Complétez les champs, puis cliquez sur le bouton `Valider`{.action}.

![Groupes de gestion des utilisateurs Ovhcloud étape 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Le groupe créé doit apparaître sur la liste.

![Groupes de gestion des utilisateurs Ovhcloud étape 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Attention, si vous donnez le privilège `Aucun`, il sera nécessaire d'attribuer des droits à ce groupe via les [politiques IAM](/pages/account_and_service_management/account_information/iam-policy-ui)

### Connexion via SSO

Sur [la page de connexion OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), renseignez votre [identifiant](/pages/account_and_service_management/account_information/ovhcloud-account-creation#quel-est-mon-identifiant-client) client suivi de **/idp** sans mot de passe puis cliquez sur le bouton `Login`{.action} .

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Vous êtes ensuite redirigé vers la page de connexion à votre application Entra ID. Sélectionnez `Use another account`{.action}.

![Entra ID Login étape 1](images/azure_ad_login_1.png){.thumbnail}

Entrez l'e-mail de l'utilisateur de l'application Entra ID puis cliquez sur le bouton `Next`{.action}.

![Entra ID Login étape 2](images/azure_ad_login_2.png){.thumbnail}

Entrez le mot de passe de l'utilisateur de l'application Entra ID puis cliquez sur le bouton `Sign In`{.action}.

![Entra ID Login étape 3](images/azure_ad_login_3.png){.thumbnail}

Vous êtes maintenant connecté avec le même [identifiant client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation#quel-est-mon-identifiant-client), mais via votre utilisateur Active Directory et en utilisant votre SSO d'application Entra ID.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Si votre e-mail n'apparait pas en dessous de `Connected via SSO`, cela signifie que vous n'avez pas correctement configuré l'attribut **UPN** et une partie des fonctionnalités ne pourra donc pas fonctionner.

## Aller plus loin

[Créer des politiques d'accès IAM](/pages/account_and_service_management/account_information/iam-policy-ui)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
