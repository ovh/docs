---
title: Capacités techniques
slug: capacites-techniques
excerpt: 'Retrouvez les capacités et limitations techniques des solutions Hosted Private Cloud fournies par OVHcloud'
section: FAQ
order: 021
---

**Dernière mise à jour le 18/08/2021**

## Objectif

**Cette page fournit une vue d'ensemble des fonctionnalités et limitations techniques des services Hosted Private Cloud OVHcloud.**

## Capacités et limitations connues

| Élément | Description | Valeur |
|:-----:|:-----:|:----------:|
| Nombre max. de PCC par ID client | Nombre de vCenter ou de packs par organisation | Aucune limite |
| Nombre de PCC liés | Connexion de vCenters (Enhanced Link Mode) | 0 (non autorisé) |
| Nombre min. de hosts par PCC (SLA) | Nombre d'hôtes par vCenter pour le maintien du contrat de niveau de service | 2 |
| Nombre min. de hosts par PCC (sans SLA) | Nombre minimal d'hôtes à utiliser avec vCenter sans contrat de niveau de service | 0 |
| Nombre max. de hosts par cluster | Hosts par cluster | 64 |
| Nombre max. de clusters par vDC | Nombre de clusters dans le même centre de données virtuel | Aucune limite |
| Nombre max. de vDC par PCC | Le nombre de data centres virtuels (vDC) que les clients peuvent ajouter par vCenter | 400 |
| Nombre max. de hosts par PCC | Limites de hosts par vCenter | plage **Hosts**: 340 hosts, 70 zpools<br>plage **Hybrid**: 241 hosts, 120 zpools<br>plage **BigDS**: 76 hosts, 205 zpools |
| Nombre max. de machines virtuelles par SDDC | VMs gérées par le même vCenter | 25 000 |
| Nombre max. de machines virtuelles par host | VMs hébergées sur le même host physique | 1024 |
| Nombre max. d'adresses IP par PCC | Nombre max. d'adresses IP publiques pouvant être attribuées et utilisables par vCenter | 1 x /23 |
| vCPUs, mémoire RAM et disque utilisés par vCenter standard | Ressources affectées à vCenter (VCSA) | 4 processeurs virtuels, 16 Go de RAM, 290 Go d'espace disque |
| vCPUs, mémoire RAM et disque utilisés par NSX standard | Ressources affectées au Manager et au Controller NSX | 4 CPU virtuels, 4 Go de RAM, 60 Go d'espace disque<br>4 CPU virtuels, 2 Go de RAM, 28 Go d'espace disque |
| vCPUs, mémoire RAM et disque utilisés par vROPS | Ressources affectées à vROPS | 4 processeurs virtuels, 16 Go de RAM |
| Nombre max. de edge nodes | Nombre max. de périphériques edge à déployer par NSX | 2000 |
| Nombre max. de tunnels VPN IPSec | Nombre max. de tunnels VPN par edge | 512 compact edge<br>1600 large edge<br>4096 quad large edge<br>6000 extra large edge |
| Nombre max. de vRack par vDC | Nombre max. de réseaux privés par Virtual Data Center (VDC) | 1 |
| Nombre max. de clients VPN L2 | Nombre de clients VPN à connecter | 5 |
| Nombre max. d'adresses IP autorisées | Nombre d’adresses IP autorisées à se connecter à votre infrastructure VMware | 2048 |

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
