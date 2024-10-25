---
title: "TLS/SSL Gateway - Présentation des concepts et options"
excerpt: "Découvrez comment fonctionne une passerelle TLS au sein d'un environnement Hosted Private Cloud VMware vSphere managé on OVHcloud"
updated: 2024-10-25
---

## Objectif

**Découvrir le fonctionnement d'une passerelle TLS dans un environnement vSphere managé on OVHcloud.**

## Prérequis

- Avoir souscrit à une offre managée [VMware vSphere on OVHcloud](/links/hosted-private-cloud/vmware).

## En pratique

OVHcloud s’efforce en permanence de fournir des instruments stables et sécurisés pour la gestion de votre infrastructure virtuelle. Pour atteindre cet objectif, nous visons à nous conformer aux normes établies de l'industrie, en particulier dans le contexte d'une communication de confiance.

Ce nouveau type d'architecture vous permet de construire un environnement Hosted Private CLoud sécurisé sur tous les points d'entrée à l'aide d'un certain nombre de fonctionnalités garanties.  

Ce point d'entrée étant maintenant cette **passerelle SSL/TLS**.

Voici un schéma d'exemple d'une architecture type 2 tiers (2 localisations) :

![Schema SSL Gateway](images/Schema_ssl_gateway.png){.thumbnail}

Nous allons maintenant poursuivre avec une introduction, les fonctionnalités, les tarifs et ainsi que le fonctionnement interne de la passerelle SSL.

### Étape 1 - Introduction

La mise en place de votre passerelle est automatique en fonction le l'offre choisie dans votre environnement Hosted Private Cloud - VMware on OVHcloud. Si vous avez souscrit à une offre standard, vous bénéficierez du pack de base (voir listing pack/option). Une majoration de votre abonnement est mise en place sur l'offre SSL Gateway avancée et premium compris dans le prix total souscrite.

Pour activer votre passerelle TLS, contactez le [support OVHcloud](/links/support) avec le choix des fonctionnalités nécessaires (pack basique ou sécurité avancée).

#### Tarifs

Le tarif pour une passerelle TLS/SSL est inclus dans le prix de l'offre souscrite au sein de votre environnement Hosted Private Cloud - VMware on OVHcloud. Vous aurez une charge supplémentaire seulement si vous ne bénéficiez pas du pack ou options actuelles.

#### Fonctionnalités et dépendance

Un certain nombre de fonctionnalités sont disponibles suivant les packs de sécurités choisis, voici une matrice qui vous aidera à faire votre choix et avoir une idée d'une pricing mise en place :

