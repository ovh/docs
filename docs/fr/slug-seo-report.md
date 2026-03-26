# Rapport SEO : analyse des slugs URL de la documentation

> Généré depuis `scripts/analyze-slug-seo.ts` — source : `scripts/slug-mapping.json` (1 667 pages)
>
> Locale de référence : `fr` — URL type : `/fr/guides/{category}/{subcategory}/{slug}`

---

## 1. Résumé exécutif

| Métrique | Valeur |
|----------|--------|
| Pages analysées | 1 667 |
| MDX existants (fr) | 1 620 (97.2%) |
| MDX manquants (fr) | 47 (2.8%) |
| Score SEO moyen | **8.98 / 10** |
| `finalSlug` améliorés | **475 (28.5%)** |
| `finalSlug` inchangés | 1 192 (71.5%) |
| Collisions `finalSlug` | **0** |

La majorité des slugs (65%) sont déjà excellents. Le `finalSlug` proposé améliore 475 entrées, principalement en supprimant la redondance avec le chemin URL et en désambiguïsant les slugs génériques. Aucune collision ne subsiste après traitement.

---

## 2. Méthodologie de scoring

Chaque entrée est notée sur **10 points**, répartis en 5 critères de 2 points chacun. L'évaluation se fait sur l'URL localisée complète (ex: `/fr/guides/public-cloud/compute/pre-installed-applications`).

### 2.1 Longueur du slug (0-2 pts)

La longueur optimale d'un slug SEO est de 3-6 mots (15-50 caractères).

| Condition | Score | Flag |
|-----------|-------|------|
| > 60 caractères | 0 | `slug-too-long` |
| > 50 caractères | 0.5 | `slug-long` |
| > 40 caractères | 1 | — |
| ≤ 3 caractères | 0.5 | `slug-too-short` |
| 1 seul mot | 1 | `slug-single-word` |
| 15-40 caractères, 3-6 mots | 2 | — |

### 2.2 Descriptivité (0-2 pts)

Le slug doit contenir des mots-clés significatifs permettant à l'utilisateur et aux moteurs de recherche de comprendre le contenu de la page.

| Condition | Score | Flag |
|-----------|-------|------|
| Aucun mot significatif (> 2 chars, hors stop words) | 0 | `no-meaningful-keywords` |
| 1 seul mot significatif court (< 5 chars) | 1 | `low-descriptiveness` |
| 1 mot significatif long (≥ 5 chars) | 1.5 | — |
| Slug générique (`faq`, `getting-started`, `troubleshooting`...) | max 1 | `generic-slug` |
| 2+ mots significatifs | 2 | — |

**Liste des slugs génériques détectés :** `getting-started`, `faq`, `troubleshooting`, `billing`, `capabilities`, `concepts`, `overview`, `configuration`, `installation`, `maintenance`, `backups`, `advanced-configuration`, `responsibility-model`, `responsibility-sharing`, `lifecycle-policy`.

### 2.3 Redondance avec le chemin URL (0-2 pts)

Les mots du slug qui apparaissent déjà dans les segments du chemin URL (`/guides/public-cloud/compute/`) sont redondants — ils n'apportent aucune information supplémentaire et rallongent inutilement l'URL.

| Ratio de mots redondants | Score | Flag |
|--------------------------|-------|------|
| > 75% | 0 | `highly-redundant` |
| > 50% | 0.5 | `redundant` |
| > 25% | 1 | — |
| ≤ 25% | 2 | — |

**Exemple :** `/fr/guides/public-cloud/containers-orchestration/managed-kubernetes/public-cloud-kubernetes-expose-applications-using-load-balancer`
→ Les mots `public`, `cloud`, `kubernetes` sont déjà dans le chemin → 3/8 mots redondants (37.5%).

### 2.4 Unicité (0-2 pts)

Un slug identique utilisé pour plusieurs pages crée une ambiguïté pour le maillage interne et les backlinks.

