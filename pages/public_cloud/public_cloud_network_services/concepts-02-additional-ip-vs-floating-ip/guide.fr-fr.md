---
title: Concepts - Additional IP ou Floating IP
excerpt: "Découvrez comment utiliser les adresses IP publiques dans le cadre du réseau Public Cloud"
updated: 2024-04-05
---

## Objectif

Les ressources d'infrastructure peuvent être exposées à Internet via leurs propres adresses IP publiques. Pour les services créés sur une telle infrastructure, il n'est cependant pas recommandé d'utiliser ces adresses IP pour exposer les services eux-mêmes.

Lorsqu’un service doit être optimisé pour son évolutivité ou son agilité, son adresse IP publique ne doit pas être liée à un serveur ou à une machine virtuelle en particulier. Dans ce cas, les adresses IP réservées séparées constituent le meilleur moyen de rendre les services accessibles au public.

Dans l'univers Public Cloud, il est possible d'utiliser soit une **Additional IP** (auparavant appelée Failover IP), soit une **Floating IP**.

Les deux services offrent une gestion flexible de l'accès public à vos services. Ils peuvent rester agnostiques en termes d'infrastructure et être mis à l'échelle ou migrés si nécessaire.

## Concepts IP Public Cloud

### Additional IP (auparavant appelée Failover IP)

Ce type d’adresse IP publique est disponible pour les services de tous les univers OVHcloud concernés : le Bare Metal Cloud (pour les serveurs bare metal), le Public Cloud (avec OpenStack) ou le Hosted Private Cloud (avec VMware ou Nutanix par exemple).

Ils sont destinés à être utilisés dans des scénarios multiproduits, par exemple dans des opérations de failover ou des cas d'usage de cloud hybride. Ils sont facturés sur une base mensuelle.

Une fois qu'une adresse Additional IP est disponible dans votre espace client, elle peut être attachée/détachée ou déplacée entre les serveurs et les instances Public Cloud. Des modifications manuelles peuvent être nécessaires sur le backend pour appliquer de nouvelles configurations IP.

Veuillez noter que dans l'univers Public Cloud, les Additional IP ne peuvent être utilisées qu'avec des instances en **Mode Public** de mise en réseau (ayant des IP publiques dans le réseau externe).

Retrouvez plus d'informations sur la configuration d'adresses Additional IP dans [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance).

### Floating IP

Ce type d’adresse IP publique est disponible uniquement pour les [services Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) conçus pour les cas d’usages cloud native et notamment l’automatisation (ex : Terraform, Ansible). Ils servent à exposer une instance privée ou un service de réseau privé (un Load Balancer par exemple) sur le réseau public.

La configuration du système backend (instance/Load Balancer) lors de l'utilisation de l'adresse Floating IP est entièrement automatique (via le protocole DHCP), aucune configuration manuelle n'est nécessaire. Cependant, une passerelle est nécessaire pour mapper une adresse IP publique à une instance ou un service réseau.

Veuillez noter que les Floating IP ne peuvent être utilisées qu'avec des instances en **Mode Privé** de mise en réseau (au sein d'un réseau privé spécifique dans une région donnée).

Les Floating IP sont facturées à l'heure et à l'usage (pay-as-you-go).

Pour plus d'informations sur la configuration des Floating IP, consultez la page [Concepts - Réseau Public Cloud](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

### Comment obtenir des adresses IP publiques dans votre espace client ?

Dans votre [espace client OVHcloud](/links/manager), dans la section `Public Cloud`{action}, allez dans la rubrique `Network` du menu de gauche et sélectionnez `Public IPs`{.action}. Gérez ici les Additional IP et les Floating IP selon vos besoins.

![Concept IP](images/concip.png){.thumbnail}

En fonction de votre choix, vous pouvez faire votre sélection parmi les différentes régions. D’autres options de configuration sont également disponibles.

> [!warning]
>
> Les modes de tarification dépendent de l'utilisation de l'IP que vous choisissez. L'utilisation d'une adresse Additional IP est facturée au mois, tandis que l'utilisation d'une adresse Floating IP est facturée à l'heure.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
