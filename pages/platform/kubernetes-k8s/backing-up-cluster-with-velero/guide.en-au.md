---
title: 'Backing-up a OVHcloud Managed Kubernetes cluster using Velero'
excerpt: 'Backing-up a OVHcloud Managed Kubernetes cluster using Velero'
slug: backing-up-cluster-with-velero
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

**Last updated Ocotber 28<sup>st</sup>, 2019.**


In this tutorial, we are using [Velero](https://velero.io/){.external} to backup and restore an OVHcloud Managed Kubernetes cluster.

Velero is an open source tool to safely backup and restore, perform disaster recovery, and migrate Kubernetes cluster resources and persistent volumes.

We are using our Public Cloud's Swift Object Storage with the Swift S3 API as storage backend for Velero. Velero uses the S3 protocol to store the cluster backups on a S3 compatible object storage. 


## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.


## Creating the S3 bucket for Velero

Velero needs a S3 bucket as storage backend to store the data from your cluster. In this section you will create your S3 bucket on Swift.


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
$ openstack ec2 credentials create
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
region = <public cloud region without digit>
s3 =
  endpoint_url = https://storage.<public cloud region without digit>.cloud.ovh.net
  signature_version = s3v4
s3api =
  endpoint_url = https://storage.<public cloud region without digit>.cloud.ovh.net
```


### Create a S3 bucket for Velero

Create a new bucket:

```bash
aws --profile default s3 mb s3://velero-s3
```


## Installing Velero

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
    --provider aws \
    --bucket <your bucket name> \
    --secret-file ./credentials-velero \
    --snapshot-location-config region=<public cloud region without digit>,s3ForcePathStyle="true",s3Url=https://storage.<public cloud region without digit>.cloud.ovh.net \
    --backup-location-config region=<public cloud region without digit>,s3ForcePathStyle="true",s3Url=https://storage.<public cloud region without digit>.cloud.ovh.net
```    


In my case, with the cluster in the `GRA` region, that meant:

```bash
velero install --provider aws --bucket velero-s3 --secret-file ./credentials/credentials-velero --backup-location-config region=GRA,s3ForcePathStyle="true",s3Url=https://storage.gra.cloud.ovh.net --snapshot-location-config region=GRA,s3ForcePathStyle="true",s3Url=https://storage.gra.cloud.ovh.net
```

<pre class="console"><code>$ velero install \
  --provider aws \
  --bucket velero-s3 \
  --secret-file ./credentials/credentials-velero \
  --snapshot-location-config region=gra,s3ForcePathStyle="true",s3Url=https://storage.gra.cloud.ovh.net \
  --backup-location-config region=gra,s3ForcePathStyle="true",s3Url=https://storage.gra.cloud.ovh.net
CustomResourceDefinition/backups.velero.io: attempting to create resource
CustomResourceDefinition/backups.velero.io: created
CustomResourceDefinition/restores.velero.io: attempting to create resource
CustomResourceDefinition/restores.velero.io: created
CustomResourceDefinition/downloadrequests.velero.io: attempting to create resource
CustomResourceDefinition/downloadrequests.velero.io: created
[...]
Deployment/velero: attempting to create resource
Deployment/velero: created
Velero is installed! ⛵ Use 'kubectl logs deployment/velero -n velero' to view the status.</code></pre>

Now Velero is installed, you can try your first backup...


## Verifying Velero is working

To verify that Velero is working correctly, let's try two exemples.

### Exemple without PV


1. Copy the following code into a `velero-example-without-pv.yml` file:

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
    kubectl apply -f velero-example-without-pv.yml
    ```

1. Create a backup of the namespace

    ```bash
    velero backup create nginx-backup --include-namespaces nginx-example
    ```

1. Verify that the backup is done

    ```bash
    velero backup describe nginx-backup
    ```

1. Simulate a disaster 

    ```bash
    kubectl delete namespaces nginx-example
    ```

1. Restore the deleted namespace

    ```bash
    velero restore create --from-backup nginx-backup
    ```

1. Verify that  the restore is correctly done

    ```bash
    kubectl get all -n nginx-example
    ```


In my case:

<pre class="console"><code>$ kubectl apply -f exemples/velero/velero-example-without-pv.yml     
namespace/nginx-example created
deployment.apps/nginx-deployment created
service/my-nginx created

$ velero backup create nginx-backup --include-namespaces nginx-example
Backup request "nginx-backup" submitted successfully.
Run `velero backup describe nginx-backup` or `velero backup logs nginx-backup` for more details.

$ velero backup describe nginx-backup
Name:         nginx-backup
Namespace:    velero
Labels:       velero.io/storage-location=default
[...]
Started:    2019-11-05 18:11:19 +0100 CET
Completed:  2019-11-05 18:11:20 +0100 CET

Expiration:  2019-12-05 18:11:19 +0100 CET

Persistent Volumes: &lt;none included>

$ kubectl delete namespaces nginx-example
namespace "nginx-example" deleted

$ velero restore create --from-backup nginx-backup
Restore request "nginx-backup-20191105182030" submitted successfully.
Run `velero restore describe nginx-backup-20191105182030` or `velero restore logs nginx-backup-20191105182030` for more details.

$ velero restore logs nginx-backup-20191105182030
time="2019-11-05T17:20:31Z" level=info msg="starting restore" logSource="pkg/controller/restore_controller.go:450" restore=velero/nginx-backup-20191105182030
time="2019-11-05T17:20:31Z" level=info msg="Not including resource" groupResource=events logSource="pkg/restore/restore.go:136" restore=velero/nginx-backup-20191105182030
[...]
time="2019-11-05T17:20:31Z" level=info msg="Attempting to restore Service: my-nginx" logSource="pkg/restore/restore.go:1031" restore=velero/nginx-backup-20191105182030
time="2019-11-05T17:20:31Z" level=info msg="restore completed" logSource="pkg/controller/restore_controller.go:465" restore=velero/nginx-backup-20191105182030

$ kubectl get all -n nginx-example
NAME                                    READY   STATUS    RESTARTS   AGE
pod/nginx-deployment-54f57cf6bf-2qhbd   1/1     Running   0          4m19s
pod/nginx-deployment-54f57cf6bf-twrkm   1/1     Running   0          4m19s


NAME               TYPE           CLUSTER-IP    EXTERNAL-IP                        PORT(S)        AGE
service/my-nginx   LoadBalancer   10.3.19.133   xyzxyz.lb.c1.gra.k8s.ovh.net   80:30942/TCP   4m21s


NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deployment   2/2     2            2           4m21s

NAME                                          DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-deployment-54f57cf6bf   2         2         2       4m21s
</code></pre>


### Exemple with PV



1. Copy the following code into a `velero-example-with-pv.yml` file:

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
      storageClassName: cinder-classic
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
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
          annotations:
            pre.hook.backup.velero.io/container: fsfreeze
            pre.hook.backup.velero.io/command: '["/sbin/fsfreeze", "--freeze", "/var/log/nginx"]'
            post.hook.backup.velero.io/container: fsfreeze
            post.hook.backup.velero.io/command: '["/sbin/fsfreeze", "--unfreeze", "/var/log/nginx"]'
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
          - image: gcr.io/heptio-images/fsfreeze-pause:latest
            name: fsfreeze
            securityContext:
              privileged: true
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


1. Create a backup of the namespace with PV snapshotting

    ```bash
    velero backup create nginx-backup-with-pv --include-namespaces nginx-example
    ```

1. Verify that the backup is done

    ```bash
    velero backup describe nginx-backup
    ```

1. Simulate a disaster 

    ```bash
    kubectl delete namespaces nginx-example
    ```

  Because the default reclaim policy for dynamically-provisioned PVs is "Delete", these commands should trigger your cloud provider to delete the disk that backs the PV. Deletion is asynchronous, so this may take some time. Before continuing to the next step, verify that the PV is deleted

    ```bash
    kubectl get pv --all-namespaces
    ```


1. Restore the deleted namespace

    ```bash
    velero restore create --from-backup nginx-backup-with-pv
    ```

1. Verify that  the restore is correctly done

    ```bash
    kubectl get all -n nginx-example
    ```


<pre class="console"><code>$ kubectl apply -f exemples/velero/velero-example-without-pv.yml     
namespace/nginx-example created
persistentvolumeclaim/nginx-logs created
deployment.apps/nginx-deployment created
service/my-nginx created

$ velero backup create nginx-backup-with-pv --include-namespaces nginx-example
Backup request "nginx-backup-with-pv" submitted successfully.
Run `velero backup describe nginx-backup-with-pv` or `velero backup logs nginx-backup-with-pv` for more details. 

$ kubectl delete namespaces nginx-example
namespace "nginx-example" deleted

$ kubectl get pv --all-namespaces
No resources found.

$ velero restore create --from-backup nginx-backup-with-pv
Restore request "nginx-backup-with-pv-20191105184416" submitted successfully.
Run `velero restore describe nginx-backup-with-pv-20191105184416` or `velero restore logs nginx-backup-with-pv-20191105184416` for more details.

$ kubectl get all -n nginx-example
NAME                                    READY   STATUS              RESTARTS   AGE
pod/nginx-deployment-64dd76ffbb-t2bfk   0/2     ContainerCreating   0          22s


NAME               TYPE           CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
service/my-nginx   LoadBalancer   10.3.76.8    &lt;pending>     80:30847/TCP   22s


NAME                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx-deployment   0/1     1            0           22s

NAME                                          DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-deployment-54f57cf6bf   0         0         0       22s
replicaset.apps/nginx-deployment-64dd76ffbb   1         1         0       22s

$ kubectl get pvc -n nginx-example
NAME         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
nginx-logs   Bound    pvc-71528d91-fd03-46c4-99d6-557d3e8fe9da   1Gi        RWO            cinder-classic   35s

$ kubectl get pv -n nginx-example
NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM
  STORAGECLASS     REASON   AGE
pvc-71528d91-fd03-46c4-99d6-557d3e8fe9da   1Gi        RWO            Delete           Bound    nginx-example/nginx-logs   cinder-classic            39s
</code></pre>



## Where do we go from here?

So now you have a working Velero on your cluster. Please refer to [official Velero documentation](https://velero.io/docs/){.external} to learn how to use it, including scheduling backups, using pre- and post-backup hooks and other matters.

