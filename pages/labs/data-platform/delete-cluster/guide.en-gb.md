---
title: Delete your Data Platform
excerpt: Learn how to delete your Data Platform.
section: How-to
order: 7
---

## Before you begin

In order to destroy your cluster you first need to get an OpenStack token of your Public Cloud project.
To do so:

1.  Login to your [OVH Manager](https://www.ovh.com/manager/public-cloud/index.html)
2.  Select your project in the sidebar
3.  Go to the *Project Management* -> *Users* section
4.  If you don't have a user, create one and save tour password
5.  Click on the option button of your user and select *Generate an OpenStack token*
6.  Enter your user password and retrieve your token

## Delete your Analytics Data Platform

To delete your Analytics Data Platform:

1.  Go on the [OVH API](https://api.ovh.com/console/#/) web page and log in
![OVH API](images/api.png)
2.  In the **/analytics** section, select the route `/analytics/platforms/{serviceNane}/destroy`
![Destroy endpoint](images/destroy.png)
3.  In the field *serviceName*, enter your cluster ID and , in the *osToken* field, enter your token.
4.  Press the excute button

You can know if your cluster is destroying or destroyed by watching its status in your OVH manager (see [Get your Data Platform status](../get-status/guide.en-gb.md))

