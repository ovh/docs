---
title: Reconstruire une instance
slug: reconstruire-une-instance
legacy_guide_number: 1779
section: Gestion depuis Horizon
order: 7
---


## Preambule
Il est possible que vous soyez amener à vouloir réinstaller votre instance, que cela soit pour reconfigurer votre instance sur une nouvelle base, ou bien simplement pour changer de système d'exploitation. Ce guide vous indique comment reconstruire votre instance depuis l'interface OpenStack Horizon afin d'installer une nouvelle image tout en gardant la même adresse IP.



> [!alert]
>
> Cette manipulation entraine une suppression des données de l'instance.
> 


### Prérequis
- [Créer un accès à Horizon]({legacy}1773){.ref}
- Une instance


## Reconstruire une instance
Pour reconstruire une instance, il faut :

- Se connecter à Horizon
- Cliquer sur Instances dans le menu à gauche.
- Sélectionner Reconstruire l'instance dans la liste déroulante correspondant à l'instance.


![public-cloud](images/2653.png){.thumbnail}

- Sélectionner l'image pour la reconstruction.
- Sélectionner le type de partitionnement ( " Automatique " ou " Manuel " ).
- Cliquer sur Reconstruire l'instance .
