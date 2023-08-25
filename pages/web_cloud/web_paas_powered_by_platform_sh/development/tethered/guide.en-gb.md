---
title: Tethered
updated: 2021-05-11
---



# Tethered Local

The simplest way to run a project locally is to use a local web server, but keep all other services on Web PaaS and connect to them over an SSH tunnel.  This approach needs very little setup, but requires an active Internet connection, and depending on the speed of your connection and how I/O intensive your application is, it may not be performant enough for day-to-day use.

## Quick Start

In your application directory run `webpaas tunnel:open &&  export PLATFORM_RELATIONSHIPS="$(webpaas tunnel:info --encode)"`. This will open an SSH tunnel to your current Web PaaS environment and expose a local environment variable that mimics the relationships array on Web PaaS.

You can now run your application locally, assuming it is configured to read its configuration from the Web PaaS environment variables.

Note that other Web PaaS environment configuration such as the routes or application secret value will still not be available.  Also be aware that the environment variable exists only in your current shell.  If you are starting multiple local command shells you will need to rerun the `export` command above in each of them.

## Local web server

For the local web server the approach will vary depending on your language.

* For a self-serving language (Go or Node.js), simply run the program locally.
* For PHP, you may install your own copy of Nginx (or Apache) and PHP-FPM, or simply use the built-in PHP web server.  Be aware however that by default the PHP web server will ignore environment variables by default.  You will need to explicitly instruct it to read them, like so: `php -S -d variables_order=EGPCS localhost:8001`.  That will start a basic web server capable of running PHP, serving the current directory, on port 8001, using available environment variables.  See the [PHP manual](https://www.php.net/manual/en/features.commandline.webserver.php) for more information.
* For other languages it is recommended that you install your own copy of Nginx or Apache.
* A virtual machine or Docker image is also a viable option.

## SSH tunneling

Now that the code is running, it needs to connect it to its services.  For that, open an SSH tunnel to the current project.

```bash
$ webpaas tunnel:open
SSH tunnel opened on port 30000 to relationship: redis
SSH tunnel opened on port 30001 to relationship: database
Logs are written to: ~/.webpaas/tunnels.log

List tunnels with: webpaas tunnels
View tunnel details with: webpaas tunnel:info
Close tunnels with: webpaas tunnel:close
```

Now you can connect to the remote database normally, as if it were local.

```bash
$ mysql --host=127.0.0.1 --port=30001 --user='user' --password='' --database='main'
```

The specific port that each service uses is not guaranteed, but is unlikely to change unless you add an additional service or connect to multiple projects at once.  In most cases it's safe to add a local-configuration file for your application that connects to, in this case, `localhost:30001` for the SQL database and `localhost:30000` for Redis.


After the tunnel(s) are opened, you can confirm their presence:

```bash
webpaas tunnel:list
```

You can show more information about the open tunnel(s) with:

```bash
webpaas tunnel:info
```

and you can close tunnels with:

```bash
webpaas tunnel:close
```

> [!primary]  
> The `webpaas tunnel:open` command requires the `pcntl` and `posix` PHP extensions. Run `php -m | grep -E 'posix|pcntl'` to check if they're there.
> 
> If you don't have these extensions installed, you can use the `webpaas tunnel:single` command to open one tunnel at a time. This command also lets you specify a local port number.
> 

### Local environment variables

Alternatively, you can read the relationship information directly from Web PaaS and expose it locally in the same form.  From the command line, run:

```bash
export PLATFORM_RELATIONSHIPS="$(webpaas tunnel:info --encode)"
```

That will create a `PLATFORM_RELATIONSHIPS` environment variable locally that looks exactly the same as the one you'd see on Web PaaS, but pointing to the locally mapped SSH tunnels.  Whatever code you have that looks for and decodes the relationship information from that variable (which is what runs on Web PaaS) will detect it and use it just as if you were running on Web PaaS.



> [!tabs]      
> PHP     
>> ``` php     
>> 
>> <?php
>> if ($relationships_encoded = shell_exec('webpaas tunnel:info --encode')) {
>>     $relationships = json_decode(base64_decode($relationships_encoded, TRUE), TRUE);
>>     // ...
>> }
>> 
>> ```     
> Python     
>> ``` python     
>> 
>> import json
>> import base64
>> import subprocess
>> 
>> encoded = subprocess.check_output(['platform', 'tunnel:info', '--encode'])
>> if (encoded):
>>     json.loads(base64.b64decode(encoded).decode('utf-8'))
>>     # ...
>> 
>> ```     
