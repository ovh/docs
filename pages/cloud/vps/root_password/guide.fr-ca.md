---
title: Changer le  mot de passe root sur un VPS
slug: root-password
excerpt: Découvrez ici comment modifier le mot de passe root d’un VPS
section: Diagnostic et mode Rescue
---


**Dernière mise à jour le 10 novembre 2020**

## Objectif

Il peut être nécessaire de modifier le mot de passe root sur votre système d'exploitation Linux. Il existe deux scénarios possibles:

- Vous pouvez toujours vous connecter via SSH
- Vous ne pouvez pas vous connecter via SSH car vous avez perdu votre mot de passe

**Ce guide explique comment modifier votre mot de passe administrateur en fonction de ces deux situations.**

## Prérequis

- Avoir votre [VPS OVHcloud](https://www.ovhcloud.com/fr-ca/vps/){.external} déjà configuré
- Disposer des identifiants de connexion reçus par e-mail après l'installation (s'ils sont toujours valides)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} (pour utiliser le mode rescue)

> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 

## En pratique

### Modification du mot de passe si vous avez toujours un accès (sudo ou root)

> [!primary]
>
> Pour plus d'informations sur la connexion à votre VPS, consultez notre guide [Débuter avec un VPS](../debuter-avec-vps/).
>

Connectez-vous à votre VPS via SSH. Basculez vers l'utilisateur root, si nécessaire :

```sh
~$ sudo su -
~#
```

Modifiez le mot de passe de l'utilisateur actuel :

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Sur une distribution Linux, le mot de passe que vous tapez **n'apparaîtra pas**.
>

Si vous devez autoriser la connexion en tant qu'utilisateur root, suivez les étapes de [cette section](./#activer-le-mot-de-passe-root_1).

### Modification du mot de passe si vous l'avez perdu

<iframe width="560" height="315" src="https://www.youtube.com/embed/b736xXk06AM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 

#### Étape 1 : Redémarrez le VPS en mode rescue.

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et redémarrez le VPS en mode rescue. Si vous avez besoin d'instructions supplémentaires sur l'utilisation du mode rescue avec un VPS, consultez le [guide du mode rescue](../mode-rescue-vps/).

#### Étape 2 : Identifier le point de montage

Sur les anciennes gammes de VPS, vos partitions seront automatiquement montées en mode rescue. Vous pouvez utiliser les commandes suivantes pour identifier le point de montage de votre partition :

##### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

L'exemple obtenu ci-dessus montre que la partition système est montée sur **/mnt/sdb1**.

Si votre VPS est récent, la colonne `MOUNTPOINT` devrait être vide. Dans ce cas, montez d'abord la partition :

```sh
~$ mkdir -p /mnt/sdb1
~$ mount /dev/sdb1 /mnt/sdb1
```

#### Étape 3 : autorisations CHROOT

Vous devez maintenant modifier le répertoire racine pour appliquer les modifications à votre système. Pour ce faire, utilisez la commande `chroot` :

```sh
~$ chroot /mnt/sdb1/
```

Vous pouvez procéder à une vérification en tapant la commande `ls -l`, qui répertorie le contenu stocké dans le répertoire courant de votre système :

```sh
~$ ls -l
```

#### Étape 4 : Modifier le mot de passe (root)

Dans la dernière étape, modifiez votre mot de passe à l'aide de la commande `passwd`.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Si votre VPS est de dernière génération (son nom est alors : *vps-XXXXXXX.vps.ovh.net*), vous avez initialement reçu des identifiants de connexion pour un utilisateur disposant de droits importants, au lieu du compte « root » par défaut. En outre, le service SSH n'accepte pas les demandes de connexion en tant que root.

Il est donc nécessaire d'entrer le nom d'utilisateur que vous utilisez pour vous connecter après `passwd` :

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

Vous pourrez ainsi vous reconnecter avec ce nom d'utilisateur après le redémarrage, au cas où la connexion root serait désactivée.

Enfin, redémarrez votre VPS sur son disque depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).


### Activer le mot de passe root

Si votre VPS est de dernière génération (son nom est alors : *vps-XXXXXXX.vps.ovh.net*), vous avez reçu des identifiants de connexion pour un utilisateur disposant de droits importants, au lieu du compte « root » par défaut. En outre, le service SSH n'accepte pas les demandes de connexion en tant que root.

> [!warning]
>
> Activer le mot de passe root est généralement considéré comme une vulnérabilité de sécurité et n'est donc pas recommandé.
>
> Nous vous recommandons de prendre d'abord des mesures pour sécuriser votre VPS. Vous pouvez vous reporter à notre guide sur la [sécurisation d'un VPS](../conseils-securisation-vps/).
>

#### Étape 1 : Modifier le fichier sshd_config

Utilisez un éditeur de texte tel que vim ou nano pour modifier ce fichier de configuration :

```sh
~$ nano /etc/ssh/sshd_config
```

Ajoutez la ligne suivante.

```sh
PermitRootLogin yes
```

Recherchez cette ligne et assurez-vous qu'elle est commentée :

```sh
#PermitRootLogin prohibit-password
```

Enregistrez le fichier et quittez l'éditeur.

#### Étape 2 : Redémarrer le service SSH

```sh
~$ systemctl restart sshd
```

Cela devrait suffire pour appliquer les modifications. Vous pouvez également redémarrer le VPS (```~$ reboot```).

### Dysfonctionnement

Si vous rencontrez des problèmes de démarrage après avoir modifié votre mot de passe et lancé le redémarrage :

- Consultez le KVM pour savoir pourquoi le VPS ne peut pas démarrer. Consultez le [guide KVM](../utilisation-kvm-sur-vps/) pour obtenir de l'aide sur l'utilisation de cette fonctionnalité dans l'espace client OVHcloud.
- Si le KVM affiche le démarrage du VPS ou s'il ne parvient pas à trouver le disque, assurez-vous que le [bootlog est activé](../affichage-bootlog-dans-kvm/). Transmettez les logs pertinents à nos équipes de support en créant une demande de support dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) pour plus d'informations.

## Allez plus loin

[Introduction au SSH](../../dedicated/ssh-introduction/)

[Sécuriser un VPS](../conseils-securisation-vps/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
