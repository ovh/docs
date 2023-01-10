---
title: Persistent Volumes on OVHcloud Managed Kubernetes
slug: ovh-kubernetes-persistent-volumes
excerpt: 'Find out how to setup and manage Persistent Volumes on OVHcloud Managed Kubernetes'
section: Getting started
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/ovh-kubernetes-persistent-volumes/'
---

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

**Last updated 17th October 2022**

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it.  
If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

> [!warning]
> When a __PersistentVolume__ resource is created inside a Managed Kubernetes cluster, an associated Public Cloud __Block Storage__ volume is automatically created with it, with a lifespan depending on the parent cluster's lifespan.
> This volume is hourly charged and will appear in your Public Cloud project. For more information, please refer to the following documentation: [Volume Block Storage price](https://www.ovhcloud.com/es-es/public-cloud/prices/#storage)

## PersistentVolumes

Before going further, let's review how Kubernetes deals with data storage.  
There are currently two kinds of storage available with Kubernetes: Volumes and PersistentVolumes.

Kubernetes __Volumes__ exist only while the Pod (containers) exists, and are deleted when it is deleted.  
As a result, Kubernetes Volumes are only useful for storing temporary data.

Kubernetes __PersistentVolumes__ allow us to work with non-volatile data in Kubernetes. PersistentVolumes are not tied to the pod lifecycle, or to a single Pod. Pods can claim PersistentVolumes, thus making the data available to them.

> [!warning]
> You must be wondering how PersistentVolumes are compatible with the rule that *containers should be stateless* – one of the most important principles of best practice for containers. It's important to note that as the Kubernetes ecosystem has matured, and persistent storage solutions have emerged, this rule is no longer universally applicable.

What are the use cases for PersistentVolumes in Kubernetes?  
Well, the most common application is databases. Database data, by definition, is meant to be persistent, and not linked to a specific pod, so PersistentVolumes are needed to deploy them in Kubernetes.

When deploying a database in Kubernetes, we follow these steps:

* Create and configure a Pod for the database engine
* Attach a PersistentVolume to the pod using a PersistentVolumeClaim
* Mount the claimed volume in the Pod

In order to use a PersistentVolume (PV) on a Kubernetes cluster, you must create a PersistentVolumeClaim (PVC). PersistentVolume Claims are requests to provision a PersistentVolume of a specific type and configuration. The different kinds of persistent storage are defined by cluster admins, using StorageClasses.

When you need a PersistentVolume, you create a PersistentVolumeClaim, and choose a StorageClass from those made available by the cluster administrators. Depending on the StorageClass, an actual infrastructure volume storage device is provisioned into your account and a PersistentVolume is created on this physical device. The PersistentVolume is a sort of virtual storage instance over the infrastructure virtual storage.

![persistent-volumes](images/working-with-persistent-volumes-01.png){.thumbnail}

## PersistentVolumes on OVHcloud Managed Kubernetes

We currently support several Storage Classes on OVHcloud Managed Kubernetes:

- `csi-cinder-classic`
- `csi-cinder-high-speed`

You can display them with the `kubectl get storageclass` command:

<pre class="console"><code>$ kubectl get storageclass
NAME                              PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
csi-cinder-classic                cinder.csi.openstack.org   Delete          Immediate           true                   42d
csi-cinder-high-speed (default)   cinder.csi.openstack.org   Delete          Immediate           true                   42d
</code></pre>

All of them are based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}, the OpenStack Block Storage service.  

The difference between them is the associated physical storage device. The `csi-cinder-high-speed` use SSD, while `csi-cinder-classic` use traditional spinning disks. Both are distributed transparently, on three physical local replicas.

