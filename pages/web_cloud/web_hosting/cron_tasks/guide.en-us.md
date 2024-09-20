---
title: "Using automated tasks on a Web Hosting plan"
excerpt: "Find out how to configure scheduled jobs on your Web Hosting"
updated: 2024-05-16
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objective

On OVHcloud Web Hostings, you can use scripts to automate certain operations. Creating a scheduled task ("cron job") is the easiest way to ensure your scripts are running at specific times without further actions necessary on your part. 

**This guide explains how to create cron jobs to automate scheduled tasks on a Web Hosting.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or reach out to the [OVHcloud community](/links/community) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager) with the necessary permissions to manage the Web Hosting plan 

## Instructions

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Hosting plans`{.action}, then choose the Web Hosting plan concerned. Next, navigate to the `cron`{.action} tab by selecting it in the `More`{.action} submenu.

In this section you will see an overview of your scheduled jobs and their settings.

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}

### Creating an automated task

#### Step 1: Defining general settings

To create a new cron task, click on the `Add a scheduling`{.action} button on the right-hand side. You can customise the settings for the task in the new window.

![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}

|Option|Description|   
|---|---|   
|Command to be executed|Define the path to the file containing your script. Example: www/jobs/cron.php|   
|Language|Select the PHP version the script is using.|
|Activation|Choose whether the task will be active after creation or activated later.| 
|Logs by email|If necessary, select a contact (admin or technical) to whom a report will be sent in case of an execution error. You can also provide an alternative email address.| 
|Description|Enter a description to keep track of what your tasks do.| 

Click on `Next`{.action} to proceed to the second step.

#### Step 2: Setting the frequency

The interface offers two modes to configure the frequency of your task. Use the **Basic mode** for a beginner-friendly selection of scheduling options. If you prefer to directly enter a frequency, similar to a cron table format (*crontab*), choose the **Advanced mode**.

|Basic mode|
|---|
|Use the drop-down menus to specify the time of day, days of a month, week days and months for the task.|
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|

|Advanced mode| 
|---|
|Enter numeric values as you would in a *crontab*. The asterisk operator denotes "every value" of the time period, meaning the task would continuously run **once an hour every day** in this example.|
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|

> [!primary]
>
> The `Days`{.action} form allows you to define execution frequencies on a monthly cycle.
>
> The `Days of the week`{.action} form allows you to define additional execution frequencies, but on a weekly cycle.
>

You can switch between the two modes during configuration to view the changes accordingly. Please also note the [limitations when scheduling a task on a Web Hosting](./#limitations-of-web-hosting-tasks).

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.gif){.thumbnail}

#### Step 3: Finishing the setup

The summary lists all your settings including the *crontab* notation of the execution frequency. If everything is correct, click on `Confirm`{.action}.

![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}

The task will be ready within a few minutes. You can then modify all of its settings or delete the task by clicking on `...`{.action} in the overview table in your OVHcloud Control Panel.

### Modify or delete a scheduled task

To do this, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that pops up, click on the `More`{.action} tab, then `Cron`{.action}.
6. In the table that appears, click the `...`{.action} button to the right of the scheduled task concerned.
7. Click on the `Edit`{.action} or `Delete`{.action} button, depending on the action you want to perform on the scheduled task.

### Limitations of Web Hosting tasks

|Functionality|Description|
|---|---|
|Hourly scheduling|You might notice that the field for "Minutes of the hour" is disabled in the interface (set to "?" in the *crontab* view). A task can only be executed once an hour as the highest repetition frequency and the minute of execution cannot be specified.|
|Running time|The time limit for a task is 60 minutes. If a script exceeds this running time, it will be stopped automatically by the system.|
|Variables|You can only define variables in a script. Adding them to the URL calling the script will not work (Example: www/jobs/cron.php?variable=value).|
|Data limit|A task can only generate up to 5 MB of data (*stdin/stderr*). For example, if a script writes data into a .txt file, the execution will be stopped automatically once the file reaches 5 MB in size.|
|Scripts producing errors|If a script is faulty, it will be automatically disabled after 10 failed execution attempts. The error report will only be sent when the 10 attempts have failed.</br>Correct your script according to the error report received, then reactivate the cron task in the Control Panel (click `...`{.action} then on `Edit`{.action}.)|
|Execution reports|Reports will be sent to your selected email address only once a day (during night hours).|

### Troubleshooting

#### Testing your script with a web browser

A simple test to see if your script will produce an error is to run it in a web browser. For example, if the file path of your script is "www/cron.php" and your hosting domain is "mypersonaldomain.ovh", you would use the URL "http://<i></i>mypersonaldomain.ovh/cron.php". If no error is showing up but the script is not performing as expected, follow up with the suggestions below.

#### Verifying the usage of absolute paths

Always make sure to use absolute paths to files in your scripts. The "DIR" constant, for example, can help to receive the current path in PHP scripts ([PHP documentation](http://php.net/manual/en/language.constants.predefined.php)).
 
#### Checking your execution logs

In your Web Hosting's logs, accessible from the [OVHcloud Control Panel](/links/manager), you will see the log category labelled "cron".

Please refer to [this guide](/pages/web_cloud/web_hosting/logs_and_statistics) for details.

##### **Example logs**

- Example of a successfully finished execution output

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2023-08-11 00:36:01] 
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Example of a failed execution output due to exceeded execution time

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2023-08-11 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2023-08-11 01:36:01] ## OVH ## END - 2023-08-11 01:36:01.086166 exitcode: 0
</code></pre>

- Example of a failed execution output because the script file was not found in the specified path

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2023-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-11 00:36:01.086166 exitcode: 255
</code></pre>

- Example of a failed execution output because of a permissions error (chmod) or incorrect configuration of the .ovhconfig file

<pre class="bgwhite"><code>
[2023-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2023-08-11 18:07:10]
[2023-08-11 18:07:10] ## OVH ## END - 2023-08-11 18:07:10.969840 exitcode: 255
</code></pre>

## Go further <a name="go-further"></a>

[Configuring the .ovhconfig file of your Web Hosting plan](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Using SSH on a Web Hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).