---
title: CLI - Launch an AI Deploy app
excerpt: Learn how to run an AI Deploy app using the CLI
updated: 2023-06-05
routes:
    canonical: 'https://help.ovhcloud.com/csm/en-gb-public-cloud-ai-cli-deploy-app?id=kb_article_view&sysparm_article=KB0058346'
---

## Objective

This guide covers the submission of [**apps**](/pages/public_cloud/ai_machine_learning/deploy_guide_02_getting_started) through the [**ovhai CLI**](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).
To deploy an app, some parameters are mandatory. Others are optional, depending on your needs. We will show you how each of the parameters works by showing examples.

## Requirements

- A working `ovhai` CLI. See [how to install ovhai CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli)

## Instructions

This documentation is divided into the following parts:

- Deploying an app
- Setting environment variables
- Assigning a name to the app 
- Attaching data
- Attaching compute resources
- Scaling strategy
- Setting tokens and labels
- Making your app public and sharing it
- Changing default access port
- Setting up a health check
- Changing output format

### Deploying an app

If you need any help while submitting a new app, run `ovhai app run --help`.

**Output**:

``` {.console}
Usage: 
    ovhai app run [OPTIONS] [IMAGE] [COMMAND]...

Arguments:
  [IMAGE]       Docker image
  [COMMAND]...  List of command arguments to pass to app. If some app arguments start with '-' or '--' don't forget to add '--' as first argument to avoid interpreting following ones as ovhai parameter. Example: `ovhai app create ubuntu -- bash -c 'echo $(date)'`

Options:
  -e, --env <name=value>                                                                                        Environment variable to be set inside app
      --token <TOKEN>                                                                                           Authentication using Token rather than OAuth
  -p, --default-http-port <DEFAULT_HTTP_PORT>                                                                   Port used as the default one to access HTTP service inside app
      --unsecure-http                                                                                           HTTP services inside job will not require authentication to be accessed from the outside
  -g, --gpu <GPU>                                                                                               Number of GPUs
  -f, --flavor <FLAVOR>                                                                                         the flavor to use, `ovhai capabilities flavor list` to get the whole list
  -c, --cpu <CPU>                                                                                               Number of CPUs (ignored if GPUs is specified)
  -v, --volume <container@alias/prefix:mount_path(:permission)(:cache) or url:mount_path(:permission)(:cache)>  Volumes mounted on the image. `alias` is the data store alias of your data. You can get a list of all available data stores for the object storage by typing `ovhai data store list`. `/prefix` is optional [default: ""]. `:permission` is optional [default: ro] [possible values: ro, rw, rwd]. `:cache` is optional [default: "no-cache"] [possible values: cache, no-cache]
  -n, --name <NAME>                                                                                             Optional name, only informative
  -l, --label <name=value>                                                                                      Optional labels, only informative
  -o, --output <OUTPUT>                                                                                         Command output format [possible values: json, yaml]
      --replicas <REPLICAS>                                                                                     Fixed scaling strategy: Number of replicas (defaults to 1)
      --auto-min-replicas <MIN REPLICAS>                                                                        Automatic scaling strategy: Minimum number of replicas [aliases: min-replicas]
      --auto-max-replicas <MAX REPLICAS>                                                                        Automatic scaling strategy: Maximum number of replicas [aliases: max-replicas]
      --auto-resource-type <TYPE>                                                                               Automatic scaling strategy: Resource type to base the automatic scaling on [aliases: resource-type] [possible values: CPU, RAM]
      --auto-resource-usage-threshold <THRESHOLD>                                                               Automatic scaling strategy: Average resource usage threshold (in percents) at which the number of replicas will be automatically increased [aliases: resource-threshold]
      --probe-path <PATH>                                                                                       Path to access (defaults to /)
      --probe-port <PORT>                                                                                       Number of the port to access (defaults to --default-http-port)
      --no-color                                                                                                Remove colors from output
  -h, --help                                                                                                    Print help (see more with '--help')
```

