---
title: FAQ Public Cloud databases
slug: faq
section: General information
order: 040
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/faq/'
---

**Last updated August 25<sup>th</sup>, 2021**

## Objective

Here are the most frequently asked questions about Public Cloud Databases.

## Overall

### What are OVHcloud Public Cloud Databases ?

Public Cloud Databases is a managed service allowing you to deploy and use databases instances easily.

We provide cost-efficient services and take care of the infrastructure. We provide by design various features such as automatic backups, software updates, public or private network, observability tools such as logs and metrics, and end-to-end security mechanisms.

Our Public Cloud Databases can be reached via Public network (Internet) or Private network (vRack), allowing you multiple use cases: connect with OVHcloud Public Cloud instances or Kubernetes clusters, OVHcloud baremetal, Hosted Private Cloud, OVHcloud VPS... but also allow for Hybrid Cloud as long as you can use Public network (Internet).

### What is the difference between this offer and the Enterprise Cloud Databases offer ?

Enterprise Cloud Databases is only providing the PostgreSQL database engine, and is powered by dedicated servers. Public Cloud Databases are based on virtual machines, and provides multiples DBMS.

Enterprise Cloud Databases will smoothly be transited to Public Cloud Databases in the near future.

### What is the difference between this offer and Web Hosting Databases ?

Major differences with our Web Hosting Databases are the ability to connect to public and private networks, native integration in Public Cloud with pay-as-you-go, bigger range of compute, and improved resiliency with clustering. Also, Public Cloud Databases will provide more DBMS possibilities.

### What are the supported DBMS ?

