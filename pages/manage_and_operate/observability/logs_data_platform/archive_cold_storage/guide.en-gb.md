---
title: Archiving your logs - Cold-storage
excerpt: This long-term storage feature keeps your logs safely and cost efficiently over several years.
updated: 2023-01-16
---

## Objective

The Logs Data Platform gives you a custom log retention system, you can adjust it when you create your stream. But in some cases you may want to keep your logs beyond the provided duration. It can be for legal reasons, for analytic purposes or maybe only for historical ones. The long-term storage feature allows you to generate a daily archive of any stream with some simple configuration steps.

## Requirements

As implied in the title, you will need a stream. If you don't know what a stream is or if you don't have any, you can follow this [quick start tutorial](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start). You must edit the stream configuration to activate the cold storage. Click on the Edit button in the menu to go to the stream configuration page.

![Streams menu](images/streams-menu-1.png){.thumbnail}

## Instructions

### Activating cold storage on a stream

On this page you will find the long-term storage toggle. Once enabled, you will be able to choose different options:

- The compression algorithm. We currently support [GZIP](http://www.gzip.org/){.external}, [DEFLATE (AKA zip)](http://www.zlib.net/feldspar.html){.external}, [Zstandard](https://facebook.github.io/zstd/){.external} or [LZMA (used by 7-Zip)](http://www.7-zip.org/7z.html){.external}.
- The retention duration of your archives (from one year to ten years).
- The storage backend for your logs (on [OVH Object Storage](https://www.ovhcloud.com/fr/public-cloud/object-storage/){.external} or [OVH Public Archive](https://www.ovhcloud.com/fr/public-cloud/cloud-archive/){.external}).
- The content of your archives: GELF, one special field [X-OVH-TO-FREEZE](/pages/manage_and_operate/observability/logs_data_platform/getting_started_field_naming_convention), or both (you will get two separate archives in this case)
- The activation of the notification for each new archive available.

Note that OVHcloud Object Storage is more expensive than OVHcloud Public Archive but allows you to immediately download your archive whereas there is a delay (from 10 minutes to 4h) before being able to download your files on Public Archive. Depending on the urgency of your future logs retrieval, you will have to choose your backend accordingly.

The content of your archive is flexible. By default, you get the full log content in GELF format. But you can choose to have an archive containing only the value of the custom LDP field X-OVH-TO-FREEZE. This field can, for example, be used to keep your logs in a human-readable or original format. You can also choose to have two archives simultaneously: the original GELF and the X-OVH-TO-FREEZE archives.

![Edit menu](images/edit-1.png){.thumbnail}

As soon as you click on `Save`{.action}, the cold storage is activated. Here are some more things you need to know about this feature:

> [!warning]
>
> As soon as the feature is activated, your logs will be stored for the specified duration. The effect is immediate so the billing of this feature will be also immediate.
>
> - Deactivating the cold storage on a stream will prevent the production of new archives but it won't delete the already produced archives. These archives will be kept for the duration configured.
> - Changing the retention duration WILL delete any archive exceeding the new retention (Ex: choosing a one year retention will implicitly delete all archives older than one year).
> - We push a daily archive of the 2 days old data you pushed. So every day you will get the archive of the day before yesterday.
> - When you activate the feature for the first time we can't create an archive for data older than two days before the activation.
> - Deleting the stream WILL delete any archive associated. The stream must be alive to be able to keep its archive.
>

### Retrieving the archives

#### Using the OVHcloud Manager

On a cold storage enabled stream (you can quickly see if they are with the archive checkbox), you have a new `Archives`{.action} item on the bottom of the stream menu. Click on it to navigate to the archives pages. On this page, you have a list of the archives produced. Each archive is named after its date, so you can quickly retrieve an archive of a particular day.

![Archive page](images/archive-1.png){.thumbnail}

From this page you can launch the "unfreezing" process of your archive and make it available for download. This delay varies between 10 minutes to 4 hours depending on multiple factors like the size of the archive. There is no delay in the case you choose the **OVH Object Storage** backend for your archives.
Once available, its status changes and a new `Download`{.action} action appears.

#### Using the API

If you want to download your logs using the API (to use them in a Big Data analysis platform for example), you can do all these steps by using the OVHcloud api available at [https://api.ovh.com](https://api.ovh.com){.external}. You can try all these steps with the [OVH API Console](https://api.ovh.com/){.external}.

You will need your OVHcloud service name associated with your account. Your service name is the login logs-xxxxx that is displayed in the left of the OVHcloud Manager.

**Retrieve your stream using the streams API call**

- Return the list of graylog streams:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)

**Retrieve the list of your archives and its details with the corresponding endpoints**

- Return details of specified archive:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
> - `streamId`: The stream you want archives from
> - `archiveId`: The archive you want details from

**You can generate a temporary URL download by using the following endpoint**

- Get a public temporary URL to access the archive:

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
> - `streamId`: The stream you want archives from.
> - `archiveId`: The archive you want details from.
>
**Example result:**
```shell-session
{
  "expirationDate": "2024-07-31T12:27:22.797Z",
  "url": "string"
}
```
It will take some time (depending on the size of your archive file) for your archive to unfreeze. Once it has, you will need to use the API call again. If your archive is available, you will see a result like this:
```shell-session
{
  "expirationDate": "2024-08-01T15:16:21.914370+00:00",
  "url": "https://archive-<region>.logs.ovh.com/eyJub25jZSI6ICJQbFFmRVpELzJ3TVRhVDM2RHZUSUNsYkZMR0Q0SGlaMiIsICJkYXRhIjogIkxVRmd6czQzeUhiaTZWSnp6d1JuQ1M5UzJrbllYWUp0U1FBOHY0cS9BUlo4cVpIeldZTjJDakN4N1I3Y0FsVi94SUhqTUx4dUNBZmhwQUdpYnpoQ1pWUlhMc2dQTkVHWm9ZZTNLOFlueUFCMFMwNWdmaXJ5YkZyZmpuekZrYkZ4am5EYjE5YlR2ejg0NUlCQW9Ralg2T3JPUFMveXg2UjRiY1lLM0tETlVMZHRtcXRMaG53d2VoZGg3bkZZQzRXbVdmL0lUbjE4czYzQm9Zc1oxNW1VSkNFdVd1MmhlTFM1WWF0WnJzWWVrU0pRVmkwZVFYbi9zd3AwSG1yVzRTTFY5Z21oaG50NEI5akM5eXBzVWFUTlRRSFFkOGpVZk9rWFd2S1pKTDlQQTBkWHJ1OFlFNmNJaCtTSUVONWhybE5adUE2QmxYOUt6NmQrVnBTZGdlS3ByT0hRVFdJalBFZmpQMjhoUkVXKzF5eDY4cjJURXNZeUhMR3FwR3lUa0ZqYkd3PT0ifQ==/<archive-name>.gz"
}
```

#### Using ldp-archive-mirror

To allow you to get a local copy of all your cold stored archives on Logs Data Platform, we have developed an open source tool that will do this passively: **ldp-archive-mirror**
The installation and configuration procedure is described on the related [github page](https://github.com/ovh/ldp-archive-mirror){.external}

#### Content of the archive

The data you retrieve in the archive is by default in [GELF format](https://go2docs.graylog.org/4-x/getting_in_log_data/gelf.html?tocpath=Getting%20in%20Log%20Data%7CLog%20Sources%7CGELF%7C_____0#GELFPayloadSpecification){.external}. It is ordered by the field timestamp and retains all additional fields that you would have added (with your [Logstash collector](/pages/manage_and_operate/observability/logs_data_platform/ingestion_logstash_dedicated_input) for example). Since this format is fully compatible with JSON, you can use it right away in any other system.

```json
 {"_facility":"gelf-rb","_id":11,"_monitoring":"cb1068c485e738655cfe10df5df3a9a185aa8e301b5c8d0747b3502e8fdcc157","_type":"direct","full_message":"monitoring message (11) at 2017-05-17 09:58:08 +0000","host":"shinken","level":1,"short_message":"monitoring msg (11)","timestamp":1.4950150886486998E9}
 {"_facility":"gelf-rb","_id":23,"_monitoring":"490de2b690eaab7aaf647cfaddb95e0fe51617985efad3afcce45ae931c41c97","_type":"direct","full_message":"monitoring message (23) at 2017-05-17 09:58:08 +0000","host":"shinken","level":1,"short_message":"monitoring msg (23)","timestamp":1.4950150888951592E9}
 {"_facility":"gelf-rb","_id":10,"_monitoring":"b6e4749eb577d8534e237f930b4fc9612a74012aab50fc01b2ef317db1125df1","_type":"direct","full_message":"monitoring message (10) at 2017-05-17 10:03:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (10)","timestamp":1.4950153892895508E9}
 {"_facility":"gelf-rb","_id":22,"_monitoring":"8b08f448859698e35cbcfeaac3a4c2eb21f08230292cbbd7a1dfce625ff1e633","_type":"direct","full_message":"monitoring message (22) at 2017-05-17 10:03:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (22)","timestamp":1.4950153895357378E9}
 {"_facility":"gelf-rb","_id":9,"_monitoring":"fe7f7c6f36a6a8de0333a8bee7576181448d96a79390bf7018b66dd96582c3ba","_type":"direct","full_message":"monitoring message (9) at 2017-05-17 10:08:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (9)","timestamp":1.49501568940605E9}
 {"_facility":"gelf-rb","_id":21,"_monitoring":"cc4f1dd33a01800ea95f88807053ad9d0ba6aecfddf5d9a4499230ea598adfb1","_type":"direct","full_message":"monitoring message (21) at 2017-05-17 10:08:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (21)","timestamp":1.495015689660263E9}
 {"_facility":"gelf-rb","_id":8,"_monitoring":"25c435285c4e5feb23a8997a33b3115e43f3979e17c1d89c5eb7aa209bf6fddb","_type":"direct","full_message":"monitoring message (8) at 2017-05-17 10:13:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (8)","timestamp":1.4950159899833767E9}
 {"_facility":"gelf-rb","_id":20,"_monitoring":"59d4615fed4a68661a3a154377a938f91cdb621df6b3d700a166f20540ceda31","_type":"direct","full_message":"monitoring message (20) at 2017-05-17 10:13:10 +0000","host":"shinken","level":1,"short_message":"monitoring msg (20)","timestamp":1.495015990229378E9}
 {"_facility":"gelf-rb","_id":7,"_monitoring":"ff558f06ab12e03cd9c5ff23ba0f8bebbdf939d00e5b8c2faaf3f7a03be8a6e0","_type":"direct","full_message":"monitoring message (7) at 2017-05-17 10:18:09 +0000","host":"shinken","level":1,"short_message":"monitoring msg (7)","timestamp":1.495016289332681E9}
```

Remember, that you can also use a special field X-OVH-TO-FREEZE on your logs to craft an additional archive with only the value of this specific field at each line (along with the usual gelf archive). This file can be used for example to restore a common human readable log file.

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
