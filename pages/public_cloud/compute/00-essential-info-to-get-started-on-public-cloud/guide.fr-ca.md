---
title: "L'essentiel pour commencer avec Public Cloud"
excerpt: "Découvrez des notions de base utiles pour commencer dans l'environnement Public Cloud"
updated: 2022-02-07
---

**Dernière mise à jour le 07/02/2022**

## Objectif

Le Public Cloud OVHcloud est un environnement rassemblant un grand nombre de produits cloud, disponibles à travers le monde, compatibles entre eux et dont l'utilisation peut être envisagée pour une période courte (une heure, quelques jours...) ou plus longue (plusieurs mois, années).

La mise à disposition est quasiment instantanée et la facturation est directement adaptée à votre usage, ce qui apporte simplicité et flexibilité à vos pratiques.

Ce guide vous permet de découvrir les notions essentielles pour une bonne exploitation des produits.
<br>Nous vous y présentons d'abord une [approche globale du Public Cloud](#global-approach) et quelques notions générales, puis une [approche concrète](#concrete-approach) avec les avantages fournis par le Public Cloud, ansi que les premières étapes de démarrage.
<br>Enfin, nous vous proposons des ressources pour [aller plus loin](#gofurther).

Si vous êtes déjà familier de ces concepts, vous pouvez poursuivre la découverte du Public Cloud OVHcloud en parcourant les guides suivants :

- [Ouvrir un compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [Créer votre premier projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- [Se familiariser avec l'interface Public Cloud](/pages/public_cloud/compute/03-public-cloud-interface-walk-me)
- [Créer sa première instance](/pages/public_cloud/compute/public-cloud-first-steps)
- [Gérer ses quotas](/pages/public_cloud/compute/increasing_public_cloud_quota)

## Approche globale <a name="global-approach"></a>

### Un écosystème de ressources à la demande

L'ensemble des produits disponibles dans le Public Cloud (comme les serveurs, les clusters Kubernetes, les volumes disque...) forment un écosystème.
<br>Chaque élément correspond à une fonction et répond à un besoin, il peut être utilisé seul ou en complément d'autres éléments du catalogue.
<br>Par exemple, une instance (un serveur à la demande) peut être utilisée en complément d'éléments de stockage comme l'object storage. Si votre application nécessite une base de donnée, il existe également un élément pour répondre à ce besoin.

Tous ces composants sont intégrés dans un environnement pour faciliter le déploiement et l'utilisation de ces ressources.
<br>De ce fait, il est très facile de démarrer des ressources comme une instance ou un cluster Kubernetes. Le déploiement se fait en quelques secondes.
<br>Vous pouvez aussi supprimer ces ressources quelques heures plus tard et ainsi ne payer que ce temps d'utilisation. C'est ce qu'on appelle les « ressources à la demande ».

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Des ressources disponibles partout

Le catalogue Public Cloud propose des ressources bas niveau comme des instances ou des réseaux privés ou des ressources managées dans les couches plus élevées, comme une base de donnée.
<br>Ces ressources sont fournies en tant que service, dans le sens où l'utilisateur n'a pas besoin d'acheter les éléments, il les utilise pour un temps (comme une location) et paye simplement le prix correspondant au temps de l'utilisation.
<br>Le plus souvent, l'utilisation de ces ressources ne vous engage pas sur une durée (sauf dans le cas d'une facturation mensuelle destinée à réduire vos coûts).

Lorsque la ressource proposée est « managée », on parle le plus souvent d'une ressource dans les couches hautes, déjà proche de l'applicatif, comme un cluster de base de données, un cluster Kubernetes, une solution d'entrainement de modèle pour l'IA...
<br>On entend par « managée » le fait que la plateforme est déployée, monitorée, maintenue (upgrade) par OVHcloud. Vous n'avez pas à vous soucier de toute cette gestion et vous profitez directement du service.

Ces ressources sont disponibles dans nos différents datacenters répartis dans le monde. OVHcloud propose les services Public Cloud en Europe, en Amérique du nord, en Asie et en Océanie.
<br>Il est possible de démarrer une ressource dans chacun de ces endroits en sélectionnant simplement la localisation souhaitée.

![Public Cloud geolocation](images/geolocation.png){.thumbnail}

### Un fournisseur de service cloud sur un marché mature

Le Public Cloud OVHcloud se positionne aux côtés de fournisseurs cloud bien connus comme AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (de Microsoft) ou encore Alibaba Cloud. Notre offre se distingue par [des tarifs particulièrement avantageux](https://www.ovhcloud.com/fr-ca/public-cloud/prices/) et l'utilisation d'APIs standards laissant nos utilisateurs libres des changements, sans adhérence à l'une ou l'autre technologie propriétaire.

## Approche concrète <a name="concrete-approach"></a>

### Cas d'usages : quelques exemples concrets et leurs avantages

- **Plus de flexibilité** : _Vous avez une application qui fonctionne actuellement sur un hébergement classique comme un (ou plusieurs) serveur dédié et vous souhaitez plus de flexibilité dans l'utilisation._ L'utilisation des instances Public Cloud est très proche de celle d'un serveur dédié, mais elle apporte la possibilité de redimensionner votre serveur facilement, suivre les évolutions matérielles, ajouter de l'espace de stockage à chaud, configurer l'architecture réseau comme vous le souhaitez, programmer des sauvegardes ou cloner votre serveur en quelques actions simples.

- **Plus de scalabilité** : _Vous développez une application cloud native et vous souhaitez une infrastructure capable d'encaisser de fortes variations de charge._ Les clusters Kubernetes peuvent réagir et s'adapter dynamiquement en fonction de la charge. Ils peuvent ajouter des noeuds au cluster de manière automatique quand la pression sur l'infrastructure augmente.

- **Plus de maitrise des coûts** : _Vous avez une application en production sujette à des saisonnalités et vous souhaitez déporter la charge de calcul au moment des pics, sans maintenir des coûts d'infrastructure importants tout au long de l'année. Les instances facturées à l'heure peuvent effectuer les tâches en peu de temps et être détruites une fois que le besoin est passé.

- **Plus de sérénité** : _Vous avez besoin d'une base de donnée mais vous ne souhaitez pas gérer le moteur et en assurer la maintenance. Les bases de données managées sont disponibles en quelque secondes et sont totalement gérées par OVHcloud, vous pouvez directement utiliser le service de base de données en vous affranchissant de l'installation, la maintenance, les mises à jour...

### L'utilisation : une interface simple et des API standards

Il y a plusieurs manière de manipuler les ressources Public Cloud. Qu'on découvre les produits Public Cloud ou qu'on soit un utilisateur avancé, l'utilisation reste simple.

- Pour découvrir les produits, l'espace client vous accompagne dans la création de ressources en vous amenant à choisir la performance du produit, sa localisation, la personnalisation que vous souhaitez ou encore d'autres paramètres comme son mode de facturation.

- Pour automatiser les déploiements et industrialiser vos architectures, vous pouvez également utiliser les outils du marché en vous connectant directement aux APIs standards comme l'API S3, les API d'OpenStack ou même Kubernetes.

### Démarrage : prise en main

#### Le projet

Pour démarrer, vous aurez d'abord besoin d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

Vous devrez ensuite [créer un projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project). Un projet est un environnement que vous allez dédier à un contexte.

Par exemple, vous pouvez choisir de séparer vos environnements de test et de production dans deux projets.
<br>Ou bien vous pouvez utiliser différents projets pour vos différentes applications (site public, boutique en ligne, application métier, gestion de documents, etc...).

Pour démarrer un projet, vous devrez nécessairement enregistrer un moyen de payement lors de la création du projet.

#### La facturation

Votre moyen de payement étant enregistré, il servira à débiter le montant calculé pour votre [facturation en fin de mois](/pages/public_cloud/compute/analyze_billing). Ce calcul est fait sur la base du temps d'utilisation de chaque ressource, en fonction du prix des ressources.

Exemple : Dans le mois, vous avez utilisé 1 instance d2-8 pendant tout le mois et 3 instances b2-60 qui comptabilisent ensemble 32 heures.
<br>Votre facture sera de 720 (nombre d'heure dans le mois) x 0,0325 € HT (prix de l'heure d'une d2-8) + 32 x 0,4589 € HT (prix de l'heure d'une b2-60). Soit 38,08 € HT.

#### La gestion des quotas

Vous serez peut être amené à gérer la question des quotas.
<br>Le quota Public Cloud définit le maximum de ressources que vous pouvez démarrer. Il dépend de certains paramètres (ancienneté du compte, factures précédentes...).
<br>Ces quotas sont attribués par localisation (région au sens OpenStack). Il se peut donc que vous atteigniez le maximum de ressources possibles sur votre projet et qu'il faille [augmenter ces quotas](/pages/public_cloud/compute/increasing_public_cloud_quota).

![Public Cloud quota](images/quota.png){.thumbnail}

#### La gestion des utilisateurs

Vous pouvez avoir besoin de gérer plusieurs utilisateurs qui vont intervenir sur votre projet.
<br>Vous avez alors deux possibilités :

- Si vous souhaitez utiliser les APIs OpenStack ou S3, ou l'interface Horizon, vous aurez à [créer des utilisateurs](/pages/public_cloud/compute/create_and_delete_a_user) pour cela. Les utilisateurs peuvent éventuellement avoir des droits limités afin de sécuriser les périmètres d'action.
- Si vous n'avez pas besoin d'accéder aux APIs ou à Horizon, vous pouvez [associer un autre compte client OVHcloud](/pages/public_cloud/compute/delegate_projects) en complément sur votre projet.

## Aller plus loin <a name="gofurther"></a>

Voici quelques ressources générales qui vous aideront dans votre démarrage sur Public Cloud :

|Documentation|Détails|
|---|---|
|[FAQ](/pages/public_cloud/compute/faq_pci)|Les questions les plus fréquentes au sujet de Public Cloud.|
|[Lexique](/pages/public_cloud/compute/introduction_about_instances)|Les concepts et définitions dont vous aurez besoin pour avancer.|
|[Disponibilité des services par localisation](https://www.ovhcloud.com/fr/public-cloud/regions-availability/)|Les tableaux de disponibilité des services à travers les différentes localisations.|
|[Changelog des images](/pages/public_cloud/compute/image_changelog)|Les changements apportés aux images système disponibles publiquement.|

Dans la pratique, voici également quelques guides qui vous aideront au démarrage :

|Documentation|Détails|
|---|---|
|[Créer sa première instance](/pages/public_cloud/compute/public-cloud-first-steps)|Premier guide pratique pour démarrer un serveur cloud depuis l'espace client OVHcloud.|
|[Utilisation d'une clé SSH](/pages/public_cloud/compute/public-cloud-first-steps#etape-2-stocker-les-cles-publiques-dans-lespace-client-ovhcloud_1/)| Pour vous connecter à une instance Linux, vous aurez besoin de passer par une connexion SSH, ce guide vous en détaille l'utilisation.|
|[Configuration du réseau privé](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)|Chez OVHcloud, les réseaux privés sont portés par la technologie vRack. Ce guide vous accompagne dans cette mise en place.|
|[Attacher un disque supplémentaire à une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)|Ce guide vous accompagne pour ajouter du stockage additionnel à votre première instance.|
|[Accéder à l'interface Horizon](/pages/public_cloud/compute/introducing_horizon)|L'interface Horizon d'OpenStack permet certaines actions avancées, voici comment vous y connecter.|
|[Créer un cluster Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster) (EN)|Ce guide vous accompagne pas à pas dans la création de votre premier cluster Kubernetes.|
|[Configurer une Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)|Les Additional IP peuvent vous permettre de basculer le trafic d'une instance à une autre, ce guide vous expliquera comment configurer cela.|
|[Installation de la CLI OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)|OpenStack peut également être utilisé en ligne de commande, voici comment installer les outils.|

Un des gros avantages d'utiliser des technologies standards et ouvertes, comme OpenStack ou Kubernetes, est de bénéficier de toute la documentation déjà disponible.

|Documentation|Détails|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|La documentation exhaustive de l'incontournable client en ligne de commande 'openstack'. Documentation pour la version Stein, référez-vous au [tableau de disponibilité](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) pour savoir quels sont les services disponibles.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/) (EN)|La documentation exhaustive des APIs d'OpenStack. Documentation pour la version Stein, référez-vous au [tableau de disponibilité](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) pour savoir quels sont les services disponibles.|
|[End user documentation](https://docs.openstack.org/stein/user/) (EN)|La documentation complète pour l'utilisateur d'OpenStack, en version Stein.|
|[Developer documentation](https://developer.openstack.org/) (EN)|La documentation pour les développeurs qui souhaitent connecter leur application aux APIs d'OpenStack en utilisant les librairies/SDK disponibles.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| La documentation de l'incontournable client en ligne de commande 'kubctl'.|
|[Kubernetes APIs Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| La documentation de l'API de Kubernetes, utile pour avoir une vue d'ensemble des possibilités.|

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
