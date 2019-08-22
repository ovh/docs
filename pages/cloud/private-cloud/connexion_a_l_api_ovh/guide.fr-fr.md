---
title: Connexion à l’API OVH
slug: connexion-a-l-api-ovh
excerpt: 
legacy_guide_number: '7766879'
section: Premiers pas
order: 5
---

**Dernière mise à jour le 14/02/2019**

## Objectif

L’API OVH permet de réaliser certaines actions parfois non disponibles dans l’espace client OVH.

Elle permet également d’automatiser certaines actions.

**Ce guide montre plusieurs exemples.**

## Connexion à L’API

Rendez-vous sur l’API [ovh.com](http://ovh.com){.external-link} : [http://api.ovh.com](http://api.ovh.com/){.external-link}

![](images/connection_api_1.jpg){.thumbnail}

Cliquez sur “Explore the OVH API”.

Une fois sur l’interface, cliquez sur le lien login.

![](images/connection_api_login.jpg){.thumbnail}

Entrez votre nic-handle et votre mot de passe. Les logins sont les mêmes que pour l’espace client OVH.

![](images/connection_api_log.jpg){.thumbnail}

## Utilisation de l’API

Rendez vous dans la partie dedicatedCloud.

![](images/connection_api_example.jpg){.thumbnail}

Cliquez sur la partie /dedicatedCloud/ Vous trouverez différents appels possibles (GET, PUT, POST, DELETE).

### GET

L'appel GET permet de sortir des informations sur votre infrastructure, cela n'effectura aucune modification.

Exemple : cliquez sur la partie /dedicatedCloud/{serviceName} et renseignez votre Private Cloud dans le champ. Après avoir cliqué sur “Execute”, le résultat sera similaire à :

![](images/api.jpg){.thumbnail}

### PUT

L'appel PUT, permet de modifier un existant.

Exemple : Après avoir récupéré les informations sur mon datacentre avec l'appel suivant : /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

![](images/retrieve_infos.PNG){.thumbnail}

Je modifie la description avec l'appel PUT : /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

![](images/command_put.PNG){.thumbnail}

Et voici les informations mise à jour :

![](images/dc_after_put.PNG){.thumbnail}

### POST

L'appel POST, permet de créer une nouvelle entrée.

Exemple : Je souhaite autoriser une IP pouvant se connecter au client vSphere avec l'appel suivant : /dedicatedCloud/{serviceName}/allowedNetwork

![](images/access_ip.PNG){.thumbnail}

L'IP est ajouté est vérifiable avec l'appel suivant : /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId} (le networkAccessId est visible dans l'appel précedent).

![](images/access_ip_show.PNG){.thumbnail}

### DELETE

L'appel DELETE permet de supprimer une entrée.

Exemple : Je souhaite supprimer un datacentre virtuel, ce dernier étant vide, l'appel suivant permet de le supprimer : /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

![](images/delete_datacenter.PNG){.thumbnail}

## Utilisation annexe

L'API OVH peut être utilisé en complément du [SDK vSphere](https://pccdocs.ovh.net/display/VS/Installation+VMware+API+Perl) afin d'automatiser toute votre infrastructure.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.