| Fréquence du slug | Score | Flag |
|-------------------|-------|------|
| > 3 occurrences | 0 | `collision-Nx` |
| 2-3 occurrences | 0.5 | `collision-Nx` |
| Unique | 2 | — |

### 2.5 Lisibilité de l'URL complète (0-2 pts)

Évalue la qualité globale de l'URL finale (`/fr/guides/.../slug`).

| Condition | Pénalité | Flag |
|-----------|----------|------|
| Préfixe numérique (`00-`, `01-`...) | -0.5 | `numeric-prefix` |
| Tokens cryptiques (≤ 2 chars hors stop words, pattern `[a-z]{1,3}\d`) | -0.5 | — |
| URL totale > 100 caractères | -0.5 | `url-too-long` |
| URL totale > 120 caractères | -0.5 supplémentaire | `url-very-long` |

---

## 3. Distribution des scores

```
Score       Nombre   %       Barre
──────────────────────────────────────────
9-10  ████████████████████████████████  1 082  64.9%   Excellent
7-8   ████████████████                    496  29.7%   Bon
5-6   ███                                  89   5.3%   Acceptable
3-4                                         0   0.0%   Faible
0-2                                         0   0.0%   Critique
```

| Score | Nombre | % | Qualification |
|-------|--------|---|---------------|
| 9-10 | 1 082 | 64.9% | Excellent — aucune modification nécessaire |
| 7-8 | 496 | 29.7% | Bon — améliorations mineures possibles |
| 5-6 | 89 | 5.3% | Acceptable — améliorations recommandées |
| 3-4 | 0 | 0% | — |
| 0-2 | 0 | 0% | — |

---

## 4. Problèmes détectés (flags)

| Flag | Nombre | Description |
|------|--------|-------------|
| `url-too-long` | 292 | URL finale > 100 caractères |
| `redundant` | 116 | > 50% des mots du slug déjà dans le chemin URL |
| `slug-long` | 92 | Slug entre 50-60 caractères |
| `url-very-long` | 62 | URL finale > 120 caractères |
| `slug-single-word` | 47 | Slug en un seul mot (peu descriptif hors contexte) |
| `collision-2x` | 46 | Slug identique pour 2 pages différentes |
| `generic-slug` | 34 | Slug générique (faq, getting-started, troubleshooting...) |
| `slug-too-long` | 24 | Slug > 60 caractères |
| `low-descriptiveness` | 14 | Un seul mot-clé court |
| `collision-6x` | 12 | Slug identique pour 6 pages |
| `highly-redundant` | 10 | > 75% des mots redondants avec le chemin |
| `collision-3x` | 9 | Slug identique pour 3 pages |
| `slug-too-short` | 7 | Slug ≤ 3 caractères |
| `numeric-prefix` | 5 | Slug commençant par `00-`, `01-`... |
| `no-meaningful-keywords` | 1 | Aucun mot significatif (`ui`) |

### Répartition par zone produit

Les flags `url-too-long` et `redundant` se concentrent fortement sur **Public Cloud > Containers & Orchestration** (Kubernetes, Rancher, Registry) où les `fullSlug` Pelican incluaient le chemin complet (`public-cloud-kubernetes-...`, `public-cloud-managed-rancher-service-...`) et la migration a ajouté une profondeur d'arborescence supplémentaire.

---

## 5. Logique du finalSlug

Le `finalSlug` est une proposition d'amélioration automatique du `newSlug`, calculée en 3 passes :

### Passe 1 — Nettoyage (par entrée)

Appliquée uniquement si le score SEO est < 9 :

