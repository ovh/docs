---
title: SPN Connector - Présentation du concept
excerpt: 'Présentation du concept de SPN Connector au sein de la solution SecNumCloud Connectivity'
updated: 2021-11-18
---

> [!primary]
> Une version en langue anglaise de cette page est disponible [ici](/pages/cloud/network-ip/snc-connectivity-concepts-spn-connector).
>

**Dernière mise à jour le 18/11/2021**

## Objectif

SPN Connector est le mécanisme d'assemblage et d'interconnexion des SPN de différentes zones SecNumCloud et/ou avec VPN-SPN. 

**Ce guide vous explique le concept de SPN Connector pour comprendre son comportement.**

## En pratique

### Règles de base

SPN peut acheminer le trafic via SPN Connector :

* avec un autre SPN dans l'autre zone;
* avec un VPN-SPN
* **pas** entre les SPN d'une même zone.
* Un SPN ne peut pas être connecté à deux SPN Connector.

![SPN connector rules](images/spn-connector-rules1.svg){.thumbnail}

Toutes les routes sont transférées via le connecteur SPN, aucun ACL / filtrage n'est possible.

### Option InterDC

Par défaut, le SPN Connector ne peut interconnecter que le SPN « local » et le VPN-SPN.

Option interDC : passage du connecteur SPN en mode « global » pour permettre la connexion entre les différentes zones.

![Règles InterDC](images/spn-connector-rules-interDC.svg){.thumbnail}

L'interconnexion de deux connecteurs SPN (global ou local) n'est pas prise en charge.

Les InterDC utilisent des lignes optiques dédiées et sécurisées utilisant le protocole MACsec.

![SPN InterDC HLD](images/SNC-SPN-InterDC-HLD.svg){.thumbnail}

InterDC n'autorise pas l'extension :

* d'un SPN;
* d'un VPN-SPN;
* d'un sous-réseau;

Seul le transfert du trafic IP (routage) est supporté via le connecteur InterDC / SPN.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.