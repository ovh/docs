---
title: 'AMD SME / SEV en Ubuntu 20'
excerpt: 'Habilite SME en su servidor ubuntu y genere una máquina virtual SEV'
updated: 2020-05-07
---


# Objectivo

Habilite AMD SME en su servidor Ubuntu 20.04 y genere una máquina virtual KVM / QEMU asegurada con SEV

## Requisitos

- Un servidor dedicado con una CPU AMD Naples / Rome Epyc
-  Acceso administrativo (root) al servidor a través de SSH
-  Ubuntu 20.04 instalado

## Procedimiento

### Paso 1: habilite SME y SEV

Habilitar SME solo requiere agregar `mem_encrypt=on` en el cmdline de arranque del kernel. Para poder usar SEV en KVM, necesitamos agregar `kvm_amd.sev=1` también.

Para hacer esto, necesitamos agregarlo a `GRUB_CMDLINE_LINUX_DEFAULT`.

La forma habitual de hacerlo es editando `/etc/default/grub`, sin embargo, en las imágenes de nube de Ubuntu, necesitamos editar este archivo en su lugar: `/etc/default/grub.d/50-cloudimg-settings.cfg`

Esto es lo que parece en un Ubuntu 20.04 recién instalado, después de editar el archivo:

```sh
ubuntu@nsXXX:~# grep mem_encry /etc/default/grub.d/50-cloudimg-settings.cfg
GRUB_CMDLINE_LINUX_DEFAULT="modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1"
ubuntu@nsXXX:~#
```

Ahora, necesitamos actualizar nuestra configuración de grub para que nuestro cambio sea efectivo:

```sh
sudo update-grub
```

### Paso 2: reinicie el servidor para tener SME / SEV disponible

Reiniciemos el servidor para aplicar nuestros cambios de cmdline:

```sh
sudo reboot
```

Una vez que el servidor esté respaldado, deberíamos ver `mem_encrypt=on` y `kvm_amd.sev=1` en `/proc/cmdline`:

```sh
ubuntu@nsXXX:~# cat /proc/cmdline
BOOT_IMAGE=/boot/vmlinuz-5.4.0-26-generic root=UUID=41b1b860-c5d2-4b43-a7e5-cb45c2f44e08 ro vga=normal nomodeset modprobe.blacklist=btrfs mem_encrypt=on kvm_amd.sev=1
```

También debería ver los siguientes mensajes en dmesg:

```sh
ubuntu@nsXXX:~# dmesg | grep SME
[    1.247928] AMD Secure Memory Encryption (SME) active
ubuntu@nsXXX:~# dmesg | grep "SEV supported"
[    7.637219] SVM: SEV supported
```

También puede verificar `/sys/module/kvm_amd/parameters/sev` para verificar que SEV esté disponible:

```sh
ubuntu@nsXXX:~# cat /sys/module/kvm_amd/parameters/sev
```

### Paso 3: requisitos de instalación / descarga para generar nuestra VM invitada

Instalar paquetes:

```sh
sudo apt update
sudo apt install libvirt-daemon-system virtinst qemu-utils cloud-image-utils
```

Descarguemos la imagen para nuestra VM. Usaremos una imagen de nube Ubuntu 20.04:

```sh
wget https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img
```

### Paso 4 - Prepara la imagen
Asegurémonos de que la imagen tenga el formato correcto para QEMU / KVM y colóquela en la carpeta adecuada:

```sh
sudo qemu-img convert focal-server-cloudimg-amd64.img /var/lib/libvirt/images/sev-guest.img
```

Como estamos usando una imagen en la nube, también debemos preparar una pequeña ISO que configurará la contraseña del usuario de `ubuntu`:

```sh
cat >cloud-config <<EOF
#cloud-config

password: CHANGEME.aiZ4aetiesig
chpasswd: { expire: False }
ssh_pwauth: False
EOF

sudo cloud-localds /var/lib/libvirt/images/sev-guest-cloud-config.iso cloud-config
```


### Paso 5 - Inicie nuestra VM

```sh
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

Nota: al momento de escribir, hay un problema en apparmor / libvirt que hará que el comando anterior falle con el siguiente mensaje:

```sh
ERROR    internal error: process exited while connecting to monitor: 2020-04-28T15:04:14.348979Z qemu-system-x86_64: sev_guest_init: Failed to open /dev/sev 'Permission denied'
```

Para solucionarlo, editaremos `/etc/apparmor.d/abstraction/libvirt-qemu` para autorizar el acceso de `rw` a `/dev/sev`. Así es como debería verse una vez editado:

```sh
[...]
  /dev/net/tun rw,
  /dev/kvm rw,
  /dev/ptmx rw,
  /dev/sev rw,
  @{PROC}/*/status r,
[...]
```

Una vez que hemos generado con éxito la VM, podemos iniciar sesión utilizando las credenciales definidas en la `cloud-config` anteriormente, y verificar que SEV esté habilitado:

```sh
ubuntu@ubuntu:~$ dmesg | grep SEV
[    0.158239] AMD Secure Encrypted Virtualization (SEV) active
```

## Referencias y recursos adicionales.

- [AMD Secure Encrypted Virtualization (SEV)](https://developer.amd.com/sev/){.external}
- [libvirt : Launch security with AMD SEV](https://libvirt.org/kbase/launch_security_sev.html){.external}
- [libvirt XML domain format - launchSecurity](https://libvirt.org/formatdomain.html#launchSecurity){.external}
- [libvirt domain capabilities - SEV](https://libvirt.org/formatdomaincaps.html#elementsSEV){.external}
- [github.com/AMDESE/AMDSEV](https://github.com/AMDESE/AMDSEV){.external}
- [github.com/AMDESE/sev-tool](https://github.com/AMDESE/sev-tool){.external}

------


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
