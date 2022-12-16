---
title: 'Hardware diagnostics'
slug: hardware-diagnostics
excerpt: 'Find out how to use diagnostic tools to identify hardware failures on your server'
section: 'Diagnostics and rescue mode'
---

**Last updated 15th December 2022**

## Objective

At some point during the life of your server, you may encounter a fault due to a hardware issue. For these issues, your server is equipped with some diagnostic tools to help identify faulty hardware components.

**This guide will show you how to diagnose hardware issues on your server.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/)
- [Rescue mode activated](https://docs.ovh.com/gb/en/dedicated/ovh-rescue/)

## Instructions

This guide details the tests you need to carry out to diagnose:

- Processors
- Network connection
- Memory
- Disk partitions

### Processors

The processor test checks the working order of your server's processor, and needs about 30 minutes to run successfully. If the server crashes during this test, then it means that the processor is faulty.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Network Connection

The network connection test checks your internal and external bandwidth. To start the test, click the button as shown below. This data is provided for information purposes only and is not a performance test.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Memory

The memory test checks the integrity of your server's RAM modules. If the server crashes during this test, then it means that the one or more of your RAM modules is faulty.

> [!warning]
> Warning, this test can be very long.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Disk Partitions

The partitions test is comprised of a disk access test and a file system check. The disk access test checks if the system can communicate with your server's hard drives. The file system check uses the `fsck -fy` command to check the entire file system.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
