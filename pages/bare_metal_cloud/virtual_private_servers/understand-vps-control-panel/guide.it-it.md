---
title: "VPS - Gestione tramite lo Spazio Cliente OVHcloud"
excerpt: "Scopri come utilizzare lo Spazio Cliente OVHcloud per gestire il tuo VPS: dashboard, reinstallazione, riavvio, backup e configurazione del servizio"
updated: 2026-01-21
---

## Obiettivo

- Comprendere l'interfaccia di gestione dei VPS.
- Identificare le informazioni essenziali.
- Sapere dove effettuare le principali azioni.

## Prerequisiti

- Disporre di un'offerta [VPS](/links/bare-metal/vps) attiva nel tuo Spazio Cliente OVHcloud.

> [!warning]
> Alcune funzionalità VPS menzionate in questa pagina non sono disponibili nelle Local Zones OVHcloud.
>
> Visita la nostra [pagina Web sulle Local Zones](/links/bare-metal/vps-lz) per ulteriori informazioni.

<!-- CP-NAV-START:baremetal-vps -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [VPS management](/links/control-panel/baremetal-vps)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server Privati Virtuali`{.action} > Seleziona il tuo VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## In pratica

Questo manuale ti aiuta a **comprendere l'interfaccia di gestione del tuo VPS nello Spazio Cliente OVHcloud**, a identificare le informazioni essenziali e ad utilizzare le principali azioni disponibili (riinstallazione, riavvio, backup, configurazione).

**Indice:**

- [Dashboard](#controlpanel)
- [Il tuo VPS](#myvps)
- [La tua configurazione](#myconf)
- [IP](#ip)
- [Backup](#save)
- [Il mio servizio](#myoffer)
- [Riavvia il tuo VPS](#rebootvps)
- [Riinstalla il tuo VPS](#reinstallvps)

### Dashboard <a name="controlpanel"></a>

L'etichetta `Home page`{.action} costituisce la **dashboard principale** del tuo VPS.

Riunisce le **informazioni chiave sul servizio** e fornisce l'accesso alle **azioni essenziali di gestione**.

![VPS Home](images/vpshome.png){.thumbnail}

#### Il tuo VPS <a name="myvps"></a>

Di seguito troverai le informazioni di base sul tuo VPS e lo stato del servizio. Clicca sugli etichette sottostanti per visualizzare i dettagli.

> [!tabs]
> Nome
>>
>> Per personalizzare il nome del tuo VPS, clicca sul pulsante `...`{.action} e seleziona `Modifica il nome`{.action}. Questa funzionalità è utile per facilitare la navigazione nello spazio client quando si gestiscono diversi servizi VPS. Tuttavia, il nome interno del servizio rimane nel formato *VPS-XXXXXXX.VPS.ovh.net*.
>>
> Boot
>>
>> La modalità di avvio indicata è:
>>
>> - in **modalità normale** (*LOCAL*), dove il server carica il sistema operativo installato.
>> - in **modalità Rescue**, fornita da OVHcloud in caso di risoluzione di problemi.
>>
>> Utilizza il pulsante `...`{.action} per [riavviare il VPS](#rebootvps) o avviarlo in modalità Rescue se necessario.
>>
>> Se necessario, troverai ulteriori informazioni nel nostro manuale sulla [modalità rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> SO/Distribuzione
>>
>> Si tratta del sistema operativo attualmente installato. Utilizza il pulsante `...`{.action} per [riinstallare lo stesso sistema operativo o selezionarne un altro tra le Opzioni disponibili](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Una reinstallazione comporterà l'eliminazione di tutti i dati attualmente ospitati sul VPS (ad eccezione dei dischi aggiuntivi).
>>
>> > [!primary]
>> >
>> > Se hai acquistato un VPS **Windows**, puoi scegliere solo un sistema operativo Windows per la reinstallazione. Allo stesso modo, se Windows non è stato selezionato al momento dell'acquisto, non potrà essere installato dopo la consegna del VPS.
>>
>> Una volta installato il sistema, sei responsabile dell'applicazione degli aggiornamenti di sicurezza del sistema operativo. Troverai ulteriori informazioni nella sezione "[Riinstalla il tuo VPS](#reinstallvps)" nonché nel nostro manuale "[Sicurezza di un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Zona/Localizzazione
>>
>> Queste sezioni forniscono informazioni sulla localizzazione del tuo VPS. Questo può essere utile per identificare e valutare gli eventuali impatti sul tuo servizio, come quelli menzionati nei [rapporti di incidenti o manutenzione](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### La tua configurazione <a name="myconf"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Clicca sugli etichette sottostanti per visualizzare i dettagli di questa sezione.

> [!tabs]
> Modello
>>
>> Questo elemento indica la referenza commerciale che identifica il modello di VPS, corrispondente alle [offerte VPS sul nostro sito](/links/bare-metal/vps).
>>
> vCore/Memoria/Storage
>> 
>> Le risorse attuali del tuo VPS sono visualizzate qui e possono essere aggiornate separatamente cliccando sul collegamento corrispondente. Si noti che gli aggiornamenti sono limitati dal modello di VPS scelto e possono essere disponibili solo passando a una [gamma superiore](/links/bare-metal/vps).
>>
> Dischi aggiuntivi
>> 
>> Aggiungi dischi supplementari al tuo VPS per aumentare la capacità di archiviazione del tuo server al di là di quella inclusa nella configurazione iniziale. Puoi ad esempio utilizzarli per archiviare dati di backup.

#### IP <a name="ip"></a>

Clicca sugli etichette sottostanti per visualizzare i dettagli di questa sezione.

> [!tabs]
> IPv4
>>
>> L'indirizzo IPv4 pubblico principale del VPS è configurato automaticamente all'installazione. Troverai ulteriori informazioni sulla gestione delle IP nel nostro manuale "[Configurare un indirizzo IP in alias](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing)".
>>
> IPv6/Gateway
>> 
>> Troverai qui l'indirizzo IPv6 pubblico e l'indirizzo della gateway associata. Questi vengono automaticamente collegati al VPS all'installazione. Troverai ulteriori informazioni nel nostro manuale "[Configurare l'IPv6 su un server VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6)".
>> 
> DNS secondario
>>
>> Questa funzionalità è utile per ospitare servizi DNS. Consulta il nostro manuale "[Configurare un DNS secondario OVHcloud su un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps)" per ulteriori informazioni al riguardo.

#### Backup <a name="save"></a>

Queste Opzioni fanno riferimento a servizi VPS supplementari per i backup e il ripristino del tuo sistema.

> [!tabs]
> Snapshot
>>
>> Uno snapshot su un VPS è un backup istantaneo dello stato del server, che permette di ripristinare rapidamente il sistema in caso di problema. L'opzione `Snapshot` permette di creare uno snapshot manuale come punto di ripristino unico.
>>
> Backup automatico
>>
>> Un backup giornaliero del sistema (esclusi i dischi aggiuntivi) viene effettuato automaticamente e conservato per 24 ore (applicabile solo ai servizi acquistati a partire dal 7 agosto 2025). Passando all'opzione "**Backup automatico Premium**", disporrai delle 7 ultime copie di backup giornaliere del tuo VPS, che potrai utilizzare per montaggi e ripristini.  
>> Rispetto agli snapshot manuali, questa funzionalità aumenta la sicurezza dei dati creando diversi punti di ripristino a intervalli regolari.
>>

Troverai tutte le informazioni sulle soluzioni di backup disponibili per il tuo servizio sulla [pagina prodotto VPS](/links/bare-metal/vps-options) e nei [nostri manuali corrispondenti](/products/bare-metal-cloud-virtual-private-servers-configuration).

#### Il mio servizio <a name="myoffer"></a>

Questa sezione presenta le informazioni più importanti riguardanti la fatturazione del tuo servizio. Troverai tutte le informazioni su questo argomento nei [nostri manuali corrispondenti](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funzioni VPS disponibili nell'etichetta "Home page"

> [!warning]
>
> OVHcloud mette a tua disposizione servizi la cui configurazione e gestione ti competono. È quindi tuo compito assicurarti del loro corretto funzionamento.
>
> Questo manuale ha l'obiettivo di accompagnarti al meglio nelle attività quotidiane. Tuttavia, ti consigliamo di contattare un [fornitore di servizi specializzato](/links/partner) o di contattare [la nostra community](/links/community) se riscontri difficoltà o dubbi riguardo alla gestione, all'utilizzo o all'implementazione di servizi su un server.
>

#### Riavvia il tuo VPS <a name="rebootvps"></a>

Un riavvio può risultare necessario per applicare aggiornamenti di configurazione o per risolvere un malfunzionamento. Ove possibile, effettua un "riavvio software" dall'interfaccia grafica del server (Windows, Plesk, ecc.) o tramite il comando di seguito:

```bash
sudo reboot
```

Tuttavia, puoi effettuare un riavvio forzato in qualsiasi momento dal tuo [Spazio Cliente OVHcloud](/links/manager). Dall'etichetta `Home page`{.action}, clicca sul pulsante `...`{.action} accanto a `Boot` nella sezione **Il tuo VPS**. Seleziona `Riavvia il tuo VPS`{.action} e clicca su `Conferma`{.action} nella finestra che appare.

![Riavvio](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

#### Riinstalla il tuo VPS <a name="reinstallvps"></a>

La reinstallazione del tuo VPS può essere effettuata dal tuo spazio client. Questa operazione è generalmente utilizzata in caso di problema al sistema, di cambio ambiente o per ripartire da un'installazione pulita.

Clicca sul pulsante `...`{.action} a destra di `SO/Distribuzione`{.action}, quindi su `Riinstalla il tuo VPS`{.action}.

![Riinstalla](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

Nella finestra che appare, scegli un sistema operativo dall'elenco a discesa. Le Opzioni proposte sono [immagini compatibili con un VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) e sono immediatamente operative dopo l'installazione.

Se hai selezionato un sistema operativo compatibile, puoi fornire una **chiave pubblica** da installare automaticamente. Due possibilità si presentano a te:

- Copia manualmente la stringa della chiave e incollala nel campo `La tua chiave SSH Pubblica`.
- Se hai precedentemente [archiviato una chiave pubblica](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) nel tuo [Spazio Cliente OVHcloud](/links/manager), seleziona la chiave desiderata nel menu a discesa `Chiave SSH da preinstallare`.

![VPSnuovariinstallazione](images/reinstall.png){.thumbnail}

Per saperne di più su questo argomento, consulta i nostri manuali:

- [Come creare e utilizzare chiavi di autenticazione per le connessioni SSH ai server OVHcloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Come utilizzare PuTTY per le connessioni SSH e l'autenticazione](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Se hai selezionato una chiave SSH e non hai bisogno di password per accedere, attiva l'opzione `Non voglio ricevere via email i codici di autenticazione del mio VPS`.

> [!warning]
>
> La reinstallazione formatta tutti i dischi del server. È fortemente consigliato creare uno snapshot del tuo VPS prima di procedere, in modo da poter tornare allo stato precedente in caso di problema.
>

> [!primary]
>
> **Licenze**
>
> Alcuni sistemi operativi o piattaforme proprietarie, come Plesk o cPanel, richiedono licenze che generano costi aggiuntivi. Le licenze sono gestibili dal tuo spazio client: vai alla sezione `Bare Metal Cloud`{.action}, quindi clicca su `Licenze`{.action} nella barra di navigazione a sinistra.
>
> Per disporre di un sistema operativo **Windows** funzionante su un VPS, è necessario averlo precedentemente scelto **nel processo d'acquisto**. Un VPS con un altro OS installato non può essere reinstallato con Windows tramite il metodo descritto sopra.
>

Il processo di reinstallazione può richiedere alcuni minuti.

## Allez plus loin

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduzione al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sicurezza di un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Come recuperare l'accesso al server in caso di perdita della password dell'utente](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Contatta la nostra [Community di utenti](/links/community).