---
title: "Link"
updated: 2025-02-15
---

## Objective

Allows you to add a link to another dashboard.

## Add Link

Select Basic UI -> Link.

![Exemple Panel](images/link-selection.png){.thumbnail}

## Configure Link

### Simplified configuration

This configuration allows you to configure the link in a simple and intuitive way.

![Exemple Panel](images/link-config-example.png){.thumbnail}

![Exemple Panel](images/link-config-simple.png){.thumbnail}

### Advanced configuration

Below is the JSON configuration for an **Image** as created above :

```json
{
  "type": "link",
  "style": {
    "color": "blue"
  },
  "text": "My link",
  "url": "/table",
  "icon": "fa fa-table"
}
```

## Result

![Exemple Panel](images/link.png){.thumbnail}

## Go further

Join our [community of users](/links/community).