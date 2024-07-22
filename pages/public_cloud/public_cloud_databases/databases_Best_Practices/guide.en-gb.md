---
title: 'Securing my OVHcloud account and managing my personal information'
excerpt: 'Find out how to optimise your OVHcloud account security, manage your personal information, and delegate access to your account'
updated: 2023-12-08
---

## Objective

**This guide explains how to secure your OVHcloud account, manage your personal information, and implement best practices for structuring your Public Cloud projects.**

#### Enable Two-Factor Authentication (2FA)
- **What it does**: Adds an extra layer of security by requiring a second form of verification (e.g., mobile app, security key) in addition to your password.
- **How to enable**: Log in to your OVHcloud Control Panel, go to the Security tab, and follow the steps to set up 2FA using a mobile app or security key. Ensure you store your backup codes securely. [Detailed 2FA guide](https://support.us.ovhcloud.com/hc/en-us/articles/360013968099-Securing-an-Account-with-Two-Factor-Authentication).
- **Example**: If you use a U2F security key, you will plug it into your USB port each time you log in, providing an additional security measure beyond your password.

#### Set Strong Passwords
- **Requirements**: At least nine characters, including upper and lower case letters, numbers, and special characters. Avoid personal information and dictionary words.
- **Management**: Use a password manager like KeePass or Bitwarden to store and generate strong passwords. Regularly update your password and ensure it is unique for each service. [Password management guide](/pages/account_and_service_management/account_information/manage-ovh-password).

#### Add a Backup Email Address
- **Importance**: Helps recover access to your account if the primary email is inaccessible.
- **Configuration**: Add a backup email in the OVHcloud Control Panel under your profile settings, ensuring it differs from your primary email address. [Guide on managing personal information](pages/account_and_service_management/account_information/all_about_username/).

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

For detailed instructions on securing your OVHcloud account with two-factor authentication (2FA), please refer to the official guide: [Securing your OVHcloud account with two-factor authentication](/pages/account_and_service_management/account_information/all_about_username).

### Step 2: Managing Personal Information

To verify and update your personal information or to change your primary email address, please refer to the official guide: [All about username](/pages/account_and_service_management/account_information/all_about_username).

### Step 3: Delegating Access

To manage users and delegate access to your OVHcloud account, please refer to the official guide: [OVHcloud Users Management](/pages/account_and_service_management/account_information/ovhcloud-users-management).


### Step 4: Best Practices for Structuring Public Cloud Projects

1. **Establish Landing Zones**
   - **Purpose**: Create scalable and secure multi-account environments to isolate resources and manage growth efficiently. [Guide on creating Public Cloud projects](https://help.ovhcloud.com/csm/en-public-cloud-compute-create-project?id=kb_article_view&sysparm_article=KB0050599).
   - **Example**: Set up separate accounts for different departments like HR, Finance, and Development to ensure data isolation and security.

![Landing Zone Diagram](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_public_cloud_diagram.jpg)

2. **Use Multiple Accounts**
   - **Strategy**: Separate resources and workloads into different accounts based on business units, applications, or environments (development, staging, production).
   - **Example**: Use one account for development and another for production to prevent accidental interference between environments.

3. **Organize by Applications and Environments**
   - **Implementation**: Use VRacks to securely connect resources across different environments. Implement network segmentation to protect sensitive data. [Guide on connecting Public Cloud instances](https://help.ovhcloud.com/csm/en-gb-public-cloud-compute-getting-started?id=kb_article_view&sysparm_article=KB0051017).
   - **Example**: Segment your CRM application into development, testing, and production environments, each with its own network policies and security controls.

![Network Segmentation Diagram](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_network_segmentation.jpg)

4. **Consistent Tagging**
   - **Usage**: Tag resources for efficient management, billing, and compliance tracking. Note that tagging is currently available only for certain resources.
   - **Example**: Use tags like `Project:CRM`, `Environment:Production`, and `Owner:Marketing` to organize and track resources.

### Complete Documentation on VRacks and Private Networks

For more details on VRack and private network configurations, refer to the following guides:
- [Using VRacks with Public Cloud](https://docs.ovh.com/gb/en/public-cloud/using-vrack-public-cloud/)
- [VRack Guide](https://docs.ovh.com/gb/en/dedicated/vrack/)

![VRack Configuration](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_vrack_configuration.jpg)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
