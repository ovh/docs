---
title: 'Running an Ethereum node on a Public Cloud instance'
excerpt: 'Deploy a full Ethereum node with Nethermind (EL) and Lighthouse (CL) on an OVHcloud Public Cloud instance using block storage for chain data'
updated: 2026-03-12
---

## Objective

Ethereum is one of the most widely used blockchain networks, powering smart contracts for decentralised finance (DeFi) and NFT ecosystems. Operating your own Ethereum node allows you to interact directly with the network without relying on third-party services.

A fully functional Ethereum node requires two key software components running in coordination:

1. **Execution Client (EL)** — responsible for processing transactions and maintaining the Ethereum state.
2. **Consensus Client (CL)** — responsible for reaching consensus with the rest of the network through the Ethereum proof-of-stake protocol.

These two components must run in tandem and communicate securely to maintain synchronisation with the Ethereum mainnet.

The Ethereum ecosystem supports multiple client implementations, each developed independently but compliant with the Ethereum specification. The most widely used options include:

**Execution Clients (EL):**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Consensus Clients (CL):**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

For this tutorial, we will use the following combination:

- **Execution Client**: Nethermind
- **Consensus Client**: Lighthouse

**This tutorial will guide you through deploying a fully functional Ethereum node on an OVHcloud Public Cloud instance.**

> [!warning]
>
> The security hardening and operational best practices required to fully protect an Ethereum node are beyond the scope of this tutorial. You are strongly advised to implement additional security measures — such as firewall configuration, key management, and monitoring — according to your organisational requirements and industry best practices.
>

## Requirements

- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account
- A [Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) with at least 2 vCores and 30 GB of RAM (e.g. R2-30), running **Ubuntu 24.04 LTS**
- A [Block Storage volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) of at least 2 TB, using the **High-Speed Gen2** type, attached to your instance
- Administrative (sudo) access to the instance via SSH

> [!primary]
>
> According to the Ethereum Foundation documentation, an Ethereum node requires at least:
>
> - **Execution client**: 2 CPU cores, 16 GB of RAM, and 1 TB of fast SSD storage
> - **Consensus client**: 2 CPU cores, 8 GB of RAM, and access to the same storage
>
> For production environments and long-term stability, higher specifications are strongly recommended.
>

## Instructions

### Step 1 - Mount the Block Storage volume

Once you have [created and attached your Block Storage volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) to the instance, connect to your instance via SSH:

```bash
ssh -i <path-to-private-key> ubuntu@<IP_address>
```

List all available block devices to identify your attached volume:

```bash
lsblk
```

![lsblk output showing the attached volume](images/lsblk_output.png){.thumbnail}

This displays a tree view of all storage devices. Identify the device (e.g. `/dev/sdb`) that corresponds to your 2 TB volume. It will be formatted and mounted to store the Ethereum blockchain data.

Create a partition on the newly attached volume. Replace `/dev/sdb` with the device name identified in the previous step if it differs:

```bash
sudo fdisk /dev/sdb
```

![fdisk partitioning](images/fdisk_partition.png){.thumbnail}

This opens the partitioning utility for the selected block device. Create a new primary partition that spans the entire disk, then write the changes. Once complete, the partition will typically be available as `/dev/sdb1`.

Format the new partition with the ext4 filesystem, which is a stable and widely supported choice for storing Ethereum chain data:

```bash
sudo mkfs.ext4 /dev/sdb1
```

![ext4 formatting](images/mkfs_ext4.png){.thumbnail}

Create a dedicated directory to serve as the mount point for the formatted volume, then mount it and verify that it has been successfully attached to the filesystem:

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` creates the mount directory (using `-p` ensures no error if intermediate directories are missing).
- `mount /dev/sdb1 /mnt/chaindata` mounts the formatted partition to the directory.
- `df -h` displays all mounted filesystems in a human-readable format, allowing you to confirm that `/dev/sdb1` is correctly mounted at `/mnt/chaindata` with the expected capacity (approximately 2 TB).

![Verify mount](images/mount_verify.png){.thumbnail}

Your disk is now mounted, but the configuration is **not persistent**: if the server restarts, the volume must be mounted manually. To make it mount automatically at boot, add an entry to `/etc/fstab`.

Retrieve the **UUID (Universally Unique Identifier)** of your volume:

```bash
sudo blkid
```

![blkid output](images/blkid_output.png){.thumbnail}

This command lists all block devices and their associated attributes. Identify the entry corresponding to your new partition (e.g. `/dev/sdb1`) and copy the value of its `UUID` field.

Edit the `/etc/fstab` file to configure the automatic mount:

```bash
sudo nano /etc/fstab
```

```text
UUID=<your-uuid-here> /mnt/chaindata ext4 nofail 0 0
```

The `nofail` option allows the system to continue booting even if the device is unavailable.

### Step 2 - Create a dedicated user

Create a **dedicated user account** to manage all Ethereum node operations. This practice improves security by separating node processes from the default system user.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` creates a new user named `node_admin`, with a home directory, bash shell, and membership in the `sudo` group.

