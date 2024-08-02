---
title: 'Best Practices for structuring OVHcloud Public Cloud Projects'
excerpt: 'Learn how to secure your OVHcloud account, manage identities, implement best practices for structuring your Public Cloud projects and use IAM policies to restrict access rights'
updated: 2024-07-22
---

## Objective

**This guide explains how to secure your OVHcloud account, manage identities, implement best practices for structuring your Public Cloud projects and use IAM policies to restrict access rights**

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

The official "[Securing my OVHcloud account and managing my personal information](/pages/account_and_service_management/account_information/all_about_username)" guide provides general best practices for account management and is a good place to start.

#### Enable Two-Factor Authentication (2FA)
- **What it does**: Adds an extra layer of security by requiring a second form of verification (e.g., mobile app, security key) in addition to your password.
- **How to enable**: Log in to your OVHcloud Control Panel, go to the Security tab, and follow the steps to set up 2FA using a mobile app or security key. Ensure you store your backup codes securely. More details on the [2FA guide](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa/).
- **Example**: If you use a U2F security key, you will plug it into your USB port each time you log in, providing an additional security measure beyond your password.

#### Set Strong Passwords
The [Password management guide](/pages/account_and_service_management/account_information/manage-ovh-password) provides best practices with regards to the password management.

#### Add a Backup Email Address
- **Importance**: Helps recover access to your account if the primary email is inaccessible.
- **Configuration**: Add a backup email in the OVHcloud Control Panel under your profile settings, ensuring it differs from your primary email address. see [Guide on managing personal information](pages/account_and_service_management/account_information/all_about_username/).

### Step 2: Understanding Identity and Access Management (IAM) and creating Identities

**Definition**: IAM is a framework for managing user identities and their access to resources securely.

**Implementation**: Use IAM features to manage identities, groups, and policies in OVHcloud IAM.

**Key Components**:
1. **Identities**: Individual accounts for people (user) or service account who need access to OVHcloud resources.
2. **Groups**: Collections of user or resources with common access needs.
3. **Policies**: Rules that define what actions users and groups can perform on which resources.

