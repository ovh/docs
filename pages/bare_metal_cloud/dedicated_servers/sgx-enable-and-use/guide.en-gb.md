---
title: "How to manage Intel SGX on a dedicated server"
excerpt: "Find out how to enable the SGX option on your dedicated server and install the SGX software stack for Linux"
updated: 2025-11-20
---

## Objective

Enabling Intel Software Guard Extensions (SGX) on your server allows you to run SGX-ready applications. Intel SGX provides advanced hardware and RAM security encryption features, in order to isolate specific parts of code and data for each application.

**This guide explains how to enable the SGX feature, via the OVHcloud Control Panel or via the OVHcloud API.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)
- A dedicated server compatible with the [SGX option](/links/bare-metal/sgx) in your OVHcloud account
- The credentials received by email after installation
- Ubuntu 24.04 or equivalent is installed on the server

## Instructions

### Enabling SGX

The activation of SGX is possible from the OVHcloud Control Panel, the OVHcloud API, or your server's BIOS.

> [!tabs]
> **Via the OVHcloud Control Panel**
>>
>> **1 - Logging in to the OVHcloud Control Panel**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and click on `Dedicated Servers`{.action}. Select the server on which you want to enable SGX.
>>
>> **2 - Enabling SGX**
>>
>> From the `General Information`{.action} tab, in the **Advanced Features** box, click on `...`{.action} next to the **Security - Intel SGX (Software Guard Extensions)** entry and select `Enable SGX`{.action} from the dropdown menu.
>>
>> ![Enable SGX](images/enable_sgx.png){.thumbnail}
>>
>> On the next screen, click on the `Enable`{.action} button.
>>
>> ![Enable SGX](images/enable_sgx2.png){.thumbnail}
>>
>> You can choose to enable SGX with a specific amount of reserved memory or allow your application to automatically reserve the memory it needs. Once your choice is made, click on `Confirm`{.action}.
>>
>> ![Manage SGX](images/manage_sgx.png){.thumbnail}
>>
>> A confirmation window will appear. Please confirm that you understand that enabling Intel SGX technology will result in a server reboot.
>>
>> ![Enable SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > This will result in one or more server reboots, depending on its model.
>>
> **Via the OVHcloud API**
>>
>> **1 - Logging in to the API console**
>>
>> On the [OVHcloud API page](/links/console):
>>
>> - Click on `Authentication`{.action} in the top left.
>> - Then click on `Login with OVHcloud SSO`{.action}.
>> - Enter your OVHcloud credentials.
>> - Click on the `Authorize`{.action} button to authorise API calls from this site.
>>
>> **2 - Enabling SGX**
>>
>> Retrieve the name of your server from the list returned by the following call:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Check that your service has the SGX option using this call:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX disabled](images/get-disabled.png){.thumbnail}
>>
>> Enable SGX using the server name:
>>
>> > [!warning]
>> >
>> > This will result in one or more server reboots, depending on its model.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Configure SGX](images/post-configure.png){.thumbnail}
>>
>> Check the progress of the configuration task by calling this endpoint with the *taskId* returned by the previous call:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Get SGX configuration task](images/get-task.png){.thumbnail}
>>
>> You can verify that the status is enabled:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX enabled](images/get-enabled.png){.thumbnail}
>>
> **Manual configuration in the BIOS**
>>
>> **1 - Start a Remote KVM session**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and click on `Dedicated Servers`{.action}. Select the server on which you want to enable SGX.
>>
>> From the `IPMI/KMV`{.action} tab, start a Remote KVM session:
>>
>> ![Start a Remote KVM session](images/manager.png){.thumbnail}
>>
>> **2 - Enabling SGX**
>>
>> Then, from the KVM, initiate a server reboot and enter the BIOS (usually by pressing the `DEL`{.action} or `F2`{.action} key).
>>
>> In the BIOS, go to the `Advanced` > `Processor Configuration` section.
>>
>> Enable the TME and SGX options and configure the desired PRMRR size:
>>
>> ![Enable SGX](images/sgx_bios.png){.thumbnail}
>>
>> Save the changes by pressing the `F10`{.action} key. A confirmation window will appear, please confirm with the `Yes` option.
>>
>> Your server will then reboot into your operating system.
>>

### Installing the SGX software stack

Use the following commands to install the Intel SDK in order to develop and run SGX applications.

First, install some dependencies:

```bash
sudo apt update
sudo apt install autoconf automake build-Essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

Next, download the source code and prepare the submodules and prebuilt binaries:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Build and install the SGX SDK:

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Test the sample application in simulation mode

To build and run the *LocalAttestation* sample code in simulation mode:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=SIM make
cd bin
sudo ./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

### Build and install the Intel SGX PSW

The Intel SGX Platform Software (PSW) provides software libraries to run SGX applications in hardware mode. To create the local Debian repository that hosts the packages, run the following commands:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Create the following file to add the local Debian package repository to the repository configuration system:

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

Then, install the following packages:

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Test the sample application in hardware mode (optional)

To build and run the *LocalAttestation* sample code in hardware mode:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=HW make
cd bin
sudo ./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

## Go further

To go further (develop your own application, register for remote attestation, etc.), here are some useful resources:

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)
