---
title: 'Understanding Landing Zones'
excerpt: 'Landing Zones – Everything you need to know to build a secure and scalable cloud foundation'
updated: 2025-09-02
---

## Objective

This guide will help you understand the concepts and usage of Landing Zones: how they provide governance, security, networking, and identity foundations for your OVHcloud Public Cloud projects.

## What is a landing zone?

Drawing inspiration from space exploration, the landing zone is like a spacecraft’s touchdown site, a secure base from which a mission (application or service) can tap into all the infrastructure it needs to deploy.

In the context of cloud services, this is a preconfigured cloud environment that provides a secure, scalable, and compliant infrastructure for running your workloads. It ensures that all the necessary security, governance, and networking configurations are properly set up before applications or services are deployed.

Advantages of a landing zone:

- Simplifies migration to the cloud through standardised environments.
- Seamlessly connects cloud and on-premises networks.
- Strengthens data and application security through standardised security and compliance that align with organisational policies.
- Improves cloud resource governance with automated deployment and governance, ensuring best practices.
- Optimises cloud infrastructure costs thanks to scalability and better resource usage.

Without a dedicated landing zone, organisations can face configuration inconsistencies, security breaches, and inefficient resource management.

See Public Cloud Landing Zone Reference of architecture in [this guide](/pages/public_cloud/public_cloud_cross_functional/landing_zone_migration).

**The five OVHcloud pillars:**

Based on our project experience and detailed technical discussions with customers, we’ve identified these five foundational pillars as essential for building a secure, scalable, and maintainable landing zone architecture:

1.	Identity & Access Management (IAM)
2.	Networking
3.	Security and Compliance
4.	Billing Control
5.	Observability

### 1. Identity & Access Management (IAM)

An IAM setup ensures that, in practice, the ‘least privilege principle’ can be implemented, giving users and services only the necessary access. 

The main features of our IAM services are:

- **A centralised platform:** use a single interface to easily manage access to your resources and meet regulatory requirements.
- **Free, standard solution:** with your OVHcloud account, you get the IAM feature at no cost, which enables process automation and uses the OAuth2 protocol to authenticate scripts securely.
- **Privilege management:** manage users, groups, and applications across all OVHcloud services. Customise access rights based on roles, responsibilities, or resource types for secure teamwork.
- **Identity federation (ADFS or Okta):** connect your corporate active directory (Azure AD, Google Workspace, etc.) or any cloud-based authentication solution with OVHcloud to centralise account management for effortless user logins.

### 2. Networking

- The **OVHcloud Backbone**, built for secure and isolated connections, links all of our datacentres. This provides your applications with worldwide accessibility, constant uptime, and a fault-tolerant architecture. What’s more, anti-DDoS is included by default for all OVHcloud services, at no additional cost. This delivers a top-performing solution for optimal security.
- The **vRack Private Network** lets you connect Public Cloud instances, Hosted Private Cloud, Bare Metal servers, and Load Balancers.
- The **OVHcloud Load Balancer** operates as a distributed, multi-active service, configured across different geographical zones. These independent zones ensure high availability, as a failure in one won’t impact the others. Every Load Balancer package comes with a Let’s Encrypt certificate, enabling HTTPS protocol by default, at no extra cost.
- **OVHcloud Connect:**  a private connection between your network and your OVHcloud vRack. Using a Level 2 or 3 connection, migrating your files is a simple task. Bandwidth options range from 200 Mbps to 10 Gbps, with unlimited data transfer. Resilience is further reinforced by two additional PoP attachments.
- **Bring Your Own IP (BYOIP):** this is a simple way to maintain your company’s public connectivity, particularly when migrating all or part of your services to the cloud.
- **Floating IP:** a solution to keep your company’s services connected, mainly when moving some or all of your services to the cloud

### 3. Security and compliance

Security mechanisms are crucial for data protection, threat monitoring, and regulatory compliance. 

