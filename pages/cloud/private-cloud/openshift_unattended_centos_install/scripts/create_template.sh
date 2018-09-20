#!/bin/sh

set -e
set -x

min_size=$((20*1024*1024*1024)) # 20GB

rootdir=`dirname $0`/
centos_iso="CentOS-7-x86_64-DVD-1804.iso"

# datastore=$(govc ls -t datastore '/*/datastore/Shared Storages/*' 	\
#  | grep -e '[[:alpha:]]\+-[[:digit:]]\+$' 								\
#  | xargs -d '\n' govc datastore.info -json 								\
#  | jq -r '[.Datastores[]
#  | select(.Info.FreeSpace > '${min_size}')] # filter datastore with enough space
#  | sort_by(.Info.FreeSpace) | reverse # select largest datastore
#  | .[0].Info.Name')

datastore="pcc-005738"

echo "Found datastore ${datastore}"

remote_iso_size=`(govc datastore.ls -l -json -ds "${datastore}" ${centos_iso} || echo '[]') | jq '.[0].File[0].FileSize'`
info "Remote iso file size ${remote_iso_size}"
if [ ! "${locale_iso_size}" = "${remote_iso_size:-0}" ]; then
	info "Uploading iso file to $datastore/${centos_iso}"
	govc datastore.upload -ds "$datastore" "$rootdir/${centos_iso}" "${centos_iso}"
fi

govc datastore.upload -ds "$datastore" "$rootdir/kickstart.iso" "kickstart.iso"

pool="Cluster1/Resources"
net=`govc ls -t DistributedVirtualPortgroup '/*/network/*-dvs/VM Network'`
vm_name="Centos7"

# [pcc-005738]/centos7_kickstart.iso

(govc ls vm | grep "$vm_name") && govc vm.destroy "$vm_name"
govc vm.create -ds "$datastore" -pool "$pool" -net "$net" -g centos64Guest -m 2048 -c 2 -disk 16GB -on=0 -annotation "Centos7 with open-vm-tools" "$vm_name"
cdrom1=`govc device.cdrom.add -vm $vm_name`
govc device.cdrom.insert -ds "$datastore" -device $cdrom1 -vm $vm_name "${centos_iso}"
cdrom2=`govc device.cdrom.add -vm $vm_name`
govc device.cdrom.insert -ds "$datastore" -device $cdrom2 -vm $vm_name "kickstart.iso"

govc device.boot -vm "$vm_name" -order cdrom,disk

# govc vm.power -on "$vm_name"

# set +e
# govc guest.ls -l root:test -vm "$vm_name" .
# while [ $? -gt 0 ]; do
# 	info "Waiting for $vm_name to be up ..."
# 	sleep 5
# 	govc guest.ls -l root:test -vm "$vm_name" .
# done
# set -e

# govc device.cdrom.eject -device $cdrom -vm "$vm_name"
# govc vm.power -off "$vm_name"
# govc vm.markastemplate "$vm_name"
