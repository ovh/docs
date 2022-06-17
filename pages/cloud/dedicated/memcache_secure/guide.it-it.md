---
title: 'Mettere in sicurezza un server con Memcached'
slug: mettere-in-sicurezza-un-server-con-memcached
excerpt: 'Come proteggere il server con Memcached'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 24/08/2018**


## Obiettivo

Memcached è un sistema di caching distribuito che serve a migliorare velocità e performance delle applicazioni Web, mettendo in cache i dati richiesti. È un meccanismo molto semplice che agisce come memoria a breve termine e alleggerisce pertanto il carico di lavoro sui database.

Tuttavia il servizio Memcached non è protetto di default da un sistema di autenticazione e pertanto, se il server su cui viene installato è accessibile pubblicamente su Internet, chiunque può leggere o sovrascriverne i dati contenuti all’interno. Per questo motivo è fondamentale mettere in sicurezza il tuo database.


**Questa guida ti mostra come configurare Memcached per la protezione del server.**


> [!warning]
>
> OVHcloud mette a tua disposizione le macchine di cui sei responsabile. In effetti, non avendo accesso a queste macchine, non siamo noi gli amministratori. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/). Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>


## Prerequisiti


- Avere accesso al server su cui hai installato il servizio Memcached (in SSH per gli ambienti Linux o in desktop remoto per Windows)
- Identificare i servizi che utilizzano Memcached attraverso le seguenti domande:
    - questi servizi si trovano sullo stesso server? Vengono utilizzati in una rete privata?
    - per questi servizi è necessario che Memcached sia accessibile pubblicamente su Internet?


## Procedura

### Modifica la configurazione di Memcached per proteggere il tuo server.

Per mettere in sicurezza il server con Memcached è necessario seguire questi 2 step:

- limitare l’indirizzo di ascolto del servizio
- accettare soltanto le connessioni TCP


Precedentemente alla versione /1.5.6/, il servizio Memcached autorizzava di default l’utilizzo delle connessioni TCP e UDP. Tuttavia, la connessione UDP può essere sfruttata da terzi per generare attacchi DDoS.
Gli sviluppatori, infatti, hanno precisato che le connessioni UDP erano rilevanti nel momento in cui i software vennero creati, in quanto ai tempi si trattava di una tecnologia più rara.
In questa guida, supponiamo che tu faccia parte del 99% degli utenti che non utilizzano connessioni UDP.

Se il server su cui hai installato Memcached è utilizzato soltanto dalla macchina configurata in locale, puoi limitare l’indirizzo di ascolto a `127.0.0.1`.
Se invece anche altre macchine devono connettersi attraverso una rete privata, forza l’ascolto su un indirizzo IP privato (per esempio `10.0.0.1`, da adattare alla tua classe di rete).

**In ogni caso**, disattiva l’ascolto in UDP attraverso il comando `-U 0`.

Di seguito ti mostreremo nel dettaglio la configurazione di Memcached per i principali sistemi operativi.


#### Debian/Ubuntu

Di default, Debian e Ubuntu utilizzano `service memcached status/start/restart/force-reload` per gestire Memcached. Se adoperi uno di questi due sistemi operativi, esegui il login come amministratore e modifica il file `/etc/memcached.conf`. 

Puoi iniziare aggiungendo questa opzione per disattivare la connessione UDP che, come abbiamo spiegato precedentemente, è obsoleta.

```sh
# Disable UDP protocol
-U 0
```
Se il server su cui hai installato Memcached è utilizzato soltanto dalla macchina configurata in locale, puoi attivare questa opzione per impedirne l’esposizione su Internet:

```sh
-l 127.0.0.1
```

Dopo aver effettuato le modifiche, salva il file e utilizza uno di questi comandi per riavviare Memcached:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS - Fedora - Red Hat


Di default, CentOS, Fedora e Red Hat utilizzano `service memcached status/start/restart/force-reload` per gestire Memcached. Se adoperi uno di questi sistemi operativi, esegui il login come amministratore e modifica il file `/etc/sysconfig/memcached`.


Se il server su cui hai installato Memcached è utilizzato soltanto dalla macchina configurata in locale, ti consigliamo di aggiungere questa linea di `OPZIONI` che, disattivando il protocollo UDP ormai obsoleto, impedirà l’esposizione del server su Internet:

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Se il servizio Memcached è utilizzato anche per altri server, aggiungi questa semplice linea di `OPZIONI` per disattivare il protocollo UDP:

```sh
OPTIONS="-U 0"
```

Dopo aver effettuato le modifiche, salva il file e utilizza questo comando per riavviare Memcached:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Di default, Arch Linux utilizza `systemctl start/restart/stop memcached` per gestire Memcached. Se adoperi questo sistema operativo, esegui il login come amministratore e modifica il file `/usr/lib/systemd/system/memcached`.

Se il server su cui hai installato Memcached è utilizzato soltanto dalla macchina configurata in locale, ti consigliamo di aggiungere questa linea che, disattivando il protocollo UDP ormai obsoleto, impedirà l’esposizione del server su Internet:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Se il servizio Memcached è utilizzato anche per altri server, aggiungi questa semplice linea per disattivare il protocollo UDP:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Dopo aver effettuato le modifiche, salva il file e utilizza uno di questi comandi per riavviare Memcached:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
