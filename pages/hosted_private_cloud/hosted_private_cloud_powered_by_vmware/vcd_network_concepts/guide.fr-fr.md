---
title: "VMware Cloud Director - Concepts réseau et bonnes pratiques"
excerpt: "Découvrez les puissantes capacités de mise en réseau de VMware Cloud Director on OVHcloud avec ce guide complet sur les concepts et fonctionnalités clés"
updated: 2024-09-26
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

> [!primary]
>
> VCD on OVHcloud est actuellement en phase Alpha. Ce guide peut donc être incomplet.
>

## Objectif

**Ce guide expose les principes et les notions fondamentales du réseau au sein de VMware Cloud Director on OVHcloud.**

## Prérequis

> [!primary]
> 
> Si vous ne savez comment vous connecter au portail web de votre organisation, consultez d'abord le guide « [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging) ».
>

- Un navigateur Web (avec de préférence une base Chromium et la traduction activée en Français).
- Avoir un compte VMware Cloud Director avec des droits utilisateur (vérifiez que votre compte utilisateur dispose des droits suffisants).
- Avoir suivi le guide « [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) ».

## En pratique

/// details | Introduction de la pratique du réseau dans VCD.

Dans ce guide d'introduction, nous allons exposer :

- Les différents concepts de mise en réseau au sein de VMware Cloud Director on OVHcloud.
- Les notions d'optimisation de l'espace réseau telles que, par exemple, l'espace IP, les passerelles Edge, les groupes de centres de données.

Pour assurer une infrastructure réseau flexible et sécurisée dans un environnement de cloud polyvalent, VMware Cloud Director utilise une architecture de mise en réseau superposée comprenant quatre catégories de réseaux :

- **Les réseaux externes**.
- **Les réseaux vDC d'organisation**.
- **Les réseaux de groupe de centres de données**.
- **Les réseaux vApp**.

La plupart de ces réseaux nécessitent des éléments d'infrastructure supplémentaires tels que les **Passerelles Edge** et les **Pools de réseaux**.

Le control panel VCD dispose d'un bandeau réseau avec 6 sections :

- `Réseaux`
- `Passerelles Edge`
- `Passerelles de fournisseur`
- `Espaces IP`
- `Groupes de centres de données`
- `Balises de sécurité `

![VCD Control Panel Network Overview Gif](images/vcd_network_overview.gif){.thumbnail}

Il contient aussi une section `Réseau`{.action} au sein de chaque vDC dans `Centres de données > Mon VDC > Mise en réseau > Réseau > Dispositif Edge`.

///

### Étape 1 - Les offres et fonctionnalités réseau

/// details | Quelles sont les capacités, les fonctionnalités proposées et offertes ?

**Capacités de mise en réseau**

Voici les principales fonctionnalités réseau offertes avec les offres VCD on OVHcloud.

| Features                          | Standard | Advanced | Premium | Comments                                                                                                                                                                                                                        |
|-----------------------------------|----------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Routage et commutation IPv4.** | ✅        | ✅        | ✅       | - Segments de réseau. <br> - Routage distribué et non distribué. <br> - Réseau routé avec ou sans NAT/BGP/DHCP/DNS/Routes statiques. <br> - Réseau vDC croisé sur le même site. <br> - **Non pris en charge** : OSPF, VRF Lite. |
| **Public IPv4 Range.**            | ✅        | ✅        | ✅       |                                                                                                                                                                                                                                 |
| **Réseau privé - Support vRack.** | ✅        | ✅        | ✅       | - Dans la Roadmap.                                                                                                                                                                                                              |
| **Routage et commutation IPv6.**  |          |          |         | - Dans la Roadmap.                                                                                                                                                                                                              |
| **VPN.**                          |          | ✅        | ✅       | - L2VPN, VPN IPsec Policy Based Non pris en charge : VPN SSL, Routed based IPsec VPN.                                                                                                                                           |
| **Load Balancing.**               |          |          |         | - Non pris en charge avec les fonctionnalités réseau VCD natives.                                                                                                                                                               |
| **Load balancing avancée.**       |          |          |         | - Dans la Roadmap.                                                                                                                                                                                                              |

