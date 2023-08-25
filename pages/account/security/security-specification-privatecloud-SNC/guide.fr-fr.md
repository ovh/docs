---
title: "Spécifications de sécurité du service Hosted Private Cloud VMware sous la qualification SecNumCloud "
updated: 2023-08-25
---

**Dernière mise à jour le 25/08/2023**

## Objectif

En complément au [modèle de responsabilité entre OVHcloud et le client sur le service Hosted Private Cloud powered by VMware sous la qualification SecNumcloud](/pages/cloud/private-cloud/SNC-responsibility-sharing/), cette fiche a pour objectif de présenter les particularités et fonctions de sécurité propres à ce service. Elle met aussi en avant des bonnes pratiques qui permettront au client de l'exploiter au mieux.

## 1 - Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- PCI DSS
- SecNumCloud
- SOC 1 type II
- SOC 2 type II
- CSA type II
- C5 type II
- CISPE

## 2 - Bonnes pratiques à déployer sur le service

### 2.1 - Recommandations à la prise en main du service

Pour l'accès à l'interface vSphre sous la qualification SecNumCloud, il convient de suivre les étapes sur [le lien suivant](/pages/cloud/private-cloud/snc_getting_started/)  afin d'autoriser les connexions d'adresses IP au vCenter, les accès des utilisateurs et authentification en MFA ainsi que les fonctionnalités de filtrage réseaux et de chiffrement pour sécuriser le service.

Il convient également de procéder au durcissement de son Système d'Exploitation suite à la création des machines virtuelles.

D'autres guides sont disponibles dans le corpus documentaire dédié au service sur [ce lien](https://help.ovhcloud.com/csm/fr-documentation-hosted-private-cloud-hosted-private-cloud-powered-by-vmware?id=kb_browse_cat&kb_id=62e4cfed55d574502d4c6e78b7421953&kb_category=db34d555f49801102d4ca4d466a7fd4f) pour assister le client à la prise en main et l'exploitation du service.

### 2.2 - Scan de vulnérabilités

Le client est autorisé à réaliser des scans de vulnérabilités sur le service qu'il a souscrit chez OVHcloud depuis n'importe quel service. OVHcloud n'a pas besoin 
d'être prévenu préalablement aux tests. Les mesures de sécurité déployées par OVHcloud (notamment les protections réseau) ne sont pas désactivables, à plus forte 
raison dans le cadre de ce type d'audits qui doivent établir une vision claire de la sécurité de l'infrastructure du client.
Le client n'est pas autorisé à utiliser son service pour scanner d'autres infrastructures.

## 3 - Garanties de service

### 3. SLA

Reprise des SLA des conditions particulières par composante du service.

| **Composant** | **SLA** | **Méthode de calcul** | **Dédommagement** |
| --- | --- | --- | --- |
|  | Le taux de disponibilité mensuel est de 99,9 % pour l'ensemble du service | Nombre total  de minutes du mois considéré, déduction faite du nombre de minutes d’indisponibilité du mois concerné, le tout divisé par le nombre total de minutes du mois considéré. Pour le calcul des dédommagements, le temps d’indisponibilité est calculé à partir de l’ouverture du ticket incident, jusqu'à la résolution du dysfonctionnement. | 1- si taux disponibilité mensuel < 99,95 %, crédit de 10% du prix du service impacté. <br>
2- si taux de disponibilité mensuel <99%, crédit de 30% du prix du service impacté |



## 4 - Backups

### 4.1 - Sauvegardes techniques

Les sauvegardes techniques (ou de configuration) sont les sauvegardes réalisées par OVHcloud pour assurer les niveaux de service prévus au contrat. Ces sauvegardes ne sont pas prévues pour être activées à la demande du client.

### 4.2 - Sauvegardes métier

Liste des fonctionnalités et options de backups adaptées au service :

| **Nom de l'option** | **Granularité** | **RPO** | **RTO** | **Documentation et tutoriels**| **chiffrement des jobs**|
| --- | --- | --- | --- | --- |
| Veeam Managed Backup(Standard) | la VM | dépend de la date de la dernière sauvegarde et durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/cloud/private-cloud/veeam_backup_as_a_service/) | Oui |
| Veeam Managed Backup(Advanced) | la VM | dépend de la date de la dernière sauvegarde et durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/cloud/private-cloud/veeam_backup_as_a_service/) | Oui |
|Veeam Managed Backup(Premium) | la VM | dépend de la date de la dernière sauvegarde et durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/cloud/private-cloud/veeam_backup_as_a_service/) | Oui |

