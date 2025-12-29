---
title: Configuration du service BGP
excerpt: En utilisant le service BGP, vous bénéficiez d'un contrôle total sur vos politiques de routage et la résilience du réseau. Suivez ce guide pour configurer et optimiser vos sessions BGP
updated: 2025-03-31
---

## Objectif

Le protocole Border Gateway Protocol (BGP) vous permet de construire des infrastructures hautement disponibles en exécutant le protocole de routage BGP standard directement à partir de vos hôtes OVHcloud. Il peut être utilisé avec les Additional IP d’OVHcloud ou avec vos propres adresses IP, en utilisant Bring Your Own IP (BYOIP).

> [!warning]
>
> **Important**: le service BGP est actuellement en phase alpha. Ce produit n'est pas destiné à être utilisé dans un environnement de production.
>

## Prérequis

- Au moins un [serveur dédié Bare Metal](/links/bare-metal/bare-metal) parmi les gammes suivantes : High Grade, Scale, Advance Gen3. Tous les serveurs qui participeront au peering BGP doivent être dans la même région 1-AZ.
- Être connecté à l’[espace client OVHcloud](/links/manager).
- Si vous utilisez [Bring Your Own IP (BYOIP)](/links/network/byoip) : les préfixes IP que vous possédez et pouvez annoncer.
- Un [réseau privé vRack](/links/network/vrack).
- Des connaissances des réseaux IP et du protocole de routage BGP.
- Des connaissances des paramètres réseau Linux.

## En pratique

### Étape 1 : rejoindre l'Alpha

