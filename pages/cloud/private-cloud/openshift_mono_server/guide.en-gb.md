---
title: OpenShift Origin deployment on OVH Private Cloud - Mono-server
slug: openshift-private-cloud-mono-server
excerpt: Automate a mono-server installation of your Openshift Origin instance
section: OpenShift
order: 20
---

**Last updated 19th September 2018**

## Objective

This first guide will go throught:

1. create and configure a VM from the template we created [earlier](https://docs.ovh.com/gb/en/private-cloud/vsphere-unattended-centos-install/).
2. basic configuration and hello world deployment on OpenShift

## Requirements

- an access to a vSphere instance
- a terminal with root access for package installation. It can be a Debian under [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux), CentOS, Ubuntu, ...

> [!primary]
> 
> The resources used to automate this guide are available at [https://github.com/ovh/docs/tree/master/pages/cloud/private-cloud/openshift_mono_server/scripts/](https://github.com/ovh/docs/tree/master/pages/cloud/private-cloud/openshift_mono_server/scripts/).
> 

From your terminal, install `ansible` and `govc`.

If you use `python-2`, make sure to use `ansible-2.7` or above due to issue [#42237](https://github.com/ansible/ansible/pull/42237) otherwise, switch to `python-3` and `ansible-2.6.4`

All variables are set in a `vars.yml` file that needs to be edited before running the playbooks

### GOVC installation

`govc` is a Go client using the vSphere API. You can fetch the latest release from the [Release](https://github.com/vmware/govmomi/releases) page.

> [!primary]
> 
> **Tip**: Due to the pull-request [#1233](https://github.com/vmware/govmomi/pull/1233) not released yet, please build your client from the source like descriped here https://github.com/vmware/govmomi/tree/master/govc#source
> 

After an `unzip` or `tar` and `chmod +x`, you'll need to setup at least three environmnent variables.

```shell
export GOVC_URL=https://pcc-xxx-xxx-xxx-xxx.ovh.com/sdk
export GOVC_USERNAME=username
export GOVC_PASSWORD=password
```

> [!primary]
> 
> **Tip**: Edit a file `activate` with the three export commands and source it `. activate` from your terminal before running the scripts.
> 

You can now try the following command

```shell
$ govc about
Name:         VMware vCenter Server
Vendor:       VMware, Inc.
Version:      6.0.0
Build:        7037394
OS type:      win32-x64
API type:     VirtualCenter
API version:  6.0
Product ID:   vpx
UUID:         xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## Create a master server

### Gather parameters

The first step is to create a [SSH key]({filename}../../public-cloud/how_to_create_an_ssh_key/guide.en-gb.md) and set the variable `ssh_key_pub` to the path of the public key inside the `vars.yml` file.

Then, we need to select a valid public IP for our master node.
Your private cloud cluster IP block is available via the OVH API.

The IP block can be retreived via a call on `/1.0/ip`. In case you have several clusters or IP blocks, additional filters can be used, like `/1.0/ip?routedTo.serviceName=pcc-123-456-789-123&type=pcc`. More info here [https://api.ovh.com/console/#/ip#GET](https://api.ovh.com/console/#/ip#GET)

For this guide, will assume you get the IP block `123.45.67.32/28`.

Using the following code, you can easily extract the needed info from the OVH API or the IP block directly.

```python
#!/usr/bin/env python3

import ovh # pip install ovh
import ipaddress # introduced in python3.3

if __name__ == '__main__':
    client = ovh.Client(endpoint=ENDPOINT, application_key=APP_KEY, application_secret=APP_SECRET, consumer_key=CONSUMER_KEY)
    blocks = client.get('/ip', **{'routedTo.serviceName': 'pcc-123-456-789-123', 'type': 'pcc'})
    # blocks = ['123.45.67.32/28']
    for block in blocks:
        ip = ipaddress.ip_network(block)
        print("Found block {}".format(block))
        if ip.version != 4:
            continue
        print("Netmask: {.exploded}".format(ip.netmask))
        print("Broadcast:{.exploded}".format(ip.broadcast_address))
        print("Gateway: {.exploded}".format(ip.broadcast_address-1))
        print("Reserved: {.exploded}, {.exploded}, {.exploded}".format(ip.network_address, ip.broadcast_address-3, ip.broadcast_address-2))
        print("Valid range: {.exploded} - {.exploded}".format(ip.network_address+1, ip.broadcast_address-4))
```

The output should look like

```shell
Found block 2001:41d0:68:5300::/56
Found block 123.45.67.32/28
Netmask: 255.255.255.240
Broadcast:123.45.67.47
Gateway: 123.45.67.46
Reserved: 123.45.67.32, 123.45.67.44, 123.45.67.45
Valid range: 123.45.67.33 - 123.45.67.43
```

Let's pick `123.45.67.33` as our master node IP and fill the `ip`, `netmask`, `broadcast` and `gw` variables in the `vars.yml` file

### Master setup

The steps for the master node steup are:

- Setting its hostname with the value of the variable `hostname`
- Adding the public SSH key to the list of authorized keys
- Disabling password authentication via SSH
- Setting the DNS server
- Enforcing SELINUX configuration
- Configuring the network interface with the value gathered previously

All those tasks are summarised in the `set_config.sh` which will be generated from the `set_config.sh.j2` template by Ansible.

The above can be done automated via

```shell
ansible-playbook -vvv --extra-vars @vars.yml deploy_master.yml
```

### Setup Openshift

Several steps needs to be done before installing Openshift.

There are few packages dependencies like

- `httpd-tools` for managing password authentication
- `unzip` for extracting the archive
- `epel-release` for installing latest `ansible` version
- `ansible` itself for running playbook
- `jq` for parsing JSON document from the command-line

Also to improve security, we'll modify the default `hosts.localhost` inventory file to enable `HTPasswdPasswordIdentityProvider` indentity provider.

The above can be done automated via

```shell
ansible-playbook -vvv --extra-vars @vars.yml setup_openshift.yml
```

Once done, we need to SSH to the host with `ssh root@<your host ip>` and the last missing steps are:

- running the ansible installation playbook

```shell
cd openshift-ansible*
ansible-playbook -vv -i inventory/hosts.localhost playbooks/prerequisites.yml
ansible-playbook -vv -i inventory/hosts.localhost playbooks/deploy_cluster.yml
```

- Configuring your adming account

```shell
htpasswd -c -b /etc/origin/master/htpasswd admin your_password
oc adm policy add-cluster-role-to-user cluster-admin admin
```

- Run your first Hello-world example

```shell
oc run hello-world --replicas=2 --image=gcr.io/google-samples/node-hello:1.0 --port=8080
oc expose deploymentconfig hello-world --type=NodePort --name=hello-world
```

You can get the exposed port via `oc get service hello-world -o json | jq '.spec.ports[0].nodePort'` and try to browse and do a cURL on `http://<ip>:<exposed port>`.

You just deployed a containerized web application on your Private Cloud with OpenShift!

## Conclusion

We have learnt how to automate the setup an OpenShift origin mono-server setup

The next article will reuse the same template and cover the setup with one master and several nodes.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
