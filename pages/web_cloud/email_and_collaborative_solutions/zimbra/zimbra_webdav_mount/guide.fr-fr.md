---
title: "Zimbra - Configurer un dossier WebDAV sur votre ordinateur"
excerpt: "Configurez l'accès WebDAV à la Malette Zimbra sur votre ordinateur pour gérer et partager vos fichiers directement depuis votre système"
updated: 2026-02-10
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objectif

Les comptes e-mail Zimbra Pro disposent d'un espace de stockage, appelé **Malette**, que l'on peut utiliser pour échanger des fichiers via la fonction WebDAV. Cette fonction est disponible via le Webmail Zimbra et peut également être configurée sur votre ordinateur pour faire apparaître la Malette comme un volume de stockage.

**Découvrez comment monter un dossier WebDAV Zimbra sur votre ordinateur.**

## Prérequis

- Disposer d'une adresse e-mail [Zimbra Pro](/links/web/emails) OVHcloud.
- Disposer d'un ordinateur Windows ou macOS.
- Posséder les identifiants relatifs à l'adresse e-mail attachée au compte Zimbra Pro concerné.

## En pratique

WebDAV (Web-based Distributed Authoring and Versioning) est une extension du protocole HTTP permettant de gérer à distance des fichiers sur un serveur et de les modifier comme s'ils étaient en local.

L'espace de stockage alloué à votre compte e-mail Zimbra est partagé entre vos e-mails et les fichiers présents dans la Malette. Chaque fichier téléversé dans la Malette Zimbra ne peut pas dépasser 100 Mo.

Dans cette documentation, nous utiliserons l'adresse e-mail d'exemple `john.smith@mydomain.ovh` et le dossier de la Malette que nous monterons sera le dossier `Briefcase`, qui est présent par défaut.

### Monter un dossier depuis Windows

Avant de pouvoir vous connecter à votre dossier WebDAV depuis l'explorateur Windows, il est nécessaire d'activer et de configurer les services liés à la connexion à un volume WebDAV.

#### 1. Activer le service WebClient

> [!tabs]
> **Étape 1**
>>
>> - Ouvrez `Services`{.action} depuis le menu Démarrer de Windows.
>>
>> ![MX plan](images/windows-services-01.png){.thumbnail .w-600}
>>
> **Étape 2**
>>
>> 1. Identifiez le service **WebClient** dans la liste.
>> 2. Faites un clic droit sur **WebClient**, puis cliquez sur `Propriétés`{.action}.
>> 3. Basculez le *Type de démarrage* sur **Automatique**.
>> 4. Cliquez sur `Démarrer`{.action} pour lancer le service, puis cliquez sur `OK`{.action} pour valider les modifications.
>>
>> ![MX plan](images/windows-services-02.png){.thumbnail .w-600}

#### 2. Modifier la clé de registre WebClient

> [!tabs]
> **Étape 1**
>>
>> - Ouvrez l'`Éditeur du Registre`{.action} depuis le menu Démarrer de Windows.
>>
>> ![MX plan](images/windows-regedit-01.png){.thumbnail .w-600}
>>
> **Étape 2**
>>
>> 1. Identifiez le service **WebClient** dans l'arborescence `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel`.
>> 2. Faites un double-clic sur la clé de registre `BasicAuthLevel`.
>> 3. Changez la *Donnée de valeur* : par défaut définie sur `1`, remplacez-la par la valeur `2` puis cliquez sur `OK`{.action} pour valider les modifications.
>>
>> ![MX plan](images/windows-regedit-02.png){.thumbnail .w-600}

#### 3. Importer le certificat SSL du serveur Zimbra

