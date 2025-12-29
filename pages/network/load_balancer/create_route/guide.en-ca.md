---
title: "Configuring an OVHcloud Load Balancer with HTTP routes"
excerpt: "Find out how to dynamically direct your requests to a specific farm"
updated: 2025-11-27
---

## Objective

The OVHcloud Load Balancer service redirects the front-end’s incoming traffic to the servers that make up the front-end’s default farm, or its default redirection.

In some cases, you can go further and route, redirect, or block traffic according to a range of criteria. For example, in the case of an HTTP(S) service, you can filter traffic based on the HTTP method, the URL, or even the value of a cookie or header. 

In the OVHcloud Load Balancer service, these elements are called **routes**. A route is a specific action to perform if one or more conditions are met.

**This guide will show you how to direct your requests dynamically to a specific farm using routes.**

## Requirements

- Have an [OVHcloud Load Balancer](/links/network/load-balancer) on an offer allowing the creation of routes.
- Have access to the [OVHcloud API](/links/api).

## Instructions

> [!primary]
>
> Although this guide focuses on **HTTP routes**, the same principle applies to **TCP routes**. This can be useful for directing HTTP/2 traffic to a specific farm or rejecting incoming requests from certain IP addresses.
>

This feature is only available via the API. This guide will present the general principles as well as use cases for routes drawn from real-life scenarios.

### Introduction to routes

A route is used to control traffic according to different criteria. They can be expressed in the form of **rules**, **conditions**, or **actions**.

For example, *IF* the URL _starts with_ '/wp-admin/' (1) *AND* the connection _is_ HTTP (2) *THEN* _redirect_ to the HTTPS version of the page (3).

In this example, there are two rules :

- the connection must come from an HTTP frontend (2);
- its URL must start with the WordPress administration pages (1).

There is an action associated with these rules: redirect to the HTTPS version of the page (3).

This is what is known as an "end action". That means if the rules are validated, the evaluation of the routes stops and the action is executed.

### API presentation <a name="apipresentation"></a>

Route management is only available through the [OVHcloud API](/links/api). It is only valid for the **http** and **tcp** protocols, and the path `/ipLoadbalancing/{serviceName}/{protocol}/route/`{.action} exposes the dedicated route API.

The OVHcloud Load Balancer service route API has been specifically designed to be flexible, powerful, and scalable. It is organized around three main sections:

1. API calls listing the available rules and actions.
2. API calls listing the routes configured on your OVHcloud Load Balancer service.
3. API calls for configuring the routes of your OVHcloud Load Balancer service.

> [!primary]
>
> To display only the API calls related to routes in the OVHcloud API console, you can use the `filter`{.action} field with the keyword "[a-z]*".
>

When you want to configure a route or rules, the first thing to do is to consult the **available actions and rules**. This will give you the possible values for the configuration fields of the route and rule APIs.

- A route can have several rules.
- A route can only be attached to a single frontend.
- A frontend can have several routes. In this case, the evaluation order depends on its type and weight.

When a request arrives on your OVHcloud Load Balancer service, the routes are evaluated successively according to the following principles:

1. first, the **reject and rewrite routes**, then the **farm routes**;
2. within these categories, the routes are evaluated in **increasing weight order**;
3. if two routes have the same weight, the **first route created** is evaluated first;
4. only the **first action** of all validated rules is executed.

### Available rules and actions

This first section of the API contains an up-to-date list of available actions and rules for your OVHcloud Load Balancer service. It contains one call for the actions and another for the rules. These two calls return a list of objects. Each object is named, and indicates whether it applies to TCP or HTTP routes, as well as the expected values or types of values for the different fields of the API. If a field is "null", it means no value is expected. If an invalid value is provided, the API will return a validation error.

#### Actions

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