1. **Strip de la redondance** — Si le slug est flaggé `redundant`/`highly-redundant` ou n'a pas été strippé lors du mapping initial (`newSlug === fullSlug`), les mots du début du slug qui apparaissent dans les segments URL sont retirés séquentiellement.

   ```
   Chemin URL : /guides/public-cloud/containers-orchestration/managed-kubernetes/
   Mots du chemin : {public, cloud, containers, orchestration, managed, kubernetes}

   Slug : public-cloud-kubernetes-expose-applications-using-load-balancer
          ^^^^^^ ^^^^^ ^^^^^^^^^^  ← dans le chemin → strippés
   Résultat : expose-applications-using-load-balancer
   ```

   Garde-fou : au minimum 2 mots sont toujours conservés, et le résultat doit faire ≥ 3 caractères.

2. **Strip du préfixe numérique** — `00-global-reversibility` → `global-reversibility`

3. **Expansion des slugs trop courts** — Si le slug fait ≤ 3 caractères ou est un mot unique < 6 caractères, il est préfixé par le nom du répertoire parent.

   ```
   ui    → secret-manager-ui
   use   → ssl-gateway-use
   svn   → web-hosting-svn
   ```

### Passe 2 — Désambiguation simple

Si plusieurs entrées ont le même `finalSlug` après la passe 1, chacune est préfixée par son répertoire parent immédiat :

```
troubleshooting (dans backup-agent/)     → backup-agent-troubleshooting
troubleshooting (dans iam/)              → iam-troubleshooting
troubleshooting (dans quantum-computing/) → quantum-computing-troubleshooting
```

### Passe 3 — Désambiguation profonde

Si une collision persiste après la passe 2 (deux pages dans le même répertoire), le `fullSlug` original est utilisé tel quel. Le `fullSlug` Pelican est garanti unique.

```
getting-started (web-hosting/, fullSlug: web-hosting-getting-started)       → web-hosting-getting-started
getting-started (web-hosting/, fullSlug: cloud-web-hosting-getting-started) → cloud-web-hosting-getting-started
```

---

## 6. Résultats finalSlug

| Métrique | Valeur |
|----------|--------|
| Entrées améliorées | 475 (28.5%) |
| Entrées inchangées | 1 192 (71.5%) |
| Collisions résiduelles | **0** |

### Ventilation des améliorations

| Type d'amélioration | Nombre | Description |
|---------------------|--------|-------------|
| Redondance strippée | 118 | Suppression des mots déjà dans le chemin URL |
| Slug trop long réduit | 88 | Stripping agressif des préfixes redondants |
| Slug générique désambiguïsé | 32 | Préfixe par le répertoire parent |
| Slug trop court étendu | 7 | Préfixe par le répertoire parent |

> Note : certaines entrées cumulent plusieurs types d'amélioration. Le total des catégories peut dépasser 475.

---

## 7. Exemples d'améliorations par catégorie

### 7.1 Redondance strippée

Le slug répétait des mots déjà présents dans le chemin URL. Le `finalSlug` ne conserve que l'information discriminante.

| newSlug (avant) | finalSlug (après) | URL avant | URL après |
|-----------------|-------------------|-----------|-----------|
| `web-cloud-db-detach-from-web-hosting` | `db-detach-from-web-hosting` | `/fr/guides/web-cloud/web-cloud-databases/web-cloud-db-detach-from-web-hosting` | `/fr/guides/web-cloud/web-cloud-databases/db-detach-from-web-hosting` |
| `cloud-web-hosting-install-ghost` | `install-ghost` | `/fr/guides/web-cloud/web-hosting/cloud-web-hosting-install-ghost` | `/fr/guides/web-cloud/web-hosting/install-ghost` |
| `public-cloud-network-l3-services-snat-configuration` | `l3-services-snat-configuration` | `/fr/guides/public-cloud/public-cloud-network-services/public-cloud-network-l3-services-snat-configuration` | `/fr/guides/public-cloud/public-cloud-network-services/l3-services-snat-configuration` |

### 7.2 Slugs trop longs réduits

Les slugs non strippés lors du mapping initial (le `fullSlug` Pelican ne matchait pas le pattern `{category}-{subcategory}-`) sont réduits par le stripping agressif basé sur les mots du chemin.