Vous devez d'abord demander à rejoindre l'alpha sur [cette page](https://labs.ovhcloud.com/en/). Après réception de votre candidature, nous vous contacterons par e-mail.

### Étape 2 : préparer vos adresses IP

Vous devez soit acheter des [Additional IP](/links/network/additional-ip) chez OVHcloud, soit utiliser vos propres adresses IP avec BYOIP.

> [!warning]
>
> Si vous achetez des adresses IP auprès d'OVHcloud, vous **NE DEVEZ PAS** les associer à un service (par exemple, un serveur Bare Metal).

Si vous souhaitez importer vos adresses IP, vous devez utiliser notre service BYOIP. Veuillez suivre [cette documentation](/pages/network/bring_your_own_ip/bring-your-own-IP/) pour importer vos IP chez OVHcloud.

### Étape 3 : configurer votre vRack

Vous devez avoir créé un vRack, qui est un réseau privé où se fera le peering entre vos serveurs et le service BGP.

Le vRack doit contenir les serveurs qui participeront au peering BGP.

> [!warning]
>
> **Important**: le vRack ne doit contenir que des serveurs dans une zone de disponibilité (AZ) spécifique. Puisque seules les régions 1-AZ (possédant une seule AZ) sont disponibles pendant l'alpha, vos serveurs doivent simplement être dans la même région.
>

### Étape 4 : fournir les paramètres de configuration de votre service BGP

Vous devez nous fournir les paramètres suivants afin que nous puissions configurer le service BGP côté OVHcloud :

| Paramètre	| Valeur (exemple) | Description | Commentaire |
| :--- | :--- | :--- | :--- |
| Localisation	| RBX | Emplacement de livraison du service | |
| ID vRack | 937 | ID du vRack sur lequel les sessions BGP vont s'exécuter | |
| BYOIP | Y | Préfixe IP fourni par le client | |
| Préfixe IP | 198.51.100.0/24 | Le préfixe IP public à utiliser <br> Des sous-ensembles appartenant à ce préfixe peuvent être annoncés : <br>&bull; Pour l'IPv4, n'importe quel sous-ensemble jusqu'à /32 <br>&bull; Pour l'IPv6, n'importe quel sous-ensemble jusqu'à /64 | Taille de préfixe autorisée : <br>&bull; IP OVHcloud (/24 à /30) <br>&bull; préfixe importé BYOIP (/24 à /30) <br>&bull; IPv6 (/56) |
| Préfixe privé | 10.0.0.0 | Préfixe réservé aux IP des pairs BGP <br> Les 4 dernières adresses seront utilisées par OVHcloud pour les pairs BGP côté OVHcloud | IPv4 : Netmask /28 <br> IPv6 : Netmask /124 |
| Peering IP 1 | 10.0.0.1 | L'IP du client doit être spécifiée par ce dernier (pour le monitoring côté OVHcloud) | |
| Peering IP 2 | 10.0.0.2 | L'IP du client doit être spécifiée par ce dernier (pour le monitoring côté OVHcloud) | |
| Peering IP 3 | 10.0.0.3 | L'IP du client doit être spécifiée par ce dernier (pour le monitoring côté OVHcloud) | |
| Peering IP 4 | 10.0.0.4 | L'IP du client doit être spécifiée par ce dernier (pour le monitoring côté OVHcloud) | |

### Étape 5 : livraison du service BGP

Après environ 2 semaines, votre service sera livré. Nous vous recontacterons pour vous informer que le service est prêt à être utilisé et vous donner les paramètres nécessaires suivants de votre côté :

- Adresses IP des Edges OVHcloud (4 IPs)
- AS clients et AS OVHcloud à utiliser pour les sessions de peering BGP
- Paramètres BFD

> [!primary]
>
> **Important** : durant la phase alpha, nous ne pouvons pas nous engager sur un délai de livraison précis. La livraison peut prendre jusqu'à plusieurs semaines.

### Étape 6 : configuration côté client

Vous pouvez maintenant configurer les sessions BGP de votre côté. Vous trouverez ci-dessous une procédure qui détaille une configuration typique pour un load balancing simple à l'aide de BGP ECMP.

> [!primary]
>
> **Important** : OVHcloud n'est pas responsable de la configuration du daemon BGP sur les hôtes du client. Il appartient au client de configurer le daemon BGP sur ses hôtes. Nous fournissons des exemples de configurations à prendre en compte.

## Cas d'utilisation : Configuration BGP simple - Load Balancing utilisant BGP et ECMP

Voici une architecture simple qui vous permet d'effectuer un load balancing de votre trafic sur 3 hôtes :

![BGPaaS Basic Architecture](images/bgpaas_basic-peering.png){.thumbnail}

Pour réaliser cette installation, vous devez installer un daemon BGP, tel que FRR, sur chaque hôte.

### Paramètres

Les paramètres suivants sont à remplacer dans les fichiers de configuration de votre routeur par ceux convenus avec OVHcloud lors des étapes de configuration et de livraison.

| Paramètre | Description |
| :--- | :--- |
| **OVHcloud_ASN** | ASN privé utilisé par les Edges OVHcloud |
| **CUSTOMER_ASN** | ASN privé fourni par OVHcloud. |
| **CUSTOMER_PREFIX_V4 <br> CUSTOMER_PREFIX_V6** | Préfixes publics alloués à l'ustilisation d'IPv4 et IPv6 |
| **RS_IPV4 <br> RS_IPV6** | Adresses IP RS du client dans la plage privée/ULA, utilisées pour l'appairage BGP et la connectivité à l'intérieur du vRack. |
| **EDGE_IPV4 <br> EDGE_IPV6** | Adresses IP des Edges OVHcloud dans la plage privée/ULA, utilisées pour l'appairage BGP et la connectivité à l'intérieur du vRack client. |
| **HOST_IPV4 <br> HOST_IPV6** | Autres adresses IP des hôtes client dans la plage privée/ULA, utilisées comme Next Hop BGP et comme pairs à l'intérieur du vRack |

### Configuration d'un daemon BGP (FRR)

Pour établir une session BGP à l'aide de FRR, suivez les étapes ci-dessous.

#### Étape 1 : Installer FRR

Sur un système basé sur Debian, installez FRR avec la commande suivante:

```bash
sudo apt update && sudo apt install frr frr-pythontools
```

#### Étape 2 : Configurer FRR

> [!primary]
>
> Tous les paramètres décrits ci-dessous sont présents dans le fichier de configuration `/etc/frr/frr.conf`.

##### Configuration des listes de préfixes et route-maps

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour éviter toute annonce inattendue entre les pairs BGP.

Dans cet exemple :

- Les hôtes n'acceptent que les routes par défaut provenant des Edges OVHcloud
- Les hôtes n'annoncent que les préfixes du client aux Edges OVHcloud

Listes de préfixes et route-maps connexes pour filtrer les routes :

```bash
ip prefix-list PL_DEFAULT_ROUTE_V4 seq 10 permit 0.0.0.0/0
 
ip prefix-list PL_CUSTOMER_PREFIX_V4 seq 10 permit <CUSTOMER_PREFIX_V4> ge <length>
... <d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
ipv6 prefix-list PL_DEFAULT_ROUTE_V6 seq 10 permit ::/0
 
ipv6 prefix-list PL_CUSTOMER_PREFIX_V6 seq 10 permit <CUSTOMER_PREFIX_V6> eq <length>
... <d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
 
route-map RM_EDGE_V4_OUT permit 10
  match ip address prefix-list PL_CUSTOMER_PREFIX_V4
route-map RM_EDGE_V4_IN permit 10
  match ip address prefix-list PL_DEFAULT_ROUTE_V4
 
route-map RM_EDGE_V6_OUT permit 10
  match ipv6 address prefix-list PL_CUSTOMER_PREFIX_V6
route-map RM_EDGE_V6_IN permit 10
  match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
```

##### Configuration BFD

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour améliorer le temps de convergence BGP entre les RS et les Edges sur vRack.

```bash
bfd
 profile edge
  detect-multiplier 8
  receive-interval 500
  transmit-interval 500
 
 peer <EDGE_IPV4>
  profile edge
  no shutdown
...
 peer <EDGE_IPV6>
  profile edge
  no shutdown
...
```

##### Configuration BGP

Configuration globale :

```bash
router bgp <CUSTOMER_ASN>
 bgp router-id <HOST_IPV4>
 no bgp default ipv4-unicast
 maximum-paths 16
 maximum-paths ibgp 16
```

Appairage BGP avec les Edges OVHcloud :

```bash
router bgp <CUSTOMER_ASN>
 neighbor PG_EDGE_V4 peer-group
 neighbor PG_EDGE_V4 remote-as <OVHcloud_ASN>
 neighbor PG_EDGE_V4 bfd
 neighbor PG_EDGE_V6 peer-group
 neighbor PG_EDGE_V6 remote-as <OVHcloud_ASN>
 neighbor PG_EDGE_V6 bfd
 neighbor <EDGE_IPV4> peer-group PG_EDGE_V4
...
 neighbor <EDGE_IPV6> peer-group PG_EDGE_V6
 ...
 
 address-family ipv4 unicast
  neighbor PG_EDGE_V4 activate
  neighbor PG_EDGE_V4 route-map RM_EDGE_V4_IN in
  neighbor PG_EDGE_V4 route-map RM_EDGE_V4_OUT out
 address-family ipv6 unicast
  neighbor PG_EDGE_V6 activate
  neighbor PG_EDGE_V6 route-map RM_EDGE_V6_IN in
  neighbor PG_EDGE_V6 route-map RM_EDGE_V6_OUT out
```

#### Étape 3: Redémarrer FRR

Après avoir modifié la configuration, redémarrez FRR pour appliquer les modifications :

```bash
sudo systemctl restart frr
```

#### Étape 4: Vérifier l'état de la session BGP

Vérifiez l'état de votre session BGP avec la commande suivante :

```bash
show protocols all
```

#### Étape 5: Vérifier la connectivité entrante et sortante

Pour vous assurer que votre session BGP fonctionne correctement, testez le trafic entrant et sortant :

- **Vérifier le trafic entrant (entrant)**

Utilisez un serveur distant pour effectuer un ping ou traceroute vers votre préfixe IP publié :

```bash
ping YOUR_ADVERTISED_IP
traceroute YOUR_ADVERTISED_IP
```

Vérifiez que le trafic atteint votre réseau via les chemins d'accès BGP attendus.

- **Vérifier le trafic sortant (sortant)**

Depuis votre serveur, vérifiez la table de routage et assurez-vous que vos routes BGP sont bien utilisées :

```bash
ip route show
vtysh -c 'show ip route bgp'
```

Confirmez que le trafic sortant suit les chemins d'accès BGP corrects.

#### Étape 6: Vérifier la connectivité auprès de l'équipe OVHcloud

Une fois votre installation terminée et après avoir effectué des tests de base, vous devez nous en informer par e-mail à l'adresse <bgp_alpha@ovh.net>.

Nous nous assurerons que la connectivité BGP et les annonces IP sont correctes de notre côté.

## Cas d'utilisation: Configuration BGP avancée utilisant des Route Servers (RS)

Les Route Servers sont déployés et gérés par le client. Ceux-ci doivent déployer leurs RS sur des hôtes dédiés.
Les RS s'appairent avec les Load Balancing Edges (LBEdges) et les Hôtes, et établissent deux sessions par pair (une pour l'IPv4, l'autre pour l'IPv6).

