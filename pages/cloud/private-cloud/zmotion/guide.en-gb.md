---
title: Zmotion
slug: use-zmotion
excerpt: Find out how the Zmotion process works
legacy_guide_number: '4161650'
section: OVH Features
order: 8
---

**Last updated 13th July 2020**

## Objective

OVHcloud Zmotion is a technology that transfers data across a customer private network between two physical storage arrays.

## Instructions

### Description

Our datastores run NFS on ZFS in a home storage array called *Leclerc*. In order to gain greater flexibility in the management of our hardware, we have developed a way to hot-migrate the stock of ZFS data from one hardware device to another.

This is called "Zmotion" (for "ZFS motion").

The goal of Zmotion is to free a datastore without any vCenter action necessary (no vMotion, no cloning...) and without any action from the customer's side.

![zmotion](images/zmotionPrez.png){.thumbnail}

### Steps in detail

- A free datastore, on another *Leclerc*, is reserved in our data centre to push all the data.
- Our network properties are set on the destination datastore.
- Data transfer begins in a private network dedicated to the client.
- When all data is transferred, the NFS service moves from one table to another.

From VMware's perspective, there is no downtime.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
