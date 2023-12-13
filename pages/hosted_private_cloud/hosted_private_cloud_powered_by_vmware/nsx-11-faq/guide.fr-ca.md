---
title: NSX - FAQ
excerpt: Retrouvez les questions les plus fréquentes concernant NSX
updated: 2023-10-19
---

## Objectif

**Retrouvez ci-dessous les questions les plus fréquentes concernant NSX.**

## FAQ

<a name="diffencepack"></a>

### Quels sont les différents packs d’assistance ? Quelles sont les différences entre les packs ?

Tous les packs sont basés sur des jours (1 jour = 8 heures). 1 jour, 2 jours ou plus...

La première approche est la même pour tous les packs avec une phase de découverte, mais la durée du pack dépendra de la complexité de l'environnement et de la maturité du client.

Cette question sera étudiée avec l'équipe PS lors d'un premier appel d'évaluation.

<a name="eofnsxv"></a>

### Quelle est la date limite pour la migration de NSX-T? Quelle est la date de fin de vie de NSX-V ?

La fin de vie de NSX-V est prévue pour le 16 janvier 2024, la migration doit être effectuée avant cette date.

<a name="deadlineassistance"></a>

### Quelle est la date maximale à laquelle faire la demande d'accompagnement de migration ?

La fin de vie de NSX-V est prévue pour le 16 janvier 2024, vous pouvez le faire dès à présent pour vous laisser le temps d'effectuer votre migration.

<a name="nsxvmigrationend"></a>

### Que se passe-t-il si nous n’avons pas migré avant le 16 janvier 2023 ?

OVHcloud ne supprime pas le service, mais ne peut pas garantir de SLA. Le client devra signer un document par lequel OVHcloud s’engage à quitter NSX-V à une date déterminée.

VMware a décidé d'initier la fin de vie de NSX-V à partir de janvier 2024, des discussions sont toujours en cours avec VMware pour prolonger le support de NSX-V, OVHcloud communiquera à ce sujet dès que possible, dans l'attente d'une déclaration officielle de VMware.

<a name="bgp"></a>

### Est-il possible de faire du BGP ?

Il est impossible de faire du BGP public.

Il est toutefois possible de faire du BGP dans le vRack, une documentation sera disponible prochainement pour détailler cette solution.

<a name="bgpoveripsec"></a>

### Est-ce que NSX-T est compatible BGP à travers IPSEC ?

Actuellement, la fonctionnalité BGP sur IPEC n'est disponible qu'à partir d'un T0 (version antérieure à la version 4.1.1).

Cette opération nécessite des droits spécifiques à T0 pour créer le tunnel.

Si vous avez un cas d'utilisation spécifique, vous pouvez ouvrir un ticket afin que nous puissions vous accompagner dans cette configuration.

<a name="changeas"></a>

### Quel est le changement concernant l'AS ?

Avant la version 4.1.1, il y a un numéro d'AS par environnement provenant du T0.

En ouvrant un ticket auprès du Support, vous pouvez demander une modification sur le numéro AS.

Avec la version 4.1.1, vous pourrez mettre en place un AS différent sur le VRF et ne pas avoir nécessairement le numéro AS du T0.

<a name="virtualfirewallt0pcc"></a>

### Peut-on mettre un pare-feu virtuel devant le T0 dans le même PCC ?

Aujourd'hui, ce n'est pas possible. Le T0 dispose déjà d'une fonctionnalité de pare-feu de passerelle, nous vous recommandons de configurer le pare-feu avec le T0.

<a name="t0vst1">

### Quelle est la différence entre T0 et T1?

Dans la conception VMware, un T1 est toujours attaché à un T0.

Les flux passent par le T0 pour aller au réseau externe.

Tous les éléments devant rester à l'intérieur de la plateforme Vsphere sont routés par le T1.

<a name="addt0gw"></a>

### Comment puis-je ajouter une autre Tier-0 Gateway ?

Il est actuellement impossible d'ajouter une nouvelle Tier-0 Gateway fonctionnelle.

<a name="publicgateway"></a>

### Le bouton "Edit" dans NSX pour Tier-0 est désactivé, comment puis-je configurer la Gateway publique ?

C'est impossible par défaut. Les Tier-0 Gateways sont hébergées chacune sur un host différent, HA (High Availability) est activée et un VIP est configuré entre les 2 EDGES afin de maintenir la continuité de service. La partie HA est déjà préconfigurée par OVHCloud.

<a name="t0gwdoublebw"></a>

### Puis-je configurer une Tier-0 Gateway active-active afin d’avoir une double bande passante (garantie 10+10=20Gb/s et "théorique" 25+25Gb/s) ?

