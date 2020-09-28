---
title: Utiliser SVN
slug: utiliser-svn
legacy_guide_number: 1961
excerpt: Ce guide montre la facon d'utiliser svn via l'acces ssh de l'hebergement grace aux cles publique/privée.
section: FTP et SSH
---

**Dernière mise à jour le 05/05/2020**

Subversion (en abrégé svn) est un système de gestion de versions. La suite du guide suppose que vous êtes connecté en ssh à la racine de votre hébergement.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Pre-requis
- Avoir un hébergement qui permet une connection ssh (à partir de l'offre Pro)
- Savoir se connecter en SSH (vous pouvez pour cela vous aider de ce [guide](../mutualise-le-ssh-sur-les-hebergements-mutualises/){.ref} )


## Creation du depot
Une fois connecté en SSH sur votre hébergement, il vous faut créer le répertoire racine des dépôts svn et ensuite le dépôt.

Il vous suffit pour cela de taper la commande :


```bash
mkdir svn
```

et


```bash
svnadmin create svn/depot_test
```

Vous pouvez ensuite vérifier que les repertoires ont été crées avec la commande :


```bash
ls -la
```

Vous devez obtenir les repertoires comme indiqué sur l'image suivante :


![hosting](images/3078.png){.thumbnail}


## Creation des cles publiques / privées

### Linux avec openssh
Cette partie se déroule sur l'ordinateur qui se connectera au dépôt svn (le client svn). Il faut créer une paire de clé dsa. Pour cela taper dans votre terminal la commande :


```bash
ssh-keygen -t dsa
```

et récupérer la ligne qui se trouve par défault dans le fichier .ssh/id_dsa.pub . Pour editer le fichier il vous suffit d'utiliser la commande: vi.


```bash
vi .ssh/id_dsa.pub
```

Vous trouverez la clef qui est divisée en trois chaînes de caractères : le type, la clé et un commentaire.


### Windows avec putty
Cette partie se déroule sur l'ordinateur qui se connectera au dépôt svn (le client svn). Télécharger l'installer windows putty et l'installer. Il faut créer une paire de clés dsa. Pour cela lancer PuTTYGen, générer une paire de clé et les sauvegarder :


![hosting](images/3079.png){.thumbnail}


## Ajout de la cle publique sur l'hebergement
Aprés avoir obtenu votre clef il vous faut l'ajouter sur votre hebergement dans le fichier .ssh/authorized_keys2. Il vous suffit pour cela de taper la ligne de commande ci-dessous :


```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Une fois le fichier ouvert vous devez y inserer la ligne suivante :


```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

suivi de la clé précédemment créée, le tout sur la même ligne !



> [!success]
>
> NB : Remplacer "/home.XXX/loginFTP" et "marc" par ce qu'il convient !
> Pour connaître les chiffres à utiliser pour remplacer /home.XXX/loginFTP" vous pouvez tout simplement taper la commande "pwd" en ssh
> 


![hosting](images/3080.png){.thumbnail}

La personne pourra donc récupérer le contenu du dépôt sans pouvoir pour autant se connecter directement en ssh sur la machine.



> [!alert]
>
> Attention, une même clé ne doit pas être utilisée pour svn et pour ssh en
> ligne de commande
> 


## Exemples

### Sous Linux
Vous pouvez faire un test depuis l'ordinateur se connectant au depot svn en tapant la ligne :


```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```


### Windows avec TortoiseSVN
- Télécharger tortoisesvn et l'installer ( [http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads){.external} )
- Double cliquer sur la clé privée. Une icône apparait en bas à droite, la clé est alors chargée dans l'agent d'authentification.
- Créer un répertoire, cliquer droit dessus et sélectionner "SVN Checkout". Entrer :

dans le champ "URL of repository" et cliquer sur OK :


![hosting](images/3081.png){.thumbnail}

Il existe une très bonne documentation en anglais pour Subversion : [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}


## Cas specifiques

### Creer plusieurs Comptes
Il faut tout d'abord avoir créer plusieurs clés ssh. Ensuite lors de l'ajout de la clé publique sur l'hébergement :


```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Vous devez modifier le paramètre ci-dessous en y ajoutant vos différents utilisateurs :


```bash
--tunnel-user
```

à noter qu'il est aussi possible de donner des accès en lecteur seule en ajoutant le paramètre :


```bash
--read-only.
```


### Check en local depuis le serveur
Lorsque vous voudrez faire le checkout en local, les exemples fournis ne fonctionneront pas. Il vous faudra utiliser :


```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
