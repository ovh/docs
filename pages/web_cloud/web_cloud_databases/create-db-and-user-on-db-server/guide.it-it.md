---
title: 'Creare database e utenti sul tuo database server'
excerpt: 'Scopri come creare un database sul tuo database server'
updated: 2026-03-24
---

## Obiettivo

Un database (DB) permette di archiviare elementi detti dinamici, come commenti o articoli. Questi database sono oggi utilizzati dalla quasi totalità dei sistemi di gestione dei contenuti (CMS) come WordPress o Joomla!.

**Questa guida ti mostra come creare un database sul tuo database server e dare accesso agli utenti.**

## Prerequisiti

- Disporre di un'[istanza Web Cloud Databases](/links/web/databases) (inclusa in un piano di [hosting web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo servizio di database

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

### Creare un database

<!-- CP-STEPS-START:creare-database -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Aggiungi un database`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > La creazione di schemi PostgreSQL non è attualmente disponibile sui server Web Cloud Databases.
>>
> **Passaggio 4**
>>
>> Compila i campi in base ai criteri indicati. È possibile creare direttamente un utente selezionando la casella **"Crea un utente"**:
>>
>> - **Nome del database** (obbligatorio): è il nome del futuro database.
>> - **Nome utente** (solo se la casella `Crea un utente` è selezionata): l'utente che potrà connettersi al database ed eseguire le query.
>> - **Diritti** (solo se la casella `Crea un utente` è selezionata): i permessi associati all'utente sul database. Per un utilizzo standard, seleziona `Amministratore`{.action}. I permessi possono essere modificati in seguito.
>> - **Password**/**Conferma password** (solo se la casella `Crea un utente` è selezionata): seleziona una password e confermala.
>>
>> Clicca su `Conferma`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:creare-database -->

### Creare un utente

Per utilizzare un database server OVHcloud, crea degli utenti con diritti specifici per la connessione a un database.

<!-- CP-STEPS-START:creare-utente -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Utenti e diritti`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Aggiungi un utente`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Inserisci un "nome utente" e una "password", poi clicca su `Conferma`{.action}.
<!-- CP-STEPS-END:creare-utente -->

### Gestire i diritti degli utenti

Per consentire a un utente di eseguire operazioni su un database, è necessario assegnargli dei diritti.

<!-- CP-STEPS-START:gestire-diritti -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Utenti e diritti`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra dell'utente interessato, poi su `Gestisci i diritti`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella colonna di sinistra **Database**, trovi la lista dei database presenti sul tuo server.
>>
>> Sono disponibili 3 tipi di diritti:
>>
>> - `Amministratore`: autorizzazione delle query di tipo **Select / Insert / Update / Delete / Create / Alter / Drop**.
>> - `Lettura / Scrittura`: autorizzazione delle query di tipo **Select / Insert / Update / Delete**.
>> - `Lettura`: autorizzazione delle query di tipo **Select**.
>> - `Nessuno`: nessun diritto sul database.
>>
>> > [!primary]
>> >
>> > La distribuzione dei diritti sopra indicati è specifica di OVHcloud. Un utente con diritti di `Amministratore` potrà utilizzare **DDL** (Data Definition Language) e **DML** (Data Manipulation Language), mentre un utente con diritti di `Lettura / Scrittura` potrà utilizzare solo **DML** (Data Manipulation Language).
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}
<!-- CP-STEPS-END:gestire-diritti -->

### Eliminare un database

> [!warning]
>
> Prima di eliminare un database su un database server, non viene eseguita alcuna
> verifica del contenuto del database. Questo verrà eliminato anche se
> contiene ancora dei dati. Si consiglia quindi di creare
> un backup e scaricarlo prima di qualsiasi eliminazione.
>

<!-- CP-STEPS-START:eliminare-database -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del database interessato, poi su `Elimina il database`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}
<!-- CP-STEPS-END:eliminare-database -->

## Per saperne di più

Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
