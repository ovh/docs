---
title: 'Install Jenkins on OVH Kubernetes'
slug: install-jenkins-ovh-kubernetes
excerpt: 'Find out how to install Jenkins on OVH Managed Kubernetes'
section: 'Technical ressources'
---

**Last updated 29th January, 2019.**

Find out how to install [Jenkins](https://jenkins.io/) on your OVH Managed Kubernetes service.

We are going to install Jenkins master and slave clusters, utilising the [Jenkins Kubernetes plugin](https://wiki.jenkins.io/display/JENKINS/Kubernetes+Plugin).


## Before you begin

This tutorial assumes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know about those topics, please take a look at the relevant OVH documentation.

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster. Please refer to the appropriate OVH documentation, if necessary.

## Installing the Jenkins Helm chart

For this tutorial we are using the [Jenkins Helm chart](https://github.com/helm/charts/tree/master/stable/jenkins), found on Helm repositories. The chart is fully configurable, but here we are using the default configuration, with only the minimal amount of customisation, to ensure it works well on OVH Managed Kubernetes.

We are configuring the Helm chart to use `NodePort` as the service type, as the default type,`LoadBalancer`, isn't supported in the beta phase of OVH Managed Kubernetes. 

### Customising your installation

Maybe you would like your admin username to be different, or be able to set your admin password, or modify the resources allocated... 

In order to customise your installation, without having to give up the simplicity of using Helm and the Jenkins Helm chart, you can simply set some of the [configurable parameters of the Jenkins chart](https://github.com/helm/charts/tree/master/stable/jenkins#configuration). You can then add it to your `helm install` with the `--set` option (`--set param1=value1,param2=value2`):

```
helm install --set Master.ServiceType=NodePort stable/jenkins
```

This will install your Jenkins master:

```
$ helm install --set Master.ServiceType=NodePort stable/jenkins
NAME:   kissed-stingray
LAST DEPLOYED: Mon Oct 15 15:26:34 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Pod(related)
NAME                                      READY  STATUS   RESTARTS  AGE
kissed-stingray-jenkins-7b95fb74bf-llkb2  0/1    Pending  0         0s

==> v1/Secret

NAME                     AGE
kissed-stingray-jenkins  1s

==> v1/ConfigMap
kissed-stingray-jenkins        1s
kissed-stingray-jenkins-tests  1s

==> v1/PersistentVolumeClaim
kissed-stingray-jenkins  1s

==> v1/Service
kissed-stingray-jenkins-agent  1s
kissed-stingray-jenkins        1s

==> v1/Deployment
kissed-stingray-jenkins  1s
```

**NOTES:**

1. Get your 'admin' user password by running:

`printf $(kubectl get secret --namespace default kissed-stingray-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo`
  
2. Get the Jenkins URL to visit by running these commands in the same shell:

`export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services kissed-stingray-jenkins)`
`export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")`
`echo http://$NODE_IP:$NODE_PORT/login`

3. Log in with the password from step 1 and the `admin` username.

For more information on running Jenkins on Kubernetes, visit:
https://cloud.google.com/solutions/jenkins-on-container-engine


The instructions aren't well suited to your OVH Managed Kubernetes cluster, as they suppose you're deploying services with the `LoadBalancer` type. Instead of using `NODE_IP`, we should use the nodes URL, found in the OVH Control Panel.

In our example:

```
$ export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services kissed-stingray-jenkins)
$ export NODE_URL=51amh7.nodes.c1.gra.k8s.ovh.net
$ echo "Jenkins URL: http://$NODE_URL:$NODE_PORT/"
Jenkins URL: http://2qar2x.nodes.c1.gra.k8s.ovh.net:32656/
$ printf $(kubectl get secret --namespace default kissed-stingray-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
sdfSDGvb
```

Entering the URL in your browser will take you to your new Jenkins platform:

![Jenkins login](images/installing-jenkins-01.png)

Log in with `admin` username and the password you got before.

![Leeeeeeeroy Jenkins!](images/installing-jenkins-02.png)


You now have a working Jenkins platform on your OVH Managed Kubernetes Service. Congratulations!