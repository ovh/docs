---
title: 'How to back up a Bare Metal Pod SecNumCloud instance'
excerpt: 'Find out how to back up a Bare Metal Pod SecNumCloud instance to Object Storage'
updated: 2026-05-04
---

## Objective

You can use a tool such as [Restic](https://restic.readthedocs.io/en/stable/) to automate backups of your instances to Object Storage. Backups can be used to restore your data in the event of an issue.

## Requirements

- An instance
- An Object Storage Access Key
- **Restic** installed
- **S3cmd** installed and configured with the Access Key

## Instructions

> [!primary]
>
> The Restic backup tool is used to describe one possible backup method.
> You are free to choose whichever solution suits you.
>

### Create a bucket to store backups

Run the following command:

```bash
$ s3cmd mb s3://backup
```

### Initialise the backup repository

Start by choosing a password to encrypt your backups. This guide uses GPG for this purpose:

```bash
$ gpg --gen-random --armor 1 20
```

Note this password in a safe location, along with your S3<sup>1</sup> credentials. Next, configure Restic via environment variables. This includes sensitive information, such as your S3 secret and the repository password. Therefore, ensure that the following commands **do not appear** in your shell history file. Adjust the environment variables according to your bucket name, region and API credentials.

```bash
unset HISTFILE
export AWS_DEFAULT_REGION="eu-west-rbx-snc"
export AWS_ACCESS_KEY_ID="06bd244758d047eea26eb9cc1e572be7"
export AWS_SECRET_ACCESS_KEY="55db67712e594cd8a557abfd7a33a743"
export RESTIC_REPOSITORY="s3:https://s3-beta.eu-west-rbx-snc.cloud.snc.ovh.net/backup"
export RESTIC_PASSWORD="BYhISmzRvIPMwvbzgl8ROQ=="
```

Once the environment is configured, run the Restic command to initialise the repository:

```bash
$ restic init
created restic repository 821bcf92bf at s3:https://s3-beta.eu-west-rbx-snc.cloud.snc.ovh.net/backup

Please note that knowledge of your password is required to access
the repository. Losing your password means that your data is
irrecoverably lost.
```

Restic is now ready to use with S3. Try creating a backup:

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
> A snapshot has been created.
>

Check the bucket contents:

```bash
$ s3cmd la
                          DIR  s3://backup/data/
                          DIR  s3://backup/index/
                          DIR  s3://backup/keys/
                          DIR  s3://backup/snapshots/
2025-12-22 00:22          155  s3://backup/config
```

> [!primary]
> A backup has been created and stored in the S3 bucket.
>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or go to the [Professional Services page](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
