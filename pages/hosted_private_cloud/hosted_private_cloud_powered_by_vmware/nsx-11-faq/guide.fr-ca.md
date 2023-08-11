---
title: NSX - FAQ
excerpt: Retrouvez les questions les plus fréquemment posées concernant NSX
updated: 2023-06-12
---

## Objectif

**Retrouvez ci-dessous les questions les plus fréquemment posées concernant NSX.**

## FAQ

<a name="bgp"></a>

### Est-il possible de faire du BGP ?

Il est impossible de faire du BGP public.

Il est toutefois possible de faire du BGP dans le vRack, une documentation sera disponible prochainement pour détailler cette solution.

<a name="addt0gw"></a>

### Comment puis-je ajouter une autre Tier-0 Gateway ?

Il est actuellement impossible d'ajouter une nouvelle Tier-0 Gateway fonctionnelle.

<a name="publicgateway"></a>

### Le bouton "Edit" dans NSX pour Tier-0 est désactivé, comment puis-je configurer la Gateway publique ?

C'est impossible par défaut. Les Tier-0 Gateways sont hébergées chacune sur un host différent, HA (High Availability) est activée et un VIP est configuré entre les 2 EDGES afin de maintenir la continuité de service. La partie HA est déjà préconfigurée par OVHCloud.

<a name="t0gwdoublebw"></a>

### Puis-je configurer une Tier-0 Gateway active-active afin d’avoir une double bande passante (garantie 10+10=20Gb/s et "théorique" 25+25Gb/s) ?

Non, c'est impossible par défaut, la configuration est gérée par OVHcloud et se fait en mode actif/passif avec un VIP (10 Gbp/s de bande passante garantie).

<a name="t0commandline"></a>

### Est-il possible de se connecter au Tier-0 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ?

Non, c'est impossible pour le Tier-0.

<a name="nsxedgeaddition"></a>

### Est-il possible de modifier ou d'ajouter des VM NSX Edge?

Non, les Edges sont gérés par OVHcloud. Les clients ne peuvent pas les modifier ou en ajouter davantage.

<a name="t1interface capacity"></a>

### Quel est le nombre maximum d'interfaces (segments connectés) sur une Tier-1 Gateway ?

Cette information se trouve dans NSX > Inventory > Capacity.

Concernant les Edges, nous nous référons aux Gateways et aux Tier-0 et Tier-1. Le Tier-0 est déjà déployé et utilise 3 IPs publiques pour faire le routage entre les Gateways actives/de secours et utilise le concept d’un VIP qui est en amont des 2 IPs publiques internes. Ce dispositif est utilisé pour le failover et la redondance.

NSX et NSX-v sont différents et pour le moment vous ne pouvez pas interrompre la configuration Tier-0 actuelle et en déployer d’autres.

<a name="t1commandline"></a>

### Est-il possible de se connecter au Tier-1 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ?

Non, c'est impossible pour le Tier-1. Différents outils sont disponibles dans NSX pour répondre à ces besoins.

<a name="addpublicicip"></a>

### Comment puis-je ajouter des IP publiques ?

Comme indiqué dans [ce guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps#display-the-ha-vip-virtual-ip-address), il n'est actuellement pas possible de créer de nouvelles adresses IP virtuelles, mais cette fonctionnalité devrait être disponible prochainement.

<a name="ipblockdistribution"></a>

### Est-ce que les blocs d’adresses IP peuvent être utilisés/distribués entre deux DC VMware dans un même PCC ?

Les blocs d'adresses IP sont dépendants du PCC et non du vDC. Il est donc possible d'utiliser le même bloc d'adresses IP entre plusieurs datacentres virtuels (sans aucune modification).

<a name="internetoutput"></a>

### Est-ce que l'output Internet est configurable ? En d’autres termes, est-il possible de déployer l’interface ?

Il n'est pas possible de gérer l'output Internet dans NSX car Edge est géré par OVHcloud, mais vous pouvez configurer le réseau sur votre VM (vSPHERE).

<a name="vrackaccess"></a>

### Le cluster de VMs aura-t-il accès au vRack ? Ou le vRack sera-t-il uniquement connecté au Edge Node ?

Le cluster NSX est totalement compatible avec le vRack. Vous pouvez ajouter le service NSX dans votre vRack PCC. Retrouvez plus d'informations à propos du vRack sur [cette page](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).

<a name="ha"></a>

### Puis-je configurer High Availability (HA) ?

Non, les NSX Edges sont configurées par OVHcloud suivant les bonnes pratiques VMware en matière de HA.

<a name="lb"></a>

### Est-il possible d'utiliser NSX Advanced Load Balancer ?

Cette fonctionnalité sera prochainement disponible.

<a name="api"></a>

### Puis-je utiliser l’API OVHcloud pour configurer et utiliser NSX ?

Oui, il est possible de le faire.

<a name="nsxterraform"></a>

### Pourquoi la gestion de NSX via Terraform est-elle réalisée via un endpoint `https://nsxt` distinct ?

L’API NSX est indépendante et non liée à l’API vSphere. C'est pourquoi nous avons créé un endpoint dédié pour l'atteindre.

<a name="veeamzerto"></a>

### Que faire de mes options Veeam et Zerto ? Sont-elles toujours compatibles avec NSX ?

Oui mais il faudra les reconfigurer après la migration vDC.

<a name="nsxedge"></a>

### Est-il possible de faire communiquer un NSX Edge entre 2 PCC ?

Oui, c'est possible.

## Aller plus loin

[Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.