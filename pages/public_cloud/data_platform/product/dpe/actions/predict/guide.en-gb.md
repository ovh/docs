---
title: "Predict Action"
updated: 2025-02-15
---

## Objective

Predict actions allow you to **generate AI predictions** from input data using a [Machine Learning model](/pages/public_cloud/data_platform/product/ml/00-ml-index). The input data must come from either a Data Manager table or a Data Store bucket. The output predictions can be written in any Data Manager table.

Predict actions are automatically created when a consumer using *Table* or *Bucket* as its input or output is added either to a [pipeline](/pages/public_cloud/data_platform/product/ml/pipelines/configure/deployment#create-a-consumer) or a [standalone model](/pages/public_cloud/data_platform/product/ml/models/import#deployment-settings).

> [!warning]
> It is currently impossible to create a Predict action directly from the Data Processing Engine. 

Predict actions are organized in three zones:

* The **input**: Features
* The **machine learning model**
* The **output**: Predictions

![predict](images/three-zones.png){.thumbnail}

The Predict action looks differently whether you are using it for [structured data](/pages/public_cloud/data_platform/product/dpe/actions/predict#predict-action-for-structured-data) or for [unstructured data](/pages/public_cloud/data_platform/product/dpe/actions/predict#predict-action-for-unstructured-data).

## Predict action for structured data

The Predict action will take this form when when a consumer using *Table* as its input is added either to a [pipeline](/pages/public_cloud/data_platform/product/ml/pipelines/configure/deployment#create-a-consumer) or a [standalone model](/pages/public_cloud/data_platform/product/ml/models/import#deployment-settings). 

> [!primary]
> This is the format you will use when the data for which you want to make predictions is structured, i.e. highly organized and formatted so that it's easily searchable in relational databases.

* [Configure the input](/pages/public_cloud/data_platform/product/dpe/actions/predict#configure-the-input-for-structured-data)
* [Configure the output](/pages/public_cloud/data_platform/product/dpe/actions/predict#configure-the-output-for-structured-data)

### Configure the input for structured data

The input is correctly configurated when **all features** from the underlying machine learning model are mapped to an attribute from the input table. Unmapped model features will be displayed in orange. To change the attribute mapped to a feature, click on the corresponding attribute and choose it from the list.

![predict](images/edit-input-attribute.png){.thumbnail}

### Configure the output for structured data

The output of a predict action is the variable that the underlying machine learning is trained to produce. You can write predictions either [in the same table](/pages/public_cloud/data_platform/product/dpe/actions/predict#write-predictions-in-the-same-table) as the input or [a different one](/pages/public_cloud/data_platform/product/dpe/actions/predict#write-predictions-in-a-different-table).

#### Write predictions in the same table

To write predictions in the same table, make sure the table for **Predictions** is the same as the table for **Features**.

![predict](images/same-table.png){.thumbnail}

You must specify the primary keys of your table in the Direct Loading section so that the DPE can write your predictions in the correct row.

![predict](images/same-pks.png){.thumbnail}

#### Write predictions in a different table

When writing a prediction in a different table than the input, you can either insert it in a row identified by primary keys, or append it in a table made specifically for them.

If you want to insert your predictions in a row identified by primary keys, you need to map the primary keys between the input table and the output table using the Direct Loading section.

![predict](images/different-pks.png){.thumbnail}

If you want to append your predictions in a table that was made specifically for them, all attributes from this table must be physically added through the Predict Action.
* If the output table only has one attribute: the predictions will be successively appended at the end of this column
* If the output table has several attributes: they must all be loaded from the input table using the **Direct Loading** section of the Predict action. Rows that already exist in the output table won't be added again.

> [!warning]
> Failing to specify either the primary keys or all attributes from the output table in the Direct Loading section will result in the Data Processing Engine being incapable of correctly writing the predictions

## Predict action for unstructured data

The Predict action will take this form when when a consumer using *Bucket* as its input is added either to a [pipeline](/pages/public_cloud/data_platform/product/ml/pipelines/configure/deployment#create-a-consumer) or a [standalone model](/pages/public_cloud/data_platform/product/ml/models/import#deployment-settings). 

> [!primary]
> This is the format you will use when the data for which you want to make predictions is unstructured, i.e. data files with no predefined format or organization.

* [Configure the input](/pages/public_cloud/data_platform/product/dpe/actions/predict#configure-the-input-for-unstructured-data)
* [Configure the output](/pages/public_cloud/data_platform/product/dpe/actions/predict#configure-the-output-for-unstructured-data)

### Configure the input for unstructured data

When an unstructured-data model is used for predictions, you are supposed to **feed it the actual unstructured objects** (images, etc.). The platform automatically 'numpyfies', standardizes and normalizes them. Make sure your model **was trained using normalized data** too.

There is nothing to configure further in the input for unstructured data, as it is automatically done when it is created.

![predict](images/edit-input-usd.png){.thumbnail}

> [!primary]
> Note that absolutely **all files** from the input bucket will be fed to the machine learning model. Make sure the bucket only contains files that you want to make a prediction on.

### Configure the output for unstructured data

The output of a Predict action is the variable that the underlying machine learning is trained to produce. You can write your predictions in the Data Manager table of your choice. You will need at least two columns in this table, **one to write an index** which uniquely identifies the file, and **one to write the associated prediction**.

The column in which to write the index must be specified in the Index section of the Predict Action. 

![predict](images/index-usd.png){.thumbnail}

> [!primary]
> The value that this column will take depends on the name of each data file, and the folder it is in. It will take the format: `foldername-filename`

The column in which to write the predictions must be specified in the Attributes section of the Predict Action.

![predict](images/predictions-usd.png){.thumbnail}

> [!warning]
> Prediction values will be rounded to the nearest integer.

## Go further

Join our [community of users](/links/community).