| Options / Offers / Features                    | Dependancy                                                           |  Type  |                        Pack Basic                         |                                            Pack Sécurité Avancé                                            | WAF | Commentaires                                                                                                                                                                                                                                                                                         |
|:-----------------------------------------------|:---------------------------------------------------------------------|:------:|:---------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------:|----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default options                                |                                                                      |  Pack  | - SFTP<br/>- Access Network<br/>- HIDS<br/>- Grsec Kernel | - 2FA<br/>- Log Insight Forwarder<br/>- TLS 1.2<br/>- Timeout on session<br/>- NIDS<br/>- Token validation |    |                                                                                                                                                                                                                                                                                                      |
| SFTP (deprecated)                              |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| Antivirus                                      |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| Token validation                               |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    | - Each sensitive task run on the PCC require your validation.                                                                                                                                                                                                                                        |
| NIDS                                           |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| HIDS                                           |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| Private Gateway                                | - Private Customer Vlan                                              | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| vRops                                          | - vrli Forwarder                                                     |  Pack  |                              ❌                             |                                                    ✅                                                        |    |                                                                                                                                                                                                                                                                                                      |
| WAF                                            |                                                                      | Option |                             ✅                             |                                     ✅<br/>(Avec SecNumCloud seulement)                                     | ✅  |                                                                                                                                                                                                                                                                                                      |
| Grsec Kernel                                   |                                                                      | Option |                              ❌                             |                                                    ✅                                                        |    | - Use a secure kernel where the TLS Gateway is running.                                                                                                                                                                                                                                              |
| VM Encrypt                                     | - SecNumCloud<br/>- Private Gateway                                  |  Pack  |                             ✅                             |                                                     ✅                                                       |    |                                                                                                                                                                                                                                                                                                      |
| Logstash                                       |                                                                      | Option |                             ✅                             |                                                     ✅                                                       |    | - The use of a managed Logstash need to be added and configured manually from the OVHcloud control panel with the Log Forwarder feature.<br/>You can read the guide [Logs Data Platform - Collect VMware on OVHcloud logs](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ldp) |
| Private Customer Vlan                          |                                                                      | Option |          ✅ (seulement avec une Private gateway)           |                                  ✅  (seulement avec une Private gateway)                                   |    | - Create a private vlan between the master pcc and your pcc to be able to deploy services. It require master pcc components.                                                                                                                                                                         |
| Access Network Filtered                        |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| SPLA (licences windows)                        |                                                                      | Option |                             ✅                             |                                                     ✅                                                      |    | - [How to manage Windows licenses for virtual machines on your Hosted Private Cloud infrastructure](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/spla_license_management)                                                                                                      |
| Log Forwarder - Logs to Customer (coming soon) | - vrli Forwarder<br/>- vRops<br/>- Log Insight Forwarder             | Option |                             ✅                             |                                                     ✅                                                      |    | - Deploy logs components to forward all VMware logs of a PCC. 2 features Log forwarder and Log to customer.                                                                                                                                                                                          |
| NIDS                                           |                                                                      | Option |                             ❌                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| TLS 1.2 (vSphere 7)                            | - vSphere 7                                                          | Option |                             ❌                             |                                                     ✅                                                      |    | - Force TLS 1.2 on all PCC components.                                                                                                                                                                                                                                                               |
| TLS 1.3 (vSphere 8)                            | - vSphere 8                                                          | Option |                             ❌                             |                                                     ✅                                                      |    | - Force TLS 1.3 on all PCC components.                                                                                                                                                                                                                                                               |
| 2FA                                            |                                                                      | Option |                             ❌                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| 2FA Fail to Ban                                | - 2FA                                                                | Option |                             ❌                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| Time Out Session                               |                                                                      | Option |                             ❌                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| Send log to Customer                           | - Log Insight Forwarder                                              | Option |                             ❌                             |                                                     ✅                                                      |    |                                                                                                                                                                                                                                                                                                      |
| SecNumCloud                                    | - Options par défaut<br/>- Options avancées<br/>- WAF<br/>- Logstash |  Pack  |                             ✅                             |                                                     ✅                                                      | ✅  |                                                                                                                                                                                                                                                                                                      |
| Beta SecNumCloud                               | - Options par défaut<br/>- Options avancées<br/>- Logstash           |  Pack  |                             ✅                             |                                                     ✅                                                      |  ❌  |                                                                                                                                                                                                                                                                                                      |
| HDS                                            | - Pack Basic + Security Advanced                                     |  Pack  |                             ✅                             |                                                     ✅                                                      |  ❌  |                                                                                                                                                                                                                                                                                                      |
| PCIDSS                                         | - Pack Basic + Security Advanced                                     |  Pack  |                             ✅                             |                                                     ✅                                                      |  ❌  |                                                                                                                                                                                                                                                                                                      |
| HIPAA                                          | - Pack Basic + Security Advanced                                     |  Pack  |                             ✅                             |                                                     ✅                                                      | ❌   |                                                                                                                                                                                                                                                                                                      |
| VMware vSphere Standard                        | - Pack Basic Security                                                |  Pack  |                             ✅                             |                                                     ❌                                                      |  ❌  |                                                                                                                                                                                                                                                                                                      |
| VMware vSphere Avancé/Premium                  | - Pack Security Advanced                                             |  Pack  |                             ✅                             |                                                     ✅                                                      |  ❌  |                                                                                                                                                                                                                                                                                                      |


### Étape 2 - What is what 

**Qu'est-ce que ça veut dire** ?

