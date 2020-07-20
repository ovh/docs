---
title: 'Modifier l''annonce d''un bloc IP dans le vRack'
slug: modifier-annonce-bloc-ip-vrack
excerpt: 'Apprenez à modifier l''annonce d''un bloc IP dans le vRack'
section: vRack
---

**Dernière mise à jour le 05/03/2019**

## Objectif

Le [vRack]({ovh_www}/solutions/vrack/){.external} est un réseau privé vous permettant de configurer l’adressage entre deux ou plusieurs [serveurs dédiés]({ovh_www}/serveurs_dedies/){.external} OVHcloud.

**Apprenez à définir une zone d'annonce d'un bloc IP dans le vRack.**

## Prérequis :

- Posséder un [vRack]({ovh_www}/solutions/vrack/){.external}.
- Avoir [configuré un bloc d’adresses IP dans le vRack](../ajouter-ou-enlever-un-bloc-ip-du-vrack/).
- Disposer de connaissances avancées en réseau.

## En pratique

### Étape 1 : vérifier la zone d'annonce actuelle

Commencez la manipulation en vérifiant la zone d'annonce actuelle du bloc IP concerné. Pour cela, réalisez un « traceroute » sur une adresse IP du bloc. Testez celle que vous souhaitez.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

L'exemple ci-dessus montre que l'adresse IP testée est actuellement annoncée à **Roubaix**. Ceci est visible dans le dernier saut réalisé : « vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms ». Aidez-vous de notre page « [Datacenters]({ovh_www}/apropos/datacentres.xml){.external} » si besoin pour identifier celui concerné.

### Étape 2 : modifier l'annonce du bloc IP

Rendez-vous sur le lien <https://ca.api.ovh.com/console/>, puis connectez-vous avec votre identifiant client OVHcloud. Dès lors, utilisez les API ci-dessous afin de modifier l'annonce du bloc IP.

> [!api]
>
> @api {GET} /vrack#GET
> 

Cette API permet de récupérer la liste des services vRack. Si vous n'arrivez pas à identifier le service concerné grâce à ces références, aidez-vous de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} pour le récupérer. Pour cela, positionnez-vous dans la partie « Cloud », puis « vRack ».

> [!api]
>
> @api {POST} /vrack/{serviceName}/ip/{ip}/announceInZone#POST
> 

Cette API permet de modifier l'annonce d'un bloc IP. Complétez alors les champs demandés :

|Champ|Description|
|---|---|
|serviceName|Renseignez le nom du service vRack concerné.|
|ip|Renseignez le nom du bloc IP concerné. Prenez soin de ne pas renseigner l'adresse IP que vous avez testée lors de l'étape précécente, mais bien le bloc IP concerné. Par exemple : `1.2.3.4/27`.|
|zone|Sélectionnez la nouvelle zone d'annonce du bloc IP. Prenez soin de ne pas renseigner la même zone que celle récupérée lors de l'étape précédente.|

Exécutez finalement l'API pour modifier l'annonce.

### Étape 3 : testez la nouvelle zone d'annonce

Maintenant que la zone d'annonce est modifiée, réalisez de nouveau un « traceroute » sur l'adresse IP utilisée lors de l'étape 1 pour le vérifier.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

L'exemple ci-dessus montre que l'adresse IP testée est à présent annoncée à **Gravelines**. Cette mention est visible dans le dernier saut réalisé : « be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms ». Aidez-vous de notre page « [Datacenters]({ovh_www}/apropos/datacentres.xml){.external} » si besoin pour identifier celui concerné.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
