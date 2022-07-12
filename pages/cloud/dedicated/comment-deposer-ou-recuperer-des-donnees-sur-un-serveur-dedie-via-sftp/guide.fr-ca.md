---
title: 'Récupérer et déposer des données sur un serveur dédié via SFTP'
slug: deposer-et-recuperer-donnees-via-sftp
excerpt: 'Découvrez comment transférer facilement des données depuis et vers votre serveur dédié'
section: Tutoriel
---

**Dernière mise à jour le 18/05/2021**

## Objectif

Dans le cadre d'une migration, vous pouvez être amené à devoir récupérer les données d'un serveur dédié pour les déposer ensuite sur un autre serveur. S'il existe différentes manières de procéder, le protocole SFTP (Secure File Transfert Protocol) permet de transférer simplement et rapidement des fichiers via une connexion SSH sécurisée.

**Découvrez comment déposer ou récupérer des données sur un serveur dédié via SFTP.**

> [!warning]
>
Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVHcloud avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation. Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVHcloud ne sera pas en mesure de vous fournir une assistance.
>

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external} sur lequel une distribution GNU/Linux est installée.
- Un client FTP qui prend en charge les connexions SFTP (ce guide documente l'utilisation de [FileZilla](https://filezilla-project.org/){.external}).
- Un accès administratif via SSH à votre serveur.

## En pratique

### Utiliser FileZilla pour récupérer et déposer vos données

Le protocole SFTP peut être utilisé pour transférer des fichiers via une connexion sécurisée (SSH). Il existe deux possibilités pour ce scénario : soit vous disposez d'un accès normal à votre serveur, soit vous vous y connectez en [mode rescue](../ovh-rescue/).

Par défaut, un serveur utilisant un système d'exploitation GNU/Linux aura un accès SSH via le port 22. Cependant, vous avez peut-être déjà modifié ce port (par exemple en suivant [notre guide pour sécuriser un serveur dédié](../securiser-un-serveur-dedie/)).

#### **Si vous avez accès à votre serveur**

Dans l'interface graphique de FileZilla, entrez l'adresse IP de votre serveur dans le champ `Hôte`, ainsi que votre nom d'utilisateur et votre mot de passe dans les champs respectifs. En ce qui concerne le champ `Port`, entrez « 22 » ou le port que votre service SSH écoute si vous l'avez modifié.

Dès que la connexion est établie, une arborescence de vos fichiers s'affiche dans la partie `Site distant`.

![site distant sftp](images/sftp_sd_01.png){.thumbnail}

Dans notre exemple, les données à récupérer se trouvent dans le dossier « /home/data ». Vous pouvez faire un glisser-déposer des fichiers à télécharger depuis le volet de droite (`Site distant`) vers le volet de gauche (`Site local`) pour les enregistrer sur votre périphérique local.

Pour déposer des fichiers sur le serveur, faites un glisser-déposer de vos fichiers depuis votre dossier local vers le dossier de destination distant siuté dans le volet de droite.

La progression du transfert de données s'affiche alors en bas de l'interface de FileZilla.

![progression du transfert sftp](images/sftp_sd_02.png){.thumbnail}

#### **Si votre serveur est en mode rescue**

En mode rescue, vous devez d'abord monter votre partition. Pour ce faire, vous pouvez suivre les instructions indiquées dans [ce guide](../ovh-rescue/).

Une fois la partition montée, utilisez le client FileZilla de la même manière que décrite ci-dessus, en utilisant le port 22 pour la connexion à votre serveur.

> [!primary]
>
> Les informations d'identification que vous devez utiliser vous sont envoyées par e-mail lorsque vous activez le mode rescue sur votre serveur.
>

Si vous avez correctement créé le point de montage, les données se trouvent dans le répertoire « /mnt » (« /mnt/home/data » dans cet exemple).

![mode rescue - sftp du site distant](images/sftp_sd_03.png){.thumbnail}

## Aller plus loin

[Activer et utiliser le mode rescue](../ovh-rescue/)

[Sécuriser un serveur dédié](../securiser-un-serveur-dedie/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
