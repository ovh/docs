---
title: "Gestion des droits IAM - Bare Metal Pod SecNumCloud"
excerpt: "Découvrez comment gérer les utilisateurs, configurer leurs droits et attribuer les rôles OpenStack sur votre Bare Metal Pod SecNumCloud via Keycloak."
updated: 2026-04-28
---

## Objectif

Ce guide explique comment gérer les droits et les accès (IAM - Identity and Access Management) de votre **Bare Metal Pod SecNumCloud**.

L'ensemble de l'authentification est centralisé dans **Keycloak**, qui sert de point d'entrée unique pour :

- L'accès au **Dashboard** (tableau de bord unifié du service)
- L'accès à l'interface graphique **OpenStack Horizon**
- L'accès aux **APIs OpenStack** (Keystone, Nova, Neutron, Glance, Ironic...)

## Prérequis

- Disposer d'un **Bare Metal Pod SecNumCloud** livré et opérationnel
- Avoir accès à l'interface Keycloak avec un compte disposant du rôle `pod_operator` ou supérieur
- Avoir pris connaissance du guide [Mise en route de votre Bare Metal Pod SecNumCloud](/pages/hosted_private_cloud/baremetal_pod/snc_getting_started)

## En pratique

### Architecture d'authentification

Toute l'authentification du **Bare Metal Pod** est centralisée dans **Keycloak**. Un seul et même compte utilisateur Keycloak donne accès à l'ensemble des services du pod : dashboard, OpenStack Horizon et APIs OpenStack.

### Hiérarchie des rôles

Le modèle IAM du **Bare Metal Pod SecNumCloud** repose sur deux niveaux d'accès.

#### Accès par défaut

Tout utilisateur enregistré dans Keycloak, sans rôle spécifique attribué, dispose d'un accès par défaut lui permettant de :

- Se connecter au **Dashboard** et gérer ses propres paramètres de compte Keycloak
- Accéder à l'interface **OpenStack** et aux projets pour lesquels un `pod_operator` lui a attribué des droits via des attributs de projet

> [!primary]
>
> Un utilisateur sans attribut de projet configuré pourra se connecter au dashboard mais n'aura accès à aucun projet OpenStack tant qu'un `pod_operator` ne lui aura pas assigné des droits.
>

#### Rôle `pod_operator`

Le rôle `pod_operator` est attribué par OVHcloud au premier compte d'accès à la plateforme lors de la livraison du service. Ce compte initial peut ensuite assigner librement ce rôle à d'autres utilisateurs du realm pod.

Il donne les capacités supplémentaires suivantes :

- Gérer les utilisateurs, groupes et rôles au sein du realm pod (créer des comptes, attribuer des droits OpenStack via les attributs de projet)
- Faire une demande de délégation de nœuds auprès du support OVHcloud (nécessaire pour certaines configurations spécifiques comme le LACP ou le RAID logiciel)

### Matrice des droits

Le tableau ci-dessous récapitule les accès de chaque rôle sur les applications intégrées.

**Légende** : ✅ Autorisé | ❌ Non autorisé | 🟡 Partiel (conditionné par les attributs de projet)

| Application   | Permission                      | Default   | `pod_operator` |
|---------------|---------------------------------|:---------:|:--------------:|
| **Keycloak**  | Voir ses paramètres de compte   |     ✅     |       ✅        |
| **Keycloak**  | Gérer les utilisateurs Keycloak |     ❌     |       ✅        |
| **OpenStack** | view                            |    🟡     |       🟡       |
| **OpenStack** | member (édition)                |    🟡     |       🟡       |
| **Dashboard** | Iframe OpenStack                |     ✅     |       ✅        |
| **Grafana**   | view                            |     ❌     |       ✅        |
| **Prometheus**| view                            |     ❌     |       ✅        |
| **Dashboard** | Iframe Grafana                  |     ❌     |       ✅        |
| **Dashboard** | Iframe Prometheus               |     ❌     |       ✅        |

> [!primary]
>
> Les accès OpenStack marqués 🟡 sont conditionnés par la présence d'**attributs de projet** sur l'utilisateur ou son groupe dans Keycloak. Sans attribut de projet configuré, l'utilisateur ne pourra pas accéder aux ressources OpenStack.
>

### Configurer les droits OpenStack via les attributs Keycloak

