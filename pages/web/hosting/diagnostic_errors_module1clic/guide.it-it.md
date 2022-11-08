---
title: Risolvere gli errori più frequenti associati ai moduli in 1 click
slug: errori-frequenti-moduli-in-1-click
excerpt: Diagnostica i casi più comuni di errore associati alla creazione di moduli in 1 click
section: Diagnostica
order: 02
---

**Ultimo aggiornamento: 08/11/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

La creazione di un [modulo in 1 click](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/) in modalità semplice o avanzata può causare diverse anomalie.

**Scopri come diagnosticare i casi di errore più comuni associati alla creazione di moduli in 1 click**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver utilizzato la funzionalità [Modulo in 1 click](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/) per creare un nuovo sito

## Procedura

> [!primary]
>
> Inserisci qui gli errori più comuni. Se riscontri un'altra anomalia, consulta le nostre [FAQ sugli hosting Web](../faq-hosting-web/).
>

### "Si è verificato un errore durante il caricamento delle informazioni. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

Se questo messaggio compare durante l'installazione del tuo modulo, significa che non è possibile creare un nuovo database sul tuo hosting.

#### Soluzione n°1: modifica la tua offerta di hosting

> [!primary]
>
> Consulta le nostre diverse [soluzioni di hosting](https://www.ovhcloud.com/it/web-hosting/) a confronto.
>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e poi su `Hosting`{.action}. Scegli l'hosting interessato e clicca su `Modifica offerta` nella sezione `Abbonamento` - `Offerta`:

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Le offerte [Hosting Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) e [Hosting Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/) ti permetteranno di creare fino a tre moduli in 1 click supplementari. Le offerte **Hosting Performance** ti permettono di attivare gratuitamente un [server CloudDB](https://www.ovh.it/cloud/cloud-databases/).

#### Soluzione n°2: eliminare un database non utilizzato <a name="delete-the-database"></a>

> [!warning]
>
> L'operazione di eliminazione di un database è definitiva. e l'eliminazione dei backup del database. Se non sei sicuro delle operazioni da effettuare, contatta il tuo webmaster o uno dei [nostri partner](https://partner.ovhcloud.com/it/directory/).
>

Per eliminare un database, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), clicca su `Web Cloud`{.action}, seleziona `Hosting`{.action} e infine `Database`{.action}. Elimina il database:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Soluzione n°3: ordina nuovi database

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e poi su `Hosting`{.action}. Nei `Database`{.action}, clicca su `Azioni`{.action}:

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Scopri il confronto delle diverse [offerte di database](https://www.ovhcloud.com/it/web-hosting/options/start-sql/)
>

#### Soluzione n°4: installare il tuo modulo su un database già utilizzato

Per installare il tuo modulo su un database già utilizzato, è necessario utilizzare la [modalità avanzata](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-avanzata-di-un-modulo) di installazione di un nuovo **CMS in 1 click**.

Per recuperare le credenziali del tuo database, consulta le nostre [guida](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#configura-il-modulo).

### "La directory di installazione non è vuota"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Dopo aver avviato la creazione del tuo modulo, hai ricevuto un'email che ti informa che la directory di installazione del tuo modulo non è vuota.

Questo messaggio significa che la **Cartella di root** a cui è associato il tuo dominio contiene uno o più file o cartelle.

Per collegare il tuo dominio a un'altra directory, clicca su `Modifica il dominio`{.action} nella scheda `Multisito`{.action} e indica il nome di una nuova **Cartella root** (una directory vuota verrà creata automaticamente sul tuo hosting).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Accedi al tuo hosting via [FTP](../accedere-spazio-storage-ftp-hosting-web/) e, dopo averlo salvato, elimina o trasferisci il contenuto della cartella.

### "Si è verificato un errore durante il caricamento delle informazioni (There is not enough space on your hosting (you need at least xxx MB))"

![not_enough_space](images/not_enough_space.png){.thumbnail}

Questo messaggio indica che lo [spazio di storage](../accedere-spazio-storage-ftp-hosting-web/) del tuo hosting comporta un volume di dati troppo elevato. È quindi necessario eliminarne o spostarne uno prima di poter installare un nuovo [modulo in 1 click](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/).

In questa situazione, [connettiti in FTP](../accedere-spazio-storage-ftp-hosting-web/) al tuo hosting, [copia in locale](../accedere-spazio-storage-ftp-hosting-web/) i tuoi dati, poi elimina i file che non sono necessari al funzionamento del tuo sito.

> [!primary]
>
> Per maggiori informazioni sui dati da eliminare per diminuire la quantità di dati presenti sul tuo hosting, contatta la nostra [Community di utenti](https://community.ovh.com/en/) o i [partner OVHcloud](https://partner.ovhcloud.com/it/).<br>
> Non saremo in grado di fornirti assistenza al riguardo.

### "Impossibile accedere al database" <a name="delete-the-module"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Dopo aver avviato l'installazione del tuo modulo in modalità avanzata, hai ricevuto un'email che ti informa che il tuo modulo non può connettersi al database indicato. 

È quindi necessario verificare le credenziali del tuo database. Per trovarli, consulta la nostra [guida](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#configura-il-modulo).

Elimina il tuo modulo dalla scheda `CMS in 1 click`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Riavvia l'installazione di un nuovo modulo.

### "You have insufficient rights on this database."

![insufficient_rights](images/insufficient_rights.png){.thumbnail}

Il tuo database non può più essere modificato perché la quantità di dati che contiene supera il limite autorizzato. Questo messaggio compare durante l'installazione di un modulo in [modalità avanzata](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-avanzata-di-un-modulo).

installa il tuo modulo passando per [modalità "singola"](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-base-di-un-modulo) o scegli un altro database al momento dell'installazione in modalità avanzata. Se necessario, ordina una [offerta di database](https://www.ovh.it/hosting-web/opzioni-sql.xml) complementare.

Se non disponi di altri database e non desideri ordinare un'offerta complementare, [importa una copia del tuo database](../web_hosting_come_esportare_un_database/#procedura) e rimuovi i dati inutili.

> [!warning]
>
> **Eliminare elementi nel tuo database può causare un'interruzione del sito.**
>
> Per maggiori informazioni, contatta la nostra [Community di utenti](https://community.ovh.com/en/) o i [partner OVHcloud](https://partner.ovhcloud.com/it/).<br>
> Non saremo in grado di fornirti assistenza al riguardo.
>

### "Can't connect to database 'test' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](images/cant_connect.png){.thumbnail}

Hai avviato l'installazione di un modulo in 1 click in [modalità avanzata](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-avanzata-di-un-modulo) su un database situato su un [server CloudDB](https://docs.ovh.com/it/clouddb/iniziare-a-utilizzare-clouddb/). Questo messaggio di errore è stato inviato via email. Ciò significa che l'utente registrato durante l'installazione non dispone dei diritti sufficienti sul database o che gli identificativi indicati sono errati.

In questa situazione, modifica prima i [diritti dell'utente](../creare-database-e-utente/#gestire-i-diritti-degli-utenti) affinché disponga dei diritti **Administratore** o en **Lettura/scrittura** sulla base dei dati.

Verifica i suoi identificativi anche collegandoti direttamente al tuo [server di database](../connessione-database-server-bdd/#procedura) e riavvia l'installazione del tuo modulo.

### "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](images/cant_connect_server.png){.thumbnail}

Hai avviato l'installazione di un modulo in 1 click in [modalità avanzata](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-avanzata-di-un-modulo) su un database situato su un [server CloudDB](https://docs.ovh.com/it/clouddb/iniziare-a-utilizzare-clouddb/). Questo messaggio di errore è stato inviato via email. Significa che il nome del server di database indicato non è corretto.

Accedi alla sezione `Web cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sulla scheda `Database`{.action} dello schermo.

Clicca sull'offerta corrispondente: il nome del server da utilizzare è indicato sotto `Nome host` nella sottoparte `SQL` di `Informazioni di login`.

### Il tuo dominio non è proposto durante la creazione del modulo

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Clicca sulla scheda `Multisito`{.action} ed effettua le seguenti verifiche:

|Scenario|Azione da eseguire|
|---|---|
|Il dominio o sottodominio associato al sito che vuoi creare non compare sul `Multisito`{.action}.|Aggiungi il tuo dominio seguendo [queste indicazioni](../configurare-un-multisito-su-un-hosting-web/#step-2-aggiungi-un-dominio-o-un-sottodominio).|
|Il dominio è stato eliminato dal multisito senza azione da parte tua.|Se il tuo dominio o la sua [Zona DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/#capire-il-concetto-di-dns) non sono gestiti dal tuo account OVHcloud, aggiungi il tuo dominio al `Multisito`{.action} seguendo [questa guida](../configurare-un-multisito-su-un-hosting-web/#step-22-aggiungere-un-dominio-esterno).|

### Il tuo modulo è visualizzato su un indirizzo web di tipo "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](images/url-cluster.png){.thumbnail}

Dopo aver effettuato tutti i backup necessari, [elimina il tuo modulo](#delete-the-module) e poi il suo [database](#delete-the-database). Riavvia l'installazione sul dominio che vuoi.

### Il tuo vecchio sito continua a essere visualizzato

Questa anomalia può avere diverse cause: 

- Di recente hai effettuato una modifica nella tua zona o sui tuoi server [DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/#capire-il-concetto-di-dns) o un [trasferimento di domini](../../domains/trasferire-un-dominio-generico-in-ovh/). Attendi il completamento di queste operazioni (48 ore per la modifica dei tuoi DNS). Riavvia anche i tuoi dispositivi (PC, smartphone, box, ecc...) e svuota la cache del tuo browser.

- Il tuo dominio è sempre associato al tuo hosting precedente. In questo caso, modifica la tua [Zona DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/#modifica-la-zona-dns-ovhcloud-del-dominio_1) o i tuoi [Server DNS](../../domains/web_hosting_gestisci_il_tuo_server_dns/#modifica-i-server-dns) o contatta il tuo precedente hosting provider.

### La password "Amministratore" di accesso al "back office" del tuo modulo in 1 click non funziona più <a name="adminpassword"></a>

In caso di rifiuto della password attuale di accesso all'interfaccia di amministrazione del tuo CMS, consulta il paragrafo "Modifica la password del tuo modulo" della nostra guida sulla [gestione del tuo modulo in 1 click](https://docs.ovh.com/it/hosting/1-click-module-management/#password-change).

## Per saperne di più <a name="gofurther"></a>

[Come diagnosticare una pagina bianca?](../web_hosting_come_fai_a_diagnosticare_una_pagina_bianca/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le diverse [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
