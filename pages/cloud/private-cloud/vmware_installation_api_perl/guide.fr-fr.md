---
title: Installation VMware API Perl
slug: installation-vmware-api-perl
legacy_guide_number: '1441890'
section: Fonctionnalités VMware vSphere
---


Il est possible de faire des appels SDK via l'API perl de VMware

Téléchargement : <http://www.vmware.com/support/pubs/sdk_pubs.html>

Installation
------------

Il suffit de move les pm dans le directory des lib de perl.

```sh
>     $ cp -r vmware-vsphere-cli-distrib/lib/VMware/share/VMware /usr/local/lib/perl/5.10.0/$ ls
>           /usr/local/lib/perl/5.10.0/VMware
>
>     $ ls /usr/local/lib/perl/5.10.0/VMware/ VICommon.pm VICredStore.pm VIExt.pm VILib.pm VIM25Runtime.pm VIM25Stub.pm
>           VIM2Runtime.pm VIM2Stub.pm VIMRuntime.pm VIRuntime.pm
```

Le SDK est installé.

Test de l'API
-------------

```sh
> \#!/usr/bin/perluse strict;use VMware::VIRuntime;\# Options d'authentification :Opts::set\_option('server', 'pcc-XXX-XXX-XXX-XXX.ovh.com');Opts::set\_option('username', 'admin');Opts::set\_option('password', 'XXXXXXXXX');\# Connexionprint "Connecting \\n";Util::connect();print "Connected \\n";\#\# \[ Liste des actions \]\#
>
> \# DéconnexionUtil::disconnect();print "Disconnected \\n";
```
