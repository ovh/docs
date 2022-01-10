---
title: Troubleshoot source integrations
slug: troubleshoot
section: Source
---

**Last updated 7th January 2022**


## Unable to clone a repository

If you [add a user](../../administration-users#add-a-user-to-a-project) to a project on Web PaaS,
but you haven’t added them to the remote repository on GitHub, GitLab, or Bitbucket,
they can't clone the project locally.

If that user tries to use `webpaas get` with the CLI:
```
$ webpaas get <projectID>
```
it returns the following error:

```
Failed to connect to the Git repository: git@github.com:user/github-repo.git
Please make sure you have the correct access rights and the repository exists.
```

### Solution: check external repository access rights

Ensure the user has the correct access rights for the external integration repository.
