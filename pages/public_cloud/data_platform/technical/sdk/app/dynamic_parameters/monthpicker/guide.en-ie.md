---
title: "Monthpicker"
updated: 2025-02-15
---

## Objective

The monthpicker allows you to select a month to filter data from a chart

> [!primary]
> Please refer to [datepicker](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/datepicker) for a full reference.  The only difference is value of `component`.

## Configuration

```json
{
  "id": "monthpicker",
  "type": "filter",
  "component": "datepicker.month",
  "reference": "range_date",
  "startAt": "startOf('month')",
  "endAt": "endOf('day')",
  "minDate": "subtract(3, 'year').startOf('month')",
  "maxDate": "endOf('day')",
  "disable_reference_date": false,
  "request": {
    "data": {
      "fields": {
        "date": ["max"]
      }
    }
  },
  "diamonds": null
}
```

## Go further

Join our [community of users](/links/community).