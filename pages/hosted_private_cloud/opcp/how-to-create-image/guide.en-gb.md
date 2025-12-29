---
title: "Building a custom OpenStack Image on OPCP"
excerpt: "Find out how to create your own operating system image on On-Prem Cloud Platform"
updated: 2025-11-21
---

## Objective

This guide focuses on building customized disk images for both OpenStack Ironic (bare metal) and Nova (compute) using [diskimage-builder](https://github.com/openstack/diskimage-builder).

It's a good starting point to understand how [diskimage-builder](https://github.com/openstack/diskimage-builder) (DiB) works with a practical example. We will build a custom Debian 13 image from the upstream image and customize it with Ansible.

At the end, we will generate a `debian13.qcow2` whole disk image (with the kernel and initramfs), ready to be imported into OpenStack Glance.

## OpenStack Ironic/Nova expectations

### Image Format

- **qcow2** (recommended): Compressed and efficient for Glance storage
- **raw**: Uncompressed disk image

The image should be a **whole disk image** that includes:

- Boot sector/EFI system partition
- Operating system partition(s)
- Kernel and initramfs embedded in the disk

### Partitioning and Boot Requirements

#### For BIOS Boot:

- GPT or MBR partition table
- BIOS boot partition (1-2MB, type `ef02` for GPT)
- Root partition with bootloader installed (GRUB2)
- Bootloader must be installed to MBR/boot sector

#### For EFI Boot:

- GPT partition table required
- EFI System Partition (ESP): 512MB, FAT32, mounted at `/boot/efi`
- Root partition with GRUB2 EFI bootloader
- EFI boot entries properly configured

#### For Ironic Bare Metal (Recommended Configuration):

**Standard Partition Layout (Simple):**

```yaml
# GPT partition table
- EFI System Partition (ESP): 512MiB, type EF00, FAT32, mounted at /boot/efi
- BIOS Boot Partition (BSP): 8MiB, type EF02 (for hybrid BIOS/EFI compatibility)
- Root partition: remaining space, type 8300, ext4, mounted at /
```

## Requirements

**System Requirements:**

- Root permissions
- At least 10GB available

- Some packages:

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

Install diskimage-builder (DiB) in a virtualenv:

```bash
mkdir -p diskimage-builder
python3 -m venv venv
. ./venv/bin/activate
pip install diskimage-builder
```

### Understanding diskimage-builder Elements

Elements are modular components that customize your image.

| Directory | Purpose |
|-----------|---------|
| `environment.d/` | Environment variables |
| `extra-data.d/` | Files added before installation |
| `pre-install.d/` | Pre-installation scripts |
| `post-install.d/` | Post-installation scripts |
| `finalise.d/` | Final customization |
| `cleanup.d/` | Cleanup tasks |
| `package-installs.yaml` | Package declarations |
| `block-device-default.yaml` | Disk partitioning |

Scripts in these directories execute in numerical/alphabetical order.

### Creating a Customization Element with Ansible

Create an element that uses Ansible for customization:

**Directory Structure:**

```bash
mkdir -p elements/os-custom/extra-data.d/ansible/{roles/customize/tasks,inventory/host_vars/sys_image}
mkdir -p elements/os-custom/extra-data.d/ansible/roles/customize/files
mkdir -p elements/os-custom/post-install.d
```

**Post-install Scripts:**

`elements/os-custom/post-install.d/00-install-ansible`:

```bash
#!/bin/bash
set -eux
apt install --yes ansible
```

`elements/os-custom/post-install.d/01-apply-ansible`:

```bash
#!/bin/bash
set -eux
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
cd /tmp/in_target.d/extra-data.d/ansible
ANSIBLE_STDOUT_CALLBACK=debug ansible-playbook -i inventory main.yml
```

`elements/os-custom/post-install.d/02-remove-ansible`:

```bash
#!/bin/bash
set -eux
apt remove --yes ansible
apt autoremove --yes
```

**Make scripts executable:**

```bash
chmod +x elements/os-custom/post-install.d/*
```

**Ansible Configuration:**

`elements/os-custom/extra-data.d/ansible/main.yml`:

```yaml
---
- hosts: all
  gather_facts: true
  roles:
    - name: customize
```

`elements/os-custom/extra-data.d/ansible/inventory/hosts`:

```ini
[all]
sys_image sys_image ansible_connection=local ansible_become=no
```

In this example, we are using `cloud-init` with the `netplan` renderer to configure `systemd-networkd`. This is a working example of customizing network configuration; feel free to adapt it to your needs.

**Note:** When Ironic configures bare metal on first boot, it will propagate a `network_metadata` manifest (configdrive) that can be interpreted by `cloud-init` to automatically configure the network (such as static IP, LACP, etc.).

`elements/os-custom/extra-data.d/ansible/roles/customize/tasks/main.yml`:

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

`elements/os-custom/extra-data.d/ansible/roles/customize/files/50-netplan.cfg`:
```yaml
system_info:
  network:
    renderers: ['netplan']
```

**Additional Packages:**

`elements/os-custom/package-installs.yaml`:
```yaml
man:
nano:
tcpdump:
iputils-ping:
```

**Element Dependencies:**

`elements/os-custom/element-deps`:

```
debian
```

## Building the Image

Create an environment file `debian13.env`:

```bash
export DIB_RELEASE=trixie
export DIB_CLOUD_INIT_DATASOURCES="ConfigDrive, OpenStack"
export DIB_GRUB_TIMEOUT=10
```

Build the image:

```bash
mkdir -p tmp-build-dir
export TMPDIR="$(pwd)/tmp-build-dir"
export ELEMENTS_PATH="$(pwd)/elements"

source debian13.env
disk-image-create -t qcow2 --image-size 16GB -a amd64 vm block-device-efi os-custom debian -o debian13
```

You should get a file `debian13.qcow2`.

If you want environment and packages SBOM files:

```bash
cp debian13.d/dib-manifests/dib_environment debian13.env.sbom
cp debian13.d/dib-manifests/dib-manifest-dpkg-debian13 debian13.pkg.sbom
```

### Testing the Image

A quick way to test the generated image is using qemu to spawn a virtual machine using the qcow2 image and a VNC client to connect to the monitor. We can test both EFI and BIOS boot.

#### BIOS Boot

```bash
qemu-system-x86_64 -enable-kvm -vnc 0.0.0.0:0,password=on -monitor stdio -m 2048 -drive file=debian13.qcow2,if=virtio,format=qcow2
```

```bash
# Set up a custom VNC password
QEMU 10.0.3 monitor - type 'help' for more information
(qemu) change vnc password
Password: ********
```

Use any VNC client to connect :5200

#### EFI

```bash
# Copy OVMF vars to avoid modifying the original
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
# Set up a custom VNC password
QEMU 10.0.3 monitor - type 'help' for more information
(qemu) change vnc password
Password: ********
```

Use any VNC client to connect :5200

### Upload Image to OpenStack:

```bash
openstack image create \
  --disk-format qcow2 \
  --container-format bare \
  --file debian13.qcow2 \
  debian13
```

Done! You can now create a baremetal instance or compute instance with the new created image.
