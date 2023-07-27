---
title: "Personalizzare i server DNS di un dominio (Glue Records)"
excerpt: "Questa guida ti mostra come personalizzare i server DNS del tuo dominio OVHcloud"
updated: 2023-07-25
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I **server DNS** ospitano le configurazioni DNS dei domini : le *zone DNS*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Queste *zone DNS* sono composte da informazioni tecniche, *record DNS*. In genere, i *record DNS* permettono di:

- visualizzare il sito Web con il dominio, utilizzando l’indirizzo IP del server di hosting (record DNS dei tipi *A* e *AAAA*).
- di reindirizzare le email ricevute sul tuo o sui tuoi indirizzi email personalizzati con il tuo dominio (record DNS di tipo *MX*).
- configurare informazioni relative alla sicurezza/autenticazione dei servizi (hosting Web, server di posta, ecc...) associati al dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc...).

Per maggiori informazioni su questi argomenti, consulta le nostre guide sui [server DNS OVHcloud](/pages/web/domains/dns_server_general_information) e sulla [modifica di una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit).

In base alle esigenze, è possibile personalizzare il nome dei server DNS del dominio OVHcloud tramite "**Glue Records**".

**Questa guida ti mostra come personalizzare i server DNS configurati sui domini OVHcloud.**

## Prerequisiti

- Disporre di un dominio registrato in OVHcloud.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}.

## Procedura

> [!warning]
>
> **Personalizzare i server DNS di un dominio è un’operazione delicata**: se non viene eseguita correttamente, il tuo sito Web potrebbe non essere raggiungibile e/o la ricezione di nuovi messaggi non sarà più disponibile. 
> In caso di dubbi, ti consigliamo di seguire gli step descritti o rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/).
>

### Step 1: recupera i server DNS attualmente utilizzati dal tuo dominio <a name="step1"></a>

