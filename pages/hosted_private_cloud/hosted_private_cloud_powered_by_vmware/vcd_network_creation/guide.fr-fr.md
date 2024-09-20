---
title: "VMware Cloud Director - Création de composants réseaux via VCD on OVHcloud"
excerpt: "Apprenez à créer facilement des composants réseaux au sein du control panel VCD on OVHcloud"
updated: 2024-09-17
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

> [!primary]
> 
> VCD on OVHcloud est actuellement en phase Alpha. Ce guide peut donc évoluer et être mis à jour à l'avenir avec les avancées de nos équipes en charge de ce produit.
>

## Objectif

**Ce guide vous montre comment créer, configurer et gérer efficacement votre réseau (espaces IP, les passerelles Edge et fournisseurs et réseau privé) depuis l'interface VCD on OVHcloud.**

## Prérequis

>[!primary]
> 
> Si vous ne savez comment vous connecter au portail web de votre organisation, consultez d'abord le guide « [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging) ».
>

- Un navigateur Web (avec de préférence avec une base chromium et la traduction activée en français).
- Avoir un compte VMware Cloud Director on OVHcloud phase Alpha avec les droits suffisants.

Avoir lu les guides VCD : 

- [VMware Cloud Director - Networking - Concepts réseau](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts).
- [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts).
- [VMware Cloud Director - Se connecter à son organisation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging).

## En pratique

Avant de créer un réseau, le concept principal à comprendre avec VMware Cloud Director est **l’espace IP**. Prenons en exemple celui par défaut créé avec votre organisation VCD :

**Le périmètre interne (Internal Scope)** représente l'IP entière de votre futur réseau, e.g. : `192.168.0.0/24`{.action}.

- Les plages d'IP sont des IP que vous pouvez demander individuellement pour vos services (VM n'utilisant pas de DHCP par exemple). Aucune ici.
- Les préfixes IP sont le sous-réseau IP que vous pouvez utiliser dans votre Edge Gateway par exemple.
- Les plages IP et les préfixes IP ne peuvent pas se chevaucher et doivent être inclus dans l'Internal Scope (périmètre interne).

### Étape 1 - Création de l'Espace IP (recommandé)

> [!primary]
>
> Vous pouvez utiliser une nouvelle méthode de gestion de votre espace IP dans VMware Cloud Director avec le nouveau sous-système de gestion de l'espace IP.
>

/// details | Comment créer un Espace IP avec VMware CLoud Director on OVHcloud ?

Pour vous connecter à votre environnement VCD, suivez le guide : [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging).

1\. Cliquez sur : `Réseaux`{.action} > `Espaces IP`{.action} > `Nouveau`{.action}.

![VCD Networking IP Spaces](images/ESPACE_IP.png){.thumbnail}

Vous retrouvez la fenêtre de création **d'Espace IP** pour votre réseau. Nommez le de la manière dont vous le désirez :

**Exemple :**

- **Nom :** `Espace IP 01`.
- **Description :** `Espace IP Privé > Public`.

![VCD Networking IP Spaces 01](images/ESPACE_IP_1_1.png){.thumbnail}

2\. Laissez ces options désactivées pour l'instant.

![VCD Networking IP Spaces 02](images/ESPACE_IP_2.png){.thumbnail}

3\. Choisissez le périmètre (porté/étendu), (interne/externe), avec lequel vous souhaitez accéder à votre réseau :

- **Internal Scope** : représente les IP utilisées dans ce centre de données local, au sud de Provider Gateway. Les IP de ce périmètre sont utilisées pour la configuration des services et des réseaux.
- **External Scope** : représente les IP utilisées en dehors du datacenter, au nord de Provider Gateway. Cette valeur est utilisée lors de la génération automatique de règles SNAT par défaut.

Cliquez sur `SUIVANT`{.action}.

![VCD Networking IP Spaces 03](images/ESPACE_IP_3.png){.thumbnail}

