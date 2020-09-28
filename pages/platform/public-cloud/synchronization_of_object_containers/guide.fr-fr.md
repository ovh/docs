---
title: Synchroniser des conteneurs d’objets
slug: synchroniser-des-conteneurs-dobjets
legacy_guide_number: 1919
section: Stockage
order: 10
---


## Préambule
Si vous souhaitez déplacer vos objets d'un data-centre à un autre, ou même d'un projet à un autre, la synchronisation d'objets entre conteneurs est la meilleure solution afin d'éviter une coupure de service lors de votre migration. Ce guide vous explique comment mettre en place cette solution.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref} avec le client swift
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}
- 2 conteneurs d'objets dans 2 data centres différents


## Configuration de la synchronisation

### Creation de la clé de synchronisation
Afin que les conteneurs puissent s'identifier, il faudra créer une clé puis la configurer sur chacun des conteneurs d'objets :

- Créer la clé :


```bash
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```


### Configuration du conteneur destinataire
Dans un premier temps, il faut configurer la clé sur le conteneur qui recevra les données. Dans notre cas, celui ci se trouve à BHS1.

- Vérifier la région chargée dans les variables d'environnement :

```bash
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```

- Configurer la clé sur le conteneur destinataire :

```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- On vérifie que celle-ci as bien été configuré grâce la commande suivante et on récupère en même temps le contenu de la variable "Account" :

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

- Récupérer l'adresse du conteneur destinataire pour ensuite la configurer sur le conteneur source (Celle-ci est du type : "//OVH_PUBLIC_CLOUD/Région/Account/Conteneur")

```bash
root@serveur-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS1/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

### Configuration du conteneur source
- Changer de région dans les variables d'environnement :

```bash
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```

- Configurer la clé sur le conteneur source :

```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configurer le destinataire sur le conteneur source :

```bash
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Comme précédemment, il est possible de vérifier que celle ci a bien été configuré grâce la commande suivante :

```bash
root@serveur-1:~$ swift stat containerGRA
         Account: AUTH_b3e269f057d14af594542d6312b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS1/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```



### Verification de la synchronisation
Aprés quelques instants (en fonction du nombre et de la taille des fichiers à envoyer), il est possible de vérifier que la synchronisation s'est bien déroulé simplement en listant les fichiers dans chacun des conteneurs.

- Lister les fichiers présents sur le conteneur source :

```bash
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Lister les fichiers présents sur le conteneur destinataire :

```bash
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```




> [!success]
>
> Ce guide est aussi utilisable pour une migration d'objets de RunAbove vers
> Public Cloud.
> 
