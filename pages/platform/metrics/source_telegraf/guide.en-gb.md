---
title: Configure Telegraf
slug: source-telegraf
excerpt: Configure Telegraf for Metrics Data Platform
section: Source
order: 6
---

**Last updated 23 August, 2019**

## Objective

[Telegraf](https://www.influxdata.com/time-series-platform/telegraf/){.external} is a go agent written to collect, process, aggregate, and write metrics. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Telegraf

Telegraf is an agent written in Go for collecting, processing, aggregating, and writing metrics.

Design goals are to have a minimal memory footprint with a plugin system so that developers in the community can easily add support for collecting metrics from local or remote services.

Telegraf is plugin-driven and has the concept of 4 distinct plugins:

- Input Plugins collect metrics from the system, services, or 3rd party APIs
- Processor Plugins transform, decorate, and/or filter metrics
- Aggregator Plugins create aggregate metrics (e.g. mean, min, max, quantiles, etc.)
- Output Plugins write metrics to various destinations
- For more information on Processor and Aggregator plugins please read this.

New plugins are designed to be easy to contribute, we'll eagerly accept pull requests and will manage the set of plugins that Telegraf supports.

### Install Telegraf

To ensure using the last release, please refer to the [Github project](https://github.com/influxdata/telegraf/releases){.external}.

The Metrics platform allow the user to push directly in InfluxDB with Telegraf, or with Warp 10 using a Warp 10 output plugin. To set up correctly Telegraf to use it you have to refer to the [plugin Github repository](https://github.com/CleverCloud/telegraf-output-warp10){.external}.

### Telegrag configuration file

Once getting started with Telegraf you have to specify the data to record. With Telegraf you can generate basic default configuration file (as for example for the CPU data below).

```text
telegraf --input-filter cpu --output-filter influxdb config
```

If we record this telegraf result to a file this will generate the following data set:

```text
cpu,cpu=cpu0,host=test usage_system=0.3688181056160914,usage_irq=0,usage_guest=0,usage_softirq=0.10058675607711719,usage_steal=0,usage_guest_nice=0,usage_user=1.0896898575021035,usage_idle=98.37384744342029,usage_nice=0,usage_iowait=0.06705783738474282 1534923420000000000
cpu,cpu=cpu1,host=test usage_user=0.8682584738687309,usage_system=0.4174319585907506,usage_guest=0,usage_guest_nice=0,usage_idle=98.61412589747883,usage_nice=0,usage_iowait=0.03339455668725934,usage_irq=0,usage_softirq=0.06678911337452015,usage_steal=0 1534923420000000000
cpu,cpu=cpu2,host=test usage_user=1.0514018691588776,usage_idle=98.41455273698294,usage_nice=0,usage_iowait=0.03337783711615437,usage_softirq=0.05006675567423304,usage_system=0.45060080106808703,usage_irq=0,usage_steal=0,usage_guest=0,usage_guest_nice=0 1534923420000000000
cpu,cpu=cpu3,host=test usage_user=1.3538358682935037,usage_idle=98.29516964733415,usage_irq=0,usage_guest=0,usage_guest_nice=0,usage_system=0.3008524151763328,usage_nice=0,usage_iowait=0.033428046130702986,usage_softirq=0.016714023065351493,usage_steal=0 1534923420000000000
cpu,cpu=cpu-total,host=test usage_softirq=0.05433646812957265,usage_guest_nice=0,usage_user=1.0909090909090966,usage_idle=98.43260188087774,usage_nice=0,usage_steal=0,usage_guest=0,usage_system=0.38453500522465517,usage_iowait=0.037617554858935594,usage_irq=0 1534923420000000000
```

Let's only take the first line:

```text
cpu,cpu=cpu0,host=test usage_system=0.3688181056160914,usage_irq=0,usage_guest=0,usage_softirq=0.10058675607711719,usage_steal=0,usage_guest_nice=0,usage_user=1.0896898575021035,usage_idle=98.37384744342029,usage_nice=0,usage_iowait=0.06705783738474282 1534923420000000000
```

This line creates several metrics on a Time-Series database:

- First we get the keyword **cpu**, this will be the prefix name of all the time-series.
- Then after the first "," we get **cpu=cpu0**, and **host=test**, those would be the metrics labels. This means that for each different host and CPU we will generate a new metrics. In this example, we have a single host and for the cpu labels 4 unique CPU and a cpu-total.
- Then there are the metrics: **usage_system=0.3688181056160914** or **usage_irq=0** as example. For each indicator (usage_system, usage_irq, or usage_iowait), a metrics is created with a name corresponding to prefix plus indicator sperated by a "." and the line labels. The metrics metadata generated here are for instance: **cpu.usage_system{"host":"test","cpu":"cpu0"}** or **cpu.usage_irq{"host":"test","cpu":"cpu0"}**.
- For each indicator we add to the corresponding metric a data-point containing the value (0.3688181056160914 for usage_system or 0 for usage_irq) and the time set at the end of the line (here 1534923420000000000).

To resume with just the first line there is at least **10 new metrics** created. And for the complete example it's a total of **50 metrics**. Keep this indicator in mind when deploying a telegraf agent and pushing the data to the Metrics Platform.

### Configure Telegraf for the Metrics platform

#### Using InfluxDB output

To start pushing Telegraf data to the Metrics platform, you just need to add an Influx output plugin as described below:

```toml
# OUTPUTS
[[outputs.influxdb]]
  urls = ["https://influxdb.REGION.metrics.ovh.net" ]

  ## Timeout for HTTP messages.
  timeout = "15s"  # Set at least 15s to avoid possible timeout with our platform

  ## HTTP Basic Auth
  username = "t"   # A random user name for the basic auth (not checked)
  password = WRITE_TOKEN
```

Replace `WRITE_TOKEN` and `REGION` by your own information based on Metrics manager. Telegraf can now push to Metrics platform!

#### Using Warp 10 output

As the Metrics platform backend use [Warp 10](http://www.warp10.io/), the [Warp 10 telegraf plugin](https://github.com/CleverCloud/telegraf-output-warp10){.external} can also be used to write Telegraf data on our platform. A working configuration for this plugin would be:

```toml
# OUTPUTS
[[outputs.warp10]]
  warpUrl = "https://warp10.REGION.metrics.ovh.net/api/v0/update"
  token = "WRITE_TOKEN"
  prefix = "telegraf."  # A prefix to start all metrics name can be left empty
  debug = false
```

The `WRITE_TOKEN` and `REGION` are to be replaced by your own information based on Metrics manager.

## Telegraf tunning

To have the best experience with Telegraf on the Metrics platform we propose here some possible updates.

First you can generate global tags for all the series you record using **global_tags**:

```toml
[global_tags]
  dc = "new-12" # will tag all metrics with dc=new-12
  rack = "rack-0"
```

To control the **amount of points** recorded per metrics, it can be done using **agent**:

```toml
[agent]
  ## Default data collection interval for all inputs
  interval = "30s" # To push ont point per 30s

  ## true Rounds collection interval to 'interval'
  ## ie, if interval="10s" then always collect on :00, :10, :20, etc.
  round_interval = true

  ## Telegraf will send metrics to outputs in batches of at most
  ## metric_batch_size metrics.
  metric_batch_size = 1000

  ## For failed writes, telegraf will cache metric_buffer_limit metrics for each
  ## output, and will flush this buffer on a successful write.
  metric_buffer_limit = 10000

  ## Default flushing interval for all outputs.
  flush_interval = "30s"
```

We recommand a 30s interval to match best the Metrics platform storage offers. You can update this parameter to your needs. Here you can also control the number of points sent per batch.

Telegraf is used to record a lot of servers indicators as mem, system, net, cpu, diskio... This is done using the telegraf [**inputs** plugins](https://github.com/influxdata/telegraf/tree/master/plugins/inputs){.external}.

However some inputs indicators might required telegraf to run as **root** user (on linux). For example, this can be the case of some network stats on a grsec kernel (you can check it using the `cat /proc/net/dev` command, a user not granted will always see 0 as value).

All **inputs** parameters, can be configured in telegraf main configuration file. To control the cardinality of the data send to the Metrics platform, we can, in the previous example, update the [**CPU** inputs](https://github.com/influxdata/telegraf/blob/master/plugins/inputs/cpu/README.md){.external} as below, setting **percpu** to false.

```toml
[[inputs.cpu]]
  percpu = false
  totalcpu = true
  collect_cpu_time = false
  report_active = false
```

This will record only one set of metrics for the **CPU** data. In our previous example, we will get only **10** metrics instead of 50. This doesn't look like a lot, but if you have hosts with 8 or 16 CPU, you still have only 10 series (and not 90 or 170). When deploying telegraf on several hosts, this can reduce by a lot the number of metrics saved on a long time storage and to process. But most of all it's get easier to predict the number of series created per host.

For all inputs, each configuration parameters are detailed in [Telegraf Github repository](https://github.com/influxdata/telegraf/tree/master/plugins/inputs){.external}: As example the interesting parameters to reduce the recorded data:

- For the [**disks** input](https://github.com/influxdata/telegraf/blob/master/plugins/inputs/disk/README.md){.external} are: **mount_points** or **ingore_fs**.
- For the [**diskio** input](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/diskio){.external} are: **devices** or **name_templates**.
- For the [**net** input](https://github.com/influxdata/telegraf/blob/master/plugins/inputs/net/NET_README.md){.external} is **interfaces**.

To only record specific metrics, a Telegraf [filtering](https://github.com/influxdata/telegraf/blob/master/docs/CONFIGURATION.md#measurement-filtering){.external} can be applied on any inputs.
The **field** parameter applied to the Metrics platform **classnames** when **tags** applied to **labels**.

- For example, to white list only a subset of indicators to record : fill the **fieldpass** parameter with a pattern to match:

```toml
[[inputs.something]]
  fieldpass = ["valid_prefix\*"]
```

- On the contrary, to not send indicators data to the Metrics platform: fill the **fielddrop** parameter with a pattern:

```toml
[[inputs.something]]
  fielddrop = [ "\*unvalid_suffix" ]
```

- Still to with list some metrics or not send specific metrics, you can use the **tagdrop** or **tagpass** parameter:

When using tagpass or tagrop, you have to first declare all settings of an input.

```toml
[[inputs.something]]
  some_setting = 'test'
  other_setting = '42'

  [inputs.something.tagpass]
    # tagpass conditions are OR.
    # If (label0 is 42 or test) OR (the label1 is ...-42 or test-...)
    # then the metric passes
    label0 = [ "42", "test" ]
    # Pattern can also be used on the tag values
    label1 = [ "*-42", "test-*" ]
```

- An other useful parameter can be the **tagexclude** to drop some unneeded labels but still send the metrics to our platform:

```toml
[[inputs.something]]
  tagexclude = [ "port", "server" ]
```

- You can also update an input name with the parameter **name_suffix**, **name_prefix** or **name_override**:

```toml
[[inputs.something]]
  name_override = "something"
```

You can check the [Telegraf configuration](https://github.com/influxdata/telegraf/blob/master/docs/CONFIGURATION.md){.external} guidelines to find a lot of other interesting parameters.

Selecting the metrics to record on your infrastructure might looks like a lost of time at first sight, but it will save you a lot in the future as you will have the full control on them.

## Retrieve the data

Once Telagraf is well configured, start it with:

```text
telegraf --config telegraf.conf
```

Once the first batch of data is completed, you can retrieve them using any of our available [query protocol](../protocol_overview/guide.en-gb.md).

## Go further

- Documentation: [Guides](../product.en-gb.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
