---
title: 'Migrare un indirizzo email MX Plan verso un account Zimbra OVHcloud'
excerpt: 'Scopri come migrare un indirizzo email MX Plan verso un account Zimbra OVHcloud'
updated: 2025-05-22
---

## Obiettivo

Nell'ambito della transizione progressiva degli account MX Plan verso Zimbra, è possibile anticipare questa migrazione e trasferire autonomamente gli account email prima dell'installazione di uno strumento automatizzato da parte di OVHcloud. Questa guida ti mostra come effettuare manualmente il trasferimento.

**Scopri come migrare un indirizzo email MX Plan verso un account Zimbra OVHcloud.**

## Prerequisiti

- Disporre di un indirizzo email MX Plan (tramite offerta MX Plan o inclusa in una soluzione di [hosting Web OVHcloud](/links/web/hosting)).
- Disporre di un account email Zimbra OVHcloud.
- **Non aver configurato il reindirizzamento sull’indirizzo email MX Plan da migrare**.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

> [!warning]
>
> Se il tuo account di posta gestisce informazioni sensibili o riscontri problemi durante la migrazione, ti consigliamo di aspettare l'installazione del tool di automazione nello Spazio Cliente OVHcloud.

La migrazione da un account MX Plan a un account Zimbra avviene in 2 fasi. Per evitare l’interruzione della ricezione sull’indirizzo email di origine, è necessario attenersi alla seguente procedura:

