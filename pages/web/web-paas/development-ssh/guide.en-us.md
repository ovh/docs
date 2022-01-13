---
title: Connecting securely with SSH
slug: development-ssh
section: Development
order: 5
---

**Last updated 13th January 2022**



## Objective  

When you connect to Web PaaS to use the CLI or interact with a deployed environment, you need to guard your connection against unauthorized access. Web PaaS helps by using Secure Shell (SSH) to provide a secure channel.

So you can securely log in to your deployed server to troubleshoot and read logs. And create a tunnel to export data through. And push changes to your Git repository. All secured through SSH.

There are three basic ways to authenticate with Web PaaS:

* [Through the CLI](#authenticate-with-the-platformsh-cli)
  * The fastest and easiest method.
  * Supports multifactor authentication.
  * Automatically generates new certificates to keep your connection safe.
  * Necessary when using the CLI and when your organization has multifactor authentication set up.
* [Using SSH keys](#authenticate-with-SSH-keys)
  * Requires more setup on your part.
  * Represents only a single authentication method.
  * Requires you to regularly change the keys to maintain security.
  * Useful for checking out code as part of an automated process.
* [Using API tokens](../development-cli/api-tokens)
  * Good for letting automation tools use the CLI.
  * Requires you to regularly change the tokens to maintain security.

## Authenticate with the Web PaaS CLI

To authenticate with the CLI:

1\. Install the [Web PaaS CLI](../development-cli).

2\. Run `webpaas login`.

4\. In the open browser window, log in with your Web PaaS account credentials. (This webpage is encrypted with HTTPS [HTTP over TLS], making it secure.)

5\. Authorize the CLI to use your account.


A certificate gets stored in your local SSH configuration. The certificate is automatically cycled every hour for a new certificate as long as your session is active.

If you are inactive for an extended period, your certificate expires and you are asked to login again the next time you use a command that requires authentication.

You are now ready to run CLI commands and to [connect to an environment](#connect-to-your-server-with-ssh).

## Authenticate with SSH keys

This process requires two keys:

* A **private key** you must keep _secret_
* A **public key** stored in your Web PaaS account

A key pair is valid for as long as you have access to the private key on the system from which you are connecting. If you have a key pair available, you are not prompted to login.

To keep connection secure, you need to regularly update the keys you use. A well-encrypted key is no substitute for regular key rotation.

If you used GitHub to sign up for your Web PaaS account, your public keys from GitHub are automatically synced to your Web PaaS account. So you can use them already with the CLI or to [connect to a server](#connect-to-your-server-with-SSH).

Otherwise, you might be able to [find existing keys](#find-your-keys) or else you need to [generate new keys](#generate-new-keys).

### Find your keys

You may have already generated SSH keys before. Tech Republic has a guide to [finding keys on different systems](https://www.techrepublic.com/article/how-to-view-your-ssh-keys-in-linux-macos-and-windows/).

If you haven't used SSH keys before or it's been a while since you created the key, skip right to [generating new keys](#generate-new-keys).

A public key file has a name ending in `.pub`. It contains seemingly random lines of characters, like this example of a public [RSA key](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) (note the email address at the end, which wouldn't be present in a private key):

```text
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2nDRLgPANWParTiaGIgySG+thTtnqFGI1tMWyqDdfvH+5hL91w2tK9PzaP+NJ5hA/cOyh30YRFb52Y64toU16Ko5K1mLqNFJajjWEI5Y4VukG6betrWfqdQ7XBr/s7nBuDOFQ5+eKbvug4rRSCSo8CsEI1eI0VNQkC9HJWYK28k7KurMdTN7X/Z/4vknM4/Rm2bnMk2idoORQgomeZS1p3GkG8dQs/c0j/b4H7azxnqdcCaR4ahbytX3d49BN0WwE84C+ItsnkCt1g5tVADPrab+Ywsm/FTnGY3cJKKdOAHt7Ls5lfpyyug2hNAFeiZF0MoCekjDZ2GH2xdFc7AX/ your_email_address@example.com
```

To find your public key file:

1\. Open a terminal.

2\. Run the following commands:


```bash
$ cd ~/.ssh
$ ls -a
```

If you find a file ending in `.pub`, copy the location and [add it to your Web PaaS account](#add-an-ssh-key-to-your-platform-account).

If you don't find an existing key, [generate new keys](#generate-new-keys).

### Add an SSH key to your WebPaas account

Once you have the location of your public key, add it to your Web PaaS account.

If you're logged in using the [Web PaaS CLI](#authenticate-with-the-platformsh-cli), in a terminal run the following command (replacing `PATH_TO_YOUR_KEY` with the location of your public key):

```bash
webpaas ssh-key:add 'PATH_TO_YOUR_KEY`
```

You can also add it in the management console, similar to this [video](https://docs.platform.sh/videos/management-console/add-ssh-mc.mp4).

Now you are ready to use the key to [connect to an environment](#connect-to-your-server-with-ssh).

### Generate new keys

If you're logged in using the [Web PaaS CLI](#authenticate-with-the-platformsh-cli), generate a key and have it added to your Web PaaS account automatically.

1\. In a terminal, run `webpaas ssh-key:add`.

1\. If necessary, log in to a browser.

1\. Press `Y` and `enter` to create a new SSH key.

1\. Copy the location of the generated key.

1\. Run the following commands (replacing `PATH_TO_YOUR_KEY` with the location you copied):


```bash
$ eval $(ssh-agent)
$ ssh-add 'PATH_TO_YOUR_KEY'
```

To generate a key otherwise, GitHub has a good [walk-through for creating SSH key pairs](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) on various operating systems. Then you need to [add it to your Web PaaS account](#add-an-ssh-key-to-your-platform-account).

Now you have a public and a private key and the public key is added to your account. You are ready to use the keys to [connect to an environment](#connect-to-your-server-with-ssh).

## Connect to your server with SSH

To access an environment via the CLI:

1\. In a terminal, run `webpaas ssh`.

1\. (If not currently in a project directory) enter the number of the project you want to access.

1\. (If there are multiple environments) enter the ID of the environment you want to access.

1\. (If there are multiple apps) enter the number of the app you want to access.


To connect using SSH keys, find the details in the management console:

1\. Open the [Web PaaS console](https://console.platform.sh/).

1\. Select a project.

1\. In the **Environment** dropdown, select the environment you want to access.

1\. Click the **SSH** dropdown.

1\. Copy the ssh command for where you want access. (Example: `ssh abcdefghi5k-main-7rqtwti--app@ssh.region.url`)

1\. Enter the command into a terminal.


Note that if you have just added your SSH key, you need to [redeploy your environment](#redeploy-your-environment) before you can access it using SSH keys. 

Once you've used either method, you get a response like this:

```bash





 Welcome to WebPaaS.

 This is environment main
 of project wk5fqz6qoo123.

web@wk5fqz6qoo123-main--php:~$
```

Now you can interact with the environment as you want.
