---
title: 'Aggiungere un record SPF alla configurazione di un dominio'
excerpt: 'Come aggiungere un record SPF alla configurazione di un dominio presso OVH'
slug: hosting_condiviso_il_record_spf
section: 'Uso avanzato'
order: 5
---

**Ultimo aggiornamento: 06/04/2018**

## Obiettivo

Il record SPF (Sender Policy Framework) consente a un server di posta elettronica di verificare la legittima provenienza delle email in entrata. Questo record si aggiunge all’interno di una zona DNS di un dominio per identificare i server o gli indirizzi IP autorizzati a inviare email per il dominio stesso. 

**Come aggiungere un record SPF alla configurazione di un dominio presso OVH.**

## Prerequisiti

- Avere l’autorizzazione per gestire il dominio o il piano di hosting (se presente in OVH)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Il dominio deve utilizzare i server DNS di OVH

> [!warning]
>
> Se il tuo dominio non utilizza i server DNS OVH, è necessario modificare il record SPF tramite l’interfaccia del provider che gestisce i nameserver del tuo dominio.
> 
> Se il tuo dominio è registrato presso OVH, puoi verificarne la configurazione attraverso lo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} cliccando sulla scheda `Server DNS`{.action}.
>

## Procedura

### Step 1: a cosa serve il record SPF

Prima di aggiungere o modificare un record SPF nella configurazione del tuo dominio, è fondamentale conoscerne l’utilità. Lo scopo del record SPF è quello di impedire agli spammer di utilizzare il tuo dominio per l'invio di email non autorizzate, attraverso un elenco di informazioni tra cui:

- **server o indirizzi IP**, per permettere di identificare quelli attendibili
- **un qualificatore**, per indicare al server di posta in entrata come reagire a email indesiderate provenienti da fonti non verificate

Assicurati pertanto di inserire nel record SPF i server SMTP che utilizzi per inviare email del tuo dominio, i quali possono essere il tuo stesso server, quello del tuo provider o una delle soluzioni email OVH.

> [!primary]
>
> Le informazioni contenute nel record SPF non sono vincolanti: è pertanto compito del server che riceve il messaggio applicare o meno le indicazioni fornite tramite il record stesso. 
>

### Step 2: conoscere la configurazione OVH

La configurazione OVH si applica alle seguenti soluzioni:

