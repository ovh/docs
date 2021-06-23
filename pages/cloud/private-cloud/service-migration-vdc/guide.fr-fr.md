---
title: Migrer une infrastructure vers un nouveau vDC
routes:
    canonical: 'https://docs.ovh.com/fr/private-cloud/sddc-migration/'
excerpt: Découvrez comment gérer tous les aspects liés à la migration d'un vDC vers un autre vDC dans le même PCC
slug: vdc-migration
section: Premiers pas
order: 6
hidden: true
---

**Dernière mise à jour le 25/01/2021**

> [!warning]
>
> Le chemin de migration vDC n'est pas encore disponible car des mises à niveau et des opérations de maintenance sont en cours. Nous vous avertirons dès que cette migration sera possible.
>

## Objectif

La migration vers un nouveau vDC comporte deux aspects :

* L'infrastructure OVHcloud elle-même, qui inclut la côté client de l'administration d'une infrastructure.
* L'infrastructure VMware, qui inclut l'ensemble de l'écosystème VMware.

**Découvez comment couvrir tous les aspects liés tous les aspects de la migration d'une infrastructure OVHcloud préexistante vers un nouveau vDC.**

## Prérequis

* Une infrastructure PCC (SDDC)
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Hosted Private Cloud`{.action} puis `Private Cloud`{.action}.

## En pratique

Ce guide utilise les notions de **vDC d'origine** et de **vDC de destination**.

### Contexte OVHcloud

#### Sécurité

##### **Contexte de connexion au Hosted Private Cloud**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](../changer-la-politique-d-acces-au-vcenter/).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », il faut bien sûr appliquer les mêmes IPs de connexion sur le vDC de destination que sur le vDC d'origine.

##### **Utilisateurs du Hosted Private Cloud**

Dans le cycle de vie du vDC d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Vous devez donc les créer à nouveau sur le vDC de destination et leur attribuer les droits adéquats, en fonction de la configuration du vDC de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](../changer-les-droits-d-un-utilisateur/), [modifier le mot de passe d'un utilisateur](../changement-du-mot-de-passe-utilisateur/) et [associer un e-mail à un utilisateur](../associer-email-a-un-utilisateur/).

##### **KMS**

Cette option est à activer et configurer par vCenter et s'applique à n'importe quel vDC.
Si les machines virtuelles sont protégées par le chiffrement, elles restent protégées sur le vDC de destination.

##### **Certifications**

Ces options sont activées par vCenter et s'appliquent à n'importe quel vDC.

Si une option a été activée, elle reste disponible sur le vDC de destination.

#### Réseau

##### **vRack**

> [!warning]
>
> Des VMnetworks situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Vous pouvez, dans le cadre d'une migration, lier vos services Hosted Private Cloud au sein du même vRack. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

##### **Réseau public**

Les adresses IP publiques attachées au vDC d'origine seront automatiquement disponibles pour une utilisation dans le vDC de destination.

### Contexte VMware

#### Etape 1 : préparer votre vDC de destination

##### **1.1 HA**

La migration implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](../vmware-ha-high-availability/).

Voici une liste d'éléments à prendre en compte :

- Réglages de monitoring du host
- Réglages de monitoring des VM
- Contrôle d'admission
- Options HA avancées
- Remplacements de VM

**Conseils d'automatisation :**
L'applet de commande Powercli « Get-Cluster » renvoie des informations sur les paramètres de configuration HA et DRS qui peuvent être appliqués au cluster de destination avec l'applet de commande « Set-Cluster ».

##### **1.2 DRS**

La migration implique la reconfiguration de la fonction VMware DRS (Distributed Resource Scheduler), en particulier des règles d'affinité ou d'anti-affinité pour les groupes d'hôtes et de VMs. Consultez notre guide sur la [configuration de VMware DRS](../vmware-drs-distributed-ressource-scheduler-new/).

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation
- Groupes de VMs / d'hôtes
- Règles d'affinité / d'anti-affinité des VMs / hôtes
- Remplacements des machines virtuelles

**Conseils d'automatisation :** [Ce fil de discussion de la communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **1.3 Pools de ressources**

La migration nécessite la reconstruction des pools de ressources, notamment les réservations, les partages et les applications virtuelles. Cela s'applique également aux vApps et à toute configuration de commande de démarrage définie dans les vApps.

Pour plus d'informations, consultez la documentation de [VMware pour la gestion des pools de ressources](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Voici une liste d'éléments à prendre en compte:

- Paramètres des partages CPU/mémoire
- Réservations CPU/mémoire
- Option évolutive CPU/Memory
- Limites CPU/mémoire

**Conseils d'automatisation :** L'applet de commande Powercli « Get-ResourcePool » rassemble les informations de la liste de ressources partagées et l'applet de commande « New-ResourcePool » recrée la liste de ressources partagées sur le vDC de destination.

##### **1.4 Clusters des datastores**

Si des clusters de datastores sont présents dans le vDC d'origine, la migration peut nécessiter la recréation de ces clusters de datastores sur le vDC de destination, si le même niveau de structure et le SDRS sont nécessaires.

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation SDRS
- Espace SDRS, I/O, règle, stratégie, paramètres d'évacuation des VMs
- Règles d'affinité/anti-affinité SDRS
- Modifications des VMs SDRS

##### **1.5 vSAN**

Si vSAN était activé sur votre vDC d'origine, il sera nécessaire de l'activer à nouveau sur le vDC de destination. Consultez notre guide pour [mettre en œuvre l'hyperconvergence VMware avec vSAN](../vmware-vsan/).

##### **1.6 Réseaux vSphere**

La migration implique la recréation des groupes de ports virtuels de vRack sur le vDC de destination pour garantir la cohérence du réseau de VMs. Si des VLAN vRack sont en cours d'utilisation sur le vRack du vDC d'origine, ils peuvent être utilisés pour étendre le domaine L2 au vDC de destination afin de permettre un plan de migration plus échelonné. Pour plus d'informations, consultez notre guide sur l'[Utilisation du cloud privé dans un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

Voici une liste des éléments à prendre en compte:

- Type de VLAN de groupe de ports
- Paramètres de sécurité
- Paramètres de Teaming et de Failover
- Allocation des ressources réseau du client

Pour plus d'informations, consultez le guide OVHcloud sur [comment créer un V(x)LAN dans un vRack](../creation-vlan-vxlan/#vlan-vrack) et la documentation de VMware sur [comment modifier les paramètres des groupes de ports distribués](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

**Conseils d'automatisation :** L'applet de commande Powercli « Export-VDPortGroup » peut récupérer des informations de Portgroups virtuels distribués qui peuvent ensuite être importées dans le Distributed Switch de destination à l'aide de l'applet de commande « New-VDPortgroup -BackupPath ».

##### **1.7 Configuration de Veeam Backup**

Si l'application Veeam fournie par OVHcloud est actuellement utilisée pour sauvegarder les VMs sur le vDC d'origine, il sera nécessaire d'utiliser l'API OVHcloud pour vérifier à nouveau les tâches de sauvegarde après la migration des machines virtuelles sur le vDC de destination.

Voici comment procéder:

1\. Activez la sauvegarde pour le nouveau vDC.

2\. Migrez les machines virtuelles du vDC d'origine vers le vDC de destination.

3\. Exécutez l'API OVHcloud pour vérifier à nouveau la date de sauvegarde:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
>

4\. Répétez les étapes 2 et 3 pour toutes les machines virtuelles dont les sauvegardes sont activées et qui ont été migrées vers le nouveau vDC.

5\. Désactivez Veeam Backup sur l'ancien vDC.

##### **1.8 Organisation de l'inventaire (facultatif)**

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le vDC de destination.

**Conseils d'automatisation :** Utilisez l'applet de commande Powercli « Get-Folder » pour collecter les informations sur le dossier et l'applet de commande « New-Folder » pour recréer le dossier sur le Hosted Private Cloud de destination.

##### **1.9 NSX**

###### **1.9.1 Zone de transport VXLAN**

Que les VXLANs ou les DLRs soient utilisés ou pas dans le vDC d'origine, il sera nécessaire d'étendre la ou les zones de transport lors de la migration depuis le vDC d'origine vers le vDC de destination si des NSX Edges sont en cours d'utilisation. Cela permettra de créer des ID réseau VXLAN à l'échelle du PCC, qui faciliteront la migration Edge

La zone de transport VXLAN détermine les limites d'un réseau soutenu par VXLAN et le routage d'un DLR. L'extension des zones de transport garantit que les mêmes réseaux VXLAN et les mêmes DLR sont disponibles dans les vDC d'origine et de destination.
Pour ce faire, vous devez modifier la zone de transport actuelle afin d'inclure les nouveaux clusters qui se trouvent dans le vDC de destination.

Pour ce faire, suivez les étapes suivantes :

Dans le client vSphere, rendez-vous dans `Networking and Security`{.action}, puis dans `Installation and Upgrade`{.action}.

Cliquez sur l'onglet `Logical Network Settings`{.action}, puis sur l'onglet `Transport Zones`{.action}.

Sélectionnez alors une zone de transport et cliquez sur l'option `Connect Clusters`{.action}.

Sélectionnez le ou les nouveaux clusters qui se trouvent dans le vDC de destination et choisissez `Save`{.action}.

Répétez cette opération pour toutes les zones de transport en cours d'utilisation.

###### **1.9.2 NSX Edges**

Pour migrer une gateway Edge, nous devons demander au Manager NSX de redéployer la gateway Edge dans le vDC de destination. Cela permet d'assurer la cohérence au sein de la base de données du Manager NSX. Pour ce faire, toutes les interfaces d'une gateway Edge doivent être connectées aux réseaux qui ont un object ID valable sur tout le PCC. Les VXLANs créés lors de l'extension de la zone de transport seront utilisés dans ce but.

> [!primary]
>
> Dans ce guide, la haute disponibilité (HA) est désactivée avant la migration de la gateway NSX Edge. Cela permet de réduire les temps d'inactivité. Il est possible de migrer une gateway Edge avec la HA activée, mais le temps d'inactivité sera plus long puisque deux Edges NSX devront alors être migrées au lieu d'une seule.
>

> **Prérequis :**
>
> - Si des VLANs vRack sont en cours d'utilisation, assurez-vous que les VLANs sont recréés dans le vDC de destination et que le vDC d'origine et de destination font partie du même vRack. Cela permettra la communication L2 entre les vDC.
>
> - Il est conseillé de créer un réseau VXLAN de nom comparable pour tout réseau VLAN qui est utilisé sur le NSX Edge. Pour éviter toute confusion lors d'allers et retours, il est recommandé d'ajouter un suffixe au nom des réseaux VXLAN temporaires (_temp, par exemple).
>

Vous pouvez migrer un NSX Edge en suivant ces étapes :

1\. Dans le client vSphere, accédez à `Networking and Security`{.action}.

2\. Accédez à `NSX Edges`{.action}.

3\. Choisissez le NSX Edge à migrer.

4\. Cliquez sur l'onglet `Configure`{.action}.

5\. Cliquez sur l'onglet `High Availability`{.action}.

6\. Cliquez sur `Edit`{.action}.

7\. Affectez la valeur **Disabled** à l'option « HA Status » et attendez la fin de la tâche.

8\. Cliquez sur l'onglet `Interfaces`{.action}.

9\. L'objectif ici est de basculer toute interface connectée à un portgroup VLAN, vers un portgroup VXLAN (par exemple, le VM Network ou tout autre groupe de ports vRack).

> [!primary]
>
> - Prenez note des réseaux VLAN correspondant aux nouveaux réseaux VXLAN.
>
> - Toute VM passant d'un réseau VLAN  à un réseau temporaire VXLAN subira une déconnexion du réseau.
>

10\. Cliquez sur l'onglet  `Appliance Settings`{.action}.

11\. Sous l'en-tête `Edge Appliance VMs`, sélectionnez la roue crantée et cliquez sur  `Edit`{.action}.

12\. Indiquez ici les paramètres pointant vers le nouveau vDC et cliquez sur `Save`{.action}.

13\. La gateway Edge sera redéployée dans le vDC de destination.

14\. Une fois la tâche de redéploiement terminée, cliquez sur l'onglet `Configure`{.action}.

15\. Cliquez sur l'onglet `Interfaces`{.action}.

16\. L'objectif ici est de rétablir tout réseau VLAN qui a été modifié en réseau VXLAN à l'étape 9, et de revenir au réseau VLAN correct qui existe dans le nouveau vDC.

17\. Répétez cette opération pour tous les autres NSX Edge.

###### **1.9.3 Routage logique distribué NSX**

Une fois que la zone de transport NSX a été étendue au nouveau vDC, le routage logique distribué est disponible dans les hôtes ESXi sur le vDC de destination.

Les routeurs logiques distribués NSX ne doivent être migrés que lorsqu'une VM de contrôle est déployée en appui du DLR qui facilite le routage dynamique.

Si une VM de contrôle est déployée, suivez les étapes de migration NSX Edge ci-dessus.

###### **1.9.4 Pare-feu distribué NSX**

Le pare-feu distribué NSX protège automatiquement l'intégralité du vDC. Ainsi, tout nouveau vDC sera également protégé.

Cependant, il est extrêmement important de comprendre que les objets placés dans le pare-feu distribué correspondront à l'ID d'objet significatif en local. Par exemple, si un groupe de ports VLAN vRack est utilisé dans une règle dans le pare-feu distribué, il référencera le groupe de ports à partir du vDC d'origine uniquement et non à partir d'un groupe de ports vRack recréé dans le vDC de destination.

Il sera nécessaire de vérifier si le pare-feu distribué contient des objets significatifs en local et de modifier le pare-feu distribué afin qu'il puisse également voir les objets dans le nouveau vDC. Par exemple, une règle qui utilise un groupe de ports VLAN vRack à partir du vDC d'origine peut être modifiée pour utiliser à la fois le groupe de ports VLAN vRack d'origine et le nouveau groupe de ports VLAN vRack dans le vDC de destination.

Les objets devant être considérés :

- Clusters
- Datacenters
- Groupes de ports distribués
- Groupe de ports Legacy
- Resource Pool
- vApp

#### Etape 2 : migration des VM

Comme le vDC d'origine et le vDC de destination se trouvent dans le même vCenter, VMware VMotion peut être utilisé à chaud ou à froid pour migrer des VMs.

**Hot VMotion** peut être utilisé lorsque le chipset du CPU est le même entre la source et la destination (par exemple Intel à Intel).

**Cold VMotion** peut être utilisé lorsque le chipset du CPU est différent entre la source et la destination (par exemple, AMD à Intel).

Voici une liste des aspects à prendre en compte:

- Chipsets de CPU hôte ESXi sur les vDC d'origine et de destination
- Modes EVC sur les clusters d'origine et de destination

> [!primary]
> Il est recommandé de tester le chemin de migration avec des VMs à faible impact ou de tester les VMs avant la migration de production.
>

#### Étape 3 : Tâches de post-migration

##### **Règles d'affinité**

Les règles d'affinité sont basées sur des objets de VM de sorte que les règles ne peuvent être créées qu'après la migration des VMs vers le vDC de destination. Une fois la migration terminée, les règles d'affinité peuvent être réappliquées sur le vDC de destination.

**Conseils d'automatisation :** [Ce fil de discussion de communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
