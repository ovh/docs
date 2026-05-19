---
title: Tarification et gestion des NSX Edges OVHcloud
excerpt: "Découvrez les options de tarification, configuration et personnalisation des NSX Edges pour VMware on OVHcloud"
updated: 2025-05-02
---

## Objectif

Cette documentation a pour but d'expliquer les options de configuration des NSX Edges et les étapes pour les gérer dans un environnement VMware on OVHcloud. Elle décrit également les limitations techniques et fournit des indications sur la manière d'adapter ces configurations aux besoins spécifiques.

## Prérequis

- Utiliser **VMware NSX 4.1.1** pour accéder aux options de personnalisation.
- Avoir des connaissances de base sur les concepts de VMware et les fonctionnalités des NSX Edges.

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Pour accéder à vos services :** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Sélectionnez votre service vSphere

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## Principe général

### Configuration par défaut

Lors de la création d'un environnement VMware, OVHcloud fournit automatiquement :

- **2 NSX Edges Medium** :
    - 4 vCPU.
    - 8 Go RAM.

Cette configuration par défaut répond à la majorité des besoins standards en connectivité et en sécurité réseau.

### Personnalisation

Vous pouvez adapter votre infrastructure en fonction de vos besoins spécifiques :

1. **Taille des NSX Edges** :
    - Medium : 4 vCPU, 8 Go RAM.
    - Large : 8 vCPU, 32 Go RAM.
    - XL : 16 vCPU, 64 Go RAM.
2. **Nombre de NSX Edges** :
    - Minimum : 2 (configuration par défaut).
    - Maximum : Jusqu'à **10 NSX Edges par cluster**.

### Limitations

- **1 cluster NSX Edge par vDC**.
- **10 NSX Edges maximum par cluster** (limitation Broadcom/VMware).
- Les versions NSX 4.0.1 ne supportent pas :
    - La commande de nouveaux vDC sous NSX 4.1.1.
    - La modification ou l'ajout de NSX Edges.

## En pratique

### Étapes pour personnaliser les NSX Edges

Depuis le tableau de bord Datacentres, accédez à votre datacentre puis cliquez sur l'onglet `NSX Edge Nodes`{.action}.

1. **Commander de nouveaux NSX Edges** :

    Cliquez sur `Ajouter un NSX Edge`{.action}.

    ![Adding an NSX Edge from the NSX interface](images/add-an-nsx-edge.png)

    Sélectionnez la taille souhaitée et cliquez sur `Commander`{.action}.

    ![Ordering an NSX Edge from the Manager](images/order-an-edge.png)

    > [!primary]
    >
    > Toutes les Edges doivent être de la même taille : lorsqu'un Edge est ajouté, il sera automatiquement aligné sur la taille des autres Edges présents.

2. **Modifier la taille des NSX Edges existants** :

    Cliquez sur `Redimensionner`{.action}.

    ![Selecting an Edge to resize](images/resize-an-edge-01.png)

    Sélectionnez l'Edge à modifier.

    Choisissez une nouvelle taille (Medium, Large ou XL) et appliquez les modifications en cliquant sur `Confirmer`{.action}.

    ![Choosing a new size for the Edge](images/resize-an-edge-02.png)

3. **Supprimer des NSX Edges inutilisés** :

    Identifiez l'Edge à supprimer.

    ![List of available NSX Edges](images/list-nsx-edges.png)

    Cliquez sur `Supprimer`{.action} et confirmez l'action.

    ![Deleting an NSX Edge](images/delete-nsx-edge.png)

    > [!primary]
    >
    > L'Edge doit être en mode résilience avant suppression pour garantir l'absence de trafic en cours.

## Aller plus loin

Pour des informations détaillées sur les fonctionnalités des NSX Edges, consultez la [documentation technique VMware NSX](https://www.vmware.com/products/nsx.html).

Les tarifs associés aux NSX Edges ne sont pas inclus dans cette documentation. Pour connaître les détails tarifaires ou obtenir une estimation, rendez-vous sur le [site OVHcloud](/links/hosted-private-cloud/vmware-prices) ou contactez le support via le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).