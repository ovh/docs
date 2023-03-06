---
title: SSH
slug: development-ssh
section: Development
order: 5
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

One of the ways Web PaaS keeps things secure is by using SSH behind the scenes. Users can interact with their environment through a command shell, or push changes to the environment's Git repository, and both of these features rely on SSH.


Secure Shell Protocol, SSH, supports certificate-based and keypair-based authentication.  Certificate-based authentication is faster to set up and generally easier to use, provided you have a web browser available on your computer.  Alternatively, you may use keypair-based authentication if you are setting up an automation tool, or simply prefer that method.



## Certificate-based authentication

To connect using certificate-based authentication, install the [Web PaaS CLI](../development-cli).

Once installed, you may run `webpaas login` or any CLI command that would require authentication.  In either case, a browser window will open and ask you to login with your Web PaaS account credentials.  This web page is already encrypted with TLS over HTTP, making it secure.

The login process will issue a certificate that gets stored in your local SSH configuration.  The certificate is automatically cycled every hour for a new certificate as long as your session is active.  If you are inactive for an extended period your certificate will expire, and the system will ask you to login again the next time you use a command that requires authentication.

## Keypair-based authentication

This process requires two [RSA keys](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29):

* A **private key** kept secret by the user
* A **public key** stored within the Web PaaS account

These keys are called the *public-private keypair* and usually look like random lines of characters, like this:

*A private key*:

```text
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAtpw0S4DwDVj2q04mhiIMkhvrYU7Z6hRiNbTFsqg3X7x/uYS/
dcNrSvT82j/jSeYQP3Dsod9GERW+dmOuLaFNeiqOStZi6jRSWo41hCOWOFbpBum3
ra1n6nUO1wa/7O5wbgzhUOfnim77oOK0UgkqPArBCNXiNFTUJAvRyVmCtvJOyrqz
...(20 more lines like this)...
cPjJ/wKBgGd3eZIBK6Ak92u65HYXgY9EcX3vBNP4NsF087uxV4YfrM18KlGf5I87
QGerp3VKaGe0St3ot57GlwCAQUJAf1mit8qDTi0I8MhBe7q2lstXkBvde7GY1gKx
Kng4ohG6xHZ/OvC9tq7/THwAvleaxgLZN5GyXfAqNylDdZ0LtSjl
-----END RSA PRIVATE KEY-----
```

*A public key (one very long line)*:

```text
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2nDRLgPANWParTiaGIgySG+thTtnqFGI1tMWyqDdfvH+5hL91w2tK9PzaP+NJ5hA/cOyh30YRFb52Y64toU16Ko5K1mLqNFJajjWEI5Y4VukG6betrWfqdQ7XBr/s7nBuDOFQ5+eKbvug4rRSCSo8CsEI1eI0VNQkC9HJWYK28k7KurMdTN7X/Z/4vknM4/Rm2bnMk2idoORQgomeZS1p3GkG8dQs/c0j/b4H7azxnqdcCaR4ahbytX3d49BN0WwE84C+ItsnkCt1g5tVADPrab+Ywsm/FTnGY3cJKKdOAHt7Ls5lfpyyug2hNAFeiZF0MoCekjDZ2GH2xdFc7AX/ your_email_address@example.com
```

GitHub has a good [walk-through of creating an SSH keypair](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) on various operating systems.

A keypair is valid for as long as you have access to the private key on the system from which you are connecting.  If you have a keypair available you will not be prompted to login.

### Find your Public-Private keypair

If you use Linux, you probably already have keys. The private key is usually in a file named `~/.ssh/id_rsa` and the public key in `~/.ssh/id_rsa.pub`.

Searching for a public key file:
1\. Open up a command prompt.

2\. Run the following commands:


```bash
$ cd ~/.ssh
$ ls -a
id_rsa
id_rsa.pub
known_hosts
authorized_keys
```

    If you find a file named `id_rsa.pub`, you can use it with Web PaaS. If you don't find an existing key, see the steps to create a new one in the [next section](#create-a-new-public-private-keypair).

### Create a New Public-Private Keypair

> [!primary]  
> If you already have a SSH keypair, you can skip this step.
> 

Create a public-private keypair:

```bash
$ ssh-keygen -t rsa -C "your_email_address@example.com"
```

