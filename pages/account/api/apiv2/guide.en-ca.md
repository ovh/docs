---
title: "OVHcloud API v2 - Principles of operation"
slug: api-v2
excerpt: "Discover the new principles of exposure and consumption linked to the OVHcloud API v2"
section: APIv6
updated: 2023-04-17
---

**Last updated 17th April 2023**

## Objective

The APIs available at [https://ca.api.ovh.com/](https://ca.api.ovh.com/){.external} allow you to buy, manage, update and configure OVHcloud products without using a graphical interface like the OVHcloud Control Panel.

Historically, OVHcloud APIs have been available under the **/1.0** branch corresponding to the first version of the API that we published. 

A new section of the OVHcloud APIs is available under the prefix **/v2** on [https://ca.api.ovh.com/v2](https://ca.api.ovh.com/console-preview/?branch=v2){.external}. 

This new branch will bring together new API routes, reworked in a new format, and become the main API branch for new feature developments of OVHcloud products.<br>
The **/1.0** branch will continue to exist in parallel to the **/v2** branch but will not contain the same functionality. As a customer, you can consume APIs from branch **/1.0** and **/v2** simultaneously in your programs, while retaining the same authentication and tools to call the API. To standardise the naming of our API branches, the **/1.0** branch is also available via the **/v1** alias.

The **/v2** branch introduces new principles of exposure and consumption (which differ from the **/v1** branch). The purpose of this guide is to introduce them.

## Principles

### Version management

The */v2* branch of the API uses a versioning system to manage its specifications. This means that each modification in the API routes (input parameters, expected return, ...) will be the subject of a new version.

These versions (which are different from the version contained in the API branch name) will contain two numbers that increment: major and minor versions. This makes it possible to distinguish minor changes from major/breaking changes in API schemes. Minor (non-breaking) changes increment the minor version while breaking changes increment the major version.

A summary of the changes (*changelog*) accompanies the publication of each new version to get a detailed view of the changes made.

The API *v2* branch is designed to expose several major versions in parallel. This means that applications using a specific version of the API will continue to work after the release of a new major version.

As a customer, you will be responsible for choosing the version you use. You will need to specify which major version of the specification will be used with your account.

When a new major version is released, the previous major release will remain active for a specified period of time in the *changelog* to give you time to adapt your applications.
Before the availability period for the previous major version ends, you will need to ensure that your applications using the OVHcloud API are still compatible, and make the major version change in your Control Panel. If you do not do so, you will be automatically migrated to the latest major version at the end of your current major release availability period. 

#### Select a specific major version of the API

A specific page will soon be available in the OVHcloud Control Panel to select the major version of the API used.

You will probably need to test your applications with the new major version before making the change in your Control Panel.
To do this, you can specify the major version to use with the `X-Schemas-Version` header in your API calls:

```bash
curl -X GET -H "X-Schemas-Version: 1.0" https://ca.api.ovh.com/v2/iam/policy
```

If this header is not provided during an API call, the major version of your account is used by default.

We recommend only using this header during your validation phases. Indeed, its use in your production applications will require maintenance on your side the day that this major version is no longer available.<br>
When a major new version is released, we will evaluate the impact of this new version on your API usage, and send you a detailed report. If you are not affected by the breaking changes, we will offer you to switch directly to the new major version. In this case, if you use the header in your applications, the switch cannot be performed without maintenance on your application.

#### Retrieve available versions via the console

You can see the list of versions available on the OVHcloud API console. To do this, open the [console](https://ca.api.ovh.com/console-preview/?section=%2Fiam&branch=v2#servers){.external}.

The different versions are displayed in the **SCHEMAS VERSION** section. You can then select a version to view the associated API schemas.

![API](images/console-schemas-version.png){.thumbnail}

### As-code design

There are two opposing approaches to seeing the current state of a resource through an API and changing its state:

- **Process-centred approach**: The API exposes the current state of resources (for example, a Public Cloud instance) and offers operations for modifying them (for example, changing the size of a disk).
- **Resource-centred approach**: The API exposes both the current state of resources and the desired state. Changes are made directly by updating the desired state of the resources. In this case, the API takes the necessary actions itself to reach the targeted state.

The first approach is the one used by the current API: [https://ca.api.ovh.com/v1](https://ca.api.ovh.com/v1){.external}.

The APIv2 uses the resource-centric approach, which makes it easier to use *as-code*, particularly with tools like [Terraform](https://www.terraform.io){.external}. This operation also abstracts all the complexity of the process of transforming a resource from one state to another since it is the responsibility of the API and not the customer.

### Asynchronous management and events

As explained in the previous section, the APIv2 supports the actions to be performed to reach the target state of a resource when its specifications have been changed. In some cases, these actions may result in long-running tasks that will be resolved asynchronously.

For resources where asynchronous tasks can be executed, a route `/task` is exposed to retrieve the list of tasks related to a resource. The list of current tasks is also available in the resource information itself.

Here is an example of a task returned by the API:

```json
{
  "createdAt": "2023-03-21T15:40:05.213Z",
  "startedAt": "2023-03-21T15:41:05.213Z",
  "updatedAt": "2023-03-21T15:42:05.213Z",
  "finishedAt": "2023-03-21T15:43:05.213Z",
  "errors": [],
  "id": "18704d69-7fd0-4000-808f-7e3d8bb42380",
  "progress": [
    {
      "name": "Restart",
      "status": "DONE"
    }
  ],
  "status": "DONE",
  "type": "CloudRestartInstance"
}
```

A list of events is also displayed for resources involved in asynchronous tasks. This provides a history of events affecting the resource, such as changes requested by users, asynchronous operations, or maintenance performed on the resource. These events are listed via the path `/event`.

Here is an example of an event returned by the API:

```json
{
  "createdAt": "2023-03-21T15:50:08.823Z",
  "message": "Task 18704d69-7fd0-4000-808f-7e3d8bb42380 started",
  "type": "TaskStart"
}
```

For example, the type of event can be `TargetSpecUpdate` if the target state of a resource changes, `TaskSuccess` if the task completed without errors, and so on.

In some cases, an event may also contain a link to the resource that the task is about, as well as a message.

> [!primary]
>
> The event and task examples shown above may vary by API section. Please refer to the [console](/pages/account/api/console-preview) to view the exact definition for each section.
>

### Pagination

Pagination allows you to segment API responses containing a list of items into multiple pages.

The main advantages of pagination are:

- Reduced bandwidth usage for API clients.
- Shorter API response times.
- Smaller response bodies, which allows for less expensive exploitation of the data returned from the client side.

The APIv2 exposes cursor pagination, in which cursors are passed in the query and response headers. You can also control the number of returned items.

The headers used are:

- `X-Pagination-Size`: This optional header allows you to control the size of the returned pages.
- `X-Pagination-Cursor-Next`: Header returned by the API that contains the value to use in the next query to retrieve the next page.
- `X-Pagination-Cursor`: The header to send in a query to retrieve the next page.

For example, the following call will return the first 5 items and the cursor to use to retrieve the next page:

```bash
curl https://ca.api.ovh.com/v2/iam/policy -H "X-Pagination-Size: 5"
# If the number of resources to return is greater than 5, the next header
# will be available in reply: "X-Pagination-Cursor-Next: xxxyyyzzz"
```

The following page can be retrieved by providing the cursor returned in the previous call response:

```bash
curl https://ca.api.ovh.com/v2/iam/policy -H "X-Pagination-Size: 5" -H "X-Pagination-Cursor: xxxyyzzz"
```

The absence of the `X-Pagination-Cursor-Next` header in an API response containing a list of items means that the last page is reached and all available items have been returned.

## Official clients

Several libraries are available to use the OVHcloud APIs:

- Go: [https://github.com/ovh/go-ovh](https://github.com/ovh/go-ovh){.external}
- Python: [https://github.com/ovh/python-ovh](https://github.com/ovh/python-ovh){.external}
- PHP: [https://github.com/ovh/php-ovh](https://github.com/ovh/php-ovh){.external}

## Go further <a name="gofurther"></a>

[Exploring OVHcloud APIs](/pages/account/api/console-preview)

[Using Terraform with OVHcloud](/pages/account/api/terraform-at-ovhcloud) 

Join our community of users on <https://community.ovh.com/en/>.
