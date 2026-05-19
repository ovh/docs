---
title: 'Augmenter les quotas Public Cloud'
excerpt: "Découvrez comment demander une augmentation de quota pour vos ressources Public Cloud (RAM, CPU, espace disque, instances) directement depuis votre espace client OVHcloud."
updated: 2026-05-05
---

## Objectif

Par défaut, le nombre de ressources (RAM, CPU, espace disque, nombre d'instances, etc.) et de projets que vous pouvez créer est limité pour des raisons de sécurité.

Si vous souhaitez en créer davantage, une augmentation de quota est alors nécessaire.

**Découvrez comment demander et augmenter un quota Public Cloud dans votre espace client OVHcloud.**

## Prérequis

- [Disposer d'un moyen de paiement valide](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) dans votre espace client OVHcloud

## En pratique

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

Dans le menu de gauche, cliquez sur `Quota & Régions`{.action} sous **Paramètres**.

![Page Quota & Régions affichant les quotas actuels du projet par région](images/raisepciquota1.png){.thumbnail}

Cette page présente un récapitulatif des quotas actuels de votre projet par région. Un avertissement apparaît dès qu'une ressource atteint 80 % de son quota.

### Augmenter votre quota de ressources

En accord avec des critères internes (ancienneté, existence de factures acquittées, etc.), vous pouvez demander des augmentations de quota pour vos projets Public Cloud directement depuis votre espace client OVHcloud.

> [!primary]
>
> Les nouveaux utilisateurs Public Cloud bénéficient de [270 $ de crédit offert](/links/public-cloud/free-trial) activé automatiquement à la création du projet, valable un mois. L'éligibilité à l'augmentation de quota dépend de critères tels que l'ancienneté du compte et l'existence de factures acquittées. Les utilisateurs en période d'essai peuvent donc avoir des options d'augmentation de quota limitées tant que leur première facture n'a pas été réglée.
>

Vous pouvez augmenter votre quota de ressources manuellement ou automatiquement.

#### Augmenter automatiquement votre quota de ressources avec la fonctionnalité « Quota autoscaling »

Cette option vous permet de demander une augmentation automatique et progressive de votre quota de ressources. Le quota sera ajusté en fonction de votre utilisation réelle **si vous dépassez 60 % de votre quota actuel pendant 30 jours consécutifs**, ainsi que selon un ensemble de critères internes et financiers.

> [!primary]
>
> Ce processus n’est pas adapté pour des augmentations rapides de quota.
>

En haut à droite de la page, l’option **Quota autoscaling** est disponible :

- Pour en savoir plus sur cette fonctionnalité, cliquez sur le `?`{.action} à côté de cette option.
- Activez l’option en cliquant sur le bouton situé à droite de cette dernière. Son état passera de *Désactivé* à *Activé*.

![Bouton de bascule Auto-scaling quota réglé sur Activé](images/autoscaling.png){.thumbnail}

Une fois activé, l’auto-scaling augmente progressivement le quota de votre projet en fonction de vos besoins réels.

#### Augmenter manuellement votre quota de ressources

> [!primary]
>
> Si vous avez besoin d'augmenter votre quota et que le bouton `Augmenter mes quotas`{.action} n'est pas disponible dans votre espace client, cliquez sur le bouton `Contacter le support`{.action}.
>

![Bouton Contacter le support visible sur la page des quotas de l'espace client](images/contact_support_quota.png){.thumbnail}

Cette procédure permet une augmentation rapide et importante de vos quotas (par exemple : scaling rapide, instances GPU, etc.). Cette méthode repose sur l'achat immédiat d'un crédit, dont toutes les consommations cloud seront automatiquement déduites.

Vous pouvez acheter différents montants de crédit.

Cliquez sur le bouton `Augmenter mes quotas`{.action}.

![Bouton Augmenter mon quota dans la section des quotas Public Cloud](images/raisepciquota2.png){.thumbnail}

Cliquez ensuite sur la flèche déroulante à côté de `Sélectionnez le volume`{.action} pour afficher la liste des quotas disponibles. Cette section indique également le montant à payer pour bénéficier de ces ressources.

![Liste déroulante affichant les niveaux de quota disponibles avec les coûts associés](images/selectquotas.png){.thumbnail}

Le tableau ci-dessous présente les ressources obtenues pour chaque quota :

|Quota|Instances|CPU/Cores|RAM (Go)|Taille des volumes (To)|Volumes (nombre maximum)|Sauvegardes|Taille des sauvegardes (To)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
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

Pour une vue plus détaillée de vos ressources, accédez à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/). Une fois connecté, cliquez sur `Projet`{.action}, puis sur `Présentation`{.action}.

### Augmenter le quota de vos projets Public Cloud

Il existe deux situations principales où vous pourriez avoir besoin d’un ajustement de quota :

1. **Nombre maximum de projets atteint** : si vous avez atteint le nombre maximum de projets Public Cloud autorisés dans votre espace client et que vous souhaitez en créer de nouveaux, vous devez soumettre une demande auprès de notre équipe support.

2. **Autres types de demandes de quota** : pour toute autre limite (CPU, RAM, stockage, etc.) ou besoin spécifique concernant vos projets Public Cloud, vous pouvez également contacter le support pour demander une augmentation.

> [!primary]
>
> Les demandes de quota sont traitées manuellement par notre équipe. Le délai de traitement peut varier selon la complexité de la demande. Nous vous recommandons de soumettre votre demande dès que possible pour éviter tout blocage dans vos projets.

Pour accélérer le traitement, merci de préciser dans votre demande :

- le type de quota à augmenter (nombre de projets, ressources, etc.) ;
- l’usage prévu et la justification du besoin ;
- la période ou la durée souhaitée pour l’augmentation.

### Quotas spécifiques et ressources particulières

Pour certaines ressources ou services, des quotas spécifiques peuvent s’appliquer. Pour plus d’informations :

**Quota S3**<sup>1</sup> : consultez la documentation officielle « [Object Storage - Limites techniques](/pages/storage_and_backup/object_storage/s3_limitations) ».

**Quota Managed Kubernetes Service (MKS)** : consultez la documentation officielle « [Quotas ETCD, utilisation, dépannage et erreurs (EN)](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error) ».

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.