---
title: "Gestion des droits IAM - On-Prem Cloud Platform"
excerpt: "Découvrez comment gérer les utilisateurs et leurs droits d'accès sur votre On-Prem Cloud Platform via Keycloak"
updated: 2026-04-28
---

## Objectif

Ce guide explique comment gérer les droits et les accès (IAM - Identity and Access Management) de votre **On-Prem Cloud Platform (OPCP)**.

L'accès aux services applicatifs est centralisé dans **Keycloak** (Realm Master), qui sert de point d'entrée unique pour :

- L'accès au **Dashboard** (tableau de bord unifié du service)
- L'accès à l'interface graphique **OpenStack Horizon**
- L'accès aux **APIs OpenStack** (Keystone, Nova, Neutron, Glance, Ironic...)
- L'accès aux outils de supervision : **Grafana**, **Netbox**, **Prometheus**

## Prérequis

- Disposer d'un **On-Prem Cloud Platform** livré et opérationnel
- Avoir accès à l'interface Keycloak avec un compte disposant du rôle `it_admin` ou supérieur
- Avoir pris connaissance du guide [Mise en route de votre OPCP](/pages/hosted_private_cloud/opcp/opcp-getting-started)

## En pratique

### Architecture d'authentification

Toute l'authentification de l'**OPCP** repose sur deux niveaux distincts :

- **L'accès au control plane** : accès SSH aux contrôleurs qui composent l'infrastructure de la plateforme, remis lors de la mise à disposition du service
- **L'accès aux services** : centralisé dans **Keycloak** (Realm Master), point d'entrée unique pour le Dashboard, OpenStack, Grafana, Netbox et Prometheus

### Accès au control plane

Lors de la mise à disposition de votre **OPCP**, des identifiants vous sont remis pour vous connecter en SSH aux différents contrôleurs qui composent le control plane de la plateforme.

Le périmètre d'accès du compte administrateur qui vous est remis varie selon le mode de gestion choisi.

#### Mode managé par OVHcloud

En mode managé, le compte administrateur qui vous est remis dispose de droits étendus permettant d'exécuter les outils d'administration de la solution :

- `opcp-cli` : outil en ligne de commande pour administrer la plateforme
- `opcp-diag` : outil de diagnostic du control plane

La gestion du déploiement et des mises à jour du control plane est assurée par OVHcloud.

#### Mode non managé par OVHcloud

En mode non managé, le compte administrateur qui vous est remis dispose des **pleins privilèges** sur le control plane, permettant de :

- Déployer le control plane
- Mettre à jour le control plane
- Accéder à l'ensemble des outils d'administration

> [!warning]
>
> En mode non managé, OVHcloud ne prend pas en charge les opérations d'administration du control plane. Vous êtes responsable du déploiement et des mises à jour.
>

#### Identifiants initiaux

Deux types d'identifiants vous sont remis à l'initialisation de votre OPCP :

**Compte Linux administrateur** : permet la connexion SSH aux contrôleurs. Par défaut, **l'authentification par mot de passe est désactivée** sur les contrôleurs. Lors de l'installation de votre OPCP, une clé SSH publique de votre choix peut être fournie à OVHcloud afin d'être déployée et de vous permettre un premier accès. Un mot de passe vous est également remis, utile uniquement pour accéder directement au serveur via la console en cas d'impossibilité de connexion SSH.

**Compte Keycloak administrateur** : fourni aussi bien en mode managé qu'en mode non managé, ce compte dispose des droits d'administration complets sur le Realm Master. Un mot de passe temporaire vous est attribué, que vous devez **changer dès la première connexion**.

> [!primary]
>
> Ces identifiants initiaux sont distincts des comptes utilisateurs que vous créerez ensuite dans Keycloak pour vos équipes. Conservez-les en lieu sûr et changez les mots de passe temporaires immédiatement après la livraison.
>

### Accéder à l'interface d'administration Keycloak

Deux méthodes permettent d'accéder à l'interface d'administration Keycloak de votre **OPCP**.

**Via le Dashboard** : connectez-vous à `admin.dashboard.<nomdedomaine>`, puis cliquez sur votre nom en haut à droite. Un menu apparaît avec un lien **IAM** qui vous redirige directement vers l'interface Keycloak.

![Lien IAM dans le menu du Dashboard](images/dashboard_iam_link.png){.thumbnail}

