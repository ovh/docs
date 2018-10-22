---
title: 'ProxyProtocol get Source IP'
slug: proxyprotocol
excerpt: 'Get real visitor IP using OVH Load Balancer with ProxyProtocol'
section: 'Setting up'
---

## Introduction
In this case, we want to get sourceIP, scheme trouth OVH API LoadBalancing, without install our SSL Certitificate on it. This is helpfull if you have many domains with many SSL certificates.


## Requirements
We assume you have already an OVH Load Balancer HTTP configured, if not follow [https://docs.ovh.com/gb/en/load-balancer/using-iplb/](https://docs.ovh.com/gb/en/load-balancer/using-iplb/)

You have :

- An OVH Load Balancer service
- Nginx (or Apache with mod_proxyprotocol) on an OVH backend
- A domain (option)
- A SSL certificiate (option)


### Nginx Configuration
For this example we use this minimal nginx configuration on each backend.


```bash
log_format proxyprotocol '$proxy_protocol_addr - $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent  "$http_referer" "$http_user_agent" "$request_time"';
server {
    listen 80;
    listen [::]:80;

    server_name domain.tld www.domain.tld;
    root /var/www/domain.tld/htdocs;
    access_log    /var/www/domain.tld/logs/access.log;
}
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name domain.tld www.domain.tld;
    root /var/www/domain.tld/htdocs;

    ssl_certificate /etc/letsencrypt/live/domain.tld/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/domain.tld/privkey.pem;
    access_log    /var/www/domain.tld/logs/access.log;
}
server {
    listen 8080 proxyprotocol;
    listen [::]:8080 proxyprotocol;

    server_name domain.tld www.domain.tld;
    root /var/www/domain.tld/htdocs;
    access_log    /var/www/domain.tld/logs/access.log proxyprotocol;
}
server {
    listen 4443 ssl proxyprotocol;
    listen [::]:4443 ssl proxyprotocol;

    server_name domain.tld www.domain.tld;
    root /var/www/domain.tld/htdocs;

    ssl_certificate /etc/letsencrypt/live/domain.tld/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/domain.tld/privkey.pem;
    access_log    /var/www/domain.tld/logs/access.log proxyprotocol;
}
```

- Port 80 / 443 are used for direct connexion to backend (for test, management, ...)
- Port 8080 / 4443 are used with LoadBalancer

You can't use ProxyProtocol and HTTP on the same port, and theses protocols aren't cross-compatible.


### Infrastructure
|Backend#|Public  IP|Zone|
|---|---|---|
|backend_1|213.186.0.1|rbx|
|backend_2|213.186.0.2|rbx|


## Configuration

### Add backends
Create a new farm for each port on backend.


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm
> 
|Parameter|Call 1|Call 2|
|---|---|---|
|serviceName *|ip-1.2.3.4|ip.1.2.3.4|
|balance|roundrobin|roundrobin|
|port|8080|4443|
|probe|tcp|tcp|
|stickiness|sourceIP|sourceIP|
|zone *|rbx|rbx|

|Parameter|Return 1|Return 2|
|---|---|---|
|id|1000|10001|


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 
|Parameter|Call 1|Call 2|Call 3|Call 4|
|---|---|---|---|---|
|serviceName *|ip-1.2.3.4|ip.1.2.3.4|ip.1.2.3.4|ip.1.2.3.4|
|farmId *|1000|1000|1001|1001|
|address *|213.186.0.1|213.186.0.2|213.186.0.1|213.186.0.2|
|backup|false|false|false|false|
|chain|||||
|cookie|||||
|port|||||
|probe|true|true|true|true|
|proxyProtocolVersion|v1|v1|v1|v1|
|ssl|false|false|false|false|
|status *|active|active|active|active|
|weight|1|1|1|1|

|Parameter|Return 1|Return 2|Return 3|Return 4|
|---|---|---|---|---|
|id|2000|20001|20002|20003|


### Add frontend

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 
|Parameter|Call 1|Call 2|
|---|---|---|
|serviceName *|ip-1.2.3.4|ip.1.2.3.4|
|allowedSource|||
|dedicatedIpfo|||
|defaultBackendId|1000|1001|
|defaultSslId|||
|disabled|false|false|
|hsts|||
|httpHeader|||
|port *|80|443|
|redirectLocation|||
|ssl|||
|zone *|rbx|rbx|


### Apply changes

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

### Firewall
Don't forget to allow IPLoadbalancing trafic to your backends:


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/natIp
> 
Get IP range used by OVH Load Balancer: 10.108.0.0/16


```bash
iptables -A INPUT -s 10.108.0.0/16 -p tcp --dport 8080 -j ACCEPT
iptables -A INPUT -s 10.108.0.0/16 -p tcp --dport 4443 -j ACCEPT
```