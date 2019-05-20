---
title: Utilisation de docker-machine basee sur les instances Public Cloud
slug: utilisation-de-docker-machine-basee-sur-les-instances-public-cloud
legacy_guide_number: 2014
section: Tutoriels
---


## Préambule
Docker-machine est un outil permettant le déploiement de nœud docker. Il permet ensuite de les gérer indépendamment les uns des autres comme des environnements spécifiques ou de les associer pour les exploiter en mode cluster. En couplant cet outil avec les instances de Public Cloud, le déploiement d'un nouveau nœud docker se résume à une simple ligne de commande et quelques secondes d'attente.


### Prérequis
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}


## Utilisation de nuds docker independants

### Installation de docker-machine
Docker-machine peut être déployé sur différents systèmes, nous partirons d'un système Debian 8.

Le paquet docker sera installé uniquement pour utiliser le client, nous désactiverons la partie serveur.


```bash
# apt-get update
# apt-get install unzip curl docker.io
# service docker stop
# echo manual | sudo tee /etc/init/docker.override
# curl -L https://github.com/docker/machine/releases/download/v0.5.0/docker-machine_linux-amd64.zip >machine.zip
# unzip machine.zip
# rm machine.zip
# mv docker-machine* /usr/local/bin
```


### Deploiement d'un nud docker
Maintenant que nous avons l'outil, il est possible de déployer un nœud docker avec une simple ligne de commande.


```bash
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
 --openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
docker-machine-server01
```

Il est bien sur possible de déployer autant de nœuds que nécessaire. La commande "docker-machine ls" permet de lister les nœuds disponibles.


### Utilisation des nuds
Nous allons maintenant charger un environnement nous permettant de déployer des containers sur ce premier nœud.


```bash
$ docker-machine env docker-machine-server01
$ eval "$(docker-machine env docker-machine-server01)"
```

Nous voilà prêt pour utiliser docker sur un nœud distant et déployer des containers. Par exemple :


```bash
$ docker pull ubuntu
$ docker run -i -t ubuntu /bin/bash
```


## Utilisation de cluster de nuds docker
Grâce à docker-machine, il est possible de déployer plusieurs nœuds docker et de les gérer par un seul point d'entrer grâce à Swarm.

Swarm est un orchestrateur multi nœuds de docker.


![public-cloud](images/3388.png){.thumbnail}


### Installation de docker-machine
Voir le chapitre précédent


### Recuperation d'un token swarm
Pour la suite il sera nécessaire d'utiliser un token. Nous allons créer une instance pour générer ce token puis nous la supprimerons.


```bash
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
swarm-token-generator
$ eval "$(docker-machine env swarm-token-generator)"
$ docker run swarm create
8957e0f0bbb49dbdcd04b4c9beb2dab3
$ docker-machine rm --force swarm-token-generator
```


### Deploiement du nud swarm master
Le nœud docker master sera utilisé comme point d'entrer et pilotera les autres nœuds.


```bash
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
--swarm --swarm-master --swarm-discovery \
token://YOUR_TOKEN docker-machine-swarm-master
```


### Deploiement des nuds docker swarm
L'intérêt est d'ajouter plusieurs nœuds au cluster afin d'avoir un parc de machine assez large pour accueillir l'ensemble des containers.


```bash
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
--swarm --swarm-discovery \
token://YOUR_TOKEN docker-machine-swarm-node01
```


### Utilisation du cluster

```bash
$ eval "$(docker-machine env --swarm docker-machine-swarm-master)"
$ docker pull ubuntu
docker-machine-swarm-node02: Pulling ubuntu:latest... : downloaded
docker-machine-swarm-master: Pulling ubuntu:latest... : downloaded
docker-machine-swarm-node01: Pulling ubuntu:latest... : downloaded
```

Pour constater la bonne initialisation du cluster :


```bash
$ docker info
Containers: 4
Images: 6
Storage Driver:
  Role: primary
  Strategy: spread
  Filters: health, port, dependency, affinity, constraint
  Nodes: 3
 docker-machine-swarm-master: 158.69.94.60:2376
  └ Containers: 2
  └ Reserved CPUs: 0 / 1
  └ Reserved Memory: 0 B / 2.004 GiB
  └ Labels: executiondriver=native-0.2, kernelversion=3.13.0-44-generic, operatingsystem=Ubuntu 14.04.1 LTS, provider=openstack, storagedriver=aufs
 docker-machine-swarm-node01: 158.69.94.66:2376
  └ Containers: 1
  └ Reserved CPUs: 0 / 1
  └ Reserved Memory: 0 B / 2.004 GiB
  └ Labels: executiondriver=native-0.2, kernelversion=3.13.0-44-generic, operatingsystem=Ubuntu 14.04.1 LTS, provider=openstack, storagedriver=aufs
 docker-machine-swarm-node02: 158.69.94.68:2376
  └ Containers: 1
  └ Reserved CPUs: 0 / 1
  └ Reserved Memory: 0 B / 2.004 GiB
  └ Labels: executiondriver=native-0.2, kernelversion=3.13.0-44-generic, operatingsystem=Ubuntu 14.04.1 LTS, provider=openstack, storagedriver=aufs
Execution Driver:
Kernel Version:
Operating System:
CPUs: 3
Total Memory: 6.011 GiB
Name: 94d31dd697b1
ID:
Http Proxy:
Https Proxy:
No Proxy:
```

Maintenant que tout est prêt, il ne reste plus qu'à utiliser docker comme d'habitude, swarm va se charger de placer les containers sur les différents nœuds.