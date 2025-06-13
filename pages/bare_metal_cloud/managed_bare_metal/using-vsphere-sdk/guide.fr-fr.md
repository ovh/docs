---
title: Utilisation SDK vSphere
excerpt: Découvrez comment implémenter et utiliser le SDK vSphere
updated: 2025-06-13
---

## Objectif

Les actions au sein de votre infrastructure peuvent être automatisées grâce au SDK vSphere.

**Ce guide explique la mise en œuvre et l'utilisation dans différents langages de programmation.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Une machine virtuelle créée avec l’un de nos [templates OVF](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).


> [!warning]
> Les exemples de code ci-dessous ont été créés en utilisant Python 2.7. Veuillez noter que vous devrez peut-être ajuster vos commandes en conséquence si votre environnement utilise Debian 12. Dans ce cas, nous vous recommandons de télécharger la dernière version de Python 3.
>

## En pratique

### Python

#### Mise en place de l'environnement

Cet exemple utilise une VM installée avec Debian 9, déployée à partir de [templates disponibles pour votre infrastructure Managed Bare Metal](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).

Pour commencer, il est nécessaire d'installer ces packages :

```bash
apt-get install python git python-pip
```
#### SDK vSphere

Téléchargez le SDK vSphere avec la commande suivante : 

```bash
git clone https://github.com/vmware/vsphere-automation-sdk-python.git
```

Le répertoire `/vsphere-automation-sdk-python` sera créé. Basculez vers ce dossier pour exécuter la commande d'installation :

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///<absolute_path_to_sdk>/lib
```

Dans cet exemple, il s'agit de la commande suivante : 

```bash
pip install --upgrade --force-reinstall -r requirements.txt --extra-index-url file:///root/vsphere-automation-sdk-python/lib
```

Une fois le SDK installé, vous pouvez utiliser des scripts.

### Exemple de script

#### Connexion

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

#### Lister les VM présentes dans un Managed Bare Metal

Dans cet exemple, nous allons lister toutes les VM présentes sur le Managed Bare Metal :

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

Cet exemple utilise une VM installée avec Ubuntu 18.04, déployée à partir de [templates disponibles pour votre infrastructure Managed Bare Metal](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library).


Pour commencer, il est nécessaire d'installer ces packages :

```bash
apt-get install lib32z1 lib32ncurses5 uuid uuid-dev libssl-dev perl-doc libxml-libxml-perl libcrypt-ssleay-perl libsoap-lite-perl libdata-compare-perl libmodule-build-perl libuuid-perl libsocket6-perl libnet-inet6glue-perl libarchive-zip-perl
```

```bash
cpan install Crypt::OpenSSL::RSA UUID::Random Exception::Class Crypt::X509 List::MoreUtils

```

#### SDK vSphere

Téléchargez le SDK vSphere disponible sur ce lien : 

<https://developer.broadcom.com/sdks/vsphere-management-sdk/latest>

Téléchargez la version compatible avec votre système d'exploitation.

Dans cet exemple, le fichier téléchargé est : « VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz »

Décompressez le ficher que vous venez de télécharger en utilisant la commande :

```bash
tar –zxvf VMware-vSphere-Perl-SDK-6.7.0-8156551.x86_64.tar.gz
```

Lancez le programme d'installation à l'aide des commandes suivantes : 

```bash
cd vmware-vsphere-cli-distrib
```

Puis : 

```bash
./vmware-install.pl
```

Après avoir lu les conditions, acceptez-les et continuez en cliquant sur `Entrée`{.action}.

A la suite de l'installation, d'autres modules vont être installés, cliquez sur `Entrée`{.action} pour continuer l'installation.

Afin de terminer l'installation, vous devrez sélectionner un répertoire dans lequel le SDK va s'installer. Par défaut, le répertoire est « /usr/bin »

### Exemple de script

#### Connexion

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

#### Lister les VM présentes dans un Managed Bare Metal

Dans cet exemple, nous allons lister toutes les VM présentes sur le Managed Bare Metal :

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

#### Utilisation des samples

Dans cet exemple, nous allons utiliser un script déjà crée et présent dans le répertoire `vmware-vsphere-cli-distrib/apps/vm/`.

Voici la liste des scripts déjà disponibles dans ce répertoire :

```bash
ls vmware-vsphere-cli-distrib/apps/vm/
guestinfo.pl  sharesmanager.pl  snapshotmanager.pl  vdiskcreate.pl  vmclone.pl  vmcontrol.pl  vmcreate.pl  vminfo.pl  vmmigrate.pl  vmreconfig.pl  vmregister.pl  vmsnapshot.pl  vmtemplate.pl
```
Nous allons créer un snapshot « test » sur la VM « Debian1 »

Pour cela, tapez la commande suivante :

```bash
perl snapshotmanager.pl --server pcc-149-202-xxx-xxx.ovh.com --username damien --password MyPassword --operation create --vmname Debian1 --snapshotname test
```

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).