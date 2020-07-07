---
title: "Backing-up Persistent Volumes using Stash"
excerpt: "Backing-up Persistent Volumes using Stash"
slug: backing-up-volumes-using-stash
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

**Last updated July 7<sup>th</sup>, 2020.**

In this tutorial, we are using [Stash](https://stash.run/){.external} to backup and restore persistent volumes on a OVHcloud Managed Kubernetes cluster.

Stash is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes persistent volumes.

We are using our Public Cloud's Swift Object Storage with the Swift S3 API as storage backend for Stash. Stash uses the S3 protocol to store the cluster backups on a S3 compatible object storage.

---

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

---

## Create the S3 bucket for Stash

Stash needs a S3 bucket as storage backend to store the data from your cluster.  
In this section you will create your S3 bucket on Swift.

### Prepare your working environment

Before creating your S3 bucket you need to:

- [Prepare your environement to use the OpenStack API](../../../public-cloud/prepare_the_environment_for_using_the_openstack_api/)

- [Get Openstack RC File v3 from Horizon](../../../public-cloud/access_and_security_in_horizon/)

You should now have access to your OpenStack RC file, with a filename line `<user_name>-openrc.sh`, and the username and password for your OpenStack account.

### Set the OpenStack environment variables

Set the environement variables by sourcing the OpenStack RC file:

```bash
source <user_name>-openrc.sh
```

The shell will ask you for your OpenStack password:

<pre class="console"><code>$ source &lt;user_name>-openrc.sh
Please enter your OpenStack Password for project &lt;project_name> as user &lt;user_name>:
</code></pre>

### Create EC2 credentials

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

### Configure awscli client

Install the `awscli` client:

```bash
pip install awscli awscli-plugin-endpoint
```

Complete and write down the configuration for `awscli` into `~/aws/config`:

```yaml
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
aws_access_key_id = <access fetched in previous step>
aws_secret_access_key = <secret fetched in previous step>
region = <public cloud region in lower case>
s3 =
  endpoint_url = https://s3.<public cloud region without digit>.cloud.ovh.net
  signature_version = s3v4
  addressing_style = virtual
s3api =
  endpoint_url = https://s3.<public cloud region without digit>.cloud.ovh.net
```

### Create a S3 bucket for Stash

Create a new bucket:

```bash
aws --profile default s3 mb s3://s3-stash
```

### Create a Kubernetes `Secret` to store S3 credentials

To give Stash access to the S3 bucket, you need to put the credentials (the `access_key` and the `secret_access_key`) into a Kubernetes `Secret`.

```bash
kubectl create namespace nginx-example
echo -n '<access-key>' > AWS_ACCESS_KEY_ID
echo -n '<secret_access_key>' > AWS_SECRET_ACCESS_KEY
echo -n '<a_password>' > RESTIC_PASSWORD
kubectl create secret generic -n nginx-example s3-secret \
     --from-file=./RESTIC_PASSWORD \
    --from-file=./AWS_ACCESS_KEY_ID \
    --from-file=./AWS_SECRET_ACCESS_KEY
```

In my case:

<pre class="console"><code>$ kubectl create namespace nginx-example
namespace/nginx-example created

$ echo -n 'xxxxxxxxxxxxxxxxxxx' > AWS_ACCESS_KEY_ID

$ echo -n 'yyyyyyyyyyyyyyyyyyy' > AWS_SECRET_ACCESS_KEY

$ echo -n 'zzzzzzzzzzzzzzzzzzz' > RESTIC_PASSWORD

$ kubectl create secret generic -n nginx-example s3-secret \
>     --from-file=./RESTIC_PASSWORD \
>     --from-file=./AWS_ACCESS_KEY_ID \
>     --from-file=./AWS_SECRET_ACCESS_KEY
secret/s3-secret created
</code></pre>

---

## Install Stash

The easiest way to install Stash is via Helm, using the chart from [AppsCode Charts Repository](https://github.com/appscode/charts).

Begin by adding the repository:

```bash
helm repo add appscode https://charts.appscode.com/stable/
helm repo update
```

Then search the latest version of stash:

```bash
helm search repo appscode/stash --version v0.9.0-rc.6
```

And install it with the the release name `stash-operator`:

```bash
helm install stash-operator appscode/stash \
  --version v0.9.0-rc.6 \
  --namespace kube-system
```

In my case:

<pre class="console"><code>$ helm repo add appscode https://charts.appscode.com/stable/
"appscode" has been added to your repositories
$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "appscode" chart repository
...Successfully got an update from the "bitnami" chart repository
Update Complete. ⎈ Happy Helming!⎈

$ helm search repo appscode/stash --version v0.9.0-rc.6
NAME            CHART VERSION   APP VERSION     DESCRIPTION
appscode/stash  v0.9.0-rc.6     v0.9.0-rc.6     Stash by AppsCode - Backup your Kubernetes Volumes

$ helm install stash-operator appscode/stash \
-version>   --version v0.9.0-rc.6 \
>   --namespace kube-system
NAME: stash-operator
LAST DEPLOYED: Tue Apr 14 15:32:14 2020
NAMESPACE: kube-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
To verify that Stash has started, run:

  kubectl --namespace=kube-system get deployments -l "release=stash-operator, app=stash"
</code></pre>

### Verify installation

As suggested during the chart install, to check if Stash operator pods have started, run the following command:

```bash
kubectl --namespace=kube-system get deployments -l "release=stash-operator, app=stash"
```

If everything is OK, you should get the `stash-operator` deployment with a status `AVAILABLE`.

<pre class="console"><code>$ kubectl --namespace=kube-system get deployments -l "release=stash-operator, app=stash"
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
stash-operator   1/1     1            1           2m27s
</code></pre>

Now, to confirm CRD groups have been registered by the operator, run the following command:

```bash
kubectl get crd -l app=stash
```

You should see a list of the CRD groups:

<pre class="console"><code>$ kubectl get crd -l app=stash
NAME                                      CREATED AT
backupbatches.stash.appscode.com          2020-04-14T13:32:05Z
backupblueprints.stash.appscode.com       2020-04-14T13:32:06Z
backupconfigurations.stash.appscode.com   2020-04-14T13:32:05Z
backupsessions.stash.appscode.com         2020-04-14T13:32:05Z
functions.stash.appscode.com              2020-04-14T13:32:08Z
recoveries.stash.appscode.com             2020-04-14T13:32:05Z
repositories.stash.appscode.com           2020-04-14T13:32:05Z
restics.stash.appscode.com                2020-04-14T13:32:05Z
restoresessions.stash.appscode.com        2020-04-14T13:32:06Z
tasks.stash.appscode.com                  2020-04-14T13:32:07Z
</code></pre>

### Install Stash `kubectl` plugin

Stash provides a CLI using kubectl plugin to work with the stash `Objects` quickly.
Download pre-build binaries from [`stashed/cli`](https://github.com/stashed/cli/releases) Githhub release and put the binary to some directory in your `PATH`.

---

## Volume Snapshot with Stash

A detailed explanation of Volume Snapshot with Stash is available in the [official documentation](https://stash.run/docs/v0.9.0-rc.6/guides/latest/volumesnapshot/overview/).

In Kubernetes, a [VolumeSnapshot](<(https://kubernetes.io/docs/concepts/storage/volume-snapshots/)>) represents a snapshot of a volume on a storage system. It was introduced as an Alpha feature in Kubernetes v1.12 and has been promoted to an Beta feature in Kubernetes 1.17.

In order to support `VolumeSnapshot`, your `PersistenVolumes` need to use a StorageClass with a [CSI](https://github.com/container-storage-interface/spec) driver that supports the feature. Currently OVHcloud Managed Kubernetes cluster propose you two of these `StorageClasses`: `csi-cinder-classic` and `csi-cinder-high-speed`.

You also need a compatible `VolumeSnapshotClass`, in our case `csi-cinder-snapclass`.

### An example: Nginx server with persistent logs

In this guide we are going to use a simple example: a small Nginx web server with a `PersistentVolume` to store the access logs.

Copy the following description to a `nginx-example.yml` file:

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
      storage: 50Mi

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

And apply it to your cluster:

```bash
kubectl apply -f nginx-example.yaml
```

> ![primary]
>
> If you look attentively to the `deployment` part of this manifest, you will see that we have defined a `.spec.strategy.type`. It specifies the strategy used to replace old Pods by new ones, and we have set it to `Recreate`, so all existing Pods are killed before new ones are created.
>
> We do so as the Storage Class we are using, `csi-cinder-high-speed`, only supports a `ReadWriteOnce`, so we can only have one pod writing on the Persistent Volume at any given time.

Wait for the external URL to we ready:

```bash
kubectl -n nginx-example get svc nginx-service -w
```

And do some calls to the URL to generate some access logs:

```bash
curl <EXTERNAL_IP>
```

In my case:

<pre class="console"><code>$ kubectl apply -f nginx-example.yaml
namespace/nginx-example created
persistentvolumeclaim/nginx-logs created
deployment.apps/nginx-deployment created
service/nginx-service created

$ kubectl -n nginx-example get svc nginx-service -w
NAME          TYPE           CLUSTER-IP     EXTERNAL-IP                   PORT(S)        AGE
nginx-service LoadBalancer   10.3.115.226   &lt;pending>                     80:32764/TCP   60s
nginx-service LoadBalancer   10.3.115.226   xxxxxx.lb.c4.gra.k8s.ovh.net  80:32764/TCP   3m5s

$ curl -I xxxxxx.lb.c4.gra.k8s.ovh.net
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Tue, 14 Apr 2020 15:04:17 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes

$ curl -I xxxxxx.lb.c4.gra.k8s.ovh.net
HTTP/1.1 200 OK
Server: nginx/1.7.9
Date: Tue, 14 Apr 2020 15:04:17 GMT
Content-Type: text/html
Content-Length: 612
Last-Modified: Tue, 23 Dec 2014 16:25:09 GMT
Connection: keep-alive
ETag: "54999765-264"
Accept-Ranges: bytes
</code></pre>

### Verify the logs

Now we need to connect to the pod to read the log file and verify that our logs are written.

First, get the name of the Nginx running pod:

```bash
kubectl -n nginx-example get pods
```

And then connect to it and see your access logs:

```bash
 kubectl -n nginx-example exec &lt;POD_NAME> -c nginx -- cat /var/log/nginx/access.log
```

In my case:

<pre class="console"><code>$ kubectl -n nginx-example get pods
NAME                               READY   STATUS    RESTARTS   AGE
nginx-deployment-f7747d88d-pq8cx   1/1     Running   0          9m22s

$ kubectl -n nginx-example exec nginx-deployment-f7747d88d-pq8cx -c nginx -- cat /var/log/nginx/access.log
10.2.3.0 - - [07/Jul/2020:19:00:00 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.68.0" "-"
10.2.3.0 - - [07/Jul/2020:19:00:28 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.68.0" "-"
</code></pre>

### Create a `Repository`

A `Repository` is a Kubernetes `CustomResourceDefinition` (CRD) which represents backend information in a Kubernetes native way. You have to create a `Repository` object for each backup target. A backup target can be a workload, database or a PV/PVC.

To create a `Repository` CRD, you have to provide the storage secret that we have created earlier in `spec.backend.storageSecretName` field. You will also need to define `spec.backend.s3.prefix`, to choose the folder inside the backend where the backed up snapshots will be stored

Create a `repository.yaml` file, replacing `<public cloud region without digit>` with the region, without digits and in lowercase (e.g. `gra`):

```yaml
apiVersion: stash.appscode.com/v1alpha1
kind: Repository
metadata:
  name: s3-repo
  namespace: nginx-example
spec:
  backend:
    s3:
      endpoint: s3.<public cloud region>.cloud.ovh.net
      bucket: s3-stash
      region: <public cloud region>
      prefix: /backup/nginx-demo
    storageSecretName: s3-secret
```

And apply it to your Kubernetes cluster:

```
kubectl apply -f repository.yaml
```

In my case:

<pre class="console"><code>$ kubectl apply -f repository.yaml
repository.stash.appscode.com/s3-repo created
</code></pre>

### Create a `BackupConfiguration`

A `BackupConfiguration` is a Kubernetes `CustomResourceDefinition` (CRD) which specifies the backup target, parameters(schedule, retention policy etc.) and a `Repository` object that holds snapshot storage information in a Kubernetes native way.

You have to create a `BackupConfiguration` object for each backup target. A backup target can be a workload, database or a PV/PVC.

To back up our PV we will need to create a `backup-configuration.yaml` file, where we describe the Persistent Volumes we want to back up, the repository we intend to use and the backing up schedule (in [`crontab` format](https://en.wikipedia.org/wiki/Cron)):

```yaml
apiVersion: stash.appscode.com/v1beta1
kind: BackupConfiguration
metadata:
  name: nginx-backup
  namespace: nginx-example
spec:
  repository:
    name: s3-repo
  schedule: "*/5 * * * *"
  target:
    ref:
      apiVersion: apps/v1
      kind: Deployment
      name: nginx-deployment
    volumeMounts:
      - name: nginx-logs
        mountPath: /var/log/nginx
    paths:
      - /var/log/nginx
  retentionPolicy:
    name: "keep-last-5"
    keepLast: 5
    prune: true
```

And apply it to your Kubernetes cluster:

```
kubectl apply -f backup-configuration.yaml
```

In my case:

<pre class="console"><code>$ kubectl apply -f backup-configuration.yaml
backupconfiguration.stash.appscode.com/nginx-backup created
</code></pre>

### Verify `CronJob`

If everything goes well, Stash will create a `CronJob` to take periodic snapshot of `nginx-logs` volume of the deployment with the schedule specified in `spec.schedule` field of `BackupConfiguration` CRD (a backup every 5 minutes).

Check that the `CronJob` has been created:

```bash
kubectl -n nginx-example get cronjob
```

In my case

<pre class="console"><code>$ kubectl -n nginx-example get cronjob
NAME                        SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
stash-backup-nginx-backup   */5 * * * *   False     0        33s             3m36s
</code></pre>

### Wait for `BackupSession`

The `stash-backup-nginx-backup` `CronJob` will trigger a backup on each schedule by creating a `BackupSession` CRD.

Wait for the next schedule for backup. Run the following command to watch `BackupSession` CRD:

```bash
kubectl -n nginx-example get backupsession
```

In my case

<pre class="console"><code>$ kubectl -n nginx-example get backupsessions
NAME                      INVOKER-TYPE          INVOKER-NAME   PHASE       AGE
nginx-backup-1586938564   BackupConfiguration   nginx-backup   Succeeded   77s
</code></pre>

We can see above that the backup session has succeeded. Now, we are going to verify that the `VolumeSnapshot` has been created and the snapshots has been stored in the respective backend.

### Verifying Volume Snapshots in OVHcloud Cloud Manager

The snapshots are visible on the . To see then, go to Object Storage section, where you will find the S3 bucket you have created. By clicking on the bucket you will see the list of objects, including all the snapshot beginning with the `/backup/demo/deployment/stash-demo` we had defined in the `Repository`:

![Snapshots onb OVHcloud Manager](images/snapshot-on-manager.png)){.thumbnail}

---

## Restore PVC from VolumeSnapshot

This section will show you how to restore the PVCs from the snapshots we have taken in the previous section.

### Stop Snapshotting

Before restoring we need to pause the `BackupConfiguration` to prevent any snapshotting during the restore process. With the `BackupConfiguration`, Stash will stop taking any further backup for `nginx-deployment`.

```bash
kubectl -n nginx-example patch backupconfiguration  nginx-backup --type="merge" --patch='{"spec": {"paused": true}}'
```

After some moments, you can look at the `nginx-backup` status to see it paused:

```bash
kubectl -n nginx-example get backupconfiguration nginx-backup
```

In my case

<pre class="console"><code>$ kubectl -n nginx-example patch backupconfiguration  nginx-backup --type=
"merge" --patch='{"spec": {"paused": true}}'
backupconfiguration.stash.appscode.com/nginx-backup patched

$ kubectl -n nginx-example get backupconfiguration nginx-backup
NAME           TASK   SCHEDULE      PAUSED   AGE
nginx-backup          */1 * * * *   true     8m38s
</code></pre>

### Simulate Disaster

Let’s simulate a disaster scenario, deleting all the files from the PVC:

```bash
kubectl -n nginx-example exec &lt;POD_NAME> -c nginx -- cat /var/log/nginx/access.log
```

And verify that the file is deleted:

```bash
kubectl -n nginx-example exec &lt;POD_NAME> -c nginx -- ls -al /var/log/nginx/
```

In my case:

<pre class="console"><code>$ kubectl -n nginx-example -c nginx exec nginx-deployment-79b8ffd99-bdlkm  -- rm /var/log/nginx/access.log

$ kubectl -n nginx-example exec nginx-deployment-79b8ffd99-bdlkm -c nginx -- ls -al /var/log/nginx/
total 28
drwxr-xr-x 3 root root  4096 Jul  7 19:41 .
drwxr-xr-x 1 root root  4096 Jan 27  2015 ..
-rw-r--r-- 1 root root   406 Jul  7 19:25 error.log
drwx------ 2 root root 16384 Jul  7 18:41 lost+found
</code></pre>

### Create a `RestoreSession`

Now you need to create a `RestoreSession` CRD to restore the PVCs from the last snapshot.

Create a `restore-session.yaml` file:

```yaml
apiVersion: stash.appscode.com/v1beta1
kind: RestoreSession
metadata:
  name: nginx-restore
  namespace: nginx-example
spec:
  repository:
    name: s3-repo
  target: # target indicates where the recovered data will be stored
    ref:
      apiVersion: apps/v1
      kind: Deployment
      name: nginx-deployment
    volumeMounts:
      - name: nginx-logs
        mountPath: /var/log/nginx
```

And apply it to your cluster:

```bash
kubectl apply -f restore-session.yaml
```

And wait for the `RestoreSession` to succeed:

```bash
kubectl -n nginx-example get restoresession  nginx-restore
```

In my case:

<pre class="console"><code>$ kubectl apply -f ./examples/stash/restore-session.yaml
restoresession.stash.appscode.com/nginx-restore created

$ kubectl get restoresession -n nginx-example nginx-restore -w
NAME            REPOSITORY   PHASE       AGE
nginx-restore   s3-repo      Succeeded   50s
</code></pre>

### Verify the data is restored

Let's begin by getting the pod name:

```bash
 kubectl -n nginx-example get pods
```

And then verify that the `access.log` file has been restored:

```bash
kubectl -n nginx-example exec &lt;POD_NAME> -c nginx -- ls -al /var/log/nginx/
kubectl -n nginx-example exec &lt;POD_NAME> -c nginx -- cat /var/log/nginx/access.log
```

In my case:

<pre class="console"><code>$ kubectl -n nginx-example get pods
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-654d8f8dcb-xskww   2/2     Running   0          31s

$ kubectl -n nginx-example exec nginx-deployment-654d8f8dcb-xskww -c
nginx -- cat /var/log/nginx/access.log
10.2.3.0 - - [07/Jul/2020:19:00:00 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.68.0" "-"
10.2.3.0 - - [07/Jul/2020:19:00:28 +0000] "HEAD / HTTP/1.1" 200 0 "-" "curl/7.68.0" "-"

$ kubectl -n nginx-example exec nginx-deployment-654d8f8dcb-xskww -c nginx -- ls -al /var/log/nginx/
total 28
drwxr-xr-x 3 root root  4096 Jul  7 20:23 .
drwxr-xr-x 1 root root  4096 Jan 27  2015 ..
-rw-r--r-- 1 root root   448 Jul  7 20:37 access.log
-rw-r--r-- 1 root root     0 Jul  7 20:23 error.log
drwx------ 2 root root 16384 Jul  7 20:23 lost+found
</code></pre>

---

## Cleaning up

To clean up your cluster, begin by deleting the `nginx-example` namespace:

```bash
kubectl delete namespace nginx-example
```

Then simply use Helm to delete your Jenkins release.

```bash
helm delete stash-operator --namespace kube-system
```

In my case:

<pre class="console"><code>$ kubectl delete namespace nginx-example
namespace "nginx-example" deleted

$helm delete stash-operator --namespace kube-system
release "stash-operator" uninstalled
</code></pre>
