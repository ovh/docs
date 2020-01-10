---
title: Namespaces
slug: namespaces
excerpt: Learn the concept behind serving engine namespaces
section: Concepts
order: 1
---
## Definition

**Namespaces** in a **serving engine project** are organization entities
for your models. It allows user to simply classify their models
depending on their needs by attaching them to an existing namespace.

Each namespace is linked to an **object storage container** of the same
**public cloud** project where user can upload their serialized machine
learning models. That **object storage container** is configurable.

Each namespace is also linked to a [docker
registry](https://docs.docker.com/registry/). The default [docker
registry](https://docs.docker.com/registry/) is an OVH provided one but
this can be configurated.

## Considerations

-   Number of created namespaces is restricted to `100 maximum` per
    **public cloud** user.
-   Each namespace is linked to one and only **object storage
    container** of the same **public cloud** project.
-   Each namespace is linked to one and only **docker registry**.
-   Each namespace can contain as many models as the user want.
-   Each models deployed inside a namespace will be reachable from the
    same base url such as
    `https://<id-of-namespace>.<cx>.gra.serving.ai.ovh.net` where
    `<id-of-namespace>` will be a generated unique identifier of the
    **namespace** and `<cx>` the identifier of your assigned cluster.

## Under the hood

**Namespaces** in a **serving engine** project correspond to
[namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
in a [kubernetes](https://kubernetes.io/) cluster.

## Going further

-   Your can refer to the open source [serving engine official
    documentation](https://serving-doc-mlg.ai.ovh.net/component/namespaces.html)
    for more information about namespaces.
-   You can check the [OVHcloud documention on how to create a
    namespace](../initialize-namespace).
