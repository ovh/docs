---
title: Configuration SNAT pour services L3
excerpt: Comprendre qu'est-ce que le service SNAT et comment le configurer
slug: l3-services-snat-configuration
section: Configuration
order: 01
---

**Dernière mise à jour le 02/11/2022**

## Objectif

L'objectif de ce guide est d'expliquer ce qu'est le service SNAT fourni par les services L3, c'est-à-dire le service *Distributed Virtual Router* pour Public Cloud. Ce guide présente également comment le configurer et présente des cas d'utilisation.

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- L'outil [Openstack Command Line Interface](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html){.external} installé sur votre environnement (local)
- Une [Floating IP des services L3](https://docs.ovh.com/ca/fr/publiccloud/network-services/attaching-pci-floating-ip-to-instance/)

## Concepts

### Qu'est ce que le service SNAT?

Le service SNAT est l’un des services délivrés par les services OpenStack DVR (Distributed Virtual Router) sur un service Public Cloud OVHcloud.

La fonction principale du service SNAT est de fournir une connexion sortante pour les machines virtuelles à l'intérieur d'un réseau privé.

### Pourquoi ai-je besoin du service SNAT ?

Une bonne pratique en matière de sécurité est de maintenir les instances à l'intérieur d'un réseau privé si elles n'ont pas besoin d'exposer des services aux réseaux externes (Internet). Néanmoins, ces instances peuvent avoir besoin d'accéder à Internet pour accéder à des mises à jour demandées du côté privé (ou pour d'autres besoins de connectivité). Dans ces cas de figure, la Gateway en mode SNAT (sortant) est la meilleure solution.

Par exemple : Vous avez une VM basée sur Ubuntu avec uniquement un réseau privé. Grâce au service SNAT, vous pouvez mettre à jour vos paquets Ubuntu directement en utilisant `apt update` et votre VM peut ainsi accéder aux serveurs Ubuntu externes officiels sur Internet.

### Configuration des services L3 SNAT

Pour activer le service SNAT, vous devez :

- créer un routeur ;
- définir une gateway externe pour un routeur ;
- ajouter le sous-réseau nécessaire au routeur.

Cela permet à toute VM créée au sein de ce réseau privé d'accéder à Internet.

Ce scénario est couvert par le guide « [Attacher une adresse Floating IP à une instance Public Cloud](https://docs.ovh.com/ca/fr/publiccloud/network-services/attaching-pci-floating-ip-to-instance/) ».

#### Architecture de configuration

![schema](images/architecture.png){.thumbnail}

Le but de notre exercice est d'avoir une VM (**vmpriv**) uniquement avec un réseau privé (**test-network**), et de configurer notre déploiement de telle sorte que **vmpriv** ait un accès externe à Internet.

Pour ce faire, nous devons configurer le réseau **test-network** avec **test-subnet** et créer un **routeur1** qui délivrera le service SNAT. 

Pour effectuer le test, nous avons besoin d'une VM de type « jump host » (**vm4fip**) par laquelle nous nous connecterons à **vmpriv**. Étant donné que la **vm4fip** aura besoin d'un accès à un réseau externe, nous allons lui attacher une Floating IP. Le test consistera à se connecter depuis un réseau externe à **vm4fip** via SSH, puis à se connecter depuis **vm4fip** à **vmpriv** via un réseau privé et à tester la disponibilité d'Internet.

## En pratique

### Étape 1

Créez une VM avec une Floating IP comme expliqué dans ce [guide](https://docs.ovh.com/ca/fr/publiccloud/network-services/attaching-pci-floating-ip-to-instance/).

### Étape 2

Créez une VM avec uniquement un réseau privé. Dans notre exemple, notre VM s'appelle **vmpriv** :

```bash
$ openstack server create --image 'Ubuntu 22.04' --flavor s1-8 --key-name test-key --net test-network vmpriv
$ openstack server show vmpriv -c name -c status -c addresses
+-----------+---------------------------+
| Field     | Value                     |
+-----------+---------------------------+
| addresses | test-network=192.168.0.26 |
| name      | vmpriv                    |
| status    | ACTIVE                    |
+-----------+---------------------------+
```

### Étape 3

Copiez votre clé privée SSH sur votre machine virtuelle créée au préalable avec une Floating IP (**vm4fip**) :

```bash
$ scp -i ./test-key.rsa ./test-key.rsa ubuntu@169.254.10.250:~/
test-key.rsa
$
```

### Étape 4

Connectez-vous à votre VM **vm4fip** (où *169.254.10.250* est votre Floating IP) :

```bash
ssh ubuntu@169.254.10.250 -i ./test-key.rsa
The authenticity of host '169.254.10.250 (169.254.10.250)' can't be established.
ED25519 key fingerprint is SHA256:ordRAjue1dEp/yJ2ve83MW+ItPznuteEhqAkoG3vEi8.
<CUT>
ubuntu@vm4fip:~$
```

### Étape 5

Vérifiez si votre VM **vmpriv** est disponible depuis **vm4fip** (où *192.168.0.26* est une adresse de la VM **vmpriv**) :

```bash
ubuntu@vm4fip:~$ ping 192.168.0.26
PING 192.168.0.26 (192.168.0.26) 56(84) bytes of data.
64 bytes from 192.168.0.26: icmp_seq=1 ttl=64 time=4.00 ms
64 bytes from 192.168.0.26: icmp_seq=2 ttl=64 time=0.549 ms
^C
--- 192.168.0.26 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.549/2.275/4.001/1.726 ms
ubuntu@vm4fip:~$
```

### Étape 6 

Connexion de **vm4fip** à **vmpriv** via SSH :

```bash
ubuntu@vm4fip:~$ ssh ubuntu@192.168.0.26 -i ./test-key.rsa
The authenticity of host '192.168.0.26 (192.168.0.26)' can't be established.
<CUT>

The list of available updates is more than a week old.
To check for new updates run: sudo apt update

ubuntu@vmpriv:~$
```

### Étape 7

Vérifiez que la machine virtuelle **vmpriv** a un accès externe à Internet :

```bash
ubuntu@vmpriv:~$ sudo resolvectl dns ens3 1.1.1.1
ubuntu@vmpriv:~$ ping ping.ovh.net -c 1
PING ping.ovh.net (198.27.92.1) 56(84) bytes of data.
64 bytes from www.ovh.com (198.27.92.1): icmp_seq=1 ttl=56 time=0.854 ms

— ping.ovh.net ping statistics —
1 paquet transmis, 1 reçu, 0% de perte de paquet, temps 0ms
rtt min/avg/max/mdev = 0.854/0.854/0.854/0.000 ms
ubuntu@vmpriv:~$
```

La VM **vmpriv** a un accès externe à Internet tout en étant connectée à un réseau privé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
