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

### Best Practices for Public Cloud Project Structuring

A well-architected environment is crucial for effectively managing and scaling your OVHcloud resources. Here’s how you can structure your projects:

#### What is a Landing Zone?

A landing zone is a well-architected, multi-account cloud environment that is scalable and secure. It serves as a starting point for deploying workloads and applications with confidence in your security and infrastructure environment. Building a landing zone involves making technical and business decisions across account structure, networking, security, and access management, aligned with your organization’s growth and business goals.

#### Use Multi-Account Framework

##### Why Use Multiple Accounts?

- **Administrative Isolation**: Different workloads or business units may require separate administrative controls.
- **Visibility and Discoverability**: Limit visibility of sensitive workloads.
- **Scope of Impact**: Isolate workloads to minimize the impact of security incidents.
- **Recovery and Auditing**: Strongly isolate recovery and auditing data.

##### Benefits of Multiple Accounts

- **Security Controls**: Different applications can have tailored security policies.
- **Isolation**: Contain potential risks and threats within a single account.
- **Data Isolation**: Restrict access to sensitive data, aiding in compliance (e.g., GDPR).
- **Team Management**: Different teams can manage their resources without interference.
- **Business Processes**: Separate accounts for different business units or products.
- **Billing Separation**: Easier management of costs by separating billing at the account level.
- **Resource Limits**: Prevent resource contention by allocating limits per account.

#### Organize by Applications and Environments

- **Project Segmentation**: Create separate projects for each application to isolate resources and manage costs effectively.
- **Environment Segmentation**: Within each project, use different VRacks for development, staging, and production environments.

#### Implement Network Segmentation

- **Private Networks**: Isolate sensitive data and reduce the attack surface.
- **Network Policies**: Define clear policies and use security groups to control traffic between segments.

#### Use Tags and Labels

- **Consistent Tagging Strategy**: Implement a strategy to categorize and manage resources efficiently.
- **Track Usage**: Use tags to track resource usage, ownership, and cost allocation.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
