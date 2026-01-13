---
title: "Backup Agent - How to configure your first backup"
excerpt: "How to configure your first backup on your Bare Metal server with the Backup Agent product"
updated: 2026-01-09
---

## Objective

You have just ordered your Backup Agent solution for your Bare Metal server, discover how to set up your first backups.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager). 
- A Backup Agent ordered simultaneously with your Bare Metal server, or afterwards via the `Backup Agent`{.action} menu in the OVHcloud Control Panel.
- You need to have booted and configured an Operating System on your Bare Metal server.

## Instructions

In order to configure your first backup, you must install the agent on your Bare Metal server.

The functioning is as follows:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail} 

Once the agent has been installed, it will receive the backup policy and allow backups to be performed.

To install your agent on your Bare Metal server, follow the steps below according to your Operating System:

### Windows

Log in to the [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Click on your vspc-tenant, in the `Services`{.action} section.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Go to the `Agents`{.action} section.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Click the `Download`{.action} button at the top of the table listing your agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Select your Operating System and choose either to download the installation file or use one of the commands provided to retrieve it.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Once the installation file is on your Bare Metal server, you can run it and follow the procedure of the software:

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Once you have set it up, you will be able to see your agent connect to our infrastructure in order to go back to your backup policy:

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Finally, once you go back down, you can see your backup agent configured and present on your Bare Metal server:

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}

By default, your backups are triggered between 10pm and 6am, but you can launch backups manually by clicking the `Backup Now`{.action} button.

### Linux

Log in to the [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Click on your vspc-tenant, in the `Services`{.action} section.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Go to the `Agents`{.action} section.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Click the `Download`{.action} button at the top of the table listing your agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Select your Operating System and choose either to download the installation file or use one of the commands provided to retrieve it.

![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}

After installing the file on the Bare Metal server, navigate to its directory and run it as follows:

```bash
sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
```

Once the installation is done, you can check its completion with this command:

```bash
sudo veeamconsoleconfig -s

Management agent
    Connection state       : Connected
    Cloud gateway          : <OVHDOMAIN>:6180
    Connection account     : <UTILISATEUR>
```

## Go further

Join our [community of users](/links/community).