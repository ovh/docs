---
title: 'Jumbo Frame settings'
slug: 'Vrack'
excerpt: 'How to set JUMBO frames'
section: 'Beginner'
---

**Last updated 17 August 2020**


## Objective

Setting the MTU Jumbo Frame in your Linux distribution.

## Requirements

Network connectivity and root rights.

Good to know : The MTU size should be identical for all the host of a same network. 

## Instructions

### Find the MTU size: <br/> 
ip link show | grep mtu

### Set a new MTU size : <br/>  
ip link set <u>Iface name</u> mtu 9000

### Set the change as final even through a reboot : <br/> 
Edit the file <u>/etc/network/interface</u> and add the following lines : <br/>

<p><b>#for a DHCP managed interface</b><br/>
Auto <u>Iface name</u> <br/>
Iface <u>Iface name</u> inet dhcp <br/>
Pre-up  /sbin/ip  link set dev <u>Iface name</u> up mtu 9000</p>

## Go Further
Join our community of users on <https://community.ovh.com/en/>.
