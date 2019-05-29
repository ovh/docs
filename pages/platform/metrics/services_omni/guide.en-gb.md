---
title: 'Setting up alerts using OMNI'
slug: omni-alerting
excerpt: 'This guide will show you how to set up alerts for your OVH Metrics solution'
section: 'Metrics services'
order: 4
---

**Last updated 12th October, 2018**

OMNI is a part of the OVH Studio solution. It is a specialised alerting system, based on metrics. With it, you will be able to send notifications (SMS, emails, etc) when anomalies occur within your metrics.

**This guide will show you how to set up alerts for your OVH Metrics solution.**

## Requirements

* an OVH Metrics service
* an OVH Studio account


## Instructions

To build an alerting project, you have to write a flow definition, describing how incidents are handled. An incident is any event within your metrics that shouldn't occur. For example: too many requests per seconds on a webserver.

### The four entities

Four entities define your alerting system, each of which is represented by a *yaml* file:

* __Endpoints__ are used to access your data, and manage access endpoints and authentication. You can use them to access metrics, logs or SQL tables.
* __Plans__ are actions lists that define how to deal with an incident.
* __Drones__ are scripts that will run on a dataset and look for anomalies.
* __Alerts__ are central entities that link an endpoint, a drone and plans.


### How the entities are linked

The **alert** entity creates a link between a **drone**, an **endpoint** and several **plans**. In an alert, you have to specify which drone should be used. Each drone is global to a alert. The drone used in an alert has to work on a dataset, so you must give the drone access to data with an endpoint. Finally, you will trigger plans if your drone detects anomalies on a dataset. You can trigger as many plans as you want, each with a different data filter and drone parameters.

### Endpoint definition

An endpoint is an access to a data source, including authentication.

Endpoint definition in a Yaml file:

| Key           | Type    | Required                      | Description                           |
|---------------|---------|-------------------------------|---------------------------------------|
| name          | string  |                               | Endpoint name                         |
| type          | string  | <i class="fas fa-check"></i>  | Data type of the datasource (metrics) |
| description   | string  |                               | A custom description                    |
| endpoint      | string  | <i class="fas fa-check"></i>  | URL to access your data               |
| token         | string  | <i class="fas fa-check"></i>  | Authentication (read only)            |

Endpoint example:

```yaml
name: gra1
type: metrics
description: Metrics cluster
endpoint: https://warp10.gra1.metrics.ovh.net
token: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

### Plan definition

A plan defines how to deal with an incident, and will define who to contact, how to do so, and what to say. A plan is a list of **steps**, each step representing an escalation level, with the first step as the trigger. Finally, a step is list of **actions**. All actions in a step are performed at the same time.

This is because steps represent the escalation process, i.e. do step A, then step B, then step C, and so on, until the incident is resolved. It also allow you to make lots of thing at each step like API call, SMS or email.

Plan definition in a Yaml file:

| Key           | Type            | Required?                     | Description                         |
|---------------|-----------------|-------------------------------|-------------------------------------|
| name          | string          |                               | The plan's name                     |
| aggregations  | aggregation[]   |                               | An aggregation list to do/compute   |
| steps         | step[]          | <i class="fas fa-check"></i>  | A Step list                         |

Aggregation definition:

| Key         | type          | Required?                    | Description                                                                                                                       |
|-------------|---------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| group       | string        | <i class="fas fa-check"></i> | A metric label or attribute name                                                                                                  |
| by          | string        | <i class="fas fa-check"></i> | A metric label or attribute name                                                                                                  |
| threshold   | number (0-1)  |                              | If more than (threshold) percent of the matching series are in alert mode, then notify the (group) value instead of each series   |

Step definition:

| Key       | Type          | Required?                     | Description                                                                                                                                       |
|-----------|---------------|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| name      | string        |                               | The step's name                                                                                                                                   |
| retry     | number (>0)   |                               | Times a step must be performed before proceeding to the next one (if 0 as retry, step will be called 1 time)                                       |
| duration  | [ISO8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) || A step duration is the lifetime of the step, all retries will be done in this period and when its' over, the next step is started  |
| actions   | action[]      | <i class="fas fa-check"></i>  | An action list to execute                                                                                                                          |

Action definition:

| Key     | Type    | Required?                     | Description                                                                                                                   |
|---------|---------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| where   | string  | <i class="fas fa-check"></i>  | A contact provider (direct, Omni, oncall)                                                                                       |
| who     | string  | <i class="fas fa-check"></i>  | If **where** is 'direct' then the value should be a mail address or a phone number. Otherwise, it should be a collaborator name                       |
| how     | string  | <i class="fas fa-check"></i>  | A contact way (sms,email,push)                                                                                                |
| when    | string  |                               | An active period, during which this action will be performed ("08:00/18:00")                                                  |

Example:
```yaml
name: apcalypse
aggregations:
  - group: host
    by: rack
    threshold: 0.8
  - group: rack
    by: datacenter
