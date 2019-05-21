---
title: 'Modificare l’hostname di un’istanza Public Cloud'
excerpt: 'Modifica l''hostname della tua istanza'
slug: modifica_lhostname_della_tua_istanza
legacy_guide_number: g1928
---

**Ultimo aggiornamento: 26/10/2018**

## Obiettivo

Nel momento in cui crei un’[istanza Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external}, così come ad ogni riavvio, puoi configurarla grazie al modulo Cloud-Init. Di conseguenza, per riconfigurare l’hostname (ad esempio, in caso di errore durante la creazione dell’istanza o per riconfigurare il server) è necessario disattivare il modulo Cloud-Init, incaricato di configurare l’hostname affinché quest’ultimo non venga ripristinato.

**Questa guida ti mostra come riconfigurare il modulo Cloud-Init per modificare l’hostname di un’istanza**.

> [!warning]
>
> OVH mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>


## Prerequisiti

- Aver creato un’[istanza Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external}
- [Essere connessi in SSH](https://docs.ovh.com/it/public-cloud/prima-connessione/){.external} (root) all’istanza


## Procedura

### Disattiva il modulo Cloud-Init

Come prima cosa, modifica il file di configurazione:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Aggiungi o modifica le due seguenti righe:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modifica l’hostname

Il primo step consiste nel modificare l’hostname:

```sh
sudo vim /etc/hostname
webserver
```

Successivamente, modifica il file **/etc/hosts**:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Riavvia l’istanza:

```bash
sudo reboot
```

Dopo il riavvio, l’hostname risulterà aggiornato con le tue modifiche:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.