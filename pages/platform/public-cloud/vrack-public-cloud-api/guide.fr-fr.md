---
title: Configuration du vRack Public Cloud depuis les APIv6 OVHcloud
excerpt: 'Découvrez comment activer et gérer un vRack Public Cloud depuis les APIv6 OVHcloud'
slug: public-cloud-vrack-apiv6
section: vRack
order: 2
hidden: true
---

**Dernière mise à jour le 10/06/2020**

## Objectif

Le [vRack](https://www.ovh.com/fr/solutions/vrack/) est un réseau privé qui vous permet de configurer l’adressage entre deux ou plusieurs serveurs dédiés OVHcloud. Mais il vous permet également d’ajouter des [instances Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Découvrez comment activer et gérer un vRack Public Cloud depuis les APIv6 OVHcloud.**

## Prérequis

- Posséder un projet Public Cloud.
- Avoir créer un utilisateur OpenStack.
- Connaissances réseaux élémentaires.
- Consulter le guide [Configuration du vRack Public Cloud](../public-cloud-vrack) pour connaître les différentes méthodes proposées pour gérer le vRack Public Cloud OVHcloud
- Consulter le guide [Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

## En pratique

### Étape 1 : Activer et gérer un vRack

Connectez-vous aux APIv6 OVHcloud en suivant le guide [Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/).

Une fois identifié, suivez les étapes décrites ci-dessous :

#### Création du panier

> [!api]
>
> @api {POST} /order/cart
>

> [!primary]
> Cet appel va créer un identifiant pour votre « panier ». Vous pourrez y ajouter autant d'articles que vous voulez avant de le valider.
>
> Dans le cas présent, la commande d’un vRack est gratuite. Récupérez le numéro de votre panier (cartId), il sera indispensable pour la suite.
>

#### Récupération des informations nécessaires à la commande du vRack

> [!api]
>
> @api {GET} /order/cart/{cartId}/vrack
>

> [!primary]
> Cet appel va vous permettre de récupérer l'ensemble des informations nécessaires à la commande du vRack. Copiez les éléments suivants :
>
> *cartId*, *duration*, *planCode*, et *pricingMode*.

#### Ajout du vRack dans le panier

> [!api]
>
> @api {POST} /order/cart/{cartId}/vrack
>

> [!primary]
> Cet appel va vous permettre d'ajouter le vRack au panier en ajoutant l’ensemble des informations nécessaires à la commande.
>
> Dans le cas du vRack, cela donnerait par exemple :
>
> cartId : [identifiant de votre panier]
>
> duration : « P1M »
>
> planCode : « vrack »
>
> pricingMode : « default »
>
> quantity : 1
>

Une fois que vous aurez validé la commande, vous obtiendrez un numéro d'article (« itemId »). Conservez cette information, elle vous sera utile si vous souhaitez apporter des modifications avant la validation du panier.

#### Validation du panier

Une fois l'ensemble des articles mis dans votre panier, vous devrez le valider :

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>

> [!primary]
> Cet appel va valider le panier et vous créer un bon de commande (orderId). Conservez cette information, elle sera nécessaire à la validation de la commande.
>

#### Validation de la commande finale

Pour valider la commande, vous avez deux méthodes possibles :

- Passer par l'url visible lorsque le panier est validé. Exemple :  
> url : https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx

- Valider par l'appel suivant :

> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

> [!primary]
> Même s’il s’agit d’un bon de commande à 0 €, il est nécessaire de simuler un paiement du bon de commande (orderId). Votre bon de commande sera alors validé et son traitement commencera.
>

Une fois le bon de commande gratuit validé, un délai de quelques minutes peut être nécessaire pour que le vRack soit actif.

### Étape 2 : Ajouter votre projet Public Cloud dans le vRack

Une fois le vRack actif, il vous faudra intégrer votre ou vos projets Public Cloud dans le vRack.

Connectez-vous aux APIv6 OVHcloud en suivant le guide [Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/).

Dans le cas ou l’identifiant du projet Public Cloud n’est pas connu, les appels suivants vous permettront de le connaître.

#### Identification du projet

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> Cet appel permet de récupérer la liste des projets.
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> Cet appel permet d'identifier le projet grâce au champ « description ».
>

#### Ajout du projet dans le vRack

Une fois l’identifiant du projet et le nom du vRack connus, leur association se fait via l'appel suivant :

> [!api]
>
> @api {POST} /vrack/{serviceName}/cloudProject
>

Renseignez les champs de l'appel avec les informations récoltées précédemment :

**serviceName** : nom du vRack sous sa forme « pn-xxxxxx »
<br>**project** : identifiant du projet Public Cloud, sous la forme d’une chaîne de 32 caractères.

> [!primary]
> Cet appel initialise l’association du projet au vRack, il faut ensuite récupérer l’id de la tâche pour vérifier son avancement.
>

#### Vérification de l'avancement de la tâche d'ajout

Vous pouvez consulter l'évolution de l'ajout dans le vRack grâce à cet appel :

> [!api]
>
> @api {GET} /vrack/{serviceName}/cloudProject/{project}
>

> [!primary]
> Cet appel est facultatif et permet juste de vérifier le statut de la tâche. Une fois celle-ci terminée, vous pouvez passer à l’étape suivante.
>

### Étape 3 : Créer un vLan dans le vRack

Il est nécessaire de créer un vLan (ou réseau local virtuel) afin que les instances reliées au vRack puissent communiquer entre elles.

Sur l'offre Public Cloud, vous pouvez créer jusqu'à 4 000 vLan au sein d’un seul vRack. Cela signifie donc que vous pouvez utiliser chaque adresse IP privée jusqu’à 4 000 fois.
Ainsi, par exemple, l'IP 192.168.0.10 du vLan 2 est différente de l'IP 192.168.0.10 du vLan 42.

Cela peut vous être utile afin de segmenter votre vRack entre plusieurs réseaux virtuels.

Depuis les APIv6 OVHcloud, vous pourrez personnaliser l'ensemble des paramètres : plage IP (10.0.0.0/16 par exemple), zone de déploiement, DCHP, Gateway...

> [!primary]
> Sur les serveurs dédiés, par défaut, vous êtes sur le vLan0. Le fonctionnement de l’infrastructure OpenStack fait que vous devrez spécifier le numéro de votre vLan directement au niveau de l'infrastructure.
>
> Contrairement aux serveurs dédiés, il n'est pas nécessaire de faire du vLan taggé directement sur l'instance.
>
> Pour plus d'informations sur la gestion des vLan du vRack des serveurs dédiés, vous pouvez consulter ce guide : [Créer plusieurs VLAN dans le vRack](../../dedicated/creer-vlan-vrack/)

> [!warning]
> Le vRack étant une infrastructure gérée au niveau d'OVHcloud, vous ne pourrez l'administrer qu'au travers de l'espace client OVHcloud et des APIv6 OVHcloud.
>
>OpenStack n'étant pas située au même niveau de l'infrastructure, vous ne pourrez pas personnaliser les vLan au travers de l'interface Horizon ou des API OpenStack.
>

Une fois connecté à l'[APIv6 OVHcloud](https://api.ovh.com/), exécutez les commandes suivantes dans l'ordre.

#### Récupération des informations nécessaires :

##### **Projet Public Cloud**

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> Cet appel permet de récupérer la liste des projets.
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> Cet appel permet d'identifier le projet grâce au champ « description ».
>

##### **vRack concerné**

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/vrack
>

> [!primary]
> Dans le champ serviceName, indiquez l'identifiant de votre projet. Conservez l'information relative à l'identifiant du vRack sous la forme « pn-xxxxx ».
>

#### Création du réseau privé :

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private
>

> [!primary]
> renseignez les champs avec les informations précédemment obtenues :
>
> **serviceName** : ID du projet
>
> **name** : le nom que vous voulez donner au vLan.
>
> Vous pouvez laisser le champ « Region » vide pour que celui ci soit activé pour toutes les régions.
>
> L’identifiant du vLan (vlanId) est nécessaire si vous souhaitez créer un vLan spécifique.
>

La création prends quelques instants.

Pour vérifier les informations de vos vLan, vous pouvez utiliser l'appel suivant :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> Cet appel permet de récupérer le networkId. Celui ci se présentera sous la forme suivante : nom-vrack_vlanId.
>
> Par exemple, pour le vLan 42 : pn-xxxxxx_42
>

#### Création du sous-réseau :

Par défaut, si vous ne n'ajoutez pas de sous réseau, la plage IP utilisée est la suivante :

```
10.0.0.0/16
```

Si vous souhaitez gérer vous même les affectations IP, vous devrez créer un sous-réseau.

Pour cela, une fois le vLan créé, vous devrez créer le sous-réseau pour chaque zone concernée via l'appel suivant :

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private/{networkId}/subnet
>

Vous pouvez remplir les champs comme cela :

|Champ|Description| 
|---|---| 
|serviceName|L’identifiant de votre projet|
|networkId|L’identifiant de votre réseau récupéré lors des commandes précédentes. Ex : pn-xxxxxx_42 pour le vLan 42|
|dhcp|Case cochée pour activation / décochée pour désactivation du DHCP dans le vLan|
|end|Dernière adresse du sous réseau ce la région Ex : 192.168.1.50|
|network|Bloc IP du sous réseau. Ex : 192.168.1.0/24|
|region|Exemple : SBG3|
|start|Première adresse du sous réseau pour cette région Ex : 192.168.1.15|

> [!primary]
> C’est l’étape de création du sous-réseau par région. Vous pouvez activer ou non l’attribution d’adresses IP privées de manière dynamique via DHCP.
>
> Vous devrez faire la même opération pour chaque zone où vos instances sont présentes.
>

> [!warning]
> Faites attention à bien séparer vos pools d’adresses IP pour les différentes régions. Par exemple :
>
> De 192.168.0.2 à 192.168.0.254 pour SBG1
>
> De 192.168.1.2 à 192.168.1.254 pour GRA1
>

### Étape 4 : Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L'instance existe déjà et vous devez l'ajouter au vRack.

#### Cas d'une nouvelle instance

Une fois connecté à l'[APIv6 OVHcloud](https://api.ovh.com/), exécutez les commandes suivantes dans l'ordre.

##### **Récupération des informations nécessaires**

###### Récupération de l'identifiant du projet :

> [!api]
>
> @api {GET} /cloud/project
>

###### Récupération du networkID du réseau public (EXT-NET)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Récupération du networkID du réseau privé (interface vRack créée précédemment)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> L'identifiant alors obtenu a la forme : « pn-xxxxx_yy » où yy est le numéro du vLan.

###### Récupération de l'identifiant du type d'instance choisi (flavorId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/flavor
>

> [!primary]
> Vous pouvez limiter la liste en indiquant la zone de création de votre instance

###### Récupération de l'identifiant de l'image choisie (imageId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/image
>

> [!primary]
> Vous pouvez limiter la liste en indiquant la zone de création de votre instance

###### Récupération de l'identifiant de votre clé SSH OpenStack (sshKeyId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/sshkey
>

Si vous n'avez pas encore ajouté de clé SSH à votre espace client, vous pourrez le faire au travers de l'API suivante :

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/sshkey
>

##### **Déploiement de l'instance**

Une fois l'ensemble des éléments nécessaires au déploiement rassemblé, vous pouvez utiliser l'appel suivant

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance
>

Vous devrez renseigner a minima les champs suivants :

|Champ|Description| 
|---|---| 
|serviceName|Identifiant du projet Public Cloud concerné|
|flavorId|Identifiant du type d'instance (ex : S1-2, B2-7, WIN-R2-15...)|
|imageId|Identifiant du l'image de déploiement (ex : Debian 9, Centos 7...)|
|name|Nom que vous donnez à votre instance.|
|networks|Dans la partie « networkId » indiquez l'identifiant du réseau public (ext-net) ou celui de votre vLan (pn-xxxxxx_yy). Vous pouvez cliquer sur le bouton « + » pour ajouter d'autres réseaux.|
|region|Régions de déploiement de l'instance (GRA5 par exemple)|
|sshKeyId|Identifiant  de votre clé SSH OpenStack|

Une fois l'appel effectué, si toutes les informations sont correctement renseignées, l'instance va se créer avec une ou plusieurs interfaces réseau.

> [!warning]
>
> Selon les systèmes d'exploitation, vous devrez configurer manuellement vos interfaces réseau privées pour que la prise en compte se fasse.
><br>OpenStack n'étant pas en mesure de prioriser l'interface publique de l'interface vRack, il peut arriver que cette dernière passe en tant que route par défaut.
><br>La conséquence directe est que l'instance est injoignable depuis une IP publique.
><br>Un ou plusieurs redémarrages de l'instance depuis l'espace client peut permettre de rétablir la situation.
><br>L'autre solution consite à vous connecter à l'instance  en  SSH au travers d'un autre de vos serveurs présents dans le même réseau privé. Vous pouvez aussi corriger la configuration réseau de l'instance au travers du mode Rescue.
>

#### Cas d'une instance déjà existante

Si vous devez intégrer une instance déjà existante dans le vRack, vous ne pourrez pas le faire depuis votre espace client OVHcloud. Pour cela, vous devrez obligatoirement passer par Horizon, les API Openstack ou les APIv6 OVHcloud.

L'action consistera simplement à ajouter une nouvelle interface réseau à votre serveur, en plus de celle existante.

Ainsi, par exemple, si vous avez une interface publique eth0, vous aurez en plus une interface eth1.

> [!primary]
> La configuration de cette nouvelle interface est rarement automatique.
><br>Il vous faudra donc la configurer en DHCP ou en IP Fixe selon votre infrastructure.
>

**Les étapes ci-dessous décrivent comment effectuer la gestion des interfaces réseaux de vos instances.**

##### **Récupération des informations nécessaires**

###### Récupération de l'identifiant du projet :

> [!api]
>
> @api {GET} /cloud/project
>

###### Récupération de l'identifiant de l'instance :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/instance
>

###### Récupération du networkID du réseau public (EXT-NET) :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Récupération du networkID du réseau privé (interface vRack créée précédemment) :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> L'identifiant alors obtenu a la forme : « pn-xxxxx_yy » où yy est le numéro du vLan.

##### **Ajout d'une interface à votre instance**

Une fois l'ensemble des informations nécessaires récupéré, vous pouvez utiliser l'appel suivant :

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/interface
>

Vous devrez renseigner a minima les champs suivants :

|Champ|Description| 
|---|---| 
|serviceName|Identifiant du projet Public Cloud concerné|
|instanceId|Identifiant de l'instance concernée|
|networkId|Indiquez l'identifiant du réseau publique (ext-net) ou celui de votre vLan (pn-xxxxxx_yy)|
|ip|Définir une IP spécifique  (ne fonctionne que pour les interfaces privées)|

Une fois l'appel effectué, si toutes les informations sont correctement renseignées, une nouvelle interface va s'ajouter sur votre instance.

> [!primary]
> Votre instance OVHcloud disposera donc d'une nouvelle interface réseau en plus de l'interface publique (Ext-net).
><br>Vous pourrez voir, dans le résumé de l'instance, l'adresse IP privée attribuée automatiquement à votre interface.
><br>À votre charge de l'utiliser en configurant votre interface via le DHCP ou en utilisant vos propres IP au travers d'une configuration en IP statique.
>

##### **Suppression d'une interface de votre instance**

> [!warning]
> La suppression d'une interface est définitive.
>
>Dans le cas où vous supprimeriez l'interface « Ext-Net » (IP publique), ceyye adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.
><br>Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (interface « Ext-Net ») ou la sortir d'un vLan.
>

Une fois l'ensemble des informations nécessaires récupéré, vous pouvez utiliser l'appel suivant pour supprimer une interface :

> [!api]
>
> @api {DELETE} /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>

Vous devrez renseigner a minima les champs suivants :

|Champ|Description| 
|---|---| 
|serviceName|Identifiant du projet Public Cloud concerné|
|instanceId|Identifiant de l'instance concernée|
|networkId|Indiquez l'identifiant du réseau publique (ext-net) ou celui de votre vLan (pn-xxxxxx_yy)|

## Aller plus loin

[Configuration du vRack Public Cloud](../public-cloud-vrack)

[Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
