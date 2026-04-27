---
title: "Web hosting - How to enable SFTP access"
excerpt: "Find out how to enable SFTP access on your OVHcloud web hosting"
updated: 2026-02-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

OVHcloud web hosting offers provide access to a storage space where you can upload the files of your websites or applications. Access to this space is possible via an FTP or SSH user with the passwords associated with them.

Just like the **F**ile **T**ransfer **P**rotocol (**FTP**), the **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) allows you to transfer data from your device to the storage space of your web hosting.

The only difference is that SFTP uses a secure channel to exchange data. The data transmitted via this protocol is automatically encrypted.

**Find out how to enable SFTP access on your OVHcloud web hosting.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting-multisite)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### Enable SFTP access for an FTP user on your web hosting

**Click on one of the two lines below, depending on your web hosting offer, to display the explanations.**

<!-- CP-STEPS-START:enable-sftp-starter-perso -->
/// details | Enable SFTP on a **free 100M**, **Starter**, or **Perso** web hosting offer

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 3**
>>
>> At the bottom of the page, in the table, check the box in the **SFTP** column for the relevant FTP user. The page will automatically refresh.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Once the **SFTP** option is enabled, you will be able to use the SFTP protocol on your web hosting with the relevant FTP user.
>>

///
<!-- CP-STEPS-END:enable-sftp-starter-perso -->

<!-- CP-STEPS-START:enable-sftp-pro-performance -->
/// details | Enable SFTP on a **Pro** or **Performance** web hosting offer

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 3**
>>
>> At the bottom of the page, in the table, check the status in the **SFTP** column for the relevant FTP user:
>>
>> - **Enabled**: The SFTP protocol is already active for this user.
>> - **Disabled**: Click on the `...`{.action} button to the right of the relevant line, then on `Edit`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Step 4**
>>
>> In the window that opens, in the **Connection protocols** section, select `FTP and SFTP`{.action} or `FTP, SFTP and SSH`{.action} if you also need to enable the SSH protocol.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Then click on `Next`{.action}, then on `Confirm`{.action} to complete the activation of SFTP for the relevant user.

///
<!-- CP-STEPS-END:enable-sftp-pro-performance -->

### Connect to your web hosting via SFTP

For this, refer to our guide « [Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) ».

## Go further

[Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Using PuTTy for Windows](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tutorial - Using FileZilla with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Tutorial - Using Cyberduck with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).