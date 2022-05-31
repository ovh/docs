---
title: Utilizza la funzionalità Bring Your Own Image
excerpt: Scopri come creare le tue immagini grazie a Bring Your Own Image
slug: bringyourownimage
section: Utilizzo avanzato
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 28/03/2022**

## Obiettivo

Grazie alla tecnologia Bring Your Own Image, è possibile implementare immagini *Cloudready* direttamente sui tuoi server dedicati. È possibile utilizzare il prodotto bare metal come risorsa per i deploy.

**Cosa significa *cloudready*?**
<br>In una frase, essere agnostici dell'infrastruttura su cui l'immagine inizia.
Oltre ai requisiti e ai limiti indicati in appresso, è necessario assicurarsi che l'immagine (recuperata, generata) risponda alla corretta definizione delle aspettative tecniche di un'immagine Cloudready. L'immagine deve essere in grado di bootare correttamente indipendentemente dalla tipologia di server su cui avvia, deve anche imbarcare il servizio Cloud Init nel caso di utilizzo di un Config Drive. Le configurazioni di sistema devono permettere di lasciare che l'OS si avvii completamente, in particolare quelle relative alla rete.

**Scopri come configurare BringYourOwnImage con l'APIv6 OVHcloud**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) per la sezione ["Implementazione dallo Spazio Cliente"](#viacontrolpanel) di questa guida.
- Essere connesso alle [API OVHcloud](https://api.ovh.com/){.external} per la sezione ["Implementazione via API"](#viaapi) di questa guida.
- Aver generato i [credenziali per utilizzare l'APIv6](https://docs.ovh.com/it/api/first-steps-with-ovh-api/) per la sezione ["Implementazione via API"](#viaapi) di questa guida.
- La dimensione della tua immagine deve essere inferiore al disco o ai dischi installati sul server

> [!warning]
>
> Una nuova installazione effettuata da BringYourOwnImage cancella tutti i dati presenti sul server.
>

## Procedura

**Limitazioni tecniche**

Esistono ancora alcune limitazioni tecniche legate all'utilizzo di prodotti fisici come i server dedicati.
Nel preparare il deploy, è necessario tenere conto dei requisiti elencati qui sotto. Tale elenco non è esaustivo.

- Tipo di boot: **uefi** o **legacy**
- Il tipo di partizione: **MBR** o **GPT**
- Formato dell'immagine: **qcow2** o **raw**

Se il tuo server dispone di un boot **uefi**, sarà necessario prevedere nella tua immagine una partizione **EFI** se desideri che il tuo server possa boot.

**Metodi di implementazione**

- [Implementazione dallo Spazio Cliente](#viacontrolpanel)\: permettendoti di creare rapidamente e facilmente la tua immagine direttamente dal tuo Spazio Cliente OVHcloud.
- [Implementazione via API](#viaapi)\: puoi utilizzare le API OVHcloud per integrarle nei tuoi script per automatizzare il deploy.

### Crea la tua immagine dallo Spazio Cliente OVHcloud <a name="viacontrolpanel"></a>

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sezione `Bare Metal Cloud`{.action}, poi `Server Dedicati`{.action}, seleziona il tuo server.

Nel riquadro `Informazioni generali`, clicca sul pulsante`...`{.action} davanti alle `Informazioni generali`. Infine clicca su `Installa`{.action}.

![bring your ownimage](images/byoi-controlpanel01.png){.thumbnail}

Nella nuova finestra, seleziona `Installa partendo da un'immagine personalizzata`{.action} e clicca su `Installa`{.action}.

![bring your ownimage](images/byoi-controlpanel02.png){.thumbnail}

Verrai reindirizzato alla pagina di configurazione. Assicurati che l'URL dell'immagine sia nel formato adeguato. Completa i campi richiesti in questa pagina. Una volta confermata la correttezza delle informazioni, clicca su `Installa il sistema`{.action}.

Per maggiori informazioni, consulta la sezione ["Tabelle opzioni"](#options) di questa guida. 

Per l'attivazione di `ConfigDrive`, consulta la documentazione su [questa pagina](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![bring your ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Crea la tua immagine dalle API <a name="viaapi"></a>

Accedi alla sezione [/dedicated/server](https://api.ovh.com/){.external}, clicca su https://api.ovh.com/` `{.action}. Il campo `Filter` ti permetterà di ricercare "BringYourOwnImage".

Disponi di tre chiamate API legate alla funzionalità BringYourOwnImage.

![Calls API](images/apicalls.png){.thumbnail}

Per creare e configurare la tua immagine, utilizza questa chiamata e inserisci i campi richiesti:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Champ | Descrizione |
|-|-|
| serviceName | Il nome del tuo server. |
| URL | L'URL dove recuperare l'immagine. |
| checkSum | Il checksum della tua immagine. |
| checkSumType | Il checksum dell'immagine da implementare (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Attiva la creazione della partizione ConfigDrive (cloud-init) |
| hostname (ConfigDrive)* | L'hostname del tuo server. |
| sshKey (ConfigDrive)* | La tua chiave SSH pubblica. |
| userData (ConfigDrive)* | Il tuo script di post-installazione. |
| userMetadatas (ConfigDrive)* | Meta datas utilizzati da CloudInit al momento del boot. |
| description | Il nome della tua immagine. |
| diskGroupId | ID del disco che deve essere utilizzato. |
| httpHeader | Solo se necessario per scaricare l'immagine. |
| type | Tipo/formato della tua immagine (qcow2, raw, ova). |

* Il ConfigDrive è una partizione utilizzata da cloud-init al primo boot del tuo server per stabilire la configurazione desiderata. È possibile scegliere se attivare o meno questa opzione.

![POST API call](images/postapicall.png){.thumbnail}

Una volta completati i campi, esegui il deploy cliccando su `Execute`{.action}.

### Verifica l'installazione

Per monitorare lo sviluppo della tua immagine, utilizza la chiamata API qui sotto o tramite KVM / [IPMI](../utilizzo-ipmi-server-dedicati/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

In questo esempio, il deploy è in fase di avvio.

![GET API call](images/getapicall.png){.thumbnail}

L'installazione può durare una decina di minuti. Una volta terminata l'operazione, lo stato del tuo deploy passerà in "done" e il tuo server sarà riavviato su disco.

#### Esempi di ritorno

Ecco alcuni esempi:

| Message | Significato |
|-|-|
| Can't write qcow2 on disk. | Impossibile scrivere l'immagine qcow2 sul disco. |
| Could not download, qcow2 image is too big to download in memory. | Non c'è abbastanza spazio di RAM per scaricare l'immagine. |
| Could not download image located: http://path/of/your/image | Impossibile scaricare l'immagine situata: http://path/of/your/image |
| Bad format image, expected: qcow2, raw. | Il formato dell'immagine non è corretto. |
| Bad checkSumType, expected: sha1, sha256, md5. | Il tipo di checksum non è corretto. |
| Bad $checkSumType for downloaded file, got: 1234 while expecting 5678. | Il checksum non è corretto. |
| Can not move backup GPT data structures to the end of disk | Il formato disco non è corretto. |
| Could not create configdrive on disk | Impossibile creare la partizione configdrive sul disk. |


### Elimina l'installazione

Puoi scegliere di eliminare il tuo deploy utilizzando questa chiamata:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

eliminando lo stato di deploy e impostando il server in modalità Rescue.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
