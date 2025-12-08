---
title: Limites connues
excerpt: 'Exigences et limites à respecter'
updated: 2025-12-02
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24;
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   b   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Nœuds, pods et limites d'etcd

|Plan | Nombre maximum de nœuds par cluster |  Nombre maximum de pods par nœud |  Nombre maximum de nœuds par groupe d'anti-affinité | Taille maximale d'etcd |
|---------|---|---|---|---|
| Free    |100|110|5|400Mo|
| Standard|500|110|5|8Go|

Nous avons testé nos plans du service OVHcloud Managed Kubernetes avec un nombre maximum de nœuds. Bien que des configurations plus élevées puissent fonctionner et qu'il n'y ait pas de limites strictes, nous recommandons de rester en dessous de ces limites pour une stabilité optimale.

Gardez à l'esprit que l'impact sur le plan de contrôle n'est pas uniquement déterminé par le nombre de nœuds. Ce qui définit réellement un « grand cluster » dépend de la combinaison des ressources déployées, des pods, des ressources personnalisées et d'autres objets qui contribuent tous à la charge du plan de contrôle. Un cluster avec moins de nœuds mais une utilisation intensive des ressources peut stresser davantage le plan de contrôle qu'un cluster avec de nombreux nœuds exécutant des charges de travail minimales. Dans de telles configurations, il est recommandé de passer au plan Standard afin de bénéficier de ressources de plan de contrôle plus élevées et dédiées.

Bien que 110 pods par nœud soit la valeur par défaut définie par Kubernetes, veuillez noter que l'équipe OVHcloud déploie certains composants de gestion sur les nœuds (CNI, agents, Konnectivity, ...), qui sont considérés comme « obligatoires » pour le cluster et affecteront la capacité du nombre de pods par nœud pour les charges de travail des utilisateurs. Pour la même raison, ces composants de gestion étant obligatoires et nécessitant une petite quantité de ressources de nœud, en cas de surcharge du nœud, vous pourriez retrouver certains de vos pods dans l'état `Terminated` avec `Reason: OOMKilled` et `Exit Code: 137`. C'est pourquoi il est important de gérer proprement les ressources de votre charge de travail afin d'éviter la surcharge des nœuds et les instabilités.

