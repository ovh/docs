---
title: Prepare SUSE Linux Enterprise for SAP HANA
slug: sap-prepare-sles-for-sap-hana
excerpt: This guide provides you with general guidelines on how to prepare SLES for SAP HANA
section: Getting started
order: 01
updated: 2022-03-29
---

**Last updated 29th March 2022**

## Objective

OVHcloud provides SAP-Certified hardware on which to build a SAP solution.

**This guide provides you with general guidelines on how to prepare a SUSE Linux Enterprise Server (SLES) for SAP Applications hosted on OVHcloud hardware in order to install a SAP HANA solution.**

> [!warning]
>
> While the material contained in this guide has been formulated with all due care, OVHcloud does not warrant or represent that the material constitutes an official SAP guide.
>
> All technical integration/installation/administration tasks of SAP solutions shall be validated by a SAP professional.

## System Architecture

### Prerequisites

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- a [HGR-HCI Baremetal dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/high-grade/).
- a SLES15 SP3 for SAP Applications installation

#### OS Installation

To deploy your cloud-ready SLES for SAP applications image on a baremetal server, please follow our guide: [How to use the Bring Your Own Image feature](https://docs.ovh.com/gb/en/dedicated/bringyourownimage/).

You can also deploy an ISO of your SLES image through the IPMI: [Installing an OS using IPMI](https://docs.ovh.com/gb/en/dedicated/use-ipmi-dedicated-servers/#installing-an-os-using-ipmi-v1)

#### General Requirements

It is recommended to apply the latest kernel update recommended by SAP unless there are specific reasons against doing so.

Using updated Linux kernels and packages from SLES Service Packs not listed in SAP Note 2235581 is not supported and will break the certification.

The 'hostname' command (without options) may only output the host name and not the FQDN (Fully Qualified Domain Name).

***For more details, see SAP Note 2235581 ***

***For more details, see SAP Note 2205917 ***

#### SLES 15 SP3 Requirements

Here are the optimal settings recommended by SAP for running a SAP HANA database on SLES 15.

***For more details, see SAP note 2684254 ***

#### Repositories

After the system installation, make sure all repositories are correctly installed/activated:

```bash
zypper products
Refreshing service 'Basesystem_Module_15_SP3_x86_64'.
Refreshing service 'Desktop_Applications_Module_15_SP3_x86_64'.
Refreshing service 'Legacy_Module_15_SP3_x86_64'.
Refreshing service 'SAP_Applications_Module_15_SP3_x86_64'.
Refreshing service 'SUSE_Linux_Enterprise_High_Availability_Extension_15_SP3_x86_64'.
Refreshing service 'SUSE_Linux_Enterprise_Server_for_SAP_Applications_15_SP3_x86_64'.
Refreshing service 'Server_Applications_Module_15_SP3_x86_64'.
Building repository 'SLE-Module-Basesystem15-SP3-Pool' cache ...................................[done]
Retrieving repository 'SLE-Module-Basesystem15-SP3-Updates' metadata ...........................[done]
Building repository 'SLE-Module-Basesystem15-SP3-Updates' cache ................................[done]
Building repository 'SLE-Module-Desktop-Applications15-SP3-Pool' cache .........................[done]
Retrieving repository 'SLE-Module-Desktop-Applications15-SP3-Updates' metadata .................[done]
Building repository 'SLE-Module-Desktop-Applications15-SP3-Updates' cache ......................[done]
Building repository 'SLE-Module-Legacy15-SP3-Pool' cache .......................................[done]
Retrieving repository 'SLE-Module-Legacy15-SP3-Updates' metadata ...............................[done]
Building repository 'SLE-Module-Legacy15-SP3-Updates' cache ....................................[done]
Building repository 'SLE-Module-SAP-Applications15-SP3-Pool' cache .............................[done]
Retrieving repository 'SLE-Module-SAP-Applications15-SP3-Updates' metadata .....................[done]
Building repository 'SLE-Module-SAP-Applications15-SP3-Updates' cache ..........................[done]
Retrieving repository 'SLE-Product-HA15-SP3-Updates' metadata ..................................[done]
Building repository 'SLE-Product-HA15-SP3-Updates' cache .......................................[done]
Building repository 'SLE-Module-Server-Applications15-SP3-Pool' cache ..........................[done]
Retrieving repository 'SLE-Module-Server-Applications15-SP3-Updates' metadata ..................[done]
Building repository 'SLE-Module-Server-Applications15-SP3-Updates' cache .......................[done]
Loading repository data...
Reading installed packages...
S  | Repository                                 | Internal Name                   | Name                                                     | Version | Arch   | Is Base
---+--------------------------------------------+---------------------------------+----------------------------------------------------------+---------+--------+--------
i+ | SLE-Module-Basesystem15-SP3-Pool           | sle-module-basesystem           | Basesystem Module                                        | 15.3-0  | x86_64 | No
i+ | SLE-Module-Desktop-Applications15-SP3-Pool | sle-module-desktop-applications | Desktop Applications Module                              | 15.3-0  | x86_64 | No
i+ | SLE-Module-Legacy15-SP3-Pool               | sle-module-legacy               | Legacy Module                                            | 15.3-0  | x86_64 | No
i+ | SLE-Module-SAP-Applications15-SP3-Pool     | sle-module-sap-applications     | SAP Applications Module                                  | 15.3-0  | x86_64 | No
i+ | SLE-Module-Server-Applications15-SP3-Pool  | sle-module-server-applications  | Server Applications Module                               | 15.3-0  | x86_64 | No
i+ | SLE-Product-HA15-SP3-Pool                  | sle-ha                          | SUSE Linux Enterprise High Availability Extension 15 SP3 | 15.3-0  | x86_64 | No
i  | SLE-Product-SLES_SAP15-SP3-Pool            | SLES_SAP                        | SUSE Linux Enterprise Server for SAP Applications 15 SP3 | 15.3-0  | x86_64 | Yes
```

#### UUID SERVICE

The UUID service is mandatory and serves to generate time-based UUIDs that are guaranteed to be unique. This is necessary for SAP applications.

You have to install the following:

```bash
zypper install uuid
```

After the installation, make sure that the socket is enabled and started:

```bash
systemctl status uuidd.socket
uuidd.socket - UUID daemon activation socket
     Loaded: loaded (/usr/lib/systemd/system/uuidd.socket; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2021-10-20 16:53:54 CEST; 1 weeks 6 days ago
   Triggers: ● uuidd.service
     Listen: /run/uuidd/request (Stream)
     CGroup: /system.slice/uuidd.socket
Oct 20 16:53:54 systemd[1]: Listening on UUID daemon activation socket.
```

If you do not see `Active: active (running) since ...` you can start the socket manually:

```bash
systemctl start uuidd.socket
```

Recent versions of sapconf and saptune take care of this step.

***For more details, see SAP Note 1275776 - Linux: Preparing SLES for SAP environments.***

#### Packages and Libraries

Please ensure that the following packages are correctly installed:

- libssh2-1
- libopenssl-1_0
- saptune (if you want to use the automated SAP tool for tuning)

***NB: The SLE-Module-Legacy15-SP3 repository is required to install these packages.***

```bash
zypper search -i openssl- libssh saptune

S | Name          | Summary                                                      | Type
--+---------------+--------------------------------------------------------------+--------
i | libssh2-1     | A library implementing the SSH2 protocol                     | package
i | libssh4       | SSH library                                                  | package
i | openssl-1_1   | Secure Sockets and Transport Layer Security                  | package
i | saptune       | Comprehensive system tuning management for SAP solutions     | package
i | yast2-saptune | An alternative and minimal interface for configuring saptune | package
```

If a package is missing, you can use the following command to install it:

```bash
zypper install name_of_package
```


### GRUB/KERNEL Tuning

For the grub and kernel tuning, you can choose between two setup methods:

- SAP-Tool based tuning
- Manual tuning

We will go through both methods in this guide.

***NB: Tuning requirements may change with each SP/Solution release. Please make sure to follow the official SAP notes and tune accordingly.***

#### Using saptune

Saptune is a configuration tool to prepare a system to run SAP workloads by implementing the recommendations of various SAP notes.

```bash
#Disable sapconf to avoid conflict
systemctl disable sapconf
#List all saptune solutions
saptune solution list
#Apply the HANA solution
saptune solution apply HANA
#Start the saptune daemon
saptune daemon start
#Use this last command to let saptune verify if the system was correctly set up
saptune solution verify
#Output:
The running system is currently well-tuned according to all of the enabled notes.
```

When using sapconf or saptune, verify that parameters handled by these tools are not configured elsewhere (e.g. boot parameter, sysctl.conf, etc.).

A configuration conflict can cause inconsistent system behaviour and makes debugging very hard.

*** For more details, see SAP Note 1275776 ***

#### Manual tuning

##### **Turn off autoNUMA balancing**

SAP HANA is a NUMA (non-uniform memory access) aware database.
Thus it does not rely on the Linux kernel's features to optimize NUMA usage automatically.
Depending on the workload, it can be beneficial to turn off automatical NUMA balancing (autoNUMA).

In order to permanently switch off autoNUMA, either:

<ol start="1">
  <li>Edit /etc/default/grub:</li>
</ol>

Search for the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and append to this line:

```bash
numa_balancing=disable
```

Save your changes and run:

```bash
grub2-mkconfig -o /boot/grub2/grub.cfg 
```

After a reboot, autoNUMA will be disabled.

**OR**

<ol start="2">
  <li>Use YaST bootloader:</li>
</ol>

```bash
yast bootloader
```

Choose the `Kernel Parameters` tab (ALT-k) and edit the `Optional Commandline Parameters` section by appending:

```bash
numa_balancing=disable
```

##### **CPU Power Saving**

<ol start="1">
  <li>Check if the recommended driver is enabled and whether the CPU power safe mode is activated. Execute the following command as root user in the Linux shell:</li>
</ol>

```bash
cat /sys/devices/system/cpu/cpuidle/current_driver
```

The correct value for the cpuidle driver should be `acpi_idle`. If so, no further steps are required. In case the output shows the wrong value `intel_idle`, follow the steps in SAP Notes.

<ol start="2">
  <li>Check the CPU power save mode by running the following command:</li>
</ol>

```bash
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```

The correct value for the CPU power save mode should be "performance".

If the output shows at least one line with "ondemand", follow the steps in SAP Note 1890444 - Slow HANA system due to CPU power save mode.

##### **Disable transparent hugepages**

With SLES 15, the usage of transparent hugepages (THP) is generally activated for the Linux kernel. The THP allows the handling of multiple pages as hugepages to reduce the translation lookaside buffer (TLB) footprint, in situations where it might be useful.

Due to the special manner of HANA's memory management, the usage of THP may lead to hanging situations and degradations.

To check the current configuration, run the following command:

```bash
cat /sys/kernel/mm/transparent_hugepage/enabled
```

Its output should read:

```bash
always madvise [never]
```

If this is not the case you can disable the THP usage at runtime by issuing the following:

```bash
echo never > /sys/kernel/mm/transparent_hugepage/enabled
```

There is no need to shut down the database to apply this configuration. This setting is then valid until the next system start.

To persist the disabling of THP usage, you have the following options:

<ol start="1">
  <li>Edit /etc/default/grub :</li>
</ol>

Search for the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and append to this line:

```bash
transparent_hugepage=never
```

Save your changes and run:

```bash
grub2-mkconfig -o /boot/grub2/grub.cfg
```

After a reboot, the usage of THP will be disabled.

**OR**

<ol start="2">
  <li>Use YaST bootloader, execute:</li>
</ol>

```bash
yast bootloader
```

Choose the `Kernel Parameters` tab (ALT-k) and edit the `Optional Commandline Parameters` section by appending `transparent_hugepage=never`.

To enable this change, a system reboot is required.

In a scale-out environment, those changes have to be done on every server of the landscape.

In case you already have a running HANA instance, rebooting the server should only be done when a standby server is configured. Do not reboot all servers at once.

For single node instances, a downtime has to be considered.

##### **Configure C-States for lower latency (applies to Intel-based systems only)**

Modern CPUs implement idle states to save energy or to allow neighbor CPUs to run with higher clock frequency when there’s no work to do. On one hand, the additional time needed to stop and restart the execution of the code can cause performance degradations. On the other hand, prohibiting CPUs to enter idle states can limit the operating frequency of their neighbor CPUs. Idle states can be impacted by BIOS settings.

A recommended balance can be achieved by limiting the wake-up latency from CPU power-saving states (C-states) to 70 microseconds (usecs), which restricts idle states to `light sleep`, by choosing one of the following options:

If you are neither using sapconf nor saptune, you can limit C-states to `very light sleep` by setting the following kernel parameters:

```bash
intel_idle.max_cstate=1 processor.max_cstate=1
```

To set this parameter permanently, use one of the following options:

<ol start="1">
  <li>Edit /etc/default/grub:</li>
</ol>

Search for the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and append to this line `intel_idle.max_cstate=1 processor.max_cstate=1`

Save your changes and run:

```bash
grub2-mkconfig -o /boot/grub2/grub.cfg
```

After a reboot, the usage of C-states C2 and higher will be disabled.

**OR**

<ol start="2">
  <li>Use the YaST2 bootloader, execute:</li>
</ol>

```bash
yast bootloader
```

Choose the `Kernel Parameters` tab (ALT-k) and edit the `Optional Commandline Parameters` section by appending `intel_idle.max_cstate=1 processor.max_cstate=1`

To enable this change, a system reboot is required.

In a scale-out environment, those changes have to be done on every server of the landscape.

In case you already have a running HANA instance, rebooting the server should only be done when a standby server is configured. Do not reboot all servers at once. For single node instances, a downtime has to be considered.

##### **Kernel samepage merging (KSM)**

The KSM feature helps reduce physical memory overhead by detecting memory pages with identical content. The feature is useful for VMs, but the space-time tradeoff does not pay off for HDB instances not running in VMs. Kernel samepage merging is usually deactivated by default.

If you nevertheless activated KSM, SAP recommends to disable it:

<ol start="1">
  <li>Add the following command to a script executed on system boot, such as /etc/init.d/boot.local:</li>
</ol>

```bash
echo 0 > /sys/kernel/mm/ksm/run
```

***For more details, see SAP Note 1275776 - Linux: Preparing SLES for SAP environments.***

#### Swap

When running SAP systems, the use of Linux swap-space is mandatory.

SAP recommends to setup a dedicated swap-partition on a fast storage, like a system internal HDD, RAID-Array, SSD or a LUN in a SAN.

The recommended value for the swap space is 2 GB.

***For more details, see SAP Note 1999997 - FAQ: SAP HANA Memory***

#### NTP Settings

NTP is a networking protocol used for clock synchronization between systems.

You can use your own NTP server or use the freely accessible OVHcloud NTP server:

```bash
#server:port
ntp.ovh.net:123
```

- To set the NTP server using YaST:

1. Open the YaST NTP module (Network Services > NTP Configuration)
2. Specifiy when to start the NTP service
3. Add a new time server
4. Test the time synchronization
5. Confirm with OK (F10)

## Storage Architecture

### Overview

To ensure that the database can always be restored to its most recent committed state, changes to data in the database are periodically copied to disk, logs containing data changes and certain transaction events are also saved regularly to disk. 

By default, the basepath for data volume partitions is `/usr/sap/<SID>/SYS/global/hdb/data`. However, you can also add partitions in a specified path of your own choice.

Data and logs of the system are stored in volumes.

The SAP HANA database lifecycle manager (HDBLCM) requires certain file systems in order to successfully install a SAP HANA system.

The file systems must be created and mounted before the database installation.

### LVM Setup

#### Storage sizing

**Example of a logical volumes organization :**

|Mount Point|Size|Stripes|Description|
|---|---|---|---|
|/|10 - 50GB| |root|
|/usr/sap|50 GB|1|This is the path to the local SAP system instance directories|
|/hana/data|2x RAM|All disks (256KB)|The default path to the data directory|
|/hana/log|0.5x RAM|All disks (256KB)|The default path to the log directory|
|/hana/backup|2,5x RAM|1|Path to the HANA-db backup (data+log)|
|/hana/shared|1x RAM|1|The mount directory is used for shared files between all hosts in a SAP HANA system. This directory needs to be accessible to each of the servers in the SAP HANA cluster|

> [!warning]
>
> - It is important to ensure that sufficient free space is available in the file system for backups. If there is not enough space, the backup will fail.
> 
> For this reason, before you back up the database, you should carefuly estimate the amount of space that will be needed in the backup destination and monitor the target destination.
>
> - Do not remove either data files or log files using operating system tools as this will corrupt the database.
>

#### Manual setup

<ol start="1">
  <li>Make sure all the disks are mounted:</li>
</ol>

```bash
lsblk
    NAME             MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    sda                8:0    0  100G  0 disk
    ├─sda1             8:1    0  256M  0 part /boot/efi
    └─sda2             8:2    0   82G  0 part
    sdb                8:16   0  250G  0 disk
    sdc                8:32   0  250G  0 disk
```

<ol start="2">
  <li>Create the physical volumes:</li>
</ol>

```bash
pvcreate /dev/sdb /dev/sdc
    Physical volume "/dev/sdb" successfully created.
    Physical volume "/dev/sdc" successfully created.
```

<ol start="3">
  <li>Run the pvs command to ensure the volumes are correctly created:</li>
</ol>

```bash
pvs
    PV         VG     Fmt  Attr PSize   PFree
    /dev/sda2  vgsys  lvm2 a--   82.00g  50.00g
    /dev/sdb   vghana lvm2 a--  250.00g 250.00g
    /dev/sdc   vghana lvm2 a--  250.00g 250.00g
```

<ol start="4">
  <li>Intialize the volume groups:</li>
</ol>

```bash
vgcreate vghana /dev/sdb /dev/sdc
    Volume group "vghana" successfully created
```

<ol start="5">
  <li>Run the vgs command to check if the volume groups are correctly created:</li>
</ol>

```bash
vgs
    VG     #PV #LV #SN Attr   VSize   VFree
    vghana   2   0   0 wz--n- 499.99g 499.99g
```

<ol start="6">
  <li>Initialize the logical volumes:</li>
</ol>

```bash
lvcreate -i 2 -I 256 -L XXG -n lvhanadata vghana
lvcreate -i 2 -I 256 -L XXG -n lvhanalog vghana
lvcreate -i 1 -I 256 -L XXG -n lvhanabackup vghana
lvcreate -i 1 -I 256 -L XXG -n lvhanashared vghana
lvcreate -i 1 -I 256 -L XXG -n lvusrsap vgsys
```

***NB: Replace ‘xx’ by the volume size in GB***

<ol start="7">
  <li>Create the directories:</li>
</ol>

```bash
mkdir -p /hana/data /hana/log /hana/shared /hana/backup /usr/sap
```

<ol start="8">
  <li>Build the XFS file system on the logical volumes:</li>
</ol>

```bash
mkfs.xfs /dev/mapper/vghana-lvhanadata
mkfs.xfs /dev/mapper/vghana-lvhanalog
mkfs.xfs /dev/mapper/vghana-lvhanabackup
mkfs.xfs /dev/mapper/vghana-lvhanashared
mkfs.xfs /dev/mapper/vgsys-lvusrsap
```

<ol start="9">
  <li>Add the logical volume mount entries to /etc/fstab:</li>
</ol>

```bash
echo "/dev/mapper/vghana-lvhanadata /hana/data xfs noatime,nodiratime,logbsize=256k 0 0" >> /etc/fstab
echo "/dev/mapper/vghana-lvhanalog /hana/log xfs noatime,nodiratime,logbsize=256k 0 0" >> /etc/fstab
echo "/dev/mapper/vghana-lvhanabackup /hana/backup xfs noatime,nodiratime,logbsize=256k 0 0" >> /etc/fstab
echo "/dev/mapper/vghana-lvhanashared /hana/shared xfs noatime,nodiratime,logbsize=256k 0 0" >> /etc/fstab
echo "/dev/mapper/vgsys-lvusrsap /usr/sap xfs noatime,nodiratime,logbsize=256k 0 0" >> /etc/fstab
```

## Network Architecture

### Overview

SAP recommends a dedicated network communication of 10 Gbit/s between the SAP HANA landscape and the source system for efficient data replication.

A source system can be an ERP system, from which data are replicated to the SAP HANA appliance (replication scenario), or an SAP NetWeaver Application Server ABAP, based on which an SAP NetWeaver Business Warehouse, powered by SAP HANA, is running on top of the SAP HANA appliance.

In SAP HANA scale out environments, the single nodes and services need to communicate with each other for various purposes.
In single-node systems, at least services need to communicate with each other.

### Network flows

|Source Address|Source Port|Destination address|Destination port|Protocol|Comments|
|--------------|-----------|-------------------|----------------|--------|--------|
|Administration Server|any|SAP HANA|22|TCP| sshd (IN)|
|Database Clients|any|SAP HANA|30015|TCP|SQL/MDX access port for standard database access. Access to these ports must be enabled for all database clients, for example, applications, application servers, end-user clients, and SAP HANA Studio.|
|Database Access|any|SAP HANA|30017|TCP|SQL/MDX access port for standard database access. Access to these ports must be enabled for all database clients, for example, applications, application servers, end-user clients, and SAP HANA Studio.|
|NTP|any|SAP HANA|123|UDP|Time sync (IN)|
|DNS|53|SAP HANA|any|TCP/UDP|DNS resolution (IN)|
|SAP HANA|any|DNS Server|53|TCP/UDP|DNS resolution (OUT)|

> [!primary]
> The list provides basic ports used for SAP HANA.
>
>You can find the full list of all TCP/IP Ports required by HANA and all other SAP Products [here](https://help.sap.com/viewer/ports){.external}
>

> [!primary]
> For the system database (SYSTEMDB), the port takes the following form: 3`instance-number`13.<br>
> For example, 30013 (if the instance is 00).
>
> If you install a new system, you automatically get one tenant, unless you install an empty system. The port for the automatically created first tenant typically takes the following form: 3<instance-number>15. For example, 30015 (if the instance is 00).
>

## Post-deployment

### SAP HANA Hardware And Cloud Measurement Tools

#### Overview

SAP HANA Hardware and Cloud Measurement Tools help customers and partners to optimize their hardware or cloud systems before deploying SAP HANA or applying for SAP HANA certification.

***For more details, see SAP Note 2493172 - SAP HANA Hardware and Cloud Measurement Tools and the [SAP HCMT Guide](https://help.sap.com/doc/af47cce52aaa4ed4992d42d3cf319d62/2.0/en-US/How_to_Use_the_SAP_HANA_Hardware_and_Cloud_Measurement_Tools_en.pdf){.external}***

#### Pre-requisites

- You have a valid S-user to download the tool.
- You have the latest version of HCMT, see SAP Note 2493172
- You have at least 20 GB of free storage space in the location where SAP HANA data can be placed during the test.
- Make sure that the latest version of the SAPCAR archiving tool is available on the installation system. For more information about SAPCAR, see SAP Note 2452588
- Port TCP/50000 opened

#### Test Procedure

<ol start="1">
    <li>Download the SAP HANA Hardware and Cloud Measurement Tool from the <a class="external-link" href="https://launchpad.support.sap.com/#/softwarecenter" rel="nofollow">SAP Support Portal</a></li>
</ol>

***The tool should be displayed as: HANA HW CLOUD OPTIM TOOLS 2.0***

<ol start="2">
    <li>Select the 'LINUX ON X86_64 64BIT' version.</li>
    <li>Save the download archive in the same directory into which the tool should be installed.</li>
    <li>Unpack the archive using SAPCAR.</li>
</ol>
```bash
sapcar -xvf HCMT_058_0-80003261.SAR
```

<ol start="5">
    <li>Install the tool on the system you plan to analyze:</li>
</ol>
```bash
hcmtsetup
```

<ol start="6">
    <li>After setup, the following folder structure is available:</li>
</ol>

|Folder Name|Content|
|---|---|
|config|Execution plans|
|lib|Dependent binaries|
|hcmtplugins|Test plug-ins|

<ol start="7">
    <li>Start the hcmt listening server:</li>
</ol>

```bash
hcmt -v -S
```

<ol start="8">
    <li>Start the measurement for standalone HANA by using:</li>
</ol>

```bash
hcmt -v -p config/executionplan.json
```

By default, you will be able to chose between two execution plans:

- executionplan.json – Default execution plan that helps you check if the KPIs for SAP HANA certification are met.
- full_executionplan.json – Performs the same tests as the default execution plan, but has a higher test repeat rate and thus a longer test duration. This test is used for SAP HANA certification.

> [!primary]
> NB: This test may take up to 12 hours.
>

#### Test Interpretation

After running the hcmt tests, the program will output a 'hcmtresult' zip archive.

The archive contains all the measurement results and will be then interpreted on the SAP HANA Hardware and Cloud Measurement Analysis website.

To do so:

<ol start="1">
    <li>Login in <a href=https://hotui-supportportal.dispatcher.hana.ondemand.com/index.html">SAP portal</a></li>
</ol>

<ol start="2">
    <li>Click on 'Manage Systems':</li>
</ol>

![SAP portal manage systems](images/2-sap-portal-manage-systems.png){.thumbnail}

<ol start="3">
    <li>Add a system:</li>
</ol>

![SAP portal add system](images/3-sap-portal-add-system.png){.thumbnail}

<ol start="4">
    <li>Upload the measurement results (zip archive):</li>
</ol>

![SAP portal upload measurement](images/4-sap-portal-upload-measurement.png){.thumbnail}

<ol start="5">
    <li>Interpret the results.</li>
</ol>

## Go further

General guideline documentation on [how to install SAP HANA on a a OVHcloud SLES system](../sap-installation-sap-hana-sles).
