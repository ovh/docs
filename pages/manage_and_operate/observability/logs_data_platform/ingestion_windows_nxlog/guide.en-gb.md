---
title: Pushing logs with a forwarder - NXLog (Windows)
updated: 2023-01-16
---

## Objective

At OVHcloud, we love Microsoft products too. So it is important for us to provide you a way to send your Windows Logs to Logs Data Platform. All you need is 15 minutes and one software: [NXLog](http://nxlog.co){.external}. NXLog is one of the leaders of the log management tools. Its configuration is fairly simple and can get you started in a few minutes.

## Requirements

For this tutorial you will need to have completed the following steps :

- [Activated your Logs Data Platform account.](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
- [To create at least one Stream and get its token.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

## NXLog

You can find NXLog at its official website [nxlog.co](http://nxlog.co){.external}. Please go to the official website and download the latest version for Windows (2.10.2150 at the time of writing). Be sure to have Administrator rights before proceeding. Once you have it, install it on your system. By default, the program will install itself in **C:\\Program Files\\nxlog\\**. Navigate to this folder to edit the configuration file **nxlog.conf** present in the folder **conf**.

## Configuration

To configure NXLog, you will need to copy and store the LDP cluster certificate. You can find it in the **Home** page.

![LDP certificate](images/ssl.png){.thumbnail}

You will need to copy the certificate, then paste and save it as a file. Ensure the file is named **ldp.cert** and put this file under the **C:\\Program Files\\nxlog\\cert** folder.

The configuration is pretty much straightforward. Here is the configuration file that allows you to configure your NXLog.

```ApacheConf
 ## This is a sample configuration file. See the nxlog reference manual about the
 ## configuration options. It should be installed locally and is also available
 ## online at https://docs.nxlog.co/userguide/documentation.html

 ## Please set the ROOT to the folder your nxlog was installed into,
 ## otherwise it will not start.

 #define ROOT C:\Program Files\nxlog
 define ROOT C:\Program Files (x86)\nxlog
 define CERTDIR %ROOT%\cert

 Moduledir %ROOT%\modules
 CacheDir %ROOT%\data
 Pidfile %ROOT%\data\nxlog.pid
 SpoolDir %ROOT%\data
 LogFile %ROOT%\data\nxlog.log

 <Input in>
     Module      im_msvistalog
 # For windows 2003 and earlier use the following:
 #   Module      im_mseventlog
 </Input>

 <Processor OVH_TOKEN>
     Module      pm_null
     Exec        $TOKEN='XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
     Exec        rename_field("TOKEN","X-OVH-TOKEN");
 </Processor>

 <Extension gelf>
     Module xm_gelf
 </Extension>

 <Output out>
     Module      om_ssl
     Host        <your_cluster>.logs.ovh.com
     Port        12202
     CAFile      %CERTDIR%\ldp.crt
     AllowUntrusted FALSE
     OutputType      GELF_TCP
 </Output>

 <Route 1>
     Path        in => OVH_TOKEN => out
 </Route>
```

Let's explain a few important points in this configuration:

- The line **define CERTDIR %ROOT%\cert** is mandatory to indicate to NXLog where it will find the certificate of Logs Data Platform.
- The **Input** part is the same as the default configuration. Do not touch it ;-).
- The **Processor** module is where the OVHcloud Token magic happens: Replace your token here.
- The **Extension** activates the built-in GELF module that encodes the log in the GELF format
- The **Output** module is the one that will send the logs to Logs Data Platform by defining the CA certificate used to trust the server and the encoding used. Note that you will have to use the address of your assigned cluster. This is also where you use the path of the certificate downloaded just before. This module also define that we use the Gelf Encoding.
- The **Route** setting puts all these things together by building a pipeline using the source, processing and the output modules.

## Start NXLog

You have two ways to start NXLog. The first one is to launch the main Executable: **C:\Program Files\nxlog\nxlog.exe**. This is convenient when you are pretty sure that your configuration is correct. But if you want to be able to start, stop or restart the nxlog service, it would be better to use the Windows Service Manager. This Manager is located deep in the Configuration Panel of Windows.

Go to **Control Panel**, then locate **Administrative Tools** and then double-click on **Services** to display the manager. In this menu you should find the service nxlog in the list. There is a start, stop and restart action available in the contextual menu (Right-click on it).

Excuse my French screenshot detailing where to find it:

![Restart Screenshot](images/panel_config.png){.thumbnail}

If something bad happens, you will find the logs and a pretty good explanation in the file: **C:\Program Files\nxlog\data\nxlog.log**. If everything is correct you should find these kinds of lines in the same file:

```text
 2016-04-08 19:53:26 INFO connecting to <your_cluster>.logs.ovh.com:12202
 2016-04-08 19:53:26 INFO successfully connected to <your_cluster>.logs.ovh.com:12202
```

Jump to Graylog (use the Graylog access button in the Manager) and to the stream associated to your token to display your logs. As you can see, The Event Log format of windows is already structured and allows you immediately to analyze your services and processes.

![Graylog Screenshot](images/graylog.png){.thumbnail}

I think that's pretty much it. I know, it didn't even take 10 minutes :-).

If you want to go further, don't hesitate to try the [NXlog documentation](https://docs.nxlog.co/userguide/documentation.html){.external}

## Getting Help

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
