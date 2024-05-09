---
title: How to analyse IAM policy results (EN)
excerpt: Find out how to use generated logs to identify missing rights in IAM policies
updated: 2023-11-17
---

## Objective

The purpose of this guide is to present the different methods available for identifying missing actions in IAM policies.

## Requirements

- You have an [OVHcloud customer account](ovhcloud-account-creation1.).
- You know how to configure [access policies via the OVHcloud Control Panel](iam-policy-ui1.) or [access policies via API](iam-policies-api1.).
- You know how [send IAM policy logs to Logs Data Platform](iam-logs-forwarding1.).

## Instructions

### In HTTP responses

During API calls, you can get the name of the missing action in the HTTP request response: via the `unauthorizedActionsByIAM` field.
In the following example, the missing action is "*vps:apiovh:reboot*"

```json
{
  "class": "Client::Forbidden",
  "message": "User not granted for this request",
  "details": {
    "unauthorizedActionsByAuthentication": "",
    "unauthorizedActionsByIAM": "vps:apiovh:reboot"
  }
}
```

From the OVHcloud Control Panel, based entirely on our API, it is also possible to access this information through the web browser development tools. This is done by analysing the errors of type 403.

To do this, go to the `Network`{.action} tab, and select the query that returns a status **403**, then go to the `Response`{.action} tab.

![Browser development tool](browser_dev_tool.png){.thumbnail}

### In Logs Data Platform (LDP)

If [transmission of OVHcloud account logs to LDP](iam-logs-forwarding1.) is enabled, you can find the information in the access policy logs.

In the Graylog interface, search for the login of the user concerned and logs containing `unauthorized_actions_array` with the `identities_array:*My_user* AND unauthorized_actions_array:*` request.

![Graylog research](graylog_research.png){.thumbnail}

The logs filtered in this way show the actions refused by the OVHcloud IAM for the user.

![Log example](IAM_log.png){.thumbnail}

Here for example, the user *Ines* tried to perform the action *vps:apiovh:reboot* without success.

You can also filter the search on `authorized_actions_array` to list the actions authorised by the OVHcloud IAM.

## Go further

Join our community of users on <https://community.ovh.com/en/>.