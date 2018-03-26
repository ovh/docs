---
title: What are the changes made to flavors from the new 2017 range?
slug: faq-what-are-the-changes-made-to-flavors-from-the-new-2017-range
excerpt: FAQ on changes to technical specifications for instances from the 2017 range.
section: Knowledge base
---


## What has changed?
Due to a large number of customer feedback, storage for the primary disk of instances is evolved into a better-performing solution which is more user-friendly and secure.

All new instances benefit from local storage on SSD, secured through RAID to offer volumes from 50GB to 800GB depending on the type of instance. This will speed up applications thanks to the low latency of SSDs.

You will no longer have to choose between "*HA*" instances and "*SSD*" instances as with the 2015 range. All the instances will be "*SSD RAID*" ones.



> [!primary]
>
> You can still use instances based on a Ceph disk
> to get the behavior of HA instances from the 2015 range. To do so,
> you just have to use the "Launch from a volume" function from OpenStack or
> directly from the OVH customer interface.
> 


## What has not changed?
Resources are still guaranteed (excluding the Sandbox range). Resources are fully available at any time.

CPU/RAM ratios also remain the same as those of the former range.