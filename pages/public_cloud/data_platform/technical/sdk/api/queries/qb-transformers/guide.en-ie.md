---
title: "Create Transformers for the Query Builder"
updated: 2025-02-15
---

## Objective

Transformers intercept and change queries right before they are sent to the Query Builder. 

In the default flow, **Default Transformers** are called by the API's Query Builder (`/forepaas/qb`) component, in order to inject the values of the **Dynamic Parameters** to the filters and scales of the query.

## Typical use case

For a better understanding of how transformers work and can be created, let's use an example that is often found in data Projects.  

Let's say that most of the displayed data is filtered on the same `date` attribute. However, let's imagine some tables do not have a `date` attribute, but instead a `previous_date` attribute.  
With default behavior, queries made to this table would return a **No table found for this query** error. 

To solve this, a custom transformer is needed.

* [Create a custom transformer](#create-a-custom-transformer)
* [Configure the Front App](#configure-the-front-app)
* [Customize a transformer](#customize-transformer)
* [Check the transformation](#check-the-transformation)

## Create a custom transformer

Just like custom endpoints, creating a new transformer requires adding files in a specific directory: `/src/qb/transformers`.  

There are 3 types of transformers available for each part of a query :

* `filter`: for which you can create a `filter.js` file
* `data`: for which you can create a `data.js` file
* `scale`: for which you can create a `scale.js` file

In the case described above, create `./src/qb/transformers/filter.js`, copying the default one from `./forepaas/qb/transformers/filter.js`

**./src/qb/transformers/filter.js**

```js
module.exports = {
  default:(query,{reference,value})=>{
    if(value === null) return Promise.resolve(query)
    if(!Array.isArray(value)) value = (value||"").split(';')
    query.filter = query.filter || {}

    if (reference.search(/^range_/) !== -1) {
      let rangeref = reference.replace(/^range_/, '')
      query.filter[rangeref] = query.filter[rangeref] || {}
      if(Array.isArray(value)) value = value[0]
      if(value) query.filter[rangeref].between = value.split(',')
      return Promise.resolve(query)
    }

    query.filter[reference] = query.filter[reference] || {}
    query.filter[reference].in = query.filter[reference].in || []
    query.filter[reference].in = query.filter[reference].in.concat(value)
    return Promise.resolve(query)
  }
}
```

Transformers are objects with at least one `default` method.  
This method takes the following parameters:

* `query`: the full query modified by the function
* `reference`: as defined in the dynamic parameter configuration in the **Front App**
* `value`: value(s) passed by the **Front App**

This function is called for each Dynamic Parameter passed with the Query.

At this point, the Front API keeps the same behavior, going through this custom transformer rather than the default one.

## Configure the Front App

With that in mind let's have a look at a regular request.  
Here is the configuration of a chart:

```json
{
  ...
  "chart": {
    "requestId": "xyz123-xyz123-xyz123-xyz123-xyz123",
    "dynamic-parameters": [
      "datepicker"
    ]
  },
  ...
}
```

The generated HTTPS request is a *POST* call on the endpoint `/qb/query/xyz123-xyz123-xyz123-xyz123-xyz123` with the following body:

```json
{
  "dynamic_parameters": [
    {
      "type": "filter",
      "transform": "default",
      "value": [
        "1582502400,1582588799"
      ],
      "params": [],
      "reference": "range_date"
    }
  ]
}
```

Here only 2 things need to change in order to get the needed feature:

* `default`: needs to be changed to a custom value, for instance `changeRef`
* `params`: needs to include `previous_date` so our custom transformer may use it. 

The `dynamic-parameters` configuration allows you to do both those changes.
Going back to the chart's configuration, the transformer type will be set using a `|` and the `params` using a `:`.

```json
{
  ...
  "chart": {
    "requestId": "xyz123-xyz123-xyz123-xyz123-xyz123",
    "dynamic-parameters": [
      "datepicker|changeRef:range_previous_date"
    ]
  },
  ...
}
```

And the *POST* body becomes :

```json
{
  "dynamic_parameters": [
    {
      "type": "filter",
      "transform": "changeRef",
      "value": [
        "1582502400,1582588799"
      ],
      "params": ["rnge_previous_date"],
      "reference": "range_date"
    }
  ]
}
```

It is now necessary to handle it in the `filter` transformer.

## Customize transformer

A new method `changeRef` needs to be implemented in the object taking the same input as `default`, plus the `params`array described above.

```js
module.exports = {
  ...
  changeRef: (query, { reference, value, params }) => {}
}
```

In that case, it is suited to factorize `default` method, so `changeRef` may be implemented by calling it with different rules for `reference`.

Therefore, the full **/src/qb/transformers/filter.js** ends up looking like this:

```js
const defaultTransformer = (query, { reference, value }) => {
  if (value === null) return Promise.resolve(query)
  if (!Array.isArray(value)) value = (value || "").split(';')
  query.filter = query.filter || {}

  if (reference.search(/^range_/) !== -1) {
    let rangeref = reference.replace(/^range_/, '')
    query.filter[rangeref] = query.filter[rangeref] || {}
    if (Array.isArray(value)) value = value[0]
    if (value) query.filter[rangeref].between = value.split(',')
    return Promise.resolve(query)
  }

  query.filter[reference] = query.filter[reference] || {}
  query.filter[reference].in = query.filter[reference].in || []
  query.filter[reference].in = query.filter[reference].in.concat(value)
  return Promise.resolve(query)
}

module.exports = {
  default: defaultTransformer,
  changeRef: (query, { reference, value, params }) => {
    return defaultTransformer(query, {
      reference: params[0] || reference,
      value
    })
  }
}
```

The `changeRef` method calls the `defaultTransformer` function, changing `reference` in the process.

## Check the transformation

The last step is to make sure that query uses the `changeRef` option. In the end, the query sent by the chart will have the following body:

```json
{
  "filter": {
    "previous_date": {
      "between": ["1582502400","1582588799"]
    }
  }
}
```

> [!primary]
>  Using these techniques on `filter`, `scale` or `data` coupled with [Front App's Dynamic parameters](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/00-dynamic-parameters-index) allows you to thouroughly customize your apps!

## Go further

Join our [community of users](/links/community).