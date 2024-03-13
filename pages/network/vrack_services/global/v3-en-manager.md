# Documentation on Enterprise File Storage with vRack Services by OVHcloud

# Overview
OVHcloud stands out for its cutting-edge solutions, in particular vRack and Enterprise File Storage (EFS), based on cutting-edge NetApp ONTAP technology. These solutions meet the crucial needs of businesses in terms of security, performance and scalability of connectivity and storage solutions. The vRack provides secure and private global connectivity, while vRack services, focused on local requirements, ensure compliance and data residency. EFS stands out for its ability to deliver high-performance file storage, which is crucial for enterprise applications requiring constant and rapid access to data. The integration between vRack and EFS, facilitated by Service Endpoint technology, enables a native and secure connection, effectively isolating data traffic from the Internet. This synergy between vRack and EFS from OVHcloud represents a complete solution, addressing the connectivity and storage challenges faced by businesses, while laying the foundations for a secure, high-performance and ready IT infrastructure.
In this article, we also present the actions that can be carried out via the screens available in the Manager, offering users a detailed overview and practical management of their services.

<p align="center" width="100%">
    <img src="images/vRack Service Endpoint Diagram.png">
</p>

# Key Benefits

- **Native Private Connectivity:** Enjoy a secure and isolated connection thanks to integration with the vRack private network by OVHcloud.
- **High Performance:** The service relies on NetApp ONTAP technology to deliver optimal performance in terms of speed and reliability.
- **High Availability:** Thanks to an active-active architecture, the solution ensures high availability, essential for critical operations.



# With Vrack Services as entry point   



<details>
  <summary><b>Overview</b> </summary>
    
| ![initiate_state](images/11_overview.png) | 
|:--:| 
| Details |

| ![initiate_state](images/15_listing_subnets.png) | 
|:--:| 
| Subnets listing |

| ![initiate_state](images/17_vrack_listing_endpoints.png) | 
|:--:| 
| Endpoints listing |

</details>

<details>
  <summary><b>VRack Service Creation</b> </summary>

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


    
</details>

<details>
  <summary><b>Subnet creation</b> </summary>
    

| ![initiate_state](images/12_vrack_subnet_creation.png) | 
|:--:| 
| 12 |

| ![initiate_state](images/13_vrack_subnet_creation.png) | 
|:--:| 
| 13 |

| ![initiate_state](images/14_vrack_subnet_creation.png) | 
|:--:| 
| 14 |


</details>


<details>
  <summary><b>Endpoint creation</b> </summary>
    
| ![initiate_state](images/16_vrack_endpoint_creation.png) | 
|:--:| 
| 16 |

</details>




# With Enterprise File Storage as entry point   

<details>
  <summary><b>Overview</b> </summary>   
When you don't have any network configuration, the overview section, mainly network configuration looks like this:   
    
![overview 01](images/01-EFS.png){.thumbnail}

---

When you have network configuration, the overview section, mainly network configuration looks like this:   
    
![overview 02](images/09-EFS.png){.thumbnail}

</details>

<details>
  <summary><b>Network Configuration</b> </summary>   

![NC 01](images/02-EFS.png){.thumbnail}

---

![NC 02](images/03-EFS.png){.thumbnail}

---

![NC 03](images/04-EFS.png){.thumbnail}

---

![NC 04](images/05-EFS.png){.thumbnail}

---

![NC 05](images/06-EFS.png){.thumbnail}
</details>


<details>
  <summary><b>Statuses</b> </summary>   

![statuses 01](images/06-EFS.png){.thumbnail}

---

![statuses 01](images/07-EFS.png){.thumbnail}

---

![statuses 01](images/08-EFS.png){.thumbnail}

</details>

<details>
  <summary><b>Remove Service Endpoint</b> </summary>   

![remove 01](images/09-EFS.png){.thumbnail}

---

![remove 02](images/10-EFS.png){.thumbnail}

</details>


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
