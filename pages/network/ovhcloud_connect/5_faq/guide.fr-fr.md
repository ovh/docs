---
title: 'OVHcloud Connect - Foire aux questions (FAQ)'
excerpt: 'Trouvez des réponses aux questions les plus fréquentes sur OVHcloud Connect'
updated: 2026-02-18
---

## Général

### Qu'est-ce qu'OVHcloud Connect ?

OVHcloud Connect (OCC) est une connexion réseau privée et dédiée entre votre infrastructure et OVHcloud. Elle contourne l'internet public et offre une **latence plus faible, une bande passante plus élevée et une sécurité renforcée** par rapport aux connexions VPN ou via internet.

Consultez [Qu'est-ce qu'OVHcloud Connect ?](../1.1_introduction_to_ovhcloud_connect/guide.fr-fr.md) pour une présentation complète.

### Quelle est la différence entre Direct et Provider ?

| | OVHcloud Connect Direct | OVHcloud Connect Provider |
|---|---|---|
| Connexion physique | Vous gérez le cross-connect au PoP | Le fournisseur gère la connexion du dernier kilomètre |
| Débit | 1 Gbps ou 10 Gbps | 1 Gbps ou 10 Gbps |
| Délai de mise en service | Jours à semaines (provisionnement du cross-connect) | Minutes à heures (circuit virtuel du fournisseur) |
| Idéal pour | Organisations disposant d'une présence en colocation | Multi-cloud, sites distants, déploiement plus rapide |

### Quels fournisseurs sont pris en charge ?

OVHcloud Connect Provider fonctionne avec :

- **Megaport** — VXC et MCR (Cloud Router)
- **Equinix Fabric** — Connexions virtuelles
- **Console Connect** (PCCW Global) — Connexions à la demande

Consultez [Fournisseurs](../1.3_providers/guide.fr-fr.md) pour plus de détails.

### Où OVHcloud Connect est-il disponible ?

OVHcloud Connect est disponible dans les principaux Points de présence (PoP) en Europe, en Amérique du Nord et en Asie-Pacifique. Consultez [Localisations des PoP et régions](../1.4_pop_locations_regions/guide.fr-fr.md) pour la liste complète.

### OVHcloud peut-il héberger mon routeur ?

Non. OVHcloud n'héberge pas l'équipement réseau des clients. Pour utiliser OVHcloud Connect Direct, vous devez disposer de **votre propre espace en baie** dans un datacenter où OVHcloud dispose d'un point de présence, avec votre routeur installé et exploité par vos soins. Vous pouvez ensuite commander un service OVHcloud Connect Direct ainsi qu'un cross-connect entre votre baie et le PoP OVHcloud à l'intérieur de ce site.

Si vous n'avez pas de présence dans un PoP OVHcloud, utilisez plutôt [OVHcloud Connect Provider](../3.2_order_provider/guide.fr-fr.md) — votre fournisseur gérera la connectivité du dernier kilomètre pour vous.

---

## Commande et facturation

### Comment commander OVHcloud Connect ?

- **Direct** : [Commander une connexion Direct](../3.1_order_direct/guide.fr-fr.md)
- **Provider** : [Commander une connexion Provider](../3.2_order_provider/guide.fr-fr.md)

Vous pouvez commander via l'espace client OVHcloud, l'API ou Terraform.

### Combien de temps faut-il pour que mon service OVHcloud Connect soit livré ?

**Direct :**

- La **lettre d'autorisation (LOA)** est émise **en quelques minutes** après la commande.
- Vous disposez ensuite de **60 jours** pour finaliser l'interconnexion : commander le cross-connect auprès de l'opérateur de votre datacenter et raccorder physiquement votre équipement au panneau de brassage OVHcloud.
- Le service est livré dès qu'OVHcloud détecte de la lumière sur le port. Si aucune lumière n'est détectée dans les 60 jours, le service est néanmoins considéré comme opérationnel et **la facturation démarre**.

**Provider :**

- OVHcloud génère une **clé d'appairage** (clé de service) immédiatement après la commande.
- Le service est livré dès que votre fournisseur consomme la clé d'appairage et provisionne le circuit virtuel — généralement en **quelques minutes à quelques heures** chez les fournisseurs à la demande tels que Megaport, Equinix Fabric ou Console Connect.

### Comment OVHcloud Connect est-il facturé ?

OVHcloud Connect est facturé mensuellement en fonction de :

- **Type de connexion** (Direct ou Provider)
- **Bande passante** (1 Gbps ou 10 Gbps)
- **Nombre de services**

