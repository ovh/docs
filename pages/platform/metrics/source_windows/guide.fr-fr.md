---
title: Collect Windows Metrics
slug: source-windows
excerpt: Collect Windows Metrics
section: Source
order: 7
---

**Last updated 23 August, 2019**

## Objective

In this guide, you will learn how to use the [telegraf tool](https://www.influxdata.com/time-series-platform/telegraf/) or the [Prometheus ecosystem](https://prometheus.io/) to collect Windows data and send them to the Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a Windows machine

## Instructions

Some known tools have the possibility to collect Windows data, and then send them to a Backend. We will see how the [telegraf tool](https://www.influxdata.com/time-series-platform/telegraf/) and the [Prometheus ecosystem](https://prometheus.io/) can be used to collect and store data on the Metrics Data Platform.

### telegraf

[Telegraf runs on Windows](https://github.com/influxdata/docs.influxdata.com/blob/master/content/telegraf/v1.7/administration/windows_service.md){.external}. Following this documentation and setting a configuration as described in our [telegraf user documentation](../source-telegraf/guide.fr-fr.md){.ref} allow a user to push its own server and application data to Metrics.

First go to [download telegraf page](https://portal.influxdata.com/downloads/){.external} and select the Windows binaries.

Once telegraf is unzipped, you shoud have a .exe file and a .conf one. Edit the conf file to set-up your own Metrics account in the `influxdb output`:

```yaml
# OUTPUTS
[[outputs.influxdb]]
  urls = ["https://influxdb.gra1-ovh.metrics.ovh.net" ]

  ## Timeout for HTTP messages.
  timeout = "15s"  # Set at least 15s to avoid possible timeout with our platform

  ## HTTP Basic Auth
  username = "windows"   # A random user name for the basic auth (not checked)
  password = WRITE_TOKEN

```

The telegraf basic configuration produced ~80 metrics for a single Windows 2016 server.

If you want to record the total Metrics on the whole field, you can set:

```yaml
IncludeTotal=true    # Compute total metrics for current field
```

To record **only** the total metric, activate at the end of the `win_perf_counter` the following `tagpass` option:

```yaml
[inputs.win_perf_counters.tagpass]    ## Tag pass will write list only the win_perf_counters metrics flags with an instance equals to _Total. To add other instances you can add several one in the instance list below.

  instance = [ "_Total" ]  
```

Otherwise to blacklist specific instance you can use `tagdrop` instead of `tagpass`. To learn more on how to configure telegraf, you can check this detailed [guide](https://github.com/influxdata/telegraf/blob/master/docs/CONFIGURATION.md){.external}.

### Prometheus ecosystem

You can use the Prometheus ecosystem on Windows. An interesting Prometheus exporter for Windows is: [wmi_exporter](https://github.com/martinlindhe/wmi_exporter){.external}.

Telegraf supports Windows and can be used to record and forward Prometheus data to Metrics.

To collect metrics on a Windows 2016 server, simply download and install the latest [wmi_exporter release available](https://github.com/martinlindhe/wmi_exporter/releases){.external} (.msi to install a windows service).

As by default `WMI_EXPORTER` listens to `0.0.0.0` install it with `LISTEN_ADDR` set to `127.0.0.1` by executing:

```shell-session
msiexec /i <path-to-msi-file> LISTEN_ADDR=127.0.0.1  # update the IP address used to bind WMI Exporter
```

Once `WMI_EXPORTER` is installed all the server metrics are available at `http://127.0.0.1:9182/metrics`.

If you want to access the `WMI_EXPORTER` metrics from internet you can expose them using `0.0.0.0` IP binded address but ensure that you apply **sufficient security**.

Then [download Telegraf on Windows](https://portal.influxdata.com/downloads/), and follow previous installation steps.

Configure Telegraf as declared previously and deactivate the `inputs.win_perf_counter plugin` if you do not want to record them by removing configuration lines or simply add a namedrop option to remove specific metrics:

```yaml
[[inputs.win_perf_counters]] # Add a the start of the telegraf win_perf_counters input plugin:
  namedrop = [ "win_*" ]

```

Then configure Telegraf to use the prometheus plugin:

```yaml
[[inputs.prometheus]] # Add the prometheus input plugin:
  urls = [ "http://127.0.0.1:9182/metrics" ]

    namedrop = [ "wmi_service_*" ]  # Discard all wmi_service as a large amount of series is created

```

> The Telegraf prometheus plugin doesn't work on Telegraf test mode. Restart Telegraf Windows service and you should see your data on your Metrics account.

This telegraf configuration produced ~140 metrics for a single Windows 2016 server. Check the [WMI exporter collector](https://github.com/martinlindhe/wmi_exporter/blob/master/docs/README.md) documentation to select and collect the right metrics.

In the same way, you can collect any kind of Metrics the Prometheus ecosystem exposed on a route using telegraf.

Happy collect on Windows!

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
- Gitter: [Gitter](https://gitter.im/ovh/metrics)