Voici une vue d'ensemble du système :

![BGPaaS RS Peering](images/bgpaas_rs-peering.png){.thumbnail}

Et voici une vue détaillée des sessions BGP entre les Edges, les RS et les Hôtes :

![BGPaaS sessions detail](images/shadow_bgpaas_rs-peering.png){.thumbnail}

Pour réaliser cette installation, vous devez installer un daemon BGP, comme FRR, sur chaque hôte et le configurer.

### Paramètres

Les paramètres ci-dessous doivent être substitués par ceux validés avec OVHcloud pendant les étapes de configuration et de livraison.

| Paramètre | Description |
| :--- | :--- |
| **OVHcloud_ASN** | ASN privé utilisé par les Edges OVHcloud |
| **CUSTOMER_ASN** | ASN privé fourni par OVHcloud. |
| **CUSTOMER_PREFIX_V4 <br> CUSTOMER_PREFIX_V6** | Préfixes publics alloués à l'ustilisation d'IPv4 et IPv6 |
| **RS_IPV4 <br> RS_IPV6** | Adresses IP RS du client dans la plage privée/ULA, utilisées pour l'appairage BGP et la connectivité à l'intérieur du vRack. |
| **EDGE_IPV4 <br> EDGE_IPV6** | Adresses IP des Edges OVHcloud dans la plage privée/ULA, utilisées pour l'appairage BGP et la connectivité à l'intérieur du vRack client. |
| **HOST_IPV4 <br> HOST_IPV6** | Autres adresses IP des hôtes client dans la plage privée/ULA, utilisées comme Next Hop BGP et comme pairs à l'intérieur du vRack |

