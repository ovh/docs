---
title: Crea task automatizzati (CRON) sul tuo hosting Web
slug: hosting_web_task_automatizzaticron
excerpt: Scopri come creare task CRON per automatizzare le operazioni pianificate su un hosting Web
section: Operazioni automatiche (CRON)
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/12/2022**

## Obiettivo

Sull'hosting Web OVHcloud è possibile utilizzare script per automatizzare alcune operazioni. La creazione di un task pianificato ("task CRON") è il modo più semplice per assicurarsi che i tuoi script si eseguano in momenti specifici senza che tu debba effettuare altre azioni. 

**Questa guida ti mostra come creare task CRON per automatizzare le operazioni pianificate su un hosting Web.**

> [!warning]
>OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Spetta quindi a te garantirne il buon funzionamento.
>
>Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Per questo, ti suggeriamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o di contattare l’amministratore del servizio nel caso in cui dovessi incontrare delle difficoltà. Non saremo effettivamente in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida. 
>

## Prerequisiti

- Disporre di una soluzione di [hosting Web](https://www.ovhcloud.com/it/web-hosting/) attiva
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sulla scheda `Web Cloud`{.action} e poi su `Hosting`{.action}.

Seleziona l'hosting, clicca sulla scheda `Più`{.action} e poi su `Cron`{.action}.

In questa sezione, visualizzi i tuoi task pianificati e i loro parametri.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Crea un task automatizzato

#### Step 1: Definizione dei parametri generali

Per creare un task CRON, clicca sul pulsante `Aggiungi una pianificazione`{.action} a destra. Puoi personalizzare le impostazioni dell'operazione nella nuova finestra.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Opzione|Descrizione|   
|---|---|   
|Ordine da eseguire|Definisci il percorso per accedere al file che contiene il tuo script. Esempio: www/jobs/cron.php|   
|Lingua|Seleziona la versione PHP utilizzata dallo script.|
|Attivazione|Scegli se attivare il task dopo la sua creazione o attivarlo successivamente.| 
|Log via email|Se necessario, seleziona un contatto (amministratore o tecnico) al quale verrà inviato un report in caso di errore di esecuzione. Puoi anche fornire un altro indirizzo email.| 
|Descrizione|Inserisci una descrizione per seguire l'esecuzione dei tuoi compiti.| 

Clicca su `Avanti`{.action} per passare allo Step 2.

#### Step 2: Definizione della frequenza

L'interfaccia offre due modalità per configurare la frequenza del tuo task. Utilizza la **Modalità Simple** per una selezione di opzioni di pianificazione semplificata per i principianti. Se preferisci utilizzare una frequenza, simile a un formato di tabella CRON (*crontab*), scegli la **Modalità esperto**.

|Modalità semplice|
|---|
|Utilizza i menu a tendina per specificare l'ora, i giorni di un mese, i giorni della settimana e i mesi del task.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|

|Modalità esperto| 
|---|
|Inserisci valori numerici come in un *crontab*. Gli asterischi indicano ogni valore del periodo, il che significa che il task si eseguirebbe in modo continuo **una volta all'ora ogni giorno** in questo esempio.|
|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

Durante la configurazione è possibile passare da una modalità all'altra per visualizzare le modifiche di conseguenza. Annota anche i [limiti durante la pianificazione di un'operazione su un hosting Web](./#limitazioni-delle-attivita-pianificate-sul-tuo-hosting-web_1).

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Step 3: Fine dell'installazione

Il riepilogo ti ricorda i parametri configurati, inclusa la notazione *crontab* sulla frequenza di esecuzione. se tutto è corretto, clicca su `Conferma`{.action}.

![cron di conferma](images/cron-jobs-6.png){.thumbnail}

L'operazione sarà pronta tra pochi minuti. Per modificare tutte le impostazioni o eliminare l'operazione clicca sui tre puntini...` `{.action} nella tabella di presentazione del tuo pannello di configurazione OVHcloud.

### Limitazioni delle attività pianificate sul tuo hosting Web

|Funzionalità|Descrizione|
|---|---|
|Pianificazione oraria|Noterete che il campo "Minuti" è disattivato nell'interfaccia (definito da "? " nella vista *crontab*). Un'operazione può essere eseguita solo una volta all'ora, con la frequenza di ripetizione più bassa che può essere specificata.|
|Durata|La durata di esecuzione di un'operazione è di 60 minuti. Se uno script supera il tempo di esecuzione, viene automaticamente arrestato dal sistema.|
|Variabile|Puoi definire solo delle variabili in uno script. Aggiungere all'URL che chiama lo script non funzionerà (esempio: www/jobs/cron.php?variabili=value).|
|Limite di dati|Un task può generare solo 5 MB di dati (*stdin/stderr*). Ad esempio, se uno script scrive dati in un file .txt, l'esecuzione si interrompe automaticamente quando il file raggiunge 5 MB.|
|Script che producono errori|Se uno script è difettoso, verrà automaticamente disattivato dopo 10 tentativi falliti. Riattivalo semplicemente nel Pannello di configurazione. (Clicca sui tre puntini `..`{.action}. e poi `seleziona Modifica`{.action}.)|
|Relazioni di attuazione|I rapporti saranno inviati all'indirizzo elettronico selezionato una volta al giorno (durante le ore notturne).|

### Intervento tecnico

#### Test del vostro script con un browser Web

Un semplice test per verificare se il tuo script produce un errore è eseguirlo su un browser Web. Ad esempio, se il percorso di accesso del vostro script è "www/cron.php" e il vostro dominio di hosting è "mypersonaldomain.ovh", dovrete utilizzare l'URL "http://<i></i>mypersonaldomain.ovh/cron.php". Se non si verificano errori ma lo script non funziona come previsto, segui i suggerimenti qui sotto.

#### Verifica dell'utilizzo dei percorsi assoluti

Ti consigliamo di utilizzare percorsi di accesso assoluti ai file dei tuoi script. La costante "DIR", ad esempio, può aiutare a ricevere il percorso corrente negli script PHP ([documentazione PHP](https://www.php.net/manual/en/language.constants.predefined.php){.external}).
 
#### Verifica dei log di esecuzione

Nei log del tuo hosting Web, accessibili dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, visualizzerai la categoria di log intitolata "CRON".

Consulta la nostra guida ["Consulta le statistiche e i log del tuo sito su un'offerta condivisa"](../hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/) per maggiori dettagli.

##### **Esempio di log**

- Esempio di fine script correttamente eseguito 

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2020-08-11 00:36:01] 
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-10 22:39:44.086166 exitcode: 0
```

- Esempio di insuccesso dovuto al superamento del tempo di esecuzione

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2020-08-11 01:36:01] # OVH# ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceded the maximum permitted (3600 secondi)
[2020-08-11 01:36:01] ## OVH ## END - 2020-08-11 01:36:01.086166 exitcode: 0
```

- Esempio di errore perché il file di script non è possibile trovare nel percorso di accesso specificato

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2020-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-11 00:36:01.086166 exitcode: 255
```

- Esempio di mancato rispetto a causa di un errore di autorizzazione (chmod) o di una configurazione errata del file.ovhconfig

```
[2020-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2020-08-11 18:07:10]
[2020-08-11 18:07:10] ## OVH ## END - 2020-08-11 18:07:10.969840 exitcode: 255
```


## Per saperne di più

[Configurare il file .ovhconfig di un hosting Web](../configurare-file-ovhconfig/)

[Utilizza l'accesso SSH di un hosting Web](../hosting_condiviso_il_protocollo_ssh/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
