---
title: OpenSearch made easy with Index As A Service
slug: index-as-a-service
order: 2
excerpt: Use the power of OpenSearch without managing a cluster.
section: Features
---

**Last updated 13th June, 2022**

## Objective

OpenSearch is one of the main components of the Logs Data Platform, regarded as one of the most powerful search and analytics engines. From the outset we offered the possibility to host a OpenSearch Dashboards index for your OpenSearch Dashboards metadata, Index As A Service being the next step to this functionality. You can now use a fully unlocked index for almost any purpose; be it complex documents, reports or even logs. Thanks to the OpenSearch API, you will be able to use most of the tools of the OpenSearch Ecosystem.

## Requirements

This is what you need to know to get you started:

- You have created a [Logs Data Platform account](../quick-start){.ref}
- You have access to the port 9200 of your cluster (head to the **Home** page in manager to know the address of your cluster).

## Instructions

### First steps with an OpenSearch index

#### Create an index

There are two ways to create an OpenSearch Index:

- Use the Logs Data Platform manager.
- Use the OpenSearch API.

To create an OpenSearch index with the Logs Data Platform manager, you need to go the index page and click on the `Add a new index`{.action} on the OpenSearch index section

![add index option](images/add_index.png){.thumbnail}

You must just choose a suffix for your index. The final name will follow this convention:

`logs-<username>-i-<suffix>`.

For each index, you can specify the number of **shards**. A **shard** is the main component of **index**. Its maximum storage capacity is set to **25 GB** (per shard). Multiple shards means more volume, more parallelism in your requests and thus more performance. Optionally, you can also be notified when your index is close to its critical size. Once your index is created, you can use it right away.

