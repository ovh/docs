---
title: 'Obtaining Source IP in Octavia'
excerpt: 'Learn how to configure Octavia to obtain the client source IP in the context of OVHcloud without using Kubernetes CCM.'
updated: 2024-07-29
---

## Objective

**This guide explains how to configure Octavia to obtain the client source IP in the context of OVHcloud without using Kubernetes CCM.**

## Requirements

- Access to an OpenStack environment on OVHcloud with Octavia configured.
- Administrative rights to create and modify LoadBalancer services.
- A backend server ready to be used.

## Instructions

### Step 1: Configure the Backend Server on OVHcloud

Create an instance on OVHcloud and install a web server that will serve as the backend. For example, we will use an NGINX server:

1. **Create an instance on OVHcloud**:
   
   Access your OVHcloud Control Panel, go to the "Public Cloud" section, and create a new instance. For detailed instructions, see the official documentation: [Creating an instance on OVHcloud](https://docs.ovh.com/en/public-cloud/create-vm/).

2. **Install NGINX on the instance**:

    Connect to the instance via SSH
   
    Update packages and install NGINX:

    ```bash
    sudo dnf install -y nginx
    ```

4. **Configure NGINX to display request information**:

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
            listen 80 proxy_protocol;
            server_name localhost;

            set_real_ip_from 0.0.0.0/0;
            real_ip_header proxy_protocol;

            location / {
                return 200 "Client IP: $proxy_protocol_addr\nHeaders: $http_x_forwarded_for\n";
            }
        }
    }
    ```

    Restart NGINX to apply the changes:

    ```bash
    sudo systemctl restart nginx
    ```

### Step 2: Create the LoadBalancer with HTTP Protocol on OVHcloud

1. **Create the Octavia LoadBalancer**:

    Access the OpenStack interface on OVHcloud, then create a LoadBalancer:

    ```bash
    openstack loadbalancer create --name my-loadbalancer --vip-subnet-id <subnet-id>
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

2. **Add a listener with the HTTP protocol and required headers**:

    ```bash
    openstack loadbalancer listener create --name my-listener --protocol HTTP --protocol-port 80 --insert-headers "X-Forwarded-For=True,X-Forwarded-Proto=True" <loadbalancer_id>
    ```

    **Example Result:**
    ```plaintext
    +-----------------------------+--------------------------------------+
    | Field                       | Value                                |
    +-----------------------------+--------------------------------------+
    | admin_state_up              | True                                 |
    | ...                         | ...                                  |
    | id                          | <listener_id>                        |
    | ...                         | ...                                  |
    +-----------------------------+--------------------------------------+
    ```

3. **Create a backend pool**:

    ```bash
    openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN --listener my-listener --protocol HTTP
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

4. **Add members to the pool (the backend instances)**:

    ```bash
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance_ip1> --protocol-port 80 my-pool
    openstack loadbalancer member create --subnet-id <subnet-id> --address <instance_ip2> --protocol-port 80 my-pool
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

1. **Get the VIP address of the LoadBalancer**:

    ```bash
    openstack loadbalancer show my-loadbalancer -c vip_address -f value
    ```

    **Example Result:**
    ```plaintext
    192.168.0.57
    ```

2. **Send an HTTP request to the LoadBalancer's VIP address**:

    ```bash
    curl http://192.168.0.57
    ```

    **Example Result:**
    ```plaintext
    Client IP: <your_source_ip>
    Headers: <forwarded_headers>
    ```

## Additional Resources

- Official OVHcloud documentation on [creating an instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- Documentation on [managing subnets in OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html).
- Documentation on [Octavia Load Balancer](https://docs.openstack.org/octavia/latest/).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
