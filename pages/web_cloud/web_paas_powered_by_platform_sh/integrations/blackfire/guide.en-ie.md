---
title: Blackfire
updated: 2021-05-11
---



## Objective  

Web PaaS supports [Blackfire.io](https://blackfire.io/). Blackfire is a PHP profiler and automated performance testing tool that can be used in the development Integration, Staging, and Production environments.

It grants details information on your PHP code's resources consumption across Wall-Time, CPU, I/O, Memory, Network Calls, HTTP requests and SQL queries.

In addition, it can profile your code automatically and notify you whenever your code does not comply with best practices for PHP, Symfony, Drupal, eZPlatform, Typo3 & Magento code performance management.

For a high level overview and demo of Blackfire, check out the [full video tutorial](https://www.youtube.com/watch?v=-5icUW9pUH8).

## Version

Check the latest versions of the probe and CLI tool on [Blackfire's documentation](https://blackfire.io/docs/up-and-running/upgrade#latest-versions).

## On a Grid plan

### 1. Get your credentials

**Sign up for the free 15 days Premium trial** at [Blackfire.io](https://blackfire.io/pricing) and install the **Blackfire Companion** web browser extension ([Chrome](https://chrome.google.com/webstore/detail/blackfire-companion/miefikpgahefdbcgoiicnmpbeeomffld) or [Firefox](https://addons.mozilla.org/firefox/addon/blackfire/)).


> [!primary]  
> Blackfire also offers a perpetually-free edition but it is for local development only and will not run on Web PaaS.
> 

Go to your Dashboard and create a new environment [under the Environments tab](https://blackfire.io/my/environments).

![Blackfire environments](images/blackfire-environments.png "0.4")

You will need to store the server credentials for further configuration. You can find them any time under the "Settings" tab of your environment in Blackfire.

![Blackfire credentials](images/blackfire-credentials.png "0.4")

### 2. Enable the Blackfire extension

Configure the extension in your `.platform.app.yaml` as follows:

```yaml
runtime:
    extensions:
        - blackfire
```

Push the changes to your WebPaaS environment to enable Blackfire as follows:

```bash
git add .platform.app.yaml
git commit -m "Enable Blackfire."
git push
```

### 3. Configure your server credentials

Blackfire enables to have a fine grained configuration of server credentials across branches and environments on Web PaaS.

#### Configuring global server credentials

Configuring server credentials on your master branch will enable you to make sure you can profile any other branch:

```bash
webpaas variable:create -e master env:BLACKFIRE_SERVER_ID --value <insert your Server ID>
webpaas variable:create -e master env:BLACKFIRE_SERVER_TOKEN --value <insert your Server Token>
```

#### Configuring server credentials per branch

A recommendation is to have a [Blackfire environment](https://blackfire.io/docs/reference-guide/environments#documentation) for production, another one for staging, and another one for development/integration. That can be mapped in Web PaaS to one Blackfire environment for the production branch, one for the staging branch, and one for all feature branches.

```bash
webpaas variable:create -e=<insert your branch name> env:BLACKFIRE_SERVER_ID <insert your Server ID>
webpaas variable:create -e=<insert your branch name> env:BLACKFIRE_SERVER_TOKEN <insert your Server Token>
```

### 4. Confirm it's running

Login via SSH to your container and confirm that Blackfire is running as follows:

```text
php --ri blackfire

blackfire

blackfire => enabled
blackfire => 1.16.1
Timing measurement => gtod
Num of CPU => 8
...
```

## Profiling web requests

Access your site via your browser and click `Profile` in the Blackfire Companion.

![Blackfire Companion](images/blackfire-companion.png "0.3")

That's it! Your site will be profiled and you should get all the results in your Blackfire account.

## Profiling CLI commands

To profile your PHP CLI scripts, use the following command line:

```bash
blackfire --config /etc/platform/$USER/blackfire.ini <command>
```

## Going further with Blackfire

Blackfire also enables to:

* collaborate with the rest of your team
* write performance tests
* automate profiling with periodic builds
* integrate further with Web PaaS by enabling to automate profiling as each code commit
* integrate with New Relic for combined benefits of monitoring and profiling
* integrate with GitHub, Bitbucket and GitLab to show the results of Blackfire builds at the commit status level

Check [Blackfire's documentation](https://blackfire.io/docs/introduction) for more information.

> [!primary]  
> Those features may require a Premium or an Enterprise subscription. We offer attractive bundles of Web PaaS and Blackfire.io subscriptions. Please [contact our sales department](https://platform.sh/contact/) to discuss how we can help you.
> 

### Bypassing Reverse Proxy, Cache, and Content Delivery Networks (CDN)

If you are using one of those, you will need them to let Blackfire access your servers.
[More information on how to configure a bypass](https://blackfire.io/docs/reference-guide/reverse-proxies#documentation).

### HTTP Cache configuration

If you are using the HTTP cache with cookies , please update in your `.platform.app.yaml` the cookies that are allowed to go through the cache. You need to allow the `__blackfire` cookie name.

Something like:

```yaml
cache:
    enabled: true
    cookies: ["/SESS.*/", "__blackfire"]
```

## Reaching out to the Blackfire support

If the above didn't help, collect the following and send it to the [Blackfire support](https://support.blackfire.io):

* The output of `webpaas ssh -- php -d display_startup_errors=on --ri blackfire` command
* The Blackfire logs

### Getting the Blackfire logs

Please execute the following in the environment where you're facing the issue:

* `webpaas variable:create php:blackfire.log_file --value /tmp/blackfire.log`
* `webpaas variable:create php:blackfire.log_level --value 4`
* start a profile/build again

You will get the logs with `webpaas ssh -- cat /tmp/blackfire.log > blackfire.log`.

### Disabling the Blackfire logs

Once you are done, please disable logging with:

* `webpaas variable:delete php:blackfire.log_file`
* `webpaas variable:delete php:blackfire.log_level`