### Configuration d'un daemon BGP (FRR)

Pour établir une session BGP à l'aide de FRR, suivez les étapes ci-dessous.

#### Étape 1 : Installer FRR

Sur un système basé sur Debian, installez FRR avec la commande suivante:

```bash
sudo apt update && sudo apt install frr frr-pythontools
```

#### Étape 2 : Configurer FRR

##### ***Configuration de FRR sur les Route Servers***

> [!primary]
>
> Tous les paramètres décrits ci-dessous sont présents dans le fichier de configuration `/etc/frr/frr.conf`.

##### Configuration des listes de préfixes et route-maps

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour éviter toute annonce inattendue entre les pairs BGP.

Les Route Servers acceptent les routes par défaut des LBEdges et toutes les routes des Hôtes si elles correspondent à la longueur de préfixe définie (cf. les règles OVHcloud pour la longueur de préfixe IPv4 et IPv6).
Les Route Servers publient les routes des hôtes vers les LBEdges et les routes par défaut vers les hôtes.

Listes de préfixes et route-maps connexes pour filtrer les routes :

```bash
ip prefix-list PL_DEFAULT_ROUTE_V4 seq 10 permit 0.0.0.0/0
 
ip prefix-list PL_CUSTOMER_PREFIX_V4 seq 10 permit <CUSTOMER_PREFIX_V4> ge <length>
<d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
ipv6 prefix-list PL_DEFAULT_ROUTE_V6 seq 10 permit ::/0
 
ipv6 prefix-list PL_CUSTOMER_PREFIX_V6 seq 10 permit <CUSTOMER_PREFIX_V6> eq <length>
<d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
 
route-map RM_EDGE_V4_OUT deny 10
 match ip address prefix-list PL_DEFAULT_ROUTE_V4
route-map RM_EDGE_V4_OUT permit 20
  match ip address prefix-list PL_CUSTOMER_PREFIX_V4
 
route-map RM_EDGE_V4_IN permit 10
 match ip address prefix-list PL_DEFAULT_ROUTE_V4
 
route-map RM_HOST_V4_IN deny 10
  match ip address prefix-list PL_DEFAULT_ROUTE_V4
route-map RM_HOST_V4_IN permit 20
  match ip address prefix-list PL_CUSTOMER_PREFIX_V4
  
route-map RM_HOST_V4_OUT permit 10
match ip address prefix-list PL_DEFAULT_ROUTE_V4
 
 
route-map RM_EDGE_V6_OUT deny 10
 match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
route-map RM_EDGE_V6_OUT permit 20
  match ipv6 address prefix-list PL_CUSTOMER_PREFIX_V6
 
route-map RM_EDGE_V6_IN permit 10
 match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
 
route-map RM_HOST_V6_IN deny 10
  match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
route-map RM_HOST_V6_IN permit 20
  match ipv6 address prefix-list PL_CUSTOMER_PREFIX_V6
 
route-map RM_HOST_V6_OUT permit 10
 match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
```

