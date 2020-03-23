---
title: 'Configuring your Exchange account in Thunderbird for Windows'
excerpt: 'Find out how to add an Exchange account on Thunderbird'
slug: exchange_2013_thunderbird_configuration
legacy_guide_number: g1278
section: 'Exchange email client configuration'
---

**Last updated 05th March 2020**

## Objective

You can configure Exchange accounts on email clients, if they are compatible. Thunderbird is not compatible with the Exchange MAPI protocol, but you can configure it in POP or IMAP. In our example, a Hosted Exchange account is configured in IMAP.

**Find out how to configure an Exchange account on Thunderbird email software for Windows.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or
> contacting the software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-configuration-thunderbird/#go-further_1) section
> of this guide.
> 

## Requirements

- an [Exchange](https://www.ovh.ie/emails/){.external} solution
- the Thunderbird application installed on your device
- the required credentials for the email address you would like to configure

## Instructions

### Step 1: Add the account on Thunderbird.
Open the Thunderbird application installed on your desktop.

You will need to add a new account via the menu below. Select `Email`{.action} to continue.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Step 2: Create the account.
Fill in the required fields.

- Your surname and first name: *Enter the display name you want.*
- Email address: *Enter your full email address.*
- Password: *The password set in the [OVHcloud Control Panel](https://www.ovh.com/manager/web/login.html){.external} for the Exchange account.*
- Remember password: *You will need to tick this option.*

Click `Manual configuration`{.action} to follow the installation steps.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Step 3: Manual configuration.

> [!primary]
>
> In our example, we use the server comment: e.g. **X**.mail.ovh.net.
> 
> You can find your server in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, in the `Web`{.action} section, then `Microsoft`{.action}
>  in the left-hand column. Select `Exchange`{.action}, then your platform. The server is visible in the **Connection** box in the `General Information`{.action} tab.
> 

Once you have clicked `Manual configuration`{.action}, check that the following elements have been correctly entered.

- Incoming server: **IMAP** 
- Server host name: *Enter the details for the server your Exchange service is hosted on.*
- Port:  **993**
- Encryption method:   **SSL**
- Authentication:  **Normal password**
- Outgoing server: **SMTP**
- Server host name: *Enter the details for the server your Exchange service is hosted on.* 
- Port:  **587** 
- Encryption method:  **STARTTLS** 
- Authentication:  **Normal password** 
- ID: *Enter your full email address.*

> [!primary]
>
> For Private Exchange accounts, the server you need to enter will be the one chosen when you placed your order.
>

If the **Normal password** authentication does not work, you can also enter **NTLM**.

Click `Done`{.action} to finish the setup.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Step 4: The process is complete.

Your Exchange account is now correctly configured in IMAP, so you can start sending and receiving emails.

OVHcloud also offers a [webmail application](https://www.ovh.ie/mail/){.external}. You can log in using your email credentials.


## Go further

Join our community of users on <https://community.ovh.com/en/>.