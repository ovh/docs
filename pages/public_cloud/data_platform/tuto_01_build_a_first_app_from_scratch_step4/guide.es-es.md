---
title: Build your analytics app - Step 4 - Create queries
excerpt: ""
updated: 2023-12-08
---

<style>
.prevnext {
    display:flex !important;
    list-style:none !important;
    margin:25px 0 50px !important;
    padding:0 !important;
}
.prevnext > li {
    background:#efefef !important;
    border-radius:8px !important;
    border:1px solid #d8d8d8 !important;
    box-shadow: 0 3px 13px 0 rgba(151, 167, 183, 0.3) !important;
    flex:1 !important;
    padding:5px 20px !important;
    position:relative !important;
}
.prevnext > li:empty {
    visibility:hidden !important;
}
.prevnext > li > h4 {
    color:#08c !important;
}
.prevnext > li > a {
    bottom:0 !important;
    left:0 !important;
    position:absolute !important;
    right:0 !important;
    top:0 !important;
}
.prevnext > li:first-child {
    margin:25px 10px 0 0 !important;
}
.prevnext > li:first-child > h4:before,
.prevnext > li:last-child > h4:before {
    color:rgba(0,0,0,.6) !important;
    content:"Previous step" !important;
    display:block !important;
    font-size:70% !important;
    margin-bottom:10px !important;
    text-transform:uppercase !important;
}
.prevnext > li:last-child {
    margin:25px 0 0 10px !important;
    text-align:right !important;
}
.prevnext > li:last-child > h4:before {
    content:"Next step" !important;
}
</style>

## Create queries on your data

The **Analytics Manager** allows you, thanks to a **low-code approach**, to prepare and centralize the queries matching your business KPIs. This component constitutes the interface between your data scientist team and your application developer team.

### Pre-requisites

Beforehand, you need to make sure all the previous steps of the Project are up and running. Your Lakehouse Manager schema was built properly and your workflow ran smoothly.

In this tutorial, you will build your first queries.

![query-builder](images/homepage-am.png)


### Build your first queries

Now, you will create your first queries in order to make data ready for visualization:

- *rides_per_month* to understand the average number of rides each month. You'll use it to build your first graph.
- *rides_per_cat_temperature* to understand the average number of rides depending on temperature.

#### Create the first query

Open **Queries** in the sidebar and then click on **New Query**. This will open the Query window where you can give your query a name, parametrize the data as well the scale, order the results and add filters. In this screen, you can also view the results of your queries with tables or charts.

![analytics manager](images/new-query.png)

To begin with, name your query `rides_per_month`.

Then start typing 'avg_' in the **Data search bar** and click on the *avg_rides_per_day_per_station* attribute.

![query-builder](images/new-query2.png)

The compute mode is **select** by default, you can change it by clicking on the arrow and changing the selected options. For the purpose of this tutorial, leave it as it is by default here.

![query-builder](images/query_avg.png)

Then, click on the **Scale search bar**. Here, you want to display the average number of rides **each month** per date. Select *yearmonth* as a scale.

![query-builder](images/query-scale.png)

Then, click on the green button **Run** to run the query. You'll see the result of the query at the bottom panel, by default it is on table view.

You can change the display format: table, line chart, bar chart, area chart or pie chart. Choose by clicking on the buttons of the bottom panel (as indicated in the image below).

![query-builder](images/query-vis.png)

> [!primary]
>
> When you build a query in the Analytics Manager, you don't have to specify the table names. Data Platform will **automatically choose the most suitable table**. But you can still force a specific table by clicking the table icon next to *Data*.  
>

#### Create a second query

Queries aren't meant to be used in a dashboard only, they also provide an easy environment to explore your data using an array of data visualization options.

Create a new query:

- Name it `rides_per_cat_temperature`.
- Select *avg_rides_per_day_per_station* with compute mode **select**.
- Select *cat_temperature* as your scale.
- Select *avg_rides_per_day_per_station* as the **Order** (ascending order by default).

> [!primary]
>
> If you remember, *avg_rides_per_day_per_station* is a virtual attribute you have set in a previous step of the tutorial (Collect data). You cannot use any other compute mode than **Select** with this virtual attribute as it contains an SQL aggregate function. Adding **Sum** as compute mode would end up imbricating two SQL aggregate functions, resulting in an error.
>

Just like the screenshot below, click on **bar chart icon** to automatically display the data as a bar chart.

![query-builder](images/second-query.png)

**Congrats!** You've successfully created 2 queries using the Analytics Manager. Now let's move on to the API part. You will create and deploy an API in a few clicks in order to expose your data in your final application.

<ul class="prevnext">
    <li>
        <h4>Prepare the data on the Data Processing Engine</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step3"></a>
    </li>
    <li>
        <h4>Expose your data on the API Manager</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step5"></a>
    </li>
</ul>