---
title: FAQ - Produits IA (EN)
updated: 2023-12-14
---

## Objective

Here are the most frequently asked questions about `ovhai` CLI & OVHcloud AI Solutions (AI Notebooks, AI Training, AI Deploy).

> [!faq]
> **ovhai CLI**
> >
> What is the ovhai CLI?
> > The ovhai command line interface (CLI) is a tool provided by OVHcloud that allows users to interact with their AI Solutions (notebooks, jobs, apps, registries, data, ...), directly from the command line. This is the recommended means of interaction with AI Notebooks, AI Training & AI Deploy.
> >
> How to install the ovhai CLI?
> > To install the ovhai CLI, you can follow the installation instructions provided by OVHcloud in the official [ovhai installation documentation](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).
> >
> When I try to use the ovhai CLI, I get a `AI Training error: not authenticated` error.
> > After completing the ovhai CLI installation, remember to connect to your AI Platform user. This will enable you to manage the notebooks, jobs, and apps associated with this user. To log in, run the command `ovhai login` and enter the credentials of your AI Platform user.
> >
> I can't login with the `--token` parameter inside ovhai CLI
> > You will have to use `ovhai login` with your AI Platform user credentials to authenticate yourself. The `--token` parameter has been created for AI Solutions usage (e.g. authentication to an app) and is not intended for your first CLI usage.
> >
> I would like to perform an action with the ovhai CLI, but I do not know the associated command. What can I do?
> > You can use the `-h` or `--help` flag after the command. This will provide you with a list of possible commands and their usage instructions (available options, arguments, …). The basic command is: `ovhai -h`. Additionally, you can refer to the [ovhai CLI cheat sheet](/pages/public_cloud/ai_machine_learning/gi_05_ovhai_cheatsheet) for a comprehensive overview of available commands.
> 
> **AI Solutions (AI Notebooks, AI Training, AI Deploy)**
> >
> When should I use AI Notebooks, AI Training or AI Deploy?
> >
> > Although these products are all dedicated to AI, giving you access to powerful resources and the ability to interact with your data, they each have their own specific use:
> >
> > **Notebooks** are files which contain both computer code (e.g. python) and rich text elements (paragraph, equations, figures, links, etc…).  This is why Notebooks are mainly used for data exploration, studies and comparing solutions. OVHcloud AI Notebooks provides you with managed Jupyter or VSCode notebooks, which come with pre-installed libraries. This way, you do not have to worry about your environment, which will save you some time.
> > 
> > **AI Training** is dedicated to model training. Once your environment has been configured, you can launch a model training session in just a few clicks. As soon as the training is complete, the job will stop automatically. So it is the perfect tool for training your models without having to worry about the bill.
> >
> > **AI Deploy** allows you to deploy your AI applications and models with high availability. If you're looking for a tool to make inference, this is the product you are looking for.
> >
> > For more information on these products, please read the [comparative guide for AI Solutions](/pages/public_cloud/ai_machine_learning/gi_00_ai_comparative-table).
> >
> What flavors are available?
> > Currently, the available hardware for AI Tools is:
> >
> > - `CPU`: Intel CPU vCores
> > - `GPU`:  NVIDIA V100S, NVIDIA A100
> >
> > You can get the list of available flavors using the ovhai CLI and the following command: `ovhai capabilities flavor list`. 
> >
> > New flavors will soon be available such as NVIDIA `H100` and also `L4` and `L40S`.
> > 
> How many resources can I use when working with OVHcloud AI Tools?
> > Each Public Cloud project grants a customer by default a maximum number of GPUs used simultaneously. Reach out to our support if you need to increase this limitation.
> > For your information, the current limits are:
> >
> > - `CPU`: 12 per notebook / job / app
> > - `GPU`: 4 for V100S, and 2 for A100
> >
> Do AI Tools provide local storage?
> > Each tool provides local storage. However, it is limited and not the recommended way to handle data. Indeed, if you delete your notebook, job or app, all files contained in this local storage will be lost. A better practice is to attach [Object Storage containers](/links/public-cloud/object-storage).
> >
> How to attach and use storage?
> > Read this [OVHcloud documentation](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) on data for more information. You can also check the [S3* compatible compliance documentation](/pages/public_cloud/ai_machine_learning/gi_08_s3_compliance) if you are interested in S3* compatible Object Storage buckets.
> >
> Is there an expected format for data to upload?
> > You can upload any file or directory to the OVHcloud Object Storage without any format constraints.
> >
> Why can't I see my data volume in the container?
> > Depending on how you build your container, make sure that the mapping between your data (/workspace/mybucket for instance) is not already existing within your environment.
> >
> How to fix file access permission errors?
> > Within AI Tools, code and users have no root/sudo privileges. To have access to your files, make sure to mount your **data** object at a location available for non-root users. For preset images provided by OVHcloud it is recommended that the destination path is of the form `/workspace/<your-path>` to avoid such errors.
> >
> > However, jobs in **AI Training** and apps in **AI Deploy** are basically Docker containers, so a practical understanding of Docker is required to fully benefit from the service. If you plan to use custom images, you can do the same by adding `RUN chown -R 42420:42420 /workspace` to your Dockerfile.
> >
> Can I use my own Docker image with AI Training & Deploy? How?
> > While AI Notebooks does not offer this possibility, it is possible with AI Training & AI Deploy. Your image needs to be either on the shared registry, a private managed registry, DockerHub, or GitHub packages. You will find more information [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry). Keep in mind that your image must respect the **linux/AMD64** architecture.
> >
> In which regions is the private managed registry available?
> > Private registry is currently available in Western Europe (GRA/DE regions) and North America (BHS/US-EAST-VA regions).
> >
> How to build my custom Docker image?
> > Essential information about building a custom Docker image can be found in the [Build & use custom Docker image](/pages/public_cloud/ai_machine_learning/training_tuto_02_build_custom_image) guide. Advanced information can be found in the [official Docker documentation](https://docs.docker.com/engine/reference/builder/).
> >
> Why is my image not executed with the expected linux user?
> > For security purposes, we impersonate the linux default user which is ovh and group ovh with ids `42420:42420`.
> > Building a docker with a directory associated to this user and group should help you.
> > You could use the following command to copy a local folder with the `ovh:ovh` rights.
> >
> > `COPY --chown=42420:42420 my_local_folder my_folder_embeded_in_image`
> >
> Why did my notebook, job or app fail?
> > Start with retrieving the **task** ID with this command: `ovhai <task> list`. Make sure to replace task by either `notebook`, `job`, or `app`.
> >
> > Once you have your **task** ID, simply retrieve its information with: `ovhai <task> get <task-id>`
> > You will see, among other information, the task's state and if the task has run its exit code.
> > There is also the `stateInfo` in which you can evaluate the error message, i.e. whether a command failed or the Docker image was not found.
> >
> > For more information about the failure of an AI task, you should consult the `Info Url` of your task, or its logs, in the case of a job or an app: `ovhai <task> logs <task-id>` which is very useful to see your prints and error messages.
> >
> My job or my app is blocked in `QUEUED` or `PENDING` state, what does it mean?
> > Your AI Task might be in this state for 2 main reasons:
> >
> > * You are using an external registry and the image is taking longer to pull. Potential resolution: wait a bit longer for the AI Tool to pull the external image or recompile the image on an [OVHcloud managed Registry](/links/public-cloud/managed-private-registry).
> > * The AI Tool is waiting for resources to be available. Potential resolution: try to launch the job with less resources or wait for resources to be available.
> >
> Why can't I access my AI Solution UI?
> > Make sure your AI Task is in a `RUNNING` state and that your UI is exposed either on the default port or that you specified the correct port in your URL (see [public ports](/pages/public_cloud/ai_machine_learning/training_guide_01_capabilities#quotas-per-public-cloud-project)).
> > Only the HTTP layer is accessible and check that your UI is correctly binded to the network interfaces (e.g. with tensorboard user the `--bind-all` flag).
> >
> How can I share my AI Tools publicly, without any authentication?
> > When launching an AI Task through the control panel, make sure to select `Public access` during the `Privacy Settings` step for AI Notebooks & Training, or during the `Configure your app` step for AI Deploy. 
> > If you use the `ovhai CLI`, make sure to use the `--unsecure-http` attribute. 
> > This way, your AI Tool HTTP link will not require authentication to be accessed.
> >
> Do OVHcloud AI Solutions support Public and Private networking?
> >
> > - Public networking can be used for all the AI Tools.
> > - Private networking (OVHcloud vRack) is not supported.
> >
> What are the available ports to public network?
> > Each notebook has a public URL, by default this URL accesses the port 8080 of the notebook. The default port cannot be changed.
> >
> > However, you can access other ports by appending them to the URL. For example, the notebook URL (starting with the notebook's ID, filled with 0 here) for accessing the 8501 port will be https://00000000-0000-0000-0000-000000000000-8501.job.gra.ai.cloud.ovh.net/
> >
> > Concerning jobs and apps, you can map them to only one port. Each of these has a public URL. By default, this URL accesses the port 8080 of your job or app. This default port can be configured when you submit your job or your app.
> >
> > As for AI Notebooks, you can also access other ports by appending them to the URL. For example, your default Job URL, starting with the job's ID and which accesses the default port is `https://00000000-0000-0000-0000-000000000000.job.gra.ai.cloud.ovh.net`. If you want to access the port 9000, you will have to append the port number to your job's URL, after the job's unique ID: `https://00000000-0000-0000-0000-000000000000-9000.job.gra.ai.cloud.ovh.net`
> > 
> > The same applies to AI Deploy apps, where another app port can be accessed even after the app has been launched.
> >
> Do AI solutions allow the use of the gRPC protocol?
> > Although not available with AI Notebooks, you can use gRPC on your AI Training jobs and AI Deploy apps. 
> > To do this, specify a port when you launch your AI Task with the CLI, by using the `--grpc-port <GRPC_PORT>` attribute. You will then get your `gRPC Address` in your task info.
> >
> Is it possible to utilize TensorBoard within my AI Tool?
> > Yes, you can use the TensorBoard visualization tool. To find out how with AI Notebooks, check this [tutorial](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/tensorboard/notebook_tutorial_tensorboard.ipynb). For AI Training, refer to this [documentation](/pages/public_cloud/ai_machine_learning/training_tuto_05_tensorboard).
> >
> Is it possible to utilize Weights & Biases within my AI Tool?
> > Yes, you can use Weights & Biases dashboard inside your notebook. To find out how with AI Notebooks, check this [tutorial]( https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/weights-and-biases/notebook_Weights_and_Biases_MNIST.ipynb). For AI Training, refer to this [documentation](/pages/public_cloud/ai_machine_learning/training_tuto_06_models_comparaison_weights_and_biases).
> >

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

**\***: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
