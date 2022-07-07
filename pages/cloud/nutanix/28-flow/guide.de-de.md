---
title: Nutanix Flow konfigurieren (EN)
slug: nutanix-flow
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/nutanix-flow/'
excerpt: Find out how to configure and use Nutanix Flow
section: Netzwerk und Sicherheit
order: 09
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Networking and security
---

**Last updated 08/04/2022**

## Objective

Nutanix Flow is available on all **Hosted Private Cloud Powered by Nutanix** offers. This option secures the network in one or more clusters managed by **Prism Central**

**Learn how to use Nutanix Flow for network security within a Nutanix cluster.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Instructions

Log in to **Prism Central**.

To connect to a Nutanix cluster, if required, see the [Go further](#gofurther) section in this guide. 

### Enabling **Nutanix Flow**

Click the gear in the top right to change the settings.

![Activate Flow 01](images/activatemicrosegmentation01.png){.thumbnail}

Click `Microsegmentation`{.action} from the scroll bar on the left.

![Activate Flow 02](images/activatemicrosegmentation02.png){.thumbnail}

Select the **Enable Microsegmentation** checkbox and click `Save`{.action}.

![Activate Flow 03](images/activatemicrosegmentation03.png){.thumbnail}

Microsegmentation is enabled. You can always disable it.

![Activate Flow 04](images/activatemicrosegmentation04.png){.thumbnail}

### Category configuration <a name="gocategoriesemanage"></a>

A category is an object that can contain one or more values.

When installing a cluster, some categories already exist and can be modified, other categories can be added.

Entities, such as virtual machines, subnets, or images, can be among the categories used for a tool like **Flow**, for example.

#### Creating a category

From the main menu, click `Categories`{.action} on the `Administration` submenu.

![Create Category 01](images/configurecategories01.png){.thumbnail}

Click `New Category`{.action}.

![Create Category 02](images/configurecategories02.png){.thumbnail}

Type the name of the category in **Name** and Click `New value`{.action}.

![Create Category 03](images/configurecategories03.png){.thumbnail}

Type a name in **Value** and click the blue validation button on the right. 

![Create Category 04](images/configurecategories04.png){.thumbnail}

Click `Save`{.action}.

![Create Category 05](images/configurecategories05.png){.thumbnail}

The new category appears in the category list.

![Create Category 06](images/configurecategories06.png){.thumbnail}

#### Modifying a Category

Select the `Special-Computers category`{.action}

![Create Isolation Rule 02](images/modifycategory02.png){.thumbnail}

Click `Update`{.action} on the `Actions menu`{.action}.

![Create Isolation Rule 03](images/modifycategory03.png){.thumbnail}

Click `New value`{.action}.

![Create Isolation Rule 04](images/modifycategory04.png){.thumbnail}

Enter a value in the **Value** column and click the validation icon.

![Create Isolation Rule 05](images/modifycategory05.png){.thumbnail}

Click `New value`{.action}.

![Create Isolation Rule 06](images/modifycategory06.png){.thumbnail}

Enter another value in the **Value** column and click the validation icon.

![Create Isolation Rule 07](images/modifycategory07.png){.thumbnail}

Click `Save`{.action} to commit the category change.

![Create Isolation Rule 08](images/modifycategory08.png){.thumbnail}

The category is visible in the category dashboard with these two new values.

![Create Isolation Rule 09](images/modifycategory09.png){.thumbnail}

#### Assigning a Category to a Virtual Machine

In the main menu, click `VMs`{.action} under `Compute & Storage.`

![Add VM to Category 01](images/addvmtocategory01.png){.thumbnail}

Select the virtual machine by ticking on the left.

![Add VM to Category 02](images/addvmtocategory02.png){.thumbnail}

Click `Actions`{.action}, then click `Manage Categories`{.action}. 

![Add VM to Category 03](images/addvmtocategory03.png){.thumbnail}

Type `categoryName:value` and click the `+`{.action} sign.

![Add VM to Category 04](images/addvmtocategory04.png){.thumbnail}

Click `Save`{.action} to save the virtual machine to a category.

![Add VM to Category 05](images/addvmtocategory05.png){.thumbnail} 

#### Assigning a category to multiple VMs

Select three virtual machines using the `check`{.action} boxes on the left.

![Add category to multi VMs 01](images/multivmcategorychange01.png){.thumbnail}

Click the `Actions`{.action} menu and select `Manage Categories`{.action}.

![Add category to multi VMs 02](images/multivmcategorychange02.png){.thumbnail}

Type `categoryName:value` and click `+`{.action}.

![Add category to multi VMs 03](images/multivmcategorychange03.png){.thumbnail}

Click `Save`{.action}.

![Add category to multi VMs 04](images/multivmcategorychange04.png){.thumbnail}

#### Assigning a Category to Subnets

From the main menu, click `Subnets`{.action} under `Network & Security`.

![Add Category to subnet 01](images/addcategorytosubnet01.png){.thumbnail}

Select the subnets by checking their left. 

![Add Category to subnet 02](images/addcategorytosubnet02.png){.thumbnail}

Click the `Actions`{.action} menu and select `Manage Categories`{.action}.

![Add Category to subnet 03](images/addcategorytosubnet03.png){.thumbnail}

Type `categoryName:value` and click `+`{.action}.

![Add Category to subnet 04](images/addcategorytosubnet04.png){.thumbnail}

Click `Save`{.action}.

![Add Category to subnet 05](images/addcategorytosubnet05.png){.thumbnail}

### Network quarantine management

Network quarantine allows you to isolate a virtual machine from the entire network, or allow it restricted access to certain repair tools that are on the network.

#### VM quarantine

In the main menu, click `VMs`{.action} under `Compute & Storage.`

![Add VM to Quarantine 01](images/addvmtoquarantine01.png){.thumbnail}

Select the virtual machine by ticking on the left. 

![Add VM to Quarantine 02](images/addvmtoquarantine02.png){.thumbnail}

Click `Actions`{.action} and choose `Quarantine VMs`{.action} from the menu.

![Add VM to Quarantine 03](images/addvmtoquarantine03.png){.thumbnail}

Select `Forensic`{.action} in `Quarantine Method` and click `Quarantine`{.action}.

![Add VM to Quarantine 04](images/addvmtoquarantine04.png){.thumbnail}

The virtual machine is now in quarantine.

#### Customising the network quarantine.

There are currently no blockages affecting the quarantined virtual machine. Follow these instructions to configure the quarantine.

From the main menu, click `Security Policies`{.action} in the `Network & Security` submenu.

![Configure Quarantine 01](images/configurequarantinerule01.png){.thumbnail}

Click the number next to `Quarantined` to view the quarantined virtual machines.

![Configure Quarantine 02](images/configurequarantinerule02.png){.thumbnail}

The list of quarantined VMs appears in the **Name** column. Click `Close`{.action} to return to the previous menu.

![Configure Quarantine 03](images/configurequarantinerule03.png){.thumbnail}

Click `Quarantine`{.action} below the **Name** column to edit the rule.

![Configure Quarantine 04](images/configurequarantinerule04.png){.thumbnail}

The rule status is in `monitoring` mode, as shown in the top left-hand corner. 

Traffic is not blocked but monitored. Connections between the quarantined VMs and the rest of the network are represented by orange lines attached to rectangles representing the IP address of the source or destination.

Click `Enforce`{.action} in the top right-hand corner to switch from **Monitoring** mode to **Enforcing** mode with traffic blocking.

![Configure Quarantine 05](images/configurequarantinerule05.png){.thumbnail}

Type `ENFORCE`{.action} and click `Confirm`{.action}.

![Configure Quarantine 06](images/configurequarantinerule06.png){.thumbnail}

The rule status is now on `Enforced`.

Traffic is blocked. We see attempts to access VMs in quarantines via red dotted lines to blocks containing the IP address of the VM.

Click `Update`{.action} in the top right-hand corner to edit the rule to allow certain network streams.

![Configure Quarantine 07](images/configurequarantinerule07.png){.thumbnail}

Click `Next`{.action}.

![Configure Quarantine 08](images/configurequarantinerule08.png){.thumbnail}

Move your mouse over an incoming connection attempt and click `Allow Traffic`{.action}

![Configure Quarantine 09](images/configurequarantinerule09.png){.thumbnail}

Select the checkbox to the left of the **Source** to select the incoming discovered traffic, then click `Allow 1 Discovered Traffic`{.action} to allow only the discovered traffic, such as ICMP below.

![Configure Quarantine 10](images/configurequarantinerule10.png){.thumbnail}

Move your mouse over an outgoing connection attempt and click `Allow Traffic`{.action}.

![Configure Quarantine 11](images/configurequarantinerule11.png){.thumbnail}

Select the checkbox to the left of the **Source** to select the outbound discovered traffic, then click `Allow 1 Discovered Traffic`{.action} to allow only the discovered traffic.

![Configure Quarantine 12](images/configurequarantinerule12.png){.thumbnail}

The authorised traffic is now visible via grey lines, while the blocked traffic is in red.

To create a rule manually without going through network discovery, left-click `Add Source`{.action} to allow an incoming connection to the quarantine.

![Configure Quarantine 13](images/configurequarantinerule13.png){.thumbnail}

Enter the category name and its value in `Add source by: Category`, then click `Add`{.action}.

![Configure Quarantine 14](images/configurequarantinerule14.png){.thumbnail}

The source appears in `Configured`.

Click `+`{.action} to the left of **Quarantine: Forensics**.

![Configure Quarantine 15](images/configurequarantinerule15.png){.thumbnail}

Allow all traffic and click `Save`{.action}.

![Configure Quarantine 16](images/configurequarantinerule16.png){.thumbnail}

Right-click `Add Destination`{.action} to allow an outgoing rule from quarantine.

![Configure Quarantine 17](images/configurequarantinerule17.png){.thumbnail}

Enter the category name and its value in `Add source by: Category`, and then click `Add`{.action}.

![Configure Quarantine 18](images/configurequarantinerule18.png){.thumbnail}

Click `+`{.action} to the right of **Quarantine: Forensics**.

![Configure Quarantine 19](images/configurequarantinerule19.png){.thumbnail}

Allow all traffic and click `Save`{.action}.

![Configure Quarantine 20](images/configurequarantinerule20.png){.thumbnail}

Click `Next`{.action}.

![Configure Quarantine 21](images/configurequarantinerule21.png){.thumbnail}

Click `Save and Enforce`{.action} to apply the quarantine rule changes.

![Configure Quarantine 22](images/configurequarantinerule22.png){.thumbnail}

Click `Quarantine`{.action} to view quarantine rule details.

![Configure Quarantine 23](images/configurequarantinerule23.png){.thumbnail}

The rule status is on `Enforced`, the **Forensic** mode has been customised.

A virtual machine in **Strict** mode will be completely isolated from the network, while in **Forensic** mode it will have access to the areas defined in the quarantine rule.

![Configure Quarantine 24](images/configurequarantinerule24.png){.thumbnail}

### Creating an isolation rule

An isolation rule allows blocking of network communications between two categories (virtual machines or subnets).

For more information about managing categories, see the [Setting up categories](#gocategoriesemanage) section in this guide. 

From the main menu, click `Securities Policies`{.action} in the `Network & Security` submenu.

![Create Isolation Rule 03](images/createisolationrule03.png){.thumbnail}

Click `Create Security Policy`{.action}.

![Create Isolation Rule 04](images/createisolationrule04.png){.thumbnail}

Select `Isolation Policy`{.action} and click `Create`{.action}.

![Create Isolation Rule 05](images/createisolationrule05.png){.thumbnail}

Type the rule name in `Name`{.action} and then add a comment in `Purpose`{.action}, choose a category in `Isolate this category`{.action}, followed by another category in `From this category`{.action}.

Select `Enforce` in **Select a Policy mode**, then click `Save and Enforce`{.action}. 

![Create Isolation Rule 06](images/createisolationrule06.png){.thumbnail}

The rule is active in the list of security rules.

Click `The rule`{.action} name below the **Name** column to view details.

![Create Isolation Rule 07](images/createisolationrule07.png){.thumbnail}

The status of the rule indicates `Enforced`, and you can see that no connection attempt between the two zones is detected, as this message indicates: **No Traffic between them has been discovered**.

![Create Isolation Rule 08](images/createisolationrule08.png){.thumbnail}

If a network connection attempt is detected between these two zones, the message changes to **Traffic between them has been discovered**.

![Create Isolation Rule 09](images/createisolationrule09.png){.thumbnail}

### Setting up an application rule.

An application rule limits access to certain ports, protocols, or services for members of a category from another category.

This rule can only be used with a category named **Applications** that can be edited but not deleted.

For more information about managing categories, see the [Setting up categories](#gocategoriesemanage) section in this guide.

From the main menu, click `Security Policies`{.action} in the `Network & Security` submenu.

![Create Application Rule 01](images/createapplicationrule01.png){.thumbnail}

Click `Create Security Policy`{.action}.

![Create Application Rule 02](images/createapplicationrule02.png){.thumbnail}

Select `Secure Application (App Policy)`{.action} and click `Create`{.action}.

![Create Application Rule 03](images/createapplicationrule03.png){.thumbnail}

Enter the **Name** fields for the rule name, **Purpose** for comment, **Secure this App** by choosing an existing application category, and click `Next`{.action}.

![Create Application Rule 04](images/createapplicationrule04.png){.thumbnail}

Click `Add Source`{.action} on the left.

![Create Application Rule 05](images/createapplicationrule05.png){.thumbnail}

Choose the `category` for the VLAN and click `Add`{.action}.

![Create Application Rule 06](images/createapplicationrule06.png){.thumbnail}

Click `+`{.action} to connect the application to the source.

![Create Application Rule 07](images/createapplicationrule07.png){.thumbnail}

Select `Select a Service`{.action}, choose the category in **Protocol/Service**, search for the service name in **Port/Service Details**, and click `Save`{.action}.

![Create Application Rule 08](images/createapplicationrule08.png){.thumbnail}

Click `Next`{.action}.

![Create Application Rule 09](images/createapplicationrule09.png){.thumbnail}

Select `Enforce`{.action} and click `Save and Enforce`{.action} to enable this rule.

![Create Application Rule 10](images/createapplicationrule10.png){.thumbnail}

The rule you created is in the list of rules.

![Create Application Rule 11](images/createapplicationrule11.png){.thumbnail}

## Go further <a name="gofurther"></a>

[Hyperkonvergenz Nutanix (EN)](https://docs.ovh.com/de/nutanix/nutanix-hci/)

[Presentation of Nutanix FLOW](https://portal.nutanix.com/page/documents/solutions/details?targetId=TN-2094-Flow:TN-2094-Flow)

[Nutanix FLOW security rules](https://portal.nutanix.com/page/documents/details?)

[Categories in Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-vpc_2022_1:ssp-ssp-categories-manage-pc-c.html)

Join our community of users on <https://community.ovh.com/en/>.
