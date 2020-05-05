---
title: ZoneCheck de votre domaine
legacy_guide_number: 1980
slug: zonecheck-de-votre-domaine
excerpt: Ce guide detail comment vous assurer que votre mise a jour de serveurs DNS se finalisera avec succes en utilisant un outil de Zone Check.
section: DNS et zone DNS
order: 8
---

**Dernière mise à jour le 05/05/2020**

## Utilisation de ZoneMaster

### Renseignement des champs demandes
L'outil [Zone Check](https://zonemaster.fr/){.external} de l'AFNIC sert à vérifier la bonne configuration des DNS primaire et secondaire que vous souhaitez déclarer.

Pour cela rendez-vous sur le site ZoneMaster en [cliquant ici](https://zonemaster.fr/){.external}. Cliquez ensuite sur "Test d'un domaine non délégué", puis remplissez les champs ci-dessous :

- Nom de domaine : indiquez votre nom de domaine à tester
- Serveurs DNS : cliquez sur le + suivant le nombre de serveurs DNS à tester, puis indiquer le(s) serveur(s) ainsi que la/les IP correspondantes.
- Cliquez ensuite sur le bouton de "validation" afin d'obtenir le résultat.


![domains](images/img_3213.jpg){.thumbnail}


### Resultat
Une fois le formulaire validé, le résultat apparaît après quelques instants :

- Si tout est au vert : Votre zone est correcte. Vous pouvez valider le changement de serveurs DNS depuis votre manager
- Si vous avez des éléments en rouge : Le détail du résultat vous permettra de mener les corrections nécessaires.

Attention, si vous avez des élements en rouge , il ne faut pas lancer de mise à jour de serveurs DNS sans savoir ce que vous faites, car l'opération lancée risquera d'être bloquée et vos services liés au domaines pourraient ne plus fonctionner.


![domains](images/img_3211.jpg){.thumbnail}


### Informations utiles
Si vous avez des questions concernant cet outil et ses fonctionnalités, je vous invite à vous rendre dans la rubrique "FAQ" de ZoneMaster.


![domains](images/img_3212.jpg){.thumbnail}