**Fonctionnalités réseau des offres VCD on OVHcloud**

Voici un comparatif des 3 offres proposés par VMware Cloud Director on OVHcloud.

|                   | Advanced Network & Security | vSAN Storage |
|:-----------------:|:---------------------------:|:------------:|
| **VCD Standard.** |              -              |      -       |
| **VCD Advanced.** |              ✅              |       -      |
| **VCD Premium.**  |              ✅              |      ✅       |

Les fonctionnalités de réseau avancé et de sécurité au sein de VCD on OVHcloud ne sont disponibles que dans les offres **Advanced et Premium**.

///

### Étape 2 - Concepts et bonnes pratiques

/// details | Quels sont les bonnes pratiques depuis l'espace client VCD ?

**Recommandation dans la conception et l'administration de l'espace réseau**

| Design Recommendation                                                                                                                   | Design Justification                                                                            | Design Implication                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| Créez une ou plusieurs passerelles Edge (passerelles de niveau 1) par CDV d'organisation.                                               | Active les services de mise en réseau pour le vDC de l'organisation.                            | Aucune.                                                                               |
| Créer des groupes de centre de données, s'il est nécessaire d'avoir des réseaux OrgvDC couvrant plusieurs OrgVDC dans une organisation. | Simplifie la connectivité transversale Org vDC.                                                 | Nécessite la création de groupes de centre de données dans le tenant (locataire) VCD. |
| Utiliser la fonction Espaces IP plutôt que l'adressage par blocs IP traditionnel.                                                       | Note : La livraison de l'ensemble des fonctionnalités d'IP Spaces s'étend sur plusieurs phases. | Aucune.                                                                               |

**Le réseau au sein de VCD (concept)**

Les types de réseau supportés au sein d'un vDC d'organisation :

| Réseau de type centre de données | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Direct                           | - Un réseau vDC d'organisation disposant d'une connexion directe à l'un des réseaux externes qui sont provisionnés par l'administrateur système et qui reposent sur des ressources vSphere.  <br><br> - Les réseaux directs sont pris en charge pour les VDC d'organisation qui reposent sur NSX.  <br><br> - Les réseaux directs sont accessibles par plusieurs VDC d'organisation.  <br><br> - Des machines virtuelles appartenant à différents VDC d'organisation peuvent se connecter à ce réseau et en voir le trafic.  <br><br> - Un réseau direct fournit une connectivité directe de couche 2 aux machines virtuelles situées à l'extérieur du VDC d'organisation.  <br><br> - Les machines virtuelles situées à l'extérieur de ce VDC d'organisation peuvent se connecter directement aux machines virtuelles dans le VDC d'organisation.  <br><br> - Note : Seul OVHcloud peut ajouter un réseau VDC d'organisation direct. |
| Isolé (interne)                  | - Les réseaux isolés sont accessibles uniquement par le même vDC d'organisation.   <br><br> - Seules les machines virtuelles situées dans ce vDC d'organisation peuvent se connecter au réseau du VDC d'organisation interne et en voir le trafic. <br><br> - Les réseaux isolés sont pris en charge pour les VDC d'organisation qui reposent sur NSX ou sur NSX Data Center for vSphere. <br><br> - Le réseau du VDC d'organisation isolé fournit à un VDC d'organisation un réseau privé isolé auquel plusieurs machines virtuelles et vApp peuvent se connecter.  <br><br> - Ce réseau ne fournit aucune connectivité aux machines virtuelles situées à l'extérieur du VDC d'organisation.  <br><br> - Les machines situées à l'extérieur du VDC d'organisation ne peuvent pas se connecter aux machines situées à l'intérieur du VDC d'organisation.                                                                              |
| Routage                          | - Les réseaux routés sont accessibles uniquement par le même vDC d'organisation.  <br><br> - Seules les machines virtuelles situées à l'intérieur de ce vDC d'organisation peuvent se connecter à ce réseau. <br><br>  - Ce réseau fournit également un accès contrôlé à un réseau externe.  <br><br> - En tant qu'administrateur système ou administrateur d'organisation, vous pouvez configurer des paramètres de traduction d'adresse réseau (NAT), de pare-feu et VPN pour rendre certaines machines virtuelles accessibles depuis le réseau externe. <br><br>  - Les réseaux routés sont pris en charge pour les VDC d'organisation qui reposent sur NSX ou sur NSX Data Center for vSphere.                                                                                                                                                                                                                                    |

