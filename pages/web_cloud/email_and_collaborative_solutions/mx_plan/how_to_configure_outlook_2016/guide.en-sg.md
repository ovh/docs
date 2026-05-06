---
title: "MX Plan - Setting up your e-mail address on Classic Outlook for Windows"
excerpt: "Find out how to configure your MX Plan email address in Classic Outlook for Windows"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Objective

Email addresses from the **MX Plan** offer can be configured on a compatible email client. This allows you to send and receive messages from your preferred application.

**Learn how to configure your MX Plan email address on the Classic Outlook for Windows.**

## Requirements

- Have an OVHcloud email solution already configured, from the following **MX Plan** offered with our [web hosting offers](/links/web/hosting)
- [Outlook classic](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5) installed on your Windows.
- Have the credentials related to the email address you wish to configure.

<!-- CP-NAV-START:web-mx-plan -->
---

### OVHcloud Control Panel Access

- **Direct link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigation path:** `Web Cloud`{.action} > `MX Plan`{.action} > Select your MX Plan service

---
<!-- CP-NAV-END:web-mx-plan -->

/// details | Information related to the management and configuration of OVHcloud services

This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.

If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.

///

> [!primary]
>
> Are you using Outlook for Mac? Consult our documentation: [Setting up your e-mail address on Outlook for Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## Instructions

> [!warning]
>
> This documentation applies only to **Outlook classic** available in the Microsoft 365 suite. If you are using the new Outlook, please refer to our guide "[MX plan - Configure your MX plan account on the New Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)".
>
> To install Outlook classic on your Windows computer, download it from the Microsoft page "[Install or reinstall classic Outlook on a Windows PC](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5)" and install it.
>
> Once the installation is complete, to distinguish the two versions when they are installed, type "Outlook" in the Windows search bar. You will then be able to see the difference as shown below.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Add the account <a name="add-account"></a>

> [!primary]
>
> Are you unsure whether you should configure your e-mail account in **POP** or **IMAP**?
>
> Before proceeding, consult the section "[POP or IMAP, what is the difference?](#popimap)" in this guide.
>
> In the following settings, you will notice the possibility to enter 2 different host names for the same server (incoming or outgoing). These values refer exactly to the same server, they have been set up to facilitate entry and avoid confusion between the POP, IMAP and SMTP protocols which use different ports.

- **When launching the application for the first time**: a configuration wizard appears and asks you to enter your e-mail address. Proceed directly to step 1 below on this page.

- **If an account has already been set up**: click on `File`{.action} in the menu bar at the top of your screen, then on `Add an account`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail .h-500}

**On Windows 11, the classic Outlook interface may differ when you add an account.**

Depending on the usage history of Outlook on the concerned computer, a specific configuration may result in a different interface being displayed. In some cases, the so-called "modern" interface (**interface 1**) may be disabled in favor of the classic interface (**interface 2**).

This is why we invite you to consult the chapter corresponding to the interface displayed on your screen.

#### Configuration with interface 1 <a name="add-account-int1"></a>

To configure your email address, follow the steps by clicking on the tabs below.

> [!warning]
>
> It is essential to correctly enter the value corresponding to your location (**EUROPE** or **AMERICA / ASIA-PACIFIC**).

> [!tabs]
> **Step 1**
>>
>> Enter your email address, then click on `Advanced options`{.action}.
>>
>> Then check the box `Configure my account manually`{.action} and click on `Connect`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan02.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> From the available account types, choose IMAP or POP.
>>
>> We recommend using the IMAP protocol.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan03.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Enter the password for your email address, then click on `Connect`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan04.png){.thumbnail .h-500}
>>
> **Step 4**
>>
>> If Outlook is unable to automatically configure the account, the following window appears.
>>
>> Click on `Modify account settings`{.action}.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan05.png){.thumbnail .h-500}
>>
> **Step 5**
>>
>> In the **Incoming mail** section, enter the following:
>>
>> - Server:
>>     - **EUROPE** : imap.mail.ovh.net **or** ssl0.ovh.net
>>     - **AMERICA/PACIFIC ASIA** : imap.mail.ovh.ca
>> - Port : **993**
>> - Encryption method : **SSL/TLS**
>>
>> In the **Outgoing mail** section, enter the following:
>>
>> - Server:
>>     - **EUROPE** : smtp.mail.ovh.net **or** ssl0.ovh.net
>>     - **AMERICA/PACIFIC ASIA** : smtp.mail.ovh.ca
>> - Port : **465**
>> - Encryption method : **SSL/TLS**
>>
>> Click on `Next`{.action} to validate.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan06.png){.thumbnail .h-500}
>>

