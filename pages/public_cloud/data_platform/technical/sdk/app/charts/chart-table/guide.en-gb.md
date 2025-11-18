---
title: "Chart Table"
updated: 2025-02-15
---

## Setting up

* from App Manager, using [Extensions](/pages/public_cloud/data_platform/product/app-manager/extensions/00-extensions-index)
* using ForePaaS Package Manager on your local host: `fppm install chart-table`

## Table JSON configuration

Example:
```json
{
  "component": "table",
  "options": {
    "i18n": {
      "fr": {
        "sum": "",
        "visits": "",
        "evol-year-2": "(Y-2)"
      }
    },
    "searcheable": true,
    "theme": "standard",
    "headerHeight": 40,
    "rowHeight": 40,
    "padding": 5,
    "columns": [
      {
        "type": "scale",
        "scale": "date",
        "align": "right",
        "sortable": false
      },
      {
        "type": "data",
        "data": "visits",
        "computeMode": "sum",
        "evol": 0
      }
    ]
  },
  "request": {
    "data": {
      "fields": {
        "visit": [
          "sum"
        ]
      }
    },
    "scale": {
      "fields": [
        "city",
        "date"
      ],
      "axis": {
        "x": [
          "city"
        ],
        "y": [
          "date"
        ]
      }
    }
  }
}
```

## request

The `chart-table` component takes `axis` into account:

* `axis.y`: allows display in *rows*
* `axis.x`: creates as many *columns* as found values

## options

* `i18n`: using same format as global `i18n`, it allows to specify values for this table only.
* `searcheable`: `true` / `false` – Allows to activate or not a sear bar.
* `theme`: `standard` is default theme, it is possible to customize it (see below).
* `headerHeight`: allows to define in pixel the height of the header
* `rowHeight`: define rows height in pixels
* `padding`: define padding inside table cells
* `columns`: allows for precise configuration of columns. 
If not provided, it will be created from the request.

## options.columns

An array of JSON object specifying each column :

* `type`: `scale` / `data` - set the type of column to display
* `"type":"scale"`
    * `scale`: define name of the scale to use
* `"type":"data"`
    * `data`: name of the `data.fields` to be specified
    * `computeMode`: specify which computeMode (e.g. `select`, `sum`, `count`) present for that field.
    * `evol`: Specify which evolution to use
* `align`: `left` / `center` / `right`
* `sortable`: `true` / `false` 

## theme

It is possible to customize entirely theme used to display the Chart Table.

In `options`, specify for instance :
```json
"theme": "mytheme"
```

From this example, as a copy of the `standard` theme, it allows to entirely define a customized theme:

```css
.fp-table.fp-table-mytheme {
  height:100%;
  position: relative;
  .fp-row {
    .fp-cell {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
      position: relative;
      i {
        position: absolute;
        right:5px;
        top:50%;
        background:white;
        transform:translateY(-50%);
        z-index: 2;
      }
    }
  }

  .fp-row:nth-child(even) {
    background:rgba(0, 0, 0, .02);
    border-bottom:1px solid #e5e8eb;
  }

  .fp-head {
    position:absolute;
    top:0px;
    left:0;
    right:0;
    .fp-cell-is-sortable {
      cursor:pointer;
    }
    .fp-row {
      height:100%;
      border-bottom:2px solid #eee;
    }
  }

  .fp-body {
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    overflow: auto;
    .fp-cell-sort {
      background:rgba(0,0,0,0.03);
    }
  }
  .fp-content {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:white;
    border-radius:3px;
  }
}

.fp-table.fp-table-search.fp-table-mytheme {
  .fp-content {
    top:40px;
  }
  .fp-search {
    z-index:2;
    position: absolute;
    right:0;
    height:40px;
    top:0px;
    width:150px;
    border:#ddd solid;
    border-width: 1px 1px 1px 1px;
    background:white;
    i {
      position: absolute;
      z-index: 2;
      left:3px;
      top:3px;
      font-size:25px;
    }
    input {
      position: absolute;
      width:100%;
      left:0;
      right:0;
      border:0;
      outline:none;
      padding-left:30px;
      top:0;
      bottom:0;
    }
  }
}
```

## Go further

Join our [community of users](/links/community).