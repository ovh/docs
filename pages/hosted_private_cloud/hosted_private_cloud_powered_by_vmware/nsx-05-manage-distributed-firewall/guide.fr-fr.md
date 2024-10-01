---
title: Gestion du pare-feu distribué dans NSX
excerpt: "Découvrez la gestion du pare-feu distribué au travers de la création d'une règle qui bloque le trafic entre une machine virtuelle et l'ensemble des machines virtuelles d'un autre segment"
updated: 2023-02-27
---

## Objectif

La fonctionnalité du pare-feu distribué dans NSX permet de faire du filtrage avec tous les éléments de votre cluster VMware qui sont sur des segments Overlay ou VLAN. Il doit être utilisé normalement sur les connexions est-ouest (ovh-T1-gw)  mais il fonctionne aussi avec des éléments du cluster VMware qui se trouvent connectés sur la passerelle nord-sud (ovh-T0-gw). Le filtrage s'applique à partir de la source (VM, segment, réseau, etc...).

Pour simplifier l'administration de NSX, il est possible de positionner des marqueurs (*tags*) sur vos éléments (segments, machines virtuelles, rôles, etc..) et de créer des groupes qui contiennent les objets associés aux marqueurs ou des plages d'adresses IP (cette solution n'est pas à privilégier).

**Découvrez la gestion du pare-feu distribué au travers de la création d'une règle qui bloque le trafic entre une machine virtuelle et l'ensemble des machines virtuelles d'un autre segment.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur de l'infrastructure [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](/links/manager)).
- Avoir **NSX** déployé avec deux segments configurés dans votre configuration NSX. Vous pouvez vous aider de notre guide sur la [gestion des segments dans NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-02-segment-management).

## En pratique

Nous allons isoler les communications entre une machine virtuelle et l'ensemble des machines virtuelles d'un segment, de manière bi-directionnelle en effectuant ces opérations : 

- Création de deux marqueurs (tags), un sur une machine virtuelle et l'autre sur un segment.
- Création de deux groupes associés, l'un contenant le premier marqueur et l'autre le second.
- Création d'une stratégie dans le pare-feu distribué qui contiendra deux règles :
    - Une règle qui interdira le trafic venant du premier groupe vers le second.
    - Une autre règle qui interdira le trafic venant du second groupe vers le premier.

### Création des marqueurs (tags)

Dans l'interface NSX, allez dans l'onglet `Networking`{.action} et cliquez sur `Segments`{.action} à gauche dans la rubrique **Connectivity**.

Cliquez ensuite sur les `trois points verticaux`{.action} à gauche du segment que vous voulez marquer et choisissez `Edit`{.action} dans le menu.

![01 Create tag on segment 01](images/01-create-tag-on-segment01.png){.thumbnail}

A droite de **Tags**, saisissez `ovsegment`{.action} à la place de tag et cliquez sur `Add Item(s) ovsegment`{.action} en dessous de la zone de saisie.

![01 Create tag on segment 02](images/01-create-tag-on-segment02.png){.thumbnail}

Saisissez `ov1`{.action} à la place de **Scope** et cliquez sur `Add Item(s) ov1`{.action} en dessous de la zone de saisie.

![01 Create tag on segment 02](images/01-create-tag-on-segment02.png){.thumbnail}

Cliquez sur le signe `+`{.action} à gauche de votre marqueur.

![01 Create tag on segment 03](images/01-create-tag-on-segment03.png){.thumbnail}

Le marqueur créé est affiché en bas à droite de **Tags**, vous pouvez en créer d'autres en fonction de vos besoins.

Cliquez sur `SAVE`{.action}.

![01 Create tag on segment 04](images/01-create-tag-on-segment04.png){.thumbnail}

Cliquez sur `CLOSE EDITING`{.action} pour finaliser le balisage de votre segment.

![01 Create tag on segment 05](images/01-create-tag-on-segment04.png){.thumbnail}

Allez sur l'onglet `Inventory`{.action} et cliquez sur `Virtual Machines`{.action} à gauche dans l'inventaire pour afficher la liste des machines virtuelles. 

Cliquez ensuite sur les `trois points verticaux`{.action} à gauche de la machine virtuelle que vous voulez marquer et choisissez `Edit`{.action} dans le menu.

![02 Create tag on vm 01](images/02-create-tag-on-vm01.png){.thumbnail}

