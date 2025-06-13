---
title: Usar el conjunto de librerías vSphere SDK
excerpt: Cómo implementar y utilizar vSphere SDK
updated: 2025-06-13
---

## Objetivo

Las acciones en su infraestructura pueden automatizarse gracias al SDK vSphere.

**Esta guía explica la implementación y el uso en diferentes lenguajes de programación.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Una máquina virtual creada con uno de nuestros [templates OVF](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).
- Una infraestructura [Hosted Private Cloud](/links/hosted-private-cloud/vmware).

> [!warning]
> Los ejemplos de código siguientes se crearon utilizando Python 2.7. Tenga en cuenta que, si su entorno utiliza Debian 12, es posible que tenga que ajustar sus pedidos en consecuencia. En ese caso, le recomendamos que descargue la última versión de Python 3.
>

## Procedimiento

### Python

#### Instrumentación del entorno

En esta guía, utilizaremos una máquina virtual instalada en Debian 9, instrumentada a partir de [las plantillas disponibles en su Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).

Se deben instalar los siguientes paquetes: 

```bash
apt-get install python git python-pip
```

#### vSphere SDK

Descargue el conjunto de librerías vSphere SDK con el siguiente comando: 

```bash
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```

Se creará el directorio `/vsphere-automation-sdk-python`. Acceda a la carpeta correspondiente para ejecutar el comando de instalación: 

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

En este ejemplo, el comando es el siguiente: 

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Una vez instalado el SDK, puede utilizar scripts.

### Ejemplo de script

#### Conexión

En este primer ejemplo, probamos la conexión y la desconexión al vCenter. También podrá comprobar si todo se ha instalado correctamente:

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

#### Ver un listado de las máquinas virtuales en un Managed vSphere

En este ejemplo, vamos a obtener un listado de todas las máquinas virtuales en el Managed vSphere:

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

#### Instrumentación del entorno

En este ejemplo se utiliza una máquina virtual instalada en Debian 18.04, instrumentada a partir de [las plantillas disponibles en su Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).

En primer lugar, deberá instalar los siguientes paquetes:

```bash
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl
```

```bash
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils
```

#### vSphere SDK

Descargue el conjunto de librerías vSphere SDK en este enlace: 

<https://developer.broadcom.com/sdks/vsphere-management-sdk/latest>

Descargue la versión compatible con su sistema operativo.

En este ejemplo, vamos a descargar «VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz»

Utilice el siguiente comando para descomprimir el archivo que acaba de descargar:

```bash
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Utilice el siguiente comando para iniciar el instalador: 

```bash
cd vmware-vsphere-cli-distrib
```

Y luego: 

```bash
./vmware-install.pl
```

Una vez leídas las condiciones, acéptelas para continuar, haciendo clic en `Enter`{.action}.

Al final de la instalación, se instalarán otros módulos. Haga clic en `Enter`{.action} para continuar con la instalación.

Para completar la instalación, debe seleccionar un directorio en el que se instalará el kit de desarrollo de <i>software </i>(SDK). El directorio por defecto es «/usr/bin».

### Ejemplo de script

#### Conexión

En este primer ejemplo, vamos a probar la conexión y desconexión a la utilidad vCenter. Esto también nos permitirá comprobar si todo se ha instalado correctamente. 

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

#### Ver un listado de las máquinas virtuales en un Managed vSphere

En este ejemplo, vamos a obtener un listado de todas las máquinas virtuales en el Managed vSphere:

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

#### Uso de muestras

En este ejemplo, vamos a utilizar una secuencia de comandos ya creada y que se encuentra en el directorio `vmware-vsphere-cli-distrib/apps/vm/`.

Esta es la lista de secuencias de comandos disponibles en este directorio:

```bash
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```

Vamos a crear la instantánea «test» en la máquina virtual «Debian 1»

Para ello, escriba el siguiente comando:

```bash
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).