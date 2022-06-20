---
title: Gestisci un gruppo di licenze Office 365 Reseller (CSP2) OVHcloud
slug: ordina_e_gestisci_un_gruppo_di_licenze_office_365_reseller_ovh_csp2
excerpt: Come attivare e gestire un servizio Office 365 Reseller (CSP2) in OVHcloud
section: Office
order: 3
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 17/06/2022**

## Obiettivo

Office 365 Reseller (CSP2) è un servizio che ti permette di usufruire di diversi tipi di licenze Microsoft 365 a tariffe agevolate, per poterle rivendere ai tuoi clienti.

**Questa guida ti mostra come attivare e gestire un servizio Office 365 Reseller OVHcloud (CSP2).**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di un MPN ID (Microsoft Partner Network IDentifier)
- Essere iscritto al programma CSP (Cloud Solution Provider) di Microsoft come rivenditore indiretto nella regione in cui si esercita (ad esempio: "UE" per l’Europa)

> [!warning]
>
> A partire dal 01/07/2022, tutti i servizi Office 365 rivenditori (CSP2) che non disporranno di un MPN ID iscritto al programma "CSP Reseller indiretto" saranno disattivati da Microsoft.
>
> Avere un MPN ID è obbligatorio per ogni nuova sottoscrizione.
>
Se non disponi ancora di un MPN ID, puoi crearne uno (se hai diritto alle condizioni Microsoft) seguendo la [documentazione ufficiale di Microsoft](https://docs.microsoft.com/it-it/partner-center/mpn-create-a-partner-center-account){.external}.

Per iscriverti come reseller indiretto, consulta la documentazione ufficiale di Microsoft (https://docs.microsoft.com/it-it/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> Il MPN ID ti permette di ottenere un cashback sugli abbonamenti che ordinerai tramite lo Spazio Cliente OVHcloud. Il cashback è soggetto a regole definite da Microsoft, in funzione dei volumi di abbonamenti che genererai.
>

## Procedura

### Ordina un servizio Office 365 Reseller

Per ordinare un servizio Office 365 Reseller, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Seleziona `Sunrise`{.action} nel pannello superiore e clicca su `Office 365 Reseller`{.action}.

- Inserisci il tuo MPN ID creato precedentemente con Microsoft
- Inserisci le informazioni di contatto del cliente finale per definire il gestore del gruppo di licenze (Tenant) che stai per creare.

> [!primary]
>
> Puoi anche definire un **sottodominio personalizzato** durante la creazione di una nuova piattaforma selezionando la casella corrispondente (con riserva dei nomi disponibili).
>

- Nella lista qui sotto, indica le licenze che vuoi aggiungere al tuo gruppo.
- Clicca su `Ordina`{.action} per completare l'ordine.

> [!warning]
>
> Verifica la validità dell'indirizzo email inserito durante la creazione del tuo gruppo di licenze, in quanto riceverà le credenziali di accesso alla piattaforma Microsoft.
>

![office365](images/csp2-01.png){.thumbnail}

#### Caso particolare delle deleghe

- Se disponi già di un servizio Office 365 CSP2 presso Microsoft, hai la possibilità di delegare l'amministrazione a OVHcloud. È possibile aggiungere abbonamenti supplementari direttamente dallo Spazio Cliente OVHcloud. Al momento dell'ordine di un nuovo gruppo di licenze, scegli `Delega di una piattaforma creata precedentemente da Microsoft` e precisa il **Tenant Office 365 esistente*** che puoi trovare sul tuo portale Microsoft, così come il tuo ID MPN.

- Se per il tuo Office 365 Reseller utilizzi già un provider diverso da OVHcloud, è possibile delegare la gestione a OVHcloud, ma prima rompere il legame con il tuo precedente provider.

- Per completare l'apparizione dello startup nello Spazio Cliente OVHcloud sarà necessaria una doppia conferma.

- Una volta che le licenze sono sottoscritte sul tuo delegato, queste saranno disponibili sul tuo [portale di amministrazione Microsoft](https://portal.office.com/Admin/Default.aspx){.external}. In questo caso, è necessario sostituire le vecchie licenze nel tuo [portale di amministrazione Microsoft](https://portal.office.com/Admin/Default.aspx){.external} con le licenze OVHcloud e disattivare le vecchie licenze per non continuare a pagarle in doppio.

- Assicurati che, se hai licenze non disponibili per l'acquisto da OVHcloud, puoi mantenere queste licenze attive presso Microsoft.

> [!warning]
> Dal momento che si tratta di prodotti su licenza, non è possibile trasferire un Office 365 Reseller da un identificativo cliente OVHcloud a un altro.
>

### Gestisci il tuo servizio Office 365 Reseller

Una volta creato e reso disponibile il servizio Office 365, è possibile gestirlo dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

Per effettuare questa operazione accedi alla sezione `Sunrise`{.action}. Nel menu a sinistra, seleziona `Office 365 Reseller`{.action} e poi seleziona il servizio.

Le seguenti informazioni sono fornite:

- **Nome interno del servizio**: indica il nome del tuo servizio. è visibile solo dallo Spazio Cliente. Corrisponde anche al *Tenant* (che contiene il tuo gruppo di licenze) di Microsoft.
- **Nome visualizzato del servizio**: permette di personalizzare il nome visualizzato del servizio nello Spazio Cliente.
- **Creato il**: indica la data di creazione del servizio.
- **Portale di amministrazione Microsoft**: link del portale Office che permette di amministrare i tuoi abbonamenti.
- **Reimposta la password amministratore**: permette di modificare la password di connessione al portale di amministrazione Microsoft.

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Configura automaticamente un dominio ospitato in OVHcloud

OVHcloud mette a disposizione uno strumento che facilita la configurazione della zona DNS del tuo dominio. È possibile configurare automaticamente i domini che utilizzano la zona DNS OVHcloud per consentire loro di funzionare con queste soluzioni:

- Exchange Online;
- Skype;
- Intune

Per effettuare questa operazione, seleziona il dominio dal menu a tendina e scegli uno o più servizi. A questo punto creeremo i record DNS adeguati nella zona DNS OVHcloud del dominio.

> [!warning]
> Per il corretto funzionamento della configurazione è necessario assicurarsi che i server DNS OVHcloud siano utilizzati correttamente per i domini interessati. Consulta la guida [Modificare i server DNS di un dominio OVHcloud](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/).
>

![office365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Gestisci i tuoi abbonamenti

La gestione dei tuoi abbonamenti ti permette di aumentare o annullare le licenze associate al tuo gruppo di abbonamenti. Una tabella ti permette di visualizzare i dettagli:

- **ID**: ogni tipo di licenza ordinata dispone di un identificativo unico (ID).
- **Status**: corrisponde allo stato della tua licenza.
- **Nome della licenza**: indica il tipo di licenza sottoscritto.
- **Numero di licenze**: indica il numero di licenze disponibili.
- **Data di creazione**: indica la data di creazione dell'abbonamento al tipo di licenza selezionato.
- **Ultimo aggiornamento**: indica la data dell'ultimo aggiornamento (ad esempio l'aggiunta di una licenza) dell'abbonamento.

`L'icona a forma di matita` permette di modificare il numero totale di licenze dell'abbonamento. `L'icona a forma di cestino` permette di rescindere l'abbonamento e tutte le sue licenze.

> [!primary]
>
> Le licenze Office 365 Education sono vincolate alle regole definite nelle Condizioni Particolari di utilizzo fornite da Microsoft, Questi documenti ufficiali sono disponibili in base alla lingua e alla regione [qui](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Gestire gli utenti

Ora che hai un numero sufficiente di licenze, devi gestire gli utenti che le utilizzeranno. effettuando questa operazione direttamente dal [portale di amministrazione Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Per effettuare l'accesso, inserisci il tuo identificativo e la password inviata nell'email OVHcloud che conferma l'installazione del tuo gruppo di licenze. Queste informazioni sono inviate all'indirizzo inserito durante la creazione del gruppo di licenze.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
