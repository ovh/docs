---
title: Unable to send or receive emails
excerpt: Find out what to do if your emails are not sent or received correctly by OVHcloud
updated: 2024-04-11
---

## Objective

Is your email account unable to send or receive emails when using webmail or your email software?

**Find out how to diagnose sending or receiving errors on your OVHcloud email solution.**

> [!primary]
>
> If you have any other questions that are not covered by this guide, please refer to our [Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

## Requirements

- an OVHcloud email solution
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!success]
>
> Use the **sending** and **receiving** keywords to quickly identify the issues that apply to each of the practical cases below.

### Are my email service and/or accounts active? (**sending** and **receiving**)

For your emails to work, you need to have an active email service (Web Hosting plan). You can verify this directly in the OVHcloud Control Panel. The corresponding domain name must also be active.

Start by checking that you are up to date with your [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and service [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management).

Follow these steps to ensure that your relevant services are up and running:

- For your **domain name**, go to the `Web Cloud`{.action} section, click `Domain names`{.action}, then select your domain name. If your domain name has expired, this will be listed at the top of the page.
- For your **Web Hosting plan**, go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then select your Web Hosting plan. The date of expiry or automatic renewal of your hosting will be indicated at the top of the page.
- For your **MXplan email** solution, go to the `Web Cloud`{.action} section, click `Emails`{.action}, then select the domain name concerned. Click the `Email`{.action} accounts tab. Check the status of the email account in the `Status` column.

### I am unable to send emails from my email software (**sending** and/or **receiving**)
 
If you use an email client on your computer (Outlook, Mac Mail, Thunderbird, etc.) or smartphone (iOS, Android, etc.), and you experience a sending or receiving technical issue, check the configuration settings according to your email solution and the email client or application you are using.

Go to the [Hosted email](/products/web-cloud-email-collaborative-solutions-mx-plan) section in our **Web Cloud** guides, and check the configuration of your email software in the `Configure on computer` section, or in the `Configure on smartphone` section for your smartphone.

### I can't receive emails because my email address is full, I don't have any more space. What can I do?

If you have signed up to [one of our OVHcloud email solutions](/links/web/emails) and one of your email accounts is full, please read our guide on [Managing email account storage space](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota). This guide will help you decide whether you can optimize your existing storage space, or whether you need to change email solutions to increase storage capacity.


### Are emails functional from webmail? (**sending** and/or **receiving**)

To ensure that the malfunction is not linked to a configuration error, send and receive a test email directly via OVHcloud webmail. If everything is working properly, check your software configuration using the guides provided.

From your computer browser or smartphone, go to the address [Webmail](/links/web/email).

![webmail](images/webmail.png){.thumbnail}

### I cannot log in to webmail 

Make sure you have the right password. If necessary, you can modify it. Please refer to our guide on [Changing a password for an MX Plan email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

### Is there an incident or maintenance in progress for my service? (**sending** and/or **receiving**)

You can check the various tasks that are currently in progress on <https://web-cloud.status-ovhcloud.com/> in the `Emails` section.

### Is the domain name pointing correctly to my email service? (**receiving**)

Check that your domain name points correctly to the OVHcloud email servers. To do this, you will need to configure MX records in your DNS zone. <br>Please refer to our guide on [Adding an MX record to your domain name’s configuration](/pages/web_cloud/domains/dns_zone_mx).

![DNSzone](images/DNS-CA.png){.thumbnail}

### After sending an email, I receive a message that my email could not be sent, including a 3-digit code (**sending**)

This is an SMTP error return. This indicates that the exchange between the outgoing server and the incoming email server could not be completed correctly. The code is used to determine the type of error the server encountered. It is usually accompanied by a message detailing this error.

An SMTP response consists of a 3-digit number. The three digits of the answer each have a particular meaning:

- The first number indicates whether the answer is correct, wrong or incomplete. An SMTP client will be able to determine its next action by examining this first digit.
- The second and third digits provide additional information.

There are four possible values for the first digit of the response code:

|Code|Description|  
|---|---|  
|2 xx|Positive response: the requested action has been completed. A new request can be initiated.|
|3 xx|Temporary positive response: the request has been accepted, but the requested action is pending receipt of more information. The SMTP client should send another command specifying this information.|
|4 xx|Persistent transient failure: the command was not accepted and the requested action not fulfilled. However, the error condition is temporary and the action can be requested again.|
|5 xx|Negative response: the command was not accepted and the requested action not fulfilled. The SMTP client should not repeat the same request.|

The majority of SMTP negative response codes used by servers are listed below:

|Response codes|Details|Actions|
|---|---|---|
|420|Timeout connection problem|This error message is returned only by GroupWise mail servers. Contact the destination mail server administrator.|
|421|Service not available, transmission channel being closed|Undetermined origin error, make sure that sending to another domain works. If yes, please try sending the original email again later.|
|432|The recipient’s Exchange Server incoming mail queue has been stopped|This error message is returned only by Microsoft Exchange mail servers. Contact the destination mail server administrator.|
|449|A routing error|This error message is returned only by Microsoft Exchange mail servers. Microsoft recommends that you run a diagnostic with their WinRoute tool.|
|450|Requested action not taken – The user’s mailbox is unavailable (for example, mailbox busy or temporarily blocked for security or blacklisting reasons).|Check if the IP address of the mail server is blacklisted ([SpamHaus](https://check.spamhaus.org/)), and also check if your mail contains words referring to SPAM.|
|451|Requested action aborted – Local error in processing|This may be due to a momentary overload, or an incorrect SPF check of the issuing domain. Refer to the additional message provided by the server, or contact the server administrator if this persists.|
|452|The command has been aborted because the server has insufficient system storage|The mail server is 'overloaded'. This could also be caused by too many messages trying to be sent at once. Please check your outbox and try again.|
|455|Server unable to deal with the command at this time.|Wait a while, then try again. If this fails, contact the recipient's email server administrator.|
|500|A syntax error: the server could not recognise the command (may include errors such as a too long command line)|This is often caused by the sender's antivirus or firewall. Check this and try again.|
|501|Syntax error in parameters or arguments|This is often caused by an incorrect recipient email address or a sender-side antivirus or firewall problem. Please check the destination address and your antivirus or firewall.|
|502|Command not implemented|The settings or options used when sending the email with your SMTP server are recognised but disabled in its configuration. Please contact your service provider.|
|503|Server encountered bad sequence of commands|This is usually due to an authentication problem, make sure you are authenticated on the SMTP server in terms of your email software configuration.|
|504|Command parameter not implemented|The settings or options used when sending the email with your SMTP server are recognised but disabled in its configuration. Please contact your service provider.|
|535|Authentication failed|User information/password is incorrect or sending is potentially blocked on your email address. Check the status of your email address in your OVHcloud Control Panel. A password change can unblock the sending if the account has been blocked for spam, see our guide [What to do if your account is blocked for spam](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam) for more information.|
|550|Requested action not performed: mailbox unavailable|The destination mail server could not verify the email address used. This is most often caused by an invalid destination email address, but can also mean that the destination email server has firewall or connectivity issues. Check the recipient's email address, and/or try again.|
|550 5.7.1|Email rejected per policy reason|The destination email server rejected the sending email address for security policy reasons. There are many reasons for this, and they are usually detailed with the error code. In some cases, it can be an IP address in the transmission chain that is present in a reject list. To check the reputation of an IP address, you can test it, for example, on [MXtoolbox](https://mxtoolbox.com/blacklists.aspx) or check the chain of transmission of an email from the email address concerned with [Mailtester](https://www.mail-tester.com/)|
|550 5.7.26|This message does not have authentication information or fails to pass authentication checks| The email was rejected because the sender's email service does not have SPF or DKIM configured on their domain name.<br><br>It is advisable to set up a priority SPF record, which is compatible with all email offers. Use our guide “[How to improve email security with an SPF record](/pages/web_cloud/domains/dns_zone_spf)”.<br><br>If your email offer has the DKIM option, you can put it in place using our guide “[How to improve email security with a DKIM record](/pages/web_cloud/domains/dns_zone_dkim)”.|
|551|User not local or invalid address – Relay denied|This is typically used as a spam prevention strategy. It says that the mail relay is not authorised for any reason to relay your message to another server than yours. Please contact your service provider.|
|552|Requested mail actions aborted – Exceeded storage allocation|The user you tried to contact no longer has space to receive messages. Unfortunately, the only solution is to contact the recipient via another method.|
|553|Requested action not taken – Mailbox name invalid|This is usually caused by an incorrect destination email address. Please check that the email address in question is correct.|
|554|Transaction failed, "No SMTP service here"|This is usually a blacklist problem. Check if your email server IP address is blacklisted ([SpamHaus](https://check.spamhaus.org/)).|
|555|MAIL FROM / RCPT TO, unrecognised or unimplemented arguments|The outgoing SMTP server cannot recognise the email address used in either your `From` or `To` settings. Please check that the email addresses entered are correct, and also check that you have not exceeded the limit set by OVHcloud: 200 mails/hour/account and 300 mails/hour/ip.|

## Go further

[Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Join our community of users on <https://community.ovh.com/en/>.
