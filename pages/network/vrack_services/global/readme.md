# Product definition
vRack Services answers the need for a private access of managed services with in the vRack. It brings IP connectivity to vRack on a private adressage
plan.

The first Managed Service compatible with vRack Services is 'Entreprise File Storage' (NetApp).

The vRack Services product is composed on three main primitives:

## 1. Vrack Services
   
 It represents the product instance ordered by the customers.  
 
## 2. Subnet
   
The Subnet is a network segment of the associated vRack. It represents an IP addressing scheme inside the private network.
It is characterized by a **range** (CIDR) and a unique inner **vlan** that allows Subnets segregation in a given vRack Services.

While customer creates and removes Service Endpoints on a Subnet, it must be ensured that attributed IPs does not conflict with customer IPs used in that **range**.

To do so, the **serviceRange** specifies a smaller subnet reserved to the Managed Service IPs. Customer must no use these IPs.

## 3. Service Endpoint

The Service Endpoint provides to customer an access to their Managed Services directly form one or several private IPs in the associated vRack.

For each spawned Managed Services, the service provider publishes the number of private IPs required and a custom description for each of them. 

Then, those private IPs are dynamically allocated by the vRack Services automation at the primitive creation request. 


# Product configuration experience
## Requirements

- You can start configuring the vRack Services product before associating any vRack.
- You can switch the vRack associated with a vRack Services from one vRack (x) to another (y).
- You have the flexibility to acquire a vRack, vRack Services, and a Managed Service in any order, at any time.
- The vRack Services product incurs charges based on the Managed Services price. Infrastructure involved in the vRack Services configuration should not be used until a Managed Service is ordered.
- According to the OneAPI consumption requirements, a Subnet primitive cannot exist without an associated Network relationship.

## By API

Behind the scenes, the status of VrackServices (VrackServices.productStatus) mirrors the state of the infrastructure configuration. This configuration is initiated once the following three criteria are met:

- The product is not suspended.
- There is an existing vRack association.
- At least one Service Endpoint has been set up.

If any of these requirements are no longer satisfied, the configuration is withdrawn from the OneAPI (either marked as DRAFT or SUSPENDED).

> [!primary]
>
> As an helper, a summary of the configuration is available with the VrackServices.productStatus attribut.
It answers the question `does my current configuration makes the Managed Services to be reachable from the vRack ?`
> 
> ACTIVE - yes, it does
> 
> DRAFT - no, either a Service Endpoint needs to be created or a vRack needs to be associated to the vRack Services
> 
> SUSPENDED - no, product is in Agora `suspension` state
>
> 

### 1. Initial state
A vRack Services has been ordered at 'eu-east-1' Region

```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-1234567
```

```console
{
  "id": "vrs-1234567",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "Backup_infra."
  },
  "currentState": {
    "productStatus": "DRAFT",
    "displayName": "Sample_Display_Name",
    "nicAdmin": "dp12345-ovh",
    "nicTech": "dp12345-ovh",
    "vrackId": null,
    "zone": "rbx",
    "region": "eu-east-1",
    "az": "eu-east-1"
  },
  "createdAt": "2024-01-19T14:30:22.323452Z",
  "updatedAt": "2024-01-19T14:30:22.323452Z"
}
```



### 2. Create a Subnet (productStatus=DRAFT)

Request Subnet creation (always synchronous)


```bash
$ curl -XPOST -d '{"range": "172.16.0.0/26", "serviceRange": "172.16.0.0/27"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet
```

```console
HTTP/1.1 201 Created
Location: https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-9876543
{
  "id": "sub-9876543",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "",
    "serviceRange": "172.16.0.0/27"
  },
  "currentState": {
    "displayName": "",
    "vrackServicesId": "vrs-1234567",
    "range": "172.16.0.0/26",
    "serviceRange": "172.16.0.0/27",
    "vlan": 0
  },
  "createdAt": "2024-01-19T14:49:22.323452Z",
  "updatedAt": "2024-01-19T14:49:22.323452Z"
}
```

### 3. Create a Service Endpoint (productStatus=DRAFT)

1. List all Managed Services compatible with the vRack Services (here: same zone and not already linked to a
vRack Services)

```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-2034567/compatibleManagedService
```

```console
[
    "1a994681-661d-4f12-ae10-597cbc124f48",
    "1fd7bf30-6722-4658-b3db-92e269185f46",
    "1c2c74b5-de0f-4deb-bb34-e4f63d7dcf5e",
    "15edf087-2b94-4980-9fdf-792ecdd414ca",
    "1d65f8e0-edde-448f-b907-a85404eb0752"
]
```

2. Request Service Endpoint creation (synchronous as no vRack association exists)

```bash
$ curl -XPOST -d '{"name": "end-11", "serviceType": "entreprise-file-storage", "serviceId": "1a994681-661d-4f12-
ae10-597cbc124f48"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-9876543/serviceEndpoint
```

```console
HTTP/1.1 201 Created
Location: https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-9876543/serviceEndpoint/end-2345678
{
  "id": "end-2345678",
  "resourceStatus": "READY",
  "targetSpec": {
    "displayName": "EFS_critical_data"
  },
  "currentState": {
    "displayName": "EFS_critical_data",
    "subnetId": "sub-9876543",
    "serviceType": "entreprise-file-storage",
    "serviceId": "1a994681-661d-4f12-ae10-597cbc124f48",
    "endpoints": {
      1: {
        "ip": "172.16.0.1",
        "description": "Nominal"
      },
      2: {
        "ip": "172.16.0.2",
        "description": "Replication"
      }
    }
  },
  "createdAt": "2024-01-19T14:50:22.323452Z",
  "updatedAt": "2024-01-19T14:50:22.323452Z"
}
```




### 4. Associate to a vRack

```bash

```

```console

```

### 5. Create a Subnet (productStatus=ACTIVE)

```bash

```

```console

```

### 6. Create a Service Endpoint (productStatus=ACTIVE)

```bash

```

```console

```

### 7. Create a Service Endpoint with a wrong Managed Service localization [Error]


```bash

```

```console

```


```bash

```

```console

```

## By Manager

# Contraints and limits
## Vrack Services
- A vRack Services is attached to a unique Zone.
- Up to 20 vRack Services can be associated to a same vRack. So, customer is able to make reachable Managed Services from various Availability Zones.


## Subnet
- Maximum of 5 Subnets per vRack Services can be defined by the customer.
- The **range** attribut definition follows the **RFC 1918**.
- Every Subnet **range** must be unique on a given vRack Services. Overlapping is detected and discarded at Subnet creation.
- Every Subnet **vlan** must be unique on a given vRack Services. The default 'null' value can only be used by one Subnet.
- Available **serviceRange** starts from /(range_length + 1) to /29

## Service Endpoint
- To guarantee the Subnet consistency, the Service Endpoint creation request is rejected if the remaining IPs pool on the Subnet does not fit the number of IPs required by the Managed Service.
- Target Managed Service must be part of the same Zone than the vRack Services.
- Each customer is allowed to create a maximum of 20 Service Endpoints.
- Service range IPs are attributed to only one Managed Service at a time.
