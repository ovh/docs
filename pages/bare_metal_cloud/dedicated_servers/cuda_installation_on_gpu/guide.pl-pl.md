---
title: Instalacja CUDA na serwerze dedykowanym GPU
updated: 2017-12-14
---

**Ostatnia aktualizacja dnia 2018-03-12**

## Wprowadzenie

CUDA to platforma obliczeń równoległych na układach graficznych GPU. Dzięki CUDA programiści mogą przyspieszyć pracę aplikacji obliczeniowych, wykorzystując moc procesorów graficznych.

Instalacja CUDA (Compute Unified Device Architecture) na serwerze GPU wymaga przeprowadzenia kilku operacji, które zostały opisane w niniejszym przewodniku. 

**Dowiedz się, jak zainstalować platformę akcelerowanych obliczeń na serwerze dedykowanym z procesorem graficznym.**

## Wymagania początkowe

- [Posiadanie serwera GPU](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Połączenie z serwerem za pomocą SSH

## W praktyce

W niniejszej sekcji została opisana procedura postępowania po ponownym zainstalowaniu dystrybucji.

### Aktualizacja jądra 

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

### Modyfikacja pliku grub.cfg

Edytuj następujący plik i dodaj komentarz do części jądra OVH:
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

Zrestartuj serwer. Teraz serwer powinien działać, korzystając z nowego jądra.

W celu weryfikacji wpisz następującą komendę:

```sh
uname -a
Linux ns3065593 4.10.17-041017-generic #201705201051 SMP Sat May 20 14:53:33 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

Następnie zainstaluj bibliotekę i zatrzymaj aplikację `lightdm`:

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
 
### Instalacja CUDA
 
Teraz możesz przystąpić do instalacji platfomy CUDA. Kolejne kroki:

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
 
`nvidia-smi` działa poprawnie:

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

## Sprawdź również

[Dowiedz się więcej na temat serwerów z układami GPU](https://www.ovh.pl/serwery_dedykowane/gpu/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.