---
title: "Create a custom Dynamic Parameter"
updated: 2025-02-15
---

## Objective

Creating your dynamic parameter makes it possible to use your favorite library or to implement all the details necessary for your use case.

> [!primary]
> Check out our [Getting Further on App development](/pages/public_cloud/data_platform/getting-further/app-dev/extension#generate-a-component) for specific use cases.

To get started, here is a hello-world for this dynamic parameter.
We will copy it to /src/FpDynamicParameterCustom.jsx

```jsx
import React from 'react'
import {connect} from 'react-redux'
import {set} from 'forepaas/store/querystring/action'

// Our system uses Redux to store information in a store named "querystring".
// Here we connect this component to the relevant store.
@connect((state) => ({
  querystring: state.querystring
}))
class FpDynamicParameterCustom extends React.Component {
  constructor (props) {
    super(props)
    // We will always store our current value in this.state.model
    this.state = {
      model: ''
    }
    // At the creation of composant, we have to check if a previous value is already on store
    this.initFromModel()
  }

  // Initialize the value with the current state in store
  initFromModel () {
    if (this.props.id) {
      var model = this.props.querystring[this.props.id]
      if (model) {
        this.state.model = model
      }
    }
  }

  // Update the store with "model" value
  updateModel (model) {
    if (this.props.id) {
      this.props.dispatch(set(this.props.id, model))
    }
  }

  // For now we will only render a "hello world string"
  render () {
    return (
      <div className='my-dynamic-parameter'>
        Hello world
      </div>
    )
  }
}

export default FpDynamicParameterCustom
```

Then in the file /src/index.js, add these lines to declare it. They should be located before the line `FpSdk.start()`

```jsx
import FpDynamicParameterCustom from './FpDynamicParameterCustom.jsx'
FpSdk.modules['dynamic-parameter-custom'] = FpDynamicParameterCustom
```

Once this is done, the dynamic parameter is working: it's called `custom`.

Add it to your **Dashboard**, via this configuration JSON snippet inside a *dynamic parameter*. 
```json
{
  "id": "custom",
  "type": "filter",
  "component": "custom"
}
```

Or directly as code like in this example: 

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'custom',
  type: 'filter',
  component: 'custom'
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

Your component will display "Hello World".

In this example, simply put an input text, which will be used to filter on the `city` field.

For this purpose, add to the configuration the `reference` field, which in ForePaaS SDK defines the field on which dynamic parameter will act.

```json
{
  "id": "custom",
  "type": "filter",
  "component": "custom",
  "reference": "city"
}
```

Then modify the component, adding:

* the `handleChange` function
* an input instead of the "hello world"

```jsx
  handleChange (event) {
    this.setState({model: event.target.value})
  }
  render () {
    return (
      <div className='my-dynamic-parameter'>
        <input type='text' value={this.state.model} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
```

At each modification of the input, we will update the component state. But as mentioned earlier, this has no effect on the store.  
You must add one line in the `handleChange` function.

```jsx
  handleChange (event) {
    this.setState({model: event.target.value})
    this.updateModel(event.target.value)
  }
```

Your dynamic parameter is ready!

* If you change its content, URL will change too (with its value).
* If you connect it to a chart, it will be filtered automatically.

## Go further

Join our [community of users](/links/community).