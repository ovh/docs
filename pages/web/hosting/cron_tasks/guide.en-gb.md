---
title: 'Using automated tasks on a Web Hosting plan'
excerpt: 'Find out how to configure scheduled jobs on your Web Hosting'
slug: hosting_automated_taskscron
legacy_guide_number: g1990
section: 'Automated tasks (CRON)'
---

**Last updated 10th September 2020**

## Objective

On OVHcloud Web Hostings, you an use scripts to automate certain operations. Creating a scheduled task ("cron job") is the easiest way to ensure your scripts are running at specific times without further actions necessary on your part. 

**This guide explains how to create cron jobs to automate scheduled tasks on a Web Hosting. **

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) with the necessary permissions to manage the Web Hosting plan 


## Instructions

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. Next, navigate to the `Scheduled jobs - Cron`{.action} tab by selecting it in the `More +`{.action} submenu.

In this section you will see an overview of your scheduled jobs and their settings.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Creating an automated task

#### Step 1: Defining general settings

To create a new cron task, click on the `Add a scheduling`{.action} button on the right-hand side. You can customise the settings for the task in the new window.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Option|Description|   
|---|---|   
|Command to be executed|Define the path to the file containing your script. Example: www/jobs/cron.php|   
|Language|Select the PHP version the script is using or choose "Other".|
|Activation|Choose whether the task will be active after creation or activated later.| 
|Logs by email|If necessary, select a contact (admin or technical) to whom a report will be sent in case of an execution error. You can also provide an alternative email address.| 
|Description|Enter a description to keep track of what your tasks do.| 

Click on `Next`{.action} to proceed to the second step.

#### Step 2: Setting the frequency

The interface offers two modes to configure the frequency of your task. Use the **Basic mode** for a beginner-friendly selection of scheduling options. If you prefer to directly enter a frequency, similar to a cron table format (*crontab*), choose the **Advanced mode**. You can switch between the two modes during configuration to view the changes accordingly. Please also note the [limitations when scheduling a task on a Web Hosting](./#limitations-of-web-hosting-tasks).

|Basic mode|Advanced mode| 
|---|---| 
|Use the drop-down menus to specify the time of day, days of a month, week days and months for the task.|Enter numeric values as you would in a *crontab*. The asterisk operator denotes "every value" of the time period, meaning the task would continuously run **once an hour every day** in this example.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Step 3: Finishing the setup

The summary lists all your settings including the *crontab* notation of the execution frequency. If everything is correct, click on `Confirm`{.action}.

![cron confirmation](images/cron-jobs-6.png){.thumbnail}

The task will be ready within a few minutes. You can then modify all of its settings or delete the task by clicking on `...`{.action} in the overview table in your OVHcloud Control Panel.


### Limitations of Web Hosting tasks

|Step|Description|
|---|---|
|Hourly scheduling|You might notice that the field for "Minutes of the hour" is disabled in the interface (set to "?" in the *crontab* view). A task can only be executed once an hour as the highest repetition frequency and the minute of execution cannot be specified.|
|Running time|The time limit for a task is 60 minutes. If a script exceeds this running time, it will be stopped automatically by the system.|
|Variables|You can only define variables in a script. Adding them to the URL calling the script will not work (Example: www/jobs/cron.php?variable=value).|
|Data limit|A task can only generate up to 5 MB of data (*stdin/stderr*). For example, if a script writes data into a .txt file, the execution will be stopped automatically once the file reaches 5 MB in size.|
|Scripts producing errors|If a script is faulty, it will be automatically disabled after 10 failed execution attempts.|
|Execution reports|Reports will be sent to your selected email address only once a day (during night hours).|



### Troubleshooting

Test how your automated task will run with a web browser

You can test your script directly from your internet browser to see if this is causing an error. 
For example, if your Cron is in the www/cron.php directory and your domain name is test.com, you would type the URL http://test.com/cron.php.
In order to optimise the test, your version of PHP should be the same as the one you provided when creating your automated task.
If you have an error, you have to correct your script. If no error has been detected, we suggest that you check the logs linked to the execution of your Cron jobs.


To make sure that your Cron job works, you have to use absolute paths in your script not relative paths.
To get the address of the current path you can use the "_DIR_" constant:  
[PHP documentation](http://php.net/manual/en/language.constants.predefined.php)


If the script used by your Cron task uses other scripts, you must use an absolute path for this to work. The absolute path for your hosting begins with:

```
/home/loginFTP/
```


Exitcode 0  OK

Exitcode 255  Error




### Example logs

Correct script execution:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```

Execution script error because the file could not be found:

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```

Script execution error following timeout:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
tuesday 23 december 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```

Script execution error following excessive data output:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```

Script execution error because of a permissions error (chmod) or incorrect configuration of the .ovhconfig file:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```


## Go further

Join our community of users on <https://community.ovh.com/en/>.


## View execution logs for your automated task
Select your platform under hosting in the left-hand column then click "More +".

![](images/4012.png){.thumbnail}
Then click on the link to access "Logs" and statistics.

![](images/4013.png){.thumbnail}
If your automated tasks were executed over the day, you can view the execution logs in the OVH Speed Log (1).

-> If your task was executed over 24 hours ago, select the log file for the month that you wish to view.

![](images/3274.png){.thumbnail}
Example execution logs for an automated task:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


In this case, the following line from the log demonstrates that my automated task has not run correctly because the path to the script is incorrect or does not exist:


```
Could not open input file: /homez.600/loginftp/www/cron.php
```