Les réseaux de centres de données virtuels (vDC) d'organisation permettent aux **vApp/VM** de communiquer entre elles ou avec des réseaux externes à l'organisation.

Les réseaux vDC d'organisation fournissent des connexions directes ou routées à des réseaux externes, ou peuvent être isolés des réseaux externes et des autres réseaux vDC d'organisation. Les connexions routées nécessitent une **passerelle Edge** et un **pool de réseaux** dans le VDC d'organisation.

Un vDC d'organisation récemment créé ne dispose d'aucun réseau disponible.

**Pools de réseaux (concept)**

Un pool de réseaux est un ensemble de segments de réseau de couche 2 isolé, que vous pouvez utiliser afin de concevoir des réseaux vApp et divers types de réseaux vDC en fonction de vos besoins.

Les pools de réseaux doivent être mis en place préalablement aux réseaux vDC d'organisation et aux réseaux vApp. En leur absence, la seule option en termes de réseau pour une organisation demeure la connexion directe à un réseau externe.

**Les espaces IP (recommandé)**

> [!primary]
>
> Vous pouvez utiliser une nouvelle façon de gérer votre espace IP dans VMware Cloud Director on OVHcloud avec le nouveau sous-système de gestion des espaces IP.
>
>  Les passerelles Edge ne peuvent se connecter qu'aux passerelles de fournisseurs utilisant des espaces IP.

Un espace IP se compose d'un ensemble de plages d'adresses IP qui ne se chevauchent pas et de petits blocs CIDR qui sont réservés et utilisés lors de la consommation du cycle de vie de l'espace IP. Un espace IP peut être IPv4 ou IPv6, mais pas les deux.

Depuis la version (10.4.1), les espaces IP font partie des nouvelles fonctionnalités et sont recommandées pour vos besoins en espace réseau.

Il existe deux types d'espaces IP que vous pouvez utiliser en tant qu'utilisateur Administrateur d'organisation :

- **Espace IP public** : un espace IP public est utilisé par plusieurs organisations et est contrôlé par le Fournisseur de services par le biais d'un système basé sur les quotas.
- **Espace IP privé** : les espaces IP privés sont dédiés à un seul locataire. Un espace IP privé est utilisé uniquement par une organisation spécifiée lors de la création de l'espace IP. Pour cette organisation, la consommation d'adresses IP est illimitée.

![VCD Network IP Prefixe](images/vcd_network_ipspace_banner.png){.thumbnail}

#### Via l'espace client VCD**

![VCD Network IP Prefixe 02](images/vcd_network_ipspace.gif){.thumbnail}

**Configuration :**

- `Général`
- `Topologie réseau`

**Allocation :**

- `Adresses IP flottantes`
- `Préfixes IP`

**Les préfixes IP (recommandé)**

Vous pouvez définir un préfixe IP pour une utilisation automatique ou manuelle et empêcher VMware Cloud Director de l'attribuer de manière aléatoire.

Si vous n’utilisez plus un préfixe IP qui a été alloué à votre espace IP, vous pouvez le libérer dans le pool.

![VCD IP Spaces Prefixe 00](images/vcd_network_prefixe_ip.png){.thumbnail}