When you create a PersistentVolume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [Flexible Cloud Block Storage Policy](https://www.ovhcloud.com/en/public-cloud/block-storage/){.external}.

Since Kubernetes 1.11, support for expanding `PersistentVolumeClaims` (PVCs) is enabled by default, and it works on Cinder volumes. In order to learn how to resize them, please refer to the [Resizing PersistentVolumes](../resizing-persistent-volumes/) tutorial. Kubernetes PVCs resizing only allows to expand volumes, nor to decrease them.

## Setting up a PersistentVolume

In this guide we are going to use a simple example: a small Nginx web server, running in a Pod, created by a Deployment, attached to a PersistentVolume.

![Kubernetes PV Schema](images/pv-schema.png)

Create a namespace:

```bash
kubectl create ns nginx-example
```

Define a PersistentVolumeClaim (PVC) in a file named `pvc.yaml` with the following content:

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: nginx-logs
  namespace: nginx-example
  labels:
    app: nginx
spec:
  storageClassName: csi-cinder-high-speed
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

Apply the YAML manifest:

```bash
kubectl apply -f pvc.yaml
```

> [!primary]
>
> This PVC will create a PV, with a size of 1GB, dynamically according to the storage class `csi-cinder-high-speed`.

Check the new PVC and PV have been correctly created:

```bash
kubectl get pvc -n nginx-example
kubectl get pv
```

You should see the following:

<pre class="console"><code>$ kubectl create ns nginx-example
namespace/nginx-example created

$ kubectl apply -f pvc.yaml
persistentvolumeclaim/nginx-logs created

$ kubectl get pvc -n nginx-example
NAME         STATUS   VOLUME                                                                   CAPACITY   ACCESS MODES   STORAGECLASS            AGE
nginx-logs   Bound    ovh-managed-kubernetes-d6r47l-pvc-a6025a24-c572-4c28-b5e7-c6f8311aa47f   1Gi        RWO            csi-cinder-high-speed   21s

$ kubectl get pv
NAME                                                                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                      STORAGECLASS            REASON   AGE
ovh-managed-kubernetes-d6r47l-pvc-a6025a24-c572-4c28-b5e7-c6f8311aa47f   1Gi        RWO            Delete           Bound    nginx-example/nginx-logs   csi-cinder-high-speed            19s
</code></pre>

As you can see the PersistentVolume is created and is Bound to the PersistentVolumeClaim you created.

Now create a file named `deployment.yaml` with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: nginx-example
spec:
  strategy:
    type: Recreate
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      volumes:
        - name: nginx-logs
          persistentVolumeClaim:
            claimName: nginx-logs
      containers:
        - image: nginx:1.7.9
          name: nginx
          ports:
            - containerPort: 80
          volumeMounts:
            - mountPath: "/var/log/nginx"
              name: nginx-logs
              readOnly: false
```

Apply it:

```bash
kubectl apply -f deployment.yaml
```

> [!primary]
>
> If you look attentively to the deployment part of this manifest, you will see that we have defined a .spec.strategy.type. It specifies the strategy used to replace old Pods by new ones, and we have set it to Recreate, so all existing Pods are killed before new ones are created.
> 
> We do so as the Storage Class we are using, csi-cinder-high-speed, only supports a ReadWriteOnce, so we can only have one pod writing on the PersistentVolume at any given time.

Thanks to the Deployment, Kubernetes will create one Pod with one container of Nginx and mount a volume on it in the path `/var/log/nginx`. The nginx container will have the permission to write in this folder.

Create a service for the Nginx container in a file named `svc.yaml`:

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx-service
  namespace: nginx-example
spec:
  ports:
    - port: 80
      targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

Apply it:

```bash
kubectl apply -f svc.yml
```

Wait until you get an external IP:

```bash
kubectl -n nginx-example get svc/nginx-service -w
```

And do some calls to the URL to generate some access logs:

```bash
export NGINX_URL=$(kubectl get svc nginx-service -n nginx-example -o jsonpath='{.status.loadBalancer.ingress[].ip}')
echo Nginx URL: http://$NGINX_URL/

curl -I http://$NGINX_URL/
```

You should see the following:

<pre class="console"><code>$ kubectl apply -f deployment.yaml

kubedeployment.apps/nginx-deployment created

$ kubectl get po -n nginx-example
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-766444c4d9-bqnz7   1/1     Running   0          41s

$ kubectl apply -f svc.yaml
service/nginx-service created

$ kubectl -n nginx-example get svc/nginx-service -w

NAME            TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
nginx-service   LoadBalancer   10.3.128.254   <pending>     80:31622/TCP   30s
nginx-service   LoadBalancer   10.3.128.254   <pending>     80:31622/TCP   51s
nginx-service   LoadBalancer   10.3.128.254   152.228.168.120   80:31622/TCP   51s

$ export NGINX_URL=$(kubectl get svc nginx-service -n nginx-example -o jsonpath='{.status.loadBalancer.ingress[].ip}')
echo Nginx URL: http://$NGINX_URL/
Nginx URL: http://152.228.168.120/

$ curl -I http://$NGINX_URL/
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Thu, 24 Mar 2022 12:31:12 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes

$ curl -I http://$NGINX_URL/
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Thu, 24 Mar 2022 12:31:25 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes
</code></pre>

Now we need to connect to the pod to read the log file and verify that our logs are written.

First, get the name of the Nginx running pod:

```bash
export POD_NAME=$(kubectl get po -n nginx-example -o name)
```

And then connect to it and see your access logs:

```bash
kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log
```

You should see the following:

<pre class="console"><code>$ export POD_NAME=$(kubectl get po -n nginx-example -o name)

$ kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log
10.2.1.0 - - [24/Mar/2022:12:31:03 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.64.1" "-"
10.2.2.0 - - [24/Mar/2022:12:31:12 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.64.1" "-"
</code></pre>

