---
title: "Charts in Application SDK"
updated: 2025-02-15
---

## Objective

Charts in the context of the ForePaaS SDK gather the main aspects of rendering data in an application context:

* **Observe**: update when variables changes, in ForePaaS it is called *dynamic parameter*.
* **Request**: building a request and getting results.
* **Render**: render those results.

## Observe

The chart may be linked to `dynamic-parameters`.

In the example below, the *chart* will be updated in case of a different date range selected in a *datepicker* or a different *city* in a *selectbox*.
The `not-nullable-dynamic-parameter` indicates that it must specify a value for this parameter to render. 

```json
{
  "chart": {
    "dynamic-parameters": [
      "datepicker",
      "city"
    ],
    "not-nullable-dynamic-parameters": [
      ""datepicker"
    ],
    "component": "echarts"
  }
}
```

> [!warning]
> The `dynamic-parameters` list the `id` of previously created `dynamic-parameter`

There are no other settings to be done. 
This chart will *observe* all changes done in *dynamic parameters* and will automatically make new requests and render as needed.

## Request

The `request` uses the same format as the [Analytics Manager](/pages/public_cloud/data_platform/product/am/queries/visual).

```json
{
    "chart": {
        "component": "echarts",
        "request": {
            "data": {
                "fields": {
                    "quantite": [
                        "sum"
                    ]
                }
            },
            "scale": {
                "fields": [
                    "year",
                    "month",
                    "city"
                ],
                "axis": {
                    "x": [
                        "year",
                        "month"
                    ],
                    "y": [
                        "city"
                    ]
                }
            },
            "evol": {
                "scale": "year"
            }
        }
    }
}
```

## Render

Here, parameters of interest are `component` and `options`.
```json
"chart": {
    "component": "echarts",
    "options": {
        "title": {
            "text": "Nombre de visites mensuelles"
        }
    },
    "request": {},
    "dynamic-parameters": [],
    "not-nullable-dynamic-parameters": []
}
```

* `component`: the Charts module will look for a registered component, in this case *echarts*, and will pass over all informations needed to render itself. You can also
create your own [Custom Chart Component](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/00-custom-component-index).
* `options`: additionnal parameters, specific to each component, that are passed to this component to customize behaviour and rendering.

## Putting it together

```json
{
    "component": "echarts",
    "dynamic-parameters": [
        "datepicker"
    ],
    "options": {
        "title": {
            "text": "Monthly visitors"
        }
    },
    "request": {
        "data": {
            "fields": {
                "vists": [
                    "sum"
                ]
            }
        },
        "scale": {
            "fields": [
                "year",
                "month",
                "category"
            ],
            "axis": {
                "x": [
                    "year",
                    "month"
                ],
                "y": [
                    "category"
                ]
            }
        }
    }
}
```

## Go further

Join our [community of users](/links/community).