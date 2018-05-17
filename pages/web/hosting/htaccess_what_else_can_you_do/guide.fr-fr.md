---
title: Les operations secondaires realisables avec des fichiers .htaccess
slug: mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess
legacy_guide_number: 1972
excerpt: Retrouvez ici toutes les operations possibles avec votre .htaccess autre que la protection de dossier.
section: Réécriture et authentification
---

Avant de procéder, il est nécessaire de préciser quelques petites choses par rapport aux fichiers .htaccess. Tout d'abord, il faut savoir qu'il s'agit de fichiers particuliers pour le serveur web, et que ces fichiers n'apparaissent pas dans l'arborescence du répertoire concerné si un internaute fait un accès à un répertoire listable (qui ne contient pas de page index, et dont le listage n'est pas interdit). Ensuite, il faut bien prendre en compte que les paramétrages indiqués par un fichier .htaccess s'appliquent au répertoire où le fichier est installé, ainsi qu'à tout ses sous-répertoires.

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Que puis-je faire avec un fichier .htaccess ?

### Empecher le listage du contenu d'un repertoire
Pour empécher les internautes de lister l'ensemble des fichiers contenus dans un répertoire en l'absence d'index (.cgi, .html, .php etc ....), créez un fichier .htaccess contenant la ligne ci-dessous :


```bash
Options -Indexes
```


### Rediriger les messages d'erreur
Si vous voulez utiliser des messages d'erreur personnalisés ou rediriger les erreurs sur une page web, créez un fichier .htaccess contenant des lignes de cette forme :


```bash
ErrorDocument numéro_d_erreur message_ou_destination
```

Remplacez "numéro_d_erreur" par le numéro correspondant. Les erreurs les plus courantes sont :

- 401 : Authorization required. Cette erreur est générée lorsqu'un visiteur saisit un mauvais login / mot de passe lors de l'accès à un fichier ou répertoire protégé.
- 403 : Access denied. L'accès à un répertoire dans lequel aucun fichier index.html (ou index.cgi, etc.) n'est présent et que la configuration du serveur interdit l'affichage des fichiers du répertoire.
- 404 : Not Found. Le fichier que le visiteur essaie de voir n'existe pas.
- 500 : Server Error. Typiquement, c'est le cas lorsqu'un CGI ne s'est pas exécuté correctement ou que les droits du script ne sont pas corrects.

Remplacez "message_ou_destination" par l'action à effectuer. Pour afficher un simple message, tapez le message correspondant entre guillemets. Pour rediriger sur une page, mettez le chemin d'accès à cette page. Voici deux exemples pour vous éclairer :

- Vous souhaitez indiquer "Désolé, vous n'avez pas le droit d'accéder à ce fichier" lors d'une erreur 403. Vous mettez la ligne ci-dessous dans votre .htaccess :
- Vous souhaitez renvoyer les erreurs 404 sur votre page personnalisée 404.html (pour votre domaine : domaine.com) :

Vous pouvez également rediriger l'erreur vers un script CGI qui affichera un message, redirigera le visiteur vers un autre fichier selon l'URL qui était demandée au départ (disponible dans la variable d'environnement REQUEST_URI), et/ou vous enverra un mail, etc. Pour cela, rajouter la ligne suivante dans votre fichier .htaccess :


```bash
Errordocument 404 /cgi-bin/erreur.cgi?type=404
```

Un changement est à faire uniquement si la page est appelée en https (SSL) pour cela il faut mettre ceci :


```bash
Errordocument 401 /~login/error.html
```

Si cela ne fonctionne pas, vérifiez que dans les propriétés d'Internet Explorer vous avez, dans l'onglet Avancé, décoché "Afficher des messages d'erreur HTTP simplifiés".


### Specifier un fichier d'index different
Par défaut, le fichier index d'un répertoire est index.html, index.htm ou index.php. Si vous voulez que ce soit un autre fichier, vous pouvez mettre une ligne de ce type dans votre .htaccess :


```bash
DirectoryIndex nom_du_fichier
```

Par exemple, si vous voulez utiliser la page accueil.html comme page d'index, utilisez la ligne suivante :


```bash
DirectoryIndex accueil.html
```


### Faire des redirections
Vous pouvez pour cela vous rendre sur le lien suivant : [Cliquer ici]({legacy}1339){.ref}


### Faire de la reecriture d'URL
Vous pouvez pour cela vous rendre sur le lien suivant : [Cliquer ici]({legacy}1971){.ref}


## Le fichier .htaccess
Tout sur le fichier .htaccess sur le lien suivant : [Cliquer ici]({legacy}1967){.ref}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.