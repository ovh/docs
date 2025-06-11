---
title: "Structure of an API on ForePaaS"
updated: 2025-02-15
---

## Objective

Here is the content of the source code of an API. Note that the SDK is available in NodeJS.

```
├── .gitignore
├── Dockerfile.dev
├── LICENSE.md
├── LICENSE.txt
├── app.js
├── dev.sh
├── forepaas
|   |-- cache-controller
|   |-- cache-redis
|   |-- cam
|   |-- logger-console
|   |-- qb
|   |-- reportings
|   |-- sdk
|   `-- webstorage
├── forepaas.json
├── package.json
├── run.sh
└── yarn.lock
```

- [Core files of the API](/pages/public_cloud/data_platform/technical/sdk/api/api-files#the-core-files-of-the-api)
- [Launcher utilities](/pages/public_cloud/data_platform/technical/sdk/api/api-files#launcher-utilities)
- [Git](/pages/public_cloud/data_platform/technical/sdk/api/api-files#git)
- [License](/pages/public_cloud/data_platform/technical/sdk/api/api-files#license)

### The core files of the API

```
├── app.js
├── forepaas.json
├── forepaas
├── package.json
└── yarn.lock
```

* `app.js`: central point of the API and will serve to launch all the rest. Here you can directly access the ExpressJS instance (via the app variable)
* `forepaas.json`: describes the list of extensions that make up your API
* `forepaas/`: contains the extensions installed in your API
* `package.json` : contains the NodeJS dependencies associated with your API
* `yarn.lock` : we use [yarn](https://yarnpkg.com/lang/en/) as package manager, it generates a file `yarn.lock` to **lock dependencies associated with your API**.

### Launcher utilities

* Docker
    * `Dockerfile.dev`: a **Docker** description of the context in which the API runs.
    * `dev.sh`: a script to launch the docker environment quickly.
* NodeJS
    * `run.sh` : a script to launch your API directly

### Git

* `.gitignore`: defines the Git files and folder that will not be *commited* (in case you use git).

  
### License

These two files mention the ForePaaS license associated with this SDK.
* `LICENSE.md`
* `LICENSE.txt`

## Go further

Join our [community of users](/links/community).