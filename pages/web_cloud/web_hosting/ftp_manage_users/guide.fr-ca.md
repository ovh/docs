---
title: "Hébergement web - Comment gérer des utilisateurs FTP"
excerpt: "Découvrez comment créer, modifier ou supprimer des utilisateurs FTP sur votre hébergement web OVHcloud"
updated: 2025-10-16
---

## Objectif

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage FTP. Cet espace FTP permet, par exemple, de mettre en ligne les fichiers de vos sites web ou de vos applications. L'accès à cet espace est possible via un utilisateur FTP ou SSH et le mot de passe associé. Dans le cadre de vos activités, vous pouvez être amené à avoir plusieurs utilisateurs FTP pour vos différents collaborateurs.

**Découvrez comment créer, modifier ou supprimer des utilisateurs FTP sur votre hébergement web OVHcloud.**

> [!primary]
>
> Ce guide est valable uniquement pour les hébergements web de type **Pro** ou **Performance**. Seules ces 2 offres permettent l'activation de plusieurs utilisateurs FTP.

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting) compatible.
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

## En pratique

### Créer un nouvel utilisateur FTP sur votre hébergement web <a name="create-ftp-user"></a>

Pour créer un nouvel utilisateur FTP sur votre hébergement web via votre espace client OVHcloud, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Pour créer un nouvel utilisateur FTP, cliquez sur le bouton `Créer un utilisateur`{.action} situé à droite. En fonction de la résolution de votre écran, le bouton peut se trouver sur la partie basse de la page.
>>
>> ![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}
>>
> **Étape 5**
>>
>> La fenêtre suivante apparaît :
>>
>> ![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}
>>
>> Définissez les paramètres du nouvel utilisateur FTP en renseignant les champs suivants :
>>
>> - *Utilisateur* : Correspond au nom d'utilisateur FTP complet que vous allez définir pour votre collaborateur. Il devra l'utiliser pour se connecter à l'espace de stockage FTP de votre hébergement web. Quel que soit le nouvel utilisateur FTP créé sur votre hébergement web, le nom choisi sera toujours précédé du login FTP principal de votre hébergement web, suivi d'un trait d'union. Par exemple, si votre login FTP principal est `FTPLogin` et que vous souhaitez créer un nouvel utilisateur FTP `user1`, le login FTP de votre nouvel utilisateur sera donc `FTPLogin-user1`.
>>
>> - *Dossier racine* : Correspond au nom du répertoire ou sous-répertoire dans lequel l'utilisateur FTP aura le droit de se connecter dans l'espace de stockage FTP. Par exemple, si votre collaborateur a besoin d'accéder à l'ensemble de l'espace de stockage FTP de votre hébergement web, laissez ce champ vide. Dans le cas contraire, précisez le nom du répertoire auquel il sera autorisé à accéder (par exemple : `www`, `blog`, `website1`, `www/development`, etc.).
>>
>> - *Protocole de connexion* : Permet de définir le ou les protocoles que l'utilisateur FTP pourra utiliser pour se connecter à l'espace de stockage FTP de votre hébergement web. Par exemple, si vous sélectionnez le troisième choix (les protocoles **FTP**,**SFTP** et **SSH**), l'utilisateur FTP pourra se connecter avec les trois protocoles. Ainsi, le collaborateur qui utilisera cet utilisateur FTP pourra, par exemple, choisir de se connecter en ligne de commande via le protocole **SSH** mais aussi gérer le contenu FTP à partir de ce même protocole.
>>
>> Une fois les paramètres définis, cliquez sur `Suivant`{.action}.
>>
> **Étape 6**
>>
>> ![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}
>>
>> Dans cette deuxième fenêtre, vous devez uniquement définir et confirmer, dans les 2 champs, le mot de passe du nouvel utilisateur FTP. Respectez la politique des mots de passe listée juste en dessous des 2 champs.
>>
>> Une fois votre mot de passe choisi et confirmé, cliquez sur `Suivant`{.action}.
>>
> **Étape 7**
>>
>> ![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}
>>
>> Cette dernière fenêtre résume les paramètres choisis pour votre nouvel utilisateur FTP. Si ces paramètres correspondent à ce que vous souhaitez, cliquez sur `Valider`{.action} pour finaliser la demande de création d'un nouvel utilisateur FTP sur votre hébergement web.

> [!primary]
>
> Une fois la demande de création validée, la bonne prise en compte du nouvel utilisateur sur votre hébergement web peut prendre jusqu'à 15 minutes.

Si besoin, testez ce nouvel utilisateur FTP à l'aide de notre guide « [Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection) ».

### Modifier un utilisateur FTP

Pour modifier un utilisateur FTP, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Dans le tableau situé en bas de page et sur la partie droite de la ligne correspondant à l'utilisateur FTP concerné, cliquez sur le bouton `...`{.action}, puis cliquez sur `Modifier`{.action}.
>>
>> ![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}
>>
> **Étape 5**
>>
>> La fenêtre suivante apparaît :
>>
>> ![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}
>>
>> A l'exception du nom de l'utilisateur FTP et de son mot de passe associé, vous pouvez ici modifier le *dossier racine* et les *protocoles de connexion* définis pour l'utilisateur FTP. Si besoin, consultez la partie « [Créer un nouvel utilisateur FTP sur votre hébergement web](#create-ftp-user) » située plus haut dans ce guide pour plus d'informations sur le *dossier racine* et les *protocoles de connexion*.
>>
>> Par ailleurs, vous pouvez si nécessaire *désactiver l'utilisateur* en cochant la case prévue à cet effet. Cette option peut être utile si vous souhaitez empêcher un collaborateur d'accéder à votre espace FTP sans supprimer les logs FTP et SSH qui lui sont associés. En effet, ces logs vous permettront de déterminer quelles ont été les opérations réalisées par votre collaborateur si vous constatez des interventions non désirées sur votre hébergement web.
>>
>> Une fois les modifications faites, cliquez sur `Suivant`{.action}. Vérifiez alors vos demandes de modifications, puis cliquez sur `Valider`{.action} pour finaliser la demande de modification de l'utilisateur FTP sur votre hébergement web.

> [!primary]
>
> Si vous souhaitez uniquement changer le mot de passe de l'utilisateur FTP, consultez notre guide « [Modifier le mot de passe d'un utilisateur FTP](/pages/web_cloud/web_hosting/ftp_change_password) ».
>
> Si vous souhaitez changer le nom de l'utilisateur FTP, sachez que cette fonctionnalité est indisponible. Vous devrez obligatoirement [créer un nouvel utilisateur FTP](#create-ftp-user) avec le nouveau nom d'utilisateur désiré. Libre à vous ensuite de [supprimer l'ancien utilisateur FTP](#delete-ftp-user) si besoin.

### Supprimer un utilisateur FTP <a name="delete-ftp-user"></a>

Pour supprimer un utilisateur FTP, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Dans le tableau situé en bas de page et sur la partie droite de la ligne correspondant à l'utilisateur FTP concerné, cliquez sur le bouton `...`{.action}, puis cliquez sur `Supprimer`{.action}.
>>
>> ![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}
>>
> **Étape 5**
>>
>> La fenêtre suivante apparaît :
>>
>> ![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}
>>
>> Cliquez sur `Valider`{.action} pour supprimer définitivement l'utilisateur FTP de votre hébergement web.

## Aller plus loin

[Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection).

[Modifier le mot de passe d’un utilisateur FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utiliser une connexion SSH sur un hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utiliser PuTTY pour vous connecter en SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

[Utilisez FileZilla avec votre hébergement web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

[Utilisez Cyberduck avec votre hébergement web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).