---
title: Debugging
slug: debug
section: Nodejs
---

**Last updated 26th March 2021**



## Objective  

Effectively debugging web applications isn’t trivial, especially when an HTTP request goes through multiple layers until it reaches the web app, which is usually the case in cloud platforms.

> [!primary]  
> Whether you need to debug locally or remotely, always do so in a non-production environment.
> 

## Remote debugging

### Create a new environment

```sh
$ webpaas branch debug-branch
```

### SSH into your app container

```sh
$ webpaas ssh
```

In a multi-application project, you will be prompted to chose which application to ssh into. You can also specifiy the application you want by using the `--app` option:

```sh
$ webpaas ssh --app=my-app-name
```

### Restart node in inspect mode 

Once connected to your app container, run:

```sh
$ sv stop <app_name>
$ node --inspect <js_file>
```

`app_name` being the name of your application as defined in your `.platform.app.yaml` and `js_file` being your application entrypoint.

You should see something like:
```sh
web@app.0:~$ node --inspect index.js 
Debugger listening on ws://127.0.0.1:9229/10701e5d-d627-4180-a967-d47a924c93c0
For help, see: https://nodejs.org/en/docs/inspector
Listening on port 8888
```

### Forward the debugger port locally

In another terminal, create an SSH tunnel that forwards the 9229 port:
```sh
$ ssh -N -L9229:127.0.0.1:9229  $(webpaas  ssh --pipe)
```

### Connect the debugger

You can now connect the debugger as if you were debugging a local application.

#### Using the chrome devtools

Go to `chrome://inspect`. You should see the running application under the `Remote Target` list and be able to click the `inspect` link to open the debugger.

#### Using VSCode

Use the `Node.js: Attach` debugger option. If not configured already, go to the debugger tab and select `create a launch.json file` and select `Node.js`. Then use intellisense (usually `control`+`space`) in the `configurations` array. Select `Node.js: Attach`. You can now select `Attach` in the `RUN AND DEBUG` drop-down and click the green arrow. You will find the JS files in which to set the breakpoints in the `LOADED SCRIPTS` view, under `Attach: Remote Process [0]` -> `/app`.

## Locally

### Create a new environment

```sh
$ webpaas branch debug-branch
```

### Open a tunnel

To get access to your application's relationships locally, open a tunnel to your application container:

```sh
$ webpaas tunnel:open
```

In a multi-application project, you will be prompted to chose which application to open a tunnel to. You can also specifiy the application you want by using the `--app` option:

```sh
$ webpaas tunnel:open --app=my-app-name
```

### Set the environment variables

In the terminal in which the tunnel has been opened, run:

```sh
$ export PLATFORM_RELATIONSHIPS="$(webpaas tunnel:info --encode)"
$ export PORT=8888
```

### Run your application in inspect mode

```sh
$ node --inspect node --inspect <js_file>
```

`js_file` being your application entrypoint.

### Connect the debugger

You can now connect your debugger just like you would with any locally running node process.

#### Using the chrome devtools

Go to `chrome://inspect`. You should see the running application under the `Remote Target` list and be able to click the `inspect` link to open the debugger.

#### Using VSCode

Use the `Node.js: Attach to process` debugger option. If not configured already, go to the debugger tab and select `create a launch.json file` and select `Node.js`. Then use intellisense (usually `control`+`space`) in the `configurations` array. Select `Node.js: Attach to process`. You can now select `Attach by process ID` in the `RUN AND DEBUG` drop-down and click the green arrow. You can now set breakpoints in your source files directly.
