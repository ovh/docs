---
title: PHP
slug: php
section: New-Relic
---

**Last updated 7th January 2022**


> [!primary]  
> 
> Due to New Relic [dropping support for Zend Thread Safe (ZTS) versions](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9170300/), you can't use New Relic with PHP v8.0+. To use New Relic with PHP, specify `type: 'php:7.4'` in your `.platform.app.yaml` file.
> 
> 

## Get your license key

Sign up at https://newrelic.com and get your [license key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

## Add your license key

Add your New Relic license key as an environment level variable:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false php:newrelic.license --value '<your-new-relic-license-key>'
```

## Give your application a name

Add a new environment level variable to give your application a recognizable name:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false php:newrelic.appname --value '<your-application-name>'
```

> [!primary]  
> Repeat these two steps for every environment you want to monitor, making sure you give them different application names, matching the ones you entered in the New Relic interface.
> 

## Enable the New Relic extension

Enable the New Relic extension in your `.platform.app.yaml` as follows:

```yaml
runtime:
    extensions:
        - newrelic
```

Push the changes to your Web PaaS environment to enable New Relic as follows:

```bash
git add .platform.app.yaml
git commit -m "Enable New Relic."
git push
```

That's it! You need to wait a little bit for your New Relic dashboard to be generated.

## Troubleshoot

Additionally, you can check that your application is properly connected to New Relic by looking at the `/var/log/app.log` file:

```bash
webpaas log app

2017/04/19 14:00:16.706450 (93) Info: Reporting to: https://rpm.newrelic.com/accounts/xxx/applications/xxx
2017/04/19 14:00:16.706668 (93) Info: app 'xxx-main-xxx.app' connected with run id 'xxx'
```
