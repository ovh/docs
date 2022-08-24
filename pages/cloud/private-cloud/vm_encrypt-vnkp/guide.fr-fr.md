---
title: Activation du chiffrement des machines virtuelles avec vSphere Native Key Provider
slug: vm-encrypt-vnkp
excerpt: Découvrez comment mettre en œuvre le chiffrement de vos machines virtuelles avec vSphere Native Key Provider
section: Fonctionnalités VMware vSphere
order: 07
---

**Dernière mise à jour le 24/08/2022**

## Objectif


Ce guide a pour objectif d'expliquer les détails de la mise en œuvre de **vSphere Native Key Provider** pour ensuite effectuer un chiffrement d'une machine virtuelle dans l'offre d'**OVHcloud**, **Hosted Private Cloud powered by VMware**.

**Découvrez comment mettre en œuvre le chiffrement de vos machines virtuelles à l'aide de vSphere Native Key Provider.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Avoir souscrit une offre [Hosted Private Cloud powered by VMware](https://www.ovh.com/fr/private-cloud/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir accès à l’interface de gestion vSphere.
- La solution de réplication **Zerto** n'est pas compatible ce jour avec le chiffrement. Les VMs chiffrées ne pourront donc pas être répliquées.

## Présentation

**vSphere Native Key provider** permet de chiffrer les machines virtuelles, d'activer un vTPM dans les machines virtuelles ou d'activer le chiffrement "data-at-rest" sur vSAN, sans avoir besoin d'un serveur **KMS** (*Key Management Server*) externe.

Il est possible d'exporter la clé **vSphere Native Key provider** et de la réimporter sur un autre cluster.

Lorsque l'on chiffre une machine virtuelle l'hôte ESXi génère une clé **DEK**, cette clé servira à effectuer le chiffrement des fichiers composant la machine virtuelle et donc de ses données. La clé **DEK** est chiffrée à l'aide de clé générée par **vSphere Native Key provider**. Cette DEK chiffrée est stockée avec la machine virtuelle. Vous trouverez plus de détails sur le chiffrement **VMware** en consultant les documentations officielles dans la section « [Aller plus loin](#gofurther) » de ce guide.

## En pratique

### Autorisation d'un utilisateur à administrer le chiffrement sur un cluster Hosted Private Cloud powered by VMware 

Au travers de l'espace client OVHcloud cliquez sur `Hosted Private Cloud`{.action} dans la barre de menu horizontale en haut, ensuite à droite choisissez votre cluster sous `VMware`{.action}, Positionnez vous sur `Utilisateurs`{.action} et cliquez sur le bouton  `...`{.action}.

![00 add right from manager 01](images/00-add-right-from-manager01.png){.thumbnail}

Cliquez sur `Modifier`{.action}.

![00 add right from manager 02](images/00-add-right-from-manager02.png){.thumbnail}

Activez la `Gestion du chiffrement`{.action} et cliquez sur `Valider`{.action}.

![00 add right from manager 03](images/00-add-right-from-manager03.png){.thumbnail}

Attendez que la fenêtre de modification disparaisse.

![00 add right from manager 04](images/00-add-right-from-manager04.png){.thumbnail}

Les droits de gestion du chiffrement ont été modifiés comme on peut le voir dans la colonne `Gestion du chiffrement`.

![00 add right from manager 05](images/00-add-right-from-manager05.png){.thumbnail}

### Création d'une clé **vSphere Native Key Provider**

Nous allons créer la clé de chiffrement **vSphere Native Key Provider**. Cette clé pourra être utilisée pour chiffrer les clés **DEK** lors du chiffrement d'une machine virtuelle ou pour permettre l'ajout sur une machine virtuelle d'un périphérique virtuel **TPM 2.0**.

