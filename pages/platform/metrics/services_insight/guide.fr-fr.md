---
title: 'Monitoring your OVH services with OVH Cloud Insights'
slug: metrics-insight
excerpt: 'This guide will show you how to set up your own metrics in OVH Cloud Insights'
section: 'Metrics services'
order: 3
---

**Last updated 12th October, 2018**

## Objective

OVH hosts and runs several servers and application. They produces a lot of metrics that we monitore for you to keep track of each of our services states. We think some useful metrics or aggregated results must be exposed to customers. This what OVH Cloud Insights is used to. Giving you an access to the data of your services. What will you need ? OVH Cloud Insights and compatibles services and you are ready to get access to them.

You can, for example, retrieve the metrics of the following OVH products:

* Metrics
* IPLB
* OpenStack
* Dedicated server
* Kubernetes

And many more.

**This guide will show you how to set up your own metrics in OVH Cloud Insights.**

## Requirements

* any of the OVH solutions listed above

## Instructions 

### Metrics series

The series available for the Metrics services using an OVH Cloud Insights token are:

|Name|Description|
|---|---|
|metrics.datapoints|Datapoints per second|
|metrics.series|Monthly active metrics|
|metrics.errors.datapoints|Datapoints over-quota error count|
|metrics.errors.series|Metrics over-quota error count|

### Generate an OVH Cloud Insights Token

