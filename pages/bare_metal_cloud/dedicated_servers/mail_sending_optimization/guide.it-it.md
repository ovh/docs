---
title: Ottimizza l'invio delle email
excerpt: Scopri come inviare email limitando il rischio di spam
updated: 2024-01-24
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
> 

## Obiettivo

In generale, le politiche anti-spam sono severe. Per rendere più fluide le operazioni di invio delle email e consentire ai destinatari di riceverle senza subire blocchi da parte degli strumenti di sicurezza, sono necessarie delle impostazioni per autenticare i messaggi e il loro contenuto sui server destinatari che li elaborano.

**Questa guida ti mostra come ottimizzare l'invio delle tue email.**

> [!warning]
>OVHcloud fornisce i servizi di cui sei responsabile per la configurazione e la gestione. Sei quindi responsabile del loro corretto funzionamento.
>
> Questa guida ti mostra come eseguire le operazioni necessarie per eseguire l'operazione. Tuttavia, in caso di difficoltà o dubbi relativamente all'amministrazione, all'utilizzo o alla realizzazione dei servizi su un server, ti consigliamo di contattare un [provider specializzato](/links/partner).
>

## Prerequisiti

- Essere amministratore di un server di posta configurato.
- Essere in grado di gestire la zona DNS del o dei domini utilizzati per l'invio

> [!warning]
>
> Questa guida ti mostra come utilizzare al meglio l'invio delle tue email. Ti ricordiamo che ogni servizio di posta ha le proprie istruzioni e buone prassi per garantire la ricezione delle email da parte dei destinatari. Ti consigliamo vivamente di consultarli.
>

## Procedura

### Configura il record SPF <a name="spfrecord"></a>

Per le infrastrutture dedicate (server dedicati, VPS, istanze Public Cloud o Hosted Private Cloud), il record SPF (Sender Policy Framework) ottimale si presenta come: `v=spf1 ip4:server_ipv4 ~all`. Ricordati di sostituire 'server_ipv4' con l'indirizzo IPv4 del tuo server.

> [!primary]
>
> Il simbolo davanti *all* è molto importante:
>
> - `+`: accettare
> - `-`: rifiutare
> - `~`: errore (*soft fail*)
> - `?`: neutro
>

Puoi spingerti oltre, configurando il record SPF per un dominio specifico o utilizzando l'indirizzo IPv6. Per una corretta comprensione del record SPF, consulta la nostra guida sulla [configurazione di un record SPF](/pages/web_cloud/domains/dns_zone_spf).

### Configura record DKIM

Il record DKIM (DomainKeys Identified Mail) permette di firmare le email per evitarne l’usurpazione. Questa firma funziona sul principio di una coppia chiave privata / chiave pubblica, che permette di autenticare il dominio mittente.

Per maggiori informazioni, consulta la nostra guida sulla [configurazione di un record DKIM](/pages/web_cloud/domains/dns_zone_dkim).

### Configura il record DMARC

Il record DMARC (Domain-based Message Authentication, Reporting and Conformance) è uno standard di sicurezza che si basa sui 2 metodi di sicurezza e-mail SPF e DKIM. Gli argomenti registrati nel record DMARC guidano il destinatario su come trattare le email, a seconda del risultato SPF e/o DKIM. Nel record DMARC può essere definito un indirizzo email che riceverà un report sugli errori di autenticazione.

Per maggiori informazioni, consulta la nostra guida sulla [configurazione di un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc).

### Configura il reverse (*reverse IP*) <a name="reverseip"></a>

Per ottimizzare l'invio e ridurre i rischi di blocco delle tue email, è necessario configurare con il tuo dominio un reverse.

Per prima cosa, crea un record A nella zona DNS del tuo dominio con l'indirizzo IP del tuo server come destinazione.

Se i server DNS sono gestiti da OVHcloud, consulta la nostra guida [sulla modifica di una zona DNS OVHcloud dallo Spazio Cliente](/pages/web_cloud/domains/dns_zone_edit).

Una volta modificata la zona DNS del dominio, la propagazione delle modifiche potrebbe richiedere fino a 24 ore.

Aggiungi il record PTR (alias noto come reverse):

Nello [Spazio Cliente OVHcloud](/links/manager){.external}, accedi alla sezione `Bare Metal Cloud`{.action} e apri `Network`{.action}. Clicca su `IP`{.action}. 

Per configurare il Reverse DNS su un indirizzo Additional IP, clicca sulla scheda `Additional IP`{.action}.

Il menu a tendina "**I tuoi indirizzi IP pubblici e servizi associati**" ti permette di filtrare i tuoi servizi per categoria.

