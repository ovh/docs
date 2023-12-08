---
title: Build your analytics app - Step 2 - Organize data
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

## Create and Build your data models

The **Lakehouse Manager** is the next component you will be using. It is the component that controls:

- Data warehousing
- Policy Tag Management

Using the Lakehouse Manager let us plan out your data structure at the **conceptual level**. This will be done with the help of the *Tables* functionality.

![Lakehouse Manager](images/lakehouse-home.png)

### Organize your data in tables

#### Create your primary schema

##### Add tables to the data model

Once that your metadata has been extracted, it's time to head to the Tables dashboard. This is where you will **build a unified and queryable view of all your data**.

The empty Tables page should look like this:

![Lakehouse Manager](images/lakehouse-step1.png)

The *All tables* tab is where you have access to the entirety of your data. The *New View* tab allows you to create views of only a part of your data in order to collaborate better in large teams. Since this is a simple tutorial, you should work in the *All tables* tab.

Now let’s concentrate on creating your primary tables and their attributes.

First, hover your cursor over the blue ➕ icon on the left-hand side of the screen. This will reveal the create options :

- Upload a file
- Create from Data Catalog source
- Create an empty tables

> [!primary]
>
> For the purpose of this tutorial, we shall proceed with **Create from a Data Catalog source.**
>

![Lakehouse Manager](images/lakehouse-step2.png)

Once you click on *create from a data catalog source*, you will be shown a list of sources from the the previous step. Click on the source you want to add and proceed further by clicking on *Next*. No need to change the default settings here.

> [!primary]
>
> The options *Build the table, load the table once, and generate Load action for later* can be disabled and each step can be done individually as well.
>

Press **Create** and proceed to repeat the same with the second table as well.

![Lakehouse Manager](images/lakehouse-step3.png)

![Lakehouse Manager](images/lakehouse-step4.png)

> [!primary]
>
> Note that each time you make a change on the Tables page, your visual configuration is **automatically saved**.
> 

At this stage, your Tables page should look like this.

![Lakehouse Manager](images/lakehouse-step5.png)

> [!primary]
>
> Note that Data Platform uses the metadata information captured in the Analyzer step to automatically create tables and assign attribute names & types. The source files provided are good to go. However in a real Project you should use the Analyzer to check the data sources, before dragging and dropping them in the Tables page.
>

#### Create your aggregate Mart table

Now, you will aggregate all important data from the sources (namely rides, dates and temperatures) into one table that will be used in the final application. In Data Platform, tables that are derived from primary sources (*Prim* datasets) are of dataset type *Mart*.

To create your first *Mart* table, click on the blue ➕ icon. Select *Create an empty table*, and you will be shown a new table configuration where set its dataset as *Mart*, set a name (*dataset\_history* for example) and save it.

![lakehouse manager](images/lakehouse-step6.png)

Move the attributes below by drag and drop to *dataset\_history*:

| Original table | Attributes to drag-and-drop |
| :-: | --- |
| **stations_rides** | *date* / *station\_ride* / *lat* / *lng* / *rides* / *station\_name* |
| **chicago_calendar_full** | *month* / *temperature* / *week\_day* / *week\_day\_label* / *weekend* / |

![lakehouse manager](images/lakehouse-step7.png)

Finally, you will need to create one new attribute to help translate numerical temperature data into understandable categories (cold, hot, ..).

Start by clicking on the ➕ icon that appears at the top of the table *dataset\_history* when you click on it. You can then create or edit an attribute inside a table.

Define the attribute as such:

| Attribute name | Type | Nature |
| :-: | --- | --- |
| **cat_temperature** | String | Dimension |

![lakehouse manager](images/lakehouse-step8.png)

> [!primary]
>
> For the moment, this attribute is not physically specified but don't worry! It will be done soon in another component: the Data Processing Engine.
>

#### Finalize the build

> [!warning]
>
> Make sure to **double-check that your data model looks exactly like the one in the screenshots** before moving to the next step. If some attributes are missing you will get stuck in later steps of the tutorial.
>

![lakehouse manager](images/lakehouse-step9.png)

Now, click on the *Build* icon (under the blue ➕ icon) to effectively create/update the tables and attributes in your storage engine. This still doesn't load the data into the tables (which will be done in the next article), it simply applies the logical schema to tables and attributes in your underlying storage engine.

![lakehouse manager](images/lakehouse-step10.png)

While the visual logical schema of the data is automatically saved, changes to your tables won't be visible in the rest of the Data Platform as long as they are not built.

The build task shouldn't take more than a few minutes to run. Once it is done, you can move on.

#### Add relevant metrics with Virtual Attributes

Before moving on to the physical processing (ETL/ELT) of the data into this model, let's prepare additional metrics for analytics later on. The final application that you are building following this tutorial includes a chart with the **number of rides per day on a given station**:

![lakehouse manager](images/dashboard-final-new.png)

However, you do not have the necessary data to build that chart directly on the primary sources. You will need a metric that gives you the average number of rides per day for a given station and that can be used in queries and dashboards.

But how do you compute it using Data Platform? One way to do this is to create a **virtual attribute**. Virtual attributes allow you to calculate SQL formulas that will be **computed on the fly** and won't be stored in the database. They can be used in a query or a chart in your final dashboard.

> [!primary]
>
> 💡 Adding or editing virtual attributes does not require rebuilding the schema.
>

Switch to the **Attributes** page. This page lists all physical and virtual attributes in your data model, and the lineage in your Project.

![lakehouse manager](images/attributes-step1.png)

Click on the *New Attribute* button to create a virtual attribute.

![lakehouse manager](images/attributes-step2.png)

In the creation window, make sure to select *Virtual* as the realm.

![lakehouse manager](images/attributes-step3.png)

Now add these two attributes and their respective SQL code:

| Attribute name | SQL |
| :-: | --- |
| **avg_rides_per_day_per_station** | SUM(rides)/COUNT(DISTINCT CONCAT(CAST(date AS VARCHAR), CAST(station\_id AS VARCHAR))) |
| **yearmonth** | SUBSTR(CAST(date as VARCHAR),1,7) |

The **yearmonth** attribute gives you the year and month in the format *yyyy-mm*. You will use it later.

<ul class="prevnext">
    <li>
        <h4>Connect sources in the Data Manager</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step1"></a>
    </li>
    <li>
        <h4>Prepare the data on the Data Processing Engine</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step3"></a>
    </li>
</ul>