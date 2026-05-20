---
title: "OPCP - Technical prerequisites for deployment"
excerpt: "Discover the list of configuration items you need to provide to OVHcloud to prepare and deploy your OPCP platform."
updated: 2026-05-19
---

## Objective

Deploying **On-Prem Cloud Platform (OPCP)** at your site requires gathering a set of configuration items beforehand. Some are mandatory for the initial bootstrap and cannot be changed after installation; others are optional or can be adjusted later. Preparing this list upfront is the **main condition for a fast deployment with no back-and-forth**.

**The aim of this guide is to present, for each prerequisite, what it is used for, how to express it, and whether it is mandatory or optional**.

It is intended for both **architects** preparing the delivery and **administrators** who want to understand what was configured on their platform.

## Requirements

- Having read the [OPCP - Network integration and platform connectivity](/links/hosted-private-cloud/opcp-network-architecture) guide, which describes the network architecture in which these prerequisites take place.
- Knowing the **OPCP subscription model** you have chosen (Self-managed or Fully managed by OVHcloud).
- Having an identified **OVHcloud point of contact** for the delivery, to whom you will transmit the gathered items.

## Instructions

### 1. How to read this guide

For each prerequisite, you will find:

- a **description** explaining its role on the platform,
- whether it is **mandatory or optional**,
- whether it can be **modified after installation**,
- the **associated network flows** when the prerequisite implies a communication between OPCP and a service in your environment,
- a **generic example** to help you express the expected value.

> [!primary]
>
> **Transmission of sensitive items.** Several prerequisites involve secrets: IPsec pre-shared key, S3 access keys, certificate private keys, and so on. These items **must not be transmitted through an insecure channel**. Agree with your OVHcloud point of contact on an appropriate transmission channel for each secret.
>

### 2. OVHcloud interconnection (managed mode only)

| Field | Value |
|---|---|
| Mandatory | **Yes**, in Fully managed by OVHcloud mode |
| Modifiable after installation | Yes |
| Associated flow | Site-to-site IPsec tunnel between your endpoint and OVHcloud |

If you have subscribed to the **Fully managed by OVHcloud** offering, an IPsec tunnel must be established between your site and OVHcloud to enable remote operations and support. You must provide:

- the **public IP address** of your IPsec endpoint,
- the **subnet** you expose on your side (typically the OPCP administration subnet),
- the agreed **pre-shared key (PSK)** for authentication, transmitted through a secure channel.

The default cryptographic parameters are **IKEv2 + PSK + AES-256 + SHA-256 + DH group 14 + PFS**. If your security policy requires different parameters, discuss this with your OVHcloud point of contact before deployment.

> [!warning]
>
> IKEv1 is not supported. Lowering the encryption level below AES-256 is discouraged: only consider it as a last resort.
>

In **Self-managed** mode, this prerequisite does not apply.

### 3. Administration network

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | **No** |
| Associated flow | None (local OPCP configuration) |

Definition of the management network on which OPCP will be positioned. You must provide:

- the **subnet** allocated to OPCP (for example: `172.30.1.0/24`),
- the **default gateway** address (for example: `172.30.1.254`).

This network will host the OPCP controllers and their VIP. It is also the starting point for the outbound flows toward your internal services (NTP, DNS, syslog, S3, LDAP).

> [!warning]
>
> These parameters are **frozen at deployment time**: the subnet and gateway cannot be changed after installation without a full reinstallation. Validate them carefully upfront.
>

### 4. OPCP environment variables

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | **No** |
| Associated flow | None |

OPCP uses several variables to uniquely identify the deployment. They appear in Netbox, in the logs, in the monitoring, and in several other components. You must provide a value for each of them:

| Variable | Role | Example |
|---|---|---|
| `env` | Logical identifier of the OPCP environment | `opcp-prod-0` |
| `region` | Region or geographic zone code | `par` |
| `stage` | Lifecycle stage | `prod`, `staging`, `dev` |
| `org` | Owning organisation | `mycompany` |
| `site` | Physical site identifier | `dc1` |
| `location` | Precise location within the site | `R11-1` |

> [!primary]
>
> **OVHcloud does not impose any naming convention.** Adopt the nomenclature that matches your internal references. Choose it carefully: these values will be frozen and used by many components.
>

