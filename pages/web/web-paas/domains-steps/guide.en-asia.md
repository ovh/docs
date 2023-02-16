---
title: Custom Domains - Step by step guide
slug: domains-steps
section: Domains
order: 7
updated: 2021-06-02
---

**Last updated 2nd June 2021**


## Objective  

Configuring custom domains on Web PaaS is a simple two or three step process. You can either use the Web PaaS management console or the CLI to configure your project for production. Once you are familiar with it the whole process usually takes a couple of minutes.


> [!primary]  
> The order of operations is not really important, but if you are migrating a site from an existing provider, you should first configure the domain on the Web PaaS side, and only then switch DNS over.
> 

## 2. (CDN version) Configure your DNS provider

If you are serving the site through a CDN, configure your DNS provider to point at your CDN account.  The address or CNAME to set for that will vary with the CDN provider.

## 2. (Non-CDN version) Configure your DNS provider

Configure your DNS provider to point your domain to your Web PaaS Master environment domain name.

The way to do so will vary somewhat depending on your registrar, but nearly all registrars should allow you to set a CNAME.  Some will call it an Alias or similar alternate name, but either way the intent is to say "this domain should always resolve to... this other domain".

You can access the CNAME target by running `webpaas environment:info edge_hostname`.  That is the host name by which Web PaaS knows your environment. Add a CNAME record from your desired domain (`www.example.com`) to the value of the `edge_hostname`.

If you have multiple domains you want to be served by the same application you will need to add a CNAME record for each of them.

Note that depending on your registrar and the TTL you set, it could take anywhere from 15 minutes to 72 hours for the DNS change to fully propagate across the Internet.

If you are using an apex domain (`example.com`), see the additional information about [Apex domains and CNAME records](dns).

If you are planning to host multiple subdomains on different projects, see the additional information about [Subdomains](subdomains) *before* you add your domain to Web PaaS.

## 3. (Non-CDN version) Set your domain in Web PaaS

> [!primary]  
> If using a CDN, skip this step. The CDN should already have been configured in advance to point to Web PaaS as its upstream.
> 

This step will tell the Web PaaS edge layer where to route requests for your web site. You can do this through the CLI with `webpaas domain:add example.com` or  [using the managment console](../administration-web/configure-project#domains).

You can add multiple domains to point to your project. Each domain can have its own custom SSL certificate, or use the default one provided.

If you require access to the site before the domain name becomes active you can create a `hosts` file entry on your computer and point it to the IP address that resolves when you access your master project branch.

To get the IP address, first run `webpaas environment:info edge_hostname`.  That will print the "internal" domain name for your project.  Run `ping <that domain name>` to get its IP address.

In OS X and Linux you can add that IP  to your `/etc/hosts` file.  In Windows the file is named `c:\Windows\System32\Drivers\etc\hosts`. You will need to be a admin user to be able to change that file. So in OS X you will usually run something like `sudo vi /etc/hosts`. After adding the line the file will look something like:

![Hosts File](images/hosts-file.png "0.4")

Alternatively there is also an add-on for Firefox and Google Chrome that allow you to dynamically switch DNS IP addresses without modifying your `hosts` file.

* [Firefox LiveHosts add-on](https://addons.mozilla.org/en-US/firefox/addon/livehosts/)
* [Google Chrome LiveHosts add-on](https://chrome.google.com/webstore/detail/livehosts/hdpoplemgeaioijkmoebnnjcilfjnjdi?hl=en)

> [!primary]  
> Do not put the IP address you see here, but the one you got from the ping command.
> 
> *Also, remember to remove this entry after you have configured DNS!*
> 

Sometimes it can take Let's Encrypt a couple of minutes to provision the certificate the first time. This is normal, and only means the first deploy after enabling a domain may take longer than usual.  Setting the CNAME record with your DNS provider first helps to minimize that disruption.

## 4. Bonus steps (Optional)

### Configure health notifications

While not required, it's strongly recommended that you set up [health notifications](../integrations-notifications) to advise you if your site is experiencing issues such as running low on disk space.  Notifications can be sent via email, Slack, or PagerDuty.


