---
title: Securing my OVHcloud account and managing my personal information
excerpt: Find out how to optimise your OVHcloud account security, manage your personal information, and delegate access to your account
updated: 2023-12-08
---

## Objective

**This guide explains how to secure your OVHcloud account, manage your personal information, and implement best practices for structuring your Public Cloud projects.**

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

For detailed instructions on securing your OVHcloud account, please refer to the [official guide](https://help.ovhcloud.com/csm/en-gb-account-secure-account-personal-data?id=kb_article_view&sysparm_article=KB0042918).

#### Enable Two-Factor Authentication (2FA)
- **What it does**: Adds an extra layer of security by requiring a second form of verification (e.g., mobile app, security key) in addition to your password.
- **How to enable**: Log in to your OVHcloud Control Panel, navigate to the Security tab, and follow the steps to set up 2FA using a mobile app or security key. Ensure you store your backup codes securely. [Detailed 2FA guide](https://support.us.ovhcloud.com/hc/en-us/articles/360013968099-Securing-an-Account-with-Two-Factor-Authentication).
- **Example**: If you use a U2F security key, you will plug it into your USB port each time you log in, providing an additional security measure beyond your password.

#### Set Strong Passwords
- **Requirements**: At least nine characters, including upper and lower case letters, numbers, and special characters. Avoid personal information and dictionary words.
- **Management**: Use a password manager like KeePass or Bitwarden to store and generate strong passwords. Regularly update your password and ensure it is unique for each service. [Password management guide](https://help.ovhcloud.com/csm/en-account-manage-password?id=kb_article_view&sysparm_article=KB0042985).
- **Example**: A strong password could be `A1b2C3!d4#e5F6`.

#### Add a Backup Email Address
- **Importance**: Helps recover access to your account if the primary email is inaccessible.
- **Configuration**: Add a backup email in the OVHcloud Control Panel under your profile settings, ensuring it differs from your primary email address. [Guide on managing personal information](https://help.ovhcloud.com/csm/en-gb-account-secure-account-personal-data?id=kb_article_view&sysparm_article=KB0042918).
- **Example**: If your primary email is `user@example.com`, use a different email like `user.backup@example.com` as a backup.

### Step 2: Managing Personal Information

1. **Verify and Update Information**
   - **Steps**: Go to "My Account" in the Control Panel, click on "Personal Information," and ensure all details are accurate. Regularly update these details to avoid issues with support or service access.
   - **Example**: If you move to a new address, update your profile immediately with the new address details.

2. **Change Primary Email Address**
   - **Process**: Validate the change using a code sent to your current email. Enter the code in the Control Panel to confirm the update.
   - **Example**: If you need to change your email from `old@example.com` to `new@example.com`, OVHcloud will send a validation code to `old@example.com` to confirm the change.

### Step 3: Delegating Access

1. **User Management**
   - **Delegation**: Use the "User Management" feature in the Control Panel to grant access to team members with appropriate permissions. This helps maintain security while allowing necessary access.
   - **Example**: Grant "read-only" access to an accountant to view billing information without giving them the ability to make changes.

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
