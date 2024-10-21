---
title: "Spécifications de sécurité du service VMware on OVHcloud"
excerpt: "Découvrez les particularités et fonctions de sécurité ainsi que les bonnes pratiques pour l'utilisation des service VMware on OVHcloud"
updated: 2024-05-21
---

## Objectif

En complément au [modèle de responsabilité entre OVHcloud et le client sur le service VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/responsibility-sharing), cette page a pour objectif de présenter les particularités et fonctions de sécurité propres à ce service. Elle met aussi en avant des bonnes pratiques qui vous permettront de l'exploiter au mieux.

## 1 - Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- PCI DSS
- SOC 1 type II
- SOC 2 type II
- CSA type II
- C5 type II
- CISPE

## 2 - Bonnes pratiques à déployer sur le service

### 2.1 - Recommandations à la prise en main du service

Une fois le service délivré et après réception de vos identifiants de connexion à son Hosted Private Cloud, OVHcloud vous recommande de changer vos identifiants selon les instructions de [ce guide pour la connexion à l'interface vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion).

Il convient également de procéder au durcissement de votre Système d'Exploitation suite à la création des machines virtuelles.

D'autres guides sont disponibles dans le corpus documentaire dédié au service sur [ce lien](/products/hosted-private-cloud-hosted-private-cloud-powered-by-vmware) pour vous assister à la prise en main et l'exploitation du service.

### 2.2 - Scan de vulnérabilités

Vous êtes autorisé à réaliser des scans de vulnérabilités sur le service que vous avez souscrit chez OVHcloud, depuis n'importe quel service. OVHcloud n'a pas besoin d'être prévenu préalablement aux tests. Les mesures de sécurité déployées par OVHcloud (notamment les protections réseau) ne sont pas désactivables, à plus forte raison dans le cadre de ce type d'audits qui doivent établir une vision claire de la sécurité de l'infrastructure du client.

Vous n'êtes pas autorisé à utiliser votre service pour scanner d'autres infrastructures.

## 3 - Garanties de service

### 3. SLA

Reprise des SLA des conditions particulières par composante du service.

| **Composant** | **SLA** | **Méthode de calcul** | **Dédommagement** |
| --- | --- | --- | --- |
| L'ensemble du service | Le taux de disponibilité mensuel est de 99,95 % pour l'ensemble du service | Nombre total de minutes du mois considéré, déduction faite du nombre de minutes d’indisponibilité du mois concerné, le tout divisé par le nombre total de minutes du mois considéré. Pour le calcul des dédommagements, le temps d’indisponibilité est calculé à partir de l’ouverture du ticket incident, jusqu'à la résolution du dysfonctionnement. | 1. Si le taux de disponibilité mensuel est < 99,95 %, crédit de 10% du prix du service impacté. <br>2. Si le taux de disponibilité mensuel est < 99%, crédit de 30% du prix du service impacté |

Les SLA pour les options telles que Veeam Managed Backups peuvent être différents, vous pouvez vous référer aux conditions particulières du service pour plus de détails.

## 4 - Backups

### 4.1 - Sauvegardes techniques

Les sauvegardes techniques (ou de configuration) sont les sauvegardes réalisées par OVHcloud pour assurer les niveaux de service prévus au contrat. Ces sauvegardes ne sont pas prévues pour être activées à la demande du client.

### 4.2 - Sauvegardes métier

Liste des fonctionnalités et options de backups adaptées au service :

| **Nom de l'option** | **Granularité** | **RPO** | **RTO** | **Documentation et tutoriels**| **chiffrement des jobs**|
| --- | --- | --- | --- | --- | --- |
| Veeam Managed Backup(Legacy) | la VM | ∅ | ∅ | ∅| Non |
| Veeam Managed Backup(Standard) | la VM | dépend de la date de la dernière sauvegarde et de la durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service) | Oui |
| Veeam Managed Backup(Advanced) | la VM | dépend de la date de la dernière sauvegarde et de la durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service) | Oui |
|Veeam Managed Backup(Premium) | la VM | dépend de la date de la dernière sauvegarde et durée de résolution de l'incident | dépend de la taille de la VM sauvegardée | [Activer et utiliser Veeam Managed Backup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service) | Oui |

## 5 - Logs

Le client bénéficiant d'une infrastructure Hosted Private Cloud a la possibilité de récupérer les logs de connexion à l'espace client et les évènements enregistrés sur le service qu'il opère.

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

