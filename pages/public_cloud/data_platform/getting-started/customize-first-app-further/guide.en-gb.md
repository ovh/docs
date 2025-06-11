---
title: "Customize your first application further"
updated: 2025-02-15
---

## Objective

In this tutorial you'll discover advanced features of the App Manager to **customize the visual aspects** of a simple application. 

> [!primary]
> This tutorial contains extended content for the *Getting Started* section called [Build and deploy a front-end application](/pages/public_cloud/data_platform/getting-started/app-init/app-manager).

## Prerequisites
This tutorial assumes that you have been through **all five sections** of the [Getting Started tutorial](/pages/public_cloud/data_platform/getting-started/app-init/00-app-init-index). Your Data Processing Engine, your Lakehouse Manager, your Analytics Manager have been configured as described in their respective pages, and you have deployed an API as well as an APP which you are going to customize.

You will go through the following steps:

- [Create a more advanced chart](/pages/public_cloud/data_platform/getting-started/customize-first-app-further#create-a-more-advanced-chart)
- [Customize further](/pages/public_cloud/data_platform/getting-started/customize-first-app-further#customizing-further)
    - [Units](/pages/public_cloud/data_platform/getting-started/customize-first-app-further#units)
    - [Labels](/pages/public_cloud/data_platform/getting-started/customize-first-app-further#labels)
- [Rebuild and deploy a new version of your app](/pages/public_cloud/data_platform/getting-started/customize-first-app-further#rebuild-and-deploy-the-new-version-of-your-app)

## Create a more advanced chart

First, let's discover one more chart type: a horizontal bar chart to show the top 7 stations in terms of total traffic.

Instead of choosing a query that has already been prepared in the Analytics Manager, you can also **create new queries on the fly** when creating a chart. To do this, shrink down the first panel and **create** a second one next to it.

![App Manager](images/create-other-panel.png){.thumbnail}

Inside the second panel, click on the ➕icon and select **HTML**. Name it *Top 7 Stations* with style **H1**.

![App Manager](images/create-other-html.png){.thumbnail}

Inside the second panel, click on the ➕icon and select Chart. Pick the *Recharts - Bar Horizontal* type.

![App Manager](images/create-other-chart.png){.thumbnail}

In the Request tab, choose the _Request_ mode and enter *rides* as data (Sum and Descending) and *station_name* as scale.

![App Manager](images/create-other-chart2.png){.thumbnail}
![App Manager](images/create-other-chart3.png){.thumbnail}

One last step! Queries can be fully customized using the advanced JSON editor. More specifically, you need to add a custom parameter to **limit the number** of stations to 7. To do that, head to the advanced mode of your query as shown below and simply add `"limit":7,` below line 2 in the "data" JSON object:

![App Manager](images/query-advanced.png){.thumbnail}

So far, your dashboard should look something like this. Don't forget to **save** 💾.

![App Manager](images/chart-intermediate-new.png){.thumbnail}

## Customizing further

There is a lot that you can do in the App Manager to design your app exactly the way you want it.

### Units

Click on the **play** button at the top of the dashboard to switch to read-only mode. Hover over the bars of the *Top 7 stations* chart. 

![App Manager](images/show-units.png){.thumbnail}

These units could be formatted in millions for better clarity. To do that, go to the **Formatter** tab. A measure called *RIDES* was already added by choosing the Getting Started template.

> [!primary]
> More generally, if you need to add a new measure, it must have the **same name as the attribute** that you are trying to format.

![App Manager](images/new-formatter.png){.thumbnail}

As for the formatting parameters, enter *Mpax* for unit, *0* for round (to display integers), and *0.000001* for multiplicator (to display millions).

> [!primary]
> Don't worry about saving, the Formatter works in autosave mode.

![App Manager](images/formatter-round.png){.thumbnail}

Here's the result:

![App Manager](images/formatter-round2.png){.thumbnail}

## Rebuild and deploy the new version of your app

You're almost finished! Just one last step! Let's publish the recent changes to the dashboard in production. To do this, don't forget to save 💾 and then go back to the **Overview** tab of the Application Manager. You should first **Stop** the currently deployed application. As soon as it has shut down, click on **Build**, and then **Deploy**.

> [!primary]
> The **build** process usually takes a couple of minutes. If you're curious of what is going on or if the build fails: open the log console by expanding the version panel and inspect the logs. Feel free to send logs to our support team 💁💁‍♂️if you're not sure how to troubleshoot it yourself!

Your app is **live** and can now be accessed online!  
The link can be obtained in the Overview tab by clicking on **Open**.

![App Manager](images/open-app.png){.thumbnail}

![App Manager](images/dashboard-final-new.png){.thumbnail}

You can now kick back, relax and have a look at your figures.

<p><span style="color:red; font-size:20px;"><b> Congrats!</b></span></p>

**You've completed the Advanced application builder tutorial!**. You are now ready to build complex data applications on the Platform.

![congrats](images/congrats.gif){.thumbnail}

Obviously, you can come back to this tutorial at any time! We encourage you to check out the rest of the documentation to dive deeper into a specific component of the product when needed.

Also, don't hesitate to **get in touch** if you need anything, our support & product team is dedicated to helping you deliver faster any AI applications your have in mind.

## Go further

Join our [community of users](/links/community).

Do you want to learn how to deep-dive in the code and truly customize your apps the way you want it? We have got just the right tutorial for you!

[Customize your apps even further](/pages/public_cloud/data_platform/getting-further/app-dev/00-app-dev-index)

## Go further

Join our [community of users](/links/community).