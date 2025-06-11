---
title: "Create a second template based on a first template using *extends*"
updated: 2025-02-15
---

## Objective

ForePaaS provides a simple way to create templates that not only leverage most of the options from an initial one and but also receive modifications done to the latter automatically.  

Simply add the `extends` element to your template:

```json
"rechartsBarWithBiggerSize": {
    "extends": "rechartsBar",
    "options": {
        "barSize": 10,
        "barCategoryGap": 5
    }
}
```

Using `extends`, **the options of your second template will merge with the options of the first**, so when you use the second template, the options will be as follows:

```json
"options": {
    "barGap": 3,
    "barSize": 10,
    "barCategoryGap": 5
    "margin": {
         "left": 20,
         "right": 20,
         "top": 40,
         "bottom": 35
    }
}
```

This will also work if you only want to retrieve the options from `rechartsBar` for example, but for another component. Simply specify which component in the following example:

```json
"rechartsBarWithBiggerSize": {
    "component": "recharts.line",
    "extends": "rechartsBar",
    "options": {
        "barSize": 10,
        "barCategoryGap": 5
    }
}
```

The merged options above will apply to recharts.line as soon as you use the `rechartsBarWithBiggerSize` component.

> [!warning]
> There must be **at least one component** (keyword `component` or a component used as a template) defined if you use the `extends`. The example below will not work because neither `rechartsBar` nor` rechartsBarWithBiggerSize` have any component assigned:

```json
{
    "rechartsBar": {
        "options": {
            "barGap": 3,
            "barSize": 6,
            "margin": {
                 "left": 20,
                 "right": 20,
                 "top": 40,
                 "bottom": 35
            }
        }
    },
    "rechartsBarWithBiggerSize": {
        "extends": "rechartsBar",
        "options": {
            "barSize": 10,
            "barCategoryGap": 5
        }
    }
}
```

Instead, this is the correct configuration:

```json
{
    "rechartsBar": {
        "component": "recharts.bar", // define component that will be used here
        "options": {
            "barGap": 3,
            "barSize": 6,
            "margin": {
                 "left": 20,
                 "right": 20,
                 "top": 40,
                 "bottom": 35
            }
        }
    },
    "rechartsBarWithBiggerSize": {
        "extends": "rechartsBar",
        "options": {
            "barSize": 10,
            "barCategoryGap": 5
        }
    }
}
```

or

```json
{
    "recharts.bar": { // recharts.bar is a component so it will work
        "options": {
            "barGap": 3,
            "barSize": 6,
            "margin": {
                 "left": 20,
                 "right": 20,
                 "top": 40,
                 "bottom": 35
            }
        }
    },
    "rechartsBarWithBiggerSize": {
        "extends": "recharts.bar",
        "options": {
            "barSize": 10,
            "barCategoryGap": 5
        }
    }
}
```

> [!primary]
> **_Note_** : If you are using a chart family, you don't need to specify the ``extends``, by default the children gets the same options as the parent.

For example:

```json
{
    "recharts": {
        "options": {
            "barGap": 3,
            "barSize": 6,
            "margin": {
                "left": 20,
                "right": 20,
                "top": 40,
                "bottom": 35
            }
        }
    },
    "recharts.bar": {
      "options": {
        "barGap": 1
      }
    }
}
```

Here, `recharts.bar` gets the options from `recharts` and modifies the `barGap` property. The options for `recharts.bar` will then be:

```json
{
  "recharts.bar": {
        "options": {
            "barGap": 1, // On garde la définition de recharts.bar
            "barSize": 6,
            "margin": {
                "left": 20,
                "right": 20,
                "top": 40,
                "bottom": 35
            }
        }
    }
}
```

## Go further

Join our [community of users](/links/community).