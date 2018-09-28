---
title: 'How to run a CentOS unattended installation for vSphere template'
slug: vsphere-unattended-centos-install
excerpt: 'Find out how to automate Virtual Machine template creation in vSphere with CentOS 7 unattended installation'
section: OpenShift
order: 10
---

**Last updated 19th September 2018**

## Objective
This guide will show you how to:

1. Create a [CentOS](https://www.centos.org/) 7 ISO with a kickstart config file.
2. Create a virtual image template inside vSphere on your OVH [Private Cloud](https://www.ovh.com/private-cloud/).

## Requirements

- access to a vSphere instance
- a terminal with root access for package installation. It can be a Debian under [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), CentOS, Ubuntu...

> [!primary]
> 
> The resources used for automation in this guide are available in this folder: https://github.com/ovh/docs/tree/master/pages/cloud/private-cloud/openshift_unattended_centos_install/scripts/
> 

From your terminal, install `ansible` and `govc`.

If you use `python-2`, make sure to use `ansible-2.7` or higher, due to issue [#42237](https://github.com/ansible/ansible/pull/42237). Otherwise, switch to `python-3` and `ansible-2.6.4`.

All variables are set in a `vars.yml` file that needs to be edited before running the playbooks.

### GOVC installation
`govc` is a Go client that uses the vSphere API. You can fetch the latest release from the [Release](https://github.com/vmware/govmomi/releases) page.
After running an `unzip` or `tar` and `chmod +x`, you'll need to set up at least three environmnent variables:

```shell
export GOVC_URL=https://pcc-xxx-xxx-xxx-xxx.ovh.com/sdk
export GOVC_USERNAME=username
export GOVC_PASSWORD=password
```

> [!primary]
> 
> **Tip**: Edit an `activate` file with the three export commands and source it `. activate` from your terminal before running the scripts.
> 

You can now run the following command:

```shell
$ govc about
Name:         VMware vCenter Server
Vendor:       VMware, Inc.
Version:      6.0.0
Build:        7037394
OS type:      win32-x64
API type:     VirtualCenter
API version:  6.0
Product ID:   vpx
UUID:         xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## Preparing ISO images
There will be two images.
The first will be the unmodified Centos iso file.
There are three ISO flavors. We'll pick the DVD edition, the smallest one in the `open-vm-tools` package.
The second will be a simple ISO volume named `OEMDRV`, containing the `/KS.CFG` file. The full documentation can be found at the [RedHat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-kickstart-howto#sect-kickstart-installation-starting) page.

The above steps can be automated via:
```shell
sudo ansible-playbook -vvv --extra-vars @vars.yml create_isos.yml
```
You are now ready to move the the second section.

## Creating a vSphere VM template
We'll first upload the two ISO images created in the previous step to a datastore, defined by the variable `datastore`.
Next, we'll create the virtual machine and attach two CDROM devices, one for each of the ISO files.
To track the progress of the installation, you can connect using the [VMware Remote Console](https://www.vmware.com/go/download-vmrc) and get the vmrc link with `govc vm.console Centos7'.

> [!primary]
> 
> **Tip**: Without VMRC, you can check if the install is done by trying to connect the the VM guest tool daemon with `govc guest.ls -l root:test -vm centos7 .`
>
> Be sure the use the proper password defined is the `ks.cfg` file.
> 

Once the installation is complete and the VM has rebooted, we'll eject the ISO files and convert the VM to a template.

The above steps can be automated via:

```shell
ansible-playbook -vvv --extra-vars @vars.yml create_template.yml
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).