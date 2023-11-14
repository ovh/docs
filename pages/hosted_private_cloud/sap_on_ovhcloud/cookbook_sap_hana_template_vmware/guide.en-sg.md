---
title: "Deploy a virtual machine with SAP HANA and OVHcloud Backint Agent pre-installed"
excerpt: "This guide provides instructions for deploying a SLES for SAP virtual machine with SAP HANA and OVHcloud Backint Agent pre-installed"
updated: 2023-09-05
---

## Objective

This guide provides instructions for deploying a SLES for SAP virtual machine with SAP HANA and OVHcloud Backint Agent for SAP HANA pre-installed on VMware on OVHcloud solution using OVF template created by OVHcloud.

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).
- [VMware on OVHcloud solution](https://www.ovhcloud.com/en-sg/enterprise/products/hosted-private-cloud/) deployed.
- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project)in your OVHcloud account.
- [An S3 Object Storage bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).
- [An S3 user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#creation-dun-utilsateur) with read right.
- [A second S3 Object Storage bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).
- [An S3 user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#creation-dun-utilsateur) with read/write rights on this second S3 Object Storage bucket.

## Instructions

> [!primary]
> [**Quick access to the OVF template URL**](#ovf_link)
>

### Deployment

OVHcloud provides an OVF template including SUSE Linux Enterprise Server for SAP Applications operating system pre-configured to receive an SAP HANA installation.

In order to respect the vCPU/RAM ratio for OLAP and OLTP workloads, three models of virtual machines are recommended in a production environment.

|        Host        |  vCPU  |  Socket |   Memory  |
|:------------------:|:------:|:-------:|:---------:|
| SAP HANA vSAN 1536 |   24   |   0.5   |   384 GB  |
| SAP HANA vSAN 1536 |   48   |    1    |   768 GB  |
| SAP HANA vSAN 1536 |   96   |    2    |  1436 GB<sup><sub>1</sub></sup>  |

<sup><sub>[1] We suggest reserving 100 GB of memory for the ESXi host.</sup></sub>

This OVF template offers you the possibility to install SAP HANA as well as OVHcloud Backint Agent for SAP HANA in an automated way, reducing the time to deliver an SAP HANA database.

First, you must upload SAP HANA sources to your first S3 Object Storage bucket, as asked in the requirements chapter. The sources must be uploaded in the same format as the one used for download, for example « 51056821.ZIP ».

> [!warning]
> SAP HANA Components (AFL, EML, LCAPPS, EPMMDS, etc.) are not managed by this automation. They should be managed in the post-installation step.
>

We recommend following our [S3 Object Storage guide](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) if it's your first time with S3 Object Storage.

Once the SAP HANA sources have been uploaded in your S3 Object Storage bucket, you can now connect to the vSphere interface of your VMware on OVHcloud solution. Get the URL at [this address](https://www.ovh.com/manager/#/dedicated/dedicated_cloud).

> [!warning]
> A current issue with the Content Library and the dynamic disk feature ([KB85842](https://kb.vmware.com/s/article/85842)) force us to use the direct link of the OVF template.
>

1. In the vSphere interface, select your datacenter, click on `Action`{.action}, then `Deploy OVF template`{.action}.

![new-virtual-machine](images/step-1.png){.thumbnail}

<ol start="2"><li>
Set the following URL to reach the OVF template for SAP HANA, then click on <code class="action">Next</code>.
</li></ol>

<a name="ovf_link"></a>
```
https://templates-pcc-for-hana.s3.sbg.perf.cloud.ovh.net/sles4sap-sap-hana-SLE-15-SP4-Full-x86_64/sles4sap-sap-hana-SLE-15-SP4-Full-x86_64.ovf
```

![deploy-from-template](images/step-2.png){.thumbnail}

<ol start="3"><li>
Give a name to your virtual machine and select your datacenter, then click on <code class="action">Next</code>.
</li></ol>

![virtual-machine](images/step-3.png){.thumbnail}

<ol start="4"><li>
Select "Cluster1", then click on <code class="action">Next</code>.
</li></ol>

![cluster1](images/step-4.png){.thumbnail}

<ol start="5"><li>
The product name must be "SLES for SAP SLE-15-SP4-Full-x86_64 for SAP HANA (BYOL)". Click on <code class="action">Next</code>.
</li></ol>

![review](images/step-5.png){.thumbnail}

<ol start="6"><li>
Select "vsanDatastore" to store your SAP HANA virtual machine, to be compliant with SAP and VMware recommendations.
</li></ol>

![storage](images/step-6.png){.thumbnail}

<ol start="7"><li>
Select the network where you want to deploy your SAP HANA database, then click on <code class="action">Next</code>.<br>
At the end of the deployment, you will have the possibility to edit your virtual machine to add another network card, if needed.
</li></ol>

![network](images/step-7.png){.thumbnail}

<ol start="8"><li>
The « SLES for SAP SLE-15-SP4-Full-x86_64 for SAP HANA (BYOL) » model offers many parameters to customize the virtual machine.<br><br>

In this guide, we focus on these three categories:

<ul>
<li>SAP HANA disks ;</li>
<li>SAP HANA installation ;</li>
<li>OVHcloud Backint Agent installation.</li>
</ul><br>

In the <code class="action">SAP HANA disks</code> category, you must set the disks size which will be created. The pre-filled values follow the storage recommendations for a SAP HANA database with 64 GB of RAM.</li></ol>

![disks](images/step-8.png){.thumbnail}

Find below the table of SAP recommendations to size SAP HANA disks:

|      Disks      |                         Size                         |
|:---------------:|:----------------------------------------------------:|
| usrsap          |  MIN(32 GB)                                          |
| hanadata        |  1 x RAM                                             |
| hanalog         | [RAM ≤ 512 GB] = 1/2 x RAM<br>[RAM > 512 GB] = 512 GB|
| hanashared      |  MIN(1 x RAM; 1 TB)                                  |
| hanabackup      |  hanadata + hanalog                                  |

<ol start="9"><li>
If you want to use the automation of the SAP HANA installation, tick the installation enable box and fill the information in the <code class="action">SAP HANA installation</code> category.

</li></ol>

> [!primary]
> Take note of the [SAP Note 1979280](https://me.sap.com/notes/1979280/E) which describes all SAP HANA SID which cannot be used.
>

![sap-hana-installation](images/step-9.png){.thumbnail}

<ol start="10"><li>
If you want to use the automation of the OVHcloud Backint Agent for SAP HANA installation to backup your SAP HANA database on an S3 Object Storage, tick the installation enable box and fill in the information in the <code class="action">OVHcloud Backint Agent installation</code> category.
</li></ol>

> [!warning]
> This option is only available if you have enabled the SAP HANA installation in the previous category.
>

![ovhcloud-backint-agent-installation](images/step-10.png){.thumbnail}

Once these steps have been done, the deployment of your virtual machine from the OVF template created by OVHcloud starts.

We advise you to read and perform the actions of the [Advanced settings](#advanced-settings) chapter before starting your virtual machine.

<a name="advanced-settings"></a>

### Advanced settings

The OVF template created by OVHcloud takes in charge many parameters. However, some additional parameters can be set once the virtual machine has been deployed.

1. To add these parameters, select your virtual machine, click on `Action`{.action}, then `Edit Settings`{.action}.

![edit-vm](images/vm-step-1.png){.thumbnail}

<ol start="2"><li>
Click on the <code class="action">Options VM</code> tab, then expand the <code class="action">Advanced</code> menu and click on <code class="action">Edit Configuration</code>.
</li></ol>

![vm-options](images/vm-step-2.png){.thumbnail}

<ol start="3"><li>
These following parameters are included in the OVF template:
</li></ol>

|           Parameter           |  Value  |
|:-----------------------------:|:-------:|
| tools.guestlib.enableHostInfo |  TRUE   |
| numa.memory.gransize          |  32768  |

To get more details about these parameters, we invite you to take note of the [SAP Note 1606643](https://me.sap.com/notes/1606643/E) as well as the [VMware documentation](https://core.vmware.com/resource/sap-hana-vmware-vsphere-best-practices-and-reference-architecture-guide).

<ol start="4"><li>
If your SAP HANA virtual machine uses a half-socket or only one socket, it's also recommended applying this parameter:
</li></ol>

|      Parameter     |  Value  |
|:------------------:|:-------:|
| numa.vcpu.preferHT |  TRUE   |

<ol start="5"><li>
We recommend applying a VM Storage Policy with a thick provisioning. To create a VM Storage Policy, click the <code class="action">vSphere Client</code>, then click the <code class="action">VM Storage Policies</code> icon.<br><br>

Find below the parameters for the rule that we advise creating for SAP HANA.
</li></ol>

|             Parameter             |              Value             |
|:---------------------------------:|:------------------------------:|
| Storage Type                      | VSAN                           |
| Site disaster tolerance           | None - standard cluster        |
| Failures to tolerate              | 1 failure - RAID-1 (Mirroring) |
| Number of disk stripes per object | 1                              |
| IOPS limit for object             | 0                              |
| Object space reservation          | Thick provisioning             |
| Flash read cache reservation      | 0%                             |
| Disable object checksum           | No                             |
| Force provisioning                | No                             |
| Encryption services               | No preference                  |
| Space efficiency                  | Deduplication and compression  |
| Storage tier                      | All flash                      |

<ul>
This VM Storage Policy must be applied on disks which host /hana/shared (Hard disk 3), /hana/data (Hard disk 4) and<br> /hana/log (Hard disk 5) volumes of your virtual machine.
</ul>

<ol start="6"><li>You can now start your virtual machine.<br><br>

If you have enabled the installation of SAP HANA, the installation will start during the first boot of your virtual machine. The installation takes a bit more than 15 minutes, please don't perform any action on your virtual machine during the installation process.<br><br>

A status will inform you about progress during your SSH connection to your virtual machine as well as prompt messages once connected.
</li></ol>

### Post-configuration

We suggest you perform the following actions before putting your SAP HANA database in production.

1. Register your SUSE Linux Enterprise Server for SAP Applications operating system and get the latest updates with the command:

```bash
zypper update -y
```

<ol start="2"><li>
Install your SAP HANA licence.
</li></ol>

<ol start="3"><li>
Create the scheduling backups for your SAP HANA database. We present an example of the scheduling backups with OVHcloud Backint Agent for SAP HANA in <a href="/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent">our guide</a>.
</li></ol>

<ol start="4"><li>
We suggest setting the same time servers (NTP) as the ones used by your ESXi hosts of your VMware on OVHcloud solution at the OS level.<br><br>

This information is available in your vSphere interface, selecting an ESXi host, <code class="action">Configure</code> tab, <code class="action">Time Configuration</code> menu.<br><br>

On SLES, edit the <code>/etc/chrony.conf</code> file and add the IP address of NTP servers:

</li></ol>

```bash
# Allow NTP client access from local network.
# Use public servers from the pool.ntp.org project.
# Please consider joining the pool (https://www.pool.ntp.org/join.html).
server {ip-ntp-server1}
server {ip-ntp-server2}
server {ip-ntp-server3}
server {ip-ntp-server4}
```

<ul>
Just start and enable this service for next startup:
</ul>

```bash
systemctl start chronyd.service
systemctl enable chronyd.service
```

## Go further

- [Install and use OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Use OVHcloud Backint Agent with several S3 Object Storage buckets](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)
- [SAP HANA on VMware vSphere Best Practices and Reference Architecture Guide](https://core.vmware.com/resource/sap-hana-vmware-vsphere-best-practices-and-reference-architecture-guide)
- [SAP Note 1606643 - Linux: VMware vSphere host monitoring interface](https://me.sap.com/notes/1606643/E)
- [SAP Note 2470289 - FAQ: SAP HANA Non-Uniform Memory Access (NUMA)](https://me.sap.com/notes/2470289)
- [SAP Note 2779240 - Workload-based sizing for virtualized environments](https://me.sap.com/notes/2779240)
- [SAP HANA on VMware vSphere](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
