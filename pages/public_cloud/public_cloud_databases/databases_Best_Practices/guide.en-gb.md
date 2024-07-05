---
title: 'Securing my OVHcloud account and managing my personal information'
excerpt: 'Find out how to optimise your OVHcloud account security, manage your personal information, and delegate access to your account'
updated: 2024-06-12
---

## Objective

**This guide explains how to secure your OVHcloud account, manage your personal information, and implement best practices for structuring your Public Cloud projects.**

## Requirements

- An active OVHcloud account
- Access to your OVHcloud Control Panel

## Instructions

### Step 1: Securing Your Account

1. **Enable Two-Factor Authentication (2FA)**
   - Log in to your OVHcloud Control Panel.
   - Navigate to "My Account" and select "Security".
   - Follow the instructions to set up 2FA using your preferred method (SMS, authenticator app).

2. **Use Strong Passwords**
   - Ensure your password is at least 12 characters long, includes a mix of letters, numbers, and special characters.
   - Avoid using the same password across multiple sites.

3. **Regularly Update Your Credentials**
   - Periodically change your password to reduce the risk of unauthorized access.
   - Update your security questions and contact information.

### Step 2: Managing Personal Information

1. **Verify Your Personal Information**
   - Go to "My Account" and click on "Personal Information".
   - Ensure all your details are accurate and up-to-date.

2. **Set Up Account Alerts**
   - Enable email notifications for account activities.
   - Monitor your account for any suspicious activity and report it immediately.

3. **Delegate Access Responsibly**
   - Use the "User Management" feature to grant access to team members.
   - Assign appropriate permissions based on roles and responsibilities.

### Best Practices for Structuring Public Cloud Projects

A well-architected environment is crucial for managing and scaling your OVHcloud resources effectively. Here's how to structure your projects:

#### Establish Landing Zones

Create a scalable and secure multi-account environment as the foundation for your projects. This helps isolate resources and manage growth efficiently.

#### Use Multiple Accounts

Isolate resources and workloads into different accounts for better security and management. This includes setting up accounts for different business units, applications, or environments (development, staging, production).

#### Organize by Applications and Environments

Segment your projects by applications and further divide them by environments. Use VRacks to securely connect resources across these environments.

#### Implement Network Segmentation

Use private networks and clear policies to protect sensitive data. Ensure traffic between different segments is controlled and monitored.

#### Consistent Tagging

Implement a tagging strategy to categorize and manage resources efficiently. This helps in resource allocation, billing, and compliance tracking.

### IAM and Multi-Tenancy Principles on OpenStack and Flexible Engine

#### Domain (OpenStack) / Account (Flexible Engine)

Domains are the highest level of abstraction for resources and users in an OpenStack environment. A domain can contain users, user groups, and projects.

#### Projects (OpenStack & Flexible Engine) / Tenant (deprecated)

Projects are the second highest level of abstraction in OpenStack. They can contain user groups or users and resources.

#### User Groups (OpenStack & Flexible Engine)

User groups are collections of users. Assigning roles to a group grants all users in that group the permissions of those roles.

#### Roles

In OpenStack, permissions are achieved via role assignments. Roles contain permissions, which are pairs of object types and operations.

#### Users

Users are the active entities in the OpenStack system who can consume resources. Users without assigned roles cannot perform any actions in the system.

#### Keystone v3

Keystone v3 introduces true multi-tenancy with domains. Each domain has its own administrator, who can manage projects, users, groups, and roles within their domain.

## Go further

Join our community of users on <https://community.ovh.com/en/>.

For detailed information and community support, refer to our [best practices guide](https://cloud.orange-business.com/en/best-practices-and-how-to/iam-multi-tenancy/) and join our community discussions on [Discord](https://discord.com/channels/850031577277792286/1222599406163853484).

Feel free to reach out if you need further assistance!

Sources:
- [OVHcloud Documentation](https://docs.ovh.com)
- [OVHcloud Public Cloud Guide](https://docs.ovh.com/gb/en/public-cloud/)
- [IAM and Multi-Tenancy Principles on Flexible Engine](https://cloud.orange-business.com/en/best-practices-and-how-to/iam-multi-tenancy/)
](https://chatgpt.com/c/72cb2138-5d8a-4bbd-9940-3e915e4a3722#:~:text=Copier%20le%20code-,%2D%2D%2D%0Atitle%3A%20%27Securing%20my%20OVHcloud%20account%20and%20managing%20my%20personal%20information%27%0Aexcerpt,community%20of%20users%20on%20%3Chttps%3A//community.ovh.com/en/%3E.,-For%20detailed%20information)
