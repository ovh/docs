---
title: Object Storage - Endpoints and Object Storage geoavailability
slug: s3/location
section: General information
order: 025
updated: 2023-04-28
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

**Last updated April 28<sup>th</sup> 2023**

We have designed the S3 storage classes to be **compatible with the S3 API**, considered as a benchmark in the object storage market. You can therefore use Object Storage with most data management tools via the endpoints defined by region and not storage class.

## List of endpoints by region and storage class

| Storage class | endpoint URL | Region available<br><b><i>To be entered in lower case</i></b> |
| ------ | ------ | ------ |
| Object Storage S3 - Standard | `https://s3.<region>.io.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg<br> Frankfurt: de <br>Beauharnois: bhs <br>Roubaix: rbx <br>Warsaw: waw <br>London: uk |
| Object Storage S3 - High Performance |`https://s3.<region>.perf.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg<br>Beauharnois: bhs |
| Object Storage SWIFT - Standard - Legacy |`https://s3.<region>.cloud.ovh.net` | Strasbourg: sbg<br>London: uk<br>Frankfurt: de<br>Warsaw: waw<br>Beauharnois: bhs<br>Gravelines: gra |

The bucket endpoint is a URL, for example `https://my-bucket.s3.gra.perf.cloud.ovh.net` that represents a virtual host style endpoint.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
