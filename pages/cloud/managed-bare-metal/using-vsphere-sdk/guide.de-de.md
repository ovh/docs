---
title: vSphere SDK verwenden
slug: vsphere-sdk-verwenden
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/vsphere-sdk-verwenden/'
excerpt: Erfahren Sie hier, wie Sie das vSphere SDK einrichten und verwenden
section: VMware vSphere Funktionen
order: 10
---

**Letzte Aktualisierung am 18.11.2020**

## Ziel

Aktionen in Ihrer Infrastruktur können mithilfe des vSphere SDK automatisiert werden.

**Diese Anleitung erklärt, wie Sie das vSphere SDK in verschiedenen Programmiersprachen einrichten und verwenden.**

## In der praktischen Anwendung

### Python

#### Umgebung einrichten

##### Betriebssystem

Dieses Beispiel verwendet eine auf Debian 9 installierte VM, die mithilfe der [für Ihre Managed Bare Metal bereitgestellten Templates](../ovhcloud-template-deployment/) deployt wurde.

##### Voraussetzungen

Folgende Pakete müssen installiert werden: 

```
apt-get install python git python-pip
```
##### vSphere SDK

Laden Sie das vSphere SDK mit folgendem Befehl herunter: 

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```
Das Verzeichnis “/vsphere-automation-sdk-python” wird erstellt. Gehen Sie in diesen Ordner, um den Installationsbefehl auszuführen: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

Im vorliegenden Beispiel handelt es sich um folgenden Befehl: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Sobald das SDK installiert ist, können Sie Skripte verwenden.


#### Skriptbeispiel


##### Verbindung

Dieses Beispiel testet Login und Logout von vCenter. Hierbei können Sie auch überprüfen, ob alles korrekt installiert ist:

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

##### VMs einer Managed Bare Metal auflisten

In diesem Beispiel werden alle VMs in der Managed Bare Metal aufgelistet:

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

#### Umgebung einrichten

##### Betriebssystem

Wir verwenden hier eine auf Ubuntu 18.04 installierte VM, die mithilfe der [für Ihre Managed Bare Metal bereitgestellten Templates](../ovhcloud-template-deployment/) deployt wurde.


##### Voraussetzungen

Folgende Pakete müssen installiert werden: 

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl
```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils
```

##### vSphere SDK

Laden Sie das vSphere SDK über folgenden Link herunter: 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Stellen Sie sicher, dass es sich um die mit Ihrem Betriebssystem kompatible Version handelt.

In diesem Beispiel ist die heruntergeladene Datei: “VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz”

Extrahieren Sie die soeben heruntergeladene Datei mit folgendem Befehl:

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Starten Sie den Installer mit den folgenden Befehlen: 

```
cd vmware-vsphere-cli-distrib
```

```
./vmware-install.pl
```

Wenn Sie die Bedingungen gelesen haben, akzeptieren Sie diese und drücken Sie auf `Enter`{.action}.

Nach der Installation werden weitere Module installiert. Drücken Sie auf `Enter`{.action}, um die Installation fortzusetzen.

Um die Installation abzuschließen, muss ein Verzeichnis ausgewählt werden, in dem das SDK installiert wird. Standardmäßig ist dieses Verzeichnis “/usr/bin”.

#### Skriptbeispiel

##### Verbindung

Dieses Beispiel testet Login und Logout von vCenter. Hierbei können Sie auch überprüfen, ob alles korrekt installiert ist:

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

##### VMs einer Managed Bare Metal auflisten

Dieses Beispiel listet alle VMs einer Managed Bare Metal Infrastruktur auf:

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

##### Samples verwenden

Im vorliegenden Beispiel wird ein bereits erstelltes Skript aus dem Verzeichnis “vmware-vsphere-cli-distrib/apps/vm/” aufgerufen.

Hier ist die Liste der Skripte, die bereits in diesem Verzeichnis verfügbar sind:

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```

Um einen Snapshot "test" der VM "Debian1" zu erstellen, verwenden Sie diesen Befehl (vorher die Platzhalter mit Ihren Anmeldeinformationen ersetzen):

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
