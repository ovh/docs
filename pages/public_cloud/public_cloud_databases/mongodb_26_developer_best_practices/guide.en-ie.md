---
title: MongoDB - Developer Best Practices
excerpt: Best practices for developers using MongoDB
updated: 2025-01-06
---

## Objective

To get you started effectively as a MongoDB Developer on OVHcloud, the following page will cover MongoDB basics such as Design Patterns, indexing, and querying.

## MongoDB Developer Best Practices

### Data Modeling and Design Patterns

- **Understand Your Application Requirements**: Start by thoroughly understanding the application requirements and how data will be accessed. This helps in designing schemas that meet performance and scalability needs.

- **Use Schema Design Patterns**: Utilize common [schema design patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary) like the **Bucket Pattern**, **Outlier Pattern**, **Subset Pattern**, and **Attribute Pattern** to handle large datasets efficiently. Each pattern has specific use cases:
    - [Bucket Pattern](https://www.mongodb.com/blog/post/building-with-patterns-the-bucket-pattern): Ideal for time-series data, this pattern groups related data into buckets to reduce the number of documents and improve query performance.
    - [Outlier Pattern](https://www.mongodb.com/blog/post/building-with-patterns-the-outlier-pattern): Manage outliers separately to maintain efficient indexing and querying for the majority of your data.
    - [Subset Pattern](https://www.mongodb.com/blog/post/building-with-patterns-the-subset-pattern): Break down large datasets into manageable subsets to enhance performance and maintainability.
    - [Attribute Pattern](https://www.mongodb.com/blog/post/building-with-patterns-the-attribute-pattern): Used to handle scenarios where documents contain a large number of similar fields, by consolidating them into a key-value pair array, thus optimizing for query flexibility and storage efficiency.

- **Avoid Schema Design Anti-Patterns**: Be aware of and avoid common [schema design anti-patterns](https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/) such as:
    - **Massive Arrays**: Arrays with large numbers of elements can lead to inefficient querying and increased memory usage.
    - **Overly Deeply Nested Documents**: Deeply nested documents can complicate queries and degrade performance. Instead, consider flattening your data structure or using references.
    - **Monolithic Collections**: Avoid storing unrelated data in a single collection, which can lead to inefficient indexing and querying.

- **Leverage Document Validation**: Leverage, whenever necessary, MongoDB’s [schema validation](https://www.mongodb.com/docs/manual/core/schema-validation/#schema-validation) to enforce data integrity and ensure that documents adhere to a defined structure. Be cautious not to overuse this feature, as it consumes additional resources. Remember, MongoDB is designed to be flexible.

### Indexing

When developing your [indexing strategy](https://www.mongodb.com/docs/manual/applications/indexes/#indexing-strategies) you should have a deep understanding of your application's queries. Before you build indexes, map out the types of queries you will run so that you can build indexes that reference those fields. Indexes come with a performance cost, but are more than worth the cost for frequent queries on large data sets. 

- **Create Indexes Based on Query Patterns**: Analyze your query patterns and create indexes that support the most frequent and performance-critical queries. Use [compound indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/#compound-indexes) where multiple fields are queried together.

- **Use Covered Queries**: Design [indexes that cover the fields](https://www.mongodb.com/docs/manual/core/query-optimization/#covered-query) required by your queries. This allows MongoDB to satisfy the query using only the index, without scanning the documents, leading to significant performance improvements.

- **Optimize Index Size**: Regularly monitor and optimize the size of your indexes. Use MongoDB’s built-in tools to calculate the total index size and ensure it fits within the available RAM to avoid excessive disk I/O.

- **Avoid Over-Indexing**: While indexes improve query performance, too many indexes can degrade write performance and increase storage requirements. Only create indexes that are necessary for your application’s queries.

- **Use TTL Indexes for Expiring Data**: For data that needs to expire after a certain period, such as session information or logs, use [TTL (Time-To-Live) indexes](https://www.mongodb.com/docs/manual/core/index-ttl/#ttl-indexes). This helps in automatically removing expired data and maintaining an efficient dataset.

- **Equality Sort Range Rule (ESR)**: The [ESR rule](https://www.mongodb.com/docs/manual/tutorial/equality-sort-range-rule/#the-esr--equality--sort--range--rule) in MongoDB is a guideline for optimizing query performance by structuring compound indexes. The rule suggests placing fields used for equality comparisons first, followed by fields used for sorting, and finally fields used for range queries. This order maximizes the efficiency of index utilization and improves query performance.

### ReadPreference and WriteConcern

[ReadPreference](https://www.mongodb.com/docs/manual/core/read-preference/) controls how MongoDB clients direct read operations to the members of a replica set. It determines which member of the replica set will be used for read operations.

[WriteConcern](https://www.mongodb.com/docs/manual/reference/write-concern/) describes the level of acknowledgment requested from MongoDB for write operations. It ensures data durability and consistency by specifying how many members of the replica set must acknowledge the write.

For more information refer to the following [documentation](/pages/public_cloud/public_cloud_databases/mongodb_24_read_preference_and_write_concern).

### Leverage MongoDB Change Streams

MongoDB [Change Streams](https://www.mongodb.com/docs/manual/changeStreams/) provide a powerful way to listen and react to real-time changes in your MongoDB collections. This feature allows applications to be more responsive by enabling real-time updates and notifications. With Change Streams, you can watch for changes such as insertions, updates, deletions, and more in your collections, and then trigger specific actions based on these changes. This capability is essential for building reactive applications, enabling real-time analytics, synchronizing data across different systems, and more.

### Monitoring

- **Implement Comprehensive Monitoring**: Utilize MongoDB’s monitoring tools, such as [database commands](https://www.mongodb.com/docs/manual/administration/monitoring/#mongodb-reporting-tools), [OVHcloud Metrics tab](/pages/public_cloud/public_cloud_databases/mongodb_15_monitoring), or third-party monitoring solutions, to continuously monitor database performance, resource utilization, and operational metrics.

- **Set Up Alerts**: Configure alerts for key performance indicators such as high CPU usage, memory consumption, disk I/O, and slow queries. This enables proactive management and quick resolution of potential issues.

- **Analyze Query Performance**: Regularly review and analyze query performance using tools like the [MongoDB Profiler](https://www.mongodb.com/docs/manual/reference/database-profiler/) and [Explain Plans](https://www.mongodb.com/docs/manual/reference/explain-results/). Identify and optimize slow queries to ensure efficient data retrieval.

- **Monitor Index Performance**: Keep track of index usage statistics to identify unused or underutilized indexes. Remove or optimize these indexes to maintain optimal performance.

- **Plan for Backups and Disaster Recovery**: Ensure regular backups are scheduled and tested. Utilize MongoDB’s backup tools to create consistent and reliable backups, and have a well-defined disaster recovery plan in place.

By following these best practices, developers can design efficient and scalable MongoDB databases that meet the performance and operational needs of their applications.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!