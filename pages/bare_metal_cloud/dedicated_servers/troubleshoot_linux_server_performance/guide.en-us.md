---
title: "Troubleshoot CPU and Disk I/O Usage on a Linux Dedicated Server"
excerpt: "Identify CPU, memory, disk I/O, and load-related performance issues on an OVHcloud dedicated server."
updated: 2026-09-27
---

## Objective

Performance issues on a Linux server can be caused by high CPU usage, disk I/O, memory pressure, or a high system load. Linux provides several command-line tools that can help identify the source of these issues.

**This guide explains how to troubleshoot CPU, memory, disk I/O, and system load issues on an OVHcloud dedicated server.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal)
- SSH access to the server
- Root or sudo access

## Instructions

### Check the system load
Use `uptime` to check the current system load:

```bash
uptime
```
The command displays the load average for the last 1, 5, and 15 minutes.

A temporary increase in load does not necessarily indicate a problem. Compare the load with the number of available CPU cores and investigate further if the load remains high.

### Identify CPU-consuming processes

Use `top` to view running processes and their CPU and memory usage:

```bash
top
```

Look for processes consistently consuming a high percentage of CPU resources.

Press `q` to exit `top`.

### Check CPU usage and I/O wait

The `mpstat` command provides CPU usage statistics:

```bash
mpstat -P ALL 1 5
```

Pay particular attention to:

* `%usr`: CPU time used by user processes
* `%sys`: CPU time used by the kernel
* `%iowait`: CPU time waiting for I/O operations
* `%idle`: unused CPU capacity

A consistently high `%iowait` value can indicate that processes are waiting for storage operations to complete.

> [!warning]
> A high load average does not always mean that the CPU is overloaded. Check CPU usage and I/O wait before determining the cause.

### Check disk I/O

Use `iostat` to examine CPU and disk I/O statistics:

```bash
iostat -xz 1 5
```

If `iostat` is not available, install the package that provides it according to your Linux distribution.

Pay particular attention to:

* `r/s` and `w/s`: read and write operations per second
* `rkB/s` and `wkB/s`: read and write throughput
* `await`: average I/O request time
* `%util`: percentage of time the device is busy

A disk with sustained high utilization or increasing I/O latency may require further investigation.

### Identify processes generating disk I/O

Use `pidstat` to identify processes performing disk operations:

```bash
pidstat -d 1 5
```

Review the processes generating significant read or write activity.

This can help identify applications or services responsible for increased disk activity.

### Check memory and swap usage

Use `free` to check available memory and swap usage:

```bash
free -h
```

Pay attention to the `available` memory and the amount of swap in use.

You can also use `vmstat` to observe memory, processes, and I/O activity over time:

```bash
vmstat 1 5
```

Sustained swap activity may indicate memory pressure.

### Check filesystem usage

Use `df` to check available disk space:

```bash
df -h
```

A filesystem that is close to full can cause application and system issues.

Investigate directories consuming significant disk space before the filesystem reaches 100% usage.

### Check system logs

Use `journalctl` to check warnings and errors from the current boot:

```bash
journalctl -p warning..alert -b
```

Review the output for errors related to storage, filesystem, kernel, services, or hardware.

## Interpreting the results

Use the collected information to determine where the bottleneck is located:

* **High CPU usage:** identify the processes consuming CPU with `top`.
* **High I/O wait:** investigate storage activity with `iostat` and `pidstat`.
* **High disk utilization:** identify the affected device and processes generating I/O.
* **Low available memory or sustained swap activity:** investigate memory-consuming processes.
* **High filesystem usage:** identify and clean up unnecessary files.
* **No significant resource usage:** check application logs and other services for the source of the issue.

If the tests indicate a possible hardware problem, use the [hardware diagnostics guide](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose) to perform additional tests in rescue mode.

## About the contributor

This guide was contributed by **David B**, a Linux server administrator specializing in server management, troubleshooting, and infrastructure support.

For Linux server management services, see [iServerSupport](https://iserversupport.com/linux-server-management/).


## Go further

[Hardware Diagnostics in Rescue Mode on a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Securing a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
