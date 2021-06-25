---
title: 'Deploying an OpenVPN server'
slug: openvpn
excerpt: 'Find out how to install an OpenVPN server on a VPS'
section: 'Advanced usage'
---

**Last updated 24th June 2021**

## Objective

OpenVPN is a software giving you the possibility to create a Virtual Private Network (VPN). Using the OVHcloud VPS template for an OpenVPN server, you will be able to install and use your personal VPN service within a few steps.

**This guide explains how to create your own VPN service with a VPS and OpenVPN.**

## Requirements

- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- an OVHcloud [VPS service](https://www.ovhcloud.com/en-ca/vps/)


### Installing the OpenVPN server

> [!primary]
>
If you want to use an existing VPS service, you can do so from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) by [reinstalling it with the OpenVPN template](../getting-started-vps/#reinstallvps).
> 

Order your VPS on the [product page](https://www.ovhcloud.com/en-ca/vps/). At the image selection, choose `Distribution with application`{.action} and then `OpenVPN`{.action} as the OS.

![Order VPS](images/order_vps.png){.thumbnail}

Once your VPS is installed, you will receive an email with your credentials.

![Installation email](images/opencredent2.png){.thumbnail}

Your VPN server is now ready. To log in, click on the link inside the installation email which will open the OpenVPN Client web interface. Enter your OpenVPN credentials provided in the same email.

![Login page](images/login_user.png){.thumbnail}

### Installing and using the OpenVPN client for various systems

#### On Windows

On the Client web interface, select the `Windows symbol`{.action}.

![User interface](images/windows_client.png){.thumbnail}

Save the `.msi` file and execute it.

Once installed, you can launch the client application via the Windows menu or from the taskbar.

![Win app](images/win_launch.png){.thumbnail}

Log in with your OpenVPN credentials provided in the installation email.

![Win login](images/win_login.png){.thumbnail}

You will now be communicating over the internet with the IP address of your VPN.

You can check your IP address on this web page: [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}

#### On Linux

##### **Installing the OpenVPN client**

To install the client for distributions such as Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

To install the client for distributions such as Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

You also have to download the configuration file `client.ovpn` from the OpenVPN Client web interface.

![User interface](images/ovpn.png){.thumbnail}

##### **Launching the OpenVPN client with your configuration file**

```sh
sudo openvpn --config client.ovpn
```

You will be prompted to enter your credentials:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: ******************************************
```

You will now be communicating over the internet with the IP address of your VPN.

You can check your IP address on this web page: [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### On MacOS

After logging in, select the `Apple symbol`{.action}.

![User interface](images/mac_client.png){.thumbnail}

Save the file and execute it.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Log in with your OpenVPN credentials provided in the installation email.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

You will now be communicating over the internet with the IP address of your VPN.

You can check your IP address on this web page: [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.


### Accessing your OpenVPN server

In the OpenVPN Client web interface which you can access via the URL in your installation email, click on the `Admin`{.action} button.

![User interface](images/admin_button.png){.thumbnail}

You can also add `admin` to the OpenVPN URL to reach the login page directly:

```sh
https://IP_of_your_VPS:943/admin
```

Log in with the same OpenVPN credentials provided in the email and accept the terms and conditions.

You now have access to the OpenVPN Server control panel.

![OpenVPN access server](images/admin_access.png){.thumbnail}


## Go further

[Getting started with a VPS](../getting-started-vps/)

[OpenVPN](https://openvpn.net/)

Join our user community on <https://community.ovh.com/en/>.
