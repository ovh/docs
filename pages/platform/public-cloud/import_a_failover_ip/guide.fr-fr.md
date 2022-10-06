---
title: 'Importer une Additional IP'
slug: importer-une-ip-fail-over
excerpt: 'Ce guide explique comment importer une Additional IP dans votre projet Public Cloud OVHcloud.'
section: 'Réseau'
order: 11
---

**Dernière mise à jour le 06/10/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Si vous avez besoin de configurer une adresse Additional IP sur vos instances parce que :

- vous avez plusieurs sites sur votre instance 
- vous hébergez des projets internationaux
- vous voulez migrer votre activité depuis un serveur dédié vers une instance Public cloud

Il est possible d’importer une adresse Additional IP liée à un autre service OVHcloud.

**Ce guide explique comment importer une Additional IP dans votre projet Public Cloud OVHcloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Avoir [une Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/){.external}.

## En pratique

Tout d’abord, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez votre projet dans la section `Public Cloud `{.action}. Ensuite, sélectionnez `Additional IP`{.action} dans la section "Network".

Cliquez sur `Actions`{.action} et sélectionnez `Importer une IP`{.action} pour afficher toutes les adresses IP pouvant être importées dans votre projet Public Cloud.

![Section IP](images/import1.png){.thumbnail}

Si vous ne disposez pas encore d’Additional IP sur votre projet public cloud, l’option d'importer une IP s’affichera alors sur la page d’accueil.

Cliquez sur les 3 points à droite de l’IP que vous voulez importer et cliquez sur `Importer cette Additional IP`{.action}.

![Importer une Additional IP](images/import2.png){.thumbnail}

Maintenant, cliquez sur `Importer`{.action} :

![Importer une Additional IP](images/importconfirm.png){.thumbnail}

Une fois que vous l’aurez fait, la page sera rechargée et vous obtiendrez un message confirmant que la migration de l’IP s’est effectuée avec succès.

Lorsque l’Additional IP a été importée avec succès, cliquez sur les 3 points à droite, puis sur `Modifier l’instance associée`{.action}.

![Importer une Additional IP](images/modifyinstance.png){.thumbnail}

Une fenêtre contextuelle apparaîtra pour vous permettre de choisir l'instance vers laquelle vous souhaitez déplacer votre IP :

![Importer une Additional IP](images/modifyinstance1.png){.thumbnail}

Cliquez sur `Joindre`{.action} puis vous verrez la page se recharger avec la confirmation que l’IP a été associée à l’instance :

![Importer une Additional IP](images/modifycompleted.png){.thumbnail}

Votre adresse Additional IP sera maintenant attachée à votre instance.

La prochaine étape portera sur la configuration de l’IP dans votre système d'exploitation, et vous pouvez consulter notre guide ici : [Configurer une Additional IP](https://docs.ovh.com/fr/public-cloud/configurer_une_ip_failover/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
