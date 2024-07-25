---
title: 'Best Practices for Structuring OVHcloud Public Cloud Projects'
excerpt: 'Learn how to optimize your OVHcloud account security, manage your personal information, and efficiently structure your Public Cloud projects'
updated: 2024-07-22
---

## Objective

**This guide explains how to secure your OVHcloud account, manage your personal information, and implement best practices for structuring your Public Cloud projects.**

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

For detailed instructions on securing your OVHcloud account with two-factor authentication (2FA), please refer to the official guide: [Securing your OVHcloud account with two-factor authentication](/pages/account_and_service_management/account_information/all_about_username).

#### Enable Two-Factor Authentication (2FA)
- **What it does**: Adds an extra layer of security by requiring a second form of verification (e.g., mobile app, security key) in addition to your password.
- **How to enable**: Log in to your OVHcloud Control Panel, go to the Security tab, and follow the steps to set up 2FA using a mobile app or security key. Ensure you store your backup codes securely. [Detailed 2FA guide](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa/).
- **Example**: If you use a U2F security key, you will plug it into your USB port each time you log in, providing an additional security measure beyond your password.

#### Set Strong Passwords
- **Requirements**: At least nine characters, including upper and lower case letters, numbers, and special characters. Avoid personal information and dictionary words.
- **Management**: Use a password manager like KeePass or Bitwarden to store and generate strong passwords. Regularly update your password and ensure it is unique for each service. [Password management guide](/pages/account_and_service_management/account_information/manage-ovh-password).

#### Add a Backup Email Address
- **Importance**: Helps recover access to your account if the primary email is inaccessible.
- **Configuration**: Add a backup email in the OVHcloud Control Panel under your profile settings, ensuring it differs from your primary email address. [Guide on managing personal information](pages/account_and_service_management/account_information/all_about_username/).


### Step 2: Managing Personal Information

To verify and update your personal information or to change your primary email address, please refer to the official guide: [All about username](/pages/account_and_service_management/account_information/all_about_username).


### Step 3: Implementing IAM and RBAC

#### Identity and Access Management (IAM)

**Definition**: IAM is a framework for managing user identities and their access to resources securely.

**Implementation**: Use IAM to create users, groups, and policies in OVHcloud IAM.

**Key Components**:
1. **Users**: Individual accounts for people who need access to OVHcloud resources.
2. **Groups**: Collections of users with common access needs.
3. **Policies**: Rules that define what actions users and groups can perform on which resources.

**Examples**:
- **Creating Users**: Create individual accounts for each team member. Ensure each user has a unique set of credentials. You can either:
    * create 'local' users. See [Creating and managing local users on an OVHcloud account](https://help.ovhcloud.com/csm/en-gb-account-managing-users?id=kb_article_view&sysparm_article=KB0030017)
    * set up Identity federation. Multiple protocols / providers are documented : [AD FS](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-adfs?id=kb_article_view&sysparm_article=KB0043008), [Google Workspace](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-googleworkspace?id=kb_article_view&sysparm_article=KB0057482), [Entra ID](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-azure-ad?id=kb_article_view&sysparm_article=KB0057535) or [OKTA](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-okta?id=kb_article_view&sysparm_article=KB0057681)
- **Grouping Users**: Create groups such as "Developers", "Admins", and "Auditors" to simplify permissions management. If you have chosen to create local users, then use this [documentation page](https://help.ovhcloud.com/csm/en-gb-account-managing-users?id=kb_article_view&sysparm_article=KB0030017#group-management) to create local groups. If you have chosen Identity Federation, then the group shall be defined in your identity provider.
- **Defining Policies**: Assign policies to users and groups to restrict or grant access. For example, a developer might have permissions to deploy applications but not to manage billing information. This [documentation page](https://help.ovhcloud.com/csm/en-gb-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058725) defines how to use IAM policies using the OVHcloud Control Panel


#### Role-Based Access Control (RBAC)

**Definition**: RBAC regulates access to resources based on the roles assigned to local users, federated users or services accounts.

**Implementation**: Thanks to the IAM `users`, `groups` and `policies` you are able to define access control that are based on the role. For instance, the "Developer" group can have read-only access to the prod environment but read-write to the dev environment.


### Step 4: Best Practices for Structuring Public Cloud Projects

Public Cloud projects is your way to separate the access rights to the different Public Cloud ressources included in those projects between your identities. 

The pattern to split the projects can be :
* `Domain` : the domain inside your company e.g. Finance, IT, Marketting, Sales...
* `Application id` : the identifier of the application. It could be its name or an id from the Application Portfolio of your entreprise.
* `Environment` : the environement e.g. dev, QA, staging, prod.

This would give 
* finance-ecommerce-dev
* finance-invoicing-qa
* it-collaboration-staging
* it-monitoring-prod
* marketing-analytics-dev
* marketing-automation-qa
* sales-cpq-staging
* sales-pricing-prod

On each public cloud project, you could create a policy TODO add policy
## Go further

Join our community of users on <https://community.ovh.com/en/>.
