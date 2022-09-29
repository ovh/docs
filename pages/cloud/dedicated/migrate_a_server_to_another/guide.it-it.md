---
title: Migrare i dati da un server dedicato a un altro
slug: migrare-i-dati-da-un-server-dedicato-a-un-altro
excerpt: Come migrare i dati da un server dedicato a un altro
section: Per iniziare
order: 5
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 16/09/2021**

## Obiettivo

Le esigenze e le gamme OVHcloud si evolvono costantemente ed è quindi necessario modificare di conseguenza i server e migrare i dati.

**Questa guida ha lo scopo di centralizzare gli step di migrazione dei dati da un server all'altro.**

> [!warning]
>
> OVHcloud mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Possedere due server dedicati (il vecchio e il nuovo) con il sistema operativo installato
- Accesso amministrativo ai tuoi server
- Competenze in amministrazione sistemica

## Procedura

> [!warning]
>
> Alcune delle opzioni incluse in questa guida potrebbero non essere disponibili sulla gamma di server o essere disponibili in un'altra sezione del Pannello di configurazione (Kimsufi, So you Start).
>

### Preparazione dell'ambiente

Una volta che il nuovo server è stato consegnato al tuo account, il primo step consiste nel creare un ambiente (sistema operativo, software, sicurezza...) identico all'ambiente precedente, o almeno il più possibile.

Se è necessaria una modifica della versione del sistema operativo o del software, assicurati che le locazioni dei file restino invariate e che i dati siano compatibili tra le versioni.

### Migrazione dei dati

La migrazione dei dati implica generalmente la copia dei file da un server all'altro. A tal fine esistono diverse soluzioni:

- Il modo più semplice è utilizzare un software adeguato come [SFTP](https://docs.ovh.com/it/dedicated/caricare-e-recuperare-dati-via-sftp/).
- L'altra opzione consiste nel [sincronizzare i due server](https://docs.ovh.com/it/dedicated/copiare-dati-server-rsync/).

### Utilizza il Backup Storage (disponibile solo su OVHcloud e So you Start)

Con l'opzione [Backup Storage](https://www.ovhcloud.com/it/bare-metal/backup-storage/), puoi archiviare dati su un servizio esterno al tuo server. È associato esclusivamente al servizio dal quale l'hai ordinato.

> [!warning]
>
> Il servizio di backup storage è accessibile esclusivamente dai server OVHcloud e dagli indirizzi IP situati nella stessa zona.
>
> Ad esempio, se il servizio di backup storage è attivo su un server situato nel datacenter SBG, i server situati nei datacenter GRA o RBX possono accedervi. Tuttavia, i server situati nei datacenter BHS o WAW non avranno accesso a questo storage.
>

Puoi autorizzare l'accesso allo spazio di backup dal tuo nuovo server. In questo modo, disporrai di un gateway per trasferire i tuoi dati.

Per maggiori informazioni, consulta la nostra guida su [utilizzare il Backup Storage su un server dedicato](https://docs.ovh.com/it/dedicated/servizio-backup-storage/).

### Migrazione di un Additional IP (disponibile solo su OVHcloud e So you Start)

> [!warning]
>
> - L'indirizzo IP principale di un server non può essere migrato verso un altro server.
>
> - La migrazione di un Additional IP è possibile da un account So you Start a un account OVHcloud. Questa operazione è fatturata allo stesso modo della creazione di un nuovo IP.
>
> - Non è possibile trasferire un IP da un account OVHcloud a un account So you Start.
>

Se la reputazione dei tuoi indirizzi IP è importante, ti consigliamo vivamente di utilizzare indirizzi [Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/) perché, in caso di migrazione, possono essere conservati.

Una volta creati questi indirizzi IP, dovete semplicemente spostarli sul nuovo server.
Per farlo, consulta la nostra guida: [Trasferisci un IP FailOver](https://docs.ovh.com/it/dedicated/ip-fo-move/).

> [!alert]
>
> L'eliminazione del server di origine, su cui sono state ordinate una o più opzioni (spazio di backup, Additional IP), eliminerà definitivamente queste opzioni.
>
> È quindi necessario apportare tutte le modifiche prima di eliminare il servizio.
>

Una volta che i dati saranno disponibili sul nuovo server, potrebbe essere necessario modificare la configurazione DNS, ad esempio se l'indirizzo IP principale è stato utilizzato.

Per maggiori informazioni, leggi la nostra documentazione sui [domini e DNS](https://docs.ovh.com/it/domains/).

## Per saperne di più

Per maggiori informazioni sulla migrazione del tuo server, contatta [il nostro network di partner](https://partner.ovhcloud.com/it/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
