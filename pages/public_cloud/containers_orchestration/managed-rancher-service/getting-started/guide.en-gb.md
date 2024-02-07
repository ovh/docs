---
title: Getting Started with Managed Rancher Service
excerpt: 'Find out how to start using Managed Rancher Service on OVHcloud'
updated: 2024-02-01
---

> [!warning]
>
> Usage of [Managed Rancher Service](https://labs.ovhcloud.com/en/managed-rancher-service/) is currently in Beta phase.
> This guide may be incomplete and will be extended during the beta phase. Our team remains available on our dedicated Discord Channel, do not hesitate do join and reach us : <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.
>

## Objective

Container orchestration has become a cornerstone of modern application deployment, offering scalability, flexibility, and resource efficiency. Rancher is an open-source container management platform that simplifies the deployment and management of Kubernetes clusters.
Managed Rancher Service by OVHcloud, provides a powerful platform for orchestrating Kubernetes clusters seamlessly. In this detailed guide, we will explore the intricacies of setting up and managing containerized workloads.


### Rancher Creation and Access

To initiate your journey, log in to the OVHcloud Manager and access the _Managed Rancher Service_ under the _Container & Orchestration_ section.
Using the OVHcloud Manager you can trigger the creation of a Rancher which will be operated and managed by OVHcloud.

Simply click on the 'create' button at the top right of the manager and follow the steps below:

1. Define the name of your Rancher
2. Select your Plan between "OVHcloud Edition" (coming soon) and "Standard"
3. Select the Ranche version
4. Click on Create
5. Wait for your Rancher to be created
6. Access the details of your newly created Rancher by click on its name
7. On the "Security and Access" section, click on "Generate access details", confirm, then click on "access Rancher UI"
8. Copy/Paste the provided credentials on the Rancher login page. Note: you will to change your password at first login. If you lose your password you have the possibility to generate a new one by using the "Generate access details" action button.

You now have access to the Rancher dashboard, it is designed to offer an intuitive and comprehensive view of your containerized environment.
This web-based interface serves as your command center for orchestrating containers & clusters, visualizing cluster health, and managing various aspects of your Kubernetes infrastructure. Explore the navigation menu, which includes sections for clusters, projects, applications, and Rancher settings.

As it is a brand new Rancher instance you do not have any downstream Kubernetes clusters, next step is to add some of them. To do so you have two options: Import existing Kubernetes clusters or Create new clusters using Rancher.

### Import or Create your Kubernetes clusters :

#### - Import an existing Kubernetes cluster

For organizations with pre-existing Kubernetes clusters, Rancher simplifies integration. Import your clusters seamlessly, wherever they are deployed, allowing Rancher to take over the management responsibilities. This process facilitates the transition to Rancher without disrupting your existing infrastructure.

You can refer to the official Rancher documentation on how to [Register Existing Cluster](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters).

#### - Import an existing OVHcloud [Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/) cluster

If you already use our [OVHcloud Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/) , you can easily import existing cluster.
The workflow is similar to the one described on the official Rancher documentation on [how to register a cluster](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#registering-a-cluster) and it takes only few minutes.

1. From the Rancher Homepage, click on 'Import Existing'
2. Select 'Generic'
3. Set the Cluster Name (it is not mandatory to match the name of your existing MKS cluster) then click on 'Create'
4. Follow the instructions provided on the 'Registration' tab

  Run the kubectl command below on an existing Kubernetes cluster running a supported Kubernetes version to import it into Rancher:
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
5. wait until your cluster becomes available:

6. Tada ! Your cluster is now federated on your Rancher. You can click on 'Explore' to manage your MKS Cluster.

####  - Create a Kubernetes cluster with Rancher

Using this option you will be able to create Kubernetes cluster from scratch. Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives.
You can use Rancher to launch a Kubernetes cluster using any nodes you want. Rancher can launch Kubernetes on any computers, including:
  -  Bare-metal servers
  -  On-premise virtual machines
  -  Virtual machines hosted by an infrastructure provider

When Rancher deploys Kubernetes onto these nodes, you can choose between Rancher Kubernetes Engine (RKE) or RKE2 distributions.
Follow the official Rancher documentation on [How to launch Kubernetes with Rancher](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher) and follow guide to define cluster settings, number of nodes (master, worker, etcd), authentication, and any additional configurations.

#### - Create a Kubernetes cluster on OVHcloud using Rancher

You can use OVHcloud to host your Kubernetes clusters launched by Rancher. To do so there is two options:
- Use OVHcloud as a **Hosted Kubernetes Provider** by using Rancher to create and federate [OVHcloud Managed Kubernetes Service](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).
- Use OVHcloud as an **Infrastructure Provider** by using Rancher to build a Kubernetes clusters using [OVHcloud computes instances](https://www.ovhcloud.com/en-ie/public-cloud/compute/) as nodes.

We are providing two official drivers





###  Exploring OVHcloud-Specific Integrations

//TODO explain public cloud and MKS drivers. CSI and storage offers

###  Deploying Applications with Rancher

Now that your clusters are set up, leverage Rancher's user-friendly interface to deploy applications effortlessly. Define workloads, services, and deployment strategies within the Rancher UI. Explore the extensive catalog of pre-configured application templates to simplify and expedite your application deployment process.

###  Managing Resources

Rancher empowers you with robust tools for resource management. Monitor the health of nodes, track resource utilization, and scale applications dynamically as demand fluctuates. The centralized control provided by Rancher ensures efficient resource allocation across your Kubernetes clusters.

###  Monitoring and Troubleshooting

Dive into Rancher's monitoring capabilities to gain real-time insights into the performance of your clusters and applications. Utilize logging features and diagnostic tools to troubleshoot issues promptly. Rancher's comprehensive monitoring suite ensures you can proactively address potential challenges.


###  Regular Updates and Maintenance

Stay informed about updates to Rancher and OVHcloud Manager Rancher Service features. Regularly check for new releases, security patches, and optimizations. This proactive approach ensures that your container orchestration environment remains secure, efficient, and aligned with the latest industry standards.

//TODO explanation on upgrade policy

### Conclusion

Rancher, when managed within the OVHcloud Cloud environment, offers a comprehensive solution for container orchestration. By following these detailed steps, you'll not only establish a robust Kubernetes infrastructure but also harness the full potential of Rancher's features within the unique context of OVHcloud Cloud.
Happy Ranchering!


## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
