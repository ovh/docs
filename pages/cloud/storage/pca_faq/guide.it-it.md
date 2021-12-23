---
title: Frequently Asked Questions
slug: pca/faq
excerpt: Le domande piu frequenti poste dai nostri utenti
section: Public Cloud Archive
order: 130
---


## Introduzione
OVH Public Cloud Archive è una soluzione basata su OpenStack Swift. Anche se OVH si impegna per semplificare l’utilizzo dell’object storage, eredita inevitabilmente concetti chiave che potrebbero sembrare complicati a un nuovo utente. Questa guida risponde alle domande più frequenti poste dagli utenti.


## Domande
**Perché compare un container con il suffisso "_segments" dopo essermi connesso ai gateway per effettuare trasferimenti scp/sftp/rsync?**

Per trasferire [file di grandi dimensioni](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}, OpenStack Swift si serve di un meccanismo che utilizza *segments* e *manifests*. Ogni archivio superiore ai 256 MiB trasferito tramite questi gateway viene segmentato automaticamente in frammenti da 256 MiB, che vengono archiviati in un secondo container e indicati nel primo da un file di 0 byte denominato “manifest” .

**Perché nell’interfaccia Web la dimensione del mio file è di 0 byte anche se ho effettuato il trasferimento tramite scp/sftp/rsync?**

Come spiegato precedentemente, per indicare i frammenti di un archivio segmentato viene creato un manifest. Talvolta questo file è da 0 byte ma in realtà le informazioni rilevanti sono salvate nei metadati. Si tratta di una sorta di link simbolico.

**Perché viene visualizzato un errore quando cerco di recuperare un archivio con rsync/scp/sftp?**

OVH Public Cloud Archive è una soluzione progettata per dati consultati raramente: è ottimizzato per offrire un costo contenuto, ma prevede un tempo variabile di attesa durante il processo di recupero. Per poter accedere ai tuoi dati, è prima necessario sbloccarli.

**Come si sblocca un archivio?**

Per sbloccare un archivio è necessario inviare una richiesta di unsealing e verificare l’elaborazione dell’operazione.

L’unsealing può essere effettuato tramite:

- [Spazio Cliente OVH](../../)
- [API OpenStack](../../)
- gateway basati su protocolli SSH

Lo stato di elaborazione dell’operazione può essere verificato tramite:

- [Spazio Cliente OVH](../../)
- [API OpenStack](../../)