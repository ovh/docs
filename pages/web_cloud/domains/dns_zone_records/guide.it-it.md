---
title: "Scopri tutto sui record DNS"
excerpt: "Questa guida ti mostra i diversi tipi di record DNS disponibili in una zona DNS di OVHcloud"
updated: 2024-06-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'acronimo **DNS**, che sta per **D**omain **N**ame **S**ystem, è un insieme di elementi (server DNS, zone DNS, ecc...) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

Prima di iniziare, ti consigliamo di consultare le nostre guide "[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" in questo ordine.

La zona DNS di un dominio costituisce il file di configurazione. ed è composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, un centro di scambio per un nome di dominio.

Questa guida ti mostra i diversi tipi di record DNS disponibili in una zona DNS gestita in OVHcloud. È complementare alle seguenti guide:

- [Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
- [Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Gestire la cronologia di una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_history)
- [Eliminare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

**Scopri i diversi tipi di record DNS disponibili in una zona DNS di OVHcloud.**

## Procedura

### I record DNS

**Modificare [una zona DNS](/pages/web_cloud/domains/dns_zone_edit) è un’operazione delicata** : se non viene eseguita correttamente, potrebbe risultare impossibile raggiungere il sito o ricevere nuovi messaggi nella casella di posta.

Di seguito sono elencati gli obiettivi e le specifiche di ogni record. Questa guida ti mostra come modificare al meglio i tuoi servizi DNS.

#### Registrazioni di puntamento <a name="pointer-records"></a>

Selezionare il record desiderato facendo clic su ognuna delle schede seguenti.

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Collega un dominio a un indirizzo IPv4 `X.X.X.X` (dove le `X` sono cifre comprese tra `0` e `255`). ad esempio, l'indirizzo IPv4 del server in cui è ospitato il tuo sito Web.
>>
> **AAAA** <br><br>
>> 4 lettere **A** perché questa registrazione è codificata su quattro volte più bit del campo di puntamento **A** storico<br><br>
>> Collega un dominio a un indirizzo IPv6. ad esempio, l'indirizzo IPv6 del server in cui è ospitato il tuo sito Web.
>>
>> > [!primary]
>> > Gli indirizzi IPv6 vengono progressivamente creati per ovviare alla mancanza di indirizzi IPv4 dovuta all'espansione continua degli usi digitali. La codifica a 128 bits degli indirizzi IPv6 permette di fornire un maggior numero di indirizzi IP.
>> >
>> > Tuttavia, se il tuo server dispone già di un IPv4, ti consigliamo di privilegiare l'utilizzo di quest'ultimo sul tuo IPv6.<br>
>> > Gli IPv6 non sono infatti ancora correttamente interpretati su tutta la rete Internet, il che può causare problemi di visualizzazione o di accesso.
>>
> **CNAME**
>> **C**anonical **NAME** <br><br>
>> Utilizza l'indirizzo IP di un altro dominio creando un link chiamato alias. Ad esempio, se *www.domain.tld* è un alias di *domain.tld*, ciò indica che *www.domain.tld* utilizzerà l'indirizzo IP di *domain.tld*.
>>
>> > [!alert]
>> >
>> > Un record TXT che utilizza lo stesso dominio o sottodominio di un CNAME interferisce con il suo funzionamento. Il record CNAME funzionerà solo parzialmente o totalmente.
>>
>> > [!warning]
>> >
>> > Per convenzione, i record CNAME non possono essere utilizzati direttamente da un dominio nella sua zona DNS. Il dominio da solo deve necessariamente e direttamente puntare verso un indirizzo IP con un record di tipo A (o AAAA se si tratta di un IPv6).
>> > 
>> > Per citare l'esempio di cui sopra, non è possibile creare un record CNAME per il dominio *domain.tld* nella zona DNS che hai creato per questo dominio.
>> > Puoi creare record CNAME con tutti i sottodomini (ad esempio: *domain.domain.tld* o *www.domain.tld*) del dominio *domain.tld* nella zona DNS creata per *domain.tld*.
>> >
>> > Per saperne di più sul piano tecnico, in fondo a questa pagina puoi trovare [un caso particolare di utilizzo dei CNAME e delle zone DNS create per sottodomini](#cnameusecase).
>> >
>>
> **DNAME**
>> **D**elegation **NAME** <br><br> Permette di generare un "alias" per tutti i sottodomini di un dominio. Questo record evita di creare una moltitudine di record CNAME. Infatti, un record CNAME reindirizza indipendentemente da un solo sottodominio verso un unico bersaglio.
>>
>> Esempio: creando un record DNAME da *domain.tld* a *ovh.com*, tutti i sottodomini di *domain.tld* (come *dname.domain.tld* e *xxx.domain.tld*) vengono reindirizzati rispettivamente ai sottodomini di *ovh.com* (come *dname.ovh.com* e *xxx.ovh.com*).
>>
>> In altre parole, il record DNAME indica che *dname.domain.tld* e *xxx.domain.tld* devono rispettivamente visualizzare i risultati di *dname.ovh.com* e *xxx.ovh.com*.
>>
>> > [!warning]
>> > 
>> > Per contro, *domain.tld* come dominio non mostrerà la destinazione del dominio *ovh.com* perché il record DNAME è valido solo per i sottodomini definiti nel record DNAME.
>> >
>> > Se il sottodominio di destinazione *xxx.ovh.com* non punta da nessuna parte, il record DNAME non mostrerà nulla per *xxx.domain.tld*.
>> 
>> > [!success]
>> > 
>> > Il record DNAME è generalmente utilizzato come parte di una modifica della ragione sociale. Può essere installato anche quando un utente dispone di più estensioni di domini (.it, .net, .com, .info, ecc...) per reindirizzarle facilmente tra loro.
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Definisci i server DNS associati alla tua zona DNS. Ad esempio, se i record NS della tua zona DNS visualizzano i server *dnsXX.ovh.net* e *nsXX.ovh.net*, sarà necessario utilizzarli nella scheda `Server DNS`{.action} del tuo Spazio Cliente OVHcloud. Per maggiori informazioni, consulta la nostra guida [Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit).
>>
>> > [!warning]
>> >
>> > Non modificare, tramite il pulsante `Utilizza l'editor di testo`{.action}, i record NS della tua zona DNS a vantaggio di server DNS esterni a OVHcloud. Questa zona DNS funziona **esclusivamente** con server DNS OVHcloud.
>>

#### Record email <a name="mail-records"></a>

Selezionare il record desiderato facendo clic su ognuna delle schede seguenti.

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br>
>> Associa un dominio a un server di posta Ad esempio, l'indirizzo *10 mx1.mail.ovh.net* corrisponde a uno dei server di posta OVHcloud quando possiedi un'offerta email OVHcloud. È probabile che il tuo provider di posta disponga di diversi server di posta: è necessario creare diversi record MX. Consulta la nostra guida [Aggiungere un record MX alla configurazione di un dominio](/pages/web_cloud/domains/dns_zone_mx).
>>
>> > [!warning]
>> >
>> > In generale, ti consigliamo di utilizzare uno o più server di uno stesso provider email nella tua zona DNS.
>> > Infatti, se disponi già di servizi email presso un altro provider e aggiungi contemporaneamente (senza sostituire) i server email del tuo nuovo provider, rischi di ricevere casualmente le tue email presso uno dei tuoi due provider.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Consente di evitare potenziali usurpazioni di identità sugli indirizzi email che utilizzano il tuo dominio (*spoofing*). Ad esempio, il record `v=spf1 include:mx.ovh.com ~all` indica che solo i server di invio associati alla tua offerta mail OVHcloud possono essere considerati legittimi dal server di ricezione. Puoi inserire questo record tramite un record TXT o il nostro sistema di configurazione automatica.
>>
>> Per saperne di più, consulta la guida [Aggiungere un record SPF alla configurazione di un dominio](/pages/web_cloud/domains/dns_zone_spf).
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br> 
>> Consente di verificare l'autenticità del dominio del mittente e garantire l'integrità dell'email inviata. Il record DKIM si presenta sotto forma di una chiave composta da diversi caratteri. La chiave DKIM è fornita dal tuo provider di posta (se questa funzionalità è proposta da quest'ultimo), è possibile inserirla in un record TXT.
>>
>> Per saperne di più, consulta la nostra documentazione "[Configura un record DKIM](/pages/web_cloud/domains/dns_zone_dkim)".
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Contribuisce all'autenticazione delle email in associazione con i metodi SPF e/o DKIM. Questo valore ti verrà dato dal tuo provider email (se questa funzionalità è proposta da quest'ultimo), sarà associato almeno a un record SPF o DKIM.
>>
>> Consulta la nostra documentazione "[Configurare un record DMARC sul tuo dominio](/pages/web_cloud/domains/dns_zone_dmarc)" per saperne di più.

#### Registrazioni estese <a name="extended-records"></a>

Selezionare il record desiderato facendo clic su ognuna delle schede seguenti.

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Consente di aggiungere il valore che preferisci, in formato testuale, alla zona DNS del tuo dominio. Questo record viene spesso utilizzato durante il processo di verifica/convalida o di sicurezza.
>>
>> > [!warning]
>> > 
>> > La registrazione TXT è limitata a 255 caratteri. In alcuni casi è possibile suddividere il valore in più record. Quando ti viene chiesto di inserire un valore superiore alla quota di 255 caratteri, contatta il tuo provider.
>> > 
>> > Questo limite non è tuttavia esistente se utilizzi `Utilizza l'editor di testo`{.action} descritta nella nostra guida "[Modifica zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" (per gli utenti esperti).
>>
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> Consente di indicare l’indirizzo di un server che gestisce un servizio. Ad esempio, può indicare l'indirizzo di un server SIP o quello di un server che permette la configurazione automatica di un client di posta.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> Consente di elencare le autorità di certificazione autorizzate a fornire certificati SSL per un dominio.
>>
>> > [!warning]
>> >
>> > Se configuri una voce CAA per un dominio, questa configurazione verrà applicata anche a **tutti i sottodomini** dello stesso dominio.
>> >
>> > Se utilizzi un certificato SSL Let's Encrypt con il tuo dominio su un hosting condiviso OVHcloud e utilizzi un record CAA, quest'ultimo impedirà la rigenerazione del certificato SSL Let's Encrypt.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br> 
>> Utilizzato in telecomunicazione per indirizzare una richiesta emessa da un terminale mobile verso un server. Un record SRV può essere associato per generare in modo dinamico gli URI (Uniform Resource Identifier) di destinazione.
>>
> **LOC**
>> **LOC**ation <br><br>
>> Utilizzato per fornire informazioni sulla posizione geografica (in particolare latitudine, longitudine e altitudine).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Utilizzato per inserire l'impronta di una chiave pubblica SSH.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Utilizzato per inserire l'impronta di un certificato SSL/TLS.

#### Casi d'uso particolari: l'utilizzo dei record CNAME <a name="cnameusecase"></a>

Alcuni utenti creano zone DNS direttamente per il sottodominio di un dominio (ad esempio *subdomain-with-its-own-DNS-zone.domain.tld*). La regola indicata sopra nella scheda "CNAME" della parte "[Record di puntamento](#pointer-records)" si applica anche in questo caso.

Dal momento che la zona DNS è stata creata per il sottodominio (nel nostro esempio *subdomain-with-its-own-DNS-zone.domain.tld*), quest’ultimo viene considerato come un dominio a sé stante nella sua zona DNS.

Per questo motivo e nel caso specifico, non sarà possibile creare un record CNAME per *subdomain-with-its-own-DNS-zone.domain.tld* nella zona DNS creata per questo record. È possibile creare record CNAME come *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* o *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Per saperne di più <a name="go-further"></a>

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Aggiungere un record SPF alla configurazione di un dominio](/pages/web_cloud/domains/dns_zone_spf)

[Proteggere il dominio dal Cache Poisoning con DNSSEC](/pages/web_cloud/domains/dns_dnssec)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).