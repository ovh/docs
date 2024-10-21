---
title: Public Cloud Network Services - Limites connues
excerpt: 'Prérequis et limites à respecter'
updated: 2024-08-09
---

## Projets Vrack et Public Cloud

Pour un projet Public Cloud donné, vous ne pouvez attacher qu'un seul vRack. Si vous souhaitez créer un réseau privé entre 2 projets Public Cloud (ou plus), vous devez attacher le même vRack à ces projets Public Cloud.

## Load Balancer Floating IP dans l'espace client OVHcloud

Actuellement, la page détaillant le Load Balancer dans l'espace client OVHcloud ne contient pas l'adresse FLoating IP associée à un Load Balancer.

Vous pouvez retrouver cette information :

- dans [Horizon](/pages/public_cloud/compute/introducing_horizon) ;
- via le [CLI OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)) en effectuant `openstack floating ip list` et `openstack loadbalancer list` ;
- en utilisant l'API OVHcloud :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}
>

## IP utilisées par les services

Lorsqu'un service est généré dans un sous-réseau, il utilise certaines IP du CIDR du sous-réseau. Le tableau suivant indique le nombre d'IP utilisées par chaque service. Si le sous-réseau dispose d'un « petit » nombre d'IP disponibles, cela peut avoir un impact. Si tous les services L3 sont utilisés, le nombre total d’IP utilisées sera de 7. Nous vous conseillons d'utiliser au moins un masque `/28`.

| IP utilisées par le service :| Dans le pool d'allocation DHCP | Hors du pool d'allocation (gateway_ip) |
| :---: | :---: | :---: |
| DHCP | 2 | |
| Public Cloud Gateway | 1 | 1 |
| Public Cloud Load Balancer (Octavia) | 3 | |

## Trafic ICMP sur les IPs du Load Balancer

Le trafic ICMP est bloqué sur les IPs (privées et publique via floating IP) du Load Balancer. Le `ping` sur ces IPs ne répondra donc pas.

## Nous voulons vos retours !

Nous serions ravis de vous aider à répondre à vos questions et que vous nous fassiez part de vos commentaires.

Êtes-vous sur Discord ? Connectez-vous à notre chaîne sur <https://discord.gg/ovhcloud> et interagissez directement avec l'équipe qui construit nos services !

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.
