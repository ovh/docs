---
title: Backing-up an OVHcloud Managed Kubernetes cluster using Velero
excerpt: Find out how to back-up an OVHcloud Managed Kubernetes cluster using Velero, including Persistent Volumes
slug: backing-up-cluster-with-velero
section: Storage
order: 3
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/backing-up-cluster-with-velero/'
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

**Last updated 5th October 2022**

## Objective

In this tutorial, we are using [Velero](https://velero.io/){.external} to backup and restore an OVHcloud Managed Kubernetes cluster.

Velero is an Open Source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources.

For cluster configuration backup, we are using our Public Cloud's Swift Object Storage with the Swift S3 API as storage backend for Velero. Velero uses the S3 protocol to store the cluster backups on a S3 compatible object storage.

For Persistent Volumes backup, we are using the [CSI snapshot support for Velero](https://velero.io/docs/v1.8/csi/), that enables Velero to backup and restore CSI-backed volumes using the Kubernetes CSI Snapshot Beta APIs.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Instructions

### Creating the S3 bucket for Velero

Velero needs a S3 bucket as storage backend to store the data from your cluster. In this section you will create your S3 bucket on OVHcloud Object Storage.

#### Preparing your working environment

Before creating your S3 bucket you need to:

- [Prepare your environment to use the OpenStack API](../../public-cloud/prepare_the_environment_for_using_the_openstack_api/)

- [Get Openstack RC File v3 from Horizon](../../public-cloud/access_and_security_in_horizon/)

#### Setting the OpenStack environment variables

You should now have access to your OpenStack RC file, with a filename like `<user_name>-openrc.sh`, and the username and password for your OpenStack account.

Set the environment variables by sourcing the OpenStack RC file:

```bash
source <user_name>-openrc.sh
```

The shell will ask you for your OpenStack password:

<pre class="console"><code>$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:
</code></pre>

#### Creating EC2 credentials

S3 tokens are different, you need 2 parameters (**access** and **secret**) to generate a S3 token.

These credentials will be safely stored in Keystone. To generate them with `python-openstack` client:

```bash
openstack ec2 credentials create
```

Please write down the **access** and **secret** parameters:

<pre class="console"><code>$ openstack ec2 credentials create
+------------+----------------------------------------------------------------------------------------------------------------------------+
| Field      | Value
+------------+----------------------------------------------------------------------------------------------------------------------------+
| access     | 5a4d8b8d88104123a862c527ede5a3d3
| links      | {u'self': u'https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-EC2/5a4d8b8d88104123a862c527ede5a3d3'}
| project_id | 20e124b71be141299e111ec26b1892fa
| secret     | 925d5fcfcd9f436d8ffcb20548cc53a2
| trust_id   | None
| user_id    | d74d05ff121b44bea9216495e7f0df61
+------------+----------------------------------------------------------------------------------------------------------------------------+</code></pre>

#### Configuring awscli client

Install the `awscli` client:

```bash
pip3 install awscli awscli-plugin-endpoint
```

Complete and write down the configuration for `awscli` into `~/.aws/config`:

```yaml
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
# region = <public_cloud_region_without_digit>
region = gra #for example
s3 =
  endpoint_url = https://s3.<public_cloud_region_without_digit>.cloud.ovh.net
  signature_version = s3v4
  addressing_style = virtual
s3api =
  endpoint_url = https://s3.<public_cloud_region_without_digit>.cloud.ovh.net
```

#### Create a S3 bucket for Velero

Create a new bucket:

```bash
aws --profile default s3 mb s3://velero-s3
```

### Installing Velero

We strongly recommend that you use an [official release of Velero](https://github.com/vmware-tanzu/velero/releases). The tarballs for each release contain the velero command-line client. Expand the tarball and add it to your PATH.

Create a Velero-specific credentials file (`credentials-velero`) in your local directory:

```yaml
[default]
aws_access_key_id=<AWS_ACCESS_KEY_ID>
aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
```

Where `<AWS_ACCESS_KEY_ID>` and `<AWS_SECRET_ACCESS_KEY>` and the **access** and **secret** S3 credentials generated in the precedent step.

Install Velero, including all prerequisites, into the cluster and start the deployment. This will create a namespace called `velero`, and place a deployment named `velero` in it.

```bash
velero install \
  --features=EnableCSI \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:v1.5.1,velero/velero-plugin-for-csi:v0.3.1 \
  --bucket <your bucket name> \
  --secret-file ./credentials-velero \
  --backup-location-config region=<public cloud region without digit>,s3ForcePathStyle="true",s3Url=https://s3.<public cloud region without digit>.cloud.ovh.net \
  --snapshot-location-config region=<public cloud region without digit>,enableSharedConfig=true
```

In our case, with the cluster in the `GRA` region, that meant:

```bash
velero install \
  --features=EnableCSI \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:v1.5.1,velero/velero-plugin-for-csi:v0.3.1 \
  --bucket velero-s3 \
  --secret-file ./credentials-velero \
  --backup-location-config region=gra,s3ForcePathStyle="true",s3Url=https://s3.gra.cloud.ovh.net \
  --snapshot-location-config region=gra,enableSharedConfig=true
```

<pre class="console"><code>$ velero install \
  --features=EnableCSI \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:v1.5.1,velero/velero-plugin-for-csi:v0.3.1 \
  --bucket velero-s3 \
  --secret-file ./credentials-velero \
  --backup-location-config region=gra,s3ForcePathStyle="true",s3Url=https://s3.gra.cloud.ovh.net \
  --snapshot-location-config region=gra,enableSharedConfig=true
CustomResourceDefinition/backups.velero.io: attempting to create resource
CustomResourceDefinition/backups.velero.io: attempting to create resource client
CustomResourceDefinition/backups.velero.io: created
CustomResourceDefinition/backupstoragelocations.velero.io: attempting to create resource
CustomResourceDefinition/backupstoragelocations.velero.io: attempting to create resource client
CustomResourceDefinition/backupstoragelocations.velero.io: created
CustomResourceDefinition/deletebackuprequests.velero.io: attempting to create resource
CustomResourceDefinition/deletebackuprequests.velero.io: attempting to create resource client
CustomResourceDefinition/deletebackuprequests.velero.io: created
[...]
VolumeSnapshotLocation/default: attempting to create resource
VolumeSnapshotLocation/default: attempting to create resource client
VolumeSnapshotLocation/default: created
Deployment/velero: attempting to create resource
Deployment/velero: attempting to create resource client
Deployment/velero: created
Velero is installed! ⛵ Use 'kubectl logs deployment/velero -n velero' to view the status.
</code></pre>

In order to allow Velero to do Volume Snapshots, we need to deploy a new `VolumeSnapshotClass`.
Create a `velero-snapclass.yaml` file with this content:

```yaml
apiVersion: snapshot.storage.k8s.io/v1
deletionPolicy: Delete
driver: cinder.csi.openstack.org
kind: VolumeSnapshotClass
metadata:
  name: csi-cinder-snapclass-in-use-v1-velero
  labels:
    velero.io/csi-volumesnapshot-class: "true"
parameters:
  force-create: "true"
```

Apply the new class:

```bash
kubectl apply -f velero-snapclass.yaml
```

In our case, the result looks like this:

<pre class="console"><code>$ kubectl apply -f velero-snapclass.yaml

volumesnapshotclass.snapshot.storage.k8s.io/csi-cinder-snapclass-in-use-v1-velero created

$ kubectl get volumesnapshotclass --show-labels
NAME                                    DRIVER                     DELETIONPOLICY   AGE     LABELS
csi-cinder-snapclass-in-use-v1          cinder.csi.openstack.org   Delete           4h46m   <none>
csi-cinder-snapclass-in-use-v1-velero   cinder.csi.openstack.org   Delete           5s      velero.io/csi-volumesnapshot-class=true
csi-cinder-snapclass-v1                 cinder.csi.openstack.org   Delete           4h46m   <none>
</code></pre>

### Verifying Velero is working without Persistent Volumes

To verify that Velero is working correctly, let's test with one example deployment:

Copy the following code into a `nginx-example-without-pv.yml` file:

```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: nginx-example
  labels:
    app: nginx

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  namespace: nginx-example
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - image: nginx:1.7.9
          name: nginx
          ports:
            - containerPort: 80

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: my-nginx
  namespace: nginx-example
spec:
  ports:
    - port: 80
      targetPort: 80
  selector:
    app: nginx
  type: LoadBalancer
```

And apply it to your cluster:

```bash
kubectl apply -f nginx-example-without-pv.yml
```

Create a backup of the namespace:

```bash
velero backup create nginx-backup --include-namespaces nginx-example
```

Verify that the backup is done:

```bash
velero get backup nginx-backup
```

Simulate a disaster:

```bash
kubectl delete namespaces nginx-example
```

Restore the deleted namespace:

```bash
velero restore create --from-backup nginx-backup
```

Verify that the restore is correctly done:

```bash
kubectl get all -n nginx-example
```

In our case, the result looks like this:

<pre class="console"><code>$ kubectl apply -f nginx-example-without-pv.yml
namespace/nginx-example created
deployment.apps/nginx-deployment created
service/my-nginx created

$ velero backup create nginx-backup --include-namespaces nginx-example

Backup request "nginx-backup" submitted successfully.
Run `velero backup describe nginx-backup` or `velero backup logs nginx-backup` for more details.

$ velero get backup nginx-backup

NAME           STATUS      ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
nginx-backup   Completed   0        0          2022-09-21 16:54:03 +0200 CEST   29d       default            <none>

$ kubectl delete namespaces nginx-example

namespace "nginx-example" deleted

$ kubectl get all -n nginx-example
No resources found in nginx-example namespace.

$ velero restore create --from-backup nginx-backup
Restore request "nginx-backup-20220921165428" submitted successfully.
Run `velero restore describe nginx-backup-20220921165428` or `velero restore logs nginx-backup-20220921165428` for more details.

$ velero restore logs nginx-backup-20220921165428
time="2022-09-21T14:54:28Z" level=info msg="starting restore" logSource="pkg/controller/restore_controller.go:478" restore=velero/nginx-backup-20220921165428
time="2022-09-21T14:54:28Z" level=info msg="Starting restore of backup velero/nginx-backup" logSource="pkg/restore/restore.go:392" restore=velero/nginx-backup-20220921165428
time="2022-09-21T14:54:28Z" level=info msg="Resource 'secrets' will be restored into namespace 'nginx-example'" logSource="pkg/restore/restore.go:1889" restore=velero/nginx-backup-20220921165428
time="2022-09-21T14:54:28Z" level=info msg="Resource 'configmaps' will be restored into namespace 
[...]
time="2022-09-21T14:54:29Z" level=info msg="Done waiting for all post-restore exec hooks to complete" logSource="pkg/restore/restore.go:579" restore=velero/nginx-backup-20220921165428
time="2022-09-21T14:54:29Z" level=info msg="restore completed" logSource="pkg/controller/restore_controller.go:518" restore=velero/nginx-backup-20220921165428

$ kubectl get all -n nginx-example

NAME                                   READY   STATUS    RESTARTS   AGE
pod/nginx-deployment-f7ccf9478-bxnw8   1/1     Running   0          8s
pod/nginx-deployment-f7ccf9478-wtqw7   1/1     Running   0          8s

NAME               TYPE           CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
service/my-nginx   LoadBalancer   10.3.98.16   <pending>     80:31092/TCP   8s

NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deployment   2/2     2            2           8s

NAME                                         DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-deployment-f7ccf9478   2         2         2       8s
</code></pre>

Before continuing, clean the `nginx-example` namespace:

```bash
kubectl delete namespace nginx-example
```

### Verifying Velero is working with Persistent Volumes

To verify that Velero is working correctly with Volume Snapshots of Persistent Volumes, let's test with one example deployment:

Copy the following code into a `nginx-example-with-pv.yml` file:

```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: nginx-example
  labels:
    app: nginx

---
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

---
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
---
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

Apply it to the cluster:

```bash
kubectl apply -f nginx-example-with-pv.yml
```

> [!primary]
>
> Pay attention to the deployment part of this manifest, you will see that we have defined a `.spec.strategy.type`. It specifies the strategy used to replace old Pods by new ones, and we have set it to `Recreate`, so all existing Pods are killed before new ones are created.
>
> We do so as the Storage Class we are using, `csi-cinder-high-speed`, only supports a `ReadWriteOnce`, so we can only have one pod writing on the Persistent Volume at any given time.

Wait until you get an external IP:

```bash
kubectl -n nginx-example get svc nginx-service -w
```

When you have a Load Balancer External IP, save it:

```bash
export LB_IP=$(kubectl -n nginx-example get svc nginx-service -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
```

And do some calls to the URL to generate some access logs:

```bash
curl -I $LB_IP
```

You should have a result like this:

<pre class="console"><code>$ kubectl apply -f nginx-example-with-pv.yml

namespace/nginx-example unchanged
persistentvolumeclaim/nginx-logs created
deployment.apps/nginx-deployment configured
service/nginx-service created

$ kubectl -n nginx-example get svc nginx-service -w

NAME            TYPE           CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
nginx-service   LoadBalancer   10.3.219.64   <pending>     80:31157/TCP   26s
nginx-service   LoadBalancer   10.3.219.64   <pending>     80:31157/TCP   80s
nginx-service   LoadBalancer   10.3.219.64   51.210.XXX.XX   80:31157/TCP   80s
nginx-service   LoadBalancer   10.3.219.64   51.210.XXX.XX   80:31157/TCP   83s

$ export LB_IP=$(kubectl -n nginx-example get svc nginx-service -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

$ echo $LB_IP
51.210.XXX.XX

$ curl -I $LB_IP
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Thu, 22 Sep 2022 06:40:15 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes

$ curl -I $LB_IP
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Thu, 22 Sep 2022 06:41:41 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes
</code></pre>

Now we need to connect to the Pod to read the log file and verify that our logs are written.

First, get the name of the Nginx running pod:

```bash
export POD_NAME=$(kubectl -n nginx-example get pods -o name)
```

And then connect to it and see your access logs:

```bash
kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log
```

You should have a result like this:

<pre class="console"><code>$ export POD_NAME=$(kubectl -n nginx-example get pods -o name)

$ echo $POD_NAME
pod/nginx-deployment-5bfc8c9f6f-xkw5x

$  kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log
10.2.0.0 - - [22/Sep/2022:08:03:53 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.64.1" "-"
10.2.1.0 - - [22/Sep/2022:08:03:54 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.64.1" "-"
</code></pre>

Now we can ask velero to do the backup of the namespace:

```bash
velero backup create nginx-backup-with-pv --include-namespaces nginx-example --wait
```

Check the backup has finished successfully:

```bash
velero backup get nginx-backup-with-pv
```

Describe the backup to confirm that the CSI `volumesnapshots` were included in the backup:

```bash
velero describe backup nginx-backup-with-pv --details --features=EnableCSI
```

Simulate a disaster:

```bash
kubectl delete namespace nginx-example
```

Restore the deleted namespace:

```bash
velero restore create --from-backup nginx-backup-with-pv --wait
```

Verify that the restore is correctly done:

```bash
kubectl get all -n nginx-example
kubectl get pvc -n nginx-example
```

Now we need to connect to the new Pod to read the log file and verify that our logs are written like before.

Get the name of the Nginx running pod:

```bash
export POD_NAME=$(kubectl -n nginx-example get pods -o name)
```

And then connect to it and see your access logs:

```bash
kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log
```

You should have a result like this:

<pre class="console"><code>$ velero backup create nginx-backup-with-pv --include-namespaces nginx-example --wait

Backup request "nginx-backup-with-pv" submitted successfully.
Waiting for backup to complete. You may safely press ctrl-c to stop waiting - your backup will continue in the background.
........
Backup completed with status: Completed. You may check for more information using the commands `velero backup describe nginx-backup-with-pv` and `velero backup logs nginx-backup-with-pv`.

$ velero backup get nginx-backup-with-pv
NAME                   STATUS      ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
nginx-backup-with-pv   Completed   0        0          2022-09-22 10:05:15 +0200 CEST   29d       default            <none>

$ velero describe backup nginx-backup-with-pv --details --features=EnableCSI

Name:         nginx-backup-with-pv
Namespace:    velero
Labels:       velero.io/storage-location=default
Annotations:  velero.io/source-cluster-k8s-gitversion=v1.24.3
              velero.io/source-cluster-k8s-major-version=1
              velero.io/source-cluster-k8s-minor-version=24

Phase:  Completed

Errors:    0
Warnings:  0

Namespaces:
  Included:  nginx-example
  Excluded:  <none>

Resources:
  Included:        *
  Excluded:        <none>
  Cluster-scoped:  auto

Label selector:  <none>

Storage Location:  default

Velero-Native Snapshot PVs:  auto

TTL:  720h0m0s

Hooks:  <none>

Backup Format Version:  1.1.0

Started:    2022-09-22 10:05:15 +0200 CEST
Completed:  2022-09-22 10:05:22 +0200 CEST

Expiration:  2022-10-22 10:05:15 +0200 CEST

Total items to be backed up:  29
Items backed up:              29

Resource List:
  apps/v1/Deployment:
    - nginx-example/nginx-deployment
  apps/v1/ReplicaSet:
    - nginx-example/nginx-deployment-5bfc8c9f6f
  discovery.k8s.io/v1/EndpointSlice:
    - nginx-example/nginx-service-z4jww
  snapshot.storage.k8s.io/v1/VolumeSnapshot:
    - nginx-example/velero-nginx-logs-mtsw6
  snapshot.storage.k8s.io/v1/VolumeSnapshotClass:
    - csi-cinder-snapclass-in-use-v1
  snapshot.storage.k8s.io/v1/VolumeSnapshotContent:
    - snapcontent-a3fe902c-ac9e-4485-9c28-7e00f894e2d1
  v1/ConfigMap:
    - nginx-example/kube-root-ca.crt
  v1/Endpoints:
    - nginx-example/nginx-service
  v1/Event:
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe5e9e5a9fb
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe62acfbf06
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe6d34abaaf
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe801352cbe
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe86ff09c8c
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe8ea0ebbde
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe8ef69d163
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq.17171fe8fb24c3a6
    - nginx-example/nginx-deployment-5bfc8c9f6f.17171fe5e9786fc5
    - nginx-example/nginx-deployment.17171fe5e8606801
    - nginx-example/nginx-logs.17171fe5dd6ea3ce
    - nginx-example/nginx-logs.17171fe5ddad2df3
    - nginx-example/nginx-logs.17171fe62ac541c2
    - nginx-example/nginx-service.17171fe5f3ce2f2e
    - nginx-example/nginx-service.17171ffc83383b31
  v1/Namespace:
    - nginx-example
  v1/PersistentVolume:
    - ovh-managed-kubernetes-dmhe43-pvc-3c7b1e00-9b78-4d45-843a-7e969be29191
  v1/PersistentVolumeClaim:
    - nginx-example/nginx-logs
  v1/Pod:
    - nginx-example/nginx-deployment-5bfc8c9f6f-9s4jq
  v1/Service:
    - nginx-example/nginx-service
  v1/ServiceAccount:
    - nginx-example/default

Velero-Native Snapshots: <none included>

CSI Volume Snapshots:
Snapshot Content Name: snapcontent-a3fe902c-ac9e-4485-9c28-7e00f894e2d1
  Storage Snapshot ID: a4eb1ca3-3246-4e97-9e79-83bd0162aa40
  Snapshot Size (bytes): 1073741824
  Ready to use: true

$ kubectl delete namespace nginx-example

namespace "nginx-example" deleted

$ velero restore create --from-backup nginx-backup-with-pv --wait

Restore request "nginx-backup-with-pv-20220922101426" submitted successfully.
Waiting for restore to complete. You may safely press ctrl-c to stop waiting - your restore will continue in the background.
.
Restore completed with status: Completed. You may check for more information using the commands `velero restore describe nginx-backup-with-pv-20220922101426` and `velero restore logs nginx-backup-with-pv-20220922101426`.

$ kubectl get all -n nginx-example
kubectl get pvc -n nginx-example
NAME                                    READY   STATUS    RESTARTS   AGE
pod/nginx-deployment-5bfc8c9f6f-9s4jq   1/1     Running   0          19s

NAME                    TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
service/nginx-service   LoadBalancer   10.3.XXX.XXX   <pending>     80:30053/TCP   18s

NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deployment   1/1     1            1           18s

NAME                                          DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-deployment-5bfc8c9f6f   1         1         1       18s
NAME         STATUS   VOLUME                                                                   CAPACITY   ACCESS MODES   STORAGECLASS            AGE
nginx-logs   Bound    ovh-managed-kubernetes-dmhe43-pvc-6e6d023d-b7b2-4cc3-9a7f-3f061d841d67   1Gi        RWO            csi-cinder-high-speed   19s

$ export POD_NAME=$(kubectl -n nginx-example get pods -o name)

$ kubectl -n nginx-example exec $POD_NAME -c nginx -- cat /var/log/nginx/access.log

10.2.0.0 - - [22/Sep/2022:08:03:53 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.64.1" "-"
10.2.1.0 - - [22/Sep/2022:08:03:54 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.64.1" "-"
</code></pre>

Your namespace with resources and PVC have been correctly restored.

### Scheduling backup with Velero

With Velero you can schedule backups regularly, a good solution for disaster recovery.

In this guide you will create a `schedule` Velero resource that will create regular backups.

Copy the following code into a `schedule.yml` file:

```yaml
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-snapshot
  namespace: velero
spec:
  schedule: '15 0 * * *' # Every day at 00:15 am
  template:
    defaultVolumesToRestic: false

    includedNamespaces:
    - nginx-example

    ttl: 168h0m0s # Keep the backup 7 days
    storageLocation: default
```

Apply it to the cluster:

```bash
kubectl apply -f schedule.yml
```

Verify that the schedule is correctly created:

```bash
velero schedule get
```

Wait several minutes and verify that a backup has been created automatically:

```bash
velero backup get
```

You should have a result like this:

<pre class="console"><code>$ velero schedule get
NAME             STATUS    CREATED                          SCHEDULE     BACKUP TTL   LAST BACKUP   SELECTOR
daily-snapshot   Enabled   2022-10-04 09:12:05 +0200 CEST   15 0 * * *   168h0m0s     9h ago        <none>

$ velero backup get
NAME                            STATUS             ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
daily-snapshot-20221004072023   Completed          0        1          2022-10-04 09:20:23 +0200 CEST   6d        default            <none>
</code></pre>

### Cleanup

Clean the `nginx-example` namespace:

```bash
kubectl delete namespace nginx-example
```

Clean existing velero backup:

```bash
velero backup delete nginx-backup
velero backup delete nginx-backup-with-pv
```

## Where do we go from here

So now you have a working Velero on your cluster.  
Please refer to [official Velero documentation](https://velero.io/docs/){.external} to learn how to use it, including scheduling backups, using `pre-` and `post-backup` hooks and other matters.