### 5. OPCP controller names and addresses

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | **No** |
| Associated flow | None (local OPCP configuration) |

For each **OPCP Core Controller** in your deployment, provide:

- the **hostname** (FQDN or short name depending on your convention),
- the **IP address** on the administration network.

In a 3-controller configuration, also provide the **VIP (Virtual IP)** shared between the three nodes, which will be the single entry point to the OpenStack APIs and Horizon.

Example in a 3-controller configuration:

| Element | Name | IP |
|---|---|---|
| Controller 0 | `opcp-controller-0` | `172.30.1.10` |
| Controller 1 | `opcp-controller-1` | `172.30.1.11` |
| Controller 2 | `opcp-controller-2` | `172.30.1.12` |
| VIP | `opcp.example.com` | `172.30.1.5` |

### 6. Certificates

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | Yes |
| Associated flow | None (local OPCP configuration) |

OPCP must present valid TLS certificates for its interfaces (OpenStack API, Horizon, internal services). Three options are supported; you must choose one of them before deployment.

#### Option A — Self-signed certificate authority generated by OPCP

OPCP generates its own internal certificate authority and signs the required certificates. **You do not need to provide anything.** Rotation is handled automatically by CertManager.

This is the simplest option, suitable if your security policy accepts a CA internal to the OPCP perimeter. You will however need to distribute OPCP's root certificate to your clients in order to avoid security warnings.

#### Option B — Intermediate certificate authority provided by the customer

You provide an intermediate CA derived from your internal PKI. OPCP uses it to sign the service certificates. You must transmit:

- the **intermediate CA certificate**,
- the associated **private key** (transmitted through a secure channel agreed with your OVHcloud point of contact).

The rotation of certificates issued under this intermediate remains handled by CertManager on the OPCP side.

#### Option C — Let's Encrypt

OPCP requests certificates automatically from Let's Encrypt. This option requires:

- a compatible **validation method** (HTTP-01 or DNS-01) reachable from OPCP,
- the **associated prerequisites** for this method (public resolution of the domain, outbound access to ACME servers, and so on).

Specify with your OVHcloud point of contact the method you have chosen and the configurations to put in place on your side.

### 7. NTP — Time synchronisation

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your NTP servers — UDP/123 |

OPCP needs a reliable time source for the correct operation of all of its components (log consistency, certificate validity, quorum election, and so on). Provide:

- one or more **IP addresses** of NTP servers, **or** **DNS names** if DNS resolution is configured.

Example:

- `172.30.1.200` / `ntp1.example.com`
- `172.30.1.201` / `ntp2.example.com`

Plan for opening the **UDP/123** flow from the OPCP administration network to your NTP servers.

### 8. DNS — Domain delegation to OPCP

| Field | Value |
|---|---|
| Mandatory | **Yes** |
| Modifiable after installation | **No** (the DNS forwarder can be adapted as long as the FQDNs remain stable) |
| Associated flow | Your DNS resolvers → OPCP VIP — UDP/53 and TCP/53 |

OPCP exposes its interfaces through FQDNs under a domain that you delegate to it. You must provide:

- the **domain name** allocated to this OPCP platform (for example: `opcp01.example.com`).

On the DNS infrastructure side, you must create a **forwarder** from your internal resolvers to the OPCP VIP, so that any request for `*.opcp01.example.com` is resolved by OPCP.

### 9. DNS resolvers — External resolution

| Field | Value |
|---|---|
| Mandatory | Optional |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your DNS resolvers — UDP/53 |

If OPCP needs to resolve **external** domain names (for example the FQDN of your S3 endpoint or your LDAP directory), provide the address of one or more DNS resolvers.

Example:

- `172.30.1.100`
- `172.30.1.101`

This prerequisite is only needed if you enable integrations relying on external FQDNs (S3 backup, long-term metrics, LDAP federation, and so on). For a strictly air-gapped platform configured by IP, it can be omitted.

### 10. Syslog — Log centralisation

| Field | Value |
|---|---|
| Mandatory | Optional but **recommended** |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your syslog servers — UDP/514 or TCP/514 |

OPCP can forward its logs to a centralised syslog infrastructure for long-term retention and analysis. Provide:

- the **IP address** or FQDN of the syslog server (for example: `172.30.1.250`),
- the **listening port**,
- the **protocol**: TCP or UDP.

> [!primary]
>
> Without an external syslog, OPCP keeps the logs **locally** with a default retention of **7 days** and a maximum volume of **50 GB**. Beyond that, the oldest logs are deleted. For any compliance requirement imposing longer retention, configure an external syslog.
>

### 11. Backup — S3 endpoint

| Field | Value |
|---|---|
| Mandatory | Optional but **recommended** |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your S3 endpoint — TCP/443 |

OPCP can back up the infrastructure state (configurations, control plane state, metadata) to an S3-compatible endpoint that you provide. You must transmit:

- the **S3 endpoint** (for example: `s3.example.com:443`),
- the **Access Key**,
- the **Secret Key**,
- the **bucket name** dedicated to backups (for example: `opcp01-backup-dc1`),
- the **S3 region name** (for example: `paris`).

The access keys must be transmitted through a secure channel agreed with your OVHcloud point of contact.

> [!warning]
>
> Without an external backup, you have no recovery mechanism in the event of a major incident on the platform. This option is strongly recommended for any production environment.
>

### 12. Long-term metrics storage — S3 endpoint

| Field | Value |
|---|---|
| Mandatory | Optional but **recommended** |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your S3 endpoint — TCP/443 |

OPCP continuously collects metrics on the platform. To retain them beyond the local retention window, you can offload them to an S3 bucket. The elements to provide are the same as for the backup, but the bucket must be **separate**:

- **S3 endpoint**,
- **Access Key**,
- **Secret Key**,
- **bucket name** dedicated to metrics (for example: `opcp01-metrics-dc1`),
- **region name**.

You can reuse the same endpoint and the same S3 credentials as for the backup, provided you use a different bucket.

### 13. LDAP — Identity federation

| Field | Value |
|---|---|
| Mandatory | Optional |
| Modifiable after installation | Yes |
| Associated flow | OPCP administration network → your directory — TCP/636 (LDAPS) |

OPCP integrates Keycloak as an identity provider. If you wish to federate access with your corporate directory (Active Directory or another LDAP server), provide:

- the **IP addresses** or FQDNs of your LDAP servers (for example: `ldap.example.com`, `10.3.0.5`, `10.3.0.6`),
- the **listening port** (typically `636` for LDAPS).

Without federation, users are managed directly in the Keycloak embedded in OPCP.

### 14. SSH public key

| Field | Value |
|---|---|
| Mandatory | Optional but **recommended** |
| Modifiable after installation | Yes |
| Associated flow | None (local OPCP configuration) |

To access the OPCP controllers after the initial bootstrap (in particular to use `opcp-cli` and `opcp-diag`), provide one or more **SSH public keys** of the customer-side administrators.

In **Fully managed by OVHcloud** mode, this key gives the customer access to the administration tools in addition to the access of the OVHcloud teams.

> [!primary]
>
> If no key is provided, a new SSH key pair will be generated during deployment. To keep control of your access from delivery onwards, it is preferable to provide the public key yourself.
>

## Summary

| Prerequisite | Status | Modifiable after installation |
|---|---|---|
| OVHcloud interconnection (IPsec) | Mandatory in managed mode | Yes |
| Administration network | Mandatory | **No** |
| OPCP environment variables | Mandatory | **No** |
| Controller names and addresses | Mandatory | **No** |
| Certificates | Mandatory | Yes |
| NTP | Mandatory | Yes |
| DNS (domain delegation) | Mandatory | **No** |
| DNS resolvers | Optional | Yes |
| Syslog | Optional but recommended | Yes |
| S3 backup | Optional but recommended | Yes |
| Long-term metrics S3 storage | Optional but recommended | Yes |
| LDAP | Optional | Yes |
| SSH public key | Optional but recommended | Yes |

Pay particular attention to the prerequisites **not modifiable after installation**: they will shape your platform for the long term.

## Go further

- [OPCP - Network integration and platform connectivity](/links/hosted-private-cloud/opcp-network-architecture)
- [Getting started with your OPCP](/links/hosted-private-cloud/opcp-getting-started)

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
