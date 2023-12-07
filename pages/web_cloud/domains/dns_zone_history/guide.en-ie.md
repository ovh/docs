---
title: "Managing the history of a DNS zone"
excerpt: "Find out how to view, compare, download and restore your DNS zone backups"
updated: 2023-12-11
---

## Objective

The **D**omain **N**ame **S**ystem (**DNS**) zone of a domain name is the domain name’s configuration file. It consists of technical information, called *DNS records*. The DNS zone is like a referral center.

For example, you can specify:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting plan to display your website with your domain name.
- The email servers (DNS records of type *MX*) to which your domain name must redirect the emails it receives. This allows you to view them on your custom email address(es) with your domain name.
- Information related to the security/authentication of your services (web hosting, web server, email server, etc.) associated with your domain name (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).

Please refer to our documentation on [DNS records and editing a DNS zone](/pages/web_cloud/domains/dns_zone_edit) in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) if you would like to learn more about this topic.
For various reasons, you may need to apply an old DNS configuration to your domain name.

DNS management is now easier thanks to the history of your DNS zones.

**Find out how to view, compare, download and restore your DNS zone backups**

## Requirements

- a DNS zone for your domain name in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- You must have management access to the domain name concerned

## Instructions

To access this feature, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) then go to the `Web Cloud`{.action} section on the top of the interface. In the left-hand column, go to the `Domain names`{.action} tab, then select the domain name linked to the DNS zone you want to manipulate.

On the page that pops up, if you have not already been redirected to this tab, click the `DNS Zone`{.action} tab.

The table that appears will show your domain name’s DNS zone. There, you will find the list of DNS records that it contains. On the right of the table, there are several buttons you can use to perform actions on your DNS zone. 

![DNS history tool](images/dns-zone-history.png){.thumbnail}

Click `View your DNS zone history`{.action}. 

On the new page that pops up, a table will appear containing the backup history for your DNS zone, ordered from the most recent date to the oldest. At the top of this table is the current version of your DNS zone. On this page, you can:

- [View a DNS zone](#view)
- [Download a DNS zone](#download)
- [Restore a DNS zone](#restore)
- [Compare two DNS zones](#compare)

### View a DNS zone <a name="view"></a>

To view the DNS zone of your choice, identify the corresponding row in the table, then click on the icon in the `View`{.action} column.

![View a DNS zone](images/visualize-dns-eyes.png){.thumbnail}

The data for the DNS zone concerned is displayed.

![Details of a DNS zone](images/details-dns-zone.png){.thumbnail}

Click `Close`{.action} to return to the main page “DNS zone history”.

### Download a DNS zone <a name="download"></a>

To download the DNS zone of your choice, identify the corresponding row in the table, then click on the icon in the `Download`{.action} column.

![Download a DNS zone](images/download-dns-zone.png){.thumbnail}

The DNS zone is downloaded in .txt format.

### Restore a DNS zone <a name="restore"></a>

If you would like to replace your current DNS zone with another one, simply restore an older DNS zone. In the table containing the history of your DNS zones, identify the row corresponding to the DNS zone you want to restore (check the date on the left-hand side of the row), then click on the icon in the `Restore`{.action} column.

![Restore a DNS zone](images/restore-dns-zone.png){.thumbnail}

The next window will appear.

![Confirmation restore DNS zone](images/confirmation-restore-dns-zone.png){.thumbnail}

Check that the date indicated in the message corresponds to the DNS zone you want to restore. As the yellow banner will show, please remember that the current DNS zone (at the top of the DNS zone history list) will be deleted and replaced with the DNS zone that you want to restore.

Click `Restore`{.action} to confirm the restoration or `Cancel`{.action}.

> [!primary]
>
> Modifying or restoring a DNS zone will take **4** to **24** hours to propagate fully to the DNS network.
>

### Compare two DNS zones <a name="compare"></a>

You can compare the contents of two DNS zones. In the table containing the history of your DNS zone, identify the two rows corresponding to the two DNS zones you want to compare (check the date to the left of each row), then select them. To compare these two DNS zone versions, click on `Compare versions`{.action} in the top left-hand corner.

![Compare two DNS zones](images/compare-two-dns-zone.png){.thumbnail}

A new page will appear, displaying the content of the two DNS zones. Above each version, you will see the corresponding date. By default, the most recent DNS zone version is on the left and the oldest DNS zone version is on the right. Color-coded content helps you identify differences in content.<br>
On the left, the content highlighted in red has been modified or deleted on the newer version.<br>
On the right, the content highlighted in green has been changed or added from the older version. 

You can also update the dates of the versions you want to compare by using the two drop-down lists.

![Details comparing two DNS zones](images/compare-dns-zone-details.png){.thumbnail}

With this guide, you can now compare two DNS zones, and also view, download, restore and delete a DNS zone.

## Go further

[Log in to the OVHcloud Control Panel](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ie/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ie/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.