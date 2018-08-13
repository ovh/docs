---
title: CentOS unattended installation for vSphere template
slug: vsphere-unattented-centos-install
excerpt: Automate Virtual Machine template creation in vSphere with CentOS 7 unattended installation
section: OpenShift
order: 10
---

**Last updated 08th August 2018**

## Objective

This first guide will go throught:

1. create a [CentOS](https://www.centos.org/) 7 ISO with a kickstart config file
2. create a virtual image template inside vSphere on OVH [Private Cloud Computing](https://www.ovh.com/private-cloud/)

## Requirements

- an access to a vSphere instance
- a terminal with root access for package installation. It can be a Debian under [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), CentOS, Ubuntu, ...

> [!primary]
> 
> The resources used to write this guide are available on GitHub, under the [scripts](https://github.com/ovh/docs/blob/master/pages/universe/product/openshift_unattented_centos_install/scripts/) folder.
> 


## Creating a auto-install CentOS ISO image 

Like many other Linux distribution, it is possible to generate an ISO to automated unattented installation. This is usufull in scenario where the same task need to be done several times.

> [!primary]
> 
> **Tip**: This section is summarized in the `create_iso.sh` script.
>

```shell
$ ./create_iso.sh -h
Usage: ./create_iso.sh [-p <password>] [-r <rootdir>]
```

### Generate kickstart file

The `ks.cfg` is edited to set a root password.

> [!primary]
> 
> **Tip**: If unchanged with the `-p` option, it'll be set to `test` by default. (#ks-default-password)

We also validate the config file syntax.

```shell
sed -i -e "s/\${password}/$password/" ks.cfg
ksvalidator ks.cfg || (error "Error with ks.cfg" && false)
```

### Fetch original ISO file

There are three ISO flavors. We'll pick the smallest one with the `open-vm-tools` package already provided.

At the time of writing, it's the DVD edition.

```shell
wget -c "http://ftp.pasteur.fr/mirrors/CentOS/7/isos/x86_64/CentOS-7-x86_64-DVD-1804.iso" -O CentOS-7-x86_64-DVD-1804.iso
```

### Generating new ISO

For extracting the content of the ISO, the traditional method is to use `fuseiso`/`fusermount` but that requires FUSE support which isn't available on WSL. We'll simply use `7z` to extract the ISO

```shell
7z x -y -o./copy/ CentOS-7-x86_64-DVD-1804.iso
```

Then, we copy the `ks.cfg` file and edit the BOOT config file. To support UEFI, the file `/EFI/BOOT/grub.cfg` need to be edited too and additional options passed down to `genisoimage`.

```shell
cp ks.cfg copy/ks.cfg
sed -i 's/^\(timeout\).*$/\1 100/' copy/isolinux/isolinux.cfg
sed -i 's/^\(\s*append.*\)$/\1 inst.ks=cdrom:\/dev\/cdrom:\/ks.cfg/g' copy/isolinux/isolinux.cfg
```

At that point, we are ready to create the ISO. To avoid hardcoded string, we can extract the `LABEL` value from the boot menu and generate the ISO file using it

```shell
label=`cat copy/isolinux/isolinux.cfg | grep -A 3 'label linux' | grep append | sed 's/^.*LABEL=\([^ ]*\).*$/\1/'`
label=$(echo ${label:-linux} | sed 's/\\x20/ /g') # replace \x20 by spaces
cd copy
genisoimage -o centos7_kickstart.iso -b isolinux/isolinux.bin -c isolinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table -J -R -v -T -V "$label" .
cd -
```

To enable self-verification, let's embed an MD5 checksum into the ISO file. This check will be done by the installer, before starting the installation.

```shell
implantisomd5 centos7_kickstart.iso
```

You are now ready to move the the second section.

## Creating a vSphere VM template.

> [!primary]
> 
> **Tip**: This section is summarized in the `create_template.sh` script.
>


Using our iso image `centos7_kickstart.iso` from the previous step, we'll create a VM template inside vSphere.

Before, we need to install two dependencies: `jq` and `govc`

For the first, a classic `apt-get install jq` or `yum install jq` should work.

### GOVC setup

`govc` is a Go client using the vSphere API. You can fetch the latest release from the [Release](https://github.com/vmware/govmomi/releases) page.

After an `unzip` or `tar` and `chmod +x`, you'll need to setup at least three environmnent variables.

```shell
export GOVC_URL=https://pcc-xxx-xxx-xxx-xxx.ovh.com/sdk
export GOVC_USERNAME=username
export GOVC_PASSWORD=password
```

> [!primary]
> 
> **Tip**: Edit a file `activate` with the three export commands and source it `. activate` from your terminal before running the scripts.
> 

You can now try the following command

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

### Uploading the iso file

#### DataStore

The goal of the next steps is to find the biggest datastore with a least free 20GB. The datastore path will contain `Shared Storages` and will end with the pattern `<word>-<digits>`

> [!primary]
> 
> **Tip**: Using `jq` allows to filter the datastore by size and select the one with enough space.
> 

```shell
$ min_size=$((20*1024*1024*1024)) # 20GB
$ datastore_url=$(govc ls -t datastore '/*/datastore/Shared Storages/*' 	\
 | grep -e '[[:alpha:]]\+-[[:digit:]]\+$' 								\
 | xargs -d '\n' govc datastore.info -json 								\
 | jq -r '[.Datastores[]
 | select(.Info.FreeSpace > '${min_size}')] # filter datastore with enough space
 | sort_by(.Info.FreeSpace) | reverse # select largest datastore
 | .[0].Info.Url') # get its url because path is not available
$ datastore=$(govc find . -type datastore -info.url "${datastore_url}")
```

Once we have the datastore, we can upload the ISO file we created in the previous step.

```shell
govc datastore.upload -ds "$datastore" centos7_kickstart.iso centos7_kickstart.iso
```

and start creating the VM image

```shell
pool="Cluster1/Resources" # the list of available Cluster with govc ls host/* | grep Resources
net=`govc ls -t DistributedVirtualPortgroup '/*/network/*-dvs/VM Network'`
govc vm.create -ds "$datastore" -pool "$pool" -net "$net" -g centos64Guest -m 2048 -c 2 -disk 16GB -on=0 -annotation "Centos7 with open-vm-tools" centos7
```

The VM is now created and should be listed with a `govc ls vm`. Time to add the ISO file in a cdrom device with the next commands.

```shell
cdrom=`govc device.cdrom.add -vm $vm_name`
govc device.cdrom.insert -ds "$datastore" -device $cdrom -vm centos7 centos7_kickstart.iso
govc device.boot -vm centos7 -order cdrom,disk
govc vm.power -on centos7
```

> [!primary]
> 
> **Tip**: The last command powers on the VM. To observe what is happening you can connect using the [VMware Remote Console](https://www.vmware.com/go/download-vmrc) and get the vmrc link with `govc vm.console centos7`
> 

> [!primary]
> 
> **Tip**: Without VMRC, you can check if the install is done by trying to connect the the VM guest tool daemon with `govc guest.ls -l root:test -vm centos7 .`
>
> Be sure the use the proper password defined during the ISO generation.
> 

Once the installation is done and the VM has rebooted, you can eject the ISO file and delete it from the datastore.


```shell
govc device.cdrom.eject -device $cdrom -vm centos7
govc vm.power -off centos7
```

Finally, you can convert the VM to a template and you are ready to move to the next guides.

```shell
govc vm.markastemplate centos7
```

## Conclusion

We have learn how to create a custion unattented installation CentOS ISO file and a VM template in vSphere.

## Go further

The next step is to deploy our first [OpenShift Origin mono-server instance]({filename}../openshift_mono_server/guide.en-us.md).
