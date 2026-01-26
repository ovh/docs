---
title: "Hébergement web - Comment activer l'accès SFTP"
excerpt: "Découvrez comment activer l'accès SFTP sur votre hébergement web OVHcloud"
updated: 2026-01-26
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

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage permettant de mettre en ligne les fichiers de vos sites internet ou de vos applications. L'accès à cet espace est possible via un utilisateur FTP ou SSH avec les mots de passe qui leurs sont associés.

Tout comme le **F**ile **T**ransfer **P**rotocol (**FTP**), le **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permet de transférer des données de votre appareil vers l'espace de stockage de votre hébergement web.

La seule différence est que le SFTP utilise un canal sécurisé pour échanger des données. Les données qui transitent via ce protocole sont automatiquement chiffrées.

**Découvrez comment activer l'accès SFTP sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

## En pratique

### Activer l'accès au protocole SFTP sur un utilisateur FTP de votre hébergement web

**Cliquez sur l'une des deux lignes ci-dessous en fonction de votre offre d'hébergement web pour affichez les explications.**

/// details | Activer le SFTP sur une offre d'hébergement web **gratuite 100M**, **Starter** ou **Perso**

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

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
>> Dans le tableau présent en bas de la nouvelle page qui apparaît, positionnez-vous à l'intersection entre la colonne **SFTP** et l'utilisateur FTP (désigné dans la colonne **Login** ) pour lequel vous souhaitez activer le SFTP.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> - Si **la case est déjà cochée**, vous n'avez rien à faire. Cela signifie que le protocole SFTP est déjà activé pour l'utilisateur FTP concerné.
>> - Si **la case n'est pas déjà cochée**, cochez-la pour activer le protocole SFTP. La page se réactualisera automatiquement. Vous pourrez ensuite utiliser le protocole SFTP de votre hébergement web avec l'utilisateur FTP concerné.

///


/// details | Activer le SFTP sur une offre d'hébergement web **Pro** ou **Performance**

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

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
>> Dans le tableau présent en bas de la nouvelle page qui apparaît, positionnez-vous à l'intersection entre la colonne **SFTP** et l'utilisateur FTP (désigné dans la colonne **Login** ) pour lequel vous souhaitez activer le SFTP.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
>> - Si la mention **Activée** s'affiche, vous n'avez rien à faire. Cela signifie que le protocole SFTP est déjà activé pour l'utilisateur FTP concerné.
>> - Si la mention **Désactivée** s'affiche, cliquez sur le bouton `...`{.action} situé à droite de la ligne concernée, puis sur `Modifier`{.action}
>>
> **Étape 5**
>>
>> Dans la fenêtre qui s'ouvre et dans la section **Protocoles de connexion**, cochez `FTP et SFTP`{.action} ou `FTP, SFTP et SSH`{.action} (si vous avez aussi besoin d'activer le protocole SSH).
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Clique ensuite sur `Suivant`{.action}, puis sur `Valider`{.action} afin de terminer l'activation du SFTP pour l'utilisateur concerné.

///

### Se connecter en SFTP à votre hébergement web

Pour cela, consultez notre guide « [Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Aller plus loin

[Modifier le mot de passe d’un utilisateur FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utiliser une connexion SSH sur un hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utiliser PuTTY pour vous connecter en SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilisez FileZilla avec votre hébergement web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilisez Cyberduck avec votre hébergement web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).