##### Configuration BFD

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour améliorer le temps de convergence BGP entre les RS et les Edges sur vRack.

```bash
bfd
 profile edge
  detect-multiplier 8
  receive-interval 500
  transmit-interval 500
 
 peer <EDGE_IPV4>
  profile edge
  no shutdown
 peer <EDGE_IPV6>
  profile edge_slow
  no shutdown
 ```

##### Configuration BGP

Configuration globale :

```bash
router bgp <CUSTOMER_ASN>
 bgp router-id <RS_IPV4>
 no bgp default ipv4-unicast
```

Appairage BGP avec les Edges OVHcloud :

```bash
router bgp <CUSTOMER_ASN>
 neighbor PG_EDGE_V4 peer-group
 neighbor PG_EDGE_V4 remote-as <OVHcloud_ASN>
 neighbor PG_EDGE_V4 bfd
 neighbor PG_EDGE_V6 peer-group
 neighbor PG_EDGE_V6 remote-as <OVHcloud_ASN>
 neighbor PG_EDGE_V6 bfd
 neighbor <EDGE_IPV4> peer-group PG_EDGE_V4
 neighbor <EDGE_IPV6> peer-group PG_EDGE_V6
  
 address-family ipv4 unicast
  neighbor PG_EDGE_V4 activate
  neighbor PG_EDGE_V4 addpath-tx-all-paths 
  neighbor PG_EDGE_V4 attribute-unchanged next-hop
  neighbor PG_EDGE_V4 route-map RM_EDGE_V4_IN in
  neighbor PG_EDGE_V4 route-map RM_EDGE_V4_OUT out
 address-family ipv6 unicast
  neighbor PG_EDGE_V6 activate
  neighbor PG_EDGE_V4 addpath-tx-all-paths 
  neighbor PG_EDGE_V6 attribute-unchanged next-hop
  neighbor PG_EDGE_V6 route-map RM_EDGE_V6_IN in
  neighbor PG_EDGE_V6 route-map RM_EDGE_V6_OUT out
```

Appairage BGP avec les Hôtes :

