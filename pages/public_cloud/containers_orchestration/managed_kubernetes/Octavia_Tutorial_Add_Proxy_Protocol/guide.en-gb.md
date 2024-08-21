---
title: 'Obtaining Source IP in Public Cloud Load Balancer'
excerpt: 'Learn how to configure OVHcloud Public Cloud Load Balancer to obtain the client source IP.'
updated: 2024-08-05
---

## Objective

**This guide explains how to configure Public Cloud Load Balancer to obtain the client source IP in the context of OVHcloud without using Kubernetes CCM.**
- The Public Cloud Load Balancer (based on Octavia OpenStack project) provides a lot of features, follow [the guide](pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service/) to learn more.

## Requirements

- Access to an OpenStack environment on OVHcloud with Public Cloud Load Balancer configured. [Step-by-Step Guide](pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service/)  & [Getting started with Load Balancer on Public Cloud](pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api/)
- Administrative rights to create and modify Public Cloud LoadBalancer services.
    - Administrative Rights Needed:
    
    Root Access on Backend Servers: Ensure you have root or superuser access to the backend servers. This is essential for installing and configuring software (like NGINX) and for making necessary changes to the server’s settings.
    Project Admin Role in OVHcloud: Ensure you are assigned the Project Admin role within your OVHcloud OpenStack project. This role allows you to create, modify, and manage Public Cloud LoadBalancer services.
    Administrative Access to the OVHcloud Environment: Ensure you have sufficient permissions to interact with network and compute resources within your OVHcloud environment. This includes creating instances, modifying network settings, and managing security groups.

     - Where to Check/Assign Rights:
    
    OVHcloud Control Panel: Verify that you have the appropriate roles and permissions in your OVHcloud Control Panel under the "Users & Roles" section of your project. If additional permissions are needed, consult with your project administrator to ensure you have the necessary access.
  
- Create an instance on OVHcloud and install a web server that will serve as the backend. For example, we will use an NGINX server.

## Instructions

### Step 1: Configure the Backend Server on OVHcloud

In this guide you will create an instance on OVHcloud and install a web server (NGINX) that will serve as the backend.

#### 1. Create an instance on OVHcloud
   
Access your [OVHcloud Control Panel](/links/manager), go to the "Public Cloud" section and create a new instance. For detailed instructions, see the official documentation: [Creating an instance on OVHcloud](https://docs.ovh.com/en/public-cloud/create-vm/).

#### 2. Install NGINX on the instance

Connect to the instance via SSH
   
Update packages and install NGINX:

```bash
sudo dnf install -y nginx
```

#### 3. Configure NGINX to display request information

Modify the NGINX configuration to display request information, including the client's IP address and headers:

```bash
sudo nano /etc/nginx/nginx.conf
```

Add the following directives in the `http` block:

```nginx
    user nginx;
    worker_processes auto;
    error_log /var/log/nginx/error.log;
    pid /run/nginx.pid;

    events {
    worker_connections 1024;
    }

    http {
        include /etc/nginx/mime.types;
        default_type application/octet-stream;
        log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
        access_log /var/log/nginx/access.log main;

        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;

        server {
        listen 80;
        server_name localhost;

            location / {
                add_header X-Forwarded-For $http_x_forwarded_for;
                add_header X-Forwarded-Proto $http_x_forwarded_proto;
                return 200 "Client IP: $http_x_forwarded_for\nHeaders: $http_x_forwarded_proto\n";
                }
        }
    }
```
Restart NGINX to apply the changes:

```bash
sudo systemctl restart nginx
```

### Step 2: Create the Public Cloud LoadBalancer with HTTP Protocol on OVHcloud

#### 1. Create the Public Cloud Load Balancer

Access the OpenStack interface on OVHcloud, then create a Public Cloud LoadBalancer:

```bash
openstack loadbalancer listener create --name <listener-name> --protocol HTTP --protocol-port <protocol-port> --insert-headers "X-Forwarded-For=True,X-Forwarded-Proto=True" <loadbalancer-id>
```

**Example Result:**

```plaintext
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| ...                 | ...                                  |
| vip_address         | 192.168.0.57                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+
```

#### 2. Create a backend pool

```bash
openstack loadbalancer pool create --name <pool-name> --lb-algorithm ROUND_ROBIN --listener <listener-name> --protocol HTTP
```

**Example Result:**

```plaintext
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| admin_state_up       | True                                 |
| ...                  | ...                                  |
| id                   | <pool_id>                            |
| ...                  | ...                                  |
+----------------------+--------------------------------------+
```

#### 3. Add members to the pool (the backend instances)

```bash
openstack loadbalancer member create --subnet-id <subnet-id> --address <instance-ip-1> --protocol-port <protocol-port> <pool-id>
openstack loadbalancer member create --subnet-id <subnet-id> --address <instance-ip-2> --protocol-port <protocol-port> <pool-id>
```

**Example Result:**

```plaintext
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 192.168.0.27                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+
```

```plaintext
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 192.168.0.96                         |
| ...                 | ...                                  |
+---------------------+--------------------------------------+
```

### Step 3: Verify the Configuration

#### 1. Get the VIP address of the Public Cloud LoadBalancer:

```bash
openstack loadbalancer show my-loadbalancer -c vip_address -f value
```

**Example Result:**

```plaintext
192.168.0.57
```

#### 2. Send an HTTP request to the LoadBalancer's VIP address

```bash
curl http://192.168.0.57
```

**Example Result:**

```plaintext
Client IP: <your_source_ip>
Headers: <forwarded_headers>
```

## Go further

- [Creating and connecting to your first Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- [Managing subnets in OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html){.external}.
- [Public Cloud Load Balancer](https://docs.openstack.org/octavia/latest/){.external}.

Join our [community of users](/links/community).