**Examples**:
- **Managing identities**: 3 types of identities are supported and presented in that [documentation page](https://help.ovhcloud.com/csm/en-ie-account-identities-management?id=kb_article_view&sysparm_article=KB0061998)
    * 'local users' which are identities representing a person in your organisation and associated to your OVHcloud account.  See [Creating and managing local users on an OVHcloud account](https://help.ovhcloud.com/csm/en-gb-account-managing-users?id=kb_article_view&sysparm_article=KB0030017)
    * 'service accounts' which are used for 'machine to machine' interaction. Service account are also associated to your OVHcloud account
    * 'Federated identities': multiple federation protocols / providers are supported and documented : [AD FS](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-adfs?id=kb_article_view&sysparm_article=KB0043008), [Google Workspace](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-googleworkspace?id=kb_article_view&sysparm_article=KB0057482), [Entra ID](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-azure-ad?id=kb_article_view&sysparm_article=KB0057535) or [OKTA](https://help.ovhcloud.com/csm/en-gb-connect-saml-sso-okta?id=kb_article_view&sysparm_article=KB0057681)
    
- **Grouping Users**: Create groups such as "Developers", "Admins", and "Auditors" to simplify permissions management. If you have chosen to create local users, then use this [documentation page](https://help.ovhcloud.com/csm/en-gb-account-managing-users?id=kb_article_view&sysparm_article=KB0030017#group-management) to create local user groups. If you have chosen Identity Federation, then the group shall be defined in your identity provider, provided in the SAML ticket and mapped to an OVHcloud group. This step is detailed in each Identity provider documentation page.

- **Defining Policies**: Assign policies to identities and groups to restrict or grant access. For example, a developer might have permissions to deploy applications but not to manage billing information. This [documentation page](https://help.ovhcloud.com/csm/en-gb-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058725) defines how to use IAM policies using the OVHcloud Control Panel


### Step 4: Best Practices for Structuring Public Cloud Projects

Public Cloud projects enables to separate resources and the access rights associated to those resources.

The pattern to split the projects can be:
* `Domain`: the domain inside your company e.g. Finance, IT, Marketing, Sales...
* `Application id`: the identifier of the application. It could be its name or an id from the Application Portfolio of your entreprise.
* `Environment`: the environment e.g. dev, QA, staging, prod.

A prefix can be used to facilitate the management of the resources.
For example, if we use the pattern defined above, we could have the following cloud projects names: 
* cloud_project_finance_invoicing_qa
* cloud_project_it_collaboration_staging
* cloud_project_it_monitoring_prod
* cloud_project_marketing_analytics_dev
* cloud_project_marketing_automation_qa
* cloud_project_sales_cpq_staging
* cloud_project_sales_ecommerce_dev


### Step 5: Providing Role-Based Access Control (RBAC) to Public Cloud projects through IAM Policies 

Now that you have identities and projects, you can define the access right for each projects. We recommend to use groups and not individual identities when defining policy since this makes the policy lifecycle management easier. 

In the following example we will use two groups called `finance_developer_group` and `finance_SRE_group` that contains the identities of the users that are developing & the one that are making sure that the finance application in in production in a healthy state.

For this example, we will take a tool used by finance team to make their financial planning and analysis (FPA). In this fictive case, we will have 3 public cloud projects managing the resources of three environments (development, staging and production). The projects are named:
* `cloud_project_finance_fpa_dev` 
* `cloud_project_finance_fpa_staging`
* `cloud_project_finance_fpa_prod`

The following table sums up the access rights we will provide to each groups in the example. The access policies are provided for educational purpose and shall be adapted to your context.


| Public Cloud project name | `finance_developer_group` | `finance_SRE_group`
|------|------|------|
|`cloud_project_finance_fpa_dev`|read write | no access |
|`cloud_project_finance_fpa_staging`| read | read write|
|`cloud_project_finance_fpa_prod`| no access | read write |



#### Provide Control Panel access
In order to provide access to OVHCloud control Panel, you need to create a specific policy as described in that [page](../../../../pages/account_and_service_management/account_information/iam-control-panel-access/) and in the `Add user groups`, choose the groups `finance_developer_group` and `finance_SRE_group`.
![Add user groups](img/Add_user_groups.png){.thumbnail}

Thanks to that policy, the user belonging to those 2 groups will have access to the Control Panel but only with that policy they do not have the right to see / manage any resources. The following chapter adds that. 

#### Provide specific rights to Public Cloud projects
Let's continue by creating policies in order to enable the access rights tables described above.For that we will create 4 policies summarized below.


| Policy name |Identities | Actions |  Resources | 
|------|------|------|-----|
|cloud_project_finance_fpa_dev-RW|finance_developer_group|globalWriteAccess|cloud_project_finance_fpa_dev|
|cloud_project_finance_fpa_staging-RO|finance_developer_group|globalReadAccess|cloud_project_finance_fpa_staging|
|cloud_project_finance_fpa_staging-RW|finance_SRE_group|globalWriteAccess|cloud_project_finance_fpa_staging|
|cloud_project_finance_fpa_prod-RW|finance_SRE_group|globalWriteAccess|cloud_project_finance_fpa_prod|

The policy naming following the following pattern : \<Name of the resource\>-RO/RW


Here is a step by step guide to create the first policy:
* Into IAM page `Create a Policy`, fill in the name `cloud_project_finance_fpa_dev-RW` and a description. 
* Then click on `Add user groups`, choose the group `finance_developer_group`.
* Under `Product types`, choose `Public Cloud project`
* Under `Resources`, select the target public cloud project `cloud_project_finance_fpa_dev`
![Add Product types & resources](img/Product_types_resources.png){.thumbnail}
* Under `Actions` in `Managed permission groups`, leave `Authorize all actions` unchecked and choose `globalWriteAccess`
![Actions](img/Actions.png){.thumbnail}

Now the users belonging to the `finance_developer_group` will have only access to the Control Panel and to the selected Public Cloud project in write access.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!

