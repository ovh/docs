---
title: 'Working with HTTP routes'
slug: routes
excerpt: 'Find out how to direct your requests dynamically, to a specific farm'
section: Configuration
---

**Last updated 09th April 2018**

## Objective

The OVH Load Balancer service redirects the front-end’s incoming traffic to the servers that make up the front-end’s default farm, or its default redirection.

In some cases, you can go a step further and route, redirect or block traffic according to a range of criteria. For example, in the case of a HTTP(S) service, you can filter traffic depending on the HTTP method, the URL, and even a cookie or header value! In the OVH Load Balancer service, these are called `routes`{.action}. A route is a particular action to carry out if one or more conditions are met.

**This guide will show you how to direct your requests dynamically, to a specific farm.**

## Requirements

- an [OVH Load Balancer](https://www.ovh.co.uk/solutions/load-balancer/){.external} on a solution that lets you create routes
- access to the [OVH API](https://api.ovh.com/){.external}

## Instructions

> [!primary]
>
> Although this guide focuses on HTTP routes, the same principle applies to TCP (with TCP routes). This can be used to direct HTTP/2 traffic to a particular farm, or reject incoming requests from certain IPs.
> 

Since this feature is still very new, it is only available in the API. This guide will explain the general principles behind routing, and provide practical examples of routes being used.

- **An introduction to routes**.

A route controls traffic according to different criteria. You can express these criteria as rules, conditions, or actions.

For example, *IF* the URL _starts_ with '/wp-admin/' (1) *AND* the connection _is_ in HTTP (2) *THEN* _redirect_ to the HTTPS version of the page (3).

In this example, there are two rules:
- the connection must come from a HTTP front-end (2)
- its URL must begin with the WordPress admin pages (1)

There is an action associated with these rules: redirect to the HTTPS version of the page (3).

This is what is known as an ‘end action’. It means that if the rules are confirmed, the evaluation of routes stops, and the action is executed.

## An introduction to the API.

You can only manage routes via the [OVH API](https://api.ovh.com/){.external}. It is only valid for `http`{.action} and `tcp`{.action} protocols, and the `/ipLoadbalancing/{serviceName}/{protocol}/route/`{.action} pathway exposes the API dedicated to routes.

The API for routes to the OVH Load Balancer is specially designed for flexibility, power and scalability. It is organised around three main sections:

1. the APIs listing available rules and actions
2. the APIs listing the routes configured on the OVH Load Balancer service
3. the APIs for configuring routes on the OVH Load Balancer service

> [!primary]
>
> To only show the APIs linked to routes in the OVH API console, you can use the `filter`{.action} field with ‘route’ as a keyword.
> 

When you want to configure a route or rules, the first thing you need to do is look at the available actions and rules. This will give you the possible values for the API route and rule configuration fields.

- A route can have several rules.
- A route can only be attached to a single front-end.
- A front-end can have several routes. In this case, the order of evaluation depends on its type and weight.

When a request arrives at your OVH Load Balancer service, the routes are evaluated successively following the principles below:

1. firstly, reject and rewrite routes, then the farm routes
1. within categories, the routes are evaluated in order of ascending weight
1. if two routes are the same weight, the first route created is evaluated first
1. only the first action from all the validated rules is executed

### Available rules and actions.

This first section of the API contains an updated list of actions and rules available for the OVH Load Balancer service. It contains a call for actions, and another for rules. These two calls return a list of objects. Each object has a name, and if it applies to all TCP or HTTP routes as well as the values or value types expected for different fields of the API. If a field is “null”, this means that no value is expected. If an invalid value is entered, the API will return a validation error.

#### Actions

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
> 

For more information on this call, please read the [Available actions](#available-actions){.internal} section at the bottom of this guide.


#### <u>Rules:</u>

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
> 

For more information on this call, please read the [Available rules](#available-rules){.internal} section at the bottom of this guide.


### Configured routes.

This section of the API only contains one call. It was mainly designed to help implement auto-complete systems. It returns the ID, name and type of each defined route. You can get a route’s details with a GET /ipLoadbalancing/{serviceName}/route/{type}/{routeId} call, defined further below.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/definedRoutes
> 

For more information on this call, please read the [Edit routes](#edit-routes){.internal} section at the bottom of this guide.


### Route configuration.

With these basic principles around the action and rules available, and the order in which routes are evaluated, these routes can be edited the same way as the farms can. When you create a route, you can attach rules to it. The possible values for rules and actions are defined by the API calls.

For more information on these calls, please read the [Edit routes](#edit-routes){.internal} section at the bottom of this guide.


## Examples

If you still have doubts about the power of routes, this should change your mind. The purpose of this section is to offer some practical examples of how this technology has been used for OVH’s internal requirements, without going into great detail about API calls.

You can read about API calls in more detail in the [Edit routes](#edit-routes){.internal} section at the bottom of this guide, and the sections that follow it.


### Force HTTPS for WordPress login pages.

HTTPS protocol has become the norm. Its purpose is to make all websites available securely in HTTPS, with the SSL/TLS protocol. If you need an SSL/TLS certificate, you can use the OVH Load Balancer service to order a new one, which will be automatically managed for you.

Migrating a website to HTTPS involves a lot of work, especially to avoid [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content){.external}. It may be worth migrating your website section by section, and starting by securing pages that send login credentials.

One approach could be to base it on the beginning of WordPress URLs. By default, the URL the login pages for WordPress start with "/wp-login". So we would need:

- a route with a redirect action
- a rule in this route that detects URLs starting with "/wp-login"

In practice, this gives a route like this:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your HTTP front-end ID|
|displayName|“Redirection of WordPress logins to HTTPS”|
|weight|(empty)|
|action.type|"redirect"|
|action.status|302 for a temporary redirection, 301 for a permanent redirection|
|action.target|"[https:/](https:/){.external}/${host}${path}${arguments}" to take the same host, path and arguments|

On this route, we will attach a rule:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|routeId|Route ID created above|
|field|"uri"|
|subField|(empty)|
|match|"startswith"|
|negate|false|
|pattern|"/wp-login"|

Next, apply the configuration to the zone concerned, and the rule will begin to work.


> [!warning]
>
> To add a new redirection, you will need to repeat these actions again, creating a route, then a rule. If a second rule is added to the same route, the two rules need to be validated for the redirect to work. Note that if the rules are "startswith /wp-login" and "startswith /wp-admin", the redirection would never work because these two conditions cannot both be true at once.
> 


### Route according to a domain (vhost)

This feature helped propel the expansion of the web at its very early stages, by exposing several websites behind a single IP address using the “host” field of HTTP headers.

For example, if your infrastructure is made up of a VPS for your website, an OVH Load Balancer to ensure SSL/TLS termination, and redirection to a maintenance page with a backup server in the farms, you would originally have needed one failover IP per website, routed to your OVH Load Balancer, and one front-end per IP.

With routes, you can share the same front-end, and choose the server farm dynamically, with the “host” field.

To do this, you will need:

- one route per vhost
- one rule per route detecting a specific domain

In practice, to route the domain www.example.com, this would give the following route:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your front-end ID|
|displayName|"VHost - www.example.com"|
|weight|(empty)|
|action.type|"farm"|
|action.status|(empty)|
|action.target|ID of the farm to direct this domain to|

And on this route, we will attach a rule:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|routeId|Route ID created above|
|field|"host"|
|subField|(empty)|
|match|"is"|
|negate|false|
|pattern|"www.example.com" or a domain of your choice|

Finally, apply the configuration.


### Reserve a failover IP to a particular website.

If you are hosting a website on a VPS, you may want to dedicate an IP address to a specific customer. You can easily make the IP available by routing it to your OVH Load Balancer service, then configuring a dedicated front-end attached to this failover IP address, and having the customer’s target VPS set as a defaultFarmId.

But what will happen if another customer detects this, and configures their domain to point to the premium customer’s IP address? By default, this will work, and its website will be routed to the other VPS. If there is an SSL/TLS certificate, it will still work as all of the certificates are automatically available for all of the front-ends.

In such scenarios, the solution is to add a rule that will reject requests if the domain is not a premium one. You can do this with a rejection route and a rule.

In practice, to reserve a front-end with an IP dedicated to the domain www.example.com, this will give the following route:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your front-end ID|
|displayName|"Restrict to www.example.com"|
|weight|(empty)|
|action.type|"reject"|
|action.status|403|
|action.target|(empty)|

And on this route, we will attach a rule:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|routeId|Route ID created above|
|field|"host"|
|subField|(empty)|
|match|"is"|
|negate|true|
|pattern|"www.example.com" or a domain of your choice|

Finally, apply the configuration.


### Route depending on a URL and HTTP method.

On some specific infrastructures, certain requests need to be routed to a specific farm. For example, to manage rare but data-intensive requests without impacting production, such as analytical requests that would work from a read-only duplicate of the data with a server that has a higher volume of memory.

If, for example, the request is sent:

- with the POST method
- on a URL corresponding to "^/.\*/batch-analytics$"

... you would need a route with two rules, with one rule using a regular expression.

In practice, this gives a route like this:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your front-end ID|
|displayName|"Route batch analytics to dedicated farm"|
|weight|(empty)|
|action.type|"farm"|
|action.status|(empty)|
|action.target|ID of the farm to direct these operations to|

And on this route, we will attach two rules:

|Field|Rule 1|Rule 2|
|---|---|---|
|serviceName|Your OVH Load Balancer service ID|as per rule 1|
|routeId|Route ID created above|as per rule 1|
|field|"method"|"uri"|
|subField|(empty)|(empty)|
|match|"is"|"matches"|
|negate|false|false|
|pattern|"POST"|"^/.\*/batch-analytics$"|

Here, the first rule applies on a list. Only standard HTTP methods are available. However, the second rule uses all the power of routes using a regular expression. Although it is possible to use expressions like this, if you can go without using them, your performance will be even higher.

Next, apply the configuration to the zone concerned.


### Route certain IPs and voluntary clients to a pre-production environment.

When your website gains momentum, you may want to set up a pre-production environment, which you can use to check ongoing developments without affecting the majority of your users. Generally, when you configure an environment like this, it is best to minimise the differences between production and pre-production as much as possible, so that any issues can be detected as accurately as possible. A common but often-forgotten issue is the domain name, as it is sometimes hard-coded into a file or item. If this is the case, the link may work in pre-production, but not in production. 

Instead of setting up rules based on the domain name, you can set up rules based on the source IP (e.g. an enterprise proxy), and possibly a cookie for voluntary clients. These configurations can be detected with two routes on the OVH Load Balancer service.

For this example, we will consider that:

- the enterprise proxy can use the addresses 42.42.42.0/24, and that the VPN uses 1.2.3.4/32
- the voluntary users have a "PreprodOptIn" cookie — it doesn’t matter what the value is

In practice, we would need two identical routes:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your front-end ID|
|displayName|"Route Opt-In and internal users to pre-production environment"|
|weight|(empty)|
|action.type|"farm"|
|action.status|(empty)|
|action.target|Your pre-production farm’s ID|

Then we will attach the following two rules to each of the routes (one rule per route):

|Field|Rule 1|Rule 2|
|---|---|---|
|serviceName|Your OVH Load Balancer service ID|as per rule 1|
|routeId|ID of the first route|ID of the second route|
|field|"source"|"cookie"|
|subField|(empty)|"PreprodOptIn"|
|match|"in"|"exists"|
|negate|false|false|
|pattern|"42.42.42.0/24, 1.2.3.4"|(empty)|

The first rule tests whether the source IP is in the address range list. In this case, the various address ranges are separated by commas, and can have spaces in between one another to make them easier to read. If the range only contains one address, the "/32" is implicit, but can be added explicitly. Either way, this field is limited to 255 characters.

The second rule simply tests to see if a cookie exists. It is also possible to test if the value corresponds to a regular expression, or is found in a possibility list, but this offers a simple example of what you can do with cookies. Rules based on HTTP headers work using a similar approach.

Next, apply the configuration to the zone concerned.


### Route WebSockets to a dedicated farm.

When a website has interactive features based on WebSockets — a chatbot, for example — you may want to direct these connections to a server farm dedicated to this task. This is actually quite simple. When a browser attempts to open a WebSockets connection, it sends a standard HTTP request with these headers:

```
Upgrade: websocket
Connection: Upgrade
```

In this case, only the first header needs to be detected. This can be done very easily with a route and a rule:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|frontendId|Your front-end ID|
|displayName|"Route WebSockets to a dedicated farm"|
|weight|(empty)|
|action.type|"farm"|
|action.status|(empty)|
|action.target|ID of the farm dedicated to WebSockets|

And on this route, we will attach a rule:

|Field|Value and description|
|---|---|
|serviceName|Your OVH Load Balancer service ID|
|routeId|Route ID created above|
|field|"header"|
|subField|"Upgrade"|
|match|"is"|
|negate|false|
|pattern|"websocket" (case-sensitive)|

Next, apply the configuration to the zone concerned.


## Reference.

Here, you will find more details on the API calls linked to the routes. To get a general idea of how routes work, we recommend starting off by reading the [introduction to the API](#an-introduction-to-the-api){.internal} section further up.


### Edit routes.

TCP and HTTP routes are configured the same way. Since the routes are more powerful in HTTP, this section focuses on HTTP rules and routes. TCP routes can be extrapolated from the information below by replacing “http” with “tcp” in each route. Some fields only apply to HTTP routes, and are not available in TCP.


#### List the routes.

This call returns the list of ID numbers of routes defined for HTTP protocol. You can filter this list by frontendId. This call returns the routes in the order in which they will be evaluated. The evaluation order can be partially controlled by the weight of the route. 

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|frontendId||ID number of a HTTP front-end the routes are attached to|

#### Create a route.

With this call, you can create a route. Only the action is mandatory. A route can be attached to and detached from a front-end. You can create up to 20 routes on an OVH Load Balancer. This call returns the route created, if it is successful. You will need to re-deploy your OVH Load Balancer to apply the changes.

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/route
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|displayName||Display name for your route (255 characters maximum)|
|frontendId||ID number of a HTTP front-end to attach the route to|
|weight||Route priority, between 1 (carry out first) and 255 (carry out after the others)|
|action.type|Required|Name of the action type to execute if all of the rules associated with the route are validated|
|action.status||HTTP status code for `reject` and `redirect` actions|
|action.target||ID number of the target farm for `farm` actions, or the URL template for `redirect` actions|

The possible action types are listed below:

|action|Meaning|
|---|---|
|redirect|Redirects a request to `action.target`, with the HTTP `action.status` code|
|reject|Rejects a request with the HTTP `action.status` code|
|farm|Routes a request to the farm with the ID entered in `action.target`|


For further information on the actions managed and the format of parameters, please read the [Available actions](#available-actions){.internal} section further down.


#### View details on a route.

With this call, you can view details on an HTTP route if you know its ID.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}
> 

Query

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|
|routeId|The route’s ID number|

Answer

|Setting|Meaning|
|---|---|
|routeId|The route’s ID number|
|displayName|The display name for your route|
|frontendId|ID number of the front-end your route is attached to|
|weight|Priority of your route|
|action.type|Name of the action type for your route|
|action.status|Associated HTTP status code|
|action.target|ID number of the associated farm or URL template|
|rules|List of rules that must be validated to trigger the route’s action More detail on this is available in the  [Edit rules](#edit-rules){.internal} section.|

For further information on the actions managed and the format of parameters, please read the [Available actions](#available-actions){.internal} section further down.


#### Modify a route.

With this call, you can modify an HTTP route if you know its ID. You will need to re-deploy your OVH Load Balancer to apply the changes.


> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|
|displayName||Display name for your route (255 characters maximum)|
|frontendId||ID number of a HTTP front-end to attach the route to|
|weight||Route priority, between 1 (carry out first) and 255 (carry out after the others)|
|action.type|Required|Name of the action type to execute if all of the rules associated with the route are validated|
|action.status||HTTP status code for `reject` and `redirect` actions|
|action.target||ID number of the target farm for `farm` actions, or the URL template for `redirect` actions|

For further information on the actions managed and the format of parameters, please read the [Available actions](#available-actions){.internal} section further down.


#### Delete a route.

With this call, you can delete an HTTP route if you know its ID. When a route is deleted, all of the rules associated with the route are deleted, too. You do not need to delete them individually. You will need to re-deploy your OVH Load Balancer to apply the changes.

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|


### Edit rules.

#### List the rules.

This call returns the list of ID numbers of rules defined for a particular route.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|


#### Attach a rule.

With this call, you can attach a rule to a route. You can attach up to 5 rules per route on an OVH Load Balancer. This call returns the route created, if it is successful. You will need to re-deploy your OVH Load Balancer to apply the changes.

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|
|field|Required|The name of the HTTP parameter to apply the rule to|
|subField||HTTP header name for the `header` rules, or cookie name for `cookie` rules|
|match|Required|Name of the comparison to apply to validate the rule|
|negate||Reverses the comparison result|
|pattern||Comparison pattern|

`field`

|Value|Meaning|
|---|---|
|source|The address or list of source IP addresses (a.b.c.d/z)|
|protocol|Protocol (“http” or “https”)|
|method|HTTP method (GET, HEAD, POST, PUT, DELETE, OPTIONS, CONNECT, TRACE)|
|host|Domain name (vhost), without the port number|
|uri|Path of the request as it appears between the first "/" and the last "?"|
|param|HTTP parameter contained in the part after the first "?"|
|header|HTTP header|
|cookie|HTTP cookie|

`match`

|Value|Meaning|
|---|---|
|exists|The property must exist (e.g. HTTP header or cookie)|
|-|The property must correspond exactly to a `pattern`|
|in|The property must be in the list of values (separated by commas) defined by `pattern`|
|contains|The property must contain the `pattern` value|
|startswith|The property must start with the `pattern` value|
|endswith|The property must end with the `pattern` value|
|matches|The property must match the regular `pattern` expression|

For further information on the rules managed and the format of parameters, please read the [Available rules](#available-rules){.internal} section further down.


#### View details on a rule.

With this call instruction, you can view the details on a rule attached to an HTTP route if you know its ID.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

Query

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|
|routeId|The route’s ID number|
|ruleId|The rule’s ID number|

Answer

|Setting|Meaning|
|---|---|
|ruleId|The rule’s ID number|
|field|Name of the HTTP parameter to apply the rule on|
|subField|Name of the HTTP header or cookie for the rule|
|match|Name of the comparison to apply to validate the rule|
|negate|"true" if the comparison result is reversed|
|pattern|Comparison argument. The direction and syntax depends on the `match` and the `field`.|

For further information on the rules managed and the format of parameters, please read the [Available rules](#available-rules){.internal} section further down.


#### Modify a rule.

With this call, you can modify a rule attached to an HTTP route if you know its ID. You will need to re-deploy your OVH Load Balancer to apply the changes.

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|
|ruleId|Required|The rule’s ID number|
|field|Required|The name of the HTTP parameter to apply the rule to|
|subField||HTTP header name for the `header` rules, or cookie name for `cookie` rules|
|match|Required|Name of the comparison to apply to validate the rule|
|negate||Reverses the comparison result|
|pattern||Comparison pattern|

For further information on the rules managed and the format of parameters, please read the [Available rules](#available-rules){.internal} section further down.


#### Delete a rule.

With this call, you can delete a rule attached to an HTTP route if you know its ID. You will need to re-deploy your OVH Load Balancer to apply the changes.


> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

|Setting|Required|Meaning|
|---|---|---|
|serviceName|Required|Your Load Balancer service ID|
|routeId|Required|The route’s ID number|
|ruleId|Required|The rule’s ID number|

> [!primary]
>
> If you want to delete a route, you do not need to delete all the rules attached to it. The rules are automatically deleted when you delete the route.
> 


#### List all of the TCP and HTTP routes.

With this call, you can get a list of all the IDs, display names and types ("http"/"tcp") of routes defined on an OVH Load Balancer service. It is designed to simplify the implementation of auto-completion.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/definedRoutes
> 

Query

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

Answer

|Setting|Meaning|
|---|---|
|type|Type of protocol for the route: "tcp" for TCP routes, "http" for HTTP routes|
|routeId|The route’s ID number|
|displayName|The display name of the route|


### Actions available

This call returns the list of actions available for TCP and HTTP routes, as well as the values expected for each of the fields.

If a field is “null”, this means that no value is expected. If an invalid value is entered, the API will return a validation error.

All of the actions managed by the OVH Load Balancer service are final. This means that executing an action also triggers the end of route evaluation.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
> 

Query

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

Answer

|Setting|Meaning|
|---|---|
|type|Shows if this action is valid for a HTTP or a TCP route|
|name|Name of the action to enter into the `type` field of routes|
|status|List of HTTP status codes available for this action (`status` fields of routes)|
|destination|Value type expected in the `destination` fields for routes|


#### Redirection

This action sends a redirection to the visitor. This redirection type can be configured with the status field. When this action is selected, no farms will receive the request.

|Setting|Value|
|---|---|
|type|`redirect`|
|status|301, 302, 303, 307 or 308|
|target|Target URL (may contain variables)|

Only the HTTP redirection status codes can be specified. The most common codes are 301 and 302. If you have any doubts, you can set up a 302 (temporary redirection). The HTTP status codes for redirections are:

|Status code|Description|
|---|---|
|301|Permanent redirection. The redirection can be saved by the browser.|
|302 (default)|Temporary redirection. The redirection must be revalidated for each request by the browser.|
|307|Works like a 302, and forces the use of the HTTP GET method.|
|307|Works like a 302, and forces the same HTTP method to be reused (GET, POST, etc.).|
|308|Works like a 301, and forces the same HTTP method to be reused (GET, POST, etc.).|

The target URL may contain simple variables. This helps users redirect to another domain, another protocol or add a suffix/prefix to a URL. The recognised variables are:

|Variable|Description|
|---|---|
|`protocol`|Protocol of the request ("http" or "https")|
|`domain`|Domain name of the request, without the port number|
|`host`|"Host" field of the request, including the port number, if there is one|
|`port`|Port of the request|
|`path`|Path of the request, starts with a '/' and ends before the first '?'|
|`arguments`|Arguments of the request, starts with a '?' if present|

For example, for:

- redirect to https: https://${host}${path}${arguments}
- redirect to a new domain: ${protocol}://new.example.com${path}${arguments}
- prefix the URL: ${protocol}://${host}/staging${path}${arguments}


#### Reject.

This action returns an HTTP error status code to the visitor. The HTTP error code can be configured with the status field. When this action is selected, no farms will receive the request.

|Setting|Value|
|---|---|
|type|`reject`|
|status|200, 400, 403, 405, 408, 429, 500, 502, 503 or 504|
|target|not available|


> [!primary]
>
> This action is also available in TCP. In this case, the parameter status is not available, and the request is terminated. TCP requests that are terminated like this are not compatible with high percentages of requests.
> 

Only the HTTP error codes listed in the API can be specified. The most common ones are 400 ("Bad request") errors, and 403 ("Forbidden") errors. A 200 code can be used to block a request type while simulating a success, and a 503 code can be used to simulate a server outage.

|Status code|Description|
|---|---|
|200|The request has been successfully executed.|
|400|Invalid request.|
|403 (default)|Access forbidden.|
|405|Method (GET, POST, PUT, ...) invalid or not managed.|
|408|The request has taken too long to be sent by the client.|
|429|The client has sent too many requests (rate limiting).|
|500|Generic server error.|
|502|Error communicating with the server.|
|503|The service is temporarily unavailable.|
|504|The server has taken too much time to respond.|


#### Routing.

This action redirects requests to a specific farm, other than the default farm configured on the front-end. The destination farm must be the same type as the front-end ("http" or "tcp").

|Setting|Value|
|---|---|
|type|`farm`|
|status|not available|
|target|The destination farm’s ID number. This must be the same type.|

> [!primary]
>
> This action is also available in TCP. In this case, the destination farm type must be "tcp".
> 


### Available rules.

This call returns the list of rules available for TCP and HTTP routes, as well as the values expected for each of the fields.

If a field is “null”, this means that no value is expected. If an invalid value is entered, the API will return a validation error.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
> 

Query

|Setting|Meaning|
|---|---|
|serviceName|Your Load Balancer service ID|

Answer

|Setting|Meaning|
|---|---|
|type|Type of protocol for the route: "tcp" for TCP routes, "http" for HTTP routes|
|name|Name of the property on which to apply this rule, to be entered into the `field` field|
|hasSubField|"true" is this property is a sub-property (e.g. a header or cookie)|
|matches|List of comparisons available for each rule, to be entered into the `match` field|
|pattern|Type of value expected for the `pattern` field|
|enum|List of values for the chmaps `pattern`, if it is a list|

The different `pattern` types are:

|Value|Meaning|
|---|---|
|cidr|IP address (a.b.c.d) or sub-network (a.b.c.d/z)|
|string|Free text. For the `in` operator, a list of values separated by columns (255 characters maximum)|
|enum|The field is a list defined in `enum`|


#### Protocol.

With this rule, you can filter requests depending on their protocol. In practice, the uses for this rule are quite limited, as the protocol depends on the front-end that the route is attached to, or a front-end that only manages a single protocol recognised the moment the route is defined.

|Fields|Value|
|---|---|
|name|`protocol`|
|hasSubField|no|
|matches|`is` or `in`|
|pattern|`tcp`, `tls`, `http` or `https`|

> [!primary]
>
> This action is also available in TCP. In this case, "http/2.0" protocol is also available. It is based on the "ALPN" SSL/TLS field used by browsers to announce that they are attempting to establish a HTTP/2.0 connection. This way, you can have a common TCP front-end for SSL/TLS termination of HTTP 1 and 2, then direct traffic depending on the protocol version.
> 


#### Source address.

With this rule, you can filter requests depending on their source address. By combining it with a rule based on the URI or the domain name, you can restrict certain resources to an enterprise proxy while exposing all of your other resources without restrictions, via your OVH Load Balancer.

|Fields|Value|
|---|---|
|name|`source`|
|hasSubField|no|
|matches|`is` or `in`|
|pattern|Sub-network (a.b.c.d/z) or address (a.b.c.d)|

> [!primary]
>
> This action is also available in TCP using the same method.
> 

To block a particular network and address, for example, you can use a pattern like "4.4.0.0/16, 8.8.8.8".


#### Domain name.

With this rule, you can filter requests depending on their domain name. In doing so, you can reproduce the Apache "vhost" feature, or route all of the domains that start with "mail." to a server dedicated to webmail.

|Fields|Value|
|---|---|
|name|`host`|
|hasSubField|no|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` or `matches`|
|pattern|Character chain or regular expression|

> [!primary]
>
> This action is also available in TCP. It will only work if the front-end is configured to accept SSL/TLS connections, and if the client sends an "SNI" option. This is especially the case with recent web browsers.
> 


#### HTTP method.

With this rule, you can filter requests depending on their HTTP method. It is commonly used alongside a rule based the request URI or path, to make the rule more selective.

|Fields|Value|
|---|---|
|name|`method`|
|hasSubField|no|
|matches|`is` or `in`|
|pattern|`GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS` or `TRACE`|


#### Request path.

With this rule, you can filter requests depending on their path, or URI. The request path is between the first '/' (inclusive) and the first '?' (excluded).

|Fields|Value|
|---|---|
|name|`uri`|
|hasSubField|no|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` or `matches`|
|pattern|Character chain or regular expression|


#### Request parameter.

This rule filters requests depending on their existence, or the value of a specific HTTP request parameter. This is the part after the first '?'. If a parameter is specified several times in a request, only the first instance is taken into account.

|Fields|Value|
|---|---|
|name|`param`|
|hasSubField|yes|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` or `matches`|
|pattern|Character chain or regular expression|


#### HTTP header.

This rule filters requests depending on their existence, or the value of a specific HTTP header value. You can use it to detect the opening of a WebSocket connection, and direct it to a dedicated server farm.

|Fields|Value|
|---|---|
|name|`header`|
|hasSubField|yes|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` or `matches`|
|pattern|Character chain or regular expression|


#### Cookie.

With this rule, you can filter requests depending on the existence or value of a specific HTTP cookie. You can use it to direct voluntary visitors to a pre-production farm.

|Fields|Value|
|---|---|
|name|`cookie`|
|hasSubField|yes|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` or `matches`|
|pattern|Character chain or regular expression|

## Go further

Join our community of users on <https://community.ovh.com/en/>.
