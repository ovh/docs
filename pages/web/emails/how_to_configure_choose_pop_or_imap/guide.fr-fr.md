---
title: Choisir entre POP et IMAP
slug: configuration-pop-et-imap
section: Configuration client de messagerie
---


## Généralités

### Informations
Lorsque vous possédez une adresse e-mail, chez OVH ou ailleurs, il existe de multiples façons de consulter vos e-mails.

L'une de ces façon est de configurer l'adresse e-mail sur un client de messagerie (Comme Outlook, Thunderbird) ou un webmail.

Lors d'une configuration, vous aurez globalement un choix à faire. Ce choix se porte sur le protocole de communication serveur : POP ou IMAP ?

- Sinon vous pouvez utiliser notre webmail [Roundcube](https://mail.ovh.net/){.external} préconfiguré. Il faut juste rentrer votre adresse e-mail et son mot de passe.


### Avance
Il existe plusieurs protocoles pour les e-mails. Le plus souvent vous entendrez parler de SMTP, POP, et IMAP.

Le protocole SMTP concerne uniquement l'envoi des e-mails.

POP et IMAP sont deux protocoles de réception, qui fonctionnent différemment, ce qui rend important le choix de quel protocole utiliser.


## Le protocole IMAP

### I M A P &#58; Internet Message Access Protocol
Ce protocole permet de consulter les fichiers distants (e-mails) à distance sur un serveur.

En résumé cela **ne place pas les e-mails directement sur votre disque dur**.

Ainsi, par définition, lors d'une coupure de connexion internet, **vous ne pourrez plus consulter vos e-mails**.

- Notez que la plupart des clients de messagerie (comme Outlook) gardent une copie des emails, même en IMAP, afin de contourner ce désagrément.

De plus, la limite de stockage des e-mails correspond à la capacité de stockage de votre fournisseur. Chez OVH la limite est de 5Go pour comptes MX Plan, 10 Go pour E-mail Pro, et 50 ou 300 Go pour Exchange.

À savoir que si vous perdez les e-mails stockés sur votre ordinateur (panne, perte du disque dur ...), il sera toujours possible de consulter vos e-mails.

Cela est donc plus sécurisé, et la maintenance et l'accès à vos e-mails sont assurés directement par votre fournisseur.

Il est cependant fortement recommandé d'effectuer des sauvegardes de votre côté.

Dans le doute, il est donc plus prudent de choisir une configuration IMAP.


## Le protocole POP

### P O P &#58; Post Office Protocol
Ce protocole permet de télécharger les fichiers distants (e-mails) en local sur l'espace de stockage de votre client.

En résumé cela **place les e-mails directement sur votre disque dur**.

Ainsi, lors d'une coupure de connexion internet, **vous pourrez toujours consulter vos e-mails** déjà téléchargés.

- Il va de soi que vous ne pourrez recevoir les nouveaux qu'avec une connexion.

De plus, la limite de stockage des e-mails correspond à l'espace de stockage libre sur votre disque dur.

À savoir que si vous perdez les e-mails stockés sur votre ordinateur (panne, perte du disque dur ...), il ne sera pas possible de les récupérer. Il est donc conseillé de faire régulièrement des sauvegardes sur un autre support physique ou Cloud.

- Notez que la plupart des clients de messagerie proposent une option pour conserver le stockage des e-mails sur le serveur, même en POP, afin de contourner ce désagrément.