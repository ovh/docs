---
title: 'Utiliser l''accélérateur FPGA pour convertir une image BMP en JPEG (Bêta)'
slug: utiliser-accelerateur-fpga-pour-conversion-jpeg
excerpt: 'Découvrez comment utiliser une carte FPGA pour convertir des images BMP au format JPEG'
section: Tutoriels
hidden: true
---

**Dernière mise à jour le 15/05/2018**

## Objectif

Les cartes FPGA sont des composants matériels pouvant être flashés pour une utilisation spécifique en intégrant directement du code sur la puce pour bénéficier d'une accélération matérielle optimale. La bêta de FPGA sur le Public Cloud d'OVH est disponible [ici](https://labs.ovh.com/fpga-accelerators-on-public-cloud]{.external}. Une inscription à cette version bêta est cependant nécessaire pour utiliser les outils FPGA.

**Ce guide vous explique commnent utiliser une carte FPGA à la demande sur le Public Cloud d'OVH pour convertir des images BMP au format JPEG.**

Au-delà de la conversion d'images, l'intérêt de ce guide est de montrer le fonctionnement des cartes FPGA ainsi que le gain de performance obtenu.

## Prérequis

- Avoir créé [un utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}.
- Avoir mis en place [les variables d'environnement OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/){.external}.
- Avoir généré [vos identifiants API et les clés d'autorisation OVH](https://eu.api.ovh.com/g934.first_step_with_api){.external}.
- [Posséder une clé SSH](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/){.external}.
- [Avoir installé le client OpenStack](https://github.com/openstack/python-openstackclient){.external}.
- Être inscrit à la [bêta FPGA sur Public Cloud](https://labs.ovh.com/fpga-accelerators-on-public-cloud){.external}.
- [Avoir obtenu des identifiants Accelize](https://accelstore.accelize.com/user/register){.external}.


## En pratique

### Démarrer une instance FPGA

La bêta n'est actuellement disponible que sur la région GRA3. Cibler cette région après l'activation de la bêta sur votre projet cloud est donc indispensable. Il est également nécessaire de choisir le type d'instance FPGA souhaité. La carte sera paramétrée avant le démarrage, vous permettant ainsi de l'utiliser directement une fois le système démarré.

Les *flavors* FPGA commencent par `f2`. Voici comment les lister avec la CLI :

```sh
$ openstack flavor list | grep f2-
| 35ab4a5f-baff-48c6-9e1a-264209fbb91d | win-f2-120-gzip   | 120000 |  400 |  0 |  32 | False |
| 497ef30e-7bb1-4d4c-b546-e1cc5898cb4b | f2-120-jpeg       | 120000 |  400 |  0 |  32 | False |
| 92378fc3-e415-4d6e-bf9a-cfd3784cf0ba | win-f2-120-jpeg   | 120000 |  400 |  0 |  32 | False |
| 9f94fd6c-e129-46e4-ba12-7e4e96a57027 | f2-120-regexp     | 120000 |  400 |  0 |  32 | False |
| bdd068b9-80b1-499d-86ce-0feb731b3724 | f2-120-gzip       | 120000 |  400 |  0 |  32 | False |
| dbf96a5d-2d60-486e-a7e7-2cc28e659283 | win-f2-120-regexp | 120000 |  400 |  0 |  32 | False |
```

Les *flavors* **jpeg** flasheront la carte avec l'accélérateur FPGA JPEG.

Une image préconfigurée pour FPGA est également disponible :

```sh
$ openstack image list | grep -i CleanHost
| 2c1e08bb-f949-4aa0-8558-dd6b8745a9e8 | 20180330_CleanHost_BMP2JPEG_1.0.4_1    | active |
| 6e27a7ba-eac8-4d45-8648-89f2000f3b0b | 20180330_CleanHost_HyperFiRe_1.0.4_1   | active |
```

Vous pouvez maintenant démarrer une instance avec cette commande :

```sh
$ openstack server create --flavor f2-120-jpeg --image 20180330_CleanHost_BMP2JPEG_1.0.4_1 --key-name your_key --nic net-id=eecc8610-f977-461c-bad2-917d7be01144 bmp2jpeg
```

## Utiliser l'accélérateur FPGA

Une fois connecté à l'instance avec l'utilisateur *CentOS*, toutes les instructions sont fournies pour initialiser l'accélérateur avec vos identifiants :

```sh
ACCELIZE_CLIENT_ID=<Your_Client_ID>
ACCELIZE_CLIENT_SECRET==<Your_Client_Secret>
sudo sh -c " echo '{\"client_secret\": \"$ACCELIZE_CLIENT_SECRET\", \"client_id\": \"$ACCELIZE_CLIENT_ID\"}' > /etc/accelize/credentials.json"
sudo systemctl start meteringclient
sudo systemctl start meteringsession
sudo /opt/accelize/accelerator/accelerator -m0
```

Nous allons maintenant lancer une conversion d'image BMP vers le format JPEG grâce à cet accélérateur :

```sh
$ sudo /opt/accelize/accelerator/accelerator -m1 -i /opt/accelize/host_app/samples/cars_1920x1080.bmp -o /dev/shm/cars_1920x1080.jpg
Input DATA file '/opt/accelize/host_app/samples/cars_1920x1080.bmp' is now open and its size is 5.9 MB (6220854 B).
Output DATA file '/dev/shm/cars_1920x1080.jpg' is now open and its size is currently 0.
Processing through FPGA
FPGA has been reset.
Info of bitmap '/opt/accelize/host_app/samples/cars_1920x1080.bmp':
        - Width: 1920
        - Height: 1080
        - Number of bits per pixels: 24
ALSE JPEG IP reset
Output DATA file '/dev/shm/cars_1920x1080.jpg' is now close and its size is 1.7 MB (1741100 B).
Input DATA file '/opt/accelize/host_app/samples/cars_1920x1080.bmp' is now close.
=== PROFILING SUMMARY ===
Total bytes transferred: 7.6 MB
Wall-clock time: 0.048395 s
FPGA elpased time: 0.024452 s
==> SUCCESS <==
Created output INFO file 'output.json': Success
```

Pour que vous puissiez apprécier la performance de FPGA, voici un test qui exécute 100 cycles de conversion de 7 images :

```sh
$ j=0; time while [ $j -lt 100 ]; do (( ++j )); for i in *.bmp; do sudo /opt/accelize/accelerator/accelerator -v 4 -m1 -i $i -o /dev/shm/$(basename -s .bmp $i).jpg; done; done
real    0m55.511s
user    0m39.581s
sys     0m27.143s
```

À titre de comparaison, voici le même test sans l'utilisation de l'accélérateur FPGA :

```sh
$ j=0; time while [ $j -lt 100 ]; do (( ++j )); for i in *.bmp; do sudo convert $i  /dev/shm/$(basename -s .bmp $i).jpg; done; echo $j; done
real    1m26.070s
user    0m56.538s
sys     0m29.777s
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.