| newSlug (avant) | finalSlug (après) | Gain |
|-----------------|-------------------|------|
| `public-cloud-managed-rancher-service-create-kubernetes-compute-instances` (72 chars) | `create-kubernetes-compute-instances` (35 chars) | -37 chars |
| `public-cloud-kubernetes-configure-multi-attach-persistent-volumes-nas-ha` (73 chars) | `configure-multi-attach-persistent-volumes-nas-ha` (49 chars) | -24 chars |
| `public-cloud-ai-notebooks-marine-mammal-sounds-classification` (62 chars) | `ai-notebooks-marine-mammal-sounds-classification` (49 chars) | -13 chars |
| `vmware-zerto-virtual-replication-vmware-vsphere-drp` (52 chars) | `zerto-virtual-replication-vmware-vsphere-drp` (45 chars) | -7 chars |

### 7.3 Slugs génériques désambiguïsés

Les slugs trop génériques sont préfixés par leur répertoire parent pour devenir descriptifs dans le contexte de l'URL et uniques à l'échelle du site.

| newSlug | finalSlug | URL finale |
|---------|-----------|------------|
| `getting-started` | `cli-getting-started` | `/fr/guides/manage-and-operate/cli/cli-getting-started` |
| `getting-started` | `compute-getting-started` | `/fr/guides/public-cloud/compute/compute-getting-started` |
| `getting-started` | `analytics-getting-started` | `/fr/guides/public-cloud/data-analytics/analytics/analytics-getting-started` |
| `troubleshooting` | `iam-troubleshooting` | `/fr/guides/manage-and-operate/iam/iam-troubleshooting` |
| `troubleshooting` | `quantum-computing-troubleshooting` | `/fr/guides/public-cloud/quantum-computing/quantum-computing-troubleshooting` |
| `faq` | `web-hosting-faq` | `/fr/guides/web-cloud/web-hosting/web-hosting-faq` |
| `faq` | `ovhcloud-connect-faq` | `/fr/guides/network/ovhcloud-connect/ovhcloud-connect-faq` |
| `billing` | `backup-agent-billing` | `/fr/guides/storage-and-backup/backup-agent/backup-agent-billing` |
| `capabilities` | `quantum-computing-capabilities` | `/fr/guides/public-cloud/quantum-computing/quantum-computing-capabilities` |

### 7.4 Slugs trop courts étendus

Les slugs de 1 à 3 caractères ou mono-mot très court n'ont aucune valeur SEO isolée. Le contexte parent les rend compréhensibles.

| newSlug | finalSlug | URL finale |
|---------|-----------|------------|
| `ui` | `secret-manager-ui` | `/fr/guides/manage-and-operate/secret-manager/secret-manager-ui` |
| `use` | `ssl-gateway-use` | `/fr/guides/web-cloud/ssl-gateway/ssl-gateway-use` |
| `svn` | `web-hosting-svn` | `/fr/guides/web-cloud/web-hosting/web-hosting-svn` |
| `api` | `ovhcloud-connect-api` | `/fr/guides/network/ovhcloud-connect/ovhcloud-connect-api` |

---

## 8. Collisions newSlug et résolution

28 slugs `newSlug` sont partagés par 2 à 6 pages. Le `finalSlug` résout **toutes** les collisions.

### Collisions les plus fréquentes

#### `getting-started` (6 pages)

| Page (mdxPath) | finalSlug |
|----------------|-----------|
| `guides/web-cloud/web-hosting/hosting-first-steps-with-web-hosting.mdx` | `web-hosting-getting-started` |
| `guides/manage-and-operate/cli/cli-getting-started.mdx` | `cli-getting-started` |
| `guides/hosted-private-cloud/opcp/opcp-getting-started.mdx` | `opcp-getting-started` |
| `guides/public-cloud/public-cloud-databases/databases-01-order-control-panel.mdx` | `public-cloud-databases-getting-started` |
| `guides/public-cloud/compute/public-cloud-first-steps.mdx` | `compute-getting-started` |
| `guides/public-cloud/data-analytics/analytics/analytics-getting-started.mdx` | `analytics-getting-started` |

