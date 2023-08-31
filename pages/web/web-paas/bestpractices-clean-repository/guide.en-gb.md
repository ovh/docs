---
title: Keep your Git repository clean
slug: bestpractices-clean-repository
section: Best practices
order: 10
---

**Last updated 31st August 2023**



## Objective  

When a Git repository contains a high number of references and files, the performance of Git can decrease.
This is why most Git providers have repository size limits in place (for more information, see the [GitHub](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), [GitLab](https://docs.gitlab.com/ee/user/gitlab_com/index.html#account-and-limit-settings)
and [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/reduce-repository-size/) documentation).

The {{< vendor/name >}} API and [Console](../administration/web/_index.md) are closely tied to Git.
When the performance of Git decreases, {{< vendor/name >}} API servers also become slower.
As a user, you can then experience significant latencies.
If your repository becomes too large, your Console may even become unresponsive,
leaving you unable to access your project.

To avoid such issues, make sure you keep your Git repository clean by following the instructions on this page.

If you're already facing performance issues and suspect they might be related to the size of your Git repository,
see how you can [troubleshoot a sizeable Git repository](#troubleshoot-a-sizeable-git-repository).

## Enable the automated pruning of old branches in your project

To keep your repository size to a minimum,
make sure that branches that don't exist anymore in your repository have also been deleted from {{< vendor/name >}}.

To automate this process, when setting up a [source integration](../integrations/_index.md),
enable the `prune-branches` option.

If you already have a source integration set up and want to enable the `prune-branches` option,
follow these steps:

> [!tabs]      


## Upload your files through mounts

Keeping too many files, especially large binary files, in your Git repository can cause performance and stability issues.
Therefore, {{< vendor/name >}} recommends that you only commit your source code in Git.

To upload any other files to your app, [create mounts](https://docs.platform.sh/create-apps/app-reference.html#mounts)
and [transfer your files directly to them](https://docs.platform.sh/development/file-transfer.html#transfer-a-file-to-a-mount).

## Troubleshoot a sizeable Git repository

If you're experiencing latencies or can't access your Console anymore,
your Git repository may have become too large and may need to be cleaned up. 
To do so, follow these instructions:

1\. Remove old, unwanted files from your repository (especially large files).

   You can do it manually, or use a tool such as [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).
2\. Remove stale branches from your repository and {{< vendor/name >}} project.

3\. Rebase and/or squash commits to clean up your history.

4\. Make sure you [enable the automated pruning of old branches in your project](#enable-the-automated-pruning-of-old-branches-in-your-project)

   and [upload your files through mounts](#upload-your-files-through-mounts) to avoid facing the same situation in the future.
