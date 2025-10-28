---
title: Backing-up an OVHcloud Managed Kubernetes cluster using Velero
excerpt: Find out how to back-up an OVHcloud Managed Kubernetes cluster using Velero, including Persistent Volumes
updated: 2025-09-09
---

## Objective

In this tutorial, we are using [Velero](https://velero.io/) to backup and restore an OVHcloud Managed Kubernetes cluster.

Velero is an Open Source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources.

For cluster configuration backup, we are using our Public Cloud's Swift Object Storage with the Swift S3 API as storage backend for Velero. Velero uses the Amazon S3 protocol to store the cluster backups on a S3 **\*** compatible object storage.

For Persistent Volumes backup, we are using the [CSI snapshot support for Velero](https://velero.io/docs/v1.8/csi/), that enables Velero to backup and restore CSI-backed volumes using the Kubernetes CSI Snapshot Beta APIs.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world) documentation.

## Instructions

### Creating the Object Storage bucket for Velero

Velero needs a S3 compatible bucket as storage backend to store the data from your cluster. In this section you will create your S3 bucket on OVHcloud Object Storage.

#### Preparing your working environment

Before creating your Object Storage bucket you need to:

- [Prepare your environment to use the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

- [Get Openstack RC File v3 from Horizon](/pages/public_cloud/public_cloud_cross_functional/access_and_security_in_horizon)

#### Setting the OpenStack environment variables

You should now have access to your OpenStack RC file, with a filename like `<user_name>-openrc.sh`, and the username and password for your OpenStack account.

Set the environment variables by sourcing the OpenStack RC file:

```bash
source <user_name>-openrc.sh
```

The shell will ask you for your OpenStack password:

```console
$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:
```

#### Creating EC2 credentials

Object Storage tokens are different, you need 2 parameters (**access** and **secret**) to generate an Object Storage token.

These credentials will be safely stored in Keystone. To generate them with `python-openstack` client:

```bash
openstack ec2 credentials create
```

Please write down the **access** and **secret** parameters:

```console
$ openstack ec2 credentials create
+------------+----------------------------------------------------------------------------------------------------------------------------+
| Field      | Value
+------------+----------------------------------------------------------------------------------------------------------------------------+
| access     | 5a4d8b8d88104123a862c527ede5a3d3
| links      | {u'self': u'https://auth.cloud.ovh.net/v3/users/xxxx/credentials/OS-EC2/xxxx'}
| project_id | xxxx
| secret     | xxxx
| trust_id   | None
| user_id    | xxxx
+------------+----------------------------------------------------------------------------------------------------------------------------+
```

#### Configuring awscli client

Install the `awscli` client:

```bash
pip3 install awscli
```

Create the credentials file into `~/.aws/credentials`:

```yaml
[default]
aws_access_key_id=<AWS_ACCESS_KEY_ID>
aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
```

Where `<AWS_ACCESS_KEY_ID>` and `<AWS_SECRET_ACCESS_KEY>` are the **access** and **secret** Object Storage credentials generated in the precedent step.

Complete and write down the configuration into `~/.aws/config`:

```yaml
[plugins]
endpoint = awscli_plugin_endpoint

[default]
region = <s3_region>
endpoint_url = https://s3.<s3_region>.io.cloud.ovh.net/
```

> [!primary]
>
> Replace `s3_region` by the Public Cloud Region with no digits (e.g.: gra, sbg, bhs)

You can test your settings by running this command:

```bash 
aws --profile default s3 ls
```

> [!primary]
>
> If your .aws/config only contains one profile, the argument `--profile default` is optional.

#### Create an Object Storage bucket for Velero

Create a new bucket:

```bash
aws s3 mb s3://velero-s3
```

> [!primary]
>
> Make sure your bucket name is specific enough or a BucketAlreadyExists error will occur, as the bucket names should be unique across all s3 users.

List your buckets:

```bash
aws s3 ls
```

### Installing Velero

We strongly recommend that you use an [official release of Velero](https://github.com/vmware-tanzu/velero/releases). The tarballs for each release contain the velero command-line client. Expand the tarball and add it to your PATH.


Install Velero, including all prerequisites, into the cluster and start the deployment. This will create a namespace called `velero`, and place a deployment named `velero` in it.

Example for [velero v1.16.2](https://github.com/vmware-tanzu/velero/releases/tag/v1.16.2):

```bash
velero install \
  --features=EnableCSI \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:v1.12.2 \
  --bucket <your bucket name> \
  --secret-file ~/.aws/credentials \
  --backup-location-config region=<s3_region>,s3ForcePathStyle="true",s3Url=https://s3.<s3_region>.io.cloud.ovh.net,checksumAlgorithm="" \
  --snapshot-location-config region=<s3_region>,enableSharedConfig=true
```

> [!primary]
>
> Replace `s3_region` by the Public Cloud Region with no digits (e.g.: gra, sbg, bhs).

> [!primary]
>
> Starting with version 1.14 the plugin-for-csi is integrated in Velero. For upgrading an older version follow the upgrade notes: [Upgrade-to-1.14](https://velero.io/docs/v1.14/upgrade-to-1.14/).
> Please refer to those links to check Velero's plugins comptability: [velero-plugin-for-aws](https://github.com/vmware-tanzu/velero-plugin-for-aws?tab=readme-ov-file#compatibility) and [velero-plugin-for-csi](https://github.com/vmware-tanzu/velero-plugin-for-csi?tab=readme-ov-file#compatibility).


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

```console
$ kubectl apply -f velero-snapclass.yaml

volumesnapshotclass.snapshot.storage.k8s.io/csi-cinder-snapclass-in-use-v1-velero created

$ kubectl get volumesnapshotclass --show-labels
NAME                                    DRIVER                     DELETIONPOLICY   AGE   LABELS
csi-cinder-snapclass-in-use-v1          cinder.csi.openstack.org   Delete           50d   mks.ovh/version=1.31.6-2
csi-cinder-snapclass-in-use-v1-velero   cinder.csi.openstack.org   Delete           82m   velero.io/csi-volumesnapshot-class=true
csi-cinder-snapclass-v1                 cinder.csi.openstack.org   Delete           50d   mks.ovh/version=1.31.6-2
```

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
        - image: nginx:1.27.3
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
  type: ClusterIP
```

Deploy it to your cluster:

```bash
kubectl create -f nginx-example-without-pv.yml
```

Check Pods have been created:

```bash
kubectl get pod -n nginx-example
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-7bfdb48f65-pz7v4   1/1     Running   0          65s
nginx-deployment-7bfdb48f65-x7mnf   1/1     Running   0          65s
```

Create a backup of the namespace:

> [!primary]
>
> Since Velero 1.14, CSI VolumeSnapshots are used by default for Persistent Volumes. The `--snapshot-move-data` flag is no longer required for CSI-backed volumes and can be safely omitted. It is only needed for non-CSI volumes backed up with Restic.
>

```bash
velero backup create nginx-backup --include-namespaces nginx-example --wait
```

Verify that the backup is done:

```bash
velero get backups
NAME           STATUS      ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
nginx-backup   Completed   0        0          2025-08-27 17:25:13 +0200 CEST   29d       default            <none>
```

> [!primary]
>
> Wait until the status is equal to `Completed`.

Simulate a disaster:

```bash
kubectl delete namespace nginx-example
namespace "nginx-example" deleted
```

Restore the deleted namespace:

```bash
velero restore create --from-backup nginx-backup
...
```

Verify that the restore is correctly done:

```bash
velero restore  get
NAME                          BACKUP         STATUS      STARTED                          COMPLETED                        ERRORS   WARNINGS   CREATED                          SELECTOR
nginx-backup-20250827173400   nginx-backup   Completed   2025-08-27 17:34:01 +0200 CEST   2025-08-27 17:34:03 +0200 CEST   0        1          2025-08-27 17:34:01 +0200 CEST   <none>
```

You can see that the resources were recreated as expected:

```bash
NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deployment   2/2     2            2           8m6s

NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/my-nginx   ClusterIP   10.3.40.25   <none>        80/TCP    8m6s

NAME                                    READY   STATUS    RESTARTS   AGE
pod/nginx-deployment-7bfdb48f65-pz7v4   1/1     Running   0          8m7s
pod/nginx-deployment-7bfdb48f65-x7mnf   1/1     Running   0          8m6s
```


Before continuing, clean the `nginx-example` namespace:

```bash
kubectl delete namespace nginx-example
```

### Verifying Velero is working with Persistent Volumes

> [!primary]
>
> **Node Agents (Restic):** Node agents are mainly used for file-level backups or for Persistent Volumes that are **not managed by CSI**.
> 
> For Persistent Volumes managed via CSI (as with OVHcloud Managed Kubernetes), CSI VolumeSnapshots are the recommended method. In this case, there is **no need to deploy Node Agents**, as backups and restores are handled natively by the CSI snapshot mechanism.
>

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
  name: nginx-html
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
        - name: nginx-html
          persistentVolumeClaim:
            claimName: nginx-html
      containers:
        - image: nginx:1.27.3
          name: nginx
          ports:
            - containerPort: 80
          volumeMounts:
            - mountPath: /usr/share/nginx/html
              name: nginx-html
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
  type: ClusterIP
```

> [!primary]
>
> Pay attention to the deployment part of this manifest, you will see that we have defined a `.spec.strategy.type`. It specifies the strategy used to replace old Pods by new ones, and we have set it to `Recreate`, so all existing Pods are killed before new ones are created.
>
> We do so as the Storage Class we are using, `csi-cinder-high-speed`, only supports a `ReadWriteOnce`, so we can only have one pod writing on the Persistent Volume at any given time.

Deploy it to the cluster:

```bash
kubectl create -f nginx-example-with-pv.yml
```

Create an index.html file:

```bash
kubectl -n nginx-example exec -it deploy/nginx-deployment -- sh -c 'echo hello world > /usr/share/nginx/html/index.html'
kubectl -n nginx-example exec -it deploy/nginx-deployment --  ls -lh /usr/share/nginx/html
total 20K
-rw-r--r-- 1 root root  12 Aug 27 15:53 index.html
drwx------ 2 root root 16K Aug 27 15:51 lost+found
```

Check that the webserver responds as expected:

```bash
kubectl -n nginx-example port-forward svc/nginx-service 8080:80 > /dev/null&
curl 0.0.0.0:8080
hello world
```

Now we can ask velero to do the backup of the namespace:

> [!primary]
>
> **Reminder:** `--snapshot-move-data` is not needed for CSI-backed volumes. It has been removed from the command below.
>

```bash
velero backup create nginx-backup-with-pv --include-namespaces nginx-example --wait
```

Check the backup has finished successfully:

```bash
velero backup get nginx-backup-with-pv
NAME                   STATUS                       ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
nginx-backup-with-pv   Completed   0        0          2025-08-27 18:03:09 +0200 CEST   29d       default            <none>
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
```

Check that the webserver responds as expected:

```bash
kubectl -n nginx-example port-forward svc/nginx-service 8080:80 > /dev/null&
curl 0.0.0.0:8080
hello world
```

The content of the file was restored!

### Scheduling backups with Velero

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
  schedule: '15 */1 * * *' # Every hour at hh:15
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

```console
$ velero schedule get
NAME             STATUS    CREATED                          SCHEDULE     BACKUP TTL   LAST BACKUP   SELECTOR
daily-snapshot   Enabled   2024-06-17 12:32:01 +0200 CEST   15 0 * * *   168h0m0s     n/a           <none>

$ velero backup get
NAME                            STATUS      ERRORS   WARNINGS   CREATED                          EXPIRES   STORAGE LOCATION   SELECTOR
daily-snapshot-20240617111318   Completed   0        0          2024-06-17 13:15:18 +0200 CEST   6d        default            <none>
nginx-backup                    Completed   0        0          2024-06-17 12:11:23 +0200 CEST   29d       default            <none>
nginx-backup-with-pv            Completed   0        0          2024-06-17 12:25:34 +0200 CEST   29d       default            <none>
```

### Cleanup

Clean the `nginx-example` namespace:

```bash
kubectl delete namespace nginx-example
```

Clean velero schedule:

```bash
velero schedule delete daily-snapshot
```

Clean existing velero backup:

```bash
velero backup delete nginx-backup
velero backup delete nginx-backup-with-pv
```

## Where do we go from here

So now you have a working Velero on your cluster.  
Please refer to [official Velero documentation](https://velero.io/docs/) to learn how to use it, including scheduling backups, using `pre-` and `post-backup` hooks and other matters.

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

**\***: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
