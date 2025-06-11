---
title: "Use segmentation (and perimeter) in a Custom action"
updated: 2025-02-15
---

## Objective

In a [Custom action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index), you can fully benefit from the segmentation system and even go further: 
* parallelizing the calculation of your complex algorithm
* parallelizing huge custom data loading
* etc..

You can set the **segmentation type and values** as you would do in other compatible action types, through the interface, or through advanced JSON mode. 
For more information, please refer to the [segmentation documentation page](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/segmentation)

Here, you will learn **how to get the segmentation configuration and values** in your custom Python script, in order to apply it as you want.  
Let's dig into an example where you set a segmentation over a set of values, and apply a filter on the source.

```python
import sys
from logging import getLogger

from forepaas.core.settings import PARAMS
from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

logger = logging.getLogger(__name__)

def my_custom(event):
	try:
		# get the segmentation and perimeter settings
		segmentation = PARAMS.get("segmentation",{})
		segmentationValues = PARAMS.get("segmentation",{}).get("values")
		perimeter = PARAMS.get("perimeter",{})
		perimeterValues = PARAMS.get("perimeter",{}).get("values")

		# set a filter dict regarding the segmentation and perimeter configuration
		filters = {}
		if segmentation["type"] in ["workflow_dates", "dwh_attributes", "predefined_set"] and segmentationValues is not None: 
			filters[segmentation["var_name"]] = segmentationValues
		if perimeter["type"] in ["workflow_dates", "dwh_attributes", "predefined_set"] and perimeterValues is not None: 
			filters[perimeter["var_name"]] = perimeterValues

		cn = connect("dwh/data_prim/")

		# extract with filters
		df = cn.select(table_name, filters)

		# perform some changes on the df optionaly 
		# df = df

		# insert into destination
		bulk_insert(cn, table_destination, df)

		# close connection
		del cn
	except Exception as err: 
		raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))

```

## Go further

Join our [community of users](/links/community).