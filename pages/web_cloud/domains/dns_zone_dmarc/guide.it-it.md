---
title: "Migliora la sicurezza delle email con un record DMARC"
excerpt: "Questa guida ti mostra come funziona DMARC e come configurarlo per il tuo servizio di posta"
updated: 2023-12-13
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il record **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance (DMARC) è un meccanismo di sicurezza e-mail. Si basa sui risultati delle verifiche [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim).

**Come funziona DMARC e come configurarlo per il tuo servizio di posta elettronica.**

> [!warning]
>
> OVHcloud propone servizi di cui l’utente è responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Avere accesso alla gestione del dominio (associata alla soluzione email) dallo [Spazio Cliente OVHcloud](/links/manager).
- Uno dei meccanismi di autenticazione, [SPF](/pages/web_cloud/domains/dns_zone_spf) e/o [DKIM](/pages/web_cloud/domains/dns_zone_dkim) deve essere configurato nella zona DNS del dominio del servizio di posta.

## Procedura

Il DMARC permette al proprietario di un dominio di gestire la sicurezza delle email emesse con il suo dominio. Il suo obiettivo è:

- Dichiarare al server ricevente le azioni da effettuare in caso di malfunzionamento dei meccanismi di autenticazione SPF e/o DKIM.
- Controllare meglio l'utilizzo del dominio e rilevare i tentativi di furto tramite i report inviati in caso di mancata autenticazione delle email. Inoltre, migliora la sicurezza creando un collegamento tra i protocolli SPF e DKIM.

Il record DMARC contiene informazioni sulle policy per le email dannose che tentano di falsificare il tuo nome di dominio.<br>
DMARC interroga i meccanismi di autenticazione [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim) per verificare le email in arrivo.<br>
Il risultato di questi controlli SPF e/o DKIM viene tradotto da DMARC in "elementi di azione" quando un'e-mail non supera i controlli. Queste misure possono includere la messa in quarantina o il rifiuto delle e-mail interessate.

### Come agisce il DMARC? <a name="how-dmarc-works"></a>

Ecco un esempio per comprendere meglio come funziona il DMARC.

Quando l'indirizzo **contact@mydomain.ovh** invia una email verso l'indirizzo di destinazione **recipient@otherdomain.ovh**, il server ricevente interroga la zona DNS del nome di dominio emittente **mydomain.ovh** per leggere le istruzioni del record DMARC.

Il record DMARC comunica la politica da adottare in funzione dei risultati dei test SPF e DKIM. Può inoltre indicare uno o più indirizzi email (rappresentati nel nostro esempio dall’indirizzo **report@mydomain.ovh**) che servono a ricevere le notifiche di errori inviati dal dominio **mydomain.ovh**.

Una volta lette le istruzioni del record DMARC del dominio **mydomain.ovh** dal server di posta in arrivo di **"otherdomain.ovh"**, le email saranno consegnate verso l'indirizzo **recipient@otherdomain.ovh**, contrassegnate come "SPAM" o rifiutate.

![dmarc](/pages/assets/schemas/emails/dns-dmarc-diagram.png){.thumbnail}

### Configura il DMARC

Esistono due modi per configurare il DMARC nella zona DNS di OVHcloud:

