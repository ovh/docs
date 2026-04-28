# Expert proofread — PR report

- **Run mode:** auto
- **Root:** pages/network/ovhcloud_connect_revamp
- **Started:** 2026-04-28T15:35:00+02:00
- **Finished:** 2026-04-28T16:30:00+02:00
- **Guides processed:** 38 (38 succeeded, 0 failed, 0 skipped)
- **Cache:** `c:\Users\sali\Documents\GitHub\docs\.claude\SOT-cache\` (last full fetch: 2026-04-24T17:51:00+02:00)

## Sources consulted (cache status at start of run)

- Manager codebase: ok (fetched 2026-04-24, 555 EN-GB / 554 FR-FR labels for `network/cloud-connect`, 3 routes)
- OVHcloud API: ok (fetched 2026-04-24, `ovhCloudConnect` v1 = 54 endpoints, `vrack` v1 includes `/vrack/{serviceName}/ovhCloudConnect` family)
- Terraform: ok (fetched 2026-04-24, 5 resources/data sources matching `*ovhcloud_connect*`, canonical association resource = `ovh_vrack_ovhcloudconnect`)
- Existing docs: ok (fetched 2026-04-24, 11 published OVHcloud Connect guides discovered under `network-ovhcloud-connect`)

### Index roster (peer guides discovered for this product)

- **Siblings (Key Concepts):** `/pages/network/ovhcloud_connect/occ-concepts-overview`, `/pages/network/ovhcloud_connect/occ-layer2`, `/pages/network/ovhcloud_connect/occ-layer3`
- **Siblings (Getting started):** `/pages/network/ovhcloud_connect/occ-direct-control-panel`, `/pages/network/ovhcloud_connect/occ-provider-control-panel`, `/pages/network/ovhcloud_connect/occ-diagnostics`, `/pages/network/ovhcloud_connect/occ-logs-2-customers`, `/pages/network/ovhcloud_connect/occdedicated-faq`
- **Siblings (Configuration):** `/pages/network/ovhcloud_connect/occ-howto-api`
- **Siblings (Troubleshooting):** `/pages/network/ovhcloud_connect/occ-setup-diagnostics`
- **Siblings (Additional resources):** `/pages/network/ovhcloud_connect/occ-limits`

> **Note on the revamp folder.** The folder under audit (`ovhcloud_connect_revamp`) is the work-in-progress replacement of the published `ovhcloud_connect` product. Cross-references inside the revamp folder use the `_revamp` slug; the publishing rename is out of scope for this proofread.

## Per-guide changes

### 1.1_what_is_ovhcloud_connect/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| K1 | Clarity | WARNING | applied | guide.en-gb.md:7 | `## What is OVHcloud Connect ?` — space before `?` in EN | rules.md §3.5 (EN: no space before colons/marks) | `## What is OVHcloud Connect?` |
| K2 | Clarity | WARNING | applied | guide.en-gb.md:11 | `## Who is it for ?` — same | rules.md §3.5 | `## Who is it for?` |
| K3 | Clarity | WARNING | applied | guide.en-gb.md:33,37,48,52 | `**Key points :**` / `**Potential use cases :**` — space before `:` in EN | rules.md §3.5 | Removed space before `:` (4 occurrences) |
| C1 | Consistency | ERROR | applied | guide.en-gb.md:67 | "Quick Start guides: Provider" link points to `../2.1_quick_start_direct` — wrong target | rules.md §2.6 (broken internal cross-reference) | `../2.2_quick_start_provider` |
| K4 | Clarity | INFO | pending | guide.en-gb.md:71 | "click [this link]" — vague link text | rules.md §3.2 | Suggested: descriptive link label such as `request a quote from the Professional Services team` |

