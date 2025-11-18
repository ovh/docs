---
title: "Reversibility Policy for the Notebook Interface product"
updated: 2025-07-10
---

## Objective

This document describes the reversibility policy for the Notebook Interface product covering the OVHcloud AI Notebooks offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Import and export Notebooks | Store notebooks in standard Jupyter (.ipynb) or VS Code Notebook formats including import and export without adaptation | (.ipynb), Python, CSV, TXT | **Inbound**: Direct download of .ipynb files or conversion via Jupyter/VS Code. <br>**Outgoing**: Direct export of .ipynb notebooks, reusable on any Jupyter or other compatible environment. |[Using data in a notebook via the OVHcloud Control Panel](/pages/public_cloud/ai_machine_learning/notebook_guide_data_ui) |
| Support for standard AI frameworks | Pre-installation of environments such as TensorFlow, PyTorch, Scikit-learn, MXNet, Hugging Face, etc. | Notebooks, Python scripts | **Inbound**: import notebooks/scripts using these frameworks. <br>**Outbound**: export notebooks/scripts, which can be reused on any platform supporting these frameworks. | [Tutorial - Using Tensorboard in a notebook](/pages/public_cloud/ai_machine_learning/notebook_tuto_02_tensorboard) |
| Manage custom environments | Install libraries and dependencies via pip/conda, specific to each notebook | YAML (environments), requirements.txt | **Inbound**: Recreating the environment via requirements.txt/environment.yml files. <br>**Outbound**: Manually export from the package list, adapt, and reinstall on the target environment | [Features, Capabilities and Limits](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) |
| VS Code Integration | Visual Studio Code edition support for Notebooks | Notebooks, Python scripts | **Inbound**: possible import, but requires adaptation of environment if target does not support VS Code. <br>**Outbound**: export notebooks/scripts, possibly adjust VS Code configuration on target environment | [Features, Capabilities and Limits](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) |

### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Compatibility with S3<sup>1</sup> Object Storage | User data are synchronized on an OVHcloud Object Storage S3 once the Notebook has been stopped/deleted. S3 storage can be done with an OVHcloud product or outside of OVHcloud infrastructure.| S3 (objects, files) | **Inbound**: import data via S3 Object Storage or direct download. <br>**Outbound**: export files/datasets via S3 Object Storage, which can be reused on any other S3-compatible storage | [Features, Capabilities, and Limits](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) <br> [Object Storage product reversibility policy](/pages/account_and_service_management/reversibility/16-object-storage-reversibility) |
| User access management | Access management via the OVHcloud interface, non-standard version | NA | **Inbound**: Manual configuration of accesses on the interface <br>**Outbound**: adapt rights management according to the target tool (JupyterHub, VS Code Live Share, etc.). | [Use data in a notebook via the OVHcloud Control Panel](/pages/public_cloud/ai_machine_learning/notebook_guide_data_ui) |

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud API, CLI and Python SDK | Notebook management, automation and migration via OVHcloud’s own REST API, CLI AI and Python SDK. | JSON, YAML, Python | **Inbound**: Tools and management interfaces available by default <br>**Outbound**: APIs and CLIs will depend on the target environments and may require adaptation. | [AI Notebooks - Getting started](/pages/public_cloud/ai_machine_learning/notebook_guide_introduction_definition) |
| Anti-DDoS protection | Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required <br> **Outbound**: Order and configure an anti-DDoS solution from the new provider | [Anti-DDoS OVHcloud](/links/security/antiddos) |

## List of architectures

OVHcloud’s service offer includes managed Jupyter and Visual Studio Code environments, with on-demand CPU/GPU resource allocation.
Notebooks are isolated by user and project, with a persistent storage on an S3-compatible Object Storage service. The main AI frameworks (TensorFlow, PyTorch, Scikit-learn, MXNet, Hugging Face) are preinstalled with native integration of data science tools (Matplotlib, Seaborn, Pandas). The architecture supports notebook shutdowns and restarts, automatic data synchronization and multi-user management.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

### Cost and fees

Billing is based on 'pay-as-you-go'. There is no specific fees applied on service termination. Stopping or deleting a notebook will stop billing for computing resources. The associated storage (Object Storage) remains billed until data are deleted. Notebooks and data must be exported before deleting and canceling the service.

### Data retention after contract termination

After deleting a notebook, OVHcloud automatically synchronizes user data on an S3-compatible Object Storage. Notebooks and files remain accessible on this storage space until the user deletes it manually. Once data has been deleted from this space, it cannot be restored.Therefore, it's imperative to export all the necessary data before decommissioning the service.

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.