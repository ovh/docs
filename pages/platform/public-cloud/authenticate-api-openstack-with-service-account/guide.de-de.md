---
title: How to use service accounts to connect to OpenStack (EN)
excerpt: "How to log in to OpenStack APIs or command lines with OVHcloud service accounts"
updated: 2023-08-24
---

> [!warning]
>
> This feature is currently in beta. Find more information at <https://labs.ovhcloud.com/en/>.
>

## Objective

To automate calls to protected APIs, you need to provide credentials to the code that handles them. With OVHcloud service accounts, it is possible to have a single ID per script for the use of the different APIs offered by OVHcloud products ([OVHcloud API](/pages/account/api/console-preview), [OpenStack API](/pages/platform/public-cloud/starting_with_nova), etc.).

This guide details how to use service accounts to connect to OpenStack APIs.

This allows you to: 

- Integrate alerts from your infrastructure.
- Dynamically manage the scalability of your infrastructure.
- Automate the resolution of the most common incidents.

## Requirements

- An [OVHcloud customer account](/pages/account/customer/ovhcloud-account-creation).
- You know [how to configure access policies via API](/pages/account/customer/iam-policies-api).
- You know [how to use the OpenStack API](/pages/platform/public-cloud/starting_with_nova)
- You have created a [service account via API](/pages/account/policies/manage-service-account).

## Instructions

For example purposes in this guide, we will use the service account **urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f** to access the Public Cloud project **urn:v1:eu:resource:publicCloudProject:0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f**.

You must change these values to match your own.

### Assign OpenStack access rights to their service account

First of all, our service account must be able to access your OpenStack infrastructure. OVHcloud provides 11 levels of rights that can be used within OpenStack. They are described in the following table: 

| OpenStack rights                                      | Nova: compute_manage | Nova: compute_snapshot_manage | Nova: compute_read | Swift: objectstore_all | glance: image_manage | glance: image_read | glance: image_import | Cinder: volume_manage | Cinder: volume_snapshot_manage | Cinder: volume_read | Neutron: network_manage | Neutron: network_read | Neutron: network_secgroup_manage | Neutron: network_secgroup_read | AI Training: ai_training_all | AI Training: ai_training_read | 
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


For our example, we would like to add the `publicCloudProject:openstack:infrastructureSupervisor` right, which can be used to retrieve information on our infrastructure. It can be useful for setting up monitoring scripts.

You can now add the following access policy: 

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

### Using a service account with the OpenStack command line (CLI) <a name="openstack-cli"></a>

If you are using your OpenStack infrastructure with the command line, you will need to use the following environment variables: 

```bash
export OS_AUTH_TYPE=v3oidcclientcredentials
export OS_PROTOCOL=openid
export OS_ACCESS_TOKEN_TYPE=id_token
export OS_AUTH_URL=https://auth.cloud.ovh.net/v3
```


If you are using OVHcloud services from EMEA, add the following variables:

```bash
export OS_IDENTITY_PROVIDER=ovhcloud-emea
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration
```

If you are using OVHcloud services from the “Rest of the World” regions, add the following variables:

```bash
export OS_IDENTITY_PROVIDER=ovhcloud-world
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.ca/role-adapter/urn:v1:ca:resource:publicCloudProject:pci/.well-known/openid-configuration
```

Then add the following variables with the values corresponding to your configuration:

```bash
export OS_PROJECT_ID=0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f
export OS_CLIENT_ID=0f0f0f0f0f0f0f0f
export OS_CLIENT_SECRET=xxxx
export OS_REGION_NAME=GRA1
```

- **OS_PROJECT_ID**: your Public Cloud project ID.
- **OS_CLIENT_ID**: your service account ID.
- **OS_CLIENT_SECRET**: your service account secret.
- **OS_REGION_NAME**: ehe region affected by your script.

You can now use your command line to observe your virtual machines.

```bash
$ openstack server list
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| ID                                   | Name                | Status | Networks                                        | Image     | Flavor |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| 0f0f0f0f-0f0f-0f0f-0f0f-0f0f0f0f0ff0 | name_vm             | ACTIVE | Ext-Net=127.0.0.1,                              | Debian 12 | d2-2   |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
```

However, you will not have access to Swift Object Storage services with this service account:

```bash
$ openstack container list
Forbidden (HTTP 403) (Request-ID: 0f0f0f0f0f0f0f0f0f0f0f0-000f0f0f0f)
```

### Using the service account with the Python SDK

To connect using the Python SDK and OVHcloud access, you can use two techniques:

- **Environment variables**: As with the CLI, you can configure your access with environment variables. These are the same as those documented in the [Use a service account with the Openstack command line (CLI)](#openstack-cli) section above.
- **A clouds.yaml configuration file**: if you want to deploy your configuration with a clouds.yaml file as described in the [official Openstack documentation](https://docs.openstack.org/openstacksdk/2023.1/user/config/configuration.html#openstack-config), you must follow the following format: 

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

The previous example works for the EMEA region. If you are using OVHcloud services from the "Rest of the World" regions, edit the following lines with these values:

- identity_provider: `ovhcloud-world`
- discovery_endpoint: `https://iam.ovh.ca/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration`

As a reminder, you must replace the variables in these examples with the values that match your configuration.

Then add the following variables with the values corresponding to your configuration:

- **project_id**: your Public Cloud project ID.
- **client_id**: your service account ID.
- **client_secret**: your service account secret.
- **region_name**: the region concerned by your script.

You can now use your Python code to access the services authorized by the access policy associated with your service account. Using the previous example, you can access the list of servers as follows:

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

However, you will not have access to the Object Storage service containers:

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

## Go further

Join our community of users on <https://community.ovh.com/en/>.
