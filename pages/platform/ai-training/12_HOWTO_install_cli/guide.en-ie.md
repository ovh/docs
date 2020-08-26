---
title: Install the $partner_full client
slug: install-client
excerpt: Learn how to install the $partner_full client to interact with AI Training
section: How to
order: 2
---
*Last updated 14th August, 2020.*

## Objective

This guide covers the creation of [**data**](../data) objects in **AI
Training** through the control panel and their association with Object
Storage containers.

## Requirements

-   A **public cloud** project
-   AI Training activated for your account, see [how to submit a job
    Step 2](../submit-job)
-   A user for AI Training [how to submit a job Step 3](../submit-job)

## Instructions

### Step 1 - Download the client

From this point forward is it assumed that all commands are executed
from your `home` directory.

First download the client for the **AI Training** cluster location of
your choice and install it with the following command:

``` {.console}
curl https://console.<region>.training.ai.cloud.ovh.net/cli/install | sh # region is the lowercase cluster location
```

The **\$partner\_full client** binary is downloaded to your current
directory, add it to your `PATH`:

``` {.console}
mkdir -p $HOME/bin
mv $cli $HOME/bin/$cli
export PATH=$PATH:$HOME/bin/
```

### Step 2 - Configure your profile

During the installation process a new file is created under
`$HOME/.$cli/config`. If you open this file it will look like this:

``` {.console}
{
  "profiles": {
    "GRA": {
      "url": "https://console.<region>.training.ai.cloud.ovh.net",
      "client": "client-id",
      "secret": "client-secret"
    }
  },
  "lastUpgradeCheck": "2020-08-14T11:50:30.306790918+02:00"
}
```

You can configure several profiles to interact with the available **AI
Training** clusters. For more information about cluster location
availability see the [capabilities](../capabilities).

To set a default profile you need to export the environment
`$partner_short_PROFILE`:

``` {.console}
export $partner_short_PROFILE=<region>
```

It is recommended to add this value to your `.basrhc` file or similar.

### Step 3 - Authenticate

Once the **\$partner\_full** client is installed and configure the first
step is to authenticate with the **AI Training** service.

``` {.console}
$cli login
```

Follow the link outputed by this function, you will reach an
authentication page similar to this:

![image](images/00_oauth2_login.png){.thumbnail}

Use the credentials of your **AI Training** user to login. Once
authenticated you are provided with a verification code that you need to
paste in your prompt to finalize your login.

![oauth verification
code](images/01_oauth_verification_code.png){.thumbnail}

### Step 4 - Use the cli

You can use the command `$cli --help` for more information about
available actions and the full documentation of the client and the
service is available at
`https://docs.console.<region>.training.ai.cloud.ovh.net/`. If necessary
to login to the documentation use your **AI Training** user credentials.

In addition when performing any action in the **AI Training** control
panel you are provided with the equivalent command to get you started
with the **\$partner\_full client**.

> [!primary]
>
> Some action and features available in the **\$partner\_full client**
> are not included in the **AI Training** service.

## Feedback

Please send us your questions, feedback and suggestions to improve the
service:

-   On the OVHcloud [AI community
    forum](https://community.ovh.com/c/platform/ai-ml)
