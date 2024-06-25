---
title: 'Créer des composants réseau depuis VCD on OVHcloud'
exerpt: 'Apprenez à créer facilement des composants réseaux au sein du control panel VCD on OVHcloud en suivant ce guide tutoriel qui déroule l'ensemble des étapes'
updated: 2024-06-24
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
> VCD on OVHcloud est actuellement en phase Alpha. Ce guide peut donc être incomplet. Notre équipe reste disponible sur notre canal Discord dédié. 
> 

## Objectif

**Ce guide réseau vous explique comment créer, configurer et gérer efficacement votre réseau (espaces IP, les passerelles Edge et fournisseurs et réseau privé) depuis le control panel VCD on OVHcloud.**

## Prérequis

>[!primary]
> Si vous ne savez comment vous connecter au portail web de votre organisation, consultez d'abord le guide : [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging).
>

- Un navigateur Web (Firefox/Chrome : avec la traduction activée : EN).
- Avoir un compte VMware Cloud Director on OVHcloud phase Alpha avec les droits suffisants.

Avoir lu les guides : 
- [VMware Cloud Director - Networking - Concepts réseau VMware Cloud Director on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts).
- [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts).
- [VMware Cloud Director - Se connecter à son organisation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging).

## En pratique

Le concept principal à comprendre avec VMware Cloud Director avant de créer un réseau est l’espace IP. Prenons en exemple celui par défaut créé avec votre organisation VCD :

**Le périmètre interne (Internal Scope)** représente l'IP entière de votre futur réseau : Exemple, 192.168.0.0/24

- Les plages d'IP sont des IP que vous pouvez demander individuellement pour vos services (VM n'utilisant pas de DHCP par exemple). Aucune ici.

- Les préfixes IP sont le sous-réseau IP que vous pouvez utiliser dans votre Edge Gateway par exemple.

- Les plages IP et les préfixes IP ne peuvent pas se chevaucher et doivent être inclus dans l'Internal Scope (périmètre interne).

## Instructions 

### Étape 1 : Création de l'Espace IP (recommandé)

> [!primary]
>
> Vous pouvez utiliser une nouvelle méthode de gestion de votre espace IP dans VMware Cloud Director avec le nouveau sous-système de gestion de l'espace IP.
>

/// details | Comment créer un Espace IP avec VMware CLoud Director on OVHcloud ?

Pour vous connecter à votre environnement VCD, suivez le guide : [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging).

1. Ensuite, cliquez sur : `Réseaux | Espaces IP | Nouveau .`{.action}

![VCD Networking IP Spaces](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP.png){.thumbnail}

Vous retrouvez la fenêtre de création **d'Espace IP** pour votre réseau, nommez le de la manière dont vous le désirez :

Exemple : 

- `Nom : Espace IP 01`{.action}
- `Description : Espace IP Privée | Publique`{.action}

![VCD Networking IP Spaces 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_1_1.png){.thumbnail}