#### `troubleshooting` (6 pages)

| Page (mdxPath) | finalSlug |
|----------------|-----------|
| `guides/storage-and-backup/backup-agent/backup-agent-troubleshooting.mdx` | `backup-agent-troubleshooting` |
| `guides/manage-and-operate/iam/iam-troubleshooting.mdx` | `iam-troubleshooting` |
| `guides/public-cloud/quantum-computing/troubleshooting.mdx` | `quantum-computing-troubleshooting` |
| `guides/public-cloud/public-cloud-databases/databases-04-troubleshooting.mdx` | `public-cloud-databases-troubleshooting` |
| `guides/network/ovhcloud-connect/occ-setup-diagnostics.mdx` | `ovhcloud-connect-troubleshooting` |
| `guides/public-cloud/data-analytics/analytics/analytics-troubleshooting.mdx` | `analytics-troubleshooting` |

#### `faq` (3 pages)

| Page (mdxPath) | finalSlug |
|----------------|-----------|
| `guides/web-cloud/web-hosting/faq-web-hosting.mdx` | `web-hosting-faq` |
| `guides/public-cloud/public-cloud-databases/information-04-faq.mdx` | `public-cloud-databases-faq` |
| `guides/network/ovhcloud-connect/occdedicated-faq.mdx` | `ovhcloud-connect-faq` |

#### Autres collisions (2-3 pages chacune)

| newSlug | Occurrences | finalSlugs |
|---------|-------------|------------|
| `capabilities` | 3 | `quantum-computing-capabilities`, `public-cloud-databases-capabilities`, `analytics-capabilities` |
| `logs-to-customers` | 3 | `public-cloud-databases-logs-to-customers`, `ovhcloud-connect-logs-to-customers`, `analytics-logs-to-customers` |
| `responsibility-sharing` | 2 | `web-hosting-responsibility-sharing`, `domains-responsibility-sharing` |
| `billing` | 2 | `backup-agent-billing`, `quantum-computing-billing` |
| `creating-ssh-keys` | 2 | Résolus par parent (`dedicated-servers-`, `compute-`) |
| `replacing-lost-ssh-key-pair` | 2 | Résolus par parent (`dedicated-servers-`, `compute-`) |
| `responsibility-model` | 2 | Résolus par parent |
| `lifecycle-policy` | 2 | Résolus par parent |
| `vmware-storage-vmotion` | 2 | `storage-vmotion` (HPC), `vmware-storage-vmotion` (managed-bare-metal) |
| `vmware-fault-tolerance-continuity` | 2 | `fault-tolerance-continuity` (HPC), `vmware-fault-tolerance-continuity` (managed-bare-metal) |
| `vmware-drs-distributed-ressource-scheduler` | 2 | `drs-distributed-ressource-scheduler` (HPC), `vmware-drs-distributed-ressource-scheduler` (managed-bare-metal) |

---

## 9. 50 pires entrées

Les entrées avec le score SEO le plus bas, triées par score croissant. Quand un `finalSlug` est proposé, il est affiché.

### Score 5.5 (7 entrées)

Toutes dans `public-cloud/containers-orchestration/` — slugs non strippés très longs et redondants.

