---
title: "Gérer un VPS legacy"
excerpt: "Apprenez à administrer un VPS d'une ancienne gamme dans votre espace client"
updated: 2023-06-27
---

## Objectif

Vous pouvez identifier un VPS de l'ancienne gamme grâce au nom de référence affiché dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) : Si cet identifiant interne est au format *vpsXXXX.ovh.net* (où *X* représente un chiffre) et que vous n’avez pas migré le VPS correspondant vers [notre gamme de produits actuelle](https://www.ovhcloud.com/fr/vps/), il s’agit d’un VPS legacy. Il y a quelques différences à considérer dans la gestion d'un tel service.

Le nom de référence d'un VPS actuel se présente de cette façon : *vps-XXXXXXX.vps.ovh.net* (où *X* peut être un chiffre ou une lettre).

**Ce guide vous explique les fonctions de l'ancien VPS pour votre espace client.**


## Prérequis

- Un ancien [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)


## Instructions

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), ouvrez `Bare Metal Cloud`{.action} et sélectionnez votre serveur parmi les `Serveur privés virtuels`{.action}. Dans l'onglet `Accueil`{.action} vous pouvez accéder aux opérations principales du VPS depuis la section **Raccourcis**.

![controlpanel](images/legacy_vps_1.png){.thumbnail}

### Supprimer mon VPS

Cela ouvrira une fenêtre contextuelle pour initier le processus de [résiliation de votre service](/pages/account/billing/how_to_cancel_services).

### Redémarrer en mode rescue

Cliquez sur cette option pour redémarrer le VPS en mode rescue. Retrouvez tous les détails dans [notre guide](/pages/cloud/vps/rescue).

### Redémarrer mon VPS

Cette option de l'Espace Client effectuera un "hard reboot" de votre VPS si vous cliquez sur `Confirmer`{.action} dans la fenêtre qui apparaît.

Un redémarrage peut s'avérer nécessaire pour appliquer des configurations mises à jour ou résoudre un problème. Dans la mesure du possible, réalisez un "soft reboot" en ligne de commande :

```bash
sudo reboot
```

### Réinstaller mon VPS

Cliquez sur cette option pour installer un nouveau système d'exploitation. Dans la fenêtre qui apparaît, il vous sera demandé de choisir :

- Un système d'exploitation parmi ceux proposés ;
- la langue ;
- Une [clé SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (facultatif)

Notez que le choix des systèmes d’exploitation peut être limité sur votre service.


> [!primary]
>
> Certains systèmes d’exploitation propriétaires ou certaines plateformes comme Plesk ou cPanel nécessitent des licences qui génèrent des frais supplémentaires. Les licences peuvent être gérées depuis l'espace client : Rendez-vous dans la section `Bare Metal Cloud`{.action} puis ouvrez `Licences`{.action}.

Vous recevrez un e-mail dès que l'installation sera terminée. Ce processus peut prendre jusqu'à 30 minutes.

#### Connexion à votre VPS après réinstallation

Lors de la réinstallation de votre VPS, un e-mail contenant votre mot de passe root vous sera envoyé pour vous connecter à votre VPS en [SSH](/pages/cloud/dedicated/ssh_introduction), sauf si vous avez sélectionné une [clé SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) à préinstaller.


#### Désactivation de l'accès au serveur pour l'utilisateur root

L'utilisateur "**root**" est créé par défaut sur les systèmes GNU/Linux. Il s'agit du niveau d'accès le plus élevé à un système d'exploitation. Il peut être dangereux de laisser votre VPS accessible via l'identifiant root et son mot de passe, car ce compte peut effectuer des opérations irréversiblement dommageables.

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

Cela devrait être suffisant pour appliquer les changements. Sinon, redémarrez le VPS (`~$ sudo reboot`).

Par la suite, les connexions à votre serveur via l'utilisateur root (`ssh root@IPv4_VPS`) seront rejetées.


### KVM

Utilisez cette option pour vous connecter à votre VPS via KVM. Retrouvez tous les détails dans [notre guide](pages/cloud/vps/using_kvm_for_vps).

### Changer le propriétaire

Ce lien vous dirige vers le formulaire à remplir en cas de changement de propriétaire d'un VPS. Contactez nos équipes d'assistance en créant un ticket dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) si vous avez besoin d'aide pour effectuer cette procédure.

### Migrer vers la nouvelle gamme

Votre VPS peut être migré automatiquement vers la gamme actuelle. Découvrez les avantages de cette offre sur [notre page FAQ VPS migration](https://www.ovhcloud.com/fr/vps/vps-offer-migration/).



## Aller plus loin

[Introduction au SSH](/pages/cloud/dedicated/ssh_introduction)

[Création et utilisation de clés SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated)

[Sécuriser un VPS](/pages/cloud/vps/secure_your_vps)

[Configurer une nouvelle installation de Windows Server ](https://docs.ovh.com/gb/en/vps/windows-first-config/)

[Débuter avec un VPS](/pages/cloud/vps/starting_with_a_vps)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
