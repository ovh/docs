---
title: Use Remote Desktop with Microsoft 365 apps
legacy_guide_number: 2339
slug: office365-proplus-remote-desktop
excerpt: Learn how to install and use Microsoft 365 apps on a remote desktop (RDS) or shared computer
section: Office
order: 4
---

**Last updated 06/09/2021**

## Objective

You want to use the software suite in the Microsoft 365 apps pack on a remote or shared machine. To do this, you will need to follow the installation procedure described in this guide.

**Learn how to install and use Microsoft 365 apps on a remote desktop (RDS) or shared computer.**

## Requirements

- You must have a Microsoft 365 apps for business licence (Formerly Office 365 ProPlus)
- Use Microsoft Windows via a remote desktop (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> The Microsoft 365 Apps for business licence is incompatible with use via RDS and shared computer.
> 

## Instructions

This guide is based on the information in the Microsoft [Deploy Microsoft 365 Apps Using Remote](https://docs.microsoft.com/fr-fr/deployoffice/deploy-microsoft-365-apps-remote-desktop-services) Desktop Services guide.

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
> 

### Method 1: Manual configuration

Installing a Microsoft 365 Apps for Enterprise solution on a shared computer using Remote Desktop Services (RDS) does not work without a specific configuration. Without this setting, you should get the following message:

![emails](images/4717.png){.thumbnail}

> [!primary]
>
> If you have already installed your Office 365 Proplus licence, you will need to **uninstall** it.
>

- Once you have uninstalled your licence, please [click here](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external} to download the Microsoft 365 Deployment Tool.


- **Run** the deployment tool on your machine.


- Edit the `configuration.xml` file.

![office 365](images/4720.png){.thumbnail}

Edit the `configuration.xml` file, then uncomment the following lines:

```bash
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

If these lines do not exist, you can copy and paste them into the file.

- Save the changes you have made. Then open a powershell terminal and run these two commands from the folder where the `configuration.xml` file is located:

```powershell
./setup.exe /download configuration.xml
```

then

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> These commands can take several minutes to complete.

- Open the Windows registry editor by running \`Regedit\`, then follow this path:

```bash
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Check the following key:

```bash
SharedComputerLicensing
```
Make sure it's `1`. If this key does not exist, you can create it.

![emails](images/4723.png){.thumbnail}

- Launch an Office 365 suite application, and you will be prompted to enter your user name and password.

![emails](images/4724.png){.thumbnail}

- You can now use your Office 365 suite from your shared computer using Remote Desktop Services (RDS).


![emails](images/4726.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh/en/>.
