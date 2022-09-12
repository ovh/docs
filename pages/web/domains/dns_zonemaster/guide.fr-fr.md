---
title: 'Utilisation de Zonemaster'
slug: zonecheck-de-votre-domaine
section: DNS et zone DNS
order: 08
---

**Dernière mise à jour le 01209/2022**

## Objectif


## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domain/){.external}

## En pratique

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




## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement Web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/){.external}

[Se connecter à l'aide du logiciel Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