2. Laissez ces options désactivées pour l'instant (plus d'information sur le forum de la [communauté d'utilisateurs OVHcloud](/links/community), ou sur le Discord channel : <https://discord.com/invite/ovhcloud>, sur ce qui est couvert par les phases futures).

![VCD Networking IP Spaces 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_2.png){.thumbnail}

3. Choisissez le périmètre (porté/étendu), (interne/externe), avec lequel vous souhaitez accéder à votre réseau :

- **Internal Scope** : Représente les IP utilisées dans ce centre de données local, au sud de Provider Gateway. Les IP de ce périmètre sont utilisées pour la configuration des services et des réseaux.

- **External Scope** : Représente les IP utilisées en dehors du datacenter, au nord de Provider Gateway. Cette valeur est utilisée lors de la génération automatique de règles SNAT par défaut.

Puis, cliquez sur : `SUIVANT`{.action}.

![VCD Networking IP Spaces 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_3.png){.thumbnail}

Les plages IP doivent correspondre à la portée interne de cet espace IP (le range d'IP que vous souhaitez rendre disponible pour vos machines) :

4. Puis, cliquez sur : `ADD`{.action}.

Exemple : `172.19.0.2-172.19.0.100`{.action}.

Puis, cliquez sur : `SUIVANT`{.action}.

![VCD Networking IP Spaces 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_4.png){.thumbnail}

Les préfixes IP doivent correspondre à la portée interne de cet espace IP :

5. Cliquez sur : `ADD`{.action}.

Puis ajouter vos séquences et préfixes.

Exemple : `10.0.0.0/23 | 1`{.action}.

Vous pouvez augmenter ou diminuer vos nombres de préfixes avec la flèche haut / bas : ![ARROW](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_5_arrow.png)

L'ajout de la séquence s'ajoute automatiquement en preview s'il est concluant.

![VCD Networking IP Spaces 05](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_5.png){.thumbnail}

Cliquez sur : `SUIVANT`{.action} 

Pour terminer l'étape n°5.

6. La dernière section consiste en un examen approfondi de tous les réglages que vous avez établis. Vous pouvez ainsi procéder à vos vérifications et confirmer votre choix en cliquant sur le bouton : `FINISH`{.action}.

![VCD Networking IP Spaces 06](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/ESPACE_IP_6.png){.thumbnail}

Nous allons ensuite passer à la section de VCD : ` VCD | Réseau | Espace IP`{.action} à ` VCD  Réseau | Réseau`{.action}.

///

## Étape 2 - Création d'un groupe de centre de donnée (optionnel)

> [!primary]
>
> Vous pouvez utiliser une nouvelle méthode de gestion de votre espace IP dans VMware Cloud Director avec le nouveau sous-système de gestion de l'espace IP.
>

/// details | Comment créer un groupe de centre de données ?

**Cas d'usage :**

- Cette étape est optionnel, mais recommandé pour la grande majorité des cas d'usages (exemple : quand deux réseaux VDC ont besoin de s'additionner).

Dans l'étape 4, nous allons à présent créer un groupe de centre de donnée pour optimiser la gestion de notre réseau grâce à cette nouvelle fonctionnalité VCD.

Allez donc dans la section Mise en réseau en cliquant sur : `Mise en réseaux / Groupe de centre de données`{.action}.

Puis, cliquez sur : `NOUVEAU`{.action}.

![VCD Networking Data Center Groups 00](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/DATA_CENTER_GROUPS_00.png){.thumbnail}

Sélectionnez un vDC qui fera partie du groupe. Lorsque vous sélectionnez un vDC de démarrage, vous pourrez créer un groupe dans lequel ce vDC peut participer.

1. Choisissez le vDC que vous désirez, puis cliquez sur : `SUIVANT`{.action}.

![VCD Networking Data Center Groups 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/DATA_CENTER_GROUPS_01.png){.thumbnail}

2. Dans la section 2, choisissez le nom de votre groupe de centre de donnée ainsi qu'une courte description, puis cliquez sur : `SUIVANT`{.action}.

![VCD Networking Data Center Groups 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/DATA_CENTER_GROUPS_02.png){.thumbnail}

3. Sélectionnez ensuite les vDC supplémentaires devant faire partie du groupe, puis cliquez sur : `SUIVANT`{.action}.

![VCD Networking Data Center Groups 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/DATA_CENTER_GROUPS_03.png){.thumbnail}

Pour finir, cliquez sur : `TERMINER`{.action}.

![VCD Networking Data Center Groups 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/DATA_CENTER_GROUPS_04.png){.thumbnail}

///

### Étape 3 - Création d'une Passerelle Edge (optionnel)

/// details | Comment créer une Passerelle Edge avec VMware Cloud Director on OVHcloud ?

Cette étape est nécessaire sinon vous ne pourrez pas finir de créer votre réseau à l'étape 3. 

Nous allons maintenance créer une **Passerelle Edge** pour que notre espace IP puisse être accédé au réseau privé que nous allons créer dans la partie 3 de ce guide.

Pour accéder à la section Passerelles Edge (Edge Gateway), cliquez sur : `Mise en réseaux | Passerelles Edge`{.action}.

Pour créer une nouvelle Passerelle Edge, cliquez sur : `NOUVEAU`{.action}.

![VCD Networking Edge Gateway 00](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY.png){.thumbnail}

Vous retrouvez la fenêtre de création de **Passerelle Edge** pour votre environnement VCD :

Vous avez ensuite le choix entre le : `Centre de données virtuel de l'organisation`{.action} ou `Groupe de datacenters`{.action}.

- **Centre de données virtuel de l'organisation** : Fournit la connectivité pour les machines virtuelles dans le vDC sélectionné uniquement.
- **Groupe de datacenters** : Fournit la connectivité pour les machines virtuelles de tous les contrôleurs de domaine virtuels participant au groupe de centres de données.

1. Choisissez : `Centre de données virtuel de l'organisation`{.action} ou `Groupe de centre de données`{.action}.

Pour sélectionner le centre de données virtuel avec lequel vous souhaitez installer votre nouvelle **Edge Gateway**.

![VCD Networking Edge Gateway 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_1-optimized.png){.thumbnail}

![VCD Networking Edge Gateway 01_1](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_1_1-optimized.png){.thumbnail}


2. Vous pouvez après la section général, nommer votre **passerelle edge** de la manière dont vous le souhaitez :

**Exemple :**
- `Nom : ovh-Edge-GW-GRA `{.action}.
- `Description : Passerelle Edge réseau privé dmz zone 1 (Graveline, Roubaix, etc..).`{.action}.

Vous devez ensuite, cliquez sur : `Utiliser les espaces IP`{.action}.

**Ce qui signifie :**
- **Gestion des adresses IP** | Utiliser les espaces IP | **Edge Gateway** serait en mesure de se connecter uniquement à Provider Gateway en utilisant des espaces IP.

Cela représente, la passerelle précédemment créée.

Quand vous avez fini, cliquez sur `SUIVANT`{.action}.

3. Nous arrivons à l'étape 3 : `Passerelle fournisseur`{.action}.

Choisissez la passerelle par défaut de votre fournisseur vDC.

Nous utiliserons la passerelle par défaut que nous avons ici, dans la phase Alpha : `graveline-gateway`{.action}.

Une fois choisit (étape 3 : Création d'une Passerelle Edge), cliquez sur : `SUIVANT`{.action}.

![VCD Networking Edge Gateway 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_2-optimized.png){.thumbnail}

![VCD Networking Edge Gateway 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_3-optimized.png){.thumbnail}

4. Choisissez l'option Edge Cluster pour créer cette passerelle edge fournisseur :

Le paramètre : `Utiliser le cluster edge du fournisseur Tier-0 Gateway`{.action}, signifie que le cluster edge de la passerelle fournisseur Tier-0 sélectionnée sera utilisé afin de conserver le chemin réseau le plus court.

Quand vous avez choisi vos réglages (étape 4), cliquez sur : `SUIVANT`{.action}.

![VCD Networking Edge Gateway 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_4-optimized.png){.thumbnail}

Une fois les réglages ajoutés, vous pouvez contrôler que tout est correct depuis la section 5 : `Prêt à completer`{.action}.

Et pour finir (étape 5 : Création d'une Passerelle Edge), cliquez sur `TERMINER`{.action}.

![VCD Networking Edge Gateway 05](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/EDGE_GATEWAY_5-optimizedrm cp.png){.thumbnail}

///

### Étape 4 - Création d'un réseau privé

/// details | Comment créer un réseau avec VMware Cloud Director on OVHcloud ?

Nous allons à présent créer un nouveau réseau et joindre nos réglages preconfigurés.

Allez donc dans la section Mise en réseau, en cliquant sur : `Mise en réseaux / Réseaux`{.action}.

Puis, cliquez sur : `NOUVEAU`{.action}.

![VCD Networking Network 00](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_0.png){.thumbnail}

1. Vous retrouvez après la section Scope 1. 

Vous avez le choix entre :

- **Centre de données virtuel de l'organisation** : Fournit la connectivité pour les machines virtuelles dans le vDC sélectionné uniquement.
- **Groupe de datacenters** : Fournit la connectivité pour les machines virtuelles de tous les contrôleurs de domaine virtuels participant au groupe de centres de données.

Sélectionner **l'Organisation du Centre de Données Virtuel vDC** où le **Groupe de Centre de données** dans le scope avec lequel vous souhaitez créer votre réseau.

![VCD Networking Network 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_1.png){.thumbnail}

![VCD Networking Network 01_1](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_1_1.png){.thumbnail}

Ensuite, sélectionnez le type de réseau que vous voulez créer.

**Quels choix s'offrent à vous ?**

Vous avez la possibilité de créer un type de **Réseau routé** ou **isolé** en fonction de vos besoins. 

Le **"routé"** autorise le trafic entrant, tandis que le **"isolé"** l'interdit.

Définition VCD :
- **Routé** : Ce type de réseau fournit un accès contrôlé aux machines et aux réseaux en dehors du vDC ou du groupe de vDC par le biais d'une passerelle périphérique.
- **Isolé** : Ce type de réseau fournit un environnement entièrement isolé, accessible uniquement par ce vDC ou ce groupe de vDC de l'organisation.

Pour un réseau routé, si votre vDC `VDC-FR/US/CA-GRA-XXX-XXX`{.action} n'a pas de Edge Gateway disponible, vous aurez cette erreur :

> [!warning]
> 
> Le vDC « vDC-FR-GRA-XXXX-Corp » n'a pas de Edge Gateway disponible.
>

Vous pouvez soit créer une autre **"Passerelle Edge"**, soit utiliser les **"Groupes de Centre de données"** disponible afin de fournir une connectivité pour les machines virtuelles de tous les vDC participants.

Ce type de réseau :
- **Routé** (à travers une Edge Gateway "ovh-Edge-GW-GRA") : Fournit un accès contrôlé aux machines et aux réseaux en dehors du vDC ou du groupe de vDC par le biais d'une passerelle edge.

![VCD Networking Network 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_2.png){.thumbnail}

2. Dans la section `Passerelle Edge`{.action}, vous retrouvez votre passerelle précédemment créée : `ovh-Edge-gra-demo`{.action}.

- **Distributed Routing** : Le routage non distribué doit être activé sur la passerelle Edge. 

Cela permettrait de désactiver le routage distribué afin que tout le trafic des machines virtuelles passe par le routeur de service.

Choisissez donc votre **Passerelle Edge**, en cliquant sur le bouton rond de gauche disponible (blanc), puis une fois terminé, cliquez sur : `SUIVANT`{.action}.

Pour conclure, veuillez cliquer sur : `SUIVANT`{.action}.

![VCD Networking Network 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_3.png){.thumbnail}

3. Dans la section générale, vous pouvez ajouter le nom de votre réseau, une description, ainsi que l'espace IP crée auparavant. 

S'il a bien été créer, vous le verrez apparaitre automatiquement dans la liste (voir prochaine capture : Gateway CIDR*).

- **Réseau** : `ovh-private-ip-space-demo > /24`{.action}.

**Mode Dual-Stack** : Permet au réseau d'avoir un sous-réseau IPv4 et un sous-réseau IPv6.

> [!warning]
> 
> L'activation du mode dual stack networking est irréversible.
>

Nous n'avons nullement besoin d'IPv6, c'est pourquoi nous choisissons de laisser cette option désactivée.

Pour continuer (étape 3 : Création d'un réseau privé), veuillez cliquer sur : `SUIVANT`{.action}.

![VCD Networking Network 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_4.png){.thumbnail}

4. Vous allez ici allouer la plage IP de votre réseau, nous choisissons d'allouer 98 IP : 

- `172.16.1.2-172.16.1.100`{.action}.

Une fois votre plage IP est alloué, vérifiez bien qu'il n'y a aucun espace avant et après le tiret entre les 2 plages d'IP :

- **172.16.1.2**->-<-**172.16.1.100**. 

Ainsi qu'au début et à la fin de vos 2 IP, ->**172.16.1.2**<- et ->**172.16.1.100**<-.

- **Exemple** : `172.16.1.2-172.16.1.100`{.action}.

Pour continuer, veuillez cliquer sur : `SUIVANT`{.action}.

![VCD Networking Network 05](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_5.png){.thumbnail}

5. Dans la cinquième section, veuillez ajouter les serveurs DNS de votre réseau.

Pour des raisons de sécurité, nous avons décidé de les flouter ici.

Mais vous pouvez laisser ceux utilisés par défault dans l'univers Hosted Private Cloud VMware on OVHcloud :

|              | DNS           |
|--------------|---------------|
| **Primaire** | 213.186.33.99 | 
| Secondaire   | non utilisé.  |
| Suffixe      | non utilisé.  |


Pour continuer l'étape 5 (de création d'un réseau privé), veuillez cliquer sur : `SUIVANT`{.action}.

![VCD Networking Network 06](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_6.png){.thumbnail}

6. (Optionnel), Il est possible ici de définir des modèles de profil de segments. 

Qui peuvent être utilisé pour des besoins avancés en matière de réseaux (par exemple avec pfSense : Promiscuous mode).

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
- Profils de sécurité personnalisés pour autoriser le trafic DHCP provenant d'un réseau
- Activation des protections contre l'usurpation 

![VCD Networking Network 06_2](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_6_2.png){.thumbnail}

7. Suivant le choix de votre configuration, vous pouvez arriver à l'étape 7 ou 8. 

Vous allez verifier ici les réglages et quand vous êtes prêt lancer la création du réseau.

Si tout est bon, cliquez sur : `TERMINER`{.action}.

- **Étape 7** : Avec "Modèle de profil de segment".
- **Étape 8** : Sans "Modèle de profil de segment".

![VCD Networking Network 07](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation/images/NETWORK_7.png){.thumbnail}

Votre réseau est maintenant entièrement créé et prêt à l'emploi.

///

## Aller plus loin

Vous pouvez maintenant suivre les étapes du prochain : [ « Guide 3 : VMware Cloud Director on OVHcloud - Network - Comment créer un tunnel IPsec avec VCD on OVHcloud ? » ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_ipsec).

Si vous rencontrez des difficultés avec le réseau au sein de VCD on OVHcloud, relisez :
- « Guide 1 :  [VMware Cloud Director on OVHcloud - Network - Concepts »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou [cliquez ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le Discord channel dédié : <https://discord.gg/ovhcloud> ou pour rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