1. **Trasferisci il contenuto dell'account MX Plan verso un account Zimbra**
    - [1.1 - Creazione di un indirizzo email Zimbra](#step11)
    - [1.2 - Migrazione delle email con OVH Mail Migrator](#step12)
    - [1.3 - Backup delle email dell'account sorgente (facoltativo)](#step13)
2. **Elimina l'account MX Plan originale e riassegna il suo indirizzo all'account Zimbra**
    - [2.1 - Elimina il vecchio indirizzo email MX Plan](#step21)
    - [2.2 - Rinomina indirizzo email Zimbra](#step22)

In questo esempio, migramo l’indirizzo `contact@mydomain.ovh`. Per farlo, creeremo l’account Zimbra con il nome `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1.1 - Creazione di un indirizzo email Zimbra <a name="step11"></a>

> [!primary]
>
> Se disponi già di un indirizzo email Zimbra, accedi alla [Migrazione delle email con OVH Mail Migrator](#step12).

Per prima cosa è necessario creare un indirizzo email con un nome provvisorio. Ad esempio, è possibile creare l’indirizzo `contact2@mydomain.ovh`{.action} se è necessario migrare l’indirizzo `contact@mydomain.ovh`{.action}.

Per creare un indirizzo email Zimbra, consulta la sezione "Creare un account email" della nostra guida [Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### 1.2 - Migrazione delle email con OVH Mail Migrator <a name="step12"></a>

Utilizzare lo strumento di migrazione [**O**VH **M**ail **M**igrator](https://omm.ovh.net/) (**OMM**) per trasferire il contenuto dell’account MX Plan originale verso il nuovo account di destinazione Zimbra, seguendo l’esempio illustrato nel diagramma precedente.

#### Step 1: Accedi a OVH Mail Migrator

Accedi alla pagina [OVH Mail Migrator](https://omm.ovh.net/).

Nella pagina <https://omm.ovh.net/>, nella scheda `Migration`{.action}, clicca su `New migration`{.action}.

![omm](images/omm-migration-create01.png){.thumbnail}

#### Step 2: inserisci le informazioni relative alla migrazione

**Account**

- **Source Account**:
    - **Tipo di server**: Seleziona `Hosted by OVHcloud (Autodetect)` per completare automaticamente le informazioni, ad eccezione della password.
    - **URL del server**: Questo campo viene compilato automaticamente.
    - **Login**: Inserisci l’indirizzo email completo dell’account da migrare (esempio: `contact@mydomain.ovh`).
    - **Password**: Inserisci la password dell’indirizzo email interessato.
- **Destination Account**:
    - **Tipo di server**: Seleziona `Zimbra` per il tipo di server di destinazione.
    -   **Server URL**: Inserisci l’indirizzo del server Zimbra <https://zimbra1.mail.ovh.net>.
    - **Login**: Inserisci l'indirizzo email completo dell'account Zimbra di destinazione (esempio:`contact2@mydomain.ovh`).
    - **Password**: Inserisci la password dell’indirizzo email dell’account Zimbra di destinazione.

**Opzioni**

Seleziona gli elementi da migrare. Alcuni contenuti potrebbero non essere disponibili in base al tipo di server scelto in precedenza.

**Informazioni**

Inserisci un indirizzo email per essere informato sullo stato della migrazione. Selezionare la casella di controllo nella parte inferiore della pagina per accettare i termini e le condizioni di OMM.

![omm](images/omm-migration-create02.png){.thumbnail}

#### Step 3: Avvia la migrazione

Verifica che tutte le informazioni siano corrette e clicca su `Start migration`{.action}. Visualizzi una tabella con tutti i dettagli della migrazione. Conserva `Migration ID`{.action} visualizzato e attendi il completamento del processo. Questo ritardo varia in base al numero di elementi da migrare.

#### Step 4: Segui la migrazione

Esistono due modi per accedere al monitoraggio di una migrazione unica:

- Dall'email ricevuta che ti informa sullo stato di avanzamento della migrazione.
- Dalla pagina <https://omm.ovh.net/>: Nella scheda `Migration`{.action}, clicca su `Track/Synchronize`{.action}. Inserisci l’identificativo della migrazione (`Migration ID`{.action}) e l’account di origine (`Source account`{.action}).

![omm](images/omm-migration-track.png){.thumbnail}

La nuova pagina ti permette di seguire l’avanzamento della migrazione. Un messaggio ti indica se il processo sta per iniziare, è in corso o è terminato. A seconda dello stato, sono possibili diverse interazioni:

- `Stop the process`{.action}: Permette di annullare la migrazione. Gli elementi già migrati saranno mantenuti sull’account di destinazione.
- `Delete migrated elements`{.action}: Permette di eliminare gli elementi già migrati verso l’account di destinazione. È possibile cancellare gli elementi da un determinato punto di sincronizzazione.
- `Synchronize`{.action}: Permette di recuperare nuovi elementi non migrati durante una precedente sincronizzazione tra l’account sorgente e l’account di destinazione. Quest’azione equivale ad una migrazione degli elementi mancanti sull’account di destinazione rispetto all’account sorgente.

Per effettuare una migrazione per file o multipli, consulta le sezioni "Migrazione per file" e "Realizzare e seguire una migrazione multipla (modalità progetto)" della nostra guida "[Migrare account email tramite OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> I tempi di migrazione variano in base al volume di dati e possono variare da pochi minuti a diverse ore. Una volta completata la migrazione, verifica che tutte le email siano state migrate correttamente.

### 1.3 - Backup delle email dell'account sorgente (facoltativo) <a name="step13"></a>

> [!warning]
>
> Prima di eliminare il tuo account MX Plan, effettua un backup delle tue email** per evitare qualsiasi perdita di dati.

Utilizza le opzioni di esportazione del client di posta. Nella nostra guida "[Migrare manualmente un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)" troverai i dettagli dell’esportazione manuale di un indirizzo email da un client di posta.

### 2.1 - Elimina il vecchio indirizzo email MX Plan <a name="step21"></a>

Per eliminare l’indirizzo email MX Plan (esempio: `contact@mydomain.ovh`), consulta la nostra guida "[Eliminare un account email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Se stai migrando da un account MX Plan che utilizza la Webmail Zimbra, attendi 5 minuti affinché l’eliminazione diventi effettiva prima di rinominare il secondo account email.

#### 2.2 - Rinomina l’indirizzo email Zimbra <a name="step22"></a>

Dallo Spazio Cliente OVHcloud, accedi al servizio Zimbra Starter e rinomina l’indirizzo del tuo account email Zimbra con il nome dell’account email migrato (ad esempio: `contact2@mydomain.ovh` in `contact@mydomain.ovh`).

### Conclusione <a name="conclusione"></a>

A questo punto, l’intero account email è stato trasferito a Zimbra Starter. Ora puoi utilizzare Zimbra per gestire la tua messaggeria.

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurare un indirizzo email Zimbra su un client di posta](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[FAQ soluzione Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).