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

**Dernière mise à jour le 19/10/2021**

> [!warning]
>
> Le chemin de migration vDC n'est pas encore disponible car des mises à niveau et des opérations de maintenance sont en cours. Nous vous avertirons dès que cette migration sera possible.
>

## Objectif

La migration vers un nouveau vDC comporte deux aspects :

* L'infrastructure OVHcloud elle-même, qui inclut la côté client de l'administration d'une infrastructure.
* L'infrastructure VMware, qui inclut l'ensemble de l'écosystème VMware.

**Découvez comment couvrir tous les aspects liés à la migration d'une infrastructure OVHcloud préexistante vers un nouveau vDC.**

## Prérequis

* Une infrastructure PCC (SDDC ou DC)
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Hosted Private Cloud`{.action}.

## En pratique

Ce guide utilise les notions de **vDC d'origine** et de **vDC de destination**.

### Contexte OVHcloud

#### Ajout d'un nouveau vDC de destination

Vous pouvez ajouter un vDC de destination en procédant comme suit :

1\. Vérifiez que votre datacenter est éligible à la migration vers la plage de destination :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/commercialRange/compliance
>

**Résultat attendu :** dedicatedCloud.compliantRanges\[]

2\. Vérifiez parmi vos services ceux qui peuvent être migrés :

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee
>

**Résultat attendu :** liste des services éligibles à la migration.

3\. Visualisez les gammes commerciales auxquelles vous pouvez souscrire :

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}
>

**Résultat attendu :** order.cart.GenericProductDefinition\[]

4\. Vérifiez que vous pouvez effectuer une migration avec vos serviceName et planCode pour la plage de destination :

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Résultat attendu :** order.upgrade.OperationAndOrder

5\. Création de la commande :

> [!api]
>
> @api {POST} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Résultat attendu :** order.upgrade.OperationAndOrder

Cet appel API génère un bon de commande qui doit être validé. Si vous n'avez pas de moyen de paiement, merci de contacter le support ou votre Account Manager pour le faire valider.

> [!primary]
>
> Tant que vous n’aurez pas attribué les autorisations nécessaires aux utilisateurs sur le nouveau vDC, vous ne pourrez pas voir le nouveau vDC dans le client vSphere.
>

#### Ajout de nouvelles ressources

Vous pouvez procéder à la commande de nouvelles ressources dans le nouveau vDC de destination en suivant ce [guide d'informations sur la facturation Private Cloud (EN)](https://docs.ovh.com/gb/en/private-cloud/information_about_dedicated_cloud_billing/#add-resources-billed-monthly).

#### Conversion d'un datastore en datastore global

Un datastore global est un datastore monté sur l’ensemble des clusters / datacentres virtuels d’une infrastructure VMware, c’est-à-dire mutualisé entre le vDC d'origine et le vDC de destination :

Exécutez l'API OVHcloud pour vérifier la compatibilité des datastores. Nous vous recommandons de sélectionner les datastores commandés dans le nouveau vDC, les anciens datastores peuvent ne pas être compatibles.

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible
>

**Résultat attendu :** boolean

Si le retour API est FALSE, vos datastores ne sont pas compatibles, vous devrez commander de nouveaux datastores et utiliser VMware Storage vMotion. À cet effet, consultez nos guides « [Informations sur la facturation Private Cloud (EN)](https://docs.ovh.com/gb/en/private-cloud/information_about_dedicated_cloud_billing/#add-resources-billed-monthly) » et « [VMware Storage vMotion](https://docs.ovh.com/fr/private-cloud/vmware-storage-vmotion-new/) ».

Si le retour API est TRUE, vous pouvez procéder à la conversion en datastore global.

Exécutez l'API OVHcloud pour vérifier la compatibilité des datastores :

> [!api]
>
> @api {POST}  /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal
>

**Résultat attendu :** Informations de tâche

#### Sécurité

##### **Contexte de connexion au Hosted Private Cloud**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](../changer-la-politique-d-acces-au-vcenter/).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », le nouveau vDC héritera de la politique d'accès utilisée par le vDC d'origine.

##### **Utilisateurs du Hosted Private Cloud**

Dans le cycle de vie du vDC d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. 
Ces utilisateurs seront également présents sur le nouveau vDC mais n'auront aucun droit sur ce nouveau vDC. Vous devrez donc attribuer les droits appropriés aux utilisateurs, en fonction de la configuration du vDC de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](../changer-les-droits-d-un-utilisateur/), [modifier le mot de passe d'un utilisateur](../changement-du-mot-de-passe-utilisateur/) et [associer un e-mail à un utilisateur](../associer-email-a-un-utilisateur/).

##### **Option de sauvegarde et de PRA **

Cette option est à activer et à configurer par vDC.
Vous devez activer l’option concernée sur le nouveau vDC.

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

Par défaut, dans le cadre d'une migration, le nouveau vDC sera lié au même vRack que le vDC d'origine. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

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

1\. Dans le client vSphere, rendez-vous dans `Networking and Security`{.action}, puis dans `Installation and Upgrade`{.action}.

2\. Cliquez sur l'onglet `Logical Network Settings`{.action}, puis sur l'onglet `Transport Zones`{.action}.

3\. Sélectionnez alors une zone de transport et cliquez sur l'option `Connect Clusters`{.action}.

4\. Sélectionnez le ou les nouveaux clusters qui se trouvent dans le vDC de destination et choisissez `Save`{.action}.

5\. Répétez cette opération pour toutes les zones de transport en cours d'utilisation.

Vous pouvez également créer de nouveaux réseaux VXLAN en suivant ces étapes :

1\. Dans le client vSphere, rendez-vous dans `Networking and Security`{.action}, puis dans `Logical Switches`{.action}.

2\. Cliquez sur `+ Add`{.action}.

3\. Donnez un nom au Switch logique/VXLAN et choisissez la zone de transport.

4\. Cliquez sur `Add`{.action}.

###### **1.9.2 NSX Edges**

Pour migrer une gateway Edge, nous devons demander au Manager NSX de redéployer la gateway Edge dans le vDC de destination. Cela permet d'assurer la cohérence au sein de la base de données du Manager NSX. Pour ce faire, il est nécessaire que toutes les interfaces d’une Edge gateway soient attachées aux VXLANs.

> [!primary]
>
> Dans ce guide, la haute disponibilité (HA) est désactivée avant la migration de la gateway NSX Edge. Cela permet de réduire les temps d'inactivité. Il est possible de migrer une gateway Edge avec la HA activée, mais le temps d'inactivité sera plus long puisque deux Edges NSX devront alors être migrées au lieu d'une seule.
>

> **Prérequis :**
>
> - Si des VLANs vRack sont en cours d'utilisation, assurez-vous que les VLANs sont recréés dans le vDC de destination et que le vDC d'origine et de destination font partie du même vRack. Cela permettra la communication L2 entre les vDC.
>
> - Pour la migration Edge, tous les portgroups VLAN (y compris le VM Network) seront basculés vers des portgroups VXLAN. Le Edge sera ensuite migré vers le nouveau vDC. Enfin, une nouvelle bascule vers des portgroups VLAN sera effectuée. Nous vous conseillons de garder une trace des réseaux qui ont été basculés.
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

9\. L'objectif ici est de basculer toute interface connectée à un portgroup VLAN, vers un portgroup VXLAN. Par exemple :

- Etape 1 - Sélectionnez l'interface qui est connectée au VM Network (ou tout autre portgroup VLAN)
- Etape 2 - Cliquez sur `Edit`{.action}.
- Etape 3 - Cliquez sur l'icône « Crayon » à côté du champ « Connected to ».
- Etape 4 - Dans l'onglet « Logical switch », choisissez un réseau VXLAN temporaire auquel connecter cette interface. **Prenez note du mappage VLAN à VXLAN**.
- Etape 5 - Cliquez sur `OK`{.action}.
- Etape 6 - Cliquez sur `Save`{.action}.
- Etape 7 - Répétez cette opération pour tous les autres portgroups VLAN.

> [!primary]
>
> - Prenez note des réseaux VLAN correspondant aux nouveaux réseaux VXLAN.
>
> - Toute VM passant d'un réseau VLAN  à un réseau temporaire VXLAN subira une déconnexion du réseau.
>

10\. Une fois tous les réseaux VLAN transformés en réseaux VXLAN, cliquez sur l'onglet  `Appliance Settings`{.action}.

11\. Sous l'en-tête `Edge Appliance VMs`, sélectionnez la roue crantée et cliquez sur  `Edit`{.action}.

12\. Indiquez ici les paramètres pointant vers le nouveau vDC et cliquez sur `Save`{.action}.

13\. La gateway Edge sera redéployée dans le vDC de destination.

> [!primary]
>
> Si vous voyez les détails de deux edge dans la section « Edge Appliance VMs » même si vous avez désactivé HA, vous devrez soit répéter les étapes ci-dessus pour migrer cette edge « fantôme », soit cliquer sur la roue crantée pour cette edge fantôme et « non déployée » et cliquer sur `Supprimer`{.action}.

14\. Une fois la tâche de redéploiement terminée, cliquez sur l'onglet `Configure`{.action}.

15\. Cliquez sur l'onglet `Interfaces`{.action}.

16\. L'objectif ici est de rétablir tout réseau VLAN qui a été modifié en réseau VXLAN à l'étape 9, et de revenir au réseau VLAN correct qui existe dans le nouveau vDC.

17\. Réactivez HA sur la Edge.

18\. Répétez cette opération pour tous les autres NSX Edge.

> [!primary]
>
> Si vous avez migré la Edge alors que HA était activé et que vous rencontrez des problèmes de connectivité, il est recommandé de basculer les edge HA et de tester à nouveau. Pour ce faire, accédez à `Configure`{.action}, `Appliance Settings`{.action} et sélectionnez la roue crantée de la edge active, puis sélectionnez `Set Admin State Down`{.action}. Testez à nouveau puis repassez le statut admin à « Up ».
>

###### **1.9.3 Routage logique distribué NSX**

Une fois que la zone de transport NSX a été étendue au nouveau vDC, le routage logique distribué est disponible dans les hôtes ESXi sur le vDC de destination.

Les routeurs logiques distribués NSX ne doivent être migrés que lorsqu'une VM de contrôle est déployée en appui du DLR qui facilite le routage dynamique.

Si une VM de contrôle est déployée, suivez les étapes de migration NSX Edge ci-dessus.

Notez qu’il n’est pas nécessaire de changer d’interface car les DLR **doivent** déjà se connecter aux VXLANs.

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

##### **1.10 Zerto Replication**

Zerto Replication est configuré au niveau du vDC. Afin de protéger la charge de travail sur le nouveau vDC, certaines actions sont nécessaires.

> **Prérequis :**
>
> - Avoir un nouveau vDC
> - Disposer sous le nouveau vDC d’un cluster host avec au moins deux (2) hosts
> - Avoir sous le nouveau vDC un datastore accessible depuis les 2 hosts
> - Avoir activé Zerto Replication sur le nouveau vDC
>

Exécutez l'API OVHcloud pour préparer la migration :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration
>

`{datacenterId}` est le **nouvel** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Une tâche est lancée sur l'infrastructure pour déployer vRA sur chacun des hosts du nouveau vDC.

Ensuite, Zerto Replication fonctionnera sur les deux datacentres :

- l'ancien est toujours en cours d'exécution et protège votre charge de travail
- le nouveau est prêt à accueillir votre charge de travail

L'étape suivante dépend de la configuration actuelle par [groupe de protection virtuelle](../zerto-virtual-replication-vmware-vsphere-drp/) :

- source de la réplication
- destination de la réplication

##### **1.10.1 VPG comme Source**

Avec la migration sur le nouveau vDC, Zerto continuera de protéger la charge de travail avec vRA déployé sur le cluster et les hôtes cibles.

##### **1.10.1 VPG comme destination**

Malheureusement, il n'y a aucun moyen de mettre à jour la configuration de VPG, la seule option est de supprimer le VPG et d'en créer un nouveau.

#### Etape 2 : migration des VM

Comme le vDC d'origine et le vDC de destination se trouvent dans le même vCenter, VMware VMotion peut être utilisé à chaud ou à froid pour migrer des VMs.

**Hot VMotion** peut être utilisé lorsque le chipset du CPU est le même entre la source et la destination (par exemple Intel à Intel).

**Cold VMotion** peut être utilisé lorsque le chipset du CPU est différent entre la source et la destination (par exemple, AMD à Intel).

Voici une liste des aspects à prendre en compte:

- Chipsets de CPU hôte ESXi sur les vDC d'origine et de destination
- Modes EVC sur les clusters d'origine et de destination
- Les versions vDS sont les mêmes entre le vDC d'origine et le vDC de destination


> [!primary]
> Il est recommandé de tester le chemin de migration avec des VMs à faible impact ou de tester les VMs avant la migration de production.
>

#### Étape 3 : Tâches de post-migration

##### **Règles d'affinité**

Les règles d'affinité sont basées sur des objets de VM de sorte que les règles ne peuvent être créées qu'après la migration des VMs vers le vDC de destination. Une fois la migration terminée, les règles d'affinité peuvent être réappliquées sur le vDC de destination.

**Conseils d'automatisation :** [Ce fil de discussion de communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **Configuration de Veeam backup**

Désactivez Veeam Backup sur l'ancien vDC. Cela peut se faire via l'appel API suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
>

`{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

##### **Zerto Replication**

Exécutez l'API OVHcloud pour finaliser la migration :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration
>

`{datacenterId}` est le **nouvel** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Une tâche est lancée pour :

- Vérifier si aucun VPG de destination n'existe encore sur le datacentre : ils DOIVENT être retirés.
- Basculer l’option Zerto Replication (souscription) de l’ancien vers le nouveau vDC.
- Retirer tous les vRA des hôtes sur l'ancien vDC.

##### **Supprimer le vDC précédent**

À cette étape, on peut considérer qu’il n’y a plus de données et/ou de VM sur l’ancien vDC, donc on peut supprimer des ressources.

Dans les instructions suivantes, `{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

#### **Passer les hosts en mode maintenance**

Vous devez mettre les hôtes en mode maintenance en procédant comme suit :

1. Dans le client vSphere, accédez à `Hosts and Clusters`{.action}.
2. Accédez à un `Host`{.action}.
3. Faites un clic droit sur le Host.
4. Accédez à `Maintenance Mode`{.action}.
5. Cliquez sur `Enter Maintenance Mode`{.action}.

Répétez l'action pour chaque hôte.

#### **Supprimer les datastores**

Avec l'API, obtenez la liste des ID du filer (datastore) :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Puis pour chaque ID :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
>

Une tâche est créée pour chaque appel, vous pouvez suivre l'avancement avec :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
>

> [!warning]
>
> Attendez la fin complète des tâches avant de poursuivre.
>

#### **Supprimer les hôtes**

Avec l'API, obtenez la liste des ID d'hôte :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Puis pour chaque ID :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
>

Une tâche est créée pour chaque appel, vous pouvez suivre l'avancement avec :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{hostId}/task/{taskId}
>

> [!warning]
>
> Attendez la fin complète des tâches avant de poursuivre.
>

#### **Supprimer le vDC**

Avec l'API, demandez la suppression du vDC :

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
