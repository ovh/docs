# Documentation on Enterprise File Storage with vRack Services by OVHcloud

# Overview
The OVHcloud vRack service simplifies the connection between different managed services in a vRack environment. Once set up, this service acts as the heart of the network, helping to connect different cloud services in an organised way.

The first managed service compatible with vRack Services is Enterprise File Storage (NetApp).

The vRack Services product is built around three main features:

## 1. Vrack Services
vRack Services addresses the need for private access to managed services inside the vRack. It brings IP connectivity to the vRack on a private address plan.
   
Choosing vRack services enables businesses to improve the efficiency, security and scalability of their IT infrastructure, paving the way for future development and innovation in the cloud.

 ### Key vRack Services Features:
- **Global coverage, local focus:** vRack provides a wide-area network, but vRack services are tailored to meet local requirements, respecting regional privacy and security laws.
- **Customised networks:** Customers can configure their network to meet their exact requirements, using vRack services to create an environment that is tailored to their business.
- **Security is a priority:** vRack services ensure that data exchanged between services remains private, away from the Internet and potential threats.
- **Easy management:** The OVHcloud control panel makes it easy to manage vRack services, from startup to configuration changes. This makes network management less complex and accessible to all businesses.
- **Compatibility with other services:** vRack services are designed to work seamlessly with other OVHcloud managed services, such as Enterprise File Storage, making it easy to use multiple OVHcloud services together.

### Please note:   
- **vRack is worldwide**, offering global connectivity solutions.
- **vRack services are local**, ensuring data residency and compliance.
- **Managed services are linkable to vRack services only in the same zone**, maintaining high performance and security standards.

 
## 2. Subnet
   
The Subnet is a Nerk segment of the associated vRack. It represents an IP addressing scheme within the private network.
It is characterised by a **range** (CIDR) and a unique internal **vlan** that allows subnet segregation in a given vRack service.

As the customer creates and removes service endpoints on a subnet, it must be ensured that the assigned IPs do not conflict with customer IPs used in that **range**.

For this purpose, the **serviceRange** specifies a smaller subnet reserved for the Managed Service IPs. The customer is not allowed to use these IPs.

## 3. Service Endpoint

The Service Endpoint provides the Customer with direct access to their Managed Services from one or more private IPs in the associated vRack.

For each spawned Managed Service, the Service Provider publishes the number of private IPs required and a custom description for each of them. 

These private IPs are then dynamically allocated by the vRack Services automation at the primitive creation request.


# Actions

## Basics Instructions

<details>
  <summary><b>1. Create a Subnet</b> </summary>
    
  Request Subnet creation (always synchronous)

```bash
$ curl -XPOST -d '{"range": "172.21.0.0/27", "serviceRange": "172.21.0.0/29", "vlan": "10"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> HTTP/1.1 201 Created
> Location: https://api.ovh.com/2.0/vrackServices/vrs-2034567/subnet/sub-4567890
> {
>     "id": "sub-4567890",
>     "resourceStatus": "READY",
>     "targetSpec" : {
>         "displayName": "rbx_nominal_services",
>         "serviceRange": "172.21.0.0/29"
>     },
>     "currentState": {
>         "displayName": "rbx_nominal_services",
>         "vrackServicesId": "vrs-1234567",
>         "range": "172.21.0.0/27",
>         "serviceRange": "172.21.0.0/29",
>         "vlan": 10,
>     },
>     "createdAt": "2024-01-19T14:53:22.323452Z",
>     "updatedAt": "2024-01-19T14:53:22.323452Z"
> }
> ```    
>     
> </details>

</details>


<details>
  <summary><b>2. Create a Service Endpoint </b>     </summary>

1. <ins>Request Service Endpoint creation (asynchronous as a vRack association exists)</ins>   
Here we use the second managed serice listed previously in 3.1 section "List all Managed Services compatible with the vRack Services"

```bash
$ curl -XPOST -d '{"serviceType": "entreprise-file-storage", "serviceId": "1fd7bf30-6722-4658-b3db-
92e269185f46"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint
```  

