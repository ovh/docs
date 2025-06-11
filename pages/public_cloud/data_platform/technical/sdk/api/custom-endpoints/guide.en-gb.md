---
title: "Create custom endpoints"
updated: 2025-02-15
---

## Objective

It is possible to create completely new **endpoints** in your API.

- [Add new routes](/pages/public_cloud/data_platform/technical/sdk/api/custom-endpoints#add-new-routes)
- [Upload files through APIs](/pages/public_cloud/data_platform/technical/sdk/api/custom-endpoints#upload-files-through-apis)

## Add new routes

**./src/index.js**
```js

const IAM = require('../forepaas/iam/IAM')

/*
We define an AuthInterceptor, that checks for user authentication, to be used in the new routes.
Without adding it, the new routes will be publicly available.
In the /qb/* endpoints the same mechanism is already done.
*/
let AuthInterceptor = function (req, _res, next) {
    new IAM().checkSession(req, (err, session) => {
        if (err) {
            return next(err);
        } 
        req.authentication = {
            session
        }
        next();
    })
}
/*
The SDK loads src/index.js, if present, and execute the exported function passing the "Express app".
That gives an opportunity to add routes.
*/
module.exports = (app) => {
    // this route checks for user authentication
    app.get('/hello/user', [AuthInterceptor], (req, res, next) => {
    res.ok({"hello": "user !"});
  });
  // this route will be public
  app.get('/hello/everyone', (req, res, next) => {
    res.ok({"hello": "world !"});
  });
}
```

> [!primary]
> **Notes:**
>
> * The SDK uses [Express](https://expressjs.com/)
> * If the `./src/index.js` file exists, it is executed as a function passing the Express `app`
> * This allows you to declare new routes using Express methods
> * It is needed to handle Authentication in those implementations

## Upload files through APIs

You can use the same mechanism and a library such as [Multer](https://www.npmjs.com/package/multer).

For instance, to process `my-budget.csv`:
```js
const FpCam = require('../forepaas/cam/FpCam')
const upload = multer()

module.exports = (app) => {
  app.get('/send/budget', [AuthInterceptor, upload.single('budget')], (req, res, next) => {
    console.log(req.file)
    res.ok()
  })
}
```

It is then possible to process the file from the Front API, store it in the Data Manager buckets and launch a [Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/00-dpe-index) workflow or action!

## Go further

Join our [community of users](/links/community).