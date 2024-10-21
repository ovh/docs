---
title: 'Managing tokens'
excerpt: 'Find out how to use tokens with the Keystone API'
updated: 2023-06-15
---

## Objective

**Find out how to configure Keystone API connections on your service using tokens.**

> [!primary]
>
The information in this guide applies to version 3.0 of the Keystone API.
>

## Instructions

### Definitions

- Endpoint: HTTP address pointing directly to a service's API. For example [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) for the authentication endpoint or [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/) for the GRA zone image management endpoint. 

- Token: A unique string of characters used to authenticate and access resources. The user requests the token by entering their credentials (login details) to the authentication API. The token is generated and it is valid for 24 hours. A token can be "scoped" or "unscoped", meaning it can be tied to a particular tenant or not.

### Outline of a request

Most requests sent to the OpenStack API must follow an authorisation procedure, which involves generating a token and validating it.

Here is an outline of how a request works from authentication to completion.

- Request token creation from authentication endpoint, using credentials
- Send request to the endpoint of the service required (storage, compute, network...) providing the token
- The service API retrieves the token and requests validation from authentication service
- If valid, the call is executed 

Tokens are finite, they expire and must be renewed when necessary. 

You can also use the API to revoke a token before it expires. 

For more information, see the [OpenStack API](http://developer.openstack.org/api-guide/quick-start/) documentation.

### Manual operations

Manual operations are typically used for educational or debugging purposes.

You need to load the environment using the openRC file. To do this, we recommend downloading and using the openrc.sh file, which you will find in the Horizon interface. This way, you will have all of the environment variables you need to build the commands that follow.

To log in to Horizon and download the file, read [this guide](/pages/public_cloud/compute/introducing_horizon). 

In our example we will retrieve the meta-data information for an object that is stored using your Public Cloud Storage solution:

- Request token creation
- Retrieve the token ID variables and publicURL endpoint
- Make a request on the object using the information retrieved

Any request can be built using the cURL command line tool.

#### Step 1: Request token creation

```bash
curl -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | python -mjson.tool
```

The server response will look like this:

```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```

#### Step 2: Getting the "token ID" and "endpoint publicURL" variables

These two pieces of information are available in the results obtained by the above command.

To retrieve the publicURL endpoint, you need to look in the "endpoints" section and the corresponding "Region" (in this example, "SBG").

```bash
$ export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

It is the endpoint address of the Object Storage service that lets you to retrieve information about the object.

```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | grep -i '^x-subject-token' | cut -d" " -f2)
```

This token is the authentication element to use for the next request

#### Step 3: Send an object request with the information retrieved

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET: method HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: object address
- -H "X-Auth-Token: $token": authentication element
- -I: curl option for retrieving the metadata only 

You will get the following response:

```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```

### Automatic management

We strongly recommend using libraries that allow for transparent token management. In this way, you can simply provide credentials to access the library and the tokens are automatically generated, used and renewed without you having to manage them at application level. 

There are many libraries in different languages. For more information, see [the official list](https://wiki.openstack.org/wiki/SDKs).

## Go further

Join our [community of users](/links/community).
