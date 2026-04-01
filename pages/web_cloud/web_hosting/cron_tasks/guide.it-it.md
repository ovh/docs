---
title: "Crea task automatizzati (CRON) sul tuo hosting Web"
excerpt: "Questa guida ti mostra come creare task CRON per automatizzare le operazioni pianificate su un hosting Web"
updated: 2026-03-31
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Obiettivo

Sull'hosting web OVHcloud è possibile utilizzare script per automatizzare alcune operazioni. Un task pianificato ("task CRON") permette ai tuoi script di eseguirsi in momenti specifici senza che tu debba effettuare altre azioni.

**Questa guida ti mostra come creare task CRON per automatizzare le operazioni pianificate su un hosting web.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Spetta quindi a te garantirne il buon funzionamento.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Per questo, ti suggeriamo di rivolgerti a un [provider specializzato](/links/partner) o di contattare l'amministratore del servizio nel caso in cui dovessi incontrare delle difficoltà. Non saremo effettivamente in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di una soluzione di [hosting web](/links/web/hosting) attiva
<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Crea un task automatizzato

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Più`{.action} e poi su `Cron`{.action}. Visualizzi i tuoi task pianificati e i loro parametri.
>>
>> ![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}
>>
>> Per creare un task CRON, clicca sul pulsante `Aggiungi un intervento programmato`{.action} a destra.
>>
> **Passaggio 3**
>>
>> Personalizza le impostazioni del task nella finestra visualizzata.
>>
>> ![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}
>>
>> |Opzione|Descrizione|
>> |---|---|
>> |Ordine da eseguire|Definisci il percorso per accedere al file che contiene il tuo script. Esempio: www/jobs/cron.php|
>> |Lingua|Seleziona la versione PHP utilizzata dallo script.|
>> |Attivazione|Scegli se attivare il task dopo la sua creazione o attivarlo successivamente.|
>> |Log via email|Se necessario, seleziona un contatto (amministratore o tecnico) al quale verrà inviato un report in caso di errore di esecuzione. Puoi anche fornire un altro indirizzo email.|
>> |Descrizione|Inserisci una descrizione per seguire l'esecuzione dei tuoi compiti.|
>>
>> Clicca su `Continua`{.action}.
>>
> **Passaggio 4**
>>
>> L'interfaccia offre due modalità per configurare la frequenza del tuo task:
>>
>> - **Modalità semplice**: utilizza i menu a tendina per specificare l'ora, i giorni di un mese, i giorni della settimana e i mesi del task.
>> - **Modalità esperto**: inserisci valori numerici come in un *crontab*.
>>
>> |Modalità semplice|Modalità esperto|
>> |---|---|
>> |Utilizza i menu a tendina per specificare l'ora, i giorni di un mese, i giorni della settimana e i mesi del task.|Inserisci valori numerici come in un *crontab*. Gli asterischi indicano ogni valore del periodo, il che significa che il task si eseguirebbe in modo continuo **una volta all'ora ogni giorno** in questo esempio.|
>> |![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|
>>
>> > [!primary]
>> >
>> > Il modulo `Giorni`{.action} permette di definire le frequenze di esecuzione su un ciclo mensile.
>> >
>> > Il modulo `Giorni della settimana`{.action} permette di definire frequenze di esecuzione complementari ma su un ciclo settimanale.
>>
>> Durante la configurazione è possibile passare da una modalità all'altra. Annota anche i [limiti durante la pianificazione di un'operazione su un hosting web](./#limitazioni-delle-attivita-pianificate-sul-tuo-hosting-web).
>>
>> Clicca su `Continua`{.action}.
>>
> **Passaggio 5**
>>
>> Il riepilogo ti ricorda i parametri configurati, inclusa la notazione *crontab* sulla frequenza di esecuzione. Se tutto è corretto, clicca su `Conferma`{.action}.
>>
>> ![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}
>>
>> L'operazione sarà pronta tra pochi minuti. Per modificare tutte le impostazioni o eliminare l'operazione clicca su `...`{.action} nella tabella di presentazione del tuo pannello di configurazione OVHcloud.

### Modificare o eliminare un'operazione pianificata

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Più`{.action} e seleziona `Cron`{.action}.
>>
> **Passaggio 3**
>>
>> Nella tabella che appare, clicca sul pulsante `...`{.action} a destra dell'operazione pianificata in questione.
>>
>> Scegli tra i pulsanti `Modificare`{.action} o `Eliminare`{.action} in base all'azione che vuoi effettuare sull'operazione pianificata.

