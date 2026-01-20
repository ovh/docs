---
title: 'Comment sauvegarder un bucket de stockage objet SNC Cloud Platform'
excerpt: 'Découvrez comment sauvegarder un bucket de stockage objet SNC Cloud Platform sur un stockage objet distant'
updated: 2026-01-23
---

## Objectif

Vous pouvez mettre en œuvre un outil comme [Rclone](https://rclone.org/) afin d'automatiser les sauvegardes des données de vos buckets vers un stockage objet distant. Les sauvegardes peuvent être utilisées pour restaurer vos données en cas de problème.

## Prérequis

- Avoir un bucket
- Avoir généré des Access Keys pour les stockages objets source et destination
- Avoir installé **Rclone**
- Avoir installé **S3cmd** et configuré celui-ci avec les Access Keys

## En pratique

> [!primary]
>
> L'outil de sauvegarde Rclone est utilisé pour décrire une méthode possible pour faire des sauvegardes.
> L'utilisateur est libre de choisir la solution qui lui convient.
>

### Créer un bucket pour stocker les sauvegardes

Renseignez la commande suivante :

```bash
$ s3cmd mb s3://backup
```

Note : afin de pouvoir récupérer différentes versions d'un fichier envoyé sur ce bucket, vous pouvez activer le versioning des objets de ce bucket.

### Configurer la source et la destination de Rclone

Créer un fichier de configuration ~/.config/rclone/rclone.conf :

```bash
[source-s3]
type = s3
provider = Ceph
env_auth = false
access_key_id = CEPH_ACCESS_KEY_SOURCE
secret_access_key = CEPH_SECRET_KEY_SOURCE
endpoint = https://s3-beta.eu-west-rbx-snc.cloud.snc.ovh.net/
region = eu-west-rbx-snc
acl = private
force_path_style = true

[target-s3]
type = s3
provider = Ceph
env_auth = false
access_key_id = CEPH_ACCESS_KEY_TARGET
secret_access_key = CEPH_SECRET_KEY_TARGET
endpoint = https://s3-beta.eu-west-sbg-snc.cloud.snc.ovh.net/
region = eu-west-sbg-snc
acl = private
force_path_style = true
```

Configurer le source-s3 et le target-s3 si possible entre 2 régions SNC Cloud Platform.

Une fois l'environnement configuré, la commande rclone suivante peut être utilisée pour valider la confifguration avant une sauvegarde :

```bash
$ rclone sync source-s3:source-bucket target-s3:backup \
  --progress \
  --transfers 16 \
  --checkers 32 \
  --dry-run
```

### Planifier une tâche récurrente

Une fois la commande testée, il est possible de planifier une tâche récurrente :

1. Créer de l'unité de service systemd :

  ```bash
  sudo tee /etc/systemd/system/rclone-backup.service > /dev/null <<'EOF'
  [Unit]
  Description=Rclone backup
  Wants=network-online.target
  After=network-online.target

  [Service]
  User=YOUR_USER
  Group=YOUR_GROUP
  Environment=RCLONE_CONFIG=PATH_TO_RCLONE_CONFIG/rclone.conf
  Type=oneshot
  ExecStart=/usr/bin/rclone sync \
    source-s3:source-bucket \
    target-s3:backup \
    --log-file=/var/log/rclone-backup.log \
    --log-level=INFO \
    --transfers=16 \
    --checkers=32
  EOF
  ```

2. Créer l'unité de timer systemd :

  ```bash
  sudo tee /etc/systemd/system/rclone-backup.timer > /dev/null <<'EOF'
  [Unit]
  Description=Run Rclone backup daily

  [Timer]
  OnCalendar=daily
  Persistent=true
  RandomizedDelaySec=15m

  [Install]
  WantedBy=timers.target
  EOF
  ```

3. Recharger la configuration systemd et activer le timer :

  ```bash
  sudo systemctl daemon-reload
  sudo systemctl enable --now rclone-backup.timer
  ```

4. Vérifier la configuration :

  ```bash
  systemctl list-timers --all | grep rclone
  sudo systemctl enable --now rclone-backup.service
  systemctl status rclone-backup.service
  journalctl -u rclone-backup.service
  ```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