> [!primary]
>
> Pour exporter le certificat SSL, nous avons utilisé le navigateur [Mozilla Firefox](https://www.firefox.com/).

> [!tabs]
> **Étape 1**
>>
>> 1. Ouvrez votre navigateur Internet, chargez la page https://zimbra1.mail.ovh.net/, puis cliquez sur l'icône de cadenas dans la barre d'adresse.
>> 2. Cliquez sur `Connexion sécurisée`{.action}.
>> 3. Cliquez sur `Plus d'informations`{.action}.
>>
>> ![MX plan](images/windows-ssl-01.png){.thumbnail .w-600}
>>
> **Étape 2**
>>
>> 1. Cliquez sur `Afficher le certificat`{.action}.
>> 2. Depuis la fenêtre qui s'affiche, restez sur l'onglet `zimbra1.mail.ovh.net` et cliquez sur `PEM (cert)`{.action} pour télécharger le certificat SSL.
>>
>> ![MX plan](images/windows-ssl-02.png){.thumbnail .w-600}
>>
> **Étape 3**
>>
>> - Modifiez l’extension du fichier de `.pem` vers `.cer`.
>>
>> ![MX plan](images/windows-ssl-03.png){.thumbnail .w-600}
>>
> **Étape 4**
>>
>> 1. Ouvrez le fichier `zimbra1-mail-ovh-net.cer`, puis cliquez sur `Installer un certificat…`{.action}.
>> 2. Cliquez sur `Ordinateur local`{.action}, puis cliquez sur `Suivant`{.action}.
>> 3. Cochez `Placer tous les certificats dans le magasin suivant`, puis cliquez sur `Parcourir…`{.action}.
>> 4. Sélectionnez le dossier `Autorités de certification racines de confiance`, puis cliquez sur `OK`{.action}.
>>
>> ![MX plan](images/windows-ssl-04.png){.thumbnail .w-600}

#### 4. Monter le volume

Dans notre exemple, nous utilisons l'adresse e-mail du compte Zimbra `john.smith@mydomain.ovh` et le dossier `Briefcase`, créé par défaut dans l'espace de stockage de Zimbra.

1. Ouvrez l'explorateur de fichiers Windows et cliquez sur `Ce PC`{.action}.
2. Dans la barre supérieure, cliquez sur le bouton `…`{.action}, puis sur `Connecter un lecteur réseau`{.action}.
3. Dans la fenêtre qui s'affiche, saisissez le chemin d'accès au dossier. Selon notre exemple, le chemin est `\\zimbra1.mail.ovh.net@SSL\dav\john.smith@mydomain.ovh\Briefcase`. Cliquez sur `Terminer`{.action}.
4. Une fenêtre d'authentification s'ouvre, saisissez le `Nom d'utilisateur` qui correspond à l'adresse e-mail complète et le `Mot de passe` associé à celle-ci. Cliquez sur `OK`{.action}.

![MX plan](images/windows-mount-01.png){.thumbnail .w-600}

Votre volume réseau s'affiche désormais. Vous pouvez y déposer vos fichiers, dans la limite de 100 Mo par fichier.

![MX plan](images/windows-mount-02.png){.thumbnail .w-600}

### Monter un dossier depuis macOS

Sur macOS, il n'est pas nécessaire d'activer un service ou d'enregistrer le certificat SSL, il suffit de monter le volume directement depuis le **Finder**.

> [!tabs]
> **Étape 1**
>>
>> - Ouvrez le **Finder**.
>> - Dans la barre supérieure, cliquez sur le menu `Aller`{.action}.
>> - Cliquez sur `Se connecter au serveur`{.action} (`⌘ + K`).
>>
>> ![MX plan](images/macos-mount-01.png){.thumbnail .w-600}
>>
> **Étape 2**
>>
>> > [!warning]
>> >
>> > Il est important de remplacer le `@` de votre adresse e-mail par `%40` dans la saisie du chemin d'accès.
>>
>> - Depuis la fenêtre qui s'affiche, saisissez le chemin de connexion adapté à votre adresse e-mail et le dossier que vous souhaitez connecter. Selon notre exemple, le chemin est `https://zimbra1.mail.ovh.net/dav/john.smith%40mydomain.ovh/Briefcase`.
>> - Cliquez sur `Se connecter`{.action}.
>>
>> ![MX plan](images/macos-mount-02.png){.thumbnail .w-600}
>> 
> **Étape 3**
>>
>> 1. Une fenêtre de validation du serveur `zimbra1.mail.ovh.net` s'affiche, cliquez sur `Se connecter`{.action}.
>> 2. Une nouvelle fenêtre vous demandera de saisir le `Nom` qui correspond à votre adresse e-mail complète et le `Mot de passe` associé à celle-ci. Cochez `Conserver ce mot de passe dans mon trousseau` si vous souhaitez le garder pour une prochaine connexion à un autre dossier. Cliquez sur `Se connecter`{.action} pour monter le volume.
>>
>> ![MX plan](images/macos-mount-03.png){.thumbnail .w-600}

Vous avez désormais accès à l'espace de stockage de votre Malette Zimbra. Vous pouvez y déposer tout type de fichier ne dépassant pas 100 Mo.

![MX plan](images/macos-mount-04.png){.thumbnail .w-600}

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurer son adresse e-mail Zimbra sur un logiciel de messagerie](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).