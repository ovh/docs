---
title: Replacing Prism Central from Small Mode to X-Large Mode
slug: prism-central-expansion
excerpt: 'How to replace Prism Central with three X-Large VMs' 
section: "Advanced use"
order: 05
---

**Last updated 3rd January 2023**

## Objectif

**This guide will show you how to redeploy Prism-Central in X-LARGE mode across three virtual machines.**

> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. You may need to adapt the instructions according to your situation.
>
> If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) and/or discuss the issue with our community. You can find more information in the [Go further](#gofurther) section of this tutorial.
>

## Requirements

- A Nutanix cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- You must be connected to the cluster via Prism Central
- You need to know the Prism Element admin password (when deploying a Nutanix cluster by OVHcloud this password is created in the same way as Prism Central but can be changed later)

## Overview

You can deploy Prism Central in a custom sizing with these options:

- Small with 6 vCPU, 26GB of memory and 500GB of storage per virtual machine.
- Large with 10 vCPU, 44 GB of memory and 2500GB of storage per virtual machine.
- X-Large with 14 vCPU, 60GB of memory and 2500GB of storage per virtual machine.

By default, Prism Central is deployed on Nutanix by OVHcloud on a single virtual machine in *Small* mode.

When redeploying a cluster from the OVHcloud Control Panel, you can configure Prism Central with one or three virtual machines in *small* mode only.

## Instructions

We will look at how to replace Prism Central in Small mode on a single virtual machine with a Prism Central in X-Large mode and then extend Prism Central on 3 virtual machines for more resilience.<br>
The Nutanix cluster remains operational during this operation but the features that require **Prism Central** will be removed.

### Configuring SSH access to Prism Element with the OVHcloud Load Balancer

Go to the OVHcloud Control Panel, choose the `Hosted Private Cloud`{.action} tab at the top, then click on your `Cluster`{.action} on the left in the **Nutanix** category, scroll down the window and click on the `Load Balancer`{.action} associated with your cluster.

![01 Add ssh PE on Load Balancer 01](images/01-add-pe-ssh-on-loadbalancer01.png){.thumbnail}

In the configuration pages for your Load Balancer, go to the `Server clusters`{.action} tab and click `Add a server cluster`{.action}.

![01 Add ssh PE on Load Balancer 02](images/01-add-pe-ssh-on-loadbalancer02.png){.thumbnail}

Enter this information :

- **Name (optional)** : `PE SSH`.
- **Protocol** : `TCP`.
- **Port** : `22`.
- **Datacenter** : `ALL`.
- **Private network** : `nutanix`.

Then click `Add`{.action}.

![01 Add ssh PE on Load Balancer 03](images/01-add-pe-ssh-on-loadbalancer03.png){.thumbnail}

Within the server cluster, click `Add server`{.action}.

![01 Add ssh PE on Load Balancer 04](images/01-add-pe-ssh-on-loadbalancer04.png){.thumbnail}

Fill in these values :

- **Name (Optional)** : `PE SSH`.
- **IPv4 address** : `Private IP address of Prism Element`.
- **Port** : `22`.

And click `Add`{.action}.

![01 Add ssh PE on Load Balancer 05](images/01-add-pe-ssh-on-loadbalancer05.png){.thumbnail}

Click `Apply configuration`{.action} to the right of the warning message `Your load balancer configuration has not been applied in all datacenters`.

![01 Add ssh PE on Load Balancer 06](images/01-add-pe-ssh-on-loadbalancer06.png){.thumbnail}

Select your location and click on `Apply configuration`{.action}.

![01 Add ssh PE on Load Balancer 07](images/01-add-pe-ssh-on-loadbalancer07.png){.thumbnail}

Select your location again and click `Apply configuration`{.action}.

![01 Add ssh PE on Load Balancer 08](images/01-add-pe-ssh-on-loadbalancer08.png){.thumbnail}

Go to the `Tasks`{.action} tab to see the progress of the configuration change.

![01 Add ssh PE on Load Balancer 09](images/01-add-pe-ssh-on-loadbalancer09.png){.thumbnail}

When the task is finished, go to the `Front-ends`{.action} tab and click `Add a Front-end`{.action}.

![01 Add ssh PE on Load Balancer 10](images/01-add-pe-ssh-on-loadbalancer10.png){.thumbnail}

Enter the following information:

- **Name(Optional)** : `PE-FRONTEND`.
- **Port** : `22`.
- **Datacenter** : `ALL`.

Then click `Show`{.action}.

![01 Add ssh PE on Load Balancer 11](images/01-add-pe-ssh-on-loadbalancer11.png){.thumbnail}

In the **Restrict access to IPs** option, enter the network or IP address that will have access permission to Prism Element in SSH with this format XX.XX.XX.XX or XX.XX.XX.XX/XX.

Click `Add`{.action}.

![01 Add ssh PE on Load Balancer 12](images/01-add-pe-ssh-on-loadbalancer12.png){.thumbnail}

Click `Apply configuration`{.action} to the right of the warning message `Your load balancer configuration has not been applied in all datacenters`.

![01 Add ssh PE on Load Balancer 13](images/01-add-pe-ssh-on-loadbalancer13.png){.thumbnail}

Select your site and click `Apply configuration`{.action}.

![01 Add ssh PE on Load Balancer 14](images/01-add-pe-ssh-on-loadbalancer14.png){.thumbnail}

Select your site again and click on `Apply configuration`{.action}.

![01 Add ssh PE on Load Balancer 15](images/01-add-pe-ssh-on-loadbalancer15.png){.thumbnail}

Go to the `Tasks`{.action} tab to see the progress of the configuration change.

![01 Add ssh PE on Load Balancer 16](images/01-add-pe-ssh-on-loadbalancer16.png){.thumbnail}

You have finished configuring the Load Balancer. You can now log in via SSH to the Prism Element console, with this information :

```bash
ssh admin@nutanix-cluster-ovhcloud-fqdn
```

or: 

```bash
ssh nutanix@nutanix-cluster-ovhcloud-fqdn
```

### Replacing the Prism Central virtual machine with an X-Large machine

Run these commands after you have modified the following information:

- **\<Prism-Central-Private-IP-address\>** : Private IP address of Prism Central
- **\<Prism-Element-Admin-Password\>** : Prism Element admin account password
- **\<Prism-Central-VM-Name\>** : Prism Central VM name

```bash
# Disconnect Prism Element in Prism Central
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=<Prism-Central-Private-IP-address> username=admin password=<Prism-Element-Admin-Password> force=true
# Delete VM
acli vm.delete <Prism-Central-VM-Name>
```

Next, connect to an AHV host in the cluster with this command.

```bash
ssh root@private-ip-address-of-one-ahv-servers
```

Run this command to retrieve the UUID of your default storage, once you have modified the following information:

- **\<Prism-Element-Password\>** : Prism Element admin account password.
- **\<Prism-Element-IP\>** : Private IP address of Prism Element.

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:<Prism-Element-Password>" -X GET "https://<Prism-Element-Ip>:9440/PrismGateway/services/rest/v2.0/storage_containers/" | jq -r '[.entities[] | select( .name | contains("default-container")) | .storage_container_uuid][0]'
```

Next, run this other command to retrieve the UUID of your cluster’s administration network, with the same elements you modified for the previous command:

```bash
curl -s -k -H Accept:application/json -H Content-Type:application/json -u "admin:<Prism-Element-Password>" -X POST https://<prism6element-IP>:9440/api/nutanix/v3/subnets/list -d {} | jq -r "[.entities[] | select( .spec.name | contains(\"<subnet name>\")) | .metadata.uuid][0]"
```

Create a file named **PrismCentralXlarge.json** with the information below :

```json
{
    "resources": {
        "version": "pc.2022.6.0.1",
        "should_auto_register": false,
        "initial_password": "<Prism-Central-Password>",
        "pc_vm_list": [
            {
                "vm_name": "prism-central",
                "container_uuid": "<Default-Container-UUID>",
                "num_sockets": 14,
                "data_disk_size_bytes": 2684354560000,
                "memory_size_bytes": 64424509440,
                "nic_list": [
                    {
                        "ip_list": [
                            "<Prism-Central-Private-IP-Address>"
                        ],
                        "network_configuration": {
                            "network_uuid": "<Nutanix-Network-Admin-UUID>",
                            "subnet_mask": "<Nutanix-Network-Admin-mask>",
                            "default_gateway": "<Nutanix-Network-Admin-Gateway>"
                        }
                    }
                ]
            }
        ]
    }
}
```

Replace these items in the file :

- **\<Prism-Central-Password\>** : Password for the future Prism Central virtual machine.
- **\<Default-Container-UUID\>** : UUID of the default storage retrieved earlier.
- **\<Prism-Central-Private-IP-Address\>** : Private IP address of Prism Central.
- **\<Nutanix-Network-Admin-UUID\>** : Nutanix Cluster Administration Network UUID.
- **\<Nutanix-Network-Admin-mask\>** : Nutanix cluster administration network subnet mask.
- **\<Nutanix-Network-Admin-Gateway\>** : Nutanix cluster administration network default gateway.

Run this command to deploy your Prism Central virtual machine in X-Large mode, once you changed these settings:

- **\<Prism-Element-Password\>** : Prism Element admin account password.
- **\<Prism-Element-Private-IP-Address\>** : Private IP address of Prism Element.

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:<Prism-Element-Password>" -X POST "https://<Prism-Element-Private-IP-Address>:9440/api/nutanix/v3/prism_central" -d @PrismCentralXlarge.json
```

> [!warning]
> Wait thirty minutes for this virtual machine to deploy.
>

Enter the following command by editing these options to create a **pcregister.json** file:

- **\<Prism-Central-Password\>** : Prism Central Password.
- **\<Prism-Central-Private-IP-Address\>** : Private IP address of Prism Central.

```bash
echo "{\"username\":\"admin\",\"password\":\"<Prism-Central-Password>\",\"port\":9440,\"ipAddresses\":[\"<Prism-Central-Private-IP-Address>\"]}" > pcregister.json
```

Run this command to save Prism Element into your new Prism Central virtual machine, after changing these settings :

- **\<Prism-Element-Password\>** : Prism Element admin account password.
- **\<Prism-Element-Private-IP-Address\>** : Private IP address of Prism Element.

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:<Prism-Element-Password>" -X POST "https://<Prism-Element-Private-IP-Address>:9440/PrismGateway/services/rest/v1/multicluster/prism_central/register" -d @pcregister.json
```

Prism Element is now saved in the new Prism Central.

### Migration of Prism Central to 3 virtual machines

Now that Prism Element is attached to your Prism Central virtual machine, you will connect to Prism Central and extend Prism Central to three virtual machines.

Log in to Prism Central with the URL provided during deployment.

Enter your Personal Information, check the box `I have read and agree to the terms and conditions`{.action} and click `Accept`{.action}.

![02 Expand Prism Central 01](images/02-expand-prismcentral-to-three-vm01.png){.thumbnail}

Click `Continue`{.action} when prompted to activate Pulse.

![02 Expand Prism Central 02](images/02-expand-prismcentral-to-three-vm02.png){.thumbnail}

Click the Prism Central configuration `gear`{.action} icon.

![02 Expand Prism Central 03](images/02-expand-prismcentral-to-three-vm03.png){.thumbnail}

Click `Prism Central Management`{.action} to the left and click `Scale Out PC`{.action}.

![02 Expand Prism Central 04](images/02-expand-prismcentral-to-three-vm04.png){.thumbnail}

Click `Confirm`{.action}.

![02 Expand Prism Central 05](images/02-expand-prismcentral-to-three-vm05.png){.thumbnail}

Expansion of Prism Central requires three additional private IP addresses, one for the virtual IP address and two for the new virtual machines.

Scroll through the window and enter this information :

- **Virtual IP** : Prism Central virtual private IP address.
- **VM Name** : Name of the second Prism Central virtual machine.
- **IP** : Private IP address of the second virtual machine.
- **VM Name** : Name of the third Prism Central virtual machine.
- **IP** : Private IP address of the third virtual machine.

Click `Expand`{.action}.

![02 Expand Prism Central 06](images/02-expand-prismcentral-to-three-vm06.png){.thumbnail}

> [!warning]
> Please wait while the expansion is in progress, it may take around thirty minutes.

![02 Expand Prism Central 07](images/02-expand-prismcentral-to-three-vm07.png){.thumbnail}

When the expansion is complete the configuration appears in Prism Central with one virtual IP address and 3 IP addresses for each virtual machine.

![02 Expand Prism Central 08](images/02-expand-prismcentral-to-three-vm08.png){.thumbnail}

### Modifying the Load Balancer to point to the Prism Central virtual IP address

We will replace the IP address of the Prism Central URL with the new virtual IP address through the OVHcloud Load Balancer configuration.

Go to the `Server clusters`{.action} tab, go to NutaClusterAll and click on the `down arrow`{.action} icon to view the servers.

![03 Modify Prism Central Https Address 01](images/03-modify-prism-central-https-address01.png){.thumbnail}

Click `Add Server`{.action}.

![03 Modify Prism Central Https Address 02](images/03-modify-prism-central-https-address02.png){.thumbnail}

Enter this information :

- **Name (Optional)** : PC VIP as Prism Central Virtual IP address.
- **IPv4 address** : Virtual Private IP address 
- **Port** : 9440.

Click `Add`{.action}.

![03 Modify Prism Central Https Address 03](images/03-modify-prism-central-https-address03.png){.thumbnail}

Click the `...`{.action} configuration icon to the right of the **prismCentral** server and choose `Remove`{.action} from the menu.

![03 Modify Prism Central Https Address 04](images/03-modify-prism-central-https-address04.png){.thumbnail}

Click `delete`{.action}.

![03 Modify Prism Central Https Address 05](images/03-modify-prism-central-https-address05.png){.thumbnail}

Click `Apply Configuration`{.action}.

![03 Modify Prism Central Https Address 06](images/03-modify-prism-central-https-address06.png){.thumbnail}

Select location and click `Apply Configuration`{.action}.

![03 Modify Prism Central Https Address 07](images/03-modify-prism-central-https-address07.png){.thumbnail}

Select the `site`{.action} again and click `Apply Configuration`{.action}.

![03 Modify Prism Central Https Address 08](images/03-modify-prism-central-https-address08.png){.thumbnail}

Go to the `Tasks`{.action} tab to see the progress of the changes. The task will be completed when its status is **done**.

![03 Modify Prism Central Https Address 09](images/03-modify-prism-central-https-address09.png){.thumbnail}

You now have Prism Central in X-Large mode with three virtual machines.

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.