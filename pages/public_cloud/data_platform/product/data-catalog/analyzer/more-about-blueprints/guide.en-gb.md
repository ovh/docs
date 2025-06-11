---
title: "More about Blueprint Rules"
updated: 2025-02-15
---

## Objective

### Rule format

A rule applies to each line independently and allows several things.

If a condition is specified, the rule will apply only under certain conditions expressed in condition and condition_value(s).

If a transformation is filled, the transformation action on each line will be performed, otherwise, it is considered to be a filtering rule. (keep)

### Conditions List

If no *condition* is filled, the one set by default will be ALL, and allows any line

### Transformation List

If no *transformation* nor *condition* is filled, then we consider it to be a *default transformation*. 
Otherwise, if no action is filled and there is one *condition*, the action by default is *keep*. 
The action applies only to lines that respond to the rule defined by *condition*. 

### Dates Jokers

| **Directive** | **Meaning** | **Example** |
| --- | --- | --- |
| %w | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.  | 0, 1, ..., 6 |
| %d | Day of the month as a zero-padded decimal number. | 01, 02, ..., 31 |
| %m | Month as a zero-padded decimal number.   | 01, 02, ..., 12 |
| %y | Year without century as a zero-padded decimal number.  | 00, 01, ..., 99 |
| %Y | Year with century as a decimal number.  | 1970, 1988, 2001, 2013 |
| %H | Hour (24-hour clock) as a zero-padded decimal number.  | 00, 01, ..., 23 |
| %I | Hour (12-hour clock) as a zero-padded decimal number.  | 01, 02, ..., 12 |
| %p | Locale’s equivalent of either AM or PM. | AM, PM (en\_US);am, pm (de\_DE) |
| %M | Minute as a zero-padded decimal number. | 00, 01, ..., 59 |
| %S | Second as a zero-padded decimal number. | 00, 01, ..., 59 |
| %f | Microsecond as a decimal number, zero-padded on the left. | 000000, 000001, ..., 999999 |
| %z | UTC offset in the form +HHMMor -HHMM (empty string if the object is naive).  | (empty), +0000, -0400, +1030 |
| %Z | Time zone name (empty string if the object is naive). | (empty), UTC, EST, CST |
| %j | Day of the year as a zero-padded decimal number. | 001, 002, ..., 366 |
| %U | Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0. | 00, 01, ..., 53 |
| %W | Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0. | 00, 01, ..., 53 |
| %% | A literal &#39;%&#39; character. | % |

### Rules examples

```
[

    {
        "attribute_name": "date",
        "action": "date_replace",
        "action_values": ["%d/%m/%Y", "%Y-%m-%d"]
    }

]
```

```
[
    {
        "attribute_name":"year",
        "condition":"IN",
        "condition_values":["2015","2016"],
        "action":"add",
        "action_values":["year",1]
    }

]
```

```
[
    {
        "attribute_name":"year",
        "condition":"LT",
        "condition_value":"2015",
        "action":"default" ,
        "action_value:"2015"
    }
]
```

```
[
    {
          "action": "default",
          "action_value": "$today",
          "attribute_name": "date"
    }
]
```

```
[
    {
          "action": "sub",
          "action_values": [
            "temp_min",
            273.15
          ],
          "attribute_name": "temp_min"
     }
]
```

```
[
    {
          "action": "date_replace",
          "action_values": [
            "%a %b %d %H:%M:%S +0000 %Y",
            "%Y-%m-%d %H:%M:%S"
          ],
          "attribute_name": "statuses_created_at"
    }
]
```

## Go further

Join our [community of users](/links/community).