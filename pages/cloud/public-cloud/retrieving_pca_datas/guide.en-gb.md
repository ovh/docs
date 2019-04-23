---
title: 'Retrieving data from a BCP'
slug: retrieve-data-bcp
legacy_guide_number: 2067
section: Knowledge Base
---

## Retrieving your data

### With the OpenStack Swift client.
Install pip, the Python package manager on your system, then retrieve the Swift client from OpenStack:


```python
1. pip install python-swiftclient
```

You can then interact with your data, and list it, for example:


```bash
swift --os-storage-url ${storageEndpoint} --os-auth-url ${authEndpoint} --os-username ${login} --os-password ${password} --os-region-name ${region} --os-tenant-id ${tenantId} list ${container}
```

Or otherwise, you can retrieve a file/folder under the path \[path] (leave empty to retrieve all objects):


```bash
swift --os-storage-url ${storageEndpoint} --os-auth-url ${authEndpoint} --os-username ${login} --os-password ${password} --os-region-name ${region} --os-tenant-id ${tenantId} download ${container} [path]
```

For further information, you can refer to the [official documentation](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html){.external}.