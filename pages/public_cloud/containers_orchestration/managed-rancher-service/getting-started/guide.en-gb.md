---
title: Getting Started with Managed Rancher Service
excerpt: 'Find out how to start using Managed Rancher Service on OVHcloud'
updated: 2022-07-28
---

## Objective



Container orchestration has become a cornerstone of modern application deployment, offering scalability, flexibility, and resource efficiency. Rancher is an open-source container management platform that simplifies the deployment and management of Kubernetes clusters.
Managed Rancher Service by OVHcloud, provides a powerful platform for orchestrating Kubernetes clusters seamlessly. In this detailed guide, we will explore the intricacies of setting up and managing containerized workloads.


###  Accessing Rancher on OVHcloud Cloud

To initiate your journey, log in to the OVHcloud Manager and access the Managed Rancher Service under Container & Orchestration section.

### Create a new Rancher

//todo how to create a rancher using OVHcloud manager

This web-based interface serves as your command center for orchestrating containers & clusters, visualizing cluster health, and managing various aspects of your Kubernetes infrastructure.

###  Navigating the Rancher Dashboard

The Rancher dashboard is designed to offer an intuitive and comprehensive view of your containerized environment. Explore the navigation menu, which typically includes sections for clusters, projects, applications, and infrastructure. This is where you'll gain insights into the health and performance of your clusters.

###  Create a New Cluster

Begin by adding a new cluster to Rancher. This involves specifying the type of cluster, whether it be a Kubernetes cluster or a custom configuration. Follow the guided steps to define cluster settings, number of nodes (master, worker, etcd), authentication, and any additional configurations offered by OVHcloud Cloud and the targeted platform.

//todo explain differences between Rancher plans and eligible targets

###  Importing Existing Clusters

For organizations with pre-existing Kubernetes clusters, Rancher simplifies integration. Import your clusters seamlessly, allowing Rancher to take over the management responsibilities. This streamlined process facilitates the transition to Rancher without disrupting your existing infrastructure.

###  Configuring Advanced Cluster Settings

Delve into the advanced settings of your clusters. Depending on the capabilities provided by OVHcloud Cloud, you might find options for fine-tuning security measures, optimizing network configurations, and leveraging specific cloud features to enhance the performance and resilience of your clusters.

###  Exploring OVHcloud-Specific Integrations

Take advantage of any OVHcloud-specific integrations that Rancher offers. This could include enhanced security features, custom networking solutions, or cloud-native functionalities designed to align seamlessly with the OVHcloud Cloud environment. These integrations can provide unique advantages for your container orchestration strategy.
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

Rancher, when managed within the OVHcloud Cloud environment, offers a comprehensive solution for container orchestration. By following these detailed steps, you'll not only establish a robust Kubernetes infrastructure but also harness the full potential of Rancher's features within the unique context of OVHcloud Cloud. Happy Ranchering!


## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
