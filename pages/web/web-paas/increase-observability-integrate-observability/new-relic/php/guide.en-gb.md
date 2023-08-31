---
title: PHP
slug: php
section: New-Relic
---

**Last updated 31st August 2023**


## Get your license key

Sign up at New Relic to [get your license key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

## Add your license key

Add your New Relic license key as an environment level variable:

```bash
webpaas variable:create --level environment --environment {{< variable "ENVIRONMENT_NAME" >}} --visible-build false --inheritable false --json false --sensitive true --enabled true --visible-runtime true php:newrelic.license --value {{< variable "NEW_RELIC_LICENSE_KEY" >}}
```

## Give your application a name

Add a new environment level variable to give your application a recognizable name:

```bash
webpaas variable:create --level environment --environment {{< variable "ENVIRONMENT_NAME" >}} --visible-build false --inheritable false --json false --sensitive true --enabled true --visible-runtime true php:newrelic.appname --value {{< variable "APP_NAME" >}}
```

> [!primary]  
> Repeat these two steps for every environment you want to monitor, making sure you give them different application names, matching the ones you entered in the New Relic interface.
> 

## Enable the New Relic extension

Enable the New Relic extension in your `{{< vendor/configfile "app" >}}` as follows:

```yaml
runtime:
    extensions:
        - newrelic
```

Push the changes to your {{< vendor/name >}} environment to enable New Relic as follows:

```bash
git add {{< vendor/configfile "app" >}}
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
