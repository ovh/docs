---
title: Managed Kubernetes End-of-Sale, End-of-Service and End-of-Life policies
excerpt: ''
slug: eos-eol-policies
section: Technical resources
---

**Last updated October 13<sup>th</sup>, 2019.**

OVHcloud Managed Kubernetes Service exposes software-conformant Kubernetes, as certified by the CNCF. New stable versions are provided by the CNCF on a regular basis. Earlier versions proposed by OVHcloud can reach their End-Of-Sale/End-Of-Support (EOS) or  End-Of-Life (EOL), mainly because of the life cycle of the underlying support from the Kubernetes community.
This policy is provided to help customers to understand the life cycle of the OVHcloud Managed Kubernetes Service, to anticipate and prepare the transition to newest versions.

## General policy guidelines and definitions

### End-Of-Sales and End-Of-Support (EoS)

Kubernetes versions are expressed as `x.y.z`, where `x` is the major version, `y` is the minor version, and `z` is the patch version.
The Kubernetes project maintains release branches for the most recent three minor releases.

Applicable fixes, including security fixes, may be backported by the Kubernetes project and subsequently by OVHcloud to those three release branches, depending on severity and feasibility. Patch releases are cut from those branches at a regular cadence, or as needed. Minor releases occur approximately every 3 months, so each minor release branch is maintained by the Kubernetes project for approximately 9 months.

As a general rule, OVHcloud will support those minor versions and patch versions can be automatically applied using the “security policy” chosen by the customer in the OVHcloud control panel.

As a general rule, a new minor version will be offered by OVHCloud in the 3 months following it declared “stable” by the Kubernetes project.

As a general rule, OVHcloud will not support minor versions no longer supported by the Kubernetes project and will not assure support to managed services running on those versions until customer has upgraded to a supported minor Kubernetes version.

As a general rule, OVHcloud will keep offering minor-version upgrade to all unsupported versions to the other to ensure customer can on its own pace move to a OVHcloud supported minor version. Customer is solely responsible for making sure his configuration and related software are compliant with the new version he is upgrading to.

As soon as a minor version reaches End-of-Support by OVHcloud, it will simultaneously reach End-Of-Sales, meaning that OVHcloud will stop proposing the minor version upon installation or reset of a Managed Kubernetes Service.

At any time, customer can find the currently supported versions on the [dedicated page](../exposed-apis-software-versions-reserved-resources/)

Any change to these general rules and/or to the release cycle of the Kubernetes project would be advised to affected customers by email (if requiring action on their side) and update to this page.

### End-of-Life (EoL)

As a general rule, OVH will not force minor version upgrade for the last 2 versions that reached End-of-Support. Keep in mind that though we will keep them running, they will no longer be covered by OVHcloud support and SLA/SLOs.
In the unlikely case of an one of those versions exposing a security breach putting in danger its own infrastructure, OVHcloud may force the minor update of the service or deactivate the service if the forced minor update did not go through.

As for the 3rd oldest version that reached the end-of-support milestone, OVH will force the minor update of the service or deactivate the service if the forced minor update did not go through, after a 30-day email prior notice. Customer is solely responsible for making sure his configuration and related software are compliant with the new version he is upgrading to.
