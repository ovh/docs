---
title: Configura un record DKIM
excerpt: Come configurare un record DKIM sul tuo dominio e sulla tua piattaforma email OVHcloud
updated: 2023-09-07
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il record DKIM (**D**omain**K**eys **I**dentified **M**ail) permette di firmare le email per evitare l'usurpazione d'identità. La firma è basata sul principio della macinazione combinata con una crittografia asimmetrica.

**Questa guida ti mostra come funziona DKIM e come configurarlo per il tuo servizio di posta elettronica.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o dal provider del tuo dominio registrato al di fuori di OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver sottoscritto una delle nostre soluzioni [Exchange](https://www.ovhcloud.com/it/emails/), [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/) o una soluzione email extra OVHcloud con DKIM

> [!warning]
>
> Se il dominio non utilizza i server DNS di OVHcloud, è necessario apportare la modifica del DKIM dall'interfaccia del provider che gestisce la configurazione del dominio.
>
> Se il tuo dominio è registrato presso OVHcloud, verifica che utilizzi la configurazione OVHcloud nel tuo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) utilizzando la scheda `Zona DNS`{.action}.
>

## Procedura

**Sommario**

- [Come funziona il DKIM?](#how-dkim-work)
    - [La macinazione](#hash)
    - [La cifratura asimmetrica](#encrypt)
    - [Come vengono utilizzati la classificazione e la crittografia asimmetrica per il DKIM?](#encrypt-and-hash)
    - [Perché è necessario configurare i server DNS?](#dns-and-dkim)
    - [Esempio di un'email inviata utilizzando il DKIM](#example)
    - [Cos'è un selettore DKIM?](#selector)
- [Configurare DKIM automaticamente per un servizio di posta Exchange o Email Pro di OVHcloud](#auto-dkim)
- [Configurare il DKIM manualmente per un servizio di posta Exchange o Email Pro OVHcloud](#internal-dkim)
    - [Configurazione completa del DKIM](#firststep)
        - [Per Exchange](#confex)
        - [Per Email Pro](#confemp)
    - [I diversi stati del DKIM](#status)
    - [Attiva o modifica un selettore DKIM](#enable-switch)
    - [Disattiva ed elimina il DKIM](#disable-delete)
- [Configurare DKIM per un'offerta email al di fuori del tuo account OVHcloud](#external-dkim)
    - [Record DKIM](#dkim-record)
    - [Record TXT](#txt-record)
    - [Record CNAME](#cname-record)
- [Testa il tuo DKIM](#test-dkim)
- [Casi d'uso](#usecases)
    - [Come cambiare la coppia di chiavi DKIM?](#2selectors)
    - [Perché l'icona DKIM appare in rosso nello Spazio Cliente?](#reddkim)


### Come funziona il DKIM? <a name="how-dkim-work"></a>

Per capire bene perché il DKIM permette di rendere sicuri gli scambi di email, è necessario capire come funziona. Per creare una firma sicura, il DKIM ricorre alla **macinatura** e alla **crittografia asimmetrica**. La **piattaforma email** e la **Zona DNS** del tuo dominio aiuteranno a trasmettere le informazioni del DKIM ai tuoi destinatari.

#### La macinazione <a name="hash"></a>

Il principio della **funzione trituratrice** è quello di generare una **firma** (detta anche impronta) a partire da un dato d'ingresso. Il suo interesse è quello di creare all'uscita una serie di caratteri fissi, qualunque sia la quantità di dati in entrata. 

Nel seguente diagramma, potete constatare che l'uscita (Output) sarà sempre composta da 32 caratteri utilizzando un algoritmo di hash MD5 (**M**essage **D**igest **5**), mentre il testo di entrata (Input) può variare in base alla dimensione. La minima variazione di carattere nel dato d'ingresso cambia completamente la macinatura in uscita, rendendo la firma in uscita imprevedibile e non falsificabile. Nell'esempio che segue, il valore di input (Input) è passato nell'algoritmo di macinazione MD5 e presenta in output (Output) il suo valore di macinazione.

![hash](images/dns-dkim-hash01.png){.thumbnail}

La funzione di scatto è utile per verificare l'integrità di un messaggio. Infatti, due dati apparentemente molto simili presentano un valore di macinazione completamente diverso con una lunghezza di caratteri uguale in uscita, qualunque sia la lunghezza d'ingresso.

#### Crittografia asimmetrica <a name="encrypt"></a>

La **cifratura**, come indica il nome, ha lo scopo di cifrare i dati che gli vengono dati. È "**asimmetrico**" perché la chiave di crittografia non è la stessa della chiave di decifrare, a differenza di una crittografia simmetrica che utilizzerà la stessa chiave per cifrare e decifrare.

Nella crittografia asimmetrica, si usa una **chiave pubblica** e una **chiave privata**. La chiave pubblica è visibile e utilizzabile da tutti. La chiave privata è utilizzata solo dal proprietario e non è visibile a tutti. 

Esistono due utilizzi della cifratura asimmetrica:

- **L'input viene cifrato con la chiave pubblica e decifrato da chi possiede la chiave privata**. Ad esempio, vuoi che un terzo ti trasmetta dati in modo sicuro. Trasmetti la tua chiave pubblica senza preoccuparti che qualcuno la recuperi, questo terzo cripterà i suoi dati con la tua chiave pubblica. I dati numerici potranno essere decifrati solo dal proprietario della chiave privata.

![hash](images/dns-dkim-crypto01.png){.thumbnail}

- **Il dato d'ingresso è cifrato dal proprietario della chiave privata e decifrato dalla chiave pubblica**. Questo utilizzo si applica per autenticare uno scambio di dati. Ad esempio, i vostri destinatari desiderano assicurarsi che siate l'autore del messaggio che trasmettete loro. In questo caso, cripterai il tuo messaggio con la tua chiave privata. Questo messaggio potrà essere decifrato solo tramite la chiave pubblica che avrai trasmesso a tutti, garantendo così ai tuoi destinatari l'autenticità del tuo messaggio. Infatti, un messaggio decifrato dalla chiave pubblica può provenire soltanto dal proprietario della chiave privata.

![hash](images/dns-dkim-crypto02.png){.thumbnail}

#### Come vengono utilizzati la classificazione e la crittografia asimmetrica per il DKIM? <a name="encrypt-and-hash"></a>

Dalla piattaforma email, il DKIM utilizzerà l'hash per creare una firma a partire da alcuni elementi [dell'intestazione dell'email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) e del corpo dell'email (contenuto dell'email).

La firma viene poi cifrata con la chiave privata utilizzando la crittografia asimmetrica.

#### Perché è necessario configurare i server DNS? <a name="dns-and-dkim"></a>

Affinché il destinatario possa verificare la firma DKIM del mittente, avrà bisogno dei parametri DKIM e soprattutto della chiave pubblica per decifrarla. La [zona DNS](/pages/web_cloud/domains/dns_zone_edit) di un dominio è pubblica, motivo per cui è stato aggiunto un record DNS per trasmettere la chiave pubblica e i parametri DKIM al destinatario.

#### Cos'è un selettore DKIM <a name="selector"></a>

Quando attivate il DKIM, questo funziona con una coppia di chiavi pubbliche / chiave privata. È possibile attribuire più coppie di chiavi al tuo dominio, ad esempio tramite rotazione. Quando cambi coppie di chiavi, la vecchia coppia deve rimanere attiva per il tempo che tutte le email che hai inviato con la vecchia chiave non incontrano errori nella verifica del DKIM sul server di ricezione.

Perché questo principio di rotazione funzioni, utilizzeremo quello che chiamiamo gli **elettori DKIM**. Un selettore DKIM comprende una coppia di chiavi private/chiave pubblica. È visibile come stringa nella firma DKIM di un'email con l'argomento `s=`. Questa firma è visibile nell'intestazione [dell'email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Esempio di una parte della firma DKIM**

<pre class="bgwhite"><code>DKIM-Firma: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

Il valore del selettore è `s=ovhex123456-selector1`.

#### Esempio di un'email inviata utilizzando il DKIM <a name="example"></a>

Quando invii un'email da **contact@mydomain.ovh**, una firma cifrata con una chiave privata (private key) viene aggiunta nell'intestazione dell'email.

![email](images/dns-dkim-send.gif){.thumbnail}

Il destinatario **recipient@otherdomain.ovh** potrà decifrare questa firma con la chiave pubblica (Public key) visibile nella zona DNS di **mydomain.ovh**. La firma viene creata a partire dal contenuto dell'email inviata. Ciò significa che se l'email viene modificata durante il transito, la firma non corrisponde al contenuto e causerà quindi il fallimento della verifica DKIM sul server di destinazione.

![email](images/dns-dkim-receive.gif){.thumbnail}

### Configurare il DKIM automaticamente per un servizio di posta Exchange o Email Pro OVHcloud <a name="auto-dkim"></a>

La configurazione automatica di DKIM è accessibile per le offerte di posta elettronica [Exchange](https://www.ovhcloud.com/it/emails/) e [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/).

Di default, il DKIM non è attivo quando aggiungi un dominio alla tua piattaforma. È quindi necessario avviare il processo di configurazione automatica dallo Spazio Cliente.

Clicca sulla scheda qui sotto corrispondente alla tua offerta.

> [!tabs]
> **Exchange**
>>
>> Dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Microsoft`{.action}, poi su `Exchange`{.action}. Clicca sul nome del servizio Exchange interessato. Infine, clicca sulla scheda `Domini associati`{.action}.
>>
>> A destra del dominio in questione, la casellina `DKIM` è grigia.
>>
>>![email](images/dkim-auto01.png){.thumbnail}
>>
> **Email Pro**
>>
>> Dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Email Pro`{.action}, poi sul nome del servizio Email Pro interessato. Infine, clicca sulla scheda `Domini associati`{.action}.
>>
>> A destra del dominio in questione, la casellina `DKIM` è grigia.
>>
>>![email](images/dkim-auto01.png){.thumbnail}

Per attivare il DKIM, clicca sulla casellina `DKIM` grigia e poi su `Conferma`{.action} dalla finestra di attivazione che appare.

![email](images/dkim-auto02.png){.thumbnail}

> [!warning]
>
> Per configurare automaticamente la zona DNS del dominio è necessario che sia gestita dallo stesso account cliente OVHcloud della tua piattaforma di posta. Nell’ambito di una zona DNS gestita da un altro account cliente OVHcloud o da un dominio esterno a OVHcloud, sarà necessario inserire manualmente i record DNS.
>
> Per farlo, segui il passaggio "**3.Recupera il record DNS**" della sezione [Configurazione completa del DKIM](#firststep), seguendo il capitolo corrispondente al tuo servizio di posta, [Exchange](#confex) o [Email Pro](#confemp).

L'attivazione automatica del DKIM dura tra 30 minuti e 24 ore al massimo. Per verificare che la tua DKIM sia funzionante, è sufficiente tornare alla scheda `Domini associati`{.action} della tua piattaforma e assicurarti che la casellina `DKIM` sia diventata verde.

![email](images/dkim-auto03.png){.thumbnail}

Dopo le 24 ore, se la tua casellina `DKIM` è rossa, consulta la sezione ["Perché il DKIM non funziona e appare in rosso nello Spazio Cliente?"](#reddkim) di questa guida.

### Configurare il DKIM manualmente per un servizio di posta Exchange o Email Pro OVHcloud <a name="internal-dkim"></a>

Per configurare il tuo DKIM, è necessario recuperare il riferimento della tua piattaforma Exchange o Email Pro. 

Clicca sulla scheda qui sotto corrispondente alla tua offerta.

> [!tabs]
> **Exchange**
>>
>> Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Microsoft`{.action} e poi su `Exchange`{.action}. Infine clicca sul nome del servizio Exchange interessato. Di default, il nome della tua piattaforma corrisponde al suo riferimento o sarà visibile con il nome che le hai assegnato (vedi l'immagine qui sotto).
>>
>> ![email](images/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **Email Pro**
>>
>> Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Email Pro`{.action} e poi sul nome del servizio Email Pro interessato. Di default, il nome della tua piattaforma corrisponde al suo riferimento o sarà visibile con il nome che le hai assegnato (vedi l'immagine qui sotto).
>>
>> ![email](images/dns-dkim-platform-emailpro.png){.thumbnail}

Assicurati anche che il dominio da utilizzare per le tue email sia attivo nella sezione `Domini associati`{.action}.

![email](images/dns-dkim-domain.png){.thumbnail}

Per configurare il DKIM, accedi al sito <https://api.ovh.com/console/> utilizzando il pulsante `Login`{.action} in alto a destra e inserisci le credenziali OVHcloud.

> Clicca sulla nostra guida ["Scopri come utilizzare le API OVHcloud"](/pages/manage_and_operate/api/first-steps) se non hai mai utilizzato le API.

Clicca sulla sezione `/email/exchange` (offerte Exchange) o `/email/pro` (offerta Email Pro) delle API e digita "dkim" nella casella `Filter` per far apparire solo le API relative al DKIM.

![email](images/dns-dkim-api01.png){.thumbnail}

#### Configurazione completa del DKIM <a name="firststep"></a>

##### **Per Exchange** <a name="confex"></a>

Clicca sui **5 step** seguenti, cliccando su ciascuna scheda.

> [!tabs]
> **1.Elenco degli elettori**
>> Prima di creare uno degli elettori per il tuo dominio, è necessario recuperare il nome assegnato automaticamente dalla piattaforma Exchange.<br>
>> <br>
>> Per farlo, utilizza questa chiamata API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale vuoi attivare DKIM. <br>
>>
>> *Esempio di risultato:* 
>> ``` console
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2.Creare un selettore**
>> A questo punto crei un selettore, genera il suo paio di chiavi e il record DNS associato al dominio.<br>
>> <br>
>> Per farlo, utilizza questa chiamata API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale vuoi attivare il DKIM.
>> - `autoEnableDKIM` : il DKIM verrà attivato direttamente selezionando questa casella. **Non spuntare questa casella se il tuo dominio non è registrato nello stesso account cliente OVHcloud o in un altro provider**.
>> - `configuraDkim` : il record CNAME verrà aggiunto automaticamente alla tua zona DNS se il dominio è gestito nello stesso account cliente OVHcloud della tua piattaforma Exchange. **Non spuntare questa casella se il tuo dominio non è registrato nello stesso Spazio Cliente OVHcloud o in un altro Registrar**.
>> - `selectorName` : inserisci il nome di un selettore che hai rilevato nello step precedente (esempio: "ovhex123456-selector1"). <br>
>>
>> Clicca su `Execute`{.action} per avviare la creazione del selettore.<br>
>> > 
>> > [!primary]
>> > 
>> > Ti consigliamo di eseguire questa operazione due volte per ciascuno dei selettori elencati in precedenza. Il secondo selettore vi permetterà di effettuare un cambio di coppia di chiavi quando sarà necessario. **Non selezionare la casella `autoEnableDKIM`{.action} quando si crea il secondo selettore** per non creare un conflitto con l'attivazione del primo selettore. Ti consigliamo di consultare il nostro case study ["Come cambiare la coppia di chiavi DKIM"](#2selectors) quando vuoi passare al secondo selettore.
>> <br>
>>
>> *Esempio di risultato:*
>> ``` console
>> status: "todo",
>> funzione: "addExchangeDomainDKIM",
>> id: 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Se il tuo dominio è gestito nello stesso Spazio Cliente della tua piattaforma e hai selezionato `autoEnableDKIM` e `configuratoDkim`, accedi direttamente alla sezione [**I diversi stati del DKIM**](#dkim-status) qui sotto per monitorare l'attivazione del DKIM.
>>
> **3.Recuperare il record DNS**
>> È necessario configurare manualmente la zona DNS del dominio **in questi casi**:
>>
>> - la piattaforma Exchange è associata a un dominio gestito su un altro account cliente OVHcloud<br>
>> - la piattaforma Exchange è associata a un dominio gestito presso un altro provider;<br>
>> - hai scelto di non selezionare la casella `configurata Dkim` allo step precedente.<br>
>>
>> Per configurare la tua zona DNS, è necessario recuperare i valori del record DNS **per ogni selettore se ne sono stati creati due**. Per farlo, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `selectorName` : inserisci il nome del selettore creato nello step precedente.
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale vuoi configurare il DKIM.
>>
>> *Esempio di risultato:*
>> ``` console
>> targetRecord: "ovhex123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhex1234565-selector1"
>> ```
>> Ottieni i valori `customerRecord` e `targetRecord` in un file di testo. Vai alla fase successiva.
>>
>> > [!primary]
>> >
>> > È possibile che lo `status:` o in `todo`, questo non influisce sulla configurazione della tua zona DNS.
>>
> **4.Configura il record DNS**
>> Da [l'area clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) dove il nome del dominio del tuo Piattaforma Exchange, nella scheda `Web Cloud`{.action}, fai clic su `Nomi di dominio`{.action} nella colonna di sinistra e seleziona il nome di dominio pertinente.<br>
>> Clicca sulla scheda `Zona DNS`{.action} e poi su `Aggiungi un record`{.action} nella finestra che appare. Scegli `CNAME` e completa in base ai valori rilevati.<br>
>>
>> Se prendiamo i valori dell'esempio nello step "**3.Recupera il record DNS**":
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` corrisponde al sottodominio del record CNAME. Si tiene `ovhex123456-selector1._domainkey` perché il `.mydomain.ovh` è già precompilato. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` corrisponde al bersaglio della registrazione. Aggiungiamo un punto alla fine per mettere a segno il valore. Questo da `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](images/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Una volta inseriti i valori, clicca su `Seguente`{.action} e poi `Conferma`{.action}.
>>
>> **Ripetere l'operazione per il secondo selettore se è stato creato.**<br>
>>
>> Se configuri la tua zona DNS in un'interfaccia esterna a OVHcloud, il record CNAME deve avere la forma seguente:
>>
>> ``` console
>> ovhex123456-selector1._domainkey IN CNAME ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Ti ricordiamo che la propagazione delle modifiche alla zona DNS richiede un tempo di propagazione. Di solito è breve ma può durare fino a 24 ore.
>>
> **5.Attivazione del DKIM**
>> > [!warning]
>> >
>> > Dalla sezione [**Gli stati del DKIM**](#dkim-status) di questa guida, verifica che il valore `status:` è in `ready` prima di attivare il DKIM.
>>
>> Per attivare il DKIM, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `selectorName` : inserisci il nome del selettore che hai creato.
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale vuoi attivare il DKIM.
>>
>> *Esempio di risultato :*
>> ``` console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Ora hai eseguito tutte le manipolazioni per attivare il DKIM. Per assicurarti che sia abilitato, consulta la sezione [**"I diversi stati DKIM"**](#dkim-status) di questa guida per verificare che il valore `status:` sia in `inProduction`. In tal caso, il tuo DKIM è ora attivo.<br><br> **Se sono stati creati due selettori**, il secondo selettore dovrebbe essere in `status: "ready"`.
>>

##### **Per Email Pro** <a name="confemp"></a>

Clicca sui **5 step** seguenti, cliccando su ciascuna scheda.

> [!tabs]
> **1.Elenco degli elettori**
>> Prima di creare uno degli elettori per il tuo dominio, è necessario recuperare il nome assegnato automaticamente dalla piattaforma Email Pro.<br>
>> <br>
>> Per farlo, utilizza questa chiamata API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>> <br>
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro sulla quale vuoi attivare DKIM. <br>
>>
>> *Esempio di risultato:* 
>> ``` console
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2.Creare un selettore**
>> A questo punto crei un selettore, genera il suo paio di chiavi e il record DNS associato al dominio.<br>
>> <br>
>> > [!primary]
>> > 
>> > Ti consigliamo di eseguire questa operazione due volte per ciascuno dei selettori elencati in precedenza. Il secondo selettore vi permetterà di effettuare un cambio di coppia di chiavi quando sarà necessario. Ti invitiamo a consultare il nostro case study ["Come cambiare la sua coppia di chiavi DKIM"](#2selectors).
>> <br>
>> Per farlo, utilizza questa chiamata API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro sulla quale vuoi attivare il DKIM.
>> - `autoEnableDKIM` : il DKIM verrà attivato direttamente selezionando questa casella. **Non spuntare questa casella se il tuo dominio non è registrato nello stesso account cliente OVHcloud o in un altro provider**.
>> - `configuraDkim` : il record CNAME verrà aggiunto automaticamente alla tua zona DNS se il dominio è gestito nello stesso account cliente OVHcloud della tua piattaforma Email Pro. **Non spuntare questa casella se il tuo dominio non è registrato nello stesso Spazio Cliente OVHcloud o in un altro Registrar**.
>> - `selectorName` : inserisci il nome di un selettore rilevato nello step precedente. (esempio: "ovhemp123456-selector1") <br>
>>
>> Clicca su `Execute`{.action} per avviare la creazione del selettore.<br>
>>
>> *Esempio di risultato:*
>> ``` console
>> status: "todo",
>> funzione: "addDomainDKIM",
>> id: 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Se il tuo dominio è gestito nello stesso Spazio Cliente della tua piattaforma e hai selezionato `autoEnableDKIM` e `configureDkim`, accedi direttamente alla sezione [**I diversi stati del DKIM**](#dkim-status) qui sotto per monitorare l'attivazione del DKIM.
>>
> **3.Recuperare il record DNS**
>> È necessario configurare manualmente la zona DNS del dominio **in questi casi**:
>>
>> - la piattaforma Email Pro è associata a un dominio gestito su un altro account cliente OVHcloud<br>
>> - la piattaforma Email Pro è associata a un dominio gestito presso un altro provider<br>
>> - hai scelto di non selezionare la casella `configurata Dkim` allo step precedente.<br>
>>
>> Per configurare la zona DNS è necessario recuperare i valori del record DNS **per ogni selettore, se ne sono stati creati due**. Per farlo, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1".
>> - `selectorName` : inserisci il nome del selettore creato nello step precedente.
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Proe su cui vuoi configurare il DKIM.
>>
>> *Esempio di risultato:*
>> ``` console
>> targetRecord: "ovhemp123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhemp1234565-selector1"
>> ```
>> Ottieni i valori `customerRecord` e `targetRecord` in un file di testo. Vai alla fase successiva..
>>
>> > [!primary]
>> >
>> > È possibile che lo `status:` o in `todo`, questo non influisce sulla configurazione della tua zona DNS.
>>
> **4.Configura il record DNS**
>> Da [l'area clienti OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) dove il nome del dominio del tuo Piattaforma E-mail Pro, nella scheda `Web Cloud`{.action}, fai clic su `Nomi di dominio`{.action} nella colonna di sinistra e seleziona il nome di dominio pertinente.<br>
>> Clicca sulla scheda `Zona DNS`{.action} e poi su `Aggiungi un record`{.action} nella finestra che appare. Scegli `CNAME` e completa in base ai valori rilevati.<br>
>>
>> Se prendiamo i valori dell'esempio nello step "**3.Recupera il record DNS**":
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` corrisponde al sottodominio del record CNAME. Si tiene `ovhemp123456-selector1._domainkey` perché il `.mydomain.ovh`è già precompilato. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` corrisponde al bersaglio della registrazione. Aggiungiamo un punto alla fine per mettere a segno il valore. Questo da `ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](images/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Una volta inseriti i valori, clicca su `Seguente`{.action} e poi `Conferma`{.action}.<br>
>>
>> **Ripetere l'operazione per il secondo selettore se è stato creato.**<br>
>>
>> Se configuri la tua zona DNS in un'interfaccia esterna a OVHcloud, il record CNAME deve avere la forma seguente:
>>
>> ``` console
>> ovhemp123456-selector1._domainkey IN CNAME ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Ti ricordiamo che la propagazione delle modifiche alla zona DNS richiede un tempo di propagazione. Di solito è breve ma può durare fino a 24 ore.
>>
> **5.Attivazione del DKIM**
>> > [!warning]
>> >
>> > Dalla sezione [**Gli stati del DKIM**](#dkim-status) di questa guida, verifica che il valore `status:` è in `ready` prima di attivare il DKIM.
>>
>> Per attivare il DKIM, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1".
>> - `selectorName` : inserisci il nome del selettore che hai creato.
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro sulla quale vuoi attivare il DKIM.
>>
>> *Esempio di risultato:*
>> ``` console
>> id: 108716876
>> todoData: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> funzione: "enableDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Hai effettuato tutte le operazioni necessarie per attivare il DKIM. Per assicurarti che sia attivo, consulta la sezione [**"I diversi stati del DKIM"**](#dkim-status) di questa guida per verificare che il valore `status:` è in `produzione`. In caso affermativo, il tuo DKIM è attivo.
>>

#### I diversi stati del DKIM <a name="dkim-status"></a>

Seleziona il servizio di posta in questione nelle seguenti schede:

> [!tabs]
> **Exchange**
>> Durante le operazioni sul DKIM della piattaforma Exchange, utilizza la chiamata API qui sotto per verificare lo stato attuale del DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che hai creato. <br>
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale il DKIM deve essere presente. <br>
>>
>> Guardate poi il valore `status:` nel risultato:
>>
>> - `todo` : l'operazione è stata avviata, sta per iniziare. <br>
>> - `WaitingRecord` : i record DNS sono in attesa di configurazione o di convalida nella zona DNS del dominio. È necessario effettuare una verifica automatica regolare per verificare se il record DNS è presente e inserito correttamente.
>> - `ready` : i record DNS sono presenti nella zona. A questo punto il DKIM può essere attivato. <br>
>> - `inProduction` : il DKIM è configurato e attivato correttamente ed è quindi pienamente operativo. <br>
>> - `disabling` : disattivazione del DKIM in corso.<br>
>> - `deleting` : l'eliminazione del DKIM è in corso. <br>
>>
>> Se si verifica il seguente errore durante l'avvio della chiamata API, significa che il selettore non esiste o è stato eliminato. Dovremo crearlo.
>>
>> ``` console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) di cui non esist" }
>> ```
> **Email Pro**
>> Durante le operazioni sul DKIM della tua piattaforma Email Pro, utilizza la chiamata API qui sotto per verificare lo stato attuale del DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che hai creato. <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro sulla quale il DKIM deve essere presente. <br>
>>
>> Guardate poi il valore `status:` nel risultato:
>>
>> - `todo` : l'operazione è stata avviata, sta per iniziare. <br>
>> - `WaitingRecord` : i record DNS sono in attesa di configurazione o di convalida nella zona DNS del dominio. È necessario effettuare una verifica automatica regolare per verificare se il record DNS è presente e inserito correttamente. <br>
>> - `ready` : i record DNS sono presenti nella zona. A questo punto il DKIM può essere attivato. <br>
>> - `inProduction` : il DKIM è configurato e attivato correttamente ed è quindi pienamente operativo. <br>
>> - `disabling` : disattivazione del DKIM in corso. <br>
>> - `deleting` : l'eliminazione del DKIM è in corso. <br>
>>
>> Se si verifica il seguente errore durante l'avvio della chiamata API, significa che il selettore non esiste o è stato eliminato. Dovremo crearlo.
>>
>> ``` console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) di cui non esist" }
>> ```

#### Attiva o modifica un selettore DKIM <a name="enable-switch"></a>

> [!warning]
>
> Il selettore DKIM deve essere in stato `ready` prima di poter essere attivato.

Seleziona il servizio di posta in questione nelle seguenti schede:

> [!tabs]
> **Exchange**
>> Per attivare il DKIM su un selettore, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".<br>
>> - `selectorName` : inserisci il nome di un selezionatore esistente.<br>
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1".<br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange sulla quale vuoi attivare il DKIM.<br>
>>
> **Email Pro**
>> Per attivare il DKIM su un selettore, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che hai creato.<br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro sulla quale il DKIM deve essere presente.<br>
>>

> [!primary]
>
> Durante la rotazione del selettore DKIM, potrai attivare direttamente il secondo selezionatore che hai creato per ribaltarlo, conservando il primo selettore che resterà attivo per tutto il tempo che tutte le email rilasciate con questo saranno analizzate correttamente dal destinatario.

#### Disattiva ed elimina il DKIM <a name="enable-switch"></a>

> [!warning]
>
> Il selettore DKIM deve trovarsi nello stato `inProduction` o `ready` prima di poter essere disabilitato.

Seleziona il servizio di posta in questione nelle seguenti schede:

> [!tabs]
> **Exchange**
>> Per disattivare il DKIM senza rimuovere il selettore e la sua coppia di chiavi, utilizza questa chiamata API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che vuoi disattivare. <br>
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange. <br>
>>
>> Per eliminare il selettore DKIM e il suo paio di chiavi, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz111111-1" o ">>private-zz11111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che vuoi eliminare. <br>
>> - `exchangeService` : inserisci il nome della tua piattaforma Exchange in formato "hosted-zz11111-1" o "private-zz11111-1". <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Exchange. <br>
>>
> **Email Pro**
>> Per disattivare il DKIM senza rimuovere il selettore e la sua coppia di chiavi, utilizza questa chiamata API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che vuoi disattivare. <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro. <br>
>>
>> Per eliminare il selettore DKIM e il suo paio di chiavi, utilizza questa chiamata API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro DELETE /email/pro/{service}/dominio/{domainName}/dkim/{selectorName}
>> >
>>
>> - `servizio` : inserisci il nome della tua piattaforma Email Pro nella forma "emailpro-zz111111-1". <br>
>> - `selectorName` : inserisci il nome del selettore che vuoi eliminare. <br>
>> - `domainName` : inserisci il dominio associato alla tua piattaforma Email Pro. <br>
>>


### Configurare il DKIM per un'offerta email al di fuori del tuo account OVHcloud <a name="external-dkim"></a>

Per configurare la tua zona DNS per aggiungere un record DKIM sulla tua offerta, segui le istruzioni qui sotto.

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla scheda `Web Cloud`{.action} e poi su `Domini`{.action} nella colonna di sinistra.

Clicca sulla scheda `Zona DNS`{.action} e poi su `Aggiungi un record`{.action}. Per configurare il DKIM nella tua zona DNS, è possibile aggiungere un record in 3 modi:

- [un record DKIM](#dkim-record): configurazione che permette di visualizzare tutti i parametri di un record DKIM.
- [un record TXT](#txt-record): i record da utilizzare quando ti sono stati forniti tutti i parametri DKIM.
- [un record CNAME](#cname-record): record utilizzato per una soluzione email OVHcloud o un server di posta Microsoft.

#### Record DKIM <a name="dkim-record"></a>

Questo record è chiamato DKIM sull'interfaccia ma in realtà è un record TXT in uscita. Il record DKIM ha lo scopo di facilitare la lettura dei diversi elementi di configurazione del DKIM, presentando questi elementi sotto forma di caselle indipendenti.

![email](images/dns-dkim-add.png){.thumbnail}

- **Sottodominio**: inserisci il nome del selettore DKIM e aggiungi `._domainkey` in suffisso, il tuo dominio si aggiunge automaticamente alla fine.

*esempio:*

``` console
  selector-name._domainkey.mydomain.ovh.
```

- **Versione (v=)**: serve a indicare la versione del DKIM. Si raccomanda di utilizzarla e il suo valore predefinito è `DKIM1`.<br>
Se specificato, questo tag deve essere inserito per primo nel record e deve essere uguale a "DKIM1" (senza virgolette). I record che iniziano con un tag "v=" con un altro valore devono essere ignorati.

- **Granularità (g=)**: permette di specificare la parte "locale-partenza" di un indirizzo email, cioè quella situata anteriormente a "@".<br>
In questo modo è possibile specificare l'indirizzo email o gli indirizzi autorizzati a firmare un messaggio elettronico con la chiave DKIM del selettore.<br>
Il valore predefinito di "g=" è "\*", il che significa che tutti gli indirizzi email sono autorizzati ad utilizzare la chiave di firma DKIM.<br>
Indicando un valore specifico per "g=", l'utilizzo della chiave può essere limitato a una parte locale di indirizzo email specifico o a una gamma di indirizzi email specifici utilizzando caratteri generici (ad esempio: "\*-group").

- **Algoritmo (hash=)**: permette di specificare gli algoritmi di hash utilizzati per firmare le intestazioni di email. Questo tag permette di definire una lista di algoritmi di hash che saranno utilizzati per generare una firma DKIM per un messaggio specifico.

- **Tipo di chiave (k=)**: specifica l'algoritmo di firma utilizzato per firmare i messaggi elettronici uscenti. Il messaggio è stato firmato e il metodo utilizzato per verificarne l'autenticità.<br>
I possibili valori per il tag "k=" includono "rsa" per l'algoritmo di firma RSA e "ed25519" per l'algoritmo di firma Ed25519. La scelta dell'algoritmo dipende dalla politica di sicurezza del mittente e dalla presa in carico da parte del destinatario.

- **Note (n=)**: Serve a includere note di interesse per gli amministratori che gestiscono il sistema di chiavi DKIM.<br>
Queste note possono essere utili per ragioni di documentazione o per aiutare gli amministratori a comprendere o gestire il funzionamento di DKIM. Le note incluse in n= non sono interpretate dai programmi e non incidono sul funzionamento del DKIM.

- **Chiave pubblica (base64) (p=)**: utilizzato per inserire i dati della chiave pubblica DKIM, codificati in base64.<br>
Questo tag è obbligatorio nella firma DKIM e permette ai destinatari della firma di recuperare la chiave pubblica necessaria per verificare l'autenticità del messaggio firmato.

- **Rimuovi la chiave pubblica**: se una chiave pubblica DKIM è stata rimossa (ad esempio in caso di manomissione della chiave privata), si deve utilizzare un valore vuoto per il tag "p=", indicando che la chiave pubblica non è più valida. I destinatari devono restituire un errore per ogni firma DKIM che faccia riferimento a una chiave revocata.

- **Tipo di servizio (s=)**c: Il tag "s=" (Service Type) è facoltativo e non è presente di default. Permette di specificare il tipo o i tipi di servizi ai quali si applica questo record DKIM.<br>
I tipi di servizi sono definiti utilizzando un elenco di parole chiave separate da due punti ":".<br>
Il destinatario deve ignorare tale registrazione se il tipo di servizio adeguato non è registrato.<br>
Il tag "s=" è destinato a limitare l'uso delle chiavi per altri scopi, nel caso in cui l'utilizzo del DKIM sia definito per altri servizi in futuro.<br>
I tipi di servizi attualmente definiti sono "\*" (tutti i tipi di servizi), "email" (e-mail).

- **Modalità test (t=y)**: permette ai proprietari del dominio di testare l'installazione del DKIM senza rischiare di vedere i messaggi respinti o contrassegnati come SPAM se la verifica della firma DKIM fallisce.<br>
Quando si usa il flag "t=y", il destinatario non deve trattare diversamente i messaggi firmati in modalità di test e i messaggi non firmati. Tuttavia, il destinatario può seguire l'esito del test per aiutare i firmatari.

- **Sottodomini (t=s)**: permette di limitare l'utilizzo della firma DKIM esclusivamente a nome di dominio (ad esempio: @mydomain.ovh) o di permettere l'invio dal dominio e dai suoi sottodomini (ad esempio: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh, etc).

#### Record TXT <a name="txt-record"></a>

È il tipo di record nativo utilizzato per configurare il DKIM nella zona DNS del tuo dominio. Per completare la configurazione è necessario possedere una buona sintassi.

Questo tipo di configurazione DKIM è consigliato quando le informazioni da inserire ti sono state comunicate dal provider del servizio di posta elettronica.

Per una comprensione completa della composizione del record DKIM, consulta la sezione precedente di questa guida intitolata "[Record DKIM](#dkim-record)".

**Esempio di un record DKIM**

- sottodominio:

``` console
selector-name._domainkey.mydomain.ovh.
```

- destinazione:

``` console
v=DKIM1;t=s;p= MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA77VDAIfyhjtoF0DIE5V7 rev1EKk4L0nxdBpD5O/jPrM4KP0kukeuB6IMpVplkkq52MSDeRcjoO50h0DmwZOr RUkyGjQwOnAh0VhY3fqkuwBYftEX7vWo8C2E1ylzimABkwPpSL62jZ1DheoXcil9 1M35wWBKtlYdXVedKjCQKOEnwTo+0hdNe38rU9NMgq6nbTIMjDntvxoVI+yF3kcx q/VpAY8BIYbcAXkVFvUyfUBABnnKpf0SfblsfcLW0Koy/FRxPDFOvnjNxXeOxMFR UI6K6PaW2WvtbJG2v+gHLY5M4tB0+/FNJU9emZfkPOk3DmRhZ8ENi7+oZa2ivUDj OQIDAQAB
```

#### Record CNAME <a name="cname-record"></a>

Il record CNAME è un alias. Questo significa che il valore di riferimento reindirizza verso un URL che fornirà il record DKIM al server che interrogherà il record CNAME. Questo tipo di record CNAME per configurare il DKIM è frequente per l'utilizzo di un server email Microsoft.

È soddisfatto del tipo di record utilizzato per attivare il DKIM su un dominio dichiarato per un'offerta Exchange OVHcloud. Questo processo permette al vostro fornitore di soluzioni email di gestire per voi la sicurezza e l'aggiornamento del DKIM. In questo modo il provider di soluzioni di posta elettronica può gestire la sicurezza e l'aggiornamento di DKIM.

### Testa il tuo DKIM <a name="test-dkim"></a>

Ti consigliamo di inviare un'email da un account della tua piattaforma Exchange a un indirizzo email che verifica la firma DKIM al momento della ricezione.

Ecco cosa si trova nell'intestazione dell'email ricevuta:

<pre class="bgwhite"><code>ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: &lt;test-dkim@mydomain.ovh>
</code></pre>

Per recuperare l'intestazione di un'email, consulta la guida [Recuperare l'intestazione di un'email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

### Casi d'uso <a name="usecases"></a>

#### Come e perché cambiare la sua coppia di chiavi DKIM? <a name="2selectors"></a>

Quando attivi per la prima volta il DKIM sul tuo servizio di posta, è possibile creare 2 selettori che contengono ciascuno una coppia di chiavi. Il secondo selettore funge da successore di quello attualmente in uso.

Per evitare tentativi di decrittografia della chiave DKIM, è consigliabile modificare regolarmente le coppie di chiavi. Per farlo, assicurati di aver configurato correttamente i tuoi 2 selettori verificando che il primo sia in stato `inProduction`e il secondo in stato `ready`. Per verificare questo stato, consulta la sezione ["I diversi stati del DKIM"](#dkim-status).

Clicca sulla scheda qui sotto corrispondente alla tua offerta.

> [!tabs]
> **Exchange**
>> Per passare al secondo selettore, utilizza la chiamata API seguente:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "hosted-zz111111-1" o "private-zz111111-1". <br>
>> - `selectorName`: immettere il nome del selettore su cui si desidera eseguire il failover. <br>
>> - `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma di "hosted-zz111111-1" o "private-zz111111-1". <br>
>> - `domainName` : inserisci il dominio associato alla piattaforma Exchange. <br>
>>
> **Email Pro**
>> Per passare al secondo selettore, utilizza la chiamata API seguente:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service`: inserisci il nome della piattaforma Email Pro che si presenta sotto forma di "emailpro-zz111111-1". <br>
>> - `selectorName`: immettere il nome del selettore su cui si desidera eseguire il failover. <br>
>> - `domainName`: inserisci il dominio associato alla piattaforma Email Pro su cui deve essere presente il DKIM.<br>
>>

Dopo aver effettuato il passaggio al nuovo selettore, conservare il vecchio per 7 giorni prima di eliminarlo e crearne uno nuovo.

#### Perché il DKIM non funziona e appare in rosso nello Spazio Cliente? <a name="reddkim"></a>

Ti accorgi che le tue email non sono firmate da DKIM, nonostante la sua attivazione o la sua configurazione. Per prima cosa, accedi allo Spazio Cliente e verifica lo stato del DKIM.

Clicca sulla scheda qui sotto corrispondente alla tua offerta per verificare lo stato del DKIM sulla tua piattaforma di posta.

> [!tabs]
> **Exchange**
>>
>> Dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Microsoft`{.action} e poi su `Exchange`{.action}. Infine clicca sul nome del servizio Exchange interessato.<br><br> Nella sezione `Domini associati`{.action}, verifica il colore dell’icona `DKIM` a destra del dominio interessato (vedi l’immagine qui sotto).
>>
>>![email](images/red-dkim.png){.thumbnail}
>>
> **Email Pro**
>>
>> Dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/it/&ovhSubsidiary=it), nella scheda `Web Cloud`{.action}, clicca su `Email Pro`{.action} e poi sul nome del servizio Email Pro in questione.<br><br> Nella sezione `Domini associati`{.action}, verifica il colore dell’icona `DKIM` a destra del nome di dominio interessato (vedi l’immagine qui sotto).
>>
>>![email](images/red-dkim.png){.thumbnail}

Se hai appena configurato il DKIM, significa che l'attivazione del DKIM non è terminata, **ti consigliamo di attendere 24 ore**.

Se lo stato rimane rosso dopo 24 ore, controllare lo stato del selettore attivato. Per farlo, consulta la sezione "[I diversi stati del DKIM](#dkim-status)" di questa guida.

Ecco i 4 stati che hanno come risultato l'icona DKIM in rosso nel tuo Spazio Cliente:

 - `WaitingRecord`: i record DNS sono in attesa di configurazione o in corso di convalida nella zona DNS del nome di dominio. Verifica automaticamente e regolarmente se il record DNS è presente e inserito correttamente. In base all’offerta, segui lo **step 5** nella sezione "[Configurazione completa del DKIM](#firststep)" per configurare correttamente la zona DNS del dominio in questione.
 - `ready` : i record DNS sono presenti nella zona. A questo punto DKIM può essere attivato. Sarà sufficiente attivare il selettore cliccando sulla sezione "[Attiva o modifica un selettore DKIM](#enable-switch)".
 - `deleting`: eliminazione DKIM in corso. Dopo l’eliminazione, segui la sezione "[Configurazione completa del DKIM](#firststep)".
 - `disabling`: disattivazione del DKIM in corso. Dopo questa operazione, è possibile attivare il selettore dalla sezione "[Attiva o modifica un selettore DKIM](#enable-switch)".
 - `todo`: l’operazione è stata inizializzata, deve essere avviata. Oltre le 24 ore, se il selettore è ancora in questo stato, ti invitiamo ad aprire un [ticket presso il supporto](https://help.ovhcloud.com/csm?id=csm_cases_requests) precisando il numero del selettore in questione.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com).
