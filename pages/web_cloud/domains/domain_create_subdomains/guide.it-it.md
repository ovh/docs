---
title: "Come creare un sottodominio?"
excerpt: "Questa guida ti mostra la definizione di un sottodominio e come crearlo in OVHcloud"
updated: 2024-03-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo <a name="goal"></a>

Internet è composto da server e da dispositivi che interagiscono tra loro attraverso una rete globale. Quando questi server e i relativi dispositivi sono connessi alla rete Internet, viene loro assegnato un **indirizzo IP pubblico** (equivalente a un indirizzo postale). Questo *indirizzo IP* permette di raggiungere in remoto un server o un dispositivo. In questo modo, un utente è in grado di consultare un sito Web digitando questo indirizzo IP grazie al browser Internet installato sul suo computer.

I **domini** sono stati introdotti per facilitare l'accesso a un sito Web per gli utenti della rete Internet. In effetti, è più facile ricordare un nome composto da una stringa di caratteri scelti (esempio: ovhcloud.com), piuttosto che da una serie di cifre che compone un indirizzo IP (esempio: 54.39.46.56).

Un **dominio** è composto da diversi livelli. Questi livelli sono generalmente separati da un `.` (ad eccezione di alcune **estensioni** del *primo livello* come *.co.uk*, *.gouv.fr* e *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): rappresenta i domini di *primo livello*. Le chiamiamo più comunemente **estensioni**. Al momento sono disponibili 4 tipi di dominio di primo livello: 

    - I **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): composti da due caratteri, corrispondono ai diversi paesi del mondo. ad esempio, le estensioni *.fr*, *.es*, *.it* o *.pl* sono ccTLDs;
    - I **g**eneric **T**op **L**evel **D**omains (**gTLDs**): composti da almeno tre caratteri, rappresentano temi o settori di attività più generali. Ad esempio, le estensioni *.com*, *.net*, *.org* o *.info* sono gTLDs;
    - I **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    nuove estensioni create a partire dal 2012 dall'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) per rispondere al forte aumento delle richieste di creazione di domini. Possono corrispondere a temi generici, marchi, regioni o città. ad esempio, le estensioni *.love*, *.ovh* o *.paris* sono new gTLDs;
    - I **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): si tratta in realtà di una sottocategoria delle new GTLDs. Su richiesta presso l'**ICANN**, le imprese o le organizzazioni possono richiedere la creazione del proprio TLD. L'estensione *.ovh*, ad esempio, è un CorpTLD creato da OVHcloud alcuni anni fa.

- **S**econd **L**evel **D**omain (**SLD**): rappresenta i domini di *secondo livello*. Le chiamiamo più comunemente **label**. Al momento dell'ordine di un dominio, è possibile definire liberamente il **label** (a condizione che non sia già stato registrato da un altro utente sulla stessa estensione e nel limite di 63 caratteri). *ovhcloud*, ad esempio, corrisponde al label del dominio *ovhcloud.com*.

- Third Level Domain (**subdomain**): è a partire da questo terzo livello che si parla di **sottodominio**. Descriveremo in dettaglio la definizione di servizio e ti spiegheremo come utilizzarlo con i tuoi diversi servizi.

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}
  
**Questa guida ti mostra i sottodomini e come crearli in OVHcloud.**

## Prerequisiti

- Disporre di almeno un [dominio](/links/web/domains);
- Disporre di una zona DNS attiva per il dominio. Se necessario, consulta la nostra guida "[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)";
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager);
- Disporre dei diritti necessari per tutti i servizi in questione. Per maggiori informazioni consulta la nostra guida [Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts).
  
## Procedura

### Definizione di un sottodominio

Un [dominio](/links/web/domains) può essere associato a diversi tipi di servizi (email, sito Web, ecc...).

Tuttavia, un dominio può essere associato a un solo sito Web alla volta.

Tuttavia, alcuni utenti o organizzazioni devono segmentare i propri siti Web o servizi di posta pur mantenendo lo stesso dominio.

I sottodomini (talvolta chiamati **prefissi**) rispondono alla necessità di segmentare un dominio. Offrono la possibilità al proprietario di declinare in più sottocategorie i servizi Web associati al suo dominio, senza dover sottoscrivere un nuovo dominio.

I sottodomini permettono di strutturare facilmente l'insieme dei servizi Web (server DNS, sito Web, intranet, email, ecc...) associati a uno stesso dominio.