Les connexions Provider peuvent également entraîner des frais de la part du fournisseur (Megaport, Equinix, etc.). Consultez la [page de tarification OVHcloud](https://www.ovhcloud.com/fr/network/ovhcloud-connect/) pour les tarifs en vigueur.

### Puis-je augmenter la bande passante sans interruption ?

Non. Les changements de bande passante nécessitent la commande d'un nouveau service au débit souhaité ainsi que la migration du trafic. Planifiez la migration pendant une fenêtre de maintenance.

### Comment résilier un service ?

- **Direct** : [Résilier une connexion Direct](../3.3_cancel_direct/guide.fr-fr.md)
- **Provider** : [Résilier une connexion Provider](../3.4_cancel_provider/guide.fr-fr.md)

> **Important :** retirez toujours le circuit virtuel du fournisseur et la configuration BGP avant de résilier le service OVHcloud, afin d'éviter des problèmes de routage.

---

## Technique

### Quel ASN BGP OVHcloud utilise-t-il ?

OVHcloud utilise l'ASN **35540** pour le peering BGP d'OVHcloud Connect. Vous devez configurer votre côté avec un ASN différent (généralement un ASN privé dans la plage 64512–65534).

### Quel est le nombre maximal de préfixes BGP ?

OVHcloud prend en charge un maximum de **100 préfixes** par session BGP. Agrégez vos routes pour rester dans cette limite. Si vous avez besoin de plus, contactez le support OVHcloud.

### OVHcloud Connect prend-il en charge IPv6 ?

Actuellement, OVHcloud Connect prend en charge principalement **IPv4**. Vérifiez auprès du support OVHcloud la disponibilité d'IPv6 la plus récente.

### Quel MTU est pris en charge ?

Le MTU par défaut est de **1500 octets**. Les jumbo frames (9000 octets) peuvent être pris en charge sur les connexions Direct selon le PoP — confirmez-le avec le support OVHcloud avant configuration.

### Puis-je utiliser OVHcloud Connect avec Hosted Private Cloud (VMware) ?

Oui. Associez votre service OVHcloud Connect à un vRack, puis ajoutez votre service Hosted Private Cloud au même vRack. Les VM VMware peuvent utiliser la connexion privée via les port groups attachés au vRack.

### Puis-je utiliser OVHcloud Connect avec des instances Public Cloud ?

Oui. Attachez votre projet Public Cloud au même vRack que votre service OVHcloud Connect. Affectez un réseau privé vRack à vos instances pour faire transiter le trafic via le lien OCC.

### Que se passe-t-il si ma session BGP tombe ?

Si vous disposez d'un seul lien OVHcloud Connect, le trafic entre votre réseau et OVHcloud cessera de circuler tant que la session BGP n'est pas rétablie. Pour les charges de production, utilisez toujours une [architecture résiliente](../1.5_multi_az/guide.fr-fr.md) avec deux liens et un basculement BGP.

### Puis-je utiliser BFD (Bidirectional Forwarding Detection) ?

La prise en charge de BFD dépend du type d'OVHcloud Connect et du PoP. Contactez le support OVHcloud pour confirmer la disponibilité de BFD pour votre service. BFD peut réduire significativement les délais de basculement, d'environ 90 secondes à moins d'une seconde.

---

## Multi-cloud

### Puis-je connecter AWS, Azure et GCP à OVHcloud simultanément ?

Oui. Commandez des services OVHcloud Connect Provider distincts et reliez chacun au cloud correspondant :

- [AWS via Direct Connect](../4.1_simple/4.3.1_aws_simple/guide.fr-fr.md)
- [Azure via ExpressRoute](../4.1_simple/4.4.1_azure_simple/guide.fr-fr.md)
- [GCP via Interconnect](../4.1_simple/4.5.1_gcp_simple/guide.fr-fr.md)

Tous peuvent être associés au même vRack, ce qui permet au trafic de circuler entre l'ensemble des clouds via OVHcloud.

### Le trafic cloud-à-cloud peut-il transiter par OVHcloud ?

Techniquement, si toutes les connexions cloud partagent le même vRack et que les préfixes BGP sont échangés, le trafic peut transiter par OVHcloud. Cependant, cela n'est **pas recommandé** en production — utilisez des interconnexions cloud-à-cloud dédiées (par exemple AWS ↔ Azure) pour le trafic direct entre clouds.

### Ai-je besoin d'un vRack distinct pour chaque connexion cloud ?

Non. Vous pouvez associer plusieurs services OVHcloud Connect au **même vRack**. Cela permet à tous les réseaux connectés (on-premises, AWS, Azure, GCP) de communiquer via le vRack partagé.

---

## Résilience et SLA

### Quel SLA propose OVHcloud Connect ?

Les niveaux de SLA dépendent de votre architecture :

| Architecture | SLA typique |
|---|---|
| Lien unique, AZ unique | ~99,9 % |
| Doubles liens, Multi-AZ | ~99,95 %–99,99 % |

Consultez [SLA](../1.7_slas/guide.fr-fr.md) pour les détails complets et les conditions.

### Comment mettre en place une connexion résiliente ?

Commandez deux services OVHcloud Connect dans des **PoP différents**, associez les deux au même vRack et configurez le basculement BGP avec Local Preference et AS-path prepending.

Tutoriels :
- [On-premises résilient](../4.2_resilient/4.1.2_onprem_resilient/guide.fr-fr.md)
- [WAN résilient](../4.2_resilient/4.2.2_wan_resilient/guide.fr-fr.md)
- [AWS résilient](../4.2_resilient/4.3.2_aws_resilient/guide.fr-fr.md)
- [Azure résilient](../4.2_resilient/4.4.2_azure_resilient/guide.fr-fr.md)
- [GCP résilient](../4.2_resilient/4.5.2_gcp_resilient/guide.fr-fr.md)

### Combien de temps prend un basculement BGP ?

Avec les timers BGP par défaut (hold time = 90 secondes), le basculement peut prendre **30 à 90 secondes**. Avec des timers agressifs ou BFD activé, le basculement peut s'effectuer en **moins d'une seconde**.

---

## Résolution des problèmes

### Ma connexion est commandée mais n'est pas active

| Cause possible | Action |
|---|---|
| Cross-connect non finalisé (Direct) | Contactez votre prestataire de colocation ; vérifiez le statut de la LOA |
| VXC du fournisseur non provisionné (Provider) | Vérifiez le portail du fournisseur ; assurez-vous que la clé d'appairage est correcte |
| BGP non configuré | [Configurer BGP](../3.7_occ_l3_bgp/guide.fr-fr.md) |
| vRack non associé | [Associer un vRack](../3.5_associate_vrack/guide.fr-fr.md) |

### Je vois la session BGP mais je n'ai pas de joignabilité

- Vérifiez que **les routes sont bien échangées** (consultez `show ip bgp summary` ou l'API OVHcloud).
- Assurez-vous que **les sous-réseaux sont corrects** et non chevauchants.
- Vérifiez l'absence de **règles de pare-feu** bloquant le trafic d'un côté ou de l'autre.
- Vérifiez que le **marquage VLAN** correspond entre votre équipement et OVHcloud.

### Le trafic est lent ou subit des pertes de paquets

- Vérifiez les erreurs d'interface et les compteurs CRC sur votre routeur.
- Vérifiez que la **bande passante** de votre OVHcloud Connect correspond à votre charge de trafic.
- Recherchez les **incompatibilités de MTU** susceptibles de provoquer de la fragmentation.
- Utilisez le [guide de supervision](../3.9_monitor/guide.fr-fr.md) pour vérifier la santé du lien.

### Comment ouvrir un ticket de support ?

1. Rendez-vous sur l'[espace client OVHcloud](https://www.ovh.com/manager/).
2. Cliquez sur **Support** puis **Créer un ticket**.
3. Sélectionnez **Réseau** puis **OVHcloud Connect**.
4. Indiquez le nom de votre service, les détails de l'erreur et toute sortie de diagnostic.

Consultez [Suivi d'incident](../3.10_incident_followup/guide.fr-fr.md) pour les procédures d'escalade détaillées.

---

## Automatisation

### Puis-je gérer OVHcloud Connect avec Terraform ?

Oui. Utilisez le [provider Terraform OVHcloud](https://registry.terraform.io/providers/ovh/ovh/latest) (version ≥ 2.7.0) pour gérer les ressources OVHcloud Connect. Consultez [Automatisation](../1.6_automation/guide.fr-fr.md) pour des exemples.

### Existe-t-il une API pour OVHcloud Connect ?

Oui. L'API OVHcloud offre une gestion complète du cycle de vie :

- **Endpoint EU** : `https://eu.api.ovh.com/v1/ovhCloudConnect/`
- **Endpoint CA** : `https://ca.api.ovh.com/v1/ovhCloudConnect/`

Explorez l'API sur [api.ovh.com/console](https://api.ovh.com/console/#/ovhCloudConnect).

Consultez [Automatisation](../1.6_automation/guide.fr-fr.md) pour des exemples de SDK et d'API.

---

## Vous avez encore des questions ?

- Parcourez la [documentation complète](../1.1_introduction_to_ovhcloud_connect/guide.fr-fr.md)
- Consultez la [communauté OVHcloud](https://community.ovh.com/)
- Contactez le [support OVHcloud](https://www.ovh.com/manager/) via l'espace client

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
