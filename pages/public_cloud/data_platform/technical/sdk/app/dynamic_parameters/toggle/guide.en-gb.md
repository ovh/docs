---
title: "Toggle"
updated: 2025-02-15
---

## Objective

Toggle allows to return a Boolean.

```json
{
  "id": "my-toggle",
  "type": "filter",
  "component": "toggle",
  "default": false
}
```

| field | description |
| :---- | :---------- |
| `default` | When you first display your toggle, it will be initialized with this value (true / false). |

## Code example

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'my-toggle',
  type: 'filter',
  component: 'toggle'
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