Saisissez `vm`{.action} à la place de **Tag** et cliquez sur `Add Item(s) vm`{.action} en dessous de la zone de saisie.

![02 Create tag on vm 02](images/02-create-tag-on-vm02.png){.thumbnail}

Saisissez `ov2`{.action} à la place de **Scope** et cliquez sur `Add Item(s) ov2`{.action} en dessous de la zone de saisie.

![02 Create tag on vm 03](images/02-create-tag-on-vm03.png){.thumbnail}

Cliquez sur le signe `+`{.action} à gauche de votre marqueur.

![02 Create tag on vm 04](images/02-create-tag-on-vm04.png){.thumbnail}

Le marqueur est créé, cliquez sur `SAVE`{.action} pour enregistrer vos modifications.

![02 Create tag on vm 05](images/02-create-tag-on-vm05.png){.thumbnail}

Restez dans l'inventaire et cliquez sur `Tags`{.action} à gauche pour afficher la liste des marqueurs.

![03 Show tags 01](images/03-show-tags01.png){.thumbnail}

### Ajout de groupes qui contiennent les marqueurs (tags)

Toujours dans l'inventaire, allez dans `Groups`{.action} à gauche et cliquez sur `ADD GROUP`{.action} pour créer un groupe.

![04 Create Group With tag on segment 01](images/04-create-group-with-tag-on-segment01.png){.thumbnail}

Saisissez `g-segment01`{.action} en dessous de la colonne **Name** et cliquez sur `Set`{.action} sous la colonne **Compute Members**.

![04 Create Group With tag on segment 02](images/04-create-group-with-tag-on-segment02.png){.thumbnail}

Laissez `Generic`{.action} sélectionné et cliquez sur `+ ADD CRITERION`{.action}.

![04 Create Group With tag on segment 03](images/04-create-group-with-tag-on-segment03.png){.thumbnail}

Choisissez ces paramètres :

- **Type** : `NSX Segment`.
- **Tags** : Equals `ovsegment`.
- **Scope**: Equals `ov1`.

Cliquez sur `APPLY`{.action}.