![VCD IP Spaces Prefixe 02](images/vcd_network_prefixe_ip_2.png){.thumbnail}

**Les topologies réseau (concept)**

Vous retrouvez les topologies réseau depuis le control panel VCD en cliquant sur : `Mise en réseau | Espace ip  | Mon Nom d'IP space | Configuration | Topologie Réseau`{action}

Les topologies réseau sont utilisées pour configurer les espaces IP afin d'activer le trafic nord-sud.

![VCD Network IP Spaces Topology](images/vcd_network_ip_space_topology.png){.thumbnail}

**Règles de configuration automatique par défaut :**

- Notez que la portée interne et externe des espaces IP doit être configurée si les règles NAT par défaut doivent être générées automatiquement. Les règles par défaut peuvent être configurées automatiquement sur les passerelles Edge et les passerelles de fournisseur en les déclenchant manuellement sur celles-ci à l'aide de l'action « Configuration automatique ».

**Les groupes de centres de données (recommandé)**

Les réseaux de groupe de centres de données sont un type de réseaux vDC d'organisation qui sont partagés entre un ou plusieurs vDC et auxquels les vApp peuvent se connecter.

![VCD Network Datacenter Groups Overview Gif](images/vcd_network_datacenter-groups_overview.gif){.thumbnail}

Lors de la création d'un réseau, vous pouvez rejoindre votre groupe de centres de données, ce qui permettra ainsi de fournir la connectivité aux vApp/VM de tous les VDC participants.

**La synchronisation (optionnel)**

Il est aussi possible de les synchroniser. Cette action de synchronisation vérifiera tous les vDC associés pour s'assurer qu'ils sont toujours réalisés et correctement configurés.

![VCD Network Datacenter Groups Sync](images/vcd_network_datacenter-groups_sync.png){.thumbnail}

**Création ou import de réseau dans le groupe de centre de données (optionnel)**

![VCD Network Datacenter Groups Network Creation](images/vcd_network_datacenter-groups_network_creation.png){.thumbnail}

![VCD Network Datacenter Groups Network Import](images/vcd_network_datacenter-groups_network_import.png){.thumbnail}

Les passerelles Edge (obligatoire)**

La passerelle Edge de VCD permet à un réseau vDC d'organisation d'acheminer la connectivité aux réseaux internes, la translation d'adresses réseau (NAT), le pare-feu, le montage de tunnel IPsec.

VCD prend en charge les passerelles Edge `IPv4 et IPv6`.

![VCD Network Edge Overview Gif](images/vcd_network_edge_overview.gif)

**Mode DHCP (optionnel)**

> [!primary]
>
> Attention, si vous en avez besoin, le **DHCP** doit être activé et configuré dans un réseau afin de fonctionner correctement.
>

DHCP automatise l'attribution d'adresses IP aux machines virtuelles connectées aux réseaux vDC de l'organisation.

**Trois modes sont disponibles :**

- **Réseau :** un nouveau service DHCP directement associé à ce réseau est utilisé pour obtenir les IP DHCP. Utilisez le mode réseau si le réseau est isolé ou si vous prévoyez de le détacher du périmètre.
- **Relay :** les messages DHCP sont relayés depuis les machines virtuelles vers les serveurs DHCP désignés dans votre infrastructure DHCP physique.
- **Passerelle :** le service DHCP de la passerelle Edge est utilisé pour obtenir les IP DHCP.

![VCD Network DHCP Activation](images/vcd_network_dhcp.png)

**Réseaux vApp (concept)**

Les réseaux vApp permettent aux machines virtuelles de communiquer entre elles ou, en se connectant à un réseau vDC d'organisation, avec des machines virtuelles dans d'autres vApps.

![VCD Network vApp Network Gif](images/vcd_network_vapp.gif)

///

### Étape 3 - Limitations

/// details | Quelles sont les limitations réseau connues ?

