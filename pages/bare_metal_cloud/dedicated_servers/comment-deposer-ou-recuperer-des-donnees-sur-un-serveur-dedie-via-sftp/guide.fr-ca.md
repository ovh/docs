---
title: "Comment télécharger et récupérer des données sur un serveur dédié via SFTP"
excerpt: "Découvrez comment transférer facilement des données depuis et vers votre serveur dédié"
updated: 2024-02-23
---

## Objectif

Dans le cadre d'une migration, vous pouvez être amené à devoir récupérer les données d'un serveur dédié pour les déposer ensuite sur un autre serveur. S'il existe différentes manières de procéder, le protocole SFTP (Secure File Transfert Protocol) permet de transférer simplement et rapidement des fichiers via une connexion SSH sécurisée.

**Découvrez comment déposer ou récupérer des données sur un serveur dédié via SFTP.**

> [!warning]
>Ce tutoriel vous explique comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes et décrit les actions à effectuer dans un contexte spécifique. Vous devrez peut-être adapter les instructions en fonction de votre situation.
>
>Si vous éprouvez des difficultés à appliquer ces instructions, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/). Pour plus d'informations, consultez la section [Aller plus loin](#gofurther) de ce guide.
>
## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external} sur lequel une distribution GNU/Linux est installée.
- Un client FTP qui prend en charge les connexions SFTP (ce guide documente l'utilisation de [FileZilla](https://filezilla-project.org/){.external}).
- Un accès administratif via SSH à votre serveur.

## En pratique

### Utiliser FileZilla pour récupérer et déposer vos données

Le protocole SFTP peut être utilisé pour transférer des fichiers via une connexion sécurisée (SSH). Il existe deux possibilités pour ce scénario : soit vous disposez d'un accès normal à votre serveur, soit vous vous y connectez en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Par défaut, un serveur utilisant un système d'exploitation GNU/Linux aura un accès SSH via le port 22. Cependant, vous avez peut-être déjà modifié ce port (par exemple en suivant [notre guide pour sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)).

#### **Si vous avez accès à votre serveur**

Dans l'interface graphique de FileZilla, entrez l'adresse IP de votre serveur dans le champ `Hôte`, ainsi que votre nom d'utilisateur et votre mot de passe dans les champs respectifs. En ce qui concerne le champ `Port`, entrez « 22 » ou le port que votre service SSH écoute si vous l'avez modifié.

> [!warning]
> Notez que l'accès au dossier de l'utilisateur `root` via SFTP n'est possible qu'en utilisant les identifiants de ce compte utilisateur. Si vous êtes certain de vouloir accéder à ce dossier à distance, retrouvez plus d'informations sur la façon d'activer cette connexion dans notre [guide du compte utilisateur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

Dès que la connexion est établie, une arborescence de vos fichiers s'affiche dans la partie `Site distant`.

![site distant sftp](images/sftp_sd_01.png){.thumbnail}

Dans notre exemple, les données à récupérer se trouvent dans le dossier « /home/data ». Vous pouvez faire un glisser-déposer des fichiers à télécharger depuis le volet de droite (`Site distant`) vers le volet de gauche (`Site local`) pour les enregistrer sur votre périphérique local.

Pour déposer des fichiers sur le serveur, faites un glisser-déposer de vos fichiers depuis votre dossier local vers le dossier de destination distant siuté dans le volet de droite.

La progression du transfert de données s'affiche alors en bas de l'interface de FileZilla.

![progression du transfert sftp](images/sftp_sd_02.png){.thumbnail}

#### **Si votre serveur est en mode rescue**

En mode rescue, vous devez d'abord monter votre partition. Pour ce faire, vous pouvez suivre les instructions indiquées dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Une fois la partition montée, utilisez le client FileZilla de la même manière que décrite ci-dessus, en utilisant le port 22 pour la connexion à votre serveur.

> [!primary]
>
> Les informations d'identification que vous devez utiliser vous sont envoyées par e-mail lorsque vous activez le mode rescue sur votre serveur.
>

Si vous avez correctement créé le point de montage, les données se trouvent dans le répertoire « /mnt » (« /mnt/home/data » dans cet exemple).

![mode rescue - sftp du site distant](images/sftp_sd_03.png){.thumbnail}

## Aller plus loin

[Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
