---
title: "Use custom Python modules from a Git repository"
updated: 2025-02-15
---

## Objective

In some cases, you will want to use your own and already existing Python code. 

In order to import your custom Python modules and use it in a [Custom action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index), you may refer to an external Git repository that will be pulled before each build of your job.

Here are the steps in order to use an external Git repository as a Python module:

1. Adapt your module so that its compatible with `pip install` 
    * see [setuptools documentation](https://packaging.python.org/guides/distributing-packages-using-setuptools/)
2. Your Python module must be hosted on an accessible host, if repository is private, you need to get an `access token`. 
For instance, in [GitHub](https://github.com), you must generate a **personal access token** 
(Other providers may have similar procedures)
    * [how to set tokens](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
    * [set your personal token in GitHub](https://github.com/settings/tokens)
3. Check that downloading of the package works well with your token 
    * Zip Archive: `https://<access_token>@github.com/<myorg>/<myProject>/archive/<ref>.zip`
    * Git: `git+https://<access_token>@github.com/<myorg>/<myProject>.git`
    * Git with a tag name: `git+https://<access_token>@github.com/<myorg>/<myProject>.git@<tag>`
4. Check that `pip install` works with your URL on your local computer 
```bash
pip install <URL>
```
5. On your dataplant, in a custom action, add the dependencies in the **Advanced Mode** in `forepaas.json`: 
    * with a HTTPS Zip archive 
```json
      {
        "dependencies": {
          "python": {
            "https://<access_token>@github.com/<myorg>/<myProject>/archive/<ref>.zip": null
          }
        }
      }
```
    * with a Git+HTTPS repository
```json
      {
        "dependencies": {
          "python": {
            "git+https://<access_token>@github.com/<myorg>/<myProject>.git": null
          }
        }
      }
```
    * with a Git+HTTPS repository, including a `tag` name or a `commit hash`
```json
      {
        "dependencies": {
          "python": {
            "git+https://<access_token>@github.com/<myorg>/<myProject>.git@<tag>": null
          }
        }
      }
```

> [!warning]
> Note that there is no automatic detection of change in a custom Git module.<br/> 
In order to force the dependency rebuild, you need to specify which version of the module to use (e.g. `tag` or `commit hash`).<br/> 
When this version is updated, the instance image will be rebuilt at the next execution.<br/>
This allows a better control of which version is actually used at execution time.

6. In your custom action python code, you can now import and use it!
```python
import mypackage
```

## Go further

Join our [community of users](/links/community).