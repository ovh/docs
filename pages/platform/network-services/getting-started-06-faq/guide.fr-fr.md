---
title: Public Cloud Network Services - FAQ
slug: faq
excerpt: Foire aux questions sur les services réseau Public Cloud
section: Premiers pas
order: 03
---

**Dernière mise à jour le 02/11/2022**

## Objectif

Retrouvez ici les questions les plus fréquemment posées concernant les services réseau Public Cloud.

## Load Balancer

### Le tarif de la solution Load Balancer  varie en fonction de la capacité en bande passante. Comment cela peut-il être paramétré / modifié ?

Le Load Balancer est proposé en différentes tailles (S/M/L) pour répondre au mieux aux besoins de nos clients. Ces différentes tailles sont définies par des flavors. À ce jour, pour modifier la taille de votre Load Balancer, il vous faudra en créer un nouveau, le configurer de la même manière (avec les mêmes backends que l'ancien) et reconnecter l'adresse Floating IP au nouveau Loac Balancer. Vous pourrez alors supprimer l'ancien Load Balancer.

### Puis-je utiliser mon Load Balancer avec des serveurs Bare Metal comme backends ? Puis-je utiliser mon Load Balancer avec des backends dans différentes régions Public Cloud ?

Actuellement, ces modes ne soont pas pris en charge. Pour du load balancing public-privé, les produits Gateway devaient être reliés entre eux. À ce jour, Gateway ne prend en charge que le scope mono-région dans les réseaux privés. Cela signifie également que le scope est limité au Public Cloud, seul périmètre suggéré pour des architectures de type production.<br>
À ce jour, les autres configurations (y compris l'utilisation interunivers avec des serveurs bare metal ou interrégion) ne sont pas prises en charge.

### Puis-je connecter mon Load Balancer à mon cluster Managed Kubernetes ?

Oui. Pour cela, consultez cette [documentation](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md#get-started-with-octavia-ingress-controller-for-kubernetes).

### Le compte Load Balancer utilise-t-il de la bande passante ?

Non, ce n'est pas le cas.

### Je déploie l'Octavia Load Balancer pour une utilisation dans une stack Managed Kubernetes et je veux monitorer l'Octavia Load Balancer. Est-il possible d'activer automatiquement les [métriques](https://docs.openstack.org/octavia/latest/user/guides/monitoring.html) sur le Load Balancer ?

Cette fonctionnalité est issue du composant Octavia Load Balancer de la version Yoga, qui n'est actuellement pas disponible. Nous travaillons à un upgrade de Octavia et Barbican de Victoria à Yoga. Une fois cette opération effectuée, nous vous communiquerons cette mise à jour sur [cette page](https://www.ovhcloud.com/fr-ca/public-cloud/regions-availability/).

### Comment est mise en oeuvre la redondance pour chaque type d'offre ? Les Amphoras sont-ils configurés en mode ACT/STBY ?

Oui, nous proposons le mode Active/Standby pour toutes les offres S/M/L.

### Le Load Balancer peut-il être utilisée avec des adresses Additional IP (Failover IP) ?

Non, un nouveau type d’adresse IP a été créé pour ce rôle, Floating IP. Cette nouvelle solution est plus flexible, basée sur un modèle de « paiement à l'usage » (pay-as-you-go). Avec Floating IP, vous pouvez utiliser une seule Floating IP par service Load Balancer.

### Puis-je utiliser plusieurs protocoles (UDP, TCP, HTTP) sur un même Load Balancer ?

Oui, plusieurs *listeners* (frontends) et backends peuvent être configurés. Il n'y a qu'une limitation d'une seule Floating IP par Load Balancer.

### Que se passe-t-il si l'Octavia Load Balancer reçoit plus de requêtes que prévu ? Le prix va-t-il augmenter ? En serai-je informé ?

Tout d'abord, les valeurs indiquées ne sont qu'une estimation des capacités du Load Balancer. Le prix n'augmentera pas. La tarification est liée aux types (small, medium, large) et nous ne pouvons pas changer la flavor pour le moment. Le choix d'orchestration de ses services est à la charge du client.

Nous ne vous informons pas lorsque vous atteignez les valeurs estimées. Cependant, lorsque vous les excédez (tout dépend de la charge), le Load Balancer atteindra ses performances maximales et ne pourra pas accepter de nouvelles connexions.

### Je ne vois pas l'interface du Load Balancer dans l'espace client OVHcloud. Où créer des services et modifier des paramètres ?

Load Balancer est disponible via l'interface CLI OpenStack, l'interface utilisateur Horizon et l'APIv6 OVHcloud. L’interface utilisateur de votre espace client sera disponible prochainement.

### J'utilise Load Balancer avec mon cluster Managed Kubernetes mais j'ai une erreur "failed to find Octavia endpoint for region gra: No suitable endpoint could be found in the service catalog." Que puis-je faire ?

Vérifiez si la région est la même entre Octavia Load Balancer et Managed Kubernetes.

### Lors de la mise en place de Load Balancer avec mon cluster Managed Kubernetes, j'ai une erreur "Flavor '...' is not compatible with provider 'Octavia'". Qu'est-ce que cela signifie ?

Utilisez le nom de **provider** « amphora » au lieu d'Octavia pour corriger cela.

## Gateway

### Qu’est-ce que la Gateway ? Quelle est sa place dans l’écosystème OpenStack ?

La Gateway est le nom de produit du composant Distributed Virtual Router (DvR) dans OpenStack. Elle est proposée en HA et avec une SLA.

### Les tarifs de la solution Gateway varient selon la capacité en bande passante. Comment cela peut-il être paramétré / modifié ?

La solution Gateway est proposée en différentes tailles (S/M/L) pour répondre au mieux aux besoins de nos clients. Ces différentes tailles sont définies au travers de règles de QoS. À ce jour, pour modifier la taille de la passerelle, un changement de politique QoS entre S/M/L peut être effectué.

### Est-ce que Gateway peut être utilisé avec des instances Load Balancer dans d'autres régions ?

Ce mode n'est actuellement pas pris en charge. À ce jour, la Gateway prend uniquement en charge les réseaux privés en mono-région pour Public Cloud et il s'agit du seul mode de réseau privé recommandé pour les configurations en environnement de production pour ce produit. Cela inclut également le cas d'usage du Load Balancer public-privé qui nécessite Gateway. Les autres configurations (y compris l'utilisation avec des serveurs bare metal ou multi-région) ne sont pas prises en charge.

### Le routeur virtuel L3 (Gateway) peut-il m'aider si je souhaite avoir une Gateway d'accès à Internet pour toutes les VMs de mon vRack ?

Oui, c'est le cas pour une Gateway (routeur L3 avec option SNAT). Actuellement, seules les instances en **mode privé** de réseau et connectées à un réseau privé à région unique sont prises en charge. Pour plus d'informations, consultez notre [guide concept sur le réseau Public Cloud](https://docs.ovh.com/fr/publiccloud/network-services/networking-concepts/).

### Le service Gateway sera-t-il fourni avec une IP et un port publics ?

Tout dépend de l’usage :

- Pour les cas d'utilisation sortante (outbound), nous proposons une IP publique partagée et incluse dans Gateway.
- Pour les cas d'utilisation entrante (inbound) (pour exposer un service s'exécutant sur une instance privée vers Internet), vous devez disposer d'une Floating IP à connecter via Gateway à votre instance ou service réseau.

### Comment générer une instance privée à utiliser avec l'option Gateway et SNAT ?

Vous pouvez créer un réseau privé dans une région sélectionnée et y attacher la Gateway. Puis, lors de la création d’une instance, sélectionnez « Attacher au réseau privé » et validez à l’aide du bouton « Oui, je veux que mon instance soit totalement privée ».

### J'ai créé une instance en mode privé (elle n'a que des ports privés). Comment s’y connecter ?

Deux options peuvent être utilisées : 

- Utiliser un « jump host » (SSH proxy) : Vous devez utiliser une autre instance disposant d'une Floating IP (permettant un accès externe) et d'un port privé dans le même réseau privé que votre nouvelle instance. Connectez-vous dessus et connectez-vous en SSH à l'IP privée de votre nouvelle instance.
- Associer une adresse Floating IP (au moins pendant le temps de la maintenance) à votre instance nouvellement créée et vous y connecter en utilisant cette adresse Floating IP.

## Les adresses Floating IP

### Lorsque j'essaie d'associer une Floating IP au port du réseau Ext-Net, j'obtiens l'erreur suivante : "External network ... is not reachable from subnet .... Therefore, cannot associate Port ... with a Floating IP."

Une Floating IP est une adresse IP publique flexible qui peut être associée à un port privé uniquement (port sur réseau privé dans le vRack). Une Gateway est également nécessaire pour que cela fonctionne.

### J'ai des VMs qui communiquent sur un réseau privé et je veux associer une Floating IP à une de ces VMs. Quel est le pool à choisir pour l'adresse Floating IP ?

Le pool d'une Floating IP doit être « Ext-Net » et vous pouvez l'associer à un port du réseau privé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.