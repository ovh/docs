---
title: Using the vSphere SDK
slug: using-sdk-vsphere
excerpt: Find out how to implement and use the vSphere SDK
section: VMware vSphere features
order: 10
---

**Last updated 13th July 2020**

## Objective

Actions within your infrastructure can be automated using the vSphere SDK.

**This guide explains the implementation and usage in various programming languages.**

## Instructions

### Python

#### Setting up the environment

##### OS

This example uses a VM installed with Debian 9, deployed from [templates available for your Hosted Private Cloud infrastructure](../deploy-ovh-template/).

##### Requirements

It is necessary to install these packages:

```
apt-get install python git python-pip
```

##### vSphere SDK

Download the vSphere SDK with the following command:

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```

The directory "/vsphere-automation-sdk-python" will be created. Switch to this folder to perform the installation command:

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

In this example, it is the following command:

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Once the SDK is installed, you can make use of scripts.


#### Script example


##### Connection

This example tests the connection and disconnection to vCenter. It will also help to verify if everything is properly installed.

```python
#!/usr/bin/env python
 
import time
import atexit
import ssl
from pyVim import connect
from pyVmomi import vim
 
 
def vconnect():
    s = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
    s.verify_mode = ssl.CERT_NONE
 
    service_instance = connect.SmartConnect(host="pcc-149-202-xxx-xxx.ovh.com",
        user="damien",
        pwd="MyPassword",
        sslContext=s)
 
    atexit.register(connect.Disconnect, service_instance)
 
print("Connecting....")
  
time.sleep(2)
 
print("Disconnecting..")
vconnect()
```

##### Listing the VMs of a Private Cloud infrastructure

This example lists all VMs of a Private Cloud infrastructure.

```python
#!/usr/bin/env python
 
import time
import atexit
import ssl
from pyVim import connect
from pyVmomi import vim
 
 
def vconnect():
    s = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
    s.verify_mode = ssl.CERT_NONE
 
    service_instance = connect.SmartConnect(host="pcc-149-202-xxx-xxx.ovh.com",
        user="damien",
        pwd="MyPassword",
        sslContext=s)
 
    atexit.register(connect.Disconnect, service_instance)
 
    print("Connecting....")
     
    time.sleep(2)
 
    content = service_instance.RetrieveContent()
    container = content.rootFolder
    viewType = [vim.VirtualMachine]
    recursive = True
    containerView = content.viewManager.CreateContainerView(container, viewType, recursive)
    children = containerView.view
 
    for child in children:
        summary = child.summary
        print(summary.config.name)
     
    time.sleep(2)
    print("Disconnecting...")
vconnect()
```

### Perl

#### Setting up the environment

##### OS

This example uses a VM installed with Ubuntu 18.04, deployed from [templates available for your Hosted Private Cloud infrastructure](../deploy-ovh-template/).


##### Requirements

It is necessary to install these packages:

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl

```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

##### vSphere SDK

Download the vSphere SDK using this link: 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Make sure to download the version that is compatible with your operating system.

In this example the file downloaded is: "VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz"

Extract the file you just downloaded using this command:

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Start the installer using the following commands:

```
cd vmware-vsphere-cli-distrib
```

```
./vmware-install.pl
```

After reading the terms, accept them and continue by pressing `Enter`{.action}.

After the installation, additional modules will be installed. Hit `Enter`{.action} to continue the installation.

In order to complete the installation, you will need to select a directory in which the SDK will install. By default, the directory is "/usr/bin".

#### Script example


##### Connection

This example tests the connection and disconnection to vCenter. It will also help to verify if everything is properly installed.

```perl
#!/usr/bin/perl
use strict;
 
use VMware::VIRuntime;
 
Opts::set_option('server', 'pcc-149-202-xxx-xxx.ovh.com');
Opts::set_option('username', 'damien');
Opts::set_option('password', 'MyPassword')
 
 
print "Connecting \n";
 
Util::connect();
  
Util::disconnect();
print "Disconnected \n";
```

##### Listing the VMs of a Private Cloud infrastructure

This example lists all VMs of a Private Cloud infrastructure.

```perl
#!/usr/bin/perl
use strict;
use Data::Dumper;
 
use VMware::VIRuntime;
 
Opts::set_option('server', 'pcc-149-202-xxx-xxx.ovh.com');
Opts::set_option('username', 'damien');
Opts::set_option('password', 'MyPassword');
 
 
print "Connecting \n";
 
Util::connect();
 
my $vm_views =
  Vim::find_entity_views(view_type => 'VirtualMachine',
                       properties => ['name'], );
 
foreach  my $view ( sort @$vm_views) {     
  print ' - '.$view->{'name'}, "\n";
}
 
Util::disconnect();
print "Disconnected \n";
```

##### Using samples

In this example, a script that is already created and present in the directory "vmware-vsphere-cli-distrib/apps/vm/" is called.

Here is a list of the scripts already available in this directory:

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```

To create a snapshot "test" of the VM "Debian1", use this command (replacing the example placeholders with your credentials):

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```


## Go further

Join our community of users on <https://community.ovh.com/en/>.
