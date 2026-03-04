---
title: "Personalizzare i server DNS di un nome di dominio (Host)"
excerpt: "Questa guida ti mostra come personalizzare i server DNS del tuo nome di dominio OVHcloud"
updated: 2026-02-10
---

## Obiettivo

I **server DNS** ospitano le configurazioni DNS dei nomi di dominio: le *zone DNS*.

Queste *zone DNS* sono composte da informazioni tecniche, *record DNS*. In genere, i *record DNS* permettono di:

- visualizzare il sito Web con il nome di dominio, utilizzando l’indirizzo IP del server di hosting (record DNS dei tipi *A* e *AAAA*).
- di reindirizzare le email ricevute sul tuo o sui tuoi indirizzi email personalizzati con il tuo nome di dominio (record DNS di tipo *MX*).
- configurare informazioni relative alla sicurezza/autenticazione dei servizi (hosting Web, server di posta, ecc.) associati al nome di dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc.).

Per ulteriori informazioni su questi argomenti, vedere le seguenti guide:

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

In base alle esigenze, è possibile personalizzare il nome dei server DNS del nome di dominio OVHcloud tramite "**Host**".

**Questa guida ti mostra come personalizzare i server DNS configurati sui nomi di dominio OVHcloud.**

## Prerequisiti

- Disporre di un [nome di dominio](/links/web/domains) registrato in OVHcloud.

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedura

> [!warning]
>
> **Personalizzare i server DNS di un nome di dominio è un’operazione delicata**: se non viene eseguita correttamente, il tuo sito Web potrebbe non essere raggiungibile e/o la ricezione di nuovi messaggi non sarà più disponibile. 
> Ti invitiamo a seguire attentamente le sezioni descritte qui sotto o a rivolgerti a un [provider specializzato](/links/partner) in caso di dubbi.
>

### 1 – Regola generale

Alcuni registri, come **Verisign** (che gestisce le estensioni *.com*, *.net* e altri TLD), utilizzano un modello tecnico chiamato **host objects**.<br>
In alcuni casi, questo modello richiede la creazione preventiva di un record specifico per un server DNS prima che possa essere **utilizzato da un nome di dominio**.<br>
Altri registri non richiedono tale record e accettano direttamente il nome del server DNS.

In generale, OVHcloud crea automaticamente gli **host objects** quando riguardano un nome di dominio gestito da OVHcloud.

> [!warning]
>
> **La scheda “Host” è necessaria solo in un caso specifico**: il server DNS appartiene a un nome di dominio gestito da OVHcloud e deve essere utilizzato da un altro nome di dominio che non è gestito da OVHcloud, ma è regolato *dallo stesso registro* (ad esempio, due domini *.com*)

#### Casi possibili

| Nome di dominio del server DNS | Nome di dominio da configurare | Creazione dell’host da parte di OVHcloud | Azione manuale richiesta nella scheda "Host" | Esempio |
| ------------------------------ | ------------------------------ | ---------------------------------------- | -------------------------------------------- | ------- |
| Gestito da OVHcloud | Gestito da OVHcloud | Automatica | No | *ns1.example.com* (nome di dominio *example.com* gestito da OVHcloud) è utilizzato come server DNS per *test.com* |
| Gestito da OVHcloud | Gestito da OVHcloud | Automatica | No | *ns1.example.com* è utilizzato come server DNS per *test.fr* |
| **Gestito da OVHcloud** | **Altro registrar** | **Configurazione automatica non possibile** | **Sì** | ***ns1.example.com* è utilizzato come server DNS per *test.com* (altro registrar, stessa estensione *.com*)** |
| Gestito da OVHcloud | Altro registrar | N/D | No | *ns1.example.com* è utilizzato come server DNS per *test.fr* |
| Non gestito da OVHcloud | Gestito da OVHcloud | Fuori ambito | No | *ns1.example.net* è utilizzato come server DNS per *test.com* – l’host deve essere creato presso il registrar di *example.net* |

**La terza riga della tabella è l’unico caso in cui è necessaria una creazione manuale nella scheda "Host".**

### 2 - Recupera i server DNS attualmente utilizzati dal tuo nome di dominio <a name="step2"></a>

