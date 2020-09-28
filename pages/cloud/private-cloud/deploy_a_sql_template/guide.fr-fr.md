---
title: Deploy a SQL template
slug: deploy-a-sql-template
legacy_guide_number: '4816926'
space_key: VS
space_name: vSphere as a Service
section: Services et options OVH
hidden: true
---



**This article shows you how to deploy a SQL template on a dedicated cloud.**

You need to have the [Licences SPLA Windows](#) enabled to access to the template datastore.

Add Template in the inventory
-----------------------------

From the vSphere client, go to *Inventory* -&gt; *Datastores and Datastore clusters*

Right-click on Datastore *templates-windows* and click *Browse Datastore*

![](images/Datastores.png){.thumbnail}

![](images/web_datastore.png){.thumbnail}

![](images/browse.png){.thumbnail}

![](images/web_datastore_browse.png){.thumbnail}

You can see the list of windows and SQL templates available.

Now, you need to register the SQL template on the inventory. For that, go to the SQL template folder.

![](images/templates-windows.png){.thumbnail}

![](images/web_list_template.png){.thumbnail}

Right click on the .vmtx (Template VM file).

Then clik *Add to Inventory*.

![](images/addToInventory.png){.thumbnail}

Right click on the .vmtx (Template VM file).

Then clik *Regsiter VM*.

![](images/web_regsiterVM.png){.thumbnail}

Keep the default value as template name and click *Next*. (You cannot change the name of this template, because the template datastore is mounted as read only)

![](images/template_name.png){.thumbnail}

![](images/web_register_name_location.png){.thumbnail}

Select the Cluster and click Next.

Then Select a Host and Click Next.

![](images/template_cluster.png){.thumbnail}

![](images/template_host.png){.thumbnail}

![](images/web_register_cluster.png){.thumbnail}

![](images/web_resgister_host.png){.thumbnail}

To register the template on the inventory click Finish.

![](images/template_finish.png){.thumbnail}

![](images/web_resgister_finish.png){.thumbnail}

Now, you are ready to deploy a virtual machine from this template.

Deploy SQL Template
-------------------

From the vSphere client, go to *Inventory* -&gt; *VMs ans Templates*

Right click on the SQL template, that you previously registered.

**

![](images/deploy_template.png){.thumbnail}

![](images/web_deploy_from_template.png){.thumbnail}

Enter the virtual machine name and select the inventory location (In this example it's SQL folder).

Click Next.

![](images/deploy_name_folder.png){.thumbnail}

![](images/web_deploy_name_folder.png){.thumbnail}

Select the cluster and click Next.

![](images/deploy_cluster.png){.thumbnail}

![](images/web_deploy_cluster.png){.thumbnail}

Select a datastore.

Click Next.

![](images/deploy_datastore.png){.thumbnail}

![](images/web_deploy_datastore.png){.thumbnail}

Check the "Power on this virtual machine after creation" if you want to start the vm after you finished this wizard.

Then Select a customization specification or use the Customization Wizard to personnalize you virtual machine.

The customization is mandatory for that SQL Setup uses the custom name and not the generated name.

Click Next.

![](images/deploy_custo.png){.thumbnail}

For Web client, select *Customize the operating system*.

![](images/web_deploy_options.png){.thumbnail}

![](images/web_deploy_custom.png){.thumbnail}

Click Finish.

![](images/deploy_finish.png){.thumbnail}

![](images/web_deploy_finish.png){.thumbnail}

The deployement of your virtual machine is now in progress.

When the deplyement is done, you can finalize the SQL Setup with the following section.

Finalize SQL Setup
------------------

Let's start the virtual machine if you haven't check the option "Power on this virtual machine after creation".

From the vSphere client, go to *Inventory* -&gt; *VMs ans Templates*

Open the inventory location, you selected during the deployement.

![](images/virtual_machine.png){.thumbnail}

![](images/web_vm.png){.thumbnail}

To start the SQL setup, you need to wait for the end of the customization process.

You can see the progress on the "Tasks & Events" tab, on the view : Events :

Here you can see : "Customization of VM SQL-WEB succeeded".

![](images/customization.png){.thumbnail}

![](images/web_vm_events.png){.thumbnail}

Open the virtual machine console.

Login with the credentials available on the Summary tab, Annotations widget.

SQL Setup starts automaticaly at the login after some seconds.

At the login screen, you have the ability to switch the input method (AZERTY / QUERTY) by the combination of CTRL + SHIFT.

![](images/console.png){.thumbnail}

![](images/login.png){.thumbnail}

![](images/sql.png){.thumbnail}

Enter the instance name and the password.

The password must meet the Microsoft SQL Server Strong Password requirements:

- Does not contain all or part of the user's account name
- Is more than eight characters in length
- Contains characters from at least three of the following categories:
    - English uppercase characters (A through Z)
    - English lowercase characters (a through z)
    - Base 10 digits (0 through 9)
    - Nonalphabetic characters (for example: !, $, \#, %)

You can modify the default SQL Collation.

Click OK.

![](images/progress1.png){.thumbnail}

![](images/progress2.png){.thumbnail}

![](images/sql_done.png){.thumbnail}

The SQL setup is done.

Click Ok.

The server will reboot and the virtual machine will be ready.

![](images/sql_explorer.png){.thumbnail}


