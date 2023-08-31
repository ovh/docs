---
title: Deploy on {{< vendor/name >}}
slug: development-deploy-button
section: Development
order: 5
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} offers a number of project templates as part of the Project Creation Wizard to help bootstrap a new project.
However, you can also create arbitrary links to spawn projects on {{< vendor/name >}} from an arbitrary Git repository or prepared template.

There are two ways to create such a link, shown below.
In each case, when a user clicks on the link they are redirected to create a new {{< vendor/name >}} project,
with the template selection step skipped in favor of the template specified.
If the user doesn't have a {{< vendor/name >}} account yet they're prompted to create one.

You may include the link on your own project's website, your company's internal Wiki,
or anywhere else a link can go to make launching your code base as straightforward as possible.

## Preparation

To have a deployable template, you need to first prepare the repository.
The Deploy on {{< vendor/name >}} button works with any Git repository that's deployable on {{< vendor/name >}}.
It needs [app configuration](../create-apps/_index.md)
and [`{{< vendor/configfile "routes" >}}` file](../define-routes/_index.md).
If you are using any [services](../add-services/_index.md),
you also need a [`{{< vendor/configfile "services" >}}` file](../add-services/_index.md),

The repository must be available at a publicly accessible Git URL.
That may be hosted with GitHub, GitLab, Bitbucket, your own custom Git hosting,
or any other publicly accessible Git URL.

### (Optional) Make a template definition file

You can create a Deploy on {{< vendor/name >}} button for any compatible repository;
however, you can also provide a YAML template definition file.
A template definition file is a YAML file that references a Git repository but can also include additional information,
such as limiting the resulting project to a certain minimum project size or only allowing it to be deployed in certain regions.
Use this mechanism when you want more control over how the template gets deployed.

The template definition file may be at any publicly accessible URL.
It can be in the template repository itself or separate.
Note that if it's in the template repository then it's included in every deployed user project from that template.
(It doesn't hurt anything as it has no effect at runtime,
but users have a copy of the file in their code base and may be confused by it.)

A list of all [{{< vendor/name >}}-supported templates](https://github.com/platformsh/template-builder/tree/master/templates) is available on GitHub.
[3rd party templates](https://github.com/platformsh/templates-external/) are also available.
You can also create your own template file and host it anywhere you wish.

The template definition file's format is [documented](https://github.com/platformsh/templates-external/blob/master/template-definition.yaml)
in the 3rd party template repository.

## Making a button (with a widget)

The easiest way to make a Deploy on {{< vendor/name >}} button is to use the [button builder widget](https://platform.sh/deploy/).
You provide it with either the Git URL of the repository or a URL to a corresponding template definition file.

The button builder widget gives you an HTML fragment to copy and paste to wherever you want the button hosted.
It also includes a tracking code to know whose Deploy on {{< vendor/name >}} button was clicked, but doesn't add any cookies to the site.

## Making a button manually

### Arbitrary Git repository

Create a link in the following form:

```text
https://console.platform.sh/org/create-project?template=GIT_URL
```

Where `GIT_URL` is the URL of a publicly visible Git repository.
For example, to install {{< vendor/name >}}'s [Drupal 10 template on GitHub](https://github.com/platformsh-templates/drupal10) you would use:

```text
https://console.platform.sh/org/create-project/?template=https://github.com/platformsh-templates/drupal10.git
```

(Note that's the URL of the Git repository as if you were cloning it, NOT the URL of the repository's home page on GitHub.)

A new project is created and then initialized with whatever code is at the tip of the default branch of that repository.
This method works for any publicly visible Git repository,
provided that it includes the necessary {{< vendor/name >}} YAML configuration files.
If those are missing the project still initializes but fails to build.

### Defined Template

Create a link in the following form:

```text
https://console.platform.sh/org/create-project?template=TEMPLATE_URL
```

Where `TEMPLATE_URL` is the URL of a publicly visible template definition file.
For example, to install {{< vendor/name >}}'s [Drupal 10 template](https://github.com/platformsh-templates/drupal10) you would use:

```text
https://console.platform.sh/org/create-project/?template=https://github.com/platformsh/template-builder/blob/master/templates/drupal10/.platform.template.yaml
```

A new project is created, initialized with whatever code is at the tip of the default branch of the repository referenced by that file,
provided that it includes the necessary {{< vendor/name >}} YAML configuration files.
If those are missing the project still initializes but fail to build.

## Listing a repository

{{< vendor/name >}} welcomes project templates produced by the application vendor.
If you have a Free Software application you want available in the {{< vendor/name >}} setup wizard,
create a template definition file and submit a pull request against the [3rd party templates repository](https://github.com/platformsh/templates-external/).
The Developer Relations team reviews and evaluate the application and template, and may offer feedback before merging.
Generally speaking, any Free Software application that's actively maintained and runs well on {{< vendor/name >}} is welcome.
Projects released under a non-Free license aren't accepted.