steps:
  - name: A
    retry: 2
    duration: PT30M
    actions:
      - where: omni
        who: paul.bocuse
        how: sms
        when: "08:00/18:00"
      - where: oncall
        who: run-team
        how: email
  - name: B
    actions:
      - where: direct
        who: critical-incident@mycorp.net
        how: email
```

### Drone definition

A drone is a script run with custom parameters, which returns incidents from a metrics subset. You don't necssarily have to write drones, as basics ones are available on the [Registry](https://studio.metrics.ovh.net/omni/registry). **Life** drones, for example, will checks that a metric is recently pushed, and **range** drones will check that your metric's value is within a defined range.

If you wish to write your own, the script must be a WarpScript™, which takes and returns a specific structure.

Drone definition in a Yaml file:

| Key           | Type                                    | Required?                     | Description                                                               |
|---------------|-----------------------------------------|-------------------------------|---------------------------------------------------------------------------|
| name          | string                                  |                               | Name used in registry                                                     |
| type          | string                                  | <i class="fas fa-check"></i>  | Datatype on which this drone can work (metrics, in this context)             |
| version       | version                                 |                               | Version used in drone registry                                            |
| description   | string                                  |                               | A small description of the drone and its behaviour (can be a file path)   |
| public        | boolean                                 |                               | Set to 'true' to publish your drone in the registry                       |
| lang          | string                                  | <i class="fas fa-check"></i>  | Script language used (ws for WarpScript™)                                  |
| params        | map(parameter_name) -> parameter_config |                               | A map of drone parameters with their configurations                        |
| script        | string                                  | <i class="fas fa-check"></i>  | Can be a path to a file (./mydrone.ws) or the litteral script             |

A drone can have required or optional parameters, which you can define.

Parameter configuration:

| Key           | Type      | Required?                     | Description                                                   |
|---------------|-----------|-------------------------------|---------------------------------------------------------------|
| type          | string    | <i class="fas fa-check"></i>  | Can be string, number, date, period...                        |
| required      | boolean   | <i class="fas fa-check"></i>  | This is a condition your drone requires to function           |
| description   | string    |                               | This parameter is used to...                                  |
| default       | -         |                               | This depends of the parameter type                            |

Drone example:
```yaml
name: range
type: metrics
version: 1.0.0
description: return an anomalie if time series values are not in the MIN-MAX range
public: true
lang: ws
script: ./range.ws
params:
  min:
    type: number
    required: true
    description: lower bound of the range
  max:
    type: number
    required: true
    description: uppper bound of the range
  window:
    type: duration
    description: fetched time window
    default: 1h
