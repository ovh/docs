---
title: 'Changelog delle immagini Public Cloud & VPS'
slug: changelog-immagini
excerpt:  Scopri le modifiche apportate alle immagini fornite sulle soluzioni Public Cloud e VPS
section: 'Per iniziare'
order: 8
updated: 2021-02-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 18/01/2021**

## Obiettivo

OVHcloud offre una varietà di sistemi operativi e applicazioni preinstallate su VPS e Public Cloud. Come provider, ci assicuriamo che le immagini che proponiamo ai nostri clienti siano aggiornate, il che significa che pubblichiamo regolarmente nuove immagini. La trasparenza è fondamentale per OVHcloud e intendiamo informare i nostri clienti sulle modifiche apportate ad ogni immagine all'interno di qualsiasi nuova versione. Questa pagina ti permette di seguire il report delle modifiche (changelog) delle nostre immagini.

## Prerequisiti

Questa guida si applica esclusivamente alle soluzioni [VPS](https://www.ovhcloud.com/it/vps/compare/) e alle istanze [Public Cloud](https://www.ovhcloud.com/it/public-cloud/compute/).

## 2021 Changelog

In questa sezione viene mostrato il changelog per ogni mese del 2021.

### June

```
--- 01 June 2021 ---
Image: All
Product: Public Cloud / VPS
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/920sf4j7d8lq>
Changelog:
1. Adding new image: Fedora 34
2. Adding new image: Ubuntu 21.04
3. New image property "distro_family" added to each image to help group images into distributions.
4. New image property "hypervisor_type" added to each image which will be used by Nova to filter suitable hosts. This is to prevent spawning images made for QEMU to be spawned on Ironic hosts as they are not compatible.
5. Patch issue with Centos 7 - Plesk and Debian 10 - Plesk image with Lets Encrypt SSL. Plesk will now generate unique hostname for each installation unless there is a valid hostname detected on first boot.
6. General system updates applied to all images.

```

### February

```
--- 03 February 2021 ---
Image: All
Product: Public Cloud / VPS
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/58k8v7rm4crk>
Changelog:
1. All images contain new package / security updates from vendors since our last image updates
2. Centos 7 - cPanel image: we disabled QEMU Guest Agent on this image due to issues caused by creation of a virtfs when allowing Jailed Shell access. This virtfs cannot be frozen by QEMU Guest Agent and therefore causes a kernel panic. Customers with previous release of this image should check [this guide for fix](https://docs.ovh.com/gb/en/vps/cpanel_auto_backup/)

```

### January

```
--- 18 January 2021 ---
Image: All
Product: Public Cloud / VPS
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/961mgl7qbt35>
Changelog:
1. Release of new Debian 10 - Plesk image
2. All images contain new package / security updates from vendors since our last image updates

```

## Changelog 2020

In questa sezione viene mostrato il changelog per ogni mese del 2020.

### November

```
--- 09 November 2020 ---
Image: NVIDIA GPU Cloud (NGC)
Product: Public Cloud
Changelog:
1. We switch from Ubuntu 16.04 to Ubuntu 20.04 base
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Installation of qemu-guest-agent, curl & gpg

--- 17 November 2020 ---
Image: Fedora 33 & Ubuntu 20.10
Product: Public Cloud
Changelog:
The new Fedora 33 and Ubuntu 20.10 images are now available for all public cloud regions. VPS2020 will soon offer the images also.
```

### October

```
--- 07 October 2020 ---
Image: Ubuntu 20.04, Ubuntu 18.04, Ubuntu 16.04, Debian 10, Debian 9, rescue-ovh
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/2m5smflk2706>
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Latest patches applied
4. We are moving the rescue-ovh image from Debian 9 to Debian 10 - we install more packages such as zfs utils and other useful diagnostics tools
5. We switch to cloud images with Debian 10 & Debian 9 which are optimized for cloud use. Customers with automated deployment using Debian 9 should expect interface naming have changed. Only change we make on these images is just to install packages mentioned above.

--- 08 October 2020 ---
Image: All Debian 8 images
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/2m5smflk2706>
Changelog:
We have removed the Debian 8 images from our catalogue as it has reached end of life (https://wiki.debian.org/DebianReleases). Pre-installed application images has been replaced with new ones and guides has been made available.

--- 14 October 2020 ---
Image: All Centos images
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/ffvm20r8cwc7>
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image. For now with pre-installed apps the manifest does not included packages installed by/for the application
3. Latest patches applied

--- 20 October 2020 ---
Image: Fedora 31
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/ypzbqc575dvy>
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image.
3. Latest patches applied

--- 22 October 2020 ---
Image: Fedora 32
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/1n1fv1xhd9rn>
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image.
3. Latest patches applied

--- 27 October 2020 ---
Image: Archlinux
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/6jfb3f0f2sjz>
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Latest patches applied and using release 2020.10.01
```

### September

```
--- 02 September 2020 ---
Image: Centos 8
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/99m3kb3tzgh3>
Changelog:
1. Qemu Guest Agent installed to improve snapshot experience
2. Installation of pending system updates compared to previous image. Image is up-to-date as of the creation of the image.

--- 21 September 2020 ---
Image: Debian 10
Product: VPS 2016 - 2020 & Public Cloud
Task: <https://bare-metal-servers.status-ovhcloud.com/incidents/5m96knyn78l9>
Changelog:
1. Qemu Guest Agent is now installed and enabled - to improve snapshot experience
2. curl & gpg packages are now installed
3. Using the Debian Cloud image provided by Debian
4. Applying recent system update - up to the date of image build
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
