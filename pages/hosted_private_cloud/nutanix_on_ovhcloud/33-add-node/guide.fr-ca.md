---
title: "Ajouter ou retirer un nœud dans un cluster Nutanix (Scale In/Out)"
excerpt: "Ajustez dynamiquement votre cluster Nutanix on OVHcloud en ajoutant ou retirant des nœuds via l'espace client ou l'API OVHcloud"
updated: 2025-05-23
---

## Objectif

Les clusters Nutanix sur OVHcloud sont évolutifs. Vous pouvez désormais **ajouter (scale out)** ou **retirer (scale in)** des nœuds directement depuis l'espace client ou l'API OVHcloud.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à l'équipe [Professional Services OVHcloud](/links/professional-services) ou à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Un cluster Nutanix hébergé dans votre compte OVHcloud
- Être connecté à l'[espace client OVHcloud](/links/manager) ou à l’[API OVHcloud](/links/api)
- Être connecté à l’interface Prism Central

## Informations techniques

- Votre cluster doit comporter entre **3 et 15 nœuds**
- Tous les nouveaux nœuds doivent utiliser la **même version d’AOS** que le cluster existant

## En pratique

### Scale Out (ajouter un nœud)

#### Ajouter un nœud

1. Depuis l'[espace client OVHcloud](/links/manager), accédez à votre cluster Nutanix via les menus `Hosted Private Cloud`{.action} et `Nutanix`{.action}.

    ![Vue d'ensemble du cluster](images/control-panel.png){.thumbnail}

2. Dans l’onglet **Informations générales**, la section **Nombre de noeuds** est visible. Cliquez sur `Gérer mes noeuds`{.action}.

    ![Nombre de nœuds](images/manage-nodes.png){.thumbnail}

3. Dans l’onglet **Noeuds**, sélectionnez `Ajouter des noeuds`{.action}.

    ![Ajouter des nœuds](images/adding-nodes-03.png){.thumbnail}

4. Vérifiez la configuration et le tarif dans la fenêtre contextuelle, puis cliquez sur `Commander`{.action} pour lancer l’ajout.

    ![Fenêtre commande](images/adding-nodes-04.png){.thumbnail}

Une fois le nœud livré, son statut s’affiche dans l’onglet **Informations générales**.

La zone **Nombre de noeuds** indiquera qu’un nouveau nœud est prêt à être installé.

![Nouveau nœud à installer](images/adding-nodes-05.png){.thumbnail}

#### Installer un système d’exploitation (OS)

> [!tabs]
> Espace client OVHcloud
>> Si vous cliquez à nouveau sur `Gérer mes noeuds`{.action}, vous verrez la liste des nœuds. Pour tout nœud avec le statut **OS not installed**, cliquez sur le bouton `...`{.action} et sélectionnez `Installer`{.action}.
>>
>> ![Statut du nœud](images/install-os-01.png){.thumbnail}
>>
>> Saisissez les paramètres de configuration du nœud. Veillez à installer la même version d'AOS que votre cluster.
>>
>> Cliquez sur `Install`{.action}.
>>
>> ![Formulaire installation](images/install-os-02.png){.thumbnail}
>>
>> Une bannière de confirmation apparaîtra.
>>
>> ![Confirmation](images/install-os-03.png){.thumbnail}
>>
> API OVHcloud
>> Pour installer le nœud via l’[API OVHcloud](/links/api){.external}, utilisez l’appel suivant :
>>
>> > [!api]
>> > @api {v1} /nutanix PUT /nutanix/{serviceName}/nodes/{server}/deploy
>> >
>>

Une fois le nœud installé, vous pouvez vous connecter à Prism Central ou Prism Element pour l’intégrer au cluster.

Consultez la documentation suivante :

- [Étendre un cluster via Prism Central](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2024_3_1:mul-node-add-pc-t.html)
- [Étendre un cluster](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v7_0:wc-cluster-expand-wc-t.html)

### Scale In (retirer un nœud)

#### Éteindre (power down) un nœud

1. Depuis l'[espace client OVHcloud](/links/manager), accédez à votre cluster Nutanix via les menus `Hosted Private Cloud`{.action} et `Nutanix`{.action}.

    ![Vue d'ensemble du cluster](images/control-panel.png){.thumbnail}

2. Dans l’onglet **General information**, vous pouvez voir le nombre de nœuds. Cliquez sur `Gérer mes noeuds`{.action}.

    ![Manage my nodes](images/manage-nodes.png){.thumbnail}

3. Deux options s’offrent à vous :

> [!tabs]
> Espace client OVHcloud
>> Pour le nœud à retirer, cliquez sur le bouton `...`{.action} puis sélectionnez `Eteindre`{.action}.
>>
>> ![Éteindre un nœud](images/powerdown-nodes-01.png){.thumbnail}
>>
>> Une fenêtre d’avertissement s’ouvrira. Saisissez le terme demandé et cliquez sur `Eteindre`{.action}.
>>
>> > [!primary]
>> > L’arrêt d’un nœud Nutanix peut avoir un impact sur votre cluster. Consultez les [prérequis sur le portail Nutanix](https://portal.nutanix.com/page/documents/list?type=software) avant de poursuivre.
>> >
>>
>> ![Alerte arrêt](images/powerdown-nodes-02.png){.thumbnail}
>>
>> Une bannière de confirmation apparaîtra.
>>
>> ![Confirmation arrêt](images/powerdown-nodes-03.png){.thumbnail}
>>
> API OVHcloud
>> Vous pouvez également arrêter un nœud via l’[API OVHcloud](/links/api).
>>
>> - Récupérez le Boot ID (saisissez *power* comme valeur pour **bootType**) :
>>
>> > [!api]
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/boot
>> >
>>
>> - Définissez le Boot ID :
>>
>> > [!api]
>> > @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>> >
>>
>> - Éteignez le nœud :
>>
>> > [!api]
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/reboot
>> >
>>

#### Désinstaller le nœud

> [!tabs]
> Espace client OVHcloud
>> Une fois le nœud éteint, cliquez sur le bouton `...`{.action} puis sélectionnez `Désinstaller`{.action}.
>>
>> ![Bouton désinstaller](images/remove-nodes-01.png){.thumbnail}
>>
>> Une fenêtre d’avertissement apparaîtra. Saisissez le terme requis et cliquez sur `Désinstaller`{.action}.
>>
>> > [!primary]
>> > La désinstallation d’un nœud Nutanix peut avoir un impact sur votre cluster. Consultez les [prérequis sur le portail Nutanix](https://portal.nutanix.com/page/documents/list?type=software) avant de poursuivre.
>> >
>>
>> ![Alerte désinstallation](images/remove-nodes-02.png){.thumbnail}
>>
>> Une bannière de confirmation apparaîtra.
>>
>> ![Confirmation désinstallation](images/remove-nodes-03.png){.thumbnail}
>>
> API OVHcloud
>>
>> Pour désinstaller un nœud via l’[API OVHcloud](/links/api){.external}, utilisez l’appel suivant :
>>
>> > [!api]
>> > @api {v1} /nutanix POST /nutanix/{serviceName}/node/{server}/terminate
>> >
>>

#### Supprimer le nœud

Une fois le nœud désinstallé, cliquez sur le bouton `...`{.action} puis sélectionnez `Résilier`{.action}.

![Supprimer le nœud](images/remove-nodes-04.png){.thumbnail}

Une fenêtre d’avertissement apparaîtra. Saisissez le terme requis puis cliquez sur `Confirmer`{.action}.

> [!primary]
> Le service suspendu restera visible dans la liste des nœuds pendant environ une semaine avant suppression définitive. Vous pouvez annuler la suppression pendant ce délai.

## Aller plus loin

Pour aller plus loin, vous pouvez consulter :

[Nutanix Hyperconvergence](/pages/hosted_private_cloud/nutanix_on_ovhcloud/03-nutanix-hci)

[Guide d’ajout de nœud Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v7_0:wc-cluster-expand-wc-t.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou demandez une analyse personnalisée de votre projet à nos experts de l’équipe [Professional Services](/links/professional-services).

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).
