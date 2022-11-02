---
title: Concepts - Réseau Public Cloud
slug: networking-concepts
excerpt: "Découvrez quels sont les concepts de base du Public Cloud Networking"
section: Concepts
order: 01
---

**Dernière mise à jour le 02/11/2022**

## Objectif

**Cette page explique les concepts de base du réseau Public Cloud OVHcloud.**

## Concepts du réseau Public Cloud

### Private network - Notions

Un réseau privé vous permet de construire une infrastructure réseau isolée, fiable et performante pour votre application dans le cloud.

Les réseaux privés du Public Cloud permettent de configurer votre réseau de manière totalement gérée, à l'aide de concepts réseau courants tels que les sous-réseaux et le routage. Associés à des composants réseau tels que la [Gateway](#gateway), le [Load Balancer](#lodbalancer) ou la [Floating IP](#floatingip), ils vous permettent de construire rapidement et simplement une infrastructure complète de bout en bout, de vos serveurs back end à vos utilisateurs.

### Réseaux privés du Public Cloud

Les réseaux privés du Public Cloud sont construits au-dessus d’un [vRack](https://www.ovh.com/ca/fr/solutions/vrack/), un service OVHcloud fournissant un réseau privé global pouvant être affecté à un projet Public Cloud.

Le réseau privé Public Cloud est une ressource régionale qui peut être configurée de deux manières différentes : **mono-région** ou **multi-région**, où le terme « région » désigne les régions de disponibilité du Public Cloud. Retrouvez plus d'informations [sur notre site](https://www.ovhcloud.com/fr-ca/public-cloud/regions-availability/).

- En mode **mono-région**, un seul réseau privé est créé (une région sélectionnée), sans possibilité de connectivité inter-région.
- En mode **multi-région**, un réseau privé est créé dans chaque région sélectionnée. La connectivité entre les régions est rendue possible par la configuration d'un domaine de broadcast unique sur tous les réseaux privés (c'est-à-dire la configuration d'un même vRack, VLAN et sous-réseau sur les réseaux privés dans toutes les régions).

Chaque type de réseau privé peut alors avoir des sous-réseaux attachés pour permettre aux ressources de communiquer. Ces sous-réseaux sont simplement des blocs IP d'un réseau privé dans une région donnée.

Un sous-réseau (ou des parties de celui-ci) peut être assigné à des instances utilisant le protocole DHCP pour une configuration automatique.

Les réseaux privés du Public Cloud utilisent les VLAN L2 (*Layer-2*) pour séparer les domaines de broadcast les uns des autres. Pour plus d'informations, lisez [la section VLAN ci-dessous](#VLANcluster).

Pour plus d'informations sur les réseaux et sous-réseaux privés, consultez la documentation OpenStack :

- <https://docs.openstack.org/liberty/install-guide-rdo/launch-instance-networks-private.html>
- <https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/subnet.html>


### DHCP et plages IP pour les réseaux privés Public Cloud

Le protocole DHCP (Dynamic Host Configuration Protocol, [RFC 2131](https://datatracker.ietf.org/doc/html/rfc2131)) permet un adressage plus facile des ressources grâce à la configuration automatique.

Le service DHCP de Public Cloud permet la configuration automatique des Floating IPs. Il peut être activé dans les régions où un réseau privé Public Cloud est créé. Le DHCP n'est pas compatible avec le service Additional IP OVHcloud.

### Réseau vRack OVHcloud

Le vRack OVHcloud est un réseau privé transverse. Il est conçu pour permettre des architectures privées complexes de plusieurs datacenters à l’échelle mondiale, interconnectant différents produits dans différents datacenters répartis dans différentes régions. Pour en savoir plus, rendez-vous sur la page web du [vRack](https://www.ovh.com/ca/fr/solutions/vrack/).

### Réseau privé Public Cloud vs vRack OVHcloud

Les réseaux privés du Public Cloud OVHcloud sont créés à l'intérieur d'un réseau vRack (des VLAN peuvent être utilisés pour du clustering supplémentaire si nécessaire). Cela signifie que les schémas d'adressage entre régions d'un même vRack/VLAN ne peuvent se chevaucher pour permettre la communication.

### vRack OVHcloud - Clustering avec les VLAN <a name="vlancluster"></a>

Pour des cas d’utilisation plus avancés, chaque vRack peut être encore davantage mis en cluster avec les VLAN L2 (*Layer-2*) (jusqu’à 4000 VLAN sont disponibles par vRack unique). Un réseau privé Public Cloud peut être placé dans chaque VLAN.

Ainsi, de nombreux scénarios sont possibles.

- **Réseaux privés mono-région** : L'utilisation d'un réseau privé avec différents VLAN dans différentes régions permet de diviser un domaine de broadcast en régions locales. Ce cas d'usage peut être sélectionné pour des raisons de compatibilité avec certaines des nouvelles fonctions réseau (ex : Load Balancer, Gateway) ou des scénarios de reprise d’activité.
- **Réseaux privés multi-région** : Pour réaliser l'interconnectivité des ressources entre les régions, un même vRack/VLAN/subnet doit être utilisé pour créer un réseau privé dans chaque région. Veuillez noter que différentes plages d'IP DHCP doivent être utilisées dans différentes régions. Ce type de réseau privé crée des domaines de broadcast entre les régions, ce qui peut être utile dans certains cas, mais qui n'est pas compatible avec certains des nouveaux services réseaux (ex : Load Balancer, Gateway).
- **Connectivité privée entre différentes lignes de produits** : Les ressources des univers Bare Metal Cloud ou Hosted Private Cloud peuvent être utilisées conjointement avec les services Public Cloud en s’appuyant sur un même vRack/VLAN d’interconnectivité.

### Connecter des ressources Public Cloud à Internet

L'infrastructure OVHcloud offre de multiples façons d'accéder à Internet ou d'exposer des ressources Public Cloud sur Internet.

#### Mode Public : une IP publique est attachée directement à l'instance <a name="publicmode"></a>

Les instances Public Cloud utilisent des adresses IP publiques qui sont attachées à un port public pour l'accès à Internet. Comme chaque instance est exposée à Internet séparément, la sécurité doit être traitée sur chaque instance.

Ce mode permet tout de même de connecter des instances à des réseaux privés à des fins d'interconnexion.}

Les adresses IP publiques OVHcloud directement attachées aux instances en mode public **ne sont pas** conçues pour être déplacées vers d'autres instances ou services réseau. Pour une utilisation agnostique de l'infrastructure, la méthode conseillée est d'utiliser une adresse Floating IP qui est liée à votre service mais pas à l'instance spécifique.

N'oubliez pas que certains services (comme un Load Balancer ou une Gateway) ne sont pas compatibles avec des instances en mode Public.

#### Mode privé : l'instance reste privée (sauf si une Floating IP ou un Load Balancer est attaché)

Dans ce mode, une instance nouvellement créée n'a pas d'IP publique attachée à un port. L'instance restera entièrement privée (pas de connectivité publique) sauf si :

- Une adresse Floating IP y est attachée (via Gateway) pour des cas d'usage de **trafic entrant**, par exemple lorsque des services doivent être exposés publiquement.
- Le Load Balancer avec Floating IP est configuré pour le **trafic entrant**, de sorte que les services situés sur l'instance peuvent être exposés à Internet.
- La Gateway SNAT est configurée dans le réseau privé pour les cas d'utilisation d'**accès sortant**. Cela n'activera que l'accès à Internet, sans exposer de ressources privées. 

En mode privé, les utilisateurs peuvent définir un point d'entrée unique (une Gateway) qui gère les règles de trafic entrant/sortant. Cela simplifie la gestion de la sécurité : Il n'est pas nécessaire de surveiller toutes les ressources pour déterminer si les règles d'accès public au trafic sont correctes.

Si vous souhaitez accéder à votre instance entièrement privée depuis Internet, les options suivantes sont disponibles :

- Vous pouvez créer une « instance proxy SSH » (également appelée « jump host ») avec une adresse publique Floating IP d'un côté et un réseau privé (celui de l'instance privée) de l'autre. Connectez-vous à cet hôte puis à l'instance privée.
- Vous pouvez attribuer temporairement une Floating IP à une telle instance pour la durée d'accès.

> [!primary]
> Consultez notre dépôt [Bastion sur GitHub](https://github.com/ovh/the-bastion) pour plus de détails sur la création de proxies SSH.
>

#### Public Cloud Gateway (avec SNAT) <a name="gateway"></a>

Si une connexion d'une instance entièrement privée à des réseaux extérieurs (Internet) est nécessaire, l'utilisation de la Gateway avec le *Source Network Address Translation* (SNAT) est la méthode appropriée. 

L'adresse IP privée de votre ressource (instance) est « traduite » en une adresse IP publique (lui permettant d'atteindre les ressources publiques). La réponse sera à son tour traduite et transmise correctement à votre ressource. L'IP publique peut ainsi être partagée entre de nombreux services.

Il est important de noter qu’une ressource (instance) reste totalement privée dans ce scénario. Aucun type d'accès initié depuis le réseau externe n'est possible.

![PCI Networking](images/netcon3.png){.thumbnail}

> [!primary]
> La Gateway ne prend actuellement en charge que les réseaux privés mono-région. Il s'agit du mode de réseau privé recommandé pour les configurations de niveau « production » avec ce service (y compris le Load Balancer public-privé qui nécessite une Gateway). Les autres configurations ne sont pas prises en charge.
>

#### Load Balancer dans un réseau privé <a name="loadbalancer"></a>

OVHcloud propose l'Octavia Load Balancer dans le cadre de l'écosystème Public Cloud. Il offre la plus grande flexibilité pour faire évoluer vos applications.

Le Public Cloud Load Balancer reste entièrement privé, il a donc besoin d'un service Gateway pour accéder au réseau public et d'une Floating IP pour l'exposition du service sortant.

![PCI Networking](images/netcon4.png){.thumbnail}

Pour en savoir plus, consultez notre guide [Load Balancer](https://docs.ovh.com/ca/fr/publiccloud/network-services/getting-started-with-load-balancer-public-cloud/) .

### Adresses IP publiques

#### OVHcloud Floating IP pour Public Cloud <a name="floatingip"></a>

OVHcloud Floating IP fournit des adresses IP publiques flexibles et agnostiques de l'infrastructure pour les cas d'usage d'automatisation. Il permet d’exposer vos services Public Cloud sur Internet en les mappant soit sur votre instance privée, soit sur une fonction réseau (un Load Balancer par exemple). Il nécessite une Gateway pour fonctionner (pour le mapping entre IP publiques et IP privées) et ne supporte que l'IP version 4.

Grâce à des attributions entièrement automatisées via DHCP et un modèle de facturation à l’usage, le service Floating IP est pensé pour une utilisation automatisée (ex : Ansible, Terraform).

L'objectif principal de la solution Floating IP est l'exposition de services Web à Internet. Il peut s'agir d'un service sur une instance unique ou d'un cluster d'instances avec un Load Balancer en façade. La solution Floating IP est donc idéale pour les tests de version des applications et l'automatisation des CI/CD (ex: déploiements *blue-green*, *canary*, *active fallback*).

![PCI Networking](images/netcon5.png){.thumbnail}

La logique des Floating IP est alignée sur notre concept régional Public Cloud qui permet de les annoncer depuis une seule région.

#### Additional IP OVHcloud (auparavant appelée Failover IP)

L'Additional IP OVHcloud est un autre type d'adresse IP publique agnostique du service. Les adresses Additional IP vous permettent de basculer entre les services attachés. Par rapport aux Floating IP, elles sont plus statiques car elles nécessitent une configuration supplémentaire directement sur l'hôte. Elles sont donc plus adaptées pour interconnecter les services OVHcloud de différentes lignes de produits.

Par exemple, vous pouvez appliquer un concept de cloud hybride basé sur un mélange de serveurs Bare Metal et de ressources Public Cloud ou d'autres services OVHcloud.

Veuillez noter que l'Additional IP ne peut être utilisée qu'avec des instances en [mode public](#publicmode), par opposition à l'utilisation d'une adresse Floating IP.

Apprenez-en plus sur les Additional IP et Floating IP sur la [page concept dédiée](https://docs.ovh.com/ca/fr/publiccloud/network-services/additional-ip-vs-floating-ip/).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.