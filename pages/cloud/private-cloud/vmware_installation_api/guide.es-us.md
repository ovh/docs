---
title: Usar el conjunto de librerías vSphere SDK
slug: usar-vsphere-sdk
excerpt: Instrumentación y uso del conjunto de librerías vSphere SDK
section: Funcionalidades de VMware vSphere
order: 12
---

**Última actualización: 1/7/2020**

## Objetivo

Es posible automatizar las acciones en su infraestructura utilizando el conjunto de librerías vSphere SDK.

**En esta guía, se explica la instrumentación y el uso en varios idiomas.**

## Procedimiento

### Python

#### Instrumentación del entorno

##### S. O.

En esta guía, utilizaremos una máquina virtual instalada en Debian 9, instrumentada a partir de [las plantillas disponibles en su Private Cloud](../desplegar-plantilla-ovf/).

##### Requisitos

Se deben instalar los siguientes paquetes: 

```
apt-get install python git python-pip
```

##### vSphere SDK

Descargue el conjunto de librerías vSphere SDK con el siguiente comando: 

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```

Se creará el directorio «/vsphere-automation-sdk-python». Acceda a la carpeta correspondiente para ejecutar el comando de instalación: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

En este ejemplo, el comando es el siguiente: 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

El kit de desarrollo de <i>software</i> (SDK) ya está instalado. Ahora podemos ejecutar algunas secuencias de comandos.


#### Ejemplo de secuencia de comandos

##### Conexión

En este primer ejemplo, vamos a probar la conexión y desconexión a la utilidad vCenter. Esto también nos permitirá comprobar si todo se ha instalado correctamente. 

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

##### Ver un listado de las máquinas virtuales en un Private Cloud

En este ejemplo, vamos a obtener un listado de todas las máquinas virtuales en el Private Cloud:

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

#### Instrumentación del entorno

##### S. O.

En esta guía, utilizaremos una máquina virtual instalada en Debian 18.04, instrumentada a partir de [las plantillas disponibles en su Private Cloud](../desplegar-plantilla-ovf/).


##### Requisitos

Se deben instalar los siguientes paquetes: 

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl

```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

##### vSphere SDK

Descargue el conjunto de librerías vSphere SDK en este enlace: 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Descargue la versión compatible con su sistema operativo.

En este ejemplo, vamos a descargar «VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz»

Utilice el siguiente comando para descomprimir el archivo que acaba de descargar:

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Utilice el siguiente comando para iniciar el instalador: 

```
cd vmware-vsphere-cli-distrib
```

Y luego: 

```
./vmware-install.pl
```

Una vez leídas las condiciones, acéptelas para continuar, haciendo clic en `«Aceptar»`{.action}.

Al final de la instalación, se instalarán otros módulos. Haga clic en `«Aceptar»`{.action} para continuar con la instalación.

Para completar la instalación, debe seleccionar un directorio en el que se instalará el kit de desarrollo de <i>software </i>(SDK). El directorio por defecto es «/usr/bin».

#### Ejemplo de secuencia de comandos

##### Conexión

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

##### Ver un listado de las máquinas virtuales en un Private Cloud

En este ejemplo, vamos a obtener un listado de todas las máquinas virtuales en el Private Cloud:

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

##### Uso de muestras

En este ejemplo, vamos a utilizar una secuencia de comandos ya creada y que se encuentra en el directorio «vmware-vsphere-cli-distrib/apps/vm/».

Esta es la lista de secuencias de comandos disponibles en este directorio:

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```
Vamos a crear la instantánea «test» en la máquina virtual «Debian 1»

Para ello, escriba el siguiente comando:

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
