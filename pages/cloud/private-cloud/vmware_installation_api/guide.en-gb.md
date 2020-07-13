---
title: Using SDK vSphere
slug: utilisation-sdk-vsphere
excerpt: Utilisation et mise en place du SDK vSphere
section: Fonctionnalités VMware vSphere
order: 10
---

**Dernière mise à jour le 1er juillet 2020**

## Objectif

Il est possible d'automatiser les actions au sein de votre infrastructure en utilisant le SDK vSphere.

**Ce guide explique la mise en place et l'utilisation dans différents langages.**

## En pratique

### Python

#### Mise en place de l'environnement

##### OS

Ici nous utilisons une VM installée sur Debian 9, déployée depuis [les templates mis à disposition sur votre Private Cloud](../private-cloud/deploiement-template-ovh/).

##### Prérequis

Il est nécessaire d'installer les paquets suivants : 

```
apt-get install python git python-pip
```
##### SDK vSphere

Téléchargez le SDK vSphere avec la commande suivante : 

```
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```
Le répertoire « /vsphere-automation-sdk-python » sera créé, rendez vous dans ce dossier pour effectuer la commande d'installation : 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

Dans cet exemple, il s'agira de la commande suivante : 

```
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Le SDK est à présent installé, nous pouvons maintenant réaliser quelques scripts.


#### Exemple de script


##### Connexion

Dans ce premier exemple, nous testons la connexion et la déconnexion au vCenter. Cela permettra également de voir si tout s'est bien installé : 

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

##### Lister les VM présentes dans un Private Cloud

Dans cet exemple, nous allons lister toutes les VM présentes sur le Private Cloud :

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

#### Mise en place de l'environnement

##### OS

Ici nous utilisons une VM installée sur Ubuntu 18.04, déployée depuis [les templates mis à disposition sur votre Private Cloud](../deploiement-template-ovh/).


##### Prérequis

Il est nécessaire d'installer les paquets suivants : 

```
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl

```

```
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

##### SDK vSphere

Téléchargez le SDK vSphere disponible sur ce lien : 

[https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67](https://my.vmware.com/group/vmware/get-download?downloadGroup=VS-PERL-SDK67)

Téléchargez la version compatible avec votre système d'exploitation.

Dans cet exemple, nous téléchargerons "VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz"

Décompressez le ficher que vous venez de télécharger en utilisant la commande :

```
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Et démarrez l'installeur en utilisant la commande suivante : 

```
cd vmware-vsphere-cli-distrib
```

Puis : 

```
./vmware-install.pl
```

Après avoir lu les conditions, acceptez-les et continuez en cliquant sur `Entrée`{.action}.

A la suite de l'installation, d'autres modules vont être installés, cliquez sur `Entrée`{.action} pour continuer l'installation.

Afin de terminer l'installation, vous devez choisir un répertoire dans lequel le SDK s'installera. Par défaut, le répertoire est « /usr/bin ».

#### Exemple de script


##### Connexion

Dans ce premier exemple, nous testons la connexion et la déconnexion au vCenter. Cela permettra également de voir si tout s'est bien installé : 

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

##### Lister les VM présentes dans un Private Cloud

Dans cet exemple, nous allons lister toutes les VM présentes sur le Private Cloud :

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

##### Utilisation des samples

Dans cet exemple, nous allons utiliser un script déjà crée et présent dans le répertoire « vmware-vsphere-cli-distrib/apps/vm/ ».

Voici la liste des scipts déjà disponibles dans ce répertoire :

```
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```
Nous allons créer un snapshot « test » sur la VM « Debian1 »

Pour cela, tapez la commande suivante :

```
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
