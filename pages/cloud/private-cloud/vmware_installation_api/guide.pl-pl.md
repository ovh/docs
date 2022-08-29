---
title: Korzystanie z SDK vSphere
slug: korzystanie-z-sdk-vsphere
excerpt: Dowiedz się, jak uruchomić SDK vSphere i jak z niego korzystać
section: Funkcjonalności VMware vSphere
order: 12
---

**Ostatnia aktualizacja z dnia 01-07-2020**

## Wprowadzenie

Działania w infrastrukturze można zautomatyzować przy użyciu SDK vSphere.

**Z tego przewodnika dowiesz się, jak go uruchomić i jak z niego korzystać w różnych językach.**

## W praktyce

### Python

#### Uruchamianie środowiska

##### System operacyjny

Tutaj korzystamy z maszyny wirtualnej zainstalowanej w systemie Debian 9 i wdrożonej z [szablonów udostępnionych w Twojej usłudze Private Cloud](../instalacja-z-szablonow-ovh/).

##### Wymagania początkowe

Zainstalowanie następujących pakietów: 

```
apt-get install python git python-pip
```
##### SDK vSphere

Pobierz SDK vSphere za pomocą następującego polecenia: 

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```
Zostanie utworzony folder „/vsphere-automation-sdk-python”. Przejdź do tego folderu, aby wykonać polecenie instalacji: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

W tym przykładzie mówimy o następującym poleceniu: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Zestaw SDK został zainstalowany. Możemy teraz wykonać kilka skryptów.


#### Przykładowy skrypt


##### Logowanie

W pierwszym przykładzie testujemy logowanie do vCenter i wylogowywanie się z niego. Dzięki temu upewnimy się też, czy wszystko zostało prawidłowo zainstalowane: 

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

##### Wyświetlenie listy maszyn wirtualnych w usłudze Private Cloud

W tym przykładzie wyświetlimy listę wszystkich maszyn wirtualnych obecnych w usłudze Private Cloud:

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

#### Uruchamianie środowiska

##### System operacyjny

Tutaj korzystamy z maszyny wirtualnej zainstalowanej w systemie Ubuntu 18.04 i wdrożonej z [szablonów udostępnionych w Twojej usłudze Private Cloud](../instalacja-z-szablonow-ovh/).


##### Wymagania początkowe

Zainstalowanie następujących pakietów: 

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl

```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

##### SDK vSphere

Pobierz zestaw SDK vSphere dostępny pod tym linkiem: 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Pobierz wersję kompatybilną z Twoim systemem operacyjnym.

W tym przykładzie pobieramy „VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz”

Rozpakuj pobrany plik przy użyciu polecenia:

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Uruchom instalator przy użyciu następującego polecenia: 

```
cd vmware-vsphere-cli-distrib
```

Następnie: 

```
./vmware-install.pl
```

Po przeczytaniu warunków zaakceptuj je i kliknij `Enter`{.action}, aby kontynuować.

Następnie zostaną zainstalowane pozostałe moduły. Kliknij `Enter`{.action}, aby kontynuować instalację.

Aby zakończyć instalację, wybierz folder, w którym zostanie zainstalowany zestaw SDK. Domyślnie jest to folder „/usr/bin”.

#### Przykładowy skrypt


##### Logowanie

W pierwszym przykładzie testujemy logowanie do vCenter i wylogowywanie się z niego. Dzięki temu upewnimy się też, czy wszystko zostało prawidłowo zainstalowane: 

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

##### Wyświetlenie listy maszyn wirtualnych w usłudze Private Cloud

W tym przykładzie wyświetlimy listę wszystkich maszyn wirtualnych obecnych w usłudze Private Cloud:

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

##### Używanie próbek

W tym przykładzie użyjemy już utworzonego skryptu, znajdującego się w folderze „vmware-vsphere-cli-distrib/apps/vm/”.

Oto lista skryptów dostępnych już w tym folderze:

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```
Utworzymy snapshot „test” na maszynie wirtualnej „Debian1”

W tym celu wpisz następujące polecenie:

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
