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

### Securing Your Account

For detailed instructions on securing your OVHcloud account, please refer to the following [guide](https://help.ovhcloud.com/csm/en-gb-account-secure-account-personal-data?id=kb_article_view&sysparm_article=KB0042918).

### Managing Personal Information

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

Implement a tagging strategy to categorize and manage resources efficiently. This helps in resource allocation, billing, and compliance tracking. Note that tagging is currently only available for OS resources and cannot be added to MKS clusters at this time.

### IAM and Multi-Tenancy Principles on OpenStack

#### Projects (OpenStack)

Projects are the second highest level of abstraction in OpenStack. They can contain users and resources.

#### Roles

In OpenStack, permissions are achieved via role assignments. Roles contain permissions, which are pairs of object types and operations.

#### Users

Users are the active entities in the OpenStack system who can consume resources. Users without assigned roles cannot perform any actions in the system.

#### Keystone v3

Keystone v3 introduces true multi-tenancy with domains. Each domain has its own administrator, who can manage projects, users, and roles within their domain.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
