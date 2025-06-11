---
title: "Extract the metadata of a source"
updated: 2025-02-15
---

## Objective

To extract the metadata of a source for the first time, simply select a source object on the left-hand panel. This will parse a sample of 1,000 rows from the source to obtain the following information:

- attribute names
- attribute types
- attribute minimum and maximum values
- attribute card., i.e. the number of unique values in the sample
- attribute null values

![analyzer](images/analyzer-1.png){.thumbnail}

To extract the metadata of a source again, you can click on the **Extract Metadata** button at the top right. Further, choose *Sample data* or *Complete data* to extract on the first 1,000 rows or on the entire table respectively. 

> [!primary]
> A *complete* metadata extraction can take a while depending on the size of the selected table 

![analyzer](images/analyzer-2.png){.thumbnail}

> [!warning]
> If your metadata extraction fails, investigate why by checking out the **logs in the Jobs tab** in the Data Catalog.

Once the meta are extracted, you can start working to set standard structure formats for your data by adding blueprint rules to any attribute.

![analyzer](images/analyzer-3.png){.thumbnail}

[Learn how to add blueprint rules](/pages/public_cloud/data_platform/product/data-catalog/analyzer/add-blueprint-rules)

## Go further

Join our [community of users](/links/community).