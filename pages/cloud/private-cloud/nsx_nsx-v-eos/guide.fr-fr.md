---
title: VMware NSX-v - Fin de prise en charge
excerpt: "Analysez votre utilisation des fonctionnalités NSX-v et choisissez entre les différents scénarios possibles d’évolution, allant de la désactivation du composant NSX-v jusqu'à la migration vers NSX"
updated: 2023-06-26
---

## Objectif

Le composant NSX-v ne sera plus maintenu par VMware à compter du 15 janvier 2024. Ce guide vous aide à analyser votre utilisation des fonctionnalités de NSX-v et, en fonction de celle-ci, vous propose différents scénarios d’évolution : de la désactivation du composant NSX-v jusqu'à la migration vers son successeur NSX-T (appelé NSX par VMware depuis la version 4.0).

## En pratique

### Identifier votre utilisation de NSX-v

Pour identifier votre utilisation de la fonctionnalité NSX-v dans votre environnement Hosted Private Cloud, vous devez vous poser les questions suivantes :

- Est-ce que j’utilise un VXLAN ?
- Est-ce que j’utilise des règles de Distributed Firewall ?
- Est-ce que j'utilise un Distributed Logical Router ?
- Est-ce que j'utilise une Edge Services Gateway ?
- Est-ce que j’utilise un VPN SSL ?

#### Je n'utilise aucune des fonctionnalités de NSX-v

Si vous n'utilisez aucune des fonctionnalités ci-dessus, vous pourrez désactiver NSX-v. Vous serez notifié lorsque le processus de désactivation sera disponible.

#### Je n'utilise que du VXLAN

Si la seule fonctionnalité que vous utilisez est le VXLAN, les choix suivants s'offre à vous :

- Migrer vers NSX (voir les [détails](#migration) ci-dessous),
- Reconfigurer votre réseau afin de remplacer le VXLAN par un [VLAN](/pages/cloud/private-cloud/creation_vlan).

Si vous souhaitez le migrer vers des VLAN, pour vous aider à configurer votre réseau, vous pouvez utiliser cet appel d'API pour générer une correspondance entre VXLAN et VLAN.
> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/generateVxlanToVrackMapping
>

> **Paramètres:**
>
> serviceName: la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`.

> [!primary]
>
> Retrouvez plus d'informations sur l'utilisation des API OVHcloud dans notre guide « [Premiers pas avec les API OVHcloud](/pages/account/api/first-steps) ».

Pour créer vos réseaux VLAN, vous pouvez suivre cette documentation : [Création de VLAN](/pages/cloud/private-cloud/creation_vlan).
Vous devrez ensuite désactiver NSX-v. Vous serez notifié lorsque le processus de désactivation sera disponible.

#### J'utilise certaines des fonctionnalités de NSX-v

Nous vous recommandons de migrer vers NSX (voir les [détails](#migration) ci-dessous) pour bénéficier de toutes ses fonctionnalités incluses.

Une autre possibilité est de déployer des composants alternatifs (Load Balancer, Firewall, VPN, ...) puis de désactiver NSX-v (vous serez notifié lorsque le processus de désactivation sera disponible).

### Migrer vers NSX <a name="migration"></a>

Le logiciel NSX est activé au niveau du Virtual Datacenter (vDC). Afin de migrer de NSX-v vers NSX, vous pouvez commander un nouveau vDC pour votre service Hosted Private Cloud existant (la fonctionnalité sera disponible à partir du 18 juillet 2023), ajouter de nouveaux Hosts puis migrer de votre vDC actuel vers le nouveau vDC en utilisant VMware vMotion.

La documentation pour migrer vers NSX sera disponible prochainement.

Nos équipes du support et [nos experts de l'équipe Professional Services](https://www.ovhcloud.com/fr/professional-services/) pourront vous fournir une assistance lorsque la procédure de migration sera disponible.

## Aller plus loin <a name="gofurther"></a>

[Premiers pas avec NSX](/pages/cloud/private-cloud/nsx-01-first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

