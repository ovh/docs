---
title: "Backup Agent - Diagnosi e risoluzione dei problemi"
excerpt: "Scopri come risolvere i potenziali problemi legati a Backup Agent"
updated: 2026-02-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>

## Obiettivo

Trova su questa pagina un elenco di potenziali problemi che potresti incontrare con il prodotto Backup Agent e come risolverli.

## Prerequisiti

- Un server Bare Metal su cui è installato Backup Agent. Consulta la nostra guida "[Come configurare la prima copia di backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" per ulteriori informazioni.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Elenco dei possibili problemi

/// details | Il mio Backup Agent non riesce a connettersi al tuo server.

Verifica che il tuo firewall consenta la comunicazione con il nostro server `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) in Europa con la porta TCP e UDP 6180.

Assicurati che nessun altro servizio utilizzi porte che potrebbero entrare in conflitto con il tuo server.

Puoi trovare i log del tuo Backup Agent nella cartella: `C:\ProgramData\Veeam\` o `/var/logs`.

///

/// details | Il tuo server non riesce ad installare l'agente di backup sul mio server.

Il Backup Agent supporta le distribuzioni Windows e i kernel nativi Linux. Se hai apportato modifiche al tuo kernel, devi assicurarti di disporre dei pacchetti corretti per permettere l'installazione dell'agente. Troverai l'elenco dei parametri necessari qui: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Il mio Backup Agent non riesce a effettuare il backup, ricevo l'errore: "Failed to perform Backup. Neither blksnap nor veeamsnap module was found."

Il Backup Agent supporta le distribuzioni Windows e i kernel nativi Linux. Se hai apportato modifiche al tuo kernel, devi assicurarti di disporre dei pacchetti corretti per permettere l'installazione dell'agente. Troverai l'elenco dei parametri necessari qui: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

Hai bisogno in primo luogo degli header del kernel Linux e successivamente puoi tentare di installare o riconfigurare il tuo pacchetto veeamsnap o veeamblksnap o blksnap, a seconda del sistema operativo che utilizzi.

///

/// details | Il mio agente non riesce a effettuare il backup, ricevo l'errore: `POSIX: Failed to create or open file [/.veeamsnapstorage/veeamsnapstore`

Per effettuare il backup, Veeam esegue degli snapshot in aggiunta a conservare i dati che saranno scritti nel backup, questo snapshot si chiama "veeamsnapstorage".

Per risolvere questo problema, aumenta la dimensione dello snapshot tramite il file `/etc/veeam/veeam.ini`:

```bash
[blksnap]
 
# The minimum allowable size of the difference Storage in sectors
diffStorageMinimum = 2097152
```

Sostituire il valore con il numero di settori desiderato convertendo prima la dimensione desiderata da gigabyte a byte e dividendo quindi questo numero di byte per 512.<br>
Ad esempio, per una dimensione di 3 GB (3.221.225.472 byte), il valore da specificare è 6.291.456 (3.221.225.472 / 512).

Infine, riavvia il servizio veeamservice.

///

/// details | Non riesco a lanciare un backup manuale.

[Contatta il supporto OVHcloud](/links/support-contact) che potrà investigare. Assicurati di fornirci i log e delle schermate.

///

/// details | Il mio backup è in errore, come posso vedere il problema?

Se il tuo backup è in errore, puoi diagnosticare il problema direttamente dall'agente. Clicca sulla scheda corrispondente al tuo sistema operativo:

> [!tabs]
> Windows
>>
>> Per vedere i dettagli di un errore di backup su Windows:
>>
>> 1. Apri l'applicazione "Veeam Agent" sul tuo server Bare Metal.
>> 2. Nell'interfaccia principale, vedrai lo stato dei tuoi backup.
>> 3. Clicca sul backup in errore per vedere i dettagli dell'errore.
>> 4. Consulta la sezione **History** o **Last Session** per vedere i messaggi di errore dettagliati.
>>
>> L'interfaccia ti mostrerà informazioni precise sulla causa dell'errore, permettendoti di identificare rapidamente il problema.
>
> Linux
>>
>> Per vedere i dettagli di un errore di backup su Linux, puoi utilizzare l'interfaccia utente:
>>
>> 1\. Connettiti al tuo server Bare Metal tramite SSH.
>> 2\. Avvia l'interfaccia Veeam digitando il seguente comando:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Nell'interfaccia, naviga verso la sezione dei backup per vedere lo stato dei tuoi job.
>> 4\. Seleziona il backup in errore per consultare i dettagli dell'errore.
>>
>> Puoi anche consultare i log direttamente tramite la riga di comando:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Questo comando ti mostrerà l'elenco delle sessioni di backup con il loro stato e i dettagli degli eventuali errori.

///

/// details | Il mio utilizzo dello spazio di archiviazione non si è aggiornato dopo l'eliminazione di un agente.

Conserviamo i tuoi dati per 14 giorni dopo l'eliminazione di un agente, l'utilizzo dello spazio di archiviazione si aggiornerà dopo i 14 giorni e l'eliminazione dei dati.

///

/// details | Voglio modificare la password per accedere alla Veeam Service Provider Console (VSPC).

Il cambio della password avviene tramite il link "Password dimenticata?" disponibile sulla console VSPC.

![Reset password 1](images/reset_password_1.png){.thumbnail}

![Reset password 2](images/reset_password_2.png){.thumbnail}

///

/// details | Ho reinstallato il mio server, come reinstallare Backup Agent?

Devi scaricare l'agente dal tuo [Spazio Cliente OVHcloud](/links/manager) e installarlo sul tuo nuovo sistema operativo.

///

## Trovare ed esportare i log

Per risolvere i problemi con Backup Agent, è spesso necessario consultare ed esportare i log del prodotto. Clicca sulla scheda corrispondente al tuo sistema operativo:

> [!tabs]
> Windows
>>
>> **Localizzare i log**
>>
>> I log di Veeam Agent per Windows sono memorizzati nella seguente directory:
>>
>> ```
>> C:\ProgramData\Veeam\Endpoint\Logs
>> ```
>>
>> **Esportare i log**
>>
>> Per esportare i log su Windows, puoi utilizzare l'interfaccia grafica di Veeam Agent:
>>
>> 1. Apri l'applicazione "Veeam Agent" sul tuo server.
>> 2. Vai al menu **Help** > **Export Logs**.
>> 3. Seleziona la directory di destinazione per l'archivio dei log.
>> 4. Clicca su **Export** per generare l'archivio.
>>
>> L'archivio sarà creato in formato `.zip` e conterrà tutti i log e i file di configurazione necessari per la diagnosi.
>>
>> Per ulteriori informazioni, consulta l'articolo [Veeam KB2404](https://www.veeam.com/kb2404).
>
> Linux
>>
>> **Localizzare i log**
>>
>> I log di Veeam Agent per Linux sono memorizzati nella seguente directory:
>>
>> ```bash
>> /var/log/veeam/
>> ```
>>
>> Puoi anche consultare i log del servizio Veeam:
>>
>> ```bash
>> /var/log/veeam/veeamservice.log
>> ```
>>
>> **Esportare i log**
>>
>> Per esportare i log su Linux, hai due opzioni:
>>
>> 1\. Tramite la riga di comando
>>
>> Usa il seguente comando per esportare i log. L'archivio sarà salvato nella directory di lavoro corrente:
>>
>> ```bash
>> sudo veeamconfig grabLogs
>> ```
>>
>> 2\. Tramite il pannello di controllo
>>
>> Se hai accesso a un'interfaccia grafica, puoi esportare i log tramite il pannello di controllo di Veeam Agent specificando la directory di destinazione.
>>
>> L'archivio sarà creato in formato `.tar.gz` e conterrà tutti i log e i file di configurazione necessari per la diagnosi.
>>
>> Per ulteriori informazioni, consulta la [documentazione Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/logs_export.html?ver=13).

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).