È possibile recuperare i server DNS attualmente utilizzati dal nome di dominio tramite lo strumento DNS online [Zonemaster](https://zonemaster.net/en).

Accedi al link [https://zonemaster.net](https://zonemaster.net/en), inserisci il tuo nome di dominio senza i *www* (esempio: *domain.tld*) e seleziona il pulsante `Options`{.action} situato immediatamente sotto il modulo di inserimento del nome di dominio.

Nelle opzioni disponibili, clicca direttamente sul pulsante `Fetch NS from parent zone`{.action}.

Viene visualizzato un risultato:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Recupera i *server DNS* e conserva **tutti** i loro indirizzi IPv4 (nel formato *X.X.X.X.X* in cui i *X* sono compresi tra *0* e *255*) e IPv6 (gli altri IP che non sono IPv4) associati. Ne avrai bisogno per il seguito di questa guida.

Nel nostro esempio, il nome di dominio **domain.tld** utilizza attualmente i seguenti **server DNS**:

- **dnsX1.ovh.net** associato all'IPv4 *203.0.113.0* e all'IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** associato all'IPv4 *203.0.113.1* e all'IPv6 *2001:db8:1:1b00:203:0:113:1*.

Se necessario e per maggiori informazioni, consulta la nostra guida sullo strumento [Zonemaster](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Aggiungi i record "Host" <a name="step3"></a>

> [!warning]
>
> I registri delle estensioni *.eu*, *.it*, *.be* e *.de* non considerano i record "Host" come "oggetti", ma come "attributi".
>
> Di conseguenza, per queste estensioni, passa **direttamente allo [tappa 4](#step4)** di questa guida senza realizzare lo tappa 3.
>

> [!success]
>
> Prima di iniziare, tieni presente che:
>
> - Puoi creare server DNS personalizzati direttamente sul nome di dominio che li utilizzerà. Ad esempio, è possibile creare DNS personalizzati *dns1.domain.tld* e *dns2.domain.tld* per il nome di dominio *domain.tld*.
>
> - Puoi anche creare server DNS personalizzati su un nome di dominio per utilizzarli con un altro nome di dominio. Ad esempio, è possibile creare DNS personalizzati *dns1.domain1.tld* e *dns2.domain1.tld* per il nome di dominio *domain2.tld*. È necessario recuperare i server DNS e gli IP associati relativi al *domain2.tld*.
> In più, il *domain1.tld* deve essere registrato in OVHcloud per attivare i "Host" record.
>

Peclicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Tappa 1**
>>
>> Clicca su [questo link](/links/control-panel/web-domains) e seleziona il nome di dominio interessato.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Tappa 2**
>>
>> Nella nuova pagina, clicca sulla scheda `Host`{.action}.
>>
>> Visualizzi una tabella con tutti i record "Host" configurati per il tuo nome di dominio in OVHcloud (se presenti). Per aggiungere un nuovo record "Host", clicca sul pulsante `Aggiungiere`{.action}.
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Tappa 3**
>>
>> Nella nuova finestra, inserisci le informazioni richieste:
>>
>> |Informazioni|Dettaglio|
>> |---|---| 
>> |Hostname|Personalizzare il nome host che si desidera utilizzare come server DNS personalizzato.|
>> |IP di destinazione|Indica gli indirizzi IP (IPv4 e/o IPv6) a cui deve essere associato l’hostname. Si tratta dell'indirizzo IP del server DNS attualmente utilizzato dal nome di dominio. Se sono presenti più indirizzi IP, separarli con *virgole*.|
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> Nell'immagine qui sopra, seguendo l'esempio dello [tappa 2](#step2), il "Host" che vuoi aggiungere qui (a partire dal nome di dominio *domain.tld*) è **dns1.domain.tld**. 
>>
>> Per questo "Host" vengono indicati come indirizzi IP di *server DNS di destinazione* gli indirizzi IP *203.0.113.0* (IPv4) e *2001:db8:1:1b00:203:0:113:0* (IPv6). Questi IP corrispondono a uno dei due server DNS attualmente utilizzati per *domain.tld* (**dnsX1.ovh.net**). 
>>
>> Viene aggiunto il "Host" in modo che **dns1.domain.tld** possa sostituire il nome del server DNS **dnsX1.ovh.net** attualmente utilizzato con il nome di dominio *domain.tld*.
>>
>> Una volta inseriti tutti i dati, clicca sul pulsante `Continua`{.action}, leggi le informazioni mostrate e poi clicca su `Conferma`{.action}. Ripeti l’operazione per tutti i server DNS utilizzati dal nome di dominio.
>>
>> Nel nostro esempio, dovrai ripetere l’operazione per creare il "Host" **dns2.domain.tld**. che sostituirà il server DNS **dnsX2.ovh.net** attualmente associato agli IPv4 *203.0.113.1* e IPv6 *2001:db8:1:1b00:203:0:113:1*.

### 4 - Crea i record DNS di tipo A e AAAA corrispondenti ai DNS personalizzati <a name="step4"></a>

È necessario creare i record *A* e *AAAA* per i nomi host definiti nello tappa precedente. I record *A* e *AAAA* devono avere come destinazione l’indirizzo IP di destinazione corrispondente al nome host creato precedentemente.

Per effettuare questa operazione, utilizza l’interfaccia del provider che gestisce la configurazione DNS del nome di dominio. A questo punto, si presentano due possibilità:

- **Il nome di dominio non utilizza una zona DNS attiva in OVHcloud**: Contatta il provider responsabile della sua gestione. Una volta completata l’operazione, passa allo tappa successivo.
- **Il nome di dominio utilizza una zona DNS attiva in OVHcloud**: Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Zone DNS`{.action} e seleziona il nome di dominio che hai utilizzato per creare le "Host" nello [tappa 3](#step3). Seleziona la scheda `Zona DNS`{.action} e clicca su `Aggiungi un record`{.action}. Seleziona la voce di tipo *A* o *AAAA* in base al tipo di IP associato che vuoi aggiungere. Segui gli tappe inserendo il *sottodominio* e l’indirizzo *IPv4* (A) o *IPv6* (AAAA) poi prosegui fino alla conferma dell’aggiunta. Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}

> [!primary]
>
> In ogni caso, la propagazione delle modifiche della zona DNS potrebbe richiedere da 4 a 24 ore. Ti consigliamo di attendere questo periodo prima di continuare.
>

Riprendendo l’esempio precedente, i record "Host" che vuoi aggiungere (a partire dal nome di dominio *domain.tld*) sono **dns1.domain.tld** e **dns2.domain.tld**. L'obiettivo è sostituire i server DNS attuali **dnsX1.ovh.net** e **dnsX2.ovh.net**.

In questo modo, nella zona DNS attiva del nome di dominio *domain.tld* vengono aggiunti i seguenti record:

 - Un record DNS di tipo *A* per il *sottodominio* **dns1.domain.tld** verso l'IP *203.0.113.0* (IPv4 del server DNS **dnsX1.ovh.net**).
 - Un record DNS di tipo *AAAA* per il *sottodominio* **dns1.domain.tld** verso l'IP *2001:db8:1:1b00:203:0:113:0* (IPv6 del server DNS **dnsX1.ovh.net**).
 - Un record DNS di tipo *A* per il *sottodominio* **dns2.domain.tld** verso l'IP *203.0.113.1* (IPv4 del server DNS **dnsX2.ovh.net**).
 - Un record DNS di tipo *AAAA* per il *sottodominio* **dns2.domain.tld** verso l'IP *2001:db8:1:1b00:203:0:113:1* (IPv6 del server DNS **dnsX2.ovh.net**).

Attendiamo il tempo di propagazione DNS.

### 5 - Sostituisci i record NS nella zona DNS attiva del tuo nome di dominio

Per rendere visibile la personalizzazione dei server DNS nella rete DNS (eseguendo un *Whois*, un *dig ns* o attraverso un parser di configurazione DNS), è necessario sostituire i record di tipo *NS* nella zona DNS attiva del nome di dominio.

Per effettuare questa operazione, utilizza l’interfaccia del provider che gestisce la configurazione DNS del nome di dominio. Esistono quindi due possibilità:

- **Il nome di dominio non utilizza una zona DNS attiva in OVHcloud**: Per apportare la modifica, contatta il provider responsabile della sua gestione.
- **Il nome di dominio utilizza una zona DNS attiva in OVHcloud**: Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Zone DNS`{.action} e seleziona il nome di dominio per il quale hai personalizzato i server DNS. Seleziona la scheda `Zona DNS`{.action} e clicca su `Utilizza l'editor di testo`{.action}. 

Viene visualizzata una finestra che include la zona DNS in modalità *testuale*:

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}

> [!warning]
>
> Ti ricordiamo che una modifica inappropriata in modalità *testuale* nella tua zona DNS può impedire l'accesso al tuo sito Web e/o rendere non disponibile la ricezione di nuovi messaggi sui tuoi indirizzi email.
> Contatta un [provider specializzato](/links/partner) in caso di dubbi.
>

In questa finestra, sostituisci **solo nei record di tipo *NS*** i nomi dei server DNS con i tuoi nomi di server DNS personalizzati **senza dimenticare** di incrementare di "1" il primo valore numerico della riga *SOA*. Una volta effettuate le modifiche, clicca su `Continua`{.action} e poi su `Conferma`{.action}.

La modifica non sarà visibile immediatamente nello [Spazio Cliente OVHcloud](/links/manager). Attendi una ventina di minuti e poi effettua di nuovo l’accesso allo Spazio Cliente OVHcloud per verificare che le modifiche siano state prese in carico.

> [!primary]
>
> Per applicare le modifiche apportate nella zona DNS all'intera rete DNS è necessario un tempo di propagazione da 4 a 24 ore.
>

Per comprendere meglio questa tappa, segui il nostro esempio con il nome di dominio *domain.tld* e la sua zona DNS in modalità "testuale" visibile nell’immagine qui sopra.

In esso si osservano i seguenti elementi: 

- Il primo valore numerico della riga *SOA* è *2023071700*.
- Ci sono due record di tipo *NS* per il nome di dominio *domain.tld*.
- I record di tipo *NS* riguardano ancora i due server DNS **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Per proseguire con la personalizzazione dei server DNS per il nome di dominio *domain.tld*, è necessario:

- Aumentare di "1" il primo valore numerico della riga *SOA*: *202307170**1*** (notare che se il primo valore numerico fosse il seguente:*2023071704*, si aumenterebbe sempre di "1" e si otterrebbe il seguente risultato: *202307170**5*** ).
- Sostituire la destinazione **dnsX1.ovh.net.** con **dns1.domain.tld.** solo per la linea che inizia con **IN NS**.
- Sostituire la destinazione **dnsX2.ovh.net.** con **dns2.domain.tld.** solo per la linea che inizia con **IN NS**.

Una volta apportate le modifiche, il risultato del nostro esempio sarà il seguente:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Per il nome di dominio *domain.tld*, i server DNS che vengono visualizzati dopo l'esecuzione della modifica e della propagazione DNS saranno **dns1.domain.tld.** e **dns2.domain.tld.**.

Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> In caso di personalizzazione dei server DNS direttamente sul nome di dominio che li utilizzerà, la zona DNS potrebbe non visualizzare il nome di dominio nelle destinazioni dei record di tipo *NS* ma soltanto il *sottodominio*.
>
> Ad esempio, anziché visualizzare i seguenti record:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> La zona DNS può visualizzare i record come segue:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Non preoccupatevi, questo equivale allo stesso risultato e questa configurazione funzionerà perfettamente. Questo fenomeno è generato dal fatto che si tratta dello stesso nome di dominio su entrambi i lati del record *NS*.
>

### 6 - Modifica i server DNS del nome di dominio

È necessario modificare i server DNS del nome di dominio sostituendo i server DNS precedenti con i server DNS personalizzati creati in precedenza.

Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona *il nome di dominio per il quale vuoi personalizzare i server DNS*.

Seleziona la scheda `Server DNS`{.action} e clicca su `Modifica i server DNS`{.action}. Sostituisci i server DNS correnti con quelli che vuoi utilizzare come server DNS personalizzato.

> [!warning]
>
> Se i tuoi server DNS personalizzati sono stati creati con le estensioni *.eu*, *.it*, *.be* o *.de*, inserisci **obbligatorio** l'indirizzo IP associato rispettivamente per ciascuno dei tuoi server DNS personalizzati.
>
> In caso contrario, i server DNS personalizzati non verranno presi in carico correttamente e non funzioneranno quindi con il tuo nome di dominio.
>

Completa gli tappe e, se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

> [!primary]
> 
> Se hai personalizzato dei server DNS su un nome di dominio per utilizzarli con un altro nome di dominio non registrato in OVHcloud, contatta il provider del server per modificare i server DNS.
>

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}

> [!primary]
>
> La propagazione delle modifiche dei server DNS potrebbe richiedere dalle 24 alle 48 ore. Ti consigliamo di attendere questo periodo prima di continuare.
>

Nel nostro esempio di personalizzazione dei server DNS del nome di dominio *domain.tld*, il server DNS **dnsX1.ovh.net** viene sostituito con **dns1.domain.tld** e il server DNS **dnsX2.ovh.net** con **dns2.domain.tld**, in seguito si attende il tempo della propagazione DNS.

## Per saperne di più

[Generalità sui server DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).