D'un point de vue général, les seules limitations que vous pouvez retrouver au sein de VCD on OVHcloud sont celles d'un service managé. 

Un peu moins de granularité est offerte en matière de configuration bas niveau.

Bien sûr, cela peut avoir un impact sur les fonctionnalités avancées en matière de réseau, même si ces fonctionnalités peuvent être incluses dans les phases futures.

| Offres                                      | Standard | Advanced (NSX) | Premium (NSX+vSAN) | Comments                                                                                                                                                                                          | 
|:--------------------------------------------|:--------:|:--------------:|:------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Network cards                               |    10    |       10       |         10         | - Network card that can be added when starting a VM (per VM)  in VCD control panel                                                                                                                |
| Numbers of Edge Gateway (per Org)           |    32    |       32       |         32         | - Number of  Edge Gateway possible  (per Org limitations)                                                                                                                                         |
| External Networks                           |    -     |     8 000      |       8 000        | - External networks connecting organization VDCs to physical networks. Backed by VMware vSphere port group, VLAN, or distributed virtual switch (dvSwitch) objects or backed by NSX-T T0 routers  |
| IP Spaces                                   | 100 000  |    100 000     |      100 000       | - The maximum number of IP Spaces.                                                                                                                                                                |
| Cross VDC Networking Org VDCs per VDC Group |    -     |        16      |      16        | - Org VDC networks stretched to all VDCs in the same VDC Group                                                                                                                                    |

**Limitations VPN IPsec**

Lors de l'ajout d'un tunnel IPsec, le paramètre d'ajout d'une session IPSEC basée sur une route (route based IPsec tunnel) n'est pas supporté au sein de VCD on OVHcloud à ce jour (voir : [docs > VMware NSX > Guide d'administration de NSX > Ajout d'une session IPSec basée sur une route](<https://knowledge.broadcom.com/external/article/319147/vmware-cloud-director-nsx-feature-suppor.html>))

**Limitation passerelles de fournisseur (provider gateway)**

Les passerelles de fournisseur sont clairement visibles, mais ne peuvent pas être modifiées (à la manière d'un service managé).

**Limitation NSX**

Vous ne disposez pas de l'accès au control panel NSX pour votre Hosted Private VMware Cloud Director on OVHcloud.

**Limitation Load Balancer**

Les fonctionnalités de Load Balancing au sein de VCD on OVHcloud ne sont pas disponibles pour le moment.

**Limitation IAM**

À ce jour, IAM n'est pas disponible au sein de VMware Cloud Director on OVHcloud.

///

## Aller plus loin

Vous pouvez maintenant suivre les étapes du guide suivant : [« Guide 2 - VMware Cloud Director on OVHcloud - Network - Créer des composants réseau via le control panel VCD on OVHcloud »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)

**Networking pour VMware Cloud Director on OVHcloud - Index des guides** :

- Guide 1 : « VMware Cloud Director on OVHcloud - Network - Concepts »
- Guide 2 : « [VMware Cloud Director on OVHcloud - Network - Créer des composants réseau via le control panel VCD on OVHcloud »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)
- **Bientôt disponible** : « Guide 3 : VMware Cloud Director on OVHcloud - Network - Comment créer un tunnel IPsec avec VCD on OVHcloud ? »
- **Bientôt disponible** : « Guide 4 : VMware Cloud Director on OVHcloud - Network - Comment exploiter un block IP avec VCD on OVHcloud ? »
- **Bientôt disponible** : « Guide 5 : VMware Cloud Director on OVHcloud - Network - Comment utiliser le distributed firewalling (East - Ouest) ? »

**Notions réseau OVHcloud utiles**

Pour renforcer vos connaissances réseau au sein de l'univers OVHcloud consultez la page <https://www.ovhcloud.com/fr/network/>.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur la chaîne dédiée Discord : <https://discord.gg/ovhcloud>. 

Pour rejoindre et échanger avec notre [communauté d'utilisateurs](/links/community).