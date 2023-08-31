---
title: Use hooks with dependencies
slug: hooks-and-dependencies
section: Hooks
---

**Last updated 31st August 2023**



## Objective  

If you use a specific package in a hook, you may want to manage dependencies for it.
For example, you may want to compile Sass files as part of your build process.
You can set dependencies along with hooks in your [app configuration](../app-reference.md#dependencies).

The following example assumes you have some Sass source files, such as a `index.scss` file.
You also need a script to compile the files, such as the following:

```json {location="package.json"}
{
  "scripts": {
    "build-css": "sass index.scss css/index.css"
  },
}
```

Set your app configuration to have Sass available globally and use it:

```yaml {configFile="app"}
# Ensure sass is available globally
dependencies:
    nodejs:
        sass: "^1.47.0"

hooks:
    # Run the script defined in package.json
    build: |
        npm run build-css
```
