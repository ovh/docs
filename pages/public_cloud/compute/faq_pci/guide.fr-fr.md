---
title: FAQ Public Cloud OVHcloud
excerpt: Retrouvez les questions les plus fréquemment posées sur les services Public Cloud OVHcloud
updated: 2024-10-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## FAQ Public Cloud

### Options et facturation

/// details | Comment la facturation de Public Cloud fonctionne-t-elle ?

La facturation intervient entre le 1er et le 5e jour de chaque mois et porte sur votre consommation du mois précédent. Si vous avez opté pour une tarification mensuelle, le forfait du mois à venir vous est facturé en même temps que la consommation du mois précédent (instances, Object Storage). En cas de bascule vers le tarif mensuel d'une ressource, un prorata temporis est débité immédiatement pour le mois en cours.
Notez que toute instance est facturée tant qu’elle n’est pas supprimée de votre espace client OVHcloud.
Vous pouvez suivre votre consommation grâce à des projections obtenues depuis l’historique de vos usages. Vous avez également la possibilité de choisir une facturation dissociée pour chaque projet Public Cloud, ce qui permet une éventuelle refacturation au sein de votre entreprise.

Pour passer d’un mode de facturation à l’autre, consultez notre guide [Passer d’une facturation à l’heure à une facturation mensuelle](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
Pour plus d'informations sur la facturation Public Cloud, consultez [notre guide dédié](/pages/public_cloud/compute/analyze_billing).

> [!success]
> Bénéficiez de prix réduits en vous engageant sur une période de 1 à 36 mois sur vos ressources Public Cloud. Plus d’informations sur notre page [Savings Plans](/links/public-cloud/savings-plan).

///

/// details | Comment attacher une instance Public Cloud au Savings Plan que je viens de commander ?

Il n'y a aucune action à effectuer. Toute instance déjà créée (ou prochainement créée) et correspondant au modèle choisi pour votre [Savings Plan](/links/public-cloud/savings-plan) y sera automatiquement intégrée, sous réserve que la quantité de ressources du Savings Plan ne soit pas épuisée.

///

/// details | Comment puis-je faire évoluer mes instances si j’ai besoin de plus ou moins de ressources ?

Toute instance peut être redimensionnée vers une plus puissante de la même gamme depuis l’espace client en cliquant sur `éditer`{.action} sur la page de l’instance. Il est également possible de redimensionner celle-ci vers un modèle inférieur, si elle a été lancée avec l'option « flex ». Cette option impose une taille de disque de 50 Go pour tous les modèles et permet ainsi les redimensionnements dans les deux sens.
Dans tous les cas, le redimensionnement d'une instance implique son redémarrage.

///

/// details | Les instances Public Cloud sont-elles compatibles avec cloud-init ?

Oui, les images cloud fournies par OVHcloud intègrent les scripts cloud-init qui permettent de personnaliser les instances au démarrage. L'infrastructure délivre les informations de personnalisation de l'instance via un serveur de métadonnées directement contacté par cloud-init.

///

/// details | Est-ce que la virtualisation dans l'instance est possible ?

Oui et non.

Oui car l'option est activée (le *flag CPU VMX* est visible dans votre instance). Vous pouvez donc utiliser n'importe quelle solution de virtualisation dans votre instance (KVM, QEMU, VirtualBox, Xen, HyperV, etc.).

Non car dès qu'une live-migration de votre instance aura lieu (et cela peut avoir lieu à tout moment, en se basant sur le cycle de vie de l'hyperviseur sous-jacent), votre noyau Linux pourrait dysfonctionner (kernel panic).

