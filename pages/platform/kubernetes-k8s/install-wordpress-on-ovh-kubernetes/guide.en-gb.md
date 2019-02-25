---
title: 'Installing WordPress on OVH Managed Kubernetes'
slug: install-wordpress-ovh-kubernetes
excerpt: 'Find out how to install WordPress on OVH Managed Kubernetes'
section: 'Technical ressources'
---

**Last updated 29th January, 2019.**

Find out how to install WordPress on your OVH Managed Kubernetes service.

## Before you begin

This tutorial assumes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please consult the relevant OVH documentation.

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and cluster. Please refer to the relevant OVH documentation on this topic.

## Installing the WordPress Helm chart

For this tutorial we are using the [WordPress Helm chart](https://github.com/helm/charts/tree/master/stable/wordpress){.external} found on Helm repositories. The chart is fully configurable, but here we are using the default configuration, with only the minimal amount of customisation to ensure it works well on the OVH Managed Kubernetes service.

We are configuring the Helm chart to use `NodePort` as the service type, as the default type,`LoadBalancer`, isn't supported in the beta phase of OVH Managed Kubernetes. 

### Customising your installation

Maybe you would like your username to be different, or be able to set your password, or choose an external database instead of deploying the MariaDB container... 

In order to customise your installation without having to give up the simplicity of using Helm and the WordPress Helm chart, you can simply set some of the [configurable parameters of the WordPress chart](https://github.com/helm/charts/tree/master/stable/wordpress#configuration). You can then add it to your `helm install` with the `--set` option (`--set param1=value1,param2=value2`).


```
helm install --set service.type=NodePort stable/wordpress 
```

This will install the required elements (a MariaDB pod for the database, a WordPress pod for the webserver with the WordPress PHP code),
allocate the Persistent Volumes and initialise the services. And at the end, it will give you the connection parameters for your new WordPress platform:


```
$ helm install --set service.type=NodePort stable/wordpress 
NAME:   mollified-lynx
LAST DEPLOYED: Thu Oct 11 05:27:02 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                                 AGE
mollified-lynx-mariadb-init-scripts  1s
mollified-lynx-mariadb               1s
mollified-lynx-mariadb-tests         1s

==> v1/PersistentVolumeClaim
mollified-lynx-wordpress  1s

==> v1/Service
mollified-lynx-mariadb    1s
mollified-lynx-wordpress  1s

==> v1beta1/Deployment
mollified-lynx-wordpress  1s

==> v1beta1/StatefulSet
mollified-lynx-mariadb  1s

==> v1/Pod(related)

NAME                                       READY  STATUS   RESTARTS  AGE
mollified-lynx-wordpress-84b94cfd5f-xsbsj  0/1    Pending  0         1s
mollified-lynx-mariadb-0                   0/1    Pending  0         1s

==> v1/Secret

NAME                      AGE
mollified-lynx-mariadb    1s
mollified-lynx-wordpress  1s
```

Then it will show you basic information of how to connect to your new Wordpress:

```
**NOTES:**

1. Get the WordPress URL:

  export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services mollified-lynx-wordpress)
  export NODE_IP=$(kubectl get nodes --namespace default -o jsonpath="{.items[0].status.addresses[0].address}")
  echo "WordPress URL: http://$NODE_IP:$NODE_PORT/"
  echo "WordPress Admin URL: http://$NODE_IP:$NODE_PORT/admin"

2. Log in with the following credentials to view your blog:

  echo Username: user
  echo Password: $(kubectl get secret --namespace default mollified-lynx-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
```

The instructions aren't well suited to your OVH Managed Kubernetes cluster, as they assume you're deploying services with the `LoadBalancer` type. Instead of using `NODE_IP`, we should use the *nodes URL* found in the OVH Control Panel, or with the following command lines.

In our example:

```
$ export NODE_PORT=$(kubectl get --namespace default -o jsonpath="{.spec.ports[0].nodePort}" services mollified-lynx-wordpress)
$ export NODE_URL=$(kubectl cluster-info | awk -F 'https://' '/Kubernetes/ { sub("c1","nodes.c1", $0); print $2 }')
$ echo "WordPress URL: http://$NODE_URL:$NODE_PORT/"
WordPress URL: http://******.nodes.c1.gra.k8s.ovh.net:32656/
$ echo "WordPress Admin URL: http://$NODE_URL:$NODE_PORT/admin"
WordPress Admin URL: http://******.nodes.c1.gra.k8s.ovh.net:32656/admin
```

Entering the URL in your browser will take you to the new blog:

![Installing Wordpress](images/installing-wordpress-01.png){.thumbnail}

You can also use the instructions given by the Helm installation to get the default username and password for your blog.

In our example:

```
$ echo Username: user
Username: user
$ echo Password: $(kubectl get secret --namespace default mollified-lynx-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
Password: ***********
```

![Installing Wordpress](images/installing-wordpress-02.png){.thumbnail}


You now have a working WordPress platform on your OVH Managed Kubernetes Service. Congratulations!
