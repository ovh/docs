---
title: Utilizzare SDK vSphere
slug: utilizzare-sdk-vsphere
excerpt: Come installare e utilizzare il Software Development Kit di vSphere
section: Funzionalità VMware vSphere
order: 12
---

**Ultimo aggiornamento: 01/07/2020**

## Obiettivo

Per automatizzare le azioni all’interno della propria infrastruttura è possibile utilizzare il Software Development Kit (SDK) offerto da vSphere.

**Questa guida ti mostra come installare e utilizzare questo strumento utilizzando diversi linguaggi.**

## Procedura

### Python

#### Configura l’ambiente

##### OS

In questa guida utilizzeremo una VM installata su Debian 9, creata a partire dai [template disponibili sul servizio Private Cloud](../installazione-template-ovh/).

##### Prerequisiti

Installa i seguenti pacchetti: 

```
apt-get install python git python-pip
```
##### SDK vSphere

Scarica SDK vSphere utilizzando il comando: 

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```
Viene creata la directory “/vsphere-automation-sdk-python”. Accedi a questa cartella per eseguire il comando di installazione: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

Nel nostro esempio, sarà il comando: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

A questo punto SDK è installato ed è possibile utilizzarlo negli script.


#### Esempio di script


##### Connessione

Questo primo esempio mostra come testare login e logout al vCenter e verificare che tutto sia correttamente installato: 

```python
#!/usr/bin/env python
 
import time
import atexit
import ssl
from pyVim import connect
from pyVmomi import vim
 
 
def vconnect():
    s = ssl.SSLContext(ssl.PROTOCOL_TLS)
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

##### Visualizza la lista delle VM presenti nel Private Cloud

In questo esempio, recupereremo la lista di tutte le macchine virtuali presenti sul Private Cloud:

```python
#!/usr/bin/env python
 
import time
import atexit
import ssl
from pyVim import connect
from pyVmomi import vim
 
 
def vconnect():
    s = ssl.SSLContext(ssl.PROTOCOL_TLS)
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

#### Configura l’ambiente

##### OS

In questo esempio utilizziamo una VM installata su Ubuntu 18.04, creata a partire dai [template disponibili sul servizio Private Cloud](../installazione-template-ovh/).


##### Prerequisiti

Installa i seguenti pacchetti: 

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl

```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

##### SDK vSphere

Accedi alla pagina disponibile al link: 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Scarica la versione di SDK vSphere compatibile con il sistema operativo utilizzato.

Nel nostro esempio, il file scaricato è "VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz".

Estrai l’archivio eseguendo il comando

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

e avvia l’installazione con il comando 

```
cd vmware-vsphere-cli-distrib
```

A questo punto esegui:  

```
./vmware-install.pl
```

Leggi e accetta le condizioni contrattuali e clicca su `Enter`{.action} per continuare.

Alla fine dell’operazione verranno installati ulteriori moduli. Clicca su `Enter`{.action} per continuare l’installazione.

Per completare la procedura, scegli la cartella su cui installare SDK (di default è la directory “ /usr/bin”).

#### Esempio di script


##### Connessione

Questo primo esempio mostra come testare login e logout al vCenter e verificare che tutto sia correttamente installato: 

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

##### Visualizza la lista delle VM presenti nel Private Cloud

In questo esempio, recupereremo la lista di tutte le macchine virtuali presenti sul Private Cloud:

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

##### Utilizza i samples

In questo esempio utilizzeremo uno script già creato, contenuto nella cartella “vmware-vsphere-cli-distrib/apps/vm/”.

Ecco la lista degli script già disponibili in questa directory:

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```
Creiamo lo Snapshot “test” della VM “Debian1” con il comando:

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
