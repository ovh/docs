---
title: Utilizza Docker Machine sulle tue istanze Public Cloud
excerpt: Utilizza Docker Machine sulle tue istanze Public Cloud
slug: utilizza_docker_machine_sulle_tue_istanze_public_cloud
legacy_guide_number: g2014
---


## 
Docker Machine è uno strumento che permette di configurare i nodi Docker per gestirli in modo indipendente, come se fossero ambienti separati, o associarli per creare un cluster.
Utilizzando questo strumento per le tue istanze Public Cloud, la configurazione di un nuovo nodo Docker si riduce a una semplice riga di comando e qualche secondo di attesa.


## Requisiti necessari

- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## Installa Docker Machine
Docker Machine può essere configurato su diversi sistemi.
Partiamo da un sistema Debian 8 e installiamo il pacchetto Docker solo per utilizzare il client, disattivando la parte server.


```
# apt-get update
# apt-get install unzip curl docker.io
# service docker stop
# echo manual | sudo tee /etc/init/docker.override
# curl -L https://github.com/docker/machine/releases/download/v0.5.0/docker-machine_linux-amd64.zip >machine.zip
# unzip machine.zip
# rm machine.zip
# mv docker-machine* /usr/local/bin
```




## Configura un nodo Docker
Una volta completata l'installazione, è possibile configurare un nodo Docker utilizzando una semplice riga di comando.


```
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
docker-machine-server01
```


Puoi configurare tutti i nodi che vuoi. Il comando "docker-machine ls" ti permette di visualizzare la lista dei nodi disponibili.


## Utilizza i nodi
Per caricare un ambiente che ti permette di configurare container su questo primo nodo, esegui il comando:


```
$ docker-machine env docker-machine-server01
$ eval "$(docker-machine env docker-machine-server01)"
```


A questo punto, è possibile utilizzare Docker su un altro nodo e installare un container. Ad esempio:


```
$ docker pull ubuntu
$ docker run -i -t ubuntu /bin/bash
```




## 
Con Docker Machine è possibile configurare più nodi Docker e gestirli utilizzando un unico punto di accesso grazie a Swarm.

Swarm è un orchestratore multinodo di Docker.

![](images/img_3388.jpg){.thumbnail}


## Installa Docker Machine
Vedi paragrafo precedente


## Recupera un token Swarm
Per continuare, è necessario utilizzare un token. Per generarlo, è necessario creare un'istanza, che verrà poi cancellata.


```
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




## Configura il nodo Swarm master
Il nodo Docker master viene utilizzato come punto di accesso e gestisce tutti gli altri nodi.


```
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
--swarm --swarm-master --swarm-discovery \
token://YOUR_TOKEN docker-machine-swarm-master
```




## Configura i nodi Docker Swarm
Per disporre di un parco macchine sufficientemente grande ad accogliere tutti i container, è possibile aggiungere più nodi al cluster.


```
$ docker-machine create -d openstack \
--openstack-flavor-name="vps-ssd-1" \
--openstack-image-name="Ubuntu 14.04" \
--openstack-net-name="Ext-Net" \
--openstack-ssh-user="admin" \
--swarm --swarm-discovery \
token://YOUR_TOKEN docker-machine-swarm-node01
```




## Utilizza il cluster

```
$ eval "$(docker-machine env --swarm docker-machine-swarm-master)"
$ docker pull ubuntu
docker-machine-swarm-node02: Pulling ubuntu:latest... : downloaded
docker-machine-swarm-master: Pulling ubuntu:latest... : downloaded
docker-machine-swarm-node01: Pulling ubuntu:latest... : downloaded
```


Per verificare il corretto avvio del cluster:


```
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


Una volta completata la configurazione, utilizza Docker normalmente: Swarm collocherà i container sui vari nodi.


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

