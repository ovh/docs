---
title: "Formatters"
updated: 2025-02-15
---

## Objective

Formatters are used to format the data of your application so they display correctly, with units and separators for example.

This configuration will go into the `./config/formatter.json` configuration file loaded from `./config/global.json`.

## Formatters list

### `separator`

**Description**: Allows you to choose the separators of thousands and decimals.

| Option     | Description              | Type     | Values |
| :--------- | :----------------------- | :------- | :----- |
| `thousand` | Thousand separator  | _string_ | _-_    |
| `decimal`  | Decimal separator | _string_ | _-_    |

**Example**:

```json
{
    "separator": {
        "thousand": ",",
        "decimal": "."
    }
}
```

### `measures`

**Description**: Allows you to format a number with a suffix.

| Option     | Description              | Type      | Values |
| :--------- | :----------------------- | :-------- | :----- |
| `unit ` | Unit suffixed to the value of the data | _string_ | - |
| `round` | The rounding of the data (ignored if `short` is not empty) | _number_ | - |
| `mult` | Multiplication of the data by the provided value | _number_ | - |
| `pows` | List of unit prefixes to applied at every threshold (1, 10<sup>3</sup>, 10<sup>6</sup>, 10<sup>9</sup>, ...) | _array_ | - |
| `short` | Number of digits displayed, will be used by "pows" to determine which prefix to apply | _number_ | - |

**Example**:

In the following example, **turnover** is the data to be formatted. The configuration can be read as follows:

> [!primary]
> The unit displayed will be €; rounded to 2 digits and multiplied by 1000.  
When the value reaches **10**, the value displayed will be **10 k€**.

```json
{
    "measures": {
        "turnover": {
            "unit": "€",
             "round": 2,
             "mult": 1000,
             "pows": [
               " ",
              " k",
              " M",
              " G"
            ],
            "short": 3
        }
    }
}
```

> [!warning]
> Measure format will be **automatically applied by all Charts** on field **turnover** included in a Query Builder request.  
You may also use it through code in your own components :

```jsx
import { FpMeasure } from 'forepaas/formatter'
function formatValue(field, value) {
    let measure = new FpMeasure(field);
    return measure.setValue(value).toString();
}
console.log(formatValue("turnover", 100));
```

### `dimensions`

**Description**: Allows you to indicate the nature of the data used for axes.

| Option     | Description              | Type      | Values |
| :--------- | :----------------------- | :-------- | :----- |
| `type `    | Data type | _null_; _string_ | - _null_<br />- _temporal_ |
| `subtype`  | Data subtype | _string_ | - _year_<br />- _month_<br />- _quarter_<br />- _semester_<br />- _date_<br />- _datetime_<br />- _month-year_<br />- _week-year_ |
| `format`   | Formatting to apply | _string_ | Multiples |

**Example:**

```json
{
    "dimensions": {
        "sample_year": {
            "type": "temporal",
            "subtype": "year",
            "format": "YYYY"
        },
        "sample_month": {
            "type": "temporal",
            "subtype": "month",
            "format": "MM"
        },
        "sample_date": {
            "type": "temporal",
            "subtype": "date",
            "format": "DD/MM/YYYY"
        }
    }
}
```

> [!warning]
> Dimension format will be automatically used by Chart components for `scale` rendering in general and X-axis specifically.

## Go further

Join our [community of users](/links/community).