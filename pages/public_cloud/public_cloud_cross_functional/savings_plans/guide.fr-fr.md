---
title: 'Comment fonctionnent les Savings Plans ?'
excerpt: 'Savings Plans - Tout ce que vous devez savoir pour optimiser vos coûts'
updated: 2025-05-16
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

## Objectif

Ce guide a pour objectif de vous fournir une compréhension claire et pratique des [Savings Plans](/links/public-cloud/savings-plan), afin de vous aider à optimiser vos coûts d'infrastructure. Nous expliquerons ce que sont les Savings Plans, leur fonctionnement, et comment choisir le modèle le plus adapté à vos besoins spécifiques. À travers des exemples concrets, vous découvrirez comment ces Savings Plans peuvent réduire vos dépenses tout en offrant une flexibilité dans la gestion de vos ressources.

Le guide détaillera également l'utilisation du tableau de bord associé aux Savings Plans, qui vous permettra de suivre vos coûts, le nombre de ressources utilisées et couvertes, ainsi que les économies générées. Enfin, nous vous aiderons à comprendre les aspects liés à la facturation afin que vous puissiez analyser et maximiser les bénéfices de vos choix en matière de Savings Plans.

## Fonctionnement des Savings Plans

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mjllp_3rkOA?si=nsuEH33N4Q7xEHmS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Qu'est ce qu'un Savings Plan ?

Les [Savings Plans](/links/public-cloud/savings-plan) sont un modèle de tarification flexible qui offre des tarifs inférieurs à la tarification à la demande, en échange d'un engagement d'utilisation sur une durée donnée (1, 6, 12, 24 ou 36 mois).

### Fonctionnement général d’un Savings Plan

> [!primary]
>
> Lorsqu’un client souscrit à un Savings Plan, il s’engage à payer un **montant fixe** pour une **durée donnée**. En contrepartie, ce plan couvre un nombre de ressources simultanées spécifiques pour lesquels il ne paiera pas d’autres frais, ce qui lui permet de bénéficier d’une facturation avantageuse.
>

Voici quelques scénarios pour mieux comprendre ce fonctionnement : 

- **Cas "1:1" :** Imaginons qu’un client dispose de 10 instances OVHcloud de type B3-8 et qu'il souscrit à un Savings Plan qui couvre précisément 10 instances B3-8 pour une durée de 1 an. Dans ce cas, le client ne paiera que le montant de son Savings Plan, et ce montant couvrira entièrement les coûts associés à ses 10 instances B3-8 pendant toute la durée de l'engagement. Il n’y a pas de frais supplémentaires à la fin de chaque mois, puisque les instances sont couvertes par le plan.
- **Cas "1,5:1" :** Supposons maintenant qu’un autre client utilise 15 instances de type B3-8, mais qu'il souscrit à un Savings Plan couvrant uniquement 10 instances de type B3-8. Dans ce cas, le client bénéficie du tarif avantageux du Savings Plan pour les 10 premières instances. Cependant, les 5 autres instances, qui ne sont pas couvertes par le Savings Plan, seront facturées selon le tarif standard à l'heure.
- **Cas "0,8 :1" :** Dernier cas, un client a souscrit à un Savings Plan pour 10 instances de type B3-8, mais il n’utilise que 8 instances simultanément au cours du mois. Même si ce client n’utilise pas toutes les instances couvertes par son plan, il ne paiera pas de frais supplémentaires. Le Savings Plan couvrira toujours les 8 instances simultanées utilisées, et le client bénéficiera de la tarification avantageuse des 10 instances sans frais supplémentaires. Cette situation reste avantageuse sur le plan financier, même si le client n'utilise pas la totalité des 10 instances du Savings Plan.

> [!warning]
> 
> Précisions sur le terme « **ressources simultanées** » :
>
> Un Savings Plan couvre un certain nombre de ressources actives simultanément. Par exemple, pour un Savings Plan de 1 ressource, si un client démarre une ressource à 10h05 et l'efface à 10h10, puis crée une autre ressource à 10h17 et l'efface à 10h30, même s'il a démarré et effacé deux ressources, seules les ressources qui ont été allumées en même temps sont comptabilisées. Dans ce cas, une seule ressource est active de manière simulatnée, de sorte que le Savings plan couvre les deux ressources sans facturation supplémentaire. Il en va de même si les ressources sont utilisées à différents moments du mois (par exemple, du 1er au 10, puis du 15 au 30), sans pour autant qu'elles ne soient actives simultanément.
>

