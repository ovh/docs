---
title: "Configurer un Standalone Edge pour L2 à L2VPN"
excerpt: "Déployez un serveur NSX Standalone Edge pour étendre la gamme L2 à L2VPN vers une infrastructure NSX"
updated: 2024-03-05
---

## Objectif

**Ce guide vous détaille comment déployez un serveur Edge autonome NSX pour étendre la gamme L2 à L2VPN vers une infrastructure NSX (anciennement NSX-t). Le serveur Edge autonome peut être déployé sur une infrastructure avec ou sans NSX-V.**

## Prérequis

- Avoir un accès NSX
- Avoir deux PCCs

> [!primary]
> Prenez en compte que les IPs indiquées dans ce guide le sont à titre d'exemples et qu'elles doivent être modifiés selon votre configuration.

## En pratique

> [!primary]
> Pour la configuration des PCCs, veuillez accéder à votre interface NSX dans la section Networking et suivez ensuite les différentes étapes ci-dessous. Notez aussi que chaque étape de la configuration s'effectue sur les deux environnements.

### Configuration du NSX L2VPN sur le NSX-T

#### Création d'un Segment

Dans la section `Segments`{.action} >  `Add Segments`{.action} de votre NSX-T, créez un segment. Nommez-le et choissisez votre passerelle pour correspondre à votre VLAN. Nous changerons sa configuration plus tard.

![Segment Creation](segment_creation.png){.thumbnail}

##### Création du IPSec service

Dans la section `VPN`{.action} > `VPN Services`{.action} > `Add Service`{.action} > `IPSec`{.action}, créez un service IPsec qui chiffrera le L2VPN. Dans la configuration de celui-ci, utilisez la même passerelle que votre segment précédent. De plus, assurez-vous que les options **Admin Status** et **Session Sync** sont activées.

![IPSec Creation](ipsec_service_creation.png){.thumbnail}

#### Création du L2VPN service

Dans la section `VPN`{.action} > `VPN Services`{.action} > `Add Service`{.action} > `L2 VPN Server`{.action}, créez un L2VPN server service. Ici aussi, utilisez la même passerelle.

![L2VPN Server Creation](l2vpn_server_service_creation.png){.thumbnail}

#### Création du Local Endpoint

Dans la section `VPN`{.action} > `Local Endpoints`{.action} > `Add Local Endpoint`{.action}, créez un Local Endpoint pour l'IPSec service. Ici, utilisez une IP dans le bloc IP livré avec le PCC.

![LocalEndpoint Creation](localendpoint_creation.png){.thumbnail}

Assurez-vous que l'option **All IPSec Local Endpoints** est activée dans le Gateway T1 que vous utilisez (`Tier-1 Gateways`{.action} > `Route Advertisement`{.action}).

![T1 Gateway Option](t1_gateway_options.png){.thumbnail}

#### Creation du L2VPN serveur pour le LocalEndpoint

Dans la section `VPN` > `VPN Services` > `Add Service` > `L2 VPN Server`, créez un L2VPN serveur service en utilsant le LocalEndpoint et l'adresse IP distante du client L2VPN que nous déploierons ultérieurement. L'interface du tunnel correspond à une nouvelle adresse IP utilisée pour celui-ci.

![L2VPN Server for LocalEndpoint](l2vpn_server_for_localendpoint.png){.thumbnail}

Ensuite, revenez dans la configuration de votre segment dans  `Segments`{.action} > `Votre Segment`{.action} > `L2VPN`{.action}. Selectionnez un tunnel VPN ID pour ce segment.

![L2VPN ID Tunnel](l2vpn_configure_id.png){.thumbnail}

Il vous suffit alors de télécharger la configuration serveur L2VPN.

![L2VPN Configuration Server](l2vpn_configuration_server.png){.thumbnail}

### Déployer NSX Standalone Edge sur NSX-V PCC

Déployez l'OVF (Open Virtual Format). Vous pouvez le retrouver sur le portail client de VMware dans la même section où vous téléchargez NSX (NSX-t).

