---
title: "Create custom components"
updated: 2025-02-15
---

## Objective

ForePaaS lets you create your own fully customized components. This is done in two steps. First, you [create a custom component](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/00-custom-component-index#step-1-create-the-component), then you [add it to your app](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/00-custom-component-index#step-2-add-it-to-your-configuration).

> [!primary]
> For more specific guides, you can also check out the pages about creating your own:

* [custom charts](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/custom-chart) 
* [custom dynamic parameters](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/create) 

## Step 1: Create the component

### Create the main component file

```jsx
// ./src/components/Hello/Hello.jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an hello-world
 */
class Hello extends Component {
  state = {}

  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <div className='hello'>
        <img src='assets/img/logo.png' className='logo' />
        <h1>Welcome {this.props.name}</h1>
        <p>
          Welcome to your newly created Application
        </p>
      </div>
    )
  }
}

// You can add props, you will be able to set value from Architect or from JSON
Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
```

### Create a style file

```less
// ./src/components/Hello/Hello.less
.hello {
  .logo {
    margin-top: 20px;
    width: 200px;
  }
  text-align: center;
}
```

### Create and load files

Create an index

```js
// ./src/components/Hello/index.js
import Hello from './Hello.jsx'
import './Hello.less'

export default Hello
```

Add it to the components index

```js
// ./src/components/index.js

import Hello from './Hello'

import FpSdk from 'forepaas/sdk'
import DashboardTitle from './DashboardTitle'
import Username from './Username'
import Toaster from './Toaster'

export default {
  components: {
    Hello,
    DashboardTitle,
    Username,
    Toaster
  },
  camelCaseToDash (myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  init () {
    for (let component in this.components) {
      FpSdk.modules[this.camelCaseToDash(component)] = this.components[component]
    }
  }
}
```

At that moment, your component is ready to use, it will allow you to display the HTML set inside the render function of the React component, and it will need a props `name` to display the welcome message.

## Step 2: Add it to your configuration

### From JSON

You can add the component to two different parts of the application.

##### Inside a Dashboard

Open a dashboard file `./config/dashboards/overview.json`
Create a new item inside the root `items` or anywhere inside a panel.

In the following sample, the `hello` component has been added inside a panel.  
You can set `props` directly inside the JSON (`name`: user in the following sample)
```json
{
  "name": "Overview",
  "width": 36,
  "height": 36,
  "description": "",
  "items": [
    {
      "type": "panel",
      "sizeX": 36,
      "sizeY": 36,
      "row": 0,
      "col": 0,
      "items": [
        {
          "sizeX": 36,
          "sizeY": 34,
          "row": 0,
          "col": 0,
          "type": "hello",
          "name": "user"
        }
      ]
    }
  ],
  "url": "/overview",
  "path": "",
  "tags": []
}
```

#### Inside a menu

Open a menu file `./config/menus/header.json`
Create a new item inside a container.

```json
{
  "id": "header",
  "class": "header",
  "containers": [
    {
      "id": "mycontainer",
      "items": [
        {
          "type": "hello",
          "name": "user"
        }
      ]
    }
    ...
  ]
}
```
The component should now appear in your menu.

### From Architect

> [!warning]
> First, you need to upload your app with the new code, rebuild it, and deploy it.  

Then, go in **Dashboard**, and select a dashboard to edit. Select a **+ button** (in menu or dashboard) then click on **custom**.

You will have to add it in JSON:

```json
{
  "type": "hello",
  "name": "user"
}
```

Click **Confirm**.  

Congratulations! You should now see the component inside your dashboard.

## Go further

Join our [community of users](/links/community).

Learn how to create [**custom charts**](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/custom-chart)!

Learn how to create [**custom dynamic parameters**](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/create)!