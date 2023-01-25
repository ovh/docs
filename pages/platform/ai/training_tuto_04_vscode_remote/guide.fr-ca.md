---
title: AI Training - Tutoriel - Se connecter à VS Code à distance (EN)
slug: training/vscode-remote-code
excerpt: Comment configurer VS Code pour utiliser AI Training à distance
section: AI Training - Tutoriels
order: 04
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/training/vscode-remote-code/'
---

**Last updated 1st September, 2022.**

## Objective

This tutorial covers the process of starting a job using a Visual Studio Code Remote via SSH.

## Requirements

-   an **AI Training project** created inside a **Public Cloud** project
-   a [user for AI Training](https://docs.ovh.com/ca/fr/publiccloud/ai/users)
-   installing the [OVHcloud AI CLI](https://docs.ovh.com/ca/fr/publiccloud/ai/cli/install-client)

> [!warning]
> The deployed image needs to contain the `bash` binary and a glibc-based Linux (Ubuntu / Debian)

## Installation

1.  Install an [OpenSSH compatible SSH client](https://code.visualstudio.com/docs/remote/troubleshooting#_installing-a-supported-ssh-client) if one is not already present.
2.  Install [Visual Studio Code](https://code.visualstudio.com/).
3.  Install the [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

## Start a job with the SSH feature

We will launch a job with the CLI, just choose the number of GPUs (`<nb-gpus>`) to use on your job and use the following command:

``` {.bash}
ovhai job run --gpu <nb-gpus> -s ~/.ssh/id_ed25519.pub ovhcom/ai-training-tensorflow:2.3.0
```

Once the job is `Running`, you can see the `sshUrl` with *job get*:

``` {.bash}
ovhai job get <job-id>
```

## Configure VSCode Remote Development

Verify you can connect to the SSH host by running the following command from a terminal / PowerShell window replacing user\@hostname accordingly:

``` {.bash}
ssh <job-id>@gra.training.ai.cloud.ovh.net

Welcome to OVHcloud AI Training Jobs SSH
job-0d916855-1cd4-4b66-8803-b4782bc13902:~$
```

Click on the Remote Explorer Button.

![image](images/vscode-1.png){.thumbnail}

Then click on the `+` button to add a SSH server.

![image](images/vscode-2.png){.thumbnail}

Then click on the window icon near your server in the list.

![image](images/vscode-3.png){.thumbnail}

Enjoy.

![image](images/vscode-4.png){.thumbnail}

## Go further

- Check how to run Tensorflow code with GPUs [here](https://docs.ovh.com/ca/fr/publiccloud/ai/training/tensorflow-gpu-examples/).
- You can compare AI models based on resource consumption, accuracy and training time. Refer to this [tutorial](https://docs.ovh.com/ca/fr/publiccloud/ai/training/tuto-models-comparaison-weights-and-biases/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
