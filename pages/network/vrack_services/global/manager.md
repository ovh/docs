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


## Instructions

### 1. Vrack Creation

| ![initiate_state](images/01_empty_page.png) | 
|:--:| 
| When you don't have any vrack services on, you have this screen |

| ![initiate_state](images/02_vrack_creation.png) | 
|:--:| 
| First you need to define a name for this Vrack Service |

| ![initiate_state](images/03_vrack_creation.png) | 
|:--:| 
| Then you need to attach this service to an existing Vrack ...  |

| ![initiate_state](images/04_vrack_creation.png) | 
|:--:| 
| ... by selecting in your Vrack existing list |

| ![initiate_state](images/05_vrack_cration.png) | 
|:--:| 
| Then you need to select a region |

| ![initiate_state](images/06_vrack_creation.png) | 
|:--:| 
| Now you can create your new Vrack Service |

| ![initiate_state](images/_vrack_creation.png) | 
|:--:| 
| If you don't have a Vrack you can createone here |


| ![initiate_state](images/10_listing_page.png) | 
|:--:| 
| Here you have a list of all your Vrack Services |

### 2. Overview

| ![initiate_state](images/11_overview.png) | 
|:--:| 
| Details |

| ![initiate_state](images/15_listing_subnets.png) | 
|:--:| 
| Subnets listing |

| ![initiate_state](images/17_vrack_listing_endpoints.png) | 
|:--:| 
| Endpoints listing |


### 3. Subnet creation

| ![initiate_state](images/12_vrack_subnet_creation.png) | 
|:--:| 
| 12 |

| ![initiate_state](images/13_vrack_subnet_creation.png) | 
|:--:| 
| 13 |

| ![initiate_state](images/14_vrack_subnet_creation.png) | 
|:--:| 
| 14 |

### 4. Endpoint creation


| ![initiate_state](images/16_vrack_endpoint_creation.png) | 
|:--:| 
| 16 |









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
