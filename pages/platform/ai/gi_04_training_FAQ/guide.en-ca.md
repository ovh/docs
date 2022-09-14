---
title: FAQ AI training
slug: faq
section: General information
order: 106
---

**Last updated 20th April, 2021.**

## Objective

Here are the most frequently asked questions about AI Training.

> [!faq]
> In which regions is the Private Registry solution available?
> > Private registry is currently available in Western Europe (GRA region).
> >
> Do I need to master Docker to use AI Training?
> > It is not necessary to master Docker to use AI Training. A set of ready-to-use images is available on the [`ovhcom` organization of Dockerhub](https://hub.docker.com/u/ovhcom) to get you started. All images prefixed by `ai-training` are images to be used with this service. They usually include classic tools such as JupyterLab or VScode along with some Machine Learning framework such as PyTorch.
> >
> > However, jobs in **AI Training** are basically Docker containers, so a practical understanding of Docker is required to fully benefit from the service.
> >
> Is there an expected format for data to upload?
> > You can upload any file or directory to the OVHcloud Object Storage without any format constraints.
> >
> Is it possible to update a running job?
> > It is not possible to update a running job. If you wish to change the specification of a **job**, you need to interrupt the current one and recreate it.
> >
> How to fix file access permission errors?
> > Within a job, code and users have no root/sudo privileges. To have access to your files, make sure to mount your **data** object at a location available for non-root users. For preset images provided by OVHcloud it is recommended that the destination path is of the form `/workspace/<your-path>` to avoid such errors.
> >
> Why did my job fail?
> > For more information about the failure of a job, start with retrieving the **job** ID with this command: `ovhai job list`
> >
> > Once you have your **job** ID, simply retrieve its information with: `ovhai job get <job-id>`
> > You will see, among other information, the job's state and if the job has run its exit code.
> > There is also the `stateInfo` in which you can evaluate the error message, i.e. whether a command failed or the Docker image was not found.
> >
> > For more information you should consult the **job** logs: `ovhai job logs <job-id>`
> >
> My job is in « queued » or « pending » state, what does it mean ?
> > Your job might be in this state for 2 main reasons :
> >
> > * You are using an external registry and the image is taking longer to pull. Potential resolution: wait a bit longer for the cluster to pull the external image or recompile the image on an [OVHcloud managed Registry](https://www.ovhcloud.com/en-ca/public-cloud/managed-private-registry/).
> > * The cluster is waiting for resources to be available. Potential resolution: try to launch the job with less resources or wait for resources to be available.
> >
> Why can't I can't see my data volume in the container ?
> > Depending on how you build your container, make sure that the mapping between your data (/workspace/mybucket for instance) is not already existing within your image.
> >
> Why can't I can't access my UI ?
> > Make sure your job is in a « running » state and that your UI is exposed either on the default port or that you specified the correct port in your URL (see [public ports](https://docs.ovh.com/gb/en/publiccloud/ai/training/capabilities/#available-ports-to-public-network)).
> > Only the HTTP layer is accessible and check that your UI is correctly binded to the network interfaces (e.g. with tensoboard user the `--bind-all` flag).
> >
> Why is the image not executed with the expected linux user ?
> > For security purposes, we impersonate the linux default user which is ovh and group ovh with ids `42420:42420`.
> > Building a docker with a directory associated to this user and group should help you.
> > You could use the following command to copy a local folder with the `ovh:ovh` rights.
> >
> > `COPY --chown=42420:42420 my_local_folder my_folder_embeded_in_image`
> >
> How to start a notebook ?
> > All steps for starting and working on notebooks are described [here](https://docs.ovh.com/ca/en/publiccloud/ai/training/start-use-notebooks)
> >
> How to add python library in a notebook ?
> > You can use `pip` command inside console of notebooks to install libraries as long as the installation process doesn't require root access. If a specific library require root access you will have instead to build your own job image with all your libraries and use it instead of provided ones.
> >
> How to build my first Datascience container ?
> > Essential information about building custom Docker container can be found [here](https://docs.ovh.com/ca/en/publiccloud/ai/training/build-use-custom-image). Advanced information can be found [here](https://docs.docker.com/engine/reference/builder/)
> >

## Feedback 

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
