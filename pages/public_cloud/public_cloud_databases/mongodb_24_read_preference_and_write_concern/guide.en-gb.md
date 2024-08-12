---
title: MongoDB - MongoDB readPreference and writeConcern
excerpt: MongoDB readPreference and writeConcern
updated: 2024-06-27
---
> [!WARNING]
> MongoDB parameters such as readPreference and writeConcern have performance implications.

## Introduction

MongoDB offers the possibility to control how and where data is read and written within a distributed database environment.

[ReadPreference](https://www.mongodb.com/docs/manual/core/read-preference/) allows you to specify from which replica set member (primary or secondary) your read operations should be served, optimizing for performance, consistency, or availability based on your application needs.

By default, MongoDB's read preference is set to read from the primary node. This ensures the most up-to-date data is read. However, by setting the read preference to secondary, you can distribute read operations across all secondary nodes, improving read scalability and reducing the load on the primary node. This can enhance performance and reduce latency, especially in geographically distributed deployments.

[WriteConcern](https://www.mongodb.com/docs/manual/reference/write-concern/) defines the level of acknowledgment required from the database when a write operation is performed, allowing you to balance between data durability and write performance. Together, these settings provide flexible and fine-grained control over data consistency, availability, and performance in your MongoDB deployment.

MongoDB's write concern is meant to provide flexibility in balancing data durability and write performance. The **w=1** write concern means the write operation is acknowledged by only the primary node, offering lower latency and higher throughput, suitable for use cases where performance is critical and occasional data loss is acceptable. On the other hand, **majority** write concern, which is the defaut value, ensures the write is acknowledged by the majority of replica set members, providing higher data durability and consistency, ideal for applications where data integrity and reliability are paramount, such as financial transactions or critical data systems.



## ReadPreference

[ReadPreference](https://www.mongodb.com/docs/manual/core/read-preference/) controls how MongoDB clients direct read operations to the members of a replica set. It determines which member of the replica set will be used for read operations. Here are the types of ReadPreference:

1. **primary**: Default mode. All read operations go to the primary.
2. **primaryPreferred**: Reads from the primary if available, otherwise from secondaries.
3. **secondary**: All read operations go to secondaries.
4. **secondaryPreferred**: Reads from secondaries if available, otherwise from the primary.
5. **nearest**: Reads from the member (primary or secondary) with the least network latency.

### Configuration via Connection String

You can specify the read preference in the connection string using the `readPreference` parameter.

Example:

```javascript
mongodb://username:password@host:port/dbname?readPreference=secondary
```

### Configuration for specific operation

You can also set the read preference programmatically for specific operation.

Example in Python (PyMongo):
```python
document = db.collection.find_one({"key": "value"}, read_preference=ReadPreference.NEAREST)
```

## WriteConcern

[WriteConcern](https://www.mongodb.com/docs/manual/reference/write-concern/) describes the level of acknowledgment requested from MongoDB for write operations. It ensures data durability and consistency by specifying how many members of the replica set must acknowledge the write.

Here are the key options for WriteConcern:

1. **w**: Specifies the number of replica set members that must acknowledge the write.
   - `0`: No acknowledgment.
   - `1`: Acknowledgment from the primary only.
   - `majority`: Acknowledgment from the majority of the replica set members.
   - A number greater than 1: Acknowledgment from the specified number of members.
2. **wtimeout**: Specifies a time limit (in milliseconds) for the write concern acknowledgment.
3. **j**: If true, waits for the write operation to be committed to the journal.

### Configuration via Connection String

You can specify the write concern in the connection string using the `w`, `wtimeout`, and `journal` parameters.

Example:

```javascript
mongodb://username:password@host:port/dbname?w=majority&wtimeoutMS=5000&journal=true
```
### Configuration for Specific Operation

You can set write concern for specific operations rather than globally.

```python
# Specific write operation with WriteConcern
result = db.collection.with_options(write_concern=WriteConcern("majority")).insert_one({"key": "value"})
```

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
