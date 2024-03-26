---
title: Object Storage - Endpoints and Object Storage geoavailability
updated: 2024-03-01
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

We have designed the S3 storage classes to be **compatible with the S3 API**, considered as a benchmark in the object storage market. You can therefore use Object Storage with most data management tools via the endpoints defined by region and not storage class.

## Object Storage S3

OVHcloud Object Storage S3 can be accessed through a unique endpoint: `https://s3.<region>.io.cloud.ovh.net`. This unique endpoint can address both Standard and High Performance storage classes. All S3 API operations are supported with this unique endpoint.

### List of available regions

| Region name | Region<br><b><i>To be entered in lower case</i></b> | Protocol |  Signature version |
| ------ | ------ | ------ | ------ |
| Gravelines | gra | HTTPS | 4 |
| Frankfurt | de | HTTPS | 4 |
| Beauharnois | bhs | HTTPS | 4 |
| Roubaix | rbx | HTTPS | 4 |
| Warsaw | waw | HTTPS | 4 |
| London | uk | HTTPS | 4 |

The bucket endpoint is a URL, for example `https://my-bucket.s3.gra.io.cloud.ovh.net` that represents a virtual host style endpoint.

### Endpoint retrocompatibility

The legacy `https://s3.<region>.perf.cloud.ovh.net` endpoint will still be maintained for retrocompatibility purpose and all S3 API operations will still be supported. However, please note that this endpoint will automatically enforce the High Performance storage class of object upload operations.


## Object Storage Swift

| Storage solution | endpoint URL | Region available<br><b><i>To be entered in lower case</i></b> |
| ------ | ------ | ------ |
| Object Storage SWIFT - Standard - Legacy |`https://s3.<region>.cloud.ovh.net` | Strasbourg: sbg<br>London: uk<br>Frankfurt: de<br>Warsaw: waw<br>Beauharnois: bhs<br>Gravelines: gra |


## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
