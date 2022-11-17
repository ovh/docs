---
title: Using the IPMI with Dedicated Servers
slug: use-ipmi-dedicated-servers
excerpt: Find out how to log on to your server without the use of external software
section: 'Getting started'
order: 4
---

**Last updated 16th November 2022**

## Objective

With the IPMI (Intelligent Platform Management Interface) console, you can access your Dedicated Server directly, without needing to use any external software (e.g. a terminal or PuTTY). This guide will explain how to boot this console.

Please note that you may also see the term KVM (Keyboard Video and Mouse) used for this solution, particularly for VPS products.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ie/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ie/compare/) for more information.

## Instructions

You can access the IPMI using several different methods, the Java applet (recommended), the KVM tool from a web browser (recommended but only available for the latest servers) or the browser (Serial over LAN).

To enable one of these methods, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click on the `IPMI`{.action} tab.

### Access via the Java applet <a name="applet-java"></a>

You will need to ensure that Java is installed on your desktop for the Java applet to work. If you do not have Java installed, go to the [official page](https://www.java.com/en/download/){.external} to do so.

In the `IPMI`{.action} section of the OVHcloud Control Panel, click on `From a Java applet (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate_2022.png){.thumbnail}

Download the file `kvm.jnlp` when you are prompted to do so, and run it:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

You will then land on the login page, where you will be prompted to enter your `root` credentials, as you would need to when logging in via a terminal or external software application:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

You can now manage your server.

### Access via the KVM tool from a web browser (only for the latest servers) <a name="kvm-browser"></a>

In the `IPMI`{.action} section of the OVHcloud Control Panel, click on `Via your web browser (KVM)`{.action}:

![IPMI browser](images/KVM-web-browser01.png){.thumbnail}

Activation takes a few seconds. You will receive a message confirming that the IPMI connection is available.

![IPMI browser](images/KVM-web-browser02.png){.thumbnail}

Then click on `Access the console (KVM)`{.action} to open the console in your web browser.

![IPMI browser](images/KVM-web-browser03b.png){.thumbnail}

### Access via your browser, using Serial over LAN (SoL)

Although we would recommend that you log in via the Java applet, you can also access the IPMI using Serial over LAN. To do so, click on `From your browser`{.action} in the `IPMI`{.action} section of the OVHcloud Control Panel:

![IPMI SoL activation](images/sol_ipmi_activation_2022.png){.thumbnail}

> [!warning]
>
> It may take several minutes to access the IPMI using SoL, which is why we would recommend using the applet instead.
>

### Test and reboot the IPMI

Your IPMI may stop responding. If you cannot access it, you can test it first by clicking on `Test the IPMI`{.action}, and checking the result of the diagnostic:

![IPMI test](images/ipmi_test_2022.png){.thumbnail}

If everything appears to be normal, as per our example, you may be experiencing a local technical issue (internet connection, local desktop). If the IPMI encounters any issues, you can reboot it by clicking `Reboot the IPMI`{.action}.

![IPMI test](images/ipmi_reboot_2022.png){.thumbnail}

It will take several minutes for the IPMI to reboot.

### Installing an OS using IPMI v1

> [!warning]
> OVHcloud does not guarantee the functionality of any operating systems installed via IPMI. This route should only be taken by an experienced server administrator.
>

To begin, open [IPMI in a Java applet](./#applet-java) from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). Then, click `Device`{.action} from the menu bar and select `Redirect ISO`{.action} from the drop-down menu.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

Next, select the ISO you wish to use from your local computer's file system. Once you have selected your ISO, press the `Ctrl Alt Del`{.action} button in the top-right corner of the screen to reboot the server. Press the appropriate `F` key to access the boot options.

> [!primary]
> You may need to use the soft keyboard for inputs to register in IPMI. To access this, click the `Keyboard`{.action} option from the menu bar at the top of the window. Then, select `Soft Keyboard` from the dropdown menu and click `Show`{.action}.
>

Select the **UEFI Virtual CDROM 1.00** option from the boot menu to start the server from the ISO attached previously.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Complete the steps required to install the operating system. Do not forget to remove the ISO from the "Redirect ISO" option.

### Installing an OS using IPMI v2

> [!warning]
> OVHcloud does not guarantee the functionality of any operating systems installed via IPMI. This route should only be taken by an experienced server administrator.
>

To begin, open [IPMI in a Java applet](./#applet-java) from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). Then, click `Virtual Media`{.action} and select `Virtual Storage`{.action}.

![Virtual_Storage](images/virtual_storage.png){.thumbnail}

From the new screen, select `ISO File` from the "Logical Drive Type" drop-down menu. Next, click `Open Image`{.action} and navigate to your ISO file. Finally, click `Plug-in`{.action} and `OK`{.action} to finish.

![ISO_file](images/iso_file.png){.thumbnail}

In order to be able to boot from our ISO file, we need to access the BIOS and switch our boot options. To do so, select `Power Control`{.action} and click `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
>
> You may need to use the soft keyboard for inputs to register in IPMI. To access this, click the `Virtual Media`{.action} option from the menu bar at the top of the window. Then, select `Virtual Keyboard`{.action} from the drop-down menu.
>

During the bootup process, press the `DEL` key when prompted to access the BIOS. You may also press the `F11` key and navigate to the BIOS by selecting the option `Enter Setup`{.action}.

![Boot_Menu](images/boot_menu.png){.thumbnail}

In the BIOS navigate to the `Boot`{.action} tab and change the `UEFI Boot Order #1` to `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Lastly, press the `F4` key to save your changes and restart the server.

### Installing an OS using web browser KVM (only for the latest servers)

> [!warning]
> OVHcloud does not guarantee the functionality of any operating systems installed via IPMI. This route should only be taken by an experienced server administrator.
>

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), open the [KVM web browser console](./#kvm-browser).

Here you have access to the same information and functionalities as in in the Java-based IPMI modules.

> [!primary]
>
> Be sure to execute the next steps at a good pace. The process might be cancelled if there are longer pauses between actions.
>

Click on the `Browse File`{.action} button and select your image file.

![KVM Install](images/kvm_install01.png){.thumbnail}

Click on `Start Media`{.action}. This will prepare the ISO for the installation process.

![KVM Install](images/kvm_install02.png){.thumbnail}

The file size displayed is not the actual size. This is normal, since the file is not fully uploaded in this step.

![KVM Install](images/kvm_install03.png){.thumbnail}

Click on `Power`{.action} and select `Reset Server`{.action} from the drop-down menu.

![KVM Install](images/kvm_install04.png){.thumbnail}

Wait for the boot selection screen to appear and press the appropriate key to enter the boot menu (`F11` in this example).

![KVM Install](images/kvm_install05.png){.thumbnail}

In the boot menu, select the optical drive (`UEFI: AMI Virtual CDROM0` in this example) and press `Enter`.

![KVM Install](images/kvm_install06.png){.thumbnail}

The ISO file will now be uploaded, then the server will boot from the file.

![KVM Install](images/kvm_install07.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
