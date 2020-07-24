---
title: 'Using the vScope API'
slug: vscopeapi
excerpt: 'Find out how to use the vScope API to collect monitoring data in your applications'
section: 'OVH services and options'
order: 1
---

**Last updated 29th June 2020**

## Objective

OVHcloud provides you with a tool called **vScope**, for supervising and monitoring your virtual machines and infrastructures.

It is a webpage that displays useful information on your resource usage.

You can also access this information via the APIv6 and Metrics API.

**This guide explains how to use these APIs.**

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/)
- access to the management interface (vScope)

## Instructions

vScope provides two types of information:

- **Live** information which corresponds to the information on different components at a given time.
- Graphs presenting logged performance data for different components, such as a virtual machine’s CPU and RAM.


### Collecting **live** data

**Live** data is is the data available via the vScope interface’s main page.

![vScope-API](images/vScope1.png){.thumbnail}

You can retrieve **live** data for the following components:

- filers
- hosts
- virtual machines

You can use the API via the following three APIv6 calls:

#### Filers

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Virtual machines

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Collecting logged data (graphs)

To collect and use logged data (graphs), we use the **Metrics Data Platforms** product.

Via OpenTSDB or WARP10 protocol, you will be able to retrieve your data as points. You can use these points via your application, or directly display them in your choice of rendering.


The folllowing instructions cover the use of the OpenTSDB protocol for a raw data display (no graph rendering).

To use **Metrics Data Platforms**, you will need to get a *read* token. With the new version of vScope, each infrastructure user has a *read* token. 

Use the following APIv6 call to retrieve the read token for the user you want:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/metricsToken
> 

Your token will be in the result’s **token** field.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

For each component type, there is a list of metrics, and it requires a number of very precise settings (also called labels).

#### Filers

| Metrics | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Filer usage in KB | datacenter : pcc-37-187-228-180_datacenter869, <br>datastore : pcc-000443 |

#### Hosts

| Metrics | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Host processor usage in percent | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.mem.usage.perc | Host RAM usage in percent | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.net.tx | Host outgoing network usage | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Host incoming network usage | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Number of network packets sent from the host | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Number of network packets received from the host | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### Virtual machines

| Metrics | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | VM processor usage in percent | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.mem.usage.perc | VM RAM usage in percent | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.cpu.ready |VM’s CPU Ready time in milliseconds | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.rx | VM incoming network usage | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.tx | VM outgoing network usage | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetsrx | Number of network packets received from the VM | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetstx | Number of network packets sent from the VM | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.read | IO number per second in read mode from the VM | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.write | IO number per second in write mode from the VM | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  VM disk bandwidth in read mode | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | VM disk bandwidth in write mode | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.read | VM disk latency in read mode | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.write | VM disk latency in write mode | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |

#### Example of data gathered using the OpenTSDB protocol

Now that you have retrieved your token, your endpoint, and your list of metrics, you can retrieve a host’s RAM usage data for a period of 1 day.

Below is an example query:

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}'
```

Below are explanations of the fields used:

- **read:** user used to send the query (will always be read).
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX: the token retrieved earlier via the APIv6.
- **opentsdb.gra1-ovh.metrics.ovh.net:** OpenTSDB endpoint, also retrieved via the APIv6. This endpoint may vary depending on your location.
- **start:** a timestamp corresponding to the query’s start date.
- **queries:** a table containing the metrics to retrieve. Several metrics may be retrieved in a single query.
- **metric:** the name of the metric to retrieve.
- **aggregator:** the name of the aggregation feature (please refer to OpenTSDB documentation for further details).
- **downsample:** the name of the downsampling feature (can be used to reduce the amount of data to retrieve. Optional setting).
- **tags:** a list of labels in the form of key/value.

Other settings may also be provided. Please refer to the documentation for the OpenTSDB API for further details.

You will then receive a *json* with the query summary, as well as the timestamps associated with their value in the **dps** field.
For example:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

For further details on OpenTSDB queries, please refer to the following documentation: [OpenTSDB API query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