Non, c'est impossible par défaut, la configuration est gérée par OVHcloud et se fait en mode actif/passif avec un VIP (10 Gbp/s de bande passante garantie).

<a name="t0commandline"></a>

### Est-il possible de se connecter au Tier-0 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ?

Non, c'est impossible pour le Tier-0.

<a name="t1interface capacity"></a>

### Quel est le nombre maximum d'interfaces (segments connectés) sur une Tier-1 Gateway ?

Cette information se trouve dans NSX > Inventory > Capacity.

Concernant les Edges, nous nous référons aux Gateways et aux Tier-0 et Tier-1. Le Tier-0 est déjà déployé et utilise 3 IPs publiques pour faire le routage entre les Gateways actives/de secours et utilise le concept d’un VIP qui est en amont des 2 IPs publiques internes. Ce dispositif est utilisé pour le failover et la redondance.

NSX et NSX-v sont différents et pour le moment vous ne pouvez pas interrompre la configuration Tier-0 actuelle et en déployer d’autres.

<a name="t1commandline"></a>

### Est-il possible de se connecter au Tier-1 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ?

Non, c'est impossible pour le Tier-1. Différents outils sont disponibles dans NSX pour répondre à ces besoins.

<a name="addpublicicip"></a>

### Comment puis-je ajouter des IP publiques ?

