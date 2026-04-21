---
title: "Landing Zone Manager - Creating and using an account"
excerpt: "Find out how to create a new user account in the Landing Zone Manager and log in for the first time"
updated: 2026-04-21
---

## Objective

The Landing Zone Manager provides self-service account management that lets administrators provision new users and grant them access to the platform. Each account created in the Landing Zone Manager is backed by a dedicated realm in the underlying Keycloak instance.

**This guide explains how to create a new account in the Landing Zone Manager and how to log in with it for the first time.**

## Requirements

- access to the Landing Zone Manager with administrator privileges allowing account management
- the first-login default password defined during your Landing Zone Manager deployment
- the URL of the Landing Zone Manager (previously communicated by your administrator)
- valid user information to provision (full name and email address)

## Instructions

### Step 1: Access the account management section

Log in to the Landing Zone Manager with an account that has administrator privileges. From the main navigation, open the `Account management`{.action} section.

### Step 2: Create a new account

Click the `+ Create New account`{.action} button to open the account creation form.

Fill in the following required fields:

|Field|Description|
|---|---|
|Name|The display name of the account|
|Email|The user's email address. This value will also be used as the **login** identifier|
|First name|The user's first name|
|Last name|The user's last name|

Once all fields are filled in, confirm the creation of the account.

> [!primary]
>
> The email address provided is used as the login identifier for the new account. Make sure it is correct before validating, as users will authenticate with this value.
>

### Step 3: Share the first-login credentials

After the account is successfully created, the user can log in for the first time using:

- **Login**: the email address entered during creation
- **Password**: the first-login default password defined during the Landing Zone Manager deployment

> [!warning]
>
> The default password is shared across first logins and is defined at deployment time. For security reasons, users should change this password immediately after their first successful login.
>

### Step 4: First connection to the Landing Zone Manager

Once the account has been provisioned, the user can connect to the Landing Zone Manager using the URL previously communicated.

From the login page:

1. Enter the email address used when creating the account as the login.
2. Enter the first-login default password.
3. Validate to access the Landing Zone Manager.

On first login, the user may be prompted to update their password and complete any additional authentication setup required by the platform.

## How accounts are mapped in Keycloak

> [!info]
>
> The Landing Zone Manager runs on its **own dedicated Keycloak stack**, independent from the OPCP Core Keycloak and from any CloudStore Keycloak. It is not federated with these instances: identities, realms and credentials managed in the Landing Zone Manager are fully isolated from the rest of the OPCP identity layers.
>

Every account created in the Landing Zone Manager automatically generates a dedicated **realm in Keycloak**. This design ensures:

- independent configuration of authentication flows per account
- separate user bases and role mappings per realm

> [!primary]
>
> Because each account corresponds to a distinct Keycloak realm, any identity-related operation (adding users, configuring federation, defining roles) must be performed within the realm associated with the target account.
>

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
