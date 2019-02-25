---
title: 'Installing Nginx Ingress on OVH Kubernetes'
slug: install-nginx-ingress-ovh-kubernetes
excerpt: 'Find out how to install Nginx Ingress on OVH Managed Kubernetes '
section: 'Technical ressources'
---

**Last updated 29th January, 2019.**


*Find out how to setup [Nginx Ingress](https://github.com/kubernetes/ingress-nginx) on your OVH Managed Kubernetes Service.*

## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please take a look at the relative OVH documentation.

You also need to have [Helm](https://docs.helm.sh/) installer on your workstation and your cluster, please refer to the appropriate OVH documentation.

## Installing the Nginx Ingress Controller Helm chart

For this tutorial we are using the [Nginx Ingress Controller  Helm chart](https://github.com/helm/charts/tree/master/stable/nginx-ingress) found on Helm repositories.

The chart is fully configurable, but here we are using the default configuration, with only the minimal set of customization to define the `NodePort` when want it to use.

```
helm install --set controller.service.type=NodePort,controller.service.nodePorts.http=32080,controller.service.nodePorts.https=32443 stable/nginx-ingress
```

The installing processus will begin:

```
$ helm install --set controller.service.type=NodePort,controller.service.nodePorts.http=32080,controller.service.nodePorts.https=32443 stable/nginx-ingress
NAME:   gaudy-saola
LAST DEPLOYED: Tue Oct  9 23:14:45 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1beta1/RoleBinding
NAME                       AGE
gaudy-saola-nginx-ingress  1s

==> v1/Service
gaudy-saola-nginx-ingress-controller       1s
gaudy-saola-nginx-ingress-default-backend  0s

==> v1beta1/Deployment
gaudy-saola-nginx-ingress-controller       0s
gaudy-saola-nginx-ingress-default-backend  0s

==> v1beta1/ClusterRole
gaudy-saola-nginx-ingress  1s

==> v1beta1/ClusterRoleBinding
gaudy-saola-nginx-ingress  1s

==> v1beta1/Role
gaudy-saola-nginx-ingress  1s

==> v1/Pod(related)

NAME                                                        READY  STATUS             RESTARTS  AGE
gaudy-saola-nginx-ingress-controller-8755f9c55-pnbf4        0/1    ContainerCreating  0         0s
gaudy-saola-nginx-ingress-default-backend-866fcf644d-pt2cx  0/1    ContainerCreating  0         0s

==> v1/ConfigMap

NAME                                  AGE
gaudy-saola-nginx-ingress-controller  1s

==> v1/ServiceAccount
gaudy-saola-nginx-ingress  1s
```



At the end of the install, as usual with most helm charts, you get the configuration information and some tips to test your `nginx-ingress`:

```
NOTES:
The nginx-ingress controller has been installed.
Get the application URL by running these commands:
  export HTTP_NODE_PORT=32080
  export HTTPS_NODE_PORT=32443
  export NODE_IP=$(kubectl --namespace default get nodes -o jsonpath="{.items[0].status.addresses[1].address}")

  echo "Visit http://$NODE_IP:$HTTP_NODE_PORT to access your application via HTTP."
  echo "Visit https://$NODE_IP:$HTTPS_NODE_PORT to access your application via HTTPS."
```

An example Ingress that makes use of the controller:

```
  apiVersion: extensions/v1beta1
  kind: Ingress
  metadata:
    annotations:
      kubernetes.io/ingress.class: nginx
    name: example
    namespace: foo
  spec:
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                serviceName: exampleService
                servicePort: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress
    tls:
        - hosts:
            - www.example.com
          secretName: example-tls
```

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

```
  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls
```

The instructions aren't well suited to your OVH Managed Kubernetes cluster, as they suppose you're deploying services with the `LoadBalancer` type. Instead of using `NODE_IP`, we should use the nodes URL found in the OVH Control Panel (you can refer to the relative OVH documentation)

Then you can put this nodes URL in a `NODES_URL` environment variable, and acceed your nginx-ingress, with `http://$NODES_URL:32080 `to access via HTTP and with `https://$NODES_URL:32443` to access via HTTPS

In order to test your `nginx-ingress`, we suggest you to install a Wordpress on your cluster (you can follo the relative OVH documentation to do so), and then create a YAML file for the Ingress that uses the controller:

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  annotations:
    kubernetes.io/ingress.class: nginx
  name: ingress
  namespace: default
spec:
  rules:
    - host: blog.[YOUR_NODES_URL]
      http:
        paths:
          - backend:
              serviceName: [YOUR_WORDPRESS_SERVICE_NAME]
              servicePort: 80
            path: /
```

> [!primary] 
>Don't forget to replace `[YOUR_NODES_URL]`, `[YOUR_WORDPRESS_SERVICE_NAME]`
> 

Apply the file:

```
kubectl apply -f ./ingress.yml
```

And the Ingress is created. 

```
$ kubectl apply -f ./ingress.yml 
ingress.extensions/ingress created
```

So now if you point your browser to `blog.[YOUR_NODES_URL]` on the port 32080, you will see your Wordpress:

![Wordpress using Ingress](images/installing-ingress-01.png)