---
title: "OPCP - How to configure a software RAID on a node"
excerpt: "Find out how to configure and manage a software RAID on an OpenStack Ironic node in OPCP"
updated: 2026-01-13
---

## Objective

This guide explains how to configure and manage a **software RAID** on an OpenStack Ironic baremetal node in your OPCP environment.

Software RAID allows you to create a redundancy configuration at the software level, without requiring a dedicated hardware RAID controller. This solution is particularly useful to improve the availability and storage performance of your instances.

**This guide covers:**

- Configuring software RAID via the Ironic agent interface
- Verifying the RAID configuration
- Best practices for managing software RAID

> [!warning]
> Software RAID must be configured **before** deploying an instance on the node.
> Once an instance has been deployed, changing the RAID configuration requires deleting the instance and reconfiguring the node.
> Creating or modifying a RAID array erases the data present on the disks used.
>
> Monitoring of the software RAID is the responsibility of the end customer: we do not have access to the deployed instance to manage monitoring. You should configure alerting (for example using the `mdadm --monitor` command) and integrate this monitoring into your existing monitoring tools.

## Requirements

Before you begin, make sure you have the following:

- An active [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) service.
- Access to **[Configured OpenStack CLI](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** with the required permissions (`clouds.yaml` or environment variables).
- The **admin** role and/or nodes transferred into your project.
- An available node (status `available`) or a node in maintenance mode.
- A **Linux** (GNU/Linux) system image is required for the instance. This image must include the `mdadm` package or allow its installation. VMware appliances and Windows operating systems, for example, are not compatible with this procedure.
- Basic knowledge of OpenStack Ironic and baremetal node management.

## Why use software RAID?

Software RAID provides several benefits in an OPCP environment:

- **Data redundancy**: Protection against data loss in the event of a disk failure.
- **Performance improvement**: Distribution of read/write operations across multiple disks.
- **Lower cost**: No need for a dedicated hardware RAID controller.

## Instructions

### 1. Check the disks available on the node

Before configuring RAID, you must identify the disks available on your node.

**List available nodes:**

```bash
openstack baremetal node list
```

**Check the node hardware properties:**

```bash
openstack baremetal node show <node-id>
```

### 2. Enable maintenance mode

Before any configuration change, put the node in **maintenance mode**:

```bash
openstack baremetal node maintenance set <node-id> --reason "Software RAID configuration"
```

### 3. Supported RAID level <a name="raid-levels"></a>

Ironic supports several software RAID levels. The following values are accepted in the JSON configuration:

| RAID level | JSON value | Description | Minimum number of disks |
|------------|------------|-------------|-------------------------|
| **RAID 1** | `"1"` | Mirroring | 2 |

> [!warning]
> 
> **Important constraint**: The first logical disk with `is_root_volume: true` **must be in RAID 1**. Other RAID levels (RAID 0, 5, 6, 10, etc.) are not allowed for the root volume.

It is therefore only possible to use RAID 1 for the instance deployment.

### 4. Configure software RAID

Ironic allows you to configure software RAID via the **agent** interface. This configuration is applied automatically when an instance is deployed.

#### 4.1. Check and enable the agent interface if necessary <a name="check-agent"></a>

Before configuring RAID, check the RAID interface currently configured on the node:

```bash
openstack baremetal node show <node-id> -f json | jq '.raid_interface'
```

If the output is `null` or different from `"agent"`, enable the agent RAID interface:

```bash
openstack baremetal node set <node-id> --raid-interface=agent
```

#### 4.2. Create the RAID configuration file

Create a JSON file containing the desired RAID configuration. The following example creates a RAID 1 (mirroring) array with two disks:

```bash
cat > /tmp/raid1.json <<EOF
{
  "logical_disks": [{
    "controller": "software",
    "size_gb": "MAX",
    "raid_level": "1",
    "is_root_volume": true,
    "physical_disks": [
      {"size": "<1000"},
      {"size": "<1000"}
    ]
  }]
}
EOF
```

> [!primary]
> 
> The `"size": "<1000"` parameter in `physical_disks` automatically selects disks smaller than 1000 GB. You can adjust this value according to the size of your disks or use other selection criteria.

#### 4.3. Apply the RAID configuration

Once the configuration file has been created, apply it to the node:

```bash
openstack baremetal node set <node-id> --target-raid-config /tmp/raid1.json
```

> [!primary]
> The RAID configuration is applied during the next *cleaning* cycle or deployment. If automatic cleaning is disabled, trigger a manual cleaning before setting the node back to `available`:
>
> ```bash
> openstack baremetal node clean <node-id>
> ```

#### 4.4. Check the RAID configuration

To check the RAID configuration applied on a node:

```bash
openstack baremetal node show <node-id> -f json | jq '.target_raid_config'
```

### 5. Disable maintenance mode

Once the RAID configuration is complete, disable maintenance mode:

```bash
openstack baremetal node maintenance unset <node-id>
```

### 6. Deploy an instance on the configured node

Once RAID has been configured, you can deploy an instance on the node:

```bash
openstack server create \
  --image <image-name> \
  --flavor <flavor-id> \
  --key-name <keypair-name> \
  --nic net-id=<network-id> \
  --availability-zone "nova::<node-id>" \
  <instance-name>
```

> [!success]
> 
> To make sure that your instance is deployed on the node configured with RAID, use the availability zone `nova::<node-id>`.

### 7. Check the RAID configuration after deployment

Once the instance is deployed, you can check the RAID configuration from within the instance:

**Check RAID devices:**

```bash
cat /proc/mdstat
```

**Example output:**

```
Personalities : [raid1] [raid10] [linear] [multipath] [raid0] [raid6] [raid5] [raid4]
md0 : active raid1 sda[0] sdb[1]
      500G 0 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

**Check detailed information for a RAID device:**

```bash
mdadm --detail /dev/md0
```

## Summary of main commands

| Action | Command |
|--------|---------|
| List nodes | `openstack baremetal node list` |
| Enable maintenance mode | `openstack baremetal node maintenance set <node-id>` |
| Check RAID interface | `openstack baremetal node show <node-id> -f json \| jq '.raid_interface'` |
| Enable agent RAID interface | `openstack baremetal node set <node-id> --raid-interface=agent` |
| Apply RAID configuration | `openstack baremetal node set <node-id> --target-raid-config /tmp/raid1.json` |
| Check RAID configuration | `openstack baremetal node show <node-id> -f json \| jq '.target_raid_config'` |
| Disable maintenance mode | `openstack baremetal node maintenance unset <node-id>` |
| Deploy an instance | `openstack server create --image <image-name> --flavor <flavor-id> --key-name <keypair-name> --nic net-id=<network-id> --availability-zone "nova::<node-id>" <instance-name>` |
| Check RAID status (from the instance) | `cat /proc/mdstat` |

## Best practices

- **Always configure RAID before deployment**: The configuration must be done on a node with no active instance.
- **Use maintenance mode**: Always put the node in maintenance before making any changes.
- **Regular backups**: RAID is not a backup solution; make regular backups of your data.
- **Monitor the RAID**: Set up RAID monitoring (for example with `mdadm --monitor`) and integrate alerts into your monitoring tools to quickly detect any degradation or disk failure.

## Limitations and considerations

- **Performance**: Software RAID can have an impact on CPU performance compared to hardware RAID.
- **Compatibility**: Not all operating systems support all software RAID levels.
- **Rebuild**: Rebuilding a RAID array after replacing a disk can take a long time and consume resources.

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| `Driver redfish does not support raid (disabled or not implemented). (HTTP 404)` | The RAID interface is not configured as `agent` | See the [section 4.1 - Check and enable the agent interface if necessary](#check-agent) |
| `Software RAID Configuration requires RAID-1 for the first logical disk` | The first logical disk with `is_root_volume: true` must be RAID 1 | Use RAID 1 for the root volume.<br/> See the [section 3 - Supported RAID levels](#raid-levels) |

## References

- [OpenStack Ironic Documentation - RAID Configuration](https://docs.openstack.org/ironic/latest/admin/raid.html)
- [mdadm Documentation](https://linux.die.net/man/8/mdadm)
- [OPCP Guide - Node lifecycle](/pages/hosted_private_cloud/opcp/node-lifecycle)

## Go further

If you need training or technical assistance to implement our solutions, please contact your sales representative or click on [this link](/links/professional-services) to request a quote and have your project reviewed by our Professional Services experts.

Join our [user community](/links/community).

