---
title: CLI - Commands reference for data
slug: cli/data-cli
excerpt: Learn how to manage your object storage data with the ovhai CLI
section: Command Line Interface
order: 206
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/cli/data-cli/'
---

**Last updated 16th June, 2021.**

## Objective

This guide covers the basic commands needed to manipulate your data on object storage through the ovhai CLI.

## Requirements

- a working `ovhai` CLI. See our guide on [how to install ovhai CLI](https://docs.ovh.com/it/publiccloud/ai/cli/install-client).

## Instructions

### Listing available regions of object storage

The following command displays all region codes of available object storage regions:

``` {.console}
ovhai data region
```

### Listing containers and objects

If you need any help while listing container or objects, run `ovhai data list --help`:

``` {.console}
USAGE:
    ovhai data list [FLAGS] [OPTIONS] <region> [container]

ARGS:
    <region>       Region of the container. You can get a list of all available regions for the
                   object storage by typing `ovhai data region`
    <container>    Name of container to list

FLAGS:
    -h, --help        Prints help information
        --no-color    Remove colors from output
    -V, --version     Prints version information

OPTIONS:
        --app-token <app-token>    Authentication using AppToken rather than oauth
    -f, --fields <fields>          List of fields to display if the chosen output is "table". Fields
                                   must be separated by comma : ','. For object [available fields:
                                   type, size, name]. For container [available fields: objects,
                                   size, name]
    -o, --output <output>          Command output format [possible values: json, yaml, table]
    -p, --prefix <prefix>          Only list objects beginning with <prefix>
```

#### Listing containers and objects - Example 1

Use this command to list all containers in region `GRA`:

``` {.console}
ovhai data list GRA
```

**Output:**

``` {.console}
OBJECTS SIZE NAME
3       80 B container-1
1       9 B  container-2
1       32 B container-3
1       15 B container-4
```

#### Listing containers and objects - Example 2

Use this command to list all objects for container `container-1` in region `GRA`:

``` {.console}
ovhai data list GRA container-1
```

**Output:**

``` {.console}
TYPE   SIZE NAME
Object 32 B seg-00/000000
Object 32 B seg-00/000001
Object 16 B seg-01/000000
```

#### Listing containers and objects - Example 3

Use this command to list all objects for container `container-1` in region `GRA` with prefix `seg-01`:

``` {.console}
ovhai data list GRA container-1 --prefix seg-01
```

**Output:**

``` {.console}
TYPE   SIZE NAME
Object 16 B seg-01/000000
```

### Uploading data

If you need any help while listing containers or objects, run `ovhai data upload --help`:

``` {.console}
USAGE:
    ovhai data upload [FLAGS] [OPTIONS] <region> <container> [paths]...

ARGS:
    <region>       Region of the container to upload to. You can get a list of all available
                   regions for the object storage by typing `ovhai data region`
    <container>    Name of container to upload to
    <paths>...     Name of file or directory to upload

FLAGS:
    -h, --help            Prints help information
    -j, --json            Output json progress
        --no-color        Remove colors from output
        --no-overwrite    Do not overwrite objects
    -V, --version         Prints version information

OPTIONS:
    -a, --add-prefix <add-prefix>          Add prefix to uploaded items
        --app-token <app-token>            Authentication using AppToken rather than oauth
    -r, --remove-prefix <remove-prefix>    Remove prefix from uploaded items
    -w, --workers <workers>                Number of workers to use for uploading objects
```

#### Uploading data - Example 1

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while keeping the full path as object name:

``` {.console}
ovhai data upload GRA my-container /tmp/directory/file1
```

The uploaded file (or directory) will have `/tmp/directory/file1` as object name.

#### Uploading data - Example 2

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while keeping only the file name as object name.

``` {.console}
ovhai data upload GRA my-container /tmp/directory/file1 --remove-prefix /tmp/directory/
```

The uploaded file (or directory) will have `file1` as object name.

#### Uploading data - Example 3

Use this command to upload the local file (or directory) `/tmp/directory/file1` into the container `my-container` in region `GRA` while adding a prefix to the full path as object name :

``` {.console}
ovhai data upload GRA my-container /tmp/directory/file1 --add-prefix /root
```

The uploaded file (or directory) will have `/root/tmp/directory/file1` as object name.

### Downloading data

If you need any help for downloading container or objects, run `ovhai data download --help`:

``` {.console}
USAGE:
    ovhai data download [FLAGS] [OPTIONS] <region> <container> [objects]...

ARGS:
    <region>        Region of the container to download from. You can get a list of all
                    available regions for the object storage by typing `ovhai data region`
    <container>     Name of container to download from
    <objects>...    Names of objects to download

FLAGS:
        --create          Create container if it does not exist
    -h, --help            Prints help information
    -j, --json            Output json progress
        --no-color        Remove colors from output
        --no-overwrite    Do not overwrite files
    -V, --version         Prints version information

OPTIONS:
        --app-token <app-token>            Authentication using AppToken rather than oauth
    -o, --output <output>                  Add prefix to downloaded items
    -p, --prefix <prefix>                  Only download items beginning with <prefix>
    -r, --remove-prefix <remove-prefix>    Remove prefix from downloaded items
    -w, --workers <workers>                Number of workers to use for downloading objects
```

#### Downloading data - Example 1

Use this command to download the whole container `my-container` in region `GRA`:

``` {.console}
ovhai data download GRA my-container
```

> [!warning]
> If the objects are prefixed with a directory path such as `/tmp/directory/` or even `/`, then it will be downloaded on your local storage inside that same directory. If you want to download everything inside your current directory you need to fill the `--remove-prefix` parameter.
>
> Example :
>
>     ovhai data download GRA my-container --remove-prefix /tmp/directory/

#### Downloading data - Example 2

Use this command to download all the objects from `my-container` in region `GRA` matching the prefix `/tmp/directory/` :

``` {.console}
ovhai data download GRA my-container --prefix /tmp/directory
```

> [!warning]
> Same warning as above, if you want to download files on your current directory you will need to fill the `--remove-prefix` parameter.
>
> Example :
>
>     ovhai data download GRA my-container --remove-prefix /tmp/directory/

### Deleting data

If you need any help for deleting container or objects, run `ovhai data delete --help`:

``` {.console}
USAGE:
    ovhai data delete [FLAGS] [OPTIONS] <region> [ARGS]

ARGS:
    <region>        Region of the container. You can get a list of all available regions for the
                    object storage by typing `ovhai data region`
    <container>     Name of container to list
    <objects>...    Name of object to delete

FLAGS:
    -a, --all         Delete all items in selected data container
    -h, --help        Prints help information
        --no-color    Remove colors from output
    -V, --version     Prints version information
    -y, --yes         Do not ask for confirmation

OPTIONS:
        --app-token <app-token>    Authentication using AppToken rather than oauth
    -p, --prefix <prefix>          Only delete items beginning with <prefix>
    -w, --workers <workers>        Number of workers to use for deleting items
```

#### Deleting data - Example 1

Use this command to delete the whole container `my-container` in region `GRA` and all its contained objects :

``` {.console}
ovhai data delete GRA my-container --all
```

#### Deleting data - Example 2

Use this command to delete a single object with name `file1` inside the container `my-container` of region `GRA` :

``` {.console}
ovhai data delete GRA my-container file1
```

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
