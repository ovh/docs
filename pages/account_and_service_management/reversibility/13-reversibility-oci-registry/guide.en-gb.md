---
title: Managed OCI artifact Registry Product Reversibility Policy
updated: 2025-06-16
---

## Objective

This document describes the reversibility policy of the Managed OCI artifact Registry product covering the following OVHcloud service: Managed Private Registry

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## Feature List

The product features are divided into three categories:

- **Main features** for which we guarantee migration capacity.
- **OVHcloud implementations** that require adaptation to a new migration environment.
- **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

## #Main features

| Functionality| Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **OCI API and compatibility** | Native OCI (Open Container Initiative) support for artifacts, images, Helm charts, Cosign signatures, and more. | OCI, Helm, Cosign (signatures), JSON | **Inbound**: Direct push of artifacts via standard tools (docker, helm, oras, cosign, etc.) or OCI API.<br>**Outbound**: Pull/export of artifacts via the same tools or API to any other OCI/Harbor/Artifact Registry compatible registry. | [Migrate Helm Chart from Chartmuseum to OCI](/pages/public_cloud/containers_orchestration/managed_private_registry/migrate-helm-charts-from-chartmuseum-to-oci)|
| **Import/Export Artifacts** | Upload and download artifacts (push/pull) via CLI/API standard Harbor/OCI | OCI, Helm, JSON | **Inbound**:Import via docker push, helm push, oras push, etc.<br>**Outbound**: Export via docker pull, helm pull, oras pull, then push to the target. | [Artifact Import/Export](/pages/public_cloud/containers_orchestration/managed_private_registry/migrate-helm-charts-from-chartmuseum-to-oci) |
| **Signature and verification Cosign** | Signature and verification of artifacts via Cosign (Sigstore), Harbor v2.5+ native support | Cosign (OCI signature) | **Inbound**: Import of Cosign signed artifacts.<br>**Outbound**: Export of Cosign artifacts and their signatures, reimport possible on any Cosign/OCI compatible registry. | [Sign OCI artifacts with Cosign on OVHcloud Managed Private Registry](/pages/public_cloud/containers_orchestration/managed_private_registry/sign-artifacts-with-cosign) |
| **Replication Harbor** | Automatic synchronization/replication between Harbor/OCI registries (push/pull or bidirectional) | OCI, Helm, JSON | **Inbound**: Configuring replication from a source registry (Harbor/OCI) to OVHcloud.<br>**Outbound**: Configuring replication to another Harbor/OCI-compatible registry. | [Replication Configuration](https://goharbor.io/docs/2.0.0/administration/configuring-replication/)|

### OVHcloud implementation

| Functionality| Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **RBAC and rights management** | Manage access rights by project, user, robot account, RBAC Harbor | JSON (policies), interne Harbor | **Incoming**: Permissions are adjusted manually during import.<br>**Outgoing**: Artifacts are exported, then permissions are reconfigured on the target (RBAC format not always compatible between solutions). |[Managing users and projects](/pages/public_cloud/containers_orchestration/managed_private_registry/managing-users-and-projects)|
| **Audit logs and logs** | Automatic access logging and operations (Harbor/OVHcloud logs) | JSON, internal logs | **Incoming**: Not applicable for import.<br>**Outgoing**: Manually export logs if required, adaptation required depending on the target (format/non-standardized logs).|[Access and Search Project Logs](https://goharbor.io/docs/2.3.0/working-with-projects/project-configuration/access-project-logs/) |
| **CI/CD Automation** | Integration with CI/CD pipelines via Harbor/OCI API, robot tokens, OIDC | JSON, YAML (pipelines) | **Incoming**: Adapting scripts/pipelines to point to the OVHcloud registry.<br>**Outgoing**: Reconfiguring pipelines to point to the new target, potential tokens adaptation and permissions.| [Harbor API](https://api.harbor.gg/docs/index.html)|
| **Vulnerability Scans** | Automatic image analysis via an integrated Harbor scanner (Trivy, Clair, etc.) | JSON CSV Reports | **Inbound**: Not applicable for import.<br>**Outbound**: Reports can be exported, but the target may need to be adapted if it has another scanner.|[Clair project](https://clairproject.org/)|

### Specific features

| Functionality| Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **Managed via the OVHcloud Control Panel** | OVHcloud-specific graphical interface and API for service management | N/A | **Inbound**: N/A<br>**Outbound**: Scripts/API to rewrite for the target, manual management required. | [OVHcloud API ](https://api.ovh.com/console/?section=%2FallDom&branch=v1)|
| **Infrastructure as Code** | Automated deployment via Terraform modules specific to OVHcloud | N/A | **Inbound:** Scripts must be adapted for other providers. <br> **Outbound:** Terraform configurations need to be rewritten. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |

## List of architectures

The OVHcloud Managed Private Registry service (based on Harbor) supports a multi-project, multi-namespace, multi-user architecture with logical isolation. It enables automatic replication between registries (Harbor/OCI), fine-grained rights management (RBAC), OIDC authentication, artifact signing and verification (Cosign), vulnerability scanning, and CI/CD integration via API or robot tokens. The service is highly available and can be integrated into the OVHcloud vRack private network for secure usage.

## Partner Services

OVHcloud partners are listed under the keyword **Migrate to the cloud** in the [Dedicated Partner Directory](/links/partner).

OVHcloud also offers a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Billing is based on a pay-per-use basis, with no commitment. No specific cancellation fees apply: deleting the service will stop the billing immediately. Any associated OVHcloud credits cannot be transferred. It is the customer’s responsibility to export their artifacts before deletion, as deleting them is irreversible.

## Data Retention after termination of the contract

After deletion of the service or termination of the contract, OVHcloud permanently deletes all artifacts, images, signatures and metadata stored in the registry. Logs and access histories are also deleted. It is therefore imperative to export all necessary data before deletion, as no restoration is possible after the cancellation.
