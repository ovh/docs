---
title: Build your analytics app - Step 1 - Connect sources
excerpt: ""
updated: 2023-11-30
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
    border:1px solid #d8d8d8 !important;
    border-radius:8px !important;
    box-shadow: 0 3px 13px 0 rgba(151, 167, 183, 0.3) !important;
    flex:1 !important;
    padding:5px 10px !important;
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

## Define, analyze and clean your data sources

In this step, you will learn how to **connect your first data source** to your Project, **analyze** and **clean** it in a consistent way so that relations between your data can be understood at a glance.

The **Data Catalog** is the first component you should use when starting out on your Project. It is the component that controls:

*   Data sources collection
*   Data analysis & cleaning

![Data Catalog](images/datacatalog-home.png)

The data source consists of two CSV files containing data about Chicago weather and public transport.

### Connect your first source

Let’s go get your data!

> [!primary]
>
> To get your data, download the following files [here](https://raw.githubusercontent.com/ovh/docs/develop/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch_step1/resources/chicago_files.zip). Once unzipped, you will find 2 *.csv* files:
> 
> *   *chicago\_calendar\_full.csv* - a table with weather conditions by day where each row represents a day.
> *   *station\_rides.csv* - a table with railway usage information per station per day where each row represents a day on a given station.
>

Inside the Data Catalog, go to the menu **Sources** (1) and click on the **New Source** (2) button on the top right-hand corner to connect your very first data source.

![Data Catalog](images/datacatalog-step1.png)

There are many connectors supported by the Data Platform. In this tutorial, you will use a simple file upload.

Look for *File upload* in the search bar, click on the icon and then click on the green *Select* button or you can quickly click the *File Upload* button on the bottom right.

![Data Catalog](images/datacatalog-step2.png)

Give a name to your source: for example *chicago\_files*.

Then you can **drag & drop or upload the 2 files** provided at the beginning of the tutorial, and click on **Create**.

![Data Catalog](images/datacatalog-step3.png)

Your files are now loaded to a Data Platform bucket

![Data Catalog](images/datacatalog-step4.png)

Now, let's move on to extracting their metadata.

### Analyze your source data

You should still be inside the Data Catalog component. Click on **Analyzer** from the left-hand menu. Here you will extract metadata (i.e. information about your data) from your sources and choose which columns you want to display.

The two source files you just uploaded appear on the sidebar. Click on the respective source name (i.e. *chicago\_files*) to expand it. Then, click on each of the files to automatically launch a metadata extraction.

![Data Catalog](images/datacatalog-step5.png)

The metadata extraction should take around 30 seconds.

> [!primary]
>
> The Analyzer is also where you can add blueprint rules (by clicking on the blue button *New Rule*). Data Platform automatically applies a formatting transformation on dates to set them in a standard *yyyy-mm-dd* format.  
>

<ul class="prevnext">
    <li>
        <h4>Introduction</h4>
        <a href="/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch/tuto_01_build_a_first_app_from_scratch_intro"></a>
    </li>
    <li>
        <h4>Organize your data in the Lakehouse Manager</h4>
        <a href="/pages/public_cloud/data_platform/tutorials/tuto_01_build_a_first_app_from_scratch/tuto_01_build_a_first_app_from_scratch_step2"></a>
    </li>
</ul>