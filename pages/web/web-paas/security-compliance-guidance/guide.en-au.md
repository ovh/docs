---
title: Compliance guidance
slug: security-compliance-guidance
section: Security-Compliance-Guidance
hidden: true
---

**Last updated 10th May 2021**



## Objective  

**Last updated 10th May 2021**


## Objective  

Web PaaS has many PCI and SOC 2 certified customers using our services. Some requirements are the responsibility of the host and others are the responsibility of the application developer.

Basic compliance questions can be handled by our support team via a ticket. For more advanced questions, including help with an audit, please contact your Web PaaS Account Manager.

## Overview

Web PaaS provides a WebPaas as a Service (PaaS) solution which our customers may use for applications requiring PCI compliance.

> [!primary]  
> Cardholder processing activity is discouraged. Please use a third-party processor.
> 

## Security & Compensating Controls

* For a list of security measures, please see our [Security page](https://platform.sh/security).

* Customer environments are deployed in a read-only instance, segregated with GRE tunnels and encrypted using TLS, which often permits compensating controls to be claimed for several PCI requirements.

* Because customers can use our PaaS in a variety of ways, the best approach with auditors is to focus on “What do I, the customer, control/configure and how is it managed in a compliant manner?”

* The `OVH-FR-2` region is excluded from our PCI and SOC2 certifications.

## Responsibility

Web PaaS and customers often have shared responsibility for ensuring an up to date and secure environment.  Compliance is ultimately the responsibility of the customer.

Web PaaS is responsible for:

* **Physical and Environmental controls** - We use third party hosting and thus these requirements are passed through to those providers (e.g. AWS).
* **Patch Management** - Web PaaS is responsible for patching and fixing underlying system software, management software, and environment images.
* **Configuration Management** - Web PaaS maintains the configuration of its infrastructure and devices.
* **Awareness and Training** - Web PaaS trains its own employees in secure software development and management.
* **Capacity Management** - Web PaaS is responsible for capacity management of the infrastructure, such as server allocation and bandwidth management.
* **Access Control** - Web PaaS is responsible for providing access control mechanisms to customers and for vetting all Web PaaS personnel access.
* **Backups** - Web PaaS is responsible for backing up the infrastructure and management components of the system.  On Web PaaS Dedicated Enterprise (only), Web PaaS will also backup application code and databases on behalf of customers.

Customers are responsible for:

* **Patch Management** - Customers are responsible for maintaining and patching application code uploaded to Web PaaS, either written by them or by a third party.
* **Configuration Management** - Customers are responsible for the secure configuration of their application, including Web PaaS configuration and routes managed through YAML files.
* **Awareness and Training** - Customers are responsible for training their own employees and users on secure software practices.
* **Capacity Management** - Customers are responsible for ensuring their application containers have sufficient resources for their selected tasks.
* **Access Control** - Customers are responsible for effectively leveraging available access control mechanisms, including proper access control settings, secrets management, ssh keys management, and the use of two-factor authentication.
* **Backups** - On Web PaaS Professional customers are responsible for all application and database backups.


The [Web PaaS PCI Responsibility Matrix](https://docs.google.com/spreadsheets/d/1zLkHpdUoX1VNC3wTipl3g-Z4eHjou-57IrQxE8GH6oA/edit#gid=238986323) (Excel) provides guidance on shared responsibilities to achieve PCI DSS compliance using PCI DSS 3.2 as a reference. This document was prepared by Web PaaS for informational purposes only. The spreadsheet does not create any warranties, representations, contractual commitments, conditions, or assurances from Web PaaS, its affiliates, vendors, or licensors. By opening the linked document you accept and agree to these Terms of Use. If you do not wish to adhere to these Terms of Use, do not open, download, save, or otherwise access the linked document.
