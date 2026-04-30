---
title: "Landing Zone Manager - Creating a user account"
excerpt: "Find out how to create a user account in the Landing Zone Manager and log in for the first time"
updated: 2026-04-30
---

## Objective

The Landing Zone Manager is the OPCP portal that lets each team, department or customer deploy and operate their workloads autonomously, in a dedicated and isolated space. Administrators provision users and grant them access to the platform. Each user account is backed by a dedicated realm in the underlying Keycloak instance, ensuring multitenant isolation of accesses.

**This guide explains how to create a user account in the Landing Zone Manager and log in for the first time.**

## Requirements

- Access to the Landing Zone Manager with administrator privileges allowing user account management
- The first-login default password defined during your Landing Zone Manager deployment
- The URL of the Landing Zone Manager (previously communicated by your administrator)
- Valid user information to provision (full name and email address)

## Instructions

### Step 1: Access the user account management section

Log in to the Landing Zone Manager with an account that has administrator privileges. From the main navigation, open the `Account management`{.action} section.

### Step 2: Create a new user account

Click the `+ Create new account`{.action} button to open the user account creation form.

Fill in the required fields:

| Field      | Description                                                                        |
| ------------| ------------------------------------------------------------------------------------|
| Name       | The display name of the user account                                               |
| Email      | The user's email address. This value will also be used as the **login** identifier |
| First name | The user's first name                                                              |
| Last name  | The user's last name                                                               |

Once all fields are filled in, confirm the user account creation.

> [!primary]
>
> The email address provided is used as the login identifier for the new user account. Make sure it is correct before validating, as users will authenticate with this value.
>

### Step 3: Share the first-login credentials

After the user account is successfully created, the user can log in for the first time using:

- **Login**: the email address entered during creation
- **Password**: the first-login default password defined during OPCP and CloudStore deployment

> [!warning]
>
> The default password is shared across first logins and is defined at deployment time. For security reasons, users have to change this password immediately after their first successful login.
>

### Step 4: First connection to the Landing Zone Manager

Once the user account has been provisioned, the user can connect to the Landing Zone Manager using the URL previously communicated.

## How user accounts are mapped in Keycloak

> [!primary]
>
> The Landing Zone Manager runs on its **own dedicated Keycloak stack**, independent from the OPCP Core Keycloak and from any CloudStore Keycloak. It is not federated with these instances: identities, realms and credentials managed in the Landing Zone Manager are fully isolated from administrators who can access the rest of the OPCP identity layers.
>

Every account created in the Landing Zone Manager automatically generates a dedicated **realm in Keycloak**. This design ensures:

- independent configuration of authentication flows per account
- separate user bases and role mappings per realm

> [!primary]
>
> Because each account corresponds to a distinct Keycloak realm, any identity-related operation (adding users, configuring federation, defining roles) must be performed within the realm associated with the target account.
>

## Go further

For training or technical assistance implementing our solutions, contact your sales representative or visit our [Professional Services](/links/professional-services) page to request a quote and have your project analyzed by our experts.

Join our [community of users](/links/community).
