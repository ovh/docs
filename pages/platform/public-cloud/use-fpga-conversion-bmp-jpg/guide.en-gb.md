---
title: 'Using the FPGA accelerator to convert a BMP image to a JPEG (Beta)'
slug: using-fpga-accelerator-to-convert-to-jpeg
excerpt: 'Find out how to use an FPGA card to convert BMP images to JPEG format'
section: Tutorials
hidden: true
---

**Last updated 20th June 2018**

## Objective

FPGA cards are hardware components that can be flashed for a specific purpose by writing code directly to the chip, in order to optimise the level of hardware acceleration. The FPGA beta for OVH Public Cloud is available [here](https://labs.ovh.com/fpga-accelerators-on-public-cloud){.external}. You do, however, have to sign up for this beta version in order to use the FPGA tools.

**This guide will explain how to use an FPGA card as a service in the OVH Public Cloud to convert BMP images to JPEG format.**

Beyond converting images, the purpose of this guide is to show how FPGA cards work, and the increased performance they provide.

## Requirements

- an OpenStack user account
- set up the [OpenStack environment variables](https://docs.ovh.com/gb/en/public-cloud/deploy-infrastructure-with-variables-and-formatted-outputs-openstack-heat/){.external}
- [API credentials and your OVH authorisation keys](https://eu.api.ovh.com/g934.first_step_with_api){.external}
- [an SSH key](https://docs.ovh.com/gb/en/public-cloud/create-ssh-keys/){.external}
- [the OpenStack client installed](https://github.com/openstack/python-openstackclient){.external}
- [FPGA beta in Public Cloud](https://labs.ovh.com/fpga-accelerators-on-public-cloud){.external} registration
- [Accelize credentials obtained](https://accelstore.accelize.com/user/register){.external}


## Instructions

### Launch an FPGA instance

The beta version is currently available in the GRA3 region only. Targeting this region after activating the beta version for your cloud project is thus essential. You also need to choose which type of FPGA instance you want. The card will be configured before startup, so that you can use it as soon as the system has booted.

The FPGA *flavours* start with `f2`. Below is how to list them with the CLI:

```sh
$ openstack flavor list | grep f2-
| 35ab4a5f-baff-48c6-9e1a-264209fbb91d | win-f2-120-gzip   | 120000 |  400 |  0 |  32 | False |
| 497ef30e-7bb1-4d4c-b546-e1cc5898cb4b | f2-120-jpeg       | 120000 |  400 |  0 |  32 | False |
| 92378fc3-e415-4d6e-bf9a-cfd3784cf0ba | win-f2-120-jpeg   | 120000 |  400 |  0 |  32 | False |
| 9f94fd6c-e129-46e4-ba12-7e4e96a57027 | f2-120-regexp     | 120000 |  400 |  0 |  32 | False |
| bdd068b9-80b1-499d-86ce-0feb731b3724 | f2-120-gzip       | 120000 |  400 |  0 |  32 | False |
| dbf96a5d-2d60-486e-a7e7-2cc28e659283 | win-f2-120-regexp | 120000 |  400 |  0 |  32 | False |
```

The **jpeg** *flavours* will flash the card with the FPGA JPEG accelerator.

A preconfigured FPGA image is also available:

```sh
$ openstack image list | grep -i CleanHost
| 2c1e08bb-f949-4aa0-8558-dd6b8745a9e8 | 20180330_CleanHost_BMP2JPEG_1.0.4_1    | active |
| 6e27a7ba-eac8-4d45-8648-89f2000f3b0b | 20180330_CleanHost_HyperFiRe_1.0.4_1   | active |
```

You can now use this command to launch an instance:

```sh
$ openstack server create --flavor f2-120-jpeg --image 20180330_CleanHost_BMP2JPEG_1.0.4_1 --key-name your_key --nic net-id=eecc8610-f977-461c-bad2-917d7be01144 bmp2jpeg
```

### Use the FPGA accelerator

Once you are logged in to the instance with the *CentOS* username, full instructions will be provided for initialising the accelerator using your credentials:

```sh
ACCELIZE_CLIENT_ID=<Your_Client_ID>
ACCELIZE_CLIENT_SECRET==<Your_Client_Secret>
sudo sh -c " echo '{\"client_secret\": \"$ACCELIZE_CLIENT_SECRET\", \"client_id\": \"$ACCELIZE_CLIENT_ID\"}' > /etc/accelize/credentials.json"
sudo systemctl start meteringclient
sudo systemctl start meteringsession
sudo /opt/accelize/accelerator/accelerator -m0
```

We will now use this accelerator to convert a BMP image to JPEG format:

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

To give you an idea of the performance of FPGA, here is a test that executes 100 conversion cycles for 7 images:

```sh
$ j=0; time while [ $j -lt 100 ]; do (( ++j )); for i in *.bmp; do sudo /opt/accelize/accelerator/accelerator -v 4 -m1 -i $i -o /dev/shm/$(basename -s .bmp $i).jpg; done; done
real    0m55.511s
user    0m39.581s
sys     0m27.143s
```

As a comparison, here is the same test run without using the FPGA accelerator:

```sh
$ j=0; time while [ $j -lt 100 ]; do (( ++j )); for i in *.bmp; do sudo convert $i  /dev/shm/$(basename -s .bmp $i).jpg; done; echo $j; done
real    1m26.070s
user    0m56.538s
sys     0m29.777s
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.