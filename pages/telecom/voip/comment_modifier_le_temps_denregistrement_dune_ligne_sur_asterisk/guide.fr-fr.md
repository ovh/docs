---
title: Comment modifier le temps d’enregistrement d’une ligne sur Asterisk
excerpt: Comment modifier le temps d’enregistrement (Register expire) sur Asterisk
legacy_guide_number: g1709
updated: 2018-03-26
---

**Dernière mise à jour le 26/03/2018**


Le temps d’enregistrement minimum conseillé est de 1800 secondes. Pour modifier ce paramètre suivez ces étapes :
Sur Asterisk le temps d'enregistrement de votre ligne va se modifier dans le fichier sip.conf, partie [general].
Ouvrez le fichier sip.conf avec votre éditeur de texte préféré :

```
vim /etc/asterisk/sip.conf
```


Dans notre exemple voici le contenu du fichier sip.conf : 


```
[general]
context=trunk-ovh
bindport=5060
bindaddr=0.0.0.0
srvlookup=yes
register => 0033972320690:PasswordSip@siptrunk.ovh.net

[691]
type=friend
username=691
secret=GhrTd85
callerid="691" <0033972320690>
host=dynamic
context=appel-sortant
language=fr
insecure=port
nat=yes
canreinvite=no
dtmfmode=auto
video=no
restrictcid=no
amaflags=default
mailbox=210@mypersonaldomain.ovh

[trunk-ovh]
type=peer
host=siptrunk.ovh.net
context=ovh-sip
language=fr
insecure=invite,port
username=0033972320690
secret=PasswordSip
canreinvite=no
dtmfmode=auto
video=no
restrictcid=no
amaflags=default
```



- Nous allons ajouter le paramètre defaultexpiry=. La valeur se définit en secondes, nous recommandons au minimum de mettre 1800 secondes. 

Le paramètre  est à ajouter dans la partie [general]. Voici notre fichier d'exemple après l'ajout : 


```
[general]
defaultexpiry=1800
context=trunk-ovh
bindport=5060
bindaddr=0.0.0.0
srvlookup=yes
register => 0033972320690:PasswordSip@siptrunk.ovh.net

[691]
type=friend
username=691
secret=GhrTd85
callerid="691" <0033972320690>
host=dynamic
context=appel-sortant
language=fr
insecure=port
nat=yes
canreinvite=no
dtmfmode=auto
video=no
restrictcid=no
amaflags=default
mailbox=210@mypersonaldomain.ovh

[trunk-ovh]
type=peer
host=siptrunk.ovh.net
context=ovh-sip
language=fr
insecure=invite,port
username=0033972320690
secret=PasswordSip
canreinvite=no
dtmfmode=auto
video=no
restrictcid=no
amaflags=default
```



- Nous allons maintenant appliquer la configuration et relancer l'enregistrement. Ouvrez la console Asterisk, pour cela tapez la commande rasterisk :

```
Asterisk 1.6.2.9-2+squeeze12, Copyright (C) 1999 - 2010 Digium, Inc. and others.
Created by Mark Spencer <markster@digium.com>
Asterisk comes with ABSOLUTELY NO WARRANTY; type 'core show warranty' for details.
This is free software, with components licensed under the GNU General Public
License version 2 and other licenses; you are welcome to redistribute it under
certain conditions. Type 'core show license' for details.
=========================================================================
Privilege escalation protection disabled!
See https://wiki.asterisk.org/wiki/x/1gKfAQ for more details.
Connected to Asterisk 1.6.2.9-2+squeeze12 currently running on vps131223 (pid = 2953)
vps123456*CLI>
```


- Entrez la commande reload
- Entrez la commande sip reload


Si le debug est activé sur votre console Asterisk vous verrez alors le REGISTER envoyé passer avec la nouvelle valeur : 


```
REGISTER sip:siptrunk.ovh.net SIP/2.0
Via: SIP/2.0/UDP 5.135.15x.x:5060;branch=z9hG4bK7864688a;rport
Max-Forwards: 70
From: <sip:0033972320690@siptrunk.ovh.net>;tag=as05457b52
To: <sip:0033972320690@siptrunk.ovh.net>
Call-ID: 5745fb8b60245b535d3ec5174798be05@5.135.15x.x
CSeq: 158 REGISTER
User-Agent: Asterisk PBX 1.6.2.9-2+squeeze12
Authorization: Digest username="0033972320690", realm="siptrunk.ovh.net", algorithm=MD5, uri="sip:siptrunk.ovh.net", nonce="2d22610b098b7d97382fc2c625594cb6", response="8b39a3f6170ddf93969ec68b14fdf060", opaque="2d1f1c1f24d205b"
Expires: 1800
Contact: <sip:s@5.135.15x.x>
Content-Length: 0
```



