---
title: Comment bloquer certaines IP au niveau de mon site avec un htaccess ?
slug: mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site
legacy_guide_number: 1970
excerpt: Retrouvez ici les actions possibles dans votre .htaccess pour bloquer certaines IP au niveau de votre site.
section: Réécriture et authentification
---

Vous pouvez réaliser ceci grâce à un fichier .htaccess. Il s'agit de fichiers textes particuliers qui sont détectés par le serveur web (Apache), et qui permettent de définir des règles spéciales sur un répertoire et l'ensemble de ses sous-répertoires.

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 


## Procedure a suivre

### Pour bloquer
Ce fichier devra contenir des règles de blocage. Chaque règle est définie sur une ligne de la forme suivante :


```bash
Deny from adresse_IP
Ou Deny from plage_IP
Ou Deny from domaine
```

Il vous suffit ensuite de remplacer le terme générique par l'élément que vous voulez bloquer. Voici quelques exemples :

- Vous souhaitez bloquer l'adresse IP 192.168.1.2, vous écrivez :


```bash
Deny from 192.168.1.2
```

- Vous souhaitez bloquer toutes les IP en 192.168.x.x, vous écrivez :


```bash
Deny from 192.168
```

- Vous souhaitez bloquer le domaine testinterne.ovh, par exemple :


```bash
Deny from testinterne.ovh
```


### Pour Autoriser
Pour autoriser seulement quelques ips, il sera nécessaire de remplacer Deny par allow (par rapport aux exemples ci dessus).

*Exemple :* Vous souhaitez autoriser l'adresse IP 192.168.1.2, vous écrivez :


```bash
order deny,allow
deny from all
Allow from 192.168.1.2
```

Si vous souhaitez autoriser la plage d'ip 192.168.1.0 à 192.168.1.255, vous écrivez :


```bash
order deny,allow
deny from all
Allow from 192.168.1
```


## Le fichier .htaccess
Tout sur le fichier .htaccess sur le lien suivant : [Cliquer ici]({legacy}1967){.ref}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.