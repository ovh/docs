---
title: Tideways
slug: tideways
section: Integrate-Observability
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

> [!primary]  
> The upstream now maintains two versions for Tideways, and both plugins are available on {{< vendor/name >}}:
> * [Tideways_XHProf](https://github.com/tideways/php-xhprof-extension): The open source version and so no licensing is required (On the downside, less integration services are available). You can use it in combination with [XHProf UI](https://github.com/phacility/xhprof).
> * [tideways](https://tideways.com): The bundle proprietary full version of the product and plugins, which the rest of the guide is mostly aimed to cover.
> 

## Get Started

### 1. Get your license key

Sign up at [Tideways](https://app.tideways.io/register/) and get your license key.

### 2. Add your license key

Add your Tideways license key as a project level variable:

```bash
webpaas variable:create --visible-build false php:tideways.api_key --value '<your-license-key>'
```

### 3. Enable the Tideways extension

Enable the Tideways extension in your `{{< vendor/configfile "app" >}}` as follows:

```yaml
runtime:
    extensions:
        - tideways
```

Enabling the extension also activates the Tideways background process.

Push the changes to your {{< vendor/name >}} environment to enable Tideways as follows:

```bash
git add {{< vendor/configfile "app" >}}
git commit -m "Enable Tideways."
git push
```

Tideways should now be enabled.
Give it a few hours to a day to get a decent set of data before checking your Tideways dashboard.

## Deployment Integration

Tideways integrates with {{< vendor/name >}} deployment hooks and provides performance comparisons
before and after deployments were released. You can find the {{< vendor/name >}} CLI command to register
this hook for your application in Tideways "Application Settings" screen under the section
"Exports & Integrations". Here is an example:

```bash
webpaas integration:add --type=webhook --url="https://app.tideways.io/api/events/external/1234/abcdefghijklmnopqrstuvwxyz1234567890"
```
