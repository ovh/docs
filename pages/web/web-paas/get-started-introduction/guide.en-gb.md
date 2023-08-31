---
title: Introduction
slug: get-started-introduction
section: Get-Started
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} is a cloud webpaas for responsibly building, running, and scaling fleets of websites and applications.
It enables you to run your web apps in the cloud with productive and consistent development and testing workflows.

You spend your time creating amazing experiences, not managing infrastructure.

Get started with {{< vendor/name >}} by following this guide.

## Why

The process of testing, deploying, and monitoring web applications (often grouped together under the term DevOps)
can be complicated.
You want to scale your offerings while maintaining consistency and reliability across your applications.

{{< vendor/name >}} simplifies your development workflows and helps you automate manual tasks across a fleet of websites.
You can create build images you can test and then deploy with confidence,
knowing the changes work the same in production as they have in your development process.

See a more detailed overview of {{< vendor/name >}} and how it can fit within your workflow in this video:

{{< youtube ny2YeD6Qt3M >}}

## What you need

You need a few things before you can start creating projects.

### An account

To get started, you need a {{< vendor/name >}} account.
You can start with a free 30-day trial that should contain everything you need to complete this guide.

If you don't have an account yet, [register for an account](https://auth.api.platform.sh/register).
You can use an email address or a GitHub, Google, Bitbucket, or GitLab account.

### Git

GitOps is a term for workflows that use the Git version control software to manage infrastructure.
It enables you to use familiar developer tools to manage Continuous Deployment in the cloud.

Use the same version control system for your infrastructure as for your app development.
You get a history of changes with an audit log.

Git is at the center of work with {{< vendor/name >}}.
That's why each step in this guide is connected to a common Git command.

Make sure your computer has [Git installed](https://git-scm.com/downloads).

### CLI

To facilitate working with {{< vendor/name >}}, you can use the {{< vendor/name >}} command-line interface (CLI).
This lets you carry out various actions from a terminal.

{{< cli-installation >}}

### Code

To start a project, you should have code on your computer that you'd like to deploy.
It can be a basic "Hello World" site, such as you can find in the [{{< vendor/name >}} demos](https://github.com/platformsh-demos).
Just something that you know runs.

An alternative is one of the [{{< vendor/name >}} templates](../development/templates.md).
These are example apps that come with everything needed to run on {{< vendor/name >}}.

## Choose your stack

To get started with a project, choose the language or framework your code uses:

{{< get-started/choose-stack >}}