Comme indiqué dans [ce guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps#display-the-ha-vip-virtual-ip-address), il n'est actuellement pas possible de créer de nouvelles adresses IP virtuelles, mais cette fonctionnalité devrait être disponible prochainement.

<a name="ipblockdistribution"></a>

### Est-ce que les blocs d’adresses IP peuvent être utilisés/distribués entre deux DC VMware dans un même PCC ?

Les blocs d'adresses IP sont dépendants du PCC et non du vDC. Il est donc possible d'utiliser le même bloc d'adresses IP entre plusieurs datacentres virtuels (sans aucune modification).

<a name="updatensxtvsphere703"></a>

### Doit-on mettre à jour les clusters afin de pouvoir utiliser NSX-T dans un environnement Vsphère 7.0.3 ?

Dans ce cas, il n'est pas nécessaire de mettre à jour les clusters.

<a name="managemigrationip"></a>

### Comment sont gérés les IP lors de la migration?

Vous trouverez dans le [guide de migration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc), comment déplacer votre IP existante depuis votre plateforme NSX-V et les router vers l'IP attachée à la partie T0.

Lorsqu’un vDC NSX-T est livré, nous déployons et configurons un nouveau bloc IP pour NSX T0 ( VIP + NSX EDGES). Vous pourrez réutiliser l'IP attachée au DC NSX-V et les faire pointer vers le nouveau vDC.

<a name="vdcmigration"></a>

### Pour la migration vDC, il faut passer le DS en global. Un retour arrière est-il possible sur cette configuration ?

Le datastore global est géré au niveau du manager ou de l’API.

Cela vous permet de globaliser votre datastore qui sera visible depuis votre nouveau vDC. Il vous permet de faire un compute vmotion et non un stockage vmotion des VM.

Dans ce cas, une restauration n'est pas possible, il vous faudra commander un nouveau datastore et y appliquer une vmotion pour libérer le global.

<a name="nsxmigrationimpact"></a>

### Quel est l’impact client de la migration vers NSX 4.1.1 ?

Il n'y a normalement pas de temps d'arrêt, une tâche de maintenance sera initiée, y compris un déplacement des bords avec un Vmotion.

Du côté de l'utilisateur, il n'y a pas de tâche spécifique à planifier.

<a name="docandtrainingnsxt"></a>

### Allez-vous fournir des formations et de la documentation pour améliorer les compétences NSX-T ?

- [Getting Started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)
- [VMware on OVHcloud](products/hosted-private-cloud-hosted-private-cloud-powered-by-vmware)

<a name="nsxtmigrationpfsense"></a>

### Si une migration NSX-V a été planifiée vers une solution tiers PFSense. Doit-on repartir sur la demande de création d'un nouveau VDC sans NSX-V ? Peut-on le faire sur le vDC existant ?

Dans ce cas, vous n'avez pas besoin de commander un nouveau DC, mais assurez-vous de désactiver toutes vos fonctionnalités NSX-V afin qu'OVHcloud puisse désactiver le composant.

<a name="internetoutput"></a>

### Est-ce que l'output Internet est configurable ? En d’autres termes, est-il possible de déployer l’interface ?

Il n'est pas possible de gérer l'output Internet dans NSX car Edge est géré par OVHcloud, mais vous pouvez configurer le réseau sur votre VM (vSPHERE).

<a name="ipmigrationperblock"></a>

### La migration des IP peut-elle se faire IP par IP ou par bloc RIPE ?

La migration d'IP est effectuée par bloc, vous changez l'étape suivante du bloc d'IP, le bloc global est transitionné vers la partie NSX.

<a name="ipmigrationinterruption"></a>

### Cette migration interrompt-elle le service ? Si oui, combien de temps ?

Cela dépendra des services utilisés. Par exemple, si vous utilisez des tunnels IPSEC et des IP publiques, vous devrez déplacer vos charges de travail et reconfigurer le bloc IP que vous aviez sur votre infrastructure NSX-V vers votre infrastructure NSX-T.

Lors de ce déplacement d'IP, une coupure de service de courte durée peut se produire. En fonction de votre topologie réseau, vous pouvez avoir une continuité via le service vrack des flux entre les différentes charges de travail portées par une exposition des fronts NSX-V, vous déplacez les différentes machines vers le second DC et à travers le vrack le flux continu à remonter vers vos fronts NSX-V précédents .

Le temps d'arrêt dépend donc de la complexité de votre environnement.

<a name="bandwidthedgenode"></a>

### Quel sera le débit des cartes des edge-node, sachant que le T0 sera mutualisé ?

Cela dépendra des services activés (LoadBalancer/NAT/Firewall...)

<a name="vrackwithnsxt"></a>

### Est-ce que le vRack fonctionne avec les NSX-T ?

Oui, le vRack fonctionne avec NSX-T.

Vous avez la possibilité d'y accéder à partir de groupes de ports dans vSphere ou de segments de VLAN grâce à NSX.

<a name="vrackaccess"></a>

### Le cluster de VMs aura-t-il accès au vRack ? Ou le vRack sera-t-il uniquement connecté au Edge Node ?

Le cluster NSX est totalement compatible avec le vRack. Vous pouvez ajouter le service NSX dans votre vRack PCC. Retrouvez plus d'informations à propos du vRack sur [cette page](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).

<a name="ha"></a>

### Puis-je configurer High Availability (HA) ?

Non, les NSX Edges sont configurées par OVHcloud suivant les bonnes pratiques VMware en matière de HA.

<a name="multipleedgeclusters"></a>

### Peut ont avoir plusieur edge cluster ?

Aujourd'hui, 1 seul cluster NSX-T Edge est nécessaire.

<a name="averageconfiguration"></a>

### Actuellement nous avons 300 edges et environ 5000 rdp simultanés. La configuration "moyenne 4 vcpu / 8 Go RAM / 200 Go" va-t-elle tenir pour les flux ?

Le dimensionnement dépendra des services que vous activerez ou consommerez sur vos edges (firewall ou load balancing...).

Aujourd'hui, le nœud edge de taille M peut ne pas vous convenir, la version 4.1.1 vous accordera de nouvelles fonctionnalités comme « Edge nodes scale up », vous permettant de passer aux profils L ou XL.

Tout dépend de vos cas d’usage et des métriques dont vous disposez sur votre plateforme.

<a name="VRF"></a>

### Si nous ne voulons pas d’un VRF pour fractionner le T0, quelle serait la solution en dehors de la formation ou de l’achat d’un nouveau PCC ?

Il est possible de ne pas utiliser le VRF et d'utiliser le T1.

Vous pouvez utiliser un T1, hébergeant les charges de travail qui le sous-tendent. Dans ce cas, le T1 est utilisé comme un « mini » VRF mais les flux seront mélangés à l'intérieur du T0.

L'avantage de faire un VRF en T0 est de maintenir le partitionnement de la table de routage des éléments allant vers le réseau externe de la plateforme vSphere.

<a name="api"></a>

### Puis-je utiliser l’API OVHcloud pour configurer et utiliser NSX ?

Oui, il est possible de le faire.

<a name="migrationzerto"></a>

### Comment se passe la migration avec Zerto ?

Suivez simplement les étapes de la documentation fournie par OVHcloud.

<a name="veeamzerto"></a>

### Que faire de mes options Veeam et Zerto ? Sont-elles toujours compatibles avec NSX ?

Oui, mais il faudra les reconfigurer après la migration vDC.

<a name="nsxtwithnsxv"></a>

### Est-il possible de faire cohabiter notre pcc nsxv et nsx-t durant la phase de transition ?

Il est possible d'obtenir NSX-T si vous commandez un nouveau vDC .

Veuillez noter que la commande du nouveau vDC déclenchera automatiquement le mécanisme de remboursement pour le mois à venir.

<a name="nsxvtonsxtmigration"></a>

### Combien de temps durera la migration ?

Cela dépendra principalement de la phase de découverte/évaluation de l’infrastructure NSX-V et de la phase de conception côté NSX-T.

La migration elle-même est courte, il s'agit d'une reconfirmation de la stack VMware.

Il est possible de créer un réseau étendu, un VPN entre les deux environnements, vxLAN pour NSX-V et des segments avec NSX-T, permettant de déplacer des VM d'un vDC à un autre et d'effectuer ensuite les étapes de migration. La coupure de service sera ainsi limitée lors de la transition.

Vous pouvez également inclure Terraform dans votre conception NSX-T afin de pousser votre configuration Terraform directement dans l'environnement que vous venez de commander.

<a name="nsxmigrationcoordinator"></a>

### Pouvons-nous utiliser "migration coordinator" pour la migration entre nsx-v et nsx ?

Cet outil nécessite des droits d'administration très forts sur l'environnement, l'équipe Professional Services peut valider l'exécution et la duplication. Dans cet outil, il est important de noter que de nombreux éléments ne sont pas pris en charge (options, règles existantes dans NSX-V).

La phase de reproduction nécessiterait beaucoup d'adaptation de votre part, ce n'est donc pas un outil recommandé dans la migration.

<a name="nsxterraform"></a>

### Pourquoi la gestion de NSX via Terraform est-elle réalisée via un endpoint `https://nsxt` distinct ?

L’API NSX est indépendante et non liée à l’API vSphere. C'est pourquoi nous avons créé un endpoint dédié pour l'atteindre.

<a name="nsxedge"></a>

### Est-il possible de faire communiquer un NSX Edge entre 2 PCC ?

Oui, c'est possible.

<a name="nsxbackupmanualconfiguration"></a>

### Réalisez-vous des backups des configs NSX, y compris le paramétrage manuel du client ?

Oui, OVHcloud réalise des sauvegardes, vous pouvez les retrouver dans votre control panel NSX-T.

Cette sauvegarde n'est pas destinée à la restauration lors d'une mauvaise manipulation, mais de support en cas de corruption des différents contrôleurs NSX-T.

<a name="nsxtinto2016pcc"></a>

### Est-il possible d'avoir la livraison d'un vDC NSX-T dans un PCC 2016, existe-t-il des problèmes de livraison ?

Oui, c'est possible, il n'y a pas de contraintes actuellement.

<a name="etarelease"></a>

### Avez-vous une date d'ETA pour la 4.1.1?

L'ETA est prévue pour la fin octobre 2023.

<a name="snclimitations"></a>

### Des limitations supplémentaires sont-elles présentes dans un contexte SecNumCloud ?

Il n’y a pas de limitations supplémentaires par rapport à un environnement non-SNC.

<a name="sncmigration"></a>

### Dans un contexte SecNumCloud, la migration se déroule-t-elle de la même façon ?

Oui, les deux migrations sont identiques.

<a name="semnumcloudbackupoutside"></a>

### Existe-t-il une sauvegarde en dehors de SecNumCloud ?

Il n'existe pas de différence entre les sauvegardes SNC et non SNC.

<a name="pricingnsxton411version"></a>

### Pourquoi y a-t-il une modification tarifaire pour NSX-T et sa version 4.1.1 ?

La hausse des tarifs des offres NSX est basée sur :

    - la hausse de nos coûts basée sur l’inflation de l’ensemble de nos services en 2022 et 2023
    - Les frais de licence NSX-T
    - Les coûts liés à l’infrastructure de gestion NSX

Dans l’attente de la disponibilité de la version NSX 4.1.1, les ressources physiques dédiées à l’hébergement de VM NSX Edge ont été reprises par OVHcloud et ne vous ont pas été facturées.

Par conséquent, la transition vers la version 4.1.1 n'aura aucune incidence sur les prix.

<a name="pricemigrationpcc"></a>

### Est-ce que les dates d'engagements et le prix initial sur les PCC sont conservés lors d'une migration pour la durée de l'engagement ?

L’engagement et les conditions ne seront pas automatiquement maintenus.

Nous vous invitons à prendre contact avec votre interlocuteur privilégié chez OVHcloud afin de mettre en place de nouvelles conditions commerciales.

<a name="priceduringmigration"></a>

### Pendant la phase de migration, devra-t-on payer en double notre plateforme pendant un mois et ensuite se faire rembourser le mois suivant ?

OVHcloud vous remboursera 1 mois de frais d’hébergement et de gestion NSX sur la prochaine facture après la commande de votre nouveau vDC (1 mois = 30 jours).

<a name="pricealbandipsids"></a>

### Y a-t-il un coût supplémentaire à l'utilisation du LoadBalancer Advanced (avec WAF) et d'un IPS/IDS distribué ?

La version de base d'ALB est déjà incluse dans la version licence NSX-T, sans coût supplémentaire.

IPS/IDS n'est, pour le moment, pas disponible.

## Aller plus loin

[Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.