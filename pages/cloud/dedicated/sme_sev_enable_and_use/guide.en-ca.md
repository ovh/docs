---
title: 'AMD SME/SEV on Ubuntu 20'
slug: enable-and-use-amd-sme-sev
excerpt: 'Enable SME on your ubuntu server and spawn an SEV virtual machine'
section: 'Advanced use'
---

**Last updated April 30th, 2020**

## Objective

Enable AMD SME on your Ubuntu 20.04 server, and spawn a KVM/QEMU virtual machine secured with SEV

## Requirements

- A dedicated server with an AMD Epyc CPU
- Administrative (root) access to the server via SSH
- Ubuntu 20.04 installed

## Instructions

### Step 1 - Enable SME and SEV

Enabling SME just requires adding `mem_encrypt=on` on the kernel's boot cmdline. To be able to use SEV in KVM, we need to add `kvm_amd.sev=1` as well.

To do this, we need to add it to `GRUB_CMDLINE_LINUX_DEFAULT`.

The usual way to do this is by editing `/etc/default/grub`, however, on Ubuntu cloud images, we need to edit this file instead : `/etc/default/grub.d/50-cloudimg-settings.cfg`

Here's what it looks like on a freshly installed Ubuntu 20.04, after editing the file :
```bash
ubuntu@nsXXX:~# grep mem_encry /etc/default/grub.d/50-cloudimg-settings.cfg
GRUB_CMDLINE_LINUX_DEFAULT="modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1"
ubuntu@nsXXX:~#
```

Now, we need to update our grub configuration to make our change effective :
```bash
sudo update-grub
```

### Step 2 - Reboot the server to have SME/SEV available

Let's reboot the server to apply our cmdline changes :

```bash
sudo reboot
```

Once the server is back up, we should see `mem_encrypt=on` and `kvm_amd.sev=1` in `/proc/cmdline` :
```bash
ubuntu@nsXXX:~# cat /proc/cmdline
BOOT_IMAGE=/boot/vmlinuz-5.4.0-26-generic root=UUID=41b1b860-c5d2-4b43-a7e5-cb45c2f44e08 ro vga=normal nomodeset modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1
```

You should also see the following messages in dmesg :
```bash
ubuntu@nsXXX:~# dmesg | grep SME
[    1.247928] AMD Secure Memory Encryption (SME) active
ubuntu@nsXXX:~# dmesg | grep "SEV supported"
[    7.637219] SVM: SEV supported
```

You can also check `/sys/module/kvm_amd/parameters/sev` to verify that SEV is available :
```bash
ubuntu@nsXXX:~# cat /sys/module/kvm_amd/parameters/sev
1
```

### Step 3 - Install/download requirements for spawning our guest VM

Install packages :
```bash
sudo apt update
sudo apt install libvirt-daemon-system virtinst qemu-utils cloud-image-utils
```

Let's download the image for our VM. We'll use an Ubuntu 20.04 cloud image :
```bash
wget https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img
```

### Step 4 - Prepare the image

Let's ensure that the image is in the correct format for QEMU/KVM, and put it in the proper folder :
```bash
sudo qemu-img convert focal-server-cloudimg-amd64.img /var/lib/libvirt/images/sev-guest.img
```

Since we're using a cloud image, we also need to prepare a small ISO that will configure the `ubuntu` user's password :
```bash
cat >cloud-config <<EOF
#cloud-config

password: CHANGEME.aiZ4aetiesig
chpasswd: { expire: False }
ssh_pwauth: False
EOF

sudo cloud-localds /var/lib/libvirt/images/sev-guest-cloud-config.iso cloud-config
```

### Step 5 - Launch our VM

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

Note : at the time of writing, there is an issue in apparmor/libvirt that wil make the above command fail with the following message :
```bash
ERROR    internal error: process exited while connecting to monitor: 2020-04-28T15:04:14.348979Z qemu-system-x86_64: sev_guest_init: Failed to open /dev/sev 'Permission denied'
```
To fix it, we'll edit `/etc/apparmor.d/abstractions/libvirt-qemu` to authorize `rw` access to `/dev/sev`. Here's what it should look like once edited :
```
[...]
  /dev/net/tun rw,
  /dev/kvm rw,
  /dev/ptmx rw,
  /dev/sev rw,
  @{PROC}/*/status r,
[...]
```

Once we've succesfully spawned the VM, we can login using the credentials defined in `cloud-config` earlier, and check that SEV is indeed enabled :
```bash
ubuntu@ubuntu:~$ dmesg | grep SEV
[    0.158239] AMD Secure Encrypted Virtualization (SEV) active
```

## References and additional resources

- [AMD Secure Encrypted Virtualization (SEV)](https://developer.amd.com/sev/){.external}
- [libvirt : Launch security with AMD SEV](https://libvirt.org/kbase/launch_security_sev.html){.external}
- [libvirt XML domain format - launchSecurity](https://libvirt.org/formatdomain.html#launchSecurity){.external}
- [libvirt domain capabilities - SEV](https://libvirt.org/formatdomaincaps.html#elementsSEV){.external}
- [github.com/AMDESE/AMDSEV](https://github.com/AMDESE/AMDSEV){.external}
- [github.com/AMDESE/sev-tool](https://github.com/AMDESE/sev-tool){.external}
