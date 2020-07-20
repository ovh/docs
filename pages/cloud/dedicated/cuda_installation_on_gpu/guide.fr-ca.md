---
title: Installer CUDA sur un serveur dédié GPU
slug: installer-cuda-serveur-gpu
section: Divers
---

## Objectif

L'installation de CUDA (Compute Unified Device Architecture) sur un serveur GPU est possible, mais requiert quelques actions qui vous sont expliquées dans ce guide.

## Prérequis

- Avoir un [serveur GPU](https://www.ovh.com/ca/fr/serveurs_dedies/gpu/){.external}.
- Être connecté en SSH sur son serveur

## En pratique

Vous trouverez dans cette partie la procédure à suivre après la réinstallation de la distribution.

### Mettre à jour le kernel

```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-headers-4.10.17-041017_4.10.17-041017.201705201051_all.deb
```
```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-headers-4.10.17-041017-generic_4.10.17-041017.201705201051_amd64.deb
```
```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-image-4.10.17-041017-generic_4.10.17-041017.201705201051_amd64.deb
```
```sh
sudo dpkg -i ./linux-*
```

### Modifier le fichier grub.cfg

Il faut éditer le fichier suivant et commenter la partie du kernel OVH :
```sh
/boot/grub/grub.cfg
```
```sh
##BEGIN /etc/grub.d/06_OVHkernel###
#menuentry "GNU/Linux with OVH Kernel, OVH kernel 4.9.58-xxxx-std-ipv6-64" {

#insmod part_gpt

#insmod part_gpt

#insmod diskfilter

# insmod mdraid09

#insmod ext2

#set root='mduuid/cabadcc1a60ca488a4d2adc226fd5302'

#if [ x$feature_platform_search_hint = xy ]; then

#search --no-floppy --fs-uuid --set=root --hint='mduuid/cabadcc1a60ca488a4d2adc226fd5302' b43e4008-da62-482e-a5c8-8384c40b69db

#else

#search --no-floppy --fs-uuid --set=root b43e4008-da62-482e-a5c8-8384c40b69db

#fi

#linux /boot/bzImage-4.9.58-xxxx-std-ipv6-64 root=/dev/md2 ro rootdelay=10 noquiet nosplash net.ifnames=0 biosdevname=0
###END /etc/grub.d/06_OVHkernel###
```

À partir de ce moment, il faut redémarrer le serveur. Il devrait l'avoir fait sur un nouveau kernel.

Pour vérifier, vous pouvez taper la commande suivante :

```sh
uname -a
Linux ns3065593 4.10.17-041017-generic #201705201051 SMP Sat May 20 14:53:33 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

Installez ensuite une librairie et arrêtez `lightdm` :

```sh
/etc/init.d/lightdm stop
```
```sh
apt-get install ncurses-base
```
```sh
apt-get install nvidia-384-dev
```
```sh
ln -sf /usr/lib/x86_64-linux-gnu/libGL.so.1 /usr/lib/libGL.so.1
```
 
### Installer CUDA
 
Il reste désormais à installer CUDA. Voici la procédure à suivre :

```sh
cd /root
mkdir cuda
cd cuda
```
```sh
wget https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb
```
```sh
mv cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64.deb
```
```sh
dpkg -i cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64.deb
```
```sh
apt-key add /var/cuda-repo-9-0-local/7fa2af80.pub
apt-get update
apt-get install cuda
```
```sh
nano /etc/environment
#Once nano is open edit the PATH variable to include /usr/local/cuda-8.0/bin folder. After editing the file screen would look like this.
```
```sh
source /etc/environment
```
```sh
export PATH=/usr/local/cuda-9.0/bin${PATH:+:${PATH}}
```
```sh
nvcc --version
```
 
Le `nvidia-smi` fonctionne désormais correctement :

```sh
nvidia-smi
```

```sh
Wed Nov 1 09:14:38 2017
+-----------------------------------------------------------------+
| NVIDIA-SMI 384.90 Driver Version: 384.90 |
+---------------------+---------------------+---------------------+
| GPU Name Persistence-M| Bus-Id Disp.A | Volatile Uncorr. ECC |
| Fan Temp Perf Pwr:Usage/Cap| Memory-Usage | GPU-Util Compute M. |
|=================+=======================+=======================|
| 0 GeForce GTX 106... Off | 00000000:02:00.0 Off | N/A |
| 0% 27C P0 27W / 120W | 0MiB / 6072MiB | 0% Default |
+---------------------+---------------------+---------------------+
| 1 GeForce GTX 106... Off | 00000000:03:00.0 Off | N/A |
| 0% 29C P0 24W / 120W | 0MiB / 6072MiB | 2% Default |
+---------------------+---------------------+---------------------+
+-----------------------------------------------------------------+
| Processes: GPU Memory |
| GPU PID Type Process name Usage |
|=================+=======================+=======================|
| No running processes found |
+----------------------------------------------------------------+
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
