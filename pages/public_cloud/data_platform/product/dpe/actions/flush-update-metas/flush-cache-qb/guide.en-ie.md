---
title: "Flush Cache: Analytics Manager Action"
updated: 2025-02-15
---

## Objective

This action is used to flush the [cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) of [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index). It is highly recommended to launch it at the end of a workflow. This guarantees that the Analytics Manager uses the latest metadata from Data Manager.

| Parameter Name | Description                 | Examples               | Required               |
| :--------------- | :--------------------- | :-----------------  | :----------------- |
| params.timeout | Maximum duration of the action, if the action takes longer to execute, it will cut off before the end of its execution. This can lead to partial data insertions or other problems. To be used with great caution for specific cases only. | Format using Xd Xh Xm Xs | No |

In order to add an action timeout, go the *preferences* and enable the timeout parameter, adding the desired time, or alternatively, edit the JSON configuration of the action:

```
{
	"display_name": "Flush Cache: Analytics Manager action ",
	"action": "flush-cache-qb",
	"params": {
	  "timeout": "2h"
	}
}
```

> [!primary]
> Note that the **flush & update metadata actions are maintenance actions**. We highly recommend to simply append them by default at the end of each workflow.

## Go further

Join our [community of users](/links/community).