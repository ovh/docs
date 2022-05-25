---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Getting started'
order: 1
---

## FAQ VPS

### What is a VPS, and what is it used for?

A virtual private server (VPS) is used for hosting websites (e-commerce, content, visual media) and software applications (portals, extranets, collaborative solutions, wikis, CRM). Unlike shared hosting, the data is isolated onto a virtual machine which is dedicated to the user.

The VPS is a perfect compromise between web hosting plans and physical servers, combining reliability with the high performance of a dedicated server — but without the difficulty of managing a server's physical hardware.

### How do I choose between a VPS and a web hosting plan?

Using a VPS is the next logical step up from using a web hosting plan. Virtual private servers offer a wider range of options, and more flexibility in terms of configuration, access and features (root access, Apache PHP.init). You can also install an SSL certificate and any other software you want.

However, we would like to emphasise the importance of choosing the right VPS for you. A VPS needs to be configured in a way that suits your application requirements, and the growth of your business.

### How do I choose between a VPS and Plesk web hosting?

With a Plesk web hosting plan, you are provided with a storage space that has Plesk pre-installed. You can manage your websites, but you are not the administrator of the service. You can only use it for managing your projects.
When you choose a VPS, you are the server administrator, and OVHcloud has no access to its content. This way, you are free to configure it in whatever way you like.

### What are the advantages of a VPS, compared to a dedicated server?

The advantage of a VPS is that you don’t have to worry about hardware management — so you would not need to monitor the status of hard disks, RAM, and CPU. They are adapted to host most types of web projects that are moderately sized.
We recommend using a dedicated server if you want to manage the hardware aspects yourself, build more elaborate architectures, create an infrastructure that includes a private network (vRack), and deploy other complex solutions that are not web services.

As a general rule, users with a growing volume of web activity either move up to dedicated servers, or Public Cloud solutions. These services offer more complex, flexible infrastructures that can adapt to a high level of growth.

### What are the differences between VPS and Public Cloud solutions?

A VPS is a solution adapted for pre-production and production environments that don’t need constant performance.
The OVHcloud Public Cloud offers a multi-server infrastructure, with high availability for servers. vRack, a private network service, is also available with this service.

### How do I choose my OVHcloud VPS?

To choose a VPS adapted to your needs, please check the following:

- the quantity of resources required (processor, memory, disk space, bandwidth, etc.)
- the operating system required (Linux or Windows)
- the technical requirements that are essential for the application to work properly (e.g. a database requires read/write speed)

This will help you make the right choice from our VPS solutions:

- **VPS Starter**: entry-level server to test our solution (with a Linux distribution only, no web hosting control panel)
- **VPS Value, Essential and Comfort**: ideal for hosting websites, e-commerce services or monitoring systems
- **VPS Elite**: adapted for e-commerce websites and applications that require more CPU and memory resources.


### Who can use a VPS?

Using a VPS requires basic knowledge of server administration. It is essential for managing the operating system (Linux or Windows) installed on the machine, and configuring the applications. Think you might need a VPS, but don’t have the technical knowledge required? We recommend getting in touch with one of our partners. 

If you would like to get guaranteed resources but don't know how to manage servers, we would recommend Performance web [hosting plans](https://www.ovh.ie/web-hosting/performance-web-hosting.xml).

### How do I connect to my VPS?

You will need to log in to your VPS via SSH, using the IP address, user name and password provided by email when you received your order.
From a Windows desktop, we recommend that you log in using the Putty software. On a Linux desktop, you can connect directly via the terminal.

All the details are set out in our guide on Getting [started with a VPS](../getting-started-vps/).

### Can I host several websites on a VPS?

Yes. A VPS can be partitioned, and organised to suit your requirements. This means you can use it to host several websites or projects, by allocating a private space to each one. You choose the volume of each space, too. To simplify how you do this, you can install a web hosting control panel like Plesk or cPanel.

### Is my VPS backed up?

OVHcloud does not take backups of the data hosted on your VPS. You are responsible for ensuring that your VPS is backed up.
To take backups, you can use the following options: manual backup (snapshots), or automated backup.

### How do I secure my VPS?

By default, the VPS is provided “naked”, and there is no security configuration on it. For this reason, the first thing you need to do when you receive a VPS is configure security measures for it.
To do this, please refer to our guide on Securing [a VPS](../tips-for-securing-a-vps/).

### What bandwidth is allocated to my VPS? Is it guaranteed?

The bandwidth listed on our solution pages is guaranteed. It is the minimum amount allocated to you.

### Which SLA is applied to my VPS?

OVHcloud offers a 99.9% SLA across the VPS ranges.

### How can I access my Backup Storage from an IP address outside my service ? <a name="backupstorage"></a>

Access to the backup storage of your VPS (FTP Storage) might be restricted to IP addresses linked to a service within your OVHcloud customer acccount.

In order to add other IP addresses from which to access, you can use the OVHcloud API.
This will allow you to retrieve your backup data from a different service.

> [!warning]
> Only OVHcloud IP addresses can be authorised.
>

Log in to [https://api.ovh.com/](https://api.ovh.com/) and use the following call:

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Fill in the fields as follows:

- `serviceName`: the service name of your VPS
- `cifs`: check if necessary
- `ftp`: check if necessary
- `ipBlock`: enter the IP address that will have access in the form `1.2.3.4/32`
- `nfs`: check if necessary

![screenshot 1](images/post-api.png){.thumbnail}

To verify that your IP address is authorised, use the following call:

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![screenshot 1](images/get-api.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
