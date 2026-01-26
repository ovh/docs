---
title: "Backup Agent - How to configure your first backup"
excerpt: "How to configure your first backup on your Bare Metal server with the Backup Agent product"
updated: 2026-01-23
---

## Objective

You have just ordered your Backup Agent solution for your Bare Metal server, discover how to set up your first backups.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager). 
- A Backup Agent ordered simultaneously with your Bare Metal server, or afterwards via the `Backup Agent`{.action} menu in the OVHcloud Control Panel.
- You need to have booted and configured an Operating System on your Bare Metal server.

## Instructions

If you would like more information about how the Backup Agent product works, read our guide "[Backup Agent - Product presentation](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation)" for more information.

In order to create a backup for your server, this involves:
* Adding your server to your Backup Agent.
* Downloading the agent.
* Installing the agent on your server.

Once the agent has been installed, it will receive the backup policy and allow backups to be performed.

Once all these steps are completed, your first backup will be performed.

## Add your server to your Backup Agent

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and select `Backup Agent`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Click on your vspc-tenant, in the `Services`{.action} section.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Go to the `Agents`{.action} section.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

> [!primary]
>
> You should find the Bare Metal server you selected in your order in the table, with the status "not_installed". This is normal, you just need to install the agent on your server.
>

Click the `Download`{.action} button at the top of the table listing your agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Select your Operating System and choose either to download the installation file or use one of the commands provided to retrieve it.

![Backup Agent Download Windows](images/01-backup-agent-download-windows-en.png){.thumbnail}

To install your agent on your Bare Metal server, follow the steps below according to your Operating System:

> [!tabs]
> ### Windows
>>
>> Once the installation file is on your Bare Metal server, you can run it and follow the procedure of the software:

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

>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> ### Linux
>> Select your Operating System and choose either to download the installation file or use one of the commands provided to retrieve it.
>>
>> ![Backup Agent Download Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Once the installation file is on your server, navigate to its directory and run it as follows:

```bash
sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
```

Once the installation is done, you can check its completion with this command:

>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> You may see that one element is not yet installed:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> This is completely normal, we will apply a configuration that allows the Backup Agent to be deployed with a backup policy.

## Go further

Join our [community of users](/links/community).