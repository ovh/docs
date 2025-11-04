---
title: "Public VCF as-a-Service - Les concepts fondamentaux de Public VCF as-a-Service"
excerpt: "Decouvrez les concepts fondamentaux de Public VCF as-a-Service"
updated: 2024-12-19
---

## Objectif

**Ce guide vous détaille les fondamentaux de Public VCF as-a-Service managé par OVHcloud.**

## Concept fondamentaux

Dans cette section, nous allons établir les bases essentielles de Public VCF as-a-Service.

En définissant ces principes de manière claire et concise, nous allons fournir les bases nécessaires pour une utilisation efficace et réussie de Public VCF as-a-Service. Que ce soit pour les administrateurs cherchant à déployer des infrastructures complexes ou pour les utilisateurs souhaitant accéder aux ressources rapidement. Cette exploration des concepts de base de Public VCF as-a-Service constitue un point de départ essentiel.

### Organisations

Une organisation représente une entité administrative regroupant des utilisateurs, des groupes et des ressources informatiques spécifiques.

Les utilisateurs s'authentifient au niveau de l'organisation en fournissant des informations d'identification établies par un administrateur d'organisation lors de leur création ou de leur importation.

Les administrateurs système sont responsables de la création et du provisionnement des organisations, tandis que les administrateurs d'organisation prennent en charge la gestion des utilisateurs, des groupes et des catalogues propres à l'organisation.

### Utilisateurs et groupes

Une organisation peut regrouper un nombre variable d'utilisateurs et de groupes. Les utilisateurs peuvent être créés directement par l'administrateur de l'organisation ou importés depuis un service d'annuaire (Active directory par exemple).

Quant aux groupes, ils doivent être importés depuis le service d'annuaire. Au sein d'une organisation, les autorisations sont gérées en attribuant des droits et des rôles spécifiques aux utilisateurs et aux groupes.

### Centres de données virtuels (vDC)

Un centre de données virtuel permet d'offrir des ressources de calcul (machines virtuelles / vApp / Règles d'affinités) à une organisation (votre vDC), créant ainsi un environnement managé par OVHcloud où les systèmes virtualisés peuvent être stockés, déployés et exploités.

Il est important de noter qu'une organisation peut disposer de plusieurs centres de données virtuels (vDC) pour répondre à ses besoins spécifiques en matière de ressources informatiques (segmentation, isolation, sécurité etc..).

### Réseaux de centre de données virtuels d'organisations

Un réseau vDC est encapsulé dans un centre de données (virtuels) spécifique créé avec Public VCF as-a-Service, et il est accessible à toutes les vApps de cette organisation. Ce réseau permet aux différentes vApps d'une organisation de communiquer entre elles de manière transparente. Il peut être configuré afin de se connecter à un réseau externe ou maintenu isolé et interne à l'organisation.

Seuls les administrateurs système ont le privilège de créer de tels réseaux, mais les administrateurs d'organisation sont en mesure de gérer les configurations des réseaux de centre de données virtuel d'organisation, y compris les services réseau qu'ils offrent.

### Réseaux vApp

Un réseau vApp est inclus dans une vApp et facilite la communication entre les différentes machines virtuelles de cette vApp.

Il est possible de connecter un réseau vApp à un réseau de centre de données virtuel d'organisation, ce qui permet à la vApp de communiquer avec d'autres vApps au sein de l'organisation.

De plus, si le réseau de centre de données virtuel d'organisation est connecté à un réseau externe, cela offre la possibilité à la vApp de communiquer également en dehors de l'organisation.

### Catalogue

Les organisations exploitent des catalogues pour stocker des modèles vApp ainsi que des fichiers multimédia.

Les membres autorisés au sein d'une organisation peuvent accéder à ces catalogues pour utiliser les modèles vApp et les fichiers multimédia qui y sont contenus afin de créer leurs propres vApps.

De plus, les administrateurs d'organisation ont la capacité de copier des éléments provenant de catalogues publics dans le catalogue spécifique à leur organisation.

<a name="key-features"></a>


### Fonctionnalités de Public VCF as-a-Service chez OVHcloud

Retrouvez ci-dessous une comparaison des fonctionnalités fournies par OVHcloud sur ses 3 offres de Public VCF as-a-Service.

|              | Advanced Network & Security | vSAN Storage |
|:------------:|:---------------------------:|:------------:|
|Public VCF as-a-Service Standard |              -              |       -      |
|Public VCF as-a-Service Advanced |              ✅             |       -     |

#### Cluster Management

> [!success]
> Toutes les fonctionnalités concernant le Cluster Management sont entièrement managées par OVHcloud.
>