OVH Cloud Insights tokens are available through the [OVH API](https://api.ovh.com/console/#/me/insight#GET).

![menu](images/insight-tokens.png){.thumbnail}

Once you have generated a token, save it, as you will need it for all the following steps.

### List all available metrics with Quantum

If you would to list all the series that are available with your OVH Cloud Insights token, you can use our Quantum. This web editor allows you to create queries to access to the data stored in your OVH Metrics solution.

You can access [Quantum](https://quantum.metrics.ovh.net/#/warpscript//eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D) using the specific Insights entrypoint. 

This [link](https://quantum.metrics.ovh.net/#/warpscript/J1lPVVJfSU5TSUdIVF9UT0tFTicgJ1JUT0tFTicgU1RPUkUKClsgJFJUT0tFTiAnfi4qJyB7fSBdIEZJTkQ%3D/eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D), will give you direct access to Quantum, with a FIND request already written. You just need to replace the string containing 'YOUR_INSIGHT_TOKEN' with the OVH Cloud Insights token you created in the previous step, as shown below. Then click on 'execute' to get the Query result.

![menu](images/quantum-find-token.png){.thumbnail}

#### How to list only OVH Metrics-related metrics

To list only OVH Metrics-related metrics, you just have to replace `~.*` with `~metrics.*`, as shown in the example below. As before, you need to replace the string containing 'YOUR_INSIGHT_TOKEN' with your own OVH Cloud Insights token and click on execute to get the query result.

![menu](images/quantum-find-metrics.png){.thumbnail}

Updating this specific field allow you to search on specific series that exists in your OVH Cloud Insights account, as long as your regular expression is correct. 

For this type of query, you should see a result similar to the example below:

![menu](images/find-response.png){.thumbnail}

Let's take a close look at these results... Each metric is identified by a name in the **"c"** key from the JSON results. For the first line, the name of the series is "metrics.datapoints". You will then get an **"l"** key, which corresponds to the labels series. Labels are complementary information for a series. In this case, you will retrieve the application that generates the points, the csg that is an hased key to retrieve user data, and a services identifier. There are no attributes on those series, so the next key, **"a"**, is empty. Next is a **"la"** key, which contains the last activity of a series. For Insight series, this key is set to 0. Finally, the most interesting key, **"v"**,  contains the value. As we asked the Insight to only list the series, this list of values is empty. Later in this guide, we will look at how we can retrieve the values.

### With Curl

You can also send HTTP requests to get the available series. This example uses the Curl command line tool, but you could also use tools like [Insomnia](https://insomnia.rest/) or [PostMan](https://www.getpostman.com/). You should replace the "READ_TOKEN" string with your own OVH Cloud Insights token before executing the request.

<pre> curl --data-binary '[ "READ_TOKEN" "~.*" {} ] FIND' 'https://warp10.insight.eu.metrics.ovh.net/api/v0/exec' </pre>

To only list the Metrics series, you just have to update the regular expression and replace "~.*" per "~metrics.*".

<pre> curl --data-binary '[ "READ_TOKEN" "~metrics.*" {} ] FIND' 'https://warp10.insight.eu.metrics.ovh.net/api/v0/exec' </pre>

### Query the first data

Now that we understand the available queries, let's retrieve our first datapoints. We can still use Quantum for this, or an HTTP request with one of our protocols. 

#### With Quantum

Executing [this script](https://quantum.metrics.ovh.net/#/warpscript/J1lPVVJfSU5TSUdIVF9UT0tFTicgJ1JUT0tFTicgU1RPUkUKClsgJFJUT0tFTiAnfm1ldHJpY3MuKicge30gTk9XIC0xIF0gRkVUQ0g%3D/eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D) will allow you to retrieve the last datapoint of each Metrics series. You only need to replace **FIND** with **FETCH** as the main method in the previous script, and set two new parameters: **NOW** (to only search data that appear before NOW) and **-1** (to only get one point).
 
To only display data from the previous hour, you can update your script like [this](https://quantum.metrics.ovh.net/#/warpscript/J1lPVVJfSU5TSUdIVF9UT0tFTicgJ1JUT0tFTicgU1RPUkUKClsgJFJUT0tFTiAnfm1ldHJpY3MuKicge30gTk9XIDEgaCBdIEZFVENI/eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D). You should replace **-1** with **1 h** to search the previous hour. To retrieve data from a different hour, you can just add "**n h**" (n being a valid number). 

To load data from between two specific dates, you can use this [script](https://quantum.metrics.ovh.net/#/warpscript/J1lPVVJfSU5TSUdIVF9UT0tFTicgJ1JUT0tFTicgU1RPUkUKClsgJFJUT0tFTiAnfm1ldHJpY3MuKicge30gJzIwMTgtMDgtMDFUMTI6MTc6NTIuMTE1NDQ4WicgJzIwMTgtMDgtMDFUMTM6MTc6NTIuMTE1NDQ4WicgXSBGRVRDSA%3D%3D/eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D).

For more information on the WarpScript™ language, you can complete this [tour](https://tour.warp10.io/#1-1).

In Quantum, once you have executed your request, you should get a response that looks similar to the example below. Note that the **"v"** key now contains all the values found from the specified period. The values are an array that contains both the tick value and point value. 

![menu](images/response-fetch.png){.thumbnail}

#### HTTP requests with Curl 

You can use one of our [protocols](../protocol-overview) to query your OVH Cloud Insights data. Here are two examples, using WarpScript™ and PromQL.

We can send a WarpScript™ query, as shown below, to load the data. As before, you can update the FETCH time parameter to suit your requirements.

<pre> curl --data-binary '[ "READ_TOKEN" "~metrics.*" {} "2018-08-01T12:17:52.115448Z" "2018-08-01T13:17:52.115448Z" ] FETCH' 'https://warp10.insight.eu.metrics.ovh.net/api/v0/exec' </pre>


If you are more familiar with PromQl, you can also execute a query_range on your metrics. You only need to know your metric's name. For a PromQL request, you need to add a basic authentication, using any user name (in this example, we set it to DESC) with your READ_TOKEN as the password. Then we set the path to Metrics PromQL, and select the metrics to load in the query parameter (this can be any working PromQL request on metrics). The 'start' and 'end' paraemters correspond with the limits of the data that is to be loaded. The step parameter is used to limit the result to one point every two minutes. 

<pre> curl -X GET -v 'https://test:READ_TOKEN@prometheus.insight.eu.metrics.ovh.net/api/v1/query_range?query=metrics.datapoints&start=1533125872.115&end=1533129472.115&step=2m' </pre>

### Plot the data

#### Quantum

To plot the data with Quantum, let's retrieve the last hour of data with the [previous script](https://quantum.metrics.ovh.net/#/warpscript/J1lPVVJfSU5TSUdIVF9UT0tFTicgJ1JUT0tFTicgU1RPUkUKClsgJFJUT0tFTiAnfm1ldHJpY3MuKicge30gTk9XIDEgaCBdIEZFVENI/eyJ1cmwiOiJodHRwczovL3dhcnAxMC5pbnNpZ2h0LmV1Lm1ldHJpY3Mub3ZoLm5ldC9hcGkvdjAiLCJmZXRjaEVuZHBvaW50IjoiL2ZldGNoIiwiaGVhZGVyTmFtZSI6IlgtV2FycDEwIn0%3D). Click on the 'visualize' button that will appear once you execute your request. 

![menu](images/visualize-arrow.png){.thumbnail}

To select the series to plot, you just have to click on their name and they will be plotted automatically.

![menu](images/plot-result-arrow.png){.thumbnail}

### Creating your dashboard with Grafana

If you are interested in building a dashboard, you can use our hosted [Grafana](https://grafana.metrics.ovh.net) solution. First, we need to add a new data Source, linked to your OVH Cloud Insights data. Create a data source as shown below, filling the password with your own OVH Cloud Insights token, and selecting your preferred type (OpenTSDB in this example).

![menu](images/grafana-sources.png){.thumbnail}

For more information on this process, you can refer to our guide to [how to add a data source in Grafana](../start-grafana). 

First, create or open a dashboard, and add a new graph to it. Then, to edit this new graph, right-click on it and select 'edit'.

![menu](images/grafana-edit.png){.thumbnail}

In the 'Metrics' panel, you will find the 'Metric' field, where you can choose what data to plot.

![menu](images/grafana-completion.png){.thumbnail}

For example, if we select 'metrics.series', we can now refresh the graph and the data will be available straight away. If you want to update your graph's name, you can go it from the 'General' tab. 

![menu](images/grafana-final-result.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
