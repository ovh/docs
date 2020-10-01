---
title: Tokens
slug: tokens
excerpt: Learn the concept behind serving engine tokens
section: Concepts
order: 2
---
## Definition

**Tokens** in a **ML Serving project** refer to encoded [JWT
tokens](https://jwt.io/) containing access rights information for
querying or managing models in a namespace.

**Tokens** object contains 2 attributes :

-   The list of authorized roles
-   The target resource

### Roles

There are 2 available roles :

-   `model-management` : Tokens containing this role are allowed to
    manage models (deploy, update, delete) targeted by the applying
    resource.
-   `model-evaluation` : Tokens containing this role are allowed to
    evaluate models (i.e call the model http endpoint) targeted by the
    authorized resource.

### Applying resource

The resource attribute describes the resource (i.e. model identifiers)
on which **roles** are applied (see the example below). You can provide
an exact identifier that will match the resource id or a fuzzy string
that ends with \* to match multiple resources starting with the same
prefix or a \* to match all resources

#### Example

A token containing a role of `model-evaluation` with an applying
resource of `iris*` will be allowed to request evaluation of each model
whose identifier starts with `iris` inside its namespace.

## Considerations

-   Each Token is created inside a [namespace](../namespaces) and is
    only relevant for that [namespace](../namespaces).
-   Tokens have no expiration date but can be renewed. For security
    purpose it is important for users to understand that tokens should
    be regularly renewed to avoid compromised ones.

## Going further

-   You can check the [OVHcloud documention on how to manage
    models](../manage-tokens).
