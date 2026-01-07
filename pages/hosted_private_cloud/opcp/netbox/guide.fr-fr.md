---
title: "Netbox"
excerpt: "Découvrez Netbox"
updated: 2026-01-07
---

## Objectif

NetBox est utilisé comme **Source of Truth** pour la gestion du matériel, ainsi que comme référentiel physique dans les environnements OPCP.

Il permet de :

- documenter les racks, serveurs, switches, PDUs…  
- gérer l’emplacement physique des équipements  
- décrire l’inventaire matériel réel  
- faire correspondre un **Device** avec un **Ironic Node**  
- faciliter la supervision, le dépannage et le suivi de la vie des serveurs

Ce guide présente :

- la **vue Rack / Elevation**  
- la **gestion des Appareils (Devices)**  
- la **fonctionnalité KVM / Remote Management**  
- la section **Atelier** permettant de consulter l’historique  
- les **bonnes pratiques OVHcloud** pour l’usage avec Ironic

## Prérequis

- Être administrateur de l'infrastructure [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) et avoir accès à l'interface d'administration `admin.dashboard`.  
- Un accès à Netbox

## En pratique

### 1. Connexion à Netbox

### 2. Terminologie essentielle

| Terme | Description |
|------|-------------|
| **Baies** | Châssis physique regroupant les équipements (serveurs, switchs…). |
| **Élévations** | Vue graphique du rack montrant chaque U et appareil associé. |
| **Appareils** | Représentation d’un serveur ou équipement réseau dans NetBox. |
| **Types D'appareils** | Modèle technique d’un appareil (fabricant, modèle, ...). |
| **Rôles Des Appareils** | Rôle fonctionnel (serveur, switch, management…). |
| **KVM / Remote Access** | Console distante pour gérer le serveur (IPMI, iDRAC, iLO…). |
| **Atelier** | Vue regroupant toutes les principales informations concernant l'appareils (hardware, instance, kvm, ...). |

---

## 3. Vue Rack : Rack / Elevation

La vue **Elevation** de NetBox permet une visualisation verticale du rack, offrant un aperçu immédiat de la disposition physique.

---

### 3.1 Accès à la vue "Rack / Elevation"

1. Aller dans **Baies**  
2. Cliquer sur l’onglet **Elévation**

---

### 3.2 Fonctionnalités principales

- Affichage des unités **U** du rack, du bas vers le haut ou inversement  
- Affichage graphique des appareils avec :
  - hauteur (nombre de U)  
  - hostname  
  - rôle (colorisé selon Device Role)  
  - statut (Planned / Staged / Active / Failed / Retired)  
- Indication des emplacements libres  
- Inversion de vue (Avant / Arriére)
- Accès direct au Device en cliquant dessus  

---

### 3.3 Utilité dans un contexte Baremetal/Ironic

- Vérification du bon **placement physique** des serveurs  
- Contrôle des conflits d’espace ou doublons  
- Vérification rapide d’un rack avant intervention (technicien, remplacement matériel…)  
- Validation de la cohérence entre :
  - position réelle  
  - position déclarée dans NetBox  
  - informations dans Ironic (provisionning et attributs d’inventaire)

---

## 4. Vue Appareils

La section **Appareils** regroupe tous les équipements documentés dans NetBox :  
serveurs, switchs, passifs, devices de management, PDUs…

---

### 4.1 Accès

1. Aller dans **Appareils**  
2. Cliquer sur l’onglet **Appareils**

---

### 4.2 Fiche d’un Appareil

La page d’un Device contient :

#### Informations de base
- Nom / Hostname  
- Manufacturer / Device Type  
- Role  
- Serial Number  
- Asset Tag OVH  
- Statut (Active / Planned / Staged / Failed / Retired)  

#### Emplacement physique
- Rack  
- Position U  
- Face (front/back)

#### Interfaces réseau
- Toutes les interfaces physiques  
- MAC addresses  
- Vitesse (1G/10G/25G/100G)  
- Bonding ou LAG éventuels

#### Connexions (Câblage)
- Ports SFP  
- Liens vers switchs  
- Backuplinks  
- Management interface (BMC, iDRAC, IPMI)

#### Énergie
- Connexion aux PDUs  
- Redondance A/B

#### Champ d’intégration Ironic
- Node UUID  
- lien vers l’objet Ironic Node  
- MACs déclarées dans Ironic  
- Driver (pxe_ipmitool, redfish, idrac…)

---

## 5. Fonctionnalité KVM / Remote Access

NetBox permet d’associer des informations de gestion distante (KVM / BMC).

Ces informations sont essentielles pour Ironic.

---

### 5.1 Types d’accès KVM possibles

- **IPMI**  
- **Redfish**  
- **Dell iDRAC**  
- **HPE iLO**  
- **Lenovo XCC**  

---

### 5.2 Où trouver cette information dans NetBox ?

→ Dans un Device :  
- Aller dans **Interfaces → Management**  
- Chercher l’interface du type :  
  - `bmc`  
  - `mgmt`  
- Consulter :
  - l’adresse IP du BMC  
  - le type d’accès  
  - le protocole (Redfish / IPMI)  

---

### 5.3 Rôle dans Ironic

Ironic utilisera ces données pour :

- contrôler le power cycle du serveur  
- démarrer en PXE  
- formater / installer une image  
- récupérer l’inventaire matériel via Redfish / IPMI  

Une mauvaise configuration BMC dans NetBox peut provoquer :
- erreurs de provisioning  
- échecs de cleaning  
- impossibilité de power-on/off

---

## 6. Section Atelier : Historique et suivi d’un serveur

La section **Atelier** (fonctionnalité interne OVHcloud) permet d’avoir un suivi complet des événements associés à un serveur.

---

### 6.1 Contenu de l’Atelier

- Historique des interventions techniques  
- Remplacements hardware (disques, cartes, RAM…)  
- changements de rack ou de position  
- actions sur le BMC  
- erreurs lors d’un provisioning  
- logs IPMI/Redfish  
- notes internes associées  
- suivi des tickets ou incidents liés à ce serveur  
- historique de statut (Active → Failed → Repair → Active)  

---

### 6.2 Utilité dans le cycle de vie Baremetal/Ironic

- Identifier l'origine d'un failure (carte mère remplacée ? NIC changée ?)  
- Vérifier les MACs suite à un changement matériel  
- Consulter l’historique en cas de problèmes de boot PXE  
- Préparer un renouvellement ou une migration  
- Vérifier les actions humaines avant automatisation

---

## 7. Cycle de vie d’un serveur chez OVHcloud

| Statut NetBox | Description |
|---------------|-------------|
| **Inventory** |
| **Staged** | Serveur installée physiquement mais pas encore en production | 
| **Active** | Serveur opérationnel | 
| **Failed** | Problème matériel, réseau ou serveur en maintenance |
| **Decommissioning** | Retrait du service | 
| **Planned** | 
---

## 10. Conclusion

Ce guide fournit une vision complète de l’utilisation de NetBox dans un environnement OVHcloud Baremetal / Ironic :

- gestion physique (rack / elevation)  
- gestion des serveurs (devices)  
- KVM / BMC pour provisioning  
- Atelier pour la traçabilité  
- conformité entre infrastructure physique et Ironic

