---
title: Object Storage - Setting up CORS on S3 Object Storage
excerpt: Learn how to enable and configure CORS on your buckets
updated: 2023-05-30
---

## Objective

By default, modern browsers impose a same-origin security policy i.e. by preventing a resource loaded from one origin to interact with another resource loaded from another origin.

![CORS](images/cors.png){.thumbnail}

Cross-Origin Resource Sharing (CORS) is a technique that allows resources from a client web application that is loaded from one domain to interact with resources located in a different domain.

**The purpose of this guide is to explain the concept of CORS and how to enable it on your S3 buckets.**

### Use case scenarios

Usual use case scenarios for CORS in OVHcloud Object Storage would be the following:

- You host a static website in a bucket and you want to use JavaScript to access resources hosted in the same bucket or in another bucket.
- You have a frontend application (e.g. a mobile application) that needs to access resources hosted in a S3 bucket.

### How does it work?

Under the hood, the client must first know if CORS is enabled on the server side. It sends a preflight request (OPTIONS request) to the OVHcloud Object Storage to check the rules for CORS:

- Which origins are accepted
- Which HTTP verbs
- Which headers
- etc.

Then, based on what the server responds, the CORS request is allowed or not:

- The request's `Origin` header must be defined in the `AllowedOrigins` element.
- The request method (GET, PUT, etc.) or the `Access-Control-Request-Methods` header (in case of a preflight OPTIONS request) must be one of the `AllowedMethods` elements.
- All the headers listed in the request's `Access-Control-Request-Headers` header on the preflight request must be defined in the `AllowedHeaders` element.

The rules for accepted CORS requests are configured at the bucket level.

## Requirements

- A bucket on which you can configure the CORS rule
- Credentials and permissions on the bucket/objects for the user making the requests

## Instructions

### Configuration

Using the AWS CLI, set up CORS on the bucket:

```sh
aws s3api put-bucket-cors --bucket my-bucket --cors-configuration cors.json
```

The cors.json file contains the following configuration:

```json
{
   "CORSRules": [
        {
            "AllowedHeaders": ["header1", "header2", etc.],
            "AllowedMethods": ["GET", "HEAD", etc.],
            "AllowedOrigins": ["https://<origin-domain>", etc.],
            "ExposeHeaders": ["Access-Control-Allow-Origin"]
        }
   ]
}
```
#### Configuration example

Let's assume we have a frontend web application hosted on `https://my-app.xyz` that uses JavaScript (React, Angular or any frontend framework) to query media files hosted in a S3 bucket (`https://my-media.s3.gra.io.cloud.ovh.net/`).

We enable CORS on the my-media bucket:

```sh
aws s3api put-bucket-cors --bucket my-media --cors-configuration cors.json
```

The cors.json file contains the following configuration:

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

Basically, what has been done here is to tell the client application that the targeted bucket allows CORS requests only if:

- The request contains the "Authorization" header.
- The request is limited to "GET" and "HEAD" requests.
- The request comes from the "my-app.xyz" domain.

The Object Storage server will expose the `Access-Control-Allow-Origin` header in its responses.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
