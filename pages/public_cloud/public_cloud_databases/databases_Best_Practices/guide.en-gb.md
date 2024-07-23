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

### Step 2: Managing Personal Information and Implementing IAM and RBAC

To verify and update your personal information or to change your primary email address, please refer to the official guide: [All about username](/pages/account_and_service_management/account_information/all_about_username).

#### Identity and Access Management (IAM)

**Definition**: IAM is a framework for managing user identities and their access to resources securely.

**Implementation **: Use IAM to create users, groups, and policies in OVHcloud IAM.

**Key Components**:
1. **Users**: Individual accounts for people who need access to OVHcloud resources.
2. **Groups**: Collections of users with common access needs.
3. **Policies**: Rules that define what actions users and groups can perform on which resources.

**Examples**:
- **Creating Users**: Create individual accounts for each team member. Ensure each user has a unique set of credentials.
- **Grouping Users**: Create groups such as "Developers", "Admins", and "Auditors" to simplify permissions management.
- **Defining Policies**: Assign policies to users and groups to restrict or grant access. For example, a developer might have permissions to deploy applications but not to manage billing information.

**Further Reading**: 
- [OVHcloud IAM Guide](https://www.ovhcloud.com/en/identity-security/identity-access-management/)
- [How to use IAM policies using the OVHcloud Control Panel](/pages/account_and_service_management/account_information/iam-policy-ui/)
- [How to use IAM policies using the OVHcloud API](/pages/account_and_service_management/account_information/iam-policies-api/)

#### Role-Based Access Control (RBAC)

**Definition**: RBAC regulates access to resources based on the roles assigned to individual users.

**Implementation at OVHcloud**: Assign roles to users and groups to control their permissions within the cloud environment.

**Key Components**:
1. **Roles**: Define a set of permissions.
2. **Role Bindings**: Assign roles to users or groups.

**Examples**:
- **Creating Roles**: Define roles such as "Read-Only", "Developer", and "Administrator". Each role has a specific set of permissions.
- **Assigning Roles**: Assign the "Read-Only" role to auditors who only need to view resources, and the "Developer" role to users who need to deploy and manage applications.
- **Using Role Bindings**: Link roles to users and groups to apply the necessary permissions.

**Further Reading**: [OVHcloud RBAC Guide](https://www.ovhcloud.com/en/identity-security/identity-access-management/)

### Step 3: Delegating Access

To manage users and delegate access to your OVHcloud account, please refer to the official guide: [OVHcloud Users Management](/pages/account_and_service_management/account_information/ovhcloud-users-management).

#### Creating and Managing Local Users

**Overview**: With OVHcloud, you can create additional local users with read or write access to your customer account. This allows you to grant other members of your company access to your OVHcloud services without sharing passwords or two-factor authentication details.

**Examples**:
- **Create a Local User**: Add a user for a new developer joining your team, giving them access to the necessary resources without exposing sensitive information.
- **User Groups**: Assign the new user to a "Developers" group that has restricted admin access, enabling them to manage applications but not user accounts.

**Further Reading**: For detailed steps on adding and managing local users, refer to the [OVHcloud Users Management Guide](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Step 4: Best Practices for Structuring Public Cloud Projects

#### Establish Landing Zones

**Purpose**: Create scalable and secure multi-account environments to isolate resources and manage growth efficiently.

**Definition**: A Landing Zone is a pre-configured, secure, scalable, and multi-account environment based on best practices. It acts as a starting point for deploying workloads in a cloud environment.

**Implementation at OVHcloud**:
- Local Zones are strategically positioned near specific users or locations to significantly shorten the physical distance data needs to travel, providing low latency and high performance. These zones ensure full compliance with data location regulations and enhance customer experience with fast response times.
- OVHcloud Local Zones offer flexibility and scalability, allowing you to add or remove resources on demand. These instances are adapted to various needs, from long-term archiving to high-performance storage solutions.
- **Guide**: [Creating Public Cloud projects](/pages/public_cloud/compute/create_a_public_cloud_project/).

**Examples**:
- **Low Latency and Proximity**: Position Local Zones near specific user bases to minimize latency and improve application performance.
- **Data Residency**: Use Local Zones to comply with data location regulations, ensuring data is processed within specific geographical boundaries.
- **International Coverage**: OVHcloud aims to deploy 150 Local Zones globally over the next three years, enhancing performance and compliance.

**Further Reading**:
- [OVHcloud Local Zones Overview](https://www.ovhcloud.com/en/about-us/global-infrastructure/local-zone/?_gl=1*1qvadba*_gcl_au*NTIyMTcxNjkwLjE3MTU5NTg5ODIuMTQxNzQ4MDM5NS4xNzIxNjY0Nzk2LjE3MjE2NjQ3OTY.)
- [Local Zones Capabilities and Limitations](/pages/public_cloud/compute/local-zones-capabilities-limitations/)

#### Use Multiple Accounts

**Strategy**: Separate resources and workloads into different accounts based on business units, applications, or environments (development, staging, production).

**Implementation at OVHcloud**:
- At OVHcloud, this can be achieved by creating separate accounts for each environment or project. Each account can have its own resources, billing, and management policies.
- **Example**: Use one account for development and another for production to prevent accidental interference between environments.
- **Guide**: [OVHcloud Users Management Guide](/pages/account_and_service_management/account_information/ovhcloud-users-management/).

#### Organize by Applications and Environments

**Implementation**: Use VRacks to securely connect resources across different environments. Implement network segmentation to protect sensitive data.

**Example**:
- Segment your CRM application into development, testing, and production environments, each with its own network policies and security controls.
- **Guide**: [Connecting Public Cloud instances](/pages/public_cloud/compute/public-cloud-first-steps/).

### Complete Documentation on VRacks and Private Networks

For more details on VRack and private network configurations, refer to the following guides:
- [Using VRacks with Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack/)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