For more information on this call, we invite you to consult the section [Available Actions](#available-actions), at the bottom of this guide.

#### Rules

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

For more information on this call, we invite you to consult the section [Available Rules](#available-rules), at the bottom of this guide.

### Configured routes

This second section of the API contains only one call. It was mainly designed to facilitate the implementation of auto-completion mechanisms. It returns the identifier, name, and type of each defined route. The details of a route can be obtained with a `GET /ipLoadbalancing/{serviceName}/route/{type}/{routeId}` call defined below.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedRoutes
>

For more information on this call, we invite you to consult the section " [Route Handling](#handling-routes) ", at the bottom of this guide.

### Route configuration

With these basic principles on available actions and rules, and the route evaluation order, these routes can be manipulated in the same way as farms. When you create a route, you can attach rules to it. The possible values for the rules and actions are defined by the API calls.

For more information on these methods, you can consult the section " [Route Handling](#handling-routes) ", at the bottom of this guide.

## Examples

To demonstrate the utility of routes, this section will offer some practical examples of the use of this technology for OVHcloud's internal needs, without going into the details of the API calls.

You will find the details of the API calls in the section [Route Handling](#handling-routes), at the bottom of this guide and the following sections.

### Force HTTPS for WordPress login pages

The HTTPS protocol has become the norm. Its objective is to make all websites available in HTTPS in a secure manner, thanks to the SSL/TLS protocol. If you need an SSL/TLS certificate, you can use your OVHcloud Load Balancer service to order a new one, which will be managed for you in a completely automatic way.

Migrating a website to HTTPS requires work, especially to avoid [Mixed-Content](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content) problems. It may be interesting to migrate your website section by section, starting by securing the pages that send login credentials.

An approach could be to rely on the beginning of WordPress URLs. By default, the URLs of WordPress login pages start with "/wp-login". We would therefore need to:

- a route with a **redirection action**;
- a rule in this route that detects URLs starting with **"/wp-login"**.

In practice, this gives a route as follows:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your HTTP frontend |
| displayName | "Redirect WordPress connections to HTTPS" |
| weight | (empty) |
| action.type | "redirect" |
| action.status | 302 for a temporary redirect, 301 for a permanent redirect |
| action.target | "`https://\${host}\${path}\${arguments}`" to take the same host, path and arguments |

On this route, we will attach a rule:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| routeId | Identifier of the route created above |
| field | "uri" |
| subField | (empty) |
| match | "startswith" |
| negate | false |
| pattern | "/wp-login" |

Then apply the configuration to the concerned area.

> [!warning]
>
> To add a new redirection, you will have to repeat these actions, creating a route, then a rule. If a second rule is added to the same route, both rules must be validated for the redirection to work. Note that if the rules are `startswith /wp-login` and `startswith /wp-admin`, the redirection will never work because these two conditions cannot be true at the same time.
>

### Route based on a domain (VHost)

This is the feature that made the web possible when it was in its infancy, with the possibility of exposing several sites behind the same IP address thanks to the "Host" field of HTTP headers.

For example, if your infrastructure is composed of a VPS for your website, an OVHcloud Load Balancer for SSL/TLS termination, and redirections to a maintenance page with a backup server in the farms, you would have needed an Additional IP per website, routed to your OVHcloud Load Balancer, and a frontend per IP in the past.

With routes, you can share the same frontend and choose the server farm dynamically, thanks to the *[a-z]* field.

For this, you will need:

- a route per VHost;
- a rule per route detecting a specific domain.

In practice, to route the domain **www.example.com**, this will give the following route:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your frontend |
| displayName | "VHost - www.example.com" |
| weight | (empty) |
| action.type | "farm" |
| action.status | (empty) |
| action.target | Identifier of the farm to which to direct this domain |

And on this route, we will attach a rule:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| routeId | Identifier of the route created above |
| field | "host" |
| subField | (empty) |
| match | "is" |
| negate | false |
| pattern | "www.example.com" or a domain of your choice |

Finally, apply the configuration.

### Reserve an Additional IP for a specific website

If you host a website on a VPS, you might want to dedicate an IP address to a specific client. You can easily make the IP available by routing it to your OVHcloud Load Balancer service, then configuring a dedicated frontend attached to this Additional IP, and setting the client's target VPS as the `defaultFarmId`.

However, what will happen if another client detects this and configures their domain to point to the premium client's IP? By default, this will work, and their website will be routed to another client's VPS. If an SSL/TLS certificate is present, this will still work, as all certificates are automatically available for all frontends.

In such scenarios, the solution is to add a rule that **rejects requests if the domain is not a premium domain**. You can do this with a reject route and a rule.

In practice, to reserve a frontend with a dedicated IP for the domain **www.example.com**, this will give the following route:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your frontend |
| displayName | "Restriction to www.example.com" |
| weight | (empty) |
| action.type | "reject" |
| action.status | 403 |
| action.target | (empty) |

And on this route, we will attach a rule:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| routeId | Identifier of the route created above |
| field | "host" |
| subField | (empty) |
| match | "is" |
| negate | true |
| pattern | "www.example.com" or a domain of your choice |

Finally, apply the configuration.

### Route based on a URL and an HTTP method

On some specific infrastructures, certain requests must be routed to a specific farm. For example, to handle rare but data-intensive requests without impacting production, such as analytical requests that work on a read-only copy of the data with a server having a higher memory volume.

If, for example, the request is sent:

- with the **POST** method;
- on a URL matching **"^/.*/batch-analytics$"**.

Then, you would need a route with two rules, one of which uses a regular expression.

In practice, this gives a route as follows:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your frontend |
| displayName | "Route batch analytics to a dedicated farm" |
| weight | (empty) |
| action.type | "farm" |
| action.status | (empty) |
| action.target | Identifier of the farm to which to direct these operations |

And on this route, we will attach two rules:

| Field | Rule 1 | Rule 2 |
| :--- | :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service | as for rule 1 |
| routeId | Identifier of the route created above | as for rule 1 |
| field | "method" | "uri" |
| subField | (empty) | (empty) |
| match | "is" | "matches" |
| negate | false | false |
| pattern | "POST" | "`^/.*/batch-analytics$`" |

Here, the first rule applies to an enumeration. Only standard HTTP methods are available. The second rule, on the other hand, exploits the full power of routes by using a regular expression. Although it is possible to use such expressions, avoiding them results in enhanced performance.

All that remains is to apply the configuration in the concerned area.

#### Route certain IPs and voluntary clients to preproduction

When a site grows, you may want to set up a preproduction environment to validate ongoing changes, without affecting the majority of users. Generally, when configuring this type of environment, you want to reduce the gap as much as possible between production and preproduction, in order to detect problems as accurately as possible. A classic and often neglected source of problems is the domain name. It is sometimes hardcoded in a file or an article. At that point, a link may work in preproduction but not in production.

Instead of setting up rules based on the domain name, you could set up rules based on the source IP address (for example, an enterprise proxy) and possibly a cookie for voluntary clients. These configurations can be detected with two routes on your OVHcloud Load Balancer service.

For this example, we will consider:

- that the enterprise proxy can use the addresses 42.42.42.0/24 and the VPN uses 1.2.3.4/32;
- that the voluntary users have a "PreprodOptIn" cookie, the value of which is not important.

In practice, you will need two identical routes:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your frontend |
| displayName | "Route Opt-In and internal users to preproduction environment" |
| weight | (empty) |
| action.type | "farm" |
| action.status | (empty) |
| action.target | Identifier of the preproduction farm |

Next, we attach the following 2 rules, each on one of the routes (1 rule per route):

| Field | Rule 1 | Rule 2 |
| :--- | :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service | same |
| routeId | Identifier of the first route | Identifier of the second route |
| field | "source" | "cookie" |
| subField | (empty) | "PreprodOptIn" |
| match | "in" | "exists" |
| negate | false | false |
| pattern | "42.42.42.0/24, 1.2.3.4" | (empty) |

The first rule checks if the source IP is in a list of address ranges. In this case, the different address ranges are separated by commas and can be surrounded by spaces for better readability. If a range contains only one address, the "/32" is implicit but can be added explicitly. In any case, the size of this field is limited to 255 characters.

The second rule simply checks the existence of the cookie. It would be possible to check if its value matches a regular expression or is in a list of possibilities, but this allows to show a simple example of what can be done with cookies. Rules based on HTTP Headers work according to a similar approach.

All that remains is to apply the configuration in the concerned area.

#### Route WebSockets to a dedicated farm

When a site has interactive functions based on WebSockets such as a chatbot, you may want to direct these connections to a server farm dedicated to this task. In fact, it is quite simple.W

When a browser tries to open a WebSocket connection, it sends a standard HTTP request with the headers:

```
Upgrade: websocket
Connection: Upgrade
```

In practice, it is sufficient to detect the first header. This can be done very easily with a route and a rule:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| frontendId | Identifier of your frontend |
| displayName | "Route WebSockets to a dedicated farm" |
| weight | (empty) |
| action.type | "farm" |
| action.status | (empty) |
| action.target | Identifier of the WebSocket dedicated farm |

And on this route, we come to attach a rule:

| Field | Value and description |
| :--- | :--- |
| serviceName | Identifier of your OVHcloud Load Balancer service |
| routeId | Identifier of the route created just above |
| field | "header" |
| subField | "Upgrade" |
| match | "is" |
| negate | false |
| pattern | "websocket" (case-sensitive) |

All that remains is to apply the configuration in the relevant zone.


### References

You will find here the details of the API calls related to routes. For a more general overview of route features, we invite you to first consult the section " [API presentation](#apipresentation) " a little further up in this guide.

#### Handling routes <a name="handling-routes"></a>

TCP and HTTP routes are configured in the same way. Since HTTP routes are more powerful, this section focuses on HTTP routes and rules. The operation of TCP routes can be extrapolated by replacing "http" with "tcp" in the routes. Some fields only make sense in HTTP, so they are not available in TCP.

##### **List routes**

This call returns the list of numeric identifiers of routes defined for the HTTP protocol. You can filter this list by `frontendId`. This call returns the routes in the order in which they will be evaluated. The evaluation order can be partially controlled using the "weight" of the route.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| frontendId | | Numeric identifier of an HTTP frontend to which the routes are attached |

##### **Create a route**

This call allows you to create a route. Only the action is mandatory. A route can be attached and detached from a frontend. It is possible to create up to 50 routes on an OVHcloud Load Balancer service. This call returns the created route in case of success. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| displayName | | Display name of your route (maximum 255 characters) |
| frontendId | | Numeric identifier of an HTTP frontend to which to attach the route |
| weight | | Priority of the route, between 1 (passes first) and 255 (passes after others) |
| action.type | Required | Name of the type of action to execute if all the rules associated with the route are validated |
| action.status | | HTTP status code for the `reject` and `redirect` actions |
| action.target | | Numeric identifier of the target farm for the `farm` actions, or URL pattern for the `redirect` actions |

The possible action types are:

| action | Meaning |
| :--- | :--- |
| redirect | Redirect a request to `action.target` with the HTTP status code `action.status` |
| reject | Reject a request with the HTTP status code `action.status` |
| farm | Route a request to the farm whose identifier is specified in `action.target` |

For more information on the actions handled and the format of the parameters, we invite you to consult the section " [Available actions](#available-actions) " further down in this guide.

##### **View the details of a route**

This call allows you to view the details of an HTTP route, knowing its identifier.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

- Request:

| Parameter | Meaning |
| :--- | :--- |
| serviceName | Identifier of your Load Balancer service |
| routeId | Numeric identifier of the route |

- Response:

| Parameter | Meaning |
| :--- | :--- |
| routeId | Numeric identifier of the route |
| displayName | Display name of your route |
| frontendId | Numeric identifier of the frontend to which your route is attached |
| weight | Priority of your route |
| action.type | Name of the type of action of your route |
| action.status | Associated HTTP status code |
| action.target | Numeric identifier of the farm or associated URL pattern |
| rules | List of rules that must be validated to trigger the action of the route. More details are available in the section " [Handling Rules](#handling-rules) ". |

For more information on the actions handled and the format of the parameters, we invite you to consult the section "[Available actions](#available-actions)" further down in this guide.

##### **Modify a route**

This call allows you to modify an HTTP route, knowing its identifier. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |
| displayName | | Display name of your route (maximum 255 characters) |
| frontendId | | Numeric identifier of an HTTP frontend to which to attach the route |
| weight | | Priority of the route, between 1 (passes first) and 255 (passes after others) |
| action.type | Required | Name of the type of action to execute if all the rules associated with the route are validated |
| action.status | | HTTP status code for the `reject` and `redirect` actions |
| action.target | | Numeric identifier of the target farm for the `farm` actions, or URL pattern for the `redirect` actions |

For more information on the actions handled and the format of the parameters, we invite you to consult the section " [Available actions](#available-actions) " further down in this guide.

##### **Delete a route**

This call allows you to delete an HTTP route, knowing its identifier. When a route is deleted, all the rules associated with that route are also deleted. There is no need to delete them individually. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |

#### Handling rules <a name="handling-rules"></a>

##### **List rules**

This call returns the list of numeric identifiers of rules defined for a given route.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |

##### **Attach a rule**

This call allows you to attach a rule to a route. It is possible to attach up to 5 rules per route on an OVHcloud Load Balancer service. This call returns the created rule in case of success. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |
| field | Required | Name of the HTTP parameter on which to apply this rule |
| subField | | Name of the HTTP header for `header` rules or name of the cookie for `cookie` rules |
| match | Required | Name of the comparator to apply to validate the rule |
| negate | | Inverts the result of the comparator |
| pattern | | Comparator argument |

- `field`

| Value | Meaning |
| :--- | :--- |
| source | Address or list of source addresses in the form of IP (a.b.c.d/z) |
| protocol | Protocol. "http" or "https" |
| method | HTTP method (GET, HEAD, POST, PUT, DELETE, OPTIONS, CONNECT, TRACE) |
| host | Domain name (vhost), without the port number |
| uri | Request path as understood between the first "/" and the first "?" |
| param | HTTP parameter coming from the part after the first "?" |
| header | HTTP header |
| cookie | HTTP cookie |

- `match`

| Value | Meaning |
| :--- | :--- |
| exists | The property must exist (HTTP header or cookie for example) |
| is | The property must match exactly `pattern` |
| in | The property must be in the list of values (separated by commas) defined by `pattern` |
| contains | The property must contain the value of `pattern` |
| startswith | The property must start with the value of `pattern` |
| endswith | The property must end with the value of `pattern` |
| matches | The property must match the regular expression of `pattern` |

For more information on the rules handled and the format of the parameters, we invite you to consult the section " [Available rules](#available-rules) " further down in this guide.

##### **View the details of a rule**

This call allows you to view the details of a rule attached to an HTTP route, knowing its identifier.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

- Request:

| Parameter | Meaning |
| :--- | :--- |
| serviceName | Identifier of your Load Balancer service |
| routeId | Numeric identifier of the route |
| ruleId | Numeric identifier of the rule |

- Response:

| Parameter | Meaning |
| :--- | :--- |
| ruleId | Numeric identifier of the rule |
| field | Name of the HTTP parameter on which to apply the rule |
| subField | Name of the HTTP header or cookie for the rule |
| match | Name of the comparator to apply to validate the rule |
| negate | "true" if the result of the comparator is inverted |
| pattern | Comparator argument. The meaning and syntax depend on `match` and `field` |

For more information on the rules handled and the format of the parameters, we invite you to consult the section " [Available rules](#available-rules) " further down in this guide.

##### **Modify a rule**

This call allows you to modify a rule attached to an HTTP route, knowing its identifier. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |
| ruleId | Required | Numeric identifier of the rule |
| field | Required | Name of the HTTP parameter on which to apply this rule |
| subField | | Name of the HTTP header for `header` rules or name of the cookie for `cookie` rules |
| match | Required | Name of the comparator to apply to validate the rule |
| negate | | Inverts the result of the comparator |
| pattern | | Comparator argument |

For more information on the rules handled and the format of the parameters, we invite you to consult the section " [Available rules](#available-rules) " further down in this guide.

##### **Delete a rule**

This call allows you to delete a rule attached to an HTTP route, knowing its identifier. Your OVHcloud Load Balancer service must be redeployed to apply the changes.

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Meaning |
| :--- | :--- | :--- |
| serviceName | Required | Identifier of your Load Balancer service |
| routeId | Required | Numeric identifier of the route |
| ruleId | Required | Numeric identifier of the rule |

> [!primary]
>
> If you want to delete a route, it is not necessary to delete all the rules attached to it. The rules are automatically deleted when you delete a route.
>

##### **List all TCP and HTTP routes**

This call allows you to list all the identifiers, display names and types ("http"/"tcp") of routes defined on an OVHcloud Load Balancer service. It was designed to simplify the implementation of auto-completion.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedRoutes
>

- Request:

| Parameter | Meaning |
| :--- | :--- |
| serviceName | Identifier of your Load Balancer service |

- Response:

| Parameter | Meaning |
| :--- | :--- |
| type | Type of protocol of the route: "tcp" for TCP routes, "http" for HTTP routes |
| routeId | Numeric identifier of the route |
| displayName | Display name of the route |

#### Available actions <a name="available-actions"></a>

This call returns the list of available actions for TCP and HTTP routes as well as the expected values for each of the fields.

If a field is "null", it means that no value is expected. If an invalid value is provided, the API will return a validation error.

All actions managed by the OVHcloud Load Balancer service are final. This means that the execution of an action also ends the evaluation of the routes.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

- Request:

| Parameter | Meaning |
| :--- | :--- |
| serviceName | Identifier of your Load Balancer service |

- Response:

| Parameter | Meaning |
| :--- | :--- |
| type | Indicates whether this action is valid for an HTTP route or a TCP route |
| name | Name of the action to specify in the `type` field of the routes |
| status | List of available HTTP status codes for this action (the `status` field of the routes) |
| destination | Type of value expected in the `destination` field of the routes |

##### **Redirection**

This action returns a redirection to the visitor. The type of redirection can be configured with the `status` field. When this action is selected, no farm will receive the request.

| Parameter | Value |
| :--- | :--- |
| type | `redirect` |
| status | 301, 302, 303, 307 or 308 |
| target | Destination URL (can contain variables) |

Only HTTP redirection status codes can be specified. The most common are codes 301 and 302. If you are unsure, you can use the 302 "Temporary Redirect". The HTTP status codes recognized for redirections are:

| Status code | Description |
| :--- | :--- |
| 301 | Permanent redirect. The redirect can be stored by the browser. |
| 302 (default) | Temporary redirect. The redirect must be revalidated by the browser on each request. |
| 303 | Like 302 and forces the use of the HTTP GET method. |
| 307 | Like 302 and forces the reuse of the same HTTP method (GET, POST, etc.). |
| 308 | Like 301 and forces the reuse of the same HTTP method (GET, POST, etc.). |

The destination URL can contain simple variables. This allows you to redirect to another domain, another protocol or add a suffix / prefix to a URL. The recognized variables are:

| Variable | Description |
| :--- | :--- |
| `protocol` | Protocol of the request ("http" or "https") |
| `domain` | Domain name of the request, without the port number |
| `host` | "Host" field of the request, including the port number if present |
| `port` | Port of the request |
| `path` | Path of the request, starts with a '/' and ends at the first '?' |
| `arguments` | Arguments of the request, starts with a '?' if present |

For example, to:

- redirect to https: `https://\${host}\${path}\${arguments}`
- redirect to a new domain: `${protocol}://new.example.com\${path}\${arguments}`
- prefix the URL: `${protocol}://\${host}/staging\${path}\${arguments}`

##### **Rejection**

This action returns an HTTP error status code to the visitor. The error HTTP status code can be configured with the `status` field. When this action is selected, no farm will receive the request.

| Parameter | Value |
| :--- | :--- |
| type | `reject` |
| status | 200, 400, 403, 405, 408, 429, 500, 502, 503 or 504 |
| target | not available |

> [!primary]
>
> This action is also available in TCP. In this case, the `status` parameter is not available and the request is terminated. TCP requests terminated in this way are not counted in the request rate.
>

Only the HTTP error status codes listed in the API can be specified. The most common are the codes 400 "Bad request" and 403 "Forbidden". 200 can be used to block a type of request while simulating a success, and 503 can be used to simulate a server failure.

| Status code | Description |
| :--- | :--- |
| 200 | The request was executed successfully. |
| 400 | Invalid request. |
| 403 (default) | Access forbidden. |
| 405 | Invalid or unhandled method (GET, POST, PUT, etc.)
| 408 | The client failed to send a complete request within the server's time limit. |
| 429 | The client sent too many requests (rate-limiting). |
| 500 | Generic server error. |
| 502 | Communication error with the server. |
| 503 | The service is temporarily unavailable. |
| 504 | The server took too long to respond. |

##### **Routing**

This action directs requests to a specific farm, other than the default farm configured on the frontend. The target farm must be of the same type as the frontend ("http" or "tcp").

| Parameter | Value |
| :--- | :--- |
| type | `farm` |
| status | not available |
| target | Numeric identifier of the target farm. This must be of the same type |

> [!primary]
>
> This action is also available in TCP. In this case, the target farm must be of type "tcp".
>

#### Available rules <a name="available-rules"></a>

This call returns the list of available rules for TCP and HTTP routes, as well as the expected values for each field.

If a field is "null", it means no value is expected. If an invalid value is provided, the API will return a validation error.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

- Request:

| Parameter | Meaning |
| :--- | :--- |
| serviceName | Identifier of your Load Balancer service |

- Response:

| Parameter | Meaning |
| :--- | :--- |
| type | Protocol type of the route: "tcp" for TCP routes, "http" for HTTP routes |
| name | Name of the property to which this rule applies, to be filled in the `field` field |
| hasSubField | "true" if this property has a "sub-property" (e.g.: a header or a cookie) |
| matches | List of available comparators for this rule, to be filled in the `match` field |
| pattern | Type of expected value for the `pattern` field |
| enum | List of possible values for the `pattern` field if it is an enumeration |

The different types of `pattern` are:

| Value | Meaning |
| :--- | :--- |
| cidr | IP address (a.b.c.d) or subnet (a.b.c.d/z) |
| string | Free text. For the operator `in`, a list of comma-separated values (maximum 255 characters) |
| enum | The field is an enumeration defined in `enum` |

##### **Protocol**

This rule allows filtering requests based on their protocol. In practice, the use cases for this rule are quite limited because the protocol depends on the frontend to which the route is attached, and a frontend only handles one protocol, which is known at the time the route is defined.

| Field | Value |
| :--- | :--- |
| name | `protocol` |
| hasSubField | no |
| matches | `is` or `in` |
| pattern | `tcp`, `tls`, `http` or `https` |

> [!primary]
>
> This action is also available in TCP. In this case, the "http/2.0" protocol is also available. It is based on the SSL/TLS "ALPN" field used by browsers to announce that they are trying to establish an HTTP/2.0 connection. This allows for a common TCP frontend for HTTP 1 and 2 SSL/TLS termination, then routing these streams based on the protocol version.
>

##### **Source address**

This rule allows filtering requests based on their source address. By combining it with a rule based on the URI or domain name, it is for example possible to restrict certain resources to an enterprise proxy, while exposing all other resources without restrictions on your OVHcloud Load Balancer service.

| Field | Value |
| :--- | :--- |
| name | `source` |
| hasSubField | no |
| matches | `is` or `in` |
| pattern | Subnet (a.b.c.d/z) or address (a.b.c.d) |

> [!primary]
>
> This action is also available in TCP with the same behavior.
>

For example, to block a network and a specific address, you can use a pattern such as "4.4.0.0/16, 8.8.8.8".

##### **Domain name**

This rule allows filtering requests based on their domain name. This can for example be used to reproduce the "vhost" function of Apache or to route all domains starting with "mail." to a server dedicated to webmail.

| Field | Value |
| :--- | :--- |
| name | `host` |
| hasSubField | no |
| matches | `is`, `in`, `contains`, `startswith`, `endswith` or `matches` |
| pattern | String or regular expression |

> [!primary]
>
> This action is also available in TCP. It is only applicable if the frontend is configured to accept SSL/TLS connections and the client sends an "SNI" option. This is particularly the case for recent web browsers.
>

##### **HTTP method**

This rule allows filtering requests based on the HTTP method. It is commonly used in conjunction with a rule based on the request URI or path to make the rule more selective.

| Field | Value |
| :--- | :--- |
| name | `method` |
| hasSubField | no |
| matches | `is` or `in` |
| pattern | `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS` or `TRACE` |

##### **Request path**

This rule allows filtering requests based on the request path or URI. The request path is the part between the first '/' included and the first '?' excluded.

| Field | Value |
| :--- | :--- |
| name | `uri` |
| hasSubField | no |
| matches | `is`, `in`, `contains`, `startswith`, `endswith` or `matches` |
| pattern | String or regular expression |

##### **Request parameter**

This rule allows filtering requests based on the existence or value of a specific HTTP request parameter. This is the part after the first '?'. If a parameter is specified multiple times in the request, only the first one is taken into account.

| Field | Value |
| :--- | :--- |
| name | `param` |
| hasSubField | yes |
| matches | `is`, `in`, `contains`, `startswith`, `endswith` or `matches` |
| pattern | String or regular expression |

##### **HTTP header**

This rule allows filtering requests based on the existence or value of a specific HTTP header. This can for example be used to detect the opening of a websocket connection and route it to a dedicated farm.

| Field | Value |
| :--- | :--- |
| name | `header` |
| hasSubField | yes |
| matches | `is`, `in`, `contains`, `startswith`, `endswith` or `matches` |
| pattern | String or regular expression |

##### **Cookie**

This rule allows filtering requests based on the existence or value of a specific HTTP cookie. This can for example be used to direct opt-in visitors to a pre-production farm.

| Field | Value |
| :--- | :--- |
| name | `cookie` |
| hasSubField | yes |
| matches | `is`, `in`, `contains`, `startswith`, `endswith` or `matches` |
| pattern | String or regular expression |

## Go further

Join our [community of users](/links/community).