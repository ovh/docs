---
title: "How to obtain the carbon footprint of your OVHcloud services"
excerpt: "Find out how to retrieve the monthly carbon footprint of your OVHcloud services using our carbon calculator"
updated: 2025-06-17
---

## Objective

As part of your professional activities or out of interest on the subject, you may need to calculate the carbon footprint of your services.

**Find out how to retrieve the monthly carbon footprint of your OVHcloud services.**

## Requirements

- Being the billing contact for the service(s) you would like to create a carbon footprint for. For more information, see [our guide to managing contacts](/pages/account_and_service_management/account_information/managing_contacts).

**The carbon footprint calculation is available for the following services:**

- [Dedicated Server](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Eco Dedicated Server](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Public Cloud Instances (Compute)](/links/public-cloud/compute)

## Instructions

Please note the following information:

- You cannot generate a carbon footprint report for the current month.
- When using the OVHcloud API, whether you enter a date at the beginning, middle or end of the month for the month chosen, the carbon footprint report will be generated for the full month.
- No carbon footprint report can be generated for more than the last 24 months.
- No carbon footprint can be generated before the date of implementation of the feature for each OVHcloud service (see table below).

| Service                | Date of commissioning of the carbon footprint calculator |
|------------------------|----------------------------------------------------------|
| Dedicated Server       | 2023/05/01 |
| Eco Dedicated Server   | 2023/05/01 |
| VMware on OVHcloud     | 2023/08/01 |
| Public Cloud Instances | 2025/01/01 |

### Retrieving the monthly carbon footprint report for the previous month via the OVHcloud Control Panel

1. Log in to the [OVHcloud Control Panel](/links/manager).
1. On the page that opens, scroll down to the **Useful links** section in the left-hand column, then click on the `My carbon footprint`{.action} tab.
1. On the new page that appears, click `Download my [Month] [Year] footprint`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

You can recover the carbon footprint of the previous month for your eligible services every month.

If you need the carbon footprint for a month prior to the month preceding the current month, you will have to use our APIs to retrieve it.

### Retrieving a monthly carbon footprint prior to the previous month via our APIs

By default, OVHcloud APIs are made available to developers or integrators to associate features, such as those not present in the OVHcloud Control Panel, directly with their applications or solutions.

### Step 1 - Log in to the OVHcloud APIs

- Go to our [OVHcloud API](/links/api) website (check that you are on `https://eu.api.ovh.com` if your services are hosted in Europe, and on `https://ca.api.ovh.com` if they are hosted outside Europe).
- On the page that pops up, click `Explore the OVHcloud API`{.action}.
- On the left-hand side of the new page that appears, go to the form to the right of the `v1`{.action} field, then select/enter the choice `/me`.
- From the list of APIs that appear below in the left-hand column, locate and click the following API: **POST /me/carbonCalculator/task**. You can also access it directly via the API call below:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- On the right-hand side of the page, you will then see the API with its fields to complete.
- Click the button in the top right-hand corner labeled `Authenticate`{.action}, then the `Login with OVHcloud SSO`{.action} button.
- The interface for connecting to your [OVHcloud Control Panel](/links/manager) will open.
- Log in with your customer credentials, then click `Authorize`{.action} to use the OVHcloud APIs with your services.
- You will then be automatically redirected to the previous page of the **POST /me/carbonCalculator/task** API.

#### Step 2 - Request the carbon footprint generation and retrieve the requested Task ID

Replace the current date that appears in the API sidebar with the date on which you want to stop calculating the carbon footprint. Please respect the following date format:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Once you have chosen the correct date, click the blue `EXECUTE`{.action} button.

If everything has been done correctly, a `taskID` will appear in the `RESPONSE`{.action} window when you scroll down the page below the `EXECUTE`{.action} button.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

For example, if your OVHcloud account ID is `aa00000-ovh` and the date you selected earlier is `2025-01-31`, then you will get the following result:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Copy only the obtained value which must be equivalent to the value of our example `aa00000-ovh_202501` (without copying the quotation marks (`"`)).

#### Step 3 - Retrieve the carbon footprint report in PDF format

Thanks to the `taskID` value previously retrieved, you can now retrieve the carbon footprint of your services in PDF format.

To do this, stay on our [OVHcloud API](/links/api) website and perform the following actions:

- On the left-hand side of the page, go to the form to the right of the `v1`{.action} field, then select/enter the choice `/me`{.action}.
- From the list of API calls that appear below, locate and click the following API: **GET /me/carbonCalculator/task/{taskID}**. You can also access it directly via the API call below:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- On the right-hand side of the page, you will then see the API with a form to fill in.

Complete the form in the `PATH PARAMETERS` section as follows:

- `taskID`: Copy here the taskID value retrieved earlier in step 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Once you have entered the value for your `taskID` correctly, click the blue `EXECUTE`{.action} button.

The following result appears in the `RESPONSE`{.action} window when you scroll down the page below the `EXECUTE`{.action} button:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

In this result, copy the entire URL in "HTTPS" (**without the quotation marks**) on the right-hand side of the comment `"link":`, then paste it into the search bar of your web browser to start downloading the carbon footprint in PDF format.

Your web browser will automatically download the file and then display it.

> [!primary]
>
> Depending on your browser’s configuration, the file may not be downloaded and displayed properly. If this is the case, check your browser configuration, then reload the page.

Once you have opened the file, you will find the following items:

- A summary table of C02 emissions by category for the requested month.
- A summary table of C02 emissions by category between the beginning of the calendar year and the requested month.
- A table detailing the values by type of product subscribed.
- A graph showing C02 emissions by category.

> [!warning]
> The link generated is only valid for 24 hours. Make sure to download the carbon footprint from your browser once the link is open.

## Go further <a name="go-further"></a>

[First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps)
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
Join our [community of users](/links/community).
