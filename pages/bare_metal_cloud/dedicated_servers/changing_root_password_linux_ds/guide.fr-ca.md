---
title: "Configuration des comptes utilisateurs et de l'accès root sur un serveur"
excerpt: "Découvrez comment bien débuter dans l'administration de comptes utilisateurs sur un système d'exploitation GNU/Linux"
updated: 2024-02-19
---

## Objectif

Un serveur dédié ou un VPS OVHcloud vous font bénéficier d’un « **accès root** » à votre service. En termes simples, cela signifie que vous êtes l'administrateur du système et que vous disposez du niveau d'autorisation le plus élevé.

Même si le serveur n’est pas utilisé à des fins nécessitant l’administration d’utilisateurs réels, la gestion des **comptes utilisateurs** est un sujet lié à la sécurité qu’il ne faut pas sous-estimer. Ce guide fournit des conseils de base pour débuter sur les sujets suivants :

- Comment configurer des comptes utilisateurs système avec différents niveaux d'autorisation
- Les bonnes pratiques pour gérer l'accès à votre serveur et exécuter des commandes avec des droits élevés


## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) ou un [VPS](https://www.ovhcloud.com/fr-ca/vps/) avec un système d'exploitation Linux dans votre compte OVHcloud
- Disposer des identifiants de connexion reçus par e-mail suite à l'installation.

## En pratique

Les exemples suivants supposent que vous êtes connecté à votre serveur via SSH.<br>
Pour des instructions plus détaillées sur ce sujet, veuillez consulter notre guide « [Premiers pas avec SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) ».

N'oubliez pas de consulter également nos guides de premiers pas :

- Pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Pour un [serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Pour un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) ou de contacter [notre communauté](https://community.ovh.com/) si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

> [!primary]
>
> Les instructions de ce guide sont basées sur un système d’exploitation de serveur Debian/Ubuntu et ne sont pas exhaustives. Les exemples ci-dessous sont destinés à fournir un point de départ et à aider à prévenir les failles de sécurité facilement exploitables. Avec des connaissance de base de la gestion des comptes utilisateurs et des bonnes pratiques associées, vous pouvez aller plus loin avec les rubriques les plus pertinentes pour votre cas d’utilisation.
>
> Nous vous recommandons de consulter les **pages du manuel du système** pour chaque commande que vous utilisez. Vous pouvez le faire à partir de la ligne de commande en entrant `man` suivi d'un nom de commande, de fonction ou de fichier système.
>

### Sommaire

- [Gestion des comptes utilisateurs](#accounts)
    - [Création d’un compte utilisateur non privilégié](#unprivileged)
    - [Création d’un compte utilisateur avec les privilèges root](#privileged)
    - [Exécution de commandes en tant qu'administrateur (« sudo »)](#sudo)
    - [Désactivation du compte utilisateur](#disable)
    - [Activation du compte utilisateur](#enable)
    - [Suppression d’un compte utilisateur](#delete)
    - [Changement de compte utilisateur](#switch)
    - [Basculer vers le compte « root » (« root shell »)](#rootshell)
- [Activation de la connexion de l'utilisateur « root »](#enableroot)
    - [Activer le compte « root »](#rootstep1)
    - [Editer le fichier « sshd_config »](#rootstep2)
    - [Restarting the SSH service](#rootstep3)


<a name="accounts"></a>

### Gestion des comptes utilisateurs

Prenez en compte que les politiques de sécurité des serveurs peuvent être adaptées à différents cas d’utilisation et environnements utilisateur. Les étapes décrites ci-dessous offrent des explications de base sur la gestion des comptes d'utilisateurs en mettant l'accent sur la commodité et la sécurité, elle n'ont pas valeur de validité universelle.

Après une nouvelle installation de votre serveur (avec un template OVHcloud), vous débutez dans ces conditions :

- Un compte utilisateur avec des autorisations élevées est créé et nommé d'après le système d'exploitation, par exemple « ubuntu », « rocky », etc.
- Vous avez reçu le mot de passe initial de ce compte avec l'e-mail d'installation.
- Vous pouvez utiliser un client SSH pour vous connecter au serveur avec ces informations d'identification.

L'invite de commande après la connexion diffère selon votre type de service et la distribution installée. Par exemple : 

```text
ubuntu@ns9356771:~$
```

Veuillez noter que les exemples de ligne de commande suivants continueront à utiliser « ubuntu » pour faire référence au `user account` préconfiguré.

Vous pouvez vérifier que ce compte est déjà ajouté au `sudo group` dans la sortie de cette commande :

```bash
id
```

```text
27(sudo)
```

Vous pouvez également entrer `groups` pour voir uniquement les groupes dont le compte d'utilisateur actuel est membre.

Cela signifie que l'utilisateur avec lequel vous êtes actuellement connecté peut exécuter toutes les commandes en les faisant précéder de la commande `sudo` (`root privileges`). Vous trouverez des informations plus détaillées dans la [sous-partie de guide correspondante, ci-dessous](#sudo).

> [!primary]
> 
> **Définition des termes**
> 
> Pour les besoins de ce guide, les définitions suivantes s’appliquent :
> 
> - `administrator` : personne autorisée à exécuter toutes les commandes sur un serveur (administrateur du serveur).
> - `sudo user` : compte utilisateur utilisé par un administrateur. Ce compte est membre du `sudo group`. D'autres ressources de connaissances et tutoriels peuvent donner une étiquette différente à un tel utilisateur, par exemple `sudoer`, `superuser`, `root user`, `admin`, etc.
> - `sudo group` : le `user group` avec les autorisations nécessaires pour exécuter toutes les commandes sur un serveur (`root privileges`, dont les détails sont définis par la politique de sécurité du système d'exploitation).
> - `user group` / `group` : entité technique compartimentant les `user account` pour la gestion de la sécurité.
> - `root` / `root user` / `root account` : compte utilisateur avec `root privileges` existant par défaut sur les systèmes GNU/Linux et utilisé à des fins spécifiques.
>
> Pour connaître les détails et les paramètres qui s'appliquent à votre système, vous pouvez commencer par les pages `man` pour `sudo` et `sudoers`.
>

<a name="unprivileged"></a>

#### Création d’un compte utilisateur non privilégié

Même si vous n'avez pas besoin d'accorder l'accès à votre serveur à d'autres personnes, la création d'un compte utilisateur sans autorisations spéciales (aussi appelé `normal user` ou `regular user`) peut être utile à des fins de sécurité. Par exemple, il n'y a aucun risque d'endommager accidentellement le système en supprimant ou en modifiant les fichiers de configuration du serveur lors de l'exécution de commandes ou de processus à partir d'un compte utilisateur sans autorisations élevées.

Un autre exemple de bonne pratique consiste à créer un compte utilisateur dédié à une application hébergée sur votre serveur. Même si ce compte utilisateur est compromis par cette application, l'absence d'autorisations élevées empêchera des dommages plus importants.

Créer un nouveau compte utilisateur (remplacez `username` par le nom réel du compte utilisateur, par exemple le nom d'une application) :

```bash
sudo adduser username
```

Vous devez fournir un mot de passe pour le nouveau compte. Vous êtes ensuite invité à entrer les détails du nouvel utilisateur, ce qui est facultatif.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Remarque : Sur une distribution GNU/Linux, **une invite de mot de passe n'affiche pas vos entrées clavier**.

- Pages `man` pertinentes : `adduser`, `useradd`

<a name="privileged"></a>

#### Création d’un compte utilisateur avec les privilèges root

Dans cette section, un nouveau compte utilisateur pour un `administrator` est créé et des autorisations élevées sont accordées sur le serveur (`root privileges`).

Créer un nouveau compte utilisateur (remplacez `username` par le nom réel du compte utilisateur) :

```bash
sudo adduser username
```

Ajouter le nouveau compte utilisateur au `sudo group` :

```bash
sudo usermod -aG sudo username
```

Vous pouvez vérifier l'appartenance au `group` avec la commande suivante : 

```bash
groups username
```

Exemple :

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

Le nouveau compte utilisateur est maintenant un `sudo user` et peut exécuter toutes les commandes.

Celui-ci est configuré par défaut pour le `sudo group` :

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Ces configurations peuvent être trouvées respectivement dans `/etc/sudoers` et le répertoire `/etc/sudoers.d`.


> [!primary]
>
> La bonne administration des utilisateurs, y compris les méthodes d'authentification des utilisateurs, dépend de l'environnement de travail et d'autres facteurs. Si vous avez besoin de gérer des comptes utilisateurs et des groupes sur un serveur, référez-vous à la documentation officielle de votre système d'exploitation et aux bases de connaissances appropriées.
>

<a name="sudo"></a>

#### Exécution de commandes en tant qu'administrateur (« sudo »)

Toute action nécessitant des autorisations élevées sera rejetée à moins que la commande `sudo` ne soit utilisée.

Par exemple, pour modifier un mot de passe pour **n'importe quel compte utilisateur**, tapez `sudo passwd` suivi du `username` :

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Le système vous demandera fréquemment le mot de passe de `sudo user` auquel vous êtes connecté lors de l'exécution de `sudo`.

- Pages `man` pertinentes : `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Désactivation du compte utilisateur

Pour désactiver un `user account`, entrez :

```bash
sudo passwd -dl username
```

Cela verrouillera le compte (en l'empêchant de se connecter par mot de passe) et le définira comme « *passwordless* », ce qui désactivera le compte.

<a name="enable"></a>

#### Activation du compte utilisateur

Pour réactiver un `user account` verrouillé sans mot de passe, utilisez les commandes suivantes (remplacez `initialpassword` par un mot de passe temporaire) :

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Pour des raisons de sécurité, modifiez à nouveau le mot de passe initial de cet utilisateur :

```bash
sudo passwd username
```

- Pages `man` pertinentes : `passwd`, `usermod`

<a name="delete"></a>

#### Suppression d’un compte utilisateur

Une méthode simple pour supprimer un compte et ses fichiers est la commande suivante :

```bash
sudo userdel -r -f username
```

- Pages `man` pertinentes : `userdel`, `deluser`

<a name="switch"></a>

#### Changement de compte utilisateur

En tant que `sudo user`, vous pouvez basculer vers n'importe quel autre compte utilisateur (sans avoir à connaître le mot de passe) :

```bash
sudo su username
```

Votre invite de commande changera en conséquence :

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Pour revenir à votre compte utilisateur précédent, basculez à nouveau ou utilisez `exit`.

<a name="rootshell"></a>

#### Basculer vers le compte « root » (« root shell »)

Après une nouvelle installation de votre serveur (avec un template OVHcloud), le `root account` (compte utilisateur nommé `root`) peut être utilisé mais il n'a pas de mot de passe.

Pour des raisons de sécurité, le `root account` ne doit être utilisé que lorsque cela est nécessaire et **n’est accessible qu’à partir du système lui-même**.

Vous pouvez passer au `root account` avec la commande suivante :

```bash
sudo -s
```

Votre invite de commande changera en conséquence :

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

Le caractère `#` à la fin de l'invite de commande indique un `root shell`, par opposition à une invite se terminant par `$`.

Utilisez la commande suivante pour revenir au compte utilisateur précédent :

```bash
exit
```

**L'exécution de commandes en tant que `root user` n'est généralement pas nécessaire et peut même être contre-productive.**

Une idée faussement répandue est l'hypothèse que vous devez utiliser le véritable `root account` afin d'exécuter des commandes qui nécessitent des autorisations élevées (`root privileges`) sur un système.

Cependant, tel que configuré par défaut dans la politique `/etc/sudoers`, le niveau d'autorisation de `root` est identique à celui du `sudo group` :

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Sachez que les didacticiels et la documentation utilisateur peuvent ne pas toujours suivre une terminologie cohérente. À moins que vous n'ayez vérifié que l'utilisation du `root account` réel est nécessaire pour l'action prévue, la meilleure pratique est d'exécuter des commandes `sudo` à la place. La manipulation des fichiers et des paramètres en tant que `root` peut avoir des conséquences inattendues pour le système.
>

<a name="enableroot"></a>

### Activation de la connexion de l'utilisateur « root »

> [!warning]
>
> Permettre au `root account` de se connecter en SSH est considéré comme une faille de sécurité et n'est donc pas recommandé.
>
> Prenez d’abord les mesures nécessaires pour sécuriser votre système à l’aide de nos guides : 
>
> - [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

#### Étape 1 : activer le compte « root »

Entrez la commande suivante puis fournissez un mot de passe à l'invite :

```bash
sudo passwd root
```

Vous pouvez annuler cette action en renseignant :

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

#### Étape 2 : éditer le fichier « sshd_config »

Utilisez un éditeur de texte tel que `vim` ou `nano` pour éditer ce fichier de configuration :

```bash
sudo nano /etc/ssh/sshd_config
```

Vous pouvez retrouver la ligne suivante :

```text
#PermitRootLogin prohibit-password
```

Le caractère de début `#` transforme la ligne entière en une chaîne de « commentaire » et est donc ignoré par toute application lisant le fichier.

Cela signifie que s'il n'y a pas d'autre instruction, la connexion avec le compte d'utilisateur `root` est **non activée**.

Ajoutez la ligne suivante :

```text
PermitRootLogin yes
```

Cela permettra de se connecter au serveur avec `root` et le mot de passe correspondant.

Enregistrez le fichier et quittez l'éditeur. Pour révoquer ce type d'accès, répétez les étapes et supprimez la ligne.

<a name="rootstep3"></a>

#### Étape 3 : redémarrer le service SSH

Redémarrez le service SSH avec l'une des commandes suivantes :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Cela devrait être suffisant pour appliquer les modifications. Sinon, redémarrez le serveur à partir de la ligne de commande (`sudo reboot`).

## Aller plus loin

[Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Échangez avec notre [communauté d'utilisateurs](/links/community).
