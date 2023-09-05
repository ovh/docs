---
title: FAQ - AI Tools
updated: 2023-09-05
---

## Objective

Here are the most frequently asked questions about `ovhai` CLI & AI Tools.

> [!faq]
> >
> **CLI**
> >
> I would like to perform an action with the ovhai CLI, but I do not know the associated command. What can I do?
> > You can use the `-h` or `--help` flag after the command. This will provide you with a list of possible commands and their usage instructions (available options, arguments, …). The basic command is: `ovhai -h` 
> > 
> **All AI Tools (AI Notebooks, AI Training, AI Deploy)**
> >
> What flavors are available?
> > Currently, the available hardware for AI Tools is:
> > - `CPU`: Intel CPU vCores
> > - `GPU`:  NVIDIA V100S
> >
> > You can get the list of available flavors using the ovhai CLI and the following command: `ovhai capabilities flavor list` 
> >
> > New flavors will soon be available such as NVIDIA `A100`, `H100` and also `L4` and `L40`.
> > 
> How many resources can I use when working with OVHcloud AI Tools?
> > For your information, the current limits are:
> > - `CPU`: 12 per notebook.
> > - `GPU`: 4 per notebook.
> >
> > - Each Public Cloud project grants a customer by default a maximum of 4 GPUs used simultaneously. Reach out to our support if you need to increase this limitation.
> > 
> Why did my notebook, job or app fail?
> > For more information about the failure of an AI task, start with retrieving the **task** ID with this command: `ovhai <task> list`. Make sure to replace task by either `notebook`, `job`, or `app`.
> >
> > Once you have your **task** ID, simply retrieve its information with: `ovhai <task> get <task-id>`
> > You will see, among other information, the task's state and if the task has run its exit code.
> > There is also the `stateInfo` in which you can evaluate the error message, i.e. whether a command failed or the Docker image was not found.
> >
> > For more information you should consult the **task** logs: `ovhai <task> logs <task-id>`
> >
> How long can I use my AI tool? 
> > There is no duration limitation on AI Notebooks, AI Training and AI Deploy executions.
> >
> Do AI Tools provide local storage?
> > Each tool provides local storage. However, it is limited and not the recommended way to handle data. Indeed, if you delete your notebook, job or app, all files contained in this local storage will be lost. 
> >
> How to use attached storage?
> > See this [OVHcloud documentation](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) on data for more information.
> >
> Is there an expected format for data to upload?
> > You can upload any file or directory to the OVHcloud Object Storage without any format constraints.
> >
> Why can't I see my data volume in the container?
> > Depending on how you build your container, make sure that the mapping between your data (/workspace/mybucket for instance) is not already existing within your image.
> >
> How to fix file access permission errors?
> > Within a job, code and users have no root/sudo privileges. To have access to your files, make sure to mount your **data** object at a location available for non-root users. For preset images provided by OVHcloud it is recommended that the destination path is of the form `/workspace/<your-path>` to avoid such errors.
> >
> Do I need to master Docker to use AI Training?
> > It is not necessary to master Docker to use AI Training. A set of ready-to-use images is available on the [`ovhcom` organization of Dockerhub](https://hub.docker.com/u/ovhcom) to get you started. All images prefixed by `ai-training` are images to be used with our AI Tools. They usually include classic tools such as JupyterLab or VScode along with some Machine Learning framework such as PyTorch.
> >
> > However, jobs in **AI Training** are basically Docker containers, so a practical understanding of Docker is required to fully benefit from the service.
> >
> Can I use my own Docker image with AI Training & Deploy? How?
> > While AI Notebooks does not offer this possibility, it is possible with AI Training & AI Deploy Your image needs to be either on the shared registry, a private managed registry, DockerHub, or GitHub packages. You will find more information [here](/pages/public_cloud/ai_machine_learning/gi_07_manage_registry).
> >
> In which regions is the private managed registry available?
> > Private registry is currently available in Western Europe (GRA region).
> >
> How to build my custom Docker image?
> > Essential information about building a custom Docker image can be found [here](/pages/public_cloud/ai_machine_learning/training_tuto_02_build_custom_image). Advanced information can be found [here](https://docs.docker.com/engine/reference/builder/).
> >  
> 
> Why is my image not executed with the expected linux user?
> > For security purposes, we impersonate the linux default user which is ovh and group ovh with ids `42420:42420`.
> > Building a docker with a directory associated to this user and group should help you.
> > You could use the following command to copy a local folder with the `ovh:ovh` rights.
> >
> > `COPY --chown=42420:42420 my_local_folder my_folder_embeded_in_image`
> >
> My job or my app is blocked in `QUEUED` or `PENDING` state, what does it mean?
> > Your AI Task might be in this state for 2 main reasons:
> >
> > * You are using an external registry and the image is taking longer to pull. Potential resolution: wait a bit longer for the cluster to pull the external image or recompile the image on an [OVHcloud managed Registry](https://www.ovhcloud.com/en-gb/public-cloud/managed-private-registry/).
> > * The cluster is waiting for resources to be available. Potential resolution: try to launch the job with less resources or wait for resources to be available.
> >
> Do AI tools support Public and Private networking?
> > - Public networking can be used for all the AI Tools.
> > - Private networking (OVHcloud vRack) is not supported.
> >
> What are the available ports to public network?
> > Each notebook has a public URL, by default this URL accesses the port 8080 of the notebook. The default port cannot be changed.
> >
> > Concerning jobs and apps, you can map them to only one port. Each of these has a public URL, by default this URL accesses the port 8080 of your job or app. This default port can be configured when you submit a new AI task. 
> >
> > You can also access other ports by appending them to the URL. For example, Job URL for accessing the default port (starting with the job's ID) is `https://00000000-0000-0000-0000-000000000000.job.gra.ai.cloud.ovh.net`
> >
> > Job URL for accessing the port 9000 (starting with the job's ID followed by the port number): `https://00000000-0000-0000-0000-000000000000-9000.job.gra.ai.cloud.ovh.net`
> >
> Is it possible to utilize TensorBoard within my AI Tool?
> > Yes, you can use the TensorBoard visualization tool. To find out how with AI Notebooks, check this [tutorial](https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/tensorboard/notebook_tutorial_tensorboard.ipynb). For AI Training, refer to this [documentation](/pages/public_cloud/ai_machine_learning/training_tuto_05_tensorboard).
> >
> Is it possible to utilize Weights & Biases within my AI Tool?
> > Yes, you can use Weights & Biases dashboard inside your notebook. To find out how with AI Notebooks, check this [tutorial]( https://github.com/ovh/ai-training-examples/blob/main/notebooks/computer-vision/image-classification/tensorflow/weights-and-biases/notebook_Weights_and_Biases_MNIST.ipynb). For AI Training, refer to this [documentation](/pages/public_cloud/ai_machine_learning/training_tuto_06_models_comparaison_weights_and_biases).
> >
> Why can't I access my UI?
> > Make sure your job is in a « running » state and that your UI is exposed either on the default port or that you specified the correct port in your URL (see [public ports](/pages/public_cloud/ai_machine_learning/training_guide_01_capabilities#available-ports-to-public-network)).
> > Only the HTTP layer is accessible and check that your UI is correctly binded to the network interfaces (e.g. with tensoboard user the `--bind-all` flag).
> >
> **Specific to AI Notebooks**
> >
> How to start a notebook?
> > All steps for starting and working on AI Notebooks are described [here](/pages/public_cloud/ai_machine_learning/training_guide_06_howto_notebooks).
> >
> What code editors are available? 
> > Currently, you can choose between three live-code editors to launch and edit your notebook:
> > -	VSCode
> > -	JupyterLab
> > -	JupyterLab collaborative
> > You can get the list of available editors using the ovhai CLI and the following command: 
`ovhai capabilities editor list` 
> > You cannot install your own code editor on AI Notebooks.
> >
> What machine learning frameworks are available? 
> > AI Notebooks comes with pre-installed AI environments such as Miniconda, PyTorch, Skicit-Learn, Tensorflow and and many others! 
> > Complete list can be accessed by using the ovhai CLI and the following command: `ovhai framework list`
> >
> There are missing libraries in my framework. How can I customize my environment?  
> > Each notebook environment can be customized directly with `pip` or `conda` (we support almost any package and library). However, you are not administrator (root), so you cannot install linux packages (such as apt-get).
> >
> Can I use my own Docker image with AI notebooks? 
> > AI Notebooks does not allow the use of custom Docker images. In case you need a very specific package or framework, you can bring your custom Docker images with OVHcloud AI Training.
> >
> How is the product billed? 
> > You will have to pay for the resources you use. Check [this documentation](/pages/public_cloud/ai_machine_learning/notebook_guide_billing_concept) for detailed examples.
> >
> For more information about AI Notebooks, please check the [Troubleshooting documentation](/pages/public_cloud/ai_machine_learning/notebook_guide_troubleshooting).
> >
> **Specific to AI Training**
> >
> How to start an AI Training job?
> > All steps for starting and working on AI Training are described [here](/pages/public_cloud/ai_machine_learning/training_guide_02_howto_submit_job).
> >
> Is it possible to update a running job?
> > It is not possible to update a running job. If you wish to change the specification of a **job**, you need to interrupt the current one and recreate it.
> >
> How is the product billed? 
> > During its lifetime the job should transit between the following statuses (`QUEUED`, `INITIALIZING`, `PENDING`, `RUNNING`, `INTERRUPTING`, `FINALIZING`, `DONE`). 
> > Billing starts with the `RUNNING` step and ends when the `FINALIZING` step starts. Jobs that do not reach the `RUNNING` state will not be billed.
> >
> >  The price will depend on the compute resources you use (CPUs and GPUs) and their running time. Pricing examples can be found [here](/pages/public_cloud/ai_machine_learning/training_guide_08_billing_concept).
> >
> For more information about AI Training, please check the [Troubleshooting documentation](/pages/public_cloud/ai_machine_learning/training_guide_07_troubleshooting).
> >
> **Specific to AI Deploy**
> >
> How to start an AI Deploy app?
> > All steps for starting and working on AI Deploy are described [here](/pages/public_cloud/ai_machine_learning/deploy_guide_02_getting_started).
> >
> Is it possible to update the image used by my app?
> > To make your app use the updated version of a Docker image, follow [this guide](/pages/public_cloud/ai_machine_learning/deploy_guide_08_update_custom_docker_image).
> >
> How is the product billed? 
> > AI Deploy apps are a pay-per-use solution. You only pay for the resources consumption, also known as available replicas, during a period of time (during the RUNNING and SCALING phases of your apps). We do not provide a pay-per-call pricing so far. Pricing examples can be found [here](/pages/public_cloud/ai_machine_learning/deploy_guide_06_billing_concept).
> >
> What are the scaling strategies?
> > When using AI Deploy, you can choose between two scaling strategies: static scaling and autoscaling.
> >
> > The static scaling strategy allows you to choose the number of replicas (1 to 10) on which the app will be deployed.
> >
> > With the autoscaling strategy, it is possible to choose both the minimum number of replicas (1 by default) and the maximum number of replicas.
> >
> For more information about AI Deploy, please check the [Troubleshooting documentation](/pages/public_cloud/ai_machine_learning/deploy_guide_07_troubleshooting).
> >

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
