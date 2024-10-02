---
title: Iniziare a utilizzare un VPS
excerpt: Come gestire un VPS dallo Spazio Cliente OVHcloud e scopri gli step iniziali del suo utilizzo, incluse le connessioni remote e le misure di sicurezza
updated: 2024-10-01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un server privato virtuale (VPS) è un server dedicato virtualizzato che offre grande flessibilità e un maggiore controllo rispetto alle soluzioni di hosting Web tradizionali. A differenza delle soluzioni di hosting gestite da OVHcloud, in cui le attività di gestione sono prese in carico, l’amministrazione di un VPS è interamente di vostra responsabilità. L'amministratore di sistema è responsabile della configurazione, della manutenzione e della protezione del server per garantirne il corretto funzionamento e l'affidabilità.

**Scopri le informazioni necessarie per muovere i primi passi nel tuo VPS.**

## Prerequisiti

- Disporre di un [VPS](/links/bare-metal/vps) nello Spazio Cliente OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Sommario

- [Interfaccia del Pannello di controllo](#controlpanel)
- [Funzioni VPS disponibili nella scheda "Home page"](#hometab)
- [Connessione al VPS](#connect)
    - [Distribuzione GNU/Linux](#linuxconnect)
    - [Distribuzione Windows](#winconnect)
- [Metti in sicurezza il tuo VPS](#secure)
- [Associa un dominio](#domain)

Accedi allo [Spazio Cliente OVHcloud](/links/manager), sezione `Bare Metal Cloud`{.action} e seleziona il server nella sezione `Server privati virtuali`{.action}.

<a name="controlpanel"></a>

### Interfaccia del Pannello di controllo

La scheda `Home`{.action} contiene informazioni importanti sul tuo servizio e ti permette di effettuare operazioni essenziali.

![VPS Home](images/vpshome.png){.thumbnail}

#### Il tuo VPS <a name="yourvps"></a>

Qui sotto trovi le informazioni di base sul tuo VPS e lo stato del servizio. Fare clic sulle schede seguenti per visualizzare i dettagli.

> [!tabs]
> Nome
>>
>> Per personalizzare il nome del VPS, clicca sul pulsante `...`{.action} e seleziona `Cambia nome`{.action}. Questa funzionalità è utile per facilitare la navigazione nello Spazio Cliente quando si gestiscono più servizi VPS. Il nome interno del servizio rimane però nel formato *vps-XXXXXXX.vps.ovh.net*.
>>
> Boot
>>
>> La modalità di avvio indicata è in **modalità normale**, in cui il server carica il sistema operativo installato (*LOCAL*), o in **modalità rescue**, fornita da OVHcloud in caso di risoluzione dei problemi. Utilizza il pulsante `...`{.action} per [riavviare il VPS](#reboot-current-range) o avvialo in modalità Rescue se necessario.
>>
>> Se necessario, consulta la nostra guida sul [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Distribuzione
>>
>> È il sistema operativo installato. Utilizza il pulsante `...`{.action} per [reinstallare lo stesso sistema operativo o selezionarne un altro tra le opzioni disponibili](#reinstallvps).
>>
>> > [!warning]
>> >
>> > La reinstallazione comporta la cancellazione di tutti i dati salvati sul VPS (ad eccezione dei dischi aggiuntivi).
>>
>> > [!primary]
>> >
>> > Se hai ordinato un VPS **Windows**, puoi scegliere solo un OS Windows per la reinstallazione. Se Windows non è stato selezionato al momento dell'ordine, non potrà essere installato dopo la consegna del VPS.
>>
>>
>> Una volta installato il sistema, è necessario implementare gli aggiornamenti di sicurezza. Per maggiori informazioni [qui di seguito](#reinstallvps) e consulta la nostra guida "[Proteggere un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Zona/Localizzazione
>>
>> Queste sezioni forniscono informazioni sulla localizzazione del VPS. Può essere utile per identificare e valutare gli eventuali impatti sul servizio, come quelli menzionati nelle [relazioni sugli incidenti o sulla manutenzione](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### La tua configurazione

Fare clic sulle schede seguenti per visualizzare i dettagli di questa sezione.

> [!tabs]
> Modello
>>
>> Questo elemento indica il riferimento commerciale che identifica il modello di VPS corrispondente alle [offerte VPS sul nostro sito](/links/bare-metal/vps).
>>
> vCore / Memoria / Storage
>> 
>> Le risorse correnti del VPS vengono mostrate qui e possono essere aggiornate separatamente cliccando sul pulsante corrispondente. Ti ricordiamo che gli aggiornamenti sono limitati dal modello di VPS scelto e possono essere disponibili soltanto passando a una [gamma superiore](/links/bare-metal/vps).
>>
> Dischi aggiuntivi
>>
>> Aggiungi dischi supplementari al tuo VPS per aumentare la capacità di storage del tuo server oltre quella inclusa nella configurazione iniziale. che permettono, ad esempio, di salvare i dati di backup.

#### IP

Fare clic sulle schede seguenti per visualizzare i dettagli di questa sezione.

> [!tabs]
> IPv4
>>
>> L'indirizzo IPv4 pubblico principale del VPS viene configurato automaticamente al momento dell'installazione. Per maggiori informazioni sulla gestione degli IP, consulta la nostra guida [Configuring IP aliasing](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> In questa sezione è possibile visualizzare l'indirizzo IPv6 pubblico e l'indirizzo del gateway associato. che vengono associati automaticamente al VPS durante l’installazione. Per maggiori informazioni, consulta [questa guida](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> DNS secondario
>>
>> Questa funzionalità è utile per ospitare i servizi DNS. La nostra guida [Configurare il DNS secondario di OVHcloud su un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) lo descrive in dettaglio.

#### Backup

Queste opzioni si riferiscono a servizi VPS aggiuntivi ordinabili dallo Spazio Cliente.

> [!tabs]
> Snapshot
>>
>> Uno Snapshot su un VPS è un backup istantaneo dello stato del server, che permette di ripristinare rapidamente il sistema in caso di problemi. L’opzione `Snapshot` permette di creare uno Snapshot manuale come unico punto di ripristino.
>>
> Backup automatizzato
>>
>> L’opzione `Backup automatizzato` permette di programmare backup regolari del VPS. A differenza degli Snapshot manuali, questa funzionalità conserva diversi punti di ripristino nel tempo, offrendoti una protezione continua e automatica dei dati (esclusi i dischi aggiuntivi).

Tutte le informazioni sulle soluzioni di backup disponibili per il servizio sono disponibili nella [pagina dei prodotti VPS](/links/bare-metal/vps-options) e nelle nostre [guide rispettive](/products/bare-metal-cloud-virtual-private-servers-backup).

#### Abbonamento

In queste sezioni vengono fornite le informazioni più importanti relative alla fatturazione del servizio. Tutte le informazioni su questo argomento sono disponibili nella [documentazione corrispondente](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funzioni VPS disponibili nella scheda "Home"

> [!warning]
>
> OVHcloud mette a disposizione i servizi di cui si occupa la configurazione e la gestione. È quindi vostra responsabilità assicurarvi che funzionino correttamente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) o di contattare [nostra community](/links/community) in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o all'implementazione dei servizi su un server.
>

#### Reinstalla il tuo VPS <a name="reinstallvps"></a>

La reinstallazione del VPS può essere effettuata direttamente dallo Spazio Cliente. Clicca sul pulsante `...`{.action} a destra di `OS / Distribuzione`{.action} e seleziona `Reinstalla il tuo VPS`{.action}.

![VPSnewreinstallation](images/2023panel_01.png){.thumbnail}

Nella nuova finestra, seleziona un sistema operativo dall’elenco a discesa. Le opzioni proposte sono [immagini compatibili con un VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) e sono subito operative dopo l'installazione.

È inoltre possibile selezionare una **chiave SSH** da installare sul sistema, se in precedenza ne era stata archiviata una nello [Spazio Cliente OVHcloud](/links/manager). Per maggiori informazioni su questo argomento, consulta la nostra guida "[Creare e utilizzare chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)".  
Se hai selezionato una chiave SSH e non hai bisogno di un identificativo e di una password per accedere, spunta la casella `Non voglio ricevere via email i codici di autenticazione del mio VPS.`.

> [!warning]
>
> La reinstallazione formatterà tutti i dischi del server. Prima di continuare, ti consigliamo di creare uno Snapshot del tuo VPS, per poter ripristinare lo stato precedente in caso di problemi.
>

> [!primary]
>
> **Licenze**
>
> Alcuni sistemi operativi o piattaforme proprietarie, come Plesk o cPanel, richiedono licenze che generano spese aggiuntive. Le licenze possono essere gestite dallo Spazio Cliente: accedi alla sezione `Bare Metal Cloud`{.action} e clicca su `Licenze`{.action} nella barra di navigazione a sinistra.
>
> Per avere un sistema operativo **Windows** funzionante su un VPS, è necessario **selezionare nel processo di ordine**. Un VPS con un altro OS installato non può essere reinstallato con Windows nel modo descritto sopra.
>

Il processo di reinstallazione potrebbe richiedere alcuni minuti.

#### Riavvia il VPS <a name="reboot-current-range"></a>

Potrebbe essere necessario riavviare il sistema per applicare configurazioni aggiornate o risolvere un problema. Se possibile, riavviare il software dall'interfaccia grafica del server (Windows, Plesk, ecc.) o dalla riga di comando:

```bash
sudo reboot
```

È comunque possibile effettuare un "riavvio hardware" in qualsiasi momento dallo [Spazio Cliente OVHcloud](/links/manager). Nella scheda `Home`{.action}, clicca su `...`{.action} accanto a `Boot` nella sezione **Il tuo VPS**. Seleziona `Riavvia il tuo VPS`{.action} e clicca su `Conferma`{.action} nella finestra che appare.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Accedi al tuo VPS

> [!warning]
>
> Per motivi di sicurezza, al momento della prima connessione al VPS è necessario modificare la password ricevuta via email e sostituirla con una nuova. Una volta apportata la modifica, è possibile che l’interfaccia utilizzata (ad esempio Putty) si chiuda automaticamente per procedere alla disconnessione. Dopodiché, effettua nuovamente l’accesso con la nuova password.
>

Durante la prima installazione o la reinstallazione dal Pannello di controllo, viene creato automaticamente un utente con autorizzazioni elevate. Questo utente verrà nominato in base al sistema operativo, ad esempio "ubuntu" o "rocky".

A questo punto, riceverai un’email con il nome utente e la password necessari per accedere al tuo VPS in SSH. SSH è un protocollo di comunicazione sicuro, utilizzato per stabilire connessioni criptate verso un host remoto.

La maggior parte dei sistemi operativi desktop attuali dispone di un client **Open SSH** preinstallato. Le credenziali di accesso consentono quindi di stabilire rapidamente una connessione al VPS nell'applicazione da riga di comando appropriata (`Terminal`, `Command prompt`, `Powershell`, ecc...). Immettere il comando seguente:

```bash
ssh username@IPv4_VPS
```

Esempio:

```bash
ssh ubuntu@203.0.113.101
```

È inoltre possibile utilizzare qualsiasi applicazione di terze parti compatibile con **Open SSH**.

<a name="linuxconnect"></a>

#### Distribuzione GNU/Linux

Una volta effettuato l’accesso, è possibile sostituire la password predefinita dell’utente corrente con una forte frase segreta utilizzando questo comando:

```bash
passwd
```

In una distribuzione GNU/Linux, **il prompt della password non mostrerà le voci della tastiera**.

Digita la password corrente e clicca su `Enter`{.action}. Digitare la nuova frase segreta e quindi ridigitarla al prompt successivo per confermarla.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Attivazione dell'account utente root**
>
> Non è necessario utilizzare l'account utente "root" per avviare l'amministrazione del server. Per utilizzare questo account, è necessario che sia stato abilitato nel sistema operativo del server. Inoltre, per motivi di sicurezza, le connessioni SSH con l’utente "root" sono **disattivate** di default.
> 
Se non diversamente specificato, tutte le operazioni di amministrazione descritte nella nostra documentazione possono essere effettuate dall’account utente predefinito, ovvero digitando `sudo` seguito dal relativo ordine. Per saperne di più su questo argomento, consulta la nostra guida su [Configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

**Di seguito sono riportati i passaggi consigliati**:

- Familiarizzare con le connessioni SSH consultando la nostra guida [Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Utilizza le chiavi SSH come metodo avanzato e più pratico per le connessioni remote: questa guida ti mostra come [creare e utilizzare le chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).
- Utilizza la nostra guida [Proteggere un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) per proteggere il sistema da attacchi automatici di *brute force* e da altre minacce comuni.

> [!primary]
>
Ti ricordiamo che se hai selezionato una **distribuzione con applicazione** (Plesk, cPanel, Docker), le misure di sicurezza generiche potrebbero non essere applicabili al tuo sistema. Per maggiori informazioni, consulta le nostre guide [Iniziare a utilizzare le applicazioni preinstallate](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) e [Distribuire cPanel su un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), oltre alla documentazione ufficiale del produttore.
>

<a name="winconnect"></a>

#### VPS Windows

##### Step 1: completa l'installazione di Windows

Una volta installato il sistema operativo Windows, riceverai un’email con il nome dell’account utente predefinito `Windows user`.

Successivamente, sarà necessario completare il processo di installazione di Windows impostando la lingua di visualizzazione, il layout di tastiera e la password amministratore.

Per effettuare questa operazione, clicca sul pulsante `...`{.action} accanto al nome del tuo VPS nella sezione [Il tuo VPS](#yourvps) e seleziona `KVM`{.action}. Per maggiori informazioni su questo strumento, consulta la nostra [guida KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

Per completare la configurazione iniziale di un VPS Windows, esegui i passaggi seguenti nelle schede:

> [!tabs]
> 1. **Impostazioni internazionali**
>>
>> Una volta stabilita la sessione KVM, è possibile completare la configurazione iniziale di Windows configurando il proprio **paese**, la **lingua Windows** preferita e il **layout di tastiera**. Clicca sul pulsante `Avanti`{.action} in basso a destra.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Password amministratore**
>>
>> Definisci una password per il tuo account Windows `Administrator` / `admin` e confermala, poi clicca su `Termina`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Schermata di connessione**
>>
>> Windows applicherà le impostazioni e visualizzerà la schermata di accesso. Clicca sul pulsante `Send CtrlAltDel`{.action} in alto a destra per accedere.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login amministratore**
>>
>> Immettere la password `Administrator` creata nel passaggio precedente e fare clic sulla `freccia`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>


##### Step 2: accedi al server con RDP

Sul dispositivo Windows locale, è possibile utilizzare l'applicazione client `Remote Desktop Connection` per connettersi al VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Inserisci l’indirizzo IPv4 del VPS, l’identificativo e la password. In genere viene visualizzato un messaggio di avviso che richiede di confermare la connessione a causa di un certificato sconosciuto. Fare clic su `Sì`{.action} per accedere.

È inoltre possibile utilizzare qualsiasi applicazione di terze parti compatibile con RDP. Questa condizione è necessaria se Windows non è installato nel dispositivo locale.

> [!primary]
>
In caso di problemi con questa procedura, verificare che sul dispositivo siano consentite connessioni remote (RDP) verificando le impostazioni di sistema, le regole firewall e le eventuali restrizioni di rete.
>

##### Attivazione dei registri di avvio di Windows (facoltativo)

I registri di avvio di Windows possono essere utili per la diagnostica degli errori del server.

Per attivarli, segui i passaggi seguenti scorrendo le schede:

> [!tabs]
> 1. **Connettersi al server**
>>
>> Connettersi al server tramite desktop remoto o sessione [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Apri l'utility "Esegui"**
>>
>> Apri il menu Start di Windows e clicca su `Esegui`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Apri "msconfig"**
>>
>> Inserisci "msconfig" e clicca su `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Attiva i log**
>>
>> Nella nuova finestra, seleziona l’opzione log accanto a `Boot log`. Clicca su `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Al successivo avvio del server, i log verranno salvati in un file `.txt`. Il percorso del file è `C:\Windows\ntbtlog.txt`.

Per accedere al contenuto di questo file in modalità Rescue, segui le indicazioni descritte nella [guida sulla modalità Rescue del VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue).


<a name="secure"></a>

### Metti in sicurezza il tuo VPS

In qualità di amministratore del VPS, sei responsabile della sicurezza delle applicazioni e dei dati in esso ospitati.

Per maggiori informazioni sulla protezione del sistema, consulta la nostra guida [Proteggere un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

> [!primary]
>
Ti ricordiamo che se hai selezionato una **distribuzione con applicazione** (Plesk, cPanel, Docker), le misure di sicurezza generiche potrebbero non essere applicabili al tuo sistema. Per maggiori informazioni, consulta le nostre guide [Iniziare a utilizzare le applicazioni preinstallate](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) e [Distribuire cPanel su un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel), oltre alla documentazione ufficiale del produttore.
>

<a name="domain"></a>

### Associa un dominio

Il passaggio del VPS sul Web avviene generalmente attraverso l'attribuzione di un dominio e la sua configurazione DNS. Per maggiori informazioni sulla gestione dei domini in OVHcloud, consulta la nostra guida [Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

#### Proteggi un dominio con un certificato SSL

Una volta configurato il VPS, è utile proteggere anche il dominio e il sito Web. Per effettuare questa operazione è necessario disporre di un certificato SSL che consenta l’accesso a Internet del VPS tramite *HTTPS* anziché tramite *HTTP* non protetto.

Questo certificato SSL può essere installato manualmente, direttamente sul VPS. Consulta la documentazione ufficiale della tua distribuzione VPS.

Per un processo più automatizzato, OVHcloud propone anche la soluzione SSL Gateway. Per maggiori informazioni, consulta la [pagina relativa al prodotto](/links/web/ssl-gateway) o la nostra [guida](/products/web-cloud-ssl-gateway).

## Per saperne di più

[FAQ VPS](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Mettere in sicurezza un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
