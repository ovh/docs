---
title: "How to use an L3 router to route packets between different networks/subnets"
excerpt: "Learn how to configure an L3 router (or a Linux instance acting as one) to route packets between different networks or subnets."
updated: 2024-09-12
---

## Objective

This guide explains how to configure a Layer 3 router (or a Linux instance acting as an L3 router) to route packets between different networks or subnets. It covers enabling IP routing, configuring interfaces, adding firewall rules, and making these configurations persistent.

## Requirements

- Access to a Linux instance with administrative privileges (`sudo`).
- Multiple network interfaces or the ability to configure virtual interfaces.
- `iptables` installed on the system.

## Instructions

### Step 1: Enable IP routing

To allow your system to route packets between networks or subnets, you need to enable IP forwarding:

- Temporarily enable IP forwarding by running:

  ```bash
  sudo sysctl -w net.ipv4.ip_forward=1
  ```
  
  - To make this setting persistent after reboot, add or update the following line in `/etc/sysctl.conf`:

  ```bash
  net.ipv4.ip_forward = 1
  ```

- Apply the changes immediately with:

  ```bash
  sudo sysctl -p
  ```

  ### Step 2: Configure network interfaces

If you have multiple physical network interfaces, you can assign IP addresses to each one. If you only have one interface, you can configure virtual interfaces to simulate multiple networks.

- Assign an IP address to the first subnet on `eth0`:

  ```bash
  sudo ip addr add 192.168.1.1/24 dev eth0
  ```
- Assign an IP address to the second subnet using a virtual interface `eth0:1`:
  
   ```bash
  sudo ip addr add 192.168.2.1/24 dev eth0 label eth0:1
  ```
   
- Verify the configuration:

   ```bash
  ip addr show
  ```

### Step 3: Install and configure `iptables` to allow forwarding

You need to ensure that packets can be forwarded between the subnets.

- Install `iptables` if it's not already installed:

  ```bash
  sudo dnf install iptables-services
  ```

- Add a rule to allow packet forwarding between the subnets:

  ```bash
  sudo iptables -A FORWARD -i eth0 -o eth0 -j ACCEPT
  ```

- Check the  `iptables ` rules to confirm the change:

  ```bash
  sudo iptables -L
  ```
### Step 4: Test connectivity between subnets

You can now test the routing configuration by using the `ping` command.

- Test connectivity from one subnet to the other:

  ```bash
  ping 192.168.2.1
  ```
  
If the ping is successful, the routing is working correctly.

### Step 5: Save the iptables rules

To ensure that the iptables rules persist after a reboot, save them as follows:

Save the current rules:

  ```bash
  sudo service iptables save
  ```
This will save the rules to `/etc/sysconfig/iptables` and load them automatically on startup.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
   
