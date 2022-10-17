---
title: Domande frequenti sul NAS
slug: nas/faq
excerpt: Hai una domanda sul NAS? Ecco le risposte alle domande più frequenti
section: NAS
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 09/09/2021**

## Caratteristiche del prodotto

### È possibile gestire il NAS-HA tramite un’interfaccia di amministrazione?

Sì, questo spazio è accessibile dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Bare Metal Cloud`{.action}, poi `NAS e CDN`{.action}.

### È possibile aumentare la capacità totale del NAS?

No, una volta effettuato l’ordine non è possibile aumentare la capacità del NAS-HA. Per disporre di uno spazio di storage maggiore, è necessario migrare i dati su un secondo NAS con capacità superiore.

### Quali sono le capacità di storage disponibili?

Offriamo queste capacità di storage:

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

La capacità di storage offerta è la capacità utilizzabile.

### Le risorse del tuo NAS-HA sono dedicate?

I dischi del tuo NAS-HA ti sono dedicati. Le altre risorse della macchina sono condivise (RAM, CPU, banda passante).

**Caso particolare:** se sottoscrivi l'offerta da 36 TB, tutte le risorse del server host sono dedicate (RAM, CPU, banda passante).

### Qual è la durata di sottoscrizione di un NAS-HA?

I periodi proposti sono di 1, 3, 6 e 12 mesi. Se non ne viene richiesta la rescissione prima della data di scadenza, il contratto si rinnova automaticamente. Il servizio può essere disattivato in qualsiasi momento tramite lo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

## Utilizzo del prodotto

### È possibile connettere il NAS-HA a più server contemporaneamente?

Sì, il NAS può comunicare simultaneamente con diversi servizi OVHcloud.

### È possibile installare un sistema operativo su un NAS-HA?

No, sui servizi NAS-HA non è possibile installare un OS.

### Quali sono i protocolli compatibili con il servizio NAS-HA?

Il NAS-HA può essere montato su un server Windows o Linux tramite i protocolli CIFS (Samba) o NFS.

### È possibile effettuare partizioni dello spazio assegnato?

Sì, è necessario creare una o più partizioni in base al tuo utilizzo. La creazione delle partizioni è illimitata.

## Compatibilità del prodotto

### Il NAS-HA è compatibile con server esterni a OVHcloud?

No, il NAS-HA è accessibile solo dalla rete OVHcloud.

### Con quali servizi è possibile utilizzare il NAS-HA?

Il servizio può essere utilizzato con tutte le soluzioni OVHcloud che dispongono di una distribuzione: server dedicati (OVHcloud, So you Start, Kimsufi), Hosted Private Cloud, Public Cloud e VPS.

### Come gestire gli accessi al NAS-HA?

La lista del controllo degli accessi (ACL) è configurabile dallo Spazio Cliente OVHcloud. È sufficiente inserire l’indirizzo IP del servizio che vuoi autorizzare ad accedere al NAS-HA.

### Il NAS-HA è compatibile con la tecnologia vRack?

Al momento il NAS-HA non può essere integrato nella rete privata vRack. Tuttavia l’utilizzo di NAS-HA e vRack è possibile tramite l’IP pubblico del server connesso alla vRack.

## Velocità di trasferimento

### La velocità di trasferimento e il livello di disponibilità sono garantiti?

- Trasferimento: la banda passante del servizio è condivisa e la velocità di trasferimento non può essere garantita. 
- Disponibilità: la disponibilità del servizio è garantita e regolata da un accordo di livello di servizio. Tutti i dettagli sono disponibili nelle Condizioni Particolari di utilizzo.

## Snapshot

### Cosa sono gli Snapshot?

Gli Snapshot sono immagini dello stato del disco e dei dati presenti nella sua partizione in un istante specifico. La configurazione e la gestione di queste istantanee sono possibili dallo Spazio Cliente OVHcloud.

La funzione Snapshot è attiva di default al momento della creazione della partizione e la sua frequenza predefinita è impostata su “ogni ora”.

### Qual è la frequenza degli Snapshot?

La frequenza degli Snapshot è configurabile dallo Spazio Cliente OVHcloud. Le opzioni disponibili sono:

- ogni ora (di default)
- ogni 6 ore
- ogni giorno
- ogni 2 giorni
- ogni 3 giorni
- settimanale

In qualsiasi momento è inoltre possibile creare Snapshot manuali, conservarli senza limite di durata o eliminarli. Questa funzionalità è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o via [API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### Come funziona il sistema di gestione degli Snapshot?

È possibile configurare Snapshot automatici con una delle diverse frequenze disponibili. Indipendentemente dalla frequenza impostata, l’ultimo Snapshot eseguito sostituirà il precedente. È inoltre possibile creare e rimuovere Snapshot on demand.

### È possibile eliminare uno Snapshot?

Solo gli Snapshot creati “on demand” possono essere eliminati (vedi domanda “Qual è la frequenza degli Snapshot?”). Gli Snapshot con frequenza fissa vengono eliminati automaticamente e non prevedono la possibilità di eseguire l’operazione manualmente.

### Qual è lo spazio occupato dagli Snapshot su un NAS-HA?

La capacità utilizzata da uno Snapshot varia in base alle operazioni effettuate nell’intervallo di tempo che separa le due istantanee.

A partire dal momento in cui lo Snapshot viene avviato, tutte le azioni eseguite sulla partizione vengono salvate nell’istantanea e aumentano la dimensione del file.

### Qual è il numero massimo di Snapshot eseguibili?

- Snapshot automatici: uno per partizione
- Snapshot manuali: dieci per partizione

### Dove è possibile recuperare gli Snapshot?

Nella partizione interessata: directory nascosta `.zfs` → cartella `snapshot`. I file sono disponibili in modalità *read only*.

### OVHcloud esegue un backup dei dati?

Sì, OVHcloud provvede a effettuare un backup interno giornaliero, che genera uno Snapshot aggiuntivo.  Questo backup non può essere disattivato dal cliente.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
