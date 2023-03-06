---
title: Node.js
slug: nodejs
section: New-Relic
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Get your license key

Sign up at https://newrelic.com and get your license key.

## Add your license key

Add your New Relic license key as an environment level variable:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false env:NEW_RELIC_LICENSE_KEY --value '<your-new-relic-license-key>'
```

## Give your application a name

Add a new environment level variable to give your application a recognizable name:

```bash
webpaas variable:create --level environment --environment '<your-environment>' --visible-build false --inheritable false env:NEW_RELIC_APP_NAME --value '<your-application-name>'
```

> [!primary]  
> Repeat these two steps for every environment you want to monitor, making sure you give them different application names, matching the ones you entered in the New Relic interface.
> 

## Configure the New Relic logs

Our File System being read-only, New Relic won't be able to create its log file. To allow New Relic to output logs, we need to get a writeable directory to put the log file in.

At the end of the `build` hook in your `.platform.app.yaml`, create a `newrelic` directory in your application root:

```yaml
hooks:
  # ... your hooks
  build: |
    # ... your build hook
    mkdir $PLATFORM_APP_DIR/newrelic
```

Now add this directory to your mounts:

```yaml
mounts:
  # ... your mounts
  '/newrelic/':
    source: local
    source_path: newrelic
```

We now need to tell New Relic to use this file. To do that, create a new project level variable called `NEW_RELIC_LOG`:
```bash
webpaas variable:create --level project --visible-build false env:NEW_RELIC_LOG --value /app/newrelic/newrelic_agent.log
```

## Set up the New Relic agent

Install the `newrelic` package:
```bash
npm install newrelic
# or
yarn add newrelic
```

Import it before any other import in your application's main module:
```js
require('newrelic');
// or
import "newrelic";
```

## Commit and push the changes

```bash
$ git add -A
$ git commit -m "Enable New Relic"
$ git push
```

Once your environment is delployed and you've generated some traffic, you need to wait a little bit for your New Relic dashboard to be created.

## Troubleshoot

You can check that your application is properly connected to New Relic by looking at the `/app/newrelic/newrelic_agent.log` file:

```bash
$ webpaas ssh
$ cat /app/newrelic/newrelic_agent.log

{"v":0,"level":30,"name":"newrelic","hostname":"api.0","pid":761,"time":"2021-02-03T16:12:50.890Z","msg":"Connected to collector-001.eu01.nr-data.net:443 with agent run ID xxxxx.","component":"collector_api"}
{"v":0,"level":30,"name":"newrelic","hostname":"api.0","pid":761,"time":"2021-02-03T16:12:50.890Z","msg":"Reporting to: https://rpm.eu.newrelic.com/accounts/xxxxx/applications/xxxxx","component":"collector_api"}
{"v":0,"level":30,"name":"newrelic","hostname":"api.0","pid":761,"time":"2021-02-03T16:12:50.892Z","msg":"Valid event_harvest_config received. Updating harvest cycles. {\"report_period_ms\":5000,\"harvest_limits\":{\"error_event_data\":8,\"analytic_event_data\":833,\"custom_event_data\":83}}"}
{"v":0,"level":30,"name":"newrelic","hostname":"api.0","pid":761,"time":"2021-02-03T16:12:50.897Z","msg":"Agent state changed from connected to started."}
{"v":0,"level":30,"name":"newrelic","hostname":"api.0","pid":761,"time":"2021-02-03T16:12:51.899Z","msg":"Starting initial 1000ms harvest."}
```