**Accès direct** : vous pouvez également accéder à Keycloak directement via `admin.keycloak.<nomdedomaine>`.

> [!primary]
>
> Remplacez `<nomdedomaine>` par le nom de domaine fourni lors de la livraison de votre OPCP.
>

### Hiérarchie des rôles

Le modèle IAM de l'**OPCP** repose sur quatre rôles distincts, du plus restreint au plus privilégié. Ces rôles constituent un point de départ, mais Keycloak vous offre toute la flexibilité nécessaire pour composer vos propres rôles et les assigner à des groupes d'utilisateurs selon les besoins de votre organisation.

> [!primary]
>
> Vous pouvez créer des rôles personnalisés dans Keycloak, en combinant les permissions disponibles, puis les assigner à des groupes d'utilisateurs. Référez-vous à la [documentation officielle Keycloak](https://www.keycloak.org/docs/latest/server_admin/index.html) pour la gestion avancée des rôles et des groupes.
>

#### Rôle `reader`

Profil supervision et audit. Ce rôle donne un accès en lecture aux outils de monitoring de la plateforme.

Il permet de :

- Consulter ses paramètres de compte dans Keycloak
- Accéder en lecture à **Netbox** (inventaire réseau)
- Accéder en lecture à **Prometheus**
- Accéder au **Dashboard** et aux iframes Grafana, Netbox et Prometheus
- Accéder à l'iframe **OpenStack** dans le Dashboard
- Accéder aux projets OpenStack en mode **reader** uniquement, sous réserve d'attributs de projet configurés dans Keycloak

> [!primary]
>
> L'accès OpenStack du rôle Keycloak `reader` est limité au rôle OpenStack `reader` (lecture seule). Il est conditionné par la présence d'attributs de projet sur le compte ou le groupe Keycloak. Sans attribut de projet, aucune ressource OpenStack n'est visible.
>

#### Rôle `dc_operator`

Opérateur datacenter. Ce rôle est destiné aux équipes en charge de l'infrastructure réseau et physique.

Il donne les accès supplémentaires suivants par rapport au `reader` :

- Accéder à **Grafana** en édition (modification des dashboards)
- Accéder à **Netbox** en tant qu'opérateur (création et modification des ressources réseau)
- Accéder au **Dashboard** (iframe Grafana, Netbox, Prometheus)

> [!primary]
>
> Le `dc_operator` n'a pas accès à **OpenStack** ni à l'administration des utilisateurs Keycloak.
>

#### Rôle `it_admin`

Opérateur principal de la plateforme. Ce rôle est destiné aux équipes IT qui exploitent les ressources de l'OPCP au quotidien.

Il donne les accès supplémentaires suivants par rapport au `dc_operator` :

- Gérer les utilisateurs du Realm Master dans Keycloak (création de comptes, attribution de droits)
- Accéder à **OpenStack** avec tous les droits (`reader`, `member`, `admin`)
- Accéder au **Dashboard** avec l'iframe OpenStack

