---
title: OVHcloud AntiSpam - Migliori pratiche e sblocco di un indirizzo IP
slug: antispam-best-practices
excerpt: Come sbloccare un indirizzo IP bloccato per SPAM
section: Diagnostica e modalità Rescue
order: 04
---

**Ultimo aggiornamento: 15/11/2022**

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

L'operazione consiste nell'identificare il problema, risolverlo e sbloccare il tuo IP.

### Individuare e risolvere il problema

**Prima di sbloccare un indirizzo IP, assicurati di aver adottato queste misure:**

- Fermate l'invio di email (ad esempio: arrestare tutti i client di posta come qmail, Postfix, Sendmail, ecc.)
- Verifica la coda di attesa delle email (ad esempio qmHandle per qmail, postcoda -p per Postfix) e svuotala.
- Analizza i tuoi log grazie al **Message-ID** presente nell'alert di blocco.
- Se invia correttamente SPAM o email illegittime, ti consigliamo vivamente di risolvere il problema **prima** di sbloccare l'indirizzo IP. Per conoscere le [migliori pratiche](#bestpractices) di invio delle email, consulta la seconda sezione di questa guida. 

Una volta risolto il problema, puoi sbloccare il tuo indirizzo IP seguendo gli step successivi.

> [!alert]
> 
> Non sbloccare l'indirizzo IP prima di aver sospeso l'invio delle email dal tuo server e aver svuotato la coda di attesa delle email. In caso contrario verrai bloccato per una seconda volta e per una durata più lunga. 
>

### Sblocca il tuo indirizzo IP

#### Sblocca il tuo indirizzo IP dallo Spazio Cliente

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e clicca su `IP`{.action}.

Un pop-up indica l'IP o il servizio bloccato per SPAM.

![Alert Antispam](images/alertantispam.png){.thumbnail}

Nella sezione "I tuoi indirizzi IP pubblici e servizi associati", clicca sui tre puntini `...`{.action} in corrispondenza dell'IP o del servizio corrispondente e seleziona `Anti-Spam`{.action}.

![antispam](images/antispam.png){.thumbnail}

Nella nuova scheda, clicca su `Sblocca l'antispam`{.action} in basso e conferma.

![Sblocca IP](images/unblockip.png){.thumbnail}

Lo sblocco dell'IP è in corso. L'operazione potrebbe richiedere alcuni minuti.

Una volta completata l'operazione, il tuo IP verrà sbloccato.

#### Sblocca il tuo indirizzo IP dall'API OVHcloud

Accedi all'interfaccia [API di OVHcloud](https://eu.api.ovh.com/console/) e segui gli step qui sotto. Per maggiori informazioni sull'utilizzo delle API OVHcloud, consulta la guida Iniziare a [Iniziare a utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

Per prima cosa recupera la lista degli IP di ogni servizio OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Server Dedicato):

> [!api]
>
> @api {GET} /ip
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
> @api {GET} /ip/{ip}/spam
>

**ip** : specifica il blocco IP recuperato allo step precedente con la maschera di rete. Ad esempio 122.122.122.121/28.<br>
**state** : specifica lo stato che stai cercando.

Ecco un esempio di risultato (in questo caso è stato selezionato il blocco 122.122.122.121/28):

```bash
"122.122.122.122" 
```

Puoi ottenere informazioni sul blocco con la chiamata successiva, altrimenti passa allo [step successivo](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip** : specifica il blocco IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming** : indica l'IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.

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
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : specifica il blocco IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming** : indica l'IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.<br>
**from and to** : utilizza il formato della data utilizzato nella funzione precedente (YYYY-MM-DDTHH:MM+01:SS).

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
Non sbloccare in alcun caso l'IP senza aver sospeso l'invio delle email dal tuo server e svuotare la coda di attesa delle email. In caso contrario verrai bloccato per una seconda volta e per una durata più lunga. 
>

Per sbloccare il tuo indirizzo IP, utilizza questa chiamata:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : specifica il blocco di indirizzi IP recuperato allo step precedente con la maschera di rete.<br>
**ipSpamming** : specificare l'indirizzo IP recuperato precedentemente nello stato "blockedForSpam", ad esempio.

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

In alcuni casi, l'allarme antispam può essere un falso positivo. Se hai verificato e verificato che il **Message-ID** è associato a un'email legittima, assicurati che i tuoi messaggi siano conformi alle [migliori pratiche](#bestpractices) indicate qui sotto.


## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.