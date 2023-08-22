---
title: "MTU recommended for machines reaching the OVH GW SSL"
excerpt: "Configure MTU value"
updated: 2023-08-22
---

# MTU recommended for machines reaching the OVH GW SSL

- The Maximum Transmission Unit (MTU) on a network level is a measure representing the largest data packet that a device connected to the network can accept.
- We recommend setting your MTU to 1500, not just on the outbound interface but this needs to be configured end-to-end in your infrastructure which is talking to the OVHcloud PCC infrastructure. This will avoid having communication/network issue when using backup software for example.
- Having set a value higher than 1500, you may encounter timeouts due to network packet not received on the Private Gateway on OVH Cloud side.


The solution that OVHCloud recommends is to set up your MTU to 1500.

- To check the MTU value that is currently used on your network interface, you can use the following command:
   - Linux: *"ifconfig | grep mtu"*
   - Windows: *"netsh int ipv4 show subinterface"*


- If you need to change the MTU value:
   - Linux:
      - Temporary change the mtu: *"ifconfig **<Interface_name>** mtu **<mtu_size>** up"*
      - Permanently change the MTU:
         - In dynamic IP addressing, the MTU size is set by DHCP. You will need to configure the DHCP configuration file located at *"/etc/dhcp/dhclient.conf"*.
         - For static IP address, you will need to edit the network interface configuration file located at *"/etc/network/interfaces"*.
   - Windows: *"netsh int ipv4 set subinterface **<Interface_name>** mtu=**<mtu_size>** store=persistent"*.


  
Join our community of users on <https://community.ovh.com/en/>.
