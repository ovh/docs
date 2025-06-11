---
title: "Discover segmentation over a set of files"
updated: 2025-02-15
---

## Objective

For sources with the same structure in a distant source folder, this segmentation mode allows the Data Processing Engine (DPE) to automatically find all files in a folder, then create tasks with a specific number of files. It will replace the source file in “load_from.source” actions for each files. 

Example: Every day, there will be new file(s) coming in the source. you need your load action to absorb all those files incoming, not knowing in advanced their exact name.

- rides_chicago_2020-01-01.csv
- rides_paris_2020-01-01.csv
- rides_tokyo_2020-01-01.csv

Each task will manage different files, allowing for parallelization of work amongst different workers.

- [Prerequisites](/pages/public_cloud/data_platform/getting-further/segmentation/files#prerequisites)
- [How to use this type of segmentation](/pages/public_cloud/data_platform/getting-further/segmentation/files#how-to-use-this-type-of-segmentation)
- [How does it work behind the scenes](/pages/public_cloud/data_platform/getting-further/segmentation/files#how-does-it-work-behind-the-scenes)

## Prerequisites

Before using this segmentation type, some points **must be checked**: 

- All the files must have the same format and structure
- All files must be in the same folder
 - If other files with different structures are present in the folder, the files must have specific naming such as it can be filtered out by a RegExp.
- All the attributes/columns present in the schema, and also in each file, must:
 - Be present (except for semi-structured formats such as XML or JSON: they will be replaced by NULL values if not present) ;
 - have the same type or structure. (example: datetime structures)

### Compatibility

This segmentation option is only compatible with the following actions and sources:

| Action Types | Source Types |
|          ---        |          ---          |
| <ul><li>Load</li><li>Custom</li></ul> | <ul><li>S3 (file upload, datastore, AWS, etc..)</li><li>FTP</li><li>SFTP</li></ul> |

## How to use this type of segmentation?

To configure this segmentation option select *Based on files* in the "Segmentation Type" dropdown.

![Segmentation-mode-6](images/files-conf.png){.thumbnail}

**RegExp / Values:** You can set a regexp to identify the filenames you want to get. the star (\*) character permit to search for any characters (it will be replaced in the regexp by: .\* ).
It can be a list of RegExps as well. or a hard-coded list of precise filenames.

**Bucket size / Chunksize:**  Set how many files will be absorbed for each task. 
it is recommended to set this value to 1, unless you have hundreds of files, you will want to put a higher number of files for each task to keep the number of tasks reasonable (under 100 tasks). 

### Blueprints rules and mapping

In the [Data Catalog](/pages/public_cloud/data_platform/product/data-catalog/00-data-catalog-index), you will need to [analyze](/pages/public_cloud/data_platform/product/data-catalog/analyzer/00-analyzer-index) one file that will serve as the blueprint for all the other files.
It's important that you keep the definition of this file in the data catalog to keep the [blueprint rules](/pages/public_cloud/data_platform/product/data-catalog/analyzer/add-blueprint-rules). 

In the DPE, creating the [Load action](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index), you will use the analyzed file as a source.
In doing so, all the loaded files will have the same blueprint rules applied.

## How does it work behind the scenes?

If your action has a segmentation **Based on an fixed number of files**,
when executing the action, either on its own or via a workflow, it will execute:
1. A hidden pre-stage gets all the filenames in your source corresponding to the RegExp set in the configuration.
  ![prestage](images/files-wf.png){.thumbnail}
2. The Job Controller splits the action into multiple tasks, each with a different value (or set of values, depending on the `chunksize` configuration) amongst filenames found in step 1. 
3. Then each **worker** executes **each task one by one**.  
This means that there is no issue for having hundreds of tasks, your action will be parallelized regarding the number of workers.  

## Go further

Join our [community of users](/links/community).