Les plages IP doivent correspondre à la portée interne de cet espace IP (le range d'IP que vous souhaitez rendre disponible pour vos machines) :

4\. Cliquez ensuite sur `AJOUTER`{.action}.

Exemple : `172.19.0.2-172.19.0.100`.

Cliquez sur `SUIVANT`{.action}.

![VCD Networking IP Spaces 04](images/ESPACE_IP_4.png){.thumbnail}

Les préfixes IP doivent correspondre à la portée interne de cet espace IP.

5\. Cliquez sur `AJOUTER`{.action}.

Ajoutez ensuite vos séquences et préfixes.

Exemple : `10.0.0.0/23 | 1`.

Vous pouvez augmenter ou diminuer vos nombres de préfixes avec la flèche (haut/bas) : ![ARROW](images/ESPACE_IP_5_arrow.png)

L'ajout de la séquence passe automatiquement en preview s'il est concluant.

![VCD Networking IP Spaces 05](images/ESPACE_IP_5.png){.thumbnail}

Cliquez sur `SUIVANT`{.action} pour terminer l'étape n°5.

6\. La dernière section consiste en un examen approfondi de tous les réglages que vous avez établis. Vous pouvez ainsi procéder à vos vérifications et confirmer votre choix en cliquant sur le bouton `FINISH`{.action}.

![VCD Networking IP Spaces 06](images/ESPACE_IP_6.png){.thumbnail}

Nous allons ensuite passer de la section de VCD `Mise en Réseau | Espace IP`{.action} à `Mise en Réseau | Réseaux`{.action}.

///

### Étape 2 - Création d'un groupe de centre de donnée (optionnel)

> [!primary]
>
> Vous pouvez utiliser une nouvelle méthode de gestion de votre espace IP dans VMware Cloud Director avec le nouveau sous-système de gestion de l'espace IP.
>

/// details | Comment créer un groupe de centre de données ?

**Cas d'usage :**

Cette étape est optionnelle, mais recommandée pour la grande majorité des cas d'usages (exemple : quand deux réseaux VDC ont besoin de s'additionner).

Nous allons à présent créer un groupe de centre de donnée pour optimiser la gestion de notre réseau grâce à cette nouvelle fonctionnalité VCD.

Allez donc dans la section Mise en réseau en cliquant sur : `Mise en réseaux`{.action} > `Groupe de centre de données`{.action}.

Puis, cliquez sur `NOUVEAU`{.action}.

![VCD Networking Data Center Groups 00](images/DATA_CENTER_GROUPS_00.png){.thumbnail}

Sélectionnez un vDC qui fera partie du groupe. Lorsque vous sélectionnez un vDC de démarrage, vous pourrez créer un groupe dans lequel ce vDC peut participer.

1\. Choisissez le vDC que vous désirez, puis cliquez sur `SUIVANT`{.action}.

![VCD Networking Data Center Groups 01](images/DATA_CENTER_GROUPS_01.png){.thumbnail}

2\. Dans la section 2, choisissez le nom de votre groupe de centre de donnée ainsi qu'une courte description, puis cliquez sur `SUIVANT`{.action}.

![VCD Networking Data Center Groups 02](images/DATA_CENTER_GROUPS_02.png){.thumbnail}

3\. Sélectionnez ensuite les vDC supplémentaires devant faire partie du groupe, puis cliquez sur `SUIVANT`{.action}.

![VCD Networking Data Center Groups 03](images/DATA_CENTER_GROUPS_03.png){.thumbnail}

Pour finir, cliquez sur `TERMINER`{.action}.

![VCD Networking Data Center Groups 04](images/DATA_CENTER_GROUPS_04.png){.thumbnail}

///

### Étape 3 - Création d'une Passerelle Edge (optionnel)

/// details | Comment créer une Passerelle Edge avec VMware Cloud Director on OVHcloud ?

Cette étape est nécessaire sinon vous ne pourrez pas finir de créer votre réseau à l'étape 3.

Nous allons maintenant créer une **Passerelle Edge** pour que notre espace IP puisse être accédé depuis le réseau privé que nous allons créer dans la troisième partie de cette étape.

