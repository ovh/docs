---
title: 'Créer une zone DNS OVHcloud pour un nom de domaine'
slug: creer-une-zone-dns-pour-un-domaine-externe
excerpt: 'Apprenez à créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client'
section: 'DNS et zone DNS'
order: 2
---

**Dernière mise à jour le 05/05/2020**

## Objectif

La zone Domain Name System (DNS) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées enregistrements. Dans une utilisation classique, ces enregistrements permettent de faire le lien entre votre nom de domaine et le ou les serveurs qui hébergent votre site internet et vos adresses e-mail.

Pour diverses raisons, vous pouvez être amené à créer une zone DNS pour votre nom de domaine chez OVHcloud.

**Apprenez à créer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client.**

## Prérequis

- Disposer d’un nom de domaine.
- Le nom de domaine concerné ne doit pas déjà disposer d'une zone DNS OVHcloud ou faire l'objet d'une opération ou d'une commande en cours chez OVHcloud.
- La configuration technique du nom de domaine doit être correcte (état, SOA, etc.).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : créer la zone DNS via l'espace client

Pour démarrer cette manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Commander`{.action} dans la barre de services à gauche, puis sur `Zone DNS`{.action}.

Sur la page qui apparaît, renseignez le nom de domaine pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants le temps que l'outil effectue des vérifications concernant le nom de domaine.

Si un message apparaît vous indiquant que la zone DNS ne peut pas être créée, vérifiez que le nom de domaine respecte les prérequis nécessaires ou demandez à la personne gérant celui-ci de le faire pour vous. Dès que tout est correct, tentez de nouveau la manipulation.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Dès que la vérification aboutit, vous devez choisir d'activer ou non les entrées minimales pour la zone DNS que vous allez créer. Ce choix n'est pas définitif puisque vous pourrez éditer les enregistrements de la zone DNS une fois cette dernière créée.

|Activer les entrées minimales ?|Détails|
|---|---|
|Oui|Sélectionnez ce choix si vous souhaitez personnaliser vous-même la zone DNS par la suite.|
|Non|Sélectionnez ce choix si vous prévoyez d'utiliser des services OVHcloud comme un [hébergement web](https://www.ovh.com/ca/fr/hebergement-web/){.external}, la zone étant préconfigurée à cet effet.|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Une fois votre choix effectué, poursuivez les étapes jusqu'à la création de la zone DNS.

### Étape 2 : éditer la zone DNS (facultatif)

La zone DNS pour votre nom de domaine étant maintenant créée, vous pouvez dès à présent l'éditer. Cette manipulation est facultative, mais elle peut se révéler indispensable si vous souhaitez assurer la continuité de la disponibilité des services liés à ce nom de domaine (comme un site internet et des e-mails).

Si vous souhaitez éditer cette zone DNS, toujours depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Domaines`{.action} dans la barre de services à gauche, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

> [!primary]
>
> Si vous venez juste de créer la zone DNS et que le nom de domaine n'apparaît pas encore dans la liste des vos services `Domaines`{.action}, patientez quelques instants puis rechargez la page.
>

Dès lors, réalisez les manipulations nécessaires. Vous pouvez en apprendre plus sur l'édition d'une zone DNS grâce à notre documentation intitulée « [Éditer une zone DNS OVH](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/){.external} ». Une fois la zone DNS OVHcloud de votre nom de domaine modifiée, un temps de propagation de 4 à 24 heures maximum est nécessaire afin que les modifications soient effectives.

### Étape 3 : modifier les serveurs DNS du nom de domaine

Une fois que la zone DNS chez OVHcloud est prête à être utilisée, vous devez la relier à votre nom de domaine. Pour cela, récupérez au préalable les serveurs DNS d'OVHcloud activés pour votre nom de domaine dans votre espace client. Ces derniers apparaissent en dessous de `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Une fois en votre possession, **modifiez les serveurs DNS de votre nom de domaine depuis l’interface du prestataire gérant ce dernier.** Une fois la manipulation exécutée, un temps de propagation de 48 heures maximum est nécessaire afin que le changement soit pleinement effectif.

## Aller plus loin

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
