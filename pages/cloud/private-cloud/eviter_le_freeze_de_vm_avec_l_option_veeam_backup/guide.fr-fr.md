---
title: Éviter le gel de la machine virtuelle avec l''option Veeam Backup Managed
slug: eviter-le-freeze-de-vm-avec-l-option-veeam-backup
excerpt: Apprenez à mettre en œuvre une solution de contournement avec le mécanisme VMware DRS
section: Services et options OVH
order: 07
---

**Dernière mise à jour le 29/11/2018**

## Objectif

Durant le processus de sauvegarde lors de la suppression d’un snapshot de votre machine virtuelle dans votre datastore NFS, il est possible que vous rencontriez un blocage d’une trentaine de secondes ou un verrouillage du disque.
Cela est dû au fait que le snapshot de votre machine virtuelle est installé sur le backup proxy, qui fonctionne sur un hôte différent. Si le proxy et la machine virtuelle sont situés sur le même hôte, le dysfonctionnement ne se produira pas.

**Ce guide vous montre comment mettre en œuvre une solution de contournement à l'aide du mécanisme VMware DRS.**

## Prérequis

- Posséder une solution [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
- Bénéficier de l'option [Veeam Backup Managed](https://www.ovh.com/fr/private-cloud/options/veeam.xml){.external} activée.
- Avoir accès à l'interface de gestion vSphere.

## En pratique

### Procédure

> [!primary]
>
> Veuillez noter les points suivants avant d'entamer ce processus :
>
> - dans les environnements de grande taille, la création de plusieurs règles DRS peut prendre beaucoup de temps ;
> - l’utilisateur doit ajouter manuellement les nouvelles machines virtuelles aux règles DRS ;
> - toute machine virtuelle devant être sauvegardée, mais ne faisant pas partie des règles DRS, peut toujours subir un blocage.
>


Pour mettre en œuvre cette solution, faites un clic droit sur le cluster approprié, puis modifiez-en les paramètres.

Créez une règle DRS pour **conserver les machines virtuelles ensemble** et ajoutez-les avec un backup proxy. Si vous possédez un grand nombre de machines virtuelles à sauvegarder, vous pouvez créer plusieurs règles DRS et les lier à plusieurs backups proxy. L'algorithme OVH vous garantit que le processus de sauvegarde de la machine virtuelle est effectué par le backup proxy présent sur le même hôte ESXi que la machine virtuelle.

> [!warning]
>
> L'ajout d'un nouveau backup proxy entraînera des coûts supplémentaires.
>

Dans la section DRS, vous pouvez ajouter une règle comme suit :

![](images/image0_7.png){.thumbnail}

Créez une autre règle DRS pour **séparer les machines virtuelles**, afin de conserver les backups proxy sur différents hôtes :

![](images/image0_28.png){.thumbnail}

Créez un groupe de machines virtuelles, entrez le nom du groupe et ajoutez l'hôte à cette règle :

![](images/image1_9.png){.thumbnail}

Veuillez noter que vous devez avoir mis en place une règle anti-affinité pour que les backups proxy ne se trouvent jamais sur le même hôte et autant de règles d'affinité que de backup proxy.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.