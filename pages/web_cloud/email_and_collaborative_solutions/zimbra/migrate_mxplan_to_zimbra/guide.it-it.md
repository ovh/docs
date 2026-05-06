---
title: 'Migrare un indirizzo e-mail MX Plan verso un account Zimbra OVHcloud'
excerpt: 'Scopri come migrare un indirizzo e-mail MX Plan verso un account Zimbra OVHcloud'
updated: 2026-04-10
---

## Obiettivo

Per fare evolvere il tuo servizio e-mail MX Plan verso un servizio [Zimbra OVHcloud](/links/web/zimbra), puoi utilizzare lo strumento [**O**VH **M**ail **M**igrator](/links/web/omm) per effettuare la tua migrazione.

**Scopri come migrare un indirizzo e-mail MX Plan verso un account Zimbra OVHcloud.**

## Prerequisiti

- Disporre di un indirizzo e-mail MX Plan (tramite il servizio MX Plan o incluso in una soluzione di [hosting Web OVHcloud](/links/web/hosting)).
- Disporre di un account e-mail Zimbra OVHcloud.
- **Non aver configurato alcun reindirizzamento sull'indirizzo e-mail MX Plan che si desidera migrare**.

<!-- CP-NAV-START:web-zimbra -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zimbra](/links/control-panel/web-zimbra)
- **Per accedere ai tuoi servizi:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Procedura

> [!warning]
>
> Se il tuo account e-mail gestisce informazioni sensibili o se riscontri problemi durante la migrazione, ti consigliamo di attendere la messa in funzione dello strumento di automazione nello Spazio Cliente OVHcloud.

La migrazione di un account e-mail MX Plan verso un account e-mail Zimbra avviene in 2 fasi. Per evitare di interrompere la ricezione sull'indirizzo e-mail di origine, è necessario seguire il seguente processo:

1. **[Trasferire il contenuto dell'account MX Plan verso un account Zimbra](#step1)**
    - [1.1 - Creazione di un indirizzo e-mail Zimbra](#step11)
    - [1.2 - Migrazione delle e-mail con OVHcloud Mail Migrator](#step12)
    - [1.3 - Backup delle e-mail dell'account di origine (facoltativo)](#step13)
2. **[Eliminare l'account MX Plan originale e riassegnare il suo indirizzo all'account Zimbra](#step2)**
    - [2.1 - Eliminazione del vecchio indirizzo e-mail MX Plan](#step21)
    - [2.2 - Rinominare l'indirizzo e-mail Zimbra](#step22)

Nell'esempio seguente, migriamo l'indirizzo `contact@mydomain.ovh`. Per farlo, creeremo l'account Zimbra con il nome `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Trasferire il contenuto dell'account MX Plan verso un account Zimbra <a name="step1"></a>

#### 1.1 - Creazione di un indirizzo e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Se disponi già di un indirizzo e-mail Zimbra, vai alla sezione [Migrazione delle e-mail con OVHcloud Mail Migrator](#step12).

Crea innanzitutto un indirizzo e-mail con un nome provvisorio. Ad esempio, puoi creare l'indirizzo `contact2@mydomain.ovh` se devi migrare l'indirizzo `contact@mydomain.ovh`.

Per creare un indirizzo e-mail Zimbra, consulta la sezione "Creare un account e-mail" della nostra guida [Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - Migrazione delle e-mail con OVHcloud Mail Migrator <a name="step12"></a>

Utilizza lo strumento di migrazione [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**) per trasferire il contenuto dell'account MX Plan di origine verso il nuovo account di destinazione Zimbra, riprendendo l'esempio illustrato nello schema precedente.

La migrazione con OMM avviene in 3 step: creare un progetto, configurare la migrazione e seguire il suo avanzamento. Clicca su ciascuna scheda per visualizzare le istruzioni corrispondenti.

> [!tabs]
> **Step 1**
>>
>> **Creare un progetto di migrazione**
>>
>> Accedi a <https://omm.ovhcloud.com/> e clicca su `Nuova migrazione`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Indirizzo e-mail di contatto del progetto**: Inserisci un indirizzo e-mail che riceverà le credenziali di accesso e le notifiche di monitoraggio. Non utilizzare un indirizzo che verrà migrato in questo progetto.
>> - **Password del progetto**: Definisci una password (minimo 10 caratteri, con almeno 1 carattere speciale, 1 cifra, 1 lettera maiuscola e 1 lettera minuscola).
>>
>> Clicca su `Crea il mio progetto`{.action}. Riceverai un'e-mail di conferma contenente l'identificativo unico del progetto.
>>
> **Step 2**
>>
>> **Accedere al progetto e creare la migrazione**
>>
>> Dalla pagina principale di [OMM](/links/web/omm), clicca su `Seguire una migrazione`{.action}, inserisci l'`Identificativo del progetto` e la `Password del progetto`, poi clicca su `Connettersi al progetto`{.action}.
>>
>> Clicca quindi su `Nuova migrazione`{.action} per configurare la tua migrazione:
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Account di origine**:
>>     - **Tipo di account**: Seleziona `OVHcloud`, poi scegli `MX Plan` o `Rilevamento automatico`. Clicca su `Connettersi`{.action} per identificarti con il tuo account OVHcloud e selezionare automaticamente il servizio e l'indirizzo da migrare (esempio: `john.smith@mydomain.ovh`). Inserisci poi la password di questo account e-mail.
>> - **Account di destinazione**:
>>     - **Tipo di account**: Seleziona `OVHcloud`, poi scegli `Zimbra`. Clicca su `Connettersi`{.action} per identificarti con il tuo account OVHcloud e selezionare il servizio Zimbra e l'indirizzo di destinazione (esempio: `zimbra2@mydomain.ovh`). Inserisci poi la password di questo account e-mail.
>> - **Dati da trasferire**: Verifica i tipi di dati supportati e deseleziona quelli che non vuoi migrare.
>> - **Inizio del trasferimento**: Scegli `Immediatamente` o seleziona `Più tardi` per pianificare la migrazione a una data e ora definite.
>>
>> Clicca su `Migra il mio account`{.action} per avviare la migrazione.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Step 3**
>>
>> **Seguire la migrazione**
>>
>> Hai due metodi per accedere al monitoraggio del tuo progetto di migrazione:
>>
>> - Dall'e-mail ricevuta al momento della creazione del progetto, tramite il link fornito (l'identificativo del progetto è precompilato).
>> - Dalla pagina principale di [OMM](/links/web/omm): clicca su `Seguire una migrazione`{.action}, inserisci il tuo `Identificativo del progetto` e la tua `Password del progetto`, poi clicca su `Connettersi al progetto`{.action}.
>>
>> Dalla pagina del progetto, clicca sul pulsante `⋮`{.action} a destra della riga della tua migrazione per visualizzare le opzioni:
>>
>> - `Vedi più dettagli`{.action}: Segui il progresso della migrazione e consulta il rapporto una volta completata.
>> - `Annullare la migrazione`{.action}: Annulla la migrazione in corso. Gli elementi già migrati vengono conservati nell'account di destinazione.
>> - `Eliminare i miei dati di migrazione (RGPD)`{.action}: Avvia l'eliminazione di tutti i dati relativi alla migrazione. Le informazioni sugli eventi della migrazione vengono conservate.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

Per ulteriori informazioni sull'utilizzo di OMM, consulta la nostra guida "[Migrare account e-mail tramite OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> Il tempo di migrazione varia in base al volume dei dati e può andare da qualche minuto a diverse ore. Una volta completata la migrazione, verifica che tutte le e-mail siano state migrate correttamente.

#### 1.3 - Backup delle e-mail dell'account di origine (facoltativo) <a name="step13"></a>

> [!warning]
>
> Prima di eliminare il tuo account MX Plan, **esegui un backup delle tue e-mail** per evitare qualsiasi perdita di dati.

Utilizza le opzioni di esportazione del tuo client di posta elettronica. Nella nostra guida "[Migrare manualmente il tuo indirizzo e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)", troverai i dettagli per l'esportazione manuale di un indirizzo e-mail da un client di posta.

### 2 - Eliminare l'account MX Plan originale e riassegnare il suo indirizzo all'account Zimbra <a name="step2"></a>

#### 2.1 - Eliminazione del vecchio indirizzo e-mail MX Plan <a name="step21"></a>

Per eliminare l'indirizzo e-mail MX Plan (esempio: `contact@mydomain.ovh`), segui la nostra guida "[Eliminare un account e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Se stai eseguendo la migrazione da un account MX Plan che utilizza la webmail Zimbra, attendi 5 minuti affinché l'eliminazione sia effettiva prima di rinominare il secondo account e-mail.

#### 2.2 - Rinominare l'indirizzo e-mail Zimbra <a name="step22"></a>

Nel tuo Spazio Cliente OVHcloud, accedi al tuo servizio Zimbra e rinomina l'indirizzo e-mail Zimbra provvisorio con l'indirizzo MX Plan migrato. Riprendendo l'esempio dello step 2 del capitolo 1.2, l'indirizzo provvisorio `zimbra2@mydomain.ovh` verrà rinominato in `john.smith@mydomain.ovh`, che è il suo indirizzo e-mail abituale.

### Conclusione <a name="conclusion"></a>

Il tuo account e-mail è stato migrato a Zimbra. Per completare la configurazione, consulta le guide seguenti:

- [Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Configurare il tuo indirizzo e-mail Zimbra su un client di posta](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Per saperne di più <a name="go-further"></a>

[FAQ sulla soluzione Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
