---
title: "How to Automate Server Backups with Plakar"
excerpt: "Find out how to set up a dedicated server with Plakar to automate, encrypt, and monitor your server backups securely using OVHcloud Object Storage."
updated: 2026-02-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

This guide aims to show you how to:

- Set up a dedicated backup server capable of automatically protecting your servers.
- Configure Plakar to manage backups in a secure, encrypted, and deduplicated way.
- Schedule automated backups and monitor their status through an intuitive web interface.
- Centralise your data in resilient Object Storage, ensuring availability in case of failure.

By the end of this guide, you will have a reliable, fully automated backup system ready for a professional infrastructure.

## Requirements

- A [VPS server](/links/bare-metal/vps) or a [dedicated server](/links/bare-metal/bare-metal).
- Administrative (sudo) access to your server via SSH.
- [Plakar](https://www.plakar.io/) installed on the backup server (or the ability to install it).
- An S3<sup>1</sup>-compatible Object Storage service to host your backups.
- A basic understanding of GNU/Linux system administration.

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Architecture Overview

The automated backup system is built around three main components.

1. **Backup Server (Dedicated VPS):**

    - Runs Plakar, which handles backup scheduling, deduplication, and encryption.
    - Monitors all operations through an intuitive web interface.

2. **Source Servers:**

    - The servers whose data needs to be backed up.
    - Connected to the Backup Server via secure SSH/SFTP, enabling fully automated backups without manual intervention.

3. **Object Storage (S3-compatible):**

    - Receives and stores backups in a resilient and secure manner.
    - Keeps encrypted and deduplicated snapshots, ensuring data availability in the event of a failure.

![Architecture overview](images/architecture_overview.png){.thumbnail}

## Instructions

### Step 1: Set Up Object Storage

Before performing any backups, you need an S3-compatible Object Storage to store your data securely and independently from the backup server.

Using Object Storage ensures your backups remain available even if the backup server is lost or fails.

**Access Object Storage**

In the left-hand menu, go to `Object Storage`{.action}.

**Create an Object Storage User**

1. Open the `Users`{.action} tab.
2. Click `Create user`{.action}.

    ![Create Object Storage user](images/create_os_user.png){.thumbnail}

3. Give the user a description (e.g. plakar-backup).
4. Download and securely store the S3 credentials:
    - Access Key
    - Secret Key

> [!primary]
>
> **Note:** These credentials will be used by Plakar to access your Object Storage.
>

**Create an Object Storage Bucket**

1. Click `Create an Object Storage container`{.action}.
2. Configure the container:
    - **Name:** plakar-backups (or equivalent)
    - **Container API:** S3-compatible
    - **Container type:** choose according to your needs (3-AZ for high availability, 1-AZ for cost efficiency)
    - **Region:** select the region closest to your servers
    - **User selection:** select the user you created
3. Click `Create`{.action} to confirm.

> [!primary]
>
> For more details on creating and managing an Object Storage bucket, you can follow our guide [Object Storage – Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

### Step 2: Provision the Backup Server

To run Plakar and automate your backups, you need a dedicated VPS.

**Create a VPS**

1. Go to `Bare Metal Cloud`{.action} > `VPS`{.action}.
2. Click `Order`{.action}, then `Configure your VPS`{.action}.

    ![Create VPS](images/create_vps.png){.thumbnail}

3. Choose a configuration that fits your needs:
    - **Model:** general-purpose (e.g., VPS-1, 2 vCores, 8 GB RAM, 75 GB storage)
    - **Region:** close to your Object Storage for faster backups
    - **Image:** Ubuntu 25.04 (or any other supported distribution)
4. Place your VPS order.

**Access the VPS**

Connection details (IP, temporary username, password) are sent via a secure email.

Log in for the first time via SSH:

```bash
ssh ubuntu@<VPS_IP>
```

Replace `ubuntu` with your actual username and `<VPS_IP>` with the IP address provided in your delivery email.

On first login, you will be prompted to change the temporary password. Once changed, the session will close automatically. Reconnect using your new password.

For more information on initial VPS setup and security, see our guide [Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Step 3: Install Plakar

Now that your VPS is ready, it’s time to install Plakar, which will handle backups, encryption, and deduplication.

**Connect to the VPS**

From your local machine or directly on the VPS, connect via SSH:

```bash
ssh ubuntu@<VPS_IP>
```

Replace `ubuntu` with your actual username and `<VPS_IP>` with your server’s IP address.

**Install Plakar**

Follow the [official Plakar installation guide](https://www.plakar.io/docs/main/quickstart/installation/) for your distribution.

Verify that Plakar is installed:

```bash
plakar version
```

### Step 4: Configure Object Storage in Plakar

In this step, you will connect Plakar to your S3 Object Storage and initialize it as a Kloset Store, enabling secure and encrypted backup storage.

**Install the S3 integration in Plakar**

First, log in to Plakar so you can install integrations:

```bash
plakar login -email you@example.com
# OR
plakar login -github
```

Then, on your VPS, install the S3 package:

```bash
plakar pkg add s3
```

**Add Object Storage as a Storage Connector**

Storage connectors in Plakar define where your backups are stored. By configuring a connector once, you can reference it in all future backup commands using a simple alias.

Add your OVHcloud Object Storage as a storage connector using the S3 endpoint and credentials you generated in Step 1:

```bash
plakar store add ovh-s3-backups \
  location=s3://<S3_ENDPOINT>/<BUCKET_NAME> \
  access_key=<YOUR_ACCESS_KEY_ID> \
  secret_access_key=<YOUR_SECRET_ACCESS_KEY> \
  use_tls=true \
  passphrase='<YOUR_SECURE_PASSPHRASE>'
```

Replace:

- <S3_ENDPOINT>: your OVHcloud S3 endpoint (e.g., s3.eu-west-par.io.cloud.ovh.net)
- <BUCKET_NAME>: name of the container you created (e.g., plakar-backups)
- <YOUR_ACCESS_KEY_ID> and <YOUR_SECRET_ACCESS_KEY>: credentials generated in Step 1
- <YOUR_SECURE_PASSPHRASE>: passphrase to encrypt your backups (use single quotes if it contains special characters)

> [!success]
>
> By configuring the passphrase in the storage connector, automated backups can run without prompting for credentials each time.
>

**Initialize the Kloset Store**

Finally, initialize your Object Storage bucket as a Kloset Store:

```bash
plakar at "ovh-s3-backups" create
```

Since the passphrase was already configured when adding the storage connector, Plakar will automatically use it to encrypt all data before sending it to Object Storage.

Once this step is complete, your backup server is fully connected to Object Storage and ready to receive encrypted and deduplicated snapshots.

### Step 5: Configure SSH Access to Source Servers

For Plakar to back up your servers, it needs access to their files via SSH. SSH key-based authentication is recommended: it is more secure than passwords and allows automated backups without manual intervention.

**Install the SFTP integration**

On the backup server, install the SFTP integration:

```bash
plakar pkg add sftp
```

**Generate SSH keys**

Generate an SSH key pair on the backup server:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_plakar -C "plakar@backup"
```

Press `Enter` to leave the passphrase empty (recommended for automated backups).

**Copy the public key to the source servers**

Copy the public key to each server you want to back up:

```bash
ssh-copy-id -i ~/.ssh/id_ed25519_plakar.pub user@source-server-1
ssh-copy-id -i ~/.ssh/id_ed25519_plakar.pub user@source-server-2
```

Replace `user` with the username that has access to the files you want to back up.

**Test SSH access**

Ensure the backup server can connect without a password:

```bash
ssh -i ~/.ssh/id_ed25519_plakar user@source-server-1 'echo "Connection successful"'
```

**Create SSH host aliases (recommended)**

SSH host aliases simplify commands and centralise connection settings. Instead of typing the full hostname, port, and key path every time, you can use a short alias.

This makes Plakar commands cleaner and reduces the chance of errors.

Add a host alias in `~/.ssh/config`:

```bash
cat >> ~/.ssh/config << 'EOF'
Host source-1
    HostName source-server-1.example.com
    User backupuser
    Port 22
    IdentityFile ~/.ssh/id_ed25519_plakar

Host source-2
    HostName source-server-2.example.com
    User backupuser
    Port 22
    IdentityFile ~/.ssh/id_ed25519_plakar
EOF
```

Test the alias to ensure it works:

```bash
ssh source-1 'echo "Alias works"'
```

If the message `Alias works` appears, your SSH aliases are correctly configured. You can now use these aliases in all Plakar commands, simplifying backup management.

### Step 6: Configure Backup Sources

In Plakar, source connectors define which servers and directories should be backed up. Once configured, these sources can be reused across multiple backup commands, making management easier and reducing the risk of errors.

**Add source connectors**

For each server you want to back up, add a source connector:

```bash
# Add first source server
plakar source add web-server-1 sftp://source-1:/var/www

# Add second source server
plakar source add web-server-2 sftp://source-2:/var/www
```

- Replace `source-1` and `source-2` with the SSH aliases you created earlier.
- `/var/www` corresponds to the directory you want to back up on each server.
- You can add multiple sources, even on the same server or across different servers.

**Verify source configuration**

To ensure all sources are correctly configured:

```bash
plakar source show
```

This command lists all configured source connectors with their paths, allowing you to quickly verify that all servers and directories to be backed up are correctly defined.

### Step 7: Run Your First Backup

Before setting up automated backups, it’s important to test the configuration manually.

This ensures SSH connections work, Object Storage credentials are correct, and Plakar can back up your data successfully.

**Back up a single source**

To test a backup for a single source:

```bash
plakar at "@ovh-s3-backups" backup "@web-server-1"
```

- Plakar will connect to the source server via SSH/SFTP, read the files, deduplicate, encrypt, and upload them to Object Storage.
- Monitor the progress to ensure the backup completes successfully.

**Back up multiple sources**

To back up multiple servers at once:

```bash
plakar at "@ovh-s3-backups" backup "@web-server-1" "@web-server-2"
```

- The sources defined in Step 6 will be backed up to the same Kloset Store.
- This command is useful for testing a full backup before moving to automation.

**Verify backups**

To confirm that backups were successfully created, list snapshots in your Kloset Store:

```bash
plakar at "@ovh-s3-backups" ls
```

- This command lists the snapshots in the Kloset Store, showing their timestamp and snapshot ID.
- Ensure the snapshots correspond to the sources you just backed up.

### Step 8: Schedule Automated Backups

Manual backups are useful for testing, but in production it is essential to run backups automatically. Plakar includes a built-in scheduler to handle scheduling and to verify backups after they are created.

**Create the scheduler configuration file**

Create a file named `scheduler.yaml` in your home directory:

```bash
cat > ~/scheduler.yaml << 'EOF'
agent:
  tasks:
    - name: Backup web-server-1
      repository: "@ovh-s3-backups"
      backup:
        path: "@web-server-1"
        interval: 24h
        check: true

    - name: Backup web-server-2
      repository: "@ovh-s3-backups"
      backup:
        path: "@web-server-2"
        interval: 24h
        check: true
EOF
```

This configuration:

- Defines two backup tasks (one per source)
- Runs each backup every 24 hours (interval: 24h)
- Verifies each backup after creation (check: true)

**Start the scheduler**

To start the Plakar scheduler using your configuration:

```bash
plakar scheduler start -tasks ~/scheduler.yaml
```

- The scheduler runs in the background and performs backups according to the defined interval.
- Plakar ensures that each task is checked and successfully completed after execution.

> [!primary]
>
> For more information on scheduler configuration, refer to the [official Plakar Scheduler documentation](https://www.plakar.io/docs/main/guides/setup-scheduler-daily-backups/).
>

### Step 9: Configure systemd Services for Plakar

Currently, the Plakar scheduler and UI only run within your SSH session. If the VPS reboots, these processes will stop.

To ensure continuous operation, configure them as `systemd` services, so they start automatically on boot and restart in case of failure.

**Create the systemd service for the scheduler**

Creating a systemd service ensures the scheduler starts automatically when your VPS boots and restarts if it crashes.

Create the systemd service file `/etc/systemd/system/plakar-scheduler.service`:

```bash
cat << 'EOF' | sudo tee /etc/systemd/system/plakar-scheduler.service > /dev/null
[Unit]
Description=Plakar Scheduler
After=network.target

[Service]
Type=forking
ExecStart=/usr/bin/plakar scheduler start -tasks /home/ubuntu/scheduler.yaml
ExecStop=/usr/bin/plakar scheduler stop
Restart=on-failure
User=ubuntu
WorkingDirectory=/home/ubuntu

[Install]
WantedBy=multi-user.target
EOF
```

Replace `ubuntu` with your actual username if required.

**Create the systemd service for the UI**

The Plakar Web UI must also run continuously so you can monitor your backups at any time, not only when connected via SSH.

Create a systemd service for the Plakar Web UI at `/etc/systemd/system/plakar-ui.service`:

```bash
cat << 'EOF' | sudo tee /etc/systemd/system/plakar-ui.service > /dev/null
[Unit]
Description=Plakar Web UI
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/plakar at "@ovh-s3-backups" ui -listen :8080
Restart=always
User=ubuntu
WorkingDirectory=/home/ubuntu

[Install]
WantedBy=multi-user.target
EOF
```

Replace `ubuntu` with your actual username if required.

> [!primary]
>
> If Plakar is installed in a different location, update the path accordingly. Use the `which plakar` command to find the correct path.
>

**Enable and start the services**

Reload systemd and enable the services:

```bash
sudo systemctl daemon-reload
sudo systemctl enable plakar-scheduler
sudo systemctl enable plakar-ui
sudo systemctl start plakar-scheduler
sudo systemctl start plakar-ui
```

Verify that the services are running:

```bash
sudo systemctl status plakar-scheduler
sudo systemctl status plakar-ui
```

**Access the Plakar UI**

The Plakar Web UI requires an access token for security reasons. You can either define a custom token or use the token automatically generated by Plakar.

/// details | Set a custom token (recommended)

Set the `PLAKAR_UI_TOKEN` environment variable before starting the UI service. Update your systemd service file:

```bash
cat << 'EOF' | sudo tee /etc/systemd/system/plakar-ui.service > /dev/null
[Unit]
Description=Plakar Web UI
After=network.target

[Service]
Type=simple
Environment="PLAKAR_UI_TOKEN=your-secure-token-here"
ExecStart=/usr/bin/plakar at "@ovh-s3-backups" ui -listen :8080
Restart=always
User=ubuntu
WorkingDirectory=/home/ubuntu

[Install]
WantedBy=multi-user.target
EOF
```

Replace `your-secure-token-here` with a strong token of your choice (for example, a UUID or a random string).

Reload systemd and restart the service:

```bash
sudo systemctl daemon-reload
sudo systemctl restart plakar-ui
```

Open your browser and access the UI: `http://<YOUR_VPS_IP>:8080?plakar_token=your-secure-token`

///

/// details | Use an automatically generated token

If you do not set `PLAKAR_UI_TOKEN`, Plakar will generate a random token.

To retrieve it:

```bash
sudo journalctl -u plakar-ui -n 100 --no-pager | grep -i token
```

Look for a line similar to:

```console
launching webUI at http://:8080?plakar_token=d9fccdbd-77a3-41a0-8657-24d77a6d00ac
```

Copy the token from the URL and open the UI: `http://your-vps-ip:8080`. If prompted, paste the token to access the interface.

> [!warning]
>
> For production use, configure a firewall to restrict access to port 8080 to only your IP addresses, or set up a reverse proxy with SSL.
>

///

## Troubleshooting

1. **Authentication errors:** Verify your SSH keys and that the user has read permissions on the source servers.
2. **Cannot connect to Object Storage:** Check your S3 credentials, endpoint, and passphrase (command `plakar store show ovh-s3-backups`).
3. **Permission denied on source servers:** Ensure the SSH user can read the directories to be backed up.
4. **Services won’t start after reboot:** Check the service status and logs (`systemctl status` / `journalctl -u`).

You can also run the Plakar UI locally on your own computer by installing Plakar and configuring the same store with your OVHcloud S3 credentials. This allows you to access backups without connecting to the VPS.

## Go further

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
