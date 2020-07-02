---
title: 'Personnaliser les serveurs DNS d''un nom de domaine'
slug: glue-registry
excerpt: 'Apprenez à personnaliser les serveurs DNS de votre nom de domaine OVHcloud'
section: 'DNS et zone DNS'
order: 7
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les serveurs DNS hébergent les configurations DNS des noms de domaine. Ces dernières, que l’on peut appeler des zones DNS, se composent d’informations techniques : des enregistrements. Dans une utilisation classique, ceux-ci permettent de faire le lien entre votre nom de domaine et le ou les serveurs qui hébergent votre site internet et vos adresses e-mail.

Selon vos besoins, vous pouvez vouloir personnaliser le nom des serveurs DNS de votre nom de domaine OVHcloud.

**Apprenez à personnaliser les serveurs DNS de votre nom de domaine OVHcloud.**

## Prérequis

- Disposer d'un nom de domaine enregistré chez OVHcloud.
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

**Personnaliser les serveurs DNS d'un nom de domaine est une manipulation sensible** : effectuer un changement inopportun pourrait rendre l'accès à votre site internet et la réception de nouveaux messages sur vos adresses e-mail impossibles. Nous vous invitons à suivre précisément les étapes décrites ci-dessous ou de vous faire assister si vous n'êtes pas sûr de la manipulation que vous allez réaliser.

### Étape 1 : ajouter les enregistrements GLUE

Pour démarrer, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} partie `Web`, cliquez sur `Domaines`{.action} dans la barre de services à gauche, puis choisissez le nom de domaine pour lequel vous souhaitez personnaliser les serveurs DNS. Positionnez-vous enfin sur l'onglet `GLUE`{.action}.

Sur la page qui apparaît, un tableau affiche les enregistrements GLUE actuellement configurés chez OVHcloud pour votre nom de domaine. Afin d'ajouter un nouvel enregistrement GLUE, cliquez sur le bouton `Ajouter`{.action}.

![glueregistry](images/customize-dns-servers-step1.png){.thumbnail}

Dans la fenêtre qui apparaît, complétez les informations demandées :

|Informations|Détail|  
|---|---|
|Nom du hôte|Personnalisez le nom d'hôte que vous souhaitez utiliser en tant que serveur DNS personnalisé.|
|IP(s) de destination|Indiquez la ou les adresses IP auxquelles le nom d'hôte doit être relié. Il s'agit en définitive de l'adresse IP du serveur DNS actuellement utilisé par votre nom de domaine.|

Une fois les informations complétées, cliquez sur le bouton `Ajouter`{.action}, prenez connaissance des informations affichées, puis cliquez sur `Valider`{.action}. Répétez cette manipulation autant de fois que nécessaire, selon le nombre de serveurs DNS utilisés par votre nom de domaine.

![glueregistry](images/customize-dns-servers-step2.png){.thumbnail}

### Étape 2 : créer les enregistrements A DNS correspondants

Vous devez à présent créer des enregistrements A pour les noms d'hôtes que vous avez définis lors de l'étape précédente. Chaque enregistrement A doit avoir pour cible l'adresse IP de destination correspondante au nom d'hôte créé précédemment.

Cette manipulation doit être réalisée depuis l’interface du prestataire gérant la configuration DNS de votre nom de domaine. Dès lors, deux possibilités :

- **votre nom de domaine n'utilise pas la configuration DNS d'OVHcloud** : rapprochez-vous du prestataire gérant cette dernière. Une fois la manipulation effectuée, poursuivez vers l'étape suivante ;

- **votre nom de domaine utilise la configuration DNS d'OVHcloud** : positionnez-vous sur l'onglet `Zone DNS`{.action} puis ajoutez une nouvelle entrée A en débutant par cliquer sur `Ajouter une entrée`{.action}. Sélectionnez alors d'ajouter une entrée de type A, puis suivez les étapes jusqu'à finalisation. Si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Éditer une zone DNS OVHcloud](../editer-ma-zone-dns/){.external} ».

![glueregistry](images/customize-dns-servers-step3.png){.thumbnail}

### Étape 3 : modifier les serveurs DNS de votre nom de domaine

Il ne vous reste plus qu'à modifier les serveurs DNS de votre nom de domaine. Pour cela, positionnez-vous sur l'onglet `Serveurs DNS`{.action} puis cliquez sur `Modifier les serveurs DNS`{.action}. Remplacez alors vos serveurs DNS actuels par ceux que vous souhaitez utiliser. 

Finalisez les étapes et, si nécessaire, reportez-vous aux instructions décrites dans notre documentation « [Modifier les serveurs DNS d’un nom de domaine OVHcloud](../generalites-serveurs-dns/){.external} ».

Une fois les serveurs DNS modifiés, patientez le temps que cette action soit prise en compte. Un temps de propagation de 48 heures maximum est en effet nécessaire.

![glueregistry](images/customize-dns-servers-step4.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
