---
title: "Migliora la sicurezza delle email con un record SPF"
excerpt: "Questa guida ti mostra come configurare un record SPF sul tuo dominio per migliorare la sicurezza delle email"
updated: 2024-09-05
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il record SPF (Sender Policy Framework) permette al server che riceve un'email di assicurarsi che l'email sia stata inviata correttamente da un server affidabile.

/// details | Perché installare il record SPF per le tue email ?

- che permette di prevenire eventuali usurpazioni d'identità provenienti da indirizzi email che utilizzano il tuo dominio (spoofing). 
- e permette di autenticare le email inviate.
- Il record SPF si aggiunge come record nella zona DNS del dominio.

Questa operazione è possibile grazie alle informazioni inserite in un record SPF, che è in realtà un record TXT nella zona DNS. tra cui:

- **indirizzi di server e/o più indirizzi IP**: ciò permetterà di identificarli come fonti di invio legittime;
- **un qualificatore**: permetterà di consigliare al server che riceve le email un modo di reagire a un messaggio considerato non legittimo, cioè proveniente da una fonte non elencata.

Assicurati quindi di inserire nel record SPF le sorgenti di invio utilizzate per inviare email con il tuo dominio. che possono essere il tuo server di posta, quello del tuo provider o una delle soluzioni email di OVHcloud.

**Esempio**

Invia un'email dal tuo indirizzo `contact@mydomain.ovh`.

Solo il server in uscita **A** (Outgoing Mail Server **A**) è dichiarato nel record SPF del dominio `mydomain.ovh`.

Quando il server di ricezione (Inbound Mail Server) riceve l'email, questo leggi la zona DNS del tuo dominio `midomain.ovh` per effettuare l'ispezione del record SPF.

- Dato che il server in uscita **A** (Outgoing Mail Server **A**) è ben indicato nel record SPF, l'email verrà normalmente trasmessa nella casella di ricezione del destinatario.
- Poiché il server in uscita **B** (Outgoing Mail Server **B**) non è stato inserito nel record SPF, l'email inviata da questo server sarà contrassegnata come sospetto nella casella di posta in arrivo. Ciò può comportare l'apposizione di un'indicazione `[SPAM]` nell'oggetto dell'email, l'inserimento in una cartella `Posta indesiderabile` o la cancellazione diretta, secondo le regole del server di ricezione.

![dominio](/pages/assets/schemas/emails/spf_records_diagram.png){.thumbnail .w-400}

> [!primary]
>
> Il record SPF è un’indicazione fornita ai server mail, tra cui anche i tuoi, ed è compito dei server stessi applicare i record SPF appartenenti ai domini per conto dei quali ricevono email.
>

///

**Questa guida ti mostra come configurare un record SPF sul tuo dominio in OVHcloud.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](/links/manager){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}
- Il dominio deve utilizzare la configurazione OVHcloud (cioè i server DNS di OVHcloud).

> [!warning]
>
> Se il dominio non utilizza i server DNS di OVHcloud, è necessario apportare la modifica del record SPF attraverso l'interfaccia del provider che gestisce la configurazione del dominio.
>
> Se il tuo dominio è registrato presso OVHcloud, verifica che la configurazione di OVHcloud sia attiva nel tuo [Spazio Cliente](/links/manager){.external} utilizzando la scheda `Server DNS`{.action}.
>

## Procedura

### Verifica la tua configurazione SPF attuale

Se il tuo dominio utilizza la configurazione OVHcloud, verifica se è già stato configurato un record SPF.

/// details | Come verificare una configurazione SPF esistente?

Accedendo allo [Spazio Cliente OVHcloud](/links/manager){.external}. Nella sezione `Domini`{.action}, seleziona il dominio interessato. Clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella che mostra la zona DNS del dominio presso OVHcloud. La registrazione è composta da più registrazioni, tutte simbolizzate da una riga della tavola.

> [!primary]
>
> Se il tuo dominio è registrato presso OVHcloud, verifica che utilizzi correttamente i server DNS OVHcloud dalla scheda `Server DNS`{.action}.
>

Per ritrovare la riga corrispondente al record SPF di OVHcloud nella tabella è possibile utilizzare un filtro di visualizzazione. che può apparire in due diversi punti, seleziona il record `TXT`{.action} o `SPF`{.action}, se necessario, Da questo momento visualizzerai una delle seguenti informazioni nella colonna “Bersaglio”.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_check_OVH_configuration.png){.thumbnail .w-400}

- **È visualizzato** un record SPF corrispondente alle informazioni OVHcloud della tua offerta: il tuo dominio utilizza già la configurazione OVHcloud. Nel caso tu voglia apportare modifiche alla configurazione, potrai farlo nello step successivo.

