---
title: "Risolvere gli errori ricorrenti nell'utilizzo di un software FTP"
excerpt: Ritrova qui le anomalie più frequenti associate al tuo software FTP
slug: condividili-problemi-ftp-ricorrenti
section: FTP e SSH
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/01/2022**

## Obiettivo

L'utilizzo di software FTP durante la connessione al tuo [hosting Web Cloud](https://www.ovhcloud.com/it/web-hosting/) può causare diverse anomalie. Questa guida ti mostra come risolvere il problema più comune.

**Questa guida ti mostra come risolvere gli errori associati ai software FTP.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web Cloud](https://www.ovhcloud.com/it/web-hosting/) 
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### "Questo server non supporta FTP su TLS" (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Questo messaggio sul software [FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/) indica che non hai attivato l'opzione SFTP o SSH dal tuo [Spazio Cliente OVHcloud](hhttps://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). In questo modo, le informazioni scambiate tra il tuo server di hosting OVHcloud e il tuo computer non saranno cifrate.

Se i dati che vuoi scambiare tramite questo canale non sono riservati, clicca su `OK`{.action}.

In caso contrario, accedi alla sezione Web del tuo [Spazio Cliente OVHcloud](hhttps://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona la sezione `Web Cloud`{.action} e poi `Hosting`{.action}. Seleziona l'hosting interessato e clicca sulla scheda `FTP-SSH`{.action}.

Se disponi di un hosting [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/), seleziona la casella `Disattivato`{.action} nella colonna `SFTP`{.action} e attendi qualche minuto.

Se disponi di un hosting [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/), clicca sul pulsante `...`{.action} a destra dell'utente FTP interessato e poi su `Modifica`{.action}.

Scegli `SFTP`{.action} o `Attivo`{.action} (per attivare il protocollo SSH sul tuo hosting), clicca su `Continua`{.action} e infine su `Conferma`{.action}. Attendi qualche minuto.

> [!primary]
>
> Per ulteriori messaggi di errore, consulta la sezione `Diagnostica` delle nostre guide [Hosting](../).
>

### Ho trasferito i miei file con un software FTP, ma il mio sito non appare.

Per prima cosa verifica che i file e le cartelle del tuo sito siano presenti nella [cartella root](https://docs.ovh.com/it/hosting/hosting_condiviso_come_mettere_online_il_tuo_sito/#3-caricare-i-file) del tuo hosting.

Se hai apportato modifiche ai tuoi [server o alla tua zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/#capire-il-concetto-di-dns) meno di 48 ore fa, attendi e riavvia regolarmente i tuoi dispositivi per svuotare la cache.

### Le credenziali FTP non funzionano

Se non riesci ad autenticarti, modifica la password FTP seguendo le indicazioni di questa [guida](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/).

### Incontro errori casuali sul mio sito.

La mancanza di spazio sul tuo hosting condiviso può causare problemi al tuo sito quando provi a modificarlo o ad aggiornarlo.

Per verificare lo spazio di storage rimasto sul tuo hosting, accedi allo [Spazio Cliente OVHcloud](hhttps://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Web Cloud`{.action} e poi su `Hosting`{.action}. Seleziona l'hosting interessato.

La quantità di dati registrata sul tuo server di hosting (database esclusi) compare nella sezione `Informazioni generali`{.action} > `Spazio disco`.

![disk_space](images/disk_space.png){.thumbnail}

### Non riesco a trasferire i miei file verso il server FTP.

Verifica che il tuo client FTP sia collegato in "Modalità Passivo" (Modalità di configurazione di un server FTP in cui il server determina la porta di connessione).

Per esempio, per [Filezilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/), clicca su `Modifica`{.action}, poi `Impostazioni`{.action}, `Connessione`{.action}, `FTP`{.action} e seleziona `Passiva (consigliata)`{.action}.

Limita anche la dimensione dei tuoi trasferimenti di dati (non puoi inviare più di **5.000 file e cartelle** sui server condivisi OVHcloud in un solo trasferimento). Effettua le tue importazioni in più volte, se necessario, utilizzando cartelle compresse.

Se disponi di una [formula Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/), utilizza preferibilmente il [protocollo SSH](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/) per effettuare l'importazione di file sullo spazio di archiviazione dei file del tuo hosting.

### Non riesco a eliminare il link simbolico "index.html" sul mio spazio FTP

Questo collegamento è installato di default sugli hosting condivisi OVHcloud. Dà questa visualizzazione:

![site_under_construction](images/site_under_construction.png){.thumbnail}

Se non hai utilizzato la funzionalità "[Modulo in 1 click](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/)" per creare il tuo sito, è necessario utilizzare il software [Net2FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/#1-ftp-explorer) accessibile tramite lo [Spazio Cliente OVHcloud](hhttps://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) per eliminare manualmente la pagina "Sito in costruzione".

## Per saperne di più <a name="gofurther"></a>

[Hosting Condiviso: guida all’utilizzo di FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
