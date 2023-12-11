---
title: Build your analytics app - Step 5 - Expose through API
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
    border:1px solid #d8d8d8 !important;
    border-radius:8px !important;
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

## Deploy your first API

An API is crucial as it is the interface between the external world (namely your applications) and the rest of your Project (i.e. your Data Manager and queries). You will have to call this API when building your application, in the next and final tutorial.

![Project home](images/homepage-api.png)

### Create a new API

From your Project's home page, click on **+** inside the API module.

You will be able to choose between **an existing API template** from the internal *Data Platform Store*, or to **import your own code** by linking a Git repository.

Since you're just starting, we've made a simple NodeJS template just for you. Proceed by selecting the only template available: *API NodeJS*.

![API store](images/api-store-new.png)

Choose a name for your API, and enable the option **auto build** & **auto deploy**. This will download the source code of your API, automatically build it and deploy it for you.

![API settings](images/api-settings-new.png)

From there, give it a couple of seconds as the creation of the API may take a moment.

![API building home](images/api_building1.png)

When the deployment is complete, the **Open** button appears.

![API deployed](images/api_deployed.png)

When you open your API, you will land on the screen below confirming that your API is alive & healthy. It's that easy!

![API open](images/api_open.png)

The next and final step will consist of creating and deploying your first application on Data Platform in under 5 minutes.

<ul class="prevnext">
    <li>
        <h4>Make queries in the Analytics Manager</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step4"></a>
    </li>
    <li>
        <h4>Visualize it on the APP Manager</h4>
        <a href="/pages/public_cloud/data_platform/tuto_01_build_a_first_app_from_scratch_step6"></a>
    </li>
</ul>