- **Compliance:** our cloud services, with their numerous certifications, offer a secure environment that meets the requirements of many repositories. Through our frequent discussions with the French Cybersecurity Agency (ANSSI), we’re able to provide our customers with tools and features that meet the highest standards. View the list of certifications [here](/links/compliance).
- **Security:** in addition to the various encryption and redundancy features in our products, we offer a suite of tools to help customers adhere to their security policies.

A **firewall** (FW) is a security service or appliance that controls **incoming and outgoing network traffic** based on a set of rules. In the cloud, its role is to enforce **network segmentation**, restrict access to key resources, and block unauthorised traffic between services.

- In OVHcloud, firewalls can be configured at the **instance level** or via **vRack Private Network access rules**.
- Common use cases include allowing only SSH from approved IPs, blocking public access to databases, or isolating environments.

A **Bastion Host (Jump Server)** is a monitored, fortified server that acts as a **secure gateway** to private cloud infrastructure (e.g., VMs in a private subnet).

- Administrators can connect to internal resources **via SSH or RDP**, which limits exposure to the internet.
- Access must be restricted (e.g., using IP allowlisting and MFA) and logged for auditing.
- OVHcloud users usually set up a **basic Public Cloud instance** as a bastion, which only exposes a few open ports (typically port 22).

**Web Application & API Protection (WAAP)** is a modern version of a Web Application Firewall (WAF) that combines **multiple protection layers** to protect publicly accessible applications and APIs.

It includes:

- **WAF:** protection against OWASP Top 10 vulnerabilities (SQLi, XSS)
- **DDoS protection**
- **Bot mitigation**
- **API security** (rate limiting, token validation)

