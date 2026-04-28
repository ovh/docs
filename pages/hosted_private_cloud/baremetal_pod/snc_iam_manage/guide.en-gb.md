---
title: "IAM Rights Management - Bare Metal Pod SecNumCloud"
excerpt: "Find out how to manage users, configure their access rights, and assign OpenStack roles on your Bare Metal Pod SecNumCloud via Keycloak"
updated: 2026-04-28
---

## Objective

This guide explains how to manage Identity and Access Management (IAM) on your **Bare Metal Pod SecNumCloud**.

All authentication is centralised in **Keycloak**, which acts as the single entry point for:

- Access to the **Dashboard** (unified service portal)
- Access to the **OpenStack Horizon** graphical interface
- Access to the **OpenStack APIs** (Keystone, Nova, Neutron, Glance, Ironic...)

## Requirements

- A **Bare Metal Pod SecNumCloud** delivered and operational
- Access to the Keycloak interface with an account holding the `pod_operator` role or higher
- Having read the [Getting started with your Bare Metal Pod SecNumCloud](/pages/hosted_private_cloud/baremetal_pod/snc_getting_started) guide

## Instructions

### Authentication architecture

All **Bare Metal Pod** authentication is centralised in **Keycloak**. A single Keycloak user account grants access to all pod services: dashboard, OpenStack Horizon, and OpenStack APIs.

### Role hierarchy

The IAM model of the **Bare Metal Pod SecNumCloud** is based on two access levels.

#### Default access

Any user registered in Keycloak, without a specific role assigned, has default access allowing them to:

- Log in to the **Dashboard** and manage their own Keycloak account settings
- Access **OpenStack** and the projects for which a `pod_operator` has granted them rights via project attributes

> [!primary]
>
> A user without any project attribute configured will be able to log in to the dashboard but will have no access to any OpenStack project until a `pod_operator` assigns them rights.
>

#### `pod_operator` role

The `pod_operator` role is assigned by OVHcloud to the first platform access account upon service delivery. This initial account can then freely assign the role to any other users within the pod realm.

It provides the following additional capabilities:

- Manage users, groups, and roles within the pod realm (create accounts, assign OpenStack rights via project attributes)
- Request node delegation from OVHcloud support (required for specific configurations such as LACP or software RAID)

### Access matrix

The table below summarises the access each level has across integrated applications.

**Legend**: ✅ Allowed | ❌ Not allowed | 🟡 Partial (depends on project attributes)

| Application | Permission | Default | `pod_operator` |
|-------------|------------|:-------:|:--------------:|
| **Keycloak** | View account settings | ✅ | ✅ |
| **Keycloak** | Manage Keycloak users | ❌ | ✅ |
| **OpenStack** | view | 🟡 | 🟡 |
| **OpenStack** | member (edit) | 🟡 | 🟡 |
| **Dashboard** | OpenStack iframe | ✅ | ✅ |
| **Grafana** | view | ❌ | ✅ |
| **Prometheus** | view | ❌ | ✅ |
| **Dashboard** | Grafana iframe | ❌ | ✅ |
| **Dashboard** | Prometheus iframe | ❌ | ✅ |

> [!primary]
>
> OpenStack accesses marked 🟡 require **project attributes** to be configured on the user or their group in Keycloak. Without a project attribute, the user will not be able to access OpenStack resources.
>

### Configuring OpenStack rights via Keycloak attributes

OpenStack project access rights are defined directly as **user attributes** (or group attributes) in Keycloak. This allows you to specify which OpenStack project(s) a user can operate on and with which role(s).

#### Adding a project attribute to a user

In the Keycloak interface, navigate to the relevant user and open the **Attributes** tab.

Add a new attribute with the following values:

- **Key**: `project`
- **Value**: a JSON object describing the project and the roles to assign

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "project-name",
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

Available OpenStack roles are:

| OpenStack role | Description |
|----------------|-------------|
| `member` | Edit rights on the project |
| `reader` | Read-only access to the project |

> [!primary]
>
> If an OpenStack project with the specified name does not yet exist, it will be **created automatically** when the user first logs in.
>

#### Assigning multiple projects to a user

You can add multiple `project` attributes to the same user or group. Keycloak automatically merges them into a single `projects` attribute in the token passed to Keystone.

Example for a user accessing two projects:

