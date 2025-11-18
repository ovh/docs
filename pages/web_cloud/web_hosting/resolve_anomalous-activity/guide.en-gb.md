---
title: "How to react to abnormal activity detected on your web hosting"
excerpt: "Find out which steps to follow when suspicious activity is detected on your OVHcloud web hosting"
updated: 2025-10-02
---

## Objective

This guide explains the possible reasons why you might be notified about **abnormal activity** detected on your web hosting, the **temporary consequences** (security blocks), and **how to restore** functionality once the issue is resolved.

**Discover how to react to unusual activity on your OVHcloud web hosting.**

## Requirements

- An [OVHcloud web hosting](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
> To protect your website and visitors, we automatically activate security measures whenever unusual activity is detected on your web hosting. The cause is not always an attack; it could also be a poor website configuration, a third-party script, or a faulty extension, for example.

### Why is this message displayed?

We have detected unusual activity that could harm your service:

- Case 1 – **Detected malware**: Likely presence of **malicious files**
- Case 2 – **Unusual volume of emails sent via PHP** (scripts/applications)
- Case 3 – **Unusual volume of outgoing requests** (external connections)

For security reasons and depending on the situation, certain features may be temporarily blocked:

- **Website access** (Case 1)
- **Email sending via PHP** (Case 1 and Case 2)
- **Outgoing requests (TCP OUT)** (Case 1 and Case 3)

### What are the consequences for my website?

- Depending on the detected unusual activity, your **website may no longer be online** and accessible to visitors.
- **Emails sent via PHP** (forms, notifications, etc.) and/or **outgoing connections** (external APIs, webhooks, HTTP updates, etc.) may be **temporarily disabled**, depending on the case.

### Steps to resolve the situation

#### Case 1 — Detected malware

Your hosting likely contains malicious files. To understand and address these anomalies, follow our guide:  
[Use Case - Recommendations After Your Website is Hacked](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

**Once the cleanup is complete**, refer to the section "[Lift Security Measures](#lift-security-measures)" below.

#### Case 2 — Unusual volume of emails sent via PHP

Your website has sent a number of emails via PHP exceeding the normal threshold. This action could be **legitimate** (campaign, newsletter module) or **undesired** (abusive use of a form, misconfigured script, compromised extension). To understand and resolve these anomalies, consult our guide:  
[Track and Manage Automated Emails from Your Web Hosting](/pages/web_cloud/web_hosting/mail_function_script_records)

**Once the situation is normalized**, proceed to the section "[Lift security measures](#lift-security-measures)".

> [!primary]
>
> This measure does **not** apply to sending messages from an email account (via webmail or a mail client). It only applies to **emails sent via a script** (the PHP `mail()` function or SMTP sending triggered by an application on your web hosting).

#### Case 3 — Unusual volume of outgoing requests (TCP OUT)

Your website is making numerous external connections (APIs, updates, HTTP calls, etc.). This could indicate a malfunction. To understand and resolve these anomalies, consult our guide:  
[Use Case - Recommendations After Your Website is Hacked](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

**Once the cleanup is complete**, refer to the section "[Lift security measures](#lift-security-measures)" below.

### Lift security measures <a name="lift-security-measures"></a>

> [!warning]
>
> Perform this step **only after applying the recommendations above** (diagnosis, corrections/updates, security hardening). If abnormal activity is detected again during a subsequent scan, **security measures will be automatically reactivated**. You will receive a new notification, and the blocks will remain in place until the **situation is permanently resolved**.

1. Log in to your [OVHcloud Control Panel](/links/manager), go to `Web Cloud`{.action}, then click on your web hosting.
2. An **alert window** appears: `Abnormal Activity on Your Hosting`. If you click the `Later`{.action} button, an **alert banner** `Abnormal Activity Detected` appears at the top of the page. Click `Learn More`{.action} to reopen the alert window.
3. **Check** the box: `I confirm I have performed all necessary actions to resolve the issue`.
4. Click `Lift Security Measures`{.action}.
5. A **confirmation banner** appears at the top of the page: `Your hosting is being analyzed to lift the security measures.` Track progress by clicking the link `View Ongoing Tasks`{.action} or directly from the `Ongoing Tasks`{.action} tab.

> [!warning]
>
> Ensure your service is **eligible for automatic unblocking** (certain statuses do not allow immediate lifting of measures).

## Go further

[How to secure a website](/pages/web_cloud/web_hosting/secure_your_website)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
