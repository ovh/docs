---
title: "Sign in to the OWAF Admin UI"
excerpt: "Sign in to the OVHcloud Web Application Firewall Admin UI using the Bearer token issued during alpha onboarding."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) is the web console used to manage rules, configure the WAF engine, route traffic to your backend, and monitor live statistics. Access during the alpha programme is protected by a Bearer token issued by the OVHcloud team.

**This guide explains how to sign in to the OWAF Admin UI using the Bearer token issued during alpha onboarding.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- An active [OVHcloud account](/links/manager)
- Access to the OVHcloud Web Application Firewall alpha programme — see [Request access to the alpha](../3.1_request_alpha_access/guide.en-gb.md)
- The Admin UI URL provided by OVHcloud (`https://<instance>:8443/control-plane`)
- The Bearer token provided by OVHcloud
- A supported browser (Chrome, Firefox, Edge, or Safari — latest two versions)
- Network access to the OWAF instance on port `8443`

## Instructions

### Step 1 — Open the Admin UI

1. Open your browser.
2. Navigate to the instance URL you received from OVHcloud, in the form `https://<instance>:8443/control-plane`.

The sign-in page loads.

<!-- DRAFT: To screenshot — capture the OWAF Admin UI sign-in page -->
![Sign-in page of the OWAF Admin UI](images/signin-page.png){.thumbnail}

### Step 2 — Paste your Bearer token

1. Paste the Bearer token issued by the OVHcloud team in the login field. The field accepts the token with or without the `Bearer ` prefix.
2. Click `Sign in`{.action}.

> [!warning]
>
> Treat the Bearer token as a privileged credential. Anyone with the token can change every WAF setting on your instance. Do not paste it into shared chat tools or commit it to source control.

### Step 3 — Land on the Rules page

After sign-in, the OWAF Admin UI opens on the **Rules** page (the default landing page). Confirm that:

- The sidebar shows links to **Rules**, **Configuration**, **Proxy**, and **Stats**.
- The footer shows your masked token, the OWAF version, and a `Logout`{.action} button.
- The status panel refreshes automatically every `30 seconds`.

<!-- DRAFT: To screenshot — capture the OWAF Admin UI Rules page with the sidebar and footer visible -->
![OWAF Admin UI Rules page with sidebar and footer](images/rules-landing.png){.thumbnail}

## Verify

| Check | How to confirm |
|---|---|
| You see the Rules page | The **Rules** entry is selected in the sidebar. |
| Token is masked in the footer | Open the footer to confirm the masked-token display. |
| WAF status is visible | The status panel in the footer or sidebar shows the WAF mode. |

## Sign out

When you have finished working in the Admin UI, click `Logout`{.action} in the sidebar footer to end your session.

> [!primary]
>
> Sign out after each Admin UI session, especially when working on shared workstations.

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| Sign in fails | Invalid or expired token | Re-request the token from your OVHcloud contact. |
| Admin UI unreachable | Port `8443` blocked or wrong instance URL | Open port `8443` outbound; double-check the URL. |
| Sidebar shows an outdated WAF mode | Stale session | Refresh the page or sign out and back in. |
| "OWAF version" not visible | UI rendering issue | Try a supported browser version. |

## Go further

- [Configure the proxy and Upstream URL](../3.3_configure_proxy/guide.en-gb.md)
- [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)

Join our [community of users](/links/community).
