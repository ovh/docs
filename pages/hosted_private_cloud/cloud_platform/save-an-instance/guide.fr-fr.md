---
title: 'Comment sauvegarder une instance SNC Cloud Platform'
excerpt: 'Découvrez comment sauvegarder une instance SNC Cloud Platform sur Object Storage'
updated: 2025-12-29
---

## Objectif

Vous pouvez mettre en œuvre un outil comme [Restic](https://restic.readthedocs.io/en/stable/) afin d'automatiser les sauvegardes des données de vos instances vers Object Storage. Les sauvegardes peuvent être utilisées pour restaurer vos données en cas de problème.

## Prérequis

- Avoir une instance
- Avoir généré une Access Key pour Object Storage
- Avoir installé **Restic**
- Avoir installé **S3cmd** et configuré celui-ci avec l'Access Key

## En pratique

> [!primary]
>
> L'outil de sauvegarde Restic est utilisé pour décrire une méthode possible pour faire des sauvegardes.
> L'utilisateur est libre de choisir la solution qui lui convient.
>

### Créer un bucket pour stocker les sauvegardes

Renseignez la commande suivante :

```bash
$ s3cmd mb s3://backup
```

### Initialiser le dépôt de sauvegarde

Commencez par choisir un mot de passe pour chiffrer vos sauvegardes. Dans ce guide, GPG est utilisé à cette fin :

```bash
$ gpg --gen-random --armor 1 16
```

Notez ce mot de passe dans un endroit sûr, avec vos informations d’identification S3<sup>1</sup>. Ensuite, la configuration de Restic sera placée dans des variables d'environnement. Cela inclut des informations sensibles, comme votre secret S3 et le mot de passe du dépôt. Par conséquent, assurez-vous que les commandes suivantes **n’apparaissent pas** dans le fichier d'historique de votre shell. Ajustez le contenu des variables d'environnement en fonction du nom de votre bucket, de la région et des informations d'identification API de votre utilisateur.

```bash
unset HISTFILE
export AWS_DEFAULT_REGION="eu-west-rbx-snc"
export AWS_ACCESS_KEY_ID="06bd244758d047eea26eb9cc1e572be7"
export AWS_SECRET_ACCESS_KEY="55db67712e594cd8a557abfd7a33a743"
export RESTIC_REPOSITORY="s3:https://s3-beta.eu-west-rbx-snc.cloud.snc.ovh.net/backup"
export RESTIC_PASSWORD="BYhISmzRvIPMwvbzgl8ROQ=="
```

Une fois l'environnement configuré, la commande Restic peut être appelée pour initialiser le dépôt :

```bash
$ restic init
created restic repository 821bcf92bf at s3:https://s3-beta.eu-west-rbx-snc.cloud.snc.ovh.net/backup

Please note that knowledge of your password is required to access
the repository. Losing your password means that your data is
irrecoverably lost.
```

Restic est maintenant prêt à être utilisé avec S3. Essayez de créer une sauvegarde :

```bash
$ restic backup /var/log/
repository 821bcf92 opened (repository version 2) successfully, password is correct
no parent snapshot found, will read all files
error: open /var/log/btmp: permission denied
error: Open: open /var/log/private: permission denied

Files:          30 new,     0 changed,     0 unmodified
Dirs:            7 new,     0 changed,     0 unmodified
Added to the repository: 745.784 MiB (173.112 MiB stored)

processed 30 files, 750.189 MiB in 0:04
snapshot 38e47b16 saved
```

```bash
$ restic snapshots
repository 821bcf92 opened (repository version 2) successfully, password is correct
ID        Time                 Host        Tags        Paths
---------------------------------------------------------------
38e47b16  2025-12-22 00:24:23  demo                  /var/log
---------------------------------------------------------------
1 snapshots
```

> [!primary]
> Un snapshot a été créé.
>

Vérifiez le contenu du bucket :

```bash
$ s3cmd la
                          DIR  s3://backup/data/
                          DIR  s3://backup/index/
                          DIR  s3://backup/keys/
                          DIR  s3://backup/snapshots/
2025-12-22 00:22          155  s3://backup/config
```

> [!primary]
> Une sauvegarde a été créée et stockée dans le bucket S3.
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.