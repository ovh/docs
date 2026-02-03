---
title: 'Augmenter les quotas Public Cloud'
excerpt: 'Découvrez comment demander l’augmentation de vos quotas Public Cloud'
updated: 2025-12-17
---

## Objectif

Par défaut, le nombre de ressources (RAM, CPU, espace disque, nombre d'instances, etc.) et de projets que vous pouvez créer est limité pour des raisons de sécurité.

Si vous souhaitez en créer davantage, une augmentation de quota est alors nécessaire.

**Découvrez comment demander et augmenter un quota Public Cloud dans votre espace client OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager)
- [Disposer d'un moyen de paiement valide](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) dans votre espace client OVHcloud

## En pratique

### Augmenter votre quota de ressources

En accord avec des critères internes (ancienneté, existence de factures acquitées, etc.), vous êtes désormais autonome sur les demandes d’augmentation de quotas en lien avec vos projets Public Cloud.

Vous avez la possibilté d'augmenter votre quota de ressources manuellement ou automatiquement.

#### Augmenter automatiquement votre quota de ressources via l'option « Quota autoscaling »

Cette option vous permet de demander une augmentation automatique et progressive de votre quota de ressources. Le quota sera ajusté en fonction de votre utilisation réelle **si vous dépassez 60 % de votre quota actuel pendant 30 jours consécutifs**, ainsi que selon un ensemble de critères internes et financiers.

> [!primary]
>
> **Note** : Ce processus n’est pas adapté pour des augmentations rapides de quota.
>

Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez votre projet Public Cloud.

Dans le menu de gauche, cliquez sur `Quota & Régions`{.action} sous **Paramètres**.

En haut à droite de la page qui s'affiche, retrouvez l'option **Quota autoscaling** :

- Pour en savoir plus sur cette fonctionnalité, cliquez sur le `?`{.action} à côté de cette option.
- Activez l’option en cliquant sur le bouton situé à droite de cette dernière. Son état passera de *Désactivé* à *Activé*.

![auto scaling](images/autoscaling.png){.thumbnail}

Une fois activé, l’auto-scaling augmentera progressivement le quota de votre projet en fonction de vos besoins réels.

#### Augmenter manuellement votre quota de ressources

> [!primary]
>
> Si vous avez besoin d'augmenter votre quota et que le bouton `Augmenter mes quotas!`{.action} n'est pas disponible dans votre espace client, cliquez sur le bouton `Contacter le support`{.action}.
>

![Contact Support](images/contact_support_quota.png){.thumbnail}

Cette procédure permet une augmentation rapide et importante de vos quotas (par exemple : scaling rapide, instances GPU, etc.). Cette méthode repose sur l'achat immédiat d'un crédit, dont toutes les consommations cloud seront automatiquement déduites.

Il est possible d'acheter différents crédits.

Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez votre projet Public Cloud.

Dans le menu de gauche, cliquez sur `Quota & Régions`{.action} sous **Paramètres**.

![access quota](images/raisepciquota1.png){.thumbnail}

Cette page présente un récapitulatif des quotas actuels de votre projet par région. Un avertissement apparaît dès qu'une ressource atteint 80 % de son quota.

Cliquez sur `Augmenter mes quotas`{.action}.

![raise-pci-quota](images/raisepciquota2.png){.thumbnail}

Cliquez sur la flèche à côté de « Sélectionnez le volume » pour afficher la liste des quotas actuellement disponibles. Ce menu déroulant affiche également le montant à payer pour bénéficier de ces ressources.

![select quota](images/selectquotas.png){.thumbnail}

Le tableau ci-dessous présente les ressources obtenues pour chaque quota :

|Quota|Instances|CPU/Cores|RAM (Go)|Taille du volume (To)|Volumes|Sauvegardes|Taille des sauvegardes (To)|Floating IPs|Load Balancer Octavia|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Une fois votre volume sélectionné, cliquez sur `Confirmer`{.action}. Votre paiement sera pris en compte dans les plus brefs délais.

> [!warning]
>
> **Toute augmentation manuelle de quota est immédiatement facturée.**
>
> Après avoir cliqué sur le bouton `Confirmer`{.action}, la commande est automatiquement créée et le montant est prélevé sur votre moyen de paiement par défaut.
>

### Augmenter le quota de vos projets Public Cloud

Il existe deux situations principales où vous pourriez avoir besoin d’un ajustement de quota :

1. **Nombre maximum de projets atteints** : Si vous avez atteint le nombre maximum de projets Public Cloud autorisés dans votre espace client et que vous souhaitez en créer de nouveaux, vous devez soumettre une demande auprès de notre équipe support.

2. **Autres types de demandes de quota** : Pour toute autre limite (CPU, RAM, stockage, etc.) ou besoin spécifique concernant vos projets Public Cloud, vous pouvez également contacter le support pour demander une augmentation.

> [!primary]
>
> **Note** : Les demandes de quota sont traitées manuellement par notre équipe. Le délai de traitement peut varier selon la complexité de la demande. Nous vous recommandons de soumettre votre demande dès que possible pour éviter tout blocage dans vos projets.

Pour accélérer le traitement, merci de préciser dans votre demande :

- le type de quota à augmenter (nombre de projets, ressources, etc.) ;
- l’usage prévu et la justification du besoin ;
- la période ou la durée souhaitée pour l’augmentation.

### Quotas spécifiques et ressources particulières

Pour certaines ressources ou services, des quotas spécifiques peuvent s’appliquer. Pour plus d’informations :

**Quota S3**<sup>1</sup> : Consultez la documentation officielle "[Object Storage - Limites techniques](/pages/storage_and_backup/object_storage/s3_limitations)".

**Quota Managed Kubernetes Service (MKS)** : Consultez la documentation officielle "[ETCD Quotas, usage, troubleshooting and error](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.