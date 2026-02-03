---
title: OVHcloud AntiSpam - Migliori pratiche e sblocco di un indirizzo IP
excerpt: Come sbloccare un indirizzo IP bloccato per SPAM
updated: 2026-01-06
---

## Obiettivo

Per ogni indirizzo IP disponibile sui prodotti e servizi OVHcloud, in qualità di provider di accesso a Internet, lo registriamo e lo prenotamo presso organizzazioni come [RIPE](https://www.ripe.net/) o [ARIN](https://www.arin.net/). In questo caso, sembriamo il contatto *abusivo* della proprietà intellettuale in caso di controversia nel database *WHOIS*.

Se un indirizzo IP viene segnalato a organizzazioni come Spamhaus, SpamCop, ecc. che lottano contro lo SPAM, i siti malevoli e il phishing, è in gioco la reputazione dell'intera rete OVHcloud.

È quindi importante che OVHcloud si occupi della reputazione, della qualità e della sicurezza della rete, che costituisce anche una parte importante del tuo servizio.

### Come funziona il sistema di protezione?

Il nostro sistema si basa sulla tecnologia antispam di Vade Secure.

Una volta bloccato un indirizzo IP per SPAM, verrà inviata un'email al tuo account con le informazioni come nell'esempio seguente:

> 
> Gentile Cliente,
>
> La nostra protezione Antispam ha rilevato un invio importante di Spam da uno dei tuoi IP:
122.122.122.122
>
> Per garantire la sicurezza della nostra rete, il traffico in uscita dal tuo server verso la porta 25 è stato sospeso.
> Per effettuare le verifiche, ecco un campione delle email bloccate:
>
> Destination IP: 188.95.235.33 - Message-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP: 188.95.235.33 - Message-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## Procedura

**Cosa fare al ricevimento dell'email di alert?**

Il processo prevede l'identificazione del problema, la sua risoluzione e lo sblocco dell'IP.

### Individuare e risolvere il problema

**Prima di sbloccare un indirizzo IP, assicurati di aver adottato queste misure:**

- Fermate l'invio di email (ad esempio: arrestare tutti i client di posta come qmail, Postfix, Sendmail, ecc.)
- Verifica la coda di attesa delle email (ad esempio qmHandle per qmail, postqueue -p per Postfix) e svuotala.
- Analizza i tuoi log grazie al **Message-ID** presente nell'alert di blocco.
- Se invia correttamente SPAM o email illegittime, ti consigliamo vivamente di risolvere il problema **prima** di sbloccare l'indirizzo IP. Consultare questa guida per le [migliori pratiche (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#bestpractices) di invio delle e-mail.

Una volta risolto il problema, puoi sbloccare il tuo indirizzo IP seguendo gli step successivi.

> [!alert]
> 
> Non sbloccare l'indirizzo IP prima di aver sospeso l'invio delle email dal tuo server e aver svuotato la coda di attesa delle email. In caso contrario verrai bloccato per una seconda volta e per una durata più lunga. 
>

### Sblocca il tuo indirizzo IP

#### Sblocca il tuo indirizzo IP dallo Spazio Cliente

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Network`{.action} nel menu a sinistra e poi su `Indirizzi IP Pubblici`{.action}.

Puoi utilizzare il menu a discesa sotto **I tuoi indirizzi IP pubblici e servizi associati** per filtrare i tuoi servizi per categoria, oppure digitare direttamente l'indirizzo IP desiderato nella barra di ricerca.

Se hai un'alerta su una delle tue IP, troverai un badge di stato rosso nella colonna **Alert IP**.

![Alert anti spam](images/blockedIP_new.png){.thumbnail}

Clicca sul pulsante `⁝`{.action} accanto all'IP o al servizio corrispondente e seleziona `Sblocco antispam`{.action}.

![antispam](images/antispam_new.png){.thumbnail}

Nella finestra che si apre, clicca su `Sblocca l'IP`{.action} in basso e conferma.

![Sblocca IP](images/unblockip_new.png){.thumbnail}

Lo sblocco dell'IP è in corso. L'operazione potrebbe richiedere alcuni minuti.

Una volta completata l'operazione, il tuo IP verrà sbloccato.

#### Sblocca il tuo indirizzo IP dall'API OVHcloud

Accedi all'interfaccia [API di OVHcloud](/links/api) e segui gli step qui sotto. Per maggiori informazioni sull'utilizzo delle API OVHcloud, consulta la guida Iniziare a [Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps).

Per prima cosa recupera la lista degli IP di ogni servizio OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Server Dedicato):

> [!api]
>
> @api {v1} /ip GET /ip
>

**tipo**: Indica il tipo di IP (Dedicated, PCC, VPS, vRack, PCI, ecc...)