Vous pouvez aussi la retrouver sur cette [page de téléchargement](https://customerconnect.vmware.com/downloads/details?downloadGroup=NSXV_6414_EDGE&productId=417).

> [!primary]
> Si vous ne savez pas deployer un OVF, vous pouvez retrouver notre guide [ici](ovf_template1.).
>

#### Configuration du template OVF

| Source Network | Destination Network |
| ------- | ------ |
| Public | Utilisez un vlan de votre choix et configurer un NAT pour sortir |
| Trunk | Ici nous utilisons le VXLAN provenant du NSX-V |
| HA interface | N'est pas utilisé pour ce cas d'usage |

![Configuration OVF Network](ovf_configuration.png){.thumbnail}

Le **Peer code** se trouve dans le fichier de configuration du serveur L2VPN que vous avez téléchargé précédemment.

La **Sub-Interface** doit correspondre à l'ID de VLAN et de tunnel que vous avez configuré précédemment dans le segment NSX (NSX-t).

N'oubliez pas de mettre l'indice HA à 0.

![OVF Customize Template](ovh_customize_template.png){.thumbnail}

Le NAT a été configuré sur les ports **5000** & **4500** pour le tunnel IPSec.

![Nat Configuration IPSec](nat_configuration.png){.thumbnail}

#### Configuration des Promiscuous Policies

Il est nécessaire d'exécuter un appel APIv6 pour activer le mode Promiscuous sur votre port. Si vous utilisez un portgroup VLAN, vous disposez de tous les accès et droits pour le faire à l'aide du vSphere WebClient.

Néanmoins, ce n'est pas possible si vous utilisez vxlan ou NSX-v vxlan. Pour cela, il y a un appel dans l'APIv6 qui le permet, le « enableCarp ». En effet, pour activer Carp sur les VM sur une carte réseau spécifique, nous devons activer le mode promiscuous sur le port. Nous allons utiliser cet appel. Rendez-vous sur [notre api](https://api.ovh.com/console/#/dedicatedCloud) et localisez cet appel :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp
>

> [!primary]
> Avant d'exécuter l'appel API, cliquez sur le portgroup de votre VM puis cliquez sur le port de votre VM.
>
> ![Api Call](api_call.png){.thumbnail}

Vous verrez, sur les **Policies** de votre portgroup, que le port Promiscuous est désactivé.

![Promiscuous Policies](promiscuos_policies.png){.thumbnail}

Maintenant, sur l'APIv6 swagger, localisez la VM que vous avez déployée (NSX-L2VPN-Client) dans notre cas avec cet appel :

> [!api]
>
> @api {v1} /dedicatedCloud  GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
>

Une fois la VM localisée, utilisez l'appel API enableCarp :

![EnableCarp call API](enableCarp_call_api.png){.thumbnail}

Attendez que l'automatisation s'exécute et vous verrez que le mode Promiscuous de votre port est passé à `Accept`.

![Promiscuous Policies Correct](promiscuos_policies_correct.png){.thumbnail}

### Vérification de la configuration

Vérifiez ensuite si le service L2VPN est en cours d'exécution. Ouvrez la console et connectez-vous.

![Console VPN](console_vpn.png){.thumbnail}

Vous pouvez aussi verifier au niveau du NSX-T.

![NSX-T Check VPN](nsx_t_check_vpn.png){.thumbnail}

Pour confirmer la bonne extension L2, créons une VM dans le segment NSX (NSX-t) et dans le VXLAN NSX-v dans le même sous-réseau pour confirmer qu'ils peuvent communiquer ensemble.

- 192.168.2.5 est sur NSX (NSX-t)
- 192.168.2.1 est sur NSX-v
- 192.168.2.254 Interface Edge sur NSX-v

![Ping Console](ping_console_1.png){.thumbnail}

![Ping Console](ping_console_2.png){.thumbnail}

La communication entre les VM s'effectue bien, notre configuration est fonctionnelle.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.