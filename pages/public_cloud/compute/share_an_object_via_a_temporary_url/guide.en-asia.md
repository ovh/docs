---
title: 'Sharing an object via a temporary URL'
excerpt: 'Find out how to share an object via a temporary URL'
updated: 2024-10-08
---

## Objective 

OpenStack lets you share multiple files. In order to manage these files, you have to authenticate yourself using a token each time you make a request to the API. This verifies your read/write authorisations in Swift. The token comes from the authentication system, using your username and password. 

When sharing a file with someone, you will of course want to avoid sharing your personal authentication details. In this instance, you can use temporary addresses (or *tempurl*).

**This guide explains how to share an object via a temporary URL.**

## Requirements

- An [environment that is ready to use the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [The OpenStack environment variables set up](/pages/public_cloud/compute/loading_openstack_environment_variables).
- Python installed on your system.

## Instructions

### Understanding the concept

The temporary address, (or *tempurl*), is a feature which allows you to control the files you want to share. The following are used: 

- **The entry point address**, such as https://storage.sbg1.cloud.ovh.net.
- **The pathway to the object containing your project, the container and the object name**, such as `v1/AUTH_tenant/default/file`. 
- **The tempurlsign setting**, which corresponds to a signature generated according to your secret key, the HTTP method, the file path and the expiration date. 
- **The url_expires setting**, which corresponds to the expiry date of your temporary address. 

### Generating the temporary address (*tempurl*)

#### Step 1: Generate the key

First, you will need to create a key which will be valid for all the files in your project. This means that you only have to generate the key once for all your temporary addresses.  

> [!primary]
>
> We strongly recommend choosing a long secure key, with at least 20 characters. However, please be aware that you can generate a new key at any time. 
> 

There are multiple ways of generating your key. We recommend using the method which is most suitable for you, according to the encryption level that you want to use. For example, from the most effective to the least effective encryption: 

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Once you have your key, you can configure it on your project using the Swift client. Replace “12345” in the following command with your key:

```bash
swift post -m "Temp-URL-Key: 12345"
```

Or by using curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> The full name of the header is `X-Account-Meta-Temp-Url-Key` but the Swift client uses `Temp-Url-Key` because it automatically adds `X-Account-Meta`. 
> 

Now that the key is configured on the account, check that the **header** has been correctly applied using the following command, using the Swift client: 

```bash
swift stat
```

Or with curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### Step 2: Generate the URL

The following tasks can be undertaken offline.  We are going to generate the temporary URL address using a command.  This should be customised using your own details. 

For example, for the elements below:

- **GET**: HTTP method.
- **60**: link available for 60 seconds (you can customise this value) 
- **/v1/AUTH_tenant/default/file**: the path towards your file. You can add the access point later.
- **12345**: to replace with your key.

In the `AUTH_tenant` field, replace `tenant` with your **OS_TENANT_ID** or **OS_TENANT_NAME**.

```bash
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

You get the **tempURL** which lets you see the **path to the file**, the **signature** and the **expiry date** as explained previously.

```bash
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

To make your URL function properly, you have to insert the access point address before your **tempURL**:

```bash
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```
In the example above, this temporary address can be used to download the **file** to the **default** container for 60 seconds, without authentication. After that, the URL will no longer work.

> [!primary]
>
> More advanced users who want to generate temporary addresses without the **swift-temp-url** script can find more information in the official OpenStack documentation.

## Go further

Join our [community of users](/links/community).
