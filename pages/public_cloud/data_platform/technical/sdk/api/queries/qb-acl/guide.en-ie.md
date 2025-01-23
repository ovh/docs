---
title: "Customize Query Builder ACL rules in Front API"
updated: 2025-02-15
---

## Objective

> [!warning]
> The extension `qb` must be installed.

Create a file: /src/qb/services/ACL.js from this template:

```js
module.exports = async (req,query,dataset)=> {
    return query
}
```

For the moment no rules will be applied.

From this function you will be able to :

- Disallow the user to make the query
OR
- Update the query content by adding field inside the query (filter for example)

A complete example :

```js 
// This function is called each time you launch a query from the Front API,
// and allows you to intercept it. 
// thus you can easily forbid a query or modify it (in order to apply a filter) 

module.exports = async (req,query,dataset)=> {

// req.authentication.session contains the object provided by IAM 
// or your custom authentication

// If you wish to deny certain requests for non-admins.
if(query.data.fields.quantity && !req.authentication.session.isAdmin) {
    let err = new Error('QuantityNotAuthorized')
    err.status = 401
    throw err
}

// If you need to apply a filter for non-admin
if(!req.authentication.session.isAdmin) {
    query.filter = query.filter || {}
    query.filter.company = {
        in:["ForePaaS"]
    }
}

return query
 ```

## Go further

Join our [community of users](/links/community).

