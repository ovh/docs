---
title: "Risolvere gli errori ricorrenti nell'utilizzo di un software FTP"
excerpt: "Ritrova qui le anomalie più frequenti associate al tuo software FTP"
updated: 2026-03-31
---

## Obiettivo

L'utilizzo di software FTP durante la connessione al tuo [hosting Web Cloud](/links/web/hosting) può causare diverse anomalie. Questa guida ti mostra come risolvere il problema più comune.

**Questa guida ti mostra come risolvere gli errori associati ai software FTP.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web Cloud](/links/web/hosting) 
<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### "Questo server non supporta FTP su TLS" (FileZilla)

![doesnt-support-ftp-on-tls](/pages/assets/screens/other/web-tools/filezilla/doesnt-support-ftp-on-tls.png){.thumbnail}

Questo messaggio sul software [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) indica che non hai attivato l'opzione SFTP o SSH dal tuo [Spazio Cliente OVHcloud](/links/manager). In questo modo, le informazioni scambiate tra il tuo server di hosting OVHcloud e il tuo computer non saranno cifrate.

Se i dati che vuoi scambiare tramite questo canale non sono riservati, clicca su `OK`{.action}.

In caso contrario, attiva il protocollo SFTP consultando la nostra guida "[Hosting Web - Come attivare l'accesso SFTP](/pages/web_cloud/web_hosting/enable_sftp)".

> [!primary]
>
> Per ulteriori messaggi di errore, consulta la sezione `Diagnostica` delle nostre guide [Hosting](/products/web-cloud-hosting).

### Ho trasferito i miei file con un software FTP, ma il mio sito non appare.

Per prima cosa verifica che i file e le cartelle del tuo sito siano presenti nella [cartella root](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online#3-caricare-i-file) del tuo hosting.

Se hai effettuato una modifica nei tuoi [server DNS](/pages/web_cloud/domains/dns_server_edit) o nella tua [zona DNS](/pages/web_cloud/domains/dns_zone_edit) meno di 48 ore fa, attendi e riavvia regolarmente i tuoi dispositivi per svuotare la cache.

### Le credenziali FTP non funzionano

Se non riesci ad autenticarti, modifica la password FTP seguendo le indicazioni di questa [guida](/pages/web_cloud/web_hosting/ftp_change_password).

### Incontro errori casuali sul mio sito.

La mancanza di spazio sul tuo hosting condiviso può causare problemi al tuo sito quando provi a modificarlo o ad aggiornarlo.

Per verificare lo spazio di storage rimasto sul tuo hosting, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nel riquadro **Informazioni generali**, trovi la dicitura **Spazio disco**.
>>
>> ![disk_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}
>>
>> Lo spazio di storage utilizzato compare sotto questa voce.

### Non riesco a trasferire i miei file verso il server FTP.

Verifica che il tuo client FTP sia collegato in "Modalità Passivo" (Modalità di configurazione di un server FTP in cui il server determina la porta di connessione).

Per esempio, per [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), clicca su `Modifica`{.action}, poi `Impostazioni`{.action}, `Connessione`{.action}, `FTP`{.action} e seleziona `Passiva (consigliata)`{.action}.

Limita anche la dimensione dei tuoi trasferimenti di dati (non puoi inviare più di **5.000 file e cartelle** sui server condivisi OVHcloud in un solo trasferimento). Effettua le tue importazioni in più volte, se necessario, utilizzando cartelle compresse.

Se disponi di una [formula Pro](/links/web/hosting-professional-offer) o [Performance](/links/web/hosting-performance-offer), utilizza preferibilmente il [protocollo SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) per effettuare l'importazione di file sullo spazio di archiviazione dei file del tuo hosting.

### Non riesco a eliminare il link simbolico "index.html" sul mio spazio FTP

Questo collegamento è installato di default sugli hosting condivisi OVHcloud. Dà questa visualizzazione:

![site-under-construction](/pages/assets/screens/other/browsers/errors/site-under-construction.png){.thumbnail}

Se non hai utilizzato la funzionalità "[Modulo in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" per creare il tuo sito, devi [accedere allo spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting Web per eliminare manualmente la pagina "Sito in costruzione".

## Per saperne di più <a name="go-further"></a>

[Hosting Condiviso: guida all’utilizzo di FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).