### Limitazioni delle attività pianificate sul tuo hosting web

|Funzionalità|Descrizione|
|---|---|
|Pianificazione oraria|Noterete che il campo "Minuti" è disattivato nell'interfaccia (definito da "? " nella vista *crontab*). Un'operazione può essere eseguita solo una volta all'ora, con la frequenza di ripetizione più bassa che può essere specificata.|
|Durata|La durata di esecuzione di un'operazione è di 60 minuti. Se uno script supera il tempo di esecuzione, viene automaticamente arrestato dal sistema.|
|Variabile|Puoi definire solo delle variabili in uno script. Aggiungere all'URL che chiama lo script non funzionerà (esempio: www/jobs/cron.php?variabili=value).|
|Limite di dati|Un task può generare solo 5 MB di dati (*stdin/stderr*). Ad esempio, se uno script scrive dati in un file .txt, l'esecuzione si interrompe automaticamente quando il file raggiunge 5 MB.|
|Script che producono errori|Se uno script è difettoso, verrà automaticamente disattivato dopo 10 tentativi di esecuzione non andati a buon fine. La segnalazione degli errori verrà inviata solo quando tutti e 10 i tentativi avranno avuto esito negativo.<br>Correggi lo script in base alla segnalazione degli errori ricevuta e riattiva il "task CRON" nel pannello di controllo (clicca su `...`{.action} e poi su `Modificare`{.action}).|
|Relazioni di attuazione|I rapporti saranno inviati all'indirizzo elettronico selezionato una volta al giorno (durante le ore notturne).|

### Intervento tecnico

#### Test del vostro script con un browser web

Un semplice test per verificare se il tuo script produce un errore è eseguirlo su un browser web. Ad esempio, se il percorso di accesso del vostro script è "www/cron.php" e il vostro dominio di hosting è "mypersonaldomain.ovh", dovrete utilizzare l'URL "http://<i></i>mypersonaldomain.ovh/cron.php". Se non si verificano errori ma lo script non funziona come previsto, segui i suggerimenti qui sotto.

#### Verifica dell'utilizzo dei percorsi assoluti

Ti consigliamo di utilizzare percorsi di accesso assoluti ai file dei tuoi script. La costante "DIR", ad esempio, può aiutare a ricevere il percorso corrente negli script PHP ([documentazione PHP](https://www.php.net/manual/en/language.constants.predefined.php)).

#### Verifica dei log di esecuzione

Nei log del tuo hosting web, accessibili dal tuo [Spazio Cliente OVHcloud](/links/manager), visualizzerai la categoria di log intitolata "CRON".

Consulta la nostra guida ["Consulta le statistiche e i log del tuo sito su un'offerta condivisa"](/pages/web_cloud/web_hosting/logs_and_statistics) per maggiori dettagli.

##### **Esempio di log**

- Esempio di fine script correttamente eseguito

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2026-03-30 00:36:01]
[2026-03-30 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Esempio di insuccesso dovuto al superamento del tempo di esecuzione

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2026-03-30 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2026-03-30 01:36:01] ## OVH ## END - 2026-03-30 01:36:01.086166 exitcode: 0
</code></pre>

- Esempio di errore perché il file di script non è possibile trovare nel percorso di accesso specificato

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2026-03-30 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2026-03-30 00:36:01] ## OVH ## END - 2026-03-30 00:36:01.086166 exitcode: 255
</code></pre>

- Esempio di mancato rispetto a causa di un errore di autorizzazione (chmod) o di una configurazione errata del file.ovhconfig

<pre class="bgwhite"><code>
[2026-03-30 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2026-03-30 18:07:10]
[2026-03-30 18:07:10] ## OVH ## END - 2026-03-30 18:07:10.969840 exitcode: 255
</code></pre>

## Per saperne di più <a name="go-further"></a>

[Configurare il file .ovhconfig di un hosting web](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Utilizza l'accesso SSH di un hosting web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
