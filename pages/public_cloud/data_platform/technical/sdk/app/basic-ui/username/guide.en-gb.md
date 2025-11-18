---
title: "Username"
updated: 2025-02-15
---

## Objective

Allows you to retrieve and display the name of the person logged on the dashboard. You will then be able to display a message such as: "Welcome Mr. Smith".

## Add Username

Select Basic UI -> Username.

![Exemple Panel](images/username-selection.png){.thumbnail}

## Configure Username

### Simple configuration

This configuration allows you to configure the component in a simple and intuitive way.

![Exemple Panel](images/username-config-example.png){.thumbnail}

![Exemple Panel](images/username-config-simple.png){.thumbnail}

### Advanced configuration

This configuration allows you to configure the component via a JSON document. Below is the JSON corresponding to the Switch created with the simplified configuration:

```json
{
  "type": "username",
  "style": {
    "color": "blue"
  },
  "format": "User is named :"
}

```

## Go further

Join our [community of users](/links/community).