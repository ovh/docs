---
title: Update a SAP HANA solution
slug: update-sap-hana-sles
excerpt: This guide provides you with general guidelines on how to update a SAP HANA server and client.
section: Advanced usage
order: 2
updated: 2022-02-04
---

**Last updated 4th February 2022**

## Objective

OVHcloud provides SAP-certified hardware on which to build a SAP solution.

**This guide provides you with general guidelines on how to update a SAP HANA server and/or client hosted on OVHcloud hardware.**

> [!warning]
>
> While the material contained in this guide has been formulated with all due care, OVHcloud does not warrant or represent that the material constitutes an official SAP guide.
>
> All technical integration/installation/administration tasks of SAP solutions shall be validated by a SAP professional.

SAP provides multiple revision types to keep the applications up to date:

- SAP HANA Revisions: The term "Revision" refers to a maintenance package of a SAP HANA core component (SAP HANA Database, Studio, Client)
- Support Package: All other parts of the SAP HANA platform
- Support Package Stacks (SPS): New SAP HANA plateform capabilities introduced once a year. It may include both revisions and support packages

*** For more details, see SAP Note 2378962 ***

Please check if a revision is available at regular intervals to keep your system up to date.

You may use the [SAP Maintenance Planner](https://support.sap.com/en/alm/solution-manager/processes-72/maintenance-planner.html){.external} to help you plan all changes in your SAP ecosystem and the [SAP Product Availability Matrix](https://userapps.support.sap.com/sap/support/pam){.external}.

## Requirements

Please make sure:

- you have read all the update instructions for the individual components.
- you have all the packages/libraries/sources required to install the revisions. (You can find currently available support packages on SAP Service Marketplace at [http://service.sap.com/sp-stacksInformation](http://service.sap.com/sp-stacksInformation){.external})
n
- the patch/revisions match your SAP systems version.
- that the latest version of the SAPCAR archiving tool is available on the installation system. For more information about SAPCAR, see SAP Note 2452588
- you have made the necessary preparations to perform backups for the SAP HANA database and the other components.
- You possess the username/password for the following users:
    - <sid>adm user
    - sapadm user
    - S-user for the SAP Service Marketplace (SMP)

## Instructions

### Update procedure

In this guide, we will perform an update with the SAP HANA DataBase LifeCycle Manager (HDBLCM).

> [!alert]
> Backup all systems/databases before proceeding with the update.

<ol start="1">
    <li>Upload the revision SAR archive to the SAP HANA server.</li>
    <li>Extract the archive using SAPCAR.</li>
</ol>

```bash
sapcar -xvf HCMT_058_0-80003261.SAR
```

<ol start="3">
  <li>Login as the '<sid>adm' user. (ex: hdbadm)</li>
</ol>

```bash
su - hdbadm
```

<ol start="4">
  <li>Stop the database server:</li>
</ol>

```bash
HDB stop
    Stopping instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function Stop 400
    Stop
    OK
    Waiting for stopped instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function WaitforStopped 600 2
    WaitforStopped
    OK
    hdbdaemon is stopped.
```

<ol start="5">
  <li>Launch the HDBLCM in the SPS folder:</li>
</ol>

```bash
/hana/shared/sps/SAP_HANA_DATABASE/hdblcm
    SAP HANA Lifecycle Management - SAP HANA Database 2.00.058.00.1634122452
    ************************************************************************
    Scanning software locations...
    Detected components:
    SAP HANA Database (2.00.058.00.1634122452) in /hana/shared/sps/SAP_HANA_DATABASE/server
    SAP HANA Database Client (2.10.15.1634075415) in /hana/shared/sps/SAP_HANA_CLIENT/client
    Do you want to specify additional components location? (y/n) [n]: n
```

<ol start="6">
  <li>Select the HDB (update) action:</li>
</ol>

```bash
Index | Action             | Description
------------------------------------------------------------------------------------
1     | HDB (update)       | Update SAP HANA Database version 2.00.057.00.1629894416
      |                    | xx-hana-ovh (Database Worker (worker))
2     | install            | Install new system
3     | extract_components | Extract components
4     | Exit (do nothing)  |
```

<ol start="7">
  <li>Choose the components to be updated:</li>
</ol>

```bash
Index | Components | Description
-------------------------------------------------------------------------------------------------------------------
1     | all        | All components
2     | server     | Update SAP HANA Database from version 2.00.057.00.1629894416 to version 2.00.058.00.1634122452
3     | client     | Update SAP HANA Database Client from version 2.9.28.1627673934 to version 2.10.15.1634075415
```

*** NB: All components need to be patched: client, hdb, hostagent and all other components (SAP Hana APL, Studio, etc..) ***

<ol start="8">
  <li>Select the required options:</li>
</ol>

```bash
Enter comma-separated list of the selected indices [1]: 1
Enter System Database User Name [SYSTEM]:
Enter System Database User (SYSTEM) Password:
Apply System Size Dependent Resource Limits? (SAP Note 3014176) [y]: n
```

<ol start="9">
  <li>The wizard will provide a summary that you need to confirm to continue:</li>
</ol>

```bash
Summary before execution:
=========================
SAP HANA Database
    Update Parameters
        SAP HANA System ID: HDB
        Remote Execution: ssh
        Configure Python version: python2
        Update Execution Mode: standard
        SAP HANA Database secure store: ssfs
        System Database User Name: SYSTEM
        Apply System Size Dependent Resource Limits? (SAP Note 3014176): No
    Software Components
        SAP HANA Database
            Update from version 2.00.057.00.1629894416 to 2.00.058.00.1634122452
            Location: /hana/shared/sps/SAP_HANA_DATABASE/server
        SAP HANA Database Client
            Update from version 2.9.28.1627673934 to 2.10.15.1634075415
            Location: /hana/shared/sps/SAP_HANA_CLIENT/client
    Log File Locations
        Log directory: /var/tmp/hdb_HDB_hdblcm_update_2021-10-20_17.03.02
        Trace location: /var/tmp/hdblcm_2021-10-20_17.03.02_3615.trc
Do you want to continue? (y/n): y
```

<ol start="10">
  <li>Once the HDBLCM has finished the update process, you may start the database:</li>
</ol>

```bash
SAP HANA Database components updated
Log file written to '/var/tmp/hdb_HDB_hdblcm_update_2021-10-20_17.03.02/hdblcm.log' on host 'xx-hana-ovh'.
# HDB start
Starting instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function StartWait 2700 2
Start
OK
StartWait
OK
```

### Post-update

<ol start="1">
  <li>Make sure the database was correctly updated with the needed version either in the HANA Cockpit/Studio or directly on the server:</li>
</ol>

```bash
/usr/sap/HDB/HDB00> HDB version
HDB version info:
version:             2.00.058.00.1634122452
branch:              fa/hana2sp05
machine config:      linuxx86_64
```

<ol start="2">
  <li>Check that SAP can connect to the HANA database.</li>
  <li>Redeploy the calculation views. For more information, see SAP Note 1962472 - Redeployment of calculation views recommended when upgrading to a new SPS.</li>
</ol>

# Go further

General guideline documentation on [how to backup SAP HANA on a a OVHcloud SLES system](../backup-sap-hana).
