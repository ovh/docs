---
title: Object Storage - Enabling CORS on S3 Object Storage
excerpt: Learn how to enable and configure CORS on your buckets
updated: 2023-05-30
---

## Objective
By default, modern browsers impose a same-origin security policy i.e by preventing a resource loaded from one origin to interact with another resource loaded from another origin.

![CORS](images/cors.png){.thumbnail}

Cross-origin resource sharing (CORS) is a technique that allows resources from a client web applications that is loaded from one domain to interact with resources located in another different domain.
The purpose of this guide is to familiarise you with the concept of CORS and enable it on your S3 buckets.


## Use case scenarios
Typically, good candidate scenarios for CORS in OVHCloud Object Storage would be the following:
- suppose you host a static website in a bucket and you want to use javascript to access resources hosted in the same bucket or in anotger bucket
- suppose you have a frontend application (for example, a mobile application) that needs to access resources hosted in a S3 bucket


## How it works
Under the hood, the client must first know if CORS is enabled on the serverside. It sends a preflight requests (OPTIONS request) to the OVHCloud Object Storage to check the rules for CORS:
- what origins are accepted
- what HTTP verbs
- what headers
- ...etc

Then, based on what the server responds, the CORS request is allowed or not i.e:
- the request's Origin header must be defined in the AllowedOrigin element
- the request method (GET, PUT, ...etc) or the Access-Control-Request-Method header in case of a preflight OPTIONS request must be one of the AllowedMethod elements
- all the headers listed in the request's Access-Control-Request-Headers header on the preflight request must be defined in the AllowedHeader element

The rules for accepted CORS requests are configured at the bucket level.


## In practice
### Prerequisites
- Create a bucket on bucket on which you can configure the CORS rule.
- Make sure credentials and permissions on the bucket/objects are set for the user making the requests.

### Configuration
By using the AWS cli, set up CORS on the bucket:
```sh
aws s3api put-bucket-cors --bucket my-bucket --cors-configuration cors.json
```
where cors.json contains the following configuration:
```json
{
   "CORSRules": [
        {
            "AllowedHeaders": ["header1", "header2", ...etc],
            "AllowedMethods": ["GET", "HEAD", ...etc],
            "AllowedOrigins": ["https://<origin-domain>", ...etc],
            "ExposeHeaders": ["Access-Control-Allow-Origin"]
        }
   ]
}
```

**Example**:

Suppose we have a frontend web application hosted on https://my-app.xyz that uses javascript (React, Angular or any frontend framework) to query media files hosted in a S3 bucket (https://my-media.s3.gra.io.cloud.ovh.net/).

Enable CORS on my-media bucket:
```sh
aws s3api put-bucket-cors --bucket my-media --cors-configuration cors.json
```

Where cors.json :
```json
{
   "CORSRules": [
        {
            "AllowedHeaders": ["Authorization"],
            "AllowedMethods": ["GET", "HEAD"],
            "AllowedOrigins": ["https://my-app.xyz"],
            "ExposeHeaders": ["Access-Control-Allow-Origin"]
        }
   ]
}
```

Basically, what we've done is to tell the client app that the targeted bucket allows CORS requests only if:
- the request contains the "Authorization" header
- the request is limited to "GET" and "HEAD" requests
- the request must come from the "my-app.xyz" domain

And the Object Storage server will expose the "Access-Control-Allow-Origin" header in its responses
