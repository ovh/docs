---
title: 'Order your Metrics project'
slug: order
excerpt: 'Order a Metrics account'
section: 'Getting started'
order: 1
---

**Last updated 15th May, 2018**

## Objective

Metrics is a platform that can be used to **collect**, **store** and **analyse** Time Series data. This guide will cover the very first step to get started with Metrics: **ordering an account**.

## Requirements

- a valid OVH account.

If you haven't one already, you will be able to create one directly in the [metrics product page](https://www.ovh.com/fr/data-platforms/metrics/){.external} during the order process.

## Instructions

### Order a Metrics Cloud plan

If you don't already have a Metrics Cloud plan, you can start by choose one according to your need.

> [!primary]
>
> Note that while choosing, a metric is a kind of measurement plus its dimensions. For example, *temperature* could be your metric, and you could set the room as tags. This way, you would need as much metrics as the total number of room which will be measured.
>


#### Step 1. Choose a plan

A plan mostly depends on the number of Time Series that you need, for example, with a `small` plan, you can push *datapoints for 1000 time series.*

[Go the product page](https://www.ovh.com/fr/data-platforms/metrics/){.external} for more details between plans. On this page you can for example order a try account. Once you complete all the steps and purchase an account, you should received a mail which will allow you to access the Metrics menu.

#### Step 2. Go to Metrics's manager

Once the chosen plan has been purchased, go to the `Cloud` section of your control panel. Select the `Metrics` menu from the left side of the control panel.

![menu](images/metrics_manager.png){.thumbnail}

You can now select your new account from the list on the left.

![menu](images/metrics_manager_welcome.png){.thumbnail}

#### Step 3. (Optional) Change name of the account

In the `Configuration` section, click on the dotted button to set up a proper name on your account.

![menu](images/metrics_manager_setup.png){.thumbnail}

Your account is good to go!

Let's stay on this page for a couple of second to continue the visit.


#### Step 4. Grab your tokens or create new ones

Now go to the Tokens tab :

![tokens](images/metrics_manager_tokens.png){.thumbnail}

Here you can grab two defaults read and write tokens. You can use them or decide to create new ones.

Once done, click to the Platforms tab.

#### Step 5. Grab your endpoints

Metrics is protocol agnostic. It means you can push with one protocols, and query the same data with another one. 

[Click here, to learn how to used the supported protocols with metrics and their corresponding endpoints](../protocol-overview). 

![tokens](images/platforms.png){.thumbnail}

If you don't want to push your data by yourself, you can use a software that will support one of these protocols. Here is a short list : 

- [Telegraf](https://github.com/influxdata/telegraf/releases){.external}
- [Metricbeat](https://www.elastic.co/downloads/beats/metricbeat){.external}
- [Beamium](https://github.com/ovh/beamium){.external}
- [Scollector](http://bosun.org/scollector/){.external}
- [Snap](http://snap-telemetry.io/){.external}
- [Collectd](https://collectd.org/){.external}

## Go further

To have an overview of our Manager, you can now read our [A tour of Metrics manager guide](../manager).

Otherwise to skip it and push your first points and query them with OpentSDQB and Grafana, we invite you to follow our guide to [Push and vizualize your first datapoints with OpenTSDB](../start-opentsdb). 

Join our community of users on <https://community.ovh.com/en/>.