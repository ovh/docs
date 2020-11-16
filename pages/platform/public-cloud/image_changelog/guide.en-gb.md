---
title: 'PCI & VPS - Image changelog'
slug: pci-vps-image-changelog
excerpt: Find out what has changed in the images provided for Public Cloud & VPS
section: 'Getting started'
order: 8
---

**Last updated 16th November 2020**

## Objective

OVHcloud offers a variety of operating systems and pre-installed applications on the VPS and Public cloud products. As a provider, we ensure the images we provide to our customers are kept up to date which means we reguaraly release new images. Transparency is key to OVHcloud and we intend to share what changes we make to any image during any new release. This page will allow customers to track the changelog of our images.

## Requirements

This documentation will only apply to [VPS](https://www.ovhcloud.com/en-gb/vps/compare/) and [Public Cloud instances](https://www.ovhcloud.com/en-gb/public-cloud/compute/) only.

## 2020 Changelog

This section will display changelog for each month in the year 2020.

### September

```
--- 02 September 2020 ---
Image: Centos 8
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=46475
Changelog:
1. Qemu Guest Agent installed to improve snapshot experience
2. Installation of pending system updates compared to previous image. Image is up-to-date as of the creation of the image.

--- 21 September 2020 ---
Image: Debian 10
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=46840
Changelog:
1. Qemu Guest Agent is now installed and enabled - to improve snapshot experience
2. curl & gpg packages are now installed
3. Using the Debian Cloud image provided by Debian
4. Applying recent system update - up to the date of image build
```

### October

```
--- 07 October 2020 ---
Image: Ubuntu 20.04, Ubuntu 18.04, Ubuntu 16.04, Debian 10, Debian 9, rescue-ovh
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47107
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Latest patches applied
4. We are moving the rescue-ovh image from Debian 9 to Debian 10 - we install more packages such as zfs utils and other useful diagnostics tools
5. We switch to cloud images with Debian 10 & Debian 9 which are optimized for cloud use. Customers with automated deployment using Debian 9 should expect interface naming have changed. Only change we make on these images is just to install packages mentioned above.

--- 08 October 2020 ---
Image: All Debian 8 images
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47107
Changelog:
We have removed the Debian 8 images from our catalog as it has reached end of life (https://wiki.debian.org/DebianReleases). Pre-installed application images has been replaced with new ones and guides has been made available.

--- 14 October 2020 ---
Image: All Centos images
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47181
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image. For now with pre-installed apps the manifest does not included packages installed by/for the application
3. Latest patches applied

--- 20 October 2020 ---
Image: Fedora 31
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47271
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image.
3. Latest patches applied

--- 22 October 2020 ---
Image: Fedora 32
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47324
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image.
3. Latest patches applied

--- 27 October 2020 ---
Image: Archlinux
Product: VPS 2016 - 2020 & Public Cloud
Travaux: http://travaux.ovh.net/?do=details&id=47409
Changelog:
1. Installation of qemu-guest-agent, curl & gpg
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Latest patches applied and using release 2020.10.01
```

### November

```
--- 09 November 2020 ---
Image: NVIDIA GPU Cloud (NGC)
Product: Public Cloud
Changelog:
1. We switch from Ubuntu 16.04 to Ubuntu 20.04 base
2. From now on, we will place into the images a file (/etc/cloud/ovhcloud.manifest) which will show packages we installed / ensure is installed in the image
3. Installation of qemu-guest-agent, curl & gpg
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.