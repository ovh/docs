---
title: Metrics Data Platform service end-of-life notification
slug: eol_notice
excerpt: Details on the end-of-life of Metrics solutions
section: Announcements
order: 1
---

**Last updated 8th July 2021**

## Summary

OVHcloud has announced the end of its Metrics Data Platform solution.
It is no longer possible to order new services from July 8th 2021.
Active services will be supported until October 26th 2021, when support ends.
All operations can be tracked via [this status task](https://bare-metal-servers.status-ovhcloud.com/incidents/7tx5l20nbp8z).

## End of Life Planning

In July 2021, customers with active services will receive an email notification on their NIC-admin.

### Schedule Table 

| Milestone                 | Definition                                                                                                          | Date       |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|------------|
| End of Life Announcement | The date of the service status task that announces end of sales and end of support.  | 02/07/2021 |
| End of Sales | Last day to purchase a new service on OVHcloud. | 08/07/2021 |
| End of support | Last day to use services. After this date, all associated services and media will be unavailable. | 26/10/2021 |

### Chronic crisis

![Timeline](images/metrics.eol.timeline.png){.thumbnail}

## End of life scope

This end of life involves:

- all Metrics Data Platform services and solutions (free or paid) worldwide.
- OVHcloud API /me/insights and /metrics/* routes.
- The Grafana web interface ( https://grafana.metrics.ovh.net/ ).

This end of life does not concern:

- Logs Data Platform (100% independent solution).

## Migration options and alternative services

OVHcloud does not currently have managed alternatives or migration services.
Solutions are being developed, such as clusters based on M3DB technology.
Since their availability has not yet been confirmed, we recommend deploying an open-source metrics solution like [Prometheus](https://prometheus.io/).

These solutions involve a manual migration by the customer. OVHcloud will quickly provide guides, and they will be sent to the concerned customers by email.
