---
title: 'Vérifier et bloquer la faille L1TF'
slug: verifier-bloquer-faille-l1tf
excerpt: 'Découvrez comment bloquer la vulnérabilité L1TF'
section: Sécurité
---

**Dernière mise à jour le 26/02/2019**

## Objectif

Vous pouvez retrouver les informations générales concernant L1 Terminal Fault (L1TF).

**Ce guide vous explique comment bloquer cette vulnérabilité**

## Prérequis

- Posséder un utilisateur pouvant se connecter à vSphere.
- Utiliser l'hyperthreading sur vos machines virtuelles

## En pratique

Pour rappel :

|Variante|vulnérable|fixé par le patch ?|
|:---|:---:|:---:|
|Variant1 : L1 Terminal Fault - VMM (CVE-2018-3646)|YES|NO (mais mitigation)|
|Variant2 : L1 Terminal Fault - OS (CVE-2018-3620)|NO||
|Variant3 : L1 Terminal Fault - SGX (CVE-2018-3615)|NO||

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [n'affecte pas les hyperviseurs VMware](https://kb.vmware.com/s/article/55807) et [necessite l'accès en local au vCenter/VCSA](https://kb.vmware.com/s/article/52312)
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) n'affecte pas les hyperviseurs VMware : [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/54913)
> 

Concernant l'offre **Private Cloud**, seules les offres SDDC sont impactées par cette vulnérabilité.

Vous retrouverez les informations de cette faille sur notre [article de blog](https://www.ovh.com/fr/blog/ovh-l1-terminal-fault-l1ft-foreshadow-disclosure/){.external-link}.

## Processus de mitigation

> [!primary]
>
> Il est important de comprendre que la faille n'est pas corrigée avec les actions suivantes.
>
> Les actions décrivent uniquement comment désactiver l'hyperthreading sur vos hôtes ESXi. De ce fait, il ne sera plus actif sur vos machines virtuelles, le risque sera ecarté.
>

Le processus de mitigation est décrit dans cette base de connaissance VMware : [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

Ce processus se sépare en 3 phases.

### Phase de mise à jour

La mise à jour du vCenter est réalisée par OVH, cependant, le patch des hôtes ESXi est à effectué par vos soins et est disponible dans [l'update manager](https://docs.ovh.com/fr/private-cloud/vmware-update-manager/){.external-link}.

Vous retrouverez la liste des patchs pour les hôtes ESXi dans [ce document](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Suite à la phase de mise à jour des hôtes, le message d'alerte suivant sera présent dans le résumé de votre hôte

![](images/warningMsg.png){.thumbnail}

### Phase d'évaluation de l'environnement

Une fois les hôtes ESXi à jour, le correctif n'est pas encore appliqué.

Il est important d'être conscient des potentiels problèmes listés dans la [base de connaissances](https://kb.vmware.com/s/article/55806){.external-link} mentionné précedemment, ainsi que les baisses de performances constatées dans cette autre base de connaissance : [https://kb.vmware.com/s/article/55767](https://kb.vmware.com/s/article/55767){.external-link}.

### Phase d'activation

Après avoir pris connaissance de ces différents éléments, vous pourrez activer le paramètre permettant de désactiver l'hyperthreading, en vous rendant dans les paramètres système avancés.

![](images/enableMitigation.png){.thumbnail}

Un filtre est disponible en haut à droite de la fenêtre.

Cette manipulation est à réaliser sur chaque hôte.

Pour en savoir plus, vous pouvez vous rendre à l'étape 3 de la partie résolution présente dans [cette base de connaissance VMware](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Si, à la vue de ces diférents éléments, vous ne souhaitez pas désactiver l'hyperthreading, vous pouvez supprimer le message d'alerte en suivant cette [base de connaissance](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![](images/deleteWarning.png){.thumbnail}
> OVH ne recommande pas cette solution et ce dégage de toute responsabilité concernant cette prise de risque.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.