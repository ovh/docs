---
title: "Configuring a vROps alert by the smtp protocol"
excerpt: "Find out how to create an Outbound Smtp alert in vROps"
updated: 2023-11-23
---
 
## Objective
  
**This guide shows you how to configure your SMTP server to automate the sending of alerts and reports by e-mail to vRops.**
  
## Requirements
  
- Have a working SMTP server
- Allow STMP flows between your server.

## Instructions
  
### Open the flow

The first step is to open a Flow on the Ovh API to enable vRops to communicate with your SMTP server.
To do this, simply go to [here](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/outgoingFlow~POST)

Simply fill in the API call fields. If it doesn't work, don't hesitate to check your server port openings.

| PARAMETRE | DESCRIPTION |
| :-: | :-: |
| servicename | Domain of the service |
| description | Outgoing flow description (for example, here connect to smtp) |
| ip | IP address of the remote service, e.g 123.100.200.0 |
| servicePort | Remote service port (25,465,587 ou 2525 for smtp) |

![FlowApi](images/vrops_flow_api.png){.thumbnail}

### Configuring vRops alerting
  
Once the flow has been opened. You need to configure the email alert on your vRops.
To do this, go to the `Configure` section, then the `Alerts`{.action} section.

![PannelAlert](images/vrops_alerts_pannel.png)

Several types of alerts are available, just select `Outbound Settings`.{.action}.

![PannelAlert2](images/vrops_alert_menu2.png)

You'll then see a summary of all your Outbound Settings. Click on the `ADD`{.action} button.

![AddButton](images/vrops_add_button.png)

In the `Plugin type` option, select `Standard Email Plugin`{. action}.
A series of options will appear, just fill in the fields.

| OPTION | DESCRIPTION |
| :-: | :-: |
|Use Secure Connection | Activates secure communication encryption using SSL/TLS. If you select this option, you must select a method in the Secure Connection Type drop-down menu. |
| Requires Authentication | Activates authentication on the email user account that you use to configure this SMTP instance. If you select this option, you must provide a password for the user account. | 
| SMTP Host |  URL or IP address of your email host server. |
| SMTP Port | Default port SMTP uses to connect with the server.  |
| Secure Connection Type | Select either SSL/TLS as the communication encryption method used in your environment from the drop-down menu. You must select a connection type if you select Use Secure Connection. |
| User Name | Email user account that is used to connect to the email server.  |
| Password | Password for the connection user account. A password is required if you select Requires Authentication. |
| Sender Email Address | Email address that appears on the notification message.  |
| Sender Name | Displayed name for the sender email address.  |
| Receiver Email Address | Receiver's email address. |


![AlertConfigure](images/vrops_configure_alert.png)

>[!warning]
>
>For the sake of this documentation, the SMTP server has not configured authentication. 
>However, for obvious security reasons, we strongly advise you to do so!
>

You can test your configuration using the `Test`{.action} button at the bottom of the page.

Once completed, you should find your alert in the previous summary.

All that's left to do is to check that your alert is working properly by verifying that the emails are being received correctly.

![ResultAlert](images/vrops_result_alert.png)

### Modification of an existing alert

You can modify an existing alert by clicking on it from the menu.

![EditAlert](images/vrops_edit_alert.png){.thumbnail}

## Go further
  
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.