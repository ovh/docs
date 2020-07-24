---
title: Débuter avec l’API Glance
slug: debuter-avec-lapi-glance
legacy_guide_number: 2072
section: Gestion via OpenStack
order: 5
---


## Préambule
Afin d'automatiser vos opérations sur le Public Cloud, il est possible d'utiliser les API d'OpenStack afin de générer différents scripts. Le client Glance d'OpenStack vous permettra d'interagir et de gérer vos images et sauvegardes.

Vous pourrez par exemple envoyer une image de l'une de vos machines virtuelles, ou bien une image d'OS cloud-ready vers votre projet pour créer une nouvelle instance avec celle ci. Vous pourrez aussi télécharger l'une de vos sauvegardes d'instances.

Ce guide vous aidera à prendre en main les API OpenStack afin de gérer vos images à l'aide du client Python Glance.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref} en installant python-glanceclient
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}
- Une image ou une sauvegarde (dans notre cas, cela sera une image cloud Gentoo)


### Documentation Glance
Il est possible d'obtenir la liste des commandes possibles en lisant la documentation du client :


```bash
admin@serveur-1:~$ glance help
```

Voici la liste des commandes principales :


|image-create|Créer une image|
|image-delete|Supprimer une image|
|image-download|Télécharger une image|
|image-list|Lister les images|

Il est aussi possible d'avoir des informations concernant une commande en ajoutant "help" devant celle ci :


```bash
admin@serveur-1:~$ glance help image-download
usage: glance image-download [--file <FILE>] [--progress] <IMAGE>

Download a specific image.

Positional arguments:
  <IMAGE>        Name or ID of image to download.

Optional arguments:
  --file <FILE>  Local file to save downloaded image data to. If this is not
                 specified the image data will be written to stdout.
  --progress     Show download progress bar.
```



> [!success]
>
> Il est aussi possible d'avoir la documentation du client Glance directement sur
> le site Openstack
> 


## Operations basiques

### Creation d'une image
- Envoyer votre image vers votre projet :

```bash
admin@serveur-1:~$ glance image-create --name Gentoo --disk-format qcow2 --container-format bare --file gentoo.qcow2
```

- Lister les images disponibles :

```bash
admin@serveur-1:~$ glance image-list

+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| ID                                   | Name                               | Disk Format | Container Format | Size         | Status |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7                           | raw         | bare             | 2149580800   | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                           | raw         | bare             | 2149580800   | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                           | raw         | bare             | 2149580800   | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                          | raw         | bare             | 2149580800   | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                          | raw         | bare             | 2149580800   | active |
| d3d71235-1548-4c84-af47-9d39054be9d0 | Gentoo                             | qcow2       | bare             | 1811218432   | active |
| 8161a7b5-571b-433d-ad6b-6d7f145341d8 | Snapshot 07/01/2016                | qcow2       | bare             | 1054605312   | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                       | raw         | bare             | 2149580800   | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                       | raw         | bare             | 10737418240  | active |
| 0c58e90e-168e-498a-a819-26792e4c469e | Ubuntu 15.10                       | qcow2       | bare             | 309854720    | active |
| 7d983a54-d06b-488f-986c-ba0eaa98ea51 | ubuntu-14.04-rescue                | raw         | bare             | 1073741824   | active |
| bb37762b-5a82-4c2b-b72b-91ea10169941 | Windows-Server-2012-r2             | raw         | bare             | 107374182400 | active |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
```




> [!success]
>
> Suite à cette manipulation, il est possible d'utiliser notre image "Gentoo"
> lors de la création d'une instance.
> 


### Telechargement d'une image
- Télécharger une sauvegarde :

```bash
admin@serveur-1:~$ glance image-download 8161a7b5-571b-433d-ad6b-6d7f145341d8 --file snapshot.qcow2
```



### Suppression d'une image
- Supprimer la sauvegarde :

```bash
admin@serveur-1:~$ glance image-delete 8161a7b5-571b-433d-ad6b-6d7f145341d8
```
