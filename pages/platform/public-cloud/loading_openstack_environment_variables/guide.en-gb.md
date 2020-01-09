---
title: 'Setting OpenStack environment variables'
slug: set-openstack-environment-variables
excerpt: 'Find out how to set your environment variables to use the OpenStack API'
legacy_guide_number: 1852
section: 'Via the API and command lines'
---

**Last updated 02nd January 2020**

## Objective

By setting OpenStack environment variables on your desktop, you can use the OpenStack API to manage your infrastructure.


## Requirements
- an OpenStack user account (please refer to [our guide on this](https://docs.ovh.com/gb/en/public-cloud/configure_user_access_to_horizon/#create-an-openstack-user-account))
- OpenStack installed on your system (please refer to [our guide on this](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/))

## Instructions

### Step 1: Retrieve the variables.

To retrieve your environment variables, you can download the OpenRC file from the OpenStack user account you have created.

To do this, go to `Users & Roles`{.action}, click on the `...`{.action} to the right of your user, then select `Download OpenStack's RC file`{.action}.

![openstack-variables](images/pciopenstackvariables1.png){.thumbnail}

An OpenRC file corresponds to a specific user and zone. You cannot manage multiple zones in the same file.

### Step 2: Set the variables.

#### **On Linux**

* Open a terminal, or connect via the user who will be making the OpenStack API calls.
* Load the file’s contents in the current environment. You will then be prompted to enter the Horizon user password.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

As outlined in our guide on [Accessing the Horizon interface](https://docs.ovh.com/gb/en/public-cloud/configure_user_access_to_horizon/), the password is only visible once — when it is created.

If you forget your password, you will need to reset it.

If the CLIs are already installed, check if they are working properly:

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID                                   | Name | Status | Task State | Power State | Networks               |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

You can hard-store the Horizon user password. For example, replace:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

With the following:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Your Horizon user password"
```

By default, you will need to set this environment each time you open a session in the current environment. You can make this permanent by adding the openrc.sh source in the bashrc file. You would need to add the password in the file.


#### **On Windows**

- [Download or create the OpenStack openrc.sh file](https://docs.ovh.com/gb/en/public-cloud/access_and_security_in_horizon/) in order to retrieve your login information.

The OpenRC file is not designed to be launched on Windows.

There are two ways of setting environment variables:

- You will need to adapt the file by changing certain commands. The **export** part can be replaced with **set**:

```bash
set OS_PASSWORD="Your Horizon user password"
```

- You can set the variables directly via the system settings: Control Panel > System > Advanced System Properties > Environment Variables:


![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Go further

To learn how to use OpenStack: [OpenStack documentation](https://docs.openstack.org/train/){.external}

Join our community of users on <https://community.ovh.com/en/>.
