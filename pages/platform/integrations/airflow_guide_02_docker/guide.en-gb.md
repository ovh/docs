---
title: Installation - Run AirFlow from a Docker instance
slug: apache-airflow/installation-docker
excerpt: How to run AirFlow easily from an OVHcloud Docker instance
section: Apache AirFlow
order: 02
updated: 2023-03-27
---

**Last updated 27th March, 2023.**

## Objective

The purpose of this guide is to see how it is possible to run [AirFlow](https://airflow.apache.org/) with [Docker](https://www.docker.com/) easily.

For this you will use the [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) instances of OVHcloud.

You will see that it is a very simple way to launch AirFlow and keep it running.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/)

## Instructions

This guide is divided into several steps:
1. Launch a Docker instance from OVHcloud Public Cloud
2. Set up the environment for AirFlow
3. Initialize the environment
4. Run AirFlow with Docker
5. Access to AirFlow webserver

### Launch a Docker instance from OVHcloud Public Cloud

First of all, access the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and go to your [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/). Then select `Instances` in the `Compute` tab.

You are now able to create a new instance!

#### Create a new instance with Docker

Start by selecting the model you want:

![image](images/create-docker-instance.png){.thumbnail}

You will then have to choose the region where your instance will be hosted and select the **Docker image** in step 3: `Select an image`.

![image](images/select-docker-image.png){.thumbnail}

> [!warning]
>
> Don't forget to add your **SSH key**. For more information on this subject, please refer to this [documentation](https://docs.ovh.com/gb/en/public-cloud/public-cloud-first-steps/).
>

Finish creating your instance and wait for it to start. You can now see the following information:

![image](images/overview-docker-instance.png){.thumbnail}

