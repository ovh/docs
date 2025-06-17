---
title: Public Cloud Network Services - Limites connues
excerpt: 'Prérequis et limites à respecter'
updated: 2024-11-12
---

## Projets vRack et Public Cloud

Pour un projet Public Cloud donné, vous ne pouvez attacher qu'un seul vRack. Si vous souhaitez créer un réseau privé entre 2 projets Public Cloud (ou plus), vous devez attacher le même vRack à ces projets Public Cloud.

## Load Balancer Floating IP dans l'espace client OVHcloud

Actuellement, la page détaillant le Load Balancer dans l'espace client OVHcloud ne contient pas l'adresse FLoating IP associée à un Load Balancer.

Vous pouvez retrouver cette information :

- dans [Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) ;
- via le [CLI OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) en effectuant `openstack floating ip list` et `openstack loadbalancer list` ;
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

## Bande passante des instances

Pour atteindre la bande passante maximale fournie avec chaque instance, vous pourriez avoir besoin d'utiliser le **multi-flow**.

Par exemple, lorsque vous utilisez `iperf` pour tester la bande passante de votre instance, vous pouvez activer le multi-flow en ajoutant l'option `-P n` ou `--parallel n`. Si n = 1 (qui est la valeur par défaut si cette option est omise), vous testez la bande passante avec un seul flux. Pour atteindre la bande passante maximale, vous devez augmenter la valeur de n.

## Mise à jour du pool d'allocation des IPs de sous-réseau

Lors de la mise à jour d'un pool d'allocation, par exemple de [10.0.0.2:10.0.0.255] à [10.0.0.128:10.0.0.255], toutes les IP déjà utilisées avant la mise à jour du pool d'allocation sont conservées même si elles ne sont pas dans le nouveau pool d'allocation.

Par exemple, si le DHCP du sous-réseau est activé, les IP 10.0.0.2 et 10.0.0.3 seront utilisées par les serveurs DHCP et continueront à être utilisées après la mise à jour du pool.

Pour libérer ces IP, vous devez supprimer les deux ports DHCP. Ils seront recréés automatiquement dans le pool d'allocation mis à jour. Cela peut être fait dans Horizon ou en utilisant l'interface de ligne de commande OpenStack.

Par exemple, vous pouvez supprimer tous les ports DHCP du réseau privé avec l'ID <PRIVATE_NETWORK_ID> via la commande suivante :

```bash
openstack port list --network <PRIVATE_NETWORK_ID> --device-owner network:dhcp -f value -c ID | xargs -I {} openstack port delete {}
```

Ensuite, vérifiez les ports nouvellement créés qui devraient être dans le pool d'allocation d'IP mis à jour via la commande suivante :

```bash 
openstack port list --network <PRIVATE_NETWORK_UID> --device-owner network:dhcp
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                        | Status |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
| 4d991711-4322-4934-a06e-2e2b9cff2a56 |      | fa:16:3e:cc:48:27 | ip_address='10.0.0.129', subnet_id='578deb7c-211f-4f0f-8e45-c8ed07b3e16b' | ACTIVE |
| 738e3c59-439d-4eed-bded-c7c301717a8c |      | fa:16:3e:62:32:5e | ip_address='10.0.0.128', subnet_id='578deb7c-211f-4f0f-8e45-c8ed07b3e16b' | ACTIVE |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
```

## Nous voulons vos retours !

Nous serions ravis de vous aider à répondre à vos questions et que vous nous fassiez part de vos commentaires.

Êtes-vous sur Discord ? Connectez-vous à notre chaîne sur <https://discord.gg/ovhcloud> et interagissez directement avec l'équipe qui construit nos services !

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.
