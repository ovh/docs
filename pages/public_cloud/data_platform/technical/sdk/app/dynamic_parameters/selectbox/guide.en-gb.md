---
title: "Selectbox"
updated: 2025-02-15
---

## Objective

Selectboxes allow you to choose one or more items (depending on the desired configuration) from a defined list.

```json
{
  "id": "the-year",
  "type": "filter",
  "component": "selectbox",
  "customclass": "my-selectbox"
  "reference": "year",
  "placeholder": "Select a year",
  "sortBy": "value",
  "notEmpty": true,
  "multi": false,
  "default": [
    "2019"
  ],
  "dictionary": "year",
  "tableName": null,
  "order": null,
  "parents": [],
  "items": [
    {
      "value": "2020",
      "label": "Year 2020"
    },
    {
      "value": "2019",
      "label": "Year 2019"
    },
    {
      "value": "2018",
      "label": "Year 2018"
    }
  ]
}
```

| field   | description |
| :------ | :---------- |
| `customclass` | Adds a custom CSS class around the selectbox. |
| `reference` | Specifies the name of the field to modify in the queries in the case of a transform of type `filter`. |
| `placeholder` | Sets the message displayed when no item is selected. |
| `sortBy` | Allows you to order your results by value or label (possible value  `none`, `label`, `value`, `-label`, `-value`). |
| `notEmpty` | On the first load, if notEmpty is used and no default value is set, the first element will automatically be selected. |
| `multi` | If this value is used, several values ​​can be selected in the selectbox. |
| `default` | When you first display your selectbox, it will take this value. |
| `dictionary` | Load items automatically and dynamically from your DataPlant. See below for further details. |
| `tableName` | (Optional) When using `dictionary` it forces the Query Builder to use a given table. This is not the recommended usage. |
| `order` | (Optional) Only when `type` is `scale`, see below for further details |
| `parents` | Array to list the `id` of Dynamic Parameters that will filter the contents of this one |
| `items` | allows to manually define the elements to display in the selectbox, the label will be displayed on the screen, the value will be sent in the query. |

### dictionary

The `dictionary` attribute may be:

* a `string` that refers to a **field name**
```json  
"dictionary": "year"
```
* an `object` with `id` for the **field name** and a `filter` to specify some criteria

```json
{
  ... 
  "dictionary": {
    "id": "year",
    "filter": {
      "year": {
        "gte": ["2015"]
      }
    }
  }
  ...
}
```  

Then, the Query Builder will request all values for this **field** requesting it from the table with that field and minimum number of rows.

If the **field name** is a primary key (i.e. **station_id**) and has been assoicated in Data Manager to an **Object's Label**, the **Query Builder** will automatically retrieve *label* to display and *value* to pass as *reference* when filtering *charts*.

### order

When dynamic parameter `type` is `scale`, the `value` will be added to `scale.fields` request.
The `order` is an object that details for each `value` how it should be ordered.
For instance:
```json
{
  "type": "dynamic-parameter",
  "dynamic-parameter": {
    "type": "scale",
    "id": "select_scale",
    "component": "selectbox",
    "default": "yearmonth",
    "order": {
      "yearmonth": "asc",
      "date": "asc"
    },
    "items": [
      {
        "label": "by month",
        "value": "yearmonth"
      },
      {
        "label": "by date",
        "value": "date"
      }
    ]
  },
  "label": "Scales"
}
```

## Code example

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'selectbox',
  reference: 'city',
  dictionary: 'city'
}
class MyComponent extends React.Component {
  render () {
    return (
      <div className='hello-world'>
        <FpDynamicParameter dynamic-parameter={myDynP} />
      </div>
    )
  }
}
export default MyComponent
```

## Go further

Join our [community of users](/links/community).