---
title: Comment utiliser les comptes de service pour se connecter à OpenStack
excerpt: "Comment se connecter aux API ou lignes de commande OpenStack avec ses comptes de service OVHcloud"
updated: 2023-08-21
---

> [!warning]
>
> Cette fonctionnalité est actuellement en bêta. Retrouvez plus d'informations sur <https://labs.ovhcloud.com/fr/>.
>

## Objectif

Pour automatiser des appels à des APIs protégées, il faut fournir des identifiants au code qui s'en charge. Avec les comptes de service OVHcloud, il est possible d'avoir un seul identifiant par script pour l'utilisation des différentes API proposées par les produits de OVHcloud ([API de OVHcloud](/pages/account/customer/console-preview), [API OpenStack](/pages/platform/public-cloud/starting_with_nova), etc.).

Ce guide vous détaille comment utiliser les comptes de service afin de se connecter aux APIs OpenStack.

Cela vous permet : 

- d'intégrer des alertes en provenance de votre infrastructure ;
- de gérer la montée en charge de votre infrastructure dynamiquement ;
- d'automatiser la résolution des incidents les plus courants.

## Prérequis

- Un [commpte client OVHcloud](/pages/account/customer/ovhcloud-account-creation).
- Savoir configurer des [politiques d'accès via API](/pages/account/customer/iam-policies-api).
- Vous savez utiliser les APIs de Openstack [Débuter avec l'api Openstack](/pages/platform/public-cloud/starting_with_nova)
- Avoir créé un [compte de service via API](/pages/account/policies/manage-service-account).

## En pratique

A des fins d'exemple dans ce guide, nous utiliserons le compte de service **urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f** pour accéder au projet Public Cloud 
**urn:v1:eu:resource:publicCloudProject:0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f**. 

N'oubliez pas de modifier ces valeurs pour correspondre aux vôtres.

### Associer des droits d'accès à OpenStack à son compte de service

Avant toute chose, il faut que notre compte de service puisse accèder à votre infrastructure OpenStack. OVHcloud fournit 11 niveaux de droits utilisables au sein d'OpenStack. Ils sont décrits dans le tableau suivant : 

| Droits OpenStack                                      | Nova: compute_manage | Nova: compute_snapshot_manage | Nova: compute_read | Swift: objectstore_all | glance: image_manage | glance: image_read | glance: image_import | Cinder: volume_manage | Cinder: volume_snapshot_manage | Cinder: volume_read | Neutron: network_manage | Neutron: network_read | Neutron: network_secgroup_manage | Neutron: network_secgroup_read | AI Training: ai_training_all | AI Training: ai_training_read | 
| :---------------------------------------------------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| publicCloudProject:openstack:administrator            |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |     |     |
| publicCloudProject:openstack:backupOperator           |     |  x  |  x  |     |     |  x  |  x  |     |  x  |  x  |     |     |     |     |     |     |
| publicCloudProject:openstack:computeOperator          |  x  |  x  |  x  |     |     |  x  |     |     |     |  x  |     |  x  |     |  x  |     |     |
| publicCloudProject:openstack:imageOperator            |     |     |     |     |  x  |  x  |  x  |     |     |     |     |     |     |     |     |     |
| publicCloudProject:openstack:infrastructureSupervisor |     |     |  x  |     |     |  x  |     |     |     |  x  |     |  x  |     |  x  |     |     |
| publicCloudProject:openstack:networkOperator          |     |     |     |     |     |     |     |     |     |     |  x  |  x  |     |  x  |     |     |
| publicCloudProject:openstack:networkSecurityOperator  |     |     |     |     |     |     |     |     |     |     |     |     |  x  |  x  |     |     |
| publicCloudProject:openstack:objectstoreOperator      |     |     |     |  x  |     |     |     |     |     |     |     |     |     |     |     |     |
| publicCloudProject:openstack:volumeOperator           |     |     |     |     |     |     |     |  x  |  x  |  x  |     |     |     |     |     |     |
| publicCloudProject:ai:aiTrainingOperator              |     |     |     |     |     |     |     |     |     |     |     |     |     |     |  x  |  x  |
| publicCloudProject:ai:aiTrainingRead                  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |  x  |


Pour notre exemple, nous souhaitons ajouter le droit `publicCloudProject:openstack:infrastructureSupervisor` qui permet de récupérer des informations sur notre infrastructure. Il peut être utile pour mettre en place des scripts de monitoring.

Vous pouvez désormais ajouter la politique d'accès suivante : 

```json
{
  "description": "Demo for service account guide with openstack",
  "identities": [
    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f"
  ],
  "name": "Demo-service-account",
  "permissions": {
    "allow": [
      {
        "action": "publicCloudProject:openstack:infrastructureSupervisor"
      }
    ]
  },
  "resources": [
    {
        "urn": "urn:v1:eu:resource:publicCloudProject:0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f"
    }
  ]
}
```

### Utiliser un compte de service avec la ligne de commande (CLI) OpenStack <a name="openstack-cli"></a>

Si vous utilisez votre infrastructure OpenStack avec la ligne de commande, vous devez utiliser les variables d'environnement suivantes : 

```bash
export OS_AUTH_TYPE=v3oidcclientcredentials
export OS_PROTOCOL=openid
export OS_ACCESS_TOKEN_TYPE=id_token
export OS_AUTH_URL=https://auth.cloud.ovh.net/v3
```

Si vous utilisez les services de OVHcloud depuis la région EMEA, ajoutez les variables suivantes :

```bash
export OS_IDENTITY_PROVIDER=ovhcloud-emea
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration
```

Si vous utilisez les services de OVHcloud depuis la région « Rest of the World », ajoutez les variables suivantes :

```bash
export OS_IDENTITY_PROVIDER=ovhcloud-world
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.ca/role-adapter/urn:v1:ca:resource:publicCloudProject:pci/.well-known/openid-configuration
```

Puis ajoutez les variables suivantes avec les valeurs correspondant à votre configuration :

```bash
export OS_PROJECT_ID=0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f
export OS_CLIENT_ID=0f0f0f0f0f0f0f0f
export OS_CLIENT_SECRET=xxxx
export OS_REGION_NAME=GRA1
```

- **OS_PROJECT_ID**: identifiant de votre projet Public Cloud ;
- **OS_CLIENT_ID**: identifiant de votre compte de service ;
- **OS_CLIENT_SECRET**: secret de votre compte de service ;
- **OS_REGION_NAME**: région concernée par votre script.

Vous pouvez désormais utiliser votre ligne de commande pour observer vos machines virtuelles.

```bash
$ openstack server list
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| ID                                   | Name                | Status | Networks                                        | Image     | Flavor |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| 0f0f0f0f-0f0f-0f0f-0f0f-0f0f0f0f0ff0 | name_vm             | ACTIVE | Ext-Net=127.0.0.1,                              | Debian 12 | d2-2   |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
```

Vous n'aurez cependant pas accès aux services Object Storage Swift avec ce compte de service :

```bash
$ openstack container list
Forbidden (HTTP 403) (Request-ID: 0f0f0f0f0f0f0f0f0f0f0f0-000f0f0f0f)
```

### Utiliser le compte de service en utilisant le SDK Python

Pour se connecter en utilisant le SDK Python et les accès de OVHcloud, vous pouvez utiliser deux techniques :

- **Les variables d'environnement** : comme pour la CLI, vous pouvez configurer vos accès avec les variables d'environnement. Ce sont les mêmes que celles documentées dans la partie [Utiliser un compte de service avec la ligne de commande (CLI) Openstack](#openstack-cli)
- **Un fichier de configuration clouds.yaml**: si vous souhaitez déployer votre configuration avec un fichier clouds.yaml comme indiqué dans la [documentation officielle Openstack](https://docs.openstack.org/openstacksdk/2023.1/user/config/configuration.html#openstack-config), vous devez suivre le format suivant: 

```yaml
clouds:
  ovhcloud:
    auth_type: 'v3oidcclientcredentials'
    region_name: GRA
    auth:
      protocol: 'openid'
      access_token_type: 'id_token'
      auth_url: 'https://auth.cloud.ovh.net/v3'
      identity_provider: 'ovhcloud-emea'
      discovery_endpoint: 'https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration'
      project_id: '0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f'
      client_id: '0f0f0f0f0f0f0f0f'
      client_secret: 'xxxx'
```

L'exemple précédent fonctionne sur la région EMEA. Si vous utilisez les services de OVHcloud depuis la région "Rest of the World", modifiez les lignes suivantes avec ces valeurs :

-  identity_provider: `ovhcloud-world`
-  discovery_endpoint: `https://iam.ovh.ca/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration`

Pour rappel, n'oubliez pas de remplacer les variables de ces exemples par les valeurs correspondant à votre configuration.

Puis ajoutez les variables suivantes avec les valeurs correspondant à votre configuration :

- **project_id**: identifiant de votre projet Public Cloud ;
- **client_id**: identifiant de votre compte de service ;
- **client_secret**: secret de votre compte de service ;
- **region_name**: région concernée par votre script.

Vous pouvez désormais utiliser votre code Python pour accéder aux services autorisés par la politique d'accès associée à votre compte de service. Si l'on reprend l'exemple précédent, vous pourrez accèder à la liste des serveurs de la façon suivante :

```bash
$ virtualenv iam-openstack
$ pip install openstacksdk
$ cat clouds.yaml
clouds:
  ovhcloud:
    auth_type: 'v3oidcclientcredentials'
    region_name: GRA1
    auth:
      protocol: 'openid'
      access_token_type: 'id_token'
      auth_url: 'https://auth.cloud.ovh.net/v3'
      identity_provider: 'ovhcloud-emea'
      discovery_endpoint: 'https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration'
      project_id: '0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f'
      client_id: '0f0f0f0f0f0f0f0f'
      client_secret: 'xxxx'
$ cat list-servers.py
import openstack

# Initialize connection
conn = openstack.connect(cloud='ovhcloud')

# List the servers
for server in conn.compute.servers():
    print("ID: #", server.id)
    print("Name: ", server.name)
$ python3 list-servers.py
ID: # 0f0f0f0f-0f0f-0f0f-0f0f-0f0f0f0f0ff0
Name:  name-vm
```

Vous n'aurez cependant pas accès aux containers des services Object Storage :

```bash
$ virtualenv iam-openstack
$ pip install openstacksdk
$ cat clouds.yaml
clouds:
  ovhcloud:
    auth_type: 'v3oidcclientcredentials'
    region_name: GRA
    auth:
      protocol: 'openid'
      access_token_type: 'id_token'
      auth_url: 'https://auth.cloud.ovh.net/v3'
      identity_provider: 'ovhcloud-emea'
      discovery_endpoint: 'https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration'
      project_id: '0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f'
      client_id: '0f0f0f0f0f0f0f0f'
      client_secret: 'xxxx'
$ cat list-containers.py
import openstack

# Initialize connection
conn = openstack.connect(cloud='ovhcloud')

# List the servers
for container in conn.object_store.containers():
    print(container.toDict())
$ python3 list-containers.py
Traceback (most recent call last):
  File "list-objects.py", line 10, in <module>
    for container in conn.object_store.containers():
  File "/Users/ovhcloud/Library/Python/3.7/lib/python/site-packages/openstack/resource.py", line 2077, in list
    exceptions.raise_from_response(response)
  File "/Users/ovhcloud/Library/Python/3.7/lib/python/site-packages/openstack/exceptions.py", line 268, in raise_from_response
    request_id=request_id,
openstack.exceptions.ForbiddenException: ForbiddenException: 403: Client Error for url: https://storage.gra.cloud.ovh.net/v1/AUTH_0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f/, ForbiddenAccess was denied to this resource.
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.