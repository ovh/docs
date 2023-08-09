---
title: Enterprise File Storage - Gestisci le politiche degli Snapshot
excerpt: "Scopri come creare una politica di Snapshot, applicarla sul tuo volume, modificarla ed eliminarla dal tuo spazio cliente"
updated: 2023-08-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra la gestione delle politiche di Snapshot per i volumi Enterprise File Storage di OVHcloud.

**Questa guida ti mostra come creare una politica di Snapshot, applicarla al tuo volume, modificarla ed eliminarla dal tuo Spazio Cliente.**

## Prerequisiti

- Un servizio Enterprise File Storage OVHcloud con un volume disponibile
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Nozioni di base

Uno Snapshot di volumi è una copia temporizzata di sola lettura di un volume.<br>
Gli Snapshot sono creati a partire da un volume operativo esistente. Non possono esistere senza questo.<br>
Una politica di Snapshot permette di automatizzare la creazione degli Snapshot utilizzando diversi parametri. La policy può quindi essere modificata ed eliminata se non è più necessaria.

## In pratica

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona la scheda `Bare Metal Cloud`{.action} nella barra di navigazione superiore. Apri `Storage e Backup`{.action} poi `Enterprise File Storage`{.action} nel menu a sinistra e seleziona il servizio dalla lista.

### Crea la tua politica di Snapshot

Una politica di Snapshot ti permette di automatizzare gli Snapshot, definendo la frequenza di creazione in minuti, ore, giorni, settimane o mesi. 
È inoltre necessario specificare il numero di copie che si desidera conservare.

1\. Clicca sulla scheda `Politiche di Snapshot`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Definisci il nome e la descrizione della politica di Snapshot e utilizza il pulsante `+ Aggiungi una nuova regola`{.action} per aggiungere una o più regole alla politica.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Compila i campi per specificare l’ora, i giorni del mese, i giorni della settimana e i mesi per la creazione dello Snapshot. È inoltre necessario inserire un prefisso per gli Snapshot.

È possibile trovare informazioni più dettagliate per ogni valore facendo clic sul punto interrogativo. Espandendo la sezione `Esempio`{.action}, è possibile visualizzare due set di regole con una spiegazione del loro risultato.

Fare clic sul segno di spunta per aggiungere la nuova regola. Una volta aggiunte tutte le regole, clicca su `Crea una nuova politica di Snapshot`{.action}.

> [!primary]
> È necessario specificare un prefisso e una durata in minuti. Facoltativamente, è possibile inserire ore, giorni e mesi di esecuzione per una pianificazione più precisa.
>

Non è possibile modificare una politica di Snapshot dopo averla creata. Se è necessario applicare nuove impostazioni di frequenza, sarà necessario eliminare la politica di Snapshot corrente e crearne una nuova. 

### Applica una politica di Snapshot 

Una volta creata la politica di Snapshot, è possibile applicarla a un volume.

1\. Seleziona la scheda `Volumi`{.action} del pool di capacità.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Seleziona dall'elenco il volume al quale applicare la politica di Snapshot.
3\. Accedi alla sezione `Snapshot`{.action} e seleziona la politica che vuoi applicare nella sezione `Gestisci la politica di Snapshot`{.action}. 
4\. Clicca sul pulsante `Applica la politica`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Elimina una politica di Snapshot

> [!warning]
>
> Una politica di Snapshot associata a un volume non può essere eliminata. Per eliminare una politica di Snapshot associata a uno o più volumi, è necessario innanzitutto dissociarla associando un'altra politica di Snapshot a questi volumi.
>

Per eliminare una politica di Snapshot:

1\. Accedi alla scheda `Politiche di Snapshot`{.action} del pool di capacità.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Selezionare la politica da eliminare.
3\. Clicca sul pulsante di eliminazione rappresentato da un `cestino`{.action}.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Per saperne di più <a name="go-further"></a>

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
