---
title: "OPCP - Pré-requis techniques pour le déploiement"
excerpt: "Découvrez la liste des éléments de configuration que vous devez fournir à OVHcloud pour préparer et déployer votre plateforme OPCP."
updated: 2026-05-19
---

## Objectif

Le déploiement d'**On-Prem Cloud Platform (OPCP)** sur votre site nécessite la collecte préalable d'un ensemble d'informations de configuration. Certaines sont indispensables au bootstrap initial et ne pourront plus être modifiées après installation ; d'autres sont optionnelles ou ajustables ultérieurement. Préparer cette liste en amont est la **condition principale d'un déploiement rapide et sans aller-retour**.

**Ce guide a pour objectif de vous présenter, pour chaque pré-requis, à quoi il sert, comment le formuler et quel est son caractère obligatoire ou optionnel**.

Il s'adresse aussi bien aux **architectes** préparant la livraison qu'aux **administrateurs** souhaitant comprendre ce qui a été paramétré sur leur plateforme.

## Prérequis

- Avoir parcouru le guide [OPCP - Intégration réseau et connexion à la plateforme](/links/hosted-private-cloud/opcp-network-architecture), qui décrit l'architecture réseau dans laquelle s'inscrivent ces pré-requis.
- Connaître le **modèle de souscription OPCP** retenu (Self-managed ou Fully managed by OVHcloud).
- Disposer d'un **point de contact OVHcloud** identifié pour la livraison, à qui transmettre les éléments collectés.

## En pratique

### 1. Comment lire ce guide

Pour chaque pré-requis, vous trouverez :

- une **description** expliquant son rôle dans la plateforme,
- le **caractère obligatoire ou optionnel** de l'information,
- la **possibilité de modification après installation**,
- les **flux réseau associés** lorsque le pré-requis implique une communication entre OPCP et un service de votre environnement,
- un **exemple générique** pour vous aider à formuler la valeur attendue.

> [!primary]
>
> **Transmission des éléments sensibles.** Plusieurs pré-requis impliquent des secrets : clé pré-partagée IPsec, clés d'accès S3, clés privées de certificats, etc. Ces éléments **ne doivent pas être transmis par un canal non sécurisé**. Convenez avec votre point de contact OVHcloud d'un canal de transmission approprié pour chaque secret.
>

### 2. Interconnexion OVHcloud (mode managé uniquement)

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui**, en mode Fully managed by OVHcloud |
| Modifiable après installation | Oui |
| Flux associé | Tunnel IPsec site-à-site entre votre endpoint et OVHcloud |

Si vous avez souscrit l'offre **Fully managed by OVHcloud**, un tunnel IPsec doit être établi entre votre site et OVHcloud pour permettre l'exploitation et le support à distance. Vous devez fournir :

- l'**adresse IP publique** de votre endpoint IPsec,
- le **sous-réseau** que vous exposez côté client (typiquement le subnet d'administration d'OPCP),
- la **clé pré-partagée (PSK)** convenue pour l'authentification, à transmettre via un canal sécurisé.

Les paramètres cryptographiques par défaut sont **IKEv2 + PSK + AES-256 + SHA-256 + DH group 14 + PFS**. Si votre politique de sécurité exige des paramètres différents, abordez le sujet avec votre point de contact OVHcloud avant le déploiement.

> [!warning]
>
> IKEv1 n'est pas supporté. L'abaissement du niveau de chiffrement en dessous d'AES-256 est déconseillé : à n'envisager qu'en dernier recours.
>

En mode **Self-managed**, ce pré-requis ne s'applique pas.

### 3. Réseau d'administration

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | **Non** |
| Flux associé | Aucun (configuration locale à OPCP) |

Définition du réseau de management sur lequel OPCP sera positionné. Vous devez fournir :

- le **sous-réseau** alloué à OPCP (exemple : `172.30.1.0/24`),
- l'**adresse de la passerelle par défaut** (exemple : `172.30.1.254`).

