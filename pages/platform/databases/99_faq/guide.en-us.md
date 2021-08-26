---
title: FAQ
excerpt: 'Cloud databases FAQ'
slug:  cloud-databases-faq
section: Getting started
order: 99
---

**Last updated 25<sup>th</sup> August, 2021**

## Objective

This guide gathers all the frequently asked questions by the customer about the Public Cloud Databases.

## Overall

### What is OVHcloud Public Cloud Databases ?

Public Cloud Databases is a managed service allowing you to deploy and use databases instances easily.

We provide cost-efficient services and take care of the infrastructure. We provide by design various features such as automatic backups, software updates, public ou private network, observability tools such as Logs and Metrics, and end-to-end security mechanisms.

Our Public Cloud Databases can be reached via Public network (Internet) or Private network (vRack), allowing you multiple use cases: connected with OVHcloud Public Cloud instances or Kubernetes clusters, OVHcloud baremetal, Hosted Private Cloud, OVHcloud VPS... but allow for Hybrid Cloud as soon as you can use Public Network (Internet).

### What is the difference with Enterprise Cloud Databases services ?

Enterprises Cloud Databases is only providing PostgreSQL database engine, and powered by dedicated servers. Public Cloud Databases are based on virtual machines, and provides multiples DBMS.

Enterprise Cloud Databases will smoothly be transited to Public Cloud databases in the near future.

### What is the difference with Web Hosting Databases ?

Major differences with our Web Hosting Databases are the ability to connect to public and private network, native integration in public cloud with pay-as-you-go, bigger range of compute, and improved resiliency with clustering. Also, Public Cloud Databases will provide more DBMS possibilities.

### What DBMS are supported ?

