---
title: 'OVH Load Balancer &#58; HTTP Header'
slug: http-headers
excerpt: 'Get HTTP Headers on your services behind OVH Load Balancer'
section: 'IP management'
---

## Introduction
With any frontend service like CDN, IP Loadbalancing in front of your services, the IP of your clients is hidden by this service.

In your log, you'll only see privateIP, and we'll fix this.


```bash
10.108.0.15 - - [22/Mar/2017:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
10.108.0.24 - - [22/Mar/2017:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
```


## Warning

You need to restrict access to your webservices from our IP Loadbalancing.

With this api call you can get IP Range of our servers.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/natIp
> 
If you accept proxy-headers (X-Forwarded-*) from anywhere, some request could bypass your security policies.


## Headers

### X-Forwarded-For
This header have inside the Ip of your client.


#### Apache

```apache
1. LogFormat "%{X-Forwarded-For}i-%h- %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" loadbalancing
2. CustomLog /chemin/fichier.log loadbalancing
```


#### Nginx

```nginx
1. log_format "%{X-Forwarded-For}i-%h- %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" loadbalancing
2. access_log /chemin/fichier.log loadbalancing
```


### X-Forwarded-Proto
You can also get the scheme used by your client to reach OVH Load Balancer. This is helpfull to redirect **HTTP** to **HTTPS**


#### Apache
With htaccess, you can redirect your customers in HTTPS.


```htaccess
1. RewriteEngine on
2. RewriteCond %{HTTP:X_Forwarded_Proto} !https
3. RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```


#### Nginx
This is not a good configuration, you'll reduce your service performance.


```bash
if ($http_x_forwarded_proto = "http") {
        return 301 https://$host/$request_uri;
}
```


#### Nginx (best)
With Nginx, it's best to use a entire VHost to redirect HTTP to HTTPS.


```bash
server {
        listen [::]:80 default_server;
        listen 80 default_server;
        server_name _;
        root /var/www/;
        location / {
                return 301 https://$server_name$request_uri;
        }
}
```


### Send headers to PHP

#### Apache

```apache
1. Header set REMOTE_ADDR %{HTTP:X_Forwarded_Proto}
```


#### Nginx
With RealIP module.


```nginx
1. real_ip_header X-Forwarded-For;
2. set_real_ip_from 10.108.0.0/16;
```