Nous ne pouvons bien sûr par rentrer dans les details pour raison de sécurité. Mais voici quelques informations utiles sur les principales fonctionnalités listées ci-dessus :

- `Antivirus` : Un service d'antivirus est mis en place afin de sécuriser les flux entrants pour les attaques à l'aide de fichiers binaires par exemple (anti-malware). Des taches et mises à jour courantes sont éxécutés régulièrement.
- `Serveur Web` : Il permet la configuration des certificats TLS pour la mise en place du client HTML vSphere ainsi que pour les échanges sécurisés avec WSUS, Clamav, Veeam, Zerto, etc..). Et l'exécution de scripts internes et techniques pour d'autres fonctionnalités, tel que (2FA, MFA, etc..).
- `Monitoring` : Nous utilisons un ensemble d'outil interne pour gérer l'inventaire et la supervision du service managé. Ainsi que le monitoring de ces outils de sécurité.
- `Sécurité` : Tout le principe de l'utilisation d'une passerelle TLS est bien la sécurité. De sécurisé l'ensemble des points d'entrées de votre infrastructure managé.
- `Proxypass` : Proxypass est utilisé pour transférer les requêtes depuis la passerelle vers vCenter.
- `Nfqueue` : Chaque requête allant de vCenter ou à vos hôtes ESXI a besoin de contacter un autre objet a besoin d'être sécurisé. C'est pourquoi nous utilisons ce type de technologie au sein du service managé. Pour permettre au client d'accéder sur IP/Port Privé uniquement s'il est connecté à son vCenter, nous utiliserons Nfqueue.
- `NAT` : Un des principaux avantage de ce service permet grâce à une unique IP publique de sécuriser les flux internes privée avec les flux externes publique (mises à jour, renouvellement de certificats, flux API OVHcloud, Veeam, Zerto) vers vos environnements privé interne VMware on OVHcloud.
- `Private Gateway` : L'activation d'une private gateway au sein de votre environnement privée vous permet de déployer une machine virtuelle et d'éffectuer la configuration réseau. Ce service est inclus avec l'activation de la SSL Gateway. Pour plus d'information, vous pouvez lire le guide [Activer la Private Gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway).
- `2FA / MFA` : Elle permet la mise en place d'une double authentification sur le client HTML Web vSphere, exemple avec l'url suivante : <https://pcc-XXX-XXX-XXX-XXX.ovh.XX/ui/login>.
- `Fail to Ban` : Cette technologie permet d'éviter les bruteforce sur les urls sécurisés internes de votre environnement VMware on OVHcloud par exemple.
- `WAF` : **W**eb **A**pplication **F**irewall, qui se traduit par Pare-feu d'application Web. Permet de protéger une application web en filtrant et en surveillant le trafic HTTP entre une application web et Internet. Il protège généralement les applications web contre les attaques telles que la contrefaçon cross-site, le scripting cross-site (XSS), l’inclusion de fichiers et les injections SQL par exemple. La sécurisation étant un des principaux avantages du service,

Toutes ces fonctionnalités internes managées par OVHcloud fonctionne pleinement dans votre environnement managé VMware on OVHcloud.

**La connectivité réseau**

Pour accéder à votre client Web HTML de manière sécurisé, vCenter doit ouvrir une socket sur le bon port du vCenter d'administration. Sans passerelle TLS, cela échouerait, car vSphere essaiera de se connecter sur l'IP du vCenter avec un port choisi, ce qui est impossible parce qu'il n'a pas accès à ce port pour raison de sécurité. Ainsi, elle fait suivre ce flux à travers la passerelle TLS. Ainsi le client HTML vSphere pense qu'il se connecte directement au VCSA, mais il se connecte en faite juste à la passerelle TLS avec un port spécial dédié, qui transmettra sa demande au vCenter.

![Schema SSL Gateway 02](images/Schema_ssl_gateway_2.png){.thumbnail}

**Les certificats utilisés** (exemple : `pcc-xxx-xxx-xxx-xxx.ovh.com|ca|pl...`)