OVHcloud protects against **DDoS attacks** with its proprietary, actively maintained anti-DDoS tools. All customers can use this software without charge. The Network Security dashboard provides an overview of the detected malicious activities, which shows how efficient it is. For more details, see [here](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

[**OVHcloud Workflow Management**](/links/public-cloud/workflow-management): By automating and orchestrating your cloud operations, OVHcloud Workflow Management ensures efficient resource provisioning, policy enforcement, and compliance. It makes intricate procedures simpler, improving agility and control across your OVHcloud infrastructures.

[**Veeam Enterprise Plus**](/links/storage/veeam-enterprise): For enterprise environments, Veeam Enterprise Plus delivers advanced backup, disaster recovery, and data management solutions. Whether physical, virtual, or cloud, it safeguards your critical workloads with reliable protection and fast recovery.

### 4. Billing Control

Billing control is a key pillar that ensures cloud spending is transparent, predictable, and directly aligned with business needs. With project costs isolated, consistent tagging applied, and automated reporting and alerts in place, businesses can ensure financial transparency and compliance with usage policies, all while remaining agile.

Key features of Billing Control:

- **Project-based cost isolation:** Split billing by environment using OVHcloud Public Cloud Projects (prod, dev, shared, etc.).
- **Tagging strategy:** Apply standardised tags like environment, owner, and cost centre to all resources for accurate cost allocation.
- **Budget alerts:** Set usage or spending thresholds to get alerts when you’re about to go over set limits.
- **Automated reporting:** Use OVHcloud APIs or CSV exports to build dashboards and scheduled reports for stakeholders.
- **Cost governance policies:** Define policies to restrict untagged resources, control instance types, or automatically clean up unused environments.
- **Cost estimation:** Use a FinOps platform or consult OVHcloud teams for estimations to forecast expenses prior to provisioning.

### 5. Observability

Observability relies on outputs like logs, metrics, and traces to provide insight into and assess the health of a system. With observability, it’s easier to grasp, track, and troubleshoot system behaviour, especially in distributed cloud setups.

OVHcloud breaks down observability into two parts:

- **Log Data Platform (LDP):** The Logs Data Platform manages your logs; it gathers logs from your infrastructure and applications, stores them, and then displays them in live dashboards, allowing users to run complex queries.

Beyond managing logs, the Logs Data Platform also serves as a robust indexing platform for various document types. This specific use case is covered in a separate guide.

To deliver the features of the Logs Data Platform, OVHcloud integrates different open-source technologies including OpenSearch, Logstash, and Flowgger to support compatibility with a variety of software solutions on the market.

A log’s lifecycle consists of 4 distinct phases:

- **Generation:** applications, systems, and cloud services generate logs, which are usually stored locally in files.
- **Ingestion:** Ingestion agents, or inputs, receive logs within the Logs Data Platform. They verify the source’s validity and the formatting of logs based on [these rules](/pages/manage_and_operate/observability/logs_data_platform/getting_started_field_naming_convention), and may add, update or remove fields before forwarding your logs to storage.
- **Storage:** After ingestion, your logs are stored in the Logs Data Platform. Data can be stored in two ways: as indexed data accessible through APIs and other tools, or as archived data.
- **Consumption:** there are many ways to utilise your logs. Users of the Logs Data Platform can visualise logs in real time, build dashboards, create and run detailed queries using the user interface or API, and also set up alerts.

## OVHcloud Landing Zone: a step-by-step guide

To create a landing zone that works well, it’s important to assess the components needed to build it. The ideal landing zone should be flexible enough to suit various needs, enabling the automated, agile, and simple deployment of the target architecture.

### Prerequisites:

- Access to the [OVHcloud Control Panel](/links/manager).
- A payment method.
- [Setting OpenStack environment variables](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).

### Instructions

1. Define your cloud strategy and environments
    - Identify your cloud usage goals (web hosting, data processing, Kubernetes).
    - Define key environments (production, staging, or testing).
2. Set up OVHcloud projects
    - Create OVHcloud Public Cloud projects for each environment.
    - Benefits: IAM, quotas, access, and isolation.
3. Plan and deploy the network architecture
    - Use vRack to interconnect resources across projects or regions.
    - Create Private Networks within each project.
    - Use Security Groups and Firewall Rules to control traffic.
    - If needed, implement a hub-and-spoke model using vRack.
4. Configure Identity & Access Control
    - Assign roles per project (Admin, Read-only, DevOps).
    - Enforce MFA for users.
    - Integrate with SSO (via OVHcloud IAM or external provider).
5. Automate with IaC (Terraform)
    - Use the Terraform OVH provider to manage:
        - Project provisioning
        - Networks and vRack
        - Compute instances
        - IAM roles
        - DNS (via OVHcloud DNS)
        - Bastion Host for SSH access
        - Central monitoring and alerting
        - Shared Object Storage (for logs or backups)

    **Note**: Store infrastructure code in a Git repository and use GitHub Actions or GitLab CI for CI/CD.

6. Set up logging and monitoring
    - Enable centralised logging using:
        - Logs Data Platform (LDP).
        - Open-source solutions (ELK or Grafana Loki).
7. Enable cost tracking and governance
    - Use per-project billing to isolate costs for Public Cloud.
    - Set up budget alerts manually or via monitoring tools.
8. Apply security and compliance controls
    - Use Security Groups for micro-segmentation.
    - Encrypt data at rest and in transit.
    - Use Object Storage with secure access policies.
    - Integrate vulnerability scanning into CI/CD.

For guidance on building your Landing Zone to OVHcloud, check our [building documentation](/pages/public_cloud/public_cloud_cross_functional/landing_zone_migration).

Avoid thinking of your landing zone as something you can just set up and then ignore. 
Rather, include documentation and ongoing upgrades within your operational process.

**Recommended actions:**

- **Document** your landing zone architecture, IAM model, network design, and security policies in a centralised knowledge base (e.g., Atlassian Confluence, Git repositories).
- Create **runbooks** for onboarding new projects or teams using the Landing Zone.
- Establish a regular **review cycle** (e.g., quarterly) to assess:
    - Security posture (IAM audit, firewall rules, logs)
    - Cost optimisation opportunities
    - New features or improvements from OVHcloud
- Include DevOps, security, and finance teams in a **Landing Zone governance group** to make sure the platform meets your needs.

Think of your landing zone as a product: iterate, document, and optimise it over time.

## Go further

Join our [community of users](/links/community).