En tant que service entièrement géré, vous **n'aurez pas d'accès SSH** aux nœuds. Toutes les mises à jour du système d'exploitation et des composants sont gérées par OVHcloud via des correctifs et des mises à jour mineures. Si vous avez besoin d'effectuer un **débogage au niveau du nœud**, vous pouvez utiliser les outils natifs Kubernetes avec [kubectl debug](https://kubernetes.io/docs/tasks/debug/debug-cluster/kubectl-node-debug/#debugging-a-node-using-kubectl-debug-node) pour inspecter ou diagnostiquer un nœud sans nécessiter d'accès SSH direct.

## Considérations sur les correctifs, mises à niveau et maintenances

Toute opération demandée à nos services, telle que la suppression de nœuds, les correctifs ou les mises à jour de versions, suit une **procédure de vidage progressive** respectant les [Budgets de perturbation de pod](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) pendant une durée maximale de 10 minutes. Après cette période, les nœuds sont vidés de force pour permettre la poursuite des opérations. Les correctifs et les mises à niveau de version Kubernetes sont effectués à l'aide d'une procédure de mise à niveau *In Place*, ce qui signifie que les nœuds sont entièrement réinstallés un par un.

Les nœuds de travail (ajoutés manuellement ou via le Cluster Autoscaler) sont généralement prêts en quelques minutes.

> [!primary]
>
> Les nœuds de travail GPU (flavors t1 et t2) peuvent prendre plus d'une heure pour atteindre un état prêt.
>

Si un incident est détecté par le monitoring OVHcloud, dans le cadre de l'auto-réparation, les nœuds peuvent être entièrement réinstallés après avoir été dans un état 'NotReady' pendant plus de 10 minutes.

## Persistance des données & Volumes persistants

Pour éviter la perte de données en cas de panne de nœud, de correctif ou de mise à jour, il est recommandé d'enregistrer vos données sur des Volumes persistants (PV) basés sur des classes de stockage persistant (comme Block ou File Storage), et non directement sur les nœuds (y compris les disques NVMe supplémentaires).
Suivez notre [guide sur la configuration et la gestion des Volumes persistants sur OVHcloud Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume) pour plus d'informations.

Par défaut, OVHcloud fournit des [classes de stockage](https://github.com/ovh/docs/blob/develop/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume/guide.en-gb.md#storage-classes) basées sur la solution de stockage en bloc Cinder via Cinder CSI.
Un nœud de travail peut avoir un maximum de 100 volumes persistants Cinder attachés, et un volume persistant Cinder ne peut être attaché qu'à un seul nœud de travail.

Vous pouvez manuellement [configurer des volumes persistants multi-attach avec NAS-HA](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-nas-ha).

### Déploiements sur plusieurs zones de disponibilité

Les clusters MKS déployés sur des régions avec 3 zones de disponibilité peuvent utiliser des Volumes persistants Cinder provisionnés à l'aide de **classes de stockage spécifiques à la zone** :

- `csi-cinder-high-speed`
- `csi-cinder-high-speed-gen2`

> [!primary]
>
> Un PVC provisionné dans une zone donnée ne sera accessible que depuis les nœuds de cette même zone.
> Le multi-attach classique (`csi-cinder-classic-multiattach`) n'est **pas pris en charge** pour les clusters multi-AZ pour l'instant, car attacher des volumes à plusieurs instances dans différentes zones peut entraîner une corruption des données.
>

### Redimensionnement des volumes

Le redimensionnement des `Persistent Volume Claims` Kubernetes ne permet que d'étendre les volumes, pas de réduire ceux-ci.  

Si vous essayez de réduire la taille de stockage, vous obtiendrez un message du type :

```bash
The PersistentVolumeClaim "mysql-pv-claim" is invalid: spec.resources.requests.storage: Forbidden: field can not be less than previous value
```

Pour plus de détails, veuillez consulter la [documentation sur le redimensionnement des volumes persistants](/pages/public_cloud/containers_orchestration/managed_kubernetes/resizing-persistent-volumes).

## LoadBalancer

La création d'un service Kubernetes de type LoadBalancer déclenche la création d'un Load Balancer Public Cloud basé sur OpenStack Octavia.
La durée de vie du Load Balancer externe (et de l'adresse IP associée, si elle n'est pas explicitement spécifiée pour la conserver) est liée à la durée de vie de la ressource Kubernetes.

Pour plus d'informations, consultez notre guide pour [exposer des services via un LoadBalancer](/pages/public_cloud/containers_orchestration/managed_kubernetes/expose_your_applications_using_a_load_balancer).

## Ressources & Quotas

Les ressources du service Kubernetes managé comprenant les nœuds, les volumes persistants et les répartiteurs de charge sont basés sur des ressources Public Cloud standard déployées dans le projet utilisateur. Vous pouvez donc les voir dans l'[espace client Public Cloud d'OVHcloud](/links/manager) ou via les API. Cependant, cela ne signifie pas que vous pouvez interagir directement avec ces ressources de la même manière que vous le feriez avec d'autres instances Public Cloud. La partie *gérée* du service MKS d'OVHcloud signifie que nous avons configuré ces ressources pour qu'elles fassent partie de notre Kubernetes managé.

Veuillez éviter de les manipuler « manuellement » (modifier les ports laissés ouverts, renommer, supprimer, redimensionner des volumes, etc.), car vous pourriez les endommager. Dans le cadre de notre processus d'auto-réparation, toute suppression ou modification peut entraîner la création ou la duplication d'une nouvelle ressource.

Par défaut, il existe un quota de 20 clusters de plan 'Free' Managed Kubernetes par projet (également nommé 'tenant' OpenStack).

Les quotas des clusters MKS reposent sur les quotas de votre projet. Si nécessaire, consultez [cette documentation](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) pour augmenter votre quota.

### Nommage des nœuds

En raison des limitations connues actuellement présentes dans le service `Kubelet`, faites attention à attribuer __un nom unique__ à toutes vos instances OpenStack exécutées dans votre projet **y compris** vos nœuds « Managed Kubernetes Service » et les instances que vous démarrez directement sur OpenStack via l'espace client OVHcloud ou l'API.

## Ports

Pour assurer le bon fonctionnement de votre cluster Kubernetes Managé OVHcloud, certains ports doivent rester ouverts.

### Plan Free

#### Ports à ouvrir depuis le réseau public (INGRESS)

| Port(s)       | Protocole | Usage |
| ------------- | -------- | ----- |
| 22            | TCP      | Accès SSH pour la gestion des nœuds par OVHcloud |
| 30000–32767   | TCP      | Nécessaire pour les services [NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport) et [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) |
| 111           | TCP      | rpcbind (uniquement si vous utilisez le client NFS) |

#### Ports à ouvrir depuis les instances vers le réseau public (EGRESS)

| Port(s)                 | Protocole | Usage                                                |
| ----------------------- | -------- | ---------------------------------------------------- |
| 443                     | TCP      | Communication du Kubelet avec le serveur API Kubernetes |
| 80 (169.254.169.254/32) | TCP      | Service d'initialisation (OpenStack metadata)                    |
| 25000–31999             | TCP      | Tunnel TLS entre les pods et le serveur API Kubernetes    |
| 8090                    | TCP      | Service interne (gestion des nœuds OVHcloud)          |
| 123                     | UDP      | Synchronisation des serveurs NTP (systemd-timesync)       |
| 53                      | TCP/UDP  | Autoriser la résolution des noms de domaine (systemd-resolve)       |
| 111                     | TCP      | rpcbind (uniquement si vous utilisez le client NFS)                   |
| 4443                    | TCP      | Communication du serveur de métriques                         |

#### Ports à ouvrir entre les autres nœuds de travail (INGRESS/EGRESS)

| Port(s)       | Protocole | Usage |
| ------------- | -------- | ----- |
| 8472          | UDP      | Réseau overlay Flannel (pour la communication entre les pods) |
| 4789          | UDP      | Utilisation interne Kubernetes DNS |
| 10250         | TCP      | Nécessaire pour la [communication entre l'apiserver et les nœuds de travail](https://kubernetes.io/docs/concepts/architecture/master-node-communication/#apiserver-to-kubelet) (kubelet) |

> [!warning]
>
> Bloquer l'un des ports ci-dessus peut entraîner un dysfonctionnement du cluster.
>
> Pour les clusters du plan Standard, les mêmes règles s'appliquent.
>
> Conservez le groupe de sécurité OpenStack par défaut inchangé pour éviter de déconnecter les nœuds ; ajoutez uniquement des règles spécifiques à l'application avec soin.
>

#### À propos des groupes de sécurité OpenStack

Dans le cas où vous souhaitez appliquer des groupes de sécurité OpenStack à vos nœuds, il est obligatoire d'ajouter les ports ci-dessus dans un jeu de règles concernant le CIDR `0.0.0.0/0`.

> [!warning]
> Si vous supprimez les règles par défaut acceptant toutes les entrées et sorties lors de la création d'un nouveau groupe de sécurité, assurez-vous d'autoriser les ports nécessaires à votre application ainsi que les ports obligatoires mentionnés ci-dessus.
>

> [!primary]
> Pour simplifier votre stratégie, vous pouvez ajouter ces règles qui ne spécifient aucun port et autoriseront tout le trafic interne entre les pods et les services au sein du cluster :
>
> | Direction | Ether Type | IP Protocol | Port Range | Remote IP Prefix | Description |
> |---|---|---|---|---|---|
> | Ingress | IPv4 | TCP | Any | 10.2.0.0/16 | Autoriser le trafic des pods|
> | Ingress | IPv4 | TCP | Any | 10.3.0.0/16 | Autoriser le trafic des services|
>
> Cela vous permet de faire confiance au trafic interne entre les pods et les services au sein du cluster.

Pour plus de détails, veuillez consulter la [documentation sur la création et la configuration d'un groupe de sécurité dans Horizon](/pages/public_cloud/compute/setup_security_group).

### Plan Standard

## Groupe de sécurité

Le groupe de sécurité OpenStack pour les nœuds de travail est celui par défaut. Il autorise par défaut tout le trafic entrant et sortant sur votre réseau privé.

```bash
openstack security group rule list default
```

```bash
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Direction | Remote Security Group | Remote Address Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
| 0b31c652-b463-4be2-b7e9-9ebb25d619f8 | None        | IPv4      | 0.0.0.0/0 |            | egress    | None                  | None                 |
| 25628717-0339-4caa-bd23-b07376383dba | None        | IPv6      | ::/0      |            | ingress   | None                  | None                 |
| 4b0b0ed2-ed16-4834-a5be-828906ce4f06 | None        | IPv4      | 0.0.0.0/0 |            | ingress   | None                  | None                 |
| 9ac372e3-6a9f-4015-83df-998eec33b790 | None        | IPv6      | ::/0      |            | egress    | None                  | None                 |
+--------------------------------------+-------------+-----------+-----------+------------+-----------+-----------------------+----------------------+
```

Pour l'instant, il est recommandé de laisser ces règles de sécurité dans leur configuration "par défaut" ou les nœuds pourraient être déconnectés du cluster.

## Réseaux privés

> [!warning]
>
> Si votre cluster a été créé en utilisant un réseau privé OpenStack, **ne modifiez pas** le nom du réseau privé ou le nom du sous-réseau.
>
> Le Cloud Controller Manager (CCM) OpenStack s'appuie sur ces noms pour créer la connectivité du réseau privé à l'intérieur du cluster et pour relier les nœuds au réseau privé.
>
> Modifier le nom du réseau ou du sous-réseau peut empêcher le déploiement correct des nouveaux nœuds. Les nœuds auront un taint `"uninitialized=true:NoSchedule"`, ce qui empêchera le kube-scheduler de déployer des pods sur ces nœuds.
>
> Les nœuds affectés de cette manière n'auront également pas d'External-IP.
>

### Plan Free

### Plages d'adresses IP non conformes connues

Les sous-réseaux suivants peuvent générer certains comportements incohérents avec nos réseaux overlay utilisés :

```bash
10.2.0.0/16 # Subnet used by pods
10.3.0.0/16 # Subnet used by services
172.17.0.0/16 # Subnet used by the Docker daemon
```

> [!primary]
>
> Ces sous-réseaux doivent être évités dans votre réseau privé afin d'éviter tout problème de mise en réseau.
>

Pour éviter les conflits réseau, il est recommandé de **maintenir le service DHCP en fonctionnement** dans votre réseau privé.

> [!warning]
>
> Pour le moment, les nœuds de travail MKS ne peuvent pas utiliser les serveurs DNS des sous-réseaux fournis.
>

### Plan Standard

#### Plages d'adresses IP réservées

Les plages suivantes sont utilisées par le cluster et ne doivent pas être utilisées ailleurs sur le réseau privé connecté au cluster.

```bash
10.240.0.0/13 # Subnet used by pods
10.3.0.0/16 # Subnet used by services
```

> [!warning]
>
> Ces plages sont fixes pour l'instant, mais seront configurables dans une prochaine version. Ne les utilisez pas ailleurs dans votre réseau privé.
>

## Santé du cluster

La commande `kubectl get componentstatus` signale que le planificateur, le gestionnaire de contrôleurs et le service etcd ne sont pas en bon état. Il s'agit d'une limitation due à notre implémentation du plan de contrôle Kubernetes, car les points de terminaison nécessaires pour signaler l'état de ces composants ne sont pas accessibles.

## Aller plus loin

- Si vous avez besoin d'une formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts de l'équipe Professional Services de vous aider dans le cadre de votre projet spécifique.

- Rejoignez notre [communauté d'utilisateurs](/links/community).
