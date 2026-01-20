---
title: "Backup Agent - Diagnosi e risoluzione dei problemi"
excerpt: "Scopri come risolvere i potenziali problemi legati a Backup Agent"
updated: 2026-01-09
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

Sostituisci il valore in byte con il numero di GB desiderato (GB diviso per 512, per 3 GB devi mettere 3221225472 / 512 = 6 291 456)

Infine, riavvia il servizio veeamservice.

///

/// details | Non riesco a lanciare un backup manuale.

[Contatta il supporto OVHcloud](/links/support) che potrà investigare. Assicurati di fornirci i log e delle schermate.

///

/// details | Il mio utilizzo dello spazio di archiviazione non si è aggiornato dopo l'eliminazione di un agente.

Conserviamo i tuoi dati per 14 giorni dopo l'eliminazione di un agente, l'utilizzo dello spazio di archiviazione si aggiornerà dopo i 14 giorni e l'eliminazione dei dati.

///

/// details | Voglio modificare la password per accedere alla Veeam Service Provider Console (VSPC).

Il cambio della password avviene tramite il link "Password dimenticata?" disponibile sulla console VSPC.

![Reset password 1](images/reset_password_1.png)

![Reset password 2](images/reset_password_2.png)

///

/// details | Ho disinstallato il mio Veeam Agent, come reinstallarlo?

[Contatta il supporto OVHcloud](/links/support) affinché il nostro team possa aiutarti a reinstallare il tuo agente.

///

/// details | Ho reinstallato il mio server, come reinstallare Backup Agent?

Devi eliminare il tuo agente nella sezione Agenti del tuo vspc-tenant, e successivamente scaricare e installare l'agente sul tuo nuovo sistema operativo.

///

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).