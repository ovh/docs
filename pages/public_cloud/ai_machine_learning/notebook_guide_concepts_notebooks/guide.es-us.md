---
title: AI Notebooks - Notebook concept
excerpt: Learn the concept behind AI Notebooks
updated: 2025-11-17
---

## Definition

An **AI Notebook** is the workload unit submitted to the cluster. **AI notebooks** are managed Jupyter or VSCode notebooks, with prepackaged Machine Learning frameworks linked to computing resources (CPU or GPU) and storage space. They are running within the OVHcloud infrastructure.

Each AI Notebook is linked to a **Public Cloud** project and specifies the following:

- A type and quantity of computing resources
- A code editor
- A preconfigured Machine Learning framework

## Considerations

> [!warning]
>
> An **AI Notebook** runs continuously until manually interrupted by the user, unless it exceeds **7 days of running**. It will then be automatically stopped. You can choose to automatically restart it using the `auto-restart` option (set this parameter to `True`). The notebook will then restart as is.
>

- [Data](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) can be attached to a notebook to serve either/both as input for your notebook (e.g. code) or output (e.g. model weights).
- If you do not customize your resource request, the default requested is 1 GPU (Tesla V100S). Memory is not customizable.
- [Billing](/pages/public_cloud/ai_machine_learning/notebook_guide_billing_concept) for **notebooks** is minute-based and starts from the beginning to the end of the notebook's `RUNNING` status. Each commenced minute is billed completely.
- You can read further on notebook limitations [here](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities).

## Under the hood

**AI Notebooks** are Docker containers created, deployed and maintained by OVHcloud's AI teams.
They include a managed code editor and the Machine Learning framework prepackaged for users according to their needs (computing resources, library versions, etc.).

## Notebook lifecycle

During its lifetime, the notebook will transit between the following states:

> [!primary]
>
> Only the `RUNNING` time of the notebook **is billed**. For more information about notebooks billing, refer to this [documentation](/pages/public_cloud/ai_machine_learning/notebook_guide_billing_concept).
>

- `STARTING`: The notebook is being started and, if any, the remote data is synchronized from the Object Storage. To learn more about data synchronization, please check out the [Data - Concept and best practices](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data#how-it-works) documentation. Then, the system allocates the necessary compute resources (CPUs/GPUs) for your Notebook. Finally, the base framework you have chosen is pulled for use in the notebook.
- `RUNNING`: The notebook is running, you can connect to it using its endpoint and benefit from your compute resources and your attached data.
- `STOPPING`: The notebook is stopping, your compute resources are freed, your work included in your [/workspace](/pages/public_cloud/ai_machine_learning/notebook_guide_workspace) folder is automatically saved, and if remote data is mounted on your notebook, it is synchronized back to the Object Storage if modified and mounted as `RW`, not `RO`.
- `STOPPED`: The notebook ended normally. You can restart it whenever you want or delete it. It will keep the same endpoint.
- `FAILED`: The notebook ended in error, e.g. the process in the notebook finished with a non 0 exit code. For more information, refer to [this section](/pages/public_cloud/ai_machine_learning/notebook_guide_troubleshooting#cli-my-notebook-is-in-failed-status) of our troubleshooting documentation.
- `ERROR`: The notebook ended due to a backend error. You may reach our support.
- `DELETING`: The notebook is being removed. When it is deleted, you will no longer see it, and it will no longer exist. Its internal [/workspace](/pages/public_cloud/ai_machine_learning/notebook_guide_workspace) data will not be deleted automatically after the notebook is deleted. If you are sure you want to delete it, you can find and delete it in the `notebooks_workspace` container of your Object Storage, under the notebook ID directory.

![image](images/notebooks_concept.svg){.thumbnail}

## Go further

- You can check the [OVHcloud documentation on how to create a data container](/pages/storage_and_backup/object_storage/pcs_create_container).
- You can check the [OVHcloud AI Notebooks Getting Started documentation on how to create a new notebook](/pages/public_cloud/ai_machine_learning/notebook_guide_introduction_definition).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)