---
title: Using Remote Desktop with Microsoft 365 apps
slug: office365-proplus-remote-desktop
excerpt: Find out how to install and use Microsoft 365 apps on a remote desktop (RDS) or shared computer
section: Office
order: 04
---

**Last updated 6th September 2021**

## Objective

You have the option to use the software suite in the Microsoft 365 apps pack on a remote or shared machine. To do this, you will need to follow the installation procedure described in this guide.

**Learn how to install and use Microsoft 365 apps on a remote desktop (RDS) or shared computer.**

## Requirements

- a Microsoft 365 Apps for enterprise licence (formerly: Office 365 ProPlus)
- using Microsoft Windows via a remote desktop (**R**emote **D**esktop **S**ervices)

> [!warning]
>
> The Microsoft 365 Apps for business licence is incompatible with RDS and shared computer usage.
> 

## Instructions

This guide is based on the official Microsoft documentation: [Deploy Microsoft 365 Apps by using Remote Desktop Services](https://docs.microsoft.com/en-gb/deployoffice/deploy-microsoft-365-apps-remote-desktop-services){.external}.

> [!warning]
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#gofurther) section of this guide.
>

### Method 1: Manual configuration

Installing a Microsoft 365 Apps for enterprise solution on a shared computer using Remote Desktop Services (RDS) does not work without a specific configuration. Without this setting, you should get the following message:

![emails](images/4717.png){.thumbnail}

> [!primary]
>
> If you have already installed your Office 365 ProPlus licence, you will need to **uninstall** it.
>

- Once you have uninstalled your licence, please [click here](https://www.microsoft.com/en-gb/download/details.aspx?id=49117){.external} to download the Microsoft 365 Deployment Tool.


- **Run** the deployment tool on your machine.


- Edit the `configuration.xml` file.

![office 365](images/4720.png){.thumbnail}

Edit the `configuration.xml` file, then uncomment the following lines:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

If these lines do not exist, you can copy and paste them into the file.

- Save the changes you have made. Then open a Powershell terminal and run the following two commands from the folder where the `configuration.xml` file is located:

```powershell
./setup.exe /download configuration.xml
```

```powershell
./setup.exe /configure configuration.xml
```

> [!primary]
>
> These commands can take several minutes to complete.

- Open the Windows registry editor by running `Regedit`, then follow this path:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Check the following key:

```powershell
SharedComputerLicensing
```

Make sure the value is `1`. If this key does not exist, you can create it.

![emails](images/4723.png){.thumbnail}

- Launch an Office 365 suite application, and you will be prompted to enter your user name and password.

![emails](images/4724.png){.thumbnail}

- You can now use your Office 365 suite from your shared computer using Remote Desktop Services (RDS).

![emails](images/4726.png){.thumbnail}


## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.
