---
title: 'AMD SME/SEV sur Ubuntu 20'
slug: 'activer-et-utiliser-amd-sme-sev
excerpt: 'Activer SME sur votre serveur ubuntu et générer une machine virtuelle SEV'
section: 'Advanced use'
---

**Dernière mise à jour le 2020/05/07**

## Objectif

Activez AMD SME sur votre serveur Ubuntu 20.04 et créez une machine virtuelle KVM/QEMU sécurisée avec SEV

## Prérequis

- Un serveur dédié avec d'un processeur Epyc AMD Naples/Rome
- Accès administratif (root) au serveur avec SSH
- Ubuntu 20.04 installé

## En practique

### Étape 1 - Activer SME et SEV

L'activation de SME nécessite simplement l'ajout de "mem_encrypt=on" sur la ligne de commande de démarrage du kernel. Pour pouvoir utiliser SEV dans KVM, nous devons aussi ajouter "kvm_amd.sev=1".

Pour ce faire, nous devons l'ajouter à "GRUB_CMDLINE_LINUX_DEFAULT".

La façon habituelle de faire cela est de modifier `/etc/default/grub`, cependant, sur les images cloud  Ubuntu, nous devons modifier ce fichier à la place : "/etc/default/grub.d/50-cloudimg-settings.cfg"

Voici à quoi ça ressemble sur un Ubuntu 20.04 fraîchement installé, après avoir modifié le fichier :

```bash
ubuntu@nsXXX:~# grep mem_encry /etc/default/grub.d/50-cloudimg-settings.cfg
GRUB_CMDLINE_LINUX_DEFAULT="modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1"
ubuntu@nsXXX:~#
```

Maintenant, nous devons mettre à jour notre configuration grub pour rendre notre changement efficace :
```bash
sudo update-grub
```

### Étape 2 - Redémarrez le serveur pour que SME/SEV soit disponible

Redémarrons le serveur pour appliquer nos modifications de ligne de commande :

```bash
sudo reboot
```

Une fois le serveur en ligne, nous devrions voir "mem_encrypt=on" et "kvm_amd.sev=1" dans `/proc/cmdline" :

```bash
ubuntu@nsXXX:~# cat /proc/cmdline
BOOT_IMAGE=/boot/vmlinuz-5.4.0-26-generic root=UUID=41b1b860-c5d2-4b43-a7e5-cb45c2f44e08 ro vga=normal nomodeset modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1
```

Vous devriez également voir les messages suivants dans dmesg :
```bash
7ubuntu@nsXXX:~# dmesg | grep SME
[    1.247928] AMD Secure Memory Encryption (SME) active
ubuntu@nsXXX:~# dmesg | grep "SEV supported"
[    7.637219] SVM: SEV supported
```

Vous pouvez également vérifier que SEV est disponible :
```bash
ubuntu@nsXXX:~# cat /sys/module/kvm_amd/parameters/sev
1
```

### Étape 3 - Configuration requise pour la création de notre machine virtuelle invitée

Installer des packages :
```bash
sudo apt update
sudo apt install libvirt-daemon-system virtinst qemu-utils cloud-image-utils
```

Téléchargeons l'image pour  notre machine virtuelle. Nous utiliserons une image cloud Ubuntu 20.04

```bash
wget https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img
```

### Étape 4 - Préparer l'image

Veillons à ce que l'image soit dans le bon format pour QEMU/KVM, et la mettons dans le dossier approprié :
```bash
sudo qemu-img convert focal-server-cloudimg-amd64.img /var/lib/libvirt/images/sev-guest.img
```

Puisque nous utilisons une image cloud, nous devons aussi préparer une petite ISO qui configurera le mot de passe de l'utilisateur "ubuntu" :
```bash
cat >cloud-config <<EOF
#cloud-config

password: CHANGEME.aiZ4aetiesig
chpasswd: { expire: False }
ssh_pwauth: False
EOF

sudo cloud-localds /var/lib/libvirt/images/sev-guest-cloud-config.iso cloud-config
```

### Étape 5 - Lancer la machine virtuelle

```bash
sudo virt-install \
              --name sev-guest \
              --memory 4096 \
              --memtune hard_limit=4563402 \
              --boot uefi \
              --disk /var/lib/libvirt/images/sev-guest.img,device=disk,bus=scsi \
              --disk /var/lib/libvirt/images/sev-guest-cloud-config.iso,device=cdrom \
              --os-type linux \
              --os-variant ubuntu20.04 \
              --import \
              --controller type=scsi,model=virtio-scsi,driver.iommu=on \
              --controller type=virtio-serial,driver.iommu=on \
              --network network=default,model=virtio,driver.iommu=on \
              --memballoon driver.iommu=on \
              --graphics none \
              --launchSecurity sev
```

A noter : au moment de l'écriture de cet article, il y a un problème dans apparmor/libvirt qui fera échouer la commande ci-dessus avec le message suivant :
```bash
ERROR    internal error: process exited while connecting to monitor: 2020-04-28T15:04:14.348979Z qemu-system-x86_64: sev_guest_init: Failed to open /dev/sev 'Permission denied'
```
Pour le corriger, nous allons éditer "/etc/apparmor.d/abstractions/libvirt-qemu" pour autoriser l'accès "rw" à `/dev/sev`. Voici à quoi ça devrait ressembler une fois édité :
```bash
[...]
  /dev/net/tun rw,
  /dev/kvm rw,
  /dev/ptmx rw,
  /dev/sev rw,
  @{PROC}/*/status r,
[...]
```

Une fois la machine virtuelle créée avec succès, nous pouvons nous connecter en utilisant les informations d'identification définies précédemment dans "cloud-config", et vérifier que SEV est effectivement activé :
```bash
ubuntu@ubuntu:~$ dmesg | grep SEV
[    0.158239] AMD Secure Encrypted Virtualization (SEV) active
```

## Références et ressources supplémentaires

- [AMD Secure Encrypted Virtualization (SEV)](https://developer.amd.com/sev/){.external}
- [libvirt : Launch security with AMD SEV](https://libvirt.org/kbase/launch_security_sev.html){.external}
- [libvirt XML domain format - launchSecurity](https://libvirt.org/formatdomain.html#launchSecurity){.external}
- [libvirt domain capabilities - SEV](https://libvirt.org/formatdomaincaps.html#elementsSEV){.external}
- [github.com/AMDESE/AMDSEV](https://github.com/AMDESE/AMDSEV){.external}
- [github.com/AMDESE/sev-tool](https://github.com/AMDESE/sev-tool){.external}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

