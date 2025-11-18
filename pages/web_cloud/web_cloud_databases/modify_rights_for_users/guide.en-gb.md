---
title: "Web Cloud Databases - Modifying a user's rights"
excerpt: "Find out how to modify a user's rights on your Web Cloud Databases solution"
updated: 2025-06-23
---

## Objective

The [Web Cloud Databases](/links/web/databases) solution can contain several databases. You can use it to define one or more users for managing and using your databases. These users may have higher or lower rights depending on their roles in your databases.  
While using the product, you may need to modify a user’s permissions on your [Web Cloud Databases](/links/web/databases).

**Find out how to change a user's permissions on your Web Cloud Databases solution.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- A [Web Cloud Databases](/links/web/databases) solution and one or more users

## Instructions

> [!primary]
> To create a new user on your Web Cloud Databases solution, please refer to the **Create a user** section of our guide “[Creating databases and users on your database server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)”.

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Web Cloud Databases`{.action} menu, then choose the Web Cloud Databases solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that opens, click on the `Users and rights`{.action} tab.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click the `...`{.action} button to the right of the user concerned, then `Manage rights`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Step 5**
>>
>> On the new page that pops up, you will find a table listing all the databases on your Web Cloud Databases solution. In this table, you can view all of the permissions your user has for each database on your Web Cloud Databases solution.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> This is where you can modify your user’s permissions for each of your databases. To do this, and for each of the databases concerned, simply click on the empty circles corresponding to the permissions you want to redefine for your user. The modification will be effective in a few moments.

Below is a summary table of the types of queries that can be performed on a database, depending on the permissions assigned to the user:

<table align="center">
<thead>
<tr>
<th><center>Rights</center></th>
<th><center>Administrator</center></th>
<th><center>Reading / writing</center></th>
<th><center>Read</center></th>
<th><center>None</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Go further
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).