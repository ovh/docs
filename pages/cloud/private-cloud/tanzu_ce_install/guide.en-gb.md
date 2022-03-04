---
title: Install Tanzu Community Edition
slug: tanzu-ce-install
excerpt: Integrate Tanzu Community Edition (TCE) on your infrastructure
section: Tanzu
order: 01
---

**Last Updated on 03/03/2022**

## Objective

VMware Tanzu Community Edition (TCE) is a full-featured, easy-to-manage Kubernetes platform.
You can deploy the product on an OVHcloud infrastructure to leverage its functionnality and scalability.

**This guide offers a step by step example of TCE installation**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Have a user account with access to vSphere
- Have an [NSX Edge Services Gateway](https://docs.ovh.com/gb/en/private-cloud/how-to-deploy-an-nsx-edge-gateway/) deployed
- Have [dhcp](https://docs.ovh.com/gb/en/private-cloud/setup-dhcp-nsx-edge/) services activated on the NSX Gateway


## Instructions

### Network

As stated in the Requirements (with links to full docs), an NSX Edge Services Gateway is used in our study case for Firewall and DHCP purposes.<br>
Other Network components can be used as alternative such as pfsense.<br>

To set up your Network, you will need to define a public IP for external access and an internal network with dhcp service activated for your TCE infrastructure.<br>
Your Datacenter comes with a set of public IPs useable for your different needs. They are visible in the Datacenter `Configure`{.action} tab, in the `Network`{.action} section. You will also see the mask and gateway settings on the page.<br>
Check out our [Adding an IP block](https://docs.ovh.com/gb/en/private-cloud/add-ip-block/) documentation if you are out of useable public IPs.

![](images/en00ipblocks.png){.thumbnail}

> [!warning]
>
> Public IPs marked as "Reserved" are used for Datacenter functions and cannot be used for other services.
>

For our study case, the NSX Edge Services Gateway is set up with two interfaces as follows
- an external interface (Uplink) with a primary and secondary public IPs (xxx.xxx.xxx.225 and xxx.xxx.xxx.226)
- an internal interface (Internal) with private IP 172.16.13.1 on VLAN13<br>
![](images/en01nsxinter.png){.thumbnail}
- dhcp service distributing VLAN13 address scope 172.16.13.10 through 172.16.13.100<br>
![](images/en02nsxdhcp.png){.thumbnail}
- an SNAT rule to translate adress range 172.16.13.1/24 into secondary public IP xxx.xxx.xxx.226 for external access <br>
![](images/en03nsxsnat.png){.thumbnail}

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Security`{.action} tab of your Private Cloud and add the public IPs used to the allowed adresses to connect.<br>
The adresses should appear as "Authorised and set up".<br>
![](images/en00ipsec.png){.thumbnail}

### Node Template

The TCE clusters require a template to be used to build the nodes. Those can be dowloaded from the [VMware Customer Connect](https://customerconnect.vmware.com/downloads/get-download?downloadGroup=TCE-0100) website. If you do not own an account, you can create one for free.

Select the latest version of the OVA you need to use and download it locally.

![](images/en22down.png){.thumbnail}

In vSphere, right right click on a host or cluster and select `Deploy OVF Template`{.action}.

![](images/en23ovfdeploy.png){.thumbnail}

Browse for the OVA file you downloaded and deploy it.

![](images/en24ovfopen.png){.thumbnail}

Once done, right click on the VM and in the `Template`{.action} section, select `Convert to Template`{.action}.

![](images/en24template.png){.thumbnail}


### Bootstrap VM

Once the Network and template are ready, a Bootstrap VM is needed.<br>
It will hold the necessary software components (Docker and Kubectl) and pilot the installation of Tanzu.<br>
We'll use an Ubuntu VM but any OS allowing the install of the necessary items would work.<br>
VM prerequisites for Tanzu CE is 2 CPUs and 6 GB Ram.<br>
You can deploy a VM [from an ISO](https://docs.ovh.com/gb/en/private-cloud/deploying-a-virtual-machine/) or [from an OVF template](https://docs.ovh.com/gb/en/private-cloud/applying-ovh-template/).<br>

Make sure the VM is set on the VLAN that will be used for the Tanzu clusters (VLAN13 in our case).<br>
![](images/en04bootvlan.png){.thumbnail}

In a terminal window, start with update commands:
>sudo apt update
and
>sudo apt-get install build-essential

#### [NTP](https://vitux.com/how-to-install-ntp-server-and-client-on-ubuntu/) install

>sudo apt-get install ntp

#### [Homebrew](https://www.how2shout.com/linux/how-to-install-brew-ubuntu-20-04-lts-linux/) install

Start with git
>sudo apt install git -y

Run the Homebrew install script
>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Add Homebrew to your path
>eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

Install gcc
>brew install gcc

#### [Docker Engine](https://docs.docker.com/engine/install/) install

Start with getting the necessary packages
>sudo apt-get install \ 
>ca-certificates \ 
>curl \ 
>gnupg \ 
>lsb-release

Add Docker’s official GPG key
>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

set up the stable repository
>echo \ 
>"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \ 
>$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

Set up the engine
>sudo apt-get install docker-ce docker-ce-cli containerd.io

Post install, add the current user to the docker group to allow it to run it without rights elevation
>sudo usermod -aG docker $USER

#### [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) install

Download the lastest package
>curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

Run the installer
>sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

#### SSH Key Pair

run the creation command
>ssh-keygen -t rsa -b 4096 -C "youremail@yourdomain.com"

Press Enter to save the key in default path (/root/.ssh/id_rsa).<br>
Enter and confirm a password for the key.<br>
Add the private key to the SSH agent running on your machine, and enter the password you created in the previous step.
>ssh-add ~/.ssh/id_rsa

Keep the .ssh/id_rsa.pub file handy as it holds the public key you will need to input later for TCE configuration

### Tanzu Management Cluster

The VM is now ready for Tanzu deployment.

#### [Tanzu CLI](https://tanzucommunityedition.io/docs/latest/cli-installation/)

In a terminal window, run the CLI install commmand
>brew install vmware-tanzu/tanzu/tanzu-community-edition

Note the output install folder and run the post install script: {HOMEBREW-INSTALL-LOCATION}/configure-tce.sh
>/home/linuxbrew/.linuxbrew/Cellar/tanzu-community-edition/v0.10.0/libexec/configure-tce.sh

![](images/en05tanzucli.png){.thumbnail}

#### [Deployment](https://tanzucommunityedition.io/docs/latest/vsphere-install-mgmt/)

Launch the installer with the command
>tanzu management-cluster create --ui

In the opening browser window, select the vSphere option

![](images/en06deploy.png){.thumbnail}

enter the Private cloud FQDN and fill in administrative credential before clicking `Connect`{.action}.

![](images/en07connect.png){.thumbnail}

Click `Continue`{.action} to verify the SSL footprint.

![](images/en08ssl.png){.thumbnail}

Select your datacenter and fill in the SSH public key created earlier (.ssh/id_rsa.pub).<br>
Click `Next`{.action}.

![](images/en09ssh.png){.thumbnail}

Choose a type of cluster (Development or Production) and a node size.

![](images/en10type.png){.thumbnail}

Fill in the name of your custer, choose a control plane enpoint provider and IP (same subnet but outside of dhcp scope).<br>
Click `Next`{.action}.

![](images/en11control.png){.thumbnail}

NSX Advanced Load Balancer and Metadata sections are optional and we'll leave them as is.<br>
Click `Next`{.action} on both of them.

![](images/en12optional.png){.thumbnail}

Choose your resource locations.<br>
Click `Next`{.action}.

![](images/en13resources.png){.thumbnail}

Enter the Kubernetes Network settings.<br>
Click `Next`{.action}.

![](images/en14kubnet.png){.thumbnail}

Disable Identity Management.<br>
Click `Next`{.action}.

![](images/en15identity.png){.thumbnail}

Select the node template to be used.<br>
Click `Next`{.action}.

![](images/en16os.png){.thumbnail}

Click `Review Configuration`{.action}.

![](images/en17review.png){.thumbnail}

When ready, click `Deploy Management Cluster`{.action}.

![](images/en18deploy.png){.thumbnail}

Upon completion, verify tou get a creation message and the nodes are visible in vSphere.

![](images/en20created.png){.thumbnail}

![](images/en21vsphere.png){.thumbnail}

Get the cluster admin credentials for future interactions:
>tanzu cluster kubeconfig get "clustername" --admin


### Tanzu Workload Cluster

To deploy a workload cluster, we'll duplicate and modify the configuration file for the management cluster.<br>
Start a terminal window in the bootstrap VM and go to the config file folder.<br>
>cd .config/tanzu/tkg/clusterconfigs

Use ls to find the yaml configuration file name and copy it into a new one.<br>
>cp existing.yaml new.yaml

![](images/en26copyconf.png){.thumbnail}

Use a text editor to modify the key fields:
- CLUSTER_NAME : choose a name for your new cluster
- VSPHERE_CONTROL_PLANE_ENDPOINT : choose an unused IP in the same subnet but not in the dhcp scope
- VSPHERE_FOLDER : this is not mandatory but you can define a different folder for ease of management<br>
Save and close the file.

Back in the terminal, run the deploy command calling your new yaml file.<br>
> tanzu cluster create --file .config/tanzu/tkg/clusterconfigs/new.yaml

Upon completion, verify tou get a creation message and the nodes are visible in vSphere.

![](images/en27created.png){.thumbnail}

![](images/en28vsphere.png){.thumbnail}

Get the cluster admin credentials for future interactions:
>tanzu cluster kubeconfig get "clustername" --admin

TCE is now ready for application installs.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
