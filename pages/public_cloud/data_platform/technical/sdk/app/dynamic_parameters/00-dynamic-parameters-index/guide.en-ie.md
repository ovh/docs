---
title: "Dynamic Parameters"
updated: 2025-02-15
---

## Objective

Dynamic parameters enables your end-users to select values which are passed on to Charts to be filtered on and refreshed.

Dynamic Parameters values are applied to Chart requests at the [Front API level](/pages/public_cloud/data_platform/technical/sdk/api/00-api-index) via [Query Builder Transformers](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-transformers). You may extend default Transformers to your own needs.

For specific display needs, it is also possible to create custom Dynamic Parameters.

## List of available Dynamic Parameters

| name       | description  |
| :--------- | :----------- |
| [selectbox](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/selectbox)  | Select from a list, one or more items |
| [checkbox](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/checkbox)   | Select from checkboxes one or more items |
| [radio](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/radio)      | Selects an item through a list of radio buttons |
| [datepicker](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/datepicker) | Select a date range |
| [datepicker.day](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/daypicker) | Select a specific day |
| [datepicker.months](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/monthspicker) | Select a month range |
| [datepicker.month](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/monthpicker) | Select a specific month |
| [toggle](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/toggle) | Return a boolean |

### Configuration

```json
{
  "id": "my-id",
  "component": "selectbox",
  "type": "filter"
}
```

| fields  | description  |
| :------ | :----------- |
| `id`    | Used when saving its state and to connect it to Charts. | 
| `component` | Specify the dynamic parameter to use, either those listed above, or your own. |  
| `type` | Specify how `requests` are affected, acting either as a `filter` or as a `scale`. Custom transformers may handle your own types |

> [!warning]
> **Tip** When using **Architect** it will auto-generate an `id` with a non-meaningful name. We strongly recommend to rename it as soon as you have created it, as this `id` will be used in `chart.dynamic-parameters`.

## Adding Dynamic Parameters in Dashboard

You can add a dynamic parameter :

* from the online dashboard editor and its dialog boxes
* in **Advanced Mode** to edit JSON configuration
* by editing directly configuration files in `./config/`
* Via the `menu` tab in the main menu selection 

## Using a Dynamic Parameter in another React Component

You may use a dynamic parameter directly from code. Use the same JSON configuration as described above, and then call it as any React component.

Example:

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'

const myDynP =  {
    id: 'city',
    type: 'filter',
    component: 'checkbox',
    reference: 'city',
    dictionary: 'city',
    default: ['Paris', 'San Francisco']
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

## Creating your own Dynamic Parameter

You can write your own component to customize the appearance of your dynamic parameter.

Check out the available tutorial [**here**](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/create)!

## Go further

Join our [community of users](/links/community).