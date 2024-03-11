# Introduction to Object Replication

Object replication is a powerful feature that facilitates the automatic and asynchronous replication of objects within a source bucket to one or several destination buckets. This capability is crucial for maintaining data consistency, availability, and redundancy across different storage locations.

Destination buckets can reside within a single region or be dispersed across multiple regions, tailored to your specific requirements. This flexibility allows for strategic data placement and management across global infrastructure networks.

## Key Use Cases for Object Replication

- **Exact Object Copies with Metadata Replication**: Replication is not just about duplicating the object; it includes the replication of all associated metadata (e.g., object creation time, version ID, etc.). This ensures that the replicas are true copies of the source objects, maintaining integrity and consistency for critical applications.

- **Data Synchronization Across Teams**: It facilitates the seamless synchronization of data among various teams, streamlining collaboration and data sharing according to predefined access controls and policies.

- **Cost-Effective Data Storage Management**: By replicating data into different storage classes, organizations can optimize their backup and storage costs without compromising on data availability or durability.

- **Enhanced Data Resiliency Across Regions**: Enhance your data protection strategies by replicating critical data across multiple geographical regions. This increases resiliency against data loss and ensures business continuity in the face of regional disruptions.

- **Reduced Latency for Global Access**: Positioning your data closer to your end-users minimizes access latency and improves the overall user experience. Replication allows for strategic data placement in OVH regions nearest to your customer base.

- **Efficiency Boost for Computational Workloads**: By bringing your data closer to your OVH compute resources, replication enhances the efficiency and performance of your workloads, facilitating faster data processing and analysis.

- **Compliance and Regulatory Fulfillment**: Many compliance frameworks mandate that data be stored at a considerable distance from the primary location or require multiple copies of critical data. Object replication simplifies the process of meeting these requirements by enabling automatic replication across vast distances and into multiple storage mediums.

Implementing object replication ensures not only the safety and availability of your data but also enhances operational efficiency and compliance posture.

# What is Asynchronous Replication?

## Basic Concepts

At its core, the OVHcloud Object Storage S3 Asynchronous Replication is designed to facilitate several key operations in the management and safeguarding of your data. Here's what it enables you to do:

- **Exact Replica Creation**:

![Schema 1](images/1.png)

- **Replicate data within the same region**:

![Schema 2](images/2.png)

- **Replicate data to a different region**:

![Schema 3](images/3.png)

- **Replicate data to a different region**:

![Schema 4](images/4.png)

# What is Replicated vs What is Not

The following table provides the default behavior of the OVHcloud Object Storage Asynchronous Replication feature:

| What is Replicated                                           | What is Not Replicated                                       |
|--------------------------------------------------------------|--------------------------------------------------------------|
| Objects created AFTER the upload of the replication configuration | Delete marker i.e., objects deleted in the source bucket are not automatically deleted in the destination bucket |
| Unencrypted objects                                          | Object replicas i.e., objects that are the result of a previous replication operation |
| Objects encrypted with customer provided keys (SSE-C)        | Objects that have already been replicated to a previous destination |
| Object metadata from the source objects to the replicas      | Objects that are stored in the Cold Archive temporary storage |
| Objects in the source bucket the bucket owner has permissions to read and access ACLs | Bucket configurations i.e., lifecycle configuration, CORS configuration, bucket ACLs, etc. |
| Object ACL updates                                           | Actions resulting from Lifecycle Configuration actions |
| Object tags                                                  | Objects created BEFORE the upload of the replication configuration |
| S3 Object Lock retention configuration                       | Replication to a bucket in a different Public Cloud Project i.e., source and destination buckets must be in the same project |

# Replication Prerequisites

Asynchronous replication requires the following conditions to be met:

- **Public Cloud Project**: Source and destination buckets must be in the same public cloud project. This is a current limitation that may change in the future.
- **Versioning**: Versioning must be enabled in both the source and destination buckets.
- **S3 Object Lock**: If the source bucket has S3 Object Lock enabled, the destination buckets must also have this feature enabled to ensure compatibility.

# Replication Configuration

A replication configuration is defined through a set of rules within a JSON document. This document is uploaded and applied to the source bucket, detailing how objects are to be replicated.

## Each Replication Rule Defines:

- A **unique rule ID** to identify the rule.
- **Rule priority** to determine the order of execution when multiple rules exist.
- **Destination bucket** where the replicated objects will be stored.
- **Objects to be replicated**: By default, all objects are eligible for replication. However, you can specify a subset of objects by filtering them with a prefix and/or tags.
- **Optional target storage class**: By default, object replicas will inherit the same storage class as the source objects. If needed, you can specify a different storage class for the replicas.

## Replication Rule Structure

The basic structure of a replication rule within the configuration JSON document is as follows:


```json
{
  "Role": "string",
  "Rules": [
    {
      "ID": "string",
      "Priority": integer,
      "Filter": {
        "Prefix": "string",
        "Tag": {
          "Key": "string",
          "Value": "string"
        },
        "And": {
          "Prefix": "string",
          "Tags": [
            {
              "Key": "string",
              "Value": "string"
            }
          ]
        }
      },
      "Status": "Enabled"|"Disabled",
      "Destination": {
        "Bucket": "string",
        "StorageClass": "STANDARD"|"HIGH_PERF"
      },
      "DeleteMarkerReplication": {
        "Status": "Enabled"|"Disabled"
      }
    }
  ]
}
```

| Attribute               | Description                                                                                                             | Required |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------|----------|
| Tag                     | Filter the objects by tag key and/or value                                                                              | No       |
| StorageClass            | The target storage class: "STANDARD" for S3 Standard and "HIGH_PERF" for S3 High Performance                            | No       |
| Status                  | Tells if your replication rule is Enabled or Disabled                                                                   | Yes      |
| Role                    | OVHcloud IAM role needed to allow OVHcloud Object Storage to access data from the source bucket & write data to destination buckets. Currently, OVHcloud has set a unique role "replicationRole" | Yes      |
| Priority                | If there are two or more rules with the same destination bucket, objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority | Yes      |
| Prefix                  | An object key name prefix that identifies the object or objects to which the rule applies. To include all objects in a bucket, specify an empty string | No       |
| ID                      | Each replication rule has a unique ID                                                                                   | Yes      |
| Filter                  | A filter that identifies the subset of objects to which the replication rule applies. To replicate all objects in the bucket, specify an empty object | Yes      |
| Destination             | A container for information about the replication destination and its configurations                                     | Yes      |
| DeleteMarkerReplication | Tells if delete operations should be replicated                                                                         | Yes      |
| Bucket                  | The destination bucket (to replicate to multiple destinations, you must create multiple replication rules)              | Yes      |
| And                     | You can apply multiple selection criteria in the filter                                                                 | No       |