`ssh-keygen` generates the key pair and will ask you where you want to save the file:

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/your_username/.ssh/id_rsa):
```

The default location is fine in most cases. Now it's time to create a passphrase. A good, strong passphrase is highly recommended, to make your key less useful if it falls into the wrong hands.

```text
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

That's it. Keys generated! Here are the results:

```text
Your identification has been saved in /Users/your_username/.ssh/id_rsa.
Your public key has been saved in /Users/your_username/.ssh/id_rsa.pub.
The key fingerprint is:
55:c5:d7:a9:1f:dc:7a:67:31:70:fd:87:5a:a6:d0:69 your_email_address@example.com
```

> [!primary]  
> Make note of the location of your public key, you're going to need that in the next section.
> 

### Add the SSH key to your WebPaas account

1\.  First off, you'll need to copy your public key to the clipboard.

2\.  Click on the user profile in [webpaas console](https://eu.console.webpaas.ovhcloud.com/) and click on Account.

3\. In the left side-bar, select `SSH keys`.

4\. Click the `Add a public key` button.

5\.  Paste the key that you copied earlier into the 'Key' text box. You can also add a title if you like, otherwise it will be auto-generated.

6\.  Click 'Save'.




That's it! You're all set. Now you'll be able to use Git and command shells with any Web PaaS environment that your user account is authorized to work with.

## SSH to your Web Server

In the management console header, click on the environment tab and select the environment that you want to SSH into. Then click the `SSH` dropdown button towards the top right.

```bash
$ ssh wk5fqz6qoo123-master@ssh.ovhcloud-fr-1.webpaas.ovh.net






 Welcome to WebPaaS.

 This is environment master
 of project wk5fqz6qoo123.

web@wk5fqz6qoo123-master--php:~$
```

## Troubleshoot SSH

While trying to log in via SSH, this can happen:

```bash
$ ssh [SSH-URL]
Permission denied (publickey).
```

Don't panic! It's an issue which can happen for the following reasons:

* Your environment is inactive
* You haven't redeployed (i.e. `git push`) your environment since adding the new public key
* You didn't upload your public key to your user profile
* Your SSH private key has not been added into your ssh-agent
* Your SSH key files have incorrect permissions

### Check your public key

Make sure your public key has been uploaded to your user account.

### Check your ssh-agent

Check that your key is properly added to your SSH agent. This is an authentication agent that manages your private key.

1\.  Check your SSH agent. Run the command `ssh-add -l` in your terminal:


```bash
$ ssh-add -l
2048 12:b0:13:83:7f:56:18:9b:78:ca:54:90:a7:ff:12:69 /Users/nick/.ssh/id_rsa (RSA)
```

2\.  Check that file name on the right (`.ssh/id_rsa` in the example above). Does it match your private key file?

3\.  If you don't see your private key file, add your private key:


```bash
$ ssh-add path-to-your-key
```

4\.  Try again.


### Still having trouble?

If you followed all the steps above, you may also notice an error message similar to below while attempting to SSH to webpaas:

```text
Hello Your Name, you successfully connected, but you do not have access to service 'xxxxxxxxxxxxxx-master': check permissions.
Received disconnect from 54.210.49.244: 14: No more auth methods available
```

This usually means a deployment has not been committed yet. When a new key is added, it only becomes immediately active for use with Git. For use with SSH, it will not be activated until a deployment is made. An easy way to force this is to create and push an empty commit:

```bash
$ git commit --allow-empty -m 'force redeploy'
$ git push origin master
```

### Generate SSH debug information

If your private key and public key both look OK but you don't have any luck logging in, print debugging information. These lines often give clues about what is going wrong.

1\.  Run the SSH command with the `-v` option, like this:


```bash
$ ssh -v [SSH-URL]
OpenSSH_6.7.8, OpenSSL 1.2.3 1 Sep 2014
debug1: Connecting to ssh.ovhcloud-fr-1.webpaas.ovh.net [54.32.10.98] port 22.
debug1: Connection established.
debug1: identity file /Users/nick/.ssh/id_rsa type 1
...(30 more lines of this light reading)...
debug1: Offering RSA public key: /Users/nick/.ssh/id_rsa
debug1: Authentications that can continue: publickey
debug1: No more authentication methods to try.
Permission denied (publickey).
```

    or

```bash
$ GIT_SSH_COMMAND="ssh -v" git clone [REPO-URL]
```

You can use this information to make one last check of the private key file.

If you're still stuck, don't hesitate to submit a support ticket, we'll help you solve your problem.
