---
title: Data retention
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Web PaaS logs and stores various types of data as a normal part of its business.  This information is only retained as needed to perform relevant business functions. Retention periods vary depending on the type of data stored. If a legal obligation, law enforcement request, or ongoing business need so requires, data may be retained after the original purpose for which it was collected ceases to exist.

## Account information

Information relating to customer accounts (login information, billing information, etc.) is retained for as long as the account is active with Web PaaS.

Customers may request that their account be deleted and all related data be purged by filing a support ticket.

## System logs

System level access and security logs are maintained by Web PaaS for diagnostic purposes.  These logs are not customer-accessible.  These logs are retained for at least 6 months and at most 2 years depending upon legal and standards compliance required for each system.

## Application logs

Application logs on each customer environment are retained with the environment.  Individual log files are truncated at 100 MB, regardless of their age.  See the [accessing logs](/pages/web_cloud/web_paas_powered_by_platform_sh/development-logs) page for instructions on how to access them.

When an environment is deleted, its application logs are deleted as well.

## Grid Backups

Application backups running on the Grid (e.g. If you subscribe to a Web PaaS Professional plan) are retained for at least 7 days.  They will be purged between 7 days and 6 months, at Web PaaS's discretion.

## Tombstone backups

When a project is deleted, Web PaaS takes a final backup of active environments, as well as the Git repository holding user code.  This final backup is to allow Web PaaS to recover a recently-deleted project in case of accident.

These "tombstone" backups are retained for between 7 days and 6 months depending upon legal and standards compliance required for each system.

## Analytics

Web PaaS uses Google Analytics on various web pages, and therefore Google Analytics will store collected data for a period of time.  We have configured our Google Analytics account to store data for 14 months from the time you last accessed our site, which is the minimum Google allows.