### Fonctionnement des Savings Plans pour les instances

Les Savings Plans pour les instances sont basés sur l'engagement d'une quantité d'instances pour une durée déterminée, offrant une facturation avantageuse pour celles-ci.

> [!warning]
>
> En ce qui concerne les instances actives simultanément, pour savoir si une ressource suspendue ou mise en pause est considérée comme active, veuillez vous référer au guide suivant : [Suspendre ou mettre en pause une instance](/pages/public_cloud/compute/suspend_or_pause_an_instance)
>
> Veuillez noter que seules les **instances** de troisième génération (B3, C3, R3) sont éligibles aux Savings Plans. Assurez-vous que votre instance appartient à cette génération pour bénéficier de cette offre.
>

### Fonctionnement des Savings Plans pour Managed Rancher Service

Les Savings Plans pour Managed Rancher Service reposent sur l'engagement d’une quantité de vCPUs sur une durée définie, ce qui permet de réaliser des économies sur le service Managed Rancher. Ce modèle offre une flexibilité accrue, car les vCPUs engagés peuvent être partagés entre tous vos environnements Rancher, optimisant la facturation des ressources utilisées d'une manière flexible et évolutive.

En souscrivant à un Savings PLan pour Rancher, vous vous engagez à utiliser une certaine quantité de vCPU, qui est ensuite répartie entre vos clusters Rancher, ce qui garantit la rentabilité même si votre utilisation fluctue au fil du temps.

> [!primary]
>
> Les Savings Plans pour Managed Rancher Service ne s'appliquent qu'aux vCPU. Les autres ressources, telles que le stockage, les instances et les autres services, ne sont pas couvertes par ce Savings Plan et seront toujours facturées séparément. Veillez à prendre en compte ces coûts supplémentaires lors de la planification de vos ressources Rancher.
>
> Pour que les vCPU inclus dans votre Savings Plan soient consommés, il est impératif d'attribuer une instance à vos noeuds Kubernetes. Sans instance configurée, les ressources couvertes par le Savings Plan resteront inutilisées, et vous continuerez à payer pour ces ressources non consommées. Assurez-vous de bien dimensionner vos instances pour qu'elles correspondent à vos besoins en vCPU et RAM.
>

### Eligible / compatible services

Ce tableau résume l'éligibilité des services OVHcloud :

| Service                      | Eligible    |
| ---------------------------- | ----------- |
| Instances compute            | Oui         |
| Container (via Compute)      | Oui         |
| Managed Rancher              | Oui         |
| Réseau                       | Non         |
| Stockage                     | Non         |
| Public Cloud Databases       | Non         |
| AI                           | Non         |

> [!warning]
>
> Les Local Zones et les régions aux Etats-Unis ne sont pas éligibles aux Savings Plans.

### Gestion automatisée de l’infrastructure avec les Savings Plans

Les clients n’ont pas à associer manuellement leurs instances aux Savings Plans. Nous prenons en charge cette gestion de manière automatique, en prenant en compte toutes les instances, qu'elles soient existantes ou futures, pour le calcul de la consommation du Savings Plan.

Par exemple :

- Si un client dispose de 10 instances de type B3-8 et souscrit à un Savings Plan pour 10 instances B3-8, celles-ci seront automatiquement couvertes par la facturation du Savings Plan.
- Si le client dispose de 15 instances de type B3-8 et souscrit à un Savings Plan pour 10 instances B3-8, les 10 premières seront automatiquement couvertes par la facturation du Savings Plan et les 5 autres seront facturées à l’heure sans remise.

### Créer un modèle d’économie sur mesure

Pour optimiser les coûts tout en s’adaptant à vos besoins variés, il est possible de cumuler plusieurs Savings Plans ayant des caractéristiques différentes, comme la taille, le type/modèle de ressources, ou la durée d’engagement. Cette approche permet d’aligner la couverture avec des usages spécifiques, tout en maximisant les économies.

/// details | **Exemple réel :**

- Un client utilise deux types de workloads :
    - Un environnement de production stable avec 20 VMs B3-16, utilisées 24h/24 et 7j/7 toute l’année.
    - Un environnement de développement variable, avec une moyenne de 10 VMs B3-8, utilisées principalement sur 8 mois de l’année.