When you create a index through the [OpenSearch API](https://opensearch.org/docs/latest/opensearch/index-data/){.external}, you can also specify the number of shards. Note that the maximum number of shards by index is limited to **16**. OpenSearch compatible tools can now create indices on the cluster as long as they follow the naming convention `logs-<username>-i-<suffix>`. Here is an exemple with a curl command with the user **logs-ab-12345** and the index **logs-ab-12345-i-another-index** on gra2 cluster.

```shell-session
$ curl -u logs-ab-12345:mypassword -XPUT -H 'Content-Type: application/json' 'https://gra2.logs.ovh.com:9200/logs-ab-12345-i-another-index' -d '{ "settings" : {"number_of_shards" : 1}}'
```

There is more information about the API Support at the [dedicated section](#management-through-opensearch-api){.ref}.

Whatever method you use, you will be able to query and visualize your documents on Logs Data Platform using the API.


#### Index some data

Logs Data Platform OpenSearch indices are compatible with the [OpenSearch REST API](https://opensearch.org/docs/latest/opensearch/rest-api/index/){.external}. Therefore, you can use simple http requests to index and search your data. The API is accessible behind a secured https endpoint with mandatory authentication. We recommend that you use [tokens](../tokens-logs-data-platform){.ref} to authenticate yourself. You can retrieve the endpoint of the API at the **Home** page of your service. Here is a simple example to index a document with curl with an index on the cluster `<ldp-cluster>.logs.ovh.com`.


```shell-session
$ curl -u <your-token-value>:token -XPUT -H 'Content-Type: application/json' 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_doc/1' -d '{ "user" : "Oles", "company" : "OVH", "message" : "Hello World !", "post_date" : "1999-11-02T23:01:00" }'
```

Here is a quick explanation of this command:

- The **PUT** HTTP command can be used to create or modify a document.
- The `Content-Type: application/json` is the mandatory header to indicate that the data will be in the json format.
- The address contains the endpoint of the cluster followed by the **name of your index**
- The **test** just after the index name is the type of the document.
- The **1** here is the id of your document that can be any string.
- The payload of the request is a simple **JSON document** that will be indexed.

This command will return with a simple payload indicating if the document has been indexed by all the shards involved.

```json hl_lines="3"
{
   "_id": "1",
   "_index": "logs-<username>-i-<suffix>",
   "_primary_term": 1,
   "_seq_no": 0,
   "_shards": {
      "failed": 0,
      "successful": 2,
      "total": 2
   },
   "_type": "_doc",
   "_version": 1,
   "result": "created"
}
```

#### Search your data

There are multiple ways to search your data, this is one area where the OpenSearch REST API excels. You can either get your data directly by using a GET request, or search it with the Search APIs. To get your document indexed previously, use the following curl request:

```shell-session
$ curl -XGET -u <your-token-value>:token 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_doc/1'
{"_id":"1","_index":"logs-<username>-i-<suffix>","_primary_term":1,"_seq_no":0,"_source":{"company":"OVH","message":"Hello World !","post_date":"1999-11-02T23:01:00","user":"Oles"},"_type":"_doc","_version":1,"found":true}
```

To issue a simple search you can either use the [Query DSL](https://opensearch.org/docs/latest/opensearch/query-dsl/index/){.external} or a URI search. Here is a simple example with an URI search:

```shell-session
$ curl -XGET -u <your-token-value>:token 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_search?q=user:Oles'
{"_shards":{"failed":0,"skipped":0,"successful":1,"total":1},"hits":{"hits":[{"_id":"1","_index":"newindice","_score":0.2876821,"_source":{"company":"OVH","message":"Hello World !","post_date":"1999-11-02T23:01:00","user":"Oles"},"_type":"_doc"}],"max_score":0.2876821,"total":1},"timed_out":false,"took":31}
```

### Use case&#58; Enrich Logs Data on the fly

The following shows how your e-commerce application logs can be sent to the Logs Data Platform whenever a product is ordered. It logs the customer order by using Id for the customers name. For performance reasons or maybe by-design, the application doesn't fetch the full name of the client or other information from the customer database just to produce a log. You can add this information on the fly by using an OpenSearch Index and a Logstash collector on the Logs Data Platform.

#### Fill an index with clients information

The first thing to do is to index some clients information. The snippet below is one entry of the client index.

```json
{
    "firstName": "Jon",
    "lastName": "Snow",
    "age": 22,
    "address":
    {
        "streetAddress": "21 2nd Street",
        "city": "Winterfell",
        "state": "North",
        "postalCode": "14578",
        "geolocation":
        {
            "lat": 54.369488,
            "long": -5.574768
        }
    },
    "phoneNumber":
    [
        {
          "type": "home",
          "number": "212 555-1234"
        },
        {
          "type": "mobile",
          "number": "102 555-4567"
        }
    ]
}
```

To index several documents at once, it is more efficient to use the bulk api. Here is a small snippet of 3 users you can use to test it.

```json
{ "index" : { "_index" : "logs-<username>-i-<suffix>", "_type" : "_doc" } }
{ "userId": "1", "firstName": "Jon","lastName": "Snow", "age": 22, "address": { "streetAddress": "21 2nd Street", "city": "Winterfell", "state": "North", "postalCode": "14578",  "geolocation": { "lat": 54.369488, "long": -5.574768 } },"phoneNumber": [ { "type": "home", "number": "212 555-1234" }, { "type": "mobile", "number": "102 555-4567" } ] }
{ "index" : { "_index" : "logs-<username>-i-<suffix>", "_type" : "_doc" } }
{ "userId": "2", "firstName": "Cersei","lastName": "Lannister", "age": 43, "address": { "streetAddress": "1 Palace Street", "city": "King's Landing", "state": "The Crownlands", "postalCode": "26863",  "geolocation": { "lat": 42.639758, "long": 18.1094725 } },"phoneNumber": [ { "type": "home", "number": "212 555-6789" }, { "type": "mobile", "number": "102 555-8901" } ] }
{ "index" : { "_index" : "logs-<username>-i-<suffix>", "_type" : "_doc" } }
{ "userId": "3", "firstName": "Daenerys","lastName": "Targaryen", "age": 22, "address": { "streetAddress": "3 Blackwater Bay Ave", "city": "Dragonstone", "state": "Dragonstone", "postalCode": "75197",  "geolocation": { "lat": 43.300097, "long": -2.261580 } },"phoneNumber": [ { "type": "home", "number": "212 555-1234" }, { "type": "mobile", "number": "102 555-2345" } ] }
```

A bulk request is a succession of JSON objects with this structure:

```
 action_and_meta_data\n
 optional_source\n
 action_and_meta_data\n
 optional_source\n
 ...
 action_and_meta_data\n
 optional_source\n
```

You can in one request ask OpenSearch to index, update, delete several documents. Save the content of the previous commands in a file named **bulk** and use the following call to index these 3 users:

```shell-session
$ curl -u <your-token-value>:token -XPUT -H 'Content-Type: application/json' 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_bulk' --data-binary "@bulk"
```

This call will take the content of the bulk file and execute each index operation. Note that you have to use the option **--data-binary** and no **-d** to preserve the newline after each JSON. You can check that your data are properly indexed with the following call:

```shell-session
$ curl -u <your-token-value>:token -XGET 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_doc/_search?pretty=true'
```

This will give you back the documents of your index:

```json hl_lines="13 41 69"
{
  "took" : 1,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "failed" : 0
  },
  "hits" : {
    "total" : 3,
    "max_score" : 1.0,
    "hits" : [ {
      "_index" : "logs-<username>-i-<suffix>",
      "_type" : "_doc",
      "_id" : "AV3HvbQAz85mIBfrJjkV",
      "_score" : 1.0,
      "_source" : {
        "userId" : "1",
        "firstName" : "Jon",
        "lastName" : "Snow",
        "age" : 22,
        "address" : {
          "streetAddress" : "21 2nd Street",
          "city" : "Winterfell",
          "state" : "North",
          "postalCode" : "14578",
          "geolocation" : {
            "lat" : 54.369488,
            "long" : -5.574768
          }
        },
        "phoneNumber" : [ {
          "type" : "home",
          "number" : "212 555-1234"
        }, {
          "type" : "mobile",
          "number" : "102 555-4567"
        } ]
      }
    }, {
      "_index" : "logs-<username>-i-<suffix>",
      "_type" : "_doc",
      "_id" : "AV3HvbQAz85mIBfrJjkW",
      "_score" : 1.0,
      "_source" : {
        "userId" : "2",
        "firstName" : "Cersei",
        "lastName" : "Lannister",
        "age" : 43,
        "address" : {
          "streetAddress" : "1 Palace Street",
          "city" : "King's Landing",
          "state" : "The Crownlands",
          "postalCode" : "26863",
          "geolocation" : {
            "lat" : 42.639758,
            "long" : 18.1094725
          }
        },
        "phoneNumber" : [ {
          "type" : "home",
          "number" : "212 555-6789"
        }, {
          "type" : "mobile",
          "number" : "102 555-8901"
        } ]
      }
    }, {
      "_index" : "logs-<username>-i-<suffix>",
      "_type" : "_doc",
      "_id" : "AV3HvbQAz85mIBfrJjkX",
      "_score" : 1.0,
      "_source" : {
        "userId" : "3",
        "firstName" : "Daenerys",
        "lastName" : "Targaryen",
        "age" : 22,
        "address" : {
          "streetAddress" : "3 Blackwater Bay Ave",
          "city" : "Dragonstone",
          "state" : "Dragonstone",
          "postalCode" : "75197",
          "geolocation" : {
            "lat" : 43.300097,
            "long" : -2.26158
          }
        },
        "phoneNumber" : [ {
          "type" : "home",
          "number" : "212 555-1234"
        }, {
          "type" : "mobile",
          "number" : "102 555-2345"
        } ]
      }
    } ]
  }
}
```

Now that you have some data, you can enrich your logs with it. For this we will use a Logstash collector and an elasticsearch plugin (some elasticsearch tools are compatible with OpenSearch).

#### Configure a Logstash collector

If you don't know how to create a Logstash collector, please refer to the [Logstash guide](../logstash-input){.ref}. Edit the configuration of Logstash. For this example we will use a SSL TCP input with the GELF codec. Here is the input configuration.

```ruby
tcp {
    port => 12202
    type => gelf
    ssl_enable => true
    ssl_verify => false
    ssl_cert => "/etc/ssl/private/server.crt"
    ssl_key => "/etc/ssl/private/server.key"
    ssl_extra_chain_certs => ["/etc/ssl/private/ca.crt"]
    codec => gelf { delimiter => "\x00" }
}
```

The most important part in this configuration is the filter part:

```ruby  hl_lines="2 3 4"
elasticsearch {
    hosts => ["https://gra2.logs.ovh.com:9200"]
    index => "logs-<username>-i-<suffix>"
    user => "y762pm8j2yhge9c2idpdaqs456dshr78nb2313eaze4656oue45psla"
    password => "token"
    enable_sort => false
    query => "userId:%{[userId]}"
    fields  => {
       "firstName" => "firstName"
       "lastName" => "lastName"
       "address" => "address"
    }
}

if "_elasticsearch_lookup_failure" not in [tags] {
     mutate {
        add_field => {
            "address_geolocation" => "%{[address][geolocation][lat]},%{[address][geolocation][long]}"
        }
        remove_field => [ "address" ]
     }
}
```

The filter part is composed by two plugins, the **elasticsearch** plugin and the **mutate** plugin. The elasticsearch plugin has the following configuration:

- **hosts**: This is the address of the OpenSearch API of your LDP cluster. Note that we use https here.
- **index**: This is the name of the index containing your static data.
- **username**: This is the username to authenticate yourself against the API. Again, we recommend that you use [tokens](../tokens-logs-data-platform){.ref} for that.
- **password**: The password of the user.
- **enable_sort**: this setting tells that there is no need to sort the data for the request.
- **query**: This is the query issued. Here the query is a simple string query searching for the document having the field **userId** set at the value userId found in the log event. **%{[userID]}** will be replaced by the value contained in the field userId of the log event.
- **fields**: This is where the magic happens. The field of the document found will be added to the event. The field of the document is on the left and the new (or updated) field of the event is on the right. Be sure to follow the [field naming conventions](../field-naming-conventions){.ref}.

The mutate plugin is here to show you how you can combine different subfield information in one top level field. Here we combine a latitude and a longitude field to create a geolocation field then we remove the original address top-field.

#### Send and retrieve your logs

One simple way to test your new Logstash configuration is to send a log by using echo and openssl. Check the examples below:

```shell-session
$ echo -e '{"version":"1.1", "host": "little bird", "short_message": "Warrior from the North", "level":1, "_userId": "2", "_unitType": "Westerosis", "_power_num": 200 }'\0 | openssl s_client -quiet -no_ign_eof -connect <input-hostname>:<port>
$ echo -e '{"version":"1.1", "host": "little bird", "short_message": "A legendary dragon", "level":1, "_userId": "3", "_unitType": "Dragon", "_power_num": 200000 }'\0 | openssl s_client -quiet -no_ign_eof -connect <input-hostname>:<port>
```

As you can see we just specify the **userId** this order belong to. Sending this log to your Logstash input will give you the following final log:

![Log in the stream](images/stream_1.png){.thumbnail}

The log has been enriched with the fields we declared in our filter automatically. Linking information from an index and the logs allow you to create more meaningful Dashboards based on these information:

![A song of Ice And Fire](images/dashboard.png){.thumbnail}

In this Dashboard, you can see that the first widget is a "quick values" widget based on the firstName fields of the logs we retrieved.


### Monitor the Index Size

The **maximum size** of your index is fixed and is dependent on the number of shards. Shards are the unit of parallelism in OpenSearch, so if search performance is critical, you should choose an index with the highest number of shard you can afford. Thanks to the high performance nodes we use, we managed to send thousands of logs to the Logstash and enrich all of them within seconds using only one shard.

> [!warning]
>
> It is not possible to change the number of shards of one index.
> So you will have to be careful of the storage used by your index.
> **Once your index is full, It will be blocked on write requests** and you will have no choice but to use
> [_Delete By query_](https://opensearch.org/docs/latest/opensearch/rest-api/document-apis/delete-by-query/)
> requests to free space on your index.
>

Note that you can monitor yourself the size of the index by using the following curl query:

```shell-session
$ curl -u <your-token-value>:token -XPUT -H 'Content-Type: application/json' 'https://<ldp-cluster>.logs.ovh.com:9200/logs-<username>-i-<suffix>/_stats/store?pretty' --data-binary "@bulk"
```

This command will give you a document with the following format:


```json
{
  "_shards" : {
    "total" : 2,
    "successful" : 2,
    "failed" : 0
  },
  "_all" : {
    "primaries" : {
      "store" : {
        "size_in_bytes" : 876787361
      }
    },
    "total" : {
      "store" : {
        "size_in_bytes" : 1746852820
      }
    }
  },
  "indices" : {
    "logs-<username>-i-<suffix>" : {
      "uuid" : "JC0IWkd3QYSBNd4B2bBZGg",
      "primaries" : {
        "store" : {
          "size_in_bytes" : 876787361
        }
      },
      "total" : {
        "store" : {
          "size_in_bytes" : 1746852820
        }
      }
    }
  }
}
```

The size in bytes used to compute your billing is the one under the following path:
"indices" -> "logs-<username>-i-<suffix>" -> "primaries" -> "store" -> "size\_in\_bytes".


### Management through OpenSearch API


On Logs Data Platform, we allow users to use OpenSearch API to handle the lifecycle of their indices. You can create and delete indices directly with the OpenSearch API. You can also create aliases and them. We even support templates to allow users to create their mapping a the creation of the index automatically !


#### Index creation and deletion

To create an index on Logs Data Platform, use the following call:

```shell-session
$ curl -u <username>:<mypassword> -XPUT -H 'Content-Type: application/json' 'https://gra2.logs.ovh.com:9200/<username>-i-<suffix>' -d '{ "settings" : {"number_of_shards" : 1}}'
```

- The **-u** option is followed by your LDP username that you can find on **Home** page. The password 'mypassword' follows it after the separator ':'
- The **PUT** HTTP command can be used to create or modify a document.
- The **-H 'Content-Type: application/json'** option is the mandatory header to indicate that the data will be in the json format.
- The address contains the endpoint of the cluster followed by the **name of your index**
- The payload of the request is a  **JSON document** which contains the [settings of your index](https://opensearch.org/docs/latest/opensearch/rest-api/index-apis/create-index/){.external}: the number of shards (the number of replicas will be automatically set at 1).

You have to follow the Logs Data Platform naming convention `<username>-i-<your-suffix>` to create your index. your username, is the one you use to connect to Graylog or to use the API. The suffix can contain any alphanumeric character.

To delete a index use the following call:

```shell-session
$ curl -u <username>:<password> -XDELETE -H 'Content-Type: application/json' 'https://gra2.logs.ovh.com:9200/<username>-i-<suffix>'
```

Here we use the **DELETE** HTTP command to delete the index.

#### Alias creation and deletion

Similarly than indices, you can use the API Calls to delete and create aliases on your indices. The only difference is the convention for the name of your alias. Your alias must be formatted as the following **`<username>-a-<suffix>`**. Here is an exemple call :

```shell-session
$ curl -u <username>:<password> -XPUT -H 'Content-Type: application/json' 'https://gra2.logs.ovh.com:9200/<username>-i-<suffix>/_alias/<username>-a-<alias_suffix>'
```

This call create a individual alias on one index you have previously created.

You can also use the generic aliases call to create aliases:

```shell-session
$ curl -XPOST "https://gra2.logs.ovh.com:9200/_aliases?pretty" -H 'Content-Type: application/json' -d'
{
    "actions" : [
        { "remove" : { "index" : "<username>-i-<one-suffix>", "alias" : "<username>-a-<suffix>" } },
        { "add" : { "index" : "<username>-i-<other-suffix>", "alias" : "<username>-a-<suffix>" } },
        { "remove_index": { "index": "<username>-i-<one-suffix>" } }
    ]
}'
```

All the actions (alias change, alias creation and index deletion) will be done in a single call. All the indices and aliases involved must follow the convention, otherwise an error will be thrown.

#### Templates

Logs Data Platform supports your custom templates. As for indices and aliases, the template must follow some rules in order for them to work:

- the template name must contain your **`<username>`** inside the name. It can be anywhere in the name string.
- The prefix of the indices involved in the template MUST start by **`<username>-i-`**, the "\*" character must be after this prefix
- The alias attached to your template must follow the usual convention: **`<username>-a-<suffix>`**

Here is an exemple of a template for a user **logs-ab-12345**:

```shell-session
$ curl -u <username>:<password> -XPUT -H 'Content-Type: application/json' 'https://gra2.logs.ovh.com:9200/_template/template_for_logs-ab-12345_indices' -d '
{
	"index_patterns" : [ "logs-ab-12345-i-debug*","logs-ab-12345-i-test*"  ],
	"settings": {
		"number_of_shards" : 1,
	},
	"aliases" : {
		"logs-ab-12345-a-all" : {},
		"logs-ab-12345-a-debug" : { "filter" : { "term" : { "type" : "debug" } } }
	}
}'
```

This template will be applied for every new index matching the index pattern.

#### Manager

All the items you create through OpenSearch API will be displayed in your manager and can be deleted or monitored through it.

![manager](images/manager.png){.thumbnail}

Here the first index was create through API, its description was filled automatically.

### Additional Information

Index as a service has some specificities on our platforms. This additional and technical information can help you to use it properly:

- **Replication** is set at 1 and cannot be changed. We ensure the high availability of your index in case of a hardware failure.
- The **maximum size** of your index is fixed and is dependent on the number of shards. If search performance is critical, you should choose an index with the highest number of shard you can afford.
- The **index_refresh_interval** of the index is set at 1 second ensuring near real time search results.
- You are not allowed to change the settings of your index.
- You can create an **alias** on Logs Data Platform and attach it to one or several indices.
- Unlike indices, aliases are **read-only**, you cannot write through an alias yet.
- If there is a feature missing, feel free to contact us on the [community hub](https://community.ovh.com/en/c/Platform/data-platforms){.external}.


## Go further

- Getting Started: [Quick Start](../quick-start){.ref}
- Documentation: [Guides](../){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs)){.external}