| newSlug | finalSlug | Flags |
|---------|-----------|-------|
| `public-cloud-managed-rancher-service-create-kubernetes-compute-instances` | `create-kubernetes-compute-instances` | slug-too-long, redundant, url-too-long, url-very-long |
| `public-cloud-managed-rancher-service-create-kubernetes-custom-nodes` | `create-kubernetes-custom-nodes` | slug-too-long, redundant, url-too-long, url-very-long |
| `public-cloud-managed-rancher-service-backup-restore-etcd-s3` | `backup-restore-etcd-s3` | slug-long, redundant, url-too-long, url-very-long |
| `public-cloud-private-registry-deploy-chart-from-kubernetes-registry` | `deploy-chart-from-kubernetes-registry` | slug-too-long, redundant, url-too-long, url-very-long |
| `public-cloud-kubernetes-migrate-iolb-to-public-cloud-loadbalancer` | `migrate-iolb-to-public-cloud-loadbalancer` | slug-too-long, redundant, url-too-long, url-very-long |
| `public-cloud-kubernetes-getting-source-ip-behind-loadbalancer` | `getting-source-ip-behind-loadbalancer` | slug-too-long, url-too-long, url-very-long |
| `public-cloud-kubernetes-configure-multi-attach-persistent-volumes-nas-ha` | `configure-multi-attach-persistent-volumes-nas-ha` | slug-too-long, url-too-long, url-very-long |

### Score 6.0 (42 entrées)

Mélange de slugs génériques, trop courts, et longs non strippés.

**Slugs génériques/trop courts :**

| newSlug | finalSlug | URL après |
|---------|-----------|-----------|
| `faq` | `web-hosting-faq` | `/fr/guides/web-cloud/web-hosting/web-hosting-faq` |
| `faq` | `public-cloud-databases-faq` | `/fr/guides/public-cloud/public-cloud-databases/public-cloud-databases-faq` |
| `faq` | `ovhcloud-connect-faq` | `/fr/guides/network/ovhcloud-connect/ovhcloud-connect-faq` |
| `ui` | `secret-manager-ui` | `/fr/guides/manage-and-operate/secret-manager/secret-manager-ui` |
| `troubleshooting` (×6) | `{parent}-troubleshooting` | Voir section 8 |

**Slugs longs (containers-orchestration) :**

| newSlug | finalSlug |
|---------|-----------|
| `public-cloud-managed-rancher-service-using-rancher-cli` | `using-rancher-cli` |
| `public-cloud-managed-rancher-service-managing-users-projects` | `managed-rancher-service-managing-users-projects` |
| `public-cloud-managed-rancher-service-getting-started` | `managed-rancher-service-getting-started` |
| `public-cloud-managed-rancher-service-deploy-monitoring-prometheus-grafana-metrics` | `deploy-monitoring-prometheus-grafana-metrics` |
| `public-cloud-private-registry-scan-docker-images-vulnerabilities` | `scan-docker-images-vulnerabilities` |
| `public-cloud-private-registry-configure-oidc-provider-authentication` | `configure-oidc-provider-authentication` |
| `public-cloud-kubernetes-vrack-example-between-private-networks` | `vrack-example-between-private-networks` |
| `public-cloud-kubernetes-plugins-software-versions-reserved-resources` | `plugins-software-versions-reserved-resources` |
| `public-cloud-kubernetes-monitoring-instances-prometheus-grafana` | `monitoring-instances-prometheus-grafana` |
| `public-cloud-kubernetes-expose-applications-using-load-balancer` | `expose-applications-using-load-balancer` |
| `public-cloud-kubernetes-configure-multi-attach-persistent-volumes-enterprise-file-storage` | `configure-multi-attach-persistent-volumes-enterprise-file-storage` |
| `public-cloud-kubernetes-configure-multi-attach-persistent-volumes-cloud-disk-array` | `configure-multi-attach-persistent-volumes-cloud-disk-array` |

