---
title: Object Storage Swift - Setting up CORS on Object Storage
slug: pcs/cors
excerpt: Find here the concepts to implement CORS
section: OpenStack Swift Storage Class Specifics
order: 050
---

**Last updated 3rd January 2022**

## Objective

CORS is a mechanism that allows code running in a browser (e.g. Javascript) to make requests to a domain other than the one from which it originates.

Swift supports CORS requests to containers and objects.

CORS metadata is only present in the container. The values specified apply to the container itself and all objects contained within it.

> [!primary]
>
> CORS is not compatible with the S3 API.
>

**The purpose of this guide is to familiarise you with the concept of CORS.**

## Requirements

- [Preparing the environment to use the OpenStack API](https://docs.ovh.com/us/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) by installing python-swiftclient
- [Setting the OpenStack environment variables](https://docs.ovh.com/us/en/public-cloud/set-openstack-environment-variables/)

## Instructions

There are 3 metadata to manage the CORS on a container:

| Metadata | Description |
|:------------|:------------|
| X-Container-Meta-Access-Control-Allow-Origin | Origins allowed to make Cross Origin queries, separated by a space. |
| X-Container-Meta-Access-Control-Max-Age | Maximum time during which the origins can retain the results of the preliminary check. |
| X-Container-Meta-Access-Control-Expose-Headers | Headers exposed to the user agent (for example the browser) in the actual request response. Separated by a space. |

### The background

```bash
swift stat <container>
```

```console
                           Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                         Container: <container>
                           Objects: 37
                             Bytes: 973749
                          Read ACL: .r:*
                         Write ACL:
                           Sync To:
                          Sync Key:
                  X-Storage-Policy: PCS
                     Accept-Ranges: bytes
                     Last-Modified: Mon, 02 Aug 2021 12:31:18 GMT
                       X-Timestamp: 1627890032.63094
                      Content-Type: text/plain; charset=utf-8
                              Vary: Accept
                        X-Trans-Id: tx3aa56a4d95b44bfb901b8-006107e597
            X-Openstack-Request-Id: tx3aa56a4d95b44bfb901b8-006107e597
                 X-Iplb-Request-Id: 6DBEFE1E:90B8_3626E64B:01BB_6107E597_4276574:220B
                   X-Iplb-Instance: 33617
```

### CORS Metadata Definition

CORS specifies a wildcard character *, which permits access to all user agents, regardless of domain, protocol, or host. While there are valid use cases for this approach, it also permits a malicious actor to create a convincing facsimile of a user interface, and trick users into revealing authentication credentials. Please carefully evaluate your use case and the relevant documentation to avoid any risk for your organization.


> [!primary]
>
> The CORS specification does not support using this wildcard as a part of a URI. Setting allowed_origin to * would work, while *.example.com would not.
> 

> [!warning]  
>
> If the server is running on a non-standard port, it must be specified: `http://example.com:8080`
>

```bash
swift post -H 'X-Container-Meta-Access-Control-Allow-Origin: http://example.com' <container>
swift post -H 'X-Container-Meta-Access-Control-Max-Age:3600' <container>
swift post -H 'X-Container-Meta-Access-Control-Expose-Headers:X-Container-Meta-Access-Control-Allow-Origin' <container>
# stat
swift stat <container>
```

```console
                             Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                           Container: <container>
                             Objects: 37
                               Bytes: 973749
                            Read ACL: .r:*
                           Write ACL:
                             Sync To:
                            Sync Key:
         Meta Access-Control-Max-Age: 3600
  Meta Access-Control-Expose-Headers: Meta Access-Control-Allow-Origin
    Meta Access-Control-Allow-Origin: http://example.com
                       Accept-Ranges: bytes
                    X-Storage-Policy: PCS
                       Last-Modified: Mon, 02 Aug 2021 09:07:41 GMT
                         X-Timestamp: 1627890032.63094
                        Content-Type: text/plain; charset=utf-8
                                Vary: Accept
                          X-Trans-Id: tx42f4221669584167a6ac8-006107e56e
              X-Openstack-Request-Id: tx42f4221669584167a6ac8-006107e56e
                   X-Iplb-Request-Id: 6DBEFE1E:9094_3626E64B:01BB_6107E56E_4CFC50A:15BC1
                     X-Iplb-Instance: 38427
```

#### Demo page

Host the following html page on the web server corresponding to the CORS origin.

`cors.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test CORS</title>
  </head>
  <body>

    Token<br><input id="token" type="text" size="64"><br><br>

    Method<br>
    <select id="method">
        <option value="GET">GET</option>
        <option value="HEAD">HEAD</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
        <option value="PUT">PUT</option>
    </select><br><br>

    URL (Container or Object)<br><input id="url" size="64" type="text"><br><br>

    <input id="submit" type="button" value="Submit" onclick="submit(); return false;">

    <pre id="response_headers"></pre>
    <p>
    <hr>
    <pre id="response_body"></pre>

    <script type="text/javascript">
      function submit() {
          var token = document.getElementById('token').value;
          var method = document.getElementById('method').value;
          var url = document.getElementById('url').value;

          document.getElementById('response_headers').textContent = null;
          document.getElementById('response_body').textContent = null;

          var request = new XMLHttpRequest();

          request.onreadystatechange = function (oEvent) {
              if (request.readyState == 4) {
                  responseHeaders = 'Status: ' + request.status;
                  responseHeaders = responseHeaders + '\nStatus Text: ' + request.statusText;
                  responseHeaders = responseHeaders + '\n\n' + request.getAllResponseHeaders();
                  document.getElementById('response_headers').textContent = responseHeaders;
                  document.getElementById('response_body').textContent = request.responseText;
              }
          }

          request.open(method, url);
          if (token != '') {
              // custom headers always trigger a pre-flight request
              request.setRequestHeader('X-Auth-Token', token);
          }
          request.send(null);
      }
    </script>

  </body>
</html>

```

**Request Headers**

```console
GET /v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/pcs-web/lorem.txt HTTP/1.1
Host: storage.gra.cloud.ovh.net
Connection: keep-alive
sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"
X-Auth-Token: gAAAAABhB60RtB6kbTjksGne23pvSiW1X24BjFzpgInOeoXomd21etqpLw6ocys4SuC9PHZ3PfVMCHIMvb6yjyoEwg1XY2iWfcenCMOhG7POgv-i2NePNJSkjc9cE0eVTDEQ-VhtcOCc-ZvbU459a0HpsWUbGMwn8bUi4-hl3Cv5bwGgLuBxmbw
sec-ch-ua-mobile: ?0
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
Accept: */*
Origin: http://example.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://example.com
Accept-Encoding: gzip, deflate, br
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
If-None-Match: 51f122f524c46cafcf9628305db99144
If-Modified-Since: Tue, 03 Aug 2021 07:10:26 GMT
```

**Response Headers**

```console
HTTP/1.1 200 OK
Access-Control-Expose-Headers: expires, content-language, cache-control, meta, X-Container-Read, X-Storage-Policy, last-modified, etag, x-timestamp, pragma, x-trans-id, access-control-allow-origin, content-type, x-openstack-request-id, x-object-meta-mtime
Accept-Ranges: bytes
Last-Modified: Tue, 03 Aug 2021 07:10:26 GMT
X-Timestamp: 1627974625.84403
Access-Control-Allow-Origin: http://example.com
X-Object-Meta-Mtime: 1627974571.298786
X-Trans-Id: txdf16d14f7cbd4d0b83b5c-006108f198
X-Openstack-Request-Id: txdf16d14f7cbd4d0b83b5c-006108f198
Date: Tue, 03 Aug 2021 07:34:49 GMT
X-IPLB-Request-ID: 58AB65BB:76FF_3626E64B:01BB_6108F198_41D39CC:10AC4
X-IPLB-Instance: 12309
Content-Length: 746
Content-Type: text/plain
Etag: 51f122f524c46cafcf9628305db99144
```

Before a browser issues an actual request, it can issue a screening request. The screening request is a call to verify that the source is authorised to make the request. The sequence of events is as follows:

- The browser sends an OPTIONS request to Swift.
- Swift returns `200/401` to the browser depending on the authorised `origins`.
- If the response is `200`, the browser makes the "actual request" to Swift, i.e. `PUT`, `POST`, `DELETE`, `HEAD`, `GET`.

When a browser receives a response to an actual request, it exposes only the headers listed in the `Access-Control-Expose-Headers` header. By default, Swift returns the following values for this header:

- "simple-response-header" as listed on http://www.w3.org/TR/cors/#simple-response-header
- The `etag`, `x-timestamp`, `x-trans-id`, `x-openstack-request-id` headers.
- All metadata headers (`X-Container-Meta-*` for containers and `X-Object-Meta-*` for objects).
- The headers listed in `X-Container-Meta-Access-Control-Expose-Headers`.
- Headers configured with the cors_expose_headers option in `proxy-server.conf`.

### Delete CORS Metadata

```bash
swift post -H `X-Remove-Container-Meta-Access-Control-Allow-Origin:x` <container>
swift post -H "X-Remove-Container-Meta-Access-Control-Max-Age:x" <container>
swift post -H "X-Remove-Container-Meta-Access-Control-Expose-Headers:x" <container>
# stat
swift stat <container>
```

```console
                           Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                         Container: <container>
                           Objects: 37
                             Bytes: 973749
                          Read ACL: .r:*
                         Write ACL:
                           Sync To:
                          Sync Key:
                  X-Storage-Policy: PCS
                     Accept-Ranges: bytes
                     Last-Modified: Mon, 02 Aug 2021 12:31:18 GMT
                       X-Timestamp: 1627890032.63094
                      Content-Type: text/plain; charset=utf-8
                              Vary: Accept
                        X-Trans-Id: tx3aa56a4d95b44bfb901b8-006107e597
            X-Openstack-Request-Id: tx3aa56a4d95b44bfb901b8-006107e597
                 X-Iplb-Request-Id: 6DBEFE1E:90B8_3626E64B:01BB_6107E597_4276574:220B
                   X-Iplb-Instance: 33617
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
