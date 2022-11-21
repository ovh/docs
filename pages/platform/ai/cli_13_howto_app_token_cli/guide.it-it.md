---
title: CLI - Manage access tokens
slug: cli/app-token-cli
excerpt: Learn how to create Application tokens with the ovhai CLI
section: Command Line Interface
order: 203
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/ai/cli/app-token-cli/'
---

**Last updated 25th March, 2021.**

## Objective

This guide covers the creation of application tokens for AI Training.

## Requirements

-   a working `ovhai` CLI [how to install ovhai CLI](https://docs.ovh.com/it/publiccloud/ai/cli/install-client)

## Instructions

### token create

If you need any help while creating a new token, run `ovhai token create --help`:

``` {.console}
USAGE:
    ovhai token create [OPTIONS] <name> --role <role>

ARGS:
    <name>    Token's name

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -l, --label-selector <name=value>
            Only jobs with this label's name and value will be accessible using this token

    -o, --output <output>
            Command output format [default: yaml] [possible values: json, yaml]

    -r, --role <role>
            Operator role gives all access, read role only allow to access job's APIs [possible
            values: read, operator]
```

### Create an app token

The creation of application tokens is pretty straightforward, you need to define what roles to assign to the token and its scope.

There are two roles available:
- `read` a token with this role will allow access to the services exposed by the job on the `job_url`
- `operator` a token with this role will allow interaction with AI Training api and CLI

The tokens can be scoped to apply only on jobs matching a specific label.
Upon creating a token simply provide a `name=value` pair and when running a new job add the label to the job to be accessible `ovhai job run -l name=value`.
If you create a new job using an app token the `label-selector` is automatically added to the created job so that it falls within the token scope.

Let us create a new `operator` token scoped to `model=base` and named `basetoken`:

``` {.console}
ovhai token create basetoken --label-selector model=base --role operator
```

> [!warning]
> An unscoped token will have access to all jobs.

### Use the app token

If your token has a role `read` and you wish to acces the `job_url` or if it is an `operator` token and you wish to use the AI Training API simply add the following header to your HTTP requests:

``` {.console}
-H 'Authorization: Bearer <token>'
```

You can also use the `operator` token directly with the `ovhai` CLI.
For all commands simply add the flag `--app-token` to override the default authentication method.
Running a simple `Hello World` with the app token :

``` {.console}
ovhai job run --app-token <my-token> ubuntu -- echo `Hello World`
```

### Token lifecycle

Application token do not have an expiration date.
We need an additional mechanism to revoke those tokens and remove access to unwanted applications.

There are two ways to revoke a token.

#### token delete

You can delete any token using its id. List the tokens and find the `ID` associated with your token.
Then simply run:

``` {.console}
ovhai token delete <token-id>
```

#### token renew

You may wish to revoke a token while keeping its name and `label-selector`, a typical use case is if your token leaked or is compromised in any way.
Rather than deleting and recreating the token you can renew it. Simply run:

``` {.console}
ovhai token renew <token-id>
```

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9) 
