---
title: 'Configurer une route statique'
excerpt: "Découvrez comment configurer une route statique sur votre équipement OverTheBox afin qu'un flux ne passe pas par le tunnel chiffré"
updated: 2021-06-14
---


## Objectif

Découvrez comment ajouter une route statique sur votre équipement OverTheBox, afin qu'un flux réseau ne passe pas par le tunnel chiffré mais par une interface WAN précise.

## Prérequis

- Disposer d'une **OverTheBox** fournie par OVHcloud

## En pratique

### Étape 1 : préparation

Dans notre cas, notre OverTheBox à deux interfaces WAN :

* une interface VDSL avec comme IP de gateway **192.168.1.1**
* une clé LTE avec comme IP de gateway **192.168.8.1**.

Nous souhaitons que notre service de VoIP OVHcloud accessible sur la range d'IP **91.121.129.0/23** ne passe pas par le tunnel de notre OverTheBox mais uniquement par l'interface VDSL.

Nous allons donc créer une route statique pour que la range **91.121.129.0/23** passe uniquement par notre gateway **192.168.1.1**.

![overthebox](images/static_route-step1.png){.thumbnail}

### Étape 2 : ajout de la route statique

Dans le menu, allez sur l'onglet `Network`{.action}, puis sélectionnez `Firewall`{.action}.
<br>Cliquez ensuite sur l'onglet `Custom Rules`{.action} en haut à droite. Dans l'encart de texte, ajoutez la règle suivante : **ip route add 91.121.129.0/23 via 192.168.1.1**.
<br>Cliquez enfin sur `Submit`{.action}.

![overthebox](images/static_route-step2.png){.thumbnail}

### Étape 3 : redémarrer le firewall

Pour que les changements soit appliqués, il faut redémarrer le firewall.

Dans le menu, allez sur l'onglet `System`{.action}, puis sélectionnez `Startup`{.action}.
<br>Choisissez l'init script **firewall** et cliquez sur le bouton `Restart`{.action}.

Le firewall va redémarrer et la règle sera correctement appliquée.

![overthebox](images/static_route-step3.png){.thumbnail}

## Aller plus loin

N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
