---
title: 'Sharing an object via a temporary URL'
excerpt: 'Share an object via a temporary URL'
slug: share_an_object_via_a_temporary_url
legacy_guide_number: g2007
section: 'Object Storage'
---

**Last updated 21st January 2019**

## Objective 

OpenStack lets you share multiple files.  In order to manage these files, you have to authenticate yourself using a token each time you make a request to the API.  This verifies your read/write authorisations in Swift. This token comes from the authentication system, using your username and password. 

When you want to share a file with someone, you will of course want to avoid sharing your personal authentication details. In this instance, you can use temporary addresses (or *tempurl*).

Find out how to share an object via a temporary URL.

## Requirements

- Python installed on your system
- an environment that is ready to use the OpenStack API 
- the OpenStack environment variables set up

## Instructions

### Understanding the concept

The temporary address, (or *tempurl*), is a feature which allows you to control the files which you want to share. The following are used: 

- **The entry point address**, such as https://storage.sbg1.cloud.ovh.net.
- **The pathway to the object containing your project, the container and the object name**, such as `v1/AUTH_tenant/default/file`. 
- **The tempurlsign setting**, which corresponds to a signature generated according to your secret key, the HTTP method, the file path and the expiration date. 
- **The url_expires setting**, which corresponds to the expiry date of your temporary address. 

### Generate the temporary address  (*tempurl*)

#### 1. Generate the key.

First, you will need to create a key. This will be valid for all the files in your project. This means that you only have to generate the key once for all your temporary addresses.  

> [!primary]
>
> We strongly recommend choosing a long secure key, with at least 20 characters. However, please be aware that you can generate a new key at any time. 
> 

There are many ways of generating your key, such as the following commands sha512sum or sha256sum. We advise using the method which is most suitable for you, according to the encryption level that you want to use. For example, from the most effective to the least effective encryption: 

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Once you have your key, you can configure this on your project using the Swift client. Please ensure that you replace the “12345” chain with your key:

```bash
swift post -m "Temp-URL-Key: 12345
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

#### 2. Generate the URL.

The following tasks can be undertaken offline.  We are going to generate the temporary URL address using a command.  This should be customised using your own details. 

For example, for the elements below:

- **GET**: HTTP method.
- **60**: link available for 60 seconds (you can customise this value) 
- **/v1/AUTH_tenant/default/file**: the path towards your file. You don’t need to the access point at this stage of the process.
- **12345**: to replace with your key.

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

You get the **tempURL** which lets you see the **path to the file**, the **signature** and the **expiry date** as explained previously.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

To make your URL function properly, you have to add the access point address before your **tempURL**:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```
In the example above, this temporary address can be used to download the **file** to the **default** container for 60 seconds, without authentication. After that, the URL will no longer work.

> [!primary]
>
> For more advanced users who want to generate temporary addresses without the **swift-temp-url** script, you can get more information from the official OpenStack documentation.

## Go further

Join our community of users on <https://community.ovh.com/en/>.