> [!primary]
>
> To learn more about how to **manage your Public Cloud instances**, refer to this [guide](https://docs.ovh.com/gb/en/public-cloud/get-started-with-a-public-cloud-instance/).
>

You can now copy the **Login information** `ssh debian@x.x.x.x` in your terminal and enter your passphrase.

#### Check Docker availability

Now that you are connected to your instance, you can check the availability of `docker` and `docker compose`.

First, run `docker` command in the terminal.

![image](images/connexion-docker-instance.png){.thumbnail}

Then, run `docker compose`.

![image](images/check-docker-compose.png){.thumbnail}

Everything is working properly, it is time to set up your environment!

### Set up the environment for AirFlow

To prepare your environment, you will first create a dedicated directory. You will then rely on this [AirFlow documentation](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#) for the deployment.

#### Create a dedicated directory for Airflow

Go to the root and run the following commands:

```console
pwd
```

You should have this result:

```console
/home/debian
```

Then, create a folder for AirFlow `airflow-folder` and access to this directory:

```console
mkdir airflow-folder
cd airflow-folder
```

#### Fetch docker-compose.yaml file

To deploy AirFlow on **Docker Compose**, you should fetch `docker-compose.yaml` file in your .

```console
curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.5.2/docker-compose.yaml'
```

You should see `docker-compose.yaml` file in your `airflow-folder`.

For more information about the content of this file, check this [documentation](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#fetching-docker-compose-yaml).

Now you have to initialize your environment.

### Initialize the environment

Before starting AirFlow for the first time, you have to set up the environment. You will need to create the directories and initialize the database.

#### Setting the right Airflow user

Some directories are mounted in the container, it means that the contents are synchronized between your VM and the container.

- `./dags` to put your files DAG files.
- `./logs` to save the logs from task execution and scheduler.
- `./plugins` to add your custom plugins here.

To begin with, set the AirFlow user rights:

```console
mkdir -p ./dags ./logs ./plugins
echo -e "AIRFLOW_UID=$(id -u)" > .env
```

#### Initialize the database

Now, you need to run database migrations and create the first user account. Run the following command:

```console
docker compose up airflow-init
```

*This operation may take a few minutes...*

Once the initialization is completed, you should see a similar message:

```console
airflow-folder-airflow-init-1  | User "airflow" created with role "Admin"
airflow-folder-airflow-init-1  | 2.5.2
airflow-folder-airflow-init-1 exited with code 0
```

An AirFlow account has been created with the following credentials:

- user: `airflow`
- password: `airflow`


### Run AirFlow with Docker

You can start all services with the `docker compose` command:

> [!primary]
>
> You can use the `-d` (**detached mode**) in your command to run containers in the background.
>

```console
docker compose up -d
```

You should see a similar display:

```console
[+] Running 7/7
 ⠿ Container airflow-folder-redis-1                Healthy                12.1s
 ⠿ Container airflow-folder-postgres-1             Healthy                12.1s
 ⠿ Container airflow-folder-airflow-init-1         Exited                 32.1s
 ⠿ Container airflow-folder-airflow-worker-1       Started                32.8s
 ⠿ Container airflow-folder-airflow-webserver-1    Started                32.9s
 ⠿ Container airflow-folder-airflow-triggerer-1    Started                32.7s
 ⠿ Container airflow-folder-airflow-scheduler-1    Started                32.9s
```

In the same terminal, you can check the containers status and make sure that no containers are in **unhealthy** status.

```console
docker ps
```

The output should look like this:

```console
CONTAINER ID   IMAGE                  COMMAND                  CREATED         STATUS                             PORTS                                       NAMES
3b96788e12dd   apache/airflow:2.5.2   "/usr/bin/dumb-init …"   7 minutes ago   Up 13 seconds (health: starting)   8080/tcp                                    airflow-folder-airflow-triggerer-1
f1ab964d853a   apache/airflow:2.5.2   "/usr/bin/dumb-init …"   7 minutes ago   Up 13 seconds (health: starting)   8080/tcp                                    airflow-folder-airflow-worker-1
6ea5b93d0612   apache/airflow:2.5.2   "/usr/bin/dumb-init …"   7 minutes ago   Up 13 seconds (health: starting)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   airflow-folder-airflow-webserver-1
032c3d265b3e   apache/airflow:2.5.2   "/usr/bin/dumb-init …"   7 minutes ago   Up 13 seconds (health: starting)   8080/tcp                                    airflow-folder-airflow-scheduler-1
f9ab16d13786   postgres:13            "docker-entrypoint.s…"   9 minutes ago   Up 45 seconds (healthy)            5432/tcp                                    airflow-folder-postgres-1
8b3359a1d1cd   redis:latest           "docker-entrypoint.s…"   9 minutes ago   Up 45 seconds (healthy)            6379/tcp                                    airflow-folder-redis-1
```

Your **AirFlow webserver** should now be running.

### Access to AirFlow Webserver

To access AirFlow webserver, copy the IPv4 from the instance dashboard and open a new tab in your web browser.

 You should access the webserver through the following address: `<IPv4>:8080` or `x.x.x.x:8080`.

Here is the page you will see:

![image](images/airflow-webserver-login.png){.thumbnail}

#### Login

Login with the created credentials:

- Username: `airflow`
- Password: `airflow`

![image](images/airflow-webserver-credentials.png){.thumbnail}

#### Test the DAGs examples

You should now see the examples of **AirFlow DAGs** appearing. Feel free to test them!

![image](images/airflow-example-dags.png){.thumbnail}

To go further and create **your own DAGs**, you can follow the following tutorials.

## Go further

- How to create your first DAG to trigger a "Hello World" AI Training job? Find more information [here](PUT THE LINK_TUTO_1).
- Do you want to know how to train a ML model inside an AI Training job with Apache Airflow? Refer to this [documentation](PUT THE_LINK_TUTO_2).

## Feedback

Please feel free to send us your questions, feedback and suggestions to help our team improve the service on the OVHcloud [Discord server](https://discord.com/invite/KbrKSEettv)!
