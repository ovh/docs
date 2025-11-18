---
title: VMware vCenter Converter
updated: 2025-02-25
---

**VMware vCenter Converter** is a tool to convert a physical or virtual machine to a cloud infrastructure, in this case a **P2V** (Physical to Virtual) or **V2V** (Virtual to Virtual).

This [application](https://knowledge.broadcom.com/external/article/389242/vmware-vcenter-converter-download.html) is only compatible with Windows.

We will perform a cold migration (VM turned off) of a virtual machine from one **Private Cloud** to another, in this case a **V2V** (Virtual To Virtual) migration. The action will be carried out from a third-party Windows VM on the source infrastructure.

This is the home page for **VMware Converter**.

![](images/Home.PNG){.thumbnail}

You can launch the conversion task via the "**Convert machine**" button in the top left-hand corner of the Start screen.

![](images/Convert.PNG){.thumbnail}

In the dropdown menu, select "**VMware Infrastructure..**" and enter the name of your source (in this case, our Private Cloud), as well as your user name and password.

![](images/Source.PNG){.thumbnail}

Choose the virtual machine you want to convert (**must be turned off in our case**). Here we take the example of the VM "2 Web".

![](images/SourceSystem.PNG){.thumbnail}

As before for the source, enter the information for the destination infrastructure.

![](images/DestinationSystem.PNG){.thumbnail}

You can then rename the VM that will be created by conversion, and choose a directory.

![](images/DestinationVirtualMachine.PNG){.thumbnail}

You can choose your Cluster1 as well as the data store. The DRS feature takes care of assigning it the destination host if DRS is in automatic mode on this cluster.

Regarding the choice of the version of the virtual machine to be converted: When using vSphere it is preferable not to convert it to **version 10** due to a configuration mismatch on the vSphere Client.

![](images/DestinationLocation.PNG){.thumbnail}

You can then modify the settings of the destination VM if necessary, for example if a network is different.

In the conversion options, choose the Network "**VM Network**", otherwise you will get a permission error on the Network "**Local PortGroup**".

![](images/Options.PNG){.thumbnail}

You will then see a summary of your conversion, summarizing the choices you have made previously.

![](images/Summary.PNG){.thumbnail}

The **status** of the conversion is displayed on the homepage along with the **estimated duration** of the remaining time.

![](images/TaskLaunching.PNG){.thumbnail}

Finally, you can see if the task completed successfully.

![](images/TaskFinishing.PNG){.thumbnail}

Join our [community of users](/links/community).