| Features |
| :-: |
| ESXi management / capacity planning |
| Hosts Failover / Proactive HA       |
| DRS / Storage DRS                   |
| vMotion / Storage vMotion           |

##### Virtual Machine Management

|         Features        	| Standard 	| Advanced 	|                                    Comments                                   	|
|:-----------------------:	|:--------:	|:--------:	|:-----------------------------------------------------------------------------:	|
|        Create VM        	|     ✅    	|     ✅    	|                                                                             	|
| Manage Virtual Machines 	|     ✅    	|     ✅    	|                 Start, Stop, Suspend, Delete, Copy/clone...                  	|
|      Affinity Rules     	|     ✅    	|     ✅    	|                                                                               |
|   Anti-Affinity Rules   	|     ✅    	|     ✅    	|                                                                              	|
|    VMware Marketplace   	|     ✅    	|     ✅     | Allowed to deploy VMs with pre-packaged software solutions  	                    |
|    Create VM catalogs   	|     ✅    	|     ✅     |                     Build your own catalog of VM templates                    	|

#### Organisation / Virtual Datacenter Management

|         Features        	| Standard 	| Advanced 	|                                    Comments                                   	|
|:-----------------------:	|:--------:	|:--------:	|:-----------------------------------------------------------------------------:	|
|           User Management           	|     ✅    	|    ✅    	|            Manage users in a Public VCF as-a-Service           	|
| Identity Provider Integration - SSO 	|     ⏳     	|    ⏳      	| In Roadmap (via OVHcloud uIAM service)                                    |
| vCPU over-allocation                	|     ⏳    	|    ⏳    	| In Roadmap - Allow users to adjust the quantity of vCPU/GHz for a virtual DC Possible through **OVH manager or API** 	|

#### Networking

|         Features        	| Standard 	| Advanced 	|                                    Comments                                   	|
|:-----------------------:	|:--------:	|:--------:	|:-----------------------------------------------------------------------------:	|
| Routing & Switching IPv4        	 |  -       	| ✅        	| Network segments, distributed & non distributed routing, Routed Network with/without NAT BGP/ DHCP/ DNS/ Static routes Cross virtual DC Networking on the same site. Not supported: OSPF, VRF Lite 	        |
| Public IPv4 Range               	 | ✅        	| ✅        	|  	                                                                                                                                                                                                           |
| Private Network - vRack support   | ✅        	| ✅        	| In Roadmap                                                                                                                                                                                                	 |
| Routing & Switching IPv6        	 | -         	| ⏳         	|  in Roadmap                                                                                                                                                                                         	        |
| VPN                             	 | -         	| ✅        	|  L2VPN, VPN IPsec Policy Based Not Supported : SSL VPN, Routed based IPsec VPN                                                                                                                      	        |
| Load Balancing                  	 | -        	| -       	| Not supported with native Public VCF as-a-Service network capabilities                                                                                                                                                 	        |
| Advanced Load Balancing         	 | -        	| ⏳         	| In Roadmap                                                                                                                                                                                         	        |                                                                                          	|

#### Security

|       Features       	| Standard 	| Advanced 	| Comments  	|
|:--------------------:	|:--------:	|:--------:	|:----------:	|
|   Stateful Firewall  	|  -      	|     ✅    	|           |
| Distributed Firewall 	|  -      	|     ✅    	|           |
|    Security groups   	|  -       	|     ✅    	|           |
|       IDS / IPS      	|  -        	|     ⏳    	| in Roadmap 	|
|          WAF         	|  -        	|     ⏳     	| in Roadmap 	|

#### Data protection

|           Features           	| Standard 	| Advanced 	|           Comments          	|
|:----------------------------:	|:--------:	|:--------:	|:---------------------------:	|
|      Backup as a Service     	|     ✅    	|     ✅    	|Veeam Managed Backup Option 	|
|   Virtual Machine Snapshots  	|     ✅    	|     ✅    	|          1 per VM          	|
| Protection / Replication VMs 	|     ⏳     	|     ⏳    	| in Roadmap         	|

#### Storage

|              Features             	| Standard 	| Advanced 	| Comments 	|
|:---------------------------------:	|:--------:	|:--------:	|:--------:	|
|           NFS datastore           	|     ✅    	|     ✅    	|          	|

#### Monitoring

|     Features    	| Standard 	| Advanced 	|                      Comments                     	|
|:---------------:	|:--------:	|:--------:	|:-------------------------------------------------:	|
| Aria operations 	|    ⏳     	|     ⏳  	| In Roadmap - Resource management Metrics, Dashboard, Reporting|

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