Les droits d'accès aux projets OpenStack se définissent directement dans les **attributs de l'utilisateur** (ou du groupe) dans Keycloak. Cela permet de spécifier sur quel(s) projet(s) OpenStack un utilisateur peut opérer, et avec quel(s) rôle(s).

#### Ajouter un attribut de projet sur un utilisateur

Dans l'interface Keycloak, accédez à l'utilisateur concerné, puis ouvrez l'onglet **Attributes**.

Ajoutez un nouvel attribut avec les valeurs suivantes :

- **Clé** : `project`
- **Valeur** : un objet JSON décrivant le projet et les rôles à attribuer

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "nom-du-projet",
    "roles": [
        {
            "name": "member"
        },
        {
            "name": "reader"
        }
    ]
}
```

Les rôles OpenStack disponibles sont :

| Rôle OpenStack | Description                    |
|----------------|--------------------------------|
| `member`       | Droits d'édition sur le projet |
| `reader`       | Lecture seule sur le projet    |

> [!primary]
>
> Si le projet OpenStack portant le nom indiqué n'existe pas encore, il sera **créé automatiquement** lors de la première connexion de l'utilisateur.
>

#### Attribuer plusieurs projets à un utilisateur

Vous pouvez ajouter **plusieurs attributs `project`** pour un même utilisateur ou groupe. Keycloak les fusionne automatiquement en un attribut `projects` dans le token transmis à Keystone.

Exemple pour un utilisateur accédant à deux projets :

**Attribut 1** (clé : `project`) :

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "projet-production",
    "roles": [
        {
            "name": "member"
        }
    ]
}
```

**Attribut 2** (clé : `project`) :

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "projet-staging",
    "roles": [
        {
            "name": "member"
        },
        {
            "name": "reader"
        }
    ]
}
```

#### Configurer les attributs sur un groupe

Vous pouvez appliquer la même configuration à un **groupe Keycloak** : tous les membres héritent automatiquement des attributs de projet qui y sont définis.

Dans Keycloak, accédez à **Groups**, sélectionnez le groupe souhaité, puis renseignez les attributs `project` de la même manière que pour un utilisateur individuel.

> [!primary]
>
> Les attributs définis sur un groupe et ceux définis directement sur l'utilisateur sont fusionnés. Un utilisateur peut ainsi bénéficier de projets issus de plusieurs groupes en plus de ses propres attributs.
>

### Lister l'ensemble des droits

#### Via la CLI OpenStack

Pour lister les assignations de rôles actives dans OpenStack :

```bash
openstack role assignment list --names
```

Pour lister les rôles disponibles sur la plateforme :

```bash
openstack role list
```

> [!warning]
>
> Ces commandes ne retournent que les utilisateurs qui se sont **déjà authentifiés** au moins une fois via OpenStack. Les utilisateurs présents dans Keycloak mais ne s'étant jamais connectés à OpenStack n'apparaîtront pas dans ces résultats.
>

#### Via l'API Keycloak (vue complète)

Pour obtenir une vue exhaustive des droits, y compris pour les utilisateurs Keycloak ne s'étant jamais connectés à OpenStack, interrogez directement l'API Keycloak et consolidez manuellement les attributs de projet.

Le script utilise un **service account** Keycloak, ce qui évite toute dépendance aux credentials utilisateur et aux OTP. Suivez les étapes ci-dessous pour le créer avant d'exécuter le script.

##### Créer le service account dans Keycloak

**1. Créer un nouveau client**

Dans l'interface Keycloak, sélectionnez votre realm pod puis accédez à **Clients** > **Create client**.

Renseignez les champs suivants :

- **Client type** : `OpenID Connect`
- **Client ID** : choisissez un nom explicite, par exemple `iam-audit`

Cliquez sur **Next**.

**2. Activer le Service Account**

Sur l'écran **Capability config**, activez uniquement :

- **Service accounts roles** : `On`

Désactivez **Standard flow** et **Direct access grants** s'ils sont activés. Cliquez sur **Save**.

**3. Récupérer le Client Secret**

Dans votre client nouvellement créé, ouvrez l'onglet **Credentials**. Copiez la valeur du champ **Client secret** — c'est la valeur à utiliser pour `CLIENT_SECRET` dans le script.

**4. Assigner le rôle `view-users`**

Ouvrez l'onglet **Service accounts roles** de votre client, puis cliquez sur **Assign role**.

Dans le filtre, sélectionnez **Filter by clients** et recherchez `realm-management`. Assignez le rôle **view-users**.

> [!primary]
>
> Le rôle `view-users` du client `realm-management` permet au service account de lister les utilisateurs du realm sans lui donner aucun droit de modification.
>

##### Prérequis : installer les librairies nécessaires

Assurez-vous d'avoir Python 3 installé, puis installez les librairies requises :

```bash
pip install python-keycloak requests
```

##### Script de récupération des droits

Les droits OpenStack d'un utilisateur peuvent provenir de plusieurs sources : attributs définis directement sur son compte, hérités de groupes, de groupes parents ou encore de rôles. Cette combinaison peut rendre difficile la lecture des permissions effectives depuis l'interface d'administration.

Pour vérifier les droits d'un utilisateur en particulier, vous pouvez utiliser l'interface web Keycloak : **Clients** > sélectionner le client `keystone` (client OpenStack) > **Client scopes** > **Evaluate** > sélectionner l'utilisateur > **Generate access token**.

Le script ci-dessous est un exemple d'utilisation de l'API Keycloak pour récupérer ces mêmes informations de manière programmatique. En interrogeant Keycloak comme le ferait Keystone, il permet d'obtenir une **vue claire et consolidée des permissions effectives** de l'ensemble des utilisateurs actifs du realm en une seule exécution.

Ce script utilise le même mécanisme que le bouton **Generate access token** de l'interface Keycloak, via l'endpoint d'évaluation des scopes. C'est la source de vérité : groupes, sous-groupes et attributs utilisateur sont tous fusionnés par Keycloak lui-même.

```python
import json
import requests
from keycloak import KeycloakAdmin

