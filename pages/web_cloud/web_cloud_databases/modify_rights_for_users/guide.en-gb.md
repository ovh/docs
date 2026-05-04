---
title: "Web Cloud Databases - Modifying a user's rights"
excerpt: "Find out how to modify a user's rights on your Web Cloud Databases solution"
updated: 2026-03-24
---

## Objective

The [Web Cloud Databases](/links/web/databases) solution can contain several databases. You can define one or more users for managing and using your databases. These users may have higher or lower rights depending on their roles in your databases.
While using the product, you may need to modify a user's rights on your [Web Cloud Databases](/links/web/databases).

**Find out how to modify a user's rights on your Web Cloud Databases solution.**

## Requirements

- A [Web Cloud Databases](/links/web/databases) solution and one or more users.

<!-- CP-NAV-START:web-cloud-databases -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigation path:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Select your database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instructions

> [!primary]
> To create a new user on your Web Cloud Databases solution, refer to the **Create a user** section of our guide "[Creating databases and users on your database server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Click on the tabs below to view each of the **4** steps.

<!-- CP-STEPS-START:modify-rights-tabs -->

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that appears, click on the `Users and rights`{.action} tab.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the user concerned, then click `Manage rights`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Step 4**
>>
>> On the new page that appears, you will find a table listing all the databases on your Web Cloud Databases solution. This table shows all the rights your user has for each database on your Web Cloud Databases solution.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> This is where you can modify your user's rights for each of your databases. To do this, for each database concerned, simply click on the empty circles corresponding to the rights you want to redefine for your user. The change takes effect within moments.

<!-- CP-STEPS-END:modify-rights-tabs -->

Below is a summary table of the types of queries that can be performed on a database, depending on the rights assigned to the user:

<table align="center">
<thead>
<tr>
<th><center>Rights</center></th>
<th><center>Administrator</center></th>
<th><center>Read / Write</center></th>
<th><center>Read</center></th>
<th><center>None</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