È possibile recuperare i server DNS attualmente utilizzati dal dominio tramite lo strumento DNS online [Zonemaster](https://zonemaster.fr/en/run-test){.external}.

Accedi al link [https://zonemaster.fr](https://zonemaster.fr/en/run-test){.external}, inserisci il tuo dominio senza i *www* (esempio: *domain.tld*) e seleziona il pulsante `Options`{.action} situato immediatamente sotto il modulo di inserimento del nome di dominio.

Nelle opzioni disponibili, clicca direttamente sul pulsante `Fetch NS from parent zone`{.action}.

Viene visualizzato un risultato:

![glue-zonemaster](images/glue-dns-zonemaster.png){.thumbnail}

Recupera i *server DNS* e conserva **tutti** i loro indirizzi IPv4 (nel formato *X.X.X.X.X* in cui i *X* sono compresi tra *0* e *255*) e IPv6 (gli altri IP che non sono IPv4) associati. Ne avrai bisogno per il seguito di questa guida.

Nel nostro esempio, il dominio **domain.tld** utilizza attualmente i seguenti **server DNS**:

- **dnsX1.ovh.net** associato all'IPv4 *111.222.333.443* e all'IPv6 *0000:00d0:1:0000::1*;
- **dnsX2.ovh.net** associato all'IPv4 *111.222.333.444* e all'IPv6 *0000:00d0:1:0000::2*.

Se necessario e per maggiori informazioni, consulta la nostra guida sullo strumento [Zonemaster](/pages/web/domains/dns_zonemaster)

### Step 2: aggiungi i record "GLUE" <a name="step2"></a>

> [!success]
>
> Prima di iniziare, tieni presente che:
>
> - Puoi creare server DNS personalizzati direttamente sul dominio che li utilizzerà. Ad esempio, è possibile creare DNS personalizzati *dns1.domain.tld* e *dns2.domain.tld* per il dominio *domain.tld*.
>
> - Puoi anche creare server DNS personalizzati su un dominio per utilizzarli con un altro dominio. Ad esempio, è possibile creare DNS personalizzati *dns1.domain1.tld* e *dns2.domain1.tld* per il nome di dominio *domain2.tld*. È necessario recuperare i server DNS e gli IP associati relativi al *domain2.tld*.
> In più, il *domain1.tld* deve essere registrato in OVHcloud per attivare i "GLUE" record.
>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio che intendi utilizzare per personalizzare i nomi dei server DNS. 

Nella nuova pagina, clicca sulla scheda `GLUE`{.action}.

Visualizzi una tabella con tutti i record "GLUE" configurati per il tuo dominio in OVHcloud (se presenti). Per aggiungere un nuovo record "GLUE", clicca sul pulsante `Aggiungi`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

Nella nuova finestra, inserisci le informazioni richieste:

|Informazioni|Dettaglio|  
|---|---| 
|Hostname|Personalizzare il nome host che si desidera utilizzare come server DNS personalizzato.|
|IP di destinazione|Indica gli indirizzi IP (IPv4 e/o IPv6) a cui deve essere associato l’hostname. Indirizzo IP del server DNS utilizzato dal dominio. Se sono presenti più indirizzi IP, separarli con *virgole*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

Nell'immagine qui sopra, seguendo l'esempio dello [step 1](#step1), il "GLUE" che vuoi aggiungere qui (a partire dal nome di dominio *domain.tld*) è **dns1.domain.tld**. 

Per questo "GLUE" vengono indicati come indirizzi IP di *server DNS di destinazione* gli indirizzi IP *111.222.333.443* (IPv4) e *0000:00d0:1:0000::1* (IPv6). Questi IP corrispondono a uno dei due server DNS attualmente utilizzati per *domain.tld* (**dnsX1.ovh.net**). 

Viene aggiunto il "GLUE" in modo che **dns1.domain.tld** possa sostituire il nome del server DNS **dnsX1.ovh.net** attualmente utilizzato con il nome di dominio *domain.tld*.

Una volta inseriti tutti i dati, clicca sul pulsante `Continua`{.action}, leggi le informazioni mostrate e poi clicca su `Conferma`{.action}. Ripeti l’operazione per tutti i server DNS utilizzati dal dominio.

Nel nostro esempio, dovrai ripetere l’operazione per creare il "GLUE" **dns2.domain.tld**. che sostituirà il server DNS **dnsX2.ovh.net** attualmente associato agli IPv4 *111.222.333.444* e IPv6 *0000:00d0:1:0000::2*

### Step 3: crea i record DNS di tipo A e AAAA corrispondenti ai DNS personalizzati

È necessario creare i record *A* e *AAAA* per i nomi host definiti nello step precedente. I record *A* e *AAAA* devono avere come destinazione l’indirizzo IP di destinazione corrispondente al nome host creato precedentemente.

Per effettuare questa operazione, utilizza l’interfaccia del provider che gestisce la configurazione DNS del dominio. A questo punto, si presentano due possibilità:

- **il dominio non utilizza una zona DNS attiva in OVHcloud** : contatta il provider responsabile della sua gestione. Una volta completata l’operazione, passa allo step successivo.
- **il dominio utilizza una zona DNS attiva in OVHcloud**: accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio che hai utilizzato per creare le "GLUE" nello [step 2](#step2). Seleziona la scheda `Zona DNS`{.action} e clicca su `Aggiungi un record`{.action}. Seleziona la voce di tipo *A* o *AAAA* in base al tipo di IP associato che vuoi aggiungere. Segui gli step inserendo il *sottodominio* e l’indirizzo *IPv4* (A) o *IPv6* (AAAA) poi prosegui fino alla conferma dell’aggiunta. Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit)".

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> In ogni caso, la propagazione delle modifiche della zona DNS potrebbe richiedere da 4 a 24 ore. Ti consigliamo di attendere questo periodo prima di continuare.
>

Riprendendo l’esempio precedente, i record "GLUE" che vuoi aggiungere (a partire dal dominio *domain.tld*) sono **dns1.domain.tld** e **dns2.domain.tld**. L'obiettivo è sostituire i server DNS attuali **dnsX1.ovh.net** e **dnsX2.ovh.net**

In questo modo, nella zona DNS attiva del dominio *domain.tld* vengono aggiunti i seguenti record:

 - un record DNS di tipo *A* per il *sottodominio* **dns1.domain.tld** verso l'IP *111.222.333.443* (IPv4 del server DNS **dnsX1.ovh.net**);
 - un record DNS di tipo *AAAA* per il *sottodominio* **dns1.domain.tld** verso l'IP *0000:00d0:1:0000::1* (IPv6 del server DNS **dnsX1.ovh.net**);
 - un record DNS di tipo *A* per il *sottodominio* **dns2.domain.tld** verso l'IP *111.222.333.444* (IPv4 del server DNS **dnsX2.ovh.net**);
 - Un record DNS di tipo *AAAA* per il *sottodominio* **dns2.domain.tld** verso l'IP .*0000:00d0:1:0000::2* (IPv6 del server DNS **dnsX2.ovh.net**).

Attendiamo il tempo di propagazione DNS.

### Step 4: modifica i server DNS del dominio

È necessario modificare i server DNS del dominio sostituendo i server DNS precedenti con i server DNS personalizzati creati in precedenza.

Per farlo, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona *il dominio per il quale vuoi personalizzare i server DNS*.
 
Seleziona la scheda `Server DNS`{.action} e clicca su `Modifica i server DNS`{.action}. Sostituisci i server DNS correnti con quelli che vuoi utilizzare come server DNS personalizzato. 

Completa gli step e, se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica i server DNS di un dominio OVHcloud](/pages/web/domains/dns_server_general_information)".

> [!primary]
> 
> Se hai personalizzato dei server DNS su un dominio per utilizzarli con un altro dominio non registrato in OVHcloud, contatta il provider del server per modificare i server DNS.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> La propagazione delle modifiche dei server DNS potrebbe richiedere dalle 24 alle 48 ore. Ti consigliamo di attendere questo periodo prima di continuare.
>

Nel nostro esempio di personalizzazione dei server DNS del nome di dominio *domain.tld*, il server DNS **dnsX1.ovh.net** viene sostituito con **dns1.domain.tld** e il server DNS **dnsX2.ovh.net** con **dns2.domain.tld**, in seguito si attende il tempo della propagazione DNS.

### Step 5: sostituisci i record NS nella zona DNS attiva del tuo dominio

Per rendere visibile la personalizzazione dei server DNS nella rete DNS (eseguendo un *Whois*, un *dig ns* o attraverso un parser di configurazione DNS), è necessario sostituire i record di tipo *NS* nella zona DNS attiva del dominio.

Per effettuare questa operazione, utilizza l’interfaccia del provider che gestisce la configurazione DNS del dominio. Esistono quindi due possibilità:

- **il dominio non utilizza una zona DNS attiva in OVHcloud** : per apportare la modifica, contatta il provider responsabile della sua gestione.
- **il dominio utilizza una zona DNS attiva in OVHcloud**: accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio per il quale hai personalizzato i server DNS. Seleziona la scheda `Zona DNS`{.action} e clicca su `Utilizza l'editor di testo`{.action}. 

Viene visualizzata una finestra che include la zona DNS in modalità *testuale*:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Ti ricordiamo che una modifica inappropriata in modalità *testuale* nella tua zona DNS può impedire l'accesso al tuo sito Web e/o rendere non disponibile la ricezione di nuovi messaggi sui tuoi indirizzi email. 
> Contatta un [provider specializzato](https://partner.ovhcloud.com/it/directory/) in caso di dubbi.
>

In questa finestra, sostituisci **solo nei record di tipo *NS*** i nomi dei server DNS con i tuoi nomi di server DNS personalizzati **senza dimenticare** di incrementare di "1" il primo valore numerico della riga *SOA*. Una volta effettuate le modifiche, clicca su `Continua`{.action} e poi su `Conferma`{.action}.

La modifica non sarà visibile immediatamente nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Attendi una ventina di minuti e poi effettua di nuovo l’accesso allo Spazio Cliente OVHcloud per verificare che le modifiche siano state prese in carico.

> [!primary]
>
> Per applicare le modifiche apportate nella zona DNS all'intera rete DNS è necessario un tempo di propagazione da 4 a 24 ore.
>

Per comprendere meglio quest’ultimo step, segui il nostro esempio con il nome di dominio *domain.tld* e la sua zona DNS in modalità "testuale" visibile nell’immagine qui sopra.

In esso si osservano i seguenti elementi: 

- il primo valore numerico della riga *SOA* è *2023071700*;
- ci sono due record di tipo *NS* per il dominio *domain.tld*;
- i record di tipo *NS* riguardano ancora i due server DNS **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Per completare la personalizzazione dei server DNS per il dominio *domain.tld*, è necessario:

- aumentare di "1" il primo valore numerico della riga *SOA*: *202307170**1*** (notare che se il primo valore numerico fosse il seguente:*2023071704*, si aumenterebbe sempre di "1" e si otterrebbe il seguente risultato: *202307170**5*** );
- sostituire la destinazione **dnsX1.ovh.net.** con **dns1.domain.tld.** solo per la linea che inizia con **IN NS**;
- sostituire la destinazione **dnsX2.ovh.net.** con **dns2.domain.tld.** solo per la linea che inizia con **IN NS**.

Una volta apportate le modifiche, il risultato del nostro esempio sarà il seguente:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Per il dominio *domain.tld*, i server DNS che vengono visualizzati dopo l'esecuzione della modifica e della propagazione DNS saranno **dns1.domain.tld.** e **dns2.domain.tld.**.

Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modifica una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit)".

> [!success]
>
> In caso di personalizzazione dei server DNS direttamente sul nome di dominio che li utilizzerà, la zona DNS potrebbe non visualizzare il nome di dominio nelle destinazioni dei record di tipo *NS* ma soltanto il *sottodominio*.
>
> Ad esempio, anziché visualizzare i seguenti record:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> la zona DNS può visualizzare i record come segue:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Non preoccupatevi, questo equivale allo stesso risultato e questa configurazione funzionerà perfettamente. Questo fenomeno è generato dal fatto che si tratta dello stesso dominio su entrambi i lati del record *NS*.
>

## Per saperne di più

[Generalità sui server DNS OVHcloud](/pages/web/domains/dns_server_general_information)

[Modificare una zona DNS in OVHcloud](/pages/web/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>