**Attribute 1** (key: `project`):

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "production-project",
    "roles": [
        {
            "name": "member"
        }
    ]
}
```

**Attribute 2** (key: `project`):

```json
{
    "domain": {
        "name": "Default"
    },
    "name": "staging-project",
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

#### Configuring attributes on a group

You can apply the same configuration to a **Keycloak group** — all members automatically inherit the project attributes defined on it.

In Keycloak, navigate to **Groups**, select the target group, and fill in the `project` attributes in the same way as for an individual user.

> [!primary]
>
> Attributes defined on a group and those defined directly on a user are merged. A user can therefore benefit from projects coming from multiple groups in addition to their own attributes.
>

### Listing all access rights

#### Via the OpenStack CLI

To list active role assignments in OpenStack:

```bash
openstack role assignment list --names
```

To list roles available on the platform:

```bash
openstack role list
```

> [!warning]
>
> These commands only return users who have **already authenticated** at least once through OpenStack. Users present in Keycloak but who have never logged into OpenStack will not appear in these results.
>

#### Via the Keycloak API (complete view)

For an exhaustive view of rights — including Keycloak users who have never logged into OpenStack — query the Keycloak API directly and consolidate project attributes manually.

The script uses a **service account** in Keycloak, which avoids any dependency on user credentials or OTP. Follow the steps below to set it up before running the script.

##### Creating the service account in Keycloak

**1. Create a new client**

In the Keycloak interface, select your pod realm and navigate to **Clients** > **Create client**.

Fill in the following fields:

- **Client type**: `OpenID Connect`
- **Client ID**: choose a descriptive name, for example `iam-audit`

Click **Next**.

**2. Enable the Service Account**

On the **Capability config** screen, enable only:

- **Service accounts roles**: `On`

Disable **Standard flow** and **Direct access grants** if they are enabled. Click **Save**.

**3. Retrieve the Client Secret**

In your newly created client, open the **Credentials** tab. Copy the value of the **Client secret** field — this is the value to use for `CLIENT_SECRET` in the script.

**4. Assign the `view-users` role**

Open the **Service accounts roles** tab of your client, then click **Assign role**.

In the filter, select **Filter by clients** and search for `realm-management`. Assign the **view-users** role.

> [!primary]
>
> The `view-users` role from the `realm-management` client allows the service account to list realm users without granting any modification rights.
>

##### Prerequisite: install the required libraries

Make sure Python 3 is installed, then install the required libraries:

```bash
pip install python-keycloak requests
```

##### Rights retrieval script

A user's OpenStack rights can come from multiple sources: attributes defined directly on their account, inherited from groups, parent groups, or roles. This combination can make it difficult to read effective permissions from the administration interface.

To check the rights of a specific user, you can use the Keycloak web interface directly: **Clients** > select the `keystone` client (OpenStack client) > **Client scopes** > **Evaluate** > select the user > **Generate access token**.

The script below is an example of using the Keycloak API to retrieve this same information programmatically. By querying Keycloak the same way Keystone would, it provides a **clear and consolidated view of effective permissions** across all active users in the realm in a single run.

This script uses the same mechanism as the **Generate access token** button in the Keycloak interface, via the scope evaluation endpoint. This is the ground truth: groups, subgroups, and user attributes are all merged by Keycloak itself.

```python
import json
import requests
from keycloak import KeycloakAdmin

KEYCLOAK_URL = "https://<your-keycloak>"
REALM = "pod"
CLIENT_ID = "<client-id>"
CLIENT_SECRET = "<client-secret>"

kc = KeycloakAdmin(
    server_url=KEYCLOAK_URL,
    realm_name=REALM,
    client_id=CLIENT_ID,
    client_secret_key=CLIENT_SECRET
)

# Obtain the service account token
admin_token = requests.post(
    f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/token",
    data={
        "grant_type": "client_credentials",
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
    }
).json()['access_token']

# Retrieve the keystone client UUID
keystone_uuid = kc.get_client_id("keystone")

# For each active user, evaluate the token and display effective projects
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
        # projects can be a JSON string or a list depending on the Keycloak version
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

This script displays for each user the `projects` claim **exactly as Keystone will receive it**, including own attributes, inherited from direct groups, and all parent groups.

> [!primary]
>
> A no-script alternative is available directly in the Keycloak interface: **Clients** > select the `keystone` client (OpenStack client) > **Client scopes** > **Evaluate** > select a user > **Generate access token**. This shows the exact token that will be sent to Keystone for that user.
>

## Go further

For training or technical assistance with implementing our solutions, contact your sales representative or visit our [Professional Services](/links/professional-services) page to request a quote and a custom project analysis from our experts.

Join our [community of users](/links/community).