We are adding more and more Databases Management Systems over time, please find the exact list and proposed versions in our [Capabilities page](https://docs.ovh.com/us/en/publiccloud/databases/mongodb/capabilities/).

### Can I connect Public Cloud Databases to other OVHcloud Products ?

Yes. Public Cloud databases can be connected to Public Network (Internet) or Private Network (vRack).

You can then connect them to any products compliant with theses network topologies:

- Public network: any OVHcloud Cloud products
- Private Network (vRack): Baremetal Cloud, Hosted Private Cloud, Public Cloud Instances, Public Cloud managed Kubernetes clusters

### Can I connect Public Cloud Databases to third party services ?

Yes. You can reach your Public Cloud Databases services with Public network (Internet). You can then connect a third-party service, for example another Cloud provider or On-premises infrastructure.

### Where can i find the product roadmap ?

We expose our roadmap publicly in [Github](https://github.com/ovh/public-cloud-roadmap/projects).
You can filter by label such as "Databases".

## Services Plans and instances

### What are the major differences between Essential, Business and Enterprises plans ?

We built service plans based on business use-cases. They have major differentiators, related to each DBMS.
Please refer to the commercial website for comparative matrix per DBMS.

Overall, we designed 3 services plans with these usages in mind:

- Essential: perfect fit for test, proof-of-concept, development. Not for production purpose, mainly due to the lack of SLA, High Resiliency via clustering or Private Network
- Business: First level for development or production infrastructure. High resiliency is provided, with SLA
- Enterprise: Highest level of services, with all the features and better SLA. For some DBMS such as MongoDB, you also benefit to the highest level of licensing

### What is exactly managed by OVHcloud on my behalf ?

OVHcloud manages various tasks on your behalf:

- Setup: we are responsible to provide you a database instance, with state-of-the-art installation: we take care of the provisioning, initial setup of Operating system and DBMS software
- Once your database is running: based on your service plan, we perform administrative tasks such as daily backups, updating the software, provide security tools for authentication

Still, since we provide a database access, as a customer you are responsible for managing the services:

- configure the settings based on your uses case, including network, security, backups
- define your relational or NoSQL data schemas that will fit your needs
- performance tuning

You can find a detailed version of responsibilities in our Responsibility Matrix

### What are my responsibilities VS OVHcloud ?

We detailed customers and OVHcloud responsibilities inside a Responsibility matrix.

### How many DB instances can I run ?

OVHcloud Public Cloud allows you to create projects, then you will have quotas and billing per project.
Quotas are visible in your control panel, they depend of your history. The default quota is limited to 20 instances per project.

### How do I get started ?

Public Cloud Databases requires a Public Cloud project. Once created, you can start in few minutes databases instances via OVHcloud control panel.

Please refers to these guides:

- Getting started with Public Cloud Databases, [read more](https://docs.ovh.com/us/en/publiccloud/databases/getting-started/)

### How do I import data into an DB instance ?

We use official and un-modified (vanilla) versions of DBMS, allowing you to rely on official documentation for each DBMS to import data to Public Cloud Databases.
For example, for PostgreSQL you are able to use pg_dump and pg_restore, for MySQL you can use mysqldump and mysqlimport.

You can find offical documentation of official website of each DBMS:

- [MongoDB](https://docs.mongodb.com/manual/) 
- [MySQL](https://dev.mysql.com/doc/) 
- [PostgreSQL](https://www.postgresql.org/docs/) 
- [Redis](https://redis.io/documentation) 

## DBMS software and versions

### What are the proposed DBMS versions ?

We are adding more and more Databases Management Systems over time, please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/us/en/publiccloud/databases/mongodb/capabilities/).

### What is a minor and a major version ?

Each software, including database software, provides newer versions of their code, usually including bug fixes, security enhancements and improvements.

In general, a minor version upgrade includes only changes that are backward-compatible with existing applications.
In contrast, a major version can bring incompatibilities.

Each DBMS acts differently and their official documentation is the source of truth.

### What is the lifecycle policy for adding and removing minor and major versions to Public Cloud Databases ?

Please refers to our Public Cloud Databases policy.

### How can I select the DBMS version during DB instance creation ?

You can create a DB instance via API or Control panel interface. In both case, you are able to select various parameters such as DBMS type and DBMS versions. The proposed versions depends of our lifecycle policy.

### Can I manually update my DBMS version ?

Yes, when all the required conditions are met:

- when your service is up and running
- when another DBMS version is available
- when the DBMS allow it.

If all the conditions are validated, you can perform the update directly via API or Control panel.

### What are the risks and my responsibilities for DBMS updates ?

An update of a DBMS must always be tested before, and a customer should follow the DBMS official best practices.
Usually, new majors versions introduces new features and deprecates few others. Based on your own usage, it could lead to an outage of your applicative code.

The customer has the entire responsibility to comply with our lifecycle policy and verify his applicative compliance.

### Can I test a new version before upgrading ?

Yes. Once you have a DB instance up and running, you can restore a backup as a new DB instance (Fork).

During this process, you are able to select various options such as another version of your DBMS.
Once you verified the correct usage of your new services, you can either keep it or delete it.

Since we provide hourly billing, this operations can be repeated as much as you need (and without a strong billing increase).

### What happens when I use a deprecated version of DBMS on my DB instance ?

You will be warn in order to upgrade your version.

### What are the supported extensions for each DBMS ?

Each DBMS has its own specificities for extensions.
As a general rules, we only provided officialy supported extensions.

Please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/us/en/publiccloud/databases/mongodb/capabilities/).

## Billing

### How the services are billed ?

Public Cloud Databases are billed with a "pay-as-you-go" model. The entire Public Cloud ecosystem allow you to create projects, then attach a payment method to the project (credit card, paypal, ...) and finally launch various products and services inside this project.

You don't pay before using the service. At the end of the month, we summarize your spendings in one bill per project.
Public Cloud Databases are billed per hour, for the service range and flavor selected during DB instances creations.
Each started hour is counted.

### Where can I find my bills ?

Inside our control panel for Public Cloud section, you have a "project management" category.
The sub-section "Billing" allows you to view current consumption for each products such as Public Cloud Databases, but also to search for previous bills in your history.

### What is included in the prices ?

Public Cloud Databases pricing includes:

- setup and management of the services
- selected amount of nodes and intrinseq characteristics such as vCPU, RAM, Storage
- ingress/Egress network traffic, based on the limits of our regional flavors
- backups (retention vary, see our capabilities)
- logs and Metrics (retention vary, see our capabilities)
- when required, software licences

### What is not included in the pricing ?

Our pricing does not include:

- additional backups retention costs
- additional logs and metric retention costs
- additional network traffic for APAC regions (Sydney and Singapore)

### When does the billing begin and end ?

Each DB instances billing:

- starts when the services is up and running status, For example, if the services takes 5 minutes to start, you don't pay for this setup time.
- stop when you delete your service.

We are based on UTC Time.

## Flavors, Resiliency and Deployments

### How should I select the required amount of compute, RAM and storage ?

To select the right amount of compute, RAM and storage, you will need to assess your needs.

If you already have databases instances, you can check what is consumed today. For a new service, you will have to forecast you needs. Keep in mind that you can upgrade your DB instance range to a bigger one.

### Once my DB instance is up, can I scale my service Up or Down ?

For each DB instance you can:

- select a higher service plan if required (Essential to Business or Enterprise, Business to Enterprise)
- select a high range of compute and storage

For each DB instance you cannot:

- select a lower service plan
- select a lower range of compute

### Will my DB instance remain available during scaling ?

In most cases, your instance will remain available during the scaling. However, the status of your service will switch to updating preventing you to modify your service (e.g.: add a user).

### What are the performances for each flavors ?

We do not provide benchmarks results so far for Public Cloud databases.
Each business use-case is different, and benchmarks may strongly differs compared to your own real-life use-cases.
Just keep in mind that our performances gaps are linear.

### Where are deployed my DB instances ?

During the DB instance creation, you can select the region and datacenter to deploy your service
Please find the exact list and proposed version in our [Capabilities page](https://docs.ovh.com/us/en/publiccloud/databases/mongodb/capabilities/).

### Do we provide Multi-AZ deployments ?

So far we do not provide Multi-AZ deployments. We included this option in our backlog, you can follow his implementation in our Public Roadmap.

### How is performed high-availability ?

To provide High-Availability, we use the clustering principles. You service and you data a replicated accross mulitple nodes, preventing the overall system of a node failure. Your service is resilient mainly because we duplicated the data and configuration in multiple nodes.

The exact implementation may differ for each DBMS. Indeed, each DBMS has its own mechanisms and best practices.

For MongoDB, High-Availability start with 3 nodes. For PostgreSQL or MySQL, it starts with 2 nodes.

### What are nodes called "primary" and "replicas" ?

For relational DBMS, such as MySQL and PostgreSQL, each node has a role:

- a primary node can accept READ and WRITE operations. it act like the source of truth, and is replicated to Replicas nodes
- a replica node is a copy of primary node form the data perspective, and can accept READ operation only. replica nodes are very helpful to achieve high-availability but also improve READ performances.

In case of a Primary Node failure, a Replica can be elected as Primary.

### In case of node failure, is failover automatic ?

Yes, in case of a node failure, the failover mechanism is automatic, whatever the DBMS is.
OVHcloud is taking care of the failover process, new nodes are elected and promoted if necessary.

### What are the consequences of a failover for my cluster ?

A failover is automatic but the whole process can take few seconds up to 1 minute.

In case of a failover, you cluster will be in degraded mode:

- READ operations can be performed as usual
- WRITE operations will be discarded until the failover process is over

## Backups and maintenance

### How do you perform backups ?

Backups are performed differently according to the DBMS.
For MongoDB, a mongodump is executed, encrypted and store on our infrastructure.

### Can I perform manual backups ?

Yes, you can perform manual backups.

We use official and unmodified (vanilla) versions of DBMS, allowing you to rely on official documentation for each DBMS to perform backups for Public Cloud Databases.
For example, for PostgreSQL you are able to use pg_dump and pg_restore, for MySQL you can use mysqldump and mysqlimport.

You can find official documentation of official website of each DBMS:

- [MongoDB](https://docs.mongodb.com/manual/)
- [MySQL](https://dev.mysql.com/doc/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Redis](https://redis.io/documentation)

### Can I directly download backups made by OVHcloud ?

No, you cannot directly download backups made by OVHcloud. But you can restore them to another service and then use offical command lines to dump the data.

### Where are stored my backups, and for how long ?

When possible, we store your encrypted backups outside the region of your service, for sustainability reasons.
The location of the backup is available with all the other information of the backup in the API.

The period for which the backup is store depends on the plan you subscribed.
You can find it in our [Capabilities page](https://docs.ovh.com/us/en/publiccloud/databases/mongodb/capabilities/).

### What are my responsibilities about backups ?

As a customer you are solely responsible to made the appropriate backups for your services.

### What is a maintenance window? Will my DB instance be available during maintenance events ?

The maintenance window is the period of the day during which the maintenance operation, such as the backups, can be executed.
Depending of the maintenance operation, your DB instance will or will not be available during this event, but in most cases, your instance will be available.

### Can I modify the maintenance window ?

At this time, you cannot modifiy the maintenance window. you can follow our [official roadmap](https://github.com/ovh/public-cloud-roadmap/projects)

## Security

### What are the security mechanisms put in place for my database instance ?

Each database instance is strongly secured through multiple actions:

- __Infrastructure__: we rely on Openstack open source software stack for our whole public cloud. We are audited by official organisms and certified with ISO27001 norms for example
- __Public or Private Network__: based on you needs and your internal policies about security, you can opt for public network access (Internet) or Private Network (vRack) access
- __Network ACL__: we provide Access Control List (ACL) allowing you so specific which IPs or IPs block has the right to connect to your database instance. By default,
- __End-to-End encryption__: connections to databases are, by default, encrypted with TLS protocol, providing and end-to-end encryption protection. OVHcloud generates a SSL/TLS certificate for each dB instance. Once you establised an encrypted connection betwen your application and your database instance, your data flows will be encrypted
- __Data encryption__: data is stored on dedicated volumes that are encrypted
- __European data sovereignty__: Public Cloud Databases are part of OVHcloud, a european company. It guarantees to our customer a data sovereignty. [Read more](https://www.ovhcloud.com/fr/about-us/data-sovereignty/)

### Who can access my database instance initially ?

Once you start a new database instance, the dedault value are:

- zero access to IPs or IPs ranges. Nothing is whitelisted (ACL)
- 1 user created (admin) but not configured. You have to reset the password

To sum-up, initially your database cannot be accessed. It's made on purpose to protect your data from unsolicited connections

### How can I manage authorized accesses to my database instance ?

Once your database instance is created, you can manage authorized IPs or IPs block through OVHcloud control panel or API. You need art least 1 authorized IP to access your service.

You can follow or [Getting started](https://docs.ovh.com/us/en/publiccloud/databases/getting-started/) guide to see a step by step documentation

### How can I add new users for my database instance ?

Once your database instance is created, you can manage database users through OVHcloud control panel or API.
You need at least 1 created and configured user.
You can follow or [Getting started](https://docs.ovh.com/us/en/publiccloud/databases/getting-started/) guide to see a step by step documentation.

### Is my data encrypted ?

The volumes where the data is stored are encrypted and the backups are also encrypted before being stored.

### What are the certifications available for Public Cloud Databases ?

OVHcloud is meeting the highest standards certifications. Public Cloud Databases benefits from multiple certifications:

- ISO 27001
- planned: HIPAA / HDS 1-2-3

For healthcare compliance such as HIPAA/HDS, please refer to [official page](https://www.ovhcloud.com/fr/enterprise/certification-conformity/hds/)
For certification overview, please refer to [official page](https://www.ovhcloud.com/fr/enterprise/certification-conformity/)

## Network

### Can I connect to my database instance via public network ?

Yes, all databases instances have the ability to connect to public network.
It has to be specified and selected during database instance creation.
If you select Public Network connectivity, you cannot be connected through Private Network.

### Can I connect to my database instance via private network (vRack) ?

Yes, based on the service plan, databases instances have the ability to connect to private network (vRack).
It has to be specified and selected during database instance creation.
If you select Private Network connectivity, you cannot be connected through Public Network.

### Can I move my database instance from one vRack to another one ?

At this time, you cannot move your database from one vRack to another. You can follow our [official roadmap](https://github.com/ovh/public-cloud-roadmap/projects).

### Is inbound traffic network included (data pushed TO your database instance) ?

Yes, inbound network traffic is included in our prices and not metered.

### Is outbound traffic network included (data pulled FROM your database instance) ?

Yes, Outbound network traffic is included in our prices and not metered.
It allows you to benefit from a predictive pricing, without any risks of uncontrolled billing increase.

Exceptions: for databases instances located in APAC (Sydney, Singapore), inbound/outbound network is capped. This information is shown in the website pricing page.

### What is the amount of bandwith, throughput an latency for my service ?

Bandwidth is defined by you instance range and flavors. Please refer to our commercial page for an exact listing.

## Troubleshooting

### I'm unable to connect to my database instance

Each database instance is secured by default.

To connect to a database instance, please be sure to:

- a database instance up and running. be sure it's not in "maintenance" or "setting up" mode
- have at least 1 user configured (user login and password)
- have a least 1 IP whitelisted. It has to be the IP who will access your database (your computer, your dedicated server, ...). For troubleshooting purpose, you can also add the IP "0.0.0.0" so it will allow "any" connection. remove it after your tests
- your database instance connection parameters: host address, port, security mode.

Once ready, you can test the connection via DBMS official command line interface OR with classic application code such as Python, PHP, java...
For connection examples, please refer to our official documentation.

If you still have connectivity issues, please contact our support.

### I need to reset my user credentials

If you forgot your user credentials, or have security concerns, you can modify your user password directly through OVHcloud control panel in the "users" section. It will log out existing connections instanciated by this user.

### My DB instance is running out of storage

Each database instance has a limited amount of storage space. We recommend you to monitor your remaining storage space constantly.

To prevent storage issues, OVHcloud:

- alerts you by email when you are reaching 80% of used storage space
- put your database in read-only mode when you are reaching 90% of used storage space. It means that you database instance can accept READ operation, but will not accept WRITE operations anymore. your service is degraded
- unblock your database instance state when you decrease your used storage space to 80%

If you are running out of storage, you can:

- upgrade to a superior flavor, with more storage space, via Public Cloud control panel
- or clean up your data (remove unused tables...). Please follow official DBMS documentation for this

### My queries are slow

Queries are operations performed on your databases instances, such as READ informations, WRITE informations, or DELETE informations.

These queries performance are related to many external factors:

- your data schema. the The organization of your data will strongly impact your performances
- amount of data to query. a query on 1 table of 1000 lines, a query on 20 tables and 1 millions lines
- the quality of your application code
- the flavor performance: each flavor has its own hardware specifications. the more RAM and vCPU your will take, the more it will be performant
- heavy usage of the service (due to a legit cause such as Sales actions, or due
- issue on the hardware infrastructure or network

To troubleshoot your performance, usually the first step to check if the service is not impacted, i.e. travaux task.
To bench a superior flavor, you can duplicate your database instance to an higher flavor model and test again the performance.
Overall, if you are experiencing punctual slowness, you need databases and system admin skills.

### My data is corrupted

If your data is corrupted, you have 2 options:

- If your data are important, you can restore a backup where your data is valid. You need to investigate yourslef for this step
- If your data can be deleted, you can delete the database instance service and create a new one, or just follow official DBMS documentation to delete all the data