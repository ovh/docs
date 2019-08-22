---
title: 'Preparing an environment for using the OpenStack API'
slug: prepare_the_environment_for_using_the_openstack_api
excerpt: 'Install the OpenStack environment to manage your instances via the API'
section: 'Via command line clients'
---

**Last updated 1st July 2019**

## Objective

You can manage Public Cloud services using commands sent from the system console, once you have downloaded and installed OpenStack tools.

With the OpenStack API, you can automate your management by generating scripts. The OpenStack Nova client can be used to manage instances and disk space. With the OpenStack Glance client, you can manage images and backups, while the Swift client can be used to manage object storage space.

**Find out how to install these OpenStack tools.**

## Requirements

- **root** access to the environment you want to configure

## Instructions

### On Debian

Open the terminal, and connect to the environment you want to prepare via SSH.

Update the packet cache using the `apt-get update` command:

```sh
apt-get update
```

Use the command below to install the Nova client (compute application), Glance (image service) and Swift:

```sh
apt-get install python-openstackclient python-novaclient -y
```

After you have completed this step, we recommend creating a special user without root access.

To access the help tools, run the following command:

```sh
openstack --help
nova help
```

> [!primary]
> 
> The documentation for the OpenStack API is available [here](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### On CentOS

Open the terminal, and connect to the environment you want to prepare via SSH.

Update the packet cache using the following command:

```sh
yum update -y
```
Install the rdo-release RPM with the following command:

```sh
yum install -y https://rdoproject.org/repos/rdo-release.rpm
```

Then the OpenStack client:

```sh
yum install -y python-openstackclient
```

And finally, the Nova client:

```sh
yum install -y python-novaclient
```

After you have completed this step, we recommend creating a special user without root access.

To access the help tools, run the following command:

```sh
openstack --help
nova help
```

> [!primary]
> 
> The documentation for the OpenStack API is available [here](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### On Windows

Download and install Python version 2.7.10. You can choose to add the Python programming language automatically to Path, by ticking this option in the installation configuration:

![Automatic installation](images/1_preparation_openstack_environment_windows.png){.thumbnail}

You can also install it yourself. To do this, follow the actions described below:

#### Step 1: Edit the system’s environment variables.

Search for the system’s environment variable settings, and go to “Edit the system environment variables”:

![Environment variable settings](images/2_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 2: Edit the system settings.

Go to the `Advanced`{.action} tab, and click `Environment Variables`{.action} to edit the settings.

![Performance settings](images/3_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 3: Configure the environment variables. 

In the ‘System variables’ section, select ‘New’, attribute the name “PYTHON_HOME”, and add the access path to Python. By default, it will be: ‘C:\\Python27’.

![Add the access path](images/4_edit_system_variables.png){.thumbnail}

#### Step 4: Add the path for the variables.

Once you have added Python, edit the ‘Path’ field in the system variables, and add the following to the end of the path:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Step 5: Restart Windows.

The changes you have made will become effective after the system has been rebooted.

#### Step 6: Install the OpenStack client.

As an administrator, open the program in the command line (CMD), and install the OpenStack client using the following command:

```sh
# pip install python-openstackclient
```

If the operation is completed properly, you will see a summary:

![Automatic installation](images/5_preparation_openstack_environment_windows.png){.thumbnail}

You can check the installation version in the CMD (command line) window that has just opened, by entering ‘python-V’ from any system location.

![Checking](images/6_preparation_openstack_environment_windows.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.