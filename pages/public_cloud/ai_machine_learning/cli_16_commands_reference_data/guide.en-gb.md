---
title: CLI - Commands reference for data
excerpt: Learn how to manage your object storage data with the ovhai CLI
updated: 2023-05-11
---

**Last updated 11th May, 2023.**

## Objective

This guide covers the basic commands needed to manipulate your data on object storage through the ovhai CLI.

## Requirements

- a working `ovhai` CLI. See our guide on [how to install ovhai CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli).

## Instructions

This documentation is divided into the following parts:

- Listing available regions of data stores
- Adding new data stores
- Listing containers and objects
- Uploading data
- Downloading data
- Deleting data
- Copying data
- Moving data

### Listing available regions of data stores

The following command displays all region codes of available data store regions:

``` {.console}
ovhai datastore list
```

### Adding new data stores

To see the list of available data store types, run `ovhai datastore add --help`.

**Output:**

``` {.console}
Add a data store

Usage: ovhai datastore add [OPTIONS] <COMMAND>

Commands:
    s3    Add an S3 data store
    git   Add a Git data store
    help  Print this message or the help of the given subcommand(s)

Options:
        --token <TOKEN>  Authentication using Token rather than OAuth
        --no-color       Remove colors from output
    -h, --help           Print help
```

At this time, **S3 and Git data stores are supported**. To know more about S3, please read [this documentation](/pages/public_cloud/ai_machine_learning/gi_08_s3_compliance).

To get help on how to add your S3 container, use `ovhai datastore add s3 --help`:

``` {.console}
Usage: 
    ovhai datastore add s3 [OPTIONS] <ALIAS> <ENDPOINT_URL> <REGION> <ACCESS_KEY> <SECRET_KEY>

Arguments:
    <ALIAS>         Alias for the data store
    <ENDPOINT_URL>  Data store connection URL
    <REGION>        Data store region
    <ACCESS_KEY>    Connection access key
    <SECRET_KEY>    Connection secret key

Options:
        --store-credentials-locally  Whether or not to store the data store credentials locally when creating or updating a data store
        --token <TOKEN>              Authentication using Token rather than OAuth
        --no-color                   Remove colors from output
    -h, --help                       Print help
```

### Listing containers and objects

If you need any help while listing containers in a remote data store, run `ovhai bucket list --help`:

``` {.console}
Usage:
    ovhai bucket list [OPTIONS] <DATA_STORE>

Arguments:
    <DATA_STORE>  Object storage data store alias

Options:
    -p, --prefix <PREFIX>  Only list containers beginning with <PREFIX>
        --token <TOKEN>    Authentication using Token rather than OAuth
    -o, --output <OUTPUT>  Command output format [possible values: json, yaml, table]
    -f, --fields <FIELDS>  Comma separated list of fields to display with "table" output [possible values: objects, size, name]
        --no-color         Remove colors from output
    -h, --help             Print help
```

#### Listing containers and objects - Example 1

Use this command to list all containers in a remote data store, located in region `GRA`:

``` {.console}
ovhai bucket list GRA
```

**Output:**

``` {.console}
DATE                       NAME
2023-05-09T08:56:12.000000 container-1
2023-05-03T09:56:20.000000 container-2
2023-04-17T15:01:02.000000 container-3
2022-06-08T09:26:25.000000 container-4
```

#### Listing containers and objects - Example 2

Use this command to list all objects for container `container-1` in region `GRA`:

``` {.console}
ovhai bucket object list container-1@GRA
```

**Output:**

``` {.console}
DATE                       BYTES    NAME          DESCRIPTION ETAG
2023-05-09T08:56:12.000000 17.0 MiB seg-00/000000 Object      <etag1>                                                                                                               
2023-05-03T09:56:20.000000 8.5 MiB  seg-00/000001 Object      <etag2>
2023-04-17T15:01:02.000000 6.0 KiB  seg-01/000000 Object      <etag3>
2022-06-08T09:26:25.000000 8.5 MiB  seg-00/000001 Object      <etag4>
```

#### Listing containers and objects - Example 3

Use this command to list only the objects in the container `container-1`, region `GRA` that begin with prefix `seg-01`:

``` {.console}
ovhai bucket object list container-1@GRA --prefix seg-01
```

**Output:**

``` {.console}
DATE                       BYTES    NAME          DESCRIPTION ETAG
2023-04-17T15:01:02.000000 6.0 KiB  seg-01/000000 Object      <etag3>
```

