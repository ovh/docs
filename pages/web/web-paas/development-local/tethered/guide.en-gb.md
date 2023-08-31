---
title: Tethered local development
slug: tethered
section: Local
---

**Last updated 31st August 2023**



## Objective  

To test changes locally, you can connect your locally running web server
to service containers on an active {{< vendor/name >}} environment.
This method requires less configuration than tools such as [DDEV](./ddev.md),
but may not perform well enough for everyday use.
Because it replies on a local web server, it's also less consistent across your team.

{{% guides/local-requirements %}}

## Create the tethered connection

{{% tethered-dev/steps-start %}}

1\.  Run your application locally.

    Make sure it's set up to read configuration from {{< vendor/name >}} environment variables.

    If you app relies on other {{< vendor/name >}} environment configuration, such as routes or secret variables,
    make sure to mock those variables as well.

    Your options for running the app depend on the language and configuration.
    You can use the serve for your language, install a copy of Nginx,
    or use a virtual machine or Docker image.

{{% tethered-dev/steps-end %}}

## Connect to services directly

With open tunnels to all your services, you can also connect to the running services directly.
To get information on all running services, run the following command:

```bash
webpaas tunnels
```

You get a response similar to the following:

```bash
+-------+---------------+-------------+-----+--------------+
| Port  | Project       | Environment | App | Relationship |
+-------+---------------+-------------+-----+--------------+
| 30000 | abcdefg123456 | new-feature | app | cache        |
| 30001 | abcdefg123456 | new-feature | app | database     |
+-------+---------------+-------------+-----+--------------+
```

You can use the port information to connect directly to a service.
If you need more detailed information, such as a path or password, run the following command:

```bash
webpaas tunnel:info
```

You can use the information returned to connect to the remote database as if it were local.
For example, the following command would connect to a MySQL database running through a tethered connection:

```bash
mysql --host=127.0.0.1 --port={{ variable "PORT" }} --user='{{ variable "USERNAME" }}' --password='{{ variable "PASSWORD" }}' --database='{{ variable "PATH" }}'
```

{{% local-dev/next-steps-start %}}

    Fill it with something similar to the following example, depending on your app and configuration:


```bash   

```  


{{% local-dev/next-steps-end %}}