Come indicato in precedenza nella sezione "[obiettivo](#goal)", i sottodomini corrispondono al terzo livello (*Third Level Domain*) di un dominio. Il sottodominio più conosciuto dagli utenti è, ad oggi, il sottodominio **W**orld **W**ide **W**eb (**www**). In effetti, molti siti Web utilizzano ancora questo sottodominio per essere consultati su Internet.

Ad esempio, *www.ovhcloud.com* è un sottodominio del dominio *ovhcloud.com*.

È possibile creare un'infinità di sottodomini a partire da un solo dominio.

Se, ad esempio, disponi del dominio *example.com*, puoi creare i seguenti sottodomini:

- *dns1.example.com* e *dns2.example.com* per personalizzare i server DNS con [GLUE records](/pages/web_cloud/domains/glue_registry);
- *www.example.com* per visualizzare il sito Web;
- *preprod.example.com* per testare il sito Web in nuove versioni. senza interrompere l'accesso del sito Web attuale agli utenti;
- *intranet.example.com*, in modo che i vostri collaboratori possano comunicare tra loro sul vostro sito web interno;
- *forum.example.com* o *community.example.com*, in modo che la comunità di utenti possa scambiare e condividere le proprie esperienze;
- *app.example.com* per accedere alla tua applicazione online o scaricarla direttamente;
- *recruitment.example.com* per consentire ai candidati alla ricerca di un lavoro di candidarsi all'interfaccia di selezione personale.
- *sav.example.com*, *sales.example.com*, *legal.example.com* per consentire ai clienti di contattare diverse strutture interne all'azienda o di organizzare i dipendenti in base ai servizi interni a cui appartengono;
- ecc.

Al di là del terzo livello di dominio, si tratta ugualmente di **sotto-domini**. Per riprendere uno degli esempi precedenti, è possibile creare il sottodominio *preprod.app.example.com* per testare la nuova versione dell’applicazione Web. senza interrompere l’accesso alla versione attuale della tua applicazione su *app.example.com*.

### Crea un sottodominio

Per funzionare correttamente, tutti i [domini](/links/web/domains) hanno bisogno di una **zona DNS**. La zona DNS è composta da informazioni tecniche chiamate *record DNS*. È come un centro di scambio.

Per maggiori informazioni sulle zone DNS, consulta la nostra guida "[Creare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)" e "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

**Tutti i sottodomini si configurano nella zona DNS attiva del dominio. Aggiungendo record DNS**

#### 1 - Identificare la posizione della zona DNS attiva del dominio

Sono possibili due scenari:

- La zona DNS attiva del dominio è presente in OVHcloud;
- La zona DNS attiva del dominio è ospitata altrove.

> [!warning]
>
> La zona DNS attiva del tuo dominio non è necessariamente gestita presso lo stesso provider del tuo dominio.
>
> 1: Per identificare la zona DNS attiva di un dominio registrato in OVHcloud, consulta la nostra guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>
> 2: se il dominio non è registrato in OVHcloud, contatta il *Registrar* attuale per conoscere la zona DNS attiva. È possibile trasferire il dominio in OVHcloud seguendo la nostra [guida dedicata](/pages/web_cloud/domains/transfer_incoming_generic_domain).
>

Se i server DNS dichiarati per il tuo dominio hanno una di queste due forme:

- `dnsXX.ovh.net` e `nsXX.ovh.net` (dove ognuna delle "X" rappresenta una cifra);
- `dns200.anycast.me` e `ns200.anycast.me`.

Questo significa che la zona DNS attiva del dominio è attiva in OVHcloud.

In caso contrario, contatta il provider DNS per creare sottodomini con il tuo dominio.

#### 2 - Crea i record DNS per i tuoi sottodomini

Per aggiungere sottodomini alla zona DNS attiva del dominio, consulta la nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Ad esempio, è possibile aggiungere:

- indirizzo IP (record DNS di tipo *A* e *AAAA*) dell’hosting Web per visualizzare uno dei tuoi siti Web con un sottodominio.
- I server di posta (record DNS di tipo *MX*) verso cui il tuo sottodominio deve reindirizzare le email che riceve. Questo ti permette di consultarle sul tuo o sui tuoi indirizzi email personalizzati con il tuo sottodominio.
- informazioni relative alla sicurezza/autenticazione dei servizi (hosting Web, server Web, email, ecc...) associati a uno dei tuoi sottodomini (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc...).

