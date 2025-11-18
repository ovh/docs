---
title: Public Cloud Databases - How to enable deletion protection
excerpt: Find out how to setup a deletion protection for your Public Cloud databases service
updated: 2025-08-15
---

## Objective

Public Cloud databases allow you to protect your service against accidental deletion.

**This guide explains how to configure deletion protection for your Public Cloud databases service so that the service cannot be deleted until the deletion protection is disabled.**

## Requirements

- A [Public Cloud databases service](/links/public-cloud/databases) up and running
- Access to the [OVHcloud API](/links/api)

## Instructions

### Enable the deletion protection for your service

You can enable deletion protection for your service using the API endpoint:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/{engine}/{clusterId}
>

The boolean property `deletionProtection` should be set to `true` to activate the protection.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
