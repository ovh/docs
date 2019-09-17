---
title: Kubernetes Logging with Fluent Bit in a nutshell
slug: kubernetes-fluent-bit
order: 09
excerpt: All the logs of your pods in one place
section: Use cases
---

**Last updated 8th August, 2019**

## Objective 

[Kubernetes](https://kubernetes.io/){.external} is the de facto standard to manage containerized applications on cloud platforms. It is open source, has a large ecosystem, and has a ever growing community. Kubernetes is great but once your containers go live in the cloud, you still want to monitor their behavior. The more containers you have, the more difficult it can be to navigate through the logs and have a clear picture of what's happening. How can you centralize all your Kubernetes pods logs in one place and analyze them easily ? By using Logs Data Platform with the help of Fluent Bit. [Fluent Bit](http://fluentbit.io/) is a fast and lightweight log processor and forwarder. It is open source, cloud oriented and a part of the [Fluentd](http://fluentd.org/){.external} ecosystem. This tutorial will help you to configure it for Logs Data Platform, you can of course apply it to our [fully managed Kubernetes offer](https://www.ovh.co.uk/public-cloud/kubernetes/){.external}.

## Requirements 

Note that in order to complete this tutorial, you should have at least:

- [Activated your Logs Data Platform account.](https://www.ovh.co.uk/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
- [Created at least one Stream and get its token.](../quick_start/guide.en-gb.md){.ref}
- A working kubernetes cluster with some pods already logging to stdout. 
- 15 minutes. 


## Preparation
 
Before we dive into this tutorial, it is important to understand how we will deploy Fluent Bit. The configuration of Fluent Bit will be similar as the one you can find in the [official documentation](https://docs.fluentbit.io/manual/installation/kubernetes). Fluent Bit will be deployed as a *DaemonSet* in every node of the kubernetes cluster. Fluent Bit will read, parse and ship every log of every pods of your cluster by default. It will also enrich each log with precious metadata like pod name and id, container name and ids, labels and annotations. As stated in the Fluent Bit documentation, a built-in Kubernetes filter will use Kubernetes API to gather some of these information. 


## Instructions 

We will configure Fluent Bit with these steps:

- Create the namespace, service account and the access rights of the Fluent Bit deployment. 
- Define the Fluent Bit configuration.
- Launch the DaemonSet of Fluent Bit. 


### Installation 

The Fluent Bit installation part is strictly identical to the documentation. Run the following commands to create the namespace, the service account and the role of this account

```shell-session
$ kubectl create namespace logging
$ kubectl create -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/fluent-bit-service-account.yaml
$ kubectl create -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/fluent-bit-role.yaml
$ kubectl create -f https://raw.githubusercontent.com/fluent/fluent-bit-kubernetes-logging/master/fluent-bit-role-binding.yaml
```

### Configuration 

Once the account created, we can proceed to the next steps: define a secret for the *X-OVH-TOKEN* value of your stream token and upload the *ConfigMap* of Fluent Bit. 

#### Token Secret creation 

there is several methods to create a secret in Kubernetes, for brevity sake, we will use the one-liner version of secret creation. 

```shell-session
$ kubectl --namespace logging create secret generic ldp-token --from-literal=ldp-token=<your-token-value>
```

We create a *ldp-token* secret with only one key named *ldp-token* as the value of our token. Replace the *ldp-token* value with the value of your token. 

#### ConfigMap File

Even if it is undocumented, Fluent Bit supports [GELF](https://docs.graylog.org/en/stable/pages/gelf.html){.external} as a standard output with udp,tcp and TLS protocols out of the box. We will modify the proposed file of the documentation to parse and convert Fluent Bit logs to GELF:

```yaml hl_lines="103 113"
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
  namespace: logging
  labels:
    k8s-app: fluent-bit
data:
  # Configuration files: server, input, filters and output
  # ======================================================
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Daemon        off
        Parsers_File  parsers.conf
        HTTP_Server   On
        HTTP_Listen   0.0.0.0
        HTTP_Port     2020

    @INCLUDE input-kubernetes.conf
    @INCLUDE filter-kubernetes.conf
    @INCLUDE output-ldp.conf

  input-kubernetes.conf: |
    [INPUT]
        Name              tail
        Tag               kube.*
        Path              /var/log/containers/*.log
        Parser            docker
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     5MB
        Skip_Long_Lines   On
        Refresh_Interval  10

  filter-kubernetes.conf: |
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Kube_URL            https://kubernetes.default.svc:443
        Kube_CA_File        /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File     /var/run/secrets/kubernetes.io/serviceaccount/token
        Kube_Tag_Prefix     kube.var.log.containers.
        Merge_Log           Off
        Merge_Log_Key       log_processed
        K8S-Logging.Parser  On
        K8S-Logging.Exclude Off
    [FILTER]
        Name                record_modifier
        Match               *
        Record     X-OVH-TOKEN ${FLUENT_LDP_TOKEN}
    [FILTER]
        Name                record_modifier
        Match               *
        Record     fluent-bit-host ${HOSTNAME}
    [FILTER]
        Name                nest
        Match               *
        Wildcard            pod_name
        Operation lift
        Nested_under kubernetes
        Add_prefix   kubernetes_
    [FILTER]
        Name                modify
        Match               *
        Copy     kubernetes_pod_name host
    [FILTER]
        Name                modify
        Match               *
        Rename     log short_message

  output-ldp.conf: |
    [OUTPUT]
        Name            gelf
        Match           *
        Host            ${FLUENT_LDP_HOST}
        Port            ${FLUENT_LDP_PORT}
        Mode            tls
        Compress        False

  parsers.conf: |
    [PARSER]
        Name   apache
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache2
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^ ]*) +\S*)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache_error
        Format regex
        Regex  ^\[[^ ]* (?<time>[^\]]*)\] \[(?<level>[^\]]*)\](?: \[pid (?<pid>[^\]]*)\])?( \[client (?<client>[^\]]*)\])? (?<message>.*)$

    [PARSER]
        Name   nginx
        Format regex
        Regex ^(?<remote>[^ ]*) (?<host>[^ ]*) (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   json
        Format json
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name        docker
        Format      json
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
        Time_Keep   On

    [PARSER]
        Name        syslog
        Format      regex
        Regex       ^\<(?<pri>[0-9]+)\>(?<time>[^ ]* {1,2}[^ ]* [^ ]*) (?<host>[^ ]*) (?<ident>[a-zA-Z0-9_\/\.\-]*)(?:\[(?<pid>[0-9]+)\])?(?:[^\:]*\:)? *(?<message>.*)$
        Time_Key    time
        Time_Format %b %d %H:%M:%S
```

The differences with the proposed file in the documentation are in the filter configuration file and the output configuration file:

- We use a **record_modifier** filter to add the *X-OVH-TOKEN* at each log, the value of the token will be taken from an environment variable. 
- We use a **record_modifier** extract the container name handling this log as new key *fluent-bit-host*. 
- We use the **nest** modifier to flatten the Fluent Bit log message at the filter stage
- We use a **modify** filter to copy the pod name which generated the log to the name of the source
- We finally use a **modify** filter to rename the log field to the standard  *short_message* value

If you need more information on what you can do with the filters, don't hesitate to navigate to the [Fluent Bit filter documentation](https://docs.fluentbit.io/manual/filter){.external}. With the Fluent Bit filters, you can specify which pods should be logged and what data must be included or discarded. 

The second modified file is the *output-ldp.conf* file. Here we configure the *Gelf output* with environment variables and activate the TLS. 
The final part of the file is some parsers that you can use to create structured logs from well known log formats. 

To upload the configuration file use the following command 

```shell-session 
$ kubectl create -f fluent-bit-configmap.yaml
```

### Launch Fluent Bit

Now that Fluent Bit accounts and configuration file are setup, we can now launch our DaemonSet. Create a *fluent-bit-ds.yaml* file with the following content to configure the DaemonSet. 

```yaml hl_lines="103 113"
apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  name: fluent-bit
  namespace: logging
  labels:
    k8s-app: fluent-bit-logging
    version: v1
    kubernetes.io/cluster-service: "true"
spec:
  template:
    metadata:
      labels:
        k8s-app: fluent-bit-logging
        version: v1
        kubernetes.io/cluster-service: "true"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "2020"
        prometheus.io/path: /api/v1/metrics/prometheus
    spec:
      containers:
      - name: fluent-bit
        image: ovhcom/fluent-bit
        imagePullPolicy: Always
        ports:
          - containerPort: 2020
        env:
        - name: FLUENT_LDP_HOST
          value: "gra2.logs.ovh.com"
        - name: FLUENT_LDP_PORT
          value: "12202"
        - name: FLUENT_LDP_TOKEN
          valueFrom:
              secretKeyRef:
                  name: ldp-token
                  key: ldp-token
        volumeMounts:
        - name: varlog
          mountPath: /var/log
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
        - name: fluent-bit-config
          mountPath: /fluent-bit/etc/
      terminationGracePeriodSeconds: 10
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers
      - name: fluent-bit-config
        configMap:
          name: fluent-bit-config
      serviceAccountName: fluent-bit
      tolerations:
      - key: node-role.kubernetes.io/master
        operator: Exists
        effect: NoSchedule
      - operator: "Exists"
        effect: "NoExecute"
      - operator: "Exists"
        effect: "NoSchedule"
```

In this file you must specify the address of your cluster (here **gra2.logs.ovh.com** for example) and the port of the GELF TLS input (here **12202**). You will find these information at the **Home** page of your Logs Data Platform manager. 

Upload this file with the following command:
```shell-session 
$ kubectl create -f fluent-bit-ds.yaml
```

Verify that the pods are running correctly with the command: 
```shell-session 
$ kubectl get pods --namespace logging 
```

You can now fly to the stream interface to witness your beautifully structured logs

![kube_graylog](images/kube_graylog.png){.thumbnail}

And that's it. Your kubernetes activity is now perfectly logged in one place. Happy Logging !!

## Go further

- Getting Started: [Quick Start](../quick_start/guide.en-gb.md){.ref}
- Documentation: [Guides](../product.en-gb.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.co.uk/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}


