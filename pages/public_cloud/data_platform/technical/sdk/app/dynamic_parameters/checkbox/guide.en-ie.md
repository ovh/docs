---
title: "Checkbox"
updated: 2025-02-15
---

## Objective

Checkboxes allow you to choose one or more items from a defined list.

```json
{
  "id": "year",
  "type": "filter",
  "component": "checkbox",
  "reference": "year",
  "default": ["2020"]
  "dictionary": "year",
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

| fields | description |
| :---- | :---------- |
| `reference` | Specifies the name of the field to modify in the queries in the case of a transform of type `filter` |
| `default` | When you first display, it will take this value. |
| `dictionary` | Load items automatically and dynamically from your DataPlant |
| `items` | Manually define the elements to display, `label` will be displayed, `value` will be sent in the associated queries. |

> [!warning]
> Checkboxes choices comes either from a list of `items` **or** from a `dictionary`.

## Code example

Example:

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'checkbox',
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