![04 Create Group With tag on segment 04](images/04-create-group-with-tag-on-segment04.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![04 Create Group With tag on segment 05](images/04-create-group-with-tag-on-segment05.png){.thumbnail}

Le groupe est créé, cliquez sur le bouton `View Members`{.action} se trouvant sur la ligne de votre groupe pour en afficher la liste des membres.

![04 Create Group With tag on segment 06](images/04-create-group-with-tag-on-segment06.png){.thumbnail}

Cliquez sur `IP Addresses`{.action} pour afficher les adresses IP qui sont utilisées sur votre segment et qui ont été automatiquement ajoutées à votre groupe.

![04 Create Group With tag on segment 07](images/04-create-group-with-tag-on-segment07.png){.thumbnail}

Cliquez sur `NSX Segments`{.action} pour afficher le segment membre de ce groupe automatiquement rajouté à partir des critères. Vous pouvez cliquer sur `CLOSE`{.action} pour fermer cette fenêtre.

![04 Create Group With tag on segment 08](images/04-create-group-with-tag-on-segment08.png){.thumbnail}

Cliquez sur `ADD GROUP`{.action} pour créer un deuxième groupe.

![05 Create Group With tag on VM 01](images/05-create-group-with-tag-on-vm01.png){.thumbnail}

Saisissez `g-vm`{.action} en dessous de la colonne **Name** et cliquez sur `Set`{.action} sous la colonne **Compute Members**.

![05 Create Group With tag on VM 02](images/05-create-group-with-tag-on-vm02.png){.thumbnail}

Laissez `Generic`{.action} sélectionné et cliquez sur `+ ADD CRITERION`{.action}.

![05 Create Group With tag on VM 03](images/05-create-group-with-tag-on-vm03.png){.thumbnail}

Choisissez ces paramètres :

- **Type** : `Virtual Machine`.
- **Tags** : Equals `vm`.
- **Scope**: Equals `ov2`.

Cliquez sur `APPLY`{.action}.

![05 Create Group With tag on VM 04](images/05-create-group-with-tag-on-vm04.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![05 Create Group With tag on VM 05](images/05-create-group-with-tag-on-vm05.png){.thumbnail}

Cliquez sur `View Members`{.action} sur la ligne de votre groupe pour en afficher les membres.

![05 Create Group With tag on VM 06](images/05-create-group-with-tag-on-vm06.png){.thumbnail}

Dans la rubrique **Virtual Machines**, vous voyez la machine virtuelle balisée qui a été automatiquement ajoutée.

Cliquez sur `CLOSE`{.action} pour fermer cette fenêtre.

![05 Create Group With tag on VM 07](images/05-create-group-with-tag-on-vm07.png){.thumbnail}

### Mise en place d'une règle de pare-feu distribué

Nous allons maintenant créer, sur le pare-feu distribué, une règle de blocage bidirectionnel entre les deux groupes créés.

Allez sur l'onglet `Security`{.action}, sélectionnez `Distributed Firewall`{.action} et cliquez sur `+ ADD POLICY`{.action}.

![06 Create distributed firewall rules 01](images/06-create-distributed-firewall-rules01.png){.thumbnail}

Nommez votre stratégie `Isolate vm and segment`{.action}.

![06 Create distributed firewall rules 02](images/06-create-distributed-firewall-rules02.png){.thumbnail}

Cliquez sur les `trois points verticaux`{.action} à gauche de votre stratégie et choisissez `Add Rule`{.action} dans le menu.

![06 Create distributed firewall rules 03](images/06-create-distributed-firewall-rules03.png){.thumbnail}

Cliquez sur l'icône en forme de `stylo`{.action} à droite de **Any** dans la colonne **Sources**.

![06 Create distributed firewall rules 04](images/06-create-distributed-firewall-rules04.png){.thumbnail}

Restez sur l'onglet `groups`{.action}, cochez le groupe `g-segment01`{.action} et cliquez sur `APPLY`{.action}

![06 Create distributed firewall rules 05](images/06-create-distributed-firewall-rules05.png){.thumbnail}

Cliquez sur l'icône en forme de `stylo`{.action} à droite de **Any** dans la colonne **Destinations**.

![06 Create distributed firewall rules 06](images/06-create-distributed-firewall-rules06.png){.thumbnail}

Cochez le groupe `g-vm`{.action} et cliquez sur `APPLY`{.action}.

![06 Create distributed firewall rules 07](images/06-create-distributed-firewall-rules07.png){.thumbnail}

Choisissez `Drop`{.action} pour supprimer les paquets sur cette règle et cliquez sur les `trois points verticaux`{.action} à gauche de votre stratégie.

![06 Create distributed firewall rules 08](images/06-create-distributed-firewall-rules08.png){.thumbnail}

Cliquez sur `Add Rule`{.action} dans le menu.

![06 Create distributed firewall rules 09](images/06-create-distributed-firewall-rules09.png){.thumbnail}

Cliquez sur l'icône en forme de `stylo`{.action} à droite de **Any** dans la colonne **Sources**.

![06 Create distributed firewall rules 10](images/06-create-distributed-firewall-rules10.png){.thumbnail}

Cochez le groupe `g-vm`{.action} et cliquez sur `APPLY`{.action}

![06 Create distributed firewall rules 11](images/06-create-distributed-firewall-rules11.png){.thumbnail}

Cliquez sur l'icône en forme de `stylo`{.action} à droite de **Any** dans la colonne **Destinations**.

![06 Create distributed firewall rules 12](images/06-create-distributed-firewall-rules12.png){.thumbnail}

Cochez le groupe `g-segment01`{.action} et cliquez sur `APPLY`{.action}.

![06 Create distributed firewall rules 13](images/06-create-distributed-firewall-rules13.png){.thumbnail}

Choisissez `Drop`{.action} pour supprimer les paquets sur cette règle et cliquez sur `PUBLISH`{.action} pour valider la création de la stratégie et de ses deux règles associées.

![06 Create distributed firewall rules 14](images/06-create-distributed-firewall-rules14.png){.thumbnail}

Votre règle est active, le trafic n'est plus possible dans les deux sens entre la machine virtuelle membre du groupe g-vm et le segment membre du group g-segment.

![06 Create distributed firewall rules 14](images/06-create-distributed-firewall-rules14.png){.thumbnail}

## Aller plus loin

[Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

[Gestion des segments dans NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-02-segment-management)

[Documentation VMware sur le pare-feu distribué dans NSX](https://docs.vmware.com/fr/VMware-NSX-T-Data-Center/3.2/administration/GUID-6AB240DB-949C-4E95-A9A7-4AC6EF5E3036.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