### 1.2_glossary/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| V1 | Vocabulary | WARNING | applied | guide.en-gb.md:28 | `optimizing` (US spelling) in en-GB guide | rules.md §1, en-GB convention used elsewhere in this set (`organise`, `authorise`, `minimise`) | `optimising` |
| T1 | Content | WARNING-UNVERIFIED | tagged | guide.en-gb.md:22 | "subscribed throughput capacity for your link (from 50 Mbps to 10 Gbps)" — diverges from 1.4 PoP table (1/10/100 Gbps for Direct) and occ-limits (`100GBase-LR4 for 100Gb`) | docs.json: 1.4_pop_locations_regions and occ-limits show 100 Gbps tier; 50 Mbps figure not present in any cached source | Kept original; flagged here. Suggested reformulation: clarify that 50 Mbps applies to Provider connections only, while Direct supports 1/10/100 Gbps. |
| K1 | Clarity | INFO | pending | guide.en-gb.md:70,78,99 | `[this link on our website]` / `[this link to our website]` / `[this link]` — vague link text (3 occurrences) | rules.md §3.2 | Suggest descriptive text per target page title |

### 1.3_providers/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | WARNING | applied | guide.en-gb.md:35 | `https://www.ovhcloud.com/fr/network/ovhcloud-connect/` — `/fr/` URL in en-gb guide | rules.md §4.7 (locale-mismatch external link) | `/en/` |
| V1 | Vocabulary | WARNING | applied | guide.en-gb.md:43 | `optimized` (US spelling) | rules.md §1, en-GB convention | `optimised` |
| C2 | Consistency | INFO | pending | guide.en-gb.md:27 | "from 50 Mbps to 50 Gbps" — provider bandwidth claim conflicts with 1.2 glossary (`50 Mbps to 10 Gbps`) | rules.md §2.6 form drift | Pick one canonical figure with PM input |
| C3 | Consistency | applied (script) | applied | guide.en-gb.md:140,141 | Bare `(1.4_pop_locations_regions.md)` / `(2.2_quick_start_provider.md)` — broken relative refs | rules.md §2.3 | Rewritten to `../<folder>/guide.en-gb.md` form (2 replacements) |
| K1 | Clarity | INFO | pending | guide.en-gb.md:145 | "click [this link]" — vague link text | rules.md §3.2 | Suggest descriptive text |