### Uploading data

If you need any help while uploading local data to a container, run `ovhai bucket object upload --help`:

``` {.console}
Usage:
    ovhai bucket object upload [OPTIONS] <BUCKET> <PATHS>...

Arguments:
    <BUCKET>    container@data_store
    <PATHS>...  Name of file or directory to upload

Options:
    -a, --add-prefix <ADD_PREFIX>        Add prefix to uploaded objects
        --token <TOKEN>                  Authentication using Token rather than OAuth
    -r, --remove-prefix <REMOVE_PREFIX>  Remove prefix from uploaded objects
      --no-overwrite                     Do not overwrite objects
    -j, --json                           Output json progress
    -w, --workers <WORKERS>              Number of workers to use
      --delete                           Should also delete files in remote storage that are not present locally. !!WARNING!! we strongly advise to use `--dry-run` once before launching this command for real, also see the `--trash` option
      --trash <TRASH>                    Move files to this container and folder instead of deleting them, to be used with `--delete` (eg. `--trash trash_container/job1/`)
      --dry-run                          Doesn't execute anything but display what actions would be done if this flag was not set
      --tar <TAR>                        Compress all paths inside a tar archive before uploading it
      --no-color                         Remove colors from output
    -h, --help                           Print help
```

*A good practice is to use the `--dry-run` parameter to get a preview of the actions that would be done by the entered command if this flag was not set.* 

#### Uploading data - Example 1

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while keeping the full path as object name:

``` {.console}
ovhai bucket object upload my-container@GRA tmp/directory/file1
```

The uploaded file (or directory) will have `tmp/directory/file1` as object name.

#### Uploading data - Example 2

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while keeping only the file name as object name:

``` {.console}
ovhai bucket object upload my-container@GRA tmp/directory/file1 --remove-prefix tmp/directory/
```

The uploaded file (or directory) will have `file1` as object name.

#### Uploading data - Example 3

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while adding a prefix to the full path as object name:

``` {.console}
ovhai bucket object upload my-container@GRA tmp/directory/file1 --add-prefix /root/
```

The uploaded file (or directory) will have `/root/tmp/directory/file1` as object name.

### Downloading data

If you need any help for downloading objects from a container, run `ovhai bucket object download --help`:

``` {.console}
Usage:
    ovhai bucket object download [OPTIONS] <BUCKET> [OBJECTS]...

Arguments:
    <BUCKET>      container@data_store
    [OBJECTS]...  Names of objects to download

Options:
    -p, --prefix <PREFIX>                Only download items beginning with <prefix>
        --token <TOKEN>                  Authentication using Token rather than OAuth
    -o, --output <OUTPUT>                Add prefix to downloaded items
    -r, --remove-prefix <REMOVE_PREFIX>  Remove prefix from downloaded items
        --no-overwrite                   Do not overwrite files
        --create                         Create container if it does not exist
    -j, --json                           Output json progress
    -w, --workers <WORKERS>              Number of workers to use for downloading objects
        --delete                         Should also delete files locally if they are not present on remote. !!WARNING!! we strongly advise to use `--dry-run` once before launching this command for real, also see the `--trash` option
        --trash <TRASH>                  Move files to this folder instead of deleting them, to be used with `--delete`
        --dry-run                        Doesn't execute anything but display what actions would be done if this flag was not set
        --untar                          Uncompress given archive from object store
        --no-color                       Remove colors from output
    -h, --help                           Print help
```

*A good practice is to use the `--dry-run` parameter to get a preview of the actions that would be done by the entered command if this flag was not set.* 

#### Downloading data - Example 1

Use this command to download the whole container `my-container` in region `GRA`:

``` {.console}
ovhai bucket object download my-container@GRA
```

> [!warning]
> If the objects are prefixed with a directory path such as `/tmp/directory/` or even `/`, then it will be downloaded on your local storage inside that same directory. If you want to download everything inside your current directory you need to fill the `--remove-prefix` parameter.
>
> Example:
>
>     ovhai bucket object download my-container@GRA --remove-prefix tmp/directory/

#### Downloading data - Example 2

Use this command to download all the objects from `my-container` in region `GRA` matching the prefix `tmp/directory/`:

``` {.console}
ovhai bucket object download my-container@GRA --prefix tmp/directory/
```