```bash
router bgp <CUSTOMER_ASN>
 neighbor PG_HOST_V4 peer-group
 neighbor PG_HOST_V4 remote-as <CUSTOMER_ASN>
 neighbor PG_HOST_V6 peer-group
 neighbor PG_HOST_V6 remote-as <CUSTOMER_ASN>
 neighbor <HOST_IPV4> peer-group PG_HOST_V4
 neighbor <HOST_IPV6> peer-group PG_HOST_V6
 
 address-family ipv4 unicast
  neighbor PG_HOST_V4 activate
  neighbor PG_HOST_V4 addpath-tx-all-paths
  neighbor PG_HOST_V4 route-map RM_HOST_V4_IN in
  neighbor PG_HOST_V4 route-map RM_HOST_V4_OUT out
 address-family ipv6 unicast
  neighbor PG_HOST_V6 activate
  neighbor PG_HOST_V6 addpath-tx-all-paths 
  neighbor PG_HOST_V6 route-map RM_HOST_V6_IN in
  neighbor PG_HOST_V6 route-map RM_HOST_V6_OUT out
```

##### ***Configuration de FRR sur les Hôtes***

> [!primary]
>
> Tous les paramètres décrits ci-dessous sont présents dans le fichier de configuration `/etc/frr/frr.conf`.

##### Configuration des listes de préfixes et route-maps

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour éviter toute annonce inattendue entre les pairs BGP.

Dans cet exemple:

- Les hôtes n'acceptent que les routes par défaut provenant des RS
- Les hôtes n'annoncent que les préfixes du client aux RS

Listes de préfixes et route-maps connexes pour filtrer les routes :

```bash
ip prefix-list PL_DEFAULT_ROUTE_V4 seq 10 permit 0.0.0.0/0
 
ip prefix-list PL_CUSTOMER_PREFIX_V4 seq 10 permit <CUSTOMER_PREFIX_V4> ge <length>
... <d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
ipv6 prefix-list PL_DEFAULT_ROUTE_V6 seq 10 permit ::/0
 
ipv6 prefix-list PL_CUSTOMER_PREFIX_V6 seq 10 permit <CUSTOMER_PREFIX_V6> eq <length>
... <d'autres lignes peuvent être ajoutées en fonction de la configuration du client>
 
 
route-map RM_RS_V4_OUT permit 10
  match ip address prefix-list PL_CUSTOMER_PREFIX_V4
route-map RM_RS_V4_IN permit 10
  match ip address prefix-list PL_DEFAULT_ROUTE_V4
 
route-map RM_RS_V6_OUT permit 10
  match ipv6 address prefix-list PL_CUSTOMER_PREFIX_V6
route-map RM_RS_V6_IN permit 10
  match ipv6 address prefix-list PL_DEFAULT_ROUTE_V6
```

##### Configuration BFD

> [!primary]
>
> La configuration ci-dessous est une suggestion d'installation pour améliorer le temps de convergence BGP entre les RS et les Edges sur vRack.

Les valeurs ci-dessous sont données à titre d'exemple, et le client peut choisir n'importe quelle valeur parmi ses RS et Hôtes.

```bash
bfd
 profile rs
  detect-multiplier 8
  receive-interval 500
  transmit-interval 500
 
 peer <RS_IPV4>
  profile rs
  no shutdown
...
 peer <RS_IPV6>
  profile rs
  no shutdown
...
```

##### Configuration BGP

Configuration globale :

```bash
router bgp <CUSTOMER_ASN>
 bgp router-id <HOST_IPV4>
 no bgp default ipv4-unicast
 maximum-paths 16
 maximum-paths ibgp 16
```

Appairage BGP avec les RS :

```bash
router bgp <CUSTOMER_ASN>
 neighbor PG_RS_V4 peer-group
 neighbor PG_RS_V4 remote-as <CUSTOMER_ASN>
 neighbor PG_RS_V4 bfd
 neighbor PG_RS_V6 peer-group
 neighbor PG_RS_V6 remote-as <CUSTOMER_ASN>
 neighbor PG_RS_V6 bfd
 neighbor <RS_IPV4> peer-group PG_RS_V4
...
 neighbor <RS_IPV6> peer-group PG_RS_V6
 ...
 
 address-family ipv4 unicast
  neighbor PG_RS_V4 activate
  neighbor PG_RS_V4 route-map RM_RS_V4_IN in
  neighbor PG_RS_V4 route-map RM_RS_V4_OUT out
 address-family ipv6 unicast
  neighbor PG_RS_V6 activate
  neighbor PG_RS_V6 route-map RM_RS_V6_IN in
  neighbor PG_RS_V6 route-map RM_RS_V6_OUT out
```

