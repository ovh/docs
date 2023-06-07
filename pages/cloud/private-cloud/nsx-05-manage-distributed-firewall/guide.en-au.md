---
title: Distributed Firewall Management in NSX
excerpt: Learn how to manage the distributed firewall by creating a rule that blocks traffic between a virtual machine and all virtual machines in another segment
updated: 2023-02-27
---

**Last updated 27th February 2023**

## Objective

The distributed firewall feature in NSX allows filtering with all elements in your VMware cluster that are on Overlay or VLAN segments. It should be used normally on east-west connections (ovh-T1-gw), but it also works with elements of the VMware cluster that are connected on the north-south gateway (ovh-T0-gw). Filtering applies from the source (VM, segment, network, etc.).

To simplify the administration of NSX, it is possible to place tags on your elements (segments, virtual machines, roles, etc..) and create groups that contain the objects associated with the tags or IP address ranges (this solution should not be preferred).

**Learn how to manage the distributed firewall by creating a rule that blocks traffic between a virtual machine and all virtual machines in another segment.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-au/directory/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-au/enterprise/products/hosted-private-cloud/) to receive login credentials.
- A user account with access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).
- Having **NSX** deployed with two segments configured in your NSX configuration, you can use our guide on [segment management in NSX](/pages/cloud/private-cloud/nsx-02-segment-management) for more information.

## Instructions

We will isolate communication between a virtual machine and all virtual machines in a segment bi-directionally by performing these operations :

- Create two tags, one on a virtual machine and one on a segment.
- Create two associated groups, one containing the first tag and the other the second.
- Create a policy in the distributed firewall that will contain two rules:
    - A rule that will forbid traffic from the first group to the second.
    - Another rule that will forbid traffic from the second group to the first.

### Creating tags

In the NSX interface, go to the `Networking`{.action} tab and click `Segments`{.action} to the left in **Connectivity**.

Then click on the `three vertical dots`{.action} to the left of the segment you want to tag and choose `Edit`{.action} from the menu.

![01 Create tag on segment 01](images/01-create-tag-on-segment01.png){.thumbnail}

To the right of **Tags**, enter `ovsegment`{.action} instead of tag and click `Add Item(s) ovsegment`{.action} below the input box.

![01 Create tag on segment 02](images/01-create-tag-on-segment02.png){.thumbnail}

Enter `ov1`{.action} instead of **Scope** and click `Add Item(s) ov1`{.action} below the input box.

![01 Create tag on segment 02](images/01-create-tag-on-segment02.png){.thumbnail}

Click the `+`{.action} button to the left of your tag.

![01 Create tag on segment 03](images/01-create-tag-on-segment03.png){.thumbnail}

The created tag is displayed in the bottom right of **Tags**, you can create more tags depending on your needs.

Click `SAVE`{.action}.

![01 Create tag on segment 04](images/01-create-tag-on-segment04.png){.thumbnail}

Click `CLOSE EDITING`{.action} to complete the markup for your segment.

![01 Create tag on segment 05](images/01-create-tag-on-segment04.png){.thumbnail}

Go to the `Inventory`{.action} tab and click `Virtual Machines`{.action} on the left in the inventory to view the list of virtual machines.

Then click on the `three vertical dots`{.action} to the left of the virtual machine that you want to tag and choose `Edit`{.action} from the menu.

![02 Create tag on vm 01](images/02-create-tag-on-vm01.png){.thumbnail}

Enter `vm`{.action} instead of **Tag** and click `Add Item(s) vm`{.action} below the input box.

![02 Create tag on vm 02](images/02-create-tag-on-vm02.png){.thumbnail}

Enter `ov2`{.action} instead of **Scope** and click `Add Item(s) ov2`{.action} below the input box.

![02 Create tag on vm 03](images/02-create-tag-on-vm03.png){.thumbnail}

Click the `+`{.action} button to the left of your tag.

![02 Create tag on vm 04](images/02-create-tag-on-vm04.png){.thumbnail}

The tag is created, click `SAVE`{.action} to save your changes.

![02 Create tag on vm 05](images/02-create-tag-on-vm05.png){.thumbnail}

Stay in the inventory and click `Tags`{.action} on the left to see the list of tags.

![03 Show tags 01](images/03-show-tags01.png){.thumbnail}

### Add groups that contain tags

In the inventory, go to `Groups`{.action} on the left and click `ADD GROUP`{.action} to create a group.

![04 Create Group With tag on segment 01](images/04-create-group-with-tag-on-segment01.png){.thumbnail}

Type `g-segment01`{.action} below the **Name** column and click `Set`{.action} under the **Compute Members** column.

![04 Create Group With tag on segment 02](images/04-create-group-with-tag-on-segment02.png){.thumbnail}

Leave `Generic`{.action} selected and click `+ ADD CRITERION`{.action}.

![04 Create Group With tag on segment 03](images/04-create-group-with-tag-on-segment03.png){.thumbnail}

Choose these settings :

- **Type** : `NSX Segment`.
- **Tags** : Equals `ovsegment`.
- **Scope**: Equals `ov1`.

Click `APPLY`{.action}.

![04 Create Group With tag on segment 04](images/04-create-group-with-tag-on-segment04.png){.thumbnail}

Click `SAVE`{.action}.

![04 Create Group With tag on segment 05](images/04-create-group-with-tag-on-segment05.png){.thumbnail}

The group is created. Click `View Members`{.action} in the row of your group to display the members list.

![04 Create Group With tag on segment 06](images/04-create-group-with-tag-on-segment06.png){.thumbnail}