![Reverse IP](images/filteripds.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra della riga corrispondente e poi su `Modifica il reverse`{.action}:

![Reverse IP](images/addreverse2022.png){.thumbnail}

Inserisci il tuo dominio nella sezione `Reverse` e clicca su `Conferma`{.action}.

![Reverse IP](images/enterreverse.png){.thumbnail}

> [!primary]
> Quando inserisci il tuo dominio nel reverse, verifica immediatamente se il record A restituisce lo stesso IP. Questa operazione viene utilizzata nelle procedure anti-spam e il record A deve essere valido e divulgato. Per inserire il reverse, è necessario seguire alcune regole:
>
>  - il reverse non può iniziare con un `-`
>  - il reverse non può contenere più di 80 caratteri
>  - il reverse non può contenere caratteri maiuscoli
>  - il reverse deve terminare con un `.`
>
> Esempio: "MyDomain.ca" nel campo reverse sarebbe **mydomain.ca.**
>

### Casi specifici di invio di email

#### Verso un server Microsoft (Outlook, ecc...)
 
Microsoft usa una politica di whitelist list. Ciò significa che, inizialmente, tutti i server si trovano in una lista nera e per far convalidare il tuo server di posta è necessaria una procedura specifica.

Prima di avviare la procedura di whitelist del tuo IP, assicurati di aver configurato correttamente un [reverse](#reverseip) sul tuo indirizzo IP (e non il reverse predefinito di OVHcloud).

Microsoft verifica anche il record SPF, quindi consigliamo di configurarlo.

In seguito, è necessario firmare i contratti SNDS (Smart Network Data Services) e JMRP (Junk Mail Reporting Partner Program).

Per sottoscrivere gratuitamente il programma, è sufficiente creare un account JMRP/SNDS al seguente indirizzo:
<https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Una volta attivato l'account, è necessario completare questo form:

- **Company name**: (nome della tua azienda)
- **Contact email address**: (un indirizzo email valido in cui Microsoft può contattarti)
- **Complaint feedback email address**: (un indirizzo email valido dove potrai ricevere i reclami per spam, le *best practices* vogliono che l'indirizzo email sia nella forma: **abuse@mydomain.com**)

Aggiungi i tuoi indirizzi IP nella sezione `IP address or range`.

Cliccando su `Add new Network`, ti verrà chiesto di definire un indirizzo email di contatto valido. Inserisci l'indirizzo del tipo **abuse@mydomain.com** destinato a ricevere i reclami per spam.

Una volta inserite le informazioni, clicca su `Begin Setup` per inoltrare la richiesta. Microsoft invierà un'email intitolata `SNDS-JMRP Contract`, poi una seconda email al **mydomain.com**.

Conferma le informazioni e la sottoscrizione a JMRP/SNDS sarà completata.

Una volta effettuate queste operazioni, se il tuo IP risulta bloccato, puoi richiedere di sbloccare il file utilizzando la [procedura junkmail](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062). La procedura richiede generalmente 48 ore.

A volte Microsoft può richiedere la data della prima fatturazione del tuo IP/server. In questo caso, invia a Microsoft una copia della tua fattura e menziona il tuo IP/server (ad esempio: host nsXXX) nella tua risposta.

Per maggiori informazioni, invia una [richiesta di assistenza](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656) a Microsoft.

> [!warning]
>
> **il rifiuto di Microsoft**
>
> È possibile che Microsoft rifiuti di sbloccare il tuo indirizzo IP, nel qual caso OVHcloud non potrà intervenire. È importante rispettare le buone pratiche di Microsoft.
>

#### Verso un server Gmail

L'aggiunta di record specifici, ad esempio un record DMARC (Domain-based Message Authentication, Reporting, and Conformance) o DKIM (DomainKeys Identified Mail), può facilitare la ricezione delle email se il destinatario è in Gmail. Consulta le nostre guide riportate [in fondo a questa pagina](#go-further) per configurarle.

### Verifica le tue informazioni

Potrebbe essere utile utilizzare un sito come [Mail Tester](http://www.mail-tester.com/) per verificare la correttezza delle impostazioni.

## Per saperne di più

[Migliorare la sicurezza delle email tramite un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)

[Migliorare la sicurezza delle email tramite un record SPF](/pages/web_cloud/domains/dns_zone_spf)

[Migliorare la sicurezza delle email tramite un record DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

Per essere accompagnato sull'implementazione delle soluzioni OVHcloud, contatta la nostra [rete di partner OVHcloud](/links/partner).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.