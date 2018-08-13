#!/bin/sh

set -e

usage() {
  cat << EOF >&2
Usage: $0 [-p <password>] [-r <rootdir>]
EOF
  exit 1
}

password=test
rootdir=$HOME

while getopts hp:r: arg; do
  case $arg in
    (p) password=$OPTARG;;
    (r) rootdir=$OPTARG;;
    (h) usage;;
    (*) usage
  esac
done

set -x

info() {
	set +x
	tput setaf 2 2> /dev/null || true
	tput bold 2> /dev/null || true
	echo $@
	tput setaf 7 2> /dev/null || true
	tput sgr0 2> /dev/null || true
	set -x
}

error() {
	set +x
	tput setaf 1 2> /dev/null || true
	tput bold 2> /dev/null || true
	echo $@
	tput setaf 7 2> /dev/null || true
	tput sgr0 2> /dev/null || true
	set -x
}

dep_shared() {
	echo wget genisoimage isomd5sum
}

dep_debian() {
	if [ -f "$(which apt-get || true)" ]; then
		sudo apt-get -y install p7zip-full `dep_shared`
		ksvalidator() {
			echo -n
		}
	fi
}

dep_centos() {
	if [ -f "$(which yum || true)" ]; then
		sudo yum -y install pykickstart p7zip-plugins `dep_shared`
	fi
}

info "Installing dependencies"
dep_centos
dep_debian

info "Executing script in $rootdir"

info "Generating $rootdir/kickstart.cfg file with password $password"

cp `dirname $0`/kickstart_tpl.cfg $rootdir/ks.cfg
sed -i -e "s/\${password}/$password/" $rootdir/ks.cfg

ksvalidator $rootdir/ks.cfg || (error "Error with $rootdir/ks.cfg" && false)
info "Kickstart file $rootdir/ks.cfg validated"

iso_img="CentOS-7-x86_64-DVD-1804.iso"

info "Downloading iso file to $rootdir/${iso_img}"
wget -c "http://ftp.pasteur.fr/mirrors/CentOS/7/isos/x86_64/${iso_img}" -O "$rootdir/${iso_img}"

info "Extracting iso file content to $rootdir/copy/"
7z x -y -o$rootdir/copy/ $rootdir/${iso_img}

find $rootdir/copy/ -name 'open-vm-tools-*\.rpm' | grep '.*' # check that open-vm-tools package is available
chmod -R +w $rootdir/copy/
info "Copying new kickstart file"
cp $rootdir/ks.cfg $rootdir/copy/ks.cfg

info "Editing BIOS isolinux.cfg file (No EFI support)"
sed -i 's/^\(timeout\).*$/\1 100/' $rootdir/copy/isolinux/isolinux.cfg
sed -i 's/^\(\s*append.*\)$/\1 inst.ks=cdrom:\/dev\/cdrom:\/ks.cfg/g' $rootdir/copy/isolinux/isolinux.cfg

info "Extracting volume label"
# in the entry 'linux', get the append line and extract the value of LABEL
label=`cat $rootdir/copy/isolinux/isolinux.cfg | grep -A 3 'label linux' | grep append | sed 's/^.*LABEL=\([^ ]*\).*$/\1/'`
label=$(echo "${label:-linux}" | sed 's/\\x20/ /g') # replace \x20 by spaces

info "Found volume label '$label'"
info "Creating new iso file under $rootdir/centos7_kickstart.iso"
rm -f "$rootdir/centos7_kickstart.iso"
cd $rootdir/copy
genisoimage -o $rootdir/centos7_kickstart.iso -b isolinux/isolinux.bin -c isolinux/boot.cat -no-emul-boot -boot-load-size 4 -boot-info-table -J -R -v -T -V "$label" .
implantisomd5 $rootdir/centos7_kickstart.iso
cd -

rm -rf $rootdir/copy/
rm -rf $rootdir/ks.cfg

locale_iso_size=$(wc -c < "$rootdir/centos7_kickstart.iso")
info "New iso file $rootdir/centos7_kickstart.iso size $((locale_iso_size/1024/1024))MB"
