---
title: "Utiliser SVN"
excerpt: "Découvrez comment utiliser SVN en SSH sur votre hebergement web"
updated: 2023-12-05
---

## Objectif

SVN, qui est l'abrévation de « subversion », est un système de gestion de versions. 

**Découvrez comment utiliser SVN en SSH sur votre hébergement web**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.
> 

## Pre-requis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) permettant une connexion SSH (**à partir de l'offre Pro**)
- Se connecter en SSH à votre hébergement Web (vous pouvez consulter notre guide [Utiliser l’accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting))

## En pratique

### Création du dépôt

Une fois connecté en [SSH sur votre hébergement](/pages/web_cloud/web_hosting/ssh_on_webhosting), créez le répertoire racine des dépôts SVN, puis le dépôt.

Il vous suffit pour cela de taper la commande :

```bash
mkdir svn
```

et

```bash
svnadmin create svn/depot_test
```

Vous pouvez ensuite vérifier que les répertoires ont été créés avec la commande :

```bash
ls -la
```

Vous devez obtenir les répertoires comme indiqué sur l'image suivante :

![hosting](/pages/assets/screens/other/web-tools/terminal/terminal-ls-la-svn.png){.thumbnail}

### Création des clés publiques / privées

Avant de poursuivre il vous faudra créer une paire de clés SSH depuis le poste que vous utiliserez pour vous connecter au dépôt SVN.

Nous vous invitons à suivre le guide [Créer des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).

### Ajout de la clé publique sur l'hébergement

Aprés avoir obtenu votre clé, ajoutez-la sur votre hébergement dans le fichier .ssh/authorized_keys2. Pour cela, tapez la ligne de commande ci-dessous :

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Une fois le fichier ouvert, insérez la ligne suivante :

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Suivie de la clé précédemment créée, le tout sur la même ligne.

> [!primary]
>
> Remplacez « /home.XXX/loginFTP » et « john » par vos identifiants SSH. 
> Pour connaître les chiffres à utiliser pour remplacer « /home.XXX/loginFTP »  tapez la commande « pwd » en SSH.
>
> Vous retrouverez également ces infrormations on consultant notre guide [Utiliser l’accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting).
> 

![hosting](/pages/assets/screens/other/web-tools/terminal/terminal-homez-folder.png){.thumbnail}

Vous pourrez récupérer le contenu du dépôt sans pour autant vous connecter directement en SSH sur la machine.

> [!warning]
>
> Attention, une même clé ne doit pas être utilisée pour SVN et pour SSH en
> ligne de commande
> 

### Exemples

#### Sous Linux

Vous pouvez faire un test depuis l'ordinateur se connectant au depot SVN en tapant la ligne :

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### Windows avec TortoiseSVN

- Téléchargez et installez [TortoiseSVN](https://tortoisesvn.net/downloads.html){.external}
- Faites un clic droit sur la clé privée. Une icône apparait en bas à droite, la clé est alors chargée dans l'agent d'authentification.
- Créez un répertoire, faites un clic droit dessus et sélectionnez « SVN Checkout ». 
- Entrez `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` dans le champ « URL of repository » et cliquer sur `OK` :

![hosting](/pages/assets/screens/other/web-tools/tortoisesvn/checkout.png){.thumbnail}

Il existe une très bonne documentation en anglais pour Subversion : [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Cas spécifiques

#### Créer plusieurs comptes

Il faut tout d'abord avoir créé plusieurs clés SSH. Ensuite lors de l'ajout de la clé publique sur l'hébergement :

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Vous devez modifier le paramètre ci-dessous en y ajoutant vos différents utilisateurs :

```bash
--tunnel-user
```

à noter qu'il est aussi possible de donner des accès en lecture-seule en ajoutant le paramètre :

```bash
--read-only.
```

#### Vérifier en local depuis le serveur

Lorsque vous voudrez faire une vérification en local, les exemples fournis ne fonctionneront pas. Il vous faudra utiliser :

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Aller plus loin <a name="go-further"></a>

[Utiliser l’accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).