> [!warning]
> Same warning as above, if you want to download files on your current directory you will need to fill the `--remove-prefix` parameter.
>
> Example:
>
>     ovhai bucket object download my-container@GRA --prefix tmp/directory/ --remove-prefix tmp/directory/

### Deleting data

If you need any help for deleting container or objects, run `ovhai bucket delete --help`:

``` {.console}
Usage:
    ovhai bucket delete [OPTIONS] <DELETED_ITEMS|--prefix <PREFIX>|--all> <DATA_STORE>

Arguments:
    <DATA_STORE>        Object storage data store alias
    [DELETED_ITEMS]...  List of items to be deleted

Options:
    -p, --prefix <PREFIX>    Items beginning with <PREFIX>
        --token <TOKEN>      Authentication using Token rather than OAuth
    -a, --all                All items
    -y, --yes                Do not ask for confirmation
    -w, --workers <WORKERS>  Number of workers to use
        --no-color           Remove colors from output
    -h, --help               Print help
```

#### Deleting data - Example 1

Use this command to delete all the content of a container named `my-container`, in region `GRA`, **without** deleting the container:

``` {.console}
ovhai bucket object delete my-container@GRA --all
```

#### Deleting data - Example 2

Use this command to delete a single object named `file1` inside the container `my-container` of region `GRA`:

``` {.console}
ovhai bucket object delete my-container@GRA file1
```

#### Deleting data - Example 3

Once a container is empty, you can delete it by using: 

``` {.console}
ovhai bucket delete GRA my-container
```

### Copying data

When using containers, it can be interesting to copy an object. If you need any help to do this, run `ovhai bucket object copy --help`:

``` {.console}
Usage:
    ovhai bucket object copy [OPTIONS] <DESTINATION|--container <CONTAINER>> <BUCKET> <SOURCE>

Arguments:
    <BUCKET>       container@data_store
    <SOURCE>       Source
    [DESTINATION]  Destination

Options:
    -c, --container <CONTAINER>  Destination container in the same data store
        --token <TOKEN>          Authentication using Token rather than OAuth
    -p, --prefix                 Handle element by matching prefix instead of name
    -y, --yes                    Do not ask for confirmation
    -w, --workers <WORKERS>      Number of workers to use
        --no-color               Remove colors from output
    -h, --help                   Print help
```

#### Copying data - Example 1

Use this command to copy a single object `path/to/object` in a container `my-container` in region `GRA`:

``` {.console}
ovhai bucket object copy my-container@GRA path/to/object new/path/to/object
```

#### Copying data - Example 2

If you handle multiple containers, you might be interested in copying a file from one container to another. This can be done like this:

``` {.console}
ovhai bucket object copy source-container@GRA --container dest-container path/to/object new/path/to/object
```

#### Copying data - Example 3

You can use a prefix to copy all objects contained in this location. For example, let's copy all the elements contained in the location `path/to/` to a `new/path/to/` of a `dest-container`:

``` {.console}
ovhai bucket object copy source-container@GRA --container dest-container --prefix path/to/ new/path/to/
```

### Moving data

You can also move an object within a container or in another one. If you need any help, run `ovhai bucket object move --help`:

``` {.console}
Usage:
    ovhai bucket object move [OPTIONS] <DESTINATION|--container <CONTAINER>> <BUCKET> <SOURCE>

Arguments:
    <BUCKET>       container@data_store
    <SOURCE>       Source
    [DESTINATION]  Destination

Options:
    -c, --container <CONTAINER>  Destination container in the same data store
        --token <TOKEN>          Authentication using Token rather than OAuth
    -p, --prefix                 Handle element by matching prefix instead of name
    -y, --yes                    Do not ask for confirmation
    -w, --workers <WORKERS>      Number of workers to use
        --no-color               Remove colors from output
    -h, --help                   Print help
```

#### Moving data - Example 1

To move an object within a container, you can use:

``` {.console}
ovhai bucket object move my-container@GRA path/to/object new/path/to/object
```

#### Moving data - Example 2

When handling multiple containers, it can be interesting to move a file from one container to another. This can be done by running:

``` {.console}
ovhai bucket object copy source-container@GRA --container dest-container path/to/object new/path/to/object
```

#### Moving data - Example 3

If you want to move many objects, you can specify a prefix and move all the objects located here by using:

``` {.console}
ovhai bucket object move my-container@GRA --prefix path/to/ new/path/to/
```

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