```

#### Writing your own drone script

If the registry doesn't have a drone to suit your specific requirements, you can write your own drone scripts using WarpScript™. For more on this, refer to the [official documentation](https://www.warp10.io/doc/reference) or the [Warp 10™ tour](https://tour.warp10.io/#1-1).

Your script will require the following variables:

* **$token** The Read token you must use to authenticate
* **$selector** Metric name (selector)
* **$labels** Labels (part of the metric selector)
* **$now** Current timestamp

Alert parameters are added on top of your WarpScript™. Just prefix each parameter name with **$** to use them.
Optional parameters are not defined, so you will have to check if they exist.

OMNI expects your script to have only one entry in the stack at the end. This entry must be an array of incidents, each of which must have a unique **name** (like 'series selector'), and can have a **reason** and **details**.

WarpScript™ returns:
```ws
[
  { 'name' 'os.mem{host=A}' 'reason' 'MAX reached' 'details' '85% of memory used is to high' }
  { 'name' 'os.mem{host=D}' 'reason' 'MAX reached' 'details' '93% of memory used is to high' }
]
```

#### Range drone explanation
```ws
  [ $token $selector $labels $now $window ] FETCH                                 // Fetch data with defined parameters
  <% 'average' DEFINED %>                                                         // Check if optional parameter 'average' is defined
    <%
      [ SWAP bucketizer.mean $now $average 0 ] BUCKETIZE FILLPREVIOUS FILLNEXT    // Perform a downsampling with mean method 
    %>
  IFT
  [ ] SWAP                                                                        // Declare an empty array of incidents
  <%
    <% $isCounter true == %>                                                      // If the metric is flagged as continuous, growing counters
      <%
        [ SWAP mapper.rate 1 0 $gts VALUES SIZE 1 - -1 * ] MAP                    // Apply a rate to the metrics
      %>
    IFT

    'gts' STORE                                                                   // Store the current metric in the loop

    <% $gts VALUES SIZE 1 >= %>                                                   // Metric must have at least one value
      <%
        <% 'max' DEFINED %>                                                       // If optional MAX parameter is defined
          <%
            $gts [ SWAP bucketizer.max $now 0 1 ] BUCKETIZE                       // Get the maximum of the metric values  
            VALUES 0 GET 0 GET 'v' STORE
            
            <% 'precision' DEFINED %>                                             // Round the value 
            <%
              $v 10 $precision ** TODOUBLE *
              ROUND
              10 $precision ** TODOUBLE /
              'v' STORE
            %>
            IFT

            <% $v $max > %>                                                       // If the value is higher than MAX
                                                                                  // Add a new incident in the list
              <% { 'name' $gts TOSELECTOR 'reason' 'MAX' 'details' $v '>' $max ' ' 3 JOIN } 1 ->LIST APPEND %> 
            IFT
          %>
        IFT

        <% 'min' DEFINED %>                                                       // If optional MIN parameter is defined
          <%
            $gts [ SWAP bucketizer.min $now 0 1 ] BUCKETIZE                       // Get the minimal value of the metric
            VALUES 0 GET 0 GET 'v' STORE
            
            <% 'precision' DEFINED %>                                             // Round the value
            <%
              $v 10 $precision ** TODOUBLE *
              ROUND
              10 $precision ** TODOUBLE /
              'v' STORE
            %>
            IFT

            <% $v $min < %>                                                       // If the value is lower than the MIN
                                                                                  // Append a new incident in the list
              <% { 'name' $gts TOSELECTOR 'reason' 'MIN' 'details' $v '<' $min ' ' 3 JOIN } 1 ->LIST APPEND %>
            IFT
          %>
        IFT
    %> IFT
  %> FOREACH // Iter on all metrics
