---
title: "Datepicker"
updated: 2025-02-15
---

## Objective

The Datepicker allows you to select a **date range** to filter the data in a chart.

## Configuration

Here is a configuration example followed by further explanations.

```json
{
  "id": "datepicker",
  "type": "filter",
  "component": "datepicker",
  "reference": "range_date",
  "format": "YYYY-MM-DD",
  "startAt": "subtract(1,'year').startOf('day')",
  "endAt": "endOf('day')",
  "minDate": "startOf('day')",
  "maxDate": "endOf('day')",
  "request": {
    "data": {
      "fields": {
        "date": ["max", "min"]
      }
    }
  },
  "ranges": [
    {
      "label": "Past week",
      "start": "subtract(1, 'week').startOf('week')",
      "end": "subtract(1, 'week').endOf('week')"
    },
    {
      "label": "Current week",
      "start": "startOf('week')",
      "end": "endOf('day')"
    }
  ]
}
```

> [!warning]
> Dates are defined with the [momentjs library](https://momentjs.com/) (see below for more information).

| field    | description |
| :------- | :---------- |
| `reference` | field to `filter` when linked to a chart (`range_` **must** be added the field name) |
| `format` | *(optionnal)* Display format inside the datepicker. If not given, will use the one in `./config/formatter.json`. |
| `startAt` |  *(optionnal)* Default start date of the datepicker |
| `endAt` |  *(optionnal)* Default end date for the datepicker |
| `minDate` | *(optionnal)* Minimum date selectable in the datepicker |
| `maxDate` | *(optionnal)* Maximum date selectable in the datepicker |
| `request` | *(optionnal)* dynamically get `min` and `max` dates from underlying data |
| `ranges` | Allows you to display selectable ranges directly via a shortcut bar. With parameters `start` and `end` to select the beginning and end of the range proposed, as well as `label` to be displayed. |

## Configuring minimum and maximum dates available

The following rules explains how to control the datepicker edges :

* in case a `request` is provided
    * `datepicker` will look for the first field in the query, looking for `min` and `max` compute mode
    * if only `max` is given, `min` takes same value as `max`
* if `request` is not set :
    * `max` is set to `now()`
    * `min` is set to now()
* `maxDate`, `startAt`, `endAt` are defined relative to `max`
* `minDate` is defined relative to `min`
* if `minDate` is not provided, it will be the beginning of previous year relative to `max`
* in all case, you may specifiy a precise date by `set({'year': 2020, 'month': 0, 'date': 1})`

> [!primary]
> *To wrap it up*, to define selectable dates :

* by default it goes :
    * from beginning of previous year
    * until today
* you may define them using `minDate` and `maxDate` properties relative from today
* you may define a `request` to select `min` and/or `max` date

> [!warning]
> When getting a `min` from `request`, `minDate` is relative to `min` and not anymore from `max`

## Adding it in another React component

Example:

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'datepicker',
  type: 'filter',
  component: 'datepicker',
  reference: 'range_date',
  startAt: 'subtract(1,"year")',
  endAt: 'endOf("day")',
  minDate: moment().subtract(3, 'year'),
  maxDate: moment().endOf('day'),
  format: 'YYYY-MM-DD',
  request: {
    data: {
      fields: {
        date: ['max']
      }
    }
  },
  ranges: [{
    start: moment().subtract(1, 'week').startOf('week'),
    end: moment().subtract(1, 'week').endOf('week'),
    label: 'Past week'
  }, {
    start: moment().startOf('week'),
    end: moment().endOf('day'),
    label: 'Current week'
  }]
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

## moment.js Library

The datepicker uses the library [momentjs](https://momentjs.com/).
This allows you to easily select a desired period.
In code you can directly supply an object in momentjs format for each parameter.
However, in JSON format, momentjs is used through a "string" format.

For instance:
```js
moment().subtract(1, 'week').endOf('week')
```
becomes
```json
"subtract(1, 'week').endOf('week')"
```

## Go further

Join our [community of users](/links/community).