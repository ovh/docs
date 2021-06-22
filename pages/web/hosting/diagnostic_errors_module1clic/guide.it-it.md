---
title: Risolvere gli errori più frequenti associati ai moduli in 1 click
slug: errori-frequenti-moduli-in-1-click
excerpt: Diagnostica i casi più comuni di errore associati alla creazione di moduli in 1 click
section: Diagnostica
---

**Ultimo aggiornamento: 22/06/21**

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

- Disporre di un piano di [hosting Web](https://www.ovh.it/hosting-web/) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver utilizzato la funzionalità [Modulo in 1 click](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/) per creare un nuovo sito

## Procedura

> [!primary]
>
> Inserisci qui gli errori più comuni. Se riscontri un'altra anomalia, consulta le nostre [FAQ sugli hosting Web](https://www.ovh.it/hosting-web/faq/).
>

### "Si è verificato un errore durante il caricamento delle informazioni. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

Se questo messaggio compare durante l'installazione del tuo modulo, significa che non è possibile creare un nuovo database sul tuo hosting.

#### Soluzione n°1: modifica la tua offerta di hosting

> [!primary]
>
> Consulta le nostre diverse [soluzioni di hosting](https://www.ovh.it/hosting-web/) a confronto.
>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e poi su `Hosting`{.action}. Scegli l'hosting interessato e clicca su `Modifica offerta` nella sezione `Abbonamento` - `Offerta`:

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Le offerte [Pro2014](https://www.ovh.it/hosting-web/hosting-web-pro.xml) e [Performance](https://www.ovh.it/hosting-web/hosting-web-performance.xml) ti permetteranno di creare fino a tre moduli in 1 click supplementari. Le offerte Performance ti permettono di attivare gratuitamente un [server SQL privato](https://www.ovh.it/hosting-web/opzioni-sql.xml).

#### Soluzione n°2: eliminare un database non utilizzato <a name="delete-the-database"></a>

> [!warning]
>
> L'operazione di eliminazione di un database è definitiva. e l'eliminazione dei backup del database. Se non sei sicuro delle operazioni da effettuare, contatta il tuo webmaster o uno dei nostri [partner](https://partner.ovhcloud.com/it/directory/).
>

Per eliminare un database, [accedi allo Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), clicca su `Web Cloud`{.action}, seleziona `Hosting`{.action} e infine `Database`{.action}. Elimina il database:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Soluzione n°3: ordina nuovi database

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e poi su `Hosting`{.action}. Nei `Database`{.action}, clicca su `Azioni`{.action}:

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Scopri il confronto delle diverse [offerte di database](https://www.ovh.it/hosting-web/opzioni-sql.xml)
>

#### Soluzione n°4: installare il tuo modulo su un database già utilizzato

Per installare il tuo modulo su un database già utilizzato, è necessario utilizzare la [modalità avanzata](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/#installazione-avanzata-di-un-modulo) di installazione di un nuovo **CMS in 1 click**.

Per recuperare le credenziali del tuo database, consulta le nostre [FAQ](https://www.ovh.it/hosting-web/faq/).

### "La directory di installazione non è vuota"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Dopo aver avviato la creazione del tuo modulo, hai ricevuto un'email che ti informa che la directory di installazione del tuo modulo non è vuota.

Questo messaggio significa che la **Cartella di root** a cui è associato il tuo dominio contiene uno o più file o cartelle.

Per collegare il tuo dominio a un'altra directory, clicca su `Modifica il dominio`{.action} nella scheda `Multisito`{.action} e indica il nome di una nuova **Cartella root** (una directory vuota verrà creata automaticamente sul tuo hosting).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Accedi al tuo hosting via [FTP](../accedere-spazio-storage-ftp-hosting-web/) e, dopo averlo salvato, elimina o trasferisci il contenuto della cartella.

### "Impossibile accedere al database" <a name="delete-the-module"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Dopo aver avviato l'installazione del tuo modulo in modalità avanzata, hai ricevuto un'email che ti informa che il tuo modulo non può connettersi al database indicato. 

È quindi necessario verificare le credenziali del tuo database. Per trovarli, consulta le nostre [FAQ](https://www.ovh.it/hosting-web/faq/).

Elimina il tuo modulo dalla scheda `CMS in 1 click`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Riavvia l'installazione di un nuovo modulo.

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

- Il tuo dominio è sempre associato al tuo hosting precedente. In questo caso, modifica la tua [Zona DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/#modifica-la-zona-dns-ovhcloud-del-dominio_1) o i tuoi [server DNS](../../domains/web_hosting_gestisci_il_tuo_server_dns/#modifica-i-server-dns) o contatta il tuo precedente hosting provider.

## Per saperne di più <a name="gofurther"></a>

[Come diagnosticare una pagina bianca?](../web_hosting_come_fai_a_diagnosticare_una_pagina_bianca/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le diverse [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
