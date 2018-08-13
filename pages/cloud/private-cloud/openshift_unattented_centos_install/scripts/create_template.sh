#!/bin/sh

set -e
set -x

info() {
	set +x
	tput setaf 2 || true
	tput bold || true
	echo $@
	tput setaf 7 || true
	tput sgr0 || true
	set -x
}

error() {
	set +x
	tput setaf 1 || true
	tput bold || true
	echo $@
	tput setaf 7 || true
	tput sgr0 || true
	set -x
}

rootdir=`dirname $0`

iso_img="centos7_kickstart.iso"

if [ ! -f "$rootdir/${iso_img}" ]; then
	error "ISO file $rootdir/${iso_img} not found. Run create_iso.sh first"
	exit 1
fi

locale_iso_size=$(wc -c < "$rootdir/$iso_img")
info "Locale iso file size $((locale_iso_size/1024/1024))MB"

min_size=$((20*1024*1024*1024)) # 20GB

info "Search Shared storage with name <word>-<digits>"


datastore_url=$(govc ls -t datastore '/*/datastore/Shared Storages/*' 	\
 | grep -e '[[:alpha:]]\+-[[:digit:]]\+$' 								\
 | xargs -d '\n' govc datastore.info -json 								\
 | jq -r '[.Datastores[]
 | select(.Info.FreeSpace > '${min_size}')] # filter datastore with enough space
 | sort_by(.Info.FreeSpace) | reverse # select largest datastore
 | .[0].Info.Url') # get its url because for weird reason path is not available
info "Datastore url is ${datastore_url}"

datastore=$(govc find . -type s -info.url "${datastore_url}")

if [ "$datastore" = "null" ]; then
	error "Could not found datastore in '${shared_storage}' with at least ${min_size}B free space"
	exit 1
fi
info "Found datastore ${datastore}"

govc datastore.ls -json -ds "${datastore}" "${iso_img}" || true

remote_iso_size=`(govc datastore.ls -l -json -ds "${datastore}" ${iso_img} || echo '[]') | jq '.[0].File[0].FileSize'`

info "Remote iso file size ${remote_iso_size}"

if [ ! "${locale_iso_size}" = "${remote_iso_size:-0}" ]; then
	info "Uploading iso file to $datastore/${iso_img}"
	govc datastore.upload -ds "$datastore" "${iso_img}" "${iso_img}"
fi

pool="Cluster1/Resources"
net=`govc ls -t DistributedVirtualPortgroup '/*/network/*-dvs/VM Network'`
vm_name="centos7"
(govc ls vm | grep "$vm_name") && govc vm.destroy "$vm_name"
govc vm.create -ds "$datastore" -pool "$pool" -net "$net" -g centos64Guest -m 2048 -c 2 -disk 16GB -on=0 -annotation "Centos7 with open-vm-tools" "$vm_name"
cdrom=`govc device.cdrom.add -vm $vm_name`
govc device.cdrom.insert -ds "$datastore" -device $cdrom -vm $vm_name "$iso_img"
govc device.boot -vm "$vm_name" -order cdrom,disk
govc vm.power -on "$vm_name"

set +e
govc guest.ls -l root:test -vm "$vm_name" .
while [ $? -gt 0 ]; do
	info "Waiting for $vm_name to be up ..."
	sleep 5
	govc guest.ls -l root:test -vm "$vm_name" .
done
set -e

govc device.cdrom.eject -device $cdrom -vm "$vm_name"
govc vm.power -off "$vm_name"
govc vm.markastemplate "$vm_name"
