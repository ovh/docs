---
title: "Presentation of identities that can interact within an OVHcloud account"
excerpt: "Discover the different types of identities that allow you to interact with an OVHcloud product"
updated: 2024-03-05
---

## Objective

The purpose of this guide is to present the different types of identities that can be managed in the OVHcloud account.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Instructions

### Understanding identities

There are several types of identities that can interact with OVHcloud products:

![identities-types](images/identities_types.png){.thumbnail}

### OVHcloud account

This is the primary identity used to log in to the OVHcloud Control Panel. You use the OVHcloud account when you log in to the OVHcloud Control Panel with your email address or NIC handle (e.g. xx1111-ovh).

This identity acts as a root account and cannot have its rights restricted, regardless of the access policies implemented.

The OVHcloud account can also be referred to as a NIC or NIC-handle in the documentation.

### Local users

Local users are identities associated with your OVHcloud account. These accounts are designed for **human interaction** with OVHcloud products, as they are based on login/password authentication, and access rights depend on the [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui) implemented.

The configuration of local users is detailed in the [dedicated documentation](/pages/account_and_service_management/account_information/ovhcloud-users-management).

You can also use them to log in to the OVHcloud APIs by [generating a token associated with the user](/pages/manage_and_operate/api/first-steps). The rights of this token can be limited to a specific scope in addition to IAM policies.

In order for an application based on a token linked to a local user to use an OVHcloud API, it is therefore necessary for the token to integrate it within its scope **AND** that the user who created the token has rights on this API.

Local users can also be referred to as *sub-users* in the documentation.

### Service accounts

Service accounts are identities associated with your OVHcloud account. These accounts are designed for **machine interactions** with OVHcloud products, as they are based on client/token authentication, and access rights depend on the [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui) implemented.

The creation of service accounts is covered in a [dedicated documentation](/pages/manage_and_operate/api/manage-service-account).

A service account can then be used for [login on OVHcloud APIs](/pages/account_and_service_management/account_information/authenticate-api-with-service-account) as well as on third-party APIs such as those exposed by [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

Logging in with service accounts is not yet supported on SDKs and Terraform provider.

### Federated users

These are user accounts from an [identity federation](/products/manage-operate-user-federation). These users come from a third-party directory, and are therefore not managed directly by OVHcloud. Their access rights depend on the [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui) implemented.

Federated users are represented by user groups in rights management.

### User groups

The different identities can be associated in user groups to make them easier to manipulate.
Configuring user groups is covered in the [local users management documentation](/pages/account_and_service_management/account_information/ovhcloud-users-management).

## Go further

Identity management can be automated via the [OVHcloud APIs](/pages/manage_and_operate/api/first-steps) or via the [provider Terraform OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

Join our community of users on <https://community.ovh.com/en/>.