- Tramite [lo strumento di configurazione DMARC](#dmarc-record). Questo record permette una configurazione semplificata del DMARC. Completa i campi con i parametri DMARC necessari alla tua configurazione. Questo record viene letto come un record TXT dai server DNS.
- Tramite un [record TXT](#txt-record). Questo record standard può essere utilizzato nell’ambito della configurazione del DMARC dallo Spazio Cliente OVHcloud. Ti permette di integrare tutti i tag di configurazione DMARC, compresi quelli mancanti tramite il record DMARC OVHcloud. È tuttavia necessario rispettare le regole di sintassi del protocollo DMARC.

#### Record DMARC <a name="dmarc-record"></a>

Il record DMARC può essere aggiunto alla zona DNS dallo Spazio Cliente OVHcloud. Per farlo, accedi allo [Spazio Cliente OVHcloud](/links/manager) e seleziona la sezione `Web Cloud`{.action}. Nella colonna di sinistra, seleziona il dominio nella sezione `Domini`{.action} e clicca sulla scheda `Zona DNS`{.action} per accedere alla zona DNS.

Una volta visualizzata la zona DNS, clicca sul pulsante `Aggiungi un record`{.action} e poi su "Record email" `DMARC`{.action}.

- **Sottodominio**: questa voce deve **obbligatoriamente iniziare con** `_dmarc`. Se si applica il DMARC a tutto il dominio, non inserire altro che `_dmarc` in questa casella. Se definisci il tuo DMARC in un sottodominio del tuo dominio principale, aggiungi il tuo sottodominio dopo `_dmarc`. Ad esempio, se vuoi applicare il DMARC a un sottodominio *subdomain.mydomain.ovh*, è necessario inserire `_dmarc.subdomain` nella casella "sottodominio" per il nome di dominio *mydomain.ovh*.

Di seguito trovi la descrizione completa dei tag utilizzati per **la registrazione DMARC** OVHcloud:

- **Versione (v=)**: campo obbligatorio che determina la versione del protocollo DMARC.

- **Regola per il dominio (p=)**: policy che deve essere adottata dal destinatario su richiesta del proprietario del dominio del mittente. Il criterio viene applicato al dominio richiesto e ai sottodomini, a meno che il tag sottodominio **sp=** non indichi istruzioni diverse. I valori possibili sono:
    - *none* : il proprietario del dominio non richiede alcuna azione specifica riguardante la consegna dei messaggi.
    - *quarantine*: in caso di fallimento della verifica del meccanismo DMARC, le email devono essere considerate sospette dai destinatari. In base alla capacità del server ricevente, ciò può significare "inserire nella cartella spam" e/o "segnalare come sospetto".
    - *reject*: rifiuto delle email che non superano la verifica del meccanismo DMARC.

> [!warning]
>
> L’impostazione del parametro `p=` può avere un impatto importante sull’evasione delle email del dominio. È consigliabile configurare `p=none` ed eseguire un'analisi dei rapporti di errore per diverse settimane, per correggere eventuali anomalie. L’upgrade a `p=quarantine` o `p=reject` richiede il pieno controllo delle impostazioni di sicurezza email relative a [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim). L’uso del fattore `pct=`, presentato di seguito, consente una transizione graduale.

- **Percentuale di messaggi filtrati (pct=)** (valore compreso tra 0 e 100, valore predefinito 100): percentuale del flusso di messaggi a cui applicare la politica DMARC. Lo scopo del tag pct è consentire ai proprietari di domini di adottare un'implementazione lenta del meccanismo DMARC.

- **URI rapporto globale (rua=)**: indirizzi a cui inviare i rapporti (elenco in testo normale separato da virgole). È possibile specificare qualsiasi URI valido. La dicitura "mailto:" deve precedere il destinatario email (esempio: `mailto:address@example.com`).

- **Regola per i sottodomini (sp=)**: criterio che deve essere adottato dal destinatario per tutti i sottodomini. Si applica solo ai sottodomini del dominio richiesto e non al dominio stesso. La sua sintassi è identica a quella del tag "p" definito sopra. Se il tag non è presente, per i sottodomini viene applicato il criterio specificato dal tag "p".

- **Modalità di allineamento SPF (aspf=)** (il valore predefinito è `r`): indica la modalità di allineamento SPF. I valori sono i seguenti:
    - `r`(relaxed) per la modalità flessibile: le email possono essere, ad esempio, inviate da un sottodominio del nome di dominio dichiarato. Parliamo di allineamento parziale.
    - `s`(strict) per la modalità strict: le email devono essere inviate dal dominio dichiarato e solo da questo. Il risultato è quindi "allineato".

> [!primary]
>
> Per i meccanismi di autenticazione SPF e DKIM, l'**allineamento** fa riferimento alla corrispondenza tra il dominio (e/o la firma del dominio) utilizzato durante l'invio **e** il dominio registrato in questi meccanismi.
>
> **Esempi**
>
> - **Allineato**: quando l’indirizzo *john.smith@mydomain.ovh* trasmette un messaggio dal servizio email associato al dominio *mydomain.ovh* e i meccanismi di autenticazione SPF e DKIM sono stati configurati, si ottiene un risultato allineato.
> - **Allineamento parziale**: quando l’indirizzo *john.smith@subdomain.mydomain.ovh* trasmette un messaggio dal servizio email associato al dominio *mydomain.ovh*, ma i meccanismi di autenticazione SPF e DKIM sono stati configurati esclusivamente sul dominio principale (ad esempio *mydomain.ovh*), si ottiene un risultato parzialmente allineato.
> - **Meccanismi di autenticazione** non riusciti: il mittente tenta di inviare un’email come *john.smith@mydomain.ovh* passando per un altro indirizzo (come *robert@example.com*) o utilizzando un servizio di invio email non elencato nel record SPF. In questo caso, i meccanismi di autenticazione SPF e DKIM restituiscono un errore come risultato.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-01.png){.thumbnail}

#### Record TXT <a name="txt-record"></a>

È possibile aggiungere il record TXT alla zona DNS dallo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}. Clicca su `Domini`{.action} e poi seleziona il dominio interessato. e clicca sulla scheda `Zona DNS`{.action}.

