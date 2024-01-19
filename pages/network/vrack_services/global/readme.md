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

## By API
### 1. Initial state
### 2. Create a Subnet
### 3. Create a Service Endpoint
### 4. Associate to a vRack
### 

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