**Non résolus automatiquement (score 6.0, pas d'amélioration) :**

| newSlug | URL | Flags |
|---------|-----|-------|
| `public-cloud-storage-object-storage-migrate-from-s3-to-ovhcloud` | `/fr/guides/storage-and-backup/object-storage/...` | slug-too-long, url-too-long |
| `public-cloud-storage-pcs-optimised-method-for-uploading-files-to-object-storage` | `/fr/guides/storage-and-backup/object-storage/...` | slug-too-long, url-too-long, url-very-long |

### Score 6.5 (1 entrée notable)

| newSlug | finalSlug | Flags |
|---------|-----------|-------|
| `billing` | `backup-agent-billing` | slug-single-word, generic-slug, collision-2x |

---

## 10. Cas non résolus automatiquement

Certaines entrées conservent un score acceptable (6.0) mais n'ont pas été améliorées car le stripping automatique ne peut pas inventer de meilleur slug — le `fullSlug` Pelican lui-même est trop long ou non descriptif.

### 10.1 Slugs longs dans `storage-and-backup/object-storage/`

Le score est 6.0 avec le `fullSlug` original, mais les mots du path (`storage`, `backup`, `object`) ne matchent pas le début du slug (`public-cloud-storage-...`). Le mot `cloud` n'est pas dans le path `storage-and-backup`, et `public` est trop court (filtré à ≤ 2 chars dans la logique de stripping). Ces cas nécessiteraient un mapping manuel.

| fullSlug | URL actuelle |
|----------|-------------|
| `public-cloud-storage-object-storage-migrate-from-s3-to-ovhcloud` | `/fr/guides/storage-and-backup/object-storage/public-cloud-storage-object-storage-migrate-from-s3-to-ovhcloud` |
| `public-cloud-storage-pcs-optimised-method-for-uploading-files-to-object-storage` | `/fr/guides/storage-and-backup/object-storage/public-cloud-storage-pcs-optimised-method-for-uploading-files-to-object-storage` |
| `public-cloud-storage-object-storage-migrate-from-swift-to-s3` | `/fr/guides/storage-and-backup/object-storage/public-cloud-storage-object-storage-migrate-from-swift-to-s3` |

**Slug idéal (manuel) :** `migrate-from-s3-to-ovhcloud`, `optimised-upload-method`, `migrate-from-swift-to-s3`

### 10.2 Slugs encore longs après stripping

Certains `finalSlug` restent longs car le contenu est intrinsèquement détaillé. Le stripping a supprimé la redondance mais le slug reste > 40 chars.

Exemples :
- `configure-multi-attach-persistent-volumes-enterprise-file-storage` (65 chars)
- `configure-multi-attach-persistent-volumes-cloud-disk-array` (58 chars)
- `deploy-monitoring-prometheus-grafana-metrics` (45 chars)

Ces cas sont acceptables — le slug est descriptif et non redondant. Un raccourcissement supplémentaire perdrait de l'information.

---

## 11. Recommandations

### Action immédiate — Appliquer les `finalSlug`

Les 475 `finalSlug` améliorés sont prêts à être utilisés pour le renommage MDX (étape 2 du plan). Zéro collision, améliorations déterministes et réversibles.

### Mapping manuel — 3-5 entrées

Les ~3 entrées `storage-and-backup/object-storage/` scorant 6.0 sans amélioration automatique bénéficieraient d'un slug raccourci manuellement (voir section 10.1).

### Priorité de renommage par impact SEO

| Priorité | Critère | Nombre | Justification |
|----------|---------|--------|---------------|
| P0 | Score ≤ 6.0 | 89 | URLs actuellement pénalisantes (trop longues, génériques, ou redondantes) |
| P1 | Score 6.5-8.0 avec `improved=true` | ~386 | Gain SEO mesurable sur la redondance et la longueur |
| P2 | Score ≥ 9 | 1 192 | Aucune modification nécessaire |

### Redirections 301

Chaque renommage MDX nécessitera une redirection 301 de l'ancien slug vers le nouveau pour préserver le jus SEO existant et éviter les 404 sur les backlinks.

---

## Fichiers générés

| Fichier | Description |
|---------|-------------|
| `scripts/slug-mapping.json` | Table de correspondance fullSlug → newSlug (1 667 entrées) |
| `scripts/slug-seo-report.json` | Rapport SEO complet avec scores, flags, finalSlug par entrée |
| `scripts/slug-seo-report.md` | Ce document |
| `scripts/generate-slug-mapping.ts` | Script de génération du mapping |
| `scripts/analyze-slug-seo.ts` | Script d'analyse SEO et calcul du finalSlug |
