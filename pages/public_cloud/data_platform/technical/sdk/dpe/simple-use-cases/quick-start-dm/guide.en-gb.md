---
title: "Custom Action with Lakehouse Manager tables"
updated: 2025-02-15
---

## Objective

This short example shows how to extract data from a table in Lakehouse Manager, transform it and then insert it or update the Lakehouse Manager.

The code is written in [Custom Action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) context and it uses the *stations_rides* table from the [Getting Started](/pages/public_cloud/data_platform/getting-started/00-getting-started-index) Tutorial. If you did that tutorial, you can just copy and paste the code below to test it, otherwise you need to adapt it to your tables and data sources.

> [!primary]
> Do not forget to build the table you use in the DM and then load it with a [DPE Load Action](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index). You need to load your table before using the code below, otherwise it will not work.

```python
import sys
import pandas as pd
import logging

from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

logger = logging.getLogger(__name__)
def customfunc(event):
    try:
        logger.notice("Begin function")

        # make connection to the Prim DBMS
        cn = connect("dwh/data_prim/")

        # option 1 : extract data from the table with no SQL required
        df = cn.select("stations_rides")

        # option 2 : extract data with custom SQL
        df = cn.query("SELECT station_id, date, rides, station_name FROM stations_rides")

        # perform your custom transform in the dataframe
        df.loc[df["station_name"] == 'Harlem-Lake', "rides"] = 0

        # reinsert your dataframe in the destination table
        stats = bulk_insert(cn, "stations_rides", df) 

        # show insertion statistics (if DBMS compatible) 
        logger.info(stats)

        # delete rows where station name is "Davis"
        cn.delete("stations_rides", {"station_name":"Davis"})

        # update rows set rides to 0 where station_id=40040
        cn.update("stations_rides", {"rides":0}, {"station_id":40040})

        # when finished, disconnect cn
        del cn    
        logger.notice("END function")
    except Exception as err: 
        raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))
```

## Go further

Join our [community of users](/links/community).