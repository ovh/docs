---
title: FAQ SecNumCloud Connectivity
slug: secnumcloud-connectivity-faq
section: SecNumCloud Connectivity
order: 05
---

> [!primary]
> Une version en langue anglaise de cette page est disponible [ici](https://docs.ovh.com/gb/en/network-ip/secnumcloud-connectivity-faq/).
>

**Dernière mise à jour le 13/10/2022**

## FAQ SecNumCloud Connectivity

### Qu'est-ce que le Private Network ?

Le SecNumCloud Private Network (SPN) est un réseau privé conforme à SecNumCloud qui permet de connecter ensemble tous vos services SecNumCloud. Il est spécialement conçu pour la conformité SecNumCloud. Il est situé dans une zone dédiée et est physiquement séparé du vRack, le réseau privé standard d'OVHcloud. Le SPN est un réseau privé de couche 3. Il vous permet de segmenter votre réseau selon les pratiques courantes, à l'aide de concepts courants tels que le sous-réseau et le routage.

Le SPN a une portée régionale et peut être interconnecté avec d’autres SPN d’autres DC. L’interconnexion de SPN provenant de différents DC nécessite le produit SPN Inter DC.

### Comment puis-je accéder à mon réseau privé SecNumCloud depuis l'extérieur ?

Vous devez utiliser SecNumCloud VPN Gateway pour accéder à votre réseau privé SecNumCloud depuis l'extérieur. La passerelle SecNumCloud utilise des tunnels authentifiés et chiffrés pour se conformer aux règles SecNumCloud.

Des solutions d’accès VPN personnalisées sont également possibles (ex : NSX).

### Puis-je utiliser la même architecture réseau que celle dont je dispose actuellement sur ma plateforme non-SecNumCloud ?

Le SPN est un réseau privé de couche 3, c'est-à-dire que le trafic est routé entre les segments logiques de votre architecture, à la fois au sein d'une même région et entre les régions.

Si vous utilisez actuellement une architecture de couche 2 (pas de routage) sur votre plateforme standard (non-SecNumCloud), certaines modifications architecturales sont nécessaires afin de permettre à votre plateforme de fonctionner sur un réseau privé routé.

### Quelle est la capacité de ma passerelle VPN ?

Les gammes de capacité VPN Gateway sont : 2x1 Gbps, 2x2 Gbps, 2x5 Gbps (bientôt disponible), 2x10 Gbps (bientôt disponible).

VPN Gateway est un service haute disponibilité et dispose d’une redondance 1+1, ce qui signifie que le service utilise en fait deux passerelles, vous permettant de monter des tunnels sur chaque passerelle. La capacité est exprimée par passerelle.

La capacité doit être partagée entre les tunnels et le nombre maximal de tunnels par passerelle est de 10.

### Comment configurer la haute disponibilité de ma passerelle VPN ?

Vous devrez monter 2 tunnels, 1 avec chaque passerelle.

### Ma liaison Inter DC est-elle résiliente ?

Oui. La liaison Inter DC est redondée, ce qui signifie que deux DC sont réellement connectés par 2 liens avec chemin optique distincts, pour une résilience maximale. Si l'une des liaisons échoue, le trafic est redirigé vers l'autre liaison.

### En quoi ma liaison Inter DC est-elle conforme aux règles SecNumCloud ?

La liaison Inter DC repose sur la technologie MACsec et est donc chiffrée de bout en bout.

### Quel est le SLA pour le SPN ?

Le SPN respecte le SLA Hosted Private Cloud SecNumCloud, qui garantit un taux de disponibilité des hosts Hosted Private Cloud de 99,9%.

### Quel est le SLA de mon lien Inter DC ?

La liaison Inter DC respecte le SLA Hosted Private Cloud SecNumCloud, qui garantit un taux de disponibilité des hosts Hosted Private Cloud de 99,9%.

### Quel est le SLA pour la passerelle VPN ?

Le SLA de VPN Gateway est de 99,9 % de disponibilité sur le service (il est nécessaire d’utiliser 2 tunnels redondants pour atteindre ce SLA).

### Comment puis-je commander et configurer SPN, VPN Gateway et Inter DC ? Existe-t-il une partie dédiée de l'espace client OVHcloud ou de l’API ?

Veuillez contacter votre Account Manager. Pour le moment, la commande et l'installation des produit de connectivité SecNumCloud ne peuvent pas se faire via l'espace client OVHcloud ou l'API.

### En quoi ma connectivité réseau est-elle conforme aux normes Sec Num Cloud ?

Les produits de connectivité SecNumCloud ont été spécifiquement conçus avec les recommandations de l'ANSSI comme exigences fondamentales.

### Le chiffrement utilisé dans VPN Gateway et Inter DC SPN a-t-il un impact sur la latence de la connexion ?

Il n'y a aucun impact sur la latence.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