The `IMAGE` argument is mandatory. Indeed, you need to specify a Docker image that you either built yourself or found freely available on a public repository such as [DockerHub](https://hub.docker.com/).

> [!primary]
>
> More information about adding and managing public & private registries can be found [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry).
>

**To launch a basic app, use the following command**:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name>
```

As indicated in the help command, many options can be passed to this command. Let's understand their usefulness and how to use them.

### Setting environment variables

You can tweak the behavior of your Docker image without having to rebuild it every time (like updating the input source of your model (camera, image, video, file, ...)) by using the `--env` flag. Using this, you can simply set environment variables directly in your app. 

The values of these `--env` flags will take precedence over those specified in your Dockerfile and in your Python scripts, provided that the python variable is only initialized if it does not exist, as follows:

``` {.console}
if not os.environ["ENV_VAR"]:
    os.environ['ENV_VAR'] = 'value'
```

As explained, this variable can be modified when the app is launched by using the `--env` flag:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --env ENV_VAR=new_val
```

### Assigning a name to the app 

In order to manage your apps more easily, and avoid ending up with random names, we recommend that you give your app a name. To do this, use the `--name` parameter in the following way:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --name my_first_app
```

### Attaching data

This step assumes that you either have data in your OVHcloud Object Storage that you wish to use within your deployed app, or that you need to save the data generated by your app into the Object Storage.
To learn more about data, volumes and permission, check out the [data](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) page.

You can attach as many volumes as you want to your job with various options.
Let us go through those options and outline a few good practices with volume mounts.

The `--volume` flag is used to attach a container as a volume to the job.
The volume description sets the option for the volume and synchronisation process `<container@alias/prefix:mount_path(:permission)(:cache)>`:

- `container` the name of the container, in OVHcloud Object Storage, to synchronise
- `alias` is the data store alias of your data. A list of all available alias can be obtained by running `ovhai data store list`
- `prefix` (optional) objects in the container are filtered on the basis of this prefix, only matching objects are synced
- `mount_path` the location in the job where the synced data is mounted
- `permission` the permission rights on the mounted data. Available rights are **read only (ro)**, **read write (rw)** or **read write delete (rwd)**. This is optional. 
- `cache` whether the synced data should be added to the project cache. Available options are either `cache` or `no-cache`. Data in the cache can be used by other apps without additional synchronisation. To benefit from the cache, the new apps also need to mount the data with the cache option. This one is also optional. 

**Example:**

Let's assume you have a team of datascientists working on the same input dataset but each running their own experiment.
In this case, a good practice is to mount the input dataset with **ro** permission and cache activated for each experiment, the input data is synced only once and never synced back.
In addition, each of the experiments will yield specific results that should be stored in a dedicated container. For each job we would then mount an output container with **rw** permission and no cache. If a container does not exist yet in the object storage, it is created during the data synchronization.

Assuming our data is located in the Gravelines (GRA) Object Storage in a container named `dataset` the command would now be:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --volume dataset@GRA:/workspace/dataset:ro:cache \
    --volume output@GRA:/workspace/output:rw \
```

> [!primary]
> Data in the cache is not persisted indefinitely. After a period of inactivity, the data is emptied from the cache. Inactivity is defined as having no running apps using the data in cache.

### Attaching compute resources

First, you need to tweak the resources you need for your app depending on your model's task and your expected workload. To do this, you can use `--cpu` or `--gpu` flags.

Flags `--cpu` and `--gpu` are exclusive. If GPU resources are specified then the CPU flag is ignored and vice versa.

You can also use the `--flavor` flag to specify which kind of resources you want to use. You can check the full list by running `ovhai capabilities flavor list`. 
If this flag is not specified, the default CPU/GPU model for the cluster on which you submit your app will be used.

For example, here is how to launch an app running on 10 CPUs whose id is `ai1-1-cpu`:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --cpu 10 \
    --flavor ai1-1-cpu
```

> [!primary]
> - If no resource flag is specified (`--cpu` or `--gpu`), the job will run with one unit of the default GPU model.
> - If both CPU and GPU flags are provided, only the GPU one is considered

### Scaling strategy

For your app, you can either choose **static** or **automatic scaling**. 

> [!warning]
> 
> If you do not specify a scaling strategy, the static method will be used with one replica.
>

For more information about **static and automatic scaling strategies**, please refer to this [documentation](/pages/public_cloud/ai_machine_learning/deploy_guide_04_scaling_strategies).

**When to choose static scaling?**

The **static scaling** strategy allows you to choose the number of replicas on which the app will be deployed. For this method, the minimum number of replicas is **1** and the maximum is **10**. 

- Static scaling can be used if you want to have fixed costs.
- This scaling strategy is also useful when your consumption or inference load are fixed.

Here is an example to launch your app on a static scaling strategy, with 2 replicas:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --replicas 2
```

**When to choose autoscaling?**

With the **autoscaling strategy**, it is possible to choose both the minimum number of replicas (1 by default) and the maximum number of replicas. **High availability** will measure the average resource usage across its replicas and add instances if this average exceeds the specified average usage percentage threshold. Conversely, it will remove instances when this average resource utilisation falls below the threshold. The monitored metric can either be `CPU` or `RAM` and the threshold is a percentage (integer between 1 and 100).

- You can use autoscaling if you have irregular or sawtooth inference loads.

Here is an example to launch your app on an autoscaling strategy, which uses between 2 to 12 replicas according to a monitoring at 60% of the RAM:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --auto-min-replicas 1 \
    --auto-max-replicas 12 \
    --auto-resource-type RAM \
    --auto-resource-usage-threshold 60
```

### Setting tokens and labels

Using tokens can help you share your app securely. More information about creating, managing and using tokens can be found [here](/pages/public_cloud/ai_machine_learning/deploy_guide_03_tokens). 

To add a token to your app, you can run:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --token <TOKEN> 
```

If your token was created with a label selector, it can be interesting to assign a label to your app. For that, add the parameter:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --label <name=value>
```

### Making your app public and sharing it

If you want your app to be reachable without any authentication, add the `--unsecure-http` parameter:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --unsecure-http 
```

You can then share the access url of your app with anybody. No more authentication will be required to access it.

### Changing the default access port

When an app is running, an `app_url` is associated to it that allows you to access any service exposed in your app. By default, the exposed port for this url is the `8080`.

However, if you use a framework that uses another port, it will be interesting to override the one used by default. For example, the port `8501` is the default port used by the streamlit app. We will therefore use:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --name streamlit_app \
    --default-http-port 8501
```

This will indicate that the port to reach on the app URL is the `8501`.

### Setting up a health check

To ensure the health and readiness of the Docker image that runs your Python app, you could be interested in configuring a probe path and a probe port. Indeed, these settings allow you to perform health checks effectively, which plays a crucial role in determining the availability and status of your app. To perform these health checks, we will use probes.

`--probe-path`: By setting a probe path, you define a specific URL endpoint within your app that can be accessed to determine its health. This endpoint should be designed to respond with an appropriate HTTP status code, indicating whether the container is healthy or not. For example, a successful response with an HTTP status code of 200 signifies a healthy state, while any other status code indicates an issue.

`--probe-port`: The probe port specifies the network port on which the app listens for incoming requests. It allows to establish a connection with the container and perform the health check. 

To set up your health check, you can use the following command:

``` {.console}
ovhai app run <registry-address>/<image-identifier>:<tag-name> \
    --probe-path <PATH> \
    --probe-port <PORT> 
```

### Changing output format

When you use the `ovhai app run` command, you are given a lot of information (app id, app link, app resources, ...). You can display all this information in a specific format, such as `.json` or `.yaml` by using the `--output` parameter. Here is an example with a `json` format:

``` {.console}
ovhai job run <registry-address>/<image-identifier>:<tag-name> \
    --output json
```

## Going further

To know more about the CLI and available commands to interact with your job check out the [overview of `ovhai`](/pages/public_cloud/ai_machine_learning/cli_15_commands_reference).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