Ecco un esempio di risultato:

```bash
"2001:41d0:67:d200::/56",
"2001:41d0:68:a00::/56",
"2001:41d0:68:f000::/56",
"2001:41d0:117:db00::/56",
"122.122.122.121/28",
"145.56.222.96/28",
"188.81.49.30/28",
```

Cerca poi gli IP in uno stato particolare grazie alla chiamata seguente. Se conosci già l'indirizzo IP bloccato, passa allo [step successivo](#unblockip):

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam
>

**ip**: specifica il blocco IP recuperato allo step precedente con la maschera di rete. Ad esempio 122.122.122.121/28.<br>
**state**: specifica lo stato che stai cercando.

Ecco un esempio di risultato (in questo caso è stato selezionato il blocco 122.122.122.121/28):

```bash
"122.122.122.122" 
```

Puoi ottenere informazioni sul blocco con la chiamata successiva, altrimenti passa allo [step successivo](#unblockip).

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}
>

**ip**: specifica il blocco IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming**: indica l'IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.

Ecco un esempio di risultato (in questo caso, il blocco 122.122.122.121/28 e l'IP 122.122.122.122 sono stati selezionati):

```bash
time: 3600,
data: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Quindi:

```bash
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Per ottenere le statistiche su ciò che è stato rilevato, utilizza questa chiamata api, altrimenti passa allo [step successivo](#unblockip).

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}/stats
>

**ip**: specifica il blocco IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming**: indica l'IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.<br>
**from and to**: utilizza il formato della data utilizzato nella funzione precedente (YYYY-MM-DDTHH:MM+01:SS).

Ecco un esempio di risultato:

```bash
{
"messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
"destinationIp": "188.95.235.33",
"date": 1385640992,
"spamscore": 410
}
```

##### **Sblocca l'IP** <a name="unblockip"></a>

> [!alert]
> IMPORTANTE!
> Non sbloccare in alcun caso l'IP senza aver sospeso l'invio delle email dal tuo server e svuotare la coda di attesa delle email. In caso contrario verrai bloccato per una seconda volta e per una durata più lunga. 
>

Per sbloccare il tuo indirizzo IP, utilizza questa chiamata:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip**: specifica il blocco di indirizzi IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming**: specificare l'indirizzo IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.

Ecco un esempio di risultato:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

E un risultato poco più di 129 secondi dopo:

```bash
time: 3600,
data: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "unblocking" 
```

Lo sblocco dell'indirizzo IP è in corso. L'operazione potrebbe richiedere alcuni minuti.

### In caso di falsi positivi

In alcuni casi, l'allerta antispam può essere un falso positivo. Se hai verificato e constatato che il **Message-ID** è associato a un'email legittima, devi assicurarti che i tuoi messaggi elettronici siano conformi alle [RFC](#rfc) e alle [buone pratiche](#bestpractices) riportate di seguito.

#### RFC <a name="rfc"></a>

Le RFC (Request For Comments) sono documenti destinati a descrivere aspetti tecnici di Internet. Questi documenti vengono prodotti e pubblicati dall'IETF (Internet Engineering Task Force), un gruppo che produce e definisce essenzialmente delle norme.
Trova ulteriori informazioni sui seguenti link:
<br>
- [RFC](https://en.wikipedia.org/wiki/Request_for_Comments)<br>
- [IETF](https://www.ietf.org/)<br>
- [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft)

#### Buone pratiche <a name="bestpractices"></a>

Le buone pratiche sono metodi raccomandati che spesso si basano sui documenti RFC e che mirano a consigliarti la migliore procedura da seguire. Si tratta qui delle regole di base da rispettare affinché le tue email non vengano considerate spam.

**Volume di invio**

Se il volume delle tue email in uscita è molto elevato, ti consigliamo di:

- riservare un blocco di indirizzi IP dedicato esclusivamente all'uso delle email.
- fornire un indirizzo *abuse* su questo blocco per ricevere le lamentele.
- configurare correttamente i [Reverses](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization#configurer-le-reverse-ip) su tutte le indirizzi IP. 

Questa ultima operazione ti permetterà di isolare simultaneamente l'IP e la reputazione del dominio se invii email da diversi domini, di ricevere le lamentele e quindi di fare il necessario per essere sbloccato dalle diverse organizzazioni. Il *reverse* permette inoltre di localizzare più rapidamente un problema su un modulo utilizzando il dominio X o Y, poiché le email non vengono inviate dalla stessa IP e non hanno lo stesso *reverse*.

**Contenuto della tua email**

- Evita di utilizzare parole chiave di spam nelle tue email, come "acquistare" o "ultima possibilità". Evita le maiuscole inutili, gli oggetti impersonali, i punti esclamativi e i % di sconto.
- Pensa a fornire un link di **disiscrizione** per le persone che non hanno richiesto di ricevere la tua email o che la considerano illegittima.
- Presta particolare attenzione affinché le tue email contengano l'indirizzo del mittente (o un alias), un oggetto e un buon rapporto testo, immagini e link nel corpo del messaggio.
- Il rapporto testo/immagine e testo/collegamento deve essere elevato. Non sovraccaricare l'email con collegamenti ipertestuali e evita il JavaScript.

**FBL (*Feedback Loop*) - Ciclo di valutazione**

Questo sistema ti permette di monitorare direttamente i feedback di alcuni fornitori di accesso a Internet, indicandoti che i tuoi utenti hanno segnalato il tuo messaggio come illegittimo e che è quindi stato classificato come spam. Ti permetterà di interagire direttamente con questi ISP riguardo alla tua reputazione. Ecco alcuni FBL:

- [Yahoo & AOL Postmaster](https://senders.yahooinc.com/contact)
- [SpamCop](https://www.spamcop.net/)
- [Outlook & live.com](https://sendersupport.olc.protection.outlook.com/pm/)

**Autenticazione**

Alcuni servizi di autenticazione ti permettono di proteggere la tua reputazione:

- **Sender-ID**: si tratta di una tecnologia di autenticazione delle email sviluppata da Microsoft che convalida l'autenticità del tuo nome di dominio verificando l'indirizzo IP del mittente. Questa tecnologia si basa sulla norma IETF: [RFC4406](https://datatracker.ietf.org/doc/rfc4406/).
- **SPF**: *Sender Policy Framework* è uno standard di verifica del dominio del mittente. Si basa sulla [RFC4408](https://datatracker.ietf.org/doc/rfc4408/) e consiste nell'aggiungere un campo SPF o TXT al DNS del dominio, che contiene l'elenco delle IP autorizzate a inviare email da quel dominio.
- **Reverse DNS o Reverse IP**: Il *reverse* permette di "tradurre" un'IP in un dominio. Questo permette di trovare il dominio associato all'indirizzo IP.
- ****DKIM****: Questa norma è descritta nella [RFC4871](https://datatracker.ietf.org/doc/html/rfc4871). AOL e Google (Gmail) funzionano su questa base. 

Per ulteriori informazioni sui servizi sopra menzionati, consulta la nostra guida "[Ottimizzare l'invio di email](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

#### Casi specifici di invio di email

- **Verso un server Microsoft (Outlook, ecc.)**

Microsoft utilizza una politica di lista bianca. Questo significa che ogni server si trova inizialmente su una lista nera. È necessaria una procedura specifica per far validare il tuo server email. Per ulteriori informazioni, ti invitiamo a consultare la sezione **Verso un server Microsoft (Outlook, ecc.)** della nostra guida "[Come evitare che le tue email siano contrassegnate come Spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

- **Verso un server Gmail**

L'aggiunta di record specifici (ad esempio, un record DMARC) può facilitare la ricezione delle email se il tuo destinatario ha un indirizzo Gmail. La seguente documentazione di Google può aiutarti in questa procedura: [Aggiunta di un campo DMARC](https://support.google.com/a/answer/2466563/).

Google propone inoltre un [articolo dedicato](https://support.google.com/mail/answer/81126/) alla prevenzione dello spam per gli utenti di Gmail.

### Dichiarare un falso positivo

Se le tue email sono conformi, puoi informarcene inviandoci un esempio della tua email (compreso l'intestazione). Il nostro supporto tecnico ti assisterà quindi per le prossime fasi. Ti basta creare un ticket di assistenza dal tuo spazio cliente e includervi le seguenti informazioni:

- L'indirizzo IP del servizio bloccato per lo SPAM.
- Una copia originale dell'email o delle email contrassegnate come SPAM (dovresti poterle identificare grazie al **Message-ID** incluso nell'allerta di blocco). Se non è fornito alcun **Message-ID**, ti basta inviarci una copia delle email inviate prima della ricezione dell'allerta. Per favore fornisci solo la copia dell'email segnalata come SPAM.
- Il file .EML dell'email fornito. Questo deve includere **l'intestazione** e **il piè di pagina** dell'email. Se non sai come estrarre un file .EML, ti invitiamo a consultare la guida seguente: [Recuperare l'intestazione di un'email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

Una volta ricevute le informazioni, il nostro servizio di assistenza si metterà in contatto con Vade Secure per un'analisi più approfondita della situazione.

## Per saperne di più
  
Contatta la nostra [Community di utenti](/links/community).