Click `IP Addresses`{.action} to view the IP addresses that are used on your segment and which have been automatically added to your group.

![04 Create Group With tag on segment 07](images/04-create-group-with-tag-on-segment07.png){.thumbnail}

Click `NSX Segments`{.action} to display the member segment of this group which has been automatically added from the criteria. You can click on `CLOSE`{.action} to close this window.

![04 Create Group With tag on segment 08](images/04-create-group-with-tag-on-segment08.png){.thumbnail}

Click `ADD GROUP`{.action} to create a second group.

![05 Create Group With tag on VM 01](images/05-create-group-with-tag-on-vm01.png){.thumbnail}

Type `g-vm`{.action} below the **Name** column and click `Set`{.action} under the **Compute Members** column.

![05 Create Group With tag on VM 02](images/05-create-group-with-tag-on-vm02.png){.thumbnail}

Leave `Generic`{.action} selected and click `+ ADD CRITERION`{.action}.

![05 Create Group With tag on VM 03](images/05-create-group-with-tag-on-vm03.png){.thumbnail}

Choose these settings :

- **Type** : `Virtual Machine`.
- **Tags** : Equals `vm`.
- **Scope**: Equals `ov2`.

Click on `APPLY`{.action}.

![05 Create Group With tag on VM 04](images/05-create-group-with-tag-on-vm04.png){.thumbnail}

Click `SAVE`{.action}.

![05 Create Group With tag on VM 05](images/05-create-group-with-tag-on-vm05.png){.thumbnail}

Click `View Members`{.action} in the row of your group to view the members.

![05 Create Group With tag on VM 06](images/05-create-group-with-tag-on-vm06.png){.thumbnail}

In the **Virtual Machines** section, you can see the tagged virtual machine that has been automatically added.

Click `CLOSE`{.action} to close this window.

![05 Create Group With tag on VM 07](images/05-create-group-with-tag-on-vm07.png){.thumbnail}

### Setting up a distributed firewall rule

We will now create a two-way blocking rule, on the distributed firewall, between the two created groups.

Go to the `Security`{.action} tab, select `Distributed Firewall`{.action} and click `+ ADD POLICY`{.action}.

![06 Create distributed firewall rules 01](images/06-create-distributed-firewall-rules01.png){.thumbnail}

Name your strategy `Isolate vm and segment`{.action}.

![06 Create distributed firewall rules 02](images/06-create-distributed-firewall-rules02.png){.thumbnail}

Click the `three vertical dots`{.action} to the left of your policy and choose `Add Rule`{.action} from the menu.

![06 Create distributed firewall rules 03](images/06-create-distributed-firewall-rules03.png){.thumbnail}

Click the `Pen`{.action} icon to the right of **Any** in the **Sources** column.

![06 Create distributed firewall rules 04](images/06-create-distributed-firewall-rules04.png){.thumbnail}

Stay on the `groups`{.action} tab, check the `g-segment01`{.action} group and click `APPLY`{.action}.

![06 Create distributed firewall rules 05](images/06-create-distributed-firewall-rules05.png){.thumbnail}

Click the `Pen`{.action} icon to the right of **Any** in the **Destinations** column.

![06 Create distributed firewall rules 06](images/06-create-distributed-firewall-rules06.png){.thumbnail}

Select the `g-vm`{.action} group and click `APPLY`{.action}.

![06 Create distributed firewall rules 07](images/06-create-distributed-firewall-rules07.png){.thumbnail}

Choose `Drop`{.action} to remove packages on this rule and click the `three vertical dots`{.action} to the left of your policy.

![06 Create distributed firewall rules 08](images/06-create-distributed-firewall-rules08.png){.thumbnail}

Click `Add Rule`{.action} in the menu.

![06 Create distributed firewall rules 09](images/06-create-distributed-firewall-rules09.png){.thumbnail}

Click the `Pen`{.action} icon to the right of **Any** in the **Sources** column.

![06 Create distributed firewall rules 10](images/06-create-distributed-firewall-rules10.png){.thumbnail}

Select the `g-vm`{.action} group and click `APPLY`{.action}.

![06 Create distributed firewall rules 11](images/06-create-distributed-firewall-rules11.png){.thumbnail}

Click the `Pen`{.action} icon to the right of **Any** in the **Destinations** column.

![06 Create distributed firewall rules 12](images/06-create-distributed-firewall-rules12.png){.thumbnail}

Select the `g-segment01`{.action} group and click `APPLY`{.action}.

![06 Create distributed firewall rules 13](images/06-create-distributed-firewall-rules13.png){.thumbnail}

Choose `Drop`{.action} to remove packages from this rule and click `publish`{.action} to validate the creation of the policy and its two associated rules.

![06 Create distributed firewall rules 14](images/06-create-distributed-firewall-rules14.png){.thumbnail}

Your rule is active, the traffic between the virtual machine member of the g-vm group and the segment member of the g-segment group is no longer possible.

![06 Create distributed firewall rules 14](images/06-create-distributed-firewall-rules14.png){.thumbnail}

## Go further <a name="gofurther"></a>

[Getting started with NSX](/pages/cloud/private-cloud/nsx-01-first-steps)

[Segment management in NSX](/pages/cloud/private-cloud/nsx-02-segment-management)

[VMware Distributed Firewall in NSX documentation](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.2/administration/GUID-6AB240DB-949C-4E95-A9A7-4AC6EF5E3036.html)

Join our community of users on <https://community.ovh.com/en/>.