#### Étape 3 : Redémarrer FRR

Après avoir modifié la configuration, redémarrez FRR pour appliquer les modifications :

```bash
sudo systemctl restart frr
```

#### Étape 4 : Vérifier l'état de la session BGP

Vérifiez l'état de votre session BGP avec la commande suivante :

```bash
show protocols all
```

#### Étape 5 : Vérifier la connectivité entrante et sortante

Pour vous assurer que votre session BGP fonctionne correctement, testez le trafic entrant et sortant :

- **Vérifier le trafic entrant (entrant)**

Utilisez un serveur distant pour effectuer un ping ou traceroute vers votre préfixe IP publié :

```bash
ping YOUR_ADVERTISED_IP
traceroute YOUR_ADVERTISED_IP
```

Vérifiez que le trafic atteint votre réseau via les chemins d'accès BGP attendus.

- **Vérifier le trafic sortant (sortant)**

Depuis votre serveur, vérifiez la table de routage et assurez-vous que vos routes BGP sont bien utilisées :

```bash
ip route show
vtysh -c 'show ip route bgp'
```

Confirmez que le trafic sortant suit les chemins d'accès BGP corrects.

#### Étape 6 : Vérifier la connectivité auprès de l'équipe OVHcloud

Une fois votre installation terminée et après avoir effectué des tests de base, vous devez nous en informer par e-mail à l'adresse <bgp_alpha@ovh.net>.

Nous nous assurerons que la connectivité BGP et les annonces IP sont correctes de notre côté.

## Limites

Le nombre de pairs côté OVHcloud est limité à 4. Si vous avez besoin de plus de 4 pairs, vous devrez installer un réflecteur de route sur votre infrastructure, afin de redistribuer les routes vers vos hôtes.

- **Sessions BGP :** 4 par client (4IPv4 + 4IPv6)
- **Préfixes IP :** jusqu'à 32 préfixes IPv4 et 32 préfixes IPv6 par client
- **Hôtes :** 10 par client

## Régions disponibles

Ce produit est disponible dans les régions suivantes:

| Localisation de la région | Nom de la région | Type de région |
| :--- | :--- | :--- |
| Europe (France - Paris) (ne sera disponible qu'en version bêta) | eu-west-par | 3-AZ |
| Europe (France - Gravelines) | eu-west-gra | 1-AZ |
| Europe (France - Roubaix) | eu-west-rbx | 1-AZ |
| Europe (France - Strasbourg) | eu-west-sbg | 1-AZ |
| Europe (Germany - Limburg) | eu-west-lim | 1-AZ |
| Europe (Poland - Warsaw) | eu-central-waw | 1-AZ |
| Europe (UK - Erith) | eu-west-eri | 1-AZ |
| North America (Canada - East - Beauharnois) | ca-east-bhs | 1-AZ |
| North America (Canada - East - Toronto) | ca-east-tor | 1-AZ |
| Asia-Pacific (Singapore - Singapore) | ap-southeast-sgp | 1-AZ |
| Asia-Pacific (Australia - Sydney) | ap-southeast-syd | 1-AZ |
| Asia-Pacific (India - Mumbai) | ap-south-mum | 1-AZ |

## Résolution des problèmes

Si vous recontrez des problèmes avec votre session BGP :

- Vérifiez que vos préfixes ASN et IP sont correctement configurés.
- Vérifiez qu'il n'y a pas d'annonces en conflit. 
- Assurez-vous que vos stratégies de pare-feu et de réseau autorisent le trafic BGP.
- Contactez notre équipe pour obtenir de l'aide par e-mail : <bgp_alpha@ovh.net>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
