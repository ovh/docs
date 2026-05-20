---
title: "OVHcloud WAF — prerequisites and alpha limits"
excerpt: "Check what you need before using the OVHcloud Web Application Firewall and review the limits that apply during the alpha programme."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall is delivered as a closed alpha and ships with a defined set of prerequisites and capacity limits. Reviewing these before you start ensures your environment is ready and that the scope of the service matches your expectations.

**This guide explains how to verify the prerequisites for the OVHcloud Web Application Firewall and review the limits that apply during the alpha programme.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Prerequisites for participating in the alpha

Before you sign in to the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI), make sure that you have the items listed below. These prerequisites are issued or validated by the OVHcloud team during onboarding to the alpha programme.

| Requirement | Details |
|---|---|
| Bearer token | Issued by OVHcloud during onboarding. It is required to authenticate to the OWAF Admin UI. |
| Backend URL | The HTTP or HTTPS address of the origin server that the OVHcloud Web Application Firewall will proxy traffic to. |
| Modern browser | Chrome, Firefox, Edge, or Safari — latest two versions. |
| Network access | Your client must be able to reach the OWAF instance on port `8443` (Admin UI) and port `8084` (WAF proxy). |

The instance address (in the form `https://<instance>:8443/control-plane`) and the Bearer token are both delivered by the OVHcloud team once your alpha access request is approved.

## Alpha limits

The values below describe the capacity of a single OWAF instance during the alpha programme. They apply uniformly to every alpha tenant and will evolve before general availability.

| Limit | Value |
|---|---|
| Tenants per instance | 1 (multi-tenancy on the GA roadmap) |
| Maximum request body inspected | 128 KB |
| Custom rules | Up to 500 |
| Supported protocols | HTTP/1.1, HTTP/2 |
| High availability | Single node (HA planned for GA) |
| API rate limiting | Not yet included |
| Rules save | Not yet included |

These limits are deliberate: the alpha is sized for evaluation, integration testing, and feedback gathering rather than for full production workloads.

## What is not available in alpha

The following capabilities are intentionally out of scope for the alpha programme:

- A public OVHcloud API for the OVHcloud Web Application Firewall configuration: programmatic configuration is planned for general availability and is not available during the alpha programme.
- OVHcloud Terraform provider resources for the OVHcloud Web Application Firewall: Terraform-based provisioning is on the GA roadmap and not exposed during the alpha programme.
- Multi-tenancy on a single instance: each alpha instance hosts exactly one tenant.
- High availability or multi-node deployment: each instance runs as a single node, and HA is planned for GA.
- API rate limiting: throttling based on request rate is not yet included in the WAF engine.
- Persistent rules save: the README flags "Rules save: not yet included", which means that configuration changes apply immediately via hot reload but the persistence behaviour of those changes may evolve before general availability.
- A formal Service Level Agreement: the alpha is provided for evaluation purposes only.

## Customer-side prerequisites

Beyond the items provided by the OVHcloud team, you must prepare the following on your side before you can route real traffic through the OVHcloud Web Application Firewall:

- A backend application reachable over HTTP or HTTPS from the OWAF instance. This is the upstream that the WAF will forward non-blocked requests to.
- DNS or upstream-proxy routing that directs end-user traffic to the OWAF instance address and port `8084`. Until that routing is in place, the WAF cannot inspect production traffic.
- A modern browser with network access to port `8443` for the operators who will use the OWAF Admin UI. Without this access, sign-in and configuration are not possible.
- For multi-layer setups: an existing load balancer or CDN that forwards to the OWAF instance, so that the WAF acts as an additional inspection layer in front of your origin.

## Compatibility

The OVHcloud Web Application Firewall is designed to integrate with common web stacks without code changes on the backend. The compatibility scope below reflects the alpha release.

### Browser compatibility

The OWAF Admin UI is validated against the latest two versions of Chrome, Firefox, Edge, and Safari. Older browser versions are not actively tested during the alpha programme.

### Protocol compatibility

The WAF proxy accepts inbound traffic over HTTP/1.1 and HTTP/2. Other protocols, including HTTP/3, are not in scope for the alpha release.

### Backend compatibility

Any HTTP or HTTPS origin reachable from the OWAF instance can be configured as the upstream. The WAF does not require changes to the backend application; it relies on the upstream URL configured from the **Proxy** page.

## Feedback and known gaps

The alpha programme exists to surface real integration constraints and to refine the scope of the OVHcloud Web Application Firewall before general availability. Feedback is essential: report issues, false positives, and feature requests directly to your OVHcloud contact, including any limit you find too restrictive for your use case.

> [!primary]
>
> If you hit one of the alpha limits listed above, or you identify a missing capability that blocks your evaluation, flag it to your OVHcloud contact. Real usage data from the alpha is the primary input used to size GA quotas and to prioritise the GA roadmap.

## Go further

- [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md)
- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Request access to the alpha](../3.1_request_alpha_access/guide.en-gb.md)
- [Limits and known issues (appendix)](../ovhcloud_waf-limits/guide.en-gb.md)

Join our [community of users](/links/community).
