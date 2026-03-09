---
title: "Backup Agent - How to configure your first backup"
excerpt: "Learn how to configure your first backup on a Bare Metal server using the Backup Agent product from the OVHcloud Control Panel"
updated: 2026-03-05
---

## Objective

You have just ordered your Backup Agent offer for your Bare Metal server. Discover how to set up your first backups.

**This guide explains how to configure your first backup using Backup Agent on a Bare Metal server.**

> [!primary]
> 
> Find more information about the Backup Agent product on [this page](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Requirements

- A Backup Agent ordered simultaneously with your Bare Metal server, or afterwards via the `Backup Agent`{.action} menu in the OVHcloud Control Panel.
- You need to have booted and configured an Operating System on your Bare Metal server.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

> [!warning]
>
> You must ensure that your server can be reached by our Veeam infrastructure.  
> You will receive the exact information in your delivery email.
>
> Here is the information to allow access on your Bare Metal server:
>
> - IP/DNS of the server: `vspc-cgw1.prod01.eu-west-rbx.backup.ovh.net` or `vspc-cgw21.prod01.eu-west-rbx.backup.ovh.net`
> - Port: 6180
>
> We also strongly recommend that you allow your server to reach other external addresses so that it can send your data to the Vault. There is no need to allow incoming traffic in this context.


## Instructions

The steps to create a backup for your server are as follows:

- Adding your server to your Backup Agent.
- Downloading the agent.
- Installing the agent on your server.

Once the agent is installed, it will receive the backup policy and will be able to perform backups.

Once these steps are complete, your first backup will run automatically.

### Add your server to your Backup Agent

Click [this link](/links/control-panel/baremetal-backup-agent) to access the `Backup Agent`{.action} section, then click on your vspc-tenant in the `Services`{.action} section.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Go to the `Agents`{.action} section.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> You should see the Bare Metal server you selected in your order in the table, with the status `not_installed`. This is normal at this stage; you now need to install the agent on your server.
>

Click the `Download`{.action} button at the top of the table listing your agents.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Select your Operating System and choose either to download the installation file or use one of the commands provided to retrieve it.

![Backup Agent Step 13](images/01-backup-agent-download-windows-en.png){.thumbnail}

To install your agent on your Bare Metal server, click on the tab corresponding to your Operating System:

> [!tabs]
> Windows
>>
>> Once the installation file is on your Bare Metal server, you can run it and follow the software procedure:
>>
>> ![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}
>>
>> ![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}
>>
>> ![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}
>>
>> ![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}
>>
>> ![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}
>>
>> Once installed, the agent connects to our infrastructure to retrieve your backup policy:
>>
>> ![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Finally, once the backup policy is applied, you will see your backup agent configured and present on your Bare Metal server:
>>
>> ![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Select your operating system and choose either to download the installation file or use one of the provided commands to retrieve it.
>>
>> ![Backup Agent Step 14](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Once the installation file is on your server, go to the folder containing it and run the file as follows:
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Once the installation is complete, you can verify it with this command:
>>
>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <USER>
>> ```
>> 
>> You can then see that one element is not yet installed:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> This is normal at this stage, we will apply a configuration that allows the Backup Agent to be deployed with a backup policy.

## Go further

Join our [community of users](/links/community).