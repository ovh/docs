---
title: "Créer une zone DNS OVHcloud pour un sous-domaine"
excerpt: "Découvrez comment créer une zone DNS chez OVHcloud pour le sous-domaine d'un nom de domaine via votre espace client"
updated: 2025-04-28
---

## Objectif

Vous souhaitez créer une zone DNS pour un sous-domaine ?

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Pour plus d'explications, consultez nos guides suivants :

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

La plupart du temps, la configuration des enregistrements DNS d'un sous-domaine se fait directement via la zone DNS active du nom de domaine dont dépend le sous-domaine à configurer.
Cependant, il est possible de configurer une zone DNS pour le sous-domaine d'un nom de domaine.

Pour diverses raisons, vous pouvez être amené à créer une zone DNS pour le sous-domaine d'un nom de domaine chez OVHcloud.
Le sous-domaine choisi aura ainsi sa propre zone DNS pour y configurer ses enregistrements DNS.

> [!success]
>
> Pour rappel:
>
> - Un nom de domaine a généralement cette forme : **domain.tld**. Par exemple : ovhcloud.com.
> - Un sous-domaine a généralement cette forme : **sub.domain.tld**. Par exemple : help.ovhcloud.com.
>
> Par défaut, les sous-domaines dépendent d'un nom de domaine pour fonctionner et être utilisés.
> Concrêtement, vous ne pourrez pas utiliser le sous-domaine **sub.domain.tld** si vous n'avez pas accès à la gestion du nom de domaine **domain.tld**
>
> Si vous souhaitez créer une zone DNS pour un nom de domaine, consultez directement [ce guide](/pages/web_cloud/domains/dns_zone_create)

**Découvrez comment créer une zone DNS chez OVHcloud pour le sous-domaine d'un nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Disposer du nom de domaine dont va dépendre le sous-domaine choisi.
- Le sous-domaine concerné ne doit pas déjà disposer d'une zone DNS (active ou non) chez OVHcloud ou faire l'objet d'une opération ou d'une commande en cours chez OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### 1 - Créer la zone DNS via l'espace client OVHcloud

Cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Zones DNS`{.action}, puis sur le bouton `Commander`{.action}.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui apparaît, renseignez le sous-domaine (exemple : *sub.domain.tld*) pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants le temps que l'outil effectue des vérifications concernant le sous-domaine.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Si un message apparaît et vous indique que la zone DNS ne peut pas être créée, vérifiez que le sous-domaine respecte les prérequis nécessaires ou demandez à la personne gérant celui-ci de le faire pour vous. Dès que tout est correct, tentez de nouveau la manipulation.
>>
> **Étape 4**
>>
>> Dès que la vérification aboutit, choisissez d'activer ou non les entrées minimales pour la zone DNS que vous allez créer. Ce choix n'est pas définitif puisque vous pourrez toujours [éditer les enregistrements de la zone DNS](/pages/web_cloud/domains/dns_zone_edit) par la suite.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Activer les entrées minimales ?|Détails|
>> |---|---|
>> |Oui|Sélectionnez ce choix si vous souhaitez personnaliser vous-même la zone DNS par la suite.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Non|Sélectionnez ce choix si vous prévoyez d'utiliser des services OVHcloud comme un [hébergement web](/links/web/hosting), la zone étant préconfigurée à cet effet.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Une fois votre choix effectué, poursuivez les étapes qui s'affichent dans votre espace client OVHcloud jusqu'à la création de la zone DNS.

### 2 - Editer la zone DNS (facultatif)

La zone DNS pour votre sous-domaine étant maintenant créée, vous pouvez dès à présent l'éditer. Cette manipulation est facultative, mais elle peut se révéler nécessaire si vous souhaitez assurer la continuité de la disponibilité des services liés à ce sous-domaine (comme un site web et/ou des e-mails).

Pour éditer cette zone DNS, consultez notre guide « [Editer une zone DNS chez OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> Si vous venez juste de créer la zone DNS et que le sous-domaine n'apparaît pas encore dans la liste des vos services (dans la partie `Web cloud`{.action} de l'espace client OVHcloud puis dans la section `Zones DNS`{.action}), patientez 15 à 20 minutes puis rechargez la page.

### 3 - Déclarer les serveurs DNS dans la zone DNS active du nom de domaine dont dépend le sous-domaine choisi

Pour un sous-domaine, l'activation de la zone DNS ne se fait pas de la même manière qu'un nom de domaine. Comme précisé plus haut, un sous-domaine dépend obligatoirement d'un nom de domaine pour pouvoir être utilisé et pour fonctionner.