#### Configuration with interface 2 <a name="add-account-int2"></a>

To configure your email address, follow the steps by clicking on the tabs below.

> [!warning]
>
> It is essential to correctly enter the value corresponding to your location (**EUROPE** or **AMERICA / ASIA-PACIFIC**).

> [!tabs]
> **Step 1**
>>
>> - From the **Add an account** window, select `Manual setup or additional server types`{.action}.
>> - Click on `Next`{.action} to continue.
>> - Select `POP or IMAP`{.action}.
>> - Click on `Next`{.action} to continue.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> Enter your account connection information **(1)**:
>>
>> User information <br>
>> **Your name**: set a display name.<br>
>> **E-mail address**: enter your full e-mail address.<br>
>>
>> Server information <br>
>> - **Account type**: select IMAP<br>
>> - **Incoming mail server**: <br>
>>      - **EUROPE**: imap.mail.ovh.net **or** ssl0.ovh.net <br>
>>      - **AMERICA/ASIA-PACIFIC**: imap.mail.ovh.ca <br>
>> - **Outgoing mail server (SMTP)**: <br>
>>      - **EUROPE**: smtp.mail.ovh.net **or** ssl0.ovh.net <br>
>>      - **AMERICA/ASIA-PACIFIC**: smtp.mail.ovh.ca <br>
>>
>> Connection information <br>
>> **User name**: enter your full e-mail address.<br>
>> **Password**: enter the password associated with your e-mail address.<br>
>>
>> Click on `More settings...`{.action} **(2)** and proceed to the next step
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> From the `Outgoing Server` tab, check `My outgoing server (SMTP) requires authentication`{.action} and leave `Use same settings as my incoming mail server`{.action} selected.
>>
>> From the `Advanced` tab:
>>
>> - **Incoming Server (IMAP)**: 993
>> - **Use the following type of encrypted connection**: SSL/TLS
>> - **Outgoing mail server (SMTP)**: 465
>> - **Use the following type of encrypted connection**: SSL/TLS
>>
>> Click on `OK`{.action} to validate the information. Click on `Next`{.action} to start the account configuration.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Step 4**
>>
>> Click on `Next`{.action} to start the account configuration. If the settings are validated, you will get the window below.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### Use the email address <a name="use-account"></a>

Once the e-mail address is configured, you can now use it! You can now send and receive messages.

OVHcloud also offers a web application allowing you to access your e-mail address from a web browser. OVHcloud Webmail is available [here](/links/web/email). You can log in using the credentials of your e-mail address. For any questions regarding its use, feel free to consult our guide "[Using the OWA webmail interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Recover a backup of your e-mail address

If you need to perform an operation that could result in the loss of your e-mail account data, we recommend that you make a backup of the concerned e-mail account beforehand. To do this, consult the paragraph "**Export from Windows**" in our guide "[Manually migrate your e-mail address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter-depuis-windows)".

### Modify existing settings <a name="modify-settings"></a>

**On Windows 11, the classic Outlook interface may differ when you modify an account.**

Depending on the usage history of Outlook on the concerned computer, a specific configuration may result in a different interface being displayed. In some cases, the so-called "modern" interface (**interface 1**) may be disabled in favor of the classic interface (**interface 2**).

This is why we invite you to consult the chapter corresponding to the interface displayed on your screen.

