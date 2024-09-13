---
title: 'Using weight to implement maintenance on a Load Balancer member'
excerpt: 'Learn how to adjust the weight of a Load Balancer member to perform maintenance without removing it from the pool.'
updated: 2024-09-13
---

## Objective

This guide explains how to use the weight feature to temporarily remove a Load Balancer member from receiving traffic for maintenance purposes. By setting the weight to 0, the member is effectively removed from the traffic pool, allowing you to perform upgrades or maintenance without service disruption.

## Requirements

- An OVHcloud Public Cloud account.
- A [Load Balancer set up with multiple members](/pages/network/load_balancer/create_http_https/).
- [OpenStack CLI installed and configured](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api/).

## Instructions

### Step 1: Create a Load Balancer with Two Members

Use the following repository to create a Load Balancer with two members:

- [simple_http_lb](https://github.com/yomovh/tf-at-ovhcloud/tree/main/simple_http_lb)

Verify that both members are receiving traffic by running this script:

```bash
#!/bin/sh

while true; do
  curl http://<FIP>/
  sleep 1
done
```

You should see alternating responses from the two members:

```htlm
<html><head><title>Load Balanced Member 1</title></head><body><h1>You hit your OVHCloud load balancer member #1 !</h1></body></html>
<html><head><title>Load Balanced Member 0</title></head><body><h1>You hit your OVHCloud load balancer member #0 !</h1></body></html>
```

### Step 2: Set the Weight of a Member to 0

To stop traffic from being routed to a specific member, set its weight to 0:

```bash
openstack loadbalancer member set --weight 0 <pool> <member_0>
```

The member will remain in the pool, but it will no longer receive traffic.

### Step 3: Verify Member Status

After setting the weight to 0, the member status will change from `ONLINE` to `DRAINING`. You can verify this by running:

```bash
openstack loadbalancer member list <pool_name>
```

You should see:

```bash

---------------------------------------------------------------------------------------------------
id                                   name       provisioning_status  operating_status   weight
---------------------------------------------------------------------------------------------------
27cfe834-7fef-4548-b71b-fa0ce67222f8 member_1   ACTIVE               ONLINE             1
118756ba-2cae-4141-b9c2-8b18b120c8dc member_0   ACTIVE               DRAINING           0
---------------------------------------------------------------------------------------------------

```
### Step 4: Confirm Traffic is Directed to the Active Member

Run the test script again. You should now only see responses from `member_1`:

```htlm
<html><head><title>Load Balanced Member 1</title></head><body><h1>You hit your OVHCloud load balancer member #1 !</h1></body></html>
```

### Step 5: Perform Maintenance

Now that member_0 is no longer receiving traffic, you can safely perform maintenance or upgrade tasks.

### Step 6: Restore Traffic to the Member

Once the maintenance is complete, set the weight of member_0 back to its original value (e.g., 1):


```bash
openstack loadbalancer member set --weight 1 <pool> <member_0>
```
Verify that both members are now receiving traffic:


```bash
openstack loadbalancer member list <pool_name>
```

You should see both members with `ONLINE` status:

```bash

---------------------------------------------------------------------------------------------------
id                                   name       provisioning_status  operating_status   weight
---------------------------------------------------------------------------------------------------
27cfe834-7fef-4548-b71b-fa0ce67222f8 member_1   ACTIVE               ONLINE             1
118756ba-2cae-4141-b9c2-8b18b120c8dc member_0   ACTIVE               ONLINE             1
---------------------------------------------------------------------------------------------------

```

## Go further
 
Join our community of users on <https://community.ovh.com/en/>.

