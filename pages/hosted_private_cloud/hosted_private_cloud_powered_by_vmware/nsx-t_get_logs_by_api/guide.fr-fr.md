---
title: "NSX-T: retrieving logs"
excerpt: "Découvrez comment obtenir les logs des noeuds NSX grâce à l'API dédiée et/ou Bundle"
updated: 2023-10-20
---

## Objectif

NSX est un réseau à définition logicielle ou « *Software-Defined Networking* » (SDN) développé par VMware. OVHcloud propose ce service à la place de NSX-V dans sa solution [VMware on OVHcloud](https://www.ovhcloud.com/fr/hosted-private-cloud/vmware/).

A l'heure actuelle (18 Septembre 2023), en raison de l'implémentation par OVHcloud, il n'est pas possible d'exporter les logs d'un NSX-T par le biais d'un syslog serveur. Pour y remédier, il est possible de récupérer quelques logs via des appels API ou/et par bundle.
.

**Découvrez comment obtenir les logs des noeuds NSX grâce à l'API dédiée.**

## Prérequis

Pour que la version actuelle de NSX fonctionne, deux hôtes sont déployés avec une machine virtuelle dédiée pour NSX sur chaque hôte, ce qui permet la redondance en cas de défaillance de l'un des hôtes.

De plus, les prérequis suivants sont nécessaires :

- Avoir déployé les hôtes NSX.
- Avoir un utilisateur ayant les droits d'accès au NSX.
- Vérifier que le noeud soit activé.

## En pratique

### Activation des logs

En premier lieu, avant de pouvoir récupérer les logs, il est nécessaire d'activer l'option `logging` sur la règle correspondante.

> [!warning]
> Attention, par défaut, les logs ne sont pas activés sur les règles !

Prenons l'exemple d'une règle bloquant toutes les adresses IP entre `192.168.211.0/24` et `8.8.8.8/32`.

Pour accéder à la configuration d'une règle, cliquez sur le bouton de paramètres (en forme de roue crantée) situé à droite de la règle choisie.

![Panneau des règles de la Gateway Firewall](images/01nsx-t_get_logs_by_api.png){.thumbnail}

Les paramètres de la règle sont alors disponibles. Activez l'option `logging`{.action} qui doit alors passer au vert.

![Activation des logs pour la règle](images/02nsx-t_get_logs_by_api.png){.thumbnail}

N'oubliez pas d'appliquer la nouvelle configuration et de la publier.

### Récupération des logs via API

- Pour obtenir l'accès aux logs, vous devez identifier l'ID du NSX Edge. Pour cela, utilisez un premier appel API :

```bash
curl -k -u user@pcc-123-123-123-123.ovh.com:<password> https://nsxt.pcc-123-123-123-123.ovh.com/api/v1/transport-nodes/
```

- Cet appel API vous retourne les deux ID de vos deux noeuds Edges :

```bash
"resource_type" : "EdgeNode",

      "external_id" : "8a8e0033-9eee-4d13-a5e2-7cd2dbdebc6c",


 "resource_type" : "EdgeNode",

      "external_id" : "b35873da-ca7f-48ff-961e-5d6fa8bc5bf7"
```

- Une fois l'ID de votre noeud Edge obtenu, effectuez un appel API pour obtenir les logs de votre noeud Edge :

```bash
curl -k -u user@pcc-123-123-123-123.ovh.com:<password> https://nsxt.pcc-123-123-123-123.ovh.com/api/v1/transport-nodes/8a8e0033-9eee-4d13-a5e2-7cd2dbdebc6c/node/logs/firewallpkt.log/data
```

- Vous pouvez ainsi observer, en retour de cet appel, les logs associés à votre règle :

```bash
2023-09-15T13:15:05.548Z edge321-3995b.sbg1a.pcc.ovh.net NSX 5188 FIREWALL [nsx@6876 comp="nsx-edge" subcomp="datapathd" s2comp="firewallpkt" level="INFO"] <30 d612293055f3431f:8b01687591afe36e> INET reason-match DROP 2312 OUT 84 PROTO 1 192.168.211.169->8.8.8.8
```

### Récupération des logs via bundle

Pour télécharger le support bundle de vos nodes ou cluster sur votre machine/serveur de fichiers en suivant la [documentation officielle VMware](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-tanzu/GUID-794C691E-B950-4838-97E4-A10D9873D852.html)

![infos](images/export-log-bundle.gif){.thumbnail}

## Aller plus loin

[Documentation NSX-T Datacenter Rest API](https://developer.vmware.com/apis/1707/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.