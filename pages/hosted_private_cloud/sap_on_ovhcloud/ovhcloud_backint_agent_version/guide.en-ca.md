---
title: "OVHcloud Backint Agent versions"
excerpt: "This guide provides information about OVHcloud Backint Agent versions"
updated: 2024-03-18
---

## Version history

### Version 1.0.10

- Bug fix which could occur during a timeout with the Object Storage bucket and provoke an hanging backup on SAP HANA.

### Version 1.0.9

- Improving error messages resulting from a bad configuration in the `hdbbackint.cfg` file.

### Version 1.0.8

- Transfer performance improvement with Object Storage bucket.
- The `multipart_chunksize` and `multipart_threshold` parameters now handle values with units (KB, MB, GB and TB). If no unit has been set, the default unit is the byte.

### Version 1.0.7

- Minor improvements.

### Version 1.0.6

- Minor improvements.

### Version 1.0.5

- Minor improvements.

### Version 1.0.4

- Minor improvements.

### Version 1.0.3

- Minor improvements.

### Version 1.0.2

- Minor improvements.

### Version 1.0.1

- Minor improvements.

### Version 1.0.0

- Initial version of OVHcloud Backint Agent.
