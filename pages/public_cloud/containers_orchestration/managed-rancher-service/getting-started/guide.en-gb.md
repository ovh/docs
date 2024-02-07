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
7. On the "Security and Access" section, click on "Generate access details", confirm, then click on "access Rancher UI", copy/paste the provided credentials on the Rancher login page. Note: you will to change your password at first login. If you lose your password you have the possibility to generate a new one by using the "Generate access details" action button.


###  Navigating the Rancher Dashboard

The Rancher dashboard is designed to offer an intuitive and comprehensive view of your containerized environment.
This web-based interface serves as your command center for orchestrating containers & clusters, visualizing cluster health, and managing various aspects of your Kubernetes infrastructure. Explore the navigation menu, which typically includes sections for clusters, projects, applications, and infrastructure. This is where you'll gain insights into the health and performance of your clusters.

There is two options to add clusters to your Rancher:

### Import or Create your Kubernetes clusters :

#### - Import an existing Kubernetes cluster

For organizations with pre-existing Kubernetes clusters, Rancher simplifies integration. Import your clusters seamlessly, allowing Rancher to take over the management responsibilities. This streamlined process facilitates the transition to Rancher without disrupting your existing infrastructure.

To do so, you can refer to the official Rancher documentation on how to [Register Existing Cluster](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters).

#### - Import an existing OVHcloud Managed Kubernetes Cluster



####  - Create a new Kubernetes cluster with Rancher

First option is to create a Kubernetes cluster from scratch. Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives. Rancher provides multiple options for launching a cluster.
You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, you can choose between Rancher Kubernetes Engine (RKE) or RKE2 distributions.
This involves specifying the type of cluster, whether it be a standard Kubernetes cluster or a custom configuration. Follow the guided steps to define cluster settings, number of nodes (master, worker, etcd), authentication, and any additional configurations.

#### - Create a new Kubernetes cluster on OVHcloud using Rancher







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
