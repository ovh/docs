---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

### Qu'est-ce qu'un VPS et à quoi sert-il ?

Un serveur privé virtuel (VPS) permet d’héberger des sites web (vitrine, e-commerce, contenus, médias) et des applications logicielles (portails, Extranet, solutions collaboratives, wikis, CRM). Contrairement à l’hébergement mutualisé, les données sont isolées sur une machine virtuelle dédiée à l’utilisateur.

Idéalement situés entre un hébergement web et un serveur physique, nos VPS conjuguent la fiabilité et la performance d’un serveur dédié sans la gestion des contraintes matérielles.

### Quels sont les avantages d'un VPS par rapport à un serveur dédié ?

Les VPS ont pour avantage de vous libérer de la gestion hardware, comme le suivi de l’état des disques durs, de la mémoire vive (RAM) et du CPU. Ils sont adaptés à la plupart des usages web, pour des projets dont la taille est maîtrisée.  
L’utilisation d’un serveur dédié est quant à elle conseillée si vous souhaitez gérer vous-même la partie matérielle, bâtir des architectures plus élaborées, créer une infrastructure incluant un réseau privé (vRack) ou encore déployer des solutions complexes autres que des services web.

En règle générale, les utilisateurs dont l’activité web se développe évoluent vers des serveurs dédiés ou des solutions Public Cloud. Ces services proposent des infrastructures plus complexes et flexibles, adaptées à une croissance forte.

### Quelles sont les différences entre les solutions VPS et Public Cloud ?

Le VPS est une solution adaptée aux environnements de préproduction et production qui ne nécessitent pas de performances constantes.  
Le Public Cloud d'OVHcloud propose quant à lui une infrastructure multiserveur avec une haute disponibilité des machines. Un réseau privé, le vRack, est également disponible avec cette solution.

### Comment choisir mon VPS OVHcloud ?

Pour choisir un VPS adapté à vos besoins, nous vous invitons à vérifier les aspects suivants :

- la quantité de ressources nécessaire (processeur, mémoire, espace disque, bande passante) ;
- le système d'exploitation requis (Linux ou Windows) ;
- les prérequis techniques essentiels au bon fonctionnement de l’application (par exemple, une base de données demande de la vitesse en lecture/écriture).

Cela vous permettra de faire le bon choix parmi nos solutions VPS :

- **VPS Starter** : machine d'entrée de gamme pour tester notre offre (avec une distribution Linux uniquement) ;
- **VPS Value, Essential et Comfort** : idéal pour l’hébergement de sites web, de services e-commerce ou de systèmes de monitoring ;
- **VPS Elite** : adapté aux sites e-commerce et applications plus exigeants en ressources CPU et mémoire ;
- **VPS Limited Edition** (quantités limitées) : ces VPS offrent des performances accrues, un atout majeur pour l’hébergement de sites complexes, d’applications gourmandes en ressources ou même de serveurs de jeu. Cette offre est valide jusqu’à l'épuisement des stocks.

> [!primary]
> Vous pouvez faire évoluer un VPS Limited Edition vers un autre VPS de cette même gamme mais, pour des raisons techniques, il est impossible de faire évoluer un VPS Limited Edition vers un VPS d'une autre gamme (Starter, Value, Essential ou Comfort).

### Qui peut se servir d'un VPS ?

Gérer un VPS nécessite des connaissances de base en administration de serveurs. Ces notions sont essentielles pour gérer le système d’exploitation (Linux ou Windows) installé sur la machine et paramétrer les applications. Vous pensez avoir besoin d’un VPS, mais estimez ne pas posséder les compétences requises ? Nous vous invitons à vous rapprocher de l’un de nos [partenaires](https://marketplace.ovhcloud.com/). 

Si vous souhaitez bénéficier de ressources garanties sans connaissances en administration de serveurs, nous vous conseillons nos [hébergements web Performance](/links/web/hosting-performance-offer).

### Comment me connecter à mon VPS ?

Vous pouvez vous connecter à distance à votre VPS grâce aux identifiants fournis par e-mail après la livraison du service.  
La méthode de connexion dépend des systèmes d'exploitation utilisés.

Tous les détails vous sont présentés dans le guide « [Débuter avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

### Est-il possible d'héberger plusieurs sites internet sur un VPS ?

Oui. Un VPS peut être partitionné et organisé en fonction de vos besoins. Vous pouvez ainsi y héberger plusieurs sites ou projets, en allouant à chacun un espace privé dont vous choisissez le volume. Pour simplifier ces manipulations, vous avez la possibilité d'installer un panneau de gestion de sites web, comme Plesk ou cPanel.

### Mon VPS est-il sauvegardé ?

Il est conseillé d'appliquer une stratégie de sauvegarde appropriée en fonction de la sensibilité de vos données.  
Rendez-vous sur notre [page web VPS](/links/bare-metal/vps-options) pour en savoir plus sur les options disponibles.

### Comment sécuriser mon VPS ?

Par défaut le VPS est fourni « nu », aucune configuration de sécurité n’est présente sur ce dernier. C’est donc la première action que vous devez entreprendre dès la livraison de votre VPS.  
Pour ce faire, n’hésitez pas à consulter le guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».

### Quelle est la bande passante allouée à mon VPS ? Est-elle garantie ?

La bande passante affichée sur la page de nos offres est garantie. Il s'agit du débit minimum qui vous est alloué.

### Quel SLA est appliqué sur mon VPS ?

OVHcloud propose un SLA de 99,9% sur l’ensemble des gammes VPS.

### Comment accéder à mon Backup Storage depuis une adresse IP différente de mon service ?

L'accès à votre Backup Storage (backup FTP) peut être restreint au service auquel il est lié via votre espace client OVHcloud.

Afin d'autoriser des adresses IP supplémentaires depuis lesquelles vous souhaitez accéder à votre Backup Storage, vous pouvez utiliser l'API OVHcloud.  
Cela vous permettra de récupérer vos sauvegardes de données depuis un service différent via différents protocoles (FTP, NFS, CIFS).

> [!warning]
> Seules les adresses IP OVHcloud peuvent être autorisées.
>

Connectez-vous à la [console API OVHcloud](/links/api) avec les identifiants de votre compte client et utilisez l'appel suivant :

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Modifiez les paramètres comme suit :

- `serviceName` : renseignez le nom interne de votre VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs` : définissez ce paramètre sur `true` si vous utilisez ce protocole.
- `ftp` : définissez ce paramètre sur `true` si vous utilisez ce protocole.
- `ipBlock` : renseignez l'adresse IP qui y aura accès, sous la forme `203.0.113.100/32`.
- `nfs` : définissez ce paramètre sur `true` si vous utilisez ce protocole.

Cliquez sur le bouton `EXECUTE`{.action}.

Afin de vérifier que votre adresse IP est bien autorisée, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>

## Aller plus loin

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).