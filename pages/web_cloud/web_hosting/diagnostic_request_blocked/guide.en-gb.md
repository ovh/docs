---
title: "What should I do if the page “Your request has been blocked” appears?"
excerpt: "Find out what to do if your website displays a “Your request has been blocked” page"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

The shared infrastructure where OVHcloud web hosting plans are located has several security systems.  
If your website displays a “Your request has been blocked” page, this means that one of the requests you are trying to execute to your website has been blocked by our security systems.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Find out what to do if your website displays a “Your request has been blocked” page.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- The login details to access [your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

The “Your request has been blocked” page may appear for a number of reasons (non-exhaustive list):

- The request is made from an unupdated web browser (Firefox, Chrome, Safari, Edge, etc.).
- A very large number of requests, similar or not, are made in an extremely short time.
- The request attempts to perform unauthorized actions on the shared infrastructure where your web hosting plan is located.

### 1 - Check that your web browser is up to date

Go to your web browser settings and check if an update is available.

/// details | Click here for more information about updating your web browser

Below are the procedures for updating the most popular web browsers (documentation provided by their publishers):

- [Firefox](https://support.mozilla.org/en-US/kb/update-firefox-latest-release)
- [Chrome](https://support.google.com/chrome/answer/95414?hl=en-GB&co=GENIE.Platform%3DDesktop&oco=0)
- [Safari](https://support.apple.com/en-gb/102665)
- [Edge](https://support.microsoft.com/en-gb/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1)

If your Internet browser is not present in the list above, refer to your browser's online documentation or contact the publisher's support.

///

Once your web browser is up to date, try accessing your website again. If the situation persists, continue with step 2.

### 2 - Retrieve the information on the “Your request has been blocked” page and contact support

The security system that blocks your requests is located upstream of your web hosting plan. As a result, you will not be able to access logs for this security system from your OVHcloud Control Panel.

#### 2.1 - Retrieve the information on the page “Your request has been blocked”

First, retrieve the information below that appears on the “Your request has been blocked” page:

- `IP address` (for example: 203.0.113.0)
- `Date` (for example: 2025-07-01T16:30:45:150Z)
- `Request ID` (for example: AbCdEf-your-request-ID-GhIjKlM)

#### 2.2 - Contact support

Once this data is collected, create a [support ticket](https://help.ovhcloud.com/csm?id=csm_get_help) from the OVHcloud Help Center, specifying:

- The message found on the page (“Your request has been blocked”).
- The three elements retrieved earlier (`IP address`, `Date` and `Request ID`).
- The URL from which the page is displayed (for example: `https://www.domain.tld/index.php`).
- The Internet browser used.

The support team will get back to you as soon as possible to confirm the origin of this blockage.

## Go further

[Use cases - What to do if your  Website is hacked](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
