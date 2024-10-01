---
title: AI Training - Tutorial - Train YOLOv8 to play to "rock paper scissors" 
excerpt: Understand how simple it is to train a model using AI Training
updated: 2023-11-27
---

## Objective

The purpose of this tutorial is to show how to train YOLOv8 to play the game "rock paper scissors".

YOLOv8 is an object detection algorithm. Although closely related to image classification, object detection performs image classification on a more precise scale. Object detection locates and categorizes features in images.

It is based on the YOLOv8 open source [repository](https://github.com/ultralytics/ultralytics).

> [!primary]
>
> It's strongly recommended to read the Notebook tutorial [Train YOLOv8 to play to "rock paper scissors"](/pages/public_cloud/ai_machine_learning/notebook_tuto_15_rock-paper-scissors) before reading this tutorial.
>

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You have created a Public Cloud project.
- The ovhai CLI interface is installed on your system (find more information [here](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli)).
- You have [Docker](https://www.docker.com/get-started) installed and configured to build images.
- You have an OCI / Docker image registry available. You can use a public registry (such as [Docker Hub](https://hub.docker.com/) for example) or a private registry. Refer to the [Creating a private registry](/pages/public_cloud/containers_orchestration/managed_private_registry/creating-a-private-registry) documentation to create a private registry based on Harbor.
- You have knowledge about building images with [Dockerfile](https://docs.docker.com/engine/reference/builder/).

## Instructions

### Create object storage for data

To train the model you'll need data and a place where to save the trained model.

You can reuse the previous object storage used in the Notebook tutorial [Train YOLOv8 to play to "rock paper scissors"](/pages/public_cloud/ai_machine_learning/notebook_tuto_15_rock-paper-scissors) or follow the step [Create Object Storage containers](/pages/public_cloud/ai_machine_learning/notebook_tuto_15_rock-paper-scissors) of this same tutorial.

### Train your model

> [!primary]
>
> All source code is available on the GitHub repository [ai-training-examples](https://github.com/ovh/ai-training-examples/tree/main/jobs/computer-vision/object-detection/yolov8).
>

To train the model, we will use AI Training. This powerful tool will allow you to automate your pipelines and build fine-tuning phases easily.

AI Training allows you to train models directly from your own Docker images.

First, you need to create a Python script that is in charge of doing the training.
You can copy and paste the following code in a file named `train-rock-paper-scissors`:

```python
import ultralytics
from ultralytics import YOLO
import shutil

#######################################################################################################################
## 🎯 The aim of this script is to do transfert learning on YOLOv8 model.                                            ##
## 💿 The data for train the model are in /workspace/data/rock-paper-scissors/                                       ##
## 🧠 The train model are stored in /workspace/model/rock-paper-scissors/                                            ##
#######################################################################################################################

# ✅ Check configuration
ultralytics.checks()

# 🧠 Load a pretrained YOLO model
model = YOLO('yolov8n.pt')

# 💪 Train the model with new data ➡️ one GPU / 10 itérations (epochs)
model.train(data='/workspace/data/rock-paper-scissors/data.yaml', device=0, epochs=50, verbose=True)

# 💾 Save the model
exportedMetaData = model.export()
print('Model save to : ' + exportedMetaData)

# ➡️ Copy the model to the object storage
shutil.copy(exportedMetaData, '/workspace/model/rock-paper-scissors/')
```

Then, create a `requirements.txt` file to declare the Python dependencies:

```
ultralytics==8.0.194
opencv-python-headless==4.8.1.78
```

Then, create a Dockerfile compliant with AI Training.
You can copy and paste the following code into a file named `Dockerfile`:

```docker
FROM --platform=linux/x86_64 python:3.8

WORKDIR /workspace
ADD requirements.txt /workspace

RUN apt-get update && apt-get install libgl1 -y
RUN pip install -r requirements.txt

ADD train-rock-paper-scissors.py /workspace

# Mandatory to run the jobs in rootless mode
RUN chown -R 42420:42420 /workspace

CMD [ "python3"  , "/workspace/train-rock-paper-scissors.py"]
```

Then, build the Docker image and push it in the shared registry:

```bash
docker build . -f Dockerfile -t <shared-registry-address>/rock-paper-scissors-train:1.0.0
docker push <shared-registry-address>/rock-paper-scissors-train:1.0.0
```

The output should be similar to this:

```bash
$ docker build . -f Dockerfile -t my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train:1.0.0
...
 => => naming to my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train:1.0.0

$ docker push my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train:1.0.0                                                     
The push refers to repository [my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train]
6e5b7acfda9e: Pushed 
..
1.0.0: digest: sha256:72f19493662aafe3d0a3dc35ea5ab76b8472bd6a709de2da1a52e7ebf8ab7ad1 size: 3054 
```

> [!warning]
> **Warning**
> 
> The shared registry should only be used for testing purposes. Please consider creating and attaching your own registry. More information about this can be found [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry). The images pushed to this registry are for AI Tools workloads only, and will not be accessible for external uses.

You can find the address of your shared registry by launching this command:

```console
ovhai registry list
```

Then, log in on your shared registry with your usual AI Platform user credentials:

```console
docker login -u <user> -p <password> <shared-registry-address>
```

You will then be able to build and push your image on this shared registry.

Once your Docker image is created and pushed into the registry, you can directly use the `ovhai` command to create your model training.
You can launch the training specifying more or less GPU depending on the speed you want for your training.

> [!primary]
>
> If your images are stored in a private registry, please follow the documentation [Registries - Use & manage your registries](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry) to add your registry. 
>

```bash
ovhai job run \
	--name rock-paper-scissors-train-job \
	--gpu 1 \
	--volume rock-paper-scissors-data@<region>/:/workspace/data:RO:cache \
	--volume rock-paper-scissors-model@<region>/:/workspace/model:RW:cache \
    --unsecure-http \
	<shared-registry-address>/rock-paper-scissors-train:1.0.0
```

The output should be similar to this:

```bash
$ ovhai job run \
	--name rock-paper-scissors-train-job \
	--gpu 1 \
	--volume rock-paper-scissors-data@GRA/:/workspace/data:R0:cache \
	--volume rock-paper-scissors-model@GRA/:/workspace/model:RW:cache \
    --unsecure-http \
    my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train:1.0.0

Id:         c0c0878c-5564-4660-889a-65724f6e3056
Created At: 04-07-23 14:05:58
Updated At: 04-07-23 14:05:58
User:       my-user
Spec:
  Image:                my-registry.gra7.container-registry.ovh.net/rock-paper-scissors-train:1.0.0
 Command:              
  Env Vars:             ~
  Default Http Port:    8080
  Unsecure Http:        true
  Resources:
    Gpu:               1
    Cpu:               13
    Memory:            40.0 GiB
    Public Network:    1.5 Gbps
    Private Network:   0 bps
    Ephemeral Storage: 750.0 GiB
    Gpu Model:         Tesla-V100S
    Gpu Brand:         NVIDIA
    Gpu Memory:        32.0 GiB
    Flavor:            ai1-1-gpu
  Volumes:
  - Source:
      Container: rock-paper-scissors-model
      Alias:     GRA
      Prefix:    
      Archive:   ~
    Target: ~
    Mount:
      Mount Path: /workspace/model
      Permission: Read & Write
    Cache:  true
  - Source:
      Container: rock-paper-scissors-data
      Alias:     GRA
      Prefix:    
      Archive:   ~
    Target: ~
    Mount:
      Mount Path: /workspace/data
      Permission: Read Only
    Cache:  true
  Timeout:              0
  Timeout Auto Restart: false
  Shutdown:             ~
  Name:                 rock-paper-scissors-train-job
  Labels:
    ovh/id:   c0c0878c-5564-4660-889a-65724f6e3056
    ovh/type: job
  Ssh Public Keys:      ~
Status:
  State:           QUEUED
  Ip:              ~
  External Ip:     ~
  Info:
    Message: Job submitted
  History:
    STATE      DATE
    QUEUED     20-07-23 16:08:58
  Data Sync:       ~
  Duration:        0s
  Url:             https://c0c0878c-5564-4660-889a-65724f6e3056.job.gra.ai.cloud.ovh.net
  Info Url:        https://ui.gra.ai.cloud.ovh.net/job/c0c0878c-5564-4660-889a-65724f6e3056
  Ssh Url:         ~
  Monitoring Url:  ~
  Volumes:
  - Mount Path:     /workspace/model
    Id:             fbff59c9-abfa-4d7f-ae53-549348e8c53a
    User Volume Id: b51cd2f5-99a0-4cc0-bc32-ce4515ecce6f
  - Mount Path:     /workspace/data
    Id:             2f25d170-5741-459b-919b-fef8d6fc74c4
    User Volume Id: bf7b5c4b-c61e-4d17-b6d8-248de56834b6
```

You can access the execution logs of your job with the CLI:

```bash
ovhai job logs <job id> -f       
```

The output should be similar to this:

```bash
$ ovhai job logs c0c0878c-5564-4660-889a-65724f6e3056 -f

Job is running
2023-10-06T15:23:14Z [job] Ultralytics YOLOv8.0.194 🚀 Python-3.8.18 torch-2.1.0+cu121 CUDA:0 (Tesla V100S-PCIE-32GB, 32501MiB)
2023-10-06T15:23:14Z [job] Setup complete ✅ (60 CPUs, 172.7 GB RAM, 1191.4/3519.5 GB disk)
2023-10-06T15:23:14Z [job] Downloading https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt to 'yolov8n.pt'...
100%|██████████| 6.23M/6.23M [00:00<00:00, 170MB/s]
2023-10-06T15:23:15Z [job] Ultralytics YOLOv8.0.194 🚀 Python-3.8.18 torch-2.1.0+cu121 CUDA:0 (Tesla V100S-PCIE-32GB, 32501MiB)
2023-10-06T15:23:15Z [job] engine/trainer: task=detect, mode=train, model=yolov8n.pt, data=/workspace/data/rock-paper-scissors/data.yaml, epochs=50, patience=50, batch=16, imgsz=640, save=True, save_period=-1, cache=False, device=0, workers=8, project=None, name=None, exist_ok=False, pretrained=True, optimizer=auto, verbose=True, seed=0, deterministic=True, single_cls=False, rect=False, cos_lr=False, close_mosaic=10, resume=False, amp=True, fraction=1.0, profile=False, freeze=None, overlap_mask=True, mask_ratio=4, dropout=0.0, val=True, split=val, save_json=False, save_hybrid=False, conf=None, iou=0.7, max_det=300, half=False, dnn=False, plots=True, source=None, show=False, save_txt=False, save_conf=False, save_crop=False, show_labels=True, show_conf=True, vid_stride=1, stream_buffer=False, line_width=None, visualize=False, augment=False, agnostic_nms=False, classes=None, retina_masks=False, boxes=True, format=torchscript, keras=False, optimize=False, int8=False, dynamic=False, simplify=False, opset=None, workspace=4, nms=False, lr0=0.01, lrf=0.01, momentum=0.937, weight_decay=0.0005, warmup_epochs=3.0, warmup_momentum=0.8, warmup_bias_lr=0.1, box=7.5, cls=0.5, dfl=1.5, pose=12.0, kobj=1.0, label_smoothing=0.0, nbs=64, hsv_h=0.015, hsv_s=0.7, hsv_v=0.4, degrees=0.0, translate=0.1, scale=0.5, shear=0.0, perspective=0.0, flipud=0.0, fliplr=0.5, mosaic=1.0, mixup=0.0, copy_paste=0.0, cfg=None, tracker=botsort.yaml, save_dir=runs/detect/train
...
```

For more explanations about the CLI commands for AI Training, please read this guide: [CLI Reference](/pages/public_cloud/ai_machine_learning/cli_15_commands_reference).

Once you have your model ready, deploy the model to use it. This will be done with the AI Deploy tool.

## Go further

All the source code is available on the [OVHcloud GitHub organization](https://github.com/ovh/ai-training-examples/tree/main/jobs/audio/audio-classification).

To create the application using the trained model, you can follow this tutorial: [Deploy an app for playing "rock paper scissors"](/pages/public_cloud/ai_machine_learning/deploy_tuto_15_rock_paper_scissors).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. 

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
