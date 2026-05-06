---
title: Prime attivazione di un VPS
excerpt: "Scopri come gestire un VPS nel tuo Spazio Cliente OVHcloud e scopri le prime operazioni da effettuare, tra cui le connessioni remote e le misure di sicurezza"
updated: 2026-01-21
---

## Obiettivo

Un server privato virtuale (VPS) è un server che gestisci completamente.

A differenza di un hosting web gestito, sei responsabile dei seguenti elementi:

- Configurazione: gestire e configurare il tuo server.
- Sicurezza: proteggere il tuo VPS dagli attacchi.
- Manutenzione: mantenere aggiornato e operativo il server.
- Backup: testare regolarmente i backup per garantire la ripristinabilità dei dati.

## Prerequisiti

- Disporre di un'offerta [VPS](/links/bare-metal/vps) attiva nel tuo Spazio Cliente OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [VPS management](/links/control-panel/baremetal-vps)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server Privati Virtuali`{.action} > Seleziona il tuo VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Procedura

Per comprendere l'interfaccia di gestione del tuo VPS e le azioni disponibili nel tuo Spazio Cliente OVHcloud, consulta la nostra [guida dedicata all'utilizzo dello Spazio Cliente OVHcloud per i VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Indice:**

- [Passo 1: Connessione iniziale](#initial-connection)
    - [Distribuzione GNU/Linux](#linuxconnect)
    - [Distribuzione Windows](#winconnect)
- [Passo 2: Utilizzo dell'account root](#rootaccount)
- [Passo 3: Sicurezza del tuo VPS](#secure)
- [Passo 4: Collegamento di un nome a dominio](#domain)

### Passo 1: Connessione iniziale <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

Quando ti connetti al tuo VPS per la prima volta, nota che **l'account con cui ti connetti non è root**.

Presso OVHcloud, per motivi di sicurezza e per proteggere i servizi dei nostri clienti, creiamo automaticamente un **nome utente legato al sistema operativo scelto** al momento dell'ordine.

Il nome utente esatto da utilizzare per la connessione è chiaramente indicato nella tua email di consegna del VPS.

Ad esempio:

- Per **Debian**, il nome utente sarà **debian**.
- Per **Ubuntu**, il nome utente sarà **ubuntu**.
- Per **Rocky Linux**, il nome utente sarà **rocky**.

La password temporanea associata a questo account ti viene inviata tramite un link sicuro nella tua email di consegna.

> [!primary]
> **Nota importante**: durante la **prima connessione**, ti verrà richiesto di **modificare questa password temporanea**.
>
> Una volta modificata la password, **la sessione verrà automaticamente chiusa**. Questo è un comportamento normale. Dovrai quindi **riconnetterti con la tua nuova password**.

```bash
ssh username@IPv4_VPS
```

- Sostituisci "username" con l'utente corrispondente al tuo sistema operativo.
- Sostituisci "IPv4_de_votre_VPS" con l'indirizzo IP indicato nell'email di consegna.

#### Windows: <a name="winconnect"></a>

##### Completare l'installazione di Windows

Una volta installato il sistema operativo Windows, riceverai un'email con il nome utente predefinito `Windows user`.

Dovrai quindi completare il processo di installazione di Windows impostando la lingua, la disposizione della tastiera e la password amministratore.

Questo si effettua nella console VPS KVM: Nella scheda `Home page`{.action}, clicca sul pulsante `...`{.action} accanto al nome del tuo VPS nella sezione **Il tuo VPS** e seleziona `KVM`{.action}.

Troverai maggiori informazioni su questo strumento nella nostra "[guida KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

Per completare la configurazione iniziale del tuo VPS Windows, segui le seguenti fasi scorrendo i tab:

> [!tabs]
> 1. **Impostazioni regionali**
>>
>> Una volta stabilita la sessione KVM, completa la configurazione iniziale di Windows impostando il tuo **paese/regione**, la **lingua preferita di Windows** e la **disposizione della tastiera**. Clicca quindi sul pulsante `Avanti`{.action} in basso a destra.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Password amministratore**
>>
>> Imposta una password per il tuo account Windows `Administrator`/`admin`, confermala, quindi clicca su `Fine`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Schermo di accesso**
>>
>> Windows applicherà le tue impostazioni, quindi mostrerà lo schermo di accesso. Clicca sul pulsante `Send CtrlAltDel`{.action} in alto a destra per accedere.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Accesso amministratore**
>>
>> Inserisci la password `Administrator` che hai creato nel passo precedente e clicca sulla `freccia`.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Connessione al server tramite RDP

Sul tuo dispositivo Windows locale, puoi utilizzare l'applicazione client "Connessione Desktop Remoto" per connettersi al VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Inserisci l'indirizzo IPv4 del tuo VPS, quindi il tuo identificativo e la password. Di norma, appare un messaggio di avvertimento che ti chiede di confermare la connessione a causa di un certificato sconosciuto. Clicca su `Sì`{.action} per connettersi.

Puoi anche utilizzare un'altra applicazione di terze parti compatibile con RDP. Questa condizione è richiesta se Windows non è installato sul tuo dispositivo locale.

> [!primary]
>
Se riscontri problemi con questa procedura, verifica che le connessioni remote (RDP) siano abilitate sul tuo dispositivo controllando le impostazioni di sistema, le regole del firewall e le possibili restrizioni di rete.
>

Per facilitare la diagnosi in caso di problemi, ti consigliamo **di abilitare i log di avvio di Windows** seguendo la nostra [guida dedicata](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Passo 2: Utilizzo dell'account root (facoltativo ma consigliato) <a name="rootaccount"></a>

L'utente root è disattivato per default per la sicurezza del tuo prodotto.

Per le attività di amministrazione, utilizza sudo dal tuo utente principale:

```bash
sudo comando
```

Se desideri abilitare root:

```bash
sudo passwd root
```

### Passo 3: Sicurezza del tuo VPS <a name="secure"></a>

Se desideri proteggere il tuo VPS, ti invitiamo a seguire la nostra guida "[Sicurezza di un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)". Questa guida ti accompagna passo dopo passo e dettaglia in particolare le seguenti azioni:

- Aggiornare il sistema.
- Modificare la porta di ascolto SSH predefinita.
- Configurare il firewall interno.
- Installare fail2ban per bloccare i tentativi di accesso ripetuti.
- Eseguire il backup del tuo sistema e dei dati.

### Passo 4: Collegamento di un nome a dominio (facoltativo ma consigliato) <a name="domain"></a>

L'attivazione del tuo VPS passa generalmente attraverso l'utilizzo e la configurazione di un nome a dominio. 

A tale scopo, ti consigliamo di effettuare le seguenti azioni:

- [Modificare la zona DNS](/pages/web_cloud/domains/dns_zone_edit) aggiungendo le voci necessarie per indirizzare il dominio all'indirizzo IPv4 del tuo VPS.
- [Attivare un certificato SSL gratuito (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate) per proteggere l'accesso ai tuoi siti web tramite HTTPS.

## Per saperne di più

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduzione al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sicurezza di un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Come recuperare l'accesso al server in caso di perdita della password utente](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Contatta la nostra [Community di utenti](/links/community).