Una volta visualizzata la zona DNS, clicca sul pulsante `Aggiungi un record`{.action} e poi su "Record estesi" `TXT`{.action}.

- **Sottodominio**: questa voce deve **obbligatoriamente iniziare con** `_dmarc`. Se si applica il DMARC a tutto il dominio, non inserire altro che `_dmarc` in questa casella. Se definisci il tuo DMARC in un sottodominio del tuo dominio principale, aggiungi il tuo sottodominio dopo `_dmarc`. Ad esempio, se vuoi applicare il DMARC a un sottodominio *subdomain.mydomain.ovh*, è necessario inserire `_dmarc.subdomain` nella casella "sottodominio" per il nome di dominio *mydomain.ovh*

Di seguito è riportato un elenco dei tag utilizzati per creare un **record TXT** con le impostazioni DMARC. Questo elenco è complementare ai tag menzionati nella sezione precedente "[Record DMARC](#dmarc-record)".

- **adkim** (il valore predefinito è `r`) : Specifica la modalità di allineamento DKIM. I valori sono i seguenti:
    - `r`(relaxed) per la modalità flessibile: le email che non superano l’autenticazione DKIM vengono contrassegnate come "indesiderate" dal server ricevente.
    - `s`(strict) per la modalità strict: le email che non superano l'autenticazione DKIM vengono rifiutate dal server di destinazione.

- **ruf** (elenco in testo normale separato da virgole): indirizzi a cui devono essere segnalate le informazioni specifiche sull'errore del messaggio. Se questo tag è presente, il proprietario del dominio di invio richiede ai destinatari di inviare rapporti dettagliati sugli errori dei messaggi di posta elettronica che non superano la valutazione DMARC in modo specifico (vedere il tag `fo` di seguito). Il formato del messaggio da generare deve essere il formato specificato per il tag `rf`. La dicitura "mailto:" deve precedere il destinatario email (esempio: `mailto:address@example.com`).

- **fo** (testo normale; il valore di default è `0`) - Opzioni rapporto errori dettagliato. I compilatori di rapporti possono scegliere di rispettare le opzioni richieste. Il contenuto di questo tag deve essere ignorato se non si specifica anche un tag `ruf` (sopra). Il valore di questo tag è un elenco di caratteri separati da due punti (`:`) che indicano le seguenti opzioni di relazione di errore:
     - **0**: genera un rapporto di errore DMARC se tutti i meccanismi di autenticazione (DKIM **ET** SPF) non riescono a produrre un risultato "pass" allineato.
     - **1**: genera un rapporto di errore DMARC se un meccanismo di autenticazione (DKIM **O** SPF) produce qualcosa di diverso da un risultato allineato di successo.
     - **d** - Genera un rapporto di errore DKIM se il meccanismo di autenticazione DKIM ha esito negativo, indipendentemente dall'allineamento.
     - **s** - Genera un rapporto di errore SPF se il meccanismo di autenticazione SPF ha esito negativo, indipendentemente dall'allineamento.

