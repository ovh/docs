---
title: "Passer d'une facturation à l'heure à mensuelle"
excerpt: 'Découvrez comment modifier le type de facturation de votre instance Public Cloud'
slug: changer-type-facturation-public-cloud
section: 'Gestion de projets'
order: 5
---

**Dernière mise à jour le 22/03/2022**

## Objectif

Lors de la création d’une instance Public Cloud, vous pouvez choisir entre une facturation à l’heure ou une facturation mensuelle. Les instances « à l'heure » sont facturées en *pay-as-you-go* , c'est-à-dire que chaque utilisateur paie en fin de mois, pour chaque heure commencée, la somme des ressources réellement consommées.
<br>Les instances assujetties à un taux mensuel sont jusqu'à 50 % moins chères que les instances assujetties à un taux horaire pour la même durée. Chaque mois entamé est facturé en fin de mois.
<br>Si vous avez initialement choisi une facturation à l'heure, vous pouvez passer à la facturation mensuelle à tout moment.

**Ce guide explique comment passer d'une facturation à l'heure vers une facturation mensuelle.**

> [!warning]
>
> Le passage d'une facturation mensuelle vers une facturation à l'heure n'est pas possible. Si vous voulez passer à la facturation à l'heure, il vous faudra supprimer l’instance facturée mensuellement, puis créer une nouvelle instance et choisir la facturation à l'heure. Dans ce cas, nous vous conseillons de suivre ces étapes :
>
>- Créez un <i>snapshot </i>de votre instance actuelle ;
>
>- Créez une nouvelle instance à partir de ce <i>snapshot </i>;
>
>- Supprimez l’instance à facturation mensuelle.
>

## Prérequis

- Vous devez avoir créé une [instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/){.external}.
- Vous devez être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

### Depuis l'espace client OVHcloud

Dans [votre espace client](https://www.ovh.com/auth/?action=alleraugestionnaire){.external}, cliquez sur `Public cloud`{.action}, choisissez le projet Public cloud concerné puis cliquez sur `Instances`{.action} dans le menu `Compute`. Cliquez sur le bouton `...`{.action} à droite de l'instance pour laquelle vous souhaitez modifier la facturation. Vous verrez alors le bouton `Passer au forfait mensuel`{.action} :

![Modifier le mode de calcul des factures](images/switch_to_monthly_updated.png){.thumbnail}

Il vous faudra ensuite confirmer que vous souhaitez modifier le mode de facturation :

![Confirmer la modification du mode de calcul des factures](images/confirm_to_monthly_updated.png){.thumbnail}

Après validation de votre choix, vous recevrez immédiatement une facture mensuelle au prorata. La prochaine facture inclura la partie du mois à l'heure (le 1er du mois jusqu'au changement) et les nouveaux frais mensuels.

### Depuis l'API Openstack

Lors de la création d'une instance à l'aide de l'API Openstack, sauf si cela est spécifié dans le script de création, l'instance est automatiquement créée avec un abonnement horaire. Pour passer à un abonnement mensuel, exécutez la commande suivante :

```bash
openstack server set --property ovh-monthly-instance=1 "InstanceID"
```

Remplacez "InstanceID" par l'ID de l'instance correspondante. Cet identifiant peut être récupéré depuis l’espace client ou l’API OVHcloud.

### Depuis l'API OVHcloud

Connectez-vous à l’[interface API OVHcloud](https://eu.api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
>

### Depuis un script Terraform

Ceci est possible grâce aux `metadata` [attribute](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2#metadata){.external} de la ressource [openstack_compute_instance_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2){.external} :

```terraform
metadata = {
"ovh-monthly-instance" = 1
}

Vous trouverez plus d'informations sur l'utilisation de l'API OVHcloud sur notre guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) ».

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
