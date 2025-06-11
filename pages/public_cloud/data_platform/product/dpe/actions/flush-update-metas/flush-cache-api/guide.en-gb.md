---
title: "Flush Cache: App Services Action"
updated: 2025-02-15
---

## Objective

This action is used to **call the [Project's APIs](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index) in order to flush its [cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)**. It is highly recommended to launch it at the end of a workflow. This guarantees that the API displays the latest values of pre-configured queries or attributes.

| Parameter Name | Description                 | Examples               | Required               |
| :--------------- | :--------------------- | :-----------------  | :----------------- |
| params.timeout | Maximum duration of the action in seconds, if the action takes longer to execute, it will cut off before the end of its execution. This can lead to partial data insertions or other problems. To be used with great caution for specific cases only. | Format using Xd Xh Xm Xs | No |

In order to add an action timeout, go the *preferences* and enable the timeout parameter, adding the desired time, or alternatively, edit the JSON configuration of the action:

```
"display_name": "Flush Cache: App Services action ",
"action": "flush-cache-front",
},
"params": {
  "timeout": "2h"
}
```

> [!primary]
> Note that the **flush & update metadata actions are maintenance actions**. We highly recommend to simply append them by default at the end of each workflow.

## Go further

Join our [community of users](/links/community).