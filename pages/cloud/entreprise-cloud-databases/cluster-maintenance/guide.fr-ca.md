---
title: 'Maintenance du cluster'
slug: maintenance-cluster
excerpt: 'Découvrez comment fonctionne la maintenance de votre cluster'
section: 'Informations techniques'
---

## Introduction
Cette documentation détaille le périmètre porté par OVHcloud ainsi que le mode de fonctionnement des maintenances.

## Périmètre

OVHcloud inclut dans son périmètre les :

- mises à jour mineures du système d'exploitation
- mises à jour mineures du SGBD
- mises à jour matérielles

## Plage de maintenance

Afin de garantir la sécurité, l'intégrité et les performances de votre service Enterprises Cloud Databases, OVHcloud effectue des maintenances.

Celles-ci consistent à appliquer des correctifs logiciels liés au SGBD ou au système d'exploitation sous-jacent.

Afin de configurer les plages de maintenance, vous pouvez suivre la documentation [Plage de maintenance du cluster](../plage-de-maintenance){.external}.

## Réalisation

Durant ces plages de maintenance, votre cluster reste disponible. Cependant, les performances peuvent être dégradées.

Le cluster étant composé de plusieurs serveurs, il est important d'effectuer la maintenance sur l'ensemble des serveurs. Afin de limiter l'impact au maximum, nous procédons à la maintenance des serveurs l'un après l'autre.

> [!primary]
> Un switchover peut induire une courte indisponibilité du service en écriture (d'une durée maximum de 30 secondes).
>

- **Maintenances logicielles**

L'automatisation est omniprésente pour la maintenance de vos clusters. Dans le fonctionnement ordinaire, les équipes d'OVHcloud groupent les mises à jour du système d'exploitation au travers de lots qui seront deployés pendant la plage de maintenance que vous avez défini.

Ces mises à jour n'ont pas d'impact sur la disponibilité de vos données.

Les mises à jour des paquets système et des versions mineures du SGBD sont prises en charge par les équipes d'OVHcloud.

- **Maintenances materielles**

Les maintenances matérielles sont opérées par les équipes OVHcloud présentes en datacenters.

Ces maintenances n'ont pas d'impact sur la disponibilité des vos données. 
