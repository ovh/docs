---
title: Create a OVH sub-account and a user account with OVH API
excerpt: Create a sub-account and a user account with OVH API to access to OVH Manager
updated: 2020-01-02
---

## Objective

We will describe how to create a OVHcloud sub-account in order to create a unique identity that isolates visibility on services, billing.
This guide will also show you how to add one or more logins to this sub-account to provide access the OVHcloud control panel.

## Requirements

* Being connected on [OVHcloud API](https://ca.api.ovh.com/){.external}.
* Having [created your credentials for OVHcloud API](/pages/manage_and_operate/api/first-steps){.external}.

* Having a customer account wih Reseller Tag (contact your sales representative for eligibility if applicable).

## Instructions

### Ressources

* /me/subAccount
* /me/identity/user

### Operation process

#### Create a sub-account

> [!api]
>
> @api {v1} /me POST /me/subAccount
>

Retrieve and save the resulting ID.

#### Create a ConsumerKey for this sub-account

> [!api]
>
> @api {v1} /me POST /me/subAccount/{id}/createConsumerKey
>

The ConsumerKey allows you to call the OVHcloud API with the identiy of the sub-account.

#### Create a user for this sub-account

With the previously created ConsumerKey.

> [!api]
>
> @api {v1} /me POST /me/identity/user
>

* email : add an email address for this user
* login : enter a relevant string for this user
* password : it must meet the requirements of [zxcvbn: Low-Budget Password Strength Estimation](https://github.com/dropbox/zxcvbn){.external} and be valid by testing it on [Pwned Passwords](https://haveibeenpwned.com/Passwords){.external}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
