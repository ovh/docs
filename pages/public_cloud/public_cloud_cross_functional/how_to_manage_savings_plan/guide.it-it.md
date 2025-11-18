---
title: How to manage a Savings Plan (EN)
excerpt: Learn how to manage a Savings Plan using different tools
updated: 2025-04-28
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objective

This guide aims at providing a clear and detailed method for creating and updating Savings Plans for your resources. You will discover how to manage your Savings Plans using the OVHcloud Control Panel, the OVHcloud API and Terraform. By following this guide, you will be able to:

- Create a Savings Plan for your resources.
- Modify a Savings Plan.
- Automate the management of Savings Plans via the API or Terraform for greater efficiency and flexibility.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Dd7P7CUN21M?si=OvK6Gec1BLFFB25O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api) (create your credentials using [this guide](/pages/manage_and_operate/api/first-steps))
- Being familiar with [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform) if you intend using it.
- Being familiar with the principles of [Savings Plans](/links/public-cloud/savings-plan)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager) and go to the `Public Cloud`{.action} section. Once you have selected your Public Cloud project, click on `Savings Plans`{.action} in the left-hand navigation bar under **Impostazioni**.

### Create a Savings Plan

You can create your Savings Plan for the type of resource you want by following these steps:

> [!tabs]
> Via the OVHcloud Control Panel
>> Click the `Create a Savings Plan`{.action} button.
>>
>> ![Savings Plan menu](images/savings_plan_menu.png){.thumbnail}
>>
>> Select the type of resource for which the Savings Plan will apply, define the specific resource model and specify the number of resources affected by this plan.
>>
>> ![Savings Plan service](images/savings_plan_service.png){.thumbnail .h-600}
>>
>> Choose the duration of your Savings Plan from the available durations and give it a name.
>>
>> ![Savings Plan duration name](images/savings_plan_duration_name.png){.thumbnail}
>>
>> Read the Terms and Conditions carefully, then tick the box to confirm you accept them. Once all the parameters have been configured, click the `Create a Savings Plan`{.action} button to finalise the creation.
>>
>> ![Savings Plan terms/conditions and create](images/savings_plan_terms_and_creation.png){.thumbnail}
>>
> Via Terraform
>> To create a Savings Plan, you will need at least 5 elements:
>> 
>> - The ID of your Public Cloud project.
>> - The flavour concerned by your Savings Plan
>> - The duration of your Savings Plan (in standard ISO 8601 format)
>> - The number of resources concerned.
>> - The name of your Savings Plan
>>
>> In our example, we are going to create a Savings Plan for 10 instances of type **b3-8**, for a duration of 1 month. Add the following lines to a file named *savings_plan.tf* :
>>
>> ```python
>> # creation of a Savings Plan
>> resource "ovh_savings_plan" "Savings_plan_simple_b3_8" {
>>   service_name = "<public cloud project ID>"
>>   flavor = "b3-8" # instance type or rancher/rancher_standard or rancher_ovhcloud_edition
>>   period = "P1M" #  P mandatory, number for duration and M for ‘month’, Y for ‘year’ ...
>>   size = 10
>>   display_name = "Savings_plan_simple_b3_8"
>>   auto_renewal = true # optional, ‘true’ to activate.
>> }
>> ```
>>
>> You can create your Savings Plan by entering the following command in your console:
>>
>> ```console
>> terraform apply
>> ```

### Modifying a Savings plan

> [!tabs]
> Via the OVHcloud Control Panel
>> > [!primary]
>> >
>> > Using the OVHcloud Control Panel, you can only edit the **name** of the Savings Plan and **activate/deactivate** its automatic renewal.
>>
>> ![Savings Plan update menu](images/savings_plan_update_menu.png){.thumbnail}
>>
>> If you wish to change the name, click the `Change name`{.action} button, change the name and then click `Confirm`{.action}.
>>
>> ![Savings Plan update name](images/savings_plan_update_name.png){.thumbnail}
>>
>> If you wish to activate/deactivate the automatic renewal of your Savings Plan, click on the `Activate/Disable automatic renewal`{.action} button and then on the `Activate`{.action} / `Disable`{.action} button as appropriate.
>>
>> ![Savings Plan update renewal](images/savings_plan_update_renewal.png){.thumbnail}
>>
> Via the OVHcloud API
>> First find the id of your service in the list of your services, which can be obtained via the following endpoint:
>>
>> > [!api]
>> >
>> > @api {v1} /services GET /services
>> >
>> You must enter the id of your Public Cloud project as a parameter in the **resourceName** field.
>>
>> You will obtain a list containing the id of your services as follows:
>>
>> ![Savings Plan services list](images/savings_plan_list_service.png){.thumbnail}
>>
>> You can use this route to check whether the service corresponds to the Public Cloud project concerned:
>>
>> > [!api]
>> >
>> > @api {v1} /services GET /services/{serviceId}
>> >
>> The **serviceId** corresponds to the id retrieved with the previous endpoint.
>>
>> You'll get a list containing the details of your service as follows. Check that it's the right project, using the `vars.value` field:
>>
>> ![Savings Plan services list](images/savings_plan_list_service_details.png){.thumbnail .h-600}
>>
>> You can find the id of your Savings Plan in the list of your Savings Plans obtained via this endpoint:
>>
>> > [!api]
>> >
>> > @api {v1} /services GET /services/{serviceId}/savingsPlans/subscribed
>> >
>> The **serviceId** corresponds to the previously retrieved id.
>>
>> You get a list of Savings Plan as follows:
>>
>> ![Savings Plan list](images/savings_plan_list_svp.png){.thumbnail .h-600}
>>
>> Then look for the Savings Plan concerned in the list and copy its **id**.
>>
>> /// details | Changing the name of a Savings Plan
>>
>> To change the name of a Savings Plan, use the following endpoint:
>>
>> > [!api]
>> >
>> > @api {v1} /services PUT /services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}
>> >
>>
>> The **savingsPlanId** corresponds to the id of your previously copied Savings Plan.
>>
>> ///
>>
>> /// details | Activate/deactivate automatic renewal of a Savings Plan 
>>
>> To **activate/disable** the automatic renewal of the Savings Plan, use the following endpoint:
>>
>> > [!api]
>> >
>> > @api {v1} /services POST /services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/changePeriodEndAction
>> >
>>
>> ///
>>
>> /// details | Increase the number of Savings Plan resources
>>
>> To increase the number of resources subscribed by your Savings Plan, use this route:
>>
>> > [!primary]
>> >
>> > The number of resources can only be increased.
>> >
>>
>> > [!api] 
>> >
>> > @api {v1} /services POST /services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/changeSize
>> >
>>
>> ///
>>
> Via Terraform
>> Modify your resource in the *savings_plan.tf* Terraform file created earlier.
>>
>> > [!primary]
>> >
>> > Note that only the **service_name**, **size** and **auto_renewal** fields can be modified. The **size** can only be increased.

## Go further

Join our [community of users](/links/community).
