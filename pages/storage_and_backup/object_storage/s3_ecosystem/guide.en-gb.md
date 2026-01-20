---
title: Object Storage - Third-party applications compatibility
excerpt: This guide provides a list of tested, certified third-party applications compatible with OVHcloud Object Storage
updated: 2026-01-14
---

## Objective

At OVHcloud, we understand the importance of compatibility and interoperability with third-party tools and softwares. Our **S3<sup>*</sup>-compatible Object Storage** service is designed to be flexible and adaptable to various use cases and workflows. This guide aims to provide an overview of the compatibility of our Object Storage service with popular third-party tools and software, helping you to integrate our service seamlessly into your existing infrastructure.

## Compatibility Table

The following table provides an overview of the compatibility of our OVHcloud Object Storage service with third-party tools, softwares and/or applications:

### Data Protection

| Tool/Software | Compatibility | Notes | Getting Started |
| --- | --- | --- | --- |
| **Veeam** | Compatible - Certified | Veeam Ready certified, details can be found on [Veeam Alliance Technical Program page](https://www.veeam.com/partners/alliance-partner-technical-programs.html) | [Guide](/pages/storage_and_backup/object_storage/s3_veeam) |
| **Acronis Cyber Protect Cloud** | Compatible - Certified | Officially supported, details can be found on [Acronis S3 Integration page](https://solutions.acronis.com/en-us/integrations/amazon-s3/) | Coming Soon |
| **IBM Storage Protect** | Compatible - Certified | Officially supported, details can be found on [IBM Storage Protect Support Page](https://www.ibm.com/support/pages/ibm-spectrum-protect-object-storage-support) | Coming Soon |
| **Cohesity, Veritas NetBackup**  | Compatible - Certified | Officially supported, details can be found on [NetBackup Support Page - Compatibility Matrix](https://www.veritas.com/support/en_US/dpp.NetBackup)  | [Guide](/pages/storage_and_backup/object_storage/s3_cohesity_netbackup) | Coming Soon |
| **Arctera, Veritas BackupExec** | Compatible - Certified | Officially supported, details can be found on [BackupExec Support Page - Hardware and Cloud Storage Compatibility List](https://www.veritas.com/support/en_US/dpp.BackupExec) | Coming Soon |
| **HYCU R-Cloud™** | Compatible - Certified | Officially supported, details can be found on [HYCU R-Cloud User Guide](https://docs.r-cloud.hycu.com/HYCU-R-Cloud-User-Guide.pdf) | [Guide](/pages/hosted_private_cloud/nutanix_on_ovhcloud/40-hycu-backup) |
| **Backint for SAP HANA™** | Compatible - Certified | Officially supported, details can be found on [SAP Certified Solutions Directory](https://www.sap.com/dmc/exp/sap-certified-solutions/#/solutions?search=backint&id=s:c5927e8a-cf79-40c1-84ad-cdd354554389) | [Guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent/) |
| **Nutanix Prism Central Backup Restore™** | Compatible - Certified | Officially supported, details can be found on [Prism Central Backup Restore HCL documentation](https://portal.nutanix.com/page/compatibility-interoperability-matrix/software?partnerName=OVHcloud&solutionType=all&componentVersion=all&hypervisor=all&validationType=all) | Coming Soon |

### Data Protection - Kubernetes Backup

| Tool/Software | Compatibility | Notes | Getting Started |
| --- | --- | --- | --- |
| **Veeam Kasten** | Compatible | N/A | [Guide](/pages/storage_and_backup/object_storage/s3_veeam) |
| **Cloud Casa** | Compatible | Officially supported, details can be found on [Cloud Casa product page](https://cloudcasa.io/partners/ovhcloud-kubernetes-backup-and-dr/) | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-using-cloudcasa) |
| **Trilio** | Compatible | Officially supported, details can be found on [Trilio Support Page](https://docs.trilio.io/kubernetes/appendix/configure-ovh-object-storage-as-a-target) | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-namespace-and-applications-with-trilio) |
|**Velereo** | Compatible | N/A | [Guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backup-and-restore-cluster-using-cloudcasa) |

### Command-Line Interface Integrations

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **Rclone** | Compatible | Provides a command-line interface for managing objects and buckets. More details on [Rclone](https://rclone.org/) | [Guide](/pages/storage_and_backup/object_storage/s3_rclone) |
| **s3cmd** | Compatible |  Provides a command line interface for uploading, retrieving and managing data. More details on [s3cmd](https://s3tools.org/s3cmd) | [Guide](/pages/storage_and_backup/object_storage/s3_s3cmd) |
| **Restic** | Compatible | Provides a backup tool that allows you to back up your Linux, Windows, Mac machines to storage repositories. More details on [Restic](https://restic.net/) | Coming Soon |
| **MinIO client** | Compatible | Provides an alternative to UNIX commands and supports Amazon S3-compatible cloud storage services. More details on [MinIO client](https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs-redirect) | Coming Soon |

### File management

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **Cyberduck** | Compatible | Provides an open-source Windows file transfer client for multiple protocols. More details on [Cyberduck](https://docs.cyberduck.io/cyberduck/) | Coming Soon |
| **WinSCP** | Compatible | Provides an open-source Windows file transfer client for multiple protocols. More details on [WinSCP](https://winscp.net/eng/index.php) | [Guide](/pages/storage_and_backup/object_storage/s3_winscp) |
| **FileZilla Pro** | Compatible | Provides secure, fast file transfers to cloud and servers in a single app. More details on [FileZilla Pro](https://filezillapro.com/) | Coming Soon |

### File Sharing

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **ownCloud** | Compatible | Open-source file sync and share platform for collaboration. More details on [ownCloud](https://owncloud.com/product) | [Guide](/pages/storage_and_backup/object_storage/s3_owncloud) |
| **NextCloud Files** | Compatible | Open-source file sync and share platform for collaboration. More details on [NextCloud](https://nextcloud.com/files/) | [Guide](/pages/storage_and_backup/object_storage/s3_nextcloud) |

### Storage platforms

| Tool/Software | Compatibility | Notes | Getting Started  |
| --- | --- | --- | --- |
| **Pure Storage FlashBlade** | Compatible - Certified | Officially supported as an external S3-compatible object storage replication target. | [Guide](/pages/storage_and_backup/object_storage/s3_pure_storage_flashblade) |
| **Nasuni** | Compatible - Certified | Officially supported as an external S3-compatible cloud object storage service. Details can be found on the [Compatibility & Support page](https://docs.nasuni.com/docs/compatibility-support). | Coming Soon |

## Go further

Join our [community of users](/links/community).

<sup>*</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