Suivez [ce lien](https://www.linux-kvm.org/page/Nested_Guests#Limitations) pour plus d'informations.

///

### Connexion à une instance

/// details | Comment se connecter à une instance Public cloud ?

La connexion se fait grâce à un couple de clés SSH à configurer lors de la création de votre instance Public cloud.

Nous vous invitons à consulter le guide [Création et connexion à une première instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

///

/// details | J'ai perdu ou je souhaite changer ma clé SSH, comment faire ?

Si vous ne pouvez plus vous connecter suite à la perte de votre clé privée, vous devez alors changer la clé publique de votre instance en passant cette dernière en mode « Rescue ».

Nous vous invitons à consulter le guide [Changer sa clé SSH en cas de perte](/pages/public_cloud/compute/replacing_lost_ssh_key).

///

/// details | Comment créer et gérer des utilisateurs OpenStack ?

Afin de pouvoir utiliser les API Horizon ou OpenStack, vous devrez au préalable créer un utilisateur OpenStack. Vous pouvez en créer un nombre illimité.

Nous vous invitons à consulter le guide [Création et suppression d’un utilisateur OpenStack](/pages/public_cloud/compute/create_and_delete_a_user).

///

### Sauvegardes

/// details | Est-il possible de sauvegarder mes serveurs Public Cloud ?

Vous avez la possibilité de créer à tout moment la sauvegarde d’une instance depuis votre espace client OVHcloud. Cette dernière vous permet de restaurer votre instance sur une ancienne configuration, ou de pouvoir la recréer. Ces sauvegardes sont stockées et facturées au même titre que les images dans « Private Image ». Au travers des API OpenStack, vous aurez la possibilité de les télécharger hors de l'infrastructure OVHcloud ou sur d'autres projets.

Nous vous invitons à consulter le guide [Sauvegarder une instance](/pages/public_cloud/compute/save_an_instance).

///

/// details | Puis-je augmenter dynamiquement la taille d'un volume, tout en continuant à écrire sur le disque ?

Non, un volume doit être détaché avant de pouvoir l'agrandir.

///

/// details | Combien de volumes additionnels puis-je attacher à chaque instance ?

Vous pouvez attacher jusqu'à 25 volumes additionnels par instance.

///

### Réseau

/// details | Combien d'adresses IPv6 sont livrées avec mon instance ?

Chaque instance est livrée avec une adresse IPv6.

///

/// details | Puis-je changer l'IP publique de mon instance ?

Les IP publiques sont attribuées automatiquement aux instances et ne sont donc pas modifiables. Pour avoir la main sur l'IP publique d'une instance, nous vous conseillons d'utiliser une Additional IP. De cette manière, quelle que soit l'adresse IP publique attribuée automatiquement à l'instance, vous avez la possibilité d'ajouter une ou plusieurs Additional IP à votre instance.

Pour plus d'informations, nous vous invitons à consulter le guide : [Acheter une Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-buy).

///

/// details | Combien d'adresses Additional IP puis-je attacher à chaque instance ?

Vous pouvez attacher jusqu'à 256 Additional IP par instance.

///

/// details | Comment puis-je créer un réseau privé entre mes serveurs ?

Public Cloud intègre une solution SDN (software-defined network). Celle-ci permet de créer des réseaux privés dynamiquement, puis de les raccorder aux instances depuis votre espace client ou via l'API.
Ces réseaux privés sont portés par la technologie vRack d'OVHcloud commune aux autres services de l'entreprise, tels que Private Cloud ou les serveurs dédiés. Elle offre ainsi la possibilité de faire communiquer l'ensemble de vos éléments d'infrastructure chez OVHcloud, de manière isolée et sécurisée.

Nous vous invitons à consulter le guide [Configuration du vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

Le réseau privé dispose par défaut des protections réseau natives d'Openstack. Celles-ci intègrent différents mécanismes comme la protection contre le spoofing d'IP.<br>
Du côté des instances, cela peut se traduire par des blocages de paquets réseau selon votre usage (pfSense, routeur, protocole CARP, etc...).

Selon votre besoin, vous aurez besoin de désactiver la fonction de `Port Security` sur le port ou le réseau privé.
Nous vous invitons à consulter le guide de [gestion des règles de firewall et port security sur les réseaux utilisant OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

Vous trouverez aussi tous les détails sur la [documentation OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) ou sur [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

///

### Sécurité

/// details | Comment mes serveurs sont-ils sécurisés ?

OVHcloud protège l'ensemble de son infrastructure grâce à sa solution anti-DDoS exclusive. De plus, vous avez la possibilité d'ajouter les groupes de sécurité OpenStack : cet équivalent d'un pare-feu est géré directement au niveau de l'infrastructure d'OpenStack, en amont de vos instances.

Nous vous invitons à consulter le guide [Configurer un groupe de sécurité](/pages/public_cloud/compute/setup_security_group).

Ces protections, associées à celles que vous pouvez mettre en place sur vos serveurs, vous permettront d'optimiser la fiabilité de votre déploiement.

///

/// details | Comment vérifier si mon instance est vulnérable a la faille MDS ?

La vulnérabilité à la [faille MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) peut etre vérifiée avec la commande suivante:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Si le résultat est `Vulnerable`, n'ayez aucune crainte, l'hyperviseur sous-jacent vous protège.

Cependant, il est possible de mitiger cette faille directement dans votre instance en faisant un hard reboot de votre instance, soit [par le biais de l'espace client OVHcloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#redemarrer-une-instance), soit avec une commande comme celle-ci :

```bash
openstack server reboot --hard $serverID
```

///

/// details | Mon instance est-elle toujours vulnérable a la faille SSBD ?

La vulnérabilité à la [faille SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) peut etre vérifiée avec la commande suivante :

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Même si le résultat est `Vulnerable`, votre instance est tout de meme protegée face a cette faille.

En effet, le *flag CPU SSBD* n'est pas disponible pour votre instance car il peut provoquer des instabilités sur certains OS.

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
