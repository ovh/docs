---
title: Débuter avec l’API Cinder
slug: debuter-avec-lapi-cinder
legacy_guide_number: 2071
section: Actions via API et lignes de commande
---


## Préambule
Afin d'automatiser vos opérations sur le Public Cloud, il est possible d'utiliser les API d'OpenStack afin de générer différents scripts. Le client Cinder d'OpenStack vous permettra d'interagir avec vos volumes additionnels.

Vous pourrez par exemple créer un nouveau volume de type "haute performance" pour l'attacher à une instance Public Cloud (nécessite le client Nova)

Ce guide vous aidera à prendre en main les API OpenStack afin de gérer vos volumes à l'aide du client Python Cinder.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref} en installant python-cinderclient et python-novaclient
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}


### Documentation Cinder
Il est possible d'obtenir la liste des commandes possibles en lisant la documentation du client :


```bash
admin@serveur-1:~$ cinder help
```

Voici la liste des commandes principales :


|create|Créé un nouveau volume|
|delete|Supprime un volume|
|list|Liste les volumes|
|snapshot-create|Créé un instantané d'un volume|

Il est aussi possible d'avoir des informations concernant une commande en ajoutant "help" devant celle ci :


```bash
admin@serveur-1:~$ cinder help snapshot-create
usage: cinder snapshot-create [--force <True|False>]
                              [--display-name <display-name>]
                              [--display-description <display-description>]
                              <volume>

Add a new snapshot.

Positional arguments:
  <volume>              Name or ID of the volume to snapshot

Optional arguments:
  --force <True|False>  Optional flag to indicate whether to snapshot a volume
                        even if it's attached to an instance. (Default=False)
  --display-name <display-name>
                        Optional snapshot name. (Default=None)
  --display-description <display-description>
                        Optional snapshot description. (Default=None)
```



> [!success]
>
> Il est aussi possible d'avoir la documentation du client Cinder directement sur
> le site OpenStack
> 


## Operations basiques

### Creation d'un volume haute performance
- Lister les types de volumes : .. code-block:: bash
[admin@serveur-1](mailto:admin@serveur-1){.external}:~$ cinder type-list +--------------------------------------+------------+ |                  ID                  |    Name    | +--------------------------------------+------------+ | 07673884-d6f0-49b0-8bfb-1cec1b6f3905 | high-speed | | 28b78be3-5e7b-480a-b20d-3c0d3e144c70 |  classic   | +--------------------------------------+------------+

- Créer le volume de type high-speed de 10GB nommé volume1 :

```bash
admin@serveur-1:~$ cinder create --volume-type high-speed --display_name volume1 10

+---------------------+--------------------------------------+
|       Property      |                Value                 |
+---------------------+--------------------------------------+
|     attachments     |                  []                  |
|  availability_zone  |                 nova                 |
|       bootable      |                false                 |
|      created_at     |      2016-01-13T15:56:44.676098      |
| display_description |                 None                 |
|     display_name    |               volume1                |
|      encrypted      |                False                 |
|          id         | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
|       metadata      |                  {}                  |
|     multiattach     |                false                 |
|         size        |                  10                  |
|     snapshot_id     |                 None                 |
|     source_volid    |                 None                 |
|        status       |               creating               |
|     volume_type     |              high-speed              |
+---------------------+--------------------------------------+
```


Il est possible d'installer une image sur un volume à l'aide de l'argument --image-id :


```bash
admin@serveur-1:~$ cinder create --volume-type high-speed --image-id bdcb5042-3548-40d0-b06f-79551d3b4377 --display_name volume_debian 20
```

Où  **bdcb5042-3548-40d0-b06f-79551d3b4377**  correspond à l'ID de l'image Debian 8.


### Attachement d'un volume sur une instance
- Lister les volumes additionnels :

```bash
admin@serveur-1:~$ cinder list
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
|                  ID                  |   Status  |  Display Name | Size | Volume Type | Bootable |     Attached to     |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| 1dd5fa60-6346-465a-ac8f-eb848da97f7f | available |    volume1    |  10  |  high-speed |  false   |                     |
| fe78323f-9e6c-4a8c-9e51-06a112a467c2 | available | volume_debian |  20  |  high-speed |   true   |                     |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
```




> [!success]
>
> La majorité des commandes suivantes nécessiteront de renseigner l'ID du volume
> plutôt que son nom.
> 

- Monter le volume sur une instance avec le client Nova :

```bash
admin@serveur-1:~$ nova volume-attach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f auto
+----------+--------------------------------------+
| Property | Value                                |
+----------+--------------------------------------+
| device   | /dev/vdb                             |
| id       | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
| serverId | 84f5dde4-cf64-40f5-8499-75d6849fc5d6 |
| volumeId | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
+----------+--------------------------------------+
```


Soit  **nova volume-attach <instance_id> <volume_id> auto** .


### Suppression d'un volume
- Détacher le volume de l'instance

```bash
admin@serveur-1:~$ nova volume-detach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```

- Supprimer le volume :

```bash
admin@serveur-1:~$ cinder delete 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```