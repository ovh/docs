---
title: Activer le Glue Registry sur son domaine
legacy_guide_number: 1568
slug: glue-registry
excerpt: Personnaliser ses serveurs DNS
section: DNS et zone DNS
order: 7
---


## Activer le glue Registry
Grâce au Glue Registry, vous personnalisez vos serveurs DNS avec votre nom de domaine. Votre nom s'affiche dans les bases Whois, à la place de celui de votre hébergeur. Vous pouvez créer vos propres serveurs DNS en IPv4.

La personnalisation des serveurs DNS est possible pour tous les domaines GTLD: .com, .net, .org... Pour utiliser ce service, rendez-vous directement dans votre [espace client](https://www.ovh.com/manager/web/login.html){.external}. Veuillez sélectionner le domaine concerné dans la section "Domaines" de votre espace client.


![domains](images/2903.png){.thumbnail}

Sélectionner l'onglet "glue" afin de pouvoir ensuite cliquer sur "Ajouter"


![domains](images/2900.png){.thumbnail}

Une fenêtre pop-up apparaît alors afin de configurer le glue registry.


![domains](images/2901.png){.thumbnail}

Il est nécessaire d'indiquer un sous-domaine et l'adresse ip d'un serveur DNS valide.


![domains](images/2902.png){.thumbnail}


## Création du sous domaine


> [!alert]
>
> Si vous utilisez des serveurs DNS externes à OVH, il faut créer le sous
> domaine dans la zone dns concernée et non dans la zone OVH
> 

Une fois le glue crée, il est nécessaire de déclarer un champ type "A" dans votre zone dns.

Sélectionner l'onglet "zone dns"


![domains](images/2953.png){.thumbnail}

Sélectionner ensuite "Ajouter une entrée"


![domains](images/2952.png){.thumbnail}

Cliquer sur type  **"A"**


![domains](images/2956.png){.thumbnail}

Selon notre exemple voici le le champ type  **"A"**  à crée et à valider.


![domains](images/2954.png){.thumbnail}

Un temps de propagation est ensuite nécessaire. Celui-ci est de 24/48H.