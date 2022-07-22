---
title: How to use a custom gateway with a Managed Kubernetes cluster
excerpt: Find out how to use use a custom gateway with your Managed Kubernetes working with vRack private network.
slug: 
section: 
---

**Last updated 22nd July 2022**

# How to use a custom gateway with a Managed Kubernetes cluster.

## Objectives

TODO: Schema

## Pre-requisites

- A [Public Cloud project](https://docs.ovh.com/us/en/public-cloud/create_a_public_cloud_project/) in your OVHcloud account.
- The [OpenStack API CLI](https://docs.ovh.com/us/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) installed.
- Be familiar with the [OVHcloud API](https://docs.ovh.com/us/en/api/first-steps-with-ovh-api/).
- The json parser tool [jq](https://stedolan.github.io/jq/){.external}

## Initialization

To setup a fonctional environment, you have to load the content of the given **utils/openrc** file, to manage Openstack, and variables contained in the **utils/ovhAPI.properties** file to manage the OVHcloud API.

Create the **utils/openrc**, or download it from your Openstack provider. It must be like:

```bash
export OS_AUTH_URL=https://auth.cloud.ovh.net/v3
export OS_IDENTITY_API_VERSION=3
export OS_USER_DOMAIN_NAME=${OS_USER_DOMAIN_NAME:-"Default"}
export OS_PROJECT_DOMAIN_NAME=${OS_PROJECT_DOMAIN_NAME:-"Default"}
export OS_TENANT_ID=xxxxxxxxxxxxxxxxxxxxx
export OS_TENANT_NAME="xxxxxxxxxxxxxxxxxx"
export OS_USERNAME="user-xxxxxxxxxxxxx"
export OS_PASSWORD="xxxxxxxxxxxxxxxxxx"
export OS_REGION_NAME="xxxx"
if [ -z "$OS_REGION_NAME" ]; then unset OS_REGION_NAME; fi
```

Create the **utils/ovhAPI.properties** with your generated keys and secret:

```bash
OVH_API_URL="https://api.ovh.com/1.0"
OVH_ENDPOINT="ovh-eu"
OVH_APPLICATION_KEY="xxxxxxxxxxxxxxxxx"
OVH_APPLICATION_SECRET="xxxxxxxxxxxxxxxxx"
OVH_CONSUMER_KEY="xxxxxxxxxxxxxxxxxxxxx"
```

Load variables

> [!tabs]
> Bash
>> ```bash
>> . utils/openrc
>> . utils/ovhAPI.properties
>> ``` 

Get your OpenStack Tenant Id and store it into the serviceName variable.

> [!tabs]
> Bash
>> ```bash
>> export serviceName=$(utils/ovhAPI.sh GET /cloud/project/$OS_TENANT_ID|jq -r .description) && echo $serviceName
>> ```
> API
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}

## Create Private Network

> Important: Assuming that your PCI project is added to your [vRack](https://docs.ovh.com/us/en/public-cloud/public-cloud-vrack/).

We are using the OVHcloud API to create the private network. For this tutorial, we are using the two regions GRA9 and GRA11.

with data inside the **data-pvnw.json** file:

```json
{
"name": "demo-pvnw",
"vlanId": 20,
"regions": ["GRA9","GRA11"]
}
```

Create the private network then get the vlan Id.

> [!tabs]
> Bash
>> ```bash
>> export vlanId="$(utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/network/private "$(cat tpl/data-pvnw.json)" | jq -r .id)" && echo $vlanId
>> ```
> API
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/network/private
>> >
>> > @api {GET} /cloud/project/{serviceName}/network/private

## Create subnets

For this tutorial, we are spliting  a /24 subnet, to obtain two /25 subnets.

Ref: https://www.davidc.net/sites/default/subnets/subnets.html

| Name | Region | CIDR Address | Gateway | DHCP Range | Broadcast |
|---|---|---|---|---|---|
|Subnet 1|GRA9|192.168.0.0/25|192.168.0.1|192.168.0.2-192.168.0.126|192.168.0.127|
|Subnet 2|GRA11|192.168.0.128/25|192.168.0.129|192.168.0.130-192.168.0.254|192.168.0.255|

Create these two data files:

**data-subnetGRA9.json** file:
```json
{
"start": "192.168.0.2",
"end": "192.168.0.126",
"region": "GRA9",
"dhcp": false,
"network": "192.168.0.0/25",
"noGateway": false
}
```

**data-subnetGRA11.json** file:
```json
{
"start": "192.168.0.130",
"end": "192.168.0.254",
"region": "GRA11",
"dhcp": false,
"network": "192.168.0.128/25",
"noGateway": false
}
```

> Note: To be clear, the parameter "noGateway": false means "Gateway": true. We want the subnet to explicitly use the CIDR range first IP address.

Then create subnets with appropriate routes, and finally get ids (subnGRA9 & subnGRA11):

> [!tabs]
> Bash
>> ```bash
>> export subnGRA9="$(utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/network/private/$vlanId/subnet "$(cat tpl/data-subnetGRA9.json)" | jq -r .id)" && echo $subnGRA9
>>
>> export subnGRA11="$(utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/network/private/$vlanId/subnet "$(cat tpl/data-subnetGRA11.json)" | jq -r .id)" && echo $subnGRA11
>> ```
> API
>> > [!api]
>> > 
>> > @api {POST} /cloud/project/{serviceName}/network/private/{networkId}/subnet

> For now, it's not possible to add routes to the subnet via the API, so we must use the openstak cli instead.

> [!tabs]
> Bash
>> ```bash
>> openstack --os-region-name=GRA9 subnet set ${subnGRA9} --host-route destination=192.168.0.0/25,gateway=192.168.0.1
>>
>> openstack --os-region-name=GRA11 subnet set ${subnGRA11} --host-route destination=192.168.0.128/25,gateway=192.168.0.129
>> ```

## Openstack router

### Create the routers

We have the ability to create Openstack virtuals routers. To do this, we need to use the Openstack Cli.
Create routers and get their ids (rtrGRA9Id & rtrGRA11Id):

> [!tabs]
> Bash
>> ```bash
>> export rtrGRA9Id="$(openstack --os-region-name=GRA9 router create rtr-GRA9 -f json|jq -r .id)" && echo $rtrGRA9Id
>> export rtrGRA11Id="$(openstack --os-region-name=GRA11 router create rtr-GRA11 -f json|jq -r .id)" && echo $rtrGRA11Id
>> ```

### Link the router to the external provider network

First, get the regional external network id (extNwGRA9Id & extNwGRA11Id), then link the router to it:

> [!tabs]
> Bash
>> ```bash
>> # GRA9
>> export extNwGRA9Id="$(openstack --os-region-name=GRA9 network list -f json | jq -r '.[] | select(.Name=="Ext-Net") | .ID')" && echo $extNwGRA9Id
>> openstack --os-region-name=GRA9 router set $rtrGRA9Id --external-gateway $extNwGRA9Id
>> # GRA11
>> export extNwGRA11Id="$(openstack --os-region-name=GRA11 network list -f json | jq -r '.[] | select(.Name=="Ext-Net") | .ID')" && echo $extNwGRA11Id
>> openstack --os-region-name=GRA11 router set $rtrGRA11Id --external-gateway $extNwGRA11Id
>> ```

### Link the router to the subnet

Do the same with the regional subnets:

> [!tabs]
> Bash
>> ```bash
>> # GRA9
>> openstack --os-region-name=GRA9 router add subnet $rtrGRA9Id $subnGRA9
>> # GRA11
>> openstack --os-region-name=GRA11 router add subnet $rtrGRA11Id $subnGRA11
>> ```

## Create a cluster with private gateway

Now the network is ready, create the Kubernetes cluster, specifying the use of the gateway defined on each subnet.

> Note: until the end of this tutorial, we are only using the GRA9 region, but you can repeat the exact same steps to create a cluster on the GRA11 region.

Create a **tpl/data-kube.json** file as data and add the right parameters. The files should be like:

```json
{
  "region": "GRA9",
  "name": "demo",
  "version": "1.23",
  "nodepool": {
    "flavorName": "b2-7",
    "antiAffinity": false,
    "monthlyBilled": false,
    "autoscale": false,
    "desiredNodes": 3
  },
  "privateNetworkId": "@privateNetworkId@",
  "privateNetworkConfiguration" :{
        "privateNetworkRoutingAsDefault": true,
        "defaultVrackGateway": "192.168.0.1"
  }
}
``` 

First, get the private network Ids (pvnwGRA9Id & pvnwGRA11Id) then create the Kubernetes Cluster and finally get the cluster Id (kubeId):

> [!tabs]
> Bash
>> ```bash
>> # Get the GRA9 private network Id
>> export pvnwGRA9Id="$(utils/ovhAPI.sh GET /cloud/project/$OS_TENANT_ID/network/private/${vlanId} | jq '.regions[] | select(.region=="GRA9")' | jq -r .openstackId)" && echo $pvnwGRA9Id
>> # Create the kube payload file
>> cat tpl/data-kube.json.tpl | sed -e "s|@privateNetworkId@|$pvnwGRA9Id|g" > tpl/data-kube.json
>> # Create the kube cluster
>> export kubeId="$(utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/kube "$(cat tpl/data-kube.json)"|jq -r .id)" && echo $kubeId
>> ```
> API
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/network/private/{networkId}
>> > 
>> > @api {POST} /cloud/project/{serviceName}/kube
>> > 
>> > @api {GET} /cloud/project/{serviceName}/kube

## Get kubeconfig file

To proceed with the freshly created Kubernetes cluster, you must get the kubeconfig file.

> [!tabs]
> Bash
>> ```bash
>> mkdir $HOME/.kube
>> utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/kube/$kubeId/kubeconfig | jq -r .content > $HOME/.kube/config
>> ```
> API
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig

## Test

Now test the cluster by running a simple container that requests its published IP address.

```bash
kubectl run --image=debian debian  -it -- bash
apt update
apt install curl
curl ifconfig.me
```

The IP address must be the same as the public router one.

## Purge

### Kube cluster
> [!tabs]
> Bash
>> ```bash
>> utils/ovhAPI.sh DELETE /cloud/project/$OS_TENANT_ID/kube/$kubeId
>> ```
> API
>> > [!api]
>> >
>> > @api {DELETE} /cloud/project/{serviceName}/kube/{kubeId}

### Routers

To delete an Openstack router, you must first remove the linked ports.

> [!tabs]
> Bash
>> ```bash
>> # Get the routers subnets attached ports Ids
>> export portIdGRA9="$(openstack --os-region-name=GRA9 port list | grep -w "192.168.0.1" | awk '{print $2}')" && echo $portIdGRA9
>> export portIdGRA11="$(openstack --os-region-name=GRA11 port list | grep -w "192.168.0.129" | awk '{print $2}')" && echo $portIdGRA11
>> # Get the routers Ids
>> export rtrIdGRA9="$(openstack --os-region-name=GRA9 router list -f json | jq -r '.[] | select(.Name=="rtr-GRA9") | .ID')" && echo $rtrIdGRA9
>> export rtrIdGRA11="$(openstack --os-region-name=GRA11 router list -f json | jq -r '.[] | select(.Name=="rtr-GRA11") | .ID')" && echo $rtrIdGRA11
>> # Remove ports from routers
>> openstack --os-region-name=GRA9 router remove port $rtrIdGRA9 $portIdGRA9
>> openstack --os-region-name=GRA11 router remove port $rtrIdGRA11 $portIdGRA11
>> # Delete routers
>> openstack router delete rtr-GRA9
>> openstack router delete rtr-GRA11
>> ```

### Subnets
> [!tabs]
> Bash
>> ```bash
>> utils/ovhAPI.sh DELETE /cloud/project/$OS_TENANT_ID/network/private/$vlanId/subnet/$subnGRA9
>> utils/ovhAPI.sh DELETE /cloud/project/$OS_TENANT_ID/network/private/$vlanId/subnet/$subnGRA11
>> ```
> API
>> > [!api]
>> >
>> > @api {DELETE} /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}

### Private Network
> [!tabs]
> Bash
>> ```bash
>> utils/ovhAPI.sh DELETE /cloud/project/$OS_TENANT_ID/network/private/$vlanId
>> ```
> API
>> > [!api]
>> >
>> > @api {DELETE} /cloud/project/{serviceName}/network/private/{networkId}/region/{region}
