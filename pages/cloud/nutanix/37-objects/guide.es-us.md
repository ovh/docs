---
title: Configuración de Nutanix Objects (EN)
slug: objects
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/objects/'
excerpt: "Learn how to enable Nutanix Objects in your cluster"
section: Uso avanzado
order: 07
updated: 2023-03-02
---

**Last updated 2nd March 2023**

## Objective

Nutanix Objects implements an **Object Storage** S3-compatible solution on your Nutanix cluster, using Prism Central. You can read the description on [this link](https://www.nutanix.com/content/dam/nutanix/resources/datasheets/ds-objects.pdf).

**This guide will show you how to set up Nutanix Objects on your cluster.**

> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. You may need to adapt the instructions according to your situation.
>
> If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/es/directory/) and/or discuss the issue with our community. You can find more information in the [Go further](#gofurther) section of this tutorial.
>

## Requirements

- A Nutanix cluster in your OVHcloud account.
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- You must be connected to the cluster via Prism Central.

## Instructions

From Prism Central, click your cluster in the **Cluster Quick Access** widget to connect to Prism Element.

![01 Check ISCSI ADDRESS 01](images/01-check-iscsi-address01.png){.thumbnail}

Click your cluster's name in the top left-hand corner next to the **X**.

![01 Check ISCSI ADDRESS 02](images/01-check-iscsi-address02.png){.thumbnail}

Scroll down the window, enter an unused private IP address from your management network in the **ISCSI Data Services IP** section, then click `Save`{.action}.

![01 Check ISCSI ADDRESS 03](images/01-check-iscsi-address03.png){.thumbnail}

### Configuring VLANs in Prism Central

You need to create two additional VLANs in your cluster configuration and have these VLANs access Prism Central and Prism Element to configure **Nutanix Objects**. These two VLANs must be able to distribute IP addresses. IPAM will be enabled on both VLANs.

From Prism Central, go to the main menu and click on `Subnets`{.action} in the **Network & Security** category.

![02 Create Storage VLAN 01](images/02-create-storage-vlan01.png){.thumbnail}

Click `Create Subnet`{.action}.

![02 Create Storage VLAN 02](images/02-create-storage-vlan02.png){.thumbnail}

Check the `IP Address Management`{.action} box and fill in this information :

- **Name** : Type `object-storage`.
- **Type** : Select `VLAN`{.action}.
- **VLAN ID** : Type your VLAN number as `100`.
- **Virtual Switch** : Keep `vs0`{.action}.
- **Network IP Address / Prefix** : Write your subnet `192.168.100.0/24`.
- **Gateway IP Address** : Enter the address of your gateway `192.168.100.254`.

Then click `Add IP Pool`{.action}.

![02 Create Storage VLAN 03](images/02-create-storage-vlan03.png){.thumbnail}

Enter this information :

- **Start Address** : Start address of your scope as `192.168.100.10`.
- **End Address** : End address of your scope as `192.168.100.200`.

Then click the blue validation button on the right.

![02 Create Storage VLAN 04](images/02-create-storage-vlan04.png){.thumbnail}

Scroll down and enter the OVHcloud DNS address `213.186.33.99` in **Domain Name Servers** and click `Create`{.action}.

![02 Create Storage VLAN 05](images/02-create-storage-vlan05.png){.thumbnail}

Your first VLAN is created. We will create the second VLAN, click on `Create Subnet`{.action}.

![03 Create Public VLAN 01](images/03-create-public-vlan01.png){.thumbnail}

Check the `IP Address Management`{.action} box and fill in this information :

- **Name** : Type `public-storage`.
- **Type** : Select `VLAN`{.action}.
- **VLAN ID** : Type your VLAN number as `101`.
- **Virtual Switch** : Keep `vs0`{.action}.
- **Network IP Address / Prefix** : Write your subnet `192.168.101.0/24`.
- **Gateway IP Address** : Enter your gateway address `192.168.101.254`.

Then click `Add IP Pool`{.action}.

![03 Create Public VLAN 02](images/03-create-public-vlan02.png){.thumbnail}

Enter this information :

- **Start Address** : Start address of your scope as `192.168.101.10`.
- **End Address** : End address of your scope as `192.168.101.200`.

Next, click the blue validation button on the right.

![03 Create Public VLAN 03](images/03-create-public-vlan03.png){.thumbnail}

Scroll down and enter the OVHcloud DNS address `213.186.33.99` in **Domain Name Servers** and click `Create`{.action}.

![03 Create Public VLAN 04](images/03-create-public-vlan04.png){.thumbnail}

Your two VLANs are created, make sure they can connect to Prism Element and Prism Central through your gateway. You can use this guide to replace the default gateway and use your VLANs: [OVHgateway replacement](https://docs.ovh.com/us/es/nutanix/software-gateway-replacement/).

![03 Create Public VLAN 05](images/03-create-public-vlan05.png){.thumbnail}

### Enabling Nutanix objects in Prism Central

Go to the main menu, scroll to the **Services** section and click `Objects`{.action}.

![04 Activate Object 01](images/04-activate-objects01.png){.thumbnail}

Click `Enable`{.action}.

![04 Activate Object 02](images/04-activate-objects02.png){.thumbnail}

Click `Enable`{.action} to validate the activation of **Nutanix Objects**.

![04 Activate Object 03](images/04-activate-objects03.png){.thumbnail}

The service checks your system compatibility.

![04 Activate Object 04](images/04-activate-objects04.png){.thumbnail}

Click `Next`{.action}.

![04 Activate Object 05](images/04-activate-objects05.png){.thumbnail}

Click `Create Object Store`{.action}.

![04 Activate Object 06](images/04-activate-objects06.png){.thumbnail}

Fill in this information :

- **Object Store Name** : the name of your object storage, such as `nutanix-objects`.
- **Domain** : The domain name that will be used to access your storage, such as `mydomain.com`.
- **Cluster** : The cluster that must have Nutanix Objects enabled.
- **Worker Nodes** : The number of nodes that your Object storage will use, select the number `1`.

Then click `Next`{.action}.

![04 Activate Object 07](images/04-activate-objects07.png){.thumbnail}

Select the VLAN `object-storage`{.action} in **Storage Network** and enter these two addresses `192.168.100.1,192.168.100.2`{.action} in **Object Store Storage Network static IPs (2 IPs required)**. These addresses must not be within the scope of the VLAN DHCP.

Then click `Next`{.action}.

![04 Activate Object 08](images/04-activate-objects08.png){.thumbnail}

Select the `public-storage`{.action} VLAN in **Storage Network** and enter this range of four addresses `192.168.101.1-192.168.100.4`{.action} in **Public Network static IPs**. These addresses should not be within the scope of the VLAN DHCP.

Next, click `Save & Continue`{.action}.

![04 Activate Object 09](images/04-activate-objects09.png){.thumbnail}

A connection check is performed between the VLANs, Prism Element and Prism Central.

![04 Activate Object 10](images/04-activate-objects10.png){.thumbnail}

When validation is complete, click `Create Object Store`{.action}.

![04 Activate Object 11](images/04-activate-objects11.png){.thumbnail}

Wait twenty minutes for your Object Storage to be active and accessible through the address **192.168.101.1** that is located in your **public-storage** VLAN.

![04 Activate Object 12](images/04-activate-objects12.png){.thumbnail}

### Creating an Access Key to your storage

To be able to use an Object storage, it is necessary to create associated **Access Keys**.

Go to the `Access Keys`{.action} tab.

![05 Create Access Keys 01](images/05-create-access-key01.png){.thumbnail}

Click `+ Add People`{.action}.

![05 Create Access Keys 02](images/05-create-access-key02.png){.thumbnail}

Check `Add people not in a directory service`{.action}, type `user@mydomain.com` in **Email Address** and click `Next`{.action}.

![05 Create Access Keys 03](images/05-create-access-key03.png){.thumbnail}

Click `Generate Keys`{.action}.

![05 Create Access Keys 04](images/05-create-access-key04.png){.thumbnail}

Click `Download Keys`{.action}.

![05 Create Access Keys 05](images/05-create-access-key05.png){.thumbnail}

> [!warning]
>Your access credentials are only displayed once in your web browser. Please note down this information (Access Key and secret Key) before closing this window.
>

![05 Create Access Keys 06](images/05-create-access-key06.png){.thumbnail}

Your user is created with its login details. You can regenerate Access Keys and create a new login.

![05 Create Access Keys 07](images/05-create-access-key07.png){.thumbnail}

### Validation and functional testing

To confirm that our Object storage is working properly, we will use the AWS awscli command-line tool and create a bucket. You can use [this guide](https://docs.ovh.com/us/es/storage/object-storage/s3/getting-started-with-object-storage/) for more information.

The awscli tool is available on Windows, Linux and macOS.

Use the following command for help:

```bash
aws s3 help
```

After installing awscli, we will create two configuration files on a computer that has access to the public-storage VLAN and use the aws command to create a bucket.

Create a `.aws` subfolder in your `%USERPROFILE%` folder on Windows, or `$HOME` on Linux and macOS.

Add the `credentials` file and fill it in with this data:

```bash
[default]
aws_access_key_id=your-access-key
aws_secret_access_key=secret-access key
```

Then add a second file named `config` with this information :

```bash
[default]
region=region = us-east-1
```

Then use this command to create a bucket.

```bash
aws --endpoint-url https://192.168.101.1 s3 mb s3://my-bucket --region=us-east-1 --no-verify-ssl
```

The bucket is created with a warning message about the SSL certificate. In a production environment, it is necessary to use an SSL certificate.

Now that the bucket is created we will use a browser to connect to the web interface provided by Nutanix in order to check the existence of our bucket.

Using a web browser, connect to this URL `https://192.168.101.1/objectsbrowser` which corresponds to your **Nutanix Objects** access point and enter your credentials (access_key and secret_key). Then click on `Login`{.action}.

![06 Connect to WEB interfaces 01](images/06-connect-to-web-interfaces01.png){.thumbnail}

You can see the bucket you created in the command line. You can create and delete buckets or objects in your web interface.

![06 Connect to WEB interfaces 02](images/06-connect-to-web-interfaces02.png){.thumbnail}

## Go further <a name="gofurther"></a>

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.

[Nutanix Objects documentation](https://portal.nutanix.com/page/documents/details?targetId=Objects-v3_6:top-intro-c.html).