- **Viene visualizzato** un record SPF che non corrisponde alle informazioni di OVHcloud: il tuo dominio utilizza già un SPF personalizzato. La modifica o la scelta della configurazione OVHcloud avvengono allo step successivo. Se la tua configurazione non è corretta, è necessario modificarla.

- **Nessun record SPF presente nella colonna di destinazione**: verifica che il record non sia creato come SPF o TXT modificando il filtro. Se non compare nessun record SPF, indipendentemente dal filtro, il tuo dominio non ne utilizza uno. potrai aggiungerlo nello step successivo.

> [!primary]
>
> Un SPF è sempre composto dalla forma seguente: "v=spf1 `sorgenti` `qualificatore`". Ad esempio, il record SPF OVHcloud è: "v=spf1 include:mx.ovh.com ~all".
>

///

### Configura il record SPF

Per aggiungere un record SPF alla configurazione di OVHcloud del tuo dominio, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}. Clicca su `Domini`{.action} e poi sulla scheda `Zona DNS`{.action}.

Per aggiungere un record SPF, clicca su `Aggiungi un record`{.action}.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_step1.png){.thumbnail .w-400}

Nella nuova finestra, vengono proposti diversi record DNS. Per aggiungere un record SPF, hai due possibilità:

- [Aggiungere un record SPF OVHcloud](#spfrecordovhcloud)**e utilizzare la configurazione OVHcloud**: per gli utenti che dispongono esclusivamente delle soluzioni email OVHcloud sul loro dominio (esclusi [Private Exchange](/links/web/emails-hosted-exchange){.external}).
- [Aggiungi un record SPF](#spfrecord): per gli utenti che non possiedono la registrazione completa. Ad esempio, disponi solo di un indirizzo IP o del nome host del server di posta.
- [Aggiungi un record TXT](#txtrecord): per gli utenti esperti o che dispongono già di una registrazione completa. Ad esempio, il tuo provider di soluzione email ti trasmette il valore.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry.png){.thumbnail .w-400}

#### Utilizza il record SPF OVHcloud <a name="spfrecordovhcloud"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/tRiy0YKY8dw?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hai scelto il record `SPF`{.action} e vuoi applicare la configurazione OVHcloud. che permette di includere tutti i server di posta in uscita OVHcloud per queste email:

- MX Plan da solo o incluso in un'offerta di [hosting Web OVHcloud](/links/web/hosting){.external}.
- [Email Pro](/links/web/email-pro).
- [Hosted Exchange](/links/web/emails-hosted-exchange)

Clicca sul pulsante `Utilizza il record SPF per l'hosting condiviso OVHcloud`{.action} in cima alla finestra di assistenza. Visualizzi le informazioni relative al record SPF di OVHcloud. Clicca poi sul pulsante `Conferma`{.action} per attivare la modifica.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_step2.png){.thumbnail .w-400}

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

#### Aggiungi un record SPF <a name="spfrecord"></a>

Hai scelto il record `SPF`{.action}

La configurazione assistita ti consente di personalizzare gradualmente il tuo record SPF. Sarà sufficiente rispondere alle domande e inserire i dati necessari. Alcune tra le informazioni richieste possono essere rivolte a utenti esperti,

e pertanto di seguito ti forniamo una descrizione dettagliata.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_entry_personnalize_step1.png){.thumbnail .w-400}

- **Sottodominio** : da completare se il record SPF dovrà essere applicato a un sottodominio del dominio che utilizzi per inviare email
- **TTL** : è il tempo di propagazione che verrà applicato alla configurazione del record DNS.
- **Autorizzi l'IP del dominio a inviare email?** : selezionare se il tuo sito Internet e i tuoi indirizzi email sono ospitati su un server che utilizza lo stesso indirizzo IP (ad esempio sul tuo server dedicato).
- **Autorizzi i server MX a inviare email?** : seleziona se i server che ricevono le tue email possono anche inviarne.
- **Autorizzi tutti i server il cui nome termina con il tuo dominio a inviare email?** : opzione da utilizzare con cautela, in quanto permette di legittimare in modo molto ampio le fonti di invio che utilizzano il tuo dominio.

/// details | "**Altri server inviano mail dal tuo dominio?**"

- **a** : inserisci qui i domini per consentire ai server che ne ospitano i siti Internet di inviare email
- **mx** : inserisci i server che ricevono le email (server MX) se possono anche effettuare l’invio per il tuo dominio, in modo che saranno identificati come fonte d’invio legittima
- **ptr** : inserisci i nomi degli host il cui *reverse* è operativo (grazie a un record PTR nella zona DNS). in modo che saranno identificati come fonte d’invio legittima
- **ip4** : indica gli indirizzi IP o gli insiemi di IP (IPv4) autorizzati a inviare email
- **ip6** : indica gli indirizzi IP o gli insiemi di IP (IPv6) autorizzati a inviare email
- **include** : inserisci i domini con le regole SPF proprie in modo da poterli utilizzare per il tuo dominio. Per esempio, OVHcloud utilizza questo metodo nella configurazione SPF:  "v=spf1 include:mx.ovh.com ~all", per consentire a OVHcloud di gestire il record SPF di mx.ovh.com e consentire ai propri clienti di utilizzarlo.

///

/// details | "**Le informazioni che hai indicato descrivono tutti gli host che inviano mail dal tuo dominio?**"

- **Sì, sei sicuro** : per indicare ai server che ricevono email dal tuo dominio di rifiutarle se provengono da una fonte non legittima (non presente nel tuo record SPF)
- **Sì, ma vuoi utilizzare il safe mode** : per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo record SPF), ma di identificarle in modo che siano riconosciute come potenzialmente non legittime (ad esempio come “spam”)
- **No** : per indicare ai server che ricevono email dal tuo dominio di accettarle se provengono da una fonte non legittima (non presente nel tuo SPF), senza nessuna impostazione particolare. L’oggetto dell’email sarà tuttavia evidenziato.

