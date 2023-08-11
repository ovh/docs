---
title: HipChat
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

The [HipChat](https://hipchat.com) integration allows you to send notifications about your Web PaaS activity directly to HipChat.

## Setup

### 1. Find the HipChat ROOM-ID.

* In the HipChat web administrative UI, go to _Admin > Rooms_ and click on the room to link notifications.
* Note down the "APP ID" listed in the _Room Details_ on the Room's 'Summary' page (you can also find the ID from the URL).

### 2. Generate a room-specific HIPCHAT-TOKEN.

* Click on the Room's 'Tokens' page in the sidebar.
* In the _Create New Token_ section specify 'PlatformSH' as the token's label and click "Create" button.
* Note down the Token value.

### 3. Create the HipChat webhook with WebPaas CLI.

```bash
webpaas integration:add --type=hipchat --room=ROOM-ID --token=HIPCHAT-TOKEN
```

There are a number of optional parameters as well who's **default values** include:

* `--events=*`  (All Events)
* `--environments=*`  (All Environments)
* `--excluded-environments=` (Empty)
* `--states=complete`  (Complete state only)

You're given a chance to customize these parameters in an interactive shell prompt, or you may **override the defaults on the command line**:

* `--states=pending,in_progress,complete` (All states)

## Validate the integration

You can then verify that your integration is functioning properly [using the CLI](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations-overview#validating-integrations) command

```bash
webpaas integration:validate
```
