---
title: "Use environment variables in a Custom action"
updated: 2025-02-15
---

## Objective

In a [Custom action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index), you might want to use environment variables. You can set your own in the preferences or set them in the JSON *Advanced Mode* of the action, in the `params` JSON object, and re-use them in your custom action.

```python
import sys
from logging import getLogger
from forepaas.core.settings import PARAMS

logger = logging.getLogger(__name__)

def my_custom(event):
	try:
		# Show the parameter value
		logger.info("Environment variable value is: ".format(PARAMS["env variable key"]))

	except Exception as err: 
		raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))
```

## Go further

Join our [community of users](/links/community).