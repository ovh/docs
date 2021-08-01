---
title: Working with vRack example - Communicating between different private networks
slug: vrack-example-between-private-networks
section: Tutorials
order: 11
---


**Last updated July 31th<sup>th</sup>, 2021.**

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

## Objective

OVHcloud [vRack](https://www.ovh.co.uk/solutions/vrack/) is a private networking solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services. It allows you to add Public Cloud instances and Managed Kubernetes clusters to your private networks to create an infrastructure of physical and virtual resources.

Connecting a Managed Kubernetes cluster to another service in the same private network in the vRack is an easier process, as no network configuration is needed. Please have a look to our [../vrack-example-k8s-and-pci/](Working with vRack example - Managed Kubernetes and Public Cloud instances) tutorial to see an example in action.  

In this tutorial, we are going to activate the vRack on a Public Cloud project. Then we will create a Managed Kubernetes cluster and a Public Cloud instance (PCI). Eventually, both of them will be added inside the vRack but in **different private networks**. 

Then we are going to deploy a  [Wordpress](https://wordpress.org/){.external} on the Kubernetes cluster that will connect across the private networks using vRack, to the [MariaDB database](https://mariadb.org/) installed in the Public Cloud instance.

**In this tutorial we are going to give you an example of how to use the OVHcloud [vRack](https://www.ovh.co.uk/solutions/vrack/) to connect a Managed Kubernetes cluster with a Public Cloud instance inside different private network.**

> [!warning]
> The method described in this tutorial is a **temporary one**, only required if you want to route traffic between different private networks in a single vRack. Our Managed Kubernetes team is working on a more streamlined solution for this advanced use case, as explained in [this issue](https://github.com/ovh/public-cloud-roadmap/issues/116) in our [Public Cloud roadmap](https://github.com/ovh/public-cloud-roadmap/).
>


## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

It also supposes that you already have followed the [Using vRack](../using-vrack/) guide to activate the vRack on your Public Cloud project and put your OVHcloud Managed Kubernetes cluster inside the vRack.  It will also be useful to have followed our [../vrack-example-k8s-and-pci/](Working with vRack example - Managed Kubernetes and Public Cloud instances) tutorial to understand the easier use case when both services are in the same private network.

And to understand why this configuration is needed, please have a look at the [Using vRack - Communicating between different private networks](../using-vrack-between-private-networks/) technical document.


## Instructions

### Setting-up the vRack

First of all, we will need to set up vRack Private Network for our Public Cloud. To do it, we follow the [Configuring vRack for Public Cloud](../../public-cloud/public-cloud-vrack/) guide. 


Once we have created a vRack, we need to create two different Private Networks enabled at least on GRA5 region. Don't activate the default gateway option during creation.

![Setting-up the vRack](images/vrack-example-01.png){.thumbnail}


### Retrieving the Openstack configuration file

Now we need to download the `openrc.sh` configuration file, as explained in the [Setting OpenStack environment variables](../../public-cloud/set-openstack-environment-variables/) guide. 

![Retrieving the Openstack configuration file](images/vrack-example-06.png){.thumbnail}

We will be working on GRA5 region, so we download the *Gravelines (GRA5)* file.

![Retrieving the Openstack configuration file](images/vrack-example-07.png){.thumbnail}

Following the steps on the [Setting OpenStack environment variables](../../public-cloud/set-openstack-environment-variables/) guide to be sure that the Openstack CLI is working on our workstation.



<pre class="console"><code>~$ source openrc.sh
Please enter your OpenStack Password:

~$ nova list
+--------------------------------------+---------------------+--------+------------+-------------+------------------------+
| ID                                   | Name                | Status | Task State | Power State | Networks               |
+--------------------------------------+---------------------+--------+------------+-------------+------------------------+
| 0bee959e-48fb-4a7d-94d0-35470837320d | horacio-workstation | ACTIVE | -          | Running     | Ext-Net=51.210.xxx.xxx |
  [...]                         
+--------------------------------------+---------------------+--------+------------+-------------+------------------------+
</code></pre>


### Configuring the private networks

Let's begin by getting the private networks openstack IDs using the openstack CLI:

> [!warning]
> In my case, *My private network* has a subnet range of `10.0.0.0/16`, and *My second private network* has a subnet range of `10.2.0/16`, don't forget to adapt the commands to your specific subnet ranges.

```bash
MY_PRIVATE_NETWORK=$(openstack subnet list --subnet-range 10.0.0.0/16 --column ID -f value)
MY_SECOND_PRIVATE_NETWORK=$(openstack subnet list --subnet-range 10.2.0.0/16 --column ID -f value)
```

Now we can configure *My private network* with a static route to *My second private network*, and *My second private network* with a static route to *My private network*:

```bash
openstack subnet set --host-route destination=10.2.0.0/16,gateway=10.0.0.1 ${MY_PRIVATE_NETWORK}
openstack subnet set --host-route destination=10.0.0.0/16,gateway=10.2.0.1 ${MY_SECOND_PRIVATE_NETWORK}
```

In my case:


<pre class="console"><code>~$ MY_PRIVATE_NETWORK=$(openstack subnet list --subnet-range 10.0.0.0/16 --column ID -f value)
~$ MY_SECOND_PRIVATE_NETWORK=$(openstack subnet list --subnet-range 10.2.0.0/16 --column ID -f value)
~$ echo $MY_PRIVATE_NETWORK
5eda1998-abf0-4787-87a2-acd7431c9c3f
~$ echo $MY_SECOND_PRIVATE_NETWORK
a019c436-6da3-4a10-a00d-49f8a3462bcd
~$ openstack subnet set --host-route destination=10.2.0.0/16,gateway=10.0.0.1 ${MY_PRIVATE_NETWORK}
~$ openstack subnet set --host-route destination=10.0.0.0/16,gateway=10.2.0.1 ${MY_SECOND_PRIVATE_NETWORK}
</code></pre>



### Setting-up a PCI gateway


Now we are going to create a Public Cloud instance in GRA5, to acr as a gateway for our vRack. 

![Setting-up a PCI gateway](images/vrack-example-08.png){.thumbnail}

We are going to create an Ubuntu instance:

![Setting-up a PCI gateway](images/vrack-example-04.png){.thumbnail}

We do NOT attach the instance to a private network yet, as you can unfortunately configure only one private network at the creation stage in the OVHcloud Manager. 

![Setting-up a PCI gateway](images/vrack-example-09.png){.thumbnail}


#### Adding the two private networks

Once the gateway instance is created, we need to add the two private networks to its configuration.

Let's get the private networks and the PCI gateway Openstack IDs:

```bash
NETWORK_ID_1=$(openstack network list --name 'My private network' --column ID -f value)
NETWORK_ID_2=$(openstack network list --name 'My second private network' --column ID -f value)  
INSTANCE_ID=$(openstack server list --name my-vrack-gateway --column ID -f value)
```

And add two private network interfaces, for the two private networks, with the addresses `10.0.0.1` and `10.2.0.1`:

```bash
openstack server add fixed ip --fixed-ip-address 10.0.0.1 ${INSTANCE_ID} ${NETWORK_ID_1}
openstack server add fixed ip --fixed-ip-address 10.2.0.1 ${INSTANCE_ID} ${NETWORK_ID_2}
```

Now we can verify that the gateway instance have two new private IP:

```bash
openstack server show ${INSTANCE_ID} --column addresses -f value
```

As the last command also gave us the gateway instance public IP (in my example `54.38.255.54`), let's add it as shell variable:

```bash
INSTANCE_IP=54.38.255.54    # Don't forget to replace it with your instance public IP
```

In my case:

<pre class="console"><code>~$ NETWORK_ID_1=$(openstack network list --name 'My private network' --column ID -f value)
~$ NETWORK_ID_2=$(openstack network list --name 'My second private network' --column ID -f value)
~$ INSTANCE_ID=$(openstack server list --name my-vrack-gateway --column ID -f value)
~$ echo "$NETWORK_ID_1 | $NETWORK_ID_2 | $INSTANCE_ID"
de6a0bb2-84a3-448b-9675-2d18c90e0b36 | ea508aea-ed11-451c-9d56-f0a542428d06 | ce05e08e-36d5-4bfd-aaa7-ac501caccd9f
~$ openstack server add fixed ip --fixed-ip-address 10.0.0.1 ${INSTANCE_ID} ${NETWORK_ID_1}
~$ openstack server add fixed ip --fixed-ip-address 10.2.0.1 ${INSTANCE_ID} ${NETWORK_ID_2}
~$ openstack server show ${INSTANCE_ID} --column addresses -f value
Ext-Net=2001:41d0:305:1000::2b85, 54.38.255.54; My private network=10.0.0.1; My second private network=10.2.0.1
~$ INSTANCE_IP=54.38.255.54 
</code></pre>


#### Adding and configuring the private network NICs to the gateway instance

Let's SSH into the gateway instance using its public IP:

```bash
ssh ubuntu@$INSTANCE_IP
```

And get the MAX addresses of the two private network interfaces (NICs):

```bash
ip addr show
```


Let's modify the network configuration to configure the two new NICs. Edit `/etc/netplan/50-cloud-init.yaml` (with a `sudo vim /etc/netplan/50-cloud-init.yaml`) and add the information for `ens7` and `ens8`:

`/etc/netplan/50-cloud-init.yaml`
```yaml
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    version: 2
    ethernets:
        ens3:
            dhcp4: true
            match:
                macaddress: fa:16:3e:75:96:e5
            mtu: 1500
            set-name: ens3
        ens7:
            dhcp4: false
            addresses: [10.0.0.1/16]
            match:
                macaddress: fa:16:3e:45:e6:74
            set-name: ens7
        ens8:
            dhcp4: false
            addresses: [10.2.0.1/16]
            match:
                macaddress: fa:16:3e:63:11:ba
            set-name: ens8
```                    

And restart the network:

```bash
sudo netplan apply
```

In my case:

<pre class="console"><code>~$ ssh ubuntu@$INSTANCE_IP
Welcome to Ubuntu 21.04 (GNU/Linux 5.11.0-17-generic x86_64)

ubuntu@my-vrack-gateway:~$ ip addr show
[...]
3: ens7: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether fa:16:3e:45:e6:74 brd ff:ff:ff:ff:ff:ff
    altname enp0s7
4: ens8: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether fa:16:3e:63:11:ba brd ff:ff:ff:ff:ff:ff
    altname enp0s8
ubuntu@my-vrack-gateway:~$ sudo vim /etc/netplan/50-cloud-init.yaml
ubuntu@my-vrack-gateway:~$ sudo netplan apply
ubuntu@my-vrack-gateway:~$ ip addr show
[...]
3: ens7: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether fa:16:3e:45:e6:74 brd ff:ff:ff:ff:ff:ff
    altname enp0s7
    inet 10.0.0.1/16 brd 10.0.255.255 scope global ens7
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fe45:e674/64 scope link
       valid_lft forever preferred_lft forever
4: ens8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether fa:16:3e:63:11:ba brd ff:ff:ff:ff:ff:ff
    altname enp0s8
    inet 10.2.0.1/16 brd 10.2.255.255 scope global ens8
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fe63:11ba/64 scope link
       valid_lft forever preferred_lft forever
</code></pre>


#### Configuring the gateway instance to route the traffic between the two private networks

Now we can configure the gateway instance to route the traffic between the two private networks:

```bash
sudo sed -i 's/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/' /etc/sysctl.conf
sudo sysctl -p
sudo iptables -t nat -A POSTROUTING ! -d 10.0.0.0/16 -o ens8 -j SNAT --to-source 10.2.0.1
sudo iptables -t nat -A POSTROUTING ! -d 10.2.0.0/16 -o ens7 -j SNAT --to-source 10.0.0.1
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt-get -yq install iptables-persistent
```


In my case:

<pre class="console"><code>ubuntu@my-vrack-gateway:~$ sudo sed -i 's/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/' /etc/sysctl.conf
ubuntu@my-vrack-gateway:~$ sudo sysctl -p
net.ipv4.ip_forward = 1
ubuntu@my-vrack-gateway:~$ sudo iptables -t nat -A POSTROUTING ! -d 10.0.0.0/16 -o ens8 -j SNAT --to-source 10.2.0.1
ubuntu@my-vrack-gateway:~$ sudo iptables -t nat -A POSTROUTING ! -d 10.2.0.0/16 -o ens7 -j SNAT --to-source 10.0.0.1
ubuntu@my-vrack-gateway:~$ sudo apt update
Get:1 http://security.ubuntu.com/ubuntu hirsute-security InRelease [101 kB]
[...]
Get:31 http://nova.clouds.archive.ubuntu.com/ubuntu hirsute-backports/universe amd64 c-n-f Metadata [192 B]
Fetched 1832 kB in 1s (1686 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
44 packages can be upgraded. Run 'apt list --upgradable' to see them.
ubuntu@my-vrack-gateway:~$ sudo DEBIAN_FRONTEND=noninteractive apt-get -yq install iptables-persistent
Reading package lists...
[...]
Building dependency tree...
Reading state information...
The following additional packages will be installed:
  netfilter-persistent
The following NEW packages will be installed:
  iptables-persistent netfilter-persistent
[...]
No user sessions are running outdated binaries.
</code></pre>

### Setting-up the Managed Kubernetes attached to *My private network*

Then we create a Kubernetes cluster in GRA5 region, attached to *My private network*, as explained in the [Create a cluster](https://docs.ovh.com/gb/en/kubernetes/creating-a-cluster/) guide. 


![Choose a private network for this cluster](images/vrack-example-10.png){.thumbnail}

Integrating a cluster into a vRack Private Network must be done at the third step on cluster creation, when we can choose an existing private network for the cluster:

![Choose a private network for this cluster](images/vrack-example-11.png){.thumbnail}

Our new cluster will be created inside *My private network*.

In the Managed Kubernetes Service Dashboard, we can see the cluster, with the chosen private network in the *Attached network* column:

![Private network information in Attached network column](images/vrack-example-12.png){.thumbnail}

Don't forget to grab your `kubeconfig` and configure `kubectl` to use it, as explained in the [Configuring kubectl on an OVHcloud Managed Kubernetes cluster](../configuring-kubectl/) guide.


### Setting-up a PCI attached to *My second private network*

Now we can create a new Public Cloud instance, also in GRA5 region, and attach it to  *My second private network* by following the [Integrating an instance into vRack](../../public-cloud/public-cloud-vrack/#step-3-integrating-an-instance-into-vrack_1) guide.

We are going to create an Ubuntu instance:

![Setting-up a PCI attached to *My second private network*](images/vrack-example-04.png){.thumbnail}

In the fourth step of creation, we call it `vrack-example-between-private-networks` and we attach it to *My second private network*:

![Setting-up a PCI attached to *My second private network*](images/vrack-example-13.png){.thumbnail}

After instance creation, we can see the connection details in the OVHcloud Control Panel. 


![Setting-up a PCI attached to *My second private network*](images/vrack-example-14.png){.thumbnail}


If we log in to the instance using SSH, we can see that it has two network interfaces, one attached to the public IP address we use to log in, the other attached to the private network:

<pre class="console"><code>horacio@my-laptop:~$ ssh ubuntu@51.83.109.184
Enter passphrase for key '/home/horacio/.ssh/id_rsa':
Welcome to Ubuntu 21.04 (GNU/Linux 5.11.0-18-generic x86_64)

  System information as of Fri Jun 18 04:37:54 UTC 2021

  System load:  0.0               Processes:             111
  Usage of /:   3.9% of 48.29GB   Users logged in:       0
  Memory usage: 2%                <b>IPv4 address for ens3: 51.83.109.184</b>
  Swap usage:   0%                <b>IPv4 address for ens4: 10.2.76.176</b>

ubuntu@example-vrack-k8s-pci:~$</code></pre>

Please take note of the private network IP address (in my case `10.2.76.176`), as we will need to use it later.

### Verifying that we can access the PCI from the Kubernetes cluster

Let's create modified nginx pod to test our setup. Create a `shell-demo.yaml` manifest:

`shell-demo.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: shell-demo
spec:
  volumes:
  - name: shared-data
    emptyDir: {}
  containers:
  - name: nginx
    image: nginx
    volumeMounts:
    - name: shared-data
      mountPath: /usr/share/nginx/html
  hostNetwork: true
  dnsPolicy: Default
```

And deploy it in the cluster:

```bash
kubectl apply -f shell-demo.yaml
```


Now we can log in to the `shell-demo` pod and add some packages to allows us to verify if we can reach the instance on *My second private network* (in my example with the `10.2.76.176` IP address):

```bash
kubectl exec --stdin --tty shell-demo -- /bin/bash
apt update
apt install iproute2 iputils-ping
ping 10.2.76.176
traceroute 10.2.76.176
```

If everything happens as intended, we can reach the PCI instance in *My second private network* via the gateway:

<pre class="console"><code>~$ kubectl apply -f shell-demo.yaml
pod/shell-demo created
~$ kubectl get pod shell-demo
NAME         READY   STATUS    RESTARTS   AGE
shell-demo   1/1     Running   0          31s

~$ kubectl exec --stdin --tty shell-demo -- /bin/bash
root@nodepool-db0e5587-9718-4faf-b4-node-d69703:/# apt update
Get:1 http://security.debian.org/debian-security buster/updates InRelease [65.4 kB]
[...]

root@nodepool-db0e5587-9718-4faf-b4-node-d69703:/# apt install iproute2 iputils-ping
Reading package lists... Done
Building dependency tree
root@nodepool-db0e5587-9718-4faf-b4-node-d69703:/# ping 10.2.76.176
PING 10.2.76.176 (10.2.76.176) 56(84) bytes of data.
64 bytes from 10.2.76.176: icmp_seq=1 ttl=63 time=2.52 ms
64 bytes from 10.2.76.176: icmp_seq=2 ttl=63 time=1.01 ms
64 bytes from 10.2.76.176: icmp_seq=3 ttl=63 time=0.903 ms
64 bytes from 10.2.76.176: icmp_seq=4 ttl=63 time=1.02 ms
^C
--- 10.2.76.176 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 6ms
rtt min/avg/max/mdev = 0.903/1.361/2.519/0.671 ms

root@nodepool-db0e5587-9718-4faf-b4-node-d69703:/# traceroute 10.2.76.176
traceroute to 10.2.76.176 (10.2.76.176), 30 hops max, 60 byte packets
 1  10.0.0.1 (10.0.0.1)  1.292 ms  1.103 ms  1.017 ms
 2  * * 10.2.76.176 (10.2.76.176)  1.789 ms
</code></pre>

