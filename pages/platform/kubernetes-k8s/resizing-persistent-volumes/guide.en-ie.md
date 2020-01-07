---
title: 'Resizing Persistent Volumes'
slug: resizing-persistent-volumes
excerpt: 'Find out how to resize Persistent Volumes on OVHcloud Managed Kubernetes'
section: Tutorials
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

**Last updated 6<sup>th</sup> January, 2020.**

In this tutorial we are going to guide you with the resize of [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) (PVs) on your OVHcloud Managed Kubernetes Service.

The Kubernetes `PersistentVolume` subsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this Kubernetes provides two API resources: `PersistentVolume` (PVs) and `PersistentVolumeClaim` (PVCs).

Since Kubernetes 1.11, support for expanding PersistentVolumeClaims (PVCs) is enabled by default, and in this tutorial you will learn how to do it. 

> [!warning]
> Kubernetes PVCs resizing only allows to expand volumes, not to decrease them.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

You also need to know how PVs are handled on OVHcloud Managed Kubernetes service, please refer to the [Persistent Volumes on OVHcloud Managed Kubernetes](../ovh-kubernetes-persistent-volumes/) guide.


## Let's make a Persistent Volume Claim

To test the PVs resizing, we will need a PV associated to the cluster, i.e. we need to deploy a service making a PVC. To keep thing simple, we choose to deploy a single instance of [MySQL](https://www.mysql.com/).

Let's begin by creating a `mysql-pvc.yaml` to define an initial PVC with 2 GB of allocated space:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pv-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
```

And apply it to the cluster:

```bash
kubectl apply -f mysql/mysql-pvc.yaml 
```

We can then verify that the PVC is correctly created and bound to a PV:

```bash
kubectl describe pvc mysql-pv-claim
```

Now we create a `mysql-deployment.yaml` file to deploy the MySQL using that PVC:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mysql
spec:
  ports:
  - port: 3306
  selector:
    app: mysql
  clusterIP: None
---
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: mysql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mysql
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - image: mysql:5.6
        name: mysql
        env:
          # Use secret in real usage
        - name: MYSQL_ROOT_PASSWORD
          value: password
        ports:
        - containerPort: 3306
          name: mysql
        volumeMounts:
        - name: mysql-persistent-storage
          mountPath: /var/lib/mysql
      volumes:
      - name: mysql-persistent-storage
        persistentVolumeClaim:
          claimName: mysql-pv-claim
```

And we deploy and verify it:

```bash
kubectl apply -f mysql-deployment.yaml
kubectl describe deployment mysql
```

In my example cluster, the precedent commands obtains:

<pre class="console"><code>$ kubectl apply -f mysql/mysql-pvc.yaml 
persistentvolumeclaim/mysql-pv-claim created

$ kubectl describe pvc mysql-pv-claim
Name:          mysql-pv-claim
Namespace:     default
StorageClass:  csi-cinder-high-speed
Status:        Bound
Volume:        ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
Labels:        &lt;none>
Annotations:   kubectl.kubernetes.io/last-applied-configuration:
                 {"apiVersion":"v1","kind":"PersistentVolumeClaim","metadata":{"annotations":{},"name":"mysql-pv-claim","namespace":"default"},"spec":{"acc...
               pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
               volume.beta.kubernetes.io/storage-provisioner: cinder.csi.openstack.org
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      2Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Mounted By:    mysql-c85f7f79c-wz4w7
Events:
  Type    Reason                 Age                From                                                                                         Message
  ----    ------                 ----               ----                                                                                         -------
  Normal  ExternalProvisioning   72s (x2 over 72s)  persistentvolume-controller                                                                  waiting for a volume to be created, either by external provisioner "cinder.csi.openstack.org" or manually created by system administrator
  Normal  Provisioning           72s                cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  External provisioner is provisioning volume for claim "default/mysql-pv-claim"
  Normal  ProvisioningSucceeded  70s                cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  Successfully provisioned volume ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d

$ kubectl apply -f mysql/mysql-deployment.yaml 
service/mysql created
deployment.apps/mysql created

$ kubectl describe deployment mysql
Name:               mysql
Namespace:          default
CreationTimestamp:  Mon, 06 Jan 2020 11:45:03 +0100
Labels:             &lt;none>
Annotations:        deployment.kubernetes.io/revision: 1
                    kubectl.kubernetes.io/last-applied-configuration:
                      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"name":"mysql","namespace":"default"},"spec":{"replicas":1,"selec...
Selector:           app=mysql
Replicas:           1 desired | 1 updated | 1 total | 1 available | 0 unavailable
StrategyType:       Recreate
MinReadySeconds:    0
Pod Template:
  Labels:  app=mysql
  Containers:
   mysql:
    Image:      mysql:5.6
    Port:       3306/TCP
    Host Port:  0/TCP
    Environment:
      MYSQL_ROOT_PASSWORD:  password
    Mounts:
      /var/lib/mysql from mysql-persistent-storage (rw)
  Volumes:
   mysql-persistent-storage:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  mysql-pv-claim
    ReadOnly:   false
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  &lt;none>
NewReplicaSet:   mysql-c85f7f79c (1/1 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  27s   deployment-controller  Scaled up replica set mysql-c85f7f79c to 1
</code></pre>


## Accessing the MySQL instance and initializing a database

The preceding YAML file creates a service that allows other Pods in the cluster to access the database. The Service option `clusterIP: None` lets the Service DNS name resolve directly to the Pod’s IP address. This is optimal when you have only one Pod behind a Service and you don’t intend to increase the number of Pods.

Now we are going to use `kubectl` to create a `mysql` client on the fly to connect to the database:

```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
```

And then simply create a database with a table:

```sql
CREATE DATABASE testingResize;
USE testingResize;
CREATE TABLE anEmptyTable (k VARCHAR(256), v TEXT);
SHOW TABLES;
```


On my example cluster:

<pre class="console"><code>$ kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
If you don't see a command prompt, try pressing enter.

mysql> CREATE DATABASE testingResize;
Query OK, 1 row affected (0.01 sec)

mysql> USE testingResize;
Database changed

mysql> CREATE TABLE anEmptyTable (k VARCHAR(256), v TEXT);
Query OK, 0 rows affected (0.04 sec)

mysql> SHOW TABLES;
+-------------------------+
| Tables_in_testingResize |
+-------------------------+
| anEmptyTable            |
+-------------------------+
1 row in set (0.00 sec)
</code></pre> 




## Expand the PVs

In order to expand the persistent volume, the first step is to unbound the PVC from the deployments using them.
To do that, we set the `deployment`'s `replicas` to 0:


```bash
kubectl patch deployment mysql -p '{ "spec": { "replicas": 0 }}'
```

Then we path the PVC definition to expand the volume to 6 GB:

```bash
kubectl patch pvc mysql-pv-claim -p '{ "spec": { "resources": { "requests": { "storage": "6Gi" }}}}'
```


> [!warning]
> Kubernetes PVCs resizing only allows to expand volumes, not to decrease them.
> If you try to decrease the storage size, you will get a message like
>
> `The PersistentVolumeClaim "mysql-pv-claim" is invalid: spec.resources.requests.storage: Forbidden: field can not be less than previous value`

We verify that the volume has been expanded:

```bash
kubectl describe pvc mysql-pv-claim
```

In the "conditions" field shown by the output of the previous command line, we can see that the PVC is waiting for user to start a pod to finish file system resize of the volume.
Let's put `replicas` back to `1` on `mysql-deployment.yaml`, and deploy it again to start a pod:

```bash
kubectl patch deployment mysql -p '{ "spec": { "replicas": 1 }}'
```

After the pod starts, we can use again `kubectl describe pvc mysql-pv-claim` and we see that the PV size is 4 GB.


On my example cluster:


<pre class="console"><code>$ kubectl patch deployment mysql -p '{ "spec": { "replicas": 0 }}'
deployment.extensions/mysql patched

$ kubectl get deployment mysql
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
mysql   0/0     0            0           4h0m

$ kubectl patch pvc mysql-pv-claim -p '{ "spec": { "resources": { "requests": { "storage": "6Gi" }}}}'
persistentvolumeclaim/mysql-pv-claim patched

$ kubectl describe pvc mysql-pv-claim
Name:          mysql-pv-claim
Namespace:     default
StorageClass:  csi-cinder-high-speed
Status:        Bound
Volume:        ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
Labels:        &lt;none>
Annotations:   kubectl.kubernetes.io/last-applied-configuration:
                 {"apiVersion":"v1","kind":"PersistentVolumeClaim","metadata":{"annotations":{},"name":"mysql-pv-claim","namespace":"default"},"spec":{"acc...
               pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
               volume.beta.kubernetes.io/storage-provisioner: cinder.csi.openstack.org
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      2Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Mounted By:    &lt;none>
Conditions:
  Type                      Status  LastProbeTime                     LastTransitionTime                Reason  Message
  ----                      ------  -----------------                 ------------------                ------  -------
  FileSystemResizePending   True    Mon, 01 Jan 0001 00:00:00 +0000   Mon, 06 Jan 2020 11:47:22 +0100           Waiting for user to (re-)start a pod to finish file system resize of volume on node.
Events:
  Type     Reason                 Age                    From                                                                                         Message
  ----     ------                 ----                   ----                                                                                         -------
  Normal   ExternalProvisioning   2m27s (x2 over 2m27s)  persistentvolume-controller                                                                  waiting for a volume to be created, either by external provisioner "cinder.csi.openstack.org" or manually created by system administrator
  Normal   Provisioning           2m27s                  cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  External provisioner is provisioning volume for claim "default/mysql-pv-claim"
  Normal   ProvisioningSucceeded  2m25s                  cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  Successfully provisioned volume ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
  Normal   Resizing                  9s (x9 over 13s)  external-resizer cinder.csi.openstack.org  External resizer is resizing volume ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
  Normal   FileSystemResizeRequired  8s                external-resizer cinder.csi.openstack.org  Require file system resize of volume on node

$ kubectl patch deployment mysql -p '{ "spec": { "replicas": 1 }}'
deployment.extensions/mysql patched

$ kubectl get deployment mysql
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
mysql   0/1     1            0           4h2m

$ kubectl get deployment mysql
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
mysql   1/1     1            1           4h4m

$ kubectl describe pvc mysql-pv-claim
Name:          mysql-pv-claim
Namespace:     default
StorageClass:  csi-cinder-high-speed
Status:        Bound
Volume:        ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
Labels:        &lt;none>
Annotations:   kubectl.kubernetes.io/last-applied-configuration:
                 {"apiVersion":"v1","kind":"PersistentVolumeClaim","metadata":{"annotations":{},"name":"mysql-pv-claim","namespace":"default"},"spec":{"acc...
               pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
               volume.beta.kubernetes.io/storage-provisioner: cinder.csi.openstack.org
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      6Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Mounted By:    mysql-c85f7f79c-9nn8q
Events:
  Type     Reason                 Age                    From                                                                                         Message
  ----     ------                 ----                   ----                                                                                         -------
  Normal   ExternalProvisioning   8m8s (x2 over 8m8s)    persistentvolume-controller                                                                  waiting for a volume to be created, either by external provisioner "cinder.csi.openstack.org" or manually created by system administrator
  Normal   Provisioning           8m8s                   cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  External provisioner is provisioning volume for claim "default/mysql-pv-claim"
  Normal   ProvisioningSucceeded  8m6s                   cinder.csi.openstack.org_csi-cinder-controllerplugin-0_4da74c15-1973-486d-9dde-2ccf2f19811b  Successfully provisioned volume ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
  Normal   Resizing                  5m50s (x9 over 5m54s)  external-resizer cinder.csi.openstack.org  External resizer is resizing volume ovh-managed-kubernetes-btw8lc-pvc-ab896768-b995-453b-85ab-4bcb378de01d
  Normal   FileSystemResizeRequired  5m49s                  external-resizer cinder.csi.openstack.org  Require file system resize of volume on node
</code></pre>


## Verifying data integrity

So we launch again a MySQL client to verify that we can still read our database:


```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
```

An `SHOW DATABASES;` should allow us to see our `testingResize` database, we can select it and find our `anEmptyTable` table.

On my example cluster:

<pre class="console"><code>$ kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
If you don't see a command prompt, try pressing enter.

mysql> SHOW DATABASES;
+---------------------+
| Database            |
+---------------------+
| information_schema  |
| #mysql50#lost+found |
| mysql               |
| performance_schema  |
| testingResize       |
+---------------------+
5 rows in set (0.01 sec)

mysql> USE testingResize;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> SHOW TABLES;
+-------------------------+
| Tables_in_testingResize |
+-------------------------+
| anEmptyTable            |
+-------------------------+
1 row in set (0.00 sec)

</code></pre> 

## Where do we go from here?

Now you can expand the Persistent Volumes on your OVHcloud Managed Kubernetes cluster, and adapt them to the live of your data.

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes doc site](../).

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).


