---
title: "Presentation of identities that can interact within an OVHcloud account"
excerpt: "Discover the different types of identities that allow you to interact with an OVHcloud product"
updated: 2024-03-05
---

## Objective

The purpose of this guide is to present the different types of identities that can be managed in the OVHcloud account.

## Requirements

- An [OVHcloud customer account](ovhcloud-account-creation1.).

## Instructions

### Understanding identities

There are several types of identities that can interact with OVHcloud products:

![identities-types](identities_types.png){.thumbnail}

### OVHcloud account

This is the primary identity used to log in to the OVHcloud Control Panel. You use the OVHcloud account when you log in to the OVHcloud Control Panel with your email address or NIC handle (e.g. xx1111-ovh).

This identity acts as a root account and cannot have its rights restricted, regardless of the access policies implemented.

The OVHcloud account can also be referred to as a NIC or NIC-handle in the documentation.

### Local users

Local users are identities associated with your OVHcloud account. These accounts are designed for **human interaction** with OVHcloud products, as they are based on login/password authentication, and access rights depend on the [IAM policies](iam-policy-ui1.) implemented.

The configuration of local users is detailed in the [dedicated documentation](ovhcloud-users-management1.).

You can also use them to log in to the OVHcloud APIs by [generating a token associated with the user](first-steps1.). The rights of this token can be limited to a specific scope in addition to IAM policies.

In order for an application based on a token linked to a local user to use an OVHcloud API, it is therefore necessary for the token to integrate it within its scope **AND** that the user who created the token has rights on this API.

Local users can also be referred to as *sub-users* in the documentation.

### Service accounts

Service accounts are identities associated with your OVHcloud account. These accounts are designed for **machine interactions** with OVHcloud products, as they are based on client/token authentication, and access rights depend on the [IAM policies](iam-policy-ui1.) implemented.

The creation of service accounts is covered in a [dedicated documentation](manage-service-account1.).

A service account can then be used for [login on OVHcloud APIs](authenticate-api-with-service-account1.) as well as on third-party APIs such as those exposed by [OpenStack](authenticate-api-openstack-with-service-account1.).

Logging in with service accounts is not yet supported on SDKs and Terraform provider.

### Federated users

These are user accounts from an [identity federation](manage-operate-user-federation1.). These users come from a third-party directory, and are therefore not managed directly by OVHcloud. Their access rights depend on the [IAM policies](iam-policy-ui1.) implemented.

Federated users are represented by user groups in rights management.

### User groups

The different identities can be associated in user groups to make them easier to manipulate.
Configuring user groups is covered in the [local users management documentation](ovhcloud-users-management1.).

## Go further

Identity management can be automated via the [OVHcloud APIs](first-steps1.) or via the [provider Terraform OVHcloud](terraform-at-ovhcloud1.).

Join our community of users on <https://community.ovh.com/en/>.