///

Clicca su `Seguente`{.action}, verifica che le informazioni siano corrette e poi clicca su `Conferma`{.action}.

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

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_add_TXT_entry.png){.thumbnail .w-400}

### Modifica un record SPF

Per modificare il record SPF nella configurazione di OVHcloud del tuo dominio, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}. Clicca su `Domini`{.action} e poi sulla scheda `Zona DNS`{.action}.

La tabella mostra la configurazione OVHcloud del tuo dominio. ogni riga corrisponde a un diverso record DNS. Recupera il tuo record TXT o SPF in questa tabella e clicca su `...`{.action} per modificare il record.

### Configurazione SPF OVHcloud per le soluzioni email condivise <a name="ovhcloudspfvalue"></a>

La configurazione SPF OVHcloud generale si applica alle seguenti soluzioni:

- MX Plan da solo o incluso in un'offerta di [hosting Web OVHcloud](/links/web/hosting).
- [Email Pro](/links/web/email-pro).
- [Hosted Exchange](/links/web/emails-hosted-exchange)

La configurazione è questa:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

### Configurazione SPF OVHcloud per Private Exchange 

Per l'offerta Private Exchange è necessario inserire gli indirizzi IP del tuo server di posta. A tale scopo, utilizzare l'argomento `ip4` per inserire l'indirizzo IPv4 (**A**) e l'argomento `ip6` per l'indirizzo IPv6 (**AAAA**) del server Private Exchange.

```bash
mydomain.ovh IN TXT "v=spf1 ip4:203.0.113.099 ip6:2001:db8:88:b999::1000:2233 ~all"
```

Se utilizzi anche [un'offerta email condivisa](#ovhcloudspfvalue), aggiungi l'argomento `include:mx.ovh.com` al record di cui sopra, conferendo questo valore:

```bash
mydomain.ovh IN TXT "v=spf1 ip4:203.0.113.099 ip6:2001:db8:88:b999::1000:2233 include:mx.ovh.com ~all"
```

/// details | Come recuperare gli indirizzi IP di un server Private Exchange?

Per recuperare l'indirizzo IP del server Private Exchange, clicca su `Microsoft`{.action} e poi su `Exchange`{.action}. Infine clicca sul nome del servizio Private Exchange interessato.

Nella scheda `Informazioni generali`{.action}, fare clic su `A` e `AAAA` nella sezione `Diagnostica server`. Nella finestra visualizzata, leggere il valore.

![dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/spf_records_ip.png){.thumbnail .w-400}

Se le caselle `A` e `AAAA` sono verdi, cliccandoci sopra non vedrai gli indirizzi IP. recuperali dalla zona DNS del dominio associato alla piattaforma Private Exchange. Per farlo, recupera il link della Webmail dalla scheda `Informazioni generali`{.action}, nel riquadro `Connessione`.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/spf_records_ip2.png){.thumbnail .w-400}

Accedi alla sezione `Domini`{.action}, seleziona il dominio associato alla piattaforma Private Exchange e clicca sulla scheda `Zona DNS`{.action}. Recupera gli indirizzi IPv4 (record `A`) e IPv6 (record `AAAA`) corrispondenti all’URL della webmail.

![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/spf_records_ip3.png){.thumbnail .w-400}

///

## Per saperne di più

[Modifica di una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit){.external}.

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).