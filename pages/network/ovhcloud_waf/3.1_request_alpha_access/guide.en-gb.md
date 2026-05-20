---
title: "Request access to the OVHcloud WAF alpha"
excerpt: "Request access to the OVHcloud Web Application Firewall closed alpha via the OVHcloud Labs page and receive your instance and Bearer token."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall is distributed during alpha through an application form on OVHcloud Labs. After your request is reviewed, the OVHcloud team provisions a dedicated instance and issues the Bearer token that grants access to the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI).

**This guide explains how to request access to the OVHcloud Web Application Firewall alpha programme and verify that you can sign in to the Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- An active [OVHcloud account](/links/manager)
- Your OVHcloud NIC handle (customer ID — see the [glossary](../1.2_glossary/guide.en-gb.md) if unfamiliar)
- A brief description of your use case
- The URL of the application you want to protect

## Instructions

### Step 1 — Submit the alpha access request

1. Open the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.
2. Locate the OVHcloud Web Application Firewall alpha programme.
3. Submit the request form with the following information:
   - Your OVHcloud NIC handle.
   - A brief description of your use case (for example, the type of application to protect and the expected traffic profile).
   - The URL of the application you want to protect.

<!-- DRAFT: To screenshot — capture the OVHcloud Labs page entry for the OVHcloud Web Application Firewall alpha -->

![OVHcloud Labs entry for the OVHcloud Web Application Firewall alpha](images/labs-request.png){.thumbnail}

### Step 2 — Receive your credentials

When your request is approved, the OVHcloud team sends you the OVHcloud Web Application Firewall instance URL in the form `https://<instance>:8443/control-plane` and a Bearer token that authenticates every session on the OWAF Admin UI. Both values are delivered through the contact details associated with your OVHcloud account, so make sure those details are up to date before submitting the form.

> [!warning]
>
> Treat the Bearer token as a privileged credential. Anyone with the token can change every WAF setting on your instance. Store it in your secrets vault and rotate it via OVHcloud if a compromise is suspected.

### Step 3 — Verify access

1. Open the instance URL in your browser.
2. Paste the Bearer token in the login field and click `Sign in`{.action}.
3. The OWAF Admin UI loads on the **Rules** page (the default landing page after sign-in).

For detailed sign-in steps, see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).

## Verify

| Check | Expected result |
|---|---|
| You receive a confirmation from the OVHcloud team | Check your inbox for the instance URL and Bearer token. |
| You can reach the Admin UI | The OWAF Admin UI sign-in page loads at `https://<instance>:8443/control-plane`. |
| You can sign in | After pasting the Bearer token, the **Rules** page opens. |

## Feedback during alpha

Your feedback shapes the OVHcloud Web Application Firewall before general availability. Report issues, false positives, and feature requests directly to your OVHcloud contact, including the affected rule ID or page name and any reproduction steps where possible.

> [!primary]
>
> Share feedback throughout the alpha — every report on detection accuracy, Admin UI behaviour, or missing capabilities is reviewed by the product team and helps prioritise improvements before general availability.

## Go further

- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)
- [Quick start](../2.1_quickstart/guide.en-gb.md)
- [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md)

Join our [community of users](/links/community).