| **Source** | **Contenu** | **Liens** |
| --- | --- | --- |
| Control Plane (Espace Client) | Logs sur toutes les interactions réalisées via des appels API lancés par les contacts administrateur, technique ou de facturation, sur les services auxquels ils ont accès. |- <https://api.ovh.com/console/#/me> (voir les appels `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br> [Tasks associated with this User](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task~GET) |
| Service | Historique des tâches, évènements sur le vCenter effectués par un client sur ses infrastructures. | Historique du vCenter : vSphere Client, onglet "Tasks et events" ou via via appel API pour certaines tâches : <br> [Tasks associated with this User](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task~GET) |
| Service | Logs des "support user" qui correspondent aux tâches, effectuées par un utilisateur d'OVHcloud créé à la volée, dans l'infrastructure du client pour le support et la gestion des incidents. | Historique du vCenter : vSphere Client, onglet "Tasks et events"|

## 6 - API

| **Nom** | **Capacités** | **Liens** |
| --- | --- | --- |
| Control Plane et service | Manipulation des comptes client et des services sur lesquels le compte a des droits de gestion du service | [API calls for Private Cloud](https://api.ovh.com/console/#/dedicatedCloud) |

## 7 - Comptes utilisateurs

### 7.1 - Control Plane

A travers votre espace client OVHcloud, vous avez la possibilité de gérer le service à l'aide de [trois contacts types](/pages/account_and_service_management/account_information/managing_contacts#definition).

Afin de référencer chaque client ayant souscrit à un ou plusieurs services, OVHcloud utilise un compte propriétaire avec un *NIC* interne. 

Pour renforcer l'accès au compte client, vous avez la possibilité d'activer [une authentification à double facteur (2FA)](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) ou l'[authentification SSO (Single Sign-On)](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs) en associant votre compte à un Active Directory externe..

Sur le service Private Cloud, avec le compte administrateur, vous avez la possibilité d'établir votre propre politique d'accès au vCenter, de créer des utilisateurs et leur affecter différents droits d'accès pour gérer les ressources, l'accès à l'interface vSphere et la gestion de la partie réseau privé et public. Le guide et les détails de configurations sont disponibles sur [ce lien](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/manager_ovh_private_cloud).

Pour une authentification plus robuste des utilisateurs disposant d'accès à vos Privates Cloud, il est possible d'activer l'authentification à double facteur (2FA), [disponible en option via les offres PCI-DSS et HDS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/utilisation_2FA).

Enfin, si vous disposez d'un serveur AD et souhaitez gérer les accès des utilisateurs du Private cloud via votre propre fournisseur d'identités, il est possible d'activer cette fonctionnalité.

### 7.2 - Data Plane

Vous êtes autonome pour créer les comptes *user* sur votre OS, une fois que vous avez les droits admin sur le service. 

## 8 - Antivirus

Une protection antivirus, avec des scans hebdomadaires, est déployée sur différents composants des infrastructures gérées par OVHcloud comme la SSL Gateway, la Private Gateway, la zone Master, etc.

Aucune protection n'est mise en place au niveau des VM déployées par un client. Il vous appartient donc d'installer votre propre logiciel antivirus et de le monitorer.

## 9 - Services disponibles à l'installation du Service

### 9.1 - Fourniture d'images de VM

OVHcloud met à disposition des clients des modèles de VM au format OVF. Ces templates de VM disposent d'un niveau de durcissement minimal. Le durcissement des OS Windows et Linux est celui d'une installation nominale de l’éditeur. Pour un durcissement avancé, OVHcloud recommande de se référer aux documentations de chaque éditeur.

Lors du déploiement d'une VM, vous avez également la possibilité d'importer sa propre image ISO.

### 9.2 - Fonctions de filtrage, chiffrement et autres options de sécurité

### 9.2.1 SSL Gateway

Les adresses IP d'un service Private Cloud sont publiques par défaut. La SSL Gateway est une passerelle qui permet à un client d'activer des fonctions de filtrage pour permettre à ses propres utilisateurs de se connecter à son infrastructure depuis Internet.

Elle offre également un service de Firewall/NAT que vous pouvez configurer via une *iptable*, un certificat pour sécuriser la connexion, un ProxyPass, du monitoring, un serveur SFTP et un script antivirus avec scan quotidien/mise à jour.

### 9.2.2 Private Gateway

La PrivateGateway est est une option disponible sur un service Private Cloud et activée par défaut sur une infrastructure qualifiée SecNumCloud. Elle vous permet de gérer l'accès à votre infrastructure via une IP privée (interface vSphere, vScope, etc.).

Une fois déployée, la PrivateGateway agit comme un proxy pour accéder à l'infrastructure à partir du réseau vRack. L'ensemble des règles établies dans SSL Gateway (iptable) seront copiées vers la PrivateGateway pour le filtrage. L'accès via les IP publiques sera désactivé et le domaine du Private Cloud sera accessible uniquement via cette Gateway.

Le mode opératoire pour activer la Private Gateway est disponible sur ce lien : [Activer la Private Gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway).

### 9.2.3 NSX

Des fonctionnalités de filtrage réseaux plus fines comme la micro-segmentation, un pare-feu distribué, du Load Balancing, etc. sont disponibles via l'offre SDN de VMware basée sur la solution NSX.

Le guide de démarrage avec la solution NSX est disponible sur [ce lien](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps). Il est accompagné d'autres tutoriels dans l'espace documentaire pour faciliter l'utilisation des autres fonctionnalités.

### 9.2.4 Chiffrement des données

Sur une infrastructure qualifiée SecNumcloud ou hors SecNumcloud, vous avez la possibilité d'appliquer un chiffrement au repos en utilisant la brique vNKP disponible sur le service pour chiffrer les VM ou au niveau des datastores d'un Cluster vSAN.

La même opération peut être réalisée si vous optez pour l'utilisation d'un KMS externe à l'offre OVHcloud.

Le mode d'emploi est disponible sur [ce lien](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp).

### 9.2.5 Sécurité avancée avec HDS et PCI DSS

Vous pouvez bénéficier d'un pack sécurité avancée en activant les options HDS ou PCI DSS sur votre infrastructure.

Le pack comprend plusieurs fonctionnalités telles que [token validator](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/interface-secure), accès via 2FA, session Timeout, Fail2ban, hids, forcer le protocole TLS v1.2, etc.

## 10 - Réversibilité

Afin d'assurer la portabilité et la réversibilité des données sur le service, OVHcloud vous permet d'importer et exporter vos données (machines virtuelles et fichiers de configuration du vCenter) en toute autonomie sous un format de fichiers VMDK ou tout autre format supporté par l'hyperviseur VMware. Il est également possible d'utiliser les API et l'[outil OVF Tool](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_tool) mis à disposition pour faciliter ces opérations.

Les principe de portabilité d'OVHcloud sont décrits dans sa propre [politique de portabilité](/pages/account_and_service_management/reversibility/00-global-reversibility-policy) et ceux spécifiques au service Hosted Private Cloud by VMware sont indiqués dans sa [politique spécifique au service](/pages/account_and_service_management/reversibility/02-hosted-private-cloud-reversibility-policy).

### 10.1 - Effacement des données métier

Suite au décommissionnement du service par le client et avant l'extraction du disque dur du rack, un robot d'effacement applique une procédure d'effacement sécurisé des données basée sur le standard NIST SP 800-88 r1 niveau 'Purge'. En cas de contraintes ou limitations techniques sur certaines gammes de disques durs et quand le niveau 'Purge' ne peut s'appliquer, c'est l'effacement au niveau 'Clear' qui s'exécute.

### 10.2 - Effacement des données techniques

Suite au décommissionnement du service par le client, OVHcloud procède à la libération des ressources qui lui sont allouées et la suppression des configurations réalisées lors de la livraison du service.

## 11 - Représentation des garanties HDS

> [!primary]
>
> Ce tableau est publié préalablement à la certification effective d'OVHcloud sur la version 2024 du référentiel HDS. Il permet aux clients d'OVHcloud d'alimenter leur propre démarche de conformité par rapport au référentiel HDS version 2024. OVHcloud a réalisé et publié ce tableau en s'efforçant d'appliquer au mieux les différentes exigences du référentiel. Les versions vérifiées par les auditeurs ont été mises en ligne avant février 2024.
>

| **Raison sociale de l'acteur** | **Rôle dans le cadre de la prestation d'hébergement** | **Certfié HDS** | **Qualifié SecNumCloud 3.2** | **Activités d'hébergement sur laquelle l'acteur intervient** | **Exigence n°29 du référentiel HDS** | **Exigence n°30 du référentiel HDS** |
| --- | --- | --- | --- | --- | --- |--- |
| OVHcloud | Hébergeur | Oui | Non | 1° La mise à disposition et le maintien en condition opérationnelle des sites physiques permettant d'héberger l'infrastructure matérielle du système d'information utilisé pour le traitement des données de santé.<br>2° La mise à disposition et le maintien en condition opérationnelle de l'infrastructure matérielle du système d'information utilisé pour le traitement de données de santé.<br>3° La mise à disposition et le maintien en condition opérationnelle de l'infrastructure virtuelle du système d'information utilisé pour le traitement des données de santé.<br>4° La mise à disposition et le maintien en condition opérationnelle de la plateforme d'hébergement d'applications du système d'information.<br>6° La sauvegarde des données de santé. | Oui<br> Pays concerné couvert par une décision d’adéquation au sens de l’article 45 du RGPD : Canada. | Non(1) |

(1) : OVHcloud respecte l'ensemble des exigences du chapitre 19.6 du référentiel SecNumCloud relatif à la protection vis-à-vis du droit extra-européen.
