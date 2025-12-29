---
title: "Création d'une image OpenStack personnalisée sur OPCP"
excerpt: "Découvrez comment créer votre propre image OpenStack pour On-Prem Cloud Platform"
updated: 2025-11-21
---

## Objectif

Ce guide explique comment construire des images disque personnalisées pour OpenStack Ironic (bare metal) et Nova (machine virtuelle) en utilisant [diskimage-builder](https://github.com/openstack/diskimage-builder).

C’est un bon point de départ pour comprendre le fonctionnement de [diskimage-builder](https://github.com/openstack/diskimage-builder) (DiB) avec un exemple pratique. Nous allons construire une image Debian 13 personnalisée à partir de l’image parent, puis la personnaliser avec Ansible.

À la fin, nous générerons une image disque complète `debian13.qcow2` (incluant le noyau et l’initramfs), prête à être importée dans OpenStack Glance.

## Attentes pour OpenStack Ironic/Nova

### Format de l’image

- **qcow2** (recommandé) : image disque compressée
- **raw** : image disque non compressée

L’image doit être une **image disque complète** qui inclut :

- Le secteur de boot / la partition système EFI
- La ou les partitions du système d’exploitation
- Le noyau et l’initramfs présents sur le disque

### Partitionnement et exigences de démarrage

#### Pour un démarrage BIOS :

- Table de partition GPT ou MBR
- Partition de démarrage BIOS (1–2 Mo, type `ef02` pour GPT)
- Partition racine avec un chargeur de démarrage installé (GRUB2)
- Le chargeur de démarrage doit être installé dans le MBR / secteur de boot

#### Pour un démarrage EFI :

- Table de partition GPT obligatoire
- Partition système EFI (ESP) : 512 Mo, FAT32, montée sur `/boot/efi`
- Partition racine avec GRUB2 en mode EFI
- Entrées de démarrage EFI correctement configurées

#### Pour Ironic en bare metal (configuration recommandée) :

**Schéma de partition standard (simple) :**

```yaml
# GPT partition table
- EFI System Partition (ESP): 512MiB, type EF00, FAT32, mounted at /boot/efi
- BIOS Boot Partition (BSP): 8MiB, type EF02 (for hybrid BIOS/EFI compatibility)
- Root partition: remaining space, type 8300, ext4, mounted at /
```

## Pré-requis

**Pré-requis système :**

- Droits root
- Au moins 10 Go d’espace disponible
- Quelques paquets nécessaires :

```bash
# Debian/Ubuntu
apt update -y && apt install -y \
  dosfstools \
  python3 \
  python3-venv \
  python3-pip \
  virtualenv \
  kpartx \
  debootstrap \
  lvm2 \
  squashfs-tools \
  qemu-utils
```

Installer diskimage-builder (DiB) dans un virtualenv :

```bash
mkdir -p diskimage-builder
python3 -m venv venv
. ./venv/bin/activate
pip install diskimage-builder
```

### Comprendre les éléments diskimage-builder

Les *elements* sont des composants modulaires qui permettent de personnaliser votre image.

| Dossier                     | Objectif                              |
| --------------------------- | ------------------------------------- |
| `environment.d/`            | Variables d’environnement             |
| `extra-data.d/`             | Fichiers ajoutés avant l’installation |
| `pre-install.d/`            | Scripts de pré-installation           |
| `post-install.d/`           | Scripts de post-installation          |
| `finalise.d/`               | Personnalisation finale               |
| `cleanup.d/`                | Tâches de nettoyage                   |
| `package-installs.yaml`     | Déclarations de paquets               |
| `block-device-default.yaml` | Partitionnement du disque             |

Les scripts dans ces répertoires sont exécutés dans l’ordre numérique / alphabétique.

### Créer un élément de personnalisation avec Ansible

Créez un *element* qui utilise Ansible pour la personnalisation :

**Structure de répertoires :**

```bash
mkdir -p elements/os-custom/extra-data.d/ansible/{roles/customize/tasks,inventory/host_vars/sys_image}
mkdir -p elements/os-custom/extra-data.d/ansible/roles/customize/files
mkdir -p elements/os-custom/post-install.d
```

**Scripts post-install :**

`elements/os-custom/post-install.d/00-install-ansible` :

```bash
#!/bin/bash
set -eux
apt install --yes ansible
```

`elements/os-custom/post-install.d/01-apply-ansible` :

```bash
#!/bin/bash
set -eux
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
cd /tmp/in_target.d/extra-data.d/ansible
ANSIBLE_STDOUT_CALLBACK=debug ansible-playbook -i inventory main.yml
```

`elements/os-custom/post-install.d/02-remove-ansible` :

```bash
#!/bin/bash
set -eux
apt remove --yes ansible
apt autoremove --yes
```

**Rendre les scripts exécutables :**

```bash
chmod +x elements/os-custom/post-install.d/*
```

**Configuration Ansible :**

`elements/os-custom/extra-data.d/ansible/main.yml`:

```yaml
---
- hosts: all
  gather_facts: true
  roles:
    - name: customize
```

`elements/os-custom/extra-data.d/ansible/inventory/hosts` :

```ini
[all]
sys_image sys_image ansible_connection=local ansible_become=no
```

Dans cet exemple, nous utilisons `cloud-init` avec le moteur `netplan` pour configurer `systemd-networkd`. Il s’agit d’un exemple fonctionnel de personnalisation de la configuration réseau ; adaptez-le librement à vos besoins.

**Note :** lorsque Ironic configure le bare metal au premier démarrage, il fournit un manifeste `network_metadata` (configdrive) que `cloud-init` peut interpréter pour configurer automatiquement le réseau (IP statique, LACP, etc.).

`elements/os-custom/extra-data.d/ansible/roles/customize/tasks/main.yml` :

```yaml
---
- name: Install additional packages
  apt:
    name:
      - cloud-init
    state: latest
    update_cache: yes

- name: Remove unwanted packages
  apt:
    name:
      - ifupdown
      - ifenslave
      - vlan
    state: absent
    purge: yes

# Allow Baremetal LACP auto-conf from Neutron
- name: Configure cloud-init for netplan
  copy:
    src: 50-netplan.cfg
    dest: /etc/cloud/cloud.cfg.d/50-netplan.cfg
    owner: root
    group: root
    mode: 0644
```

`elements/os-custom/extra-data.d/ansible/roles/customize/files/50-netplan.cfg` :

```yaml
system_info:
  network:
    renderers: ['netplan']
```

**Paquets additionnels :**

`elements/os-custom/package-installs.yaml`:

```yaml
man:
nano:
tcpdump:
iputils-ping:
```

**Dépendances de l’élément :**

`elements/os-custom/element-deps` :

```
debian
```

## Construire l’image

Créer un fichier d’environnement `debian13.env` :

```bash
export DIB_RELEASE=trixie
export DIB_CLOUD_INIT_DATASOURCES="ConfigDrive, OpenStack"
export DIB_GRUB_TIMEOUT=10
```

Construire l’image :

```bash
mkdir -p tmp-build-dir
export TMPDIR="$(pwd)/tmp-build-dir"
export ELEMENTS_PATH="$(pwd)/elements"

source debian13.env
disk-image-create -t qcow2 --image-size 16GB -a amd64 vm block-device-efi os-custom debian -o debian13
```

Vous devriez obtenir un fichier `debian13.qcow2`.

Si vous voulez des fichiers SBOM pour les variables d'environnement et les paquets :

```bash
cp debian13.d/dib-manifests/dib_environment debian13.env.sbom
cp debian13.d/dib-manifests/dib-manifest-dpkg-debian13 debian13.pkg.sbom
```

## Tester l’image

Une façon rapide de tester l’image générée est d’utiliser qemu pour lancer une machine virtuelle à partir de l’image qcow2, puis un client VNC pour se connecter à la console. On peut tester aussi bien le démarrage EFI que BIOS.

### Démarrage BIOS

```bash
qemu-system-x86_64 -enable-kvm -vnc 0.0.0.0:0,password=on -monitor stdio -m 2048 -drive file=debian13.qcow2,if=virtio,format=qcow2
```

```bash
# Définir un mot de passe VNC personnalisé
QEMU 10.0.3 monitor - type 'help' for more information
(qemu) change vnc password
Password: ********
```

Utilisez n’importe quel client VNC pour vous connecter sur le port :5200.

### Démarrage EFI

```bash
# Copier les variables OVMF pour éviter de modifier l’original
cp /usr/share/OVMF/OVMF_VARS_4M.fd /tmp/debian13-OVMF_VARS_4M.fd

qemu-system-x86_64 -enable-kvm \
  -machine q35,smm=on,accel=kvm \
  -drive if=pflash,format=raw,unit=0,file=/usr/share/OVMF/OVMF_CODE_4M.fd,readonly=on \
  -drive if=pflash,format=raw,unit=1,file=/tmp/debian13-OVMF_VARS_4M.fd \
  -vnc 0.0.0.0:0,password=on \
  -monitor stdio \
  -m 2048 \
  -drive file=debian13.qcow2,if=virtio,format=qcow2
```

```bash
# Définir un mot de passe VNC personnalisé
QEMU 10.0.3 monitor - type 'help' for more information
(qemu) change vnc password
Password: ********
```

Utilisez un client VNC pour vous connecter sur le port :5200.

## Importer l’image dans OpenStack

```bash
openstack image create \
  --disk-format qcow2 \
  --container-format bare \
  --file debian13.qcow2 \
  debian13
```

C’est terminé ! Vous pouvez maintenant créer une instance bare metal ou une machine virtuelle avec cette nouvelle image.