Ce réseau accueillera les contrôleurs OPCP et leur VIP. Il sert également de point de départ aux flux sortants vers vos services internes (NTP, DNS, syslog, S3, LDAP).

> [!warning]
>
> Ces paramètres sont **figés au déploiement** : le sous-réseau et la passerelle ne peuvent pas être modifiés après l'installation sans réinstallation complète. Validez-les soigneusement en amont.
>

### 4. Variables d'environnement OPCP

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | **Non** |
| Flux associé | Aucun |

OPCP utilise plusieurs variables pour identifier le déploiement de manière unique. Elles sont reprises dans Netbox, dans les logs, dans le monitoring et dans plusieurs autres composants. Vous devez fournir une valeur pour chacune :

| Variable | Rôle | Exemple |
|---|---|---|
| `env` | Identifiant logique de l'environnement OPCP | `opcp-prod-0` |
| `region` | Code de la région ou de la zone géographique | `par` |
| `stage` | Étape de cycle de vie | `prod`, `staging`, `dev` |
| `org` | Organisation propriétaire | `mycompany` |
| `site` | Identifiant du site physique | `dc1` |
| `location` | Localisation précise dans le site | `R11-1` |

> [!primary]
>
> **Aucune convention de nommage n'est imposée par OVHcloud.** Adoptez la nomenclature qui correspond à votre référentiel interne. Choisissez-la avec soin : ces valeurs seront figées et utilisées dans de nombreux composants.
>

### 5. Noms et adresses des contrôleurs OPCP

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | **Non** |
| Flux associé | Aucun (configuration locale à OPCP) |

Pour chaque **OPCP Core Controller** de votre déploiement, fournissez :

- le **nom d'hôte** (FQDN ou nom court selon votre convention),
- l'**adresse IP** sur le réseau d'administration.

En configuration à 3 contrôleurs, fournissez également la **VIP (Virtual IP)** partagée entre les trois nœuds, qui constituera le point d'entrée unique vers les API OpenStack et l'interface Horizon.

Exemple en configuration 3 contrôleurs :

| Élément | Nom | IP |
|---|---|---|
| Contrôleur 0 | `opcp-controller-0` | `172.30.1.10` |
| Contrôleur 1 | `opcp-controller-1` | `172.30.1.11` |
| Contrôleur 2 | `opcp-controller-2` | `172.30.1.12` |
| VIP | `opcp.exemple.com` | `172.30.1.5` |

### 6. Certificats

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | Oui |
| Flux associé | Aucun (configuration locale à OPCP) |

OPCP doit présenter des certificats TLS valides pour ses interfaces (API OpenStack, Horizon, services internes). Trois options sont supportées ; vous devez choisir l'une d'entre elles avant le déploiement.

#### Option A — Autorité de certification auto-signée générée par OPCP

OPCP génère sa propre autorité de certification interne et signe les certificats nécessaires. **Vous n'avez rien à fournir.** La rotation est gérée automatiquement par CertManager.

C'est l'option la plus simple, adaptée si votre politique de sécurité tolère une CA interne au périmètre OPCP. Vous devrez en revanche distribuer le certificat racine d'OPCP à vos clients pour éviter les alertes de sécurité.

#### Option B — Autorité de certification intermédiaire fournie par le client

Vous fournissez une CA intermédiaire dérivée de votre PKI interne. OPCP l'utilise pour signer les certificats des services. Vous devez transmettre :

- le **certificat de la CA intermédiaire**,
- la **clé privée** associée (à transmettre via un canal sécurisé convenu avec votre point de contact OVHcloud).

La rotation des certificats émis sous cette intermédiaire reste gérée par CertManager côté OPCP.

#### Option C — Let's Encrypt

OPCP demande automatiquement les certificats auprès de Let's Encrypt. Cette option nécessite :