KEYCLOAK_URL = "https://<votre-keycloak>"
REALM = "pod"
CLIENT_ID = "<client-id>"
CLIENT_SECRET = "<client-secret>"

kc = KeycloakAdmin(
    server_url=KEYCLOAK_URL,
    realm_name=REALM,
    client_id=CLIENT_ID,
    client_secret_key=CLIENT_SECRET
)

# Obtenir le token du service account
admin_token = requests.post(
    f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/token",
    data={
        "grant_type": "client_credentials",
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
    }
).json()['access_token']

# Récupérer l'UUID du client keystone
keystone_uuid = kc.get_client_id("keystone")

# Pour chaque utilisateur actif, évaluer le token et afficher les projets effectifs
for user in kc.get_users():
    if not user.get('enabled'):
        continue
    try:
        resp = requests.get(
            f"{KEYCLOAK_URL}/admin/realms/{REALM}/clients/{keystone_uuid}"
            f"/evaluate-scopes/generate-example-access-token",
            params={"userId": user['id'], "scope": "openid"},
            headers={"Authorization": f"Bearer {admin_token}"}
        )
        if not resp.ok:
            print(f"[DEBUG] status={resp.status_code} body={resp.text}")
            resp.raise_for_status()
        claims = resp.json()
        # projects peut être une chaîne JSON ou une liste selon la version de Keycloak
        projects_raw = (
            claims.get('projects')
            or claims.get('otherClaims', {}).get('projects', [])
        )
        if isinstance(projects_raw, str):
            projects_raw = json.loads(projects_raw)
        print(json.dumps({
            "username": user['username'],
            "effective_projects": projects_raw
        }, indent=2))
    except Exception as e:
        print(f"[!] {user['username']}: {e}")
```

Ce script affiche pour chaque utilisateur le claim `projects` **tel que Keystone le recevra**, incluant les attributs propres, hérités des groupes directs et de tous les groupes parents.

> [!primary]
>
> Une alternative sans script est disponible directement dans l'interface Keycloak : **Clients** > sélectionner le client `keystone` (client OpenStack) > **Client scopes** > **Evaluate** > sélectionner un utilisateur > **Generate access token**. Cela affiche le token exact qui sera transmis à Keystone pour cet utilisateur.
>

## Aller plus loin

Pour une formation ou une assistance technique sur la mise en œuvre de nos solutions, contactez votre commercial ou rendez-vous sur la page [Professional Services](/links/professional-services) afin d'obtenir un devis et une analyse personnalisée de votre projet par nos experts.

Échangez avec notre [communauté d'utilisateurs](/links/community).
