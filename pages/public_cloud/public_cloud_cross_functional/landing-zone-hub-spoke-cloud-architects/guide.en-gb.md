---
title: "Hub and Spoke Landing Zone on OVHcloud Public Cloud"
excerpt: "Deploy a production-ready hub and spoke landing zone on OVHcloud Public Cloud: OPNsense HA firewall, IAM, vRack, IaC, logging, and lifecycle management."
updated: 2026-04-07
---

## Objective

This guide walks cloud architects through deploying a full hub and spoke landing zone on OVHcloud Public Cloud, using OpenTofu or Terraform as the infrastructure-as-code engine.

It covers project layout, IAM governance, vRack network topology, HA OPNsense firewall, security hardening, centralised logging, billing control, and spoke lifecycle management.

**This guide explains how to build a production-ready hub and spoke landing zone on OVHcloud Public Cloud, from initial architecture decisions to ongoing operations.**

## Requirements

- An active OVHcloud account with API credentials (Application Key, Application Secret, Consumer Key)
- Public Cloud access with sufficient quota to create projects, vRack, instances, and floating IPs
- [OpenTofu](https://opentofu.org/) ≥ 1.6 or Terraform ≥ 1.5 installed on your workstation
- Basic understanding of networking concepts (CIDR, VLAN, IPsec/IKEv2)
- Familiarity with the [OVHcloud Terraform provider](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform)

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### 1. What is a Landing Zone and Why Hub and Spoke?

A **landing zone** is a pre-configured cloud environment that provides the security, governance, networking, and identity foundations your workloads need before deployment. Without one, organisations face configuration drift, security gaps, and uncontrolled costs.

For a full conceptual introduction, see [Understanding Landing Zones](/pages/public_cloud/public_cloud_cross_functional/whats_is_landing_zone).

The **hub and spoke** topology extends this foundation with strong network isolation:

| Component | Role |
|-----------|------|
| **Hub project** | Hosts the HA OPNsense firewall cluster, Internet gateway (OVH Gateway), and the centralised security perimeter |
| **Spoke project** | Isolated per application, domain, or business unit; each carries its own OPNsense cluster and connects back to the hub via IPsec/VTI |
| **vRack** | OVHcloud private backbone extending across projects, regions, and services |

**Key benefits:**

- **Blast radius containment**: a compromise in one spoke does not laterally reach others without traversing hub firewall rules.
- **Centralised policy enforcement**: all Internet egress, inter-spoke traffic, and admin VPN terminate at the hub firewall.
- **Sovereignty**: European operator, EU data localisation, self-operated firewall with no dependence on a US-managed firewall-as-a-service.
- **Portability**: OPNsense is a well-known on-premises product; operational skills transfer directly.

> [!primary]
> Looking for a ready-made IaC implementation? The open-source [hub-and-spoke-public-cloud](https://github.com/ovhcloud-examples/hub-and-spoke-public-cloud) project provides a complete Terraform/OpenTofu reference that automates the architecture described in this guide.

---

### 2. Architecture Overview

#### 2.1 Project layout

Each environment or workload gets its own Public Cloud project. A consistent naming convention enables IAM scoping, billing isolation, and automation:

```
{domain}_{application}_{environment}

# Examples
infra_hub_prod
finance_invoicing_qa
it_monitoring_prod
marketing_analytics_dev
```

The **Day-1 deployment** provisions two projects:
- `infra_hub_prod` — the hub project
- `infra_spoke_qa` — an initial QA spoke for validating the topology

Additional spokes are added on **Day 2**, each with its own isolated IaC state and resource stack.

#### 2.2 Network topology

```
Internet
    │
    ▼
[OVH Gateway — WAN]
    │
[Hub project — vRack]
    ├── OPNsense HA cluster (active/passive CARP)
    │       ├── WAN interface (public IP via Floating IP + CARP VIP)
    │       ├── LAN interface (private hub subnet)
    │       └── HASYNC interface (HA state replication)
    │
    ├── IPsec IKEv2 / VTI ──── [Spoke A project]
    │                               └── OPNsense spoke cluster
    │                                       ├── WAN (vRack VLAN)
    │                                       ├── LAN (spoke workloads)
    │                                       └── HASYNC
    └── IPsec IKEv2 / VTI ──── [Spoke B project]
                                    └── OPNsense spoke cluster
```

Each spoke gets a **unique set** of VLAN IDs and CIDRs. Plan these before Day 1:

| Segment | VLAN range | CIDR example | Notes |
|---------|-----------|--------------|-------|
| Hub WAN | 100 | 192.168.100.0/24 | Shared with all spokes |
| Spoke A WAN | 110 | 192.168.110.0/24 | Unique per spoke |
| Spoke A LAN | 111 | 10.10.1.0/24 | Workloads |
| Spoke A HASYNC | 112 | 10.10.255.0/30 | OPNsense replication |
| Spoke A VTI | — | 10.255.0.0/30 | IPsec virtual tunnel |

> [!warning]
> VLAN IDs and CIDR blocks must be globally unique across all spokes in the same vRack. Overlapping ranges will break routing. Assign them in your network design document before deploying any infrastructure.

#### 2.3 Region choice

OVHcloud Public Cloud is available across multiple European and international regions (GRA, SBG, WAW, BHS, etc.). Your region choice affects:

- **Data localisation**: for GDPR/NIS2 compliance, choose EU regions.
- **Instance flavour availability**: B3-series (CPU-optimised) instances recommended for OPNsense are not available in all regions.
- **Latency**: co-locate hub and spokes in the same region for low-latency IPsec.

<!-- DRAFT: To verify — confirm the recommended OPNsense instance flavour (e.g. b3-8) is available in the target region before publishing -->

---

### 3. IAM — Identity and Access Management

For a detailed walkthrough of OVHcloud IAM, see [Securing & Structuring Public Cloud Projects](/pages/public_cloud/public_cloud_cross_functional/securing_and_structuring_projects).

#### 3.1 Account security baseline

Before creating any project:

- Enable **Two-Factor Authentication (2FA)** on the root account: Control Panel > top-right initials > `Security`{.action}.
- Add a **backup email address** (must differ from the primary).
- Set a strong, unique password (see [Password management guide](/pages/account_and_service_management/account_information/manage-ovh-password)).

#### 3.2 Local users, groups, and RBAC policies

Create dedicated IAM groups and assign scoped policies to each Public Cloud project:

| Group | Projects | Actions | Notes |
|-------|----------|---------|-------|
| `platform_admin` | All | `globalWriteAccess` | Infrastructure team only |
| `{domain}_developer` | `{domain}_*_dev`, `{domain}_*_staging` | `globalWriteAccess` / `globalReadAccess` | Per domain |
| `{domain}_sre` | `{domain}_*_staging`, `{domain}_*_prod` | `globalWriteAccess` | Per domain |
| `auditor` | All | `globalReadAccess` | Compliance/security team |

To create a policy:

1. Go to `IAM`{.action} > `Policies`{.action} > `Create a policy`{.action}.
2. Name it following the `{resource}-RO` or `{resource}-RW` pattern.
3. Assign the target group, product type (`Public Cloud project`), resource, and permission.

#### 3.3 Identity federation (optional)

Connect your corporate identity provider to OVHcloud IAM so users authenticate with their existing credentials:

- [AD FS (SAML)](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs)
- [Microsoft Entra ID](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-azure-ad)
- [Okta](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-okta)
- [Google Workspace](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-google-workspace)

Groups defined in your IdP are included in the SAML assertion and mapped to OVHcloud IAM groups.

#### 3.4 Service accounts for IaC

Create a dedicated service account (not your personal account) to authenticate your IaC tool against the OVHcloud API. Grant it the minimum permissions required:

- Create and manage Public Cloud projects
- Create and manage vRack, attach projects
- Create OpenStack users within projects

Generate API credentials using the [OVHcloud API token generator](/links/api). Store the Application Key, Application Secret, and Consumer Key securely — never in source control.

#### 3.5 OpenStack users per project

Create at least two OpenStack users per project with separate roles:

| Role | Purpose |
|------|---------|
| `admin` | Full control for IaC provisioning (networks, instances, security groups) |
| `compute_operator` | Restricted runtime operations (start/stop instances, read logs) |

This separation prevents runtime workloads from accidentally modifying network or security configurations.

#### 3.6 IaC credentials governance

> [!warning]
> Never commit files containing real credentials (variable files, `.env`, secrets) to version control.

Recommended patterns:

- **Local development**: keep variable files outside the repository or in a `.gitignore`d path.
- **CI/CD pipelines**: inject credentials as environment variables via your pipeline secrets store (HashiCorp Vault, GitHub Secrets, GitLab CI Variables, etc.).
- **Remote state**: use an S3<sup>1</sup>-compatible backend (OVHcloud Object Storage) with server-side encryption or client-side state encryption enabled. Isolate each deployment (hub, each spoke) in its own state file.

---

### 4. Deploy the Architecture — Day 1

> [!primary]
> The steps below describe what to provision and why, using technology-agnostic language. You can implement them via the OVHcloud Control Panel, OpenStack CLI, OVHcloud API, or any IaC tool. If you prefer a ready-made Terraform/OpenTofu reference implementation, see the [hub-and-spoke-public-cloud](https://github.com/ovhcloud-examples/hub-and-spoke-public-cloud) open-source project, which automates all the steps below.

#### 4.1 Create Public Cloud projects

Create at least two projects for Day 1:

- **Hub project** — hosts the firewall cluster, Internet gateway, and shared services.
- **Spoke-QA project** — an initial spoke for validating the topology before going to production.

Follow the naming convention defined in section 2.1. Each project gets its own billing boundary, IAM scope, and OpenStack credential set.

> [!primary]
> After creating a project, OVHcloud requires a short propagation window (typically 30–60 seconds) before a vRack can be successfully attached. Account for this in any automation.

#### 4.2 Create and attach vRack, plan VLANs

A [vRack](/pages/network/vrack/vrack_main_doc) extends a private layer-2 backbone across projects and OVHcloud services. Each project needs its own vRack attached before private networks can be created.

**Attachment order:**

1. Create a vRack for the hub project and attach the hub project to it.
2. Create a vRack for the spoke-QA project and attach spoke-QA to it.
3. Before creating private networks, plan and record the full VLAN and CIDR table (see section 2.2). This is irreversible — changing VLANs later requires reprovisioning.

**Why a separate vRack per project?** It preserves project-level network isolation: traffic between projects must traverse the firewall, not bypass it via a shared vRack segment.

#### 4.3 Provision the hub OPNsense HA cluster

The hub firewall cluster is the most critical component. Provision it before any spoke:

1. **3 private networks** in the hub project, each on a distinct VLAN:
    - **WAN network** — connects to the OVH Gateway for Internet egress/NAT
    - **LAN network** — internal hub subnet for shared services (bastion, logging, DNS)
    - **HASYNC network** — dedicated to OPNsense HA state replication (CARP/pfsync); should be on an isolated VLAN with no other traffic

2. **OVH Gateway** on the WAN network — provides NAT and Internet routing for the hub project. See the [Private Network with Gateway guide](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) for setup steps.

3. **Two OPNsense instances** (primary and secondary) — deploy them from the OPNsense ISO or a marketplace image. Recommended minimum sizing: 4 vCPUs / 8 GB RAM (`b3-8` on OVHcloud) for small/medium deployments. Attach each instance to all three networks (WAN, LAN, HASYNC).

4. **Floating IP** — attach a public Floating IP to the primary instance's WAN port. This is the management IP (SSH + OPNsense web UI) and the IPsec endpoint for all spokes.

5. **CARP VIPs** — configure a CARP Virtual IP on the WAN interface (shared between primary and secondary). All spokes use this VIP as the hub IPsec peer identity, so it remains stable across failovers.

6. **HASYNC and pfsync** — configure OPNsense HA synchronisation over the HASYNC interface so firewall state, IPsec SAs, and configuration replicate automatically.

> [!warning]
> OpenStack port security must be **disabled** on vRack-backed networks that carry CARP traffic. Port security filters gratuitous ARPs, which CARP relies on for VIP failover. Disable it at the network level using the OpenStack CLI or API:
> ```bash
> openstack network set --disable-port-security <network_id>
> ```
> Security is then enforced entirely by OPNsense — ensure your firewall rules are in place before disabling port security.

#### 4.4 Security baseline

Apply the following controls before exposing the hub to any traffic:

**OpenStack security group on the hub WAN port** — restrict inbound access to the Floating IP:

| Protocol | Port(s) | Source | Purpose |
|----------|---------|--------|---------|
| TCP | 22 | Admin IP/CIDR only | SSH to OPNsense |
| TCP | 443 | Admin IP/CIDR only | OPNsense web UI |
| UDP | 500, 4500 | Spoke WAN CIDRs | IPsec IKEv2 |

All other inbound traffic is blocked at the OpenStack layer before reaching OPNsense.

**SSH keys** — inject the operator SSH public key into all instances via cloud-init at provisioning time. Do not use password-based SSH.

**OPNsense admin password** — use a strong, randomly generated password. Pass it as a bcrypt hash to cloud-init so the plaintext never appears in instance metadata. Store it in your secrets manager, not in source control.

**IaC state files** — if you use Terraform or OpenTofu, store state in an S3-compatible backend (OVHcloud Object Storage) with server-side encryption. State files may contain sensitive outputs (floating IPs, API keys, passwords).

#### 4.5 Record hub parameters for spoke onboarding

Once the hub is deployed, record these values — every spoke will need them:

| Parameter | Description |
|-----------|-------------|
| Hub Floating IP | SSH/HTTPS management access, also used to reach OPNsense API |
| Hub WAN CARP VIP | IPsec peer identity for all spokes (stable across failovers) |
| Hub WAN CIDR | Added as a remote subnet in each spoke's IPsec child SA |
| Hub OPNsense API credentials | Key/secret pair for automated spoke peering (if using the REST API) |

Store these in your team's shared secrets manager or secure runbook.

---

### 5. Logging and Monitoring

#### 5.1 Centralised log collection

Configure OPNsense to forward syslog to OVHcloud **Logs Data Platform (LDP)**:

1. In OPNsense: `System`{.action} > `Log Files`{.action} > `Remote Logging`{.action}.
2. Set the syslog target to your LDP input endpoint (UDP/TCP 514 or GELF).
3. Enable logging for firewall rules, IPsec, and system events.

Follow the [LDP quick start guide](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) to provision your log stream and Kibana/OpenSearch dashboard.

#### 5.2 Long-term log archival with S3

Provision two OVHcloud Object Storage buckets in the hub project:

- A **primary bucket** (Standard storage class) in the main region — receives active log ingestion from OPNsense and other services.
- A **backup bucket** (Infrequent Access) in a second region — receives logs via **cross-region replication** for disaster recovery and compliance.

For regulated workloads, enable **Object Lock in Compliance Mode** on the backup bucket to enforce a minimum retention period (e.g. 90 days) and prevent premature deletion.

Apply a lifecycle policy on both buckets to transition objects to Infrequent Access after 30 days and expire temporary data (e.g. debug logs) after a defined period.

#### 5.3 Metrics and alerting

<!-- DRAFT: To complete — add specific Prometheus/Grafana or Datadog integration steps for OPNsense metrics export (e.g. via OPNsense Telegraf plugin or SNMP exporter) -->

Recommended alerting thresholds:

| Alert | Condition | Severity |
|-------|-----------|----------|
| IPsec tunnel down | No SA for spoke | Critical |
| Firewall CPU > 80% | Sustained 5 min | Warning |
| Hub instance unreachable | Floating IP no response | Critical |
| S3 replication lag | > 1 hour | Warning |
| Failed login attempts | > 10 in 5 min | Warning |

---

### 6. Day 2 — Onboarding a New Spoke

> [!primary]
> Each spoke is fully independent: its own project, vRack, OPNsense cluster, and IaC state. A failure or misconfiguration in one spoke has no effect on others. If you are using a Terraform/OpenTofu reference implementation, create an isolated state backend per spoke before provisioning.

#### 6.1 Prerequisites

Before adding a spoke, confirm you have:

- [ ] Hub deployed and HTTPS-accessible at `https://<hub_floating_ip>:8443`
- [ ] Hub WAN CARP VIP and hub WAN CIDR noted (from Day-1, section 4.5)
- [ ] A strong, unique PSK generated for the new IPsec tunnel
- [ ] Unique VLAN IDs and CIDRs assigned from your network plan (section 2.2)
- [ ] A unique IPsec request ID (`reqid`) assigned — must not overlap with any existing spoke tunnel

#### 6.2 Provision spoke resources

Perform these steps in order, waiting for each OVHcloud API operation to complete before proceeding:

1. **Create a Public Cloud project** for the spoke (follow naming convention from section 2.1).
2. **Create a vRack** and attach the spoke project to it.
3. **Create three private networks** in the spoke project, each on a distinct VLAN (WAN, LAN, HASYNC) — values from your network plan.
4. **Deploy 2 OPNsense instances** (primary and secondary) attached to all three networks. Use the same sizing as the hub.
5. **Configure CARP** on the spoke WAN and LAN interfaces, with HASYNC replication between primary and secondary.
6. **Create OpenStack users** (admin and compute_operator) for the spoke project.

No Floating IP is needed on spoke instances — spoke management access is tunnelled through the hub (see section 6.5).

#### 6.3 Configure hub–spoke IPsec peering

Once both ends are running, configure the IKEv2/IPsec tunnel. This involves symmetric configuration on both the **spoke OPNsense** and the **hub OPNsense**:

**On the spoke OPNsense** (`VPN`{.action} > `IPsec`{.action} > `Connections`{.action}):

1. Create a new IKEv2 connection:
    - Local ID: spoke WAN CARP VIP
    - Remote gateway: hub WAN CARP VIP
    - Authentication: Pre-Shared Key (PSK)
2. Define a child SA (Phase 2):
    - Local network: spoke LAN CIDR
    - Remote network: hub WAN CIDR
    - Unique `reqid` matching the one assigned in your network plan
3. Add a VTI interface bound to the tunnel and assign a `/30` link CIDR.
4. Add a static route: hub WAN CIDR via the VTI interface.

**On the hub OPNsense** (repeat symmetrically for the new spoke):

1. Add a PSK entry for the spoke WAN CARP VIP.
2. Create an IKEv2 connection mirroring the spoke's configuration.
3. Add a child SA for the spoke LAN CIDR.
4. Add a VTI interface with the corresponding `/30` link CIDR (opposite end).
5. Add a static route: spoke LAN CIDR via the spoke VTI interface.
6. Apply changes: `VPN`{.action} > `IPsec`{.action} > `Apply changes`{.action}.

> [!primary]
> If you use the OPNsense REST API (e.g. via the `Mastercard/restapi` Terraform provider), all of the above hub-side steps can be automated. The spoke cluster must be fully booted and its cloud-init complete before the API is reachable — add a wait step in your automation.

#### 6.4 Verify the tunnel

SSH to the hub's Floating IP and confirm the tunnel is established:

```bash
# SSH to hub
ssh root@<hub_floating_ip>

# List active IPsec Security Associations
swanctl --list-sas

# Verify the VTI interface is up
ip link show vti<N>

# Confirm the route to the spoke LAN is present
ip route show | grep <spoke_lan_cidr>
```

> [!primary]
> If the tunnel does not come up immediately, both OPNsense clusters may still be completing their initialisation. Wait 2–3 minutes, then manually trigger a rekey: `VPN`{.action} > `IPsec`{.action} > `Status`{.action} > `Connect`{.action} on either end.

#### 6.5 ProxyJump for SSH access to spoke instances

Spoke instances have no direct public IP. Access them through the hub floating IP:

```bash
# ~/.ssh/config
Host hub
  HostName <hub_floating_ip>
  User root
  IdentityFile ~/.ssh/id_rsa

Host spoke-*.internal
  User root
  IdentityFile ~/.ssh/id_rsa
  ProxyJump hub
```

```bash
# Then connect directly:
ssh spoke-app01.internal
```

For audited access at scale, deploy [OVHcloud Bastion](https://ovh.github.io/the-bastion/index.html) on a dedicated instance in the hub project.

#### 6.6 Onboarding checklist

- [ ] VLAN IDs and CIDRs recorded in network design document and assigned uniquely
- [ ] IPsec `reqid` incremented and recorded
- [ ] Spoke IaC state isolated from hub and other spokes
- [ ] IaC variable files containing credentials stored outside version control
- [ ] Spoke project and vRack provisioned
- [ ] OPNsense HA cluster deployed on spoke
- [ ] IPsec configuration applied on both hub and spoke
- [ ] IPsec SA visible on hub (`swanctl --list-sas`)
- [ ] VTI interface up and spoke LAN route present on hub
- [ ] Spoke LAN reachable from hub via ping
- [ ] IAM policies created for spoke project (developer + SRE groups)
- [ ] OpenStack users provisioned and credentials distributed to spoke team
- [ ] Logging forwarded to LDP
- [ ] SSH ProxyJump or Bastion access configured and tested

---

### 7. Lifecycle — Scale, Evolve, Delete

#### 7.1 Scaling — adding spokes

Repeat the Day-2 process (section 6) for each new spoke. Every spoke is fully independent: its own project, vRack, OPNsense cluster, and IaC state. A failure or change in one spoke has no effect on others.

#### 7.2 Removing a spoke

Decommission in reverse order of provisioning:

1. **Remove hub-side peering** — on the hub OPNsense, delete the IPsec connection, PSK, child SA, VTI interface, and static route for the spoke.
2. **Destroy spoke resources** — delete the OPNsense instances, private networks, vRack, and Public Cloud project. If using IaC, run a destroy operation scoped to the spoke's state.
3. **Verify on hub** — after destruction, confirm no orphaned objects remain on hub OPNsense:
    - `VPN`{.action} > `IPsec`{.action} > `Connections`{.action}: spoke connection gone
    - `VPN`{.action} > `IPsec`{.action} > `Pre-Shared Keys`{.action}: spoke PSK gone
    - `Interfaces`{.action}: spoke VTI gone
    - `System`{.action} > `Routes`{.action}: spoke LAN route gone
4. **Update network design document** — release the VLAN IDs and CIDRs for reuse.

#### 7.3 Updating OPNsense

OPNsense updates (security patches, minor releases) follow a CARP failover procedure:

1. Ensure CARP is operational: `Interfaces`{.action} > `Virtual IPs`{.action} > `Status`{.action}.
2. Set the **secondary** node to CARP maintenance mode (demote to BACKUP).
3. Update the secondary: `System`{.action} > `Firmware`{.action} > `Updates`{.action}.
4. Reboot secondary; verify it rejoins CARP as BACKUP.
5. Perform a controlled failover: promote secondary to MASTER temporarily.
6. Update and reboot primary.
7. Restore original MASTER/BACKUP roles.

> [!warning]
> During step 3–4, all traffic traverses the primary node. Schedule maintenance during low-traffic windows and confirm IPsec tunnels remain established.

#### 7.4 Quarterly review checklist

| Area | Action |
|------|--------|
| IAM | Audit user/group memberships; remove leavers; rotate service account API keys |
| Firewall rules | Review OPNsense rules; remove unused rules; validate admin source IPs are still accurate |
| IPsec | List active SAs; confirm all spokes are connected; check re-key intervals |
| IaC state | Verify remote state is accessible and encrypted; test a restore; confirm no secrets drift |
| OPNsense firmware | Check for security advisories; schedule patching (see CARP procedure in section 7.3) |
| OVHcloud changelog | Review new features (new regions, instance types, IAM capabilities) |
| Costs | Review per-project spend; remove unused floating IPs, volumes, instances |
| Logging | Verify LDP ingestion rate; check S3 replication health; confirm alert rules fire |

---

### 8. Billing, Cost Centres, and Carbon

#### 8.1 Per-project cost isolation

OVHcloud Public Cloud billing is scoped per project. Each spoke project gives you a clean cost boundary for a team, application, or business unit.

Export cost data via the OVHcloud API:

```bash
# List consumption for a project
curl -s -X GET "https://eu.api.ovh.com/v1/cloud/project/{project_id}/usage/current" \
  -H "X-Ovh-Application: $OVH_APPLICATION_KEY" \
  -H "X-Ovh-Consumer: $OVH_CONSUMER_KEY" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: $SIG"
```

See [Public Cloud billing guide](/pages/public_cloud/public_cloud_cross_functional/analyze_billing) for full API details and CSV export options.

#### 8.2 Tagging strategy

Tag all resources consistently at provisioning time, for example:

```hcl
metadata = {
  environment  = "prod"
  owner        = "platform-team"
  cost-centre  = "infra-shared"
  project-id   = "hub"
}
```

Tags enable cost allocation reports, automated cleanup policies, and compliance audits.

#### 8.3 Budget alerts

Set up spending thresholds in the OVHcloud Control Panel:

1. Go to `Billing`{.action} > `Budget alerts`{.action}.
2. Define a monthly threshold per project.
3. Configure email or webhook notification when 80% and 100% of the budget is reached.

#### 8.4 Carbon footprint

OVHcloud data centres in Europe (GRA, SBG, WAW, LIM) have among the lowest Power Usage Effectiveness (PUE) ratings in the industry, with renewable energy commitments in several sites.

<!-- DRAFT: To verify — add a link to OVHcloud's current carbon/sustainability reporting page once it is publicly available -->

To minimise your carbon impact:

- Prefer European regions with declared renewable energy sourcing.
- Right-size instances: avoid over-provisioned OPNsense flavours; `b3-8` is sufficient for most spoke workloads.
- Use Object Storage lifecycle policies to transition cold logs to Infrequent Access and expire temporary data.
- Decommission unused spokes rather than leaving idle infrastructure running.

---

### 9. Professional Services

If you need design assistance, a guided deployment, or a security review for your landing zone, OVHcloud Professional Services can help.

[Request a quote from OVHcloud Professional Services](/links/professional-services)

---

## Go further

- [Understanding Landing Zones](/pages/public_cloud/public_cloud_cross_functional/whats_is_landing_zone)
- [Architecture Reference — Building a Landing Zone with OVHcloud Public Cloud](/pages/public_cloud/public_cloud_cross_functional/landing_zone_migration)
- [Best Practices for securing & structuring OVHcloud Public Cloud Projects](/pages/public_cloud/public_cloud_cross_functional/securing_and_structuring_projects)
- [How to use Terraform with OVHcloud Public Cloud](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform)
- [Configuring vRack for Public Cloud using the OVHcloud API](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api)
- [Getting started with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Join our [community of users](/links/community).

_<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc._