- une **méthode de validation** compatible (HTTP-01 ou DNS-01) accessible depuis OPCP,
- les **pré-requis associés** à cette méthode (résolution publique du domaine, accès sortant aux serveurs ACME, etc.).

Précisez avec votre point de contact OVHcloud la méthode retenue et les configurations à mettre en place de votre côté.

### 7. NTP — Synchronisation horaire

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → vos serveurs NTP — UDP/123 |

OPCP a besoin d'une source de temps fiable pour le bon fonctionnement de l'ensemble de ses composants (cohérence des logs, validité des certificats, élection de quorum, etc.). Fournissez :

- une ou plusieurs **adresses IP** de serveurs NTP, **ou** des **noms DNS** si la résolution DNS est configurée.

Exemple :

- `172.30.1.200` / `ntp1.exemple.com`
- `172.30.1.201` / `ntp2.exemple.com`

Prévoyez l'ouverture du flux **UDP/123** depuis le réseau d'administration d'OPCP vers vos serveurs NTP.

### 8. DNS — Délégation de domaine vers OPCP

| Champ | Valeur |
|---|---|
| Obligatoire | **Oui** |
| Modifiable après installation | **Non** (le forwarder DNS pouvant être adapté si les FQDN restent stables) |
| Flux associé | Vos résolveurs DNS → VIP OPCP — UDP/53 et TCP/53 |

OPCP expose ses interfaces via des FQDN sous un domaine que vous lui déléguez. Vous devez fournir :

- le **nom de domaine** alloué à cette plateforme OPCP (exemple : `opcp01.exemple.com`).

Côté infrastructure DNS, vous devez créer un **forwarder** depuis vos résolveurs internes vers la VIP OPCP, afin que toute requête pour `*.opcp01.exemple.com` soit résolue par OPCP.

### 9. DNS resolvers — Résolution externe

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → vos résolveurs DNS — UDP/53 |

Si OPCP doit résoudre des noms de domaine **externes** (par exemple le FQDN de votre endpoint S3 ou de votre annuaire LDAP), fournissez l'adresse d'un ou plusieurs résolveurs DNS.

Exemple :

- `172.30.1.100`
- `172.30.1.101`

Ce pré-requis n'est nécessaire que si vous activez des intégrations s'appuyant sur des FQDN externes (sauvegarde S3, métriques long terme, fédération LDAP, etc.). Pour une plateforme strictement air-gappée et configurée par IP, il peut être omis.

### 10. Syslog — Centralisation des logs

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel mais **recommandé** |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → vos serveurs syslog — UDP/514 ou TCP/514 |

OPCP peut envoyer ses logs vers une infrastructure syslog centralisée pour rétention long terme et analyse. Fournissez :

- l'**adresse IP** ou le FQDN du serveur syslog (exemple : `172.30.1.250`),
- le **port** d'écoute,
- le **protocole** : TCP ou UDP.

> [!primary]
>
> Sans syslog externe, OPCP conserve les logs **localement** avec une rétention par défaut de **7 jours** et une volumétrie maximale de **50 Go**. Au-delà, les logs les plus anciens sont supprimés. Pour toute exigence de conformité imposant une rétention plus longue, configurez un syslog externe.
>

### 11. Sauvegarde — Endpoint S3

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel mais **recommandé** |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → votre endpoint S3 — TCP/443 |

OPCP peut sauvegarder l'état de l'infrastructure (configurations, état du plan de contrôle, métadonnées) vers un endpoint compatible S3 que vous fournissez. Vous devez transmettre :

- l'**endpoint S3** (exemple : `s3.exemple.com:443`),
- la **clé d'accès** (Access Key),
- la **clé privée** (Secret Key),
- le **nom du bucket** dédié aux sauvegardes (exemple : `opcp01-backup-dc1`),
- le **nom de la région** S3 (exemple : `paris`).

