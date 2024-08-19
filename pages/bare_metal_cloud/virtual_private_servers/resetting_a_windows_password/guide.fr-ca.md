---
title: Changer le mot de passe administrateur sur un serveur Windows
excerpt: "Découvrez comment réinitialiser le mot de passe de votre compte Administrateur Windows sur un VPS ou une instance Public Cloud grâce au mode Rescue d'OVHcloud"
updated: 2023-10-12
---

## Objectif

Lors de l'installation ou réinstallation d'un système d'exploitation Windows Server, un mot de passe administrateur vous est fourni (compte *Administrator*).

Si vous avez perdu votre mot de passe administrateur, vous pouvez le réinitialiser via le mode rescue d'OVHcloud.

**Découvrez comment réinitialiser le mot de passe du compte administrateur d'un système d'exploitation Windows Server via le mode rescue OVHcloud.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou d'une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Étape 1 : redémarrer le serveur en mode rescue

Le mode rescue doit être activé pour que le mot de passe admininistrateur puisse être modifié.

Consultez le guide correspondant à votre service pour le redémarrer en mode rescue :

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Étape 2 : monter la partition système

Connectez-vous à votre serveur via SSH. (Consultez notre [guide d'introduction SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) si nécessaire.)

Vous pouvez également ouvrir une connexion au serveur en utilisant [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) ou la [console VNC (instance Public Cloud)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Tapez les commandes suivantes pour monter le système de fichiers Windows :

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Étape 3 : effacer le mot de passe actuel

Dans cette étape, le fichier *SAM* est modifié à l'aide d'un outil en mode rescue. Listez les utilisateurs Windows avec cette commande :

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Dans cet exemple de sortie, `Administrator` est le compte d'administrateur local. Démarrez la procédure de réinitialisation avec la commande suivante. (Utilisez `admin` si `Administrator` n'existe pas.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Tapez « 1 » et appuyez sur « Entrée ». (Utilisez d'abord l'option 2 s'il y a un « X » à côté de « Désactivé ».)

```text
Select: [q] > 1
Password cleared!
```

Tapez « q » et appuyez sur « Entrée » pour quitter l'outil. Tapez « y » lorsque vous y êtes invité et appuyez sur « Entrée ».

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Étape 4 : redémarrer le serveur

Vous pouvez maintenant quitter le mode rescue et redémarrer le serveur. Le cas échéant, aidez-vous du guide correspondant à votre service :

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Étape 5 : définir un nouveau mot de passe (KVM / VNC)

> [!warning]
>
> N'ignorez pas cette étape. Un compte Administrateur non protégé représente un risque de sécurité important.
>

Connectez-vous à votre serveur et entrez `cmd` dans la barre de recherche pour ouvrir l'invite de commandes.

Définissez le mot de passe de l'utilisateur actuel (« Administrator ») :

```powershell
net user Administrator *
```

![administratorpw](images/adminpw_win.png){.thumbnail}

Vous pouvez maintenant vous connecter en tant qu'« Administrator » avec ce nouveau mot de passe.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
