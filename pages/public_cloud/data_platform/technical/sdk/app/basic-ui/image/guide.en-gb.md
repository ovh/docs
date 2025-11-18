---
title: "Image"
updated: 2025-02-15
---

## Objective

Allows you to add an image to your dashboard.

## Add Image

Select Basic UI -> Image.

![Exemple Panel](images/image-selection.png){.thumbnail}

## Configure Image

### Simple configuration

This configuration allows you to configure the image in a simple and intuitive way.

![Exemple Panel](images/image-config-example.png){.thumbnail}

![Exemple Panel](images/image-config-simple.png){.thumbnail}

### Advanced configuration

Below is the equivalent JSON configuration :

```json
{
  "type": "image",
  "style": {},
  "alt": "my image",
  "onClick": "console.info('click')",
  "width": "50",
  "height": "42"
}
```

## Result

![Exemple Panel](images/image.png){.thumbnail}

## Go further

Join our [community of users](/links/community).