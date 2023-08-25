---
title: Encryption
updated: 2021-05-11
---



## Data in Transit

Data in transit between the World and Web PaaS is always encrypted as all of the sites and tools which Web PaaS supports and maintains require TLS or SSH to access. This includes the Web PaaS management console, Accounts site, Git repositories, Documentation, and Helpdesk.

Data in transit between the World and customer applications is encrypted by default.  Only SSH and HTTPS connections are generally accepted, with HTTP request redirected to HTTPS.  Users may opt-out of that redirect and accept HTTP requests via `routes.yaml` configuration, although that is not recommended.  By default HTTPS connections use an automatically generated Let's Encrypt certificate or users may provide their own TLS certificate.

Data in transit on Web PaaS controlled networks (eg. between the application and a database) may or may not be encrypted, but is nonetheless protected by private networking rules.


