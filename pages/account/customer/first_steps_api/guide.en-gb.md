---
title: First Steps with the API
slug: first-steps-with-ovh-api
section: API
---

## Creating identifiers


### Creation of your application keys

Authentication consists of two keys. The first is the application key. Any application wanting to communicate with the OVH API must be declared in advance.

Click on the following link: <https://eu.api.ovh.com/createApp/>, enter your customer ID, your password, and the name of your application. The name will be useful later if you want to allow others to use it.

You get two keys:

- the application key, named **AK**, e.g:

```sh
7kbG7Bk7S9Nt7ZSV
```

- your secret application key, named **AS**, e.g:

```sh
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

### Requesting an authentication token from OVH

Now that you have your keys, you can request a token from OVH to enable you to make requests to the API. To do so, you have to go to <https://eu.api.ovh.com/1.0/auth/credential> to specify the access you require.
In our example, we will request an OVH read-only token for the entire API.

cURL example:

```sh
$ curl -XPOST -H"X-Ovh-Application: 7kbG7Bk7S9Nt7ZSV" -H "Content-type: application/json" \
https://eu.api.ovh.com/1.0/auth/credential  -d '{
    "accessRules": [
        {
            "method": "GET",
            "path": "/*"
        }
    ],
    "redirection":"https://www.mywebsite.com/"
}'
{"validationUrl":"https://eu.api.ovh.com/auth/?credentialToken=iQ1joJE0OmSPlUAoSw1IvAPWDeaD87ZM64HEDvYq77IKIxr4bIu6fU8OtrPQEeRh","consumerKey":"MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1","state":"pendingValidation"}
```

### Connect the authentication token to an OVH customer account

In the response, you will be sent a validation URL and a **consumerKey** (the token, named **CK**). This token is not initially linked to any customer. You (or another customer) will connect your OVH account to this token by logging in using the URL.

This stage will enable you to identify any OVH customer and to obtain rights on their account. This could be useful if you want to develop an app for the community. Otherwise you can log in directly on the page.

For the time being, this token has an unlimited lifespan (so you can put it in your scripts). Limited lifespan tokens will be offered at a later stage.
Once the user has been authenticated, they will be automatically redirected to the URL you entered when the token was created (*https://www.mywebsite.com/* in the previous example).

You can then make a web application that invites internet users to undergo OVH authentication. They will be automatically redirected to your application once they have been authenticated.


## Using the API for the first time

### Signing requests

Now that you have your three 3 keys (**AK**, **AS**, **CK**), you can sign requests made to the API. The signature is calculated as follows:

```sh
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

For example, if you carry out a GET command on the address https://eu.api.ovh.com/1.0/domains/, the pre-hash signature is:

```sh
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF+MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1+GET+https://eu.api.ovh.com/1.0/domains/++1366560945
```

And post-hash:

```sh
$1$d3705e8afb27a0d2970a322b96550abfc67bb798
```

### Managing timestamps

To avoid replay, you can see that the signature includes the current timestamp in the preceding paragraph.

In order to be able to function, even if your machine is not up-to-date, you can retrieve the "OVH" time carrying out a `GET` on the following URL: <https://eu.api.ovh.com/1.0/auth/time>.

```sh
$ curl https://eu.api.ovh.com/1.0/auth/time
1366561236
```

You can also calculate the time lag between "OVH" time and your system clock and apply this to the signatures.


### Carrying out a request

Once you have the signature, you can make the request to the API. To do this, add your public application key, the token, the date and signature to the request header.

cURL example:

```sh
$ curl -H 'X-Ovh-Application:7kbG7Bk7S9Nt7ZSV'                   \
-H 'X-Ovh-Timestamp:1366560945'                                  \
-H 'X-Ovh-Signature:$1$d3705e8afb27a0d2970a322b96550abfc67bb798' \
-H 'X-Ovh-Consumer:MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1'             \
https://eu.api.ovh.com/1.0/domain
["ovh.com","ovh.net"]
```

### Wrappers on OVH API

In order to simplify the development of your applications, OVH provides you with wrappers in several languages. Using them will allow you to not to care about the signature calculation, and focus on the development of your application.

- *Perl*: <https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip>
- *Python*: <https://github.com/ovh/python-ovh>
- *PHP*: <https://github.com/ovh/php-ovh>
- *Node.js*: <https://github.com/ovh/node-ovh>
- *Swift*: <https://github.com/ovh/swift-ovh>
- *C#*: <https://github.com/ovh/csharp-ovh>