Pour accéder à la section Passerelles Edge (Edge Gateway), cliquez sur : `Mise en réseaux`{.action} > `Passerelles Edge`{.action}.

Pour créer une nouvelle Passerelle Edge, cliquez sur `NOUVEAU`{.action}.

![VCD Networking Edge Gateway 00](images/EDGE_GATEWAY.png){.thumbnail}

Vous retrouvez la fenêtre de création de **Passerelle Edge** pour votre environnement VCD :

Vous avez ensuite le choix entre `Centre de données virtuel d'organisation`{.action} et/ou `Groupe de centres de données`{.action}.

- **Centre de données virtuel de l'organisation** : fournit la connectivité pour les machines virtuelles dans le vDC sélectionné uniquement.
- **Groupe de datacenters** : fournit la connectivité pour les machines virtuelles de tous les contrôleurs de domaine virtuels participant au groupe de centres de données.

1\. Choisissez `Centre de données virtuel d'organisation`{.action} ou `Groupe de centres de données`{.action} pour sélectionner le centre de données virtuel avec lequel vous souhaitez installer votre nouvelle **Edge Gateway**.

![VCD Networking Edge Gateway 01](images/EDGE_GATEWAY_1-optimized.png){.thumbnail}

![VCD Networking Edge Gateway 01_1](images/EDGE_GATEWAY_1_1-optimized.png){.thumbnail}

2\. Vous pouvez, après la section générale, nommer votre **passerelle edge** de la manière dont vous le souhaitez :

**Exemple :**

- **Nom :** `ovh-Edge-GW-GRA`.
- **Description :** `Passerelle Edge réseau privé dmz zone 1 (Graveline, Roubaix, etc..).`.

Cliquez ensuite sur `Utiliser les espaces IP`{.action}.

**Pourquoi ?** 

Cela force l'utilisation des espaces IP aux passerelles Provider, et permet ainsi d'optimiser l'application des nouvelles techniques intelligentes de gestion de l'espace réseau VCD.

Quand vous avez fini, cliquez sur `SUIVANT`{.action}.

3\. Nous arrivons à la sous partie 3 de l'étape de création d'une passerelle Edge.

Il s'agit du choix des `Passerelles fournisseurs`{.action}.

Choisissez la passerelle par défaut de votre fournisseur vDC : `graveline-gateway`.

