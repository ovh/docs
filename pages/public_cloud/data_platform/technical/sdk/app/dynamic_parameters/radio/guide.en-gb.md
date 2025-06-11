---
title: "Radio"
updated: 2025-02-15
---

## Objective

The radio buttons allow you to choose **one** item from a defined list.

> [!primary]
> Please refer to [checkbox](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/checkbox)  for a full reference.  
The differences are :

* `component` : **radio**
* `default` : that is a `string` and not an `array`

```json
{
  "id": "year",
  "type": "filter",
  "component": "radio",
  "reference": "year",
  "dictionary": "year",
  "default": "2020",
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
* __items__ : Allows to manually define the elements to display, the label will be displayed on the screen, the value will be displayed in the associated queries.
* __dictionary__ : load items automatically and dynamically from your DataPlant.
* __default__ : When you first see your radio buttons, this value will be selected.
* __reference__ : Specifies the name of the field to modify in the queries in the case of a transform of type "filter".

## Code example

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'radio',
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