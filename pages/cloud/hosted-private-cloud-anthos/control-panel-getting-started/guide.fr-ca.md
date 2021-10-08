---
title: Premiers pas avec Hosted Private Cloud powered by Anthos
slug: premiers-pas-espace-client
excerpt: Découvrez comment configurer votre Hosted Private Cloud powered by Anthos dans votre espace client
section: Premiers pas
order: 2
---

**Dernière mise à jour le 08/10/2021**

## Objectif

**Ce guide vous détaille les premières étapes de configuration d'une infrastructure Hosted Private Cloud powered by Anthos, ainsi que les paramètres disponibles dans votre espace client OVHcloud.**

## Prérequis

- Posséder un produit [Hosted Private Cloud powered by Anthos](https://www.ovhcloud.com/fr-ca/hosted-private-cloud/anthos/)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

> [!primary]
> Prenez connaissance des capacités du service ainsi que des limitations connues pendant la phase de lancement, comme détaillé sur [cette page](../technical-capabilities/).
>

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et sélectionnez `Hosted Private Cloud`{.action} dans la barre de navigation en haut de l’écran.

Cliquez sur `Anthos`{.action} dans la barre latérale de gauche et sélectionnez votre offre Hosted Private Cloud powered by Anthos.

### Informations générales <a name="general"></a>

L'onglet `Informations générales`{.action} affiche les détails techniques du déploiement sélectionné, ainsi que des informations sur votre abonnement et son renouvellement.

![Espace client](images/anthos_cp02.png){.thumbnail}

Dans la section `Sécurité et accès`{.action}, vous trouverez les liens d'accès à votre Anthos Management Center (console Anthos) et à la [console Dedicated Netapp](#netapp) (uniquement si NetApp est inclus dans votre offre). Vous pouvez également accéder directement à ces outils d'administration via les boutons dédiés respectifs.
<br>Vous trouverez l'option `Renouveler le mot de passe administrateur`{.action} pour chaque console en cliquant sur les boutons `...`{.action} à droite de chaque URL.

La section `Ressources`{.action} vous donne un résumé du nombre d'hôtes, l'état du stockage de Dedicated NetApp et le nombre d'adresses IP affectées à ce déploiement. Les différents boutons `...`{.action} vous permettent de [commander des hôtes additionnels](#hosts), d'[ajouter des SVM](#netapp) ou d'[attribuer des plages d'IP publiques et privées](#iprange).

![Espace client](images/anthos_cp03.png){.thumbnail}

### Créer et gérer des noeuds bare metal (hôtes) <a name="hosts"></a>

Développez le tableau du haut de cette page pour voir les **hôtes inclus** dans le pack Hosted Private Cloud powered by Anthos. Un second tableau contiendra les **hôtes additionnels** pouvant être commandés séparément.
<br>Vous pouvez procéder à la commande en cliquant sur le bouton `Commander un hôte`{.action}. Les hôtes additionnels ont une durée de renouvellement d'au moins un mois. Une remise sera accordée sur les commandes soumises à des engagements plus longs.

![Espace client](images/anthos_cp04.png){.thumbnail}

#### Redémarrer un hôte

Cliquez sur le bouton `...`{.action} à droite de l'hôte concerné, puis sélectionnez `Redémarrer`{.action}.

![Espace client](images/anthos_cp05.png){.thumbnail}

Prenez connaissance du message d'avertissement dans la fenêtre qui apparaît, puis cliquez sur `Confirmer`{.action} pour redémarrer l'hôte sélectionné.

#### Réinstaller un hôte

> [!primary]
> Un hôte ne peut être réinstallé que s'il ne fait pas actuellement partie d'un cluster (l'état de l'hôte est alors `Unassigned` dans la console Anthos).
>

Cliquez sur le bouton `...`{.action} à droite de l'hôte concerné, puis sélectionnez `Réinstaller`{.action}. Une réinstallation supprimera toutes les données présentes sur l'hôte.

![Espace client](images/anthos_cp06.png){.thumbnail}

Prenez connaissance du message d'avertissement dans la fenêtre qui apparaît, puis cliquez sur `Confirmer`{.action} pour réinstaller l'hôte sélectionné.

#### Définir l'état d'un hôte

Cliquez sur le bouton `...`{.action} à droite de l'hôte concerné, puis sélectionnez `Définir l'état`{.action}.

![Espace client](images/anthos_cp07.png){.thumbnail}

Prenez connaissance des informations concernant les interventions sur les hôtes et modifiez l'état à l'aide du bouton `Stateless`{.action}. Cliquez sur `Confirmer`{.action} pour modifier l'état de l'hôte sélectionné.

#### Supprimer un hôte (uniquement les hôtes additionnels)

Cliquez sur le bouton `...`{.action} à droite de l'hôte concerné, puis sélectionnez `Supprimer`{.action}.

![Espace client](images/anthos_cp08.png){.thumbnail}

Dans la fenêtre qui apparaît, prenez connaissance des informations concernant le processus de résiliation et cliquez sur `Confirmer`{.action}. Toutes les données de l'hôte sélectionné seront définitivement perdues.

### Créer et gérer des SVM NetApp (Stockage) <a name="netapp"></a>

> [!primary]
> Le stockage Dedicated NetApp est disponible uniquement avec le [Stateful Production Pack](https://www.ovhcloud.com/fr-ca/hosted-private-cloud/anthos/). Il sera possible ultérieurement de faire évoluer un Hosted Private Cloud powered by Anthos.
>

Le stockage Dedicated NetApp s'appuie sur NetApp ONTAP et dispose de la technologie Trident, permettant à vos applications d'utiliser efficacement le stockage persistant via le standard Kubernetes Container Storage Interface (CSI) (création et modification de volumes, prise de snapshots, etc...).

Dans l'onglet `Stockage`{.action}, vous pouvez diviser l'espace de stockage disponible sur votre cluster Dedicated NetApp en créant des Machines Virtuelles de Stockage (*Storage Virtual Machines* ou SVM) Dedicated NetApp.

![Espace client](images/anthos_cp09.png){.thumbnail}

Une fois créées dans votre espace client, vos SVM seront disponibles en tant que **bootstrap services** dans la [console Anthos](#firststeps). Vous pourrez les lier à vos clusters lors de leur création ou ultérieurement.

### Ajouter et gérer des plages d’adresses IP (IPs) <a name="iprange"></a>

Depuis l'onglet `IPs`{.action}, vous pouvez définir des plages IPv4 locales pour votre offre et ajouter des adresses IP publiques.

![Espace client](images/anthos_cp10.png){.thumbnail}

#### Plages d'IPs publiques

La plage incluse de 50 **adresses IPv4 publiques** s'affiche dans le tableau à gauche. Vous pouvez commander plus d'adresses IP publiques via le bouton `Actions`{.action} en haut à gauche. Cliquez sur alors sur `Commander des IPs publiques`{.action} pour procéder à cette commande.

#### Plages d'IPs locales

Les **adresses IP privées** sont librement utilisables mais leurs plages doivent être déclarées dans l’espace client OVHcloud afin d’être disponibles pour votre offre. Le tableau de droite liste vos adresses IP privées une fois que vous les aurez ajoutées. Pour cela, cliquez à droite sur le bouton `Actions`{.action} de droite puis sur `Assigner des IP privées`{.action}.
<br>Vous pourrez par la suite attribuer les adresses IP dans la console Anthos.

![Espace client](images/anthos_cp11.png){.thumbnail}

Pour supprimer une entrée, utilisez le bouton `Supprimer`{.action} à droite de l'adresse concernée. Seules les adresses IP non assignées dans la console Anthos (leur statut est `Inactif` dans le tableau) peuvent être supprimées.

#### Utilisation du vRack avec Hosted Private Cloud powered by Anthos et les autres services OVHcloud <a name="vrack"></a>

Chaque Hosted Private Cloud powered by Anthos est livré avec un [vRack OVHcloud](https://www.ovh.com/ca/fr/solutions/vrack/). Veuillez pour cela prendre connaissances des informations données dans l’e-mail d’installation qui vous a été envoyé. D’autres services OVHcloud compatibles peuvent être attachés à ce vRack.

### Premiers pas <a name="firststeps"></a>

Une fois votre Hosted Private Cloud powered by Anthos livré, les prochaines étapes dépendent de vos besoins en termes d'utilisation et de ressources :

- [Ajouter des hôtes supplémentaires (facultatif)](#hosts)
- [Assigner des plages d'adresses IP](#iprange)
- [Créer des SVM NetApp (facultatif)](#netapp)
- [Ouvrir la console Anthos et créer votre (vos) cluster(s)](#general)

Consultez à présent notre [documentation sur la création de clusters via la console Anthos](https://docs.anthos.ovh.net/docs/anthos/private-mode/docs/1.8/how-to/creating-user-clusters.html) .

## Aller plus loin <a name="gofurther"></a>

[Hosted Private Cloud powered by Anthos : Documentation dédiée](https://docs.anthos.ovh.net/docs/anthos/private-mode/index.html)

[Capacités techniques et limitations du Hosted Private Cloud powered by Anthos](../technical-capabilities/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