> [!tabs]
> **Interface 1**
>>
>> If your email account is already configured and you need to access its settings to modify them :
>>
>> - Click on `File`{.action} in the menu bar at the top of the screen, then select the account to modify from the drop-down menu **(1)**.
>> - Click on `Account settings`{.action } **(2)** below.
>> - Select `Server settings`{.action} **(3)** to display the configuration window.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan07.png){.thumbnail}
>>
>> The window is divided into two parts, **Incoming mail** and **Outgoing mail**. Click on the part you wish to modify.
>>
>> ![Outlook](images/config-outlook-legacy-mxplan08.png){.thumbnail}
>>
> **Interface 2**
>>
>> If your email account is already configured and you need to access its settings to modify them :
>>
>> - Click on `File`{.action} in the menu bar at the top of the screen, then select the account to modify from the drop-down menu **(1)**.
>> - Click on `Account settings`{.action} **(2)** below.
>> - Click on `Account settings...`{.action} **(3)** to access the configuration window.
>>
>> ![Outlook](images/config-outlook-mxplan06.png){.thumbnail}
>>
>> - The account settings window appears: select the concerned email account, then click on `Modify...`{.action}.
>>
>> ![Outlook](images/config-outlook-mxplan07.png){.thumbnail}
>>
>> To configure your account, follow the instructions from **step 2** in the section "[Add the account - Configuration with interface 2](#add-account-int2)" of this guide.
>>

### General sending and receiving settings <a name="settings-account"></a>

#### IMAP and POP receiving settings <a name="imap-pop"></a>

For receiving e-mails, when choosing the account type, we recommend using **IMAP**. You can however select **POP**.

> [!warning]
>
> It is essential to correctly note the value corresponding to your location (**EUROPE** or **AMERICA / ASIA-PACIFIC**).

Select the tab corresponding to your configuration type:

> [!tabs]
> **IMAP configuration**
>>
>> - **User name**: enter the **full** e-mail address.
>> - **Password**: enter the e-mail address password.
>> - **EUROPE (incoming) server**: imap.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC (incoming) server**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Security type**: SSL/TLS.
>>
> **POP configuration**
>>
>> - **User name**: enter the **full** e-mail address.
>> - **Password**: enter the e-mail address password.
>> - **EUROPE (incoming) server**: pop.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC (incoming) server**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Security type**: SSL/TLS.

#### SMTP sending settings <a name="smtp"></a>

For sending e-mails, find below the **SMTP** settings to use:

**SMTP configuration**

- **User name**: enter the **full** e-mail address.
- **Password**: enter the e-mail address password.
- **EUROPE (outgoing) server**: smtp.mail.ovh.net **or** ssl0.ovh.net.
- **AMERICA/ASIA-PACIFIC (outgoing) server**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Security type**: SSL/TLS.

### POP or IMAP, what is the difference? <a name="popimap"></a>

When you manually configure your e-mail address, your e-mail client asks you if you want to use the **POP** (**P**ost **O**ffice **P**rotocol) or **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol) protocol. To understand, it is important to know the role of the POP and IMAP protocols in the configuration of your e-mail address.

When you configure your e-mail client, you must provide it with the information of the **incoming server** to receive e-mails and the **outgoing server** to send e-mails. For sending e-mails, there is no choice, it is the **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) protocol that is used. For receiving, you will therefore have the choice between **POP** or **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

To understand the difference between using the POP and IMAP protocols, we will detail the elements that make up the processing of your e-mails when received:

1. **Your device**: a computer, a smartphone or a tablet. This is your consultation support.
2. **Your e-mail client**: application dedicated to the management of your e-mails. The choice of this application will determine the level of ergonomics and features you will need to consult your e-mails.
3. **The receiving protocol**: choice determining the way to retrieve e-mails on your device. This choice has an impact on other devices that access this same e-mail account.
    - **IMAP**: your e-mail client queries the e-mail server and downloads the e-mails to your device. When you read an unread e-mail, the server marks it as "read" by default. Other devices configured in IMAP will be able to see this status and read this e-mail as long as it has not been deleted on one of the devices.
    - **POP**: your e-mail client queries the e-mail server and downloads the e-mails to your device. By default, once the e-mail is downloaded to your device, the message is deleted from the server. As a result, other devices connected to this e-mail address will not be able to read this e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> This description is a summary, it represents the standard operation of these two protocols. It is possible to configure POP so that e-mails are not deleted when you retrieve your e-mails. Our objective is to describe the native operation of these two protocols.

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information about configuring an email address from the Outlook app on macOS, see [the Microsoft Help Center](https://support.microsoft.com/en-gb/office/add-email-account-in-Outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

Join our [community of users](/links/community).