- Servizio MX Plan incluso o meno con un piano di [Web hosting OVH](https://www.ovh.it/hosting-web/){.external}
- [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- [Hosted Exchange](https://www.ovh.it/emails/hosted-exchange/){.external}

Quando ordini una di queste soluzioni, ti consigliamo di utilizzare nella zona DNS del tuo dominio un record SPF che includa le seguenti informazioni:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Se il tuo dominio è gestito da OVH, puoi verificare se è già presente un record SPF attraverso il menu di sinistra del tuo [Spazio Cliente OVH](https://www.ovh.com/auth/){.external}:  nella sezione `Domini`{.action} clicca sul dominio interessato e poi sulla scheda `Zona DNS`{.action}.

Apparirà una tabella che ti mostrerà la zona del tuo dominio, in cui ciascuna riga corrisponde a un diverso record DNS.  

> [!primary]
>
> Se il tuo dominio è registrato presso OVH, puoi verificarne i server DNS autoritativi cliccando sulla scheda `Server DNS`{.action}.
>

Per ritrovare la riga corrispondente al record SPF OVH all’interno della tabella, puoi effettuare la ricerca selezionando un filtro tra `TXT`{.action} o `SPF`{.action}, in quanto il record potrebbe apparire sotto entrambi. Da questo momento visualizzerai una delle seguenti informazioni nella colonna “Bersaglio”:

- **"v=spf1 include:mx.ovh.com ~all"**: il tuo dominio ha già la configurazione SPF di OVH. Nel caso tu voglia apportare modifiche alla configurazione, potrai farlo nello step successivo.

- **Un record SPF che non corrisponde a quello indicato**: nel tuo dominio è già stato configurato un SPF personalizzato. Potrai effettuare eventuali modifiche o scegliere la configurazione SPF di OVH nello step successivo.

- **Nessun record SPF**: in questo caso potrai aggiungerlo nello step successivo.  

> [!primary]
>
> Un record SPF è sempre così composto: "v=spf1 sorgenti qualificatore". Per esempio, il record SPF OVH è "v=spf1 include:mx.ovh.com ~all".
>

![dominio](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Step 3: modificare il record SPF

Per modificare il record SPF, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Nel menu di sinistra scegli la sezione `Domini`{.action}, clicca sul dominio interessato e poi sulla scheda `Zona DNS`{.action}.

La tabella ti mostra la zona DNS del tuo dominio in cui ciascuna riga corrisponde a un diverso record DNS.

Per modificare o inserire un record SPF, è necessario aggiungere un nuovo accesso alla zona DNS del tuo dominio cliccando su `Aggiungi un record`{.action}.

![dominio](images/spf_records_add_entry_step1.png){.thumbnail}

Nella finestra che apparirà ti vengono proposti diversi record DNS. Per effettuare l’aggiunta di un SPF hai due possibilità:

- **aggiungere manualmente il record SPF**: per gli utenti esperti o che dispongono già delle informazioni da inserire (fornite per esempio dal provider che gestisce le tue email)
- **utilizzare la nostra configurazione assistita record SPF**: per gli utenti non esperti o che non possiedono le informazioni necessarie

In base alla tua decisione, la procedura da seguire sarà diversa.

![dominio](images/spf_records_add_entry.png){.thumbnail}

#### Aggiungi il record SPF manualmente

Tra i record proposti, clicca su `TXT`{.action} poi completa con le informazioni richieste. Nella sezione `Valore`{.action}, inserisci il record SPF che vuoi utilizzare e clicca su `Seguente`{.action}.
Assicurati che il riepilogo delle informazioni sia corretto, poi clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche può richiedere fino a 24 ore.
>

![dominio](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Utilizza la nostra configurazione assistita record SPF

Tra i record proposti, clicca su `SPF`{.action} dopodiché potrai scegliere tra due opzioni:

- utilizzare il record SPF delle soluzioni OVH (MX Plan, Email Pro e Hosted Exchange)
- personalizzare il record SPF attraverso la nostra configurazione assistita

##### Utilizza il record SPF di OVH

Clicca sul pulsante `Utilizza il record SPF per l’hosting condiviso OVH`{.action} e apparirà una finestra con le informazioni relative al record SPF OVH. Clicca poi sul pulsante `Conferma`{.action} per attivare la modifica.

> [!primary]
>
> La propagazione delle modifiche può richiedere fino a 24 ore.

![dominio](images/spf_records_add_entry_step2.png){.thumbnail}

##### Personalizza il record SPF

La configurazione assistita ti consente di personalizzare gradualmente il tuo record SPF. Sarà sufficiente rispondere alle domande e inserire i dati necessari. Alcune tra le informazioni richieste possono essere rivolte a utenti esperti, e pertanto di seguito ti forniamo una descrizione dettagliata.

|Informazione|Descrizione|
|---|---|
|Sottodominio|Da completare se il record SPF dovrà essere applicato a un sottodominio del dominio che utilizzi per inviare email|
|TTL|È il tempo di validità del record DNS|
|Autorizzi l'IP del dominio a inviare email?|Può essere rilevante se il tuo sito Internet e i tuoi indirizzi email sono ospitati su un server con lo stesso indirizzo IP (per esempio sul tuo server dedicato)|
|Autorizzi i server MX a inviare email?|Può essere rilevante se i server che ricevono le tue email possono anche inviarle|
|Autorizzi tutti i server il cui nome termina con il tuo dominio a inviare email?|Questa opzione è sconsigliata perché potrebbe aggiungere troppe fonti legittime nel tuo record SPF|

![dominio](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Alla domanda "**Altri server inviano mail dal tuo dominio?**" puoi rispondere con diversi elementi:

|Informazione|Descrizione|
|---|---|
|a|Inserisci qui i domini per consentire ai server che ne ospitano i siti Internet di inviare email|
|mx|Inserisci i server che ricevono le email (server MX) se possono anche effettuare l’invio per il tuo dominio, in modo che saranno identificati come fonte d’invio legittima|
|ptr|Inserisci i nomi degli host il cui *reverse* è operativo (grazie a un record PTR nella zona DNS), in modo che saranno identificati come fonte d’invio legittima|
|ip4|Indica gli indirizzi IP o gli insiemi di IP (IPv4) autorizzati a inviare email|
|ip6|Indica gli indirizzi IP o gli insiemi di IP (IPv6) autorizzati a inviare email|
|include|Inserisci i domini per poter utilizzare il loro record SPF per il tuo dominio. Per esempio, OVH utilizza questo metodo nella configurazione SPF: "v=spf1  include:mx.ovh.com ~all", per consentire a OVH di gestire il record SPF semplificandone l’utilizzo ai propri utenti.|

Infine, alla domanda "**Le informazioni che hai indicato descrivono tutti gli host che inviano mail dal tuo dominio?**", avrai tre opzioni di risposta:

|Informazione|Descrizione|
|---|---|
|Sì, sei sicuro|Per indicare ai server che ricevono email dal tuo dominio di rifiutarle se provengono da una fonte non legittima (non presente nel tuo record SPF)|
|Sì, ma vuoi utilizzare il safe mode|Per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo record SPF), ma di identificarle in modo che siano riconosciute come potenzialmente non legittime (ad esempio come “spam”)|
|No|Per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo SPF), senza nessuna impostazione particolare. L’oggetto dell’email sarà tuttavia evidenziato.|

Le informazioni contenute nel record SPF non sono vincolanti: è pertanto compito del server che riceve il messaggio applicare o meno le indicazioni fornite tramite il record stesso. 

Una volta inserite tutte le informazioni, clicca su `Seguente`{.action}, assicurati che il riepilogo delle informazioni sia corretto, poi clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche può richiedere fino a 24 ore.
>

## Per saperne di più

[Web hosting: gestisci il tuo server DNS](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>