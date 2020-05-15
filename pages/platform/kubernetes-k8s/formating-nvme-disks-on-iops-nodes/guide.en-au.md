---
title: Formating NVMe disks on IOPS nodes
slug: formating-nvme-disk-on-iops-nodes
excerpt: 'Find out how to partition and format NVMe disks on OVHcloud Managed Kubernetes IOPS nodes'
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

**Last updated May 4<sup>th</sup>, 2020.**

When you order [IOPS nodes](https://www.ovhcloud.com/fr/public-cloud/iops/) for your OVHcloud Managed Kubernetes cluster, the NVMe disks are neither partitioned nor formatted, therefore they cannot be used to create Kubernetes persistent volumes.
In this tutorial we are going to guide you on how to easily achieve the partitioning and the formatting of your NVMe disks on your existing nodes but also on future ones.

## Why using Kubernetes IOPS nodes?

Kubernetes IOPS nodes are very useful to run applications that rely heavily on disk performance, as IOPS nodes have one or several local NVMe SSD disks. Applications like Elasticsearch for indexation or Spark for big data would be very good candidate for this.

## Before you begin

This tutorial assumes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Let’s create a daemonset to partition and format our available NVMe disks

To be sure that all our nodes with NVMe disks are properly prepared, we are going to create a daemonset. This daemonset will create a new pod on every node in the cluster that has the label `disktype=nvme`. If the node is an IOPS node and the NVMe disks are not already partitioned, the pod will proceed with the partitioning and the formatting of the NVMe disks.
One huge advantage of this method is the fact that if we add a new IOPS node later in the cluster, the disk will be automatically prepared by the daemonset as soon as we add the label `disktype=nvme` to the new node.

Let's create a `format-nvme-configmap.yaml` file:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: format-nvme-config
  namespace: kube-system
data:
  partition_number: "3"
```

In this example we are going to split the NVMe disks in `3` equal sized partitions. Each partition might be later associated to a Kubernetes persistent volume. This means that we will be able to create three local NVMe persistant volumes per node. If you need more or less partitions, you can change the `partition_number` parameter in the configmap definition.

Create the configmap:

```bash
kubectl apply -f format-nvme-configmap.yaml
```

Let’s create a `format-nvme-daemonset.yaml` file:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: format-nvme-script
  namespace: kube-system
data:
  format-nvme.sh: |
   #!/bin/bash
   set -e

   if [ -b /dev/nvme0n1 ] && [ ! -d /dev/nvme ]
   then
     echo "Installing LVM tools"
     apt-get -qq update
     apt-get -y -qq -o Dpkg::Options::="--force-confold" install lvm2
     echo "Disable LVM lock"
     sed -i 's/locking_type = 1/locking_type = 0/' /etc/lvm/lvm.conf

     pv_list=""
     for disk_name in /dev/nvme[0-9]n1
     do
       echo "Creating physical volume for $disk_name"
       pvcreate "$disk_name"
       pv_list="$pv_list$disk_name "
     done

     echo "Creating virtual group nvme"
     vgcreate nvme $pv_list

     PERCENT=$(( 100 / PARTITION_NUMBER ))

     for i in $(seq 1 "$PARTITION_NUMBER")
     do
       echo "Creating logical volume nvme$i"
       lvcreate -Zn -n "nvme$i" -l $PERCENT%VG nvme
       while [ ! -b "/dev/nvme/nvme$i" ]
       do
         echo "Wait for logical volume /dev/nvme/nvme$i"
         sleep 1
       done
       echo "Creating filesystem ext4 on nvme$i"
       mkfs -t ext4 "/dev/nvme/nvme$i"
     done

     echo "Enable LVM lock"
     sed -i 's/locking_type = 0/locking_type = 1/' /etc/lvm/lvm.conf
   fi

---

apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: format-nvme
  namespace: kube-system
  labels:
    k8s-app: format-nvme
spec:
  selector:
    matchLabels:
      name: format-nvme
  template:
    metadata:
      labels:
        name: format-nvme
    spec:
      nodeSelector:
        disktype: nvme
      containers:
      - name: format-nvme
        image: ubuntu
        command: ["/bin/sh","-c"]
        args: ["/script/format-nvme.sh; while true; do echo Sleeping && sleep 3600; done"]
        env:
          - name: PARTITION_NUMBER
            valueFrom:
              configMapKeyRef:
                name: format-nvme-config
                key: partition_number
        volumeMounts:
          - name: format-nvme-script
            mountPath: /script
          - name: dev
            mountPath: /dev
          - name: etc-lvm
            mountPath: /etc/lvm
        securityContext:
          allowPrivilegeEscalation: true
          privileged: true
      volumes:
        - name: format-nvme-script
          configMap:
            name: format-nvme-script
            defaultMode: 0755
        - name: dev
          hostPath:
            path: /dev
        - name: etc-lvm
          hostPath:
            path: /etc/lvm
```

And deploy the daemonset on the cluster:

```bash
kubectl apply -f format-nvme-daemonset.yaml
```

Currently, the daemonset should not have started any pod in our cluster as none of our nodes has the label `disktype=nvme`.

Let's fix this by adding the `disktype=nvme` label on our IOPS nodes. In this example our IOPS nodes are called `node-nvme-1` and `node-nvme-2`, please modify this accordingly.

```bash
kubectl label nodes node-nvme-1 node-nvme-2 disktype=nvme
```

We should now have one `format-nvme` pod running on each of our cluster node that has the label `disktype=nvme`:

```bash
kubectl get pod -n kube-system -l 'name=format-nvme' -o wide
```

Under the hood all our IOPS nodes should now have three partitions `/dev/nvme/nvme1`, `/dev/nvme/nvme2`, and `/dev/nvme/nvme3` created on their NVMe disk and these partitions should be of equal size.

## Create and use a local NVMe persistant volume

First we need to create a new storage class. Let’s create a `local-nvme-storage-class.yaml` file:

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: local-nvme
provisioner: kubernetes.io/no-provisioner
allowVolumeExpansion: true
volumeBindingMode: Immediate
```

And apply this to our cluster:

```bash
kubectl apply -f local-nvme-storage-class.yaml
```

Then let’s create a new persistent volume on the first partition of our first IOPS node using our local NVMe storage class. In this example the node is called `node-nvme-1` and the partition used is the first one `/dev/nvme/nvme1`, please modify this accordingly. To do this, let’s create a `local-nvme-persistent-volume.yaml` file:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: local-pv
spec:
  capacity:
    storage: 50Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-nvme
  local:
    path: /dev/nvme/nvme1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - node-nvme-1
```

And apply this to create the persistent volume:

```bash
kubectl apply -f local-nvme-persistent-volume.yaml
```

Then, we need to create a persistent volume claim. Let’s create a `local-nvme-persistent-volume-claim.yaml` file:

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: local-pvc
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: local-nvme
  resources:
    requests:
      storage: 50Gi
```

And apply this to create a `50Gi` claim:

```bash
kubectl apply -f local-nvme-persistent-volume-claim.yaml
```

Let’s now create an Nginx pod using the persistent volume claim as his webroot folder. For this, let’s create a `local-nvme-nginx-pod.yaml` file:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: local-nvme-nginx
spec:
  volumes:
    - name: local-volume
      persistentVolumeClaim:
        claimName: local-pvc
  containers:
    - name: local-volume-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: local-volume
```

And deploy the Nginx pod:

```bash
kubectl apply -f local-nvme-nginx-pod.yaml
```

Let's enter inside the Nginx container to create a file on the NVMe presistent volume:

```bash
kubectl exec -it local-nvme-nginx -- bash
```

Create a new `index.html` file:

```bash
echo "NVMe disk!" > /usr/share/nginx/html/index.html
```

and exit the Nginx container:

```bash
exit
```

Let's try to access our new web page:

```bash
kubectl proxy
```

and open the URL [http://localhost:8001/api/v1/namespaces/default/pods/http:local-nvme-nginx:/proxy/](http://localhost:8001/api/v1/namespaces/default/pods/http:local-nvme-nginx:/proxy/)

Now let's try to see if the data is persistent by deleting our current Nginx pod:

```bash
kubectl delete -f local-nvme-nginx-pod.yaml
```

Then, let's try to create a new one:

```bash
kubectl apply -f local-nvme-nginx-pod.yaml
```

We should now check that our web page is still accessible:

```bash
kubectl proxy
```

and browse the same URL [http://localhost:8001/api/v1/namespaces/default/pods/http:local-nvme-nginx:/proxy/](http://localhost:8001/api/v1/namespaces/default/pods/http:local-nvme-nginx:/proxy/)

## Clean your cluster

Let's remove the Nginx pod used for testing:

```bash
kubectl delete -f local-nvme-nginx-pod.yaml
```

Let's remove the persistent volume claim used for testing:

```bash
kubectl delete -f local-nvme-persistent-volume-claim.yaml
```

And finally let's remove the persistent volume used for testing:

```bash
kubectl delete -f local-nvme-persistent-volume.yaml
```

Although the persistent volume is removed from our Kubernetes cluster, the data are still present on the node disk.

Let's identify the name of our format-nvme pod running on our node-nvme-1:

```bash
kubectl get pods -n kube-system -o wide -l 'name=format-nvme' --field-selector spec.nodeName=node-nvme-1
```

<pre class="console"><code>$ kubectl get pods -n kube-system -o wide -l 'name=format-nvme' --field-selector spec.nodeName=node-nvme-1
NAME                READY   STATUS    RESTARTS   AGE     IP         NODE              NOMINATED NODE   READINESS GATES
format-nvme-ct84s   1/1     Running   0          8m13s   10.2.0.6   node-nvme-1
</code></pre>

And enter inside the container:

```bash
kubectl exec -it format-nvme-ct84s -n kube-system -- bash
```

We can now reformat our /dev/nvme/nvme1 logical volume:

```bash
mkfs -t ext4 /dev/nvme/nvme1
```

And exit the container:

```bash
exit
```

If you don't plan to add more IOPS nodes to your cluster, you should remove the daemonset. It is of course still possible to redeploy it later without automatically reformat the existing partitions.

```bash
kubectl delete -f format-nvme-daemonset.yaml
```

```bash
kubectl delete -f format-nvme-configmap.yaml
```