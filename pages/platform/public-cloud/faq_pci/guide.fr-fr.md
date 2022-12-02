---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: 'Informations générales'
order: 01
---

**Dernière mise à jour le 01/12/2022**

## FAQ Public Cloud

### Comment se connecter à une instance Public cloud ?

La connexion se fait grâce à un couple de clés SSH à configurer lors de la création de votre instance Public cloud.

Nous vous invitons à consulter le guide [Création et connexion à une première instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/).

### J'ai perdu ou je souhaite changer ma clé SSH, comment faire ?

Si vous ne pouvez plus vous connecter suite à la perte de votre clé privée, vous devez alors changer la clé publique de votre instance en passant cette dernière en mode « Rescue ».

Nous vous invitons à consulter le guide [Changer sa clé SSH en cas de perte](https://docs.ovh.com/fr/public-cloud/changer-sa-cle-ssh-en-cas-de-perte/).

### Quels sont les possibilités de backup de mon instance ?

Vous avez la possibilité de créer à tout moment la sauvegarde d’une instance depuis votre espace client OVHcloud. Cette dernière vous permet de restaurer votre instance sur une ancienne configuration, ou de pouvoir la recréer.

Nous vous invitons à consulter le guide [Sauvegarder une instance](https://docs.ovh.com/fr/public-cloud/sauvegarder-une-instance/).

### Comment créer et gérer des utilisateurs OpenStack?  

Afin de pouvoir utiliser les API Horizon ou OpenStack, vous devrez au préalable créer un utilisateur OpenStack. Vous pouvez en créer un nombre illimité.

Nous vous invitons à consulter le guide [Création et suppression d’un utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/).

### Comment la facturation de Public Cloud fonctionne-t-elle ?

La facturation intervient entre le 1er et le 5e jour de chaque mois et porte sur votre consommation du mois précédent. Si vous avez opté pour une tarification mensuelle, le forfait du mois à venir vous est facturé en même temps que la consommation du mois précédent (instances, Object Storage). En cas de bascule vers le tarif mensuel d'une ressource, un prorata temporis est débité immédiatement pour le mois en cours.
Notez que toute instance est facturée tant qu’elle n’est pas supprimée de votre espace client OVHcloud.
Vous pouvez suivre votre consommation grâce à des projections obtenues depuis l’historique de vos usages. Vous avez également la possibilité de choisir une facturation dissociée pour chaque projet Public Cloud, ce qui permet une éventuelle refacturation au sein de votre entreprise.

Pour passer d’un mode de facturation à l’autre, consultez notre guide [Passer d’une facturation à l’heure à une facturation mensuelle](https://docs.ovh.com/fr/public-cloud/changer-type-facturation-public-cloud/).

### Comment puis-je faire évoluer mes instances si j’ai besoin de plus ou moins de ressources ?

Toute instance peut être redimensionnée vers une plus puissante de la même gamme depuis l’espace client en cliquant sur `éditer`{.action} sur la page de l’instance. Il est également possible de redimensionner celle-ci vers un modèle inférieur, si elle a été lancée avec l'option « flex ». Cette option impose une taille de disque de 50 Go pour tous les modèles et permet ainsi les redimensionnements dans les deux sens.
Dans tous les cas, le redimensionnement d'une instance implique son redémarrage.

### Les instances Public Cloud sont-elles compatibles avec cloud-init ?

Oui, les images cloud fournies par OVHcloud intègrent les scripts cloud-init qui permettent de personnaliser les instances au démarrage. L'infrastructure délivre les informations de personnalisation de l'instance via un serveur de métadonnées directement contacté par cloud-init.

### Est-il possible de sauvegarder mes serveurs Public Cloud ?

Vous pouvez créer des instances Backup de vos serveurs à tout moment, sans aucune limite. Ces sauvegardes sont stockées et facturées au même titre que les images dans « Private Image ». Au travers des API OpenStack, vous aurez la possibilité de les télécharger hors de l'infrastructure OVHcloud ou sur d'autres projets.

Nous vous invitons à consulter le guide [Sauvegarder une instance](https://docs.ovh.com/fr/public-cloud/sauvegarder-une-instance/).

### Puis-je augmenter dynamiquement la taille d'un volume, tout en continuant à écrire sur le disque ?

Non, un volume doit être détaché avant de pouvoir l'agrandir.

### Combien de volumes additionnels puis-je attacher à chaque instance ?

Vous pouvez attacher jusqu'à 25 volumes additionnels par instance.

### Comment mes serveurs sont-ils sécurisés ?

OVHcloud protège l'ensemble de son infrastructure grâce à sa solution anti-DDoS exclusive. De plus, vous avez la possibilité d'ajouter les groupes de sécurité OpenStack : cet équivalent d'un pare-feu est géré directement au niveau de l'infrastructure d'OpenStack, en amont de vos instances.

Nous vous invitons à consulter le guide [Configurer un groupe de sécurité](https://docs.ovh.com/fr/public-cloud/configurer-un-groupe-de-securite/).

Ces protections, associées à celles que vous pouvez mettre en place sur vos serveurs, vous permettront d'optimiser la fiabilité de votre déploiement.

### Comment puis-je créer un réseau privé entre mes serveurs ?

Public Cloud intègre une solution SDN (software-defined network). Celle-ci permet de créer des réseaux privés dynamiquement, puis de les raccorder aux instances depuis votre espace client ou via l'API.
Ces réseaux privés sont portés par la technologie vRack d'OVHcloud commune aux autres services de l'entreprise, tels que Private Cloud ou les serveurs dédiés. Elle offre ainsi la possibilité de faire communiquer l'ensemble de vos éléments d'infrastructure chez OVHcloud, de manière isolée et sécurisée.

Nous vous invitons à consulter le guide [Configuration du vRack Public Cloud](https://docs.ovh.com/fr/publiccloud/network-services/public-cloud-vrack/).

Le réseau privé dispose par défaut des protections réseau natives d'Openstack. Celles-ci intègrent différents mécanismes comme la protection contre le spoofing d'IP.<br>
Du côté des instances, cela peut se traduire par des blocages de paquets réseau selon votre usage (pfSense, routeur, protocole CARP, etc...).

Selon votre besoin, vous aurez besoin de désactiver la fonction de `Port Security` sur le port ou le réseau privé.
Nous vous invitons à consulter le guide de [gestion des règles de firewall et port security sur les réseaux utilisant OpenStack CLI](https://docs.ovh.com/fr/public-cloud/firewall_security_pci/).

Vous trouverez aussi tous les détails sur la [documentation OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) ou sur [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

### Puis-je changer l'IP publique de mon instance ?

Les IP publiques sont attribuées automatiquement aux instances et ne sont donc pas modifiables. Pour avoir la main sur l'IP publique d'une instance, nous vous conseillons d'utiliser une Additional IP. De cette manière, quelle que soit l'adresse IP publique attribuée automatiquement à l'instance, vous avez la possibilité d'ajouter une ou plusieurs Additional IP à votre instance.

Pour plus d'informations, nous vous invitons à consulter le guide : [Acheter une Additional IP](https://docs.ovh.com/fr/publiccloud/network-services/buy-additional-ip/).

### Comment vérifier si mon instance est vulnérable a la faille MDS ?

La vulnérabilité à la [faille MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) peut etre vérifiée avec la commande suivante:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Si le résultat est `Vulnerable`, n'ayez aucune crainte, l'hyperviseur sous-jacent vous protège.

Cependant, il est possible de mitiger cette faille directement dans votre instance en faisant un hard reboot de votre instance, soit [par le biais de l'espace client OVHcloud](https://docs.ovh.com/fr/public-cloud/debuter-avec-une-instance-public-cloud/#redemarrer-une-instance), soit avec une commande comme celle-ci :

```bash
openstack server reboot --hard $serverID
```

### Mon instance est-elle toujours vulnérable a la faille SSBD ?

La vulnérabilité à la [faille SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) peut etre vérifiée avec la commande suivante :

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Même si le résultat est `Vulnerable`, votre instance est tout de meme protegée face a cette faille.

En effet, le *flag CPU SSBD* n'est pas disponible pour votre instance car il peut provoquer des instabilités sur certains OS.

### Est-ce que la virtualisation dans l'instance est possible ?

Oui et non.

Oui car l'option est activée (le *flag CPU VMX* est visible dans votre instance). Vous pouvez donc utiliser n'importe quelle solution de virtualisation dans votre instance (KVM, QEMU, VirtualBox, Xen, HyperV, etc.).

Non car dès qu'une live-migration de votre instance aura lieu (et cela peut avoir lieu à tout moment, en se basant sur le cycle de vie de l'hyperviseur sous-jacent), votre noyau Linux pourrait dysfonctionner (kernel panic).

Suivez [ce lien](https://www.linux-kvm.org/page/Nested_Guests#Limitations) pour plus d'informations.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
