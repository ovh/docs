---
title: Resources
slug: resources
excerpt: Learn the resources provided by AI Training jobs
section: Concepts
order: 3
---
*Last updated 3rd May, 2021.*

## Description

**AI-Training** provides to the user access to several types of resources. Resource usage can be viewed through a dedicated UI on grafana.

## Requirements

-   a running job on **AI-Training**

## UI Access

The URL to access the monitoring is build like this : *https://monitoring.`<REGION>`{=html}.training.ai.cloud.ovh.net/d/gpu?var-job=`<JOB-ID>`{=html}*

It can be fetched with the CLI in the **Monitoring Url** field

``` {.console}
ovhai job get <JOB-ID>

---
Name:       ai-training-transformers-heuristic
ID:         xxx
Created At: 2021-04-14 09:30:02.709449 UTC
Updated At: 2021-04-14 09:30:09.328392 UTC
User:       user-xxx
Spec:       
  Image:        ovhcom/ai-training-transformers:3.1.0
  Command:      
  Env:          
  Default Port: 8080
  Unsecure:     false
  Resources:    
    GPU:       1
    GPU Model: Tesla-V100S
    CPU:       13
  Volumes:      
  Timeout:      0
  Labels:       
  SSH Keys:     
Status:     
  State:          RUNNING
  Queued At:      14-04-21 09:30
  Started At:     14-04-21 09:30
  Stopped At:     
  IP:             10.42.165.21
  Duration:       2s
  Job Url:        https://xxx.job.console.preprod.training.ai.cloud.ovh.net
  SSH Url:        
  Monitoring Url: https://monitoring.console.preprod.training.ai.cloud.ovh.net/d/gpu?var-job=xxx&from=1618392608000
  Infos:          
  Data Sync:      
  Sync Progress:  
  History:        
    State         Date
    -----         ----
    QUEUED        2021-04-14 09:30:02.708117 UTC
    INITIALIZING  2021-04-14 09:30:02.802995 UTC
    PENDING       2021-04-14 09:30:02.824278 UTC
    RUNNING       2021-04-14 09:30:09.327003 UTC
```

Or from the UI by clicking on the **Resource usage** link in the job details

![image](images/00_job_details.png){.thumbnail}

## Panel Details

We will now go through each panel to give a short description.
![image](images/01_resource_dashboard.png){.thumbnail}

### GPU Usage

> [!warning]
> * This panel will only be present on GPU jobs

This panel display the usage of each GPU allocated to your Job using the DCGM_FI_DEV_GPU_UTIL NVidia metrics.

### GPU Memory

> [!warning]
> * This panel will only be present on GPU jobs

This panel display the usage and limit of memory for each GPU allocated to your Job

### CPU Usage

This panel display the overall CPU usage of your job.

### Memory Usage

This panel display usage and limit of RAM allocated to your job.

### Network Usage

This panel display input and output traffic on your job.

### Ephemeral storage usage

This panel show the usage and limit of ephemeral storage allocated to your job. Each job got ephemeral storage used for data not in synchronized folders within the container.

> [!warning]
> If your usage go beyond the limit of the ephemeral storage, your job will be evicted.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
