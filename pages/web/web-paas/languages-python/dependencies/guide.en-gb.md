---
title: Manage Python dependencies
slug: dependencies
section: Python
---

**Last updated 31st August 2023**



## Objective  

You can manage Python packages in different ways.
Python images come with pip installed,
but they're flexible enough so you can choose what package manager you want.
This article describes how to configure major package management tools.

This package management is different from global dependencies (packages available as commands),
which you can add in your [app configuration](../../create-apps/_index.md).
See more about [managing global dependencies](./_index.md#package-management).

## Pip

[pip](https://pip.pypa.io/en/stable/) is the primary package installer for Python
and comes installed on every Python container.
You can use it to install packages from the Python Package Index and other locations.

To manage packages with pip,
commit a `requirements.txt` file with all of the dependencies needed for your app.
Then install the packages in your [`build` hook](../../create-apps/hooks/_index.md),
such as by running the following command: `pip install -r requirements.txt`.

The following sections present ideas to keep in mind to ensure repeatable deployments on {{< vendor/name >}}.

### pip version

The version of pip on Python containers gets updated regularly.
But it isn't guaranteed to be the latest version or the version that matches your local environment.
You might want to define a specific version of pip in your deployments to further enforce repeatable builds.

To do so, modify your [app configuration](../../create-apps/_index.md), as in the following examples:

> [!tabs]      

### pip freeze

You can write `requirements.txt` files in various ways.
You can specify anything from the latest major to a specific patch version in a [requirement specifier](https://pip.pypa.io/en/stable/reference/requirement-specifiers/).
Use `pip freeze` before committing your requirements to pin specific package versions.
This ensures repeatable builds on {{< vendor/name >}} with the same packages.

## Pipenv

[Pipenv](https://pipenv.pypa.io/en/latest/) is a package manager for Python
that creates and manages a virtual environment for Python projects. 
Dependencies are tracked and defined within a `Pipfile`.
It also generates a `Pipfile.lock` file to produce repeatable installs.

You can specify the latest or a specific version of Pipenv
in your deployments to ensure repeatable builds.
Because Pipenv depends on pip, you might want to also specify the pip version.

> [!tabs]      

## Poetry

[Poetry](https://python-poetry.org/docs/) is a tool for dependency management and packaging in Python. 
It allows you to declare the libraries your project depends on and manages them for you. 
Poetry offers a lock file to ensure repeatable installs and can build your project for distribution.
It also creates and manages virtual environments to keep project work isolated from the rest of your system.

To set up Poetry on {{< vendor/name >}}, follow these steps:

1\.  Configure your virtual environment by setting two variables in your [app configuration](../../create-apps/_index.md).


    - [`POETRY_VIRTUALENVS_IN_PROJECT`](https://python-poetry.org/docs/configuration/#virtualenvsin-project):
      Setting this to `true` places the virtual environment at the root of the app container: `/app/.venv`.
    - [`POETRY_VIRTUALENVS_CREATE`](https://python-poetry.org/docs/configuration/#virtualenvscreate):
      Setting this to `true` ensures that the same virtual environment created during the build hook is reused in subsequent steps. 

    Set the variables as follows:

```yaml {configFile="app"}
variables:
    env:
        POETRY_VIRTUALENVS_IN_PROJECT: true
        POETRY_VIRTUALENVS_CREATE: true
```


2\.  Install Poetry.

    You can specify the latest or a specific version of Poetry in your deployments to ensure repeatable builds.

> [!tabs]      

3\.  Make Poetry available outside the build hook.

    Although step 2 updated the `PATH` to make Poetry available during the build hook,
    it isn't enough to make it available at subsequent stages.

    To use Poetry in a start command, a deploy hook, or during SSH sessions,
    update the `PATH` in a [`.environment` file](../../development/variables/set-variables.md#set-variables-via-script).

```text {location=".environment"}
# Updates PATH when Poetry is used, making it available during deploys, start commands, and SSH.
if [ -n "$POETRY_VERSION" ]; then
    export PATH="/app/.local/bin:$PATH"
fi
```

## Anaconda

Some frameworks and tools recommend using Anaconda or Miniconda to manage packages in Python. 
The following Community resources can help get you started with them:

- [Running and installing Anaconda/Miniconda on {{< vendor/name >}}](https://community.platform.sh/t/how-to-run-an-anaconda-miniconda-python-stack-on-platform-sh/230)

- [Running R Shiny using Miniconda on {{< vendor/name >}}](https://community.platform.sh/t/how-to-run-r-shiny-on-platform-sh/231)

