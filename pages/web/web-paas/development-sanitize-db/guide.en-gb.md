---
title: Sanitize databases
slug: development-sanitize-db
section: Development
order: 5
---

**Last updated 31st August 2023**



## Objective  

When working on a new feature on your website, you want to use a new branch.
Using a new branch makes sure that you don't risk breaking your live, production website.

Creating a branch on {{< vendor/name >}} copies both the code and the database to that new development branch.
These code and database changes need to be tested before being merged into production.
Depending on your processes, internal or external teams may interact with the development environment branch.


{{% sanitize-dbs/intro %}}

## Examples
