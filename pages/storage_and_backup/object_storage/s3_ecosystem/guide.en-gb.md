---
title: Object Storage - Third-party applications compatibility
excerpt: This guide provides a list of tested, certified third-party applications compatible with OVHcloud Object Storage
updated: 2025-06-11
---

## Objective

At OVHcloud, we understand the importance of compatibility and interoperability with third-party tools and softwares. Our **S3<sup>*</sup>-compatible Object Storage** service is designed to be flexible and adaptable to various use cases and workflows. This guide aims to provide an overview of the compatibility of our Object Storage service with popular third-party tools and software, helping you to integrate our service seamlessly into your existing infrastructure.

## Compatibility Table

The following table provides an overview of the compatibility of our OVHcloud Object Storage service with third-party tools, softwares and/or applications:

### Data Protection

| Tool/Software | Compatibility | Notes | Getting Started |
| --- | --- | --- | --- |
| **Veeam** | Compatible - Certified | Veeam Ready certified, details can be found on [Veeam Alliance Technical Program page](https://www.veeam.com/partners/alliance-partner-technical-programs.html){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_veeam) |
| **IBM Storage Protect** | Compatible - Certified | Officially supported, details can be found on [IBM Storage Protect Support Page](https://www.ibm.com/support/pages/ibm-spectrum-protect-object-storage-support){.external} | Coming Soon |
| **Cohesity, Veritas NetBackup**  | Compatible - Certified | Officially supported, details can be found on [NetBackup Support Page - Compatibility Matrix](https://www.veritas.com/support/en_US/dpp.NetBackup){.external}  | [Guide](/pages/storage_and_backup/object_storage/s3_cohesity_netbackup) | Coming Soon |
| **Artesca, Veritas BackupExec** | Compatible - Certified | Officially supported, details can be found on [BackupExec Support Page - Hardware and Cloud Storage Compatibility List](https://www.veritas.com/support/en_US/dpp.BackupExec){.external} | Coming Soon |
| **HYCU R-Cloud™** | Compatible - Certified | Officially supported, details can be found on [HYCU R-Cloud User Guide](https://docs.r-cloud.hycu.com/HYCU-R-Cloud-User-Guide.pdf){.external} | [Guide](/pages/hosted_private_cloud/nutanix_on_ovhcloud/40-hycu-backup) |

### Data Protection - Kubernetes Backup

| Tool/Software | Compatibility | Notes | Getting Started |
| --- | --- | --- | --- |
| **Veeam Kasten** | Compatible | N/A | [Guide](/pages/storage_and_backup/object_storage/s3_veeam) |
| **Cloud Casa** | Compatible | Officially supported, details can be found on [Cloud Casa product page](https://cloudcasa.io/partners/ovhcloud-kubernetes-backup-and-dr/){.external} | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-using-cloudcasa) |
| **Trilio** | Compatible | Officially supported, details can be found on [Trilio Support Page](https://docs.trilio.io/kubernetes/appendix/configure-ovh-object-storage-as-a-target){.external} | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-namespace-and-applications-with-trilio) |
|**Velereo** | Compatible | N/A | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-using-cloudcasa) |

### Command-Line Interface Integrations

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **Rclone** | Compatible | Provides a command-line interface for managing objects and buckets. More details on [Rclone](https://rclone.org/){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_rclone) |
| **s3cmd** | Compatible |  Provides a command line interface for uploading, retrieving and managing data. More details on [s3cmd](https://s3tools.org/s3cmd){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_s3cmd) |
| **Restic** | Compatible | Provides a backup tool that allows you to back up your Linux, Windows, Mac machines to storage repositories. More details on [Restic](https://restic.net/){.external} | Coming Soon |
| **MinIO client** | Compatible | Provides an alternative to UNIX commands and supports Amazon S3-compatible cloud storage services. More details on [MinIO client](https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs-redirect){.external} | Coming Soon |

### File management

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **Cyberduck** | Compatible | Provides an open-source Windows file transfer client for multiple protocols. More details on [Cyberduck](https://docs.cyberduck.io/cyberduck/){.external} | Coming Soon |
| **WinSCP** | Compatible | Provides an open-source Windows file transfer client for multiple protocols. More details on [WinSCP](https://winscp.net/eng/index.php){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_winscp) |

### File Sharing

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **ownCloud** | Compatible | Open-source file sync and share platform for collaboration. More details on [ownCloud](https://owncloud.com/product){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_owncloud) |
| **NextCloud Files** | Compatible | Open-source file sync and share platform for collaboration. More details on [NextCloud](https://nextcloud.com/files/){.external} | [Guide](/pages/storage_and_backup/object_storage/s3_nextcloud) |

## Go further
 
Join our [community of users](/links/community).

<sup>*</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
