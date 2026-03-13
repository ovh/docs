---
title: " Comment analyser votre réseau via les outils OVHcloud"
excerpt: "Découvrez comment utiliser les outils d'analyse de connectivité réseau disponibles pour les clients OVHcloud"
updated: 2025-06-25
---

## Objectif

OVHcloud fournit plusieurs outils aux clients et aux prospects pour tester et évaluer leur connectivité réseau avec les services OVHcloud. Dans cet article, nous verrons comment utiliser ces outils.

## En pratique

Voici la liste des outils d'analyse de connectivité réseau proposés par OVHcloud :

- [Looking Glass](#lookingglass)
- [Proof](#proof)
- [Smokeping](#smokeping)
- [Weathermap](#weathermap)

### Looking Glass <a name="lookingglass"></a>

[Looking Glass](https://lg.ovh.net/) est un outil qui vous permet d’exécuter un traceroute ou de visualiser la table de routage vers n’importe quelle adresse IP comme si vous utilisiez une machine dans un datacentre OVHcloud. Cet outil est idéal si vous êtes un client potentiel d'OVHcloud ou si vous envisagez d'étendre votre présence à d'autres datacentres. Cela vous permettra de vous assurer que le réseau est suffisant pour vos besoins. L'interface utilisateur est très simple.

1. Présentation des commandes disponibles que vous pouvez exécuter.
2. Choisissez le datacentre depuis lequel vous souhaitez lancer le test.
3. Sélectionnez la commande à exécuter, puis renseignez l’adresse IP ou l’URL cible pour tracer l’itinéraire.
4. Accédez à l’historique de vos requêtes, vous pouvez ainsi les relancer facilement.

![looking glass](images/networktools1.png){.thumbnail}

### Proof <a name="proof"></a>

[Proof](https://proof.ovh.net/) est un outil de mesure du débit pour le réseau d’OVHcloud. Il propose trois options : un test de débit standard, un test de débit avancé (permettant de choisir le datacentre), ainsi que des fichiers à télécharger pour évaluer la vitesse de téléchargement.

La première fois que vous accédez au site, vous êtes redirigé vers l'onglet **Speedtest**. Il s'agit d'un test de débit standard.

![proof](images/networktools2.png){.thumbnail}

Si vous cliquez sur l'onglet **Files**, vous serez redirigé vers la page suivante :

![test de vitesse](images/networktools3.png){.thumbnail}

Choisissez la taille du fichier que vous souhaitez tester, et téléchargez ce fichier pour tester votre vitesse de téléchargement depuis le réseau d'OVHcloud.

Le dernier onglet, **Proofs**, vous permet de choisir le datacentre à tester via un menu déroulant. Vous pourrez alors lancer un test de débit vers ce datacentre.

![choix du datacentre](images/networktools4.png){.thumbnail}

### Smokeping <a name="smokeping"></a>

[Smokeping](https://smokeping.ovh.net/smokeping) est un outil de surveillance permettant de vérifier la réponse aux requêtes ICMP (c'est à dire la réponse au ping), la latence et les changements de routage (traceroute) vers des datacentres externes (AS) ou internes à OVHcloud, à l'aide de FPing et d'une adresse IPv4 ou IPv6 ajoutée manuellement.

Des serveurs Smokeping Probe sont installés dans chaque datacentre OVHcloud pour collecter les logs.

Depuis l'interface de Smokeping, vous pouvez sélectionner un datacentre à l’aide du menu en haut de la page. Le menu latéral situé à gauche vous donne ensuite accès aux options suivantes :

1. **OVH** : Permet de surveiller une adresse IP spécifique au sein des destinations OVHcloud, incluant les DC (datacentres), les POP (points de présence) et les services Anycast.
2. **ANYCAST** : Couvre les destinations Anycast mondiales, comme les serveurs DNS de Google ou de Cloudflare, ainsi que d'autres fournisseurs de CDN.
3. **EMEA** : Regroupe les fournisseurs de services, de contenu et/ou de cloud situés en Europe, au Moyen-Orient et en Afrique.
4. **USA / CANADA** : Inclut les fournisseurs de services, de contenu et/ou de cloud basés aux États-Unis et au Canada.
5. **SA** : Regroupe les fournisseurs de services, de contenus et/ou de cloud situés en Amérique du Sud.
6. **APAC** : Inclut les fournisseurs de services, de contenus et/ou de cloud basés en Asie et dans la région Pacifique (Océanie).

![smokeping](images/networking_tools01_.png){.thumbnail}

Pour afficher les résultats de la latence pour une région entière, cliquez sur la zone concercnée, par exemple *3. EMEA*, puis sur le nom de la région. Vous pouvez afficher la perte de latence/ping pour l'ASN surveillé dans cette région spécifique.

![Affichage latence](images/networking_tools02_.png){.thumbnail}

Vous pouvez utiliser la zone de recherche dans le coin supérieur droit pour vérifier les résultats d'un AS/Nom spécifique. Tous les résultats seront affichés sur le côté gauche de la page.

![ASN](images/networking_tools03_.png){.thumbnail}

Si vous cliquez sur le nom du fournisseur dans les résultats de la recherche, vous verrez l'historique des résultats de latence et de traceroute, jusqu'à la dernière année.

![Historique des résultats](images/networking_tools04_.png){.thumbnail}

### Weathermap <a name="weathermap"></a>

Le [weathermap OVHcloud](https://weathermap.ovh.net/) permet de visualiser la structure du réseau. Vous pouvez y observer le pourcentage de la charge de trafic sur chaque lien.

1. Choisissez le datacentre souhaité.
2. Recherchez des zones et ajustez la période.
3. Visualisez la légende relative à la charge de trafic sur chaque lien.
4. Obtenez des conseils de navigation.
5. Accédez aux détails du lien.

![weathermap](images/networking_tools05_.png){.thumbnail}

Pour plus d'informations et de tutoriels, veuillez consulter nos autres [guides d’assistance sur la mise en réseau et la sécurité](/products/network) ou explorer les [guides for other OVHcloud products and services](/links/documentation).

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).