---
title: "Spécification sécurité du service Serveurs Dédiés "
slug: specifications-securite-serveurs-dedies
section: Specifications sécurité des services
updated: 2023-02-14
---

**Dernière mise à jour le 14/02/2023**

## Objectifs
En complément [au modèle de responsabilité entre OVHcloud et le client sur le service Serveurs Dédiés] (https://docs.ovh.com/fr/partage-responsabilite/raci-serveurs-dedies/), cette fiche a pour objectif de présenter les particularités 
et fonctions sécurité propres à celui-ci.
Elle met aussi en avant des bonnes pratiques qui permettront au client de l'exploiter au mieux.

## 1. Certifications :
* ISO/IEC 27001 
* ISO/IEC 27701 
* ISO/IEC 27017 
* ISO/IEC 27018 
* HDS 
* SOC 1 type 1 
* SOC 2 type 1 
* CSA type 1 
* C5 type 1 
* CISPE

## 2. Bonnes pratiques à déployer sur le service
### a. Recommandations à la prise en main du service
Une fois le service délivrée et après réception de ses identifiants de connexion à son Serveur Dédié, OVHcloud recommande au client de changer ses identifiants 
et de procéder au durcissement de son Système d'Exploitation. Des références et guides de durcissement sont présentés dans la section 8.a Fourniture d'image OS 
et durcissement.
D'autres guides sont disponibles dans [le corpus documentaire sur les Serveurs Dédiés] (https://docs.ovh.com/fr/dedicated/) pour assister le client à la prise 
en main et l'exploitation du service.

### b. Scan de vulnérabilités
Le client est autorisé à réaliser des scans de vulnérabilités sur le service qu'il a souscrit chez OVHcloud depuis n'importe quel service. OVHcloud n'a pas besoin 
d'être prévenu préalablement aux tests. Les mesures de sécurité déployées par OVHcloud (notamment les protections réseau) ne sont pas désactivables, à plus forte 
raison dans le cadre de ce type d'audits qui doivent établir une vision claire de la sécurité de l'infrastructure du client.
Le client n'est pas autorisé à utiliser son service pour scanner d'autres infrastructures.

## 3. Garanties de service
### a. SLA
Reprise des SLA des conditions particulières par composante du service.
| **Composant** | **SLA** | **Méthode de calcul** | **Dédommagement** |
| --- | --- | --- | --- |
| Serveur Dédié | 99,9% minimum (dépends de la gamme) | Nombre total  de minutes du mois considéré déduction faite du nombre de minutes d’Indisponibilité du mois concerné, le tout divisé par le nombre total de minutes du mois considéré. Pour le calcul des dédommagements, le temps d’indisponibilité est calculé à partir de l’ouverture du ticket incident, jusqu'à la résolution du dysfonctionnement. | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

### b. GTI
| **Typologie d'incident** | **temps d'intervention** | **Temps de rétablissement** | **Dédommagement** |
| --- | --- | --- | --- |
| Incident niveau 1 : indisponibilité totale du service **détecté par OVHcloud** | 1h | 1h à compter du début de l'intervention | Détection de l'incident par OVHcloud |  Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 1 : indisponibilité totale du service **signalé par le client** | 1h | 1h à compter du début de l'intervention | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 2 : dégradation substantielle des performances des Serveurs Dédiés | 1h | ∅ | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

## 4. Backups
### a. technisues


### b. Métier























