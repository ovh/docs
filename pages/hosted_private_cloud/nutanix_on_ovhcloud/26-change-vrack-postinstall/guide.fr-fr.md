---
title: "Modifier le vRack d'un cluster Nutanix"
excerpt: "Découvrez comment modifier le vRack d'un cluster Nutanix"
updated: 2022-01-11
---

## Objectif

Un cluster Nutanix est livré avec son propre vRack. Afin de vous interconnecter avec d'autres services OVHcloud, vous pouvez associer votre cluster à un vRack différent.

**Ce guide vous explique comment ajouter un cluster Nutanix à un autre vRack.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à l'équipe [Professional Services OVHcloud](https://www.ovhcloud.com/fr/professional-services/) ou à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Disposer d'un service [vRack](https://www.ovh.com/fr/solutions/vrack/) supplémentaire activé dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Étape 1 : suppression des services

Connectez-vous à votre [espace client OVHcloud](/links/manager). Ouvrez la page de configuration du Nutanix Cluster vRack, sélectionnez tous les services (par exemple, serveur dédié, IP, load balancer) et cliquez sur `Supprimer`{.action}.

![Remove Features](images/vrack-1.png){.thumbnail}

> [!primary]
> Avant de supprimer des services, pensez à sauvegarder leurs références, surtout si vous avez un grand nombre de serveurs, d'IP, de load balancers, etc.
>

> [!primary]
> Le retrait des services du vRack n'est pas effectif immédiatement. Veuillez prévoir un peu de temps pour que le processus se termine.
>

### Étape 2 : Ajout de services

Une fois le processus terminé, rendez-vous sur le vRack souhaité et ajoutez tous les services précédemment supprimés avec le bouton `Ajouter`{.action}.

![Add features new vRack](images/vrack-2.png){.thumbnail}

> [!primary]
> L’ajout de services au vRack n’est pas effectif immédiatement. Veuillez prévoir un peu de temps pour que le processus se termine.
>

> [!warning]
> L’accès à l'interface Prism Central n’est pas instantané : il est nécessaire que la VM redémarre pour rendre à nouveau l'accès effectif.
>

### Dépannage

Si l'interface Prism Central reste inaccessible après 30 minutes, créez un Front-end sur le load balancer pour atteindre un CVM en SSH.

Une fois connecté, vérifiez si la VM Prism Central est allumée.

```bash
acli vm.get prism-central | grep state
```

Si la réponse est `state: "kOff"`, alors démarrez la VM :

```bash
acli vm.on prism-central
```

Vous pouvez également redémarrer la VM avec la commande suivante :

```bash
acli vm.guest_reboot
```

Sinon, effectuez un hard reboot (si les tentatives précédentes ont échoué) :

```bash
acli vm.reset
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