Connectez-vous à l'interface **vSphere** à l'aide de ce guide [Se connecter à l'interface vSphere](https://docs.ovh.com/fr/private-cloud/connexion-interface-vsphere/).

Cliquez en haut à gauche sur la racine du `cluster`{.action}, ensuite cliquez sur l'onglet `Configurer`{.action} et choisissez `Fournisseurs de clés`{.action}.

![01 Create KEY 01](images/01-create-key01.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} et choisissez dans le menu `Ajouter un fournisseur de clés natif`{.action}.

![01 Create KEY 02](images/01-create-key02.png){.thumbnail}

Saisissez un nom dans `Nom` et cliquez sur `AJOUTER UN FOURNISSEUR DE CLÉS`{.action}.

![01 Create KEY 03](images/01-create-key03.png){.thumbnail}

Cliquez sur le bouton `SAUVEGARDE`{.action} à gauche pour sauvegarder la clé en dehors du cluster.

![01 Create KEY 04](images/01-create-key04.png){.thumbnail}

Cliquez sur `La case à cocher`{.action} à gauche pour protéger la sauvegarde par un mot de passe.

![01 Create KEY 05](images/01-create-key05.png){.thumbnail}

Saisissez `le mot de passe` et `confirmez-le`, ensuite cochez la case `J'ai enregistré le mot de passe dans un lieu sûr`{.action} et cliquez sur `SAUVEGARDER LE FOURNISSEUR DE CLÉS`{.action}.

![01 Create KEY 06](images/01-create-key06.png){.thumbnail}

Il est possible maintenant d'utiliser la clé pour chiffrer des machines virtuelles ou d'ajouter un périphérique **TPM 2.0** à une machine virtuelle.

![01 Create KEY 07](images/01-create-key07.png){.thumbnail}

### Chiffrement d'une machine virtuelle

Nous allons chiffrer une machine virtuelle ainsi que sa donnée. 

> [!warning]
> L'opération de chiffrement d'une machine virtuelle ne peut se faire qu'avec la machine virtuelle éteinte
>

Faites un clic droit sur la `machine virtuelle`{.action} ensuite au travers du menu `Stratégies de VM`{.action} choisissez `Modifier les stratégies de stockage VM`{.action}.

![02 encrypt VM 01](images/02-encrypt-vm01.png){.thumbnail}

Choisissez dans Stratégies de stockage de VM `VM Encryption Policy`{.action} et cliquez sur `OK`{.action}.

![02 encrypt VM 02](images/02-encrypt-vm02.png){.thumbnail}

Dans les propriétés de la machine virtuelle cliquez sur l'onglet `Résumé`{.action}. Vous verrez apparaitre un `cadenas` suivi du texte `Chiffré avec un fournisseur de clés natif` qui indique que la machine virtuelle est chiffrée. 

![02 encrypt VM 03](images/02-encrypt-vm03.png){.thumbnail} 

### Migration d'une solution existante de chiffrement vers **vSphere Native Key provider**

Certains clients OVHcloud utilisent une solution de chiffrement avec des clés KMS externes, Il est possible de migrer le chiffrement vers **vSphere Native Key Provider**

Suivez les instructions ci-dessous pour migrer une machine virtuelle chiffrée avec une clés KMS Thalès nommée **cluster** vers une clé vSphere Native Key Provider portant le nom **MY-NKP**.

A partir de la console **vSphere** de votre cluster cliquez en haut à gauche sur la `racine du cluster`{.action}, allez en haut dans l'onglet `Configurer`{.action} cliquez `Fournisseurs de clés`{.action} dans la barre verticale, positionnez-vous sur la `clé vSphere Native Key provider`{.action} et cliquez sur `DÉFINIR COMME VALEUR PAR DÉFAUT`{.action}.

![03 migrate-from-kms-to-vnkp 01](images/03-migrate-from-kms-to-vnkp01.png){.thumbnail}

Cliquez sur `DÉFINIR COMME VALEUR PAR DÉFAUT`{.action}.

![03 migrate-from-kms-to-vnkp 02](images/03-migrate-from-kms-to-vnkp02.png){.thumbnail}

La clé **vSphere Native Key Provider** est définie par défaut.

![03 migrate-from-kms-to-vnkp 03](images/03-migrate-from-kms-to-vnkp03.png){.thumbnail}

Cliquez sur `la machine virtuelle`{.action} allez dans l'onglet `Résumé`{.action}. Cette machine virtuelle utilise le `fournisseur de clés standard`. Nous allons changer le chiffrement de cette machine virtuelle.

![03 migrate-from-kms-to-vnkp 04](images/03-migrate-from-kms-to-vnkp04.png){.thumbnail}

Au travers du client **vSphere** faites un clic droit sur `la machine virtuelle`{.action} qui doit être à nouveau chiffrée, ensuite au travers du menu dans `VM Policies`{.action} choisissez `Chiffrer à nouveau`{.action}.

> [!primary]
> L'opération liée au nouveau chiffrement peut se faire avec la machine virtuelle allumée, car uniquement la clé **DEK** est chiffrée à nouveau.
>

![03 migrate-from-kms-to-vnkp 05](images/03-migrate-from-kms-to-vnkp05.png){.thumbnail}

Le nouveau chiffrement s'effectue en quelques millisecondes car ce n'est que la clé **DEK** qui est à chiffrée à l'aide la nouvelle clé **vSphere Native Key Provider**.

![03 migrate-from-kms-to-vnkp 06](images/03-migrate-from-kms-to-vnkp06.png){.thumbnail}

Cliquez sur la `machine virtuelle`{.action} sur laquelle le chiffrement a été modifié, allez dans l'onglet `Résumé`{.action} vous pouvez constater que le chiffrement utilise un fournisseur de clés natif à coté du `cadenas`.

![03 migrate-from-kms-to-vnkp 07](images/03-migrate-from-kms-to-vnkp07.png){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Présentation VMware de vSphere Native Key Provider](https://core.vmware.com/native-key-provider)

[Documentation VMware du processus de chiffrement sur vSphere](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-4A8FA061-0F20-4338-914A-2B7A57051495.html#GUID-4A8FA061-0F20-4338-914A-2B7A57051495)

[Documentation VMware concernant vSphere Native Key Provider](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97.html#GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.


