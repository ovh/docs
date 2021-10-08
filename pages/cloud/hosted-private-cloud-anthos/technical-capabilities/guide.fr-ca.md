---
title : Capacités et limitations techniques (FAQ)
slug : technical-capabilities
excerpt: Découvrez les capacités techniques et les limites du Hosted Private Cloud powered by Anthos
section : Premiers pas
order : 1
---

**Dernière mise à jour le 08/10/2021**

## Objectif

Retrouvez ci-dessous les capacités techniques et les limites de l'offre Hosted Private Cloud powered by Anthos.

### Limitations au lancement

- La commande de noeuds et d'adresses IP supplémentaires n'est pas encore disponible dans l'espace client OVHcloud. Nous vous invitons à contacter votre commercial OVHcloud si vous avez d’autres besoins pendant la phase de lancement.
- La console Dedicated NetApp n'est pas encore disponible.
- Les mises à jour d'Anthos ne seront disponibles qu'après la phase de lancement.

### Capacités techniques et limites connues

- **Réseau public** : Chaque service est livré avec un bloc de 50 adresses IPv4 utilisables. Des adresses IP supplémentaires pourront être commandées dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) (256 maximum par service).

- **Capacité du cluster utilisateur** : Les packs de production comprennent 15 noeuds de travail bare metal utilisables pour vos clusters et conteneurs Kubernetes. Des noeuds bare metal supplémentaires pourront être ajoutés dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). La solution Hosted Private Cloud powered by Anthos peut gérer plusieurs clusters Kubernetes, avec un total de 100 noeuds bare metal exécutant 100 pods chacun. Si vos besoins dépassent ces seuils, veuillez contacter votre commercial OVHcloud.

- **Persistent storage** : Grâce au stockage NetApp dédié inclus (dans le Stateful Production Pack), chaque déploiement peut prendre en charge jusqu'à 1 000 machines virtuelles de stockage (SVM) et un total de 2 000 volumes par instance NetApp. Si vous avez besoin d'un stockage au-delà de ces limites, veuillez contacter votre commercial OVHcloud.

- **Compatibilité vRack** : Dans un premier temps, il ne sera pas possible de connecter un déploiement Anthos à un vRack existant. Cette option sera ajoutée ultérieurement. Vous pouvez cependant déplacer des services existants vers le vRack livré avec votre Hosted Private Cloud powered by Anthos.

> [!primary]
> Veuillez également consulter notre [page produit](https://www.ovhcloud.com/fr-ca/hosted-private-cloud/anthos/) pour en savoir plus sur les détails techniques et les spécifications du service.
>

### FAQ technique concernant le service

> [!faq]
>
> Quelle est la principale caractéristique du Hosted Private Cloud powered by Anthos ?
>> Les clients peuvent compter sur un déploiement d'Anthos entièrement isolé et autogéré (*Anthos on bare metal, operating in Private Mode*), avec OVHcloud comme fournisseur d'infrastructure.
>
> Des fonctionnalités supplémentaires sont-elles prévues pour la solution Anthos ?
>> D’autres fonctionnalités sont prévues pour 2022, comme la disponibilité des services sur un plus grand nombre de datacentres, *Cloud Run for Anthos*, *Migrate for Anthos*, les certifications PCI DSS et SecNumCloud.
>
> Comment les licences Anthos sont-elles gérées ?
>> Toutes les licences Anthos nécessaires sont gérées par OVHcloud. Leur coût est déjà inclus dans la tarification.
>
> Comment les mises à jour du logiciel Anthos seront-elles mises en oeuvre ?
>> La solution Hosted Private Cloud powered by Anthos recevra toutes les mises à jour de composants pertinentes. Le processus de mise à jour est contrôlé par le client (whitelisting des mises à jour, rollback).
>
> Une fonctionnalité Marketplace sera-t-elle disponible ?
>> Un équivalent OVHcloud de la Marketplace est prévu pour 2022.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
