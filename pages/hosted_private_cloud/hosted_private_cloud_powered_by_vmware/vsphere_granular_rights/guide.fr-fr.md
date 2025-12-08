---
title: "Gérer les droits granulaires sur les objets vSphere"
excerpt: "Apprenez à attribuer ou retirer des droits utilisateurs sur des objets spécifiques de votre inventaire vSphere Hosted Private Cloud"
updated: 2025-10-06
---

## Objectif

En complément des droits globaux au niveau du datacentre, vous pouvez attribuer des droits granulaires à des utilisateurs sur des objets spécifiques de votre inventaire vSphere Hosted Private Cloud (par exemple, une machine virtuelle ou un datastore). Ce guide explique comment ajouter et supprimer ces droits via l’API OVHcloud.

## Prérequis

- Un [service Hosted Private Cloud](/links/hosted-private-cloud/vmware) avec une version de vSphere 6.5 ou supérieure
- Un accès à l’[API OVHcloud](/links/api)
- Un [utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion) déjà créé dans votre service Hosted Private Cloud

## En pratique

### Ajouter des droits sur un objet vSphere

1. Appelez le point d’entrée API suivant :

    > [!api]
    >
    > @api {v1} /order POST /dedicatedCloud/{serviceName}/user/{userId}/objectRight

2. Renseignez le corps de la requête avec l’objet et l’utilisateur auxquels vous souhaitez accorder l’accès.

    Vous pouvez choisir de propager ou non le droit aux objets enfants, de la même manière que les droits natifs vSphere.

3. Validez la requête. Une tâche de type `addUserObjectRight` est créée et appliquée sur l’objet vSphere.

    ![Ajouter un droit sur un objet](images/add-object-right.png){.thumbnail}

### Supprimer des droits sur un objet vSphere

1. Appelez le point d’entrée API suivant :

    > [!api]
    >
    > @api {v1} /domain DELETE /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}

2. Renseignez les champs avec l’`objectRightId` correspondant au droit que vous souhaitez retirer.

3. Validez la requête. Une tâche de type `removeUserObjectRight` est créée et supprime le droit utilisateur sur l’objet vSphere.

    ![Supprimer un droit sur un objet](images/remove-object-right.png){.thumbnail}

### Afficher les droits dans l’Espace Client OVHcloud

1. Ouvrez l’[Espace Client OVHcloud](/links/manager). Cliquez sur `Hosted Private Cloud`{.action} dans la barre supérieure, puis sur `Managed VMware vSphere`{.action} dans le menu de gauche, et sélectionnez votre service PCC.

2. Accédez à l’onglet `Utilisateurs`{.action}. Sur la ligne de l’utilisateur concerné, ouvrez le menu `…`{.action} et cliquez sur `Afficher/Modifier les droits pour chaque DC`{.action}.

    ![Onglet utilisateurs et menu d’actions](images/users-actions-menu.png){.thumbnail}

3. Sur la page **Gérer les droits administrateurs par datacentre**, repérez la ligne correspondant au datacentre. Cliquez sur le menu `…`{.action} (ou sur `Modifier les droits`{.action}) pour modifier les droits.

    ![Gérer les droits par datacentre](images/rights-by-datacentre.png){.thumbnail}

4. Dans la fenêtre **Modification des droits**, configurez les droits souhaités puis validez.

    ![Fenêtre de modification des droits](images/edit-rights-modal.png){.thumbnail}

#### Référence des droits

**Accès vSphere** — droits globaux de l’utilisateur sur vSphere.

| Droit       | Description                  |
|--------------|------------------------------|
| Provider     | Réservé aux administrateurs OVHcloud |
| Aucun        | Aucun accès                  |
| Lecture seule | Accès en lecture seule       |
| Lecture/Écriture | Accès en lecture et écriture |

**Accès au réseau VM Network** — droits de gestion sur la section réseau public (« VM Network » dans vSphere).

| Droit       | Description                                                   |
|--------------|---------------------------------------------------------------|
| Provider     | Permet de configurer des VM sur un réseau public              |
| Operator     | Permet de configurer des VM sur un réseau public              |
| Aucun        | Aucun accès                                                   |
| Lecture seule | Accès en lecture uniquement                                 |

**Accès aux V(X)LANs / GENEVE** — droits de gestion sur la section réseau privé (VXLAN/GENEVE pour Hosted Private Cloud, VLAN pour SDDC).

| Droit         | Description                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------|
| Provider       | Permet de configurer des VM sur un réseau privé                                                       |
| Administrateur | Permet de gérer les groupes de ports sur le commutateur virtuel (création, modification, suppression). SDDC et Premier uniquement |
| Aucun          | Aucun accès                                                                                           |
| Lecture seule  | Accès en lecture uniquement                                                                          |

**Gestion des hôtes et du stockage** — lorsqu’elle est activée, cette option permet à l’utilisateur d’ajouter ou de supprimer des hôtes et du stockage via le plugin OVHcloud dans le client vSphere.

## Aller plus loin

Si vous avez besoin d’une formation ou d’une assistance technique pour la mise en œuvre de nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet par notre équipe Professional Services.

Rejoignez notre [communauté d’utilisateurs](/links/community).