> <details>
>   <summary>Click here to see the result</summary>
>     
> ```console
> HTTP/1.1 201 Created
> Location: https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint/end-5678901
> {
>   "id": "end-5678901",
>   "resourceStatus": "CREATING",
>   "targetSpec": {
>     "displayName": "secured_data"
>   },
>   "currentState": {
>     "displayName": "secured_data",
>     "subnetId": "sub-4567890",
>     "serviceType": "entreprise-file-storage",
>     "serviceId": "1fd7bf30-6722-4658-b3db-92e269185f46",
>     "endpoints": {
>       1: {
>         "ip": "172.21.0.1",
>         "description": null        // Fetched from the Managed Service 'create' event
>       },
>       2: {
>         "ip": "172.21.0.2",
>         "description": null        // Fetched from the Managed Service 'create' event
>       },
>       3: {
>         "ip": "172.21.0.3",
>         "description": null        // Fetched from the Managed Service 'create' event
>       }
>     }
>   },
>   "createdAt": "2024-01-19T14:54:22.323452Z",
>   "updatedAt": "2024-01-19T14:54:22.323452Z"
> }
> ```
> 
> </details>

2. <ins>Request a second Service Endpoint creation</ins>   
Just in order to show you the behavior when you want launch a new request during the execution of the previous one.

```bash
$ curl -XPOST -d '{"serviceType": "entreprise-file-storage", "serviceId": "95569efa-61f2-4deb-8beea60b4213e1dc"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint
```


> <details>
>   <summary>Click here to see the result</summary>
> 
>     
> ```console
> HTTP/1.1 409 Conflict
> {
>   "class": "Client::Conflict::ResourceBusy",
>   "message": "Subnet sub-1234567 is busy",
>   "details": {
>     "subnetId": "sub-1234567"
>   }
> }
> ```
> 
> </details>

3. <ins>So you can fetch resource status of the first requested Service Endpoint.</ins>   
In this way we can see the status of the resource is now READY
   
```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint/end-5678901
```


> <details>
>   <summary>Click here to see the result</summary>
>      
> ```console
> {
>   "id": "end-5678901",
>   "resourceStatus": "READY",
>   "targetSpec": {
>     "displayName": "critical_business"
>   },
>   "currentState": {
>     "displayName": "critical_business",
>     "subnetId": "sub-4567890",
>     "serviceType": "entreprise-file-storage",
>     "serviceId": "1fd7bf30-6722-4658-b3db-92e269185f46",
>     "endpoints": {
>       1: {
>         "ip": "172.21.0.1",
>         "description": null        // Fetched from the Managed Service 'create' event
>       },
>       2: {
>         "ip": "172.21.0.2",
>         "description": null        // Fetched from the Managed Service 'create' event
>       },
>       3: {
>         "ip": "172.21.0.3",
>         "description": null        // Fetched from the Managed Service 'create' event
>       }
>     }
>   },
>   "createdAt": "2024-01-19T14:54:22.323452Z",
>   "updatedAt": "2024-01-19T14:54:22.323452Z"
> }
> ```
> 
> </details>

</details>



<details>
  <summary><b>3. Associate to a vRack</b>    </summary>

1. <ins>Check eligibility to the vRack</ins>

```bash
$ curl -XGET https://api.ovh.com/1.0/vrack/pn-12345/allowedServices?serviceFamily=vrackServices
```  

> <details>
>   <summary>Click here to see the result</summary>
>    
> ```console
> {
>   "ipLoadbalancing": null,
>   "dedicatedConnect": null,
>   "dedicatedServer": null,
>   "vrackServices": [
>     "vrs-2345678",
>     "vrs-1234567"
>   ],
>   "ip": null,
>   "dedicatedCloudDatacenter": null,
>   "ovhCloudConnect": null,
>   "cloudProject": null,
>   "dedicatedCloud": null,
>   "legacyVrack": null,
>   "dedicatedServerInterface": null
> }
> ```
> 
> </details>



2. <ins>Request vRack association</ins>

```bash
$ curl -XPOST -d '{"vrackServices": "vrs-1234567"}' https://api.ovh.com/1.0/vrack/pn-12345/vrackServices
```

> <details>
>   <summary>Click here to see the result</summary>
> 
>     
> ```console
> [
>     todoDate: "2024-01-19T14:51:22.323452Z"
>     status: "init"
>     serviceName: "pn-12345"
>     orderId: null
>     lastUpdate: "2024-01-19T14:51:22.323452Z"
>     targetDomain: "vrs-1234567"
>     function: "addVrackServices"
>     id: 3456789
> ]
> ```
> 
> </details>



3. <ins>Fetch asynchronous task because it can takes few secondes</ins>
   Perhaps you can have some error during the execution of this task
   
```bash
$ curl -XGET https://api.ovh.com/1.0/vrack/pn-12345/task/3456789
```