Les clés d'accès doivent être transmises via un canal sécurisé convenu avec votre point de contact OVHcloud.

> [!warning]
>
> Sans sauvegarde externe, vous ne disposez d'aucun mécanisme de restauration en cas d'incident majeur sur la plateforme. Cette option est très fortement recommandée pour tout environnement de production.
>

### 12. Stockage long terme des métriques — Endpoint S3

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel mais **recommandé** |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → votre endpoint S3 — TCP/443 |

OPCP collecte en permanence des métriques sur la plateforme. Pour les conserver au-delà de la fenêtre de rétention locale, vous pouvez les externaliser vers un bucket S3. Les éléments à fournir sont les mêmes que pour la sauvegarde, mais le bucket doit être **distinct** :

- **endpoint S3**,
- **clé d'accès**,
- **clé privée**,
- **nom du bucket** dédié aux métriques (exemple : `opcp01-metrics-dc1`),
- **nom de la région**.

Vous pouvez réutiliser le même endpoint et les mêmes identifiants S3 que pour la sauvegarde, à condition d'utiliser un bucket différent.

### 13. LDAP — Fédération d'identité

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel |
| Modifiable après installation | Oui |
| Flux associé | Réseau d'administration OPCP → votre annuaire — TCP/636 (LDAPS) |

OPCP intègre Keycloak comme fournisseur d'identité. Si vous souhaitez fédérer les accès avec votre annuaire d'entreprise (Active Directory ou autre serveur LDAP), fournissez :

- les **adresses IP** ou FQDN de vos serveurs LDAP (exemple : `ldap.exemple.com`, `10.3.0.5`, `10.3.0.6`),
- le **port** d'écoute (typiquement `636` pour LDAPS).

Sans fédération, les utilisateurs sont gérés directement dans le Keycloak embarqué d'OPCP.

### 14. Clé SSH publique

| Champ | Valeur |
|---|---|
| Obligatoire | Optionnel mais **recommandé** |
| Modifiable après installation | Oui |
| Flux associé | Aucun (configuration locale à OPCP) |

Pour accéder aux contrôleurs OPCP après le bootstrap initial (notamment pour utiliser `opcp-cli` et `opcp-diag`), fournissez une ou plusieurs **clés SSH publiques** des administrateurs côté client.

En mode **Fully managed by OVHcloud**, cette clé donne au client un accès aux outils d'administration en complément de l'accès des équipes OVHcloud.

> [!primary]
>
> Si aucune clé n'est fournie, une nouvelle paire de clés SSH sera générée lors du déploiement. Pour maîtriser vos accès dès la livraison, il est préférable de fournir vous-même la clé publique.
>

## Récapitulatif

| Pré-requis | Caractère | Modifiable après installation |
|---|---|---|
| Interconnexion OVHcloud (IPsec) | Obligatoire en mode managé | Oui |
| Réseau d'administration | Obligatoire | **Non** |
| Variables d'environnement OPCP | Obligatoire | **Non** |
| Noms et adresses des contrôleurs | Obligatoire | **Non** |
| Certificats | Obligatoire | Oui |
| NTP | Obligatoire | Oui |
| DNS (délégation de domaine) | Obligatoire | **Non** |
| DNS resolvers | Optionnel | Oui |
| Syslog | Optionnel mais recommandé | Oui |
| Sauvegarde S3 | Optionnel mais recommandé | Oui |
| Stockage long terme des métriques S3 | Optionnel mais recommandé | Oui |
| LDAP | Optionnel | Oui |
| Clé SSH publique | Optionnel mais recommandé | Oui |

Portez une attention particulière aux pré-requis **non modifiables après installation** : ils conditionneront durablement votre plateforme.

## Aller plus loin

- [OPCP - Intégration réseau et connexion à la plateforme](/links/hosted-private-cloud/opcp-network-architecture)
- [Mise en route de votre OPCP](/links/hosted-private-cloud/opcp-getting-started)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
