---
title: Getting Started with Managed Rancher Service
excerpt: 'Find out how to start using Managed Rancher Service on OVHcloud'
updated: 2024-02-01
---

> [!warning]
>
> Usage of [Managed Rancher Service](https://labs.ovhcloud.com/en/managed-rancher-service/) is currently in Alpha phase.
> This guide may be incomplete and will be extended during the beta phase. Our team remains available on our dedicated Discord Channel, do not hesitate do join and reach us : <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.
>

## Objective

Container orchestration has become a cornerstone of modern application deployment, offering scalability, flexibility, and resource efficiency. Rancher is an open-source container management platform that simplifies the deployment and management of Kubernetes clusters.
Managed Rancher Service by OVHcloud, provides a powerful platform for orchestrating Kubernetes clusters seamlessly. In this Geting Started guide we will explore the intricacies of setting up and managing containers clusters.


## Rancher Creation and Access
> [!warning]
>
> During the Alpha phase, Rancher access are directly provided by OVHcloud team. Manager implementation will be available at Beta release phase. Please ignore this part for now.
>

To initiate your journey, log in to the OVHcloud Manager and access the _Managed Rancher Service_ under the _Container & Orchestration_ section.
Using the OVHcloud Manager you can trigger the creation of a Rancher which will be operated and managed by OVHcloud.

Simply click on the 'create' button at the top right of the manager and follow the steps below:

1. Define your Rancher's name
2. Select your Plan between "OVHcloud Edition" (coming soon) and "Standard"
3. Select the Rancher version
4. Click on Create
5. Wait for your Rancher to be created
6. Access the details of your newly created Rancher by clicking on its name
7. On the "Security and Access" section, click on "Generate access details", confirm, then click on "access Rancher UI"
8. Copy/Paste the provided credentials on the Rancher login page. Note: you will need to change your password at first login. If you lose your password you have the possibility to generate a new one by using the "Generate access details" action button.

You now have access to the Rancher dashboard, it is designed to offer an intuitive and comprehensive view of your containerized environment.
This web-based interface serves as your command center for orchestrating containers & clusters, visualizing cluster health, and managing various aspects of your Kubernetes infrastructure. Explore the navigation menu, which includes sections for clusters, projects, applications, and Rancher settings.

As it is a brand new Rancher instance you do not have any downstream Kubernetes clusters, next step is to add some of them. To do so you have two options: Import existing Kubernetes clusters or Create new clusters using Rancher.

### Create or Import your Kubernetes clusters :
#### Create a Kubernetes cluster with Rancher

Using this option you will be able to create Kubernetes cluster from scratch. Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives.
You can use Rancher to launch a Kubernetes cluster on any platform and location including:
  - Hosted Kubernetes provider (ex: OVHcloud Managed Kubernetes Service, AWS EKS, GCP GKE,... )
  - Infrastructure Provider - Public Cloud or Private Cloud (vSphere, Nutanix,...)
  - Bare-metal servers, cloud hosted or on premise
  - Virtual machines, cloud hosted or on premise


For the last three options, when Rancher deploys Kubernetes onto these nodes, you can choose between Rancher Kubernetes Engine RKE2 or k3s distributions.
Follow the official Rancher documentation on [How to launch Kubernetes with Rancher](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher) explaining how to define cluster settings, number of nodes (master, worker, etcd), authentication, and any additional configurations.

We will detail below how to use OVHcloud as a Hosted Kubernetes provider and Infrastructure Provider using our official OVHcloud Drivers.


##### Use OVHcloud as a **Hosted Kubernetes Provider**

> [!warning]
>
> Deploying to OVHcloud will incur charges. For more information, refer to the [MKS](https://www.ovhcloud.com/en/public-cloud/prices/#568) and [Compute](https://www.ovhcloud.com/en/public-cloud/prices/) pricing pages.
>

  On this part we will detail how to use Rancher to create and manage [OVHcloud Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/) clusters.

  1. From the Rancher Homepage, click on **Create**
  ![Rancher Homepage](images/rancher-homepage_create.png)

  2. Use the OVHcloud **Hosted Kubernetes provider** by clicking on **OVHcloud MKS**
  ![Cluster Creation](images/cluster-creation.png)

  3. Set the parameters of your MKS cluster
  ![Cluster Creation](images/mks-cluster-creation-form.png)

  You need to provide the following parameters:

  | Field                   | Mandatory                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                    | Yes                                 | Name of the Managed Kubernetes Service Cluster that will be created.                                                                                                                                                                                                                                                                                                                                                                 |
| Member Roles            | Yes, default value is ok| Configure user authorization for the cluster. Click Add Member to add users that can access the cluster. Use the Role drop-down to set permissions for each user.                                                                                                                                                                                                                                                                     |
| Label & Annotations     | No                                  | Add Kubernetes labels or annotations to the cluster.                                                                                                                                                                                                                                                                                                                                                                                  |
| Account Configuration   | Yes                                 | Provide your OVH API credentials, you can follow our guide on how to [Generate your OVHcloud API Keys](https://help.ovhcloud.com/csm/en-ie-api-getting-started-ovhcloud-api?id=kb_article_view&sysparm_article=KB0042786#advanced-usage-pair-ovhcloud-apis-with-an-application). Please refer to the table bellow to set the required rights on APIs  routes . Restrictions are Optional, you can use a `/*` wildcard.                                                                                                                       |
| Application Key         | Yes                                 | cf. guide provided above. Value is provided at APIs Keys generation step on https://www.ovh.com/auth/api/createToken                                                                                                                                                                                                                                                                                                                  |
| Consumer Key            | Yes                                 | cf. guide provided above. Value is provided at APIs Keys generation step on https://www.ovh.com/auth/api/createToken                                                                                                                                                                                                                                                                                                                  |
| Application Secret      | Yes                                 | cf. guide provided above. Value is provided at APIs Keys generation step on https://www.ovh.com/auth/api/createToken                                                                                                                                                                                                                                                                                                                  |
| Public cloud project ID | Yes                                 | The projectID of the OVHcloud project where your MKS cluster will be deployed. You can follow the guide on [How to create your first Project](https://help.ovhcloud.com/csm/en-public-cloud-compute-create-project?id=kb_article_view&sysparm_article=KB0050599) or if already existing, you can copy/paste it from OVHcloud Manager or [APIs](https://eu.api.ovh.com/console-preview/?section=%2Fcloud&branch=v1#get-/cloud/project)  |
| OVH API Endpoint        | Yes                                 | Select the OVHcloud subsidiary (EU, US, CA)                                                                                                                                  |

  Minimum required access rights on the APIs routes (can be used to limit the access right when creating APIs keys on https://www.ovh.com/auth/api/createToken )

  | Method              | API Route                                             |
  |---------------------|-------------------------------------------------------|
  | POST                | /cloud/project/{PROJECT-ID}/kube                      |
  | POST/GET/PUT/DELETE | /cloud/project/{PROJECT-ID}/kube/*                    |
  | GET                 | /cloud/project/{PROJECT-ID}/capabilities/kube/flavors |
  | GET                 | /cloud/project/{PROJECT-ID}/capabilities/kube/regions |
  | GET                 | /cloud/project/{PROJECT-ID}/network/private           |
  | GET                 | /cloud/project                                        |

4. Move to **Cluster Configuration**
![MKS Driver Cluster Configuration](images/mksdriver_cluster_config.png)
Provide the following parameters:
  - the **Region** where your cluster will be deployed,
  - the **Kubernetes Version**, only versions supported by Rancher current version are listed (you can refer to the [Official Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions))
  - the **Update Policy** you want to define for your managed cluster (for more information refer to the [Managed Kubernetes Update Policies](https://help.ovhcloud.com/csm/en-public-cloud-kubernetes-change-security-update?id=kb_article_view&sysparm_article=KB0049649) guide)


5. Move to  **Network Configuration**
![MKS Driver Cluster Configuration](images/mksdriver_network_configuration.png)
  Provide the following parameters:
  - the **Private Netword ID** for your MKS cluster. Use 'none' to create a cluster with nodes using Public IP or select an existing OVHcloud Public Cloud private network.
  - the **Default vRack Gateway** (optional), leave it empty to use the default gateway of your Private Network.
  - the **Private Network Routing As Default** state, activate this feature if you want to use an OVHcloud Managed Gateway or a custom Gateway as a single exit point for your MKS nodes.


6. Move to **NodePools Configuration**
![MKS Driver Cluster Configuration](images/mksdriver_nodepool_configuration.png)
  Provide the following parameters:
  - the **Name** of the NodePool, it must be unique inside a same MKS cluster
  - the OVHcloud Instance **Flavor** used by this NodePool
  - the **Autoscaling** state, if the autoscaling is enabled, it will display the min nodes and max nodes instead
  - the **Size** of your NodePool (number of nodes that will be created)  
  - the **Monthly Billing** state (hourly by default)

  Then click on 'Add Node Pool'. You can add multiple NodePools and then manage your list of Nodepools (note that the 'delete' action button of your first NodePool is grayed out till a second one is created).

7. Click on **Finish & Create Cluster**

8. From the Homepage your cluster is now in 'Provisioning' state
![MKS Driver Cluster Configuration](images/mksdriver_provisioning.png)
From the Cluser Management page, wait for your cluster to become 'Active'
![MKS Driver Cluster Configuration](images/mksdriver_cluster_provisioning.png)
![MKS Driver Cluster Configuration](images/mksdriver_cluster_provisioning_available.png)

Your cluster is now fully functional. You can click on 'Explore' to manage your MKS Cluster.


##### Use OVHcloud as an **Infrastructure Provider**


On this part we will detail how to use Rancher to create and manage Kubernetes clusters based on [OVHcloud Public Cloud Compute Instances](https://www.ovhcloud.com/en/public-cloud/compute/).

  > [!warning]
  >
  > Deploying to OVHcloud will incur charges. For more information, refer to the [MKS](https://www.ovhcloud.com/en/public-cloud/prices/#568) and [Compute](https://www.ovhcloud.com/en/public-cloud/prices/) pricing pages.
  >
  >


1. From the Rancher Homepage, click on 'Create'
![Rancher Homepage](images/rancher-homepage_create.png)

2. Use the OVHcloud 'Infrastructure Provider' by clicking on "OVHcloud Public Cloud" under the 'Provision new nodes and create using RKE2/k3s' section:
![Cluster Creation](images/cluster-creation.png)

3. Create your cloud credentials
![Cluster Creation](images/PublicCloudDriver_creation_auth.png)
Provide the following parameters:
  - **Credential Name** (Optional)
  - **Openstack Authentication URL**, default value can't be changed
  - your Openstack **Username**, please refer to our Documentation for [Creating and deleting OpenStack users](https://help.ovhcloud.com/csm/en-public-cloud-compute-openstack-users?id=kb_article_view&sysparm_article=KB0050625)
  - your Openstack **Password**, please refer to our Documentation for [Creating and deleting OpenStack users](https://help.ovhcloud.com/csm/en-public-cloud-compute-openstack-users?id=kb_article_view&sysparm_article=KB0050625)\

You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters.

4. Click on **Get Project List** and select the **Project** were you want to create your cluster.\
5. Click on **Continue**.

6. Set your **Cluster Name** and **Cluster Description**.\
![Public Cloud Driver - Cloud Credentials](images/PublicCloudDriver_creation_cloud_credential.png)
7. Create a **Machine Pool** for each Kubernetes role. Refer to the [Best Practices](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider#node-roles), [Node Requirements for Rancher Managed Clusters](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters), [Requirements for RKE2 installation (flavors and OS)](https://docs.rke2.io/install/requirements) and [Recommended Cluster Architecture](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture) guides for recommendations on role assignments and counts.
![Cluster Creation](images/PublicCloudDriver_creation_machine_pool.png)
    For each machine pool, define the machine configuration by providing the following parameters:
    - **Pool Name** - Name of the Machine Pool
    - **Machine Count** - Number of instances
    - **Roles** - `etcd`, `Control Plane` or `Worker`. You can refer to the [Node Roles](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider#node-roles) documentation.
    - **Region** - The OVHcloud Public Cloud region. If you want to check the availability of specific products that you plan to use alongside Kubernetes, you can refer to the [Availability of Public Cloud Product](https://www.ovhcloud.com/en/public-cloud/regions-availability/) page.
    - **Flavor** - The instance flavor used for your nodes. You can refer to the [OVHcloud Flavor list](https://www.ovhcloud.com/en/public-cloud/prices/#13569).
    - **Image** - The Operating System image used for your nodes. Please refer to [Rancher Operating Systems and Container Runtime Requirements](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters).
    - **Key Pair** - The SSH Key Pair used to access your nodes. Please refer to this guide on [how to create a SSH KeyPair and add it to your Public Cloud project](https://help.ovhcloud.com/csm/en-public-cloud-compute-getting-started?id=kb_article_view&sysparm_article=KB0051009).
    - **Security Group** - Existing security groups from our Public Cloud project.
    - **Availability Zone** - Only `nova` is supported at the moment.
    - **Floating IP Pools** - Only `Ext-Net` is supported at the moment.
    - **Networks** - Public Cloud Network to attach your nodes
    - **SSH user ID** - Username that will be used to access your nodes


8. Use the **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the [RKE2 cluster configuration reference](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration).
Use Member Roles to configure user authorization for the cluster. Click Add Member to add users that can access the cluster. Use the Role drop-down to set permissions for each user.
10. Click **Create**.


### Import an existing Kubernetes cluster

For organizations with pre-existing Kubernetes clusters, Rancher simplifies integration. Import your clusters seamlessly, wherever they are deployed, allowing Rancher to take over the management responsibilities. This process facilitates the transition to Rancher without disrupting your existing infrastructure.

You can refer to the official Rancher documentation on how to [Register Existing Cluster](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters).

#### Import an existing OVHcloud [Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/) cluster

If you already use our [OVHcloud Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/) , you can easily import existing cluster.
The workflow is similar to the one described on the official Rancher documentation on [how to register a cluster](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#registering-a-cluster) and it takes only few minutes.

1. From the Rancher Homepage, click on **Import Existing**
![Rancher Homepage](images/rancher-homepage.png)
2. Select **Generic**
![Import Cluster](images/import-cluster.png)
3. Set the Cluster Name (it is not mandatory to match the name of your existing MKS cluster) then click on **Create**
![Import Cluster Form](images/import-cluster-form.png)
4. Follow the instructions provided on the **Registration** tab
![Register Cluster Instructions](images/register-cluster-instructions.png)

  Run the provided kubectl command on an existing Managed Kubernetes Service cluster that is running a supported Kubernetes version to import it into Rancher:
  ``` shell
  $ kubectl apply -f https://rancher.ovh.net/v3/import/file.yaml
  clusterrole.rbac.authorization.k8s.io/proxy-clusterrole-kubeapiserver unchanged
  clusterrolebinding.rbac.authorization.k8s.io/proxy-role-binding-kubernetes-master unchanged
  namespace/cattle-system created
  serviceaccount/cattle created
  clusterrolebinding.rbac.authorization.k8s.io/cattle-admin-binding created
  secret/cattle-credentials-ac3c0a4 created
  clusterrole.rbac.authorization.k8s.io/cattle-admin created
  deployment.apps/cattle-cluster-agent created
  service/cattle-cluster-agent created
  ```
5. Wait until your cluster becomes available:
![Cluster Dashboard](images/cluster-dashboard-explore.png)
6. Tada ! Your cluster is now federated on your Rancher. You can click on **Explore** to manage your MKS Cluster.



###  Exploring OVHcloud-Specific Integrations

//TODO explain CSI and storage offers

###  Deploying Applications with Rancher

Now that your clusters are set up, leverage Rancher's user-friendly interface to deploy applications effortlessly. Define workloads, services, and deployment strategies within the Rancher UI. Explore the extensive catalog of pre-configured application templates to simplify and expedite your application deployment process.
To access the applications catalogs, explore your federated downstream Kubernetes cluster and click on Apps/Charts of the left panel.

![App Catalog](images/app-catalog.png)

###  Managing Resources

Rancher empowers you with robust tools for resource management. Monitor the health of nodes, track resource utilization, and scale applications dynamically as demand fluctuates. The centralized control provided by Rancher ensures efficient resource allocation across your Kubernetes clusters.

###  Monitoring and Troubleshooting

Dive into Rancher's monitoring capabilities to gain real-time insights into the performance of your clusters and applications. Use logging features and diagnostic tools to troubleshoot issues promptly. Rancher's comprehensive monitoring suite ensures you can proactively address potential challenges.


### Regular Updates and Maintenance

Stay informed about updates to Rancher and OVHcloud Manager Rancher Service features. Regularly check for new releases, security patches, and optimizations. This proactive approach ensures that your container orchestration environment remains secure, efficient, and aligned with the latest industry standards.

//TODO explanation on upgrade policy
//TODO explanation regarding the fact that clusters created through rancher should not be manually updated (using API or manager)

### Conclusion

Rancher, when managed within the OVHcloud Cloud environment, offers a comprehensive solution for container orchestration. By following these detailed steps, you'll not only establish a robust Kubernetes infrastructure but also harness the full potential of Rancher's features within the unique context of OVHcloud Cloud.
Happy Ranchering!


## Go further

- To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
