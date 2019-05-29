---
title: 'Importer une IP Fail Over'
slug: importer-une-ip-fail-over
legacy_guide_number: 1883
section: 'Base de connaissances'
---

**Dernière mise à jour le 6 mai 2019**

## Objectif

Si vous avez besoin de configurer une adresse IP Failover sur vos instances parce que :

- vous avez plusieurs sites sur votre instance 
- vous hébergez des projets internationaux
- vous voulez migrer votre activité depuis un serveur dédié vers une instance Public cloud

Il est possible d’importer une adresse IP Failover liée à un autre service OVH.

**Ce guide explique comment importer une IP Failover dans votre projet Public Cloud OVH.**

## Prérequis

* Avoir accès à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* Avoir [une IP Fail Over](https://www.ovh.com/fr/serveurs_dedies/ip_failover.xml){.external} liée à un [serveur dédié OVH](https://www.ovh.com/fr/serveurs_dedies/){.external}.

## Instructions

Tout d’abord, connectez-vous à votre [Espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et cliquez sur le menu `Cloud`{.action}. Cliquez alors sur le menu latéral `Serveurs`{.action} pour montrer la liste déroulante des projets.

Une fois que vous avez trouvé votre projet dans la liste, cliquez dessus, puis sélectionnez l’onglet `Infrastructure`{.action}.

![Section IP](images/import-failover-ip-01.png){.thumbnail}

Ensuite, cliquez sur le bouton `Actions`{.action}, puis sur `Importer les IP Failover d’OVH`{.action}.

![Importer une IP Failover](images/import-failover-ip-02.png){.thumbnail}

Après, sélectionnez l'adresse IP Failover que vous voulez importer, puis cliquez sur le bouton `Confirmer`{.action}.

![Sélectionner une IP Failover](images/import-failover-ip-03.png){.thumbnail}

Un message de confirmation s'affiche.

![Failover Importé](images/import-failover-ip-04.png){.thumbnail}

Lorsque l'IP Failover a été importée avec succès, cliquez sur la flèche déroulante à côté de l'IP failover, puis cliquez sur `Modifier le serveur associé`{.action}.

![Attacher une IP Failover](images/import-failover-ip-05.png){.thumbnail}

Cliquez maintenant sur le cercle gris sur le côté droit de votre instance. Ceci indique que vous voulez attacher votre adresse IP Failover à l'instance. Lorsque vous avez terminé, cliquez sur le bouton jaune `Attacher`{.action} au bas de votre écran.

![Attacher une IP Failover](images/import-failover-ip-06.png){.thumbnail}

Votre adresse IP Failover sera maintenant attachée à votre instance.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.