---
title: Create a OVH sub-account and a user account with OVH API
excerpt: Create a sub-account and a user account with OVH API to access to OVH Manager
slug: ovh-api-sub-account
section: OVH APIv6
---

**Last updated January 2 2020**

## Objective

We will describe how to create a OVH sub-account to create a particular identity in objective to isolate services access and billing.

This guide will also indicate how to add one or more logins to a sub-account to provide access over OVH Manager.

## Requirements

* Be connected on [API OVH](https://api.ovh.com/console){.external}.
* Have [créé ses identifiants pour l'API OVH](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Have a customer account wih Reseller Tag (Please contact your sale to know to find out how to be eligible).

## Instructions

### Ressources

* /me/subAccount
* /me/identity/user

### Operation process

#### Create a sub-account

> [!api]
>
> @api {POST} /me/subAccount
>

Get and save the ID returned 

#### Create a ConsumerKey for this sub-account

> [!api]
>
> @api {POST} /me/subAccount/{id}/createConsumerKey
>

The ConsumerKey allow you to call the OVH API with the identiy of the sub-account.

#### Create a user for this sub-account

With the ConsumerKey previously created.

> [!api]
>
> @api {POST} /me/identity/user
>

* email : add a email address for this user
* login : put a string relevant for you
* password : Must be follow rules from [zxcvbn: Low-Budget Password Strength Estimation](https://github.com/dropbox/zxcvbn){.external} and be validated on [Pwned Passwords](https://haveibeenpwned.com/Passwords){.external} .

## Go further

Join our community of users on <https://community.ovh.com/en/>.
