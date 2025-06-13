---
title: Utilização do SDK vSphere
excerpt: Utilização e implementação do SDK vSphere
updated: 2025-06-13
---

## Objetivo

É possível automatizar as ações na sua infraestrutura utilizando o SDK vSphere.

**Este manual explica a implementação e a utilização em diferentes linguagens.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Uma máquina virtual criada com um dos nossos [templates OVF](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).

> [!warning]
> Os exemplos de código abaixo foram criados utilizando Python 2.7. Tenha em conta que poderá ser necessário ajustar os seus comandos de forma correspondente se o seu ambiente estiver a utilizar Debian 12. Neste caso, recomendamos que transfira a última versão do Python 3.
>

## Instruções

### Python

#### Implementação do ambiente

Este exemplo utiliza uma VM instalada com Debian 9, implementada a partir de [templates disponíveis para a sua infraestrutura Managed Bare Metal](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).


É necessário instalar os seguintes packs: 

```bash
apt-get install python git python-pip
```

#### SDK vSphere

Descarregue o SDK vSphere com o seguinte comando: 

```bash
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```

Será criado o diretório `/vsphere-automation-sdk-python`. Mude para esta pasta para executar o comando de instalação:

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

Neste exemplo, será o seguinte comando: 

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

O SDK já está instalado e é possível realizar alguns scripts.

### Exemplo de script

#### Ligação

Neste primeiro exemplo, testamos a ligação e a desconexão ao vCenter. Isto permitirá também ver se a instalação foi bem-sucedida: 

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

#### Listar as VM presentes num Managed Bare Metal

Neste exemplo, iremos listar todas as VM presentes no Managed Bare Metal:

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

#### Implementação do ambiente

Este exemplo utiliza uma VM instalada com Ubuntu 18.04, implementada a partir de [templates disponíveis para a sua infraestrutura Managed Bare Metal](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).

É necessário instalar os seguintes packs: 

```bash
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl
```

```bash
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils
```

#### SDK vSphere

Descarregue o SDK vSphere disponível nesta ligação: 

<https://developer.broadcom.com/sdks/vsphere-management-sdk/latest>

Descarregue a versão compatível com o seu sistema operativo.

Neste exemplo, o ficheiro descarregado é: « VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz »

Descomprima o ficheiro que acabou de descarregar através do comando:

```bash
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Inicie o instalador utilizando o seguinte comando: 

```bash
cd vmware-vsphere-cli-distrib
```

A partir daí: 

```bash
./vmware-install.pl
```

Após ter lido as condições, aceite-as e continue clicando em `Enter`{.action}.

Após a instalação, outros módulos serão instalados. Clique em `Enter`{.action} para continuar a instalação.

Para terminar a instalação, deve escolher um diretório no qual o SDK será instalado. Por predefinição, o diretório é “/usr/bin”.

### Exemplo de script

#### Ligação

Neste primeiro exemplo, testamos a ligação e a desconexão ao vCenter. Isto permitirá também ver se a instalação foi bem-sucedida: 

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

#### Listar as VM presentes num Managed Bare Metal

Neste exemplo, iremos listar todas as VM presentes no Managed Bare Metal:

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

#### Utilização das amostras

Neste exemplo, iremos utilizar um script já criado e presente no diretório “vmware-vsphere-cli-distrib/apps/vm/”.

Esta é a lista dos scripts disponíveis neste diretório:

```bash
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```

Iremos criar uma snapshot “test” na VM “Debian1”.

Para o fazer, utilize o seguinte comando:

```bash
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).
