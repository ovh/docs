---
title: 'VMware on OVHcloud - Les opérations de maintenance'
excerpt: 'Apprenez-en plus sur les opérations effectuées pour assurer la fiabilité et la performance de vos équipements Hosted Private Cloud VMware on OVHcloud'
updated: 2024-06-26
flag: hidden
---
<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!success]
> 
> Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.
>

## Objectif

**Ce guide vous offre des éclaircissements sur les opérations de maintenance effectuées par les équipes de OVHcloud.**

## Prérequis

- Être connecté à [l'espace client OVHcloud](/links/manager)
- Être contact administrateur ou technique de l'infrastructure [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).

## En pratique

Les opérations de maintenance au sein de OVHcloud témoignent d'un savoir-faire de la part des équipes internes. Celui-ci a été perfectionné au fil des années afin de garantir la fiabilité et la performance des équipements.

### Accéder aux opérations Hosted Private Cloud

Connectez-vous à votre [espace client OVHcloud](/links/manager) avec un compte administrateur et cliquez sur l'onglet `Hosted Private Cloud`{.action}.

Sélectionnez votre infrastructure sous `VMware`{.action} puis cliquez sur l'onglet `Operations`{.action}. 

![Maintenance Operation](/pages/assets/screens/manager/hosted_private_cloud/VMware/private_cloud/pcc/Maintenance.png){.thumbnail}

Pour connaitre les opérations en cours ou rafraichir les anciennes opérations, utilisez le bouton `Rafraîchir`{.action} situé en haut à droite du tableau des opérations.

Vous pouvez modifier la date de traitement d'une opération en cours en cliquant sur le bouton `...`{.action} à droite d'une opération, puis sur `Modifier la date de traitement`{.action}.

Pour plus d'informations sur la replanification d'une opération de maintenance, consultez le guide « [Comment replanifier une opération d'une maintenance sur votre Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling) ».

Vous pouvez aussi filtrer les opérations par statut via le menu déroulant situé à gauche au dessus du tableau.

![Maintenance Operation Filtre](/pages/assets/screens/manager/hosted_private_cloud/VMware/private_cloud/operation/Maintenance-filter.png){.thumbnail}

### Accès aux details des opérations de maintenance

/// details | Comment accéder aux details des opérations de maintenance Hosted Private Cloud VMware on OVHcloud ?

#### Depuis l'espace client OVHcloud

Voici un exemple d'une opération visible dans la section `Operations`{.action} de l'espace client OVHcloud :

| Référence | Nom | Type | Progression | Commentaire | Services affectés | Créé de | Créé par | Traitement | Fin | Mis à jour |
|---|---|---|---|---|---|---|---|---|---|---|
| 44XXXXXX  | provisionVcsaSolo | Générique | Terminé | Provisions infrastructure management for customer | Tâche : 44XXXXXX | Information indisponible  | Information indisponible | XX mai 2023 18:37:51 | XX mai 2023 18:37:XX | XX mai 2023 18:37:58 |


Un ID de référencement d'opération est toujours ajouté sur chaque opération, ainsi qu'un nom, un type, une progression, un commentaire, un service affectés, et des dates de traitement.

Ces noms et références sont bien évidemment différents pour chaque service OVHcloud (Bare Metal Cloud, Public Cloud, etc..) 

#### Depuis l'API OVHcloud :

> [!success]
> 
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

Exécutez l'appel API suivant pour obtenir la liste des opérations :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/robot
>
>
> **Parameters:**
>
> - `serviceName` : La référence de votre PCC sous la forme, `pcc-XXX-XXX-XXX-XXX`.
>

Exemple de retour (e schéma de retour peut varier et être assez long en fonction de la taille de votre infrastructure) :

```shell
...
  "updateUser",
  maintenanceLinkAlreadyOrderedCertsToObjects,
  maintenanceFixTransportMode,
  maintenanceUpdateAntivirusConfiguration,
...
```

Pour avoir le détail de chaque robot, exécutez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/robot/{name}
>
>
> **Parameters:**
>
> - `serviceName` : La référence de votre PCC sous la forme `pcc-XXX-XXX-XXX-XXX`.
> - `name` : Le nom du robot, par exemple `maintenanceUpdateAntivirusConfiguration`.
>

**Retour :**

```shell
{
  "type": "task",
  "enabled": true,
  "name": "maintenanceUpdateAntivirusConfiguration",
  "criticity": "normal",
  "description": ""
}
```

///

## Details des opérations de maintenance Hosted Private Cloud

/// details | Un exemple d'opérations de maintenance au sein de Hosted Private Cloud VMware on OVHcloud.

| Nom des opérations de maintenance           | Objectif                                                                                                                                                                                                                                                                                                                                         | Raison                                                                  | Instructions préventives                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Impact                                                                                                                                                                                                                                                                                                   | Durée approximative                                                                                                         | Fréquence                                  | Peut être reprogrammé ? | Référence à une documentation technique |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|-------------------------|-----------------------------------------|
| **windowsUpdateOnPcc**                      | Mise à jour (update) Windows sur les machines virtuelles du control plane gérées par OVHcloud.                                                                                                                                                                                                                                                   | **Mise à jour de sécurité.**                                            | **Aucune.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - Maintenance effectuée seulement si Veeam et/ou les options Zerto sont souscrites. <br><br>- Control Plane indisponible* durant la fenêtre de maintenance.                                                                                                                                              | **00H30 pour Veeam. <br><br>00H30 pour Zerto.**                                                                             | **Mensuel.**                               | **Oui**                 |                                         | 
| **upgradeSwitch**                           | Mise à niveau logicielle (upgrade) des switchs à la dernière version validée par le département réseau OVHcloud.                                                                                                                                                                                                                                 | **Cycle de vie OVHcloud Arista <br><br> Patchs de sécurité.**           | **Vérification de l'hôte en double attachement (dual-attached).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | - Basculement de ToR (on Top of Rack) A (swith A) vers ToR (on Top of Rack) B (switch B).                                                                                                                                                                                                                | **01H30**                                                                                                                   | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |
| **maintenanceGenericUpgradePackages**       | Mise à niveau (upgrade) du système d'exploitation sur les machines virtuelles du control plane gérées par OVHcloud.                                                                                                                                                                                                                              | **Cycle de vie OVHcloud <br><br> Patchs de sécurité.**                  | **Aucune.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - Control plane indisponible (management) durant la fenêtre de maintenance.                                                                                                                                                                                                                              | **02H00**                                                                                                                   | **Mensuel (standard).**                    | **Oui**                 |                                         | 
| **maintenanceRenewAndDeploySslCertificate** | Vérification, commande et renouvellement des certificats SSL sur les machines virtuelles du control plane gérées par OVHcloud.                                                                                                                                                                                                                   | **Renouvellement des certificats SSL avant la date d'expiration.**      | **Aucune.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | - Control plane indisponible* (management) durant la fenêtre de maintenance.                                                                                                                                                                                                                             | **01H00**                                                                                                                   | **Trimestriellement (standard).**          | **Oui**                 |                                         |
| **maintenanceUpgradeHosts**                 | Mise à niveau logicielle (upgrade) d'ESXi à la dernière version proposée par OVHcloud. Cette maintenance peut installer des versions mineures ou majeures.                                                                                                                                                                                       | **Cycle de vie OVHcloud <br><br> Patchs de sécurité.**                  | Pendant cette maintenance, tous les hôtes peuvent être mis en mode maintenance et toutes les machines virtuelles peuvent être évacuées automatiquement. <br><br> Le client doit s'assurer qu'aucune des configurations suivantes n'empêche cette action : <br><br> - Aucun media ISO ou périphérique monté. <br><br> - Règles d'anti-affinité. <br><br> - Tout autre élément susceptible d’empêcher le déplacement d’une machine virtuelle. <br><br> Les produits tiers sont conformes et compatible à la nouvelle version ESXi. | - Une fois que les hôtes sont en mode maintenance : toutes les machines virtuelles sont automatiquement évacuées avec vMotion. <br><br>- Les hôtes sont redémarrés.                                                                                                                                      | **00H30 par hôte.**                                                                                                         | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |
| **maintenanceUpgradeVcenter**               | Mise à niveau (upgrade) logicielle de vCenter Server Appliance à la dernière version proposée par OVHcloud. Cette maintenance peut installer des versions mineures ou majeures. Les mises à niveau (upgrade) des options peuvent également être déclenchées (Veeam Managed, Zerto) pour s'assurer que la matrice de compatibilité est cohérente. | **Cycle de vie OVHcloud <br><br> Patchs de sécurité.**                  | Les logiciels tiers sont conformes à la nouvelle version de VCSA.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | - Control Plane indisponible* (management) durant la fenêtre de maintenance*.                                                                                                                                                                                                                            | **02H00** <br><br> (peut varier en fonction du nombre d'utilisateurs et du temps nécessaire à appliquer les autorisations). | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         | 
| **maintenanceUpgradeVrops**                 | Mise à niveau (upgrade) des machines virtuelles Aria Operations (appelée vROps auparavant) vers la dernière version proposée par OVHcloud                                                                                                                                                                                                        | **Cycle de vie OVHcloud Arista <br><br> Patchs de sécurité.**           | **Aucune.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - vROps est indisponible pendant la fenêtre de maintenance.                                                                                                                                                                                                                                              | **01H30**                                                                                                                   | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |
| **maintenanceUpgradeNsxt**                  | Mise à niveau (upgrade) de la version de NSX-T vers la dernière version proposée par OVHcloud.                                                                                                                                                                                                                                                   | **Cycle de vie OVHcloud de VMware <br><br> Mise à niveau de sécurité.** | **Ressources suffisantes (calcul et stockage) disponibles sur l'infrastructure du client pour héberger un Edge NSX (voir prérequis : [documentation officielle VMware NSX](https://docs.vmware.com/en/VMware-NSX/4.1/installation/GUID-22F87CA8-01A9-4F2E-B7DB-9350CA60EA4E.html){.external}). <br><br> La résilience est assurée sur l'infrastructure du client pour héberger les passerelles Edges NSX-T.                                                                                                                      | - Le control plane NSX-T n'est pas disponible pendant l'opération de mise à niveau.<br><br> Le vMotion des Edges peut subir une légère perturbation des flux (reconnexion nécessaire pour les applications "statefull").                                                                                 | **02H30**                                                                                                                   | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |
| **maintenanceUpgradeVeeamManaged**          | Mise à niveau (upgrade) des machines virtuelles du control plane Veeam gérées par OVHcloud (serveurs virtuels de sauvegarde et de réplication, backup proxy) vers la dernière version proposée par OVHcloud.                                                                                                                                     | **Cycle de vie OVHcloud de Veeam.**                                     | **Aucune.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - Les opérations de restauration et de sauvegarde ne peuvent pas être effectuées pendant la maintenance.                                                                                                                                                                                                 | **01H00**                                                                                                                   | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |
| **maintenanceUpgradeZvm**                   | Mise à jour (update) des machines virtuelles Zerto (Zerto Virual Manager, VRA) vers la dernière version proposée par OVHcloud.                                                                                                                                                                                                                   | **Cycle de vie Zerto de OVHcloud.**                                     | **Aucune.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - La console Zerto n'est pas disponible pendant la fenêtre de maintenance. <br><br> Toutes les opérations Zerto associées ne peuvent pas être effectuées (fail-over, gestion des VPG...). <br><br> - VRA est redéployé de sorte que la réplication est interrompue et que le RPO augmente momentanément. | **01H30**                                                                                                                   | **Basé sur le cycle de vie de l'éditeur.** | **Oui**                 |                                         |

* : Voir les explications ci-dessous.

## Glossaire

**Control Plane indisponible** : signifie que le VCSA (vCenter Server Appliance) ne peut pas être contacté. Par conséquent, tous les produits qui doivent atteindre VCSA ne fonctionneront pas.

Cela représente les produits/options suivants dans Hosted Private Cloud VMware on OVHcloud :

- **NSX-T** interface.
- **vROps** interface.
- **Veeam** Managé (pas d'opération de sauvegarde/restauration).
- **Zerto** interface (replication en continu).
- **Tanzu** Kubernetes Grid.

Tout autre produit de niveau que vous pouvez utiliser et qui nécessite **VCSA** sera également affecté.

## Explications sur le control plane

Le control plane (plan de contrôle) désigne la partie du système responsable de la gestion et du contrôle des ressources dans un environnement virtualisé. Plus précisément, le plan de contrôle est la couche logicielle qui gère les opérations et les décisions liées à la configuration, à la gestion des ressources, au suivi et à l'orchestration des machines virtuelles et de l'infrastructure associée.

- **Gestion des ressources** : il prend en charge la configuration et la gestion des ressources physiques (serveurs, stockage, mise en réseau) et virtuelles (machines virtuelles).
- **Orchestration** : il coordonne les opérations entre les différents composants de l'infrastructure, facilitant le déploiement, la migration et la gestion des machines virtuelles.
- **Monitoring** : il collecte des données sur les performances, l’état de santé et l’utilisation des ressources à des fins de monitoring et de reporting en temps réel.
- **Sécurité** : il gère les politiques de sécurité, y compris l'authentification, l'autorisation et le contrôle d'accès, assurant ainsi la sécurité des ressources virtualisées.
- **Automatisation** : il prend en charge l'automatisation des tâches répétitives, permettant aux administrateurs de définir des workflows et des stratégies automatisées.

En résumé, le plan de contrôle est la couche logicielle qui assure la gestion, la coordination et le contrôle centralisés.

## Aller plus loin

Pour plus d'informations sur la replanification d'une opération de maintenance, consultez le guide « [Replanification d'une opération de maintenance sur votre Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/maintenance-rescheduling) ».

Échangez sur le channel dédié Discord : <https://discord.gg/ovhcloud> ou rejoignez notre [communauté d'utilisateurs](/links/community).
