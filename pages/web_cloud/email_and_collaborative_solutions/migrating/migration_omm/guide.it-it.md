---
title: 'Migrare accounti email tramite OVHcloud Mail Migrator'
excerpt: 'Scopri come migrare i tuoi account email su OVHcloud utilizzando il nostro strumento OVHcloud Mail Migrator'
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Obiettivo

[OVHcloud Mail Migrator](/links/web/omm) è uno strumento sviluppato da OVHcloud che risponde al bisogno di reversibilità. Consente di migrare i tuoi account email verso le tue email OVHcloud o un servizio email esterno. Il processo supporta diversi tipi di contenuti, come email, contatti, calendari e compiti, purché siano compatibili con le tue email.

**Scopri come migrare i tuoi account email su OVHcloud utilizzando il nostro strumento OVHcloud Mail Migrator.**

## Prerequisiti

- Disporre di un servizio email esterno o su OVHcloud, come un'offerta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [Email Pro](/links/web/email-pro) o MX Plan (tramite l'offerta MX Plan singola o inclusa in un'offerta di [hosting web OVHcloud](/links/web/hosting)).
- Disporre delle credenziali relativi agli account email che si desidera migrare (gli account email sorgente).
- Disporre delle credenziali relativi agli account email di destinazione.

## Procedura

Per accedere a OMM, vai all'indirizzo <https://omm.ovhcloud.com/>.

![omm](images/omm-01.png){.thumbnail .w-600}

### Creare un progetto di migrazione <a name="create-project"></a>

Prima di avviare una migrazione, è necessario creare un progetto. Questo progetto ti permetterà di avviare una o più migrazioni e seguirle.

Clicca su `New migration`{.action} per iniziare la creazione del tuo progetto.

**Project contact email**: Inserisci un indirizzo email che servirà a ricevere le credenziali e le notifiche di monitoraggio delle tue migrazioni. Non è consigliabile inserire uno degli indirizzi email che saranno migrati nel tuo progetto.
**Project password**: Inserisci una password che servirà a connettersi al tuo progetto. Deve contenere almeno 10 caratteri e includere almeno 1 carattere speciale, 1 numero, 1 maiuscola e 1 minuscola.

Clicca su `Create my project`{.action} per avviare la creazione del progetto.

Sull'indirizzo email di contatto del progetto, riceverai un'email di conferma contenente l'identificativo unico del progetto e un link per accedervi.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> In caso di inattività per 60 giorni, il progetto di migrazione e tutti i dati associati verranno automaticamente eliminati.

### Creare una nuova migrazione <a name="create-migration"></a>

Una volta creato il tuo progetto, accedi a esso dalla pagina iniziale di [OMM](/links/web/omm):

- Clicca su `Track a migration`{.action}.
- Inserisci il `Project ID` ricevuto via email.
- Inserisci la `Project password` definita al momento della sua creazione.
- Clicca su `Connect to project`{.action} per completare.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Ora sei sulla pagina iniziale del progetto che ti permetterà di avviare la tua prima migrazione.

- Clicca su `New migration`{.action} in alto a sinistra del tavolo.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Nella nuova pagina che appare, inserisci le informazioni di accesso dell'account sorgente e dell'account di destinazione per pianificare la migrazione o avviarla immediatamente. Ricorda, il contenuto dal **source account** verrà migrato verso al **destination account**.

Prima di iniziare la tua migrazione, è importante conoscere bene i 3 tipi di account che si possono migrare e verso cui puoi migrare:

- **OVHcloud**: Il `Autodetect` è consigliata se devi migrare un account ospitato su una delle offerte email OVHcloud. Se possiedi un gran numero di account email OVHcloud, seleziona una delle seguenti offerte: `MX plan`, `Email Pro`, `Exchange` o `Zimbra`. Ti verrà richiesto di connettersi all'account OVHcloud associato all'offerta interessata dalla migrazione. Per ulteriori informazioni, consulta la sezione "[Migrare tramite una connessione all'account cliente OVHcloud](#sso-migration)".
- **Others**: Si tratta di servizi email sottoscritti fuori da OVHcloud. È disponibile un elenco non esaustivo di servizi email supportati da OMM. Se il tipo di servizio del tuo account email non è incluso, utilizza i protocolli `IMAP` o `POP`, compatibili con la maggior parte dei server email.
- **Importing files**: È possibile migrare il contenuto di file PST, ICS, CSV e XML Rules tramite OMM verso un account email di destinazione. Quando questa funzione è selezionata, basta trascinare e rilasciare il tuo documento nell'area dedicata o esplorare il tuo terminale tramite il pulsante `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Completa le informazioni in base al tipo di account:

- **Source account**
    - **Account type**: Seleziona il tipo di account sorgente.
    - **E-mail**: Inserisci l'indirizzo email dell'account sorgente.
    - **Password**: Inserisci la password dell'account sorgente.
    - **Server URL** / **Server domain** *(a seconda del tipo)*: Inserisci il nome host del server email associato all'account email che desideri migrare.
    - **OVHcloud Account ID** *(a seconda del tipo)*: Questo campo viene automaticamente compilato quando sei connesso a un account OVHcloud. Per ulteriori informazioni, consulta la sezione "[Migrare tramite una connessione all'account cliente OVHcloud](#sso-migration)".
    - **Organization** *(a seconda del tipo)*: Seleziona l'organizzazione associata all'account email sorgente.
    - **Platform** *(a seconda del tipo)*: Seleziona la piattaforma associata all'account email sorgente.
    - **Service** *(a seconda del tipo)*: Seleziona il servizio associato all'account email sorgente.
    - **Advanced settings** > **Delegation account ID** *(a seconda del tipo)*: Quando l'account email che stai migrando è un account condiviso, devi inserire l'indirizzo email dell'account amministratore su questo account di delega.<br><br>

- **Destination account**
    - **Account type**: Seleziona il tipo di account di destinazione.
    - **E-mail**: Inserisci l'indirizzo email di destinazione.
    - **Password**: Inserisci la password associata all'account di destinazione.
    - **Server URL** / **Server domain** *(a seconda del tipo)*: Inserisci il nome host del server email associato all'account email di destinazione.
    - **OVHcloud Account ID** *(a seconda del tipo)*: Questo campo viene automaticamente compilato quando sei connesso a un account OVHcloud. Per ulteriori informazioni, consulta la sezione "[Migrare tramite una connessione all'account cliente OVHcloud](#sso-migration)".
    - **Organization** *(a seconda del tipo)*: Seleziona l'organizzazione associata all'account email di destinazione.
    - **Platform** *(a seconda del tipo)*: Seleziona la piattaforma associata all'account email di destinazione.
    - **Service** *(a seconda del tipo)*: Seleziona il servizio associato all'account email di destinazione.
    - **Advanced settings** > **Delegation account ID** *(a seconda del tipo)*: Quando l'account email di destinazione è un account condiviso, devi inserire l'indirizzo email dell'account amministratore su questo account di delega.<br><br>

- **Start of transfer**: Puoi avviare la migrazione `Immediately` o selezionare `Later` per rimandarla. La migrazione differita ti permette di attivarla automaticamente a una data e un'ora che definisci.
- **Data to transfer**: In base al tipo di account email che stai migrando e all'account di destinazione, questa sezione ti indicherà i diversi tipi di dati supportati durante la migrazione. Questo dipende dall'account sorgente e dall'account di destinazione.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Se stai migrando un account che dispone di funzionalità che l'account di destinazione non possiede, **sarà necessario salvare autonomamente gli elementi che non potranno essere migrati da OMM**. Per aiutarti, consulta la nostra guida "[Migrare manualmente la tua email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

Una volta completati i parametri degli account sorgente e di destinazione, clicca su:

- `Migrate and add another account`{.action} se desideri aggiungere un'altra migrazione all'elenco del tuo progetto.
- `Migrate my account`{.action} per avviare la migrazione configurata e tornare all'home del progetto.

### Migrare tramite una connessione all'account cliente OVHcloud <a name="sso-migration"></a>

Durante una migrazione verso o da un account OVHcloud, è possibile selezionare una delle nostre offerte `MX plan`, `Email Pro`, `Exchange` o `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Quando si seleziona una di queste offerte, segui le seguenti fasi:

> [!tabs]
> **Passo 1**
>>
>> - Clicca su `Login`{.action} per visualizzare la finestra di accesso allo Spazio Cliente OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> Connetti l'account cliente OVHcloud:
>>
>> - Inserisci l'identificativo o l'indirizzo email associato all'account OVHcloud, inserisci la password corrispondente e clicca su `Login`{.action} ;
>> - o clicca su `Continue`{.action} se sei già identificato.
>>
>> > [!primary]
>> >
>> > L'account cliente OVHcloud deve essere associato all'offerta email che è oggetto della migrazione.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Passo 3**
>>
>> - Si aprirà una nuova finestra. Ti permette di autorizzare OMM ad accedere alle funzioni del tuo spazio cliente e di elencare le offerte e gli account email presenti. Per default, la validità (Validity) di questi diritti è di 24 ore (1 day). Definisci la durata di validità che ti conviene, quindi clicca su `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Passo 4**
>>
>> - Ora sarai in grado di selezionare i tuoi servizi e account tramite menu a discesa. Questo facilita la ricerca degli elementi e permette di evitare errori di digitazione. È tuttavia necessario inserire la password associata all'account email selezionato.
>>
>> Esempio con un servizio Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> È possibile disconnettere gli accessi in corso da uno Spazio Cliente OVHcloud cliccando su `Log out`{.action}, quindi sotto la dicitura `OVHcloud account ID` clicca su `Log out of the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Seguire un progetto di migrazione <a name="follow-migration"></a>

Esistono due modi per accedere al monitoraggio del progetto di migrazione:

- Nell'email ricevuta al momento della creazione del tuo progetto, troverai un link che ti permette di accedere alla pagina di accesso del progetto con  il `Project ID` precompilato. Solo la `Project password` deve essere inserita.
- Dalla pagina iniziale di [OMM](/links/web/omm), clicca su `Track a migration`{.action}. Inserisci successivamente il tuo `Project ID` e la tua `Project password`.

Clicca quindi su `Connect to project`{.action} per accedere alla pagina iniziale del progetto e seguire le tue migrazioni.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Da questa pagina, troverai l'elenco delle migrazioni in corso o pianificate. Lo stato del progetto viene visualizzato anche a destra.

Clicca sul pulsante `⋮`{.action} a destra della riga di una migrazione per visualizzare le Opzioni:

- `See more details`{.action}: Verrai reindirizzato verso una pagina che ti permette di seguire l'avanzamento di una migrazione e di leggere il rapporto una volta completata la migrazione.
- `Cancel migration`{.action}: Permette di annullare la migrazione in corso. Gli elementi già migrati verranno conservati sull'account di destinazione.
- `Delete migration data (GDPR)`{.action}: Questa opzione attiva l'eliminazione di tutti i dati relativi alla migrazione dell'account. Conserverai comunque le informazioni riguardanti gli eventi verificatisi durante la migrazione.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Esempio di monitoraggio della migrazione:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Se si verifica un errore durante la migrazione, ti verrà fornito un link al registro degli errori nella finestra `See more details`{.action}.

## Per saperne di più

[Migrare manualmente la tua email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrare un indirizzo email MX Plan verso un account Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).