---
title: Public Cloud Network Services - Limites connues
excerpt: 'Prérequis et limites à respecter'
updated: 2023-11-14
---

## IP utilisées par les services

Lorsqu'un service est généré dans un sous-réseau, il utilise certaines IP du CIDR du sous-réseau. Le tableau suivant indique le nombre d'IP utilisées par chaque service. Si le sous-réseau dispose d'un « petit » nombre d'IP disponibles, cela peut avoir un impact. Si tous les services L3 sont utilisés, le nombre total d’IP utilisées sera de 7. Nous vous conseillons d'utiliser au moins un masque `/28`.

| IP utilisées par le service :| Dans le pool d'allocation DHCP | Hors du pool d'allocation (gateway_ip) |
| :---: | :---: | :---: |
| DHCP | 2 | |
| Public Cloud Gateway | 1 | 1 |
| Public Cloud Load Balancer (Octavia) | 3 | |

## Nous voulons vos retours !

Nous serions ravis de vous aider à répondre à vos questions et que vous nous fassiez part de vos commentaires.

Êtes-vous sur Discord ? Connectez-vous à notre chaîne sur <https://discord.gg/ovhcloud> et interagissez directement avec l'équipe qui construit nos services !

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.