```

### Alert definition

An alert is the link between a drone, an endpoint, and plans.

Alert definition in a Yaml file:

| Key       | Type                                  | Required?                     | Description                                                   |
|-----------|---------------------------------------|-------------------------------|---------------------------------------------------------------|
| name      | string                                |                               | Alert name                                                    |
| message   | string                                | <i class="fas fa-check"></i>  | Content send when notification is sent, explain what happens  |
| drone     | string                                | <i class="fas fa-check"></i>  | Drone name used for this alert                                |
| endpoint  | string                                | <i class="fas fa-check"></i>  | Endpoint name used for this alert                             |
| schedule  | string                                | <i class="fas fa-check"></i>  | Drone scan frequency (1h 1m 15m)                              |
| params    | map(parameter_name)->parameter_value  |                               | Drone parameters at Alert scope                               |
| notify    | map(plan_name)->drone_config[]        | <i class="fas fa-check"></i>  | A map of the plan to trigger with their configuration             |

Drone configuration:

| Key       | Type                                  | Required?                     | Description                                           |
|-----------|---------------------------------------|-------------------------------|-------------------------------------------------------|
| selector  | string                                | <i class="fas fa-check"></i>  | Metrics selector ("~os.cpu{}")                        |
| params    | map(parameter_name)->parameter_value  |                               | Selector specific parameters (override Alert's ones)  |

Alert example:
```yaml
name: Low memory
message: |
  An host is critically low on memory. Low memory conditions are dangerous, because they could cause the OOM killer to activate.
  The OOM killer is unpredictable, and can kill many of the processes wthat are essential to the proper functioning of the system.

  You should investigate what is causing the box to run low on memory.
  Some actionable steps you can take to resolve this alert are:

  * Fix memory leaks in the applications running on the box
  * Spin up your service on instances with larger memory sizes

drone: range
endpoint: gra1
schedule: 1m
params:
  window: 5 m
  average: 1 m
  precison: 2

notify:
  apocalypse:
    - selector: 'os.mem{}'
      params:
        max: 80
    - selector: 'os.mem{host~xtrem.*}'
      params:
        max: 95
```

### Package your alerting

Since each entity is a yaml file, you can create a directory with your alerting project name.
This directory will receive four sub-directories, named after the four entities: **drones**, **plans**, **endpoints** and **alerts**.

You must define one entity per file in the corresponding directory. Each file must have a __.yaml__ or __.yml__ extension.

Each entity must also be named. You can set a __name__ key in the file, otherwise the file name will be taken as the entity name.

An alerting project is a git project. You can initialise your project directory this way with the command below:

```sh
$ git init
```

### Project lifecycle

#### Link your project

An alerting project is started with a git repository.
When you have a ready-to-use alerting definition in a git project, it's time to link your repository to OMNI.

In the OVH Studio's OMNI panel, you have two choices, depending of your git platform provider (Github, Gilab, Bitbucket etc.).

You can choose either a Github integration, or a manual link (additional provider integrations are planned).

#### Github provider

Making an OAuth to Github with OVH Studio is the easiest way to link repositories.

The OAuth can be done via user settings.

After a successful OAuth, you will see a list of your Github repositories in OMNI. You just have to clic on the **link** button to link it. The following actions will be performed:
* add an OMNI public SSH key (allowed to clone the repo)
* set a hook on push events (i.e. notify OMNI when a new version is committed)

You don't have anything else to do.

#### Manual link

A manual link can be done in three steps: configuration, security and hook.

The first step will ask for the name and description, which are free fields.

The git clone URL must a valid url, where OMNI is allowed to clone your project, that follows this pattern:

```sh
ssh://GIT_USER@DOMAIN.TLD/REPOSITORY.git
```

The default behaviour is to deploy your alerting project when a commit is pushed on the **master** branch, but you can also define a custom branch name.

During the security step, you can copy the OMNI public SSH key that will be used to clone your repository in your git platform provider's solution.

Finally, during the hook step, you will see the hook URL your provider must call when a new commit is pushed. In most of the cases, it will be a 'Hooks' configuration panel.

### Push modifications

Your repository is now linked, and OMNI is ready for your next pushed commit. Several actions will then take place. For each commit a build step is started, you will see the result in the __builds__ panel. Some verifications will then be performed (i.e. 'Is the drone used in the alert defined?', 'Can we parse this file?' or 'Does this secret exist?'). If the build is successful, you will be able to deploy it.

If the commit is done on your configured **master** branch and the build step is successful, then it can be deployed.

### Setup your team's notifications

On OVH Studio, you can set up email and/or phone notifications. You can also enable push notification system on your laptop/smartphone.

## Go further

Join our community of users on https://community.ovh.com/en/.
