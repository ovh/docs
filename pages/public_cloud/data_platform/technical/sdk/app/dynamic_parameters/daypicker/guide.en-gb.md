---
title: "Daypicker"
updated: 2025-02-15
---

## Objective

The Daypicker allows you to select a date to filter the data of a graph.

> [!primary]
> Please refer to [datepicker](/pages/public_cloud/data_platform/technical/sdk/app/dynamic_parameters/datepicker) for a full reference.
The only difference is value of `component`.

## Configuration

```json
{
  "id": "daypicker",
  "type": "filter",
  "component": "datepicker.day",
  "reference": "range_date",
  "startAt": "startOf('day')",
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