---
title: "OPCP - How to install a controller"
excerpt: "Learn how to install an OPCP controller from the Debian image provided by OVHcloud"
updated: 2026-05-22
---

## Objective

This guide explains how to install an **OPCP** controller from the Debian-based installation image provided by OVHcloud. It covers preparing the installation media, cabling the server, selecting the RAID 1 disks, configuring the controller access network, and making the adjustments required after the first boot.

> [!primary]
>
> In this guide, the **OOB** network refers to the controller access network. It is the server's first physical network interface, connected to your network.
>
> It is not the server's dedicated management port (IPMI, iDRAC, iLO, and so on), which should only be used to mount the ISO or open a remote console.

> [!warning]
>
> The installation process erases all data on the selected disks.
>
> OVHcloud provides you with services for which you are responsible. You must therefore ensure that they function correctly after the installation.

## Prerequisites

- A physical server intended to host the OPCP controller
- Read-only access to the OPCP delivery S3 bucket, including the S3 endpoint, bucket name, region, and OPCP version to download
- A dedicated S3 access key and secret key, restricted to read-only access on that bucket and delivery prefix
- A USB key, virtual media device, or any other bootable installation media
- Access to the local console or to the server's remote management console (IPMI, iDRAC, iLO, and so on)
- At least two physical disks of comparable size for the RAID 1 installation
- One network cable connected to the server's first network interface and to your network
- The IP address, subnet mask, gateway, and DNS servers for the controller access network

## Instructions

### 1. Download and verify the installation image

Before writing the image to your boot media, download the ISO and its SHA-256 checksum from the read-only S3 bucket provided to you.

> [!primary]
>
> The published artifacts are stored in the delivery bucket under the `opcp-controller-debian-image/<version>/` prefix.
>
> Use a dedicated credential pair restricted to read-only access on that bucket and prefix. Load it only into your current shell or through your secret manager, then remove it after the download.
> Common base endpoints include `s3.sbg.io.cloud.ovh.net` and `s3.gra.io.cloud.ovh.net`.

Set your environment variables first:

```bash
export S3_ENDPOINT="<s3-endpoint>"
export S3_BUCKET="<s3-bucket>"
export S3_REGION="<s3-region>"
export OPCP_VERSION="<opcp-release-version>"
export S3_PREFIX="opcp-controller-debian-image/${OPCP_VERSION}"
export S3_ACCESS_KEY="<read-only-access-key>"
export S3_SECRET_KEY="<read-only-secret-key>"
```

Then download the files with `s3cmd` (the recommended method for authenticated S3 access):

```bash
sudo apt-get update
sudo apt-get install -y s3cmd

s3cfg=$(mktemp)
chmod 600 "$s3cfg"

cat >"$s3cfg" <<EOF
[default]
access_key = ${S3_ACCESS_KEY}
secret_key = ${S3_SECRET_KEY}
host_base = ${S3_ENDPOINT}
host_bucket = %(bucket).${S3_ENDPOINT}
bucket_location = ${S3_REGION}
EOF

for artifact in \
	live-image-amd64.hybrid.iso \
	live-image-amd64.hybrid.iso.sha256; do
	s3cmd -c "$s3cfg" get \
		"s3://${S3_BUCKET}/${S3_PREFIX}/${artifact}" \
		"${artifact}"
done

rm -f "$s3cfg"
```

If your environment already standardises downloads with `curl`, you can use a SigV4-signed HTTPS request instead:

```bash
download_with_curl() {
	local artifact="$1"
	local curl_config
	curl_config=$(mktemp)
	chmod 600 "$curl_config"

	cat >"$curl_config" <<EOF
url = "https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_PREFIX}/${artifact}"
user = "${S3_ACCESS_KEY}:${S3_SECRET_KEY}"
aws-sigv4 = "aws:amz:${S3_REGION}:s3"
output = "${artifact}"
fail
silent
show-error
EOF

	curl --config "$curl_config"
	rm -f "$curl_config"
}

for artifact in \
	live-image-amd64.hybrid.iso \
	live-image-amd64.hybrid.iso.sha256; do
	download_with_curl "$artifact"
done
```

If your `curl` build does not support SigV4, use the `s3cmd` method.

Then verify the checksum before writing the ISO:

```bash
sha256sum -c live-image-amd64.hybrid.iso.sha256

unset S3_ACCESS_KEY S3_SECRET_KEY

sudo dd if=live-image-amd64.hybrid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Replace `/dev/sdX` with the device corresponding to your installation media.

### 2. Cable the server

Before you start the installation:

- connect the server's first network interface to your network
- if the server has several network interfaces, use the first one so that it is easier to identify during the installation, and do not connect any other one

### 3. Boot the installer

Boot the server from the installation media, then follow the interactive installer.

In the GRUB menu, select the `Auto Install` entry to start the installation.

During the installation, the image:

- detects the available physical disks
- prompts you to select the disks to use for RAID 1
- configures the system automatically on the selected disks
- prompts you to choose the network interface used for controller access
- enables `root` SSH access on the controller at first boot

### 4. Select the installation disks

When prompted by the installer, select at least two physical disks for the controller.

Use identical disks whenever possible, or disks that are as close as possible in size and performance, so that the RAID 1 configuration can be created correctly.

The installer automatically creates the RAID 1 configuration and the system LVM layout on the selected disks.

### 5. Configure the controller access network

When the installer shows the list of physical network interfaces:

1. Select the interface connected to your network.
2. Choose `Static` to enter the configuration manually.
3. In static mode, enter the IP address, subnet mask, gateway, and DNS servers requested by the installer.
4. Confirm the summary before the network configuration is written.

At the end of the base installation, this configuration is applied to the installed system to allow initial SSH access to the controller.

### 6. Verify access after first boot

After the server restarts:

1. Connect from the network linked to the server's first network interface.
2. Verify that the controller IP address responds over SSH.
3. Verify that the controller can reach the network resources it needs in your environment.

If the interface or network settings are incorrect, restart the installation and select the expected values.

### 7. Adjust the logical volume sizes

After the first boot, log in to the controller and adjust the logical volume sizes according to the actual disk capacity and your needs.

> [!warning]
>
> The sizes below are example targets for 900 GB disks. Check the used and available space before reducing any volume, then adapt the values to your disk capacity.

Start by reducing the `spare` volume, then reallocate the released space to the volumes you actually use:

```bash
lvreduce -r -L 100G -v /dev/mapper/vg-spare
lvresize -r -L100G -v /dev/mapper/vg-home
lvresize -r -L100G -v /dev/mapper/vg-root
lvresize -r -L30G -v /dev/mapper/vg-tmp
lvresize -r -L200G -v /dev/mapper/vg-var
```

## Go further

If you need training or technical assistance implementing our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team.

Join our [community of users](/links/community).
