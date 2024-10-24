---
title: "NSX - Foire aux questions"
excerpt: "Retrouvez une foire aux questions des scénarios les plus fréquents concernant l'utilisation de NSX au sein de l'écosystème Hosted Private Cloud"
updated: 2024-09-24
---

## Objectif

**Retrouvez ci-dessous une foire aux questions pour répondre aux utilisations NSX**.

## Foire aux questions - FAQ

> [!faq] 
> Quels sont les différents packs d’assistance ? Quelles sont les différences entre les packs ? <a name="diffencepack"></a>
> > Tous les packs sont basés sur des jours (1 jour = 8 heures). 1 jour, 2 jours (parfois plus).
> > La première approche est la même pour tous les packs avec une phase de découverte, mais la durée du pack dépendra de la complexité de l'environnement et de la maturité du client.
> > Cette question sera étudiée avec l'équipe Professional Services lors d'un premier appel d'évaluation.
> >
> Comment puis-je protéger mes machines virtuelles directement exposées sur Internet avec une IP Publique ? <a name="public ip"></a>
> > Vous pouvez positionner l'interface externe de vos VM dans un segment "ovh-t0-public" et ensuite sécuriser vos flux avec le Distributed Firewall de NSX.
> >
> Quelle est la date de fin de vie de NSX-V ? <a name="eofnsxv"></a>
> > VMware a décidé d'initier la fin de vie (EOL) de NSX-V depuis janvier 2022. OVHcloud a obtenu une extension de support jusqu'au 31 juillet 2024.
> >
> Quelle est la date fin de support pour les demandes de migration vers NSX-T ? 
> > La fin de vie de NSX-V étant prévue pour le 31 juillet 2024. Cette date étant passé, la migration ne peut plus être effectuée.
> >
> Quelle est la date maximale à laquelle faire la demande d'accompagnement de migration ? <a name="deadlineassistance"></a>
> > Il n'est donc plus possible d'effectuer cette migration à ce jour. Contactez le support si vous êtes toujours dans ce cas aujourd'hui.
> >
> Que se passe-t-il si nous n’avons pas migré avant le 31 juillet 2024 ? <a name="nsxvmigrationend"></a>
> > OVHcloud ne supprime pas le service, mais ne peut pas garantir le même niveau d'engagement de service (SLA). Un document doit donc être signé sous forme de clause contractuelle fixant la responsabilité sur la fin de vie de NSX-V depuis le 31 juillet 2024 en cas de problème.
> >
> Est-il possible de faire du BGP ? <a name="bgp"></a>
> > Il est impossible de faire du BGP public (peer avec les router internet OVHcloud).
> > Il est toutefois possible de faire du BGP (privé) avec un vRack via une passerelle Tier-0 ou une passerelle VRF de niveau 0, ou dans un tunnel IPsec via une Tier-0 uniquement.
> > 
> Est-ce que NSX-T est compatible BGP à travers IPSEC ? <a name="bgpoveripsec"></a>  
> > Actuellement, la fonctionnalité BGP over IPSEC n'est disponible qu'à partir d'une passerelle Tier-0 (version antérieure à la version 4.1.1). Il n'est pas possible de terminer un tunnel VPN sur une passerelle VRF de niveau 0.
> > Cette opération nécessite des droits spécifiques avec la passerelle Tier-0 pour créer le tunnel.
> > Si vous avez un cas d'utilisation spécifique, vous pouvez ouvrir un ticket afin que nous puissions vous accompagner dans cette configuration.
> >
> Quel est le changement concernant l'AS (BGP) ?
> > Il est possible de positionner des AS numbers differents selon les passerelles Tier-0 ou les passerelles VRF de niveau 0.
> >
> Peut-on mettre un pare-feu virtuel devant le T0 dans le même vSphere managé ?
> > Vous pouvez tout à fait déconnecter les interfaces publiques de la T0 et interconnecter celles-ci via un réseau privé ou une appliance de sécurité exposée en direct sur internet.
> >
> Quelle est la différence entre T0 et T1 ? <a name="t0vst1">
> > Dans la conception VMware, un T1 est toujours attaché à un T0.
> > Les flux passent par le T0 pour aller au réseau externe.
> > Tous les éléments devant rester à l'intérieur (en local) de la plateforme Vsphere sont routés par le T1.
> >
> Comment puis-je ajouter une autre Tier-0 Gateway ? <a name="addt0gw"></a>
> > Il est actuellement impossible d'ajouter une nouvelle Tier-0 Gateway fonctionnelle.
> > Selon les besoins, il est possible de créer une instance virtuelle de Tie-0 appelée VRF, cette VRF ne pourra pas être connectée sur internet.
> >
> Le bouton "Edit" dans NSX pour Tier-0 est désactivé, comment puis-je configurer la Gateway publique ? <a name="publicgateway"></a>
> > C'est impossible par défaut. Les Tier-0 Gateways sont hébergées chacune sur un host différent, HA (High Availability) est activée et un VIP est configuré entre les 2 EDGES afin de maintenir la continuité de service. La partie HA est déjà préconfigurée par OVHcloud.
> > Ce n'est plus le cas dans la version 4.1.1
> >
> Puis-je configurer une Tier-0 Gateway active-active afin d’avoir une double bande passante (garantie 10+10=20Gb/s et "théorique" 25+25Gb/s) ? 
> > Non, c'est impossible par défaut, la configuration est gérée par OVHcloud et se fait en mode actif/passif avec un VIP (10 Gbp/s de bande passante garantie).
> >
> Est-il possible de se connecter au Tier-0 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ? <a name="t0gwdoublebw"></a>
> > Non, c'est impossible pour le Tier-0.
> >
> Quel est le nombre maximum d'interfaces (segments connectés) sur une Tier-1 Gateway ? <a name="t1interface capacity"></a>
> > Cette information se trouve dans `NSX > Inventory > Capacity`{.action}.
> >
> > Concernant les Edges, nous nous référons aux Gateways et aux Tier-0 et Tier-1. Le Tier-0 est déjà déployé et utilise 3 IPs publiques pour faire le routage entre les Gateways actives/de secours et utilise le concept d’un VIP qui est en amont des 2 IPs publiques internes. Ce dispositif est utilisé pour le failover et la redondance.
> > NSX et NSX-v sont différents et pour le moment, vous ne pouvez pas interrompre la configuration Tier-0 actuelle et en déployer d’autres.
> >
> Est-il possible de se connecter au Tier-1 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ? <a name="t1commandline"></a>
> > Non, c'est impossible pour le Tier-1. Différents outils sont disponibles dans NSX pour répondre à ces besoins.
> >
> Comment puis-je ajouter des IP publiques** ? <a name="addpublicicip"></a>
> > L'ajout d'IP publiques supplémentaires peut se faire via le routage "next hop" en spécifiant comme ressource le PCC et en next hop la VIP publique de la T0.
> >
> Est-ce que les blocs d’adresses IP peuvent être utilisés/distribués entre deux DC VMware dans un même vSphere managé ? <a name="ipblockdistribution"></a>
> > Les blocs d'adresses IP sont dépendants du PCC et non du vDC. Il est donc possible d'utiliser le même bloc d'adresses IP entre plusieurs datacentres virtuels (sans aucune modification).
> > Un bloc d'IP public routé sur la VIP de T0 ne pourra être utilisé dans un autre VDC sur le "VMnetwork", le subnet défini sur l'interface de la T0 est utilisable sur les autres vDC du même vSphere managé via le segment NSX "ovh-t0-public".
> >
> Doit-on mettre à jour les clusters afin de pouvoir utiliser NSX-T dans un environnement Vsphère 7.0.3 ? <a name="updatensxtvsphere703"></a>
> > Dans ce cas, il n'est pas nécessaire de mettre à jour les clusters.
> > 
> Comment sont gérés les IP lors de la migration ? <a name="managemigrationip"></a>
> > Vous trouverez, dans le [guide de migration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc), comment déplacer votre IP existante depuis votre plateforme NSX-V et la router vers l'IP attachée à la partie T0.
> > Lorsqu’un vDC NSX-T est livré, nous déployons et configurons un nouveau bloc IP pour NSX T0 (VIP + NSX EDGES). Vous pourrez réutiliser l'IP attachée au DC NSX-V et la faire pointer vers le nouveau vDC.
> >
> Pour la migration vDC, il faut passer le DS en global. Un retour arrière est-il possible sur cette configuration ? <a name="vdcmigration"></a>
> > Le datastore global est géré au niveau de l'espace client ou de l’API OVHcloud.
> > Cela vous permet de globaliser votre datastore qui sera visible depuis votre nouveau vDC. Il vous permet de faire un compute vMotion et non un stockage vMotion des VM.
> > Dans ce cas, une restauration n'est pas possible, il vous faudra commander un nouveau datastore et y appliquer une vMotion pour libérer le global.
> >
> Quel est l’impact client de la migration vers NSX 4.1.1 ? <a name="nsxmigrationimpact"></a>
> > Il n'y a normalement pas de temps d'arrêt, une tâche de maintenance sera initiée, y compris un déplacement des Edges avec un Vmotion.
> > Du côté de l'utilisateur, il n'y a pas de tâche spécifique à planifier.
> >
> Allez-vous fournir des formations et de la documentation pour améliorer les compétences NSX-T ? <a name="docandtrainingnsxt"></a>
> >
> > - [Getting Started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)
> > - [VMware on OVHcloud](/products/hosted-private-cloud-hosted-private-cloud-powered-by-vmware)
> >
> Si une migration NSX-V a été planifiée vers une solution tierce pfSense, doit-on repartir sur une demande de création d'un nouveau vDC sans NSX-V ? Peut-on le faire sur le vDC existant ? <a name="nsxtmigrationpfsense"></a>
> > Dans ce cas, vous n'avez pas besoin de commander un nouveau DC, mais assurez-vous de désactiver toutes vos fonctionnalités NSX-V afin que OVHcloud puisse désactiver le composant.
> >
> Est-ce que l'output Internet est configurable ? En d’autres termes, est-il possible de déployer l’interface ? <a name="internetoutput"></a>
> > Il n'est pas possible de gérer l'output Internet dans NSX car Edge est géré par OVHcloud, mais vous pouvez configurer le réseau sur votre VM (vSphere managé).
> 
> La migration des IP peut-elle se faire IP par IP ou par bloc IP ? <a name="ipmigrationperblock"></a> 
> > La migration d'IP est effectuée par bloc, vous changez le *next stop* du bloc IP, le bloc global est transitionné vers la partie NSX.
> >
> Cette migration interrompt-elle le service ? Si oui, combien de temps ? <a name="ipmigrationinterruption"></a>
> > Cela dépendra des services utilisés. Par exemple, si vous utilisez des tunnels IPSEC et des IP publiques, vous devrez déplacer vos workloads et reconfigurer le bloc IP que vous aviez sur votre infrastructure NSX-V vers votre infrastructure NSX-T.
> > Lors de ce déplacement d'IP, une coupure de service de courte durée peut se produire. En fonction de votre topologie réseau, vous pouvez avoir une continuité via le service vRack des flux entre les différents workloads portés par une exposition des fronts NSX-V, vous déplacez les différentes machines vers le second DC et à travers le vRack le flux continue à remonter vers vos fronts NSX-V précédents.
> > Le temps d'arrêt dépend donc de la complexité de votre environnement.
> >
> Quel sera le débit des cartes des edge-node, sachant que le T0 sera mutualisé ? <a name="bandwidthedgenode"></a>
> > Cela dépendra des services activés (LoadBalancer/NAT/Firewall, etc.)
> >
> Est-ce que le vRack fonctionne avec les NSX-T ?  <a name="vrackwithnsxt"></a>
> > Oui, le vRack fonctionne avec NSX-T.
> > Vous avez la possibilité d'y accéder à partir de groupes de ports dans vSphere ou de segments de VLAN grâce à NSX.
> >
> Le cluster de VMs aura-t-il accès au vRack ? Ou le vRack sera-t-il uniquement connecté au Edge Node ? <a name="vrackaccess"></a>
> > Le cluster NSX est totalement compatible avec le vRack. Vous pouvez ajouter le service NSX dans votre vRack PCC. Retrouvez plus d'informations à propos du vRack sur [cette page](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).
> >
> Puis-je configurer High Availability (HA) ? <a name="ha"></a> 
> > Non, les NSX Edges sont configurées par OVHcloud suivant les bonnes pratiques VMware en matière de HA.
> >
> Est-il possible d'avoir plusieurs edge clusters ? <a name="multipleedgeclusters"></a>  
> > Aujourd'hui, 1 seul cluster NSX-T Edge est nécessaire.
> >
> Actuellement, nous avons 300 edges et environ 5000 RDP simultanés. La configuration moyenne "4 vcpu / 8 Go RAM / 200 Go" va-t-elle tenir pour les flux ? <a name="averageconfiguration"></a>
> > Le dimensionnement dépendra des services que vous activerez ou consommerez sur vos edges (firewall ou load balancing...).
> > Aujourd'hui, le nœud edge de taille M peut ne pas vous convenir, la version 4.1.1 vous accordera de nouvelles fonctionnalités comme « Edge nodes scale up », vous permettant de passer aux profils L ou XL.
> > Tout dépend de vos cas d’usage et des métriques dont vous disposez sur votre plateforme.
> >
> Si nous ne voulons pas d’un VRF pour fractionner le T0, quelle serait la solution en dehors de la formation ou de l’achat d’un nouveau vSphere managé ? <a name="VRF"></a>
> > Il est possible de ne pas utiliser le VRF et d'utiliser le T1.
> > Vous pouvez utiliser un T1, hébergeant les workloads qui le sous-tendent. Dans ce cas, le T1 est utilisé comme un « mini » VRF mais les flux seront mélangés à l'intérieur du T0.
> > L'avantage de faire un VRF en T0 est de maintenir le partitionnement de la table de routage des éléments allant vers le réseau externe de la plateforme vSphere.
> >
> Puis-je utiliser l’API OVHcloud pour configurer et utiliser NSX ? <a name="api"></a>
> > Oui, il est possible de le faire, voici un exemple des appels API v1 que vous pouvez utiliser au sein de l'univers /dedicatedcloud :
> >
> > > [!api]
> > >
> > > @api {v1} /dedicatedCloud PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt
> > >
> >
> > > **Paramètres** :
> > > 
> > > - `clusterId` : ID du cluster vSphere managé, exemple (2010).
> > > - `datacenterId` : ID du datastore vSphere managé, exemple (1254)
> > > - `serviceName` : Nom du vSphere managé, exemple (pcc-XXX-XXX-XXX).
> > >  
> Comment se passe la migration avec Zerto ? <a name="migrationzerto"></a>
> > Suivez simplement les étapes de la documentation fournie par OVHcloud :
> >
> > - [Utiliser Zerto entre OVHcloud et une plateforme tierce](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)
> > - [Utiliser Zerto Virtual Replication entre deux datacenters OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_vm_replica_deletion) 
> >
> Que faire de mes options Veeam et Zerto ? Sont-elles toujours compatibles avec NSX ? <a name="veeamzerto"></a>
> > Oui, mais il faudra les reconfigurer après la migration vDC.
> >
> Est-il possible de faire cohabiter votre vSphere managé NSX-V et NSX-T durant la phase de transition ? <a name="nsxtwithnsxv"></a>
> > Il est possible d'obtenir NSX-T si vous commandez un nouveau vDC.
> > Veuillez noter que la commande du nouveau vDC déclenchera automatiquement le mécanisme de remboursement pour le mois à venir.
> >
> Combien de temps durera la migration ? <a name="nsxvtonsxtmigration"></a>
> > Cela dépendra principalement de la phase de découverte/évaluation de l’infrastructure NSX-V et de la phase de conception côté NSX-T.
> > La migration elle-même est courte, il s'agit d'une reconfirmation de la stack VMware.
> > Il est possible de créer un réseau étendu, un VPN entre les deux environnements, vxLAN pour NSX-V et des segments avec NSX-T, permettant de déplacer des VM d'un vDC à un autre et d'effectuer ensuite les étapes de migration. La coupure de service sera ainsi limitée lors de la transition.
> > Vous pouvez également inclure Terraform dans votre conception NSX-T afin de pousser votre configuration Terraform directement dans l'environnement que vous venez de commander.
> >
> Pouvons-nous utiliser "migration coordinator" pour la migration entre nsx-v et nsx ? <a name="nsxmigrationcoordinator"></a>
> > Cet outil nécessite des droits d'administration très forts sur l'environnement, l'équipe Professional Services peut valider l'exécution et la duplication. Dans cet outil, il est important de noter que de nombreux éléments ne sont pas pris en charge (options, règles existantes dans NSX-V).
> > La phase de reproduction nécessiterait beaucoup d'adaptations de votre part, ce n'est donc pas un outil recommandé dans la migration.
> >
> Pourquoi la gestion de NSX via Terraform est-elle réalisée via un endpoint `https://nsxt` distinct ? <a name="nsxterraform"></a>
> > L’API NSX est indépendante et non liée à l’API vSphere. C'est pourquoi nous avons créé un endpoint dédié pour l'atteindre.
> >
> Est-il possible de faire communiquer un NSX Edge entre 2 PCC ? <a name="nsxedge"></a>
> > Oui, c'est possible.
> >
> Réalisez-vous des backups des configs NSX, y compris le paramétrage manuel du client ? <a name="nsxbackupmanualconfiguration"></a>
> > Oui, OVHcloud réalise des sauvegardes, vous pouvez les retrouver dans votre control panel NSX-T.
> > Cette sauvegarde n'est pas destinée à la restauration lors d'une mauvaise manipulation, mais de support en cas de corruption des différents contrôleurs NSX-T.
> > 
> Est-il possible d'avoir la livraison d'un vDC NSX-T dans un PCC 2016, existe-t-il des problèmes de livraison ? <a name="nsxtinto2016pcc"></a>
> > Oui, c'est possible, il n'y a pas de contraintes actuellement.
> >
> Avez-vous une date d'ETA pour la version 4.1.1 ? <a name="etarelease"></a>
> > L'ETA était prévue pour fin octobre 2023.
> >
> Des limitations supplémentaires sont-elles présentes dans un contexte SecNumCloud** ? <a name="snclimitations"></a>
> > Il n’y a pas de limitations supplémentaires par rapport à un environnement non-SNC.
> > 
> Dans un contexte SecNumCloud, la migration se déroule-t-elle de la même façon ? <a name="sncmigration"></a> 
> > Oui, les deux migrations sont identiques.
> >
> Existe-t-il une sauvegarde en dehors de SecNumCloud ? <a name="semnumcloudbackupoutside"></a>
> > Il n'existe pas de différence entre les sauvegardes SNC et non SNC.
> >
> Pourquoi y a-t-il une modification tarifaire pour NSX-T et sa version 4.1.1 ? <a name="pricingnsxton411version"></a> 
> > La hausse des tarifs des offres NSX est basée sur : 
> >
> > - la hausse de nos coûts basée sur l’inflation de l’ensemble de nos services en 2022 et 2023.
> > - Les frais de licence NSX-T.
> > - Les coûts liés à l’infrastructure de gestion NSX.
> >
> > Dans l’attente de la disponibilité de la version NSX 4.1.1, les ressources physiques dédiées à l’hébergement de VM NSX Edge ont été reprises par OVHcloud et ne vous ont pas été facturées.
> > Par conséquent, la transition vers la version 4.1.1 n'aura aucune incidence sur les prix.
> >
> Est-ce que les dates d'engagements et le prix initial sur les PCC sont conservés lors d'une migration pour la durée de l'engagement ? <a name="pricemigrationpcc"></a>
> > L’engagement et les conditions ne seront pas automatiquement maintenus.
> > Nous vous invitons à prendre contact avec votre interlocuteur privilégié chez OVHcloud afin de mettre en place de nouvelles conditions commerciales.
> > 
> Pendant la phase de migration, devra-t-on payer en double notre plateforme pendant un mois et ensuite se faire rembourser le mois suivant ? <a name="priceduringmigration"></a>
> > OVHcloud vous remboursera 1 mois de frais d’hébergement et de gestion NSX sur la prochaine facture après la commande de votre nouveau vDC (1 mois = 30 jours).
> >
> Y a-t-il un coût supplémentaire à l'utilisation du LoadBalancer Advanced (avec WAF) et d'un IPS/IDS distribué ? <a name="pricealbandipsids"></a>
> > Oui, la version de base d'ALB n'est pas incluse dans la version licence NSX-T. Nous la proposerons sous forme d'option supplémentaire.
> >

## Aller plus loin

[Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).