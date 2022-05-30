---
title: 'Aggiungere un record SPF alla configurazione di un dominio'
excerpt: 'Come aggiungere un record SPF alla configurazione di un dominio presso OVHcloud'
slug: hosting_condiviso_il_record_spf
section: 'DNS e zona DNS'
order: 5
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/02/2021**

## Obiettivo

Il record SPF (Sender Policy Framework) consente a un server di posta di verificare che le email in entrata provengano da server autorizzati.
<br>che permette di prevenire eventuali usurpazioni d'identità con gli indirizzi email che utilizzano il tuo dominio (spoofing).
<br>e permette di autenticare le email inviate.
<br>Il record SPF viene aggiunto come record in una zona DNS dove sono indicati i server o gli indirizzi IP autorizzati a inviare email al dominio in questione.

attraverso un elenco di informazioni tra cui:

- **server o indirizzi IP**: ciò permetterà di identificarli come fonti di spedizione legittime;
- **un qualificatore**: permetterà di consigliare al server che riceve le email un modo specifico di reagire a un messaggio considerato non legittimo, cioè proveniente da una fonte che presenta un rischio.

Assicurati pertanto di inserire nel record SPF i server SMTP che utilizzi per inviare email del tuo dominio, che possono essere il tuo server, quello del tuo provider o una delle soluzioni email di OVHcloud.

> [!primary]
>
> Il record SPF è un’indicazione fornita ai server mail, tra cui anche i tuoi, ed è compito dei server stessi applicare i record SPF appartenenti ai domini per conto dei quali ricevono email.
>

**Questa guida ti mostra come configurare un record SPF sul tuo dominio in OVHcloud.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Il dominio deve utilizzare la configurazione OVHcloud (cioè i server DNS di OVHcloud).

> [!warning]
>
> Se il dominio non utilizza i server DNS di OVHcloud, è necessario apportare la modifica del record SPF attraverso l'interfaccia del provider che gestisce la configurazione del dominio.
>
> Se il tuo dominio è registrato presso OVHcloud, verifica che la configurazione di OVHcloud sia attiva nel tuo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} utilizzando la scheda `Server DNS`{.action}.
>

## Procedura

### La configurazione SPF di OVHcloud

La configurazione OVHcloud si applica alle seguenti soluzioni:

- MX Plan da solo o incluso in un'offerta di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external};
- [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external}
- [Hosted Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/){.external}

Al momento dell'ordine, ti consigliamo di utilizzare un record SPF con le informazioni di OVHcloud nella zona DNS del dominio. informazioni:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Questa configurazione non si applica alle offerte Provider Exchange o [Private Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/){.external}.

