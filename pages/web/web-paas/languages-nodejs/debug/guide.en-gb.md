---
title: Debugging
slug: debug
section: Nodejs
---

**Last updated 31st August 2023**



## Objective  

Effectively debugging web apps takes effort,
especially when an HTTP request goes through multiple layers before reaching your web app.
Follow the steps below to debug a specific app.

You can choose to debug in an environment deployed to {{< vendor/name >}}
or with your app running locally but connected to deployed services.
In either case, make sure to debug in a non-production environment.

{{% troubleshoot %}}

## 1. Create a new environment

Start by creating a new environment completely isolated from production but with the same data for debugging:

```bash
webpaas branch debug-branch
```

## 2. Get access

> [!tabs]      


## 3. Run your app in inspect mode

> [!tabs]      


Replace `<START_FILE>` with the file defined for [your app's `start` command](./_index.md#4-start-your-app).

You get output something like this:

```bash
Debugger listening on ws://127.0.0.1:9229/10701e5d-d627-4180-a967-d47a924c93c0
For help, see: https://nodejs.org/en/docs/inspector
Listening on port 8888
```

## 4. (If debugging remotely) Forward the debugger port locally

In another terminal, create an SSH tunnel that forwards to the 9229 port:

```bash
ssh -N -L 9229:localhost:9229 $(webpaas ssh --pipe)
```

## 5. Connect the debugger

You can now connect the debugger as if you were debugging a local application.
See examples with some common tools:

> [!tabs]      

Now when you load the site at your deployed URL (if debugging remote) or localhost (if debugging locally),
the local debugger you've attached is called.

Set breakpoints:

> [!tabs]      


## Other issues

### pm2 process manager blocks other processes

If you're using the [`pm2` process manager](https://github.com/unitech/pm2) to start your app from a script,
you might find it daemonizes itself and blocks other processes (such as backups) by constantly respawning.
This may happen even if you use the `--no-daemon` flag.

Instead of using a script, call `pm2 start` directly in your [`start` command](./_index.md#4-start-your-app).
