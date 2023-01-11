---
title: Object Storage Swift - Synchroniser des conteneurs d’objets
slug: pcs/sync-object-containers
legacy_guide_number: 1919
section: Spécificités de la classe de stockage OpenStack Swift
order: 060
---

**Dernière mise à jour le 16/11/2022**

## Objectif

Si vous souhaitez déplacer vos objets d'un data-centre à un autre, ou même d'un projet à un autre, la synchronisation d'objets entre conteneurs est la meilleure solution afin d'éviter une coupure de service lors de votre migration. Ce guide vous explique comment mettre en place cette solution.

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/prepare_the_environment_for_using_the_openstack_api/) avec le client swift
- [Charger les variables d'environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/set-openstack-environment-variables/)
- 2 conteneurs d'objets dans 2 data centres différents

## En pratique

> [!primary]
>
> Si votre conteneur contient des objets dont la taille est supérieure à 5Gb, vos deux conteneurs devront avoir le même nom. De plus, la configuration de la synchronisation doit également être appliquée au conteneur qui contient les segments.
>

### Configuration de la synchronisation

#### Creation de la clé de synchronisation

Afin que les conteneurs puissent s'identifier, il faudra créer une clé puis la configurer sur chacun des conteneurs d'objets :

- Créer la clé :


```bash
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Configuration du conteneur destinataire

Dans un premier temps, il faut configurer la clé sur le conteneur qui recevra les données. Dans notre cas, celui ci se trouve à BHS.

- Vérifiez la région chargée dans les variables d'environnement :

```bash
root@serveur-1~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Configurez la clé sur le conteneur destinataire :

```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- On vérifie que celle-ci a bien été configurée grâce à la commande suivante et on récupère en même temps le contenu de la variable "Account" :

```bash
root@serveur-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Récupérez l'adresse du conteneur destinataire pour ensuite la configurer sur le conteneur source (Celle-ci est du type : "//OVH_PUBLIC_CLOUD/Région/Account/Conteneur")

```bash
root@serveur-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Configuration du conteneur source

- Changee de région dans les variables d'environnement :

```bash
root@serveur-1:~$ export OS_REGION_NAME=GRA
```

- Configurez la clé sur le conteneur source :

```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configurez le destinataire sur le conteneur source :

```bash
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Comme précédemment, il est possible de vérifier que celle ci a bien été configurée grâce à la commande suivante :

```bash
root@serveur-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Vérification de la synchronisation

Après quelques instants (en fonction du nombre et de la taille des fichiers à envoyer), il est possible de vérifier que la synchronisation s'est bien déroulée, en listant simplement les fichiers dans chacun des conteneurs.

- Listez les fichiers présents sur le conteneur source :

```bash
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Listez les fichiers présents sur le conteneur destinataire :

```bash
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Inverser la synchronisation entre deux conteneurs

Afin d'inverser la synchronisation entre deux aconteneurs, il faut supprimer la méta-donnée `--sync-to` du conteneur source, et la redéclarer sur l'autre conteneur, qui deviendra ainsi le nouveau conteneur source.

> [!warning]
>
> N'oubliez de changer également la région dans la nouvealle URL sync-to.
>

```bash
root@serveur-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@serveur-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@serveur-1:~$ export OS_REGION_NAME=BHS
root@serveur-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Arrêter la synchronisation entre deux conteneurs

Afin d'arrêter la synchronisation entre deux conteneurs, il faut supprimer les méta-données `--sync-key` et `--sync-to`.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Ce guide est aussi utilisable pour une migration d'objets de RunAbove vers
> Public Cloud.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.