- Après analyse de ses besoins, le client opte pour la combinaison suivante :
    - Un Savings Plan de 3 ans couvrant 20 VMs B3-16. Cela représente une **réduction de 54 %** par rapport à une facturation à l’heure.
    - Un Savings Plan de 1 an couvrant 10 VMs B3-8. Cela représente une **réduction de 35 %** par rapport à une facturation à l’heure.

Grâce à cette combinaison, le client réalise des économies substantielles en optimisant ses ressources de production à long terme, tout en maintenant la flexibilité nécessaire pour son environnement de développement, avec des réductions respectives de 54 % et 35 % par rapport à une facturation horaire.

///

## Analyser vos Savings Plans grâce au dashboard

Le tableau de bord des Savings Plans vous permet de suivre et d'analyser vos Savings Plans, en fournissant des informations essentielles sur leur utilisation et leur couverture. Vous pouvez consulter des données spécifiques selon la période et le service.

/// details | **a. Filtres de sélection**

![Dashboard focus on filters](images/dashboard_filters.png){.thumbnail}

- **Service :** Permet de filtrer le service spécifique auquel les Savings Plans sont associés.
- **Période :** Permet de sélectionner une période précise pour observer l’utilisation des Savings Plans et la couverture associée.

///

/// details | **b. Indicateurs des Savings Plan**

> [!primary]
>
> Les indicateurs affichés dans le tableau des Savings Plans sont ajustés en fonction des filtres appliqués. Il est ainsi possible de personnaliser l'affichage des indicateurs pour se concentrer sur des périodes spécifiques, des services particuliers ou des types d'instances sélectionnées.
>
> Seules les données des 6 derniers mois sont disponibles.
>

![Dashboard focus on kpi](images/dashboard_kpi.png){.thumbnail}

- **Nombre de Savings Plans actifs :** Nombre total de vos Savings plans actifs sur la période donnée pour la ressource sélectionnée
- **% d'usage des Savings Plans :** Moyenne d'utilisation de vos Savings Plans (sur la période sélectionnée pour la ressource sélectionnée). Par exemple, si vous utilisez 8 instances et que vos Savings Plans en couvrent 10, le taux d'utilisation sera de 80 %.
- **% de couverture des Savings Plans :** Moyenne de couverture de vos Savings Plans (sur la période sélectionnée pour la ressource sélectionnée). Par exemple, si vous avez consommé 10 instances et que vos Savings Plans en couvrent 8, alors votre taux de couverture est de 80 %.

Si la période selectionnée est déjà terminée (un mois précédant celui actuel), deux champs supplémentaires seront disponibles pour vous permettre de visualiser des données plus détaillées :

- **Économies réalisées :** Économies totales (sur la période sélectionnée pour la ressource sélectionnée).
- **Montant du hors-forfait :** Montant de la facture dépassant votre configuration de Savings Plan (sur la période sélectionnée pour la ressource sélectionnée).

///

/// details | **c. Graphiques**

> [!warning]
>
> Pour un Savings Plan démarré en cours de mois, les jours antérieurs à sa création s'affichent en rouge, indiquant l'absence de couverture.
> 

![Dashboard focus on graph](images/dashboard_graph.png){.thumbnail}

- **Légende axe Y du graphique :**
    - Si "Instances" est sélectionné, l'axe Y affichera le nombre d'instance(s) utilisées.
    - Si "Managed Rancher Services" est sélectionné, l'axe Y affichera le nombre de vCPU(s) utilisés.
- **Légendes des couleurs du graphique :**
    - **Vert :** Représente le nombre de ressources couvertes par un Savings Plan.
    - **Rouge :** Représente le nombre de ressources non couvertes par un Savings Plan et facturées à l’heure.

///

/// details | **d. Tableau de suivi de consommation**

![Dashboard focus on conso](images/dashboard_conso.png){.thumbnail}

- **Créer un Savings Plan :** Un bouton permettant de créer un nouveau Savings Plan.

Chaque période dans le tableau correspond à un changement dans l'utilisation des ressources, tel que l'ajout ou la suppression d'une ressource ou d'un Savings Plan.