- **rf** (valori di testo normale separati da virgole; il valore predefinito è `afrf`): questo tag indica il tipo di formato previsto per i report che forniscono dettagli specifici sugli errori di autenticazione dei messaggi. Al momento è supportato solo `afrf` (Auth Failure Reporting Format).

- **ri** (valore predefinito: 86400, numero intero senza segno a 32 bit in testo normale): intervallo richiesto, in secondi, tra i rapporti aggregati. Questo tag specifica la frequenza con cui i destinatari di posta elettronica devono generare rapporti aggregati sui risultati di valutazione DMARC per il dominio in questione.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-02.png){.thumbnail}

#### Esempi di record <a name="record-example"></a>

> [!warning]
>
> Nei nostri 2 esempi, il parametro `p=`viene utilizzato nella sua forma restrittiva per illustrare il comportamento di un servizio di posta elettronica in questo caso.
>
> L’impostazione del parametro `p=` può avere un impatto importante sull’evasione delle email del dominio. Si consiglia di configurare `p=none` ed eseguire un'analisi dei rapporti di errore per diverse settimane, per correggere eventuali anomalie. L’upgrade a `p=quarantine` o `p=reject` richiede il pieno controllo delle impostazioni di sicurezza email relative a [SPF](/pages/web_cloud/domains/dns_zone_spf) e [DKIM](/pages/web_cloud/domains/dns_zone_dkim). L’uso del fattore `pct=`, presentato di seguito, consente una transizione graduale.

##### Primo esempio

Per illustrare questo primo esempio, abbiamo utilizzato il [record DMARC](#dmarc-record) nella zona DNS e gli abbiamo applicato le seguenti impostazioni:

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-03.png){.thumbnail}

Otteniamo il seguente risultato:

```
"v=DMARC1;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;"
```

Tutte le email inviate (**pct=100**) vengono gestite dai meccanismi di autenticazione SPF e/o DKIM. Le email che non superano il test SPF vengono automaticamente rifiutate perché "**aspf=s**" (meccanismo SPF in modalità strict). Una segnalazione degli errori relativi all’esito negativo dei meccanismi di autenticazione SPF e/o DKIM viene inviata all’indirizzo `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**).

##### Secondo esempio

In questo secondo esempio, è stato utilizzato un [record TXT](#txt-record) per utilizzare tag non disponibili nel [record DMARC](#dmarc-record) semplificato.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-04.png){.thumbnail}

Otteniamo il seguente risultato:

```
"v=DMARC1; p=quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400"
```

- **p=quarantine**: le email che non superano i test DMARC vengono trattate come "sospette".

- **pct=100**: la politica DMARC si applica al 50% dei messaggi provenienti dal flusso di posta elettronica del proprietario del dominio.

- **ruf=mailto:report@mydomain.ovh**: indirizzo e-mail al quale devono essere inviate le notifiche di errore dettagliate utilizzando l'argomento "mailto".

- **fo=0**: opzioni per la generazione di rapporti di errore. Il valore "0" indica che i rapporti di errore DMARC devono essere generati solo se i meccanismi di autenticazione SPF e DKIM non riescono a produrre un risultato allineato "pass".

- **adkim=r**: la modalità di allineamento dell'identificativo DKIM richiesta dal proprietario del dominio è "relaxed" (modalità flessibile). In questa modalità, DKIM deve fornire una firma valida e l'identificativo dell'intestazione "From" può essere parzialmente allineato.

- **aspf=s** - La modalità di allineamento dell'identificativo SPF richiesto è "strict". L'identificativo SPF del dominio allineato deve corrispondere esattamente all'indirizzo IP che invia il messaggio.

- **adkim=r**: la modalità di allineamento dell’identificativo DKIM richiesta dal proprietario del dominio è "relaxed" (modalità flessibile). In questa modalità DKIM deve fornire una firma valida e l'identificativo dell'intestazione "From" può essere parzialmente allineato.

- **ri=86400** - Imposta l'intervallo richiesto tra i rapporti aggregati, in secondi. In questo caso, il report aggregato deve essere generato almeno una volta ogni 86400 secondi (cioè una volta al giorno).

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziazione, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un'assistenza per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).