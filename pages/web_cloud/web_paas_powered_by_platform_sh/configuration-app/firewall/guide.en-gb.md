---
title: Beta Outbound firewall
updated: 2021-03-26
---

**Last updated 26th March 2021**



## Objective  

In some situations, compliance regulations may require you to limit outbound traffic from your application.  The `firewall` property allows you to do so.

This setting has no impact on inbound requests to your application.  For that, use the environment access control settings in the Management Console.

> [!primary]  
> The outbound firewall is currently in Beta.  While the syntax is not expected to change, some behavior might in the future.
> 

## Syntax

The `firewall` property defines one or more allowed entries for outbound requests.  Its basic syntax is as follows:

```yaml
firewall:
  outbound:
    - protocol: tcp
      domains: ["google.com", "facebook.com"]
      ports: [80, 443]
    - protocol: tcp
      ips: ["1.2.3.4/32"]
      ports: [22]
```

The above example allows two outbound rules over TCP.  All other outbound requests will be blocked and will time out eventually (usually after 30 seconds).

If no rules are specified, the default `firewall` configuration is equivalent to:

```yaml
firewall:
  outbound:
    - protocol: tcp
      ips: ["0.0.0.0/0"]
```

That is, all outbound TCP traffic is allowed on all ports (aside from port 25, which is always blocked without exception).  In the majority of cases the default is sufficient for most applications.

## Options

Each firewall rule has three configuration values.  At least one of `ips`, `domains` or `ports` is required.

### `protocol`

The default and only legal value for the protocol is `tcp`.  Outbound UDP ports are not allowed.  As a result this property can be omitted in virtually every circumstance.

### `ips`

This property is an array of IP addresses in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).  CIDR allows you to specify a range of IP addresses in a compact format, using a bitmask.  Most commonly the bitmask is 8, 16, or 32 but that is not required.

For example, `1.2.3.4/8` will match any IP address whose first 8 bits match `1.2.3.4`, which corresponds to the first segment.  Therefore it will allow `1.*.*.*`.  In comparison, `1.2.3.4/24` will allow `1.2.3.*`.  A mask of 32 will match only the IP address specified, so to allow a single specific IP you must write `1.2.3.4/32`.

[IP Address Guide](https://ipaddressguide.com/cidr) has a useful CIDR format calculator.

If no `ports` property is specified, requests to any port on the specified IP addresses are permitted.

### `domains`

This property is an array of fully qualified domain names [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name).  FQDN allows you to specify specific destinations by hostnames.

If no `ports` property is specified, requests to any port on IP addresses the listed domains resolve to are permitted.

### `ports`

This property is an array of ports in the range 1 to 65535 that are allowed.  For example, `[80, 443]` will only allow requests to the specified IPs on ports 80 and 443 (typically HTTP and HTTPS, respectively).  Requests to any other port will be blocked.

If not specified, requests to a given IP may be to any port.

If no `ips` or `domains` property is specified, requests to any destination are permitted on the specified port(s).

## Multiple rules

It is possible to define an arbitrary number of allowed firewall rules, as in the example above.  If multiple rules are specified, a given outbound request will be allowed if it matches ANY of the defined rules.

That means that, for this configuration:

```yaml
firewall:
  outbound:
    - ips: ["1.2.3.4/32"]
      ports: [443]
    - ports: [80]
```

Requests to port 80 on any IP will be allowed, and requests to 1.2.3.4 on either port 80 or 443 will be allowed, even though the first rule only lists port 443.

## Usage considerations

Be aware that many services are behind a Content Delivery Network (CDN).  For most CDNs, routing is done via domain name, not IP address, so thousands of domain names may share the same public IP addresses at the CDN.  If you allow the IP address of a CDN, you will in most cases be allowing many or all of the other customers hosted behind that CDN.  That has security implications and limits the usefulness of this configuration option.
