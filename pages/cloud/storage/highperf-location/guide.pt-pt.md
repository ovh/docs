---
title: Localização (endpoints) (EN)
slug: s3/location
section: Object Storage S3 High Performance
order: 025
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/s3/location/'
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

**Last updated September 27<sup>th</sup> 2022**

We have designed the S3 storage classes to be **compatible with the S3 API**, considered as a benchmark in the object storage market. You can therefore use Object Storage with most data management tools via the endpoints defined by region and not storage class.

Locate your S3 access keys and access the different storage classes via command line (s3cmd) or CLI (AWS-CLI)

## List of endpoints by region and storage class

| Recommended storage class | endpoint URL | Region available<br><b><i>To be entered in lower case</i></b> |
| ------ | ------ | ------ |
| Object Storage S3 - Standard | `https://s3.<region>.io.cloud.ovh.net` | Gravelines: gra |
| Object Storage S3 - High Performance |`https://s3.<region>.perf.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg |
| Object Storage SWIFT - Standard |`https://s3.<region>.cloud.ovh.net` | Strasbourg: sbg<br>London: uk<br>Frankfurt: de<br>Warsaw: waw<br><br><i>In progress: Gravelines</i> |

The bucket endpoint is a URL, for example `https://my-bucket.s3.fr-par.scw.cloud.` that represents a virtual host style endpoint.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
