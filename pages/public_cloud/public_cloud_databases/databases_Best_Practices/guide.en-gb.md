---
title: 'Securing my OVHcloud account and managing my personal information'
excerpt: 'Find out how to optimise your OVHcloud account security, manage your personal information, and delegate access to your account'
updated: 2023-12-08
---

## Objective

**This guide explains how to secure your OVHcloud account, manage your personal information, and implement best practices for structuring your Public Cloud projects.**

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

For detailed instructions on securing your OVHcloud account, please refer to the following [guide](https://help.ovhcloud.com/csm/en-gb-account-secure-account-personal-data?id=kb_article_view&sysparm_article=KB0042918).

#### Enable Two-Factor Authentication (2FA)
- **What it does**: Adds an extra layer of security by requiring a second form of verification (e.g., mobile app, security key) in addition to your password.
- **How to enable**: Log in to your OVHcloud Control Panel, navigate to the Security tab, and follow the steps to set up 2FA using a mobile app or a security key. Ensure you store your backup codes securely&#8203;:citation[oaicite:12]{index=12}&#8203;&#8203;:citation[oaicite:11]{index=11}&#8203;.
- **Example**: If you use a U2F security key, you will plug it into your USB port each time you log in, providing an additional security measure beyond your password.

#### Set Strong Passwords
- **Requirements**: At least nine characters, including upper and lower case letters, numbers, and special characters. Avoid personal information and dictionary words.
- **Management**: Use a password manager like KeePass or Bitwarden to store and generate strong passwords. Regularly update your password and ensure it's unique across different services&#8203;:citation[oaicite:10]{index=10}&#8203;&#8203;:citation[oaicite:9]{index=9}&#8203;.
- **Example**: A strong password could be `A1b2C3!d4#e5F6`.

#### Backup Email Address
- **Importance**: Helps recover access to your account if the primary email is inaccessible.
- **Setup**: Add a backup email in the OVHcloud Control Panel under your profile settings, ensuring it differs from your main email address&#8203;:citation[oaicite:8]{index=8}&#8203;.
- **Example**: If your primary email is `user@example.com`, use a different email like `user.backup@example.com` as a backup.

### Step 2: Managing Personal Information

1. **Verify and Update Information**
   - **Steps**: Go to "My Account" in the Control Panel, click on "Personal Information," and ensure all details are accurate. Regularly update these details to avoid issues with support or service access&#8203;:citation[oaicite:7]{index=7}&#8203;.
   - **Example**: If you move to a new address, update your profile immediately with the new address details.

2. **Change Primary Email Address**
   - **Process**: Validate the change using a code sent to your current email. Enter the code in the Control Panel to confirm the update&#8203;:citation[oaicite:6]{index=6}&#8203;.
   - **Example**: If you need to change your email from `old@example.com` to `new@example.com`, OVHcloud will send a validation code to `old@example.com` to confirm the change.

### Step 3: Delegating Access

1. **User Management**
   - **Delegation**: Use the "User Management" feature in the Control Panel to grant access to team members with appropriate permissions. This helps maintain security while allowing necessary access&#8203;:citation[oaicite:5]{index=5}&#8203;&#8203;:citation[oaicite:4]{index=4}&#8203;.
   - **Example**: Grant "read-only" access to an accountant to view billing information without giving them the ability to make changes.

### Step 4: Best Practices for Structuring Public Cloud Projects

1. **Establish Landing Zones**
   - **Purpose**: Create scalable and secure multi-account environments to isolate resources and manage growth efficiently&#8203;:citation[oaicite:3]{index=3}&#8203;.
   - **Example**: Set up separate accounts for different departments like HR, Finance, and Development to ensure data isolation and security.

2. **Use Multiple Accounts**
   - **Strategy**: Separate resources and workloads into different accounts based on business units, applications, or environments (development, staging, production)&#8203;:citation[oaicite:2]{index=2}&#8203;.
   - **Example**: Use one account for development and another for production to prevent accidental interference between environments.

3. **Organize by Applications and Environments**
   - **Implementation**: Use VRacks to connect resources securely across different environments. Implement network segmentation to protect sensitive data&#8203;:citation[oaicite:1]{index=1}&#8203;.
   - **Example**: Segment your CRM application into development, testing, and production environments, each with its own network policies and security controls.

4. **Consistent Tagging**
   - **Usage**: Tag resources for efficient management, billing, and compliance tracking. Note that tagging is currently available only for specific resources&#8203;:citation[oaicite:0]{index=0}&#8203;.
   - **Example**: Use tags like `Project:CRM`, `Environment:Production`, and `Owner:Marketing` to organize and track resources.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
