---
title: "Launch an API in a local environment"
updated: 2025-02-15
---

## Objective

While ForePaaS is great as a tool for hosting deployed APIs during both development and production, it’s not always the natural place to edit code. Most software engineers prefer to edit their code on their computer.

Below is how you can build and deploy an API from a local development environment.

- [0) Requirements](/pages/public_cloud/data_platform/technical/sdk/api/api-launch#requirements)
- [1) Download and install locally](/pages/public_cloud/data_platform/technical/sdk/api/api-launch#download-and-install-locally)
- [2) Launch the API](/pages/public_cloud/data_platform/technical/sdk/api/api-launch#launch-the-api)
- [3) Manage authentication](/pages/public_cloud/data_platform/technical/sdk/api/api-launch#manage-authentication)
- [4) Launch everything together](/pages/public_cloud/data_platform/technical/sdk/api/api-launch#launch-everything-together)

## Requirements

### NodeJS

Currently we use v10 in production, but we will soon update it to 14. 
In local, it will work with both versions, we recommend using v14 right now, but to keep a look on the functions used while the update is not done in production.
Install it from [here](https://nodejs.org/en/).

### Redis (optional)

By default the API use Redis as cache in production
It can be disable for dev, but you can also use a local redis

#### Install redis

If you want to have it locally, we recommand to install and use [Docker](https://docs.docker.com/desktop/). 
Then it is possible to:

```sh
# start a redis locally
docker run --name redis -d -p 6379:6379 redis
# stop it
docker stop redis
# restart it
docker start redis
# remove it (need to be stop before, or to add the flag -f in the command)
docker rm redis
```

#### or Disable cache

- Open "forepaas.json"
- Replace these occurence

```json
"cache": {
    "module": "cache-redis"
},
```
by
```json
"_cache": {
    "module": "cache-redis"
},
```
- Remove the cache redis main occurence
```json
    "cache-redis": {
      "version": "2.0.0"
    },
```

## Download and install locally

- From the GUI, go to the API Overview
https://hq.forepaas.io/#/api/{ProjectID}/{API_NAME}
- Select the tag you want to copy, then click on "Download that version"
- Extract the zip in a folder of your choice
- Install node dependencies (we use the package manager yarn by default, we recommend you to use the same to have same condition than production)

```sh
yarn
```

## Launch the API

By default you should find a "run.sh" script, already here, giving a sample of quick run

```sh
KONG_INTERNAL_URI=false \
FOREPAAS_APPLICATION_CREDENTIALS=./creds.json \
FOREPAAS_QB_RESOURCE_ID=http://qb-service:9000 \
REDIS_URI=redis://127.0.0.1 \
ENV=development \
yarn run start
```

- **KONG_INTERNAL_URI**: it will disable a production mode for URL computing, we plan to remove that variable in future
- **FOREPAAS_APPLICATION_CREDENTIALS**: used to link to a local `creds.json` file, it will be described below
- **FOREPAAS_QB_RESOURCE_ID**: get legacy ACL resources
- **REDIS_URI**: if using a local redis, it should override the URL here, as explained in previous section (it should already be the correct value)
- **ENV**: set to `development` for local development
- `yarn run start`: it will launch the API, use `yarn run watch` to reload as soon as code is updated in local environement

If you launch the API, it should start well, but you will not be identify to the platform and your API will not be able to call the Project API. For this, you need to get authenticated.

## Manage authentication

By default, in production on ForePaaS, the API is self-authenticated to the other Project components. But when you are in a local development environment, you need to authenticate though the [Identity Access Manager](/pages/public_cloud/data_platform/product/iam/00-iam-index). 

The best way to do it is by [generating API and secret key for a user (or a service account)](/pages/public_cloud/data_platform/getting-further/generate-api-key). You will also need your Project subdomain.

Once you have the keys and dataplant subdomain, you can create a file called "creds.json" at the root of the API. This file should never be committed (set in .gitignore by default).

```json
{
    "dataplant_url": "https://{DATAPLANT_SUBDOMAIN}.forepaas.io",
    "api_key": "610aa8766608131b00000095610aa87f6608131b00000097",
    "secret_key": "8559d0f805dbb981XXXXXXXXXXXXXXXXXXXXXXXXXXXXX8bf9af358a4"
}
```

## Launch everything together

Launch your API by calling the "run.sh" file.

```sh
sh run.sh
```

## Go further

Join our [community of users](/links/community).