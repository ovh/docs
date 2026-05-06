---
title: "Personalizzare i server DNS di un dominio (Host)"
excerpt: 'Questa guida ti mostra come personalizzare i server DNS del tuo dominio OVHcloud'
updated: 2026-03-27
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
</style>

## Obiettivo

I **server DNS** ospitano le configurazioni DNS dei domini: le *zone DNS*.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Queste *zone DNS* sono composte da informazioni tecniche: i *record DNS*. In un utilizzo classico, i *record DNS* permettono di:

- visualizzare il tuo sito Web con il tuo dominio, utilizzando l'indirizzo IP del server di hosting (record DNS di tipo *A* e *AAAA*).
- reindirizzare le e-mail ricevute sul(sui) tuo(tuoi) indirizzo(i) e-mail personalizzato(i) con il tuo dominio (record DNS di tipo *MX*).
- configurare informazioni relative alla sicurezza o all'autenticazione dei tuoi servizi (hosting Web, server e-mail, ecc.) associati al tuo dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc.).

Per maggiori informazioni su questi argomenti, consulta le seguenti guide:

- [Sapere tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

In base alle tue esigenze, puoi personalizzare il nome dei server DNS del tuo dominio OVHcloud utilizzando gli "**Host**".

**Questa guida ti mostra come personalizzare i server DNS del tuo dominio OVHcloud.**

## Prerequisiti

- Disporre di un [dominio](/links/web/domains) registrato in OVHcloud.

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
> **Personalizzare i server DNS di un dominio è un'operazione delicata**: effettuare una modifica inopportuna può impedire l'accesso al tuo sito Web e/o rendere non disponibile la ricezione di nuovi messaggi sui tuoi indirizzi e-mail.
> Segui attentamente i passaggi descritti di seguito o rivolgiti a un [provider specializzato](/links/partner) in caso di dubbi.
>

### 1 - Regola generale <a name="step1"></a>

Alcuni registri, come **Verisign** (che gestisce le estensioni *.com*, *.net* e altri TLD), utilizzano un modello tecnico chiamato **host objects**.

In alcuni casi, questo modello richiede la creazione preventiva di un record specifico per un server DNS prima che possa essere **utilizzato da un dominio**.

Altri registri non necessitano di questo record e accettano direttamente il nome del server DNS.

In generale, OVHcloud crea automaticamente gli **host objects** quando riguardano un dominio gestito da OVHcloud.

> [!warning]
>
> **La scheda "Hosts" è necessaria solo in un caso specifico**: il server DNS appartiene a un dominio gestito da OVHcloud e deve essere utilizzato da un altro dominio che non è gestito da OVHcloud *ma è regolato dallo stesso registro* (ad esempio, due domini in *.com*).
>

#### Casi possibili

| Dominio del server DNS | Dominio da configurare | Creazione dell'*host* da parte di OVHcloud             | Azione manuale nel menu "Hosts" | Esempio |
| ----------------------------- | --------------------------- | ------------------------------------------- | ---------------------------------------------- | ------- |
| Gestito da OVHcloud             | Gestito da OVHcloud           | Automatica                                 | No                                            | *ns1.example.com* (dominio *example.com* gestito da OVHcloud) viene utilizzato come server DNS per il dominio *test.com* (gestito da OVHcloud) |
| Gestito da OVHcloud             | Gestito da OVHcloud           | Automatica                                 | No                                            | *ns1.example.com* (dominio *example.com* gestito da OVHcloud) viene utilizzato come server DNS per il dominio *test.fr* (gestito da OVHcloud) |
| **Gestito da OVHcloud**         | **Altro registrar**         | **Configurazione automatica impossibile**    | **Sì**                                        | ***ns1.example.com* (dominio *example.com* gestito da OVHcloud) viene utilizzato come server DNS per il dominio *test.com* (gestito da un altro registrar, stessa estensione *.com*)** |
| Gestito da OVHcloud             | Altro registrar             | N/A                                         | No                                            | *ns1.example.com* (dominio *example.com* gestito da OVHcloud) viene utilizzato come server DNS per il dominio *test.fr* (gestito da un altro registrar) |
| Non gestito da OVHcloud         | Gestito da OVHcloud           | Fuori perimetro                              | No                                            | *ns1.example.net* (dominio gestito da un altro registrar) viene utilizzato come server DNS per il dominio *test.com* (gestito da OVHcloud) - l'*host* deve essere creato presso il registrar che gestisce *example.net* |

**La terza riga della tabella qui sopra è l'unico scenario in cui è necessaria la creazione manuale dell'*host* nella scheda "Hosts".**

### 2 - Recuperare i server DNS attualmente utilizzati dal tuo dominio <a name="step2"></a>

Puoi recuperare i server DNS attualmente utilizzati dal tuo dominio con lo strumento DNS online [Zonemaster](https://zonemaster.net/it).

Per farlo, accedi al link [https://zonemaster.net](https://zonemaster.net/it), inserisci il tuo dominio senza le *www* (esempio: *domain.tld*), quindi seleziona il pulsante `Options`{.action} situato appena sotto il modulo di inserimento del dominio.

Nelle opzioni disponibili, clicca direttamente sul pulsante `Recupera NS dalla zona padre`{.action}.

Viene visualizzato un risultato:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Recupera i *server DNS* e conserva **tutti** i loro indirizzi IPv4 (nel formato *X.X.X.X* dove ogni *X* è compreso tra *0* e *255*) e IPv6 (gli altri IP che non sono IPv4) associati. Ne avrai bisogno per il proseguimento di questa guida.

Nel nostro esempio illustrato qui sopra, il dominio **domain.tld** utilizza attualmente i seguenti **server DNS**:

- **dnsX1.ovh.net** associato all'IPv4 *203.0.113.0* e all'IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** associato all'IPv4 *203.0.113.1* e all'IPv6 *2001:db8:1:1b00:203:0:113:1*.

Se necessario, consulta il nostro tutorial sullo strumento [Zonemaster](/pages/web_cloud/domains/dns_zonemaster) per maggiori informazioni.

### 3 - Aggiungere i record "host" <a name="step3"></a>

> [!warning]
>
> I registri delle estensioni *.eu*, *.it*, *.be* e *.de* non considerano i record "host" come "oggetti" ma come "attributi".
>
> Pertanto, per queste estensioni, passa **direttamente al [passaggio 4](#step4)** di questa guida senza effettuare il passaggio 3.
>

> [!success]
>
> Prima di iniziare, tieni presente che:
>
> - Puoi creare server DNS personalizzati direttamente sul dominio che li utilizzerà. Ad esempio, puoi creare i DNS personalizzati *dns1.domain.tld* e *dns2.domain.tld* per il dominio *domain.tld*.
>
> - Puoi anche creare server DNS personalizzati su un dominio per utilizzarli con un altro dominio. Ad esempio, puoi creare i DNS personalizzati *dns1.domain1.tld* e *dns2.domain1.tld* per il dominio *domain2.tld*. Dovrai recuperare i server DNS e i rispettivi IP associati al *domain2.tld*.
> Inoltre, il *domain1.tld* deve essere registrato in OVHcloud per configurare gli host.
>

<!-- CP-STEPS-START:add-host-records -->
Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Una volta posizionato sul dominio interessato, clicca sulla scheda `Hosts`{.action}.
>>
>> Nella tabella visualizzata, se presenti, troverai i record host attualmente configurati in OVHcloud per il tuo dominio. Per aggiungere un nuovo record, clicca sul pulsante `Aggiungi`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Step 3**
>>
>> Nella finestra che appare sullo schermo, compila le informazioni richieste:
>>
>> |Informazioni|Dettagli|
>> |---|---|
>> |Nome dell'host|Personalizza il nome dell'host che desideri utilizzare come server DNS personalizzato.|
>> |IP di destinazione|Indica l'indirizzo o gli indirizzi IP (IPv4 e/o IPv6) a cui l'host deve essere collegato. Si tratta dell'indirizzo o degli indirizzi IP del server DNS attualmente utilizzato dal tuo dominio. Se devi inserire più indirizzi IP, separali con delle *virgole*.|
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> Nell'immagine qui sopra, riprendendo l'esempio del [passaggio 2](#step2), l'host che si desidera aggiungere qui (a partire dal dominio *domain.tld*) è **dns1.domain.tld**.
>>
>> Si indicano per questo host i seguenti indirizzi IP del *server DNS di destinazione*: *203.0.113.0* (IPv4) e *2001:db8:1:1b00:203:0:113:0* (IPv6). Questi IP corrispondono a uno dei due server DNS attualmente utilizzati per *domain.tld* (**dnsX1.ovh.net**).
>>
>> Si aggiunge questo host affinché **dns1.domain.tld** sostituisca, in definitiva, il nome del server DNS **dnsX1.ovh.net** attualmente utilizzato dal dominio *domain.tld*.
>>
>> Una volta completate le informazioni, clicca sul pulsante `Aggiungi`{.action}. Prendi visione delle informazioni visualizzate, quindi clicca su `Conferma`{.action}. Ripeti questa operazione tutte le volte necessarie, in base al numero di server DNS utilizzati dal tuo dominio.
>>
>> Nel nostro esempio, dovrai ripetere l'operazione per creare l'host **dns2.domain.tld**. Quest'ultimo sostituirà successivamente il server DNS **dnsX2.ovh.net** attualmente associato agli indirizzi IP *203.0.113.1* (IPv4) e *2001:db8:1:1b00:203:0:113:1* (IPv6).
<!-- CP-STEPS-END:add-host-records -->

### 4 - Creare i record DNS di tipo A e AAAA corrispondenti ai DNS personalizzati <a name="step4"></a>

È necessario creare i record *A* e *AAAA* per i nomi di host definiti nel passaggio precedente. I record *A* e *AAAA* devono puntare all'indirizzo IP di destinazione corrispondente al nome dell'host creato in precedenza.

Questa operazione si effettua dall'interfaccia del provider che gestisce la configurazione DNS del tuo dominio. Esistono due possibilità:

**Clicca su una delle 2 possibilità per visualizzarne il contenuto.**

/// details | Il tuo dominio non utilizza una zona DNS attiva in OVHcloud

Rivolgiti al provider che gestisce tale zona. Una volta effettuata l'operazione, prosegui con il passaggio successivo.

///

<!-- CP-STEPS-START:add-dns-records-ovh -->
/// details | Il tuo dominio utilizza una zona DNS attiva in OVHcloud

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio che hai utilizzato per creare gli host nella [parte 3](#step3).
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca su `Aggiungi un record`{.action}.
>>
> **Step 3**
>>
>> Seleziona il record di tipo *A* o *AAAA* in base al tipo di IP associato che desideri aggiungere.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}
>>
> **Step 4**
>>
>> Inserisci il *sottodominio* e l'indirizzo *IPv4* (A) o *IPv6* (AAAA), quindi prosegui fino alla conferma dell'aggiunta. Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:add-dns-records-ovh -->

> [!primary]
>
> In tutti i casi, è necessario un periodo di propagazione da 4 a 24 ore affinché la modifica della zona DNS venga applicata sull'intera rete DNS. Ti consigliamo di attendere questo periodo prima di proseguire.
>

Se riprendiamo il nostro esempio precedente, i record "host" che si desidera aggiungere (a partire dal dominio *domain.tld*) sono **dns1.domain.tld** e **dns2.domain.tld**. L'obiettivo è sostituire i server DNS attuali **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Di conseguenza, si aggiungono i seguenti record nella zona DNS attiva del dominio *domain.tld*:

 - Un record DNS di tipo *A* per il *sottodominio* **dns1.domain.tld** verso l'IP *203.0.113.0* (IPv4 del server DNS **dnsX1.ovh.net**).
 - Un record DNS di tipo *AAAA* per il *sottodominio* **dns1.domain.tld** verso l'IP *2001:db8:1:1b00:203:0:113:0* (IPv6 del server DNS **dnsX1.ovh.net**).
 - Un record DNS di tipo *A* per il *sottodominio* **dns2.domain.tld** verso l'IP *203.0.113.1* (IPv4 del server DNS **dnsX2.ovh.net**).
 - Un record DNS di tipo *AAAA* per il *sottodominio* **dns2.domain.tld** verso l'IP *2001:db8:1:1b00:203:0:113:1* (IPv6 del server DNS **dnsX2.ovh.net**).

A questo punto, attendi il completamento della propagazione DNS.

### 5 - Sostituire i record NS nella zona DNS attiva del tuo dominio

Affinché la personalizzazione dei server DNS sia visibile sulla rete DNS (effettuando un *Whois*, un *dig ns* o tramite un analizzatore di configurazione DNS), dovrai sostituire i record di tipo *NS* nella zona DNS attiva del tuo dominio.

Questa operazione si effettua dall'interfaccia del provider che gestisce la configurazione DNS del tuo dominio. Esistono due possibilità:

**Clicca su una delle 2 possibilità per visualizzarne il contenuto.**

/// details | Il tuo dominio non utilizza una zona DNS attiva in OVHcloud

Rivolgiti al provider che gestisce tale zona per effettuare la modifica.

///

<!-- CP-STEPS-START:update-ns-records-ovh -->
/// details | Il tuo dominio utilizza una zona DNS attiva in OVHcloud

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio per il quale hai personalizzato i server DNS.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca su `Modifica in modalità testuale`{.action}.
>>
>> Viene visualizzata una finestra contenente la tua zona DNS in modalità *testuale*:
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Ti ricordiamo che effettuare una modifica inopportuna in modalità *testuale* nella tua zona DNS può impedire l'accesso al tuo sito Web e/o rendere non disponibile la ricezione di nuovi messaggi sui tuoi indirizzi e-mail.
>> > Rivolgiti a un [provider specializzato](/links/partner) in caso di dubbi.
>>
> **Step 3**
>>
>> In questa finestra, sostituisci **unicamente nei record di tipo *NS*** i nomi dei server DNS con i tuoi nomi di server DNS personalizzati **senza dimenticare** di incrementare di "1" il primo valore numerico della riga *SOA*. Una volta apportate le modifiche, clicca su `Avanti`{.action} e poi su `Conferma`{.action}.
>>
>> La modifica non sarà visibile immediatamente. Attendi una ventina di minuti per verificare che le modifiche siano state applicate correttamente.

///
<!-- CP-STEPS-END:update-ns-records-ovh -->

> [!primary]
>
> È necessario un periodo di propagazione da 4 a 24 ore affinché le modifiche effettuate nella zona DNS vengano applicate sull'intera rete DNS.
>

Per comprendere meglio questo passaggio, riprendiamo il nostro esempio con il dominio *domain.tld* e la sua zona DNS in modalità "testuale" visibile nell'immagine qui sopra.

Si osservano i seguenti elementi:

- Il primo valore numerico della riga *SOA* è il seguente: *2023071700*.
- Esistono due record di tipo *NS* per il dominio *domain.tld*.
- I record di tipo *NS* puntano ancora ai due server DNS **dnsX1.ovh.net** e **dnsX2.ovh.net**.

Per proseguire con la personalizzazione dei server DNS del dominio *domain.tld*, dovrai:

- Incrementare di "1" il primo valore numerico della riga *SOA*: *202307170**1*** (tieni presente che se il primo valore numerico fosse il seguente: *2023071704*, si incrementerebbe sempre di "1" e si otterrebbe il risultato seguente: *202307170**5***).
- Sostituire la destinazione **dnsX1.ovh.net.** con **dns1.domain.tld.** unicamente nella riga che inizia per **IN NS**.
- Sostituire la destinazione **dnsX2.ovh.net.** con **dns2.domain.tld.** unicamente nella riga che inizia per **IN NS**.

Una volta apportate le modifiche, il risultato del nostro esempio sarà il seguente:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Per il nostro dominio *domain.tld*, i server DNS che verranno visualizzati dopo l'applicazione della modifica e la propagazione DNS saranno **dns1.domain.tld.** e **dns2.domain.tld.**.

Se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> Nel caso di una personalizzazione dei server DNS direttamente sul dominio che li utilizzerà, è possibile che la zona DNS non mostri il dominio nelle destinazioni dei record di tipo *NS*, ma unicamente il *sottodominio*.
>
> Ad esempio, invece di visualizzare i seguenti record:
>
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> La zona DNS può mostrare i record nel modo seguente:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Non preoccuparti, il risultato è equivalente e questa configurazione funzionerà perfettamente. Questo fenomeno si spiega con la presenza dello stesso dominio su entrambi i lati del record *NS*.
>

### 6 - Modificare i server DNS del tuo dominio

Devi modificare i server DNS del tuo dominio sostituendo i vecchi server DNS con i server DNS personalizzati creati in precedenza.

<!-- CP-STEPS-START:change-dns-servers -->
Per farlo, clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona *il dominio per il quale desideri personalizzare i server DNS*.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action}, quindi clicca su `Modifica i server DNS`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}
>>
> **Step 3**
>>
>> Sostituisci i tuoi server DNS attuali con quelli che desideri utilizzare come server DNS personalizzati.
>>
>> > [!warning]
>> >
>> > Se i tuoi server DNS personalizzati sono stati creati con le estensioni *.eu*, *.it*, *.be* o *.de*, inserisci **obbligatoriamente** l'indirizzo IP associato a ciascuno dei tuoi server DNS personalizzati.
>> >
>> > Senza questa informazione, i server DNS personalizzati non verranno presi in considerazione correttamente e non funzioneranno con il tuo dominio.
>>
> **Step 4**
>>
>> Finalizza i passaggi e, se necessario, consulta le istruzioni descritte nella nostra documentazione "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!primary]
>> >
>> > Se hai personalizzato dei server DNS su un dominio per utilizzarli con un altro dominio che non è registrato in OVHcloud, rivolgiti al provider presso cui è registrato l'altro dominio per modificare i server DNS.
<!-- CP-STEPS-END:change-dns-servers -->

> [!primary]
>
> È necessario un periodo di propagazione da 24 a 48 ore affinché la modifica dei server DNS venga applicata sull'intera rete DNS.
>

Nel nostro esempio di personalizzazione dei server DNS del dominio *domain.tld*, si sostituisce il server DNS **dnsX1.ovh.net** con **dns1.domain.tld** e il server DNS **dnsX2.ovh.net** con **dns2.domain.tld**, quindi si attende il completamento della propagazione DNS.

## Per saperne di più

[Informazioni generali sui server DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
