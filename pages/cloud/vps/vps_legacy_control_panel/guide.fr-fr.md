---
title: "Gérer un VPS legacy"
excerpt: "Apprenez à administrer un VPS d'une ancienne gamme depuis votre espace client OVHcloud"
updated: 2023-06-29
---

## Objectif

Vous pouvez identifier si un VPS est issu d'une ancienne gamme grâce au nom de référence affiché dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) : si cette référence interne est au format *vpsXXXX.ovh.net* (où *X* représente un chiffre) et que vous n’avez pas migré le VPS correspondant vers [notre gamme actuelle de produits](https://www.ovhcloud.com/fr/vps/), il s’agit d’un VPS *legacy*. 

La référence d'un VPS de gamme actuelle se présente de cette façon : *vps-XXXXXXX.vps.ovh.net* (où *X* peut être un chiffre ou une lettre).

Un VPS *legacy* implique quelques différences en termes de gestion.

**Ce guide vous détaille les fonctionnalités de l'espace client OVHcloud dédiées à la gestion d'un VPS *legacy*.**

## Prérequis

- Un [VPS](https://www.ovhcloud.com/fr/vps/) *legacy* dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ouvrez l'onglet `Bare Metal Cloud`{.action} et sélectionnez votre serveur parmi les `Serveur privés virtuels`{.action}.

Dans l'onglet `Accueil`{.action} vous pouvez accéder aux opérations principales du VPS depuis la section **Raccourcis**.

![controlpanel](images/legacy_vps_1.png){.thumbnail}

### Supprimer mon VPS

Cette option ouvrira une fenêtre contextuelle pour initier le processus de [résiliation de votre service](/pages/account/billing/how_to_cancel_services).

### Redémarrer en mode rescue

Cliquez sur cette option pour redémarrer le VPS en mode rescue. Retrouvez tous les détails dans [notre guide](/pages/cloud/vps/rescue).

### Redémarrer mon VPS

Cette option de l'espace client effectuera un *hard reboot* de votre VPS si vous cliquez sur `Confirmer`{.action} dans la fenêtre qui apparaît.

Un redémarrage peut s'avérer nécessaire pour appliquer des mises à jour de configurations ou pour résoudre un problème. Dans la mesure du possible, réalisez plutôt un *soft reboot* en ligne de commande :

```bash
sudo reboot
```

### Réinstaller mon VPS

Cliquez sur cette option pour installer un nouveau système d'exploitation. Dans la fenêtre qui apparaît, il vous sera demandé de choisir :

- un système d'exploitation parmi ceux proposés ;
- la langue ;
- une [clé SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (facultatif)

Le choix des systèmes d’exploitation peut être restreint sur votre service.

> [!primary]
>
> Certains systèmes d’exploitation propriétaires ou certaines plateformes comme Plesk ou cPanel nécessitent des licences qui génèrent des frais supplémentaires. Les licences peuvent être gérées depuis l'espace client : rendez-vous dans la section `Bare Metal Cloud`{.action} puis ouvrez `Licences`{.action}.

Vous recevrez un e-mail dès que l'installation sera terminée. Ce processus peut prendre jusqu'à 30 minutes.

#### Connexion à votre VPS après réinstallation

Lors de la réinstallation de votre VPS, un e-mail contenant votre mot de passe root vous sera envoyé pour vous connecter à votre VPS en [SSH](/pages/cloud/dedicated/ssh_introduction), sauf si vous avez sélectionné une [clé SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) à préinstaller.

#### Désactivation de l'accès au serveur pour l'utilisateur root

L'utilisateur « **root** » est créé par défaut sur les systèmes GNU/Linux. Il s'agit du niveau d'accès le plus élevé à un système d'exploitation. Il peut être dangereux de laisser votre VPS accessible via l'utilisateur root et son mot de passe, car ce compte peut effectuer des opérations irréversiblement dommageables.

Il est possible de désactiver les connexions d'utilisateurs root via le protocole SSH. Pensez à [créer un autre utilisateur](/pages/cloud/vps/secure_your_vps#createuser) avant de poursuivre les étapes ci-dessous.

Utilisez un éditeur de texte tel que *vim* ou *nano* pour éditer ce fichier de configuration :

```bash
sudo nano /etc/ssh/sshd_config
```

Repérez la ligne suivante :

```console
PermitRootLogin yes 
```

Remplacez **yes** par **no** après `PermitRootLogin`. Enregistrez et quittez l'éditeur.

Pour que cette modification soit prise en compte, vous devez redémarrer le service SSH avec l'une des commandes suivantes :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Cela devrait être suffisant pour appliquer les changements. Dans le cas contraire, redémarrez le VPS (`~$ sudo reboot`).

Par la suite, les connexions à votre serveur via l'utilisateur root (`ssh root@IPv4_VPS`) seront rejetées.

### KVM

Utilisez cette option pour vous connecter à votre VPS via KVM. Retrouvez tous les détails dans [notre guide](/pages/cloud/vps/using_kvm_for_vps).

### Changer le propriétaire

Ce lien vous dirige vers le formulaire à remplir en cas de changement de propriétaire d'un VPS. Si vous avez besoin d'aide pour effectuer cette procédure, contactez nos équipes du support en créant un ticket dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

### Migrer vers la nouvelle gamme

Votre VPS peut être migré automatiquement vers la gamme actuelle. Découvrez les avantages de cette offre dans [notre FAQ dédiée à la migration de VPS](https://www.ovhcloud.com/fr/vps/vps-offer-migration/).

## Aller plus loin

[Introduction au SSH](/pages/cloud/dedicated/ssh_introduction)

[Création et utilisation de clés SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated)

[Sécuriser un VPS](/pages/cloud/vps/secure_your_vps)

[Configurer une nouvelle installation de Windows Server](/pages/cloud/vps/windows_first_config)

[Débuter avec un VPS](/pages/cloud/vps/starting_with_a_vps)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