> [!primary]
>
> La modifica di una zona DNS associata a un dominio comporta un tempo di propagazione che va da **4** a **24** ore massimo perché abbia effetto.
>
> Inoltre, come per i domini in sé, la semplice creazione di un record DNS per un sottodominio non è in genere sufficiente per farlo funzionare con il servizio "destinazione" definito nel record DNS. 
>
> Per motivi di sicurezza, è necessario autorizzare il sottodominio ad accedere al servizio "destinazione" (hosting Web, email, ecc...).
>

Nella parte successiva dell’esercitazione, questa guida ti mostra come autorizzare un sottodominio ad accedere ai diversi servizi dell’universo "Web Cloud" (hosting Web, server Exchange, ecc...) offerti da OVHcloud.

> [!warning]
>
> Se desideri configurare un sottodominio per un servizio ospitato in un luogo diverso da OVHcloud, OVHcloud non sarà in grado di fornirti assistenza. Per proseguire con la configurazione, contatta il fornitore del servizio esterno. 
>

### Associare, autorizzare e configurare il sottodominio con un servizio OVHcloud

Con un sottodominio è possibile utilizzare diversi servizi dell'universo "Web Cloud". Le procedure di associazione sono simili a quelle che si dovrebbero eseguire con un dominio. Ti mostreremo solo i casi più frequenti.

Per i servizi non menzionati, consulta la documentazione relativa al servizio in questione. per identificare se il dominio può essere utilizzato con un sottodominio.

#### Caso 1: visualizza un sito Web presente sul tuo hosting Web OVHcloud con un sottodominio

Come per i domini e per autorizzare un sottodominio a visualizzare il contenuto di una cartella *di destinazione* presente su un hosting Web, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra, seleziona la tua offerta in cui si trova il sito Web e poi clicca sulla scheda `Multisito`{.action}.

È qui che autorizzi l'accesso del sottodominio al tuo hosting Web in cui si trova il tuo sito Web.

Per maggiori informazioni sulla configurazione di un dominio o sottodominio su un hosting Web, consulta la nostra guida "[Condivisione dell’hosting tra più siti](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Che si tratti di un dominio o di un sottodominio, la procedura è la stessa.

> [!warning]
>
> L’aggiunta di un dominio o sottodominio su più siti può richiedere l’utilizzo di un token di conferma. Per un sottodominio, lo stesso token non viene preso in considerazione e deve essere aggiunto non per il sottodominio ma per il nome di dominio. In questo caso, aggiungi il token come record DNS di tipo TXT per il dominio nella zona DNS attiva del tuo dominio.
>

#### Caso 2 - Crea indirizzi email Exchange con un sottodominio

Per sbloccare la creazione di indirizzi email Exchange personalizzati con un sottodominio, accedi al tuo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Clicca su `Microsoft`{.action} nella colonna di sinistra e poi su `Exchange`{.action}. Seleziona la piattaforma Exchange da utilizzare con il sottodominio. Accedi alla scheda `Domini associati`{.action} e clicca sul pulsante `Aggiungi un dominio`{.action} a destra.

In questo modo è possibile dichiarare il sottodominio sulla piattaforma Exchange.

Per maggiori informazioni sulla configurazione di una piattaforma Exchange, consulta le guide seguenti:

- [Iniziare a utilizzare Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Aggiungere un dominio su una piattaforma e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Aggiungere un record CNAME per convalidare il dominio sul servizio di posta](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

#### Caso 3 - Crea indirizzi Email Pro con un sottodominio

Per sbloccare la creazione di indirizzi Email Pro personalizzati con un sottodominio, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Clicca su `Email Pro`{.action} e seleziona la piattaforma Email Pro da utilizzare con il sottodominio. Accedi alla scheda `Domini associati`{.action} e clicca sul pulsante `Aggiungi un dominio`{.action} a destra.

In questo modo è possibile dichiarare il sottodominio sulla piattaforma Email Pro.

Per maggiori informazioni sulla configurazione di una piattaforma Email Pro, consulta le guide seguenti:

- [Iniziare a utilizzare Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- [Aggiungere un dominio su una piattaforma e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Aggiungere un record CNAME per convalidare il dominio sul servizio di posta](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Per saperne di più <a name="go-further"></a>

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Iniziare a utilizzare Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Iniziare a utilizzare Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Aggiungere un dominio su una piattaforma e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Aggiungere un record CNAME per convalidare il dominio sul servizio di posta](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).