---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

### What is a VPS, and what is it used for?

A virtual private server (VPS) is used for hosting websites (e-commerce, content, visual media) and software applications (portals, extranets, collaborative solutions, wikis, CRM). Unlike shared hosting, the data is isolated onto a virtual machine which is dedicated to the user.

The VPS is a perfect compromise between web hosting plans and physical servers, combining reliability with the high performance of a dedicated server — but without the difficulty of managing a server's physical hardware.

### How do I choose between a VPS and a web hosting plan?

Using a VPS is the next logical step up from using a web hosting plan. Virtual private servers offer a wider range of options, and more flexibility in terms of configuration, access and features (root access, Apache PHP.init). You can also install an SSL certificate and any other software you want.

However, we would like to emphasize the importance of choosing the right VPS for you. A VPS needs to be configured in a way that suits your application requirements, and the growth of your business.

### What are the advantages of a VPS, compared to a dedicated server?

The advantage of a VPS is that you don’t have to worry about hardware management — so you would not need to monitor the status of disks, RAM, and CPU. They are adapted to host most types of web projects that are moderately sized.  
We recommend using a dedicated server if you want to manage the hardware aspects yourself, build more elaborate architectures, create an infrastructure that includes a private network (vRack), and deploy other complex solutions that are not web services.

As a general rule, users with a growing volume of web activity either move up to dedicated servers, or Public Cloud solutions. These services offer more complex, flexible infrastructures that can adapt to a high level of growth.

### What are the differences between VPS and Public Cloud solutions?

A VPS is a solution adapted for pre-production and production environments that don’t need constant performance.  
The OVHcloud Public Cloud offers a multi-server infrastructure, with high availability for servers. vRack, a private network service, is also available with this service.

### How do I choose my OVHcloud VPS?

To choose a VPS adapted to your needs, please check the following:

- The quantity of resources required (processor, memory, disk space, bandwidth, etc.)
- The operating system required (Linux or Windows)
- The technical requirements that are essential for the application to work properly (for example: a database's read/write speed requirement)

This will help you make the right choice from our VPS solutions:

- **VPS Starter**: Entry-level server to test our solution (with a Linux distribution only).
- **VPS Value, Essential and Comfort**: Ideal for hosting websites, e-commerce services or monitoring systems.
- **VPS Elite**: Adapted for e-commerce websites and applications that require more CPU and memory resources.
- **VPS Limited Edition** (Limited quantities): This VPS solution offers increased performance, which is a major advantage when it comes to hosting complex websites, resource-intensive applications, and even game servers. This offer is limited and only valid until stocks run out.

> [!primary]
> You can upgrade a Limited Edition VPS to another VPS from the same range, but for technical reasons, you cannot upgrade a Limited Edition VPS to a VPS from another range (Starter, Value, Essential or Comfort).

### Who can use a VPS?

Using a VPS requires basic knowledge of server administration. It is essential for managing the operating system (Linux or Windows) installed on the machine, and configuring the applications. Think you might need a VPS, but don’t have the technical knowledge required? We recommend getting in touch with one of our [partners](/links/partner). 

If you would like to get guaranteed resources but don't know how to manage servers, we would recommend [Performance web hosting plans](/links/web/hosting-performance-offer).

### How do I connect to my VPS?

You can log in to your VPS remotely, using the credentials provided by email after the service delivery.  
The connection method depends on which operating systems are in use.

All the details are set out in our guide on [how to get started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Can I host several websites on a VPS?

Yes. A VPS can be partitioned, and organised to suit your requirements. This means you can use it to host several websites or projects, by allocating a private space to each one. You choose the volume of each space, too. To simplify how you do this, you can install a web hosting control panel like Plesk or cPanel.

### Is my VPS backed up?

It is advisable to apply an appropriate backup strategy according to the sensibility of your data.  
Visit our [VPS web page](/links/bare-metal/vps-options) to learn more about the available options.

### How do I secure my VPS?

By default, the VPS is provided "bare", and there is no security configuration applied. For this reason, the first thing you need to do when you receive a VPS is configure security measures for it.  
To do this, please refer to our guide on [Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

### What bandwidth is allocated to my VPS? Is it guaranteed?

The bandwidth listed on our solution pages is guaranteed. It is the minimum amount allocated to you.

### Which SLA is applied to my VPS?

OVHcloud offers a 99.9% SLA across the VPS ranges.

<a name="backupstorage"></a>

### How can I access my backup storage from an IP address outside my service? 

Access to the backup storage of your VPS (FTP storage) might be restricted to IP addresses linked to a service within your OVHcloud customer acccount.

In order to add other IP addresses from which to access, you can use the OVHcloud API.  
This will allow you to retrieve your backup data from a different service through various protocols (FTP, NFS, CIFS).

> [!warning]
> Only OVHcloud IP addresses can be authorized.
>

Log in to the [OVHcloud API console](/links/api) with your customer account credentials and use the following call:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Edit the parameters as follows:

- `serviceName`: Enter the internal name of your VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: Set to `true` if applicable.
- `ftp`: Set to `true` if applicable.
- `ipBlock`: Enter the IP address that will have access, in the form `203.0.113.100/32`.
- `nfs`: Set to `true` if applicable.

Click the button `EXECUTE`{.action}.

To verify that your IP address is authorized, use the following call:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>

## Go further

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).