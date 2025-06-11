---
title: "Logs Explorer"
updated: 2025-02-15
---

## Objective

The Logs Explorer is a comprehensive tool to **query and export logs from job executions and live deployments** on the ForePaaS Platform.

![logs](images/cc-logs-explorer.png){.thumbnail}

Like all subcomponents in the Control Center, the Logs Explorer can be opened at the level of the organization. However, logs exploration will only be possible inside a specific Project. If the Logs Explorer is opened at the level of one Project, then this field cannot be edited.

![logs](images/cc-right-dataplant.png){.thumbnail}

- [Get logs](/pages/public_cloud/data_platform/product/cc/logs#get-logs)
  - [Get logs of past job executions](/pages/public_cloud/data_platform/product/cc/logs#get-logs-of-past-job-executions)
  - [Get logs of deployments](/pages/public_cloud/data_platform/product/cc/logs#get-logs-of-deployments)
  - [Use the streaming mode](/pages/public_cloud/data_platform/product/cc/logs#use-the-streaming-mode)
- [Filter logs](/pages/public_cloud/data_platform/product/cc/logs#filter-logs)
  - [Search in logs](/pages/public_cloud/data_platform/product/cc/logs#search-in-logs)
  - [Severity](/pages/public_cloud/data_platform/product/cc/logs#severity)
  - [Timestamp](/pages/public_cloud/data_platform/product/cc/logs#timestamp)
- [Share logs](/pages/public_cloud/data_platform/product/cc/logs#share-logs)
  - [Share an Explorer link](/pages/public_cloud/data_platform/product/cc/logs#share-an-explorer-link)
  - [Export a log file](/pages/public_cloud/data_platform/product/cc/logs#export-a-log-file)

## Get logs

### Get logs of past job executions

The Logs Explorer allows you to check the logs of:

- [Data Processing Engine actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index) job executions
- [Data Processing Engine workflows](/pages/public_cloud/data_platform/product/dpe/workflows/00-workflows-index) job executions
- [Machine Learning dataset generation](/pages/public_cloud/data_platform/product/ml/pipelines/execute/00-execute-index#dataset-generation-jobs) jobs
- [Machine Learning training](/pages/public_cloud/data_platform/product/ml/pipelines/execute/00-execute-index#training-jobs) jobs
- [Machine Learning testing](/pages/public_cloud/data_platform/product/ml/pipelines/execute/00-execute-index#testing-jobs) jobs
- Data Manager metadata extract jobs
- Data Manager physical build jobs

Choose *Jobs* as the **Resource** on the left column.

![logs](images/cc-right-jobs.png){.thumbnail}

Choose the **type of jobs** to explore.

By default, the Logs Explorer will display the logs for all jobs matching this type. You can drill-down on a specific object in the bottom left list - ranked by number of executions.

![logs](images/cc-jobs-object.png){.thumbnail}

You can drill-down further by filtering on a specific **execution ID** or a specific time-range above the display.

> [!warning]
> Make sure that the execution that you want to display is contained in the time-range that you are filtered on.

![logs](images/cc-jobs-execution-timeframe.png){.thumbnail}

> [!primary]
> Note that logs will be queried by successive batches of at most 250 logs. Scroll down in the console to load more logs.

### Get logs of deployments

The Logs Explorer also allows you to check the logs of:

- [APIs](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index)
- [Applications](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index) 
- [Model APIs](/pages/public_cloud/data_platform/product/ml/pipelines/configure/deployment) 
- [Notebooks](/pages/public_cloud/data_platform/product/ml/notebooks/00-notebooks-index)
- [Always-up deployments in the Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index#always-up)
- [Query engines](/pages/public_cloud/data_platform/product/am/resources) 
- The *App Service* component: an infrastructure service to control APIs and apps

Choose *Deployments* as the **Resource** on the left column.

![logs](images/cc-right-deployments.png){.thumbnail}

Choose the **type of deployment** to explore.

![logs](images/cc-deployments-type.png){.thumbnail}

By default, the Logs Explorer will display the logs for all deployments matching this type. You can drill-down on a specific object in the bottom left list - ranked by number of active workers. By default, the logs of all workers for that deployed object are aggregated altogether in the display.

![logs](images/cc-deployments-object.png){.thumbnail}

You can drill-down further by filtering on a specific **worker ID** or a specific time-range above the display.

![logs](images/cc-deployment-worker-timeframe.png){.thumbnail}

> [!primary]
> Note that logs will be queried by successive batches of at most 250 logs. Scroll down in the console to load more logs.

### Use the streaming mode

By default, the Logs Explorer must be refreshed manually to display new logs.

![logs](images/cc-left-refresh.png){.thumbnail}

Activate the **streaming mode** to receive the latest logs in real time.

![logs](images/cc-left-streaming.png){.thumbnail}

## Filter logs

### Search in logs

To filter down your log result, it is possible to either search for an exact substring or to match to a [regular expression (Regex)](https://en.wikipedia.org/wiki/Regular_expression) using the search bar above the console. Searching something in the searchbar will **run a new log query on the whole timeframe** and return the logs matching the search filters.

By default, simply typing text in the searchbar will search for all logs containing this substring, ignoring lowercase/capital letters.  

![logs](images/cc-left-searchlog.png){.thumbnail}

Alternatively, it is possible to start your search with any of the following operators:

- `=` followed by text: search for all logs containing this substring (case sensitive)
- `!=` followed by text: search for all logs not containing this substring (case sensitive)
- `~` followed by a regex: search for all logs matching the regular expression
- `!~` followed by a regex: search for all logs that don't match the regular expression

![logs](images/cc-left-searchlog2.png){.thumbnail}

### Severity

Logs have different level of severity - ranged from *INFO* to *CRITICAL* - to filter on.

> [!primary]
> If you don't see all the levels that you should be seeing, make sure your jobs are [configured to export the correct level](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index#logs-level) of logs.

![logs](images/cc-left-severity.png){.thumbnail}

### Timestamp

As mentioned above, logs are all associated to a specific timestamp, so they can be filtered on a time-range. For jobs execution logs, it is also possible to filter on one specific execution.

![logs](images/cc-jobs-execution-timeframe.png){.thumbnail}

## Share logs

Logs can be shared in one of two ways: by sharing the link to the Logs Explorer or by exporting a text file containing the logs.

### Share an Explorer link

Click on the **link** icon to get a link for the page with the current filter configuration.

![logs](images/cc-left-link.png){.thumbnail}

### Export a log file

Click on the **export** icon to download a .log file containing the logs currently displayed in the UI.

![logs](images/cc-left-export.png){.thumbnail}

> [!primary]
> Share those log files to the ForePaaS Support team whenever you need help debugging a Project on ForePaaS.

## Go further

Join our [community of users](/links/community).