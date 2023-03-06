---
title: Accessing your site
slug: development-access-site
section: Development
order: 5
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Once you have an environment running, there are many ways to access it to perform needed tasks. The most straightforward way is to view it in a web browser; the available URLs are shown in the Web PaaS management console and on the command line after every Git push.

By design, the only way to deploy new code is to push to the corresponding branch.  That ensures a consistent, repeatable, auditable application instance at all times.

## Visiting the site on the web

The web URL(s) for the site are listed in the [management console](../administration-web) under "Access site".

They can also be found on the command line, using the [Web PaaS CLI](../development-cli):

```bash
webpaas url
```

Generally there will be two URLs created per route in your `routes.yaml` file: One HTTPS and one HTTP route that just redirects to HTTPS.  If you are using the `{all}` placeholder in your `routes.yaml` file then there will be more, depending on how many domains you have configured in your project.

## Accessing the application with SSH

Most interactions with Web PaaS require SSH key authentication, and you will need to [set up your SSH keys](../development-ssh) before working on a site.

Once that's done, you can easily access the command line on your application over SSH. To log in to the environment that corresponds to your current branch, simply type:

```bash
webpaas ssh
```

To log in to some other environment, use the `-e` flag to specify the environment.  

The application container is a fully working Linux environment using the `bash` shell.  Most of the system consists of a read-only file system (either the underlying container image or your built application image), so you cannot edit code live, but otherwise the full system is available to read and peruse. Any file [mounts](../configuration-app/storage) you have declared in your `.platform.app.yaml` will be writable.

Additionally, you will be logged in as the same user that the web server runs as; that means you needn't worry about the common problem of editing a file from the command line and from your application resulting in inconsistent and broken file ownership and permissions.

## Uploading and downloading files

The writable static files in an application - including uploads, temporary and private files - are stored in [mounts](../configuration-app/storage).

The Web PaaS CLI can list mounts inside an application:

```bash
$ webpaas mounts
Mounts in the app drupal (environment master):
+-------------------------+----------------------+
| Path                    | Definition           |
+-------------------------+----------------------+
| web/sites/default/files | shared:files/files   |
| private                 | shared:files/private |
| tmp                     | shared:files/tmp     |
+-------------------------+----------------------+
```

The CLI also helps transferring files to and from a mount, using the `mount:upload` and `mount:download` commands. These commands use the `rsync` utility, which in turn uses SSH.

For example, to download files from the 'private' mount:

```bash
$ webpaas mount:download --mount private --target ./private

This will add, replace, and delete files in the local directory 'private'.

Are you sure you want to continue? [Y/n]
Downloading files from the remote mount /app/private to /Users/alice/Projects/foo/private
  receiving file list ...   done

  sent 16 bytes  received 3.73K bytes  2.50K bytes/sec
  total size is 1.77M  speedup is 471.78
  time: 0.91s
The download completed successfully.
```

Uploading files to a mount is similar:

```bash
$ webpaas mount:upload --mount private --source ./private

This will add, replace, and delete files in the remote mount 'private'.

Are you sure you want to continue? [Y/n]
Uploading files from /Users/alice/Projects/foo/private to the remote mount /app/private
  building file list ...   done

  sent 2.35K bytes  received 20 bytes  1.58K bytes/sec
  total size is 1.77M  speedup is 745.09
  time: 0.72s
The upload completed successfully.
```

## Using SSH clients

Many applications and protocols run on top of SSH, including SFTP, scp, and rsync.

To obtain the SSH connection details for the environment either copy them out of the Web PaaS management console (under the "Access site" dropdown) or run:

```bash
webpaas ssh --pipe
```

That will output the connection string for SSH, including the username and host for the current project and environment.  It will look something like `<project ID>-<environment ID>--app@ssh.us.platform.sh`.  The part before the `@` is the username, the part after is the host.  Enter both of those into your SSH/SFTP client.  No password is necessary, but your client will need to have access to the SSH private key that corresponds to the public key on Web PaaS.

### SFTP

SFTP is another way to upload and download files to and from a remote environment. There are many SFTP clients available for every operating system; use whichever one works for you.

### SCP

SCP is a simple command-line utility to copy files to and from a remote environment.

For example, this command:

```bash
scp "$(platform ssh --pipe)":web/uploads/diagram.png .
```

will copy the file named `diagram.png` in the `web/uploads` directory (relative to the application root) to the current local directory.  Reversing the order of the parameters will copy files up to the Web PaaS environment.  Consult the SCP documentation for other possible options.

### Rsync

For copying files to and from a remote environment, `rsync` is the best tool available. It is a little more complicated to use than `scp`, but it can also be a lot more efficient, especially if you are simply updating files that are already partially copied.

The Web PaaS CLI `mount:upload` and `mount:download` commands (described above) are helpful wrappers around `rsync` that make it a little easier to use.

However, it is also possible to use `rsync` on its own, for example:

```bash
rsync -az "$(platform ssh --pipe)":web/uploads/ ./uploads/
```

This command will copy all files in the `web/uploads` directory on the remote environment to the `uploads` directory locally.  Note that `rsync` is very sensitive about trailing `/` characters, so that may change the meaning of a command.  Consult the `rsync` documentation for more details.  Also see our [migrating](../tutorials-migrating) and [exporting](../tutorials-exporting) guides for more examples using `rsync`.
