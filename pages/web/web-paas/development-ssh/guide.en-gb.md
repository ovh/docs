---
title: Connect securely with SSH
slug: development-ssh
section: Development
order: 5
---

**Last updated 31st August 2023**



## Objective  

When you interact with a deployed environment, you need to guard your connection against unauthorized access.
Use Secure Shell (SSH) to provide a secure channel.

You can securely log in to your deployed app to troubleshoot and read logs.
And create a tunnel to export data through.
And interact with your project through the CLI.
All secured through SSH.

## Connect to apps

To connect to an app securely with SSH, follow two steps.

### 1. Authenticate with the CLI

To authenticate with the CLI:

1\. Install the [{{< vendor/name >}} CLI](../administration-cli).

2\. Run `webpaas login`.

3\. In the open browser window, log in with your {{< vendor/name >}} account credentials.

   (This webpage is encrypted with HTTPS [HTTP over TLS], making it secure.)
4\. Authorize the CLI to use your account.


A certificate gets stored in your local SSH configuration.
The certificate is automatically cycled every hour for a new certificate as long as your session is active.

If you are inactive for an extended period,


You are now ready to run CLI commands and connect to an environment.

### 2. Connect to an app with SSH

To access an app in a given environment via the CLI, run the following command:

```bash
webpaas ssh --project {{< variable "PROJECT_ID" >}} --environment {{< variable "ENVIRONMENT_NAME" >}} --app {{< variable "APPLICATION_NAME" >}}
```

Replace each of <code>{{< variable "PROJECT_ID" >}}</code>, <code>{{< variable "ENVIRONMENT_NAME" >}}</code>, and <code>{{< variable "APPLICATION_NAME" >}}</code> with the values you want to access.
To find these values in the Console,
navigate to the environment you want to access and click **SSH** in the top right-hand corner.

Alternatively, just run `webpaas ssh` and select the values from each list presented to you.

Once you've connected, you get a response like this:

```bash





 Welcome to WebPaaS.

 This is environment main
 of project wk5fqz6qoo123.

web@wk5fqz6qoo123-main--php:~$
```

Now you can interact with the environment as you want.
Note that your app's file system is read-only,
except for any [mounts you've defined](../../create-apps/app-reference.md#mounts). 

## Connect to services

To connect to a service, you need the [service credentials](../../add-services/_index.md#connect-to-a-service).
Then you can connect either with a [direct tunnel](#use-a-direct-tunnel) or a [tunnel in your app](#use-an-app-tunnel).

### Use a direct tunnel

To open SSH tunnels for all of your services, run the following command:

```bash
webpaas tunnel:open
```

You get output similar to the following:

```bash
SSH tunnel opened to database at: http://127.0.0.1:30000

Logs are written to: ~/.platformsh/tunnels.log

List tunnels with: webpaas tunnels
View tunnel details with: webpaas tunnel:info
Close tunnels with: webpaas tunnel:close

Save encoded tunnel details to the PLATFORM_RELATIONSHIPS variable using:
  export PLATFORM_RELATIONSHIPS="$(platform tunnel:info --encode)"
```

Use the returned host (in this case `http://127.0.0.1:30000`) for your connection
and fill in the details with the rest of your [service credentials](../../add-services/_index.md#connect-to-a-service).

The `tunnel:open` command connects all relationships defined in your [app configuration](../../create-apps/_index.md).

To open only one connection when you have multiple relationships defined, run `tunnel:single`.
By default, this opens a tunnel at `http://127.0.0.1:30000`.
You can specify the port for the connection using the `--port` flag.

### Use an app tunnel

Many database applications (such as MySQL Workbench) support establishing their own SSH tunnel.
You need to use [SSH keys](./ssh-keys.md) for authentication.
Consult the documentation for your application for how to enter SSH credentials.

#### Get SSH connection details

To get the host and username for connections, follow these steps:

> [!tabs]      

The host is everything after the `@` and the username is what's before it.
In this case, the host is `ssh.us.platform.sh` and the username is `jyu7waly36ncj-main-7rqtwti--app`.
The host is the same for the entire project, while the username varies by environment.

To connect to a service, fill in the details with the rest of your [service credentials](../../add-services/_index.md#connect-to-a-service).

## Alternative authentication methods

There are three basic ways to authenticate with {{< vendor/name >}}:

* [Through the CLI](#1-authenticate-with-the-cli)
  * The fastest and easiest method.
  * Supports multifactor authentication.
  * Automatically generates new certificates to keep your connection safe.
  * Necessary when using the CLI and when your organization has multifactor authentication set up.
* [Using SSH keys](./ssh-keys.md)
  * Requires more setup on your part.
  * Represents only a single authentication method.
  * Requires you to regularly change the keys to maintain security.
  * Useful for checking out code as part of an automated process.
* [Using API tokens](../../administration/cli/api-tokens.md)
  * Good for letting automation tools use the CLI.
  * Requires you to regularly change the tokens to maintain security.

## Multifactor authentication (MFA) over SSH

{{< premium-features/tiered "Enterprise and Elite" >}}

To enhance security, Enterprise and Elite customers can enforce MFA over SSH within their organization.
When this is enabled, every project contributor within your organization must enable MFA in their account
to run Git commands or to SSH in an environment.
To enable this feature, open a support ticket and request for MFA over SSH to be enforced within your organization.

If you have trouble accessing an environment with MFA enabled, see how to [add a second factor](./troubleshoot-ssh.md#add-a-second-authentication-factor).
