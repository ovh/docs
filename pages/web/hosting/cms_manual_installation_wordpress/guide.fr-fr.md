---
title: Installer manuellement Wordpress
slug: installer-manuellement-wordpress
legacy_guide_number: 1977
excerpt: Vous trouverez dans ce guide comment installer manuellement votre CMS Wordpress.
section: CMS
---

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

Pour vous aider, chacune des étapes est détaillée. Pour toute demande précise liée au CMS, nous vous invitons à vous rapprocher de l'éditeur du CMS, ou des communautés en rapport avec celui-ci.

Si vous souhaitez installer d'autres modules/CMS, consultez [ce guide]({legacy}1375){.ref}.

Les CMS sont des [systèmes de gestion de contenu](https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_gestion_de_contenu){.external}, ils ont généralement besoin d'une plateforme d'hébergement comprenant un serveur FTP, une base de données, et un nom de domaine.

Vous pouvez trouver tous ces éléments dans [nos offres](https://www.ovh.com/fr/hebergement-web/){.external}.

*Si vous souhaitez installer Wordpress de manière automatique depuis votre espace client, vous pouvez vous aider du guide suivant :* []({legacy}1402){.ref}


## WordPress

### Partie 1 &#58; preparation de linstallation
Pour installer la plateforme  **WordPress**  sur votre offre d'hébergement mutualisé, nous vous conseillons de vous munir d'un logiciel  **FTP**  tel que **FileZilla**  (gratuit). *Assurez-vous d'être en possession de votre identifiant client (nic-handle) et de votre mot de passe, pour pouvoir vous connecter à votre espace client OVH si nécessaire.*

- Récupérez votre identifiant et le mot de passe FTP qui vous permettent de vous connecter sur l'hébergement web.
- Il est aussi nécessaire d'avoir en votre possession votre identifiant et le mot de passe de la base de données SQL qui vous permettent de vous connecter dans la base de données.


![hosting](images/3125.png){.thumbnail}


### Partie 2 &#58; recuperation des fichiers sources
- Rendez-vous sur le site du développeur de [WordPress](http://fr.wordpress.org/){.external} .

**compressé**  (zippé), il faudra être en mesure de le  **décompresser**  (extraire) sur votre ordinateur. Vous trouverez sur Internet différentes aides à ce sujet.


![hosting](images/3126.png){.thumbnail}


### Partie 3 &#58; mise en place des fichiers sur l'hebergement via FTP
Ouvrez le dossier dans lequel vous avez téléchargé le dossier compressé.

Réalisez un clic droit sur le dossier en question, puis sélectionnez "Extraire tout...".

Indiquez une destination afin d'extraire vos fichiers dans un nouveau dossier.

*De nombreux tutoriels et logiciels de décompression sont disponibles sur internet pour vous aider à réaliser ces manipulations. Consultez-les si vous êtes bloqués à cette étape.*

Le dossier cible sera intitulé " **wordpress** "


![hosting](images/3127.png){.thumbnail}

Pour déposer les fichiers de  **WordPress**  sur votre hébergement, vous devez tout d'abord vous connecter à celui-ci.

*Un guide est disponible concernant la connexion en FTP sur l'offre mutualisée :* []({legacy}1374){.ref}


![hosting](images/3128.png){.thumbnail}

Suivez ces étapes pour déposer vos fichiers sur le FTP. Une fois connecté à FileZilla.

Dans la partie "Site local", qui correspond à la liste des fichiers présents sur votre ordinateur, ouvrez le dossier décompressé intitulé "wordpress" dans lequel sont présents les fichiers du CMS.

Dans la partie "Site distant" qui correspond dans ce cas à votre hébergement mutualisé OVH, ouvrez le dossier "www". C'est dans ce dossier que tous les fichiers du CMS devront être déposés.

*Si ce dossier n'existe pas il vous est possible de le créer.*

*Vos fichiers doivent obligatoirement être déposés dans le dossier "www" sinon la procédure d'installation ne sera pas accessible depuis votre nom de domaine.*


![hosting](images/3129.png){.thumbnail}

Une fois ces dossiers ouverts :

Dans la partie "Site local", vous retrouvez tous les fichiers nécessaires à l'installation du CMS WordPress.

Pour tous les sélectionner, réaliser la combinaison de touche  **CTRL+A** .

Réalisez ensuite le glisser-déposer des fichiers vers la partie "Site distant" dans le dossier "www".

*Il est fort probable que le dossier "www" ne soit pas vide. Il n'est pas obligatoire de supprimer les fichiers présents dedans. Nous reviendrons sur ce point dans la suite de ce guide.*


![hosting](images/3130.png){.thumbnail}

Le transfert des fichiers est en cours.

Attendez que la totalité des fichiers soit déposés sur le serveur FTP distant. Cela peut prendre quelques minutes.

Une fois le transfert terminé, assurez-vous que tous les fichiers et les dossiers ont été correctement transférés.

Cette opération conclut la partie consacrée au dépôt des fichiers sur le FTP.


![hosting](images/3131.png){.thumbnail}


### Partie 4 &#58; lien avec la base de donnees
- Avant de continuer l'installation, videz le cache de votre navigateur internet, afin d'éviter toute erreur.

Afin de réaliser le lien entre votre base de données et WordPress, nous devons suivre les étapes d'installation du CMS. Rendez-vous sur votre nom de domaine.

Ce message va apparaître.

Cliquez sur "Créer un fichier de configuration" pour continuer.


![hosting](images/3132.png){.thumbnail}

Munissez-vous des identifiants de votre base de données (une aide à ce sujet est disponible dans le début de ce guide).

Cliquez sur "C'est parti !" pour accéder à l'étape suivante.


![hosting](images/3133.png){.thumbnail}

Renseignez les informations demandées concernant la base de données :

Nom de la base de données : choisi lors de sa création dans l'espace client.

Identifiant : identique au nom de la base de données.

Mot de passe : vous a été envoyé par mail lors de la création de la base de données – il est possible que vous l'ayez modifié.

Adresse de la base de données : renseignez le nom du serveur de votre base de données, indiqué dans le mail d'installation ou dans votre espace client.

Préfixe des tables : utile pour réaliser plusieurs installations de WordPress sur la même base de données. Dans ce cas, il faudra renseigner un préfixe différent pour chacune des installations.

*Important : les identifiants de la base de données ne sont pas automatiquement envoyés lors de l'installation de l'hébergement. Pour les recevoir, vous devez activer la base de données dans votre espace client.*

Cliquez sur "Envoyer" pour valider les informations de connexion à la base de données.

- Ces étapes finalisent la création du lien entre votre base de données et WordPress. Ne reste qu'à finaliser l'installation proprement dite.


![hosting](images/3134.png){.thumbnail}


### Finalisation
Afin de terminer l'installation du blog WordPress, continuez les étapes d'installations. Cliquez sur "Lancer l'installation" pour poursuivre.


![hosting](images/3135.png){.thumbnail}

Renseignez les informations demandées concernant l'administration de votre blog WordPress :

Titre du site : renseignez le titre de votre blog.

Identifiant : choisissez l'identifiant de connexion pour administrer votre blog.

Mot de passe, deux fois : renseignez deux fois le mot de passe désiré pour vous connecter à l'administration de votre blog WordPress.

Votre adresse de messagerie : renseignez un e-mail valide.

Vie privée : si la case est cochée, les moteurs de recherche référenceront le blog.

Pour lancer l'installation de WordPress cliquez sur "Installer WordPress".


![hosting](images/3136.png){.thumbnail}

L'installation de votre blog WordPress est à présent terminée !

Vous pouvez à présent vous identifier et commencer à travailler sur votre blog en cliquant sur "Se connecter".


![hosting](images/3137.png){.thumbnail}

Vous trouverez ici un aperçu du panel d'administration de WordPress.


![hosting](images/3138.png){.thumbnail}


### Informations utiles
**Le support d'OVH ne sera pas habilité à vous répondre pour toute demande d'aide concernant la configuration de votre WordPress.** **Cependant, un guide d'utilisation est à votre disposition** : []({legacy}2053){.ref} **.**

Nous vous invitons à consulter les forums dédiés à la solution WordPress.

- Voici un lien vers un [forum
d'entraide](http://www.wordpress-fr.net/support/){.external} dédié à ce CMS.

Vous avez mis en place vos fichiers sur le FTP, cependant la page "site en construction" est toujours affichée.

À l'installation de votre hébergement, OVH met en place une page d'attente, le temps que vous déposiez les fichiers de votre site internet.

Si vous déposez simplement vos fichiers dans le dossier  **"www"**  sans supprimer le contenu déposé par OVH, vous risquez de rencontrer ce souci.

Afin de corriger cela, vous devez supprimer ou renommer le fichier "index.html" mis en place par OVH sur votre hébergement.

*Il peut être intéressant de simplement le renommer afin de vous permettre de le réactiver à tout moment et de vous en servir comme page d'attente.*

Autre information utile : les fichiers de votre site doivent être déposés dans le dossier "www" afin d'être pris en compte.


![hosting](images/3139.png){.thumbnail}

Il s'agit ici d'une erreur concernant la version PHP de votre serveur.

La cause est simple : la dernière version du PHP n'a pas été activée.

*Un guide est disponible concernant la modification de la version PHP sur l'offre mutualisée :* []({legacy}1207){.ref}


![hosting](images/3140.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.