We are adding more and more Databases Management Systems over time, please find the exact list and proposed versions in our [Capabilities page](https://docs.ovh.com/pl/publiccloud/databases/mongodb/capabilities/).

### Can I connect Public Cloud Databases to other OVHcloud products ?

Yes. Public Cloud databases can be connected to Public network (Internet) or Private network (vRack).

You can then connect them to any product compliant with these network topologies:

- Public network: any OVHcloud Cloud product.
- Private network (vRack): Baremetal Cloud, Hosted Private Cloud, Public Cloud Instances, Public Cloud managed Kubernetes clusters.

### Can I connect Public Cloud Databases to third party services ?

Yes. You can reach your Public Cloud Databases services with Public network (Internet). You can then connect a third-party service, for example another Cloud provider or on-premises infrastructure.

### Where can I find the product roadmap ?

We expose our roadmap publicly on [Github](https://github.com/ovh/public-cloud-roadmap/projects).
You can filter by label such as "Databases".

## Service Plans and instances

### What are the major differences between Essential, Business and Enterprise plans ?

We built service plans based on business use-cases. They have major differentiators, related to each DBMS.

Overall, we designed 3 services plans with these usages in mind:

- Essential: perfect fit for test, proof-of-concept, development. Not for production purpose, mainly due to the lack of SLA, High Resiliency via clustering or Private Network.
- Business: First level for development or production infrastructure. High resiliency is provided, with SLA.
- Enterprise: Highest level of services, with all the features and better SLA. For some DBMS such as MongoDB, you also benefit from the highest level of licensing.

### What is exactly managed by OVHcloud on my behalf ?

OVHcloud manages various tasks on your behalf:

- Setup: we are providing you with a database instance, with state-of-the-art installation, meaning that we take care of the provisioning, initial setup of Operating System and DBMS software.
- Once your database is running: based on your service plan, we perform administrative tasks such as daily backups, updating the software, providing security tools for authentication.

Still, since we provide a database access, as a customer you are responsible for managing the services:

- Configuring the settings based on your use cases, including network, security, backups.
- Defining your relational or NoSQL data schemas that will fit your needs.
- Performance tuning

### How many DB instances can I run ?

OVHcloud Public Cloud allows you to create projects, then you will have quotas and billing per project.
Quotas are visible in your OVHcloud Control Panel, they depend of your history. The default quota is limited to 20 instances per project.

### How do I get started ?

Public Cloud Databases require a Public Cloud project. Once a project is created, you can start databases instances via the OVHcloud Control Panel in few minutes.

Please read our [Getting started with Public Cloud Databases documentation](https://docs.ovh.com/pl/publiccloud/databases/getting-started/).

### How do I import data into a DB instance ?

We use official and un-modified (vanilla) versions of DBMS, allowing you to rely on official documentation for each DBMS to import data to Public Cloud Databases.
For example, for PostgreSQL you are able to use pg_dump and pg_restore, for MySQL you can use mysqldump and mysqlimport.

Please refer to the offical website for each DBMS documentation:

- [MongoDB](https://docs.mongodb.com/manual/){.external}
- [MySQL](https://dev.mysql.com/doc/){.external}
- [PostgreSQL](https://www.postgresql.org/docs/){.external}
- [Redis](https://redis.io/documentation){.external}

## DBMS software and versions

### What are the proposed DBMS versions ?

We are adding more and more Databases Management Systems over time, please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/pl/publiccloud/databases/mongodb/capabilities/).

### What is a minor and a major version ?

Each software, including database software, provides newer versions of their code, usually including bug fixes, security enhancements and improvements.

In general, a minor version upgrade includes only changes that are backward-compatible with existing applications.
In contrast, a major version can bring incompatibilities.

Each DBMS acts differently and their official documentation is the source of truth.

### How can I select the DBMS version during the DB instance creation ?

You can create a DB instance via API or the OVHcloud Control Panel. In both cases, you are able to select various parameters such as DBMS type and DBMS versions. 

### Can I manually update my DBMS version ?

Yes, when all the required conditions are met:

- when your service is up and running.
- when another DBMS version is available.
- when the DBMS allow it.

If all the conditions are validated, you can perform the update directly via API or the OVHcloud Control Panel.

### What are the risks and my responsibilities for DBMS updates ?

An update of a DBMS must always be tested before, and a customer should follow the DBMS official best practices.
Usually, new major versions introduce new features and deprecate few others. Based on your own usage, it could lead to an outage of your applicative code.

### Can I test a new version before upgrading ?

Yes. Once you have a DB instance up and running, you can restore a backup as a new DB instance (Fork).

During this process, you are able to select various options such as another version of your DBMS.
Once you verified the correct usage of your new services, you can either keep it or delete it.

Since we provide hourly billing, this operation can be repeated as much as you need (and without a strong billing increase).

### What happens when I use a deprecated version of DBMS on my DB instance ?

You will be warned in order to upgrade your version.

### What are the supported extensions for each DBMS ?

Each DBMS has its own specificities for extensions.
As a general rule, we only provided officialy supported extensions.

Please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/pl/publiccloud/databases/mongodb/capabilities/).

## Billing

### How are the services billed ?

Public Cloud Databases are billed with a "pay-as-you-go" model. The entire Public Cloud ecosystem allows you to create projects, then attach a payment method to the project (credit card, PayPal, ...) and finally launch various products and services inside this project.

You don't pay before using the service. At the end of the month, we summarize your spendings in one bill per project.
Public Cloud Databases are billed per hour, for the service range and flavor selected during DB instances creations.
Each started hour is counted.

### Where can I find my bills ?

Inside the Public Cloud section of the OVHcloud Control Panel, please find the "Project Management" category.
The "Billing Control" sub-section allows you to view the current consumption for each product such as Public Cloud Databases, but also to search for previous bills in your history.

### What is included in the prices ?

Public Cloud Databases pricing includes:

- Setup and management of the services.
- Selected amount of nodes and internal characteristics such as vCPU, RAM, Storage.
- Ingress/Egress network traffic, based on the limits of our regional flavors.
- Backups (retention vary, see our capabilities).
- Logs and Metrics (retention vary, see our capabilities).
- When required, software licences.

### What is not included in the pricing ?

Our pricing does not include:

- Additional backups retention costs.
- Additional logs and metric retention costs.
- Additional network traffic for APAC regions (Sydney and Singapore).

### When does the billing begin and end ?

Each DB instance billing:

- starts when the service is up and running. For example, if the services takes 5 minutes to start, you don't pay for this setup time.
- stops when you delete your service.

We are based on UTC Time.

## Flavors, Resiliency and Deployments

### How should I select the required amount of compute, RAM and storage ?

To select the right amount of compute, RAM and storage, you will need to assess your needs.

If you already have databases instances, you can check what is consumed today. For a new service, you will have to forecast you needs. Keep in mind that you can upgrade your DB instance range to a bigger one.

### Once my DB instance is up, can I scale my service up or down ?

For each DB instance, you can:

- select a higher service plan if required (Essential to Business or Enterprise, Business to Enterprise).
- select a higher range of compute and storage.

For each DB instance, you can not:

- select a lower service plan.
- select a lower range of compute.

### Will my DB instance remain available during scaling ?

In most cases, your instance will remain available during the scaling. However, the status of your service will switch to "updating", preventing you from modifying your service (e.g.: adding a user).

### What are the performances for each flavor ?

We do not provide benchmarks results so far for Public Cloud databases.
Each business use-case is different, and benchmarks may strongly differ compared to your own real-life use-cases.
Just keep in mind that our performances gaps are linear.

### Where are my DB instances deployed ?

During the DB instance creation, you can select the region and datacenter to deploy your service.
Please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/pl/publiccloud/databases/mongodb/capabilities/).

### Do we provide Multi-AZ deployments ?

So far we do not provide Multi-AZ deployments. We included this option in our backlog, you can follow its implementation in our [official roadmap](https://github.com/ovh/public-cloud-roadmap/projects).

### How is high-availability performed ?

To provide High-Availability, we use the clustering principles. Your service and your data are replicated across multiple nodes, preventing the overall system from a node failure. Your service is resilient mainly because we duplicated the data and configuration in multiple nodes.

The exact implementation may differ for each DBMS. Indeed, each DBMS has its own mechanisms and best practices.

For MongoDB, High-Availability starts with 3 nodes. For PostgreSQL or MySQL, it starts with 2 nodes.

### What are nodes called "primary" and "replicas" ?

For relational DBMS, such as MySQL and PostgreSQL, each node has a role:

- a primary node can accept READ and WRITE operations. It acts like the source of truth, and is replicated to replica nodes.
- a replica node is a copy of primary node form the data perspective, and can accept READ operation only. Replica nodes are very helpful to achieve high-availability but also improve READ performances.

In case of a Primary Node failure, a Replica can be elected as Primary.

### In case of a node failure, is failover automatic ?

Yes, in case of a node failure, the failover mechanism is automatic, whatever the DBMS is.
OVHcloud is taking care of the failover process, new nodes are elected and promoted if necessary.

### What are the consequences of a failover for my cluster ?

A failover is automatic but the whole process can take from a few seconds up to 1 minute.

In case of a failover, your cluster will be in degraded mode:

- READ operations can be performed as usual.
- WRITE operations will be discarded until the failover process is over.

## Backups and maintenance

### How do you perform backups ?

Backups are performed differently according to the DBMS.
For MongoDB, a mongodump is executed, encrypted and stored on our infrastructure.

### Can I perform manual backups ?

Yes, you can perform manual backups.

We use official and unmodified (vanilla) versions of DBMS, allowing you to rely on official documentation for each DBMS to perform backups for Public Cloud Databases.
For example, for PostgreSQL you are able to use pg_dump and pg_restore. For MySQL you can use mysqldump and mysqlimport.

Please refer to the offical website for each DBMS documentation:

- [MongoDB](https://docs.mongodb.com/manual/){.external}
- [MySQL](https://dev.mysql.com/doc/){.external}
- [PostgreSQL](https://www.postgresql.org/docs/){.external}
- [Redis](https://redis.io/documentation){.external}

### Can I directly download backups made by OVHcloud ?

No, you can not directly download backups made by OVHcloud. But you can restore them to another service and then use offical command lines to dump the data.

### Where are my backups stored, and for how long ?

When possible, we store your encrypted backups outside the region of your service, for sustainability reasons.
The location of the backup is available with all the other information of the backup in the API.

The period during which the backup is stored depends on the plan you subscribed.
You can find it in our [Capabilities page](https://docs.ovh.com/pl/publiccloud/databases/mongodb/capabilities/).

### What are my responsibilities about backups ?

As a customer, you are solely responsible to make the appropriate backups for your services.

### What is a maintenance window? Will my DB instance be available during maintenance events ?

The maintenance window is the period of the day during which the maintenance operation, such as the backups, can be executed.
Depending on the maintenance operation, your DB instance will or will not be available during this event, but in most cases, your instance will be available.

### Can I modify the maintenance window ?

Currently you can not modifiy the maintenance window. Please follow our [official roadmap](https://github.com/ovh/public-cloud-roadmap/projects).

## Security

### What are the security mechanisms put in place for my database instance ?

Each database instance is strongly secured through multiple actions:

- **Infrastructure**: we rely on Openstack open source software stack for our whole Public Cloud. We are audited by official organisms and certified with ISO27001 norms for example.
- **Public or Private Network**: based on your needs and your internal policies about security, you can opt for public network access (Internet) or Private Network (vRack) access.
- **Network ACL**: we provide Access Control List (ACL) allowing you to specify which IPs or IP block have the right to connect to your database instance. By default, no ACL is declared on the service meaning nobody can connect to your service until you add at least one.
- **End-to-End encryption**: connections to databases are, by default, encrypted with TLS protocol, providing an end-to-end encryption protection. OVHcloud generates a SSL/TLS certificate for each dB instance. Once you establish an encrypted connection betwen your application and your database instance, your data flows will be encrypted.
- **Data encryption**: data is stored on dedicated volumes that are encrypted.
- **European data sovereignty**: Public Cloud Databases are part of OVHcloud, a European company. It guarantees data sovereignty to our customers. [Read more](https://www.ovhcloud.com/pl/about-us/data-sovereignty/)

### Who can access my database instance initially ?

Once you start a new database instance, the default values are:

- Zero access to IPs or IPs ranges. Nothing is authorized (ACL).
- 1 user created (admin) but not configured. You have to reset the password.

To sum-up, initially your database cannot be accessed. It's made on purpose to protect your data from unsolicited connections.

### How can I manage authorized accesses to my database instance ?

Once your database instance is created, you can manage authorized IPs or IP blocks through the OVHcloud Control Panel or via API. You need at least 1 authorized IP to access your service.

Please read our [Getting started guide](https://docs.ovh.com/pl/publiccloud/databases/getting-started/) to get a step by step documentation.

### How can I add new users for my database instance ?

Once your database instance is created, you can manage database users through the OVHcloud control panel or via API.
You need at least 1 created and configured user.
Please read our [Getting started guide](https://docs.ovh.com/pl/publiccloud/databases/getting-started/) to get a step by step documentation.

### Is my data encrypted ?

The volumes where the data is stored are encrypted and the backups are also encrypted before being stored.

### What are the available certifications for Public Cloud Databases ?

OVHcloud is meeting the highest standards certifications. Public Cloud Databases benefit from multiple certifications:

- ISO 27001
- planned: HIPAA / HDS 1-2-3

For healthcare compliance such as HIPAA/HDS, please refer to our [official page](https://www.ovhcloud.com/pl/enterprise/certification-conformity/hds/).
For certification overview, please refer to our [official page](https://www.ovhcloud.com/pl/enterprise/certification-conformity/)

## Network

### Can I connect to my database instance via public network ?

Yes, all databases instances have the ability to connect to the public network.
It has to be specified and selected during database instance creation.
If you select Public Network connectivity, you can not be connected through Private Network.

### Can I connect to my database instance via private network (vRack) ?

Yes, based on the service plan, databases instances have the ability to connect to private network (vRack).
It has to be specified and selected during database instance creation.
If you select Private Network connectivity, you can not be connected through Public Network.

### Can I move my database instance from one vRack to another one ?

At this time, you can not move your database from one vRack to another. You can follow our [official roadmap](https://github.com/ovh/public-cloud-roadmap/projects).

### Is inbound traffic network included (data pushed TO your database instance) ?

Yes, inbound network traffic is included in our prices and not metered.

### Is outbound traffic network included (data pulled FROM your database instance) ?

Yes, Outbound network traffic is included in our prices and not metered.
It allows you to benefit from a predictive pricing, without any risks of uncontrolled billing increase.

Exceptions: for databases instances located in APAC (Sydney, Singapore), inbound/outbound network is capped. This information is shown in the website pricing page.

## Troubleshooting

### I'm unable to connect to my database instance

Each database instance is secured by default.

To connect to a database instance, please make sure to:

- have a database instance up and running. Be sure it's not in "maintenance" or "setting up" mode.
- have at least 1 user configured (user login and password).
- have a least 1 authorized IP. It has to be the IP which will access your database (your computer, your dedicated server, ...). For troubleshooting purposes only, you can also add the "0.0.0.0" IP so that it will allow "any" connection. Remove it after your tests are done.
- know your database instance connection parameters: host address, port, security mode.

Once you are ready, you can test the connection via the DBMS official command line interface OR with classic application code such as Python, PHP, java...

If you still have connectivity issues, please contact our support.

### I need to reset my user credentials

If you forgot your user credentials, or have security concerns, you can modify your user password directly via the OVHcloud Control Panel in the "Users & Roles" section. It will log out existing connections instanciated by this user.

### My DB instance is running out of storage

Each database instance has a limited amount of storage space. We recommend you to monitor your remaining storage space constantly.

To prevent storage issues, OVHcloud:

- alerts you by email when you are reaching 80% of used storage space.
- puts your database in read-only mode when you are reaching 90% of used storage space. It means that your database instance can accept READ operations, but will not accept WRITE operations anymore. Your service is degraded.
- unblocks your database instance state when you decrease your used storage space to 80%.

If you are running out of storage, you can:

- either upgrade to a superior flavor, with more storage space, via the OVHcloud Public Cloud Control Panel.
- or clean up your data (remove unused tables...). Please follow the official DBMS documentation for instructions.

### My queries are slow

Queries are operations performed on your databases instances, such as READ operations, WRITE operations, or DELETE operations.

These queries performances are related to many external factors:

- Your data schema. The organization of your data will strongly impact your performances.
- The amount of data to query. A query on a 1 table of 1000 lines is different from a query on 20 tables of 1 million lines.
- The quality of your application code.
- The flavor performance: each flavor has its own hardware specifications. The more RAM and vCPU you have, the more efficient queries will be.
- The heavy usage of the service (for example a legit traffic due to Sales actions).
- An issue on the hardware infrastructure or network.

To troubleshoot your performance, usually the first step is to check if the service is not affected, i.e. by a [travaux task](https://www.status-ovhcloud.com/).
To bench a superior flavor, you can duplicate your database instance to a higher flavor model and test again the performance.

Overall, if you are experiencing punctual slowness, you need databases and system admin skills.

### My data is corrupted

If your data is corrupted, you have 2 options:

- If your data are important, you can restore a backup where your data is valid. You need to investigate on your own for this step.
- If your data can be deleted, you can delete the database instance service and create a new one, or just follow official the DBMS documentation to delete all the data.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