> <details>
>   <summary>Click here to see the result</summary>
>     
> ```console
> HTTP/1.1 404 Not Found
> {
>     "message": "The requested object (taskId = 3456789) does not exist"
> }
> ```
>     
> </details>
   
4. <ins>When this synchronous task is done you can fetch the vRack Services status</ins>

```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-1234567
```

> <details>
>   <summary>Click here to see the result</summary>
> 
>     
> ```console
> {
>   "id": "vrs-1234567",
>   "resourceStatus": "READY",
>   "targetSpec": {
>     "displayName": "Sample_Display_Name"
>   },
>   "currentState": {
>     "productStatus": "ACTIVE",
>     "displayName": "Sample_Display_Name",
>     "nicAdmin": "dp12345-ovh",
>     "nicTech": "dp12345-ovh",
>     "vrackId": "pn-12345",
>     "zone": "rbx",
>     "region": "eu-east-1",
>     "az": "eu-east-1-a"
>   },
>   "createdAt": "2024-01-19T14:40:22.323452Z",
>   "updatedAt": "2024-01-19T14:52:22.323452Z"
> }
> ```
>     
> </details>

</details>












## Others Instructions

<details>
  <summary><b>1. Extend the Subnet service range</b></summary>

1. <ins>Create a 'extend-subnet-service-range.json' text file with these informations inside</ins>

```bash
$ cat extend-subnet-service-range.json
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> {
>   "targetSpec": {
>     "displayName": "rbx_nominal_services",
>     "serviceRange": "172.21.0.0/28"
>   }
> }
> ```
> 
> </details>

2. <ins>Request service range extension (asynchronous)</ins>

```bash
$ curl -XPUT -d@extend-subnet-service-range.json https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-
4567890
```

> <details>
>   <summary>Click here to see the result</summary>
>   
> ```console
> {
>   "id": "sub-4567890",
>   "resourceStatus": "UPDATING",
>   "targetSpec": {
>     "displayName": "rbx_nominal_services",
>     "serviceRange": "172.21.0.0/28"
>   },
>   "currentState": {
>     "displayName": "rbx_nominal_services",
>     "vrackServicesId": "vrs-1234567",
>     "range": "172.21.0.0/27",
>     "serviceRange": "172.21.0.0/29",
>     "vlan": 10
>   },
>   "createdAt": "2024-01-19T14:53:22.323452Z",
>   "updatedAt": "2024-01-19T14:58:22.323452Z"
> }
> ```
> 
> </details>

3. <ins>Fetch final state</ins>
   
```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890
```

> <details>
>   <summary>Click here to see the result</summary>
>   
> ```console
> {
>   "id": "sub-4567890",
>   "resourceStatus": "READY",
>   "targetSpec": {
>     "displayName": "rbx_nominal_services",
>     "serviceRange": "172.21.0.0/28"
>   },
>   "currentState": {
>     "displayName": "rbx_nominal_services",
>     "vrackServicesId": "vrs-1234567",
>     "range": "172.21.0.0/27",
>     "serviceRange": "172.21.0.0/28",
>     "vlan": 10
>   },
>   "createdAt": "2024-01-19T14:53:22.323452Z",
>   "updatedAt": "2024-01-19T14:58:33.323452Z"
> }
> ```
> 
> </details>

</details>


<details>
  <summary><b>6. Dissociate the vRack Services from the vRack</b></summary>
  
1. <ins>Request vRack disassociation</ins>

```bash
$ curl -XDELETE https://api.ovh.com/1.0/vrack/pn-12345/vrackServices/vrs-1234567
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> {
>     todoDate: "2022-05-04T14:59:22.323452Z"
>     status: "init"
>     serviceName: "pn-12345"
>     orderId: null
>     lastUpdate: "2022-05-04T14:58:55.323452Z"
>     function: "removeVrackServices"
>     id: 5678901
> }
> ```
> 
> </details>


2. <ins>Fetch asynchronous task using the created task id</ins>

```bash
$ curl -XGET https://api.ovh.com/1.0/vrack/pn-12345/task/5678901
```


> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> HTTP/1.1 404 Not Found
> {
>     "message": "The requested object (taskId = 3205546) does not exist"
> }
> ```
> 
> </details>

3. <ins>Asynchronous task done -> Fetch the vRack Services status</ins>

```bash
$ curl -XGET https://api.ovh.com/2.0/vrackServices/vrs-1234567
```


> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> {
>     "id": "vrs-1234567",
>     "resourceStatus": "READY",
>     "targetSpec" : {
>         "displayName": "Backup_infra.",
>     },
>     "currentState": {
>         "productStatus": "DRAFT",
>         "displayName": "Backup_infra.",
>         "nicAdmin": "dp12345-ovh",
>         "nicTech": "dp12345-ovh",
>         "vrackId": null,
>         "zone": "rbx",
>         "region": "eu-east-1",
>         "az": "eu-east-1-a"
>     },
>     "createdAt": "2024-01-19T14:40:22.323452Z",
>     "updatedAt": "2024-01-19T14:59:55.323452Z"
> }
> ```
> 
> </details>


</details>


<details>
  <summary><b>7. Suspend the vRack Services</b></summary>

  Suspend triggered on Agora 'SUSPENSION' event consumption
Here we have the same result than dissociation

</details>


<details>
  <summary><b>8. Delete the vRack Services</b></summary>

   Deletion triggered on Agora 'TERMINATION' event consumption
   Then every resources deleted in cascade

</details>


## Errors

<details>
  <summary><b>1. Create a Service Endpoint with a wrong Managed Service localization</b></summary>
  

```bash
$ curl -XPOST -d '{"serviceType": "entreprise-file-storage", "serviceId": "95569efa-61f2-4deb-8beea60b4213e1dc"}'
https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> HTTP/1.1 400 Bad Request
> {
>   "class": "Client::BadRequest::LocalizationMismatch",
>   "message": "Service 95569efa-61f2-4deb-8bee-a60b4213e1dc zone (rbx) does not match vRack Services vrs-2034567 zone (sbg)",
>   "details": {
>     "serviceId": "95569efa-61f2-4deb-8bee-a60b4213e1dc",
>     "vrackServiceZone": "rbx",
>     "vrackServiceId": "vrs-2034567",
>     "serviceZone": "sbg"
>   }
> }
> ```
> 
> </details>

</details>


<details>
  <summary><b>2. Create a Service Endpoint while Subnet ServiceRange is fully allocated</b></summary>

  
```bash
$ curl -XPOST -d '{"serviceType": "entreprise-file-storage", "serviceId": "2d65f8e0-edde-448f-b9-
a85404eb52"}' https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890/serviceEndpoint
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> HTTP/1.1 400 Bad Request
> {
>   "class": "Client::BadRequest::ServiceRangeFullyAllocated",
>   "message": "Service 2d65f8e0-edde-448f-b9-a85404eb52 requires 2 IPs while 0 IP(s) still available on the Subnet sub-2778273",
>   "details": {
>     "serviceId": "2d65f8e0-edde-448f-b9-a85404eb52",
>     "requestedIPsCount": "2",
>     "availableIPsCount": "0",
>     "SubnetId": "sub-4567890"
>   }
> }
> ```
> 
> </details>

</details>


<details>
  <summary><b>3. Delete a Subnet that is associated to Service Endpoints</b></summary>

```bash
$ curl -XDELETE https://api.ovh.com/2.0/vrackServices/vrs-1234567/subnet/sub-4567890
```

> <details>
>   <summary>Click here to see the result</summary>
> 
> ```console
> HTTP/1.1 409 Conflict
> {
>   "class": "Client::Conflict::SubnetNotEmpty",
>   "message": "Subnet sub-4567890 contains 3 Service Endpoints",
>   "details": {
>     "subnetId": "sub-4567890",
>     "serviceEndpointsCount": 3
>   }
> }
> ```
> 
> </details>


</details>



# Product configuration experience

Behind the scenes, the status of VrackServices (VrackServices.productStatus) mirrors the state of the infrastructure configuration. This configuration is initiated once the following three criteria are met:

- The product is not suspended.
- There is an existing vRack association.
- At least one Service Endpoint has been set up.

If any of these requirements are no longer satisfied, the configuration is withdrawn from the OneAPI (either marked as DRAFT or SUSPENDED).

As an helper, a summary of the configuration is available with the VrackServices.productStatus attribut.
It answers the question `does my current configuration makes the Managed Services to be reachable from the vRack ?`   
- **ACTIVE:** yes, it does
- **DRAFT:** no, either a Service Endpoint needs to be created or a vRack needs to be associated to the vRack Services
- **SUSPENDED:** no, product is in Agora `suspension` state



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


# Go further

Join our community of users on <https://community.ovh.com/en/>.
