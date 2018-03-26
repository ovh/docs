---
title: Frequently Asked Questions
slug: pca/faq
excerpt: Frequently Asked Questions
section: Public Cloud Archive
---


## Preamble
OVH Cloud Archive is based on Openstack Swift. Even though OVH leads the effort to ease the use of object storage, it forcibly inherits core concepts that may appear suprising to a new user. This guide will answer most frequent questioning users have.


## Questions
**Why do I have a container suffixed with "_segments" after connecting to gateways for scp/sftp/rsync transfers ?**

In order to transfer [large files](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}, Openstack Swift provides a mechanism using *segments* and *manifests*. Any archive larger than 256 MiB transferred through these gateways is automatically segmented in chunks of 256 MiB. Segments will be stored in this second container and referenced by a 0 byte file called manifest in the former container.

**Why do my file appears empty being 0 byte in the web interface although I've transferred it through scp/sftp/rsync ?**

As pointed out previously, in order to reference all the chunks of a segmented archive, a manifest is created. This manifest is sometimes a file of 0 byte, where useful information is actually stored in metadata. This is a bit like a symbolic link.

**Why do I get an error when I try to retrieve an archive with rsync/scp/sftp ?**

OVH Cloud Archive is a solution for unfrequently accessed data. It's optimized to offer a very low price at the expense of a retrieval delay. Prior to accessing an archive you need to unseal it.

**How do I unseal an archive ?**

Unsealing an archive consists of sending an unsealing request, and then polling the operation processing.

Unsealing can be done through :

- The [customer interface](../unlock/guide.en-gb.md){.ref}.
- The [Openstack API](../dev/guide.en-gb.md){.ref}.
- Gateways for SSH-based protocols: make an attemp to retrieve the archive.

This operation processing can be polled with :

- The [customer interface](../unlock/guide.en-gb.md){.ref}.
- The [Openstack API](../dev/guide.en-gb.md){.ref}.