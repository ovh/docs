---
title: "NSX - Foire aux questions"
excerpt: "Retrouvez une foire aux questions des scénarios les plus fréquents concernant l'utilisation de NSX au sein de l'écosystème Hosted Private Cloud"
updated: 2024-10-24
---

## Objectif

**Retrouvez ci-dessous une foire aux questions pour répondre aux utilisations NSX**.

## Foire aux questions - FAQ

> [!faq] 
> Quels sont les différences entre les packs d’assistance <a name="diffencepack"></a>
> > Tous les packs sont basés sur un décompte jours/heures, par exemple : 1 jour = 8 heures, 2 jours = 16 heures (parfois plus).
> > La première approche est la même pour tous les packs avec une phase de découverte, mais la durée du pack dépendra de la complexité de l'environnement et de la maturité de votre offre managé en place.
> > Cette question sera étudiée avec les équipes [Professional Services](/links/professional-services) lors d'un premier appel d'évaluation.
> >
> Comment puis-je protéger mes machines virtuelles directement exposées sur Internet avec une IP Publique ? <a name="public ip"></a>
> > Vous pouvez positionner l'interface externe de vos machines virtuelles dans un segment `ovh-t0-public` et ensuite sécuriser vos flux avec le Distributed Firewall de NSX.
> >
> Quelle est la date de fin de vie de NSX-V ? <a name="eofnsxv"></a>
> > VMware a décidé d'initier la fin de vie (EOL) de NSX-V depuis janvier 2022. OVHcloud a obtenu une extension de support jusqu'au 31 juillet 2024.
> >
> Quelle est la date fin de support pour les demandes de migration vers NSX-T ? 
> > La fin de vie de NSX-V étant prévue pour le 31 juillet 2024. Cette date étant passé, la migration ne peut plus être effectuée.
> >
> Quelle est la date maximale à laquelle faire la demande d'accompagnement de migration ? <a name="deadlineassistance"></a>
> > Il n'est plus possible d'effectuer cette migration à ce jour. Cependant, [contactez le support](https://help.ovhcloud.com/csm?id=csm_get_help) ou votre technical account manager (TAM) si vous avez besoin de plus d'information sur vos possibilités à ce jour.
> >
> Que se passe-t-il si nous n’avons pas migré avant le 31 juillet 2024 ? <a name="nsxvmigrationend"></a>
> > OVHcloud ne supprime pas le service, mais nous ne pouvons pas garantir le même niveau d'engagement de service (SLA). Un document doit donc être signé sous forme de clause contractuelle fixant la responsabilité sur la fin de vie de NSX-V depuis le 31 juillet 2024 en cas de problème.
> >
> Est-il possible de faire du Border Gateway Protocol (BGP) ? <a name="bgp"></a>
> > Il est impossible de faire du BGP public (peer avec les router internet OVHcloud).
> > Il est toutefois possible de faire du BGP (privé) avec un vRack via une passerelle Tier-0 ou une passerelle VRF de niveau 0, ou dans un tunnel IPsec via une Tier-0 uniquement.
> > 
> Est-ce que NSX-T est compatible BGP à travers IPSEC ? <a name="bgpoveripsec"></a>  
> > Actuellement, la fonctionnalité BGP over IPSEC n'est disponible qu'à partir d'une passerelle Tier-0 (version antérieure à la version 4.1.1). Il n'est pas possible de terminer un tunnel VPN sur une passerelle VRF de niveau 0.
> > Cette opération nécessite des droits spécifiques avec la passerelle Tier-0 pour créer le tunnel.
> > Si vous avez un cas d'utilisation spécifique, vous pouvez ouvrir un ticket afin que nous puissions vous accompagner dans cette configuration.
> >
> Quel est le changement concernant le système autonome BGP (AS) ?
> > Il est possible de positionner des AS numbers différents selon les passerelles Tier-0 ou les passerelles VRF de niveau 0.
> >
> Peut-on mettre un pare-feu virtuel devant le Tier-0 dans le même vSphere managé ?
> > Vous pouvez tout à fait déconnecter les interfaces publiques de la T0 et interconnecter celles-ci via un réseau privé ou une appliance de sécurité exposée en direct sur internet.
> >
> Quelle est la différence entre une passerelle Tier-0 et une Tier-1 ? <a name="t0vst1">
> > Dans la conception VMware, une Tier-1 est toujours attaché à une Tier-0.
> > Les flux passent par une Tier-0 pour aller au réseau externe.
> > Tous les éléments devant rester à l'intérieur (en local) de la plateforme Vsphere managé sont routés par la Tier-1.
> >
> Comment puis-je ajouter une autre Tier-0 Gateway ? <a name="addt0gw"></a>
> > Il est actuellement impossible d'ajouter une nouvelle Tier-0 Gateway fonctionnelle.
> > Selon les besoins, il est possible de créer une instance virtuelle de Tie-0 appelée VRF, cette VRF ne pourra pas être connectée sur internet.
> >
> Le bouton "Edit" dans NSX pour une Tier-0 est désactivé, comment puis-je configurer la Gateway publique ? <a name="publicgateway"></a>
> > C'est impossible par défaut. Les Tier-0 Gateways sont hébergées chacune sur un host différent, HA (High Availability) est activée et une IP virtuelle (VIP) est configuré entre les 2 EDGES afin de maintenir la continuité de service. La partie HA est déjà préconfigurée par OVHcloud.
> > Ce n'est plus le cas dans la version `4.1.1`.
> >
> Puis-je configurer une Tier-0 Gateway active-active afin d’avoir une double bande passante ("garantie" 10+10=20Gb/s et "théorique" 25+25=50Gb/s) ? 
> > Non, c'est impossible par défaut, la configuration est gérée par OVHcloud et se fait en mode actif/passif avec un VIP (10 Gbp/s de bande passante garantie).
> >
> Est-il possible de se connecter au Tier-0 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ? <a name="t0gwdoublebw"></a>
> > Non, c'est impossible pour la Tier-0.
> >
> Quel est le nombre maximum d'interfaces (segments connectés) sur une Tier-1 Gateway ? <a name="t1interface capacity"></a>
> > Cette information se trouve dans l'interface NSX-T `NSX > Inventory > Capacity`{.action}. Pour voir comment vous connecter à l'interface web NSX-T consultez le guide suivant : [Activer NSX-T dans un Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_add_user_rights).
> >
> > Concernant les Edges, nous nous référons aux Gateways et aux Tier-0 et Tier-1. Le Tier-0 est déjà déployé et utilise 3 IPs publiques pour faire le routage entre les Gateways actives/de secours et utilise le concept d’un VIP qui est en amont des 2 IPs publiques internes. Ce dispositif est utilisé pour le failover et la redondance.
> > NSX et NSX-v sont différents et pour le moment, vous ne pouvez pas interrompre la configuration Tier-0 actuelle et en déployer d’autres.
> >
> Est-il possible de se connecter au Tier-1 en ligne de commande pour effectuer un diagnostic ou de la capture de paquets ? <a name="t1commandline"></a>
> > Non, c'est impossible pour la Tier-1. Différents outils sont disponibles dans NSX pour répondre à ces besoins.
> >
> Comment puis-je ajouter des IP publiques** ? <a name="addpublicicip"></a>
> > L'ajout d'IP publiques supplémentaires peut se faire via le routage "next hop" en spécifiant comme ressource l'environnement VMware vSphere managé (pcc) et en `next hop` l'IP virtuelle (VIP) publique de la T0.
> >
> Est-ce que les blocs d’adresses IP peuvent être utilisés/distribués entre deux DC VMware dans un même vSphere managé ? <a name="ipblockdistribution"></a>
> > Les blocs d'adresses IP sont dépendants de l'environnement VMware vSphere managé (pcc) et non du vDC. Il est donc possible d'utiliser le même bloc d'adresses IP entre plusieurs datacentres virtuels (sans aucune modification).
> > Un bloc d'IP public routé sur l'IP virtuelle (VIP) de votre T0 ne pourra être utilisé dans un autre `VMnetwork` vDC. Le subnet défini sur l'interface de la T0 est utilisable sur les autres vDC du même vSphere managé via le segment NSX `ovh-t0-public`.
> >
> Doit-on mettre à jour les clusters afin de pouvoir utiliser NSX-T dans un environnement Vsphère `7.0.3` ? <a name="updatensxtvsphere703"></a>
> > Dans ce cas, il n'est pas nécessaire de mettre à jour les clusters.
> > 
> Comment sont gérés les IP lors de la migration ? <a name="managemigrationip"></a>
> > Vous trouverez, dans le [guide de migration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc), comment déplacer votre IP existante depuis votre plateforme NSX-V et la router vers l'IP attachée à la partie T0.
> > Lorsqu’un vDC NSX-T est livré, nous déployons et configurons un nouveau bloc IP pour NSX T0 (VIP + NSX EDGES). Vous pourrez réutiliser l'IP attachée au DC NSX-V et la faire pointer vers le nouveau vDC.
> >
> Pour la migration vDC, il faut passer le DS en global. Un retour arrière est-il possible sur cette configuration ? <a name="vdcmigration"></a>
> > Le datastore global est géré au niveau de l'espace client ou de l’API OVHcloud.
> > Cela vous permet de globaliser votre datastore qui sera visible depuis votre nouveau vDC. Il vous permet de faire un `Compute` vMotion et non un `Storage` vMotion des machines virtuelles.
> > Dans ce cas, une restauration n'est pas possible, il vous faudra commander un nouveau datastore et y appliquer un vMotion pour le libérer globalement.
> >
> Quel est l’impact de la migration vers NSX-T `4.1.1` ? <a name="nsxmigrationimpact"></a>
> > Il n'y a normalement pas de temps d'arrêt, une tâche de maintenance sera initiée, y compris un déplacement des Edges avec un vMotion.
> > Aucune tâche spécifique est à planifier sur vos environnements managés.
> >
> Allez-vous fournir des formations et de la documentation pour améliorer les compétences NSX-T ? <a name="docandtrainingnsxt"></a>
> >
> > - [Getting Started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)
> > - [VMware on OVHcloud](/products/hosted-private-cloud-hosted-private-cloud-powered-by-vmware)
> >
> Si une migration NSX-V a été planifiée vers une solution tierce pfSense, doit-on repartir sur une demande de création d'un nouveau vDC sans NSX-V ? Peut-on le faire sur le vDC existant ? <a name="nsxtmigrationpfsense"></a>
> > Dans ce cas, vous n'avez pas besoin de commander un nouveau vDC, mais assurez-vous de désactiver toutes vos fonctionnalités NSX-V afin que OVHcloud puisse désactiver le composant.
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
> Quel sera le débit des cartes des edge-nodes, sachant que le T0 sera mutualisé ? <a name="bandwidthedgenode"></a>
> > Cela dépendra des services activés (LoadBalancer/NAT/Firewall, etc.)
> >
> Est-ce que le vRack fonctionne avec les NSX-T ?  <a name="vrackwithnsxt"></a>
> > Oui, le vRack fonctionne avec NSX-T.
> > Vous avez la possibilité d'y accéder à partir de groupes de ports dans vSphere ou de segments de VLAN grâce à NSX.
> >
> Le cluster de mach ines virtuelles aura-t-il accès au vRack OVHcloud ? Ou est-ce que le vRack sera-t-il connecté aux edge nodes ? <a name="vrackaccess"></a>
> > Le cluster NSX est bien compatible avec un vRack OVHcloud. Vous pouvez ajouter le service NSX dans le vRack de votre VMware vSphere managé (pcc). Retrouvez plus d'informations sur [cette page](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).
> >
> Puis-je configurer High Availability (HA) ? <a name="ha"></a> 
> > Non, les routeurs NSX Edges sont configurées par OVHcloud suivant les bonnes pratiques VMware officielle de gestion d'infrastructure privée en matière de haute disponibilité (HA).
> >
> Est-il possible d'avoir plusieurs edge clusters ? <a name="multipleedgeclusters"></a>  
> > Aujourd'hui, 1 seul cluster NSX-T Edge est nécessaire.
> >
> Actuellement, nous avons 300 edges et environ 5000 RDP simultanés. La configuration moyenne "4 vcpu / 8 Go RAM / 200 Go" va-t-elle tenir pour les flux ? <a name="averageconfiguration"></a>
> > Le dimensionnement dépendra des services que vous activerez ou consommerez sur vos edges (firewall ou load balancing...).
> > Aujourd'hui, le nœud edge de taille Medium peut ne pas vous convenir, la version `4.1.1` vous accordera de nouvelles fonctionnalités comme « Edge nodes scale up », vous permettant de passer aux profils L ou XL.
> > Tout dépend de vos cas d’usage et des métriques dont vous disposez sur votre plateforme.
> >
> Si nous ne voulons pas d’un VRF pour fractionner la T0, quelle serait la solution en dehors de la formation ou de l’achat d’un nouveau vSphere managé ? <a name="VRF"></a>
> > Il est possible de ne pas utiliser le VRF et d'utiliser la T1.
> > Vous pouvez utiliser un T1, hébergeant les workloads qui le sous-tendent. Dans ce cas, la T1 est utilisé comme un « mini » VRF mais les flux seront mélangés à l'intérieur du T0.
> > L'avantage de faire un VRF en T0 est de maintenir le partitionnement de la table de routage des éléments allant vers le réseau externe de votre plateforme VMware vSphere managé.
> >
> Puis-je utiliser l’API OVHcloud pour configurer et utiliser NSX ? <a name="api"></a>
> > Oui, il est possible de le faire, voici un exemple des appels API v1 que vous pouvez utiliser au sein de l'univers **/dedicatedcloud** :
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
> Comment se passe la migration avec les solutions Zerto ? <a name="migrationzerto"></a>
> > Suivez simplement les étapes de la documentation fournie par OVHcloud :
> >
> > - [Utiliser Zerto entre OVHcloud et une plateforme tierce](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)
> > - [Utiliser Zerto Virtual Replication entre deux datacenters OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_vm_replica_deletion) 
> >
> Que faire de mes options de sauvegarde Veeam et de replication Zerto ? Sont-elles toujours compatibles avec NSX ? <a name="veeamzerto"></a>
> > Oui, mais il faudra les reconfigurer après la migration de votre centre de données virtuelle (vDC).
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
> Est-il possible de faire communiquer un routeur NSX Edge entre 2 environnements VMware vSphere managé ? <a name="nsxedge"></a>
> > Oui, c'est possible.
> >
> Réalisez-vous des backups des configs NSX, y compris le paramétrage manuel du client ? <a name="nsxbackupmanualconfiguration"></a>
> > Oui, OVHcloud réalise des sauvegardes, vous pouvez les retrouver dans votre control panel NSX-T.
> > Cette sauvegarde n'est pas destinée à la restauration lors d'une mauvaise manipulation, mais de support en cas de corruption des différents contrôleurs NSX-T.
> > 
> Est-il possible d'avoir la livraison d'un vDC NSX-T dans un VMware vSphere managé d'année 2016, existera-t-il des problèmes lors de la livraison ? <a name="nsxtinto2016pcc"></a>
> > Oui, c'est possible, il n'y a pas de contraintes actuellement.
> >
> Des limitations supplémentaires sont-elles présentes dans un contexte SecNumCloud ? <a name="snclimitations"></a>
> > Il n’y a pas de limitations supplémentaires par rapport à un environnement non qualifié SecNumCloud.
> > 
> Dans un contexte SecNumCloud, la migration se déroule-t-elle de la même façon ? <a name="sncmigration"></a> 
> > Oui, les deux migrations sont identiques.
> >
> Existe-t-il une sauvegarde en dehors de SecNumCloud ? <a name="semnumcloudbackupoutside"></a>
> > Il n'existe pas de différence entre les sauvegardes dans les environnements qualifiés SecNumCloud et non SecNumCloud.
> >
> Pourquoi y a-t-il une modification tarifaire pour NSX-T et sa version `4.1.1` ? <a name="pricingnsxton411version"></a> 
> > La hausse des tarifs des offres NSX est basée sur : 
> >
> > - la hausse de nos coûts basée sur l’inflation de l’ensemble de nos services en 2022 et 2023.
> > - Les frais de licence NSX-T.
> > - Les coûts liés à l’infrastructure de gestion NSX.
> >
> Est-ce que les dates et le prix initial des environnements managés sont conservés lors d'une migration pour toute la durée de l'engagement ? <a name="pricemigrationpcc"></a>
> > L’engagement et les conditions ne seront pas automatiquement maintenus.
> > Nous vous invitons à prendre contact avec votre interlocuteur privilégié chez OVHcloud afin de mettre en place de nouvelles conditions commerciales.
> > 
> Pendant la phase de migration, devra-t-on payer en double notre plateforme durant un mois et ensuite se faire rembourser le mois suivant ? <a name="priceduringmigration"></a>
> > OVHcloud vous remboursera 1 mois de frais d’hébergement et de gestion NSX sur votre prochaine facture après la commande de votre nouveau centre de données virtuelle (vDC) (1 mois = 30 jours).
> >
> Y a-t-il un coût supplémentaire à l'utilisation du Load Balancer Advanced (avec WAF) et d'un IPS/IDS distribué ? <a name="pricealbandipsids"></a>
> > Oui, la version de base de load balancer applicatif avec firewall (ALB + WAF) n'est pas incluse dans la licence NSX-T. Nous la proposerons sous forme d'option supplémentaire.

## Aller plus loin

La lecture du guide [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).