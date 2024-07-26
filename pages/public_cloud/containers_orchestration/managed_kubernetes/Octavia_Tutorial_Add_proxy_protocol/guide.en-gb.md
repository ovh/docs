---
title: 'Obtaining Source IP in Octavia'
excerpt: 'Learn how to configure Octavia to obtain the client source IP in the context of OVHcloud without using Kubernetes CCM.'
updated: 2024-07-26
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

    Connect to the instance via SSH:

    ```bash
    ssh almalinux@<instance_ip>
    ```

    Update packages and install NGINX:

    ```bash
    sudo dnf install -y nginx
    ```

3. **Configure NGINX to display request information**:

    Modify the NGINX configuration to display request information, including the client's IP address:

    ```bash
    sudo nano /etc/nginx/nginx.conf
    ```

    Add the following directives in the `http` block:

    ```nginx
    http {
        ...
        server {
            listen 80 proxy_protocol;
            set_real_ip_from 0.0.0.0/0;
            real_ip_header proxy_protocol;
            location / {
                return 200 "Client IP: $proxy_protocol_addr\n";
            }
        }
        ...
    }
    ```

    Restart NGINX to apply the changes:

    ```bash
    sudo systemctl restart nginx
    ```

### Step 2: Create the LoadBalancer with PROXY Protocol on OVHcloud

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

2. **Add a listener with the PROXY protocol**:

    ```bash
    openstack loadbalancer listener create --name my-listener --protocol TCP --protocol-port 80 my-loadbalancer
    ```

    **Example Result:**
    ```plaintext
    +-----------------------------+--------------------------------------+
    | Field                       | Value                                |
    +-----------------------------+--------------------------------------+
    | admin_state_up              | True                                 |
    | ...                         | ...                                  |
    | id                          | f4fdba2e-b8b3-4882-bd7b-85198885133f |
    | ...                         | ...                                  |
    +-----------------------------+--------------------------------------+
    ```

3. **Create a backend pool**:

    ```bash
    openstack loadbalancer pool create --name my-pool --lb-algorithm ROUND_ROBIN --listener my-listener --protocol TCP
    ```

    **Example Result:**
    ```plaintext
    +----------------------+--------------------------------------+
    | Field                | Value                                |
    +----------------------+--------------------------------------+
    | admin_state_up       | True                                 |
    | ...                  | ...                                  |
    | id                   | cd68fa45-14d8-40ba-8e59-691e2bf7ac5f |
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
    | address             | 192.168.0.2                          |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

    ```plaintext
    +---------------------+--------------------------------------+
    | Field               | Value                                |
    +---------------------+--------------------------------------+
    | address             | 192.168.0.3                          |
    | ...                 | ...                                  |
    +---------------------+--------------------------------------+
    ```

### Step 3: Configure the Health Monitor

1. **Create a health monitor**:

    ```bash
    HOME="/c/Users/dell" openstack loadbalancer healthmonitor create --delay 5 --timeout 3 --max-retries 3 --type HTTP --url-path / --name my-health-monitor my-pool
    ```

    **Example Result:**
    ```plaintext
    +-------------------+--------------------------------------+
    | Field             | Value                                |
    +-------------------+--------------------------------------+
    | id                | 3a118bb8-91de-4be7-99d6-1bd40a12b7b8 |
    | ...               | ...                                  |
    +-------------------+--------------------------------------+
    ```

### Step 4: Verify the Configuration

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
    Client IP: <your_public_ip>
    ```

## Additional Resources

- Official OVHcloud documentation on [creating an instance](/pages/public_cloud/compute/public-cloud-first-steps/).
- Documentation on [managing subnets in OpenStack](https://docs.openstack.org/neutron/latest/admin/deploy-ovs-selfservice.html).
- Documentation on [Octavia Load Balancer](https://docs.openstack.org/octavia/latest/).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