> [!warning]
>
> Le rôle `it_admin` ne permet pas de modifier les paramètres globaux du realm Keycloak (politique de mot de passe, fédération d'identité, etc.). Ces actions sont réservées au `master_admin`.
>

#### Rôle `master_admin`

Administrateur de la plateforme. Ce rôle dispose de tous les droits, y compris l'administration complète du Realm Master Keycloak.

Il donne les accès supplémentaires suivants par rapport à l'`it_admin` :

- Modifier la configuration du Realm Master (politique de sécurité, fédération, etc.)
- Administrer **Netbox** avec tous les droits, y compris le rôle `admin`

> [!warning]
>
> Le rôle `master_admin` est attribué par OVHcloud lors de la livraison du service. Son usage doit être limité aux opérations d'administration de la plateforme qui ne peuvent pas être déléguées à un `it_admin`.
>

### Matrice des droits

Le tableau ci-dessous récapitule les accès de chaque rôle sur les applications intégrées.

**Légende** : ✅ Autorisé | ❌ Non autorisé | 🟡 Partiel (conditionné par les attributs de projet)

| Application | Permission | `reader` | `dc_operator` | `it_admin` | `master_admin` |
|---|---|:---:|:---:|:---:|:---:|
| **Keycloak** | Voir ses paramètres de compte | ✅ | ✅ | ✅ | ✅ |
| **Keycloak** | Gérer les utilisateurs du realm | ❌ | ❌ | ✅ | ✅ |
| **Keycloak** | Administrer le realm (politique, fédération) | ❌ | ❌ | ❌ | ✅ |
| **OpenStack** | reader (vue) | 🟡 | ❌ | ✅ | ✅ |
| **OpenStack** | member (édition) | ❌ | ❌ | ✅ | ✅ |
| **OpenStack** | admin | ❌ | ❌ | ✅ | ✅ |
| **Grafana** | edit (dashboards) | ❌ | ✅ | ✅ | ✅ |
| **Netbox** | reader | ✅ | ✅ | ✅ | ✅ |
| **Netbox** | operator | ❌ | ✅ | ✅ | ✅ |
| **Netbox** | admin | ❌ | ❌ | ❌ | ✅ |
| **Prometheus** | view | ✅ | ✅ | ✅ | ✅ |
| **Dashboard** | Keycloak — paramètres compte | ✅ | ✅ | ✅ | ✅ |
| **Dashboard** | Keycloak — administration utilisateurs | ❌ | ❌ | ✅ | ✅ |
| **Dashboard** | OpenStack (iframe) | ✅ | ❌ | ✅ | ✅ |
| **Dashboard** | Grafana (iframe) | ✅ | ✅ | ✅ | ✅ |
| **Dashboard** | Netbox (iframe) | ✅ | ✅ | ✅ | ✅ |
| **Dashboard** | Prometheus (iframe) | ✅ | ✅ | ✅ | ✅ |

> [!primary]
>
> L'accès OpenStack `reader` du rôle Keycloak `reader` est conditionné par la présence d'**attributs de projet** sur l'utilisateur ou son groupe dans Keycloak. Sans attribut de projet configuré, aucune ressource OpenStack n'est accessible.
>

### Créer un utilisateur et lui assigner un rôle

#### Créer un utilisateur

Dans l'interface Keycloak, assurez-vous d'être connecté sur le **Realm Master**, puis accédez à **Users** > **Add user**.

Renseignez les champs suivants :

- **Username** : identifiant de connexion de l'utilisateur
- **Email** : adresse e-mail (recommandé)
- **First name / Last name** : nom et prénom

Cliquez sur **Create**, puis ouvrez l'onglet **Credentials** pour définir un mot de passe temporaire. Activez l'option **Temporary** afin que l'utilisateur soit contraint de le changer à sa première connexion.

#### Assigner un rôle à un utilisateur

Dans la fiche de l'utilisateur, ouvrez l'onglet **Role mapping**, puis cliquez sur **Assign role**.

Dans le filtre, sélectionnez **Filter by realm roles**, puis recherchez et sélectionnez le rôle souhaité (`reader`, `dc_operator`, `it_admin` ou `master_admin`). Cliquez sur **Assign**.

> [!primary]
>
> Un utilisateur peut se voir assigner plusieurs rôles. Les permissions effectives sont l'union des droits de l'ensemble des rôles qui lui sont attribués.
>

#### Assigner un rôle à un groupe

Il est préférable d'assigner les rôles à des **groupes** plutôt qu'à des utilisateurs individuels, afin de simplifier la gestion des droits à grande échelle.

Dans Keycloak, accédez à **Groups** > **Create group**, nommez le groupe, puis ouvrez l'onglet **Role mapping** pour lui assigner le rôle souhaité.

Ajoutez ensuite les utilisateurs au groupe via leur fiche utilisateur, onglet **Groups** > **Join group**.

### Configurer les droits OpenStack via les attributs Keycloak

Pour le rôle `reader`, les droits d'accès aux projets OpenStack se définissent directement dans les **attributs de l'utilisateur** (ou du groupe) dans Keycloak.

#### Ajouter un attribut de projet sur un utilisateur

Dans l'interface Keycloak, accédez à l'utilisateur concerné, puis ouvrez l'onglet **Attributes**.

Ajoutez un nouvel attribut avec les valeurs suivantes :

- **Clé** : `project`
- **Valeur** : un objet JSON décrivant le projet et le rôle à attribuer

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "nom-du-projet",
    "roles": [
        {
            "name": "reader"
        }
    ]
}
```

> [!primary]
>
> Pour le rôle `reader`, seul le rôle OpenStack `reader` (lecture seule) peut être attribué via les attributs de projet. Les rôles `member` et `admin` restent réservés aux rôles `it_admin` et `master_admin`.
>

#### Attribuer plusieurs projets à un utilisateur

Il est possible d'ajouter **plusieurs attributs `project`** pour un même utilisateur ou groupe. Ils seront automatiquement fusionnés en un attribut `projects` dans le token transmis à Keystone.

#### Configurer les attributs sur un groupe

La même configuration peut être appliquée à un **groupe Keycloak**. Tous les membres du groupe hériteront automatiquement des attributs de projet définis sur ce groupe.

Dans Keycloak, accédez à **Groups**, sélectionnez le groupe souhaité, puis renseignez les attributs `project` de la même manière que pour un utilisateur individuel.

> [!primary]
>
> Les attributs définis sur un groupe et ceux définis directement sur l'utilisateur sont fusionnés. Un utilisateur peut ainsi bénéficier de projets issus de plusieurs groupes en plus de ses propres attributs.
>

#### Keycloak comme source unique de vérité

Nous recommandons de ne pas créer d'utilisateurs directement dans OpenStack, afin de conserver Keycloak comme **source unique de vérité** sur les comptes de la plateforme. Tout compte créé directement dans OpenStack échapperait au cycle de vie géré par Keycloak et ne bénéficierait pas du nettoyage automatique ni de la gestion centralisée des droits.

#### Comptes de service pour l'automatisation

Pour les besoins d'automatisation (Terraform, OpenTofu, scripts, pipelines CI/CD...), nous recommandons de créer un **compte dédié dans Keycloak** avec les permissions adaptées au périmètre de l'automate, puis de générer des **application credentials OpenStack** associés à ce compte.

Les application credentials permettent à vos outils d'automatisation de piloter OpenStack sans dépendre des credentials personnels d'un utilisateur. Un utilisateur connecté à OpenStack avec son compte Keycloak peut créer ses propres application credentials depuis l'interface Horizon, via **Identity** > **Application Credentials** > **Create Application Credentials**.

> [!primary]
>
> En cas de suppression du compte Keycloak associé, les application credentials OpenStack seront automatiquement révoqués. Veillez à ne pas lier des automates critiques à un compte personnel.
>

Pour configurer l'authentification Keycloak avec la CLI OpenStack et obtenir vos credentials, référez-vous au guide [Comment utiliser les APIs et obtenir les credentials](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials).

### Nettoyage automatique des comptes

La plateforme réagit aux événements de suppression d'utilisateur dans Keycloak : dès qu'un compte est supprimé du Realm Master, les utilisateurs et les **application credentials** OpenStack associés sont automatiquement supprimés.

> [!warning]
>
> La suppression d'un compte dans Keycloak entraîne la révocation immédiate des application credentials OpenStack associés. Anticipez cet impact avant toute suppression de compte, notamment si des automatisations ou des scripts utilisent ces credentials.
>

### Configuration avancée de Keycloak

L'ensemble des fonctionnalités officielles de Keycloak est disponible sur votre **OPCP**. Pour toute configuration avancée (politiques de mots de passe, gestion fine des rôles, configuration des clients, etc.), référez-vous à la [documentation officielle Keycloak](https://www.keycloak.org/docs/latest/server_admin/index.html).

#### Authentification multi-facteurs (MFA / OTP)

Nous recommandons fortement d'activer l'**authentification multi-facteurs** sur les comptes de votre plateforme, en particulier pour les rôles `it_admin` et `master_admin`. Keycloak supporte nativement le protocole TOTP (Time-based One-Time Password), compatible avec toute application d'authentification supportant ce standard ouvert, comme FreeOTP.

La configuration du MFA se fait au niveau du flux d'authentification du realm. Consultez la [documentation officielle Keycloak](https://www.keycloak.org/docs/latest/server_admin/index.html#post-login-flow-examples) pour mettre en place un flux post-login avec OTP obligatoire ou conditionnel selon les rôles.

#### Fédération d'identité et Identity Providers

Keycloak permet de fédérer des annuaires externes (Active Directory, LDAP) ou de connecter des Identity Providers tiers (SAML, OIDC). Par exemple, pour mettre en place une fédération vers un Active Directory, consultez la section dédiée de la [documentation officielle Keycloak](https://www.keycloak.org/docs/latest/server_admin/index.html#_user-storage-federation).

> [!warning]
>
> Dans le cas d'une fédération Keycloak ou de l'ajout d'un Identity Provider vers un endpoint externe, vous devez autoriser les flux réseau correspondants dans le fichier de configuration OPCP via la variable `keycloakAllowedEndpoints`.
>

```yaml
keycloakAllowedEndpoints:
    - host: "myactivedirectory.corp.com"
      port: 636
    - host: "keycloak.corp.com"
      port: 443
