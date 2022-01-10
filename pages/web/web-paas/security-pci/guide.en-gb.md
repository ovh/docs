---
title: PCI compliance
slug: security-pci
section: Security
order: 8
---

**Last updated 7th January 2022**



## Objective  

Refer to our [Compliance Guidance](https://docs.platform.sh/security/compliance-guidance.html)
for an overview of our compliance program, including security & compensating controls, and a general allocation of responsibility.

## Overview

Payment Card Industry (PCI) Data Security Standards (DSS) is a set of network security and business best practice guidelines
that establish a "minimum security standard" to protect payment card information.
While Web PaaS doesn't handle credit cards, many of our customers do.

Web PaaS undergoes an annual third-party audit to maintain PCI DSS recertification.
Note that the FR-1 and FR-3 regions are excluded from our PCI certification.

> [!primary]  
> 
> Cardholder processing activity is discouraged.
> Please use a third-party processor.
> 
> 

## Responsibility

Customers who want to run PCI workloads on Web PaaS must agree to and implement
the measures contained in the [Web PaaS PCI Responsibility Matrix](https://docs.google.com/spreadsheets/d/1zLkHpdUoX1VNC3wTipl3g-Z4eHjou-57IrQxE8GH6oA/edit#gid=238986323) (Excel).
This document provides guidance on shared responsibilities to achieve PCI DSS compliance using PCI DSS 3.2 as a reference.

While Web PaaS provides a secure and PCI compliant infrastructure,
the customer is responsible for ensuring that the environment and applications that they host on Web PaaS
are properly configured and secured according to PCI requirements.
Failure to do so will result in a non-compliant customer environment.
