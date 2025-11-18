---
title: "Chart HTML"
updated: 2025-02-15
---

## Objective

The Chart HTML allows you to format a query result into an HTML fragment. **This is typically used to display one value such as a KPI**.

## Chart HTML configuration example 

In this example :

* it declares the `html` component
* a `request` gets the `sum` of `rides` on the period defined by the `datepicker` dynamic parameter, and get the value for the previous year
* `options` describes how the component is rendered

```json
{
  "component": "html",
  "request": {
      "data": {
          "fields": {
              "rides": ["sum"]
          }
      },
      "evol": {
          "scale": "year"
      }
  },
  "dynamic-parameter": [
      "datepicker"
  ],
  "options": {
      "template-name": "block",  // 'block', 'evol' or 'own'
      "template": "<h2>{scope.value} rides</h2>", // a custom template
      "class": "",  // a class name to be used by template
      "icon": "",   // may be used by templates
      "text": ""    // may be used by templates
  }
}
```

## Default templates

The following templates are already defined and may be set as `template-name`.

### block

```html
<div class='block {scope.options.class}'>
    <i class="{scope.options.icon}"></i>
    <span class="value">{scope.value||0}</span>
    <span class="text">{scope.options.text}</span>
</div>
```

### evol
```html
<div class='block-evol {scope.options.class}'>
    <i class="{scope.options.icon}"></i>
    <span class="value">{scope.value||0}</span>
    <span class="{scope.evolClass}">{scope.evol}%</span>
    <span class="text">{scope.options.text}</span>
</div>
```

## Custom Template

It is possible to define a custom HTML fragment using `options.template`.
In that fragment, everything between `{}` will be interpreted as Javascript with a `scope` variable defined.

### The scope variable

The `scope` variable is an object with the following fields :

* `value`: the first field of the result, formatted with defined rules
* `evol`: whether `evol` is defined in the request, the evolution in percentage
* `evolClass`: whether `evol` is defined in the request, an helper for styling, either `evol positive` or `evol negative`
* `options`: the complete `chart.options` to be used in templates
* `query_params`: the complete query executed by the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) with expanded Dynamic parameters
* `response`: the complete response from the Analytics Manager with all results

## Go further

Join our [community of users](/links/community).