```

Chaque entrée correspond à un endpoint externe que Keycloak doit être autorisé à joindre. Ajoutez autant d'entrées que nécessaire selon votre configuration.

#### Automatisation avec OpenTofu / Terraform

La gestion des utilisateurs, groupes et rôles dans Keycloak peut être automatisée grâce à des outils d'Infrastructure as Code comme **OpenTofu** ou **Terraform**, en utilisant le provider officiel Keycloak.

Cela permet de gérer vos accès de manière déclarative, reproductible et versionnée.

Exemple de ressource pour créer un utilisateur :

```hcl
resource "keycloak_user" "john_doe" {
  realm_id = "master"
  username = "john.doe"
  enabled  = true

  email      = "john.doe@corp.com"
  first_name = "John"
  last_name  = "Doe"

  initial_password {
    value     = "changeme"
    temporary = true
  }
}
```

Pour l'ensemble des ressources disponibles (utilisateurs, groupes, rôles, fédération, etc.), référez-vous à la [documentation du provider Keycloak](https://registry.terraform.io/providers/keycloak/keycloak/latest/docs/resources/user).

### Lister l'ensemble des droits

#### Via opcp-diag (vue consolidée)

Pour obtenir une vue complète de l'ensemble des comptes et de leurs droits sur la plateforme, connectez-vous en SSH à un contrôleur puis exécutez :

```bash
opcp-diag audit
```

Cet outil affiche l'ensemble des comptes déclarés dans **Keycloak**, sur les **contrôleurs**, et dans les différents outils qui composent le control plane.

#### Options disponibles

| Option | Description |
|---|---|
| `-o, --format` | Format de sortie : `json` (défaut) ou `text` |
| `--only` | Restreindre l'audit à un ou plusieurs types, séparés par des virgules |

Les types d'audit disponibles pour `--only` sont :

| Type | Description |
|---|---|
| `keycloak_master` | Comptes et droits configurés dans le Realm Master Keycloak |
| `openstack` | Utilisateurs et rôles OpenStack |
| `linux` | Comptes présents sur les contrôleurs |
| `netbox` | Comptes dans Netbox, la CMDB de la plateforme |
| `nog` | Comptes dans NOG, le composant qui pilote la configuration des équipements réseau pour appliquer les réseaux Neutron |

Par exemple, pour auditer uniquement Keycloak et OpenStack :

```bash
opcp-diag audit --only keycloak_master,openstack
```

Pour une sortie lisible en mode texte :

```bash
opcp-diag audit --format text
```

#### Manipuler la sortie JSON

La sortie par défaut est au format **JSON**, ce qui permet de la manipuler et de la filtrer avec des outils comme `jq`. Par exemple :

```bash
# Exporter le résultat complet dans un fichier daté
opcp-diag audit > audit-$(date +%Y%m%d).json

# Auditer uniquement Keycloak et filtrer sur un utilisateur précis
opcp-diag audit --only keycloak_master | jq '.keycloak_master.users[] | select(.username == "john.doe")'
```

> [!primary]
>
> `opcp-diag audit` est la méthode recommandée pour auditer les accès de votre plateforme. Contrairement à la CLI OpenStack, elle couvre l'intégralité des comptes présents sur la plateforme, indépendamment de leur historique de connexion.
>

#### Via la CLI OpenStack

Pour lister les assignations de rôles actives dans OpenStack :

```bash
openstack role assignment list --names
```

Pour lister les rôles disponibles sur la plateforme :

```bash
openstack role list
```

> [!warning]
>
> Ces commandes ne retournent que les utilisateurs qui se sont **déjà authentifiés** au moins une fois via OpenStack. Les utilisateurs présents dans Keycloak mais n'ayant jamais effectué de connexion OpenStack n'apparaîtront pas dans ces résultats.
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez
votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse
personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
