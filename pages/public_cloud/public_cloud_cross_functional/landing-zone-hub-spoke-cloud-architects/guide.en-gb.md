---
title: "Hub and Spoke Landing Zone on OVHcloud Public Cloud"
excerpt: "Deploy a production-ready hub and spoke landing zone on OVHcloud Public Cloud using a single shared vRack with transit routing: HA firewall, governance, private networking, IaC automation, and lifecycle management."
updated: 2026-04-28
---

## Objective

This guide walks cloud architects through deploying a hub and spoke landing zone on OVHcloud Public Cloud using a **single shared vRack with transit routing** — the simplest hub and spoke topology available on OVHcloud.

It covers project layout, governance, private network topology, network security, centralised logging, billing control, and spoke lifecycle management.

**This guide explains how to build a production-ready hub and spoke landing zone on OVHcloud Public Cloud, from initial architecture decisions to ongoing operations.**

## Requirements

- An active OVHcloud account with API credentials (Application Key, Application Secret, Consumer Key)
- Public Cloud access with sufficient quota to create projects, a vRack, instances, and a Floating IP
- [OpenTofu](https://opentofu.org/) ≥ 1.11.4 or Terraform ≥ 1.5 installed on your workstation
- Basic understanding of networking concepts (CIDR, VLAN, routing)
- Familiarity with the [OVHcloud Terraform provider](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform)

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### 1. Landing Zone and Hub-Spoke Architecture

A **landing zone** is a pre-configured cloud environment that provides the security, governance, networking, and identity foundations your workloads need before deployment. Without one, organisations face configuration drift, security gaps, and uncontrolled costs.

OVHcloud supports several landing zone topologies (flat, segmented, hub and spoke). For a full conceptual overview, see [Understanding Landing Zones](/pages/public_cloud/public_cloud_cross_functional/whats_is_landing_zone). This guide focuses on **hub and spoke with a single shared vRack**, where all projects share one private network backbone and route all traffic through a centralised HA firewall at the hub.

In this topology, each component has a distinct role:

| Component | Role |
|-----------|------|
| **Hub** | Central control and egress point. Hosts the sole OPNsense HA firewall cluster, Internet gateway, and shared services. All spoke traffic — north-south and east-west — transits through the hub. |
| **Spoke** | Isolated Public Cloud project for a workload, team, or business unit. Connected to the hub via an OpenStack Neutron router on the shared transit VLAN. No local firewall — isolation is enforced entirely by hub rules. |
| **Shared vRack** | Single OVHcloud layer-2 backbone shared across all projects. All VLANs live in this one L2 domain — VLAN IDs must be globally unique. |
| **Transit VLAN** | The hub LAN subnet (VLAN 200, 192.168.10.0/24). Each spoke attaches a Neutron router here with a unique IP, establishing the routing path to the hub firewall. |

```
                Internet
                    │
                    ▼
         [OVH Gateway — WAN]
                    │
   [Hub — OPNsense HA (active/passive CARP)]
         ├── WAN  (VLAN 100, 10.1.0.0/24)
         ├── Transit/LAN (VLAN 200, 192.168.10.0/24)
         │             CARP VIP 192.168.10.99
         └── HASYNC (VLAN 199, 10.0.254.0/30)
                    │
          ─── Shared vRack ───
               │           │
  [Spoke A project]   [Spoke B project]
  Neutron router       Neutron router
  (192.168.10.10)      (192.168.10.20)
  ├── App (VLAN 300)   ├── App (VLAN 400)
  └── DB  (VLAN 301)   └── DB  (VLAN 401)
      10.30.0.0/24         10.40.0.0/24
```

Plan the full address space before deploying any infrastructure. The transit VLAN (200) and subnet (192.168.10.0/24) are fixed and shared across all projects:

| Segment | VLAN | CIDR | Notes |
|---------|------|------|-------|
| Hub WAN | 100 | 10.1.0.0/24 | OVH Gateway for Internet egress |
| Hub Transit/LAN | 200 | 192.168.10.0/24 | Shared across all projects — fixed |
| Hub HASYNC | 199 | 10.0.254.0/30 | Firewall HA replication only |
| Spoke A transit IP | — | 192.168.10.10 | Unique per spoke, outside DHCP pool (.100–.200) |
| Spoke A App LAN | 300 | 10.30.0.0/24 | Workloads |
| Spoke A DB LAN | 301 | 10.31.0.0/24 | Workloads |

> [!warning]
> All projects share the same vRack (L2 domain). **VLAN IDs must be globally unique** across all projects — two projects using the same VLAN ID on the same vRack will collide. **IP CIDRs must also be globally unique** for routing. The one exception is the transit VLAN 200 (192.168.10.0/24): all projects reference it intentionally, each spoke using a distinct IP within it.

> [!primary]
> Looking for a ready-made IaC implementation? The open-source [hub-and-spoke-public-cloud](https://github.com/ovhcloud-examples/hub-and-spoke-public-cloud) project provides a complete OpenTofu reference for this architecture under `deployments/mono-vrack-lan-transit`.

---

### 2. Key Benefits and Regions

#### 2.1 Why hub and spoke?

| Benefit | Description |
|---------|-------------|
| **Security** | All north-south traffic (spoke to Internet) and east-west traffic (spoke to spoke) traverses the hub OPNsense firewall. One control point for rules, logging, and inspection. |
| **Simplicity** | A single shared vRack, one HA firewall cluster at the hub, and standard OpenStack Neutron routers on spokes. No IPsec tunnels, no per-spoke firewall cluster. |
| **Policy enforcement** | Internet egress and inter-spoke routing are centralised at the hub — a single place to manage and audit rules. |
| **Blast radius containment** | A compromise in one spoke cannot reach others without traversing hub firewall rules. Incident scope is limited to the affected spoke. |
| **Scale** | New workloads or teams get their own spoke (project + networks + Neutron router). The hub scales independently; spoke additions have no impact on existing spokes. |
| **Sovereignty** | European operator, EU data localisation, and a self-operated firewall remove dependence on US hyperscaler-managed security services. |

> [!primary]
> **Isolation model:** East-west isolation between spokes is enforced entirely by OPNsense firewall rules at the hub. All spoke Neutron routers are visible on the shared transit VLAN — inter-spoke communication is blocked by hub rules, not by L2 separation. For workloads that require cryptographic separation between spokes (e.g. PCI-DSS, classified environments), consider the `multi-vrack-ipsec` variant (one vRack per project, IPsec tunnels between hub and spokes).

#### 2.2 Available regions

OVHcloud Public Cloud regions are available across Europe and internationally:

**European Union**

| Country | Region codes |
|---------|-------------|
| France | GRA (Gravelines), SBG (Strasbourg), EU-WEST-PAR (Paris) |
| Germany | DE1 (Frankfurt) |
| United Kingdom | UK1 (London) |
| Italy | IT1 (Villafranca di Verona), EU-SOUTH-MIL (Milan) |
| Poland | WAW (Warsaw) |

**International**

| Zone | Region codes |
|------|-------------|
| United States | BHS (Beauharnois, CA), US-EAST-VA (Virginia) |
| Canada | BHS (Beauharnois) |
| Asia-Pacific | SGP (Singapore), SYD (Sydney) |

Your region choice affects:

- **Data localisation**: for GDPR/NIS2 compliance, choose EU regions.
- **Instance flavour availability**: the recommended hub flavour (`b3-16`) is not available in all regions. Verify before provisioning.
- **Latency**: co-locate hub and all spoke projects in the same region for minimal routing latency across the transit VLAN.

---

### 3. Governance and Access Management

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

| Role | OpenStack roles assigned | Purpose |
|------|--------------------------|---------|
| IaC operator | `compute_operator`, `network_operator`, `network_security_operator`, `image_operator`, `volume_operator`, `key-manager_operator` | Full provisioning access for IaC (networks, instances, security groups, volumes, images) |
| Runtime operator | `compute_operator` only | Restricted runtime operations (start/stop instances, read logs) |

This separation prevents runtime workloads from accidentally modifying network or security configurations.

#### 3.6 IaC credentials governance

> [!warning]
> Never commit files containing real credentials (variable files, `.env`, secrets) to version control.

Recommended patterns:

- **Local development**: keep variable files outside the repository or in a `.gitignore`d path.
- **CI/CD pipelines**: inject credentials as environment variables via your pipeline secrets store (HashiCorp Vault, GitHub Secrets, GitLab CI Variables, etc.).
- **Remote state**: use an S3<sup>1</sup>-compatible backend (OVHcloud Object Storage) with server-side encryption or client-side state encryption enabled. Isolate each deployment (hub, each spoke) in its own state file. OpenTofu ≥ 1.11.4 supports native state encryption with PBKDF2 + AES-GCM.

---

### 4. Deploy the Architecture

> [!primary]
> The steps below describe what to provision and why, using technology-agnostic language. You can implement them via the OVHcloud Control Panel, OpenStack CLI, OVHcloud API, or any IaC tool. For a ready-made automated implementation, see the [hub-and-spoke-public-cloud](https://github.com/ovhcloud-examples/hub-and-spoke-public-cloud) open-source project (`deployments/mono-vrack-lan-transit`).

#### 4.1 Create Public Cloud projects

Create at least two projects to start:

- **Hub project** — hosts the OPNsense HA firewall cluster, Internet gateway, and shared services.
- **Spoke-QA project** — an initial spoke for validating the topology before going to production.

Use a consistent naming convention to enable governance scoping, billing isolation, and automation — for example: `{domain}_{application}_{environment}` (e.g. `infra_hub_prod`, `finance_invoicing_qa`). Each project gets its own billing boundary, access scope, and OpenStack credential set.

> [!primary]
> After creating a project, OVHcloud requires a short propagation window (typically 30 seconds) before a vRack can be successfully attached. Account for this in any automation.

#### 4.2 Create the shared vRack and attach projects

A [vRack](/pages/network/vrack/vrack_main_doc) is an OVHcloud private layer-2 backbone. In this architecture, **one shared vRack is used for all projects** — hub and all spokes attach to the same vRack. This is what makes transit routing possible: the hub LAN and each spoke's transit network interface share the same VLAN 200 segment across the vRack.

**Attachment order:**

1. Create **one vRack** for the entire landing zone.
2. Attach the hub project to the vRack.
3. Attach the spoke-QA project to the same vRack.
4. Plan and record the full VLAN and CIDR table before creating any networks (see section 1). VLAN assignments are effectively irreversible — changing them later requires reprovisioning all affected networks.

> [!warning]
> All projects share the same L2 domain. Never assign the same VLAN ID to two different projects. The only exception is VLAN 200 (transit), which all projects reference by design.

#### 4.3 Hub HA firewall cluster and transit network

The hub OPNsense HA cluster is the sole firewall and routing choke-point for the entire landing zone. Provision it before any spoke:

1. **3 private networks** in the hub project, each on a distinct VLAN:
    - **WAN network** (VLAN 100, 10.1.0.0/24) — connects to the OVH Gateway for Internet egress/NAT.
    - **Transit/LAN network** (VLAN 200, 192.168.10.0/24) — the shared transit subnet. Every spoke Neutron router connects here. The hub OPNsense LAN CARP VIP (192.168.10.99) is the default gateway for all spokes.
    - **HASYNC network** (VLAN 199, 10.0.254.0/30) — dedicated to OPNsense HA state replication (CARP/pfsync); no other traffic on this VLAN.

2. **OVH Gateway** on the WAN network — provides NAT and Internet routing for all outbound spoke traffic. See the [Private Network with Gateway guide](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) for setup steps.

3. **Two OPNsense instances** (primary and secondary) — deploy from a cloud-ready image (e.g. OPNsense 26.1-cloudready). Recommended minimum sizing: `b3-16` (8 vCPUs / 16 GB RAM). Use an anti-affinity server group to place primary and secondary on different hypervisors. Attach each instance to all three networks (WAN, Transit/LAN, HASYNC).

4. **Floating IP** — attach a public Floating IP to the WAN CARP VIP port. This is the sole public-facing IP for the entire landing zone: management access (SSH, OPNsense web UI on port 8443) and Internet egress for all spokes.

5. **CARP VIPs** — configure two CARP Virtual IPs:
    - **WAN CARP VIP** (e.g. 10.1.0.99) — NAT source address for all outbound traffic.
    - **LAN CARP VIP (192.168.10.99)** — default gateway for every spoke Neutron router. This address must remain stable across failovers.

6. **HASYNC and pfsync** — configure OPNsense HA synchronisation over the HASYNC interface so firewall state, rules, and configuration replicate automatically between primary and secondary.

> [!warning]
> OpenStack port security must be **disabled** on vRack-backed networks that carry CARP traffic. Port security filters gratuitous ARPs, which CARP relies on for VIP failover. Disable it at the network level:
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
| TCP | 8443 | Admin IP/CIDR only | OPNsense web UI |

All other inbound traffic is blocked at the OpenStack layer before reaching OPNsense.

**SSH keys** — inject the operator SSH public key into all instances via cloud-init at provisioning time. Do not use password-based SSH.

**OPNsense admin password** — use a strong, randomly generated password. Pass it as a bcrypt hash to cloud-init so the plaintext never appears in instance metadata. Store it in your secrets manager, not in source control.

**IaC state files** — store state in an S3-compatible backend (OVHcloud Object Storage) with server-side encryption. State files may contain sensitive outputs (Floating IPs, API keys, passwords).

#### 4.5 Record hub parameters for spoke onboarding

Once the hub is deployed, record these values — every spoke will need them:

| Parameter | Description |
|-----------|-------------|
| Hub Floating IP | SSH/HTTPS management access; also the OPNsense REST API endpoint |
| Hub LAN CARP VIP | Default gateway for all spoke Neutron routers (192.168.10.99) |
| Hub LAN CIDR | Transit subnet (192.168.10.0/24) — shared across all projects |
| Hub vRack service name | Required to attach each new spoke project to the shared vRack |
| Hub OPNsense API credentials | Key/secret pair for automated spoke routing via the REST API |

Store these in your team's shared secrets manager or secure runbook.

---

### 5. Logging and Monitoring

#### 5.1 Centralised log collection

Configure OPNsense to forward syslog to OVHcloud **Logs Data Platform (LDP)**:

1. In OPNsense: `System`{.action} > `Log Files`{.action} > `Remote Logging`{.action}.
2. Set the syslog target to your LDP input endpoint (UDP/TCP 514 or GELF).
3. Enable logging for firewall rules and system events.

Follow the [LDP quick start guide](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) to provision your log stream and Kibana/OpenSearch dashboard.

#### 5.2 Long-term log archival with S3

Provision two OVHcloud Object Storage buckets in the hub project:

- A **primary bucket** (Standard storage class) in the main region — receives active log ingestion from OPNsense and other services.
- A **backup bucket** (Infrequent Access) in a second region — receives logs via **cross-region replication** for disaster recovery and compliance.

For regulated workloads, enable **Object Lock in Compliance Mode** on the backup bucket to enforce a minimum retention period (e.g. 90 days) and prevent premature deletion.

Apply a lifecycle policy on both buckets:

- **Log files** (`logs/` prefix): transition to Infrequent Access after 60 days; expire non-current versions after 30 days.
- **Temporary data** (`temp/` prefix, e.g. debug logs): expire current objects after 14 days, non-current versions after 7 days.

#### 5.3 Metrics and alerting

<!-- DRAFT: To complete — add specific Prometheus/Grafana or Datadog integration steps for OPNsense metrics export (e.g. via OPNsense Telegraf plugin or SNMP exporter) -->

Recommended alerting thresholds:

| Alert | Condition | Severity |
|-------|-----------|----------|
| Hub instance unreachable | Floating IP no response | Critical |
| Firewall CPU > 80% | Sustained 5 min | Warning |
| Failed login attempts | > 10 in 5 min | Warning |
| S3 replication lag | > 1 hour | Warning |

---

### 6. Onboarding a New Spoke

> [!primary]
> Each spoke is an independent Public Cloud project attached to the shared vRack. It has its own billing boundary, OpenStack users, and IAM policies. No OPNsense cluster, Floating IP, or OVH Gateway is needed — all traffic routes via the hub.

#### 6.1 Prerequisites

Before adding a spoke, confirm you have:

- [ ] Hub deployed and HTTPS-accessible at `https://<hub_floating_ip>:8443`
- [ ] Hub LAN CARP VIP (192.168.10.99) and hub LAN CIDR (192.168.10.0/24) noted (section 4.5)
- [ ] Hub vRack service name noted (section 4.5)
- [ ] Hub OPNsense API credentials available
- [ ] A unique transit router IP assigned within the transit subnet, outside the hub DHCP pool (.100–.200) — e.g. 192.168.10.10 for the first spoke, 192.168.10.20 for the second
- [ ] Unique VLAN IDs and CIDRs assigned for all spoke LAN networks (section 1)

#### 6.2 Provision spoke resources

Perform these steps in order, waiting for each OVHcloud API operation to complete before proceeding:

1. **Create a Public Cloud project** for the spoke (follow naming convention from section 4.1).
2. **Attach the spoke project to the shared vRack** using the hub vRack service name. Wait for the propagation delay (30 seconds) before creating networks.
3. **Create the transit network** in the spoke project: VLAN 200, CIDR 192.168.10.0/24, **DHCP disabled**, no gateway. This exposes the hub transit segment inside the spoke's OpenStack context so the Neutron router can attach to it.
4. **Create spoke LAN networks** — one network per workload tier (app, db, etc.), each on a unique VLAN with DHCP enabled.
5. **Create an OpenStack Neutron router**:
    - Attach the transit network with a **fixed IP** at the spoke's transit router IP (e.g. 192.168.10.10).
    - Attach each spoke LAN subnet as an internal interface.
    - Set the default route: `0.0.0.0/0` via the hub LAN CARP VIP (192.168.10.99).
6. **Create OpenStack users** (IaC operator and runtime operator) for the spoke project.

#### 6.3 Configure hub routing

Once the spoke Neutron router is up, register it on the hub OPNsense via the REST API:

**Add a gateway** pointing to the spoke's transit router IP:

```bash
curl -ks -u <hub_api_key>:<hub_api_secret> \
  -X POST https://<hub_floating_ip>:8443/api/routing/settings/add_gateway \
  -H "Content-Type: application/json" \
  -d '{
    "gateway_item": {
      "name": "Spoke<N>TransitGW",
      "interface": "lan",
      "ipprotocol": "inet",
      "gateway": "<spoke_transit_router_ip>"
    }
  }'

# Apply the gateway configuration
curl -ks -u <hub_api_key>:<hub_api_secret> \
  -X POST https://<hub_floating_ip>:8443/api/routing/settings/reconfigure
```

**Add a static route** for each spoke LAN CIDR:

```bash
curl -ks -u <hub_api_key>:<hub_api_secret> \
  -X POST https://<hub_floating_ip>:8443/api/routes/routes/addroute \
  -H "Content-Type: application/json" \
  -d '{
    "route": {
      "network": "<spoke_lan_cidr>",
      "gateway": "Spoke<N>TransitGW",
      "descr": "Spoke N LAN via transit"
    }
  }'

# Apply route configuration
curl -ks -u <hub_api_key>:<hub_api_secret> \
  -X POST https://<hub_floating_ip>:8443/api/routes/routes/reconfigure
```

> [!primary]
> If you use the IaC reference implementation (`spoke-template`), all hub-side routing steps are automated via the `restapi` Terraform provider and run as part of `tofu apply`.

#### 6.4 Verify connectivity

SSH to the hub's Floating IP and confirm the spoke is reachable:

```bash
# SSH to hub
ssh root@<hub_floating_ip>

# Confirm the route to the spoke LAN is present
ip route show | grep <spoke_lan_cidr>

# Ping the spoke Neutron router transit IP
ping <spoke_transit_router_ip>

# Ping a spoke LAN instance
ping <spoke_instance_ip>
```

#### 6.5 ProxyJump for SSH access to spoke instances

Spoke instances have no direct public IP. Access them through the hub Floating IP:

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
- [ ] Transit router IP assigned — unique within 192.168.10.0/24, outside DHCP pool (.100–.200)
- [ ] Spoke project created and attached to shared vRack
- [ ] Transit network (VLAN 200, DHCP disabled) created in spoke project
- [ ] Spoke LAN networks created with DHCP enabled
- [ ] Neutron router created with transit fixed IP and LAN interfaces
- [ ] Default route on Neutron router set to hub LAN CARP VIP (192.168.10.99)
- [ ] Hub gateway (`Spoke<N>TransitGW`) added via OPNsense API and reconfigured
- [ ] Hub static routes added for each spoke LAN CIDR and reconfigured
- [ ] Spoke LAN reachable from hub via ping
- [ ] IAM policies created for spoke project (developer + SRE groups)
- [ ] OpenStack users provisioned and credentials distributed to spoke team
- [ ] Logging forwarded to LDP
- [ ] SSH ProxyJump or Bastion access configured and tested

---

### 7. Lifecycle — Scale, Evolve, Delete

#### 7.1 Scaling — adding spokes

Repeat the onboarding process (section 6) for each new spoke. Assign a unique transit router IP and unique VLAN IDs from your network plan. Each spoke is independent — adding one has no impact on existing spokes, and only adds a gateway and static routes on the hub OPNsense.

As the number of spokes grows, monitor hub OPNsense CPU and throughput. The hub handles all north-south and east-west traffic for every spoke — right-size it accordingly (`b3-16` for most deployments, `b3-64` for high-traffic environments or many spokes).

#### 7.2 Removing a spoke

Decommission in reverse order of provisioning:

1. **Remove hub-side routing** — on the hub OPNsense, delete the static routes for the spoke LAN CIDRs and the spoke gateway:
    - `System`{.action} > `Routes`{.action}: delete spoke LAN routes, then click `Apply changes`{.action}.
    - `System`{.action} > `Gateways`{.action}: delete the spoke transit gateway.
    - Or via API: `POST /routes/routes/delroute/{id}` then `POST /routes/routes/reconfigure`, and `POST /routing/settings/del_gateway/{id}` then `POST /routing/settings/reconfigure`.
2. **Destroy spoke resources** — delete the Neutron router interfaces and router, LAN networks, transit network, and Public Cloud project. If using IaC, run a destroy operation scoped to the spoke's state.
3. **Verify on hub** — confirm no orphaned objects remain:
    - `System`{.action} > `Routes`{.action}: spoke LAN routes gone.
    - `System`{.action} > `Gateways`{.action}: spoke gateway gone.
4. **Update network design document** — release the VLAN IDs and transit IP for reuse.

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
> During steps 3–4, all traffic traverses the primary node. All spoke workloads depend on the hub for Internet access and inter-spoke routing — schedule maintenance during low-traffic windows.

#### 7.4 Quarterly review checklist

| Area | Action |
|------|--------|
| IAM | Audit user/group memberships; remove leavers; rotate service account API keys |
| Firewall rules | Review OPNsense rules; remove unused rules; validate admin source IPs are still accurate |
| Hub routes | List static routes on OPNsense; confirm all spoke transit gateways are present and correct |
| IaC state | Verify remote state is accessible and encrypted; test a restore; confirm no secrets drift |
| OPNsense firmware | Check for security advisories; schedule patching (see CARP procedure in section 7.3) |
| OVHcloud changelog | Review new features (new regions, instance types, IAM capabilities) |
| Costs | Review per-project spend; remove unused Floating IPs, volumes, instances |
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
- Right-size the hub: `b3-16` is sufficient for most deployments — avoid over-provisioning.
- Use Object Storage lifecycle policies to transition cold logs to Infrequent Access and expire temporary data.
- Decommission unused spokes rather than leaving idle infrastructure running.

---

### 9. Conclusion

The single vRack hub and spoke model on OVHcloud Public Cloud gives organisations a production-ready, auditable, and scalable landing zone. A centralised OPNsense HA firewall controls all outbound and inter-spoke traffic. Spoke projects require only standard OpenStack Neutron routers — no per-spoke firewall cluster, no IPsec tunnels — making this the simplest hub and spoke topology available on OVHcloud.

Deploying and operating this architecture requires solid cloud and network skills, including OVHcloud vRack and VLAN management, OPNsense HA cluster operation, and Infrastructure as Code practices. Teams new to these technologies are strongly encouraged to engage OVHcloud Professional Services for design review, assisted deployment, or an operational readiness assessment before going to production.

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
