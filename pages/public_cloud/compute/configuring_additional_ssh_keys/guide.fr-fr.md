---
title: Comment configurer des clés SSH supplémentaires sur une instance
excerpt: "Découvrez comment configurer des clés SSH supplémentaires pour les comptes utilisateurs et les ajouter à votre instance Public Cloud"
updated: 2024-09-09
---

## Objectif

Lors de la création d'une instance dans votre espace client, vous ne pouvez ajouter qu'une seule clé SSH pour le compte utilisateur préconfiguré. Afin de vous connecter à votre instance avec d'autres comptes utilisateurs, vous pouvez créer plus de clés et les ajouter à l'instance en quelques étapes.

**Ce guide vous explique comment configurer des clés SSH supplémentaires pour les connexions à votre instance.**

> [!warning]
> OVHcloud fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter [notre communauté](/links/community) si vous rencontrez des problèmes.
>

## Prérequis

- Une [instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- [Accès administratif à votre instance via SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux)

## En pratique

> [!primary]
>
> Nous prenons actuellement en charge les formats de clé SSH suivants : **RSA**, **ECDSA** et **ED25519**.
>
> Notez que les instructions ci-dessous sont destinées à une utilisation générale et sont basées sur un système d’exploitation de serveur Ubuntu. Certaines commandes peuvent nécessiter une personnalisation en fonction de la distribution ou du système d'exploitation que vous utilisez.
>

### Étape 1 : créer une nouvelle paire de clés SSH

Si nécessaire, utilisez notre [guide sur les clés SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) pour créer une nouvelle paire de clés SSH.  
Vous y trouverez également des informations sur [la gestion de plusieurs clés](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) sur votre poste de travail local si votre installation l'exige.

### Étape 2 : configurer un nouveau compte utilisateur

[Connectez-vous à votre instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) et utilisez les commandes ci-dessous pour créer un nouveau compte utilisateur et un dossier `.ssh` :

```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
		Full Name []:
		Room Number []:
		Work Phone []: 
		Home Phone []: 
		Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Sans autres étapes, le compte utilisateur `user2` de cet exemple n'a pas d'autorisations élevées. Si vous devez accorder à ce compte des `privileges root` sur votre instance, ajoutez-le au `sudo group` :

```bash
sudo usermod -aG sudo user2
```

Vous pouvez en savoir plus sur les autorisations des utilisateurs et les rubriques connexes dans notre [guide du compte utilisateur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Étape 3 : ajouter la clé publique SSH à votre instance

#### Transfert de clés publiques créées sur des systèmes basés sur GNU/Linux, macOS ou BSD

Si vous avez créé vos paires de clés SSH sur un système basé sur GNU/Linux, macOS ou BSD, vous pouvez utiliser la commande `ssh-copy-id` pour ajouter les clés publiques à votre serveur.

L'utilitaire `ssh-copy-id` copie les clés publiques dans le fichier `~/.ssh/authorized_keys` sur le serveur distant spécifié et crée automatiquement le fichier dans ce répertoire si nécessaire.

```bash
ssh-copy-id username@IP_ADDRESS
```

Par défaut, `ssh-copy-id` tentera de transférer **toutes** les clés publiques dans le répertoire `~/.ssh` de votre utilisateur local. Afin d'ajouter une seule clé publique, vous pouvez spécifier ce fichier de clé avec l'option `-i` suivie du chemin d'accès au fichier :

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Exemple :

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

Le mot de passe de l'utilisateur vous sera demandé. En cas de succès, vous recevrez un message similaire à celui-ci :

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Si vous recevez un message d'erreur à la place, vous pouvez toujours ajouter vos clés publiques manuellement en suivant les étapes décrites ci-dessous.

> [!primary]
>
> Pour des raisons de sécurité et de bonnes pratiques, une paire de clés ne doit pas être utilisée par plusieurs utilisateurs. Puisque chaque utilisateur sur les systèmes GNU/Linux a son propre fichier `authorized_keys` dans `~/.ssh/`, vous pouvez utiliser la commande `ssh-copy-id` comme indiqué ci-dessus et adapter `KeyFileName` et `user` après avoir [créé la paire de clés](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Ajout manuel de clés publiques à l'instance

[Connectez-vous à votre instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) et ouvrez, avec votre éditeur de texte préféré (`nano` est utilisé dans cet exemple), le fichier `authorized_keys` dans le dossier personnel du nouvel utilisateur :

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Collez la **chaîne de clé publique** dans ce fichier. Enregistrez le fichier et quittez l'éditeur.

Redémarrez votre instance (`sudo reboot`) ou redémarrez uniquement le service OpenSSH avec l'une des commandes suivantes (la commande appropriée peut varier en fonction de votre système d'exploitation) :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Le nouvel utilisateur peut maintenant se connecter à l'instance à partir du périphérique qui stocke la clé SSH privée correspondante :

```bash
ssh username@IP_ADDRESS
```

Exemple :

```bash
ssh user2@203.0.113.102
```

Consultez le [guide sur les clés SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) pour en savoir plus sur l'utilisation des clés SSH avec les instances Public Cloud.

## Aller plus loin

[Comment créer des instances Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Comment remplacer une paire de clés SSH sur une instance Public Cloud par le mode rescue](/pages/public_cloud/compute/replacing_lost_ssh_key)

Échangez avec notre [communauté d'utilisateurs](/links/community).