- **Colonnes du tableau de suivi de consommation :**
    - **Début :** Cette colonne indique la date et l’heure de début de la période de consommation des ressources.
    - **Fin :** Cette colonne indique la date et l’heure de fin de la période de consommation des ressources.
    - **Utilisation :** Représente la quantité de ressources consommées au cours de la période sélectionnée. Elle reflète l’usage effectif de vos services pendant cette période.
    - **Couverture totale :** Indique le total des ressources couvertes par vos Savings Plan au cours de cette période.

///

Grâce à ce tableau de bord, vous pouvez suivre en temps réel l'utilisation et l'efficacité de vos Savings Plans, ajuster votre stratégie en fonction des données observées et optimiser ainsi vos coûts pour une gestion plus performante de vos ressources OVHcloud.

## Comprendre la facturation

> [!primary]
>
> Veuillez noter qu'il n'est pas encore possible de modifier un Savings Plan. Veuillez contacter [nos équipes en charge du support client](https://help.ovhcloud.com/csm?id=csm_get_help).
>

Pour mieux comprendre votre facturation une fois que vous souscrivez à un Savings Plan, voici une explication des différentes lignes que vous pouvez y retrouver.

/// details | Facturation de Savings Plan pour les instances

- **a. Facturation de vos Savings Plans**

Lorsque vous souscrivez à un Savings Plan, vous vous engagez à payer un montant fixe pour un certain nombre d'instances sur une période déterminée. Cependant, les instances couvertes par ce plan ne sont pas détaillées individuellement sur votre facture.
Sur votre facture, vous ne verrez que le montant total correspondant au Savings Plan, et non les instances spécifiques qu'il couvre. Cela permet de simplifier la facturation en ne montrant qu'une ligne regroupant l'ensemble des instances couvertes par votre engagement, sans besoin de détailler chaque instance.

![Facturation d'un Savings Plan pour des instances](images/billings_savings_plan_instances_svp.png){.thumbnail}

> [!primary]
>
> Un prorata sera appliqué si votre Savings Plan débute en cours de mois.
>

- **b. Facturation de vos instances supplémentaires**

Les instances supplémentaires, c'est-à-dire celles qui ne sont pas couvertes par votre Savings Plan, sont facturées à l'heure, comme pour une facturation classique.
Par exemple, si vous utilisez 10 instances de troisième génération pendant 10 heures au cours du mois, la facturation s’effectuera sur la base de l’heure consommée. Cela donne une facture de 100 heures (10 instances x 10 heures), facturées au tarif horaire standard, en plus de la ligne du Savings Plan.

![Facturation pour des instances à l'heure](images/billings_savings_plan_instances_hours.png){.thumbnail}

///

/// details | Facturation de Savings Plan pour Rancher

- **a. Facturation de vos Savings Plans**

Lorsque vous souscrivez à un Savings Plan, vous vous engagez à payer un montant fixe pour un certain nombre de vCPUs sur une période déterminée. Cependant, les vCPUs couverts par ce plan ne sont pas détaillés individuellement sur votre facture.
Sur votre facture, vous ne verrez que le montant total correspondant au Savings Plans. Vous n'aurez pas le détail des différents Rancher avec le nombre de vCPUs qui les couvrent appartenant au Savings Plan.

![Facturation d'un Savings Plan pour des VCPu](images/billings_savings_plan_rancher_svp.png){.thumbnail}

> [!primary]
>
> Un prorata sera appliqué si votre Savings Plan débute en cours de mois.
>

- **b. Facturation de vos vCPUs supplémentaires**

Les vCPUs supplémentaires, c'est-à-dire ceux qui ne sont pas couverts par votre Savings Plan, sont facturés sur une base horaire, comme pour la facturation standard.
Par exemple, si vous utilisez 10 vCPUs pendant 10 heures au cours du mois, vous serez facturé à l'heure. Cela donne une facture pour 100 heures (10 vCPUs x 10 heures), facturées au taux horaire standard, en plus de la ligne du Savings Plan.

![Facturation pour des VCPu à l'heure.](images/billings_savings_plan_rancher_hours.png){.thumbnail}

> [!primary]
>
> Rancher est facturé en fonction du nombre total de vCPU de chacun des nœuds de travail de vos « downstream clusters ». Les vCPU des nodes de type control-plane ne sont pas facturés.
>
> Le minimum de consommation pour Managed Rancher Service est de 20 vCPU par Rancher. Toutefois, vous pouvez créer un ou plusieurs Saving Plan à partir de 1 vCPU. Les vCPU souscrits seront décomptés du nombre total de vCPU consommés.
>

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
