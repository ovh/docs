---
title: "Éviter le gel de la machine virtuelle avec l'option Veeam Backup Managed"
slug: eviter-le-freeze-de-vm-avec-l-option-veeam-backup
excerpt: Apprenez à mettre en œuvre une solution de contournement avec le mécanisme VMware DRS
section: Services et options OVHcloud
order: 07
updated: 2022-02-22
---

**Dernière mise à jour le 22/02/2022**

## Objectif

Durant le processus de sauvegarde lors de la suppression d’un snapshot de votre machine virtuelle dans votre datastore NFS, il est possible que vous rencontriez un blocage d’une trentaine de secondes ou un verrouillage du disque.
Cela est dû au fait que le snapshot de votre machine virtuelle est installé sur le backup proxy, qui fonctionne sur un hôte différent. Si le proxy et la machine virtuelle sont situés sur le même hôte, le dysfonctionnement ne se produira pas.

**Ce guide vous montre comment mettre en œuvre une solution de contournement à l'aide du mécanisme VMware DRS.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), afin de recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))
- Activer l'option [Veeam Backup Managed](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/veeam-backup-managed/){.external}.

## En pratique

> [!primary]
>
> Veuillez noter les points suivants avant d'entamer ce processus :
>
> - dans les environnements de grande taille, la création de plusieurs règles DRS peut prendre beaucoup de temps ;
> - l’utilisateur doit ajouter manuellement les nouvelles machines virtuelles aux règles DRS ;
> - toute machine virtuelle devant être sauvegardée, mais ne faisant pas partie des règles DRS, peut toujours subir un blocage.
>

Pour mettre en œuvre cette solution, cliquez sur le cluster approprié, rendez-vous sur l'onglet `Configurer`{.action} puis la section `Règles de VM/hôte`{.action}.

![vSphere](images/en01add.png){.thumbnail}

Créez une règle DRS pour **conserver les machines virtuelles ensemble** et ajoutez-les avec un backup proxy. Si vous possédez un grand nombre de machines virtuelles à sauvegarder, vous pouvez créer plusieurs règles DRS et les lier à plusieurs backups proxy. L'algorithme OVH vous garantit que le processus de sauvegarde de la machine virtuelle est effectué par le backup proxy présent sur le même hôte ESXi que la machine virtuelle.

> [!warning]
>
> L'ajout d'un nouveau backup proxy entraînera des coûts supplémentaires.
>

![proxy](images/en02proxy.png){.thumbnail}

Créez une autre règle DRS pour **séparer les machines virtuelles**, afin de conserver les backups proxy sur différents hôtes :

![proxy](images/en03proxy2.png){.thumbnail}

Veuillez noter que vous devez avoir mis en place une règle anti-affinité pour que les backups proxy ne se trouvent jamais sur le même hôte et autant de règles d'affinité que de backup proxy.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