## 5 - Logs
Le client bénéficiant d'une infrastructure Hosted Private Cloud qualifiée SecNumcloud a la possibilité de récupérer les logs de connexion à l'espace client  et évènements enregistrés sur le service qu'il opère.

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/account/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

| **Source** | **Contenu** | **Liens** |
| --- | --- | --- |
| Control Plane (Espace Client) | Logs sur toutes les interactions réalisées via des appels API, lancés par les contacts administrateur, technique ou de facturation, sur les services auxquels ils ont accès. |- <https://api.ovh.com/console/#/me> (voir les appels `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br> // [Tasks associated with this User](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task~GET) |
| Service | Logs des "support user" qui correspondent aux tâches, effectuées par un utilisateur d'OVHcloud créé à la volée, dans l'infrastructure du client pour le support et gestion des incidents. | Historique du vCenter : vSphere Client, onglet "Tasks et events"|


## 6 - API

| **Nom** | **Capacités** | **Liens** |
| --- | --- | --- |
| Control Plane et service | Manipulation des comptes client et des services sur lesquels le compte a des droits de gestion du service | [API calls for Private Cloud]([https://api.ovh.com/console/#/dedicated/server)](https://api.ovh.com/console/#/dedicatedCloud) |

## 7 - Comptes utilisateurs

### 7.1 - Control Plane

A travers son espace client OVHcloud, le client a la possibilité de gérer le service à l'aide de [trois contacts types](/pages/account/customer/managing_contacts#definition).

Afin de référencer chaque client ayant souscrit à un ou plusieurs services, OVHcloud utilise un compte propriétaire avec un NIC interne. 

Pour renforcer l'accès au compte client, le client a la possibilité d'activer [une authentification à double facteur (2FA)](/pages/account/customer/secure-ovhcloud-account-with-2fa).

La gestion des accès utilisateurs à l'interface vSphere avec filtrage IP et authentification à double facteurs peut se faire en suivant les premières étapes de [ce guide](/pages/cloud/private-cloud/snc_getting_started/).

Avec le compte administrateur, le client a la possibilité d'établir sa propre politique d'accès au vCenter, de créer des utilisateurs et leur affecter différents droits d'accès pour gérer les ressources, l'accès à l'interface vSphere et la gestion de la partie réseau privé et public. Le guide et détails de configurations sont disponibles sur [ce lien](/pages/cloud/private-cloud/manager_ovh_private_cloud/).

### 7.2 - Data Plane

Le client est autonome pour créer les comptes utilisateurs sur son OS, une fois qu'il a les droits d'administration sur son serveur.

## 8 - Antivirus

Une protection antivirus est déployée sur différents composants des infrastructures gérées par OVHcloud comme la SSL Gateway, la Private Gateway, la zone Master, ... avec des scans hebdomadaires.

Aucune protection n'est mise en place au niveau des VM déployées par le client, il appartient donc à celui-ci d'installer son propre logiciel antivirus et de le monitorer.

## 9 - Services disponibles à l'installation du Service

### 9.1 - Fourniture d'images de VM

OVHcloud met à disposition des clients des modèles de VM au format OVF. Ces template de VM disposent d'un niveau de durcissement minimal. Le durcissement des OS windows et Linux est celui d'une installation nominale de l’éditeur. Pour un durcissement avancé, OVHcloud recommande de se référer aux documentations de chaque éditeur.

Lors du déploiement d'une VM, le client a également la possibilité d'importer sa propre image ISO.

### 9.2 - Fonctions de filtrage, chiffrement et autres options sécurité
### 9.2.1 SSL Gateway
Les adresses IP d'un service Private Cloud sont par défaut publiques. La SSL Gateway est une passerelle qui permet à un client d'activer des fonctions de filtrage pour permettre à ses propres utilisateurs de se connecter depuis Internet à son infrastructure.

Elle offre également un service de Firewall/NAT qui peut configuré par le client via une 'iptable', un certifcat pour sécuriser la connexion, un ProxyPass, du monitoring, un serveur SFTP et un script antivirus avec scan quotidien/mis à jour. 

### 9.2.2 Private Gateway

La PrivateGateway est est une option disponible sur un service Private Cloud et activée par défaut sur une infrastructure qualifiée SecNumCloud. Elle permet au client de gérer l'accès à son infrastructure via une IP privée (interface vSphere, vScope, etc, ..).

Une fois déployée, la PrivateGateway agit comme un proxy pour accéder à l'infrastructure à partir du réseau vRack. L'ensemble des règles établies dans SSL Gateway (iptable) seront copiées vers la PrivateGateway pour le filtrage, l'accès via les IP publiques sera désactivé et le domaine du Private Cloud sera accessible uniquement via cette Gateway. 

Le mode opératoire pour activer la Private Gateway est disponible sur ce lien : [Activer la Private Gateway](/pages/cloud/private-cloud/private_gateway/) 

Pour l'infrastructure qualifiée SecNumCloud, il convient de suivre l'étape 4 disponible sur ce lien : [Mise en route de votre vSphere SecNumCloud](/pages/cloud/private-cloud/snc_getting_started/)

### 9.2.3 NSX

Des fonctionnalités de filtrage réseaux plus fines comme la micro segmentation, un pare-feu distribué, du Load Balancing, etc .. sont disponibles via l'offre SDN de VMware basée sur la solution NSX.

Le guide pour les premiers pas avec la solution NSX est disponible sur [ce lien](/pages/cloud/private-cloud/nsx-01-first-steps/). Il accompagné d'autres tutoriels dans l'espace documentaire pour faciliter l'utilisation des autres fonctionnalités.

### 9.2.4 SecNumCloud Connectivity : SPN et VPN

Un service optionnel de connectivité est disponible sur l'infrastructure qualifiée SecNumCloud. Ce service intègre :

    Un Réseau Privé Sécurisé (SNC Secured Private Network ou SPN)
    Une interconnexion sécurisée entre SPN distants (SNC SPN Inter-DC)
    Une passerelle VPN IPsec (SNC VPN Gateway)

La présentation de ces options est disponible sur [ce lien](https://help.ovhcloud.com/csm/fr-documentation-hosted-private-cloud-hosted-private-cloud-powered-by-vmware-networking-secnumcloud-connectivity?id=kb_browse_cat&kb_id=62e4cfed55d574502d4c6e78b7421953&kb_category=e781fb0d312b4154f0783c59fae3cd8f).


### 9.2.5 Chiffrement des données 
Sur une infrastructure qualifiée SecNumcloud ou hors SecNumcloud, un client a la possibilité d'appliquer un chiffrement au repos en utilisant la brique vNKP disponible sur le service pour chiffrer les VM ou au niveau des datastores d'un Cluster vSAN.

La même opération peut être réalisée si le client opte pour l'utilisation d'un KMS externe à l'offre OVHcloud.

Le mode d'emploi est disponible sur [ce lien](/pages/cloud/private-cloud/vm_encrypt-vnkp/).

### 9.2.6 6 Sécurité avancée avec HDS et PCI DSS

Le client peut bénéficier d'un pack sécurité avancée en activant les options HDS ou PCI DSS sur son infrastructure.

Le pack comprend plusieurs fonctionnalités telles que : [token validator](/pages/cloud/private-cloud/interface-secure/), accès via 2FA, session Timeout, Fail2ban, hids, forcer le protocole TLS v1.2, ..


## 10 - Réversibilité
Afin d'assurer la portabilité et réversibilité des données sur le service, OVHcloud permet au client d'importer et exporter ses données (machines virtuelles et fichiers de configuration du vCenter)  en toute autonomie sous un format de fichiers VMDK ou tout autre format supporté par l'hyperviseur VMware.  Il est également possible d'utiliser les API mis à disposition pour faciliter ces opérations.

Les principe de portabilité d'OVHcloud sont décrits dans sa propre politique de portabilité et ceux spécifiques au service Hosted Private Cloud by VMware sont indiqués dans sa politique spécifique disponible sur ce lien.




Afin d'assurer la portabilité et la réversibilité des données sur le service, OVHcloud permet au client d'exporter et importer ses données en toute autonomie.
Les principe de portabilité d'OVHcloud sont décrits dans sa propre [politique de portabilité](/pages/account/reversibility/00-global-reversibility-policy) et ceux spécifiques au service Serveurs Dédiés sont indiqués dans sa [politique spécifique](/pages/account/reversibility/01-dedicated-servers-reversibility-policy).

### 10.1 - Effacement des données métier

Suite au décommissionnement du service par le client et avant l'extraction du disque dur du rack, un robot d'effacement applique une procédure d'effacement sécurisé des données basée sur le standard NIST SP 800-88 r1 niveau 'Purge'.
En cas de contraintes ou limitations techniques sur certaines gammes de disques durs et quand le niveau 'Purge' ne peut s'appliquer, c'est l'effacement au niveau 'Clear' qui s'exécute.

### 10.2 - Effacement des données techniques

Suite au décommissionnement du service par le client, OVHcloud procède à la libération des ressources qui lui sont allouées, comme les adresses IP et la suppression des configurations réalisées lors de la livraison du service.


