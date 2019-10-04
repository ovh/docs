---
title: Limitations appliquées à l'offre PostgreSQL managée
slug: limitations-techniques
excerpt: Prenez connaissances des limitations techniques de l'offre PostgreSQL managée
section: Informations techniques
order: 4
---

## Limitations réseau

|**Composant**|**Description**|
|---|---| 
|Bande passante maximale|1 Gb/s|
|Réseau privé|Non disponible|

## Limitations logicielles

Nous supportons les mises à jour mineures du système d'exploitation ainsi que du SGBD. OVH applique l’entièreté des mises à jour de securité.

## Limitations d'usage

|**Composant**|**Description**|
|---|---|
|SGBD proposés|PostgreSQL 9.6, 10, 11|
|Maximum de connexions actives|900|
|Espace disque|L'espace disque est fixe, il ne peut pas être étendu|
|Type de réplication|Asynchrone. Il est possible qu'il y ai un court délai d'application des changements entre le serveur primaire et le ou les réplicas.|

## Extensions compatibles

La liste d'extensions est régulièrement mise à jour.

Vous pouvez à tout moment trouver la liste des extensions disponibles sur votre cluster en éxecutant la requête SQL suivante:

    SELECT * FROM pg_available_extensions ORDER BY name;

