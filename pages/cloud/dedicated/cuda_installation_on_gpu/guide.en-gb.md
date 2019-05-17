---
title: Installing CUDA on a dedicated GPU server
slug: install-cuda-serveur-gpu
section: Server Management
---

**Last updated 14th December 2017**

## Objective

You can install Compute Unified Device Architecture (CUDA) on a GPU server, but it requires a series of actions which we will explain to you in this guide.

## Requirements

- You must own a [GPU server](https://www.ovh.co.uk/dedicated_servers/gpu/).
- You must be logged into your server via SSH

## Instructions

Once you have reinstalled the distribution/operating system, follow the instructions below.

### Ubuntu

#### Update the kernel

```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-headers-4.10.17-041017_4.10.17-041017.201705201051_all.deb
```

```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-headers-4.10.17-041017-generic_4.10.17-041017.201705201051_amd64.deb
```

```sh
wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.10.17/linux-headers-4.10.17-041017-generic_4.10.17-041017.201705201051_amd64.deb
```

```sh
sudo dpkg -i ./linux-*
```

### Modify the grub.cfg file

Edit the following file, and comment out the OVH kernel part:
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

At this point, you will need to reboot the server. It should reboot on a new kernel. 

To check this, you can type the following commands:

```sh
uname -a
Linux ns3065593 4.10.17-041017-generic #201705201051 SMP Sat May 20 14:53:33 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

Then install a library and stop `lightdm`:

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
 
### Install CUDA
 
Now, you just need to install CUDA by following the procedure below:

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
#Once nano is open edit the PATH variable to include /usr/local/cuda-8.0/bin folder. After editing the file, the screen would look like this.
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
 
The `nvidia-smi` should now function properly:

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

### CentOS 7

#### Update the kernel

The first thing we must do before upgrading the kernel is to upgrade all packages to the latest version. Update the repository and all packages to latest versions with the yum command below.

```sh
sudo yum -y update
```

Before installing new kernel version, we need to add new repository (Example: ELRepo repository).

Add ELRepo gpg key to the system.
```sh
sudo rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```

Now add new ELRepo repository with rpm command.
```sh
sudo rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
```

Next, check all repositories enabled on the system, and make sure ELRepo is on the list.
```sh
yum repolist

Loading mirror speeds from cached hostfile
 * elrepo: mirrors.coreix.net
 * epel: mirrors.coreix.net
id del repositorio                                                                               nombre del repositorio                                                                                                                estado
base/7/x86_64                                                                                    CentOS-7 - Base                                                                                                                       10.019
cuda                                                                                             cuda                                                                                                                                     851
elrepo                                                                                           ELRepo.org Community Enterprise Linux Repository - el7                                                                                   118
epel/x86_64                                                                                      Extra Packages for Enterprise Linux 7 - x86_64                                                                                        13.190
extras/7/x86_64                                                                                  CentOS-7 - Extras                                                                                                                        413
updates/7/x86_64                                                                                 CentOS-7 - Updates                                                                                                                     1.928
repolist: 26.519
```

In this step, we will install latest kernel version from the ELRepo repository.
```sh
sudo yum --enablerepo=elrepo-kernel install kernel-ml
```

Check all available kernel versions with the awk command below.
```sh
sudo awk -F\' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg

0 : CentOS Linux (5.1.2-1.el7.elrepo.x86_64) 7 (Core)
1 : CentOS Linux (3.10.0-957.12.2.el7.x86_64) 7 (Core)
2 : CentOS Linux (3.10.0-957.5.1.el7.x86_64) 7 (Core)
3 : CentOS Linux (3.10.0-957.el7.x86_64) 7 (Core)
4 : CentOS Linux (0-rescue-48eae5db334f4be180c62013c3806594) 7 (Core)
```

We want to use last kernel downloaded as our default, so you can use the following command to make this happen.
```sh
sudo grub2-set-default 0
```
Now we must to regenerate the grub
```sh
sudo grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg
```

Then we must to reboot the server to apply the changes
```sh
sudo reboot
```

#### Install CUDA 

Now [Nvidia](https://www.ovh.com/auth/?action=gotomanager)
```sh
wget http://developer.download.nvidia.com/compute/cuda/repos/rhel7/x86_64/cuda-repo-rhel7-10.1.168-1.x86_64.rpm
```


```sh
sudo rpm -i cuda-repo-*.rpm
```


```sh
sudo yum install cuda
```


```sh
sudo nano /etc/bashrc
```


```
export PATH=/usr/local/cuda/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH
```


```sh
source ~/.bashrc
```


```sh
nvcc --version

nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2019 NVIDIA Corporation
Built on Wed_Apr_24_19:10:27_PDT_2019
Cuda compilation tools, release 10.1, V10.1.168
```


## Go further

Join our community of users on <https://community.ovh.com/en/>.
