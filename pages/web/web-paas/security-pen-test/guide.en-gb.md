---
title: Vulnerability Scanning and Penetration Testing
slug: security-pen-test
section: Security
order: 8
---

**Last updated 7th January 2022**


## Objective  

Web PaaS understands the need for application owners to ensure the integrity, and standards compliance, of their applications. Because there could be adverse impacts to other clients which would violate our terms of service, we only permit certain types of tests.

Currently, we do not offer the possibility to activate/deactivate the Intrusion Prevention System (IPS) on demand.
On Web PaaS's side, there is no automatic ip or range blocking. Blocking IP's (or not) is usually left to the appreciation of the Oncall engineer based on the specific circumstances.

## Approved Activities

* Vulnerability scanning of your web application. You are free to perform this as often as required without approval from Web PaaS.
* Web application penetration tests that do not result in high network load.  You are free to perform this as often as required without approval from Web PaaS.
* Application level load testing that do not result in high network load. If the load test may result in the application to be down, we ask to open an urgent ticket as a courtesy 30 to 60 minutes before the load test begins. Typically application level load tests will trigger one or many NodePing alerts. Knowing that a load test is in progress will allow the on-call engineer to immediately snooze alerts.

## Prohibited Activities

* Vulnerability scanning of web applications which you do not own.
* Denial of Service tests and any other type of load testing which results in heavy network load.
* Social engineering tests of Web PaaS services including falsely representing yourself as a Web PaaS employee.
* Infrastructure penetration tests for non-Dedicated-Enterprise customers. This includes SSH and database testing.

## Rate Limits

* Please limit scans to a maximum of 20 Mbps and 50 requests per second in order to prevent triggering denial of service bans.


