---
title: Use flexible resources
slug: create-apps-flexible-resources
section: Create-Apps
---

**Last updated 31st August 2023**



## Objective  

Sometimes you have apps that are more memory-intensive.
In such cases, you can adjust the amount of memory using the `resources` key in your [app configuration](./_index.md).
All memory must stay within the limits set by your plan.

> [!primary]  
> 
> If you don't understand how your resources are being allocated or are having issues configuring them,
> [open a support ticket](https://console.platform.sh/-/users/~/tickets/open?category=high-mem-plans).
> The Support team can look into the details of your project.
> 
> 

The `resources` key has the following possible options:

| Name           | Type      | Minimum | Description                                                               |
| -------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `base_memory`  | `integer` | 64      | The base amount of memory in MB to be given to the container. Up to 1024. |
| `memory_ratio` | `integer` | 128     | The amount of memory in MB that increases with CPU size. Up to 1024.      |

The memory allocated to the container is calculated as the base memory plus the memory ratio multiplied by the CPU:
`memory = base_memory + (memory_ratio * CPU)`.

When the `resources` key is set, the CPU sizes come from the following table:

| Size | CPU  |
| ---- | ---- |
| XS   | 0.25 |
| S    | 0.5  |
| M    | 1    |
| L    | 2    |
| XL   | 4    |
| 2X L | 8    |

So you might have the `resources` set as follows:

```yaml {configFile="app"}
resources: 
    base_memory: 128
    memory_ratio: 180
```

If your app is set with a `size` of `S`, it gets 218&nbsp;MB of memory: `128 + (0.5 * 180) = 218`.
If you change the `size` to `L`, it gets 488&nbsp;MB of memory: `128 + (2 * 180) = 488`.

## Other containers and workers

Setting the `resources` key on one app doesn't affect other apps in your project.
So you can set it for one app and have your other apps be assigned resources automatically.

Workers based on apps with the `resources` key default to inheriting the set resources.
To free memory for your main app,
set the values within the `resources` key to be lower for your workers.

## Performance profiles

The two options for `resources` allow for different performance profiles.
Some apps, such as many PHP apps, don't require so much memory to start
but need a lot of memory for each parallel request.
Such apps benefit from a low `base_memory` and a high `memory_ratio`.

Other apps, such as those with a persistent runtime including many Java and Go apps,
require more memory to get started
but don't need much memory for each parallel request.
Such apps benefit from a high `base_memory` and a low `memory_ratio`.