La passerelle TLS héberge le certificat vSphere managé sur un serveur Web classique, cela permet d'avoir une connexion sécurisée à votre client Web HTML vCenter. Le certificat est formaté tel que `pcc-xxx-xxx-xxx-xxx.ovh.(com|ca|pl ...)`, et est commandé par notre robot. Et poussé vers le vCenter et la passerelle TLS. 

De nombreux certificats sont hébergés sur le SSL Gateway. 

Tout ce dont vous avez besoin pour vos fonctionnalités vSphere managées et utilisées dans votre environnement (Zerto, Veeam, HCX, NSX, vRops, plugins vSphere etc...).

|   Service   |             Url              | Comments                                                                               |
|:-----------:|:----------------------------:|:---------------------------------------------------------------------------------------|
|  **Zerto**  | `zerto.pcc-x-x-x-x.ovh.com`  | - Certificat utilisé pour les échanges avec l'API Zerto et votre environnement managé. |
| **Plugin**  | `plugin.pcc-x-x-x-x.ovh.com` | - Certificat utilisé pour intégrer les plugins VMware (Veeam, VCD, KMS, etc..).        |
| **vSphere** |    `pcc-x-x-x-x.ovh.com`     | - Certificat utilisé pour accéder à votre client HTML vSphere.                         |
|   **NSX**   |  `nsx.pcc-x-x-x-x.ovh.com`   | - Certificat utilisé pour accéder au client HTML NSX.                                  |
|  **NSX-T**  |  `nsxt.pcc-x-x-x-x.ovh.com`  | - Certificat utilisé pour accéder au client HTML NSX-T.                                |
|  **vRops**  | `vrops.pcc-x-x-x-x.ovh.com`  | - Certificat utilisé pour accéder au client HTML vRops.                                |

**WAF (Web application firewall)**

Un certain nombre d'options sont disponibles avec les packs d'options de sécurités de vos environnements VMware managé on OVHcloud. L'option **W**eb **A**pplication **F**irewall (WAF) est disponible (voir matrice features/offres ci-dessus) et vous permet en plus de sécuriser vos applications. Cette option est disponible par défaut pour tous les environnements qualifiés SecNumCloud et certifié PCIDSS, HDS.

Le pack WAF OVHcloud inclut dans la passerelle TLS est uniquement possible dans l'offre basique avec une private gateway activé. 

Vous pouvez voir dans ce guide [Activer la Private Gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway) comment activer une private gateway. Et dans le pack avancé seulement pour les environnements qualifié SecNumCloud.

**Remarque** : Cette option est activé par défaut pour les offres qualifié SecNumCloud et certifié **HDS** et **PCIDSS**. Ainsi que pour tous les environnements des offres managées VMware vSphere standard et avancées, mais avec un pack d'option qui peut évoluer (voir le listing packs ci-dessous).

**Private gateway**

Les notions de gateway ssl et de private gateway sont 2 choses différentes, attention à ne pas confondre ces 2 éléments (voir dépendances de chaque features et options). En effet, certaines options sont uniquement disponibles dans votre environnement avec une private gateway activé.

Si vous avez besoin de plus d'information sur la private gateway, suivez le guide suivant : [Activer la Private Gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway).

### Étape 3 - Transition vers TLS 1.3

À partir des prochaines mise à jour de vSphere 7 vers vSphere 8, nous recommanderons le protocole **T**ransport **L**ayer **S**ecurity version 1.3, plutot que l'ancienne version TLS 1.2, qui est activée par défaut au sein de VMware vSphere 7 on OVHcloud.

Dans la prochaine version majeure, TLS 1.2 et TLS 1.3 coexisteront et la configuration vCenter par défaut prendra en charge les deux versions du protocole.

Notre intention est de déprécier TLS 1.2 et de cesser de le prendre en charge à partir de la version majeure suivante.

Nous recommandons fortement à nos clients d'envisager de migrer vers vSphere 8 afin de prendre en charge TLS 1.3 dans leurs produits afin que ces solutions fonctionnent avec une meilleurs sécurité dans toutes les configurations vCenter.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [channel Discord dédié](https://discord.gg/ovhcloud).

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