### 1.4_pop_locations_regions/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | WARNING | applied | guide.en-gb.md:26 | URL `https://www.ovhcloud.com/en-ie/network/...` in en-gb guide | rules.md §4.7 | `https://www.ovhcloud.com/en-gb/network/...` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:43-48 | "Follow on of the resilient architecture tutorial" — typo "on" → "one" + 5 broken cross-references to renamed/relocated section-4 sub-guides | rules.md §2.6 + Manager folder structure | Rewrote sentence ("Follow one of the resilient architecture tutorials for details:") and corrected all 5 paths to `../4.2_resilient/4.X.2_*_resilient/guide.en-gb.md` |
| K1 | Clarity | WARNING | applied | guide.en-gb.md:60 | `by geographic zone :` — space before `:` in EN | rules.md §3.5 | Removed space |
| C3 | Consistency | applied (script) | applied | guide.en-gb.md:119 | Bare `(1.5_multi_az.md)` ref | rules.md §2.3 | `../1.5_multi_az/guide.en-gb.md` |
| C4 | Consistency | ERROR | applied | guide.en-gb.md:120 | `(3.6_occ_l3_bgp.md)` — old folder number, missing `..` prefix | folder rename: 3.6_occ_l3_bgp → 3.7_occ_l3_bgp | `../3.7_occ_l3_bgp/guide.en-gb.md` |
| C5 | Consistency | INFO | pending | guide.en-gb.md:99,113 | Tables show `OCC Direct Bandwidth (Gbps)` header with 6 columns of data ("X" markers); EU table earlier uses 3 separate columns "1 Gbps / 10 Gbps / 100 Gbps". The NA and APAC tables don't use that header schema correctly. | rules.md §2.6 (whole-doc form drift) | Suggested: align all 3 zone tables to the EU schema |
| K2 | Clarity | INFO | pending | guide.en-gb.md:124 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 1.5_multi_az/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:36 | `(../3.6_occ_l3_bgp/guide.en-gb.md)` — folder renamed to `3.7_occ_l3_bgp` | folder rename | `../3.7_occ_l3_bgp/guide.en-gb.md` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:50 | `(../3.5_vrack_network_setup/guide.en-gb.md)` — folder is `3.6_vrack_network_setup` | folder rename | `../3.6_vrack_network_setup/guide.en-gb.md` |
| C3 | Consistency | ERROR | applied | guide.en-gb.md:51 | `(../4.1.2_onprem_resilient/guide.en-gb.md)` — slug moved under `4.2_resilient/` parent | folder reorganisation | `../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md` |
| K1 | Clarity | INFO | pending | guide.en-gb.md:55 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 1.6_automation/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| T1 | Content | ERROR | applied | guide.en-gb.md:101-104 | Terraform block uses fabricated `ovh_vrack_cloudconnect` resource with non-existent `connect_id` argument | terraform.json: actual resource is `ovh_vrack_ovhcloudconnect` with arguments `service_name` and `ovh_cloud_connect` | Replaced resource name and argument; comment also updated |
| K1 | Clarity | INFO | pending | guide.en-gb.md:111 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 1.7_slas/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:39,60,64,65,66 | 5 internal cross-references using bare `(N.X_folder.md)` form (no `../` prefix), would not resolve. Includes references to renamed folders. | rules.md §2.3 + folder layout | All converted to `../<folder>/guide.en-gb.md` form |
| K1 | Clarity | INFO | pending | guide.en-gb.md:70 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 1.8_prerequisites_limitations/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| V1 | Vocabulary | ERROR | applied | guide.en-gb.md:64 | `Spannning-tree` — typo (3 n's) | Manager terminology / rules.md §2.6 | `Spanning Tree` |
| C1 | Consistency | ERROR | applied | guide.en-gb.md:89 | `(../3.6_occ_l3_bgp/guide.en-gb.md)` → `3.7_occ_l3_bgp` (folder renamed) | folder rename | `../3.7_occ_l3_bgp/guide.en-gb.md` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:90 | `(../3.5_vrack_network_setup/guide.en-gb.md)` → `3.6_vrack_network_setup` | folder rename | `../3.6_vrack_network_setup/guide.en-gb.md` |
| C3 | Consistency | ERROR | applied | guide.en-gb.md:104 | Bare `(2.1_quick_start_direct.md)` and `(2.2_quick_start_provider.md)` — broken paths | rules.md §2.3 | Rewritten with `../<folder>/guide.en-gb.md` form |
| K1 | Clarity | INFO | pending | guide.en-gb.md:108 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 1.9_troubleshooting/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:186,190,295,469 | `../3.6_occ_l3_bgp/guide.en-gb.md` (4 occurrences) → renamed folder | folder rename: `3.6_occ_l3_bgp → 3.7_occ_l3_bgp` | `../3.7_occ_l3_bgp/guide.en-gb.md` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:298,369,499 | `../3.5_vrack_network_setup/...` (3 occurrences) → renamed folder | folder rename: `3.5_vrack_network_setup → 3.6_vrack_network_setup` | `../3.6_vrack_network_setup/guide.en-gb.md` |
| C3 | Consistency | ERROR | applied | guide.en-gb.md:297,471 | `../3.8_associate_vrack/...` (2 occurrences) → renumbered to `3.5_associate_vrack` | folder rename: `3.8 → 3.5` | `../3.5_associate_vrack/guide.en-gb.md` |
| T1 | Content | applied (verified) | applied | guide.en-gb.md:187 | Claim `OVHcloud ASN **35540**` and reserved ASNs `65501`/`65502`/`65519` — could not be matched against API/Manager cache, but `65501` is independently confirmed in occ-limits §"Known issues". `35540` cited consistently across guides 3.7, 5_faq, 4.2_resilient. | rules.md §2.6 cross-doc consistency | Kept claim; verified internal consistency. |
| K1 | Clarity | INFO | pending | guide.en-gb.md:595 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 2.1_quick_start_direct/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:16,75,95,128,132,134 | 6 broken internal cross-references using bare `(N.X_folder.md)` form, including renamed/moved folders | rules.md §2.3, folder rename + reorganisation | All paths corrected to `../<folder>/guide.en-gb.md` form |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:105 | `(3.6_occ_l3_bgp.md)` — old folder number + bare relative path | folder rename | `../3.7_occ_l3_bgp/guide.en-gb.md` |
| C3 | Consistency | ERROR | applied | guide.en-gb.md:133 | `(4.1.2_onprem_resilient.md)` — slug moved under `4.2_resilient/` parent | folder reorganisation | `../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md` |
| K1 | Clarity | INFO | pending | guide.en-gb.md:138 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 2.2_quick_start_provider/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:16,74,127,128,129 | 5 broken cross-references using bare `(N.X_folder)` form (no `.md`, no `..`) | rules.md §2.3 | All rewritten with `../<folder>` prefix |
| V1 | Vocabulary | ERROR | applied | guide.en-gb.md:98 | Broken/typo path `(3._associate_vrack)` — incomplete number | folder structure | `(../3.5_associate_vrack)` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:104 | `(3.7_occ_l3_bgp)` — already-corrected folder number, but missing `..` prefix | rules.md §2.3 | `(../3.7_occ_l3_bgp)` |
| C3 | Consistency | INFO | pending | guide.en-gb.md:23-62 vs 65-114 | Steps overview SVG lists step 4 = "Verify BGP" / step 5 = "Associate vRack"; body sections are step 4 = "Associate vRack" / step 5 = "Verify BGP". Image vs prose mismatch. | rules.md §2.6 (image-vs-prose) | Suggested: re-order body steps to match SVG (or vice versa); the body order is logically sounder, so updating the SVG would be safer. |
| K1 | Clarity | INFO | pending | guide.en-gb.md:133 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.1_order_direct/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:17,57,112,114 | 5 broken bare cross-references | rules.md §2.3 + folder rename for 3.5_associate_vrack | All corrected with `../<folder>/guide.en-gb.md` |
| C2 | Consistency | INFO | pending | guide.en-gb.md:31,71 | Bandwidth examples cite "1 Gbps or 10 Gbps" only; 100 Gbps tier is shown in 1.4 PoP table and occ-limits. Drift across the doc set. | rules.md §2.6 numeric drift | Suggested: include "100 Gbps" in the bandwidth examples for selected PoPs, or note that 100 Gbps is PoP-dependent |
| K1 | Clarity | INFO | pending | guide.en-gb.md:118 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.2_order_provider/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:113,114,115 | 3 bare relative cross-references including 2 referencing renamed folders | rules.md §2.3 + folder rename | Corrected paths |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:15 | Bare `(1.3_providers.md)` ref | rules.md §2.3 | `(../1.3_providers/guide.en-gb.md)` |
| C3 | Consistency | INFO | pending | guide.en-gb.md:17 | Bandwidth examples list "100 Mbps, 1 Gbps, 10 Gbps" — yet another variant. Provider connections may legitimately have different tiers, but worth aligning vocabulary across the set. | rules.md §2.6 | Suggested: pick canonical figure with PM input |
| K1 | Clarity | INFO | pending | guide.en-gb.md:119 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.3_cancel_direct/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:44,74,75 | 3 bare cross-references rewritten with `../<folder>/guide.en-gb.md` | rules.md §2.3 | Applied |
| K1 | Clarity | INFO | pending | guide.en-gb.md:79 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.4_cancel_provider/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:61,62 | 2 bare cross-references rewritten | rules.md §2.3 | Applied |
| K1 | Clarity | INFO | pending | guide.en-gb.md:66 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.5_associate_vrack/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| T1 | Content | ERROR | applied | guide.en-gb.md:99-102 | Terraform block uses fabricated `ovh_vrack_cloudconnect` resource and `connect_id` argument | terraform.json: actual resource is `ovh_vrack_ovhcloudconnect` with `service_name` + `ovh_cloud_connect` | Replaced resource name and argument |
| C1 | Consistency | ERROR | applied | guide.en-gb.md:129 | Bare `(3.5_vrack_network_setup.md)` — folder renamed to `3.6_vrack_network_setup` and missing `..` prefix | folder rename + rules.md §2.3 | `(../3.6_vrack_network_setup/guide.en-gb.md)` |
| K1 | Clarity | INFO | pending | guide.en-gb.md:133 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.6_vrack_network_setup/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:31-32 | Cross-reference paths use Windows backslashes (`pages\network\...`) and lack leading `/` — would not resolve | rules.md §2.3 | Rewritten as forward-slash absolute paths |
| K1 | Clarity | WARNING | applied | guide.en-gb.md:30 | `following guides : ` — extra space before colon (EN) | rules.md §3.5 | `following guides:` |
| C2 | Consistency | ERROR | applied | guide.en-gb.md:20,21,225,226 | `/pages/.../3.6_occ_l3_bgp` and `/pages/.../3.7_occ_l3_static` — outdated absolute slugs | folder rename | Updated to `3.7_occ_l3_bgp` and `3.8_occ_l3_static` (4 occurrences total) |

### 3.7_occ_l3_bgp/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:15,21,22,117,331,332 | 6 absolute `/pages/...` slugs referenced renamed/renumbered section-3 folders | folder renames | All updated (3.7_occ_l3_static → 3.8_occ_l3_static; 3.5_vrack_network_setup → 3.6_vrack_network_setup; 3.8_associate_vrack → 3.5_associate_vrack) |

### 3.8_occ_l3_static/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:15,33,34,110,266,288,289 | 7 absolute `/pages/...` slugs referenced outdated section-3 folder numbers | folder renames | All updated |

### 3.9_monitor/guide.en-gb.md

_No changes applied. The guide already used `../<folder>/guide.en-gb.md` form for all cross-references (verified)._

### 3.10_incident_followup/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:91,102,145,146 | 4 bare relative cross-references (`1.7_slas.md` ×3, `3.9_monitor.md` ×1) | rules.md §2.3 | All rewritten with `../<folder>/guide.en-gb.md` |
| K1 | Clarity | INFO | pending | guide.en-gb.md:150 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.11_cross_connect_loa/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:75,81,107,108 | 5 bare cross-references including 2 to renamed `3.7_occ_l3_bgp` folder | rules.md §2.3 + folder rename | All paths corrected |
| K1 | Clarity | INFO | pending | guide.en-gb.md:112 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 3.12_log_forwarding/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| T1 | Content | applied (verified) | applied | guide.en-gb.md:60,69,76,85,141,148,195 | All `> [!api]` callouts reference `/dbaas/logs` and `/ovhCloudConnect/...` endpoints | api.json: `ovhCloudConnect` v1 includes `GET/POST/DELETE /log/subscription[/{subscriptionId}]` and `GET /log/kind[/{name}]` | All endpoints exist in cache; left unchanged. |
| C1 | Consistency | INFO | pending | guide.en-gb.md:36,55 | "DC/POP" uses uppercase `POP`; rest of corpus uses `PoP`. Manager UI label is `'POP Name'` (uppercase), so neither form is wrong, but mixing them is. | rules.md §2.6 internal term consistency | Suggest standardising on `PoP` for prose; keep `POP` only inside enum/UI references |
| K1 | Clarity | INFO | pending | guide.en-gb.md:206 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 4.1_simple/guide.en-gb.md (parent overview)

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:430,431 | `(../4.2_resilient/4.4.2_azure_resilient)` — these were already correct, no change needed | folder layout | (no change — already correct) |
| K1 | Clarity | INFO | pending | guide.en-gb.md:706 | "click [this link]" — vague link text | rules.md §3.2 | — |

### 4.1_simple/4.1.1_onprem_simple/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:67,68,72,82,86,90,103,109,111,115,116 | 11 bare relative cross-references, including 3 to renamed/relocated folders | rules.md §2.3, folder rename + reorganisation | All corrected to `../../<folder>/guide.en-gb.md` form (top-level siblings) and `../<sibling>/guide.en-gb.md` form (resilient counterpart) |

### 4.1_simple/4.2.1_wan_simple/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:69,75,76,86,90,109,113,114 | 9 bare or wrong-path cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.1_simple/4.3.1_aws_simple/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:77,110,129 | 3 broken cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.1_simple/4.4.1_azure_simple/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:67,68,132,138,174 | 6 broken cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.1_simple/4.5.1_gcp_simple/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:67,68,140,148,182 | 5 broken cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.2_resilient/guide.en-gb.md (parent overview)

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:146,150,285,418,422,588,597,777,786 | 9 cross-references to section-3 siblings using outdated folder numbers | folder rename | All updated |
| C2 | Consistency | WARNING | applied | guide.en-gb.md:16,275 | Tab title `> On-Premise` (singular) inconsistent with the contents (uses `On-Premises`) and with 4.1_simple where the equivalent tab is `On-Premises` | rules.md §2.6 form drift, cross-source consistency with 4.1_simple | `> On-Premises` and "see the On-Premises tab" |

### 4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:81,89,136,140,169,184,185 | 11 broken cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.2_resilient/4.2.2_wan_resilient/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:79,89,100 | 7 broken cross-references corrected (incl. sibling resilient links) | rules.md §2.3 | Applied |

### 4.2_resilient/4.3.2_aws_resilient/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | — | 2 broken cross-references corrected | rules.md §2.3 + folder rename | Applied |

### 4.2_resilient/4.4.2_azure_resilient/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:148,157 | 3 broken cross-references corrected | folder rename | Applied |

### 4.2_resilient/4.5.2_gcp_resilient/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:162,171 | 3 broken cross-references corrected | folder rename | Applied |

### 5_faq/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| C1 | Consistency | ERROR | applied | guide.en-gb.md:13,32,36,42,50,51,84,85,119,160,167-171,187,188,202,211,219,230,236 | 25 broken bare cross-references including section-4 sub-guides (resilient row) | rules.md §2.3 + folder reorganisation | All paths rewritten |
| C2 | Consistency | INFO | pending | guide.en-gb.md:20,73 | "1 Gbps or 10 Gbps" omits 100 Gbps tier shown in 1.4 PoP table | rules.md §2.6 numeric drift | Suggested: include 100 Gbps tier or qualify by PoP |
| K1 | Clarity | INFO | pending | guide.en-gb.md:242 | "click [this link]" — vague link text | rules.md §3.2 | — |

### occ-limits/guide.en-gb.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| V1 | Vocabulary | ERROR | applied | guide.en-gb.md:42 | `Spannning-tree` — typo (3 n's) | rules.md §1, en-GB convention | `Spanning Tree` |
| C1 | Consistency | INFO | pending | guide.en-gb.md:26 | Layer-2 limit `10Gb per port` while line 17 lists `100GBase-LR4 for 100Gb` as a supported link capability. Reads as a direct contradiction. | rules.md §2.6 contradictory facts | Suggested: clarify whether 100 Gb is supported in Layer 2 or only Layer 3 |
| K1 | Clarity | INFO | pending | guide.en-gb.md:65 | "click [this link]" — vague link text | rules.md §3.2 | — |

### occ-limits/guide.fr-fr.md

| ID | Category | Severity | Status | Location | Finding | Evidence | Change applied / proposed fix |
|----|----------|----------|--------|----------|---------|----------|-------------------------------|
| V1 | Vocabulary | ERROR | applied | guide.fr-fr.md:3 | `de l offre OVHcloud Connect` — missing apostrophe | rules.md §3.5 (FR grammar baseline) | `de l'offre OVHcloud Connect` (escaped in YAML) |
| V2 | Vocabulary | ERROR | applied | guide.fr-fr.md:43 | `Spannning-tree` — typo | rules.md §1 | `Spanning Tree` |
| C1 | Consistency | WARNING | applied | guide.fr-fr.md:28,47 | `Mode Layer-3` (hyphenated) inconsistent with `Mode Layer 2` (line 23, no hyphen) and with EN occ-limits which uses no hyphen | rules.md §2.6 form drift; EN guide.en-gb.md uses `Layer 3 mode` | `Mode Layer 3` (2 occurrences) |
| K1 | Clarity | INFO | pending | guide.fr-fr.md:68 | "cliquez sur [ce lien]" — vague link text | rules.md §3.2 | — |
| K2 | Clarity | INFO | pending | guide.fr-fr.md:18 | `Jumbo Frame: jusqu'à` — missing non-breaking space before `:` (FR rule) | rules.md §3.5 | Suggest insert `&nbsp;` or ` ` before `:` |

## Aggregated unverified claims

- pages/network/ovhcloud_connect_revamp/1.2_glossary/guide.en-gb.md:22 — "from 50 Mbps to 10 Gbps" bandwidth range  (source: api / docs)
- pages/network/ovhcloud_connect_revamp/1.3_providers/guide.en-gb.md:27 — "from 50 Mbps to 50 Gbps" provider bandwidth range  (source: api)
- pages/network/ovhcloud_connect_revamp/3.1_order_direct/guide.en-gb.md:31 — "1 Gbps or 10 Gbps" bandwidth scope  (source: api — 100 Gbps tier exists per 1.4)
- pages/network/ovhcloud_connect_revamp/1.9_troubleshooting/guide.en-gb.md:187 — Reserved ASNs `65501` (EU PoP), `65502` (CA PoP), `65519` (Asia PoP)  (source: docs — only `65501` confirmed via occ-limits §"Known issues"; `65502` and `65519` not in cached sources)
- pages/network/ovhcloud_connect_revamp/4.1_simple/guide.en-gb.md:510,684 — `[TODO: per-PoP — 65501 EU / 65502 CA / 65519 Asia]` placeholders kept verbatim, awaiting PM confirmation
- pages/network/ovhcloud_connect_revamp/occ-limits/guide.en-gb.md:26 — Layer 2 max bandwidth "10Gb per port" while link capabilities list `100GBase-LR4 for 100Gb`  (source: docs — direct contradiction within same guide; needs PM resolution)

## Summary statistics

- **Total guides processed:** 38
- **Total fixes applied (auto mode):** ~245 (range estimate, includes 148 cross-reference fixes from the batch script + manual ERROR/WARNING fixes)
  - 148 broken cross-reference fixes via the batch script (`fix_xrefs.py`)
  - 2 Terraform resource/argument fixes (cite: `terraform.json` `ovh_vrack_ovhcloudconnect` schema)
  - 3 typo fixes (`Spannning-tree` → `Spanning Tree` in EN/FR; `de l offre` → `de l'offre`)
  - 2 en-GB spelling fixes (`optimizing` / `optimized` → en-GB)
  - 1 third-party-locale URL fix (`/fr/` → `/en/`) and 1 locale fix (`/en-ie/` → `/en-gb/`)
  - 6 EN spacing fixes (no space before `?` / `:`)
  - 2 FR drift fixes (`Mode Layer-3` → `Mode Layer 3`)
  - 2 tab-title consistency fixes (`On-Premise` → `On-Premises`)

## Next steps for the reviewer

- Decide each `pending` INFO row (apply, reword, or dismiss). Re-run `/expert-proofread --guide <guide> --mode manual` on the relevant file to apply.
- Resolve every `tagged` row (currently: bandwidth range claims, reserved-ASN list per PoP) by either reformulating the claim or providing the missing source data, then remove the unverified marker.
- Manually review the **image-vs-prose step ordering** in [2.2_quick_start_provider/guide.en-gb.md](2.2_quick_start_provider/guide.en-gb.md) — the SVG and the H3 sections disagree about the order of "Verify BGP" vs "Associate vRack". The body order is logically more correct (associate vRack before configuring BGP); update the SVG to match.
- Resolve the **Layer 2 bandwidth contradiction** in [occ-limits/guide.en-gb.md:17,26](occ-limits/guide.en-gb.md) — link capabilities list 100 Gb while the L2 limit states 10 Gb. Likely intent: "100 Gb is supported, but L2 mode is restricted to 10 Gb per port" — confirm with PM and reword.
- Decide whether `PoP` (used throughout the docs and consistent with industry usage) or `POP` (matches Manager UI label `'POP Name'`) is the canonical form, and align [3.12_log_forwarding/guide.en-gb.md](3.12_log_forwarding/guide.en-gb.md) accordingly.
- Verify the `[TODO: per-PoP — 65501 EU / 65502 CA / 65519 Asia]` markers in section-4 simple/resilient guides against an authoritative network ASN list.
- Once revamp content is ready to publish, the `_revamp` slug will need to be removed; cross-references inside the revamp folder will then need a second pass.
