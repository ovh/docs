---
title: "Override a Load action"
updated: 2025-02-15
---

## Objective

In a [Custom action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index), you can re-use existing action types, overriding some parameters or creating "hooks".

Here is an example of re-using a [Load action](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index), adding a mapping value equals to the date contained in the source filename.

> [!primary]
> **Some requirements to follow :**
> 1. select the `aggregate` module in the required modules
> 2. your JSON `params` must follow the [required format for the load action](/pages/public_cloud/data_platform/product/dpe/actions/load/advanced-mode)

**Tip** : you may first create your action configuration through a regular Load action, then copy / paste the "params" JSON object into your custom action JSON `params` object.

```python
import sys,os
from logging import getLogger

from forepaas.core.settings import PARAMS
from forepaas.actions.aggregate.fpaggregate import aggregate

logger = getLogger(__name__)

def override_aggregate(event):
    
    try:
    	# Set filename. could be get through segmentation or parameters
	filename = "sales_2020-01-01.csv"
        
        # Override source filename
        path = "/".join(PARAMS["load_from"][0]["source"].split("/")[:-1]) + "/" + filename
        PARAMS["load_from"][0]["source"] = path

        # override source_date in schema
        source_date = filename.replace("sales_","").replace(".csv","")
        PARAMS["schema"]["source_date"] = {"type":"replace", "value": str(source_date)}
        logger.info(f"{filename} {source_date}")
        
        # executing the aggregate (=load) action, it will use the overriden PARAMS.
        aggregate(event)

    except Exception as err: 
        message="error on file:{}: {} L:{}".format(filename,err,sys.exc_info()[2].tb_lineno)
        raise Exception(message)
```

## Go further

Join our [community of users](/links/community).