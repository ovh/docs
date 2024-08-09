---
title: Public Cloud Network Services - FAQ
excerpt: Foire aux questions sur les services réseau Public Cloud
updated: 2024-08-09
---

## Objectif

Retrouvez ici les questions les plus fréquemment posées concernant les services réseau Public Cloud.

## Load Balancer

### Le tarif de la solution Load Balancer  varie en fonction de la capacité en bande passante. Comment cela peut-il être paramétré / modifié ?

Le Load Balancer est proposé en différentes tailles (S/M/L) pour répondre au mieux aux besoins de nos clients. Ces différentes tailles sont définies par des flavors. À ce jour, pour modifier la taille de votre Load Balancer, il vous faudra en créer un nouveau, le configurer de la même manière (avec les mêmes backends que l'ancien) et reconnecter l'adresse Floating IP au nouveau Load Balancer. Vous pourrez alors supprimer l'ancien Load Balancer.

### Puis-je utiliser mon Load Balancer avec des serveurs Bare Metal comme backends ? Puis-je utiliser mon Load Balancer avec des backends dans différentes régions Public Cloud ?

Oui, à condition de configurer la connectivité réseau entre le Load Balancer et votre serveur dédié (soit via le réseau privé vRack, soit via l'adresse IP publique).
Si votre réseau est correctement configuré, un Load Balancer peut rediriger le trafic vers les membres situés dans des régions Public Cloud différentes.

### Puis-je connecter mon Load Balancer à mon Managed Kubernetes Service (MKS) ?

Une version bêta est en cours pour fournir une intégration avec Managed Kubernetes Service. Merci de contacter notre [communauté Discord](https://discord.gg/ovhcloud) sur le canal **#beta-lb-for-k8s**

### Je souhaite monitorer mon Load Balancer Public Cloud. Est-il possible d’activer [metrics](https://docs.openstack.org/octavia/latest/user/guides/monitoring.html) automatiquement sur le Load Balancer ?

Oui cette fonctionnalité est disponible depuis le déploiement de la version Zed en juin 2023. Retrouvez plus d'informations sur [cette page](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus).

### Comment est mise en oeuvre la redondance pour chaque type d'offre ? Les Amphoras sont-ils configurés en mode ACT/STBY ?

Oui, nous proposons le mode Active/Standby pour toutes les offres S/M/L.

### Le Load Balancer peut-il être utilisée avec des adresses Additional IP (Failover IP) ?

Non, un nouveau type d’adresse IP a été créé pour ce rôle, Floating IP. Cette nouvelle solution est plus flexible, basée sur un modèle de « paiement à l'usage » (pay-as-you-go). Avec Floating IP, vous pouvez utiliser une seule Floating IP par service Load Balancer.

### Puis-je utiliser plusieurs protocoles (UDP, TCP, HTTP) sur un même Load Balancer ?

Oui, plusieurs *listeners* (frontends) et *pools* (backends) peuvent être configurés. Il n'y a qu'une limitation d'une seule Floating IP par Load Balancer.

### Que se passe-t-il si le Load Balancer Public Cloud reçoit plus de requêtes que prévu ? Le prix va-t-il augmenter ? En serai-je informé ?

Tout d'abord, les valeurs indiquées ne sont qu'une estimation des capacités du Load Balancer. Le prix n'augmentera pas. La tarification est liée aux types (small, medium, large) et nous ne pouvons pas changer la flavor pour le moment. Le choix d'orchestration de ses services est à la charge du client.

Il vous revient en tant que client de surveiller le Load Balancer à l'aide de la fonction de metrics et de modifier la flavor en conséquence.

### Dans une architecture Public-to-Public, quel composant doit être dimensionné pour le trafic sortant ?

Dans une architecture Public-to-Public, le trafic sortant est géré par le composant Gateway. Par conséquent, si vous utilisez cette architecture, vous devez dimensionner la Gateway en fonction de votre cas d'usage.

## Gateway

### Qu’est-ce que la Gateway ? Quelle est sa place dans l’écosystème OpenStack ?

La Gateway est le nom de produit du composant Distributed Virtual Router (DvR) dans OpenStack. Elle est proposée en High Availability et avec un Service Level Agreement.

### Les tarifs de la solution Gateway varient selon la capacité en bande passante. Comment cela peut-il être paramétré / modifié ?

La solution Gateway est proposée en différentes tailles (S/M/L) pour répondre au mieux aux besoins de nos clients. Ces différentes tailles sont définies au travers de règles de QoS. À ce jour, pour modifier la taille de la passerelle, un changement de politique QoS entre S/M/L peut être effectué.

### Est-ce que une Gateway peut être utilisée avec des instances Load Balancer dans d'autres régions ?

Non, une gateway doit être instanciée dans chaque région.

Si vous disposez d'un réseau privé s'étendant sur plusieurs régions (grâce à l'ID de VLAN id identique), vous devez lancer une Gateway dans chaque région.

Par exemple, l'architecture suivante peut être utilisée :

| Region | Private Network VLAN id | Subnet CIDR | DHCP | Gateway IP | Subnet DHCP Allocation Pool | 
-------|----|------------|------|----------|-----------------------|
 GRA11 | 42 | 10.0.0.0/8 | true | 10.0.0.1 | 10.0.0.2 - 10.0.0.254 |
| SGB5 | 42 | 10.0.0.0/8 | true | 10.0.1.1 | 10.0.1.2 - 10.0.1.254 |
| BHS5 | 42 | 10.0.0.0/8 | true | 10.0.2.1 | 10.0.2.2 - 10.0.2.254 |


### Le routeur virtuel L3 (Gateway) peut-il m'aider si je souhaite avoir une Gateway d'accès à Internet pour toutes les VMs de mon vRack ?

Oui, c'est le cas pour une Gateway (routeur L3 avec option SNAT). Actuellement, seules les instances en **mode privé** de réseau et connectées à un réseau privé à région unique sont prises en charge. Pour plus d'informations, consultez notre [guide concept sur le réseau Public Cloud](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

### Puis-je utiliser un routeur L3 pour router le trafic entre différents sous-réseaux dans une région Public Cloud ?

Oui, vous pouvez utiliser un routeur L3 sans option SNAT via l’interface graphique OpenStack / CLI / Terraform. Dans ce cas, les limites de bande passante sont déterminées par la qualité de service sur la bande passante privée de l'instance. Par conséquent, le choix d'une flavor `S` n'aurait pas d'impact sur les performances.

### Puis-je utiliser un routeur L3 pour router le trafic entre différents sous-réseaux dans plusieurs régions Public Cloud ?

Non, le routage inter-régions n'est pas supporté.

### Le service Gateway sera-t-il fourni avec une IP et un port publics ?

Tout dépend de l’usage :

- Pour les cas d'utilisation sortante (outbound), nous proposons une IP publique incluse dans le prix de la Gateway. Cette IP est associée à la Gateway instanciée et ne peut pas être déplacée vers une autre. En d'autres termes, l'IP utilisée pour le trafic sortant n'est pas une Floating IP. Si cela crée des difficultés pour votre cas d'usage, veuillez voter en faveur de cet item de notre [roadmap](https://github.com/ovh/public-cloud-roadmap/issues/448).
- Pour les cas d'utilisation entrante (inbound) (pour exposer un service s'exécutant sur une instance privée vers Internet), vous devez disposer d'une Floating IP à connecter via Gateway à votre instance ou service réseau.

### Comment générer une instance privée à utiliser avec l'option Gateway et SNAT ?

Vous pouvez créer un réseau privé dans une région sélectionnée et y attacher la Gateway. Puis, lors de la création d’une instance, sélectionnez « Attacher au réseau privé » et validez à l’aide du bouton « Oui, je veux que mon instance soit totalement privée ».

### L’IP publique de la Gateway est-elle protégée contre les attaques DDoS ?

Oui, l’[infrastructure anti-DDoS d’OVHcloud](https://www.ovhcloud.com/fr/security/anti-ddos/) est activée sur toutes ces adresses IP. Vous pouvez consulter ces informations dans la section `Bare Metal Cloud > Network > IP` de votre espace client.

### J'ai créé une instance en mode privé (elle n'a que des ports privés). Comment s’y connecter ?

Deux options peuvent être utilisées : 

- Utiliser un « jump host » (SSH proxy) : Vous devez utiliser une autre instance disposant d'une Floating IP (permettant un accès externe) et d'un port privé dans le même réseau privé que votre nouvelle instance. Connectez-vous dessus et connectez-vous en SSH à l'IP privée de votre nouvelle instance.
- Associer une adresse Floating IP (au moins pendant le temps de la maintenance) à votre instance nouvellement créée et vous y connecter en utilisant cette adresse Floating IP, puis détacher l'adresse Floating IP.

## Les adresses Floating IP

### Lorsque j'essaie d'associer une Floating IP au port du réseau Ext-Net, j'obtiens l'erreur suivante : "External network ... is not reachable from subnet .... Therefore, cannot associate Port ... with a Floating IP."

Une Floating IP est une adresse IP publique flexible qui peut être associée à un port privé uniquement (port sur réseau privé dans le vRack). Une Gateway est également nécessaire pour que cela fonctionne.

### J'ai des VMs qui communiquent sur un réseau privé et je veux associer une Floating IP à une de ces VMs. Quel est le pool à choisir pour l'adresse Floating IP ?

Le pool d'une Floating IP doit être « Ext-Net » et vous pouvez l'associer à un port du réseau privé.

### Les adresses Floating IP sont-elles protégées contre les attaques DDoS ?

Oui, l’[infrastructure anti-DDoS d’OVHcloud](https://www.ovhcloud.com/fr/security/anti-ddos/) est activée sur toutes les adresses Floating IP. Vous pouvez consulter ces informations dans la section `Bare Metal Cloud > Network > IP` de votre espace client.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