Une fois votre choix effectué (étape 3 : Création d'une Passerelle Edge), cliquez sur `SUIVANT`{.action}.

![VCD Networking Edge Gateway 02](images/EDGE_GATEWAY_2-optimized.png){.thumbnail}

![VCD Networking Edge Gateway 03](images/EDGE_GATEWAY_3-optimized.png){.thumbnail}

4\. Choisissez l'option Edge Cluster pour créer cette passerelle edge fournisseur :

Le paramètre `Utiliser le cluster edge du fournisseur Tier-0 Gateway` permet de conserver le chemin réseau le plus court au sein du cluster edge.

Quand vous avez défini vos réglages, cliquez sur `SUIVANT`{.action}.

![VCD Networking Edge Gateway 04](images/EDGE_GATEWAY_4-optimized.png){.thumbnail}

Une fois les réglages ajoutés, vous pouvez contrôler que tout est correct depuis la section 5 `Prêt à Completer`{.action}.

Cliquez enfin sur `TERMINER`{.action}.

![VCD Networking Edge Gateway 05](images/EDGE_GATEWAY_5-optimized.png){.thumbnail}

///

### Étape 4 - Création d'un réseau privé

/// details | Comment créer un réseau avec VMware Cloud Director on OVHcloud ?

Nous allons à présent créer un nouveau réseau et joindre nos réglages préconfigurés.

Rendez-vous dans la section Mise en réseau, en cliquant sur `Mise en réseaux`{.action} > `Réseaux`{.action}.

Puis, cliquez sur `NOUVEAU`{.action}.

![VCD Networking Network 00](images/NETWORK_0.png){.thumbnail}

1\. Vous retrouvez la section Scope 1.

Vous avez le choix entre :

- **Centre de données virtuel de l'organisation** : fournit la connectivité pour les machines virtuelles dans le vDC sélectionné uniquement.
- **Groupe de datacenters** : fournit la connectivité pour les machines virtuelles de tous les contrôleurs de domaine virtuels participant au groupe de centres de données.

Sélectionnez **l'Organisation du Centre de Données Virtuel vDC** ou le **Groupe de Centre de données** dans le scope avec lequel vous souhaitez créer votre réseau.

![VCD Networking Network 01](images/NETWORK_1.png){.thumbnail}

![VCD Networking Network 01_1](images/NETWORK_1_1.png){.thumbnail}

Sélectionnez ensuite le type de réseau que vous voulez créer.

**Quels choix s'offrent à vous ?**

Vous avez la possibilité de créer un type de **Réseau routé** ou **isolé** en fonction de vos besoins.

Le réseau **"routé"** autorise le trafic entrant, tandis que le réseau **"isolé"** l'interdit.

Définition VCD :

- **Routé** : ce type de réseau fournit un accès contrôlé aux machines et aux réseaux en dehors du vDC ou du groupe de vDC par le biais d'une passerelle périphérique.
- **Isolé** : ce type de réseau fournit un environnement entièrement isolé, accessible uniquement par ce vDC ou ce groupe de vDC de l'organisation.

Pour un réseau routé, si votre vDC `VDC-FR/US/CA-GRA-XXX-XXX` n'a pas de Edge Gateway disponible, vous obtiendrez cette erreur :

> [!warning]
> 
> Le vDC « vDC-FR-GRA-XXXX-Corp » n'a pas de Edge Gateway disponible.
>

Vous pouvez soit créer une autre **Passerelle Edge**, soit utiliser les **Groupes de Centre de données** disponibles afin de fournir une connectivité pour les machines virtuelles de tous les vDC participants.

Le type de réseau **routé** (à travers une Edge Gateway "ovh-Edge-GW-GRA") fournit un accès contrôlé aux machines et aux réseaux en dehors du vDC ou du groupe de vDC par le biais d'une passerelle edge.

![VCD Networking Network 02](images/NETWORK_2.png){.thumbnail}

2\. Dans la section `Passerelle Edge`{.action}, vous retrouvez votre passerelle précédemment créée : `ovh-Edge-gra-demo`.

- **Distributed Routing** : le routage non distribué doit être activé sur la passerelle Edge.

Cela permettrait de désactiver le routage distribué afin que tout le trafic des machines virtuelles passe par le routeur de service.

Choisissez donc votre **Passerelle Edge**, en cliquant sur le bouton rond de gauche disponible (blanc) puis, une fois terminé, cliquez sur `SUIVANT`{.action}.

Pour conclure, cliquez sur `SUIVANT`{.action}.

![VCD Networking Network 03](images/NETWORK_3.png){.thumbnail}

3\. Dans la section générale, vous pouvez ajouter le nom de votre réseau, une description, ainsi que l'espace IP créé auparavant.

S'il a bien été créé, vous le verrez apparaitre automatiquement dans la liste (voir prochaine capture : Gateway CIDR*).

- **Réseau** : `ovh-private-ip-space-demo > /24`.

**Mode Dual-Stack** : Permet au réseau d'avoir un sous-réseau IPv4 et un sous-réseau IPv6.

> [!warning]
> 
> L'activation du mode dual stack networking est irréversible.
>

Nous n'avons nullement besoin d'IPv6, c'est pourquoi nous choisissons de laisser cette option désactivée.

Pour continuer (étape 3 : Création d'un réseau privé), cliquez sur `SUIVANT`{.action}.

![VCD Networking Network 04](images/NETWORK_4.png){.thumbnail}

4\. Vous allez ici allouer la plage IP de votre réseau, nous choisissons d'allouer 98 IP : 

- `172.16.1.2-172.16.1.100`.

Une fois que votre plage IP est allouée, vérifiez bien qu'il n'y a aucun espace avant et après le tiret entre les 2 plages d'IP :

- **172.16.1.2**->-<-**172.16.1.100**. 

Ainsi qu'au début et à la fin de vos 2 IP, ->**172.16.1.2**<- et ->**172.16.1.100**<-.

- **Exemple** : `172.16.1.2-172.16.1.100`.

Pour continuer, cliquez sur `SUIVANT`{.action}.

![VCD Networking Network 05](images/NETWORK_5.png){.thumbnail}

5\. Dans la cinquième section, ajoutez les serveurs DNS de votre réseau.

Pour des raisons de sécurité, nous avons décidé de les flouter ici.

Mais vous pouvez laisser ceux utilisés par défaut dans l'univers Hosted Private Cloud VMware on OVHcloud :

|              | DNS           |
|--------------|---------------|
| **Primaire** | 213.186.33.99 | 
| Secondaire   | non utilisé.  |
| Suffixe      | non utilisé.  |

Pour continuer l'étape 5 (de création d'un réseau privé), cliquez sur `SUIVANT`{.action}.

![VCD Networking Network 06](images/NETWORK_6.png){.thumbnail}

6\. Il est possible ici de définir des modèles de profil de segments (optionnel).

Ces modèles peuvent être utilisés pour des besoins avancés en matière de réseaux (par exemple avec pfSense : Promiscuous mode).

Il existe **3 modes** :

- **Non défini (le mode de ce guide).**
- **Allow-DHCP.**
- **Promiscuous mode.**

| Détails du modèle        | Promiscuous mode                   |
|--------------------------|------------------------------------|
| Découverte d'adresses IP | Profil de segment par défaut NSX-T |
| Découverte MAC           | Promiscuous mode                   |
| SpoofGuard               | Profil de segment par défaut NSX-T |
| Qualité de service       | Profil de segment par défaut NSX-T |
| Sécurité des segments    | Profil de segment par défaut NSX-T |

| Détails du modèle        | Allow-DHCP                         |
|--------------------------|------------------------------------|
| Découverte d'adresses IP | Profil de segment par défaut NSX-T |
| Découverte MAC           | Promiscuous mode                   |
| SpoofGuard               | Profil de segment par défaut NSX-T |
| Qualité de service       | Profil de segment par défaut NSX-T |
| Sécurité des segments    | Allow-DHCP                         |

Des profils de segments personnalisés sont nécessaires dans un certain nombre de situations spécifiques.

**Celles-ci incluent notamment :**

- L'apprentissage MAC ou IP doit être activé pour les environnements imbriqués.
- Profils de sécurité personnalisés pour autoriser le trafic DHCP provenant d'un réseau.
- Activation des protections contre l'usurpation.

![VCD Networking Network 06_2](images/NETWORK_6_2.png){.thumbnail}

7\. Suivant le choix de votre configuration, vous pouvez arriver à l'étape 7 ou 8.

**Exemple :**

- **Étape 7** : Avec "Modèle de profil de segment".
- **Étape 8** : Sans "Modèle de profil de segment".

Vérifiez les réglages définis puis lancee la création du réseau en cliquant sur `TERMINER`{.action}.

![VCD Networking Network 07](images/NETWORK_7.png){.thumbnail}

Votre réseau est maintenant entièrement créé et prêt à l'emploi.

**Glossaire :**

- `CIDR` : CIDR est l’abréviation de Classless Inter-Domain Routing (routage inter domaines sans classes).

///

## Aller plus loin

Vous pouvez maintenant suivre les étapes du prochain guide :

- **Bientôt disponible** : Guide 3 : « VMware Cloud Director on OVHcloud - Network - Comment créer un tunnel IPsec avec VCD on OVHcloud ? ».

Si vous rencontrez des difficultés avec le réseau au sein de VCD on OVHcloud, consultez le guide « [VMware Cloud Director on OVHcloud - Network Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts) ».

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou [cliquez ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur [Discord](https://discord.gg/ovhcloud).
