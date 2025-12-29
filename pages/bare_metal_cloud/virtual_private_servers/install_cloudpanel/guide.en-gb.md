---
title: 'How to install CloudPanel on a VPS or a Dedicated Server'
excerpt: "Find out how to install the CloudPanel administration interface on a VPS or a Dedicated Server"
updated: 2025-12-03
---

<style>
.w-600 {
  max-width:600px !important;
}
</style>

## Objective

CloudPanel is a modern, lightweight, and high-performance hosting control panel, offering a web interface to deploy and manage:

- websites using PHP or Node.js;
- databases;
- SSL/TLS certificates (Let’s Encrypt);
- users;
- a firewall.

This guide explains how to install CloudPanel on a VPS or a Dedicated Server and how to connect to it to perform the initial configuration.

> [!warning]
>
> OVHcloud provides services for which you are responsible for the configuration, management, and operation. It is therefore your responsibility to ensure their proper functioning.
>
> We provide this tutorial to assist you with common tasks. However, we recommend that you contact a [specialist service provider](/links/partner) and/or the service publisher if you encounter difficulties. Indeed, we will not be able to provide you with support. More information is available in the "[Go further](#go-further)" section of this tutorial.

## Requirements

- A [VPS](/links/bare-metal/vps) or a [Dedicated Server](/links/bare-metal/bare-metal) with a [recommended configuration](https://www.cloudpanel.io/docs/v2/requirements/) in your [OVHcloud Control Panel](/links/manager).
- An administrative access (sudo) via SSH to your server.

## Instructions

### Step 1 — Connect and update the system

#### Connect to the server

Open a terminal and connect to your VPS (or Dedicated Server) using the following command:

````bash
ssh user@IP_VPS
````

Replace:

- `user` with your username.
- `IP_VPS` with your VPS's IP address.

#### Update the system

Update your operating system. This operation may take several minutes.

> [!tabs]
> Debian and Ubuntu
>> 
>> ```bash
>> sudo apt update && sudo apt -y upgrade
>> ```
>> 
> AlmaLinux 9 and Rocky Linux 8
>> 
>> ```bash
>> sudo dnf -y update
>> ```

### Step 2 — Open required ports (firewall)

To allow incoming and outgoing connections, refer to the **Port Firewall** section of the [official CloudPanel documentation](https://www.cloudpanel.io/docs/v2/guides/best-practices/security/) to find out which ports to open based on your needs.

#### Example of port opening for Debian and Ubuntu

1\. Install `UFW`:

```bash
sudo apt -y install ufw
```

2\. Open the necessary ports (examples: SSH, CloudPanel panel, HTTP/HTTPS):

```bash
sudo ufw allow 22/tcp
sudo ufw allow 8443/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

3\. Enable `UFW` and check its status (the value "ALLOW" is expected):

```bash
sudo ufw enable
sudo ufw status
```

#### Example of port opening for AlmaLinux 9 and Rocky Linux 8

1\. Install `firewalld`:

```bash
sudo dnf -y install firewalld
```

2\. Enable and start the service:

```bash
sudo systemctl enable --now firewalld
```

3\. Open the necessary ports (examples: SSH, CloudPanel panel, HTTP/HTTPS):

```bash
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --add-port=8443/tcp --permanent
```

4\. Apply the configuration:

```bash
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

### Step 3 — Install CloudPanel

1\. Install `wget`:

> [!tabs]
> Debian and Ubuntu
>> 
>> ```bash
>> sudo apt -y install wget
>> ```
>> 
> AlmaLinux 9 and Rocky Linux 8
>> 
>> ```bash
>> sudo dnf -y install wget
>> ```
>> 

2\. Download the CloudPanel installation script:

```bash
wget https://installer.cloudpanel.io/ce/v2/install.sh -O install.sh
```

3\. Run the installer with the desired database engine:

Run the script specifying the database you want to install (MySQL or MariaDB).

- Example with MySQL 8.4:

```bash
sudo DB_ENGINE=MYSQL_8.4 bash install.sh
```

- Example with MariaDB 11.4:

```bash
sudo DB_ENGINE=MARIADB_11.4 bash install.sh
```

The installation may take several minutes, as the script automatically installs the necessary dependencies.

### Step 4 — First connection

Once the installation is complete, enter the URL `https://<IP_VPS>:8443` in your browser, replacing `<IP_VPS>` with your VPS's IP address.

> [!primary]
>
> On the first access, a self-signed certificate is used. Accept the browser warning to continue.

The following interface appears:

![cloudpanel install](images/cloudpanel-setup-interface.png){.thumbnail .w-600}

On the first launch, CloudPanel asks you to create the administrator account by providing a username, an email address, and a password. After completing this step, enter the username and password you just set to log in. You then arrive at the CloudPanel administration interface.

## Go further <a name="go-further"></a>

[How to secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[How to secure a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner)

Join our [community of users](/links/community).