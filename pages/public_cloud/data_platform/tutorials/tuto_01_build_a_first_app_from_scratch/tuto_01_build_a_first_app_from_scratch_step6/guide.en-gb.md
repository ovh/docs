---
title: Build your analytics app from scratch on Data Platform - Visualize data
excerpt: ""
updated: 2023-11-01
---

## Build and deploy a front-end application

In this tutorial you'll **learn how to build and deploy your first application**. To make it easier for you, you won't start from scratch. We've prepared a template to accelerate the process, thanks to pre-built graphs.

Initiate your application by clicking on the **+** sign of the App Manager.

![App Manager](images/homepage-apps.png)

Select the template *ReactJS - Getting Started* from the store. Thanks to this template, you will be able to produce a great-looking BI dashboard in no time!

![App Manager](images/apps-store-new.png)

Fill in the different fields as shown in the screenshot below and press **Confirm**.

![App Manager](images/apps-settings-new.png)

Click on **Confirm**, your app will automatically build and deploy. The process should take a couple of minutes, in the meantime feel free to read through the pre-requisites below.

### Prerequisites

Every previous step of the Getting Started guide must have been completed:

- The API is up and running.
- Queries in the Analytics Manager are properly requesting your data warehouse.
- The Lakehouse Manager shows a properly built logical schema. Virtual attributes are created and tables linked.
- Your Data Processing Engine workflow has been correctly run.

### Set up your canvas

Click on the **Dashboard** menu. In the App Manager, dashboards are the pages of an app.

A first dashboard, *Rides Analytics*, has been added by default when you selected the template at the beginning. It comes with styles and logos!

![App Manager](images/createdashboard-empty.png)

Click on the **house** icon to set it as the default landing page of your app.

![App Manager](images/createdashboard.png)

#### Set up a header

Head to the **Menus** menu. It is the page where you can define items such as header menus and filters for your whole app. It has already been pre-populated with several pages and items due to the template you used to initiate the app.

You should land on the header page. This means every item you add here will be embedded in the header of your app (i.e the upper part). You can switch to the sidebar page (to embed items in the left sidebar of your app) at the top right-hand corner.

![App Manager](images/header-v-sidebar.png)

Switch back to the header page. Expand **tabs** to see the container's items. Click on *Add an item* to add a tab in your header. Select **link**.

![App Manager](images/create-menu.png)

Fill in the fields as shown below. You can also define a logo icon for your app header!

![App Manager](images/createmenu2.png)

#### Set up a dynamic parameter

Dynamic parameters are widgets to **filter your data on your pages**. Here, you will add one dynamic parameter to filter on the date.

Click on **Sidebar** on the top right-hand corner and create a container.

If you are unfamiliar with containers, think of them as folders for items.

![App Manager](images/create-sidebar.png)

Drag the new container on top of the footer (which has to be at the bottom).

![App Manager](images/create-sidebar2.png)

Open the container then add an item: select **Parameters**.

![App Manager](images/create-sidebar3.png)

Pick the *Select box* one, then head to the **options** of the new parameter.

![App Manager](images/createparameters.png)

Fill in the options as shown in the screenshot below.

![App Manager](images/parameters-options.png)

In the **Infos** tab, give it the following name: *select_stations*, and press **Confirm**.

> [!primary]
>
> Note that every dynamic parameter like the date picker and select boxes can be customized.
>

Your canvas configuration is now done. With a menu and a filter, you can now create your first graph.

### Set up a chart

Go to the **Dashboard** tab and click on the **Edit** icon on your *Ride Analytics* dashboard. You can see that the menu and the filter we've just created are well set up here!

![App Manager](images/empty-app-new.png)

#### Step 1. Create a panel

Click on the ➕ icon to create a panel (**Containers > Panel**).

![App Manager](images/create-panel-new.png)

Once it's created, you can resize it so it spans across the screen.

![App Manager](images/create-panel-new2.png)

#### Step 2. Give a title to your chart

**Inside your new panel**, click on the ➕icon and select **Basic UI > HTML**.

![App Manager](images/create-html-new.png)

Name it *Rides history* and apply the H1 style by clicking on the H button.

![App Manager](images/create-html-new2.png)

#### Step 3. Generate your chart

Inside your panel, click on the ➕icon and select **Chart**. Pick the *Recharts - Bar* type.

![App Manager](images/recharts-area-new.png)

Click on **Request**, and select **Query selector** to pick the *rides\_per\_month* query you've created in the Analytics Manager.

![App Manager](images/area-chart-query.png)

To complete the setup, you have to connect this chart with the filter we've already created. Go to the **Infos** tab, in the **Linked dynamic parameters** section, and add *select\_stations*.

![App Manager](images/area-chart-parameters.png)

You can now test if your filter is properly working. Enter the read-only mode by clicking on the **Play** icon, and modify dates or holiday type to see how your data is changing. Your first chart is done!

![App Manager](images/chart-readonly-new.png)

### Build and deploy the new version of your app

You're almost finished! Just one last step! Let's put your dashboard into production.

First, don't forget to **Save** your dashboard to make sure all your edits are consistently saved (💾 icon in the top middle bar).

![App Manager](images/save-app.png)

Then go back to the **Overview** tab of the Application Manager.

Changes brought to your application since you first created it **must be builded** in order to be visible by your end-users. You could stop the currently deployed version to build those changes, but Data Platform also allows you to do it [without interruption of service](https://en.wikipedia.org/wiki/Blue-green_deployment).  
First, **Copy** the currently deployed version of the application.

![App Manager](images/copy-app.png)

Then you need to name the new version (*v2* in the screenshot below).

![App Manager](images/enter-tag-name.png)

Now, click on **Build**, and then **Deploy**.

![App Manager](images/build-app2.png)

> [!primary]
>
> The **build** process usually takes a couple of minutes. If you're curious about what is going on or if the build fails, open the log console by expanding the version panel and inspect the logs.
>

Your app is **live** and can now be accessed online! The link can be obtained in the Overview tab by clicking on **Open**.

![App Manager](images/open-app.png)

![App Manager](images/dashboard-final-new.png)

That's it! Your dashboard is live and accessible by your users. Its data is refreshed automatically every day, stored in the cloud and will always be reliable.