Set a password for the new user (replace with a strong password or configure key-based login):

```bash
echo 'node_admin:<strong_password>' | sudo chpasswd
```

Configure **SSH key-based authentication** for the new user by adding your public SSH key to the `authorized_keys` file. Replace the placeholder with your actual public key:

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<your-public-ssh-key>' > /home/node_admin/.ssh/authorized_keys"
```

This creates the `authorized_keys` file under `/home/node_admin/.ssh/` and writes your public key into it, allowing secure, passwordless login as the `node_admin` user.

### Step 3 - Install Nethermind (Execution Client)

Nethermind is an Ethereum execution client responsible for processing transactions and maintaining the Ethereum state.

Add the official Nethermind APT repository:

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Adding Nethermind repository](images/nethermind_add_repo.png){.thumbnail}

Update the package index:

```bash
sudo apt-get update
```

![Updating packages](images/nethermind_apt_update.png){.thumbnail}

Install Nethermind:

```bash
sudo apt-get install nethermind -y
```

![Installing Nethermind](images/nethermind_install.png){.thumbnail}

### Step 4 - Install Lighthouse (Consensus Client)

Lighthouse is an Ethereum consensus client responsible for reaching consensus through the proof-of-stake protocol.

Download the latest stable release from the [Lighthouse GitHub releases page](https://github.com/sigp/lighthouse/releases):

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Downloading Lighthouse](images/lighthouse_download.png){.thumbnail}

Extract the archive:

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Extracting Lighthouse](images/lighthouse_extract.png){.thumbnail}

Verify the binary and move it to a system-wide location:

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Lighthouse version](images/lighthouse_version.png){.thumbnail}

### Step 5 - Create the JWT secret file

A shared JWT secret is required for secure communication between the execution and consensus clients.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![JWT secret created](images/jwt_secret.png){.thumbnail}

### Step 6 - Install screen for session persistence

On a remote server, disconnecting from SSH terminates running processes. `screen` keeps them running in the background independently of your session.

```bash
screen --version
```

![screen version](images/screen_version.png){.thumbnail}

If not already installed:

```bash
sudo apt-get install screen -y
```

### Step 7 - Set directory ownership

The Ethereum clients need write access to the data directory. Assign ownership of the mount point to your current user:

```bash
sudo chown $USER:$USER /mnt/chaindata
```

This grants your user full ownership of `/mnt/chaindata`, so the Ethereum clients can read and write data there.

### Step 8 - Launch Nethermind

Create a screen session and start Nethermind:

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

You should see logs indicating the client is running. Eventually, the following message will appear:

```text
Waiting for Forkchoice message from Consensus Layer
```

This indicates that the execution client is waiting to pair with the consensus client.

![Nethermind running](images/nethermind_running.png){.thumbnail}

Detach the session by pressing `Ctrl+A` then `D` to return to the main shell.

You can list active sessions with `screen -ls` and reattach later with `screen -r nethermind`.

![screen sessions](images/screen_list.png){.thumbnail}

### Step 9 - Launch Lighthouse

Create a new screen session and start Lighthouse:

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Lighthouse starting](images/lighthouse_start.png){.thumbnail}

After initial setup, Lighthouse should begin syncing with the network.

![Lighthouse syncing](images/lighthouse_syncing.png){.thumbnail}

Detach the session by pressing `Ctrl+A` then `D`.

### Step 10 - Verify synchronisation

At this stage, both the **execution client** (Nethermind) and the **consensus client** (Lighthouse) should be running in separate screen sessions. To confirm that they are properly connected and synchronisation is underway, reattach to the Nethermind session and inspect the logs:

```bash
screen -r nethermind
```

If Lighthouse is connected correctly, the "Waiting for Forkchoice" message should disappear. Instead, you should see **Engine API** communication and block processing logs:

```text
Received ForkChoice: ...
Syncing...
```

![EL and CL synchronisation](images/el_cl_sync.png){.thumbnail}

These logs confirm that Nethermind is receiving block proposals and fork choice updates from Lighthouse, and that the node is syncing with the Ethereum mainnet.

While this tutorial focused on the technical deployment, it is important to complement the setup with proper security hardening, monitoring, and maintenance practices to ensure long-term stability. With the foundation now in place, you can extend your node's functionality, integrate it into larger infrastructures, or use it as a base for research, development, and staking operations.

## Go further

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Nethermind documentation](https://docs.nethermind.io/)
- [Lighthouse documentation](https://lighthouse-book.sigmaprime.io/)

[Creating a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)

[Creating and configuring an additional disk on an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Join our [community of users](/links/community).