Per l'offerta Exchange Provider, la configurazione è questa:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex mail.biz a:gw2.ex mail.biz ~all"
```

> [!primary]
> Per l'offerta Private Exchange è necessario inserire gli indirizzi IP del tuo server di posta. Per limitare la dimensione del record SPF, è possibile creare un record SPF che contenga questi indirizzi IP su un sottodominio e un record SPF che lo contenga utilizzando la categoria "include" sul dominio.

### Verifica la tua configurazione SPF attuale

Se il tuo dominio utilizza la configurazione OVHcloud, verifica se è già stato configurato un record SPF. accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Nella sezione `Domini`{.action}, seleziona il dominio interessato. Clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella che mostra la zona DNS del dominio presso OVHcloud. La registrazione è composta da più registrazioni, tutte simbolizzate da una riga della tavola.

> [!primary]
>
> Se il tuo dominio è registrato presso OVHcloud, verifica che utilizzi correttamente i server DNS OVHcloud dalla scheda `Server DNS`{.action}.
>

Per ritrovare la riga corrispondente al record SPF di OVHcloud nella tabella è possibile utilizzare un filtro di visualizzazione. che può apparire in due diversi punti, seleziona il record `TXT`{.action} o `SPF`{.action}, se necessario, Da questo momento visualizzerai una delle seguenti informazioni nella colonna “Bersaglio”:

- **È visualizzato** un record SPF corrispondente alle informazioni OVHcloud della tua offerta: il tuo dominio utilizza già la configurazione OVHcloud. Nel caso tu voglia apportare modifiche alla configurazione, potrai farlo nello step successivo.

- **Viene visualizzato** un record SPF che non corrisponde alle informazioni di OVHcloud: il tuo dominio utilizza già un SPF personalizzato. La modifica o la scelta della configurazione OVHcloud avvengono allo step successivo. Se la tua configurazione non è corretta, è necessario modificarla.

- **Nessun record SPF presente nella colonna di destinazione**: verifica che il record non sia creato come SPF o TXT modificando il filtro. Se non compare nessun record SPF, indipendentemente dal filtro, il tuo dominio non ne utilizza uno. potrai aggiungerlo nello step successivo.

> [!primary]
>
> Un SPF è sempre composto dalla forma seguente: "v=spf1 `sorgenti` `qualificatore`". Ad esempio, il record SPF OVHcloud è: "v=spf1 include:mx.ovh.com ~all".
>

![dominio](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configura il record SPF

Per aggiungere un record SPF alla configurazione di OVHcloud del tuo dominio, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Clicca su `Domini`{.action} e poi sulla scheda `Zona DNS`{.action}.

Per aggiungere un record SPF, clicca su `Aggiungi un record`{.action}.

![dominio](images/spf_records_add_entry_step1.png){.thumbnail}

Nella nuova finestra, vengono proposti diversi record DNS. Per aggiungere un record SPF, hai due possibilità:

- [Aggiungi un record TXT](#txtrecord): per gli utenti esperti o che dispongono già di una registrazione completa. Ad esempio, il tuo provider di soluzione email ti trasmette il valore.
- [Aggiungi un record SPF](#spfrecord): per gli utenti che non possiedono la registrazione completa. Ad esempio, disponi solo di un indirizzo IP o del nome host del server di posta.
- [Aggiungere un record SPF ](#spfrecordovhcloud)**e utilizzare la configurazione OVHcloud**: per gli utenti che dispongono esclusivamente delle soluzioni email OVHcloud sul loro dominio (esclusi [Private Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/){.external} e Exchange Provider).

![dominio](images/spf_records_add_entry.png){.thumbnail}


#### Aggiungi un record SPF <a name="spfrecord"></a>

Hai scelto il record `SPF`{.action}

La configurazione assistita ti consente di personalizzare gradualmente il tuo record SPF. Sarà sufficiente rispondere alle domande e inserire i dati necessari. Alcune tra le informazioni richieste possono essere rivolte a utenti esperti,

e pertanto di seguito ti forniamo una descrizione dettagliata.

![dominio](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Descrizione|Descrizione|
|---|---|
|Sottodominio|Da completare se il record SPF dovrà essere applicato a un sottodominio del dominio che utilizzi per inviare email|
|TTL|È il tempo di propagazione che verrà applicato alla configurazione del record DNS.|
|Autorizzi l'IP del dominio a inviare email?| Selezionare se il tuo sito Internet e i tuoi indirizzi email sono ospitati su un server che utilizza lo stesso indirizzo IP (ad esempio sul tuo server dedicato).|
|Autorizzi i server MX a inviare email?|Seleziona se i server che ricevono le tue email possono anche inviarne.|
|Autorizzi tutti i server il cui nome termina con il tuo dominio a inviare email?|Opzione da utilizzare con cautela, in quanto permette di legittimare in modo molto ampio le fonti di invio che utilizzano il tuo dominio.|


Alla domanda "**Altri server inviano mail dal tuo dominio?**" puoi rispondere con diversi elementi:

|Informazione|Descrizione|
|---|---|
|a|Inserisci qui i domini per consentire ai server che ne ospitano i siti Internet di inviare email|
|mx|Inserisci i server che ricevono le email (server MX) se possono anche effettuare l’invio per il tuo dominio, in modo che saranno identificati come fonte d’invio legittima|
|ptr|Inserisci i nomi degli host il cui *reverse* è operativo (grazie a un record PTR nella zona DNS). in modo che saranno identificati come fonte d’invio legittima|
|ip4|Indica gli indirizzi IP o gli insiemi di IP (IPv4) autorizzati a inviare email|
|ip6|Indica gli indirizzi IP o gli insiemi di IP (IPv6) autorizzati a inviare email|
|include|Inserisci i domini con le regole SPF proprie in modo da poterli utilizzare per il tuo dominio. Per esempio, OVHcloud utilizza questo metodo nella configurazione SPF:  "v=spf1 include:mx.ovh.com ~all", per consentire a OVHcloud di gestire il record SPF di mx.ovh.com e consentire ai propri clienti di utilizzarlo.|

Infine, alla domanda "**Le informazioni che hai indicato descrivono tutti gli host che inviano mail dal tuo dominio?**", avrai tre opzioni di risposta:

|Informazione|Descrizione|
|---|---|
|Sì, sei sicuro|Per indicare ai server che ricevono email dal tuo dominio di rifiutarle se provengono da una fonte non legittima (non presente nel tuo record SPF)|
|Sì, ma vuoi utilizzare il safe mode|Per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo record SPF), ma di identificarle in modo che siano riconosciute come potenzialmente non legittime (ad esempio come “spam”)|
|No|Per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo SPF), senza nessuna impostazione particolare. L’oggetto dell’email sarà tuttavia evidenziato.|

Clicca su `Seguente`{.action}, verifica che le informazioni siano corrette e poi clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

#### Utilizza il record SPF OVHcloud <a name="spfrecordovhcloud"></a>

Hai scelto il record `SPF`{.action} e vuoi applicare la configurazione OVHcloud.

Clicca sul pulsante `Utilizza il record SPF per l'hosting condiviso OVHcloud`{.action} in cima alla finestra di assistenza. Visualizzi le informazioni relative al record SPF di OVHcloud. Clicca poi sul pulsante `Conferma`{.action} per attivare la modifica.

![dominio](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

#### Aggiungi un record TXT <a name="txtrecord"></a>

Tra i record proposti, clicca su `TXT`{.action} e inserisci le informazioni richieste. Nella sezione `Valore`{.action}, inserisci il record SPF che vuoi utilizzare.

Poi clicca su `Seguente`{.action}, assicurati che il riepilogo delle informazioni sia corretto e infine clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

![dominio](images/spf_records_add_TXT_entry.png){.thumbnail}

### Modifica un record SPF

Per modificare il record SPF nella configurazione di OVHcloud del tuo dominio, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Clicca su `Domini`{.action} e poi sulla scheda `Zona DNS `{.action}.

La tabella mostra la configurazione OVHcloud del tuo dominio. ogni riga corrisponde a un diverso record DNS. Recupera il tuo record TXT o SPF in questa tabella e clicca su `...`{.action} per modificare il record.

## Per saperne di più

[Modifica di una zona DNS OVHcloud](../web_hosting_modifica_la_tua_zona_dns/){.external}.

[Modificare i server DNS di un dominio OVHcloud](../web_hosting_gestisci_il_tuo_server_dns/){.external}.

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en](https://community.ovh.com/en/){.external}
