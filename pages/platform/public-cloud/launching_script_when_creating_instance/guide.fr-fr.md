---
title: Lancer un script lors de la creation d’un instance
slug: lancer-un-script-lors-de-la-creation-dun-instance
legacy_guide_number: 1932
section: Base de connaissances
---


## Préambule
Dans certaines situations, il vous sera nécessaire de lancer un script lors de la création de votre instance. Par exemple, dans le cas ou vous souhaitez configurer plusieurs clés SSH pour votre instance, ou bien pour configurer votre service SSH automatiquement.

Ce guide vous explique comment lancer un script lors de la création de votre instance via Cloud-init et les API OpenStack.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref}
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}


## Creation d'une instance avec script

### Creation d'un script
Il existe plusieurs possibilités de scripts utiles à lancer lors de la création d'une instance. Vous pouvez par exemple utiliser des  **scripts shell**  :

- Ajout d'un nouvel utilisateur :

```bash
#!/bin/bash

adduser ovh -gecos "" --disabled-password
echo "ovh ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

mkdir /home/ovh/.ssh
echo "VOTRE_CLE_SSH_PUBLIQUE" > /home/ovh/.ssh/authorized_keys
```


Ce script vous permet de créer un utilisateur nommé " **ovh** ". On lui donne ensuite les accés  **sudo**  et on ajoute sa clé ssh.

- Modification de la configuration SSH :

```bash
#!/bin/bash

sed -i 's/Port\ 22/Port\ 2211/g' /etc/ssh/sshd_config
sed -i 's/PermitRootLogin\ yes/PermitRootLogin\ no/g' /etc/ssh/sshd_config
service ssh restart
```


Ce script permet de modifier le port SSH par défaut (22 -> 2211) et d'interdire la connexion à l'aide de l'utilisateur " **root** ".

- Mise à jour des packets et installation d'un serveur WEB :

```bash
#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y apache2 php5
```




> [!alert]
>
> Ce script peut augmenter le temps de création de l'instance.
> 

Il est aussi possible de lancer des scripts cloud-config lors de la création de votre instance, par exemple :

- Création d'un utilisateur avec 2 clés SSH :

```bash
#cloud-config

users:
  - name: ovh
    groups: sudo
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    ssh-authorized-keys:
      - SSH_KEY1
      - SSH_KEY2
```


Ce script permet donc de créer un utilisateur " **ovh**" ayant les droits sudo, avec la possibilité de se connecter avec 2 clés SSH différentes.



> [!alert]
>
> L'utilisateur "admin" ne sera pas créé, mais il sera remplacé par votre
> utilisateur.
> 


### Creation de l'instance
Après avoir récupéré la liste des images et des modèles d'instance, il est possible de lancer le script avec Cloud-init grâce à l'argument  **--user- data**  :


```bash
root@server:~# nova boot --key_name SSH_KEY --image bdcb5042-3548-40d0-b06f-79551d3b4377 --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --user-data ./adduser.sh Instance1
```

Après vérification, notre utilisateur est correctement ajouté après la création de l'instance avec les droits nécessaires :


```bash
root@server:~# ssh ovh@149.xxx.xxx.194

Last login: Tue Oct 20 07:51:58 2015 from proxy-109-190-254-35.ovh.net

ovh@instance1:~$ sudo su
root@instance1:/home/ovh#
```