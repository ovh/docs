---
title: Cron timezone
slug: timezone
section: App
---

**Last updated 26th March 2021**



## Objective  

All Web PaaS containers default to running in UTC time.  Applications and application runtimes may elect to use a different timezone but the container itself runs in UTC.  That includes the `spec` parameter for cron tasks that are defined by the application.

That is generally fine but sometimes it's necessary to run cron tasks in a different timezone.

## Setting the system timezone for cron tasks

The `timezone` property sets the timezone for which the `spec` property of any [cron tasks](../cron) defined by the application will be interpreted.

It defines **relative to which timezone** your cron is being run (to avoid having to calculate to and from UTC).

Its value is one of the [tz database region codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) such as `Europe/Paris` or `America/New_York`.  This key will apply to all cron tasks defined in that file.
This entry is only meaningful on cron specs that specify a particular time of day, rather than a "time past each hour".  For example, the sample below would run every day at 1:25 am New York time (automatically adjusting for daylight savings).

For example:

```yaml
timezone: "America/New_York"
    
crons:
  backup:
    spec: '25 1 * * *'
    cmd: |
      if [ "$PLATFORM_BRANCH" = master ]; then
          webpaas backup:create --yes --no-wait
      fi
```

## Setting an application runtime timezone

When differing from UTC, the runtime application requires the specific timezone to be set.
The underlying mechanism on how to set that timezone however depends on the runtime used, for which you can find a non-exhaustive list below:

* PHP runtime - You can change the timezone by providing a [custom php.ini](../../languages-php/ini) or by adding the following lines to your `.platform.app.yaml` file:

```yaml
variables:
   php:
       "date.timezone": "Europe/Paris"
``` 
* Node.js runtime - You can change the timezone by starting the server with `env TZ='<timezone>' node server.js`.
* Python runtime - You can change the timezone by starting the server with `env TZ='<timezone>' python server.py`.
* Java runtime - You can change the timezone by starting the server with `env TZ='<timezone>' java -jar ...`. An alternative to setting an environment variable is setting the JVM argument `user.timezone`. This JVM argument takes precedence over the environment variable TZ. For example, you can use the flag -D when running the application: `java -jar -Duser.timezone=GMT` or `java -jar -Duser.timezone="Asia/Kolkata"`

Setting the application timezone will only affect the application itself, not system operations such as log files.

> [!primary]  
> In the vast majority of cases it's best to leave all timezones in UTC and store user data with an associated timezone instead.
> 


