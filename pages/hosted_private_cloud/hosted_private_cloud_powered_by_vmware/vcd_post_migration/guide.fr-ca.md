---
title: "Public VCF as-a-Service - Configuration réseau après migration de vSphere vers Public VCF as-a-Service"
excerpt: "Apprenez à configurer votre réseau après la migration de VMware vSphere vers Public VCF as-a-Service"
updated: 2025-03-04
---

## Objectif

Ce guide explique les étapes nécessaires pour configurer votre environnement après la migration de vos services **VMware vSphere on OVHcloud** vers une offre **Public VCF as-a-Service**.

Ces ajustements sont essentiels pour assurer le bon fonctionnement de vos machines virtuelles (VMs) et de vos réseaux.

## Prérequis

- Une offre [Public VCF as-a-Service](/links/hosted-private-cloud/vmware-vcd).
- Être administrateur technique de votre solution [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware).
- Être connecté à [l'espace client OVHcloud](/links/manager)

## En pratique

### Étape 1 : Mettre à jour la configuration réseau des machines virtuelles

Après la migration, vous devez ajuster la configuration réseau de vos machines virtuelles (VMs).

Pour passer la configuration réseau en DHCP **(recommandé)** :

1\. Accédez aux paramètres réseau de chaque VM.

2\. Modifiez le mode d’attribution des IP et sélectionnez `DHCP`{.action}.

![Paramètre DHCP](images/01-VCD-post-migration.png){.thumbnail}

3\. Assurez-vous que `Guest customization settings`{.action} est défini sur `Disabled` avant de modifier les paramètres de l’interface réseau (NIC).

![Paramètre Désactivé](images/02-VCD-post-migration.png){.thumbnail}

### Étape 2 : Gérer le problème d’adressage IP dans Public VCF as-a-Service

Les réseaux sont précréés avec des CIDR de passerelle temporaires, car les sous-réseaux réels des machines virtuelles ne sont pas connus à l’avance.

Cela peut entraîner des erreurs d’attribution d’IP si les paramètres ne sont pas ajustés après la migration.

#### **Problème détecté**

- Si une adresse IP statique est attribuée manuellement à une VM et qu’elle ne correspond pas au `Gateway CIDR` préconfiguré, l’attribution échoue.
- Il est impossible de créer ou de modifier une VM avec une adresse IP manuelle hors du `Gateway CIDR` défini initialement.

#### **Solutions possibles**

1\. **Utiliser le mode DHCP (recommandé)**

- L’activation du mode DHCP permet d’attribuer une adresse automatiquement, même si l’OS de la VM est configuré en statique.
- Cette solution fonctionne aussi bien pour les réseaux isolés que pour les `VM Networks`.

![DHCP mode](images/03-VCD-post-migration.png){.thumbnail}

2\. **Créer un nouveau network**

- Les clients peuvent créer un nouveau `network` avec le sous-réseau correct.
- Cette solution est applicable uniquement si le client possède **un seul** bloc d’adresses IP publiques.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou demandez une analyse personnalisée de votre projet à nos experts de l’équipe [Professional Services](/links/professional-services).

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).