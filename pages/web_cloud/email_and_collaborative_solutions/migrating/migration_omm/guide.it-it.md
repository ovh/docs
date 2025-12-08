---
title: 'Migrare un account email con OVH Mail Migrator'
excerpt: 'Scopri come migrare i tuoi account di posta elettronica verso OVH grazie al nostro tool OVH Mail Migrator'
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

[OVH Mail Migrator](/links/web/omm) è uno strumento sviluppato da OVHcloud che risponde al bisogno di reversibilità. Consente di migrare i tuoi account email verso le tue email OVHcloud o un servizio email esterno. Il processo supporta diversi tipi di contenuti, come email, contatti, calendari e compiti, purché questi siano compatibili con le tue email.

**Impara a migrare i tuoi account email su OVHcloud utilizzando il nostro strumento OVH Mail Migrator.**

## Prerequisiti

- Disporre di un servizio email esterno o su OVHcloud, come un'offerta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) o MX Plan (solo con l'offerta MX Plan o inclusa in un'offerta di [ospedalità web OVHcloud](/links/web/hosting)).
- Disporre delle credenziali relativi agli account email che si desidera migrare (account email sorgente).
- Disporre delle credenziali relativi agli account email di destinazione.

## Procedura

Per accedere a OMM, vai all'indirizzo <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Creare un progetto di migrazione <a name="create-project"></a>

Prima di avviare una migrazione, è necessario creare un progetto. Questo progetto ti permetterà di avviare una o più migrazioni e seguirle.

Clicca su `New migration`{.action} per iniziare la creazione del tuo progetto:

**Project contact email** : Inserisci un indirizzo email che servirà a ricevere le credenziali e le notifiche di monitoraggio delle tue migrazioni. Non è consigliato inserire uno degli indirizzi email che saranno migrati nel tuo progetto.
**Project password**: Inserisci una password che servirà a connettersi al tuo progetto. Deve contenere almeno 10 caratteri, includere almeno 1 carattere speciale, 1 numero, 1 maiuscola e 1 minuscola.

Clicca su `Create my project`{.action} per avviare la creazione del progetto.

Sull'indirizzo email di contatto del progetto, riceverai un'email di conferma contenente l'identificativo unico del progetto e un link per accedervi.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Il progetto di migrazione e i dati ad esso associati verranno automaticamente eliminati dopo 60 giorni di inattività.

### Creare una migrazione <a name="create-migration"></a>

Una volta creato il tuo progetto, accedi a esso. dalla pagina principale di [OMM](/links/web/omm):

- Clicca su `Track a migration`{.action}.
- Inserisci l'`Project ID` ricevuto via email.
- Inserisci la `Project password` definita alla sua creazione.
- Clicca su `Connect to project`{.action} per completare.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Ora sei sulla pagina principale del progetto che ti permetterà di avviare la tua prima migrazione.

- Clicca su `New migration`{.action} in alto a sinistra del tavolo.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Una nuova pagina si apre su cui definirai le informazioni di connessione al conto sorgente e al conto di destinazione per poter pianificare o avviare direttamente questa migrazione. Ricorda, il contenuto del **source account** verrà migrato verso il **destination account**.

Prima di iniziare la tua migrazione, è importante conoscere bene i 3 tipi di conti che si possono migrare e verso cui puoi migrare:

- **OVHcloud** : l'`Auto detection` è consigliato se devi migrare un conto ospitato su qualsiasi offerta email OVHcloud. Se possiedi un gran numero di conti email OVHcloud, seleziona tra le offerte `MX plan`, `E-mail Pro`, `Exchange` e `Zimbra`. Ti verrà richiesto di connettersi al conto OVHcloud associato all'offerta associata alla migrazione. Per ulteriori informazioni, consulta la sezione « [Migrare tramite una connessione al conto cliente OVHcloud](#sso-migration) ».
- **Others** : si riferiscono a servizi email sottoscritti fuori da OVHcloud, trovi un elenco non esaustivo di servizi email supportati da OMM. Se il tipo di servizio del tuo conto email non è elencato, utilizza i protocolli `Imap` o `Pop`, che sono compatibili con la maggior parte dei server email.
- **Importing files** : È possibile migrare il contenuto di file PST, ICS, CSV e Xml Rules tramite OMM verso un conto email di destinazione. Quando questa funzione è selezionata, basta trascinare e rilasciare il tuo documento nell'area prevista a tale scopo o navigare nel tuo terminale tramite il pulsante `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Completa le informazioni in base al tipo di conto :

- **Source account**
    - **Account type** : seleziona il tipo di conto sorgente.
    - **E-mail** : inserisci l'indirizzo email del conto sorgente.
    - **Password** : inserisci la password del conto sorgente.
    - **URL del server** / **Dominio del server** *(in base al tipo)*: inserisci il nome host del server email associato al conto email che desideri migrare.
    - **OVHcloud Account ID** *(in base al tipo)*: questo campo viene automaticamente compilato quando sei connesso a un conto OVHcloud. Per ulteriori informazioni, consulta la sezione « [Migrare tramite una connessione al conto cliente OVHcloud](#sso-migration) ».
    - **Organization** *(in base al tipo)*: seleziona l'organizzazione associata al conto email sorgente.
    - **Platform** *(in base al tipo)*: seleziona la piattaforma associata al conto email sorgente.
    - **Service** *(in base al tipo)*: seleziona il servizio associato al conto email sorgente.
    - **Advanced settings** > **Delegation account ID** *(in base al tipo)*: Quando il conto email che stai migrando è un conto condiviso, devi inserire l'indirizzo email del conto amministratore su questo conto di delega.
- **Destination account**
    - **Account type** : seleziona il tipo di conto di destinazione.
    - **E-mail** : inserisci l'indirizzo email di destinazione.
    - **Password** : inserisci la password associata al conto di destinazione.
    - **URL del server** / **Dominio del server** *(in base al tipo)*: inserisci il nome host del server email associato al conto email di destinazione.
    - **OVHcloud Account ID** *(in base al tipo)*: questo campo viene automaticamente compilato quando sei connesso a un conto OVHcloud. Per ulteriori informazioni, consulta la sezione « [Migrare tramite una connessione al conto cliente OVHcloud](#sso-migration) ».
    - **Organization** *(in base al tipo)*: seleziona l'organizzazione associata al conto email di destinazione.
    - **Platform** *(in base al tipo)*: seleziona la piattaforma associata al conto email di destinazione.
    - **Service** *(in base al tipo)*: seleziona il servizio associato al conto email di destinazione.
    - **Advanced settings** > **Delegation account ID** *(in base al tipo)*: Quando il conto email di destinazione è un conto condiviso, devi inserire l'indirizzo email del conto amministratore su questo conto di delega.
- **Start of transfer**: puoi avviare la migrazione `immediately` o selezionare `Later` per posticipare la migrazione. La migrazione posticipata ti permette di avviarla automaticamente a una data e un'ora che definisci.
- **Data to transfer**: In base al tipo di conto email che stai migrando e al conto di destinazione, questa sezione ti indicherà i diversi tipi di dati che sono supportati durante la migrazione. Questo dipende dal conto sorgente e dal conto di destinazione.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Se stai migrando un conto che dispone di funzionalità che il conto di destinazione non possiede, sarà necessario salvare da solo gli elementi che non potranno essere migrati da OMM. Per aiutarti, consulta la nostra guida « [Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

Una volta completati i parametri dei conti sorgente e di destinazione, clicca su:

- `Migrate and add another account`{.action} se desideri aggiungere un'altra migrazione nell'elenco del tuo progetto 
- `Migrate my account`{.action} per avviare la migrazione configurata e tornare alla home del progetto.

### Migrare tramite una connessione al conto cliente OVHcloud <a name="sso-migration"></a>

Durante una migrazione verso o da un conto OVHcloud, è possibile selezionare una delle nostre offerte `MX plan`, `E-mail Pro`, `Exchange` e `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Quando selezioni una di queste offerte, segui le seguenti fasi:

> [!tabs]
> **Fase 1**
>>
>> - Clicca su `Login`{.action} per visualizzare la finestra di accesso allo spazio cliente OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Fase 2**
>>
>> Connetti al conto cliente OVHcloud:
>>
>> - Inserisci l'identificativo o l'indirizzo email associato al conto OVhcloud, inserisci la password associata e clicca su `Login`{.action}.
>> - Clicca su `Continue`{.action se sei già identificato.
>>
>> > [!primary]
>> >
>> > Il conto cliente OVHcloud deve essere associato all'offerta email che è oggetto della migrazione.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Fase 3**
>>
>> - Si aprirà una nuova finestra, questa permette di autorizzare OMM ad accedere alle funzioni del tuo spazio cliente elencando le offerte e i conti email presenti. Per default, la validità (Validity) di questi diritti è di 24h (1day). Definisci la temporalità che ti conviene, quindi clicca su `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Fase 4**
>>
>> - Ora sarai in grado di selezionare i tuoi servizi e conti utilizzando i menu a discesa, questo facilita la ricerca degli elementi e eviterà errori di digitazione. È tuttavia necessario inserire la password associata al conto email selezionato.
>>
>> Esempio con un servizio Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> È possibile disconnettere gli accessi in corso da uno spazio cliente OVHcloud cliccando su `Log out`{.action}, quindi sotto la dicitura `OVHcloud account ID` clicca su `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Seguire un progetto di migrazione <a name="follow-migration"></a>

Esistono due modi per accedere al monitoraggio del progetto di migrazione:

- Dal messaggio ricevuto durante la creazione del tuo progetto. Troverai un link che ti permette di accedere alla pagina di accesso al progetto con l'`Project ID` precompilato, solo il `Project password` è da inserire.
- Dalla pagina principale OMM, clicca su `Track a migration`{.action}. Inserisci il tuo `Project ID` e il tuo `Project password`.

Clicca quindi su `Connect to project`{.action} per accedere alla pagina principale del progetto e seguire le tue migrazioni.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Da questa pagina, trovi l'elenco delle migrazioni in corso o pianificate. Lo stato del progetto viene visualizzato anche a destra.

Clicca sul pulsante `⋮`{.action} a destra della riga di una migrazione per visualizzare le opzioni :

- `See more details`{.action}: Verrai reindirizzato verso una pagina che ti permette di seguire l'avanzamento di una migrazione o di leggere il rapporto una volta che questa è terminata
- `Cancel migration`{.action}: Permette di annullare la migrazione in corso. Gli elementi già migrati verranno conservati sul conto di destinazione.
- `Delete migration data (GDPR)`{.action}: questa opzione attiva l'eliminazione di tutti i dati relativi alla migrazione del conto. Conservi comunque le informazioni riguardanti gli eventi verificatisi durante la migrazione.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Esempio di monitoraggio della migrazione :

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Se si verifica un errore durante la migrazione, un link verso il registro degli errori ti viene fornito nella finestra `See more details`{.action}.

## Per saperne di più

[Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrare un indirizzo email MX Plan verso un conto E-mail Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Se desideri beneficiare di un supporto sull'utilizzo e la configurazione delle tue soluzioni OVHcloud, ti proponiamo di consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).