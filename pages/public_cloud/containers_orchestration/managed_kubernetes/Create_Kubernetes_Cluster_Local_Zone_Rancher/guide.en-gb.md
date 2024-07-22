---
title: Creating a Kubernetes Cluster in a Local Zone using Rancher
excerpt: Learn how to deploy a Kubernetes cluster using Rancher in an OVHcloud Local Zone.
updated: 2024-07-20
---

## Objective

**Discover how to deploy a Kubernetes cluster using Rancher in an OVHcloud Local Zone.**

## Requirements

- Have an OVHcloud project with available instances.
- Refer to the following guides:
  - [OVHcloud Public Cloud Compute Getting Started](/pages/public_cloud/compute/public-cloud-first-steps)

## Instructions

### Step 1: Create Instances

1. Log in to the OVHcloud control panel and open the **Public Cloud** section.
2. Go to **Instances** under the **Compute** section.
3. Click on the **Create an instance** button.
4. Follow the instructions in the [OVHcloud Public Cloud Compute Getting Started](/pages/public_cloud/compute/public-cloud-first-steps) guide to create your SSH key if necessary.
5. Choose an instance model.

![Select your Instance](images/creationmodel.png)

6. Select a Local Zone.

![Select your region](images/regionlocalzone.png)

7. Choose an image.

![Select your region](images/image.png)

8. Select your SSH key.

![Select your region](images/sshnb.png)

9. Indicate `3` as the number of instances to create and rename the instances (e.g., `lz-kube`).

![Select your region](images/nbinstance.png)

10. Check the **Private network** and **Public network** boxes (to have a public IP).

![Select your region](images/networkconfig.png)

11. The instances will take a few minutes to create.

![Select your region](images/instancepret.png)

### Step 2: Deploy a Managed Rancher

1. In the OVHcloud control panel, click on the **Create a Managed Rancher Service** button.

![Select your region](images/rancher.png)

2. Fill in a name (e.g., `my_lz_rancher`), choose the **Standard** plan, the recommended version, and then click on the **Create a Managed Rancher Service** button.

![Select your region](images/menurancher.png)

3. Once the service is created, in the list of Managed Rancher Services, click on your instance, then click on the **Generate access code** button to generate the login and password for accessing Rancher. Save the login and password and click on the **Go to Rancher** button.

![Select your region](images/generationCode.png)

4. Copy/paste the password into the **password** field and click on the **Log in with Local User** button.
5. A new password will be generated, save it! Also save the server URL, check the **End User License Agreement** box, and click on the **Continue** button.

### Step 3: Configure Rancher to Deploy a Kubernetes Cluster

#### Create a Cluster

1. In the Rancher interface, click on the **Create** button then on the **Custom** driver.
2. Fill in a cluster name (e.g., `lz-k3s`).
3. In the list of Kubernetes versions, choose the `1.27.14` version of k3s.
4. Click on the **Create** button.

![Select your region](images/customCluster.png)

#### Configure the Cluster

- **For the etcd and control plane node:**
  - Check the **etcd** and **control plane** boxes.
  - Copy the registration command provided by Rancher.

1. Retrieve the public IP of the first instance in the OVHcloud control panel.
2. SSH into the first instance from your local terminal and run the registration command.

```bash
$ ssh root@xxx.xxx.xxx.xxx
The authenticity of host 'xxx.xxx.xxx.xxx (xxx.xxx.xxx.xxx)' can't be established.
ED25519 key fingerprint is SHA256:dqsdqsdqsdqsd/dqsdqsdqsdqsdqsdqsdq.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
...
root@lz-kube-1:~# curl -fL https://dsqdsqdqsd.p7mg.rancher.ovh.net/system-agent-install.sh | sudo sh -s - --server https://dsqdsqdqsd.p7mg.rancher.ovh.net --label 'cattle.io/os=linux' --token kbv5k48vc8thhgqqhmtd8tn55qtlpgw7jp4llm4m4tvnp9sznscmpf --etcd --controlplane
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 30794    0 30794    0     0   156k      0 --:--:-- --:--:-- --:--:--  157k
[INFO]  Label: cattle.io/os=linux
...

```

### For the worker nodes:

1. Uncheck the boxes and check only the **Worker** box.
2. Copy the registration command provided by Rancher.
3. Retrieve the public IPs of the other two instances in the OVHcloud control panel.
4. SSH into each instance from your local terminal and run the registration command for the worker nodes.

```bash
$ ssh root@xxx.xxx.xxx.xxx
The authenticity of host 'xxx.xxx.xxx.xxx (xxx.xxx.xxx.xxx)' can't be established.
ED25519 key fingerprint is SHA256:dqsdqsdqsdqsd/dqsdqsdqsdqsdqsdqsdq.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
...

root@lz-kube-2:~# curl -fL https://dsqdsqdqsd.p7mg.rancher.ovh.net/system-agent-install.sh | sudo sh -s - --server https://dsqdsqdqsd.p7mg.rancher.ovh.net --label 'cattle.io/os=linux' --token kbv5k48vc8thhgqqhmtd8tn55qtlpgw7jp4llm4m4tvnp9sznscmpf --worker
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 30794    0 30794    0     0   156k      0 --:--:-- --:--:-- --:--:--  157k
[INFO]  Label: cattle.io/os=linux
...
```
1. Wait for the cluster to be in **Active** state.

### Step 4: Connect to the Cluster with the kubectl CLI

1. In the Rancher interface, click on the **lz-k3s** cluster.
2. Click on the **Download KubeConfig** icon to download the kubeconfig file and save the kubeconfig path in an environment variable.

```bash
export KUBE_CLUSTER=$(pwd)/lz_k3s.yml
```

3. Test the connection to the Kubernetes cluster:

```bash
kubectl --kubeconfig=$KUBE_CLUSTER cluster-info
```
4. List the nodes to verify the configuration

kubectl --kubeconfig=$KUBE_CLUSTER get no


```bash
NAME        STATUS   ROLES                       AGE     VERSION
lz-kube-1   Ready    control-plane,etcd,master   9m9s    v1.27.14+k3s1
lz-kube-2   Ready    worker                      8m59s   v1.27.14+k3s1
lz-kube-3   Ready    worker                      9m      v1.27.14+k3s1
```
5. Check the deployed resources in the cluster:

```bash
kubectl --kubeconfig=$KUBE_CLUSTER get all
```

You should see a list of pods, services, and other resources deployed in your Kubernetes cluster.

## Go Further

Join our community of users on <https://community.ovh.com/>.

