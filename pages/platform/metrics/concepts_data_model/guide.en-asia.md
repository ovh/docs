---
title: 'Metrics data model'
slug: data-model
excerpt: 'Understand Metrics data model'
section: Concepts
order: 2
---

**Last updated 26 April, 2019**

# Understand the Metrics data model

[Time series](https://en.wikipedia.org/wiki/Time_series) are a list of timestamp-value pair linked to a description and a context.

In a time series, a name will help to know what values correspond to.

The context will precise in which circonstances and where the value was taken.

With that we can draw a meaningful representation:

| Time series name | Context                | Time <-> Value           |
| ---------------- | ---------------------- | ------------------------ |
| CPU load         | server A, datacenter 1 | 23/12/2018 12:20 => 4.5  |
| CPU load         | server A, datacenter 1 | 23/12/2018 12:22 => 4.7  |
| CPU load         | server B, datacenter 1 | 23/12/2018 10:30 => 14.0 |

The serialized and formatted equivalent is:

```txt
123456789// cpu.load{server=A,datacenter=1} 4.5
123476789// cpu.load{server=A,datacenter=1} 4.7
123376789// cpu.load{server=B,datacenter=1} 14.0
```

To store this data and provide a quick access to each time series, an index is built on the join between the time series name and context.
In our example index entries will be:

```txt
cpu.load{server=A,datacenter=1}
cpu.load{server=B,datacenter=1}
```

> We just discover the most important rule using Metrics platform: A time series name, his context and context values are unique for each series in the index.

So it' s not possible to rename series or add/delete/change any context key or value, this will create a new time series and values will not be kept. If you want to rename a time series, you have to get all data points of the old one and push them again with another time series name.

We will just put a name on this different fields:

- The time series name is a **class**
- The context is a key-value list called **labels**
- An couple of date and value in a time series is a **data point**

Which will produce:

```txt
data-point-date// class{labels} data-point-value
```

In the SQL world, we can say that a class and labels make a primary key.

```txt
123376789// cpu.load{server=B,datacenter=1} 14.0
            \_____________________________/
                      Primary Key
```

Every months (from 1st to 31th) all your metrics (= primary keys) are count and constitue the **MADS** (Monthly Active Data Streams)

## Fields types

| Field            | Type                      |
| ---------------- | ------------------------- |
| class            | string                    |
| labels           | list of key/value strings |
| data-point-date  | positive number           |
| data-point-value | string, number            |

> You can store strings on a time series this is helpful for annotations

## Geo related fields

Metrics platform was firstly build for Internet Of Things. it means that Geo position is included in the data model, every data point on a time series have a date, a value and can have a latitude, longitude and elevation. If you push latitude you must push longitude. You can push longitute and latitude without elevation.

- Latitude and longitude must respect [WGS84](http://en.wikipedia.org/wiki/WGS84) format
- Elevation unit is an integer in millimeter

When pushing data points, put the latitude, longitude and elevation in the serialized format:

TIMESTAMP/**LATITUDE**:**LONGTITUDE**/**elevation** metric.name{} VALUE

```txt
123376789/45.0:-0.01/48100000 cpu.load{server=B,datacenter=1} 14.0
```

## Usage of meta data

We previously said that series name and labels are part of the identifier, and cannot be changed.

**Attributes** are, like labels, set on unique time series, but in contrast to labels, they can be added/edit/removed without loose the original time series.

With the serialized format, you can have:

```txt
123376789// cpu.load{server=B,datacenter=1}{myattribut=myvalue} 14.0
```

Meta datas use-case can be, for example, to flag series as deprecated/to remove.

## summary

A time series is composed by:

1. A class name
2. A list of labels
3. A list of attributes
4. A list of timestamps with a value

```txt
123376789/45.4567:-0.3456781/48100000 cpu.load{server=B,datacenter=1}{myattribut=myvalue} 14.0

```

## Protocols mapping

We just explain the OVH Metrics engine time series data model, as you know the platform support lots of push and query protocols.

Let's look at differents protocol data models mappings.

### OpenTSDB

When pushing an OpenTSDB data points, the JSON representation is:

```json
[
	{
		"metric": "sys.cpu.nice",
		"timestamp": 1346846400,
		"value": 18,
		"tags": {
			"host": "web01",
			"dc": "lga"
		}
	}
]
```

- The **metric** fields is linked to the **class** name
- The **timestamp** is the same in the two protocols
- The **value** is the same in the two protocols
- The **tags** is linked to **labels** keu/value list

> **Attributes** are not supported in this protocol

### Prometheus

Prometheus input format is exactly the same as OpenTSDB.

For the query format, you can see an example below:

```json
{
	"status": "success",
	"data": {
		"resultType": "matrix",
		"result": [
			{
				"metric": {
					"__name__": "sys.cpu.nice",
					"instance": "10.1.30.1:9100",
					"job": "scrape",
					"host": "web01",
					"dc": "lga"
				},
				"values": [[1535012566.338, "1"], [1535012626.338, "1"], [1535012686.338, "1"]]
			}
		]
	}
}
```

The interesting part is under the **metric** JSON key, each series is an element of the **result** key array.

- **\_\_name\_\_** is a special Prometheus label which is linked to time series **class** name
- **instance** and **job** are also Prometheus injected labels
- **values** are an array of timestamp -> value as in Metrics

> **Attributes** are not supported in this protocol

### InfluxDB

In InfluxDB, the series name is split, there is a common prefix at the start of the line, and several specifc suffix just before the timestamp. One line can create several time series depending of the count of suffixes
After the prefix, there is a list of keys/values separated by comma, this is the equivalent to labels. The last number is the timestamp.

Time series example:

```txt
weather_sensor,plot=1,region=north temp=50.1 1472515200000000000
weather_sensor,plot=2,region=north temp=48 1472515200000000000
```

- **class** name is build with the concatenation of the first part and the field name, in this example, the classes will be **weather_sensor.temp**
- **tags** are equivalents to **labels**

The result of parsing for this example will be:

```txt
1472515200000000000// weather_sensor.temp{plot=1,region=north} 50.1
1472515200000000000// weather_sensor.temp{plot=2,region=north} 48
```

### Graphite

You can see the time series representation in Graphite below:
A graphite time series is build with a name, a list of keys/values separated by semi colons, a value and a timestamp.
See the example below.

```txt
sensor.temperature;dc=gra;rack=g3b533 24 147251520
```

Labels are separated by semi colons, when timestamp and value by spaces

- The first part is kept as **class** name
- The next keys values list is linked to **labels**
- At the end of the metric, we have the value and the timestamp

### Warp10

Warp10 is the native protocol of OVH Metrics platform, so, there is no data structure mapping.
