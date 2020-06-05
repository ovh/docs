---
title: Débuter avec l’API Swift
slug: debuter-avec-lapi-swift
legacy_guide_number: 1916
section: Gestion via OpenStack
order: 4
---


## Préambule
Afin d'automatiser vos opérations sur le Public Cloud, il est possible d'utiliser les API d'OpenStack afin de générer différents scripts. Le client Swift d'OpenStack vous permettra d'interagir et de gérer vos conteneurs et vos objets.

Vous pourrez par exemple envoyer des fichiers de manière régulière vers vos conteneurs afin de le sauvegarder.

Ce guide vous aidera à prendre en main les API OpenStack afin de gérer vos conteneurs d'objets à l'aide du client Python Swfit.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref} en installant python-swiftclient
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}


### Documentation Swift
Il est possible d'obtenir la liste des commandes possible en lisant la documentation du client :


```bash
admin@serveur-1:~$ swift --help
```

Voici la liste des commandes principales :

- **delete** : Supprime un conteneur ou les objets présents dans un conteneur
- **download** : Télécharge les fichiers d'un conteneur
- **list** : Liste les conteneurs du compte ou les objets d'un conteneur
- **post** : Met à jour les metadata pour le compte, conteneur ou objet. Crée un conteneur si non existant
- **stat** : Affiche les informations du compte, conteneur ou objet                                         |
- **upload** : Envoi des fichiers ou dossiers vers le conteneur
- **capabilities** : Liste les capacités de l'environnement Swift
- **tempurl** : Crée une URL temporaire

Il est ensuite possible d'obtenir de l'aide pour une commande particulière en ajoutant **--help** à la fin de celle-ci :


```bash
admin@serveur-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
  [container]           Name of container to post to.
  [object]              Name of object to post. Specify multiple times
                        for multiple objects.
[...]
```



> [!success]
>
> Il est aussi possible d'avoir la documentation du client Swift directement sur le site Openstack
> 


## Operations basiques

### Creation d'un conteneur d'objet public
- Créer le conteneur "container1"

```bash
admin@serveur-1:~$ swift post container1
```

- Configurer les droits d'accès pour le rendre public

```bash
admin@serveur-1:~$ swift post --header  "X-Container-Read: .r:*" container1
```

- Vérifier la configuration du conteneur

```bash
admin@serveur-1:~$ swift stat container1
         Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
       Container: container1
         Objects: 0
           Bytes: 0
        Read ACL: .r:*
       Write ACL:
         Sync To:
        Sync Key:
   Accept-Ranges: bytes
      X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
      Connection: close
     X-Timestamp: 1444726875.27475
    Content-Type: text/plain; charset=utf-8
```



### Envoi de fichier vers un conteneur
- Envoyer le contenu d'un dossier local vers un conteneur

```bash
admin@serveur-1:~$ swift upload container1 images/
images/OVHlogo.png
images/OVHSummitKeynote.jpg
```




> [!alert]
>
> Un préfixe sera automatiquement ajouté a vos fichiers si vous envoyez un dossier complet et non un fichier seul.
> 

- Lister les fichiers du conteneur

```bash
admin@serveur-1:~$ swift list container1
images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```


Il est possible d'afficher les fichiers disposant d'un préfixe particulier grâce à l'argument **--prefix** :


```bash
admin@serveur-1:~$ swift list container1 --prefix images
images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Étant donné que le conteneur a été configuré pour être accessible de manière publique, il est possible d'accéder au fichier grâce a une URL :


```None
1. https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```



> [!success]
>
> Cette URL est simplement formé du point d'accés API de l'Object Storage que vous pouvez récupéré dans le menu []({legacy}1774)
> ainsi que du nom de votre conteneur et du nom de votre objet (préfixe compris).
> 


### Telechargement de fichiers
- Télécharger un fichier :


```bash
admin@serveur-1:~$ swift download container1 text1.txt
text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Il est possible de télécharger plusieurs fichiers ayant le même préfixe grâce à la commande suivante :


```bash
admin@serveur-1:~$ swift download container1 --prefix images
images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```


### Suppression de conteneurs ou objets
- Supprimer un fichier :

```bash
admin@serveur-1:~$ swift delete container1 text1.txt
text1.txt
```


Comme pour le téléchargement, il est possible de supprimer plusieurs fichiers ayant le même préfixe grâce à la commande suivante :


```bash
admin@serveur-1:~$ swift delete container1 images/*
images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Supprimer un conteneur

```bash
admin@serveur-1:~$ swift delete container1
text2.txt
text3.txt
```




> [!alert]
>
> Cela supprimera évidemment tous les fichiers se trouvant dans le conteneur.
> 
