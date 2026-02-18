---
title: "Creare una zona DNS OVHcloud per un sottodominio"
excerpt: "Scopri come creare una zona DNS OVHcloud per un sottodominio di un nome a dominio tramite il tuo Spazio Cliente"
updated: 2025-04-28
---

## Obiettivo

Desideri creare una zona DNS per un sottodominio?

La zona **D**omain **N**ame **S**ystem (**DNS**) di un nome a dominio costituisce il suo file di configurazione. Essa è composta da informazioni tecniche, chiamate *record DNS*. La zona DNS agisce come un centro di instradamento.

Per ulteriori informazioni, consulta le nostre guide qui di seguito :

- [Tutto sul server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Di norma, i record DNS di un sottodominio vengono configurati direttamente dalla zona DNS attiva del nome a dominio a cui appartiene.
Tuttavia, è anche possibile creare una zona DNS specifica per un sottodominio.

Per diversi motivi, potresti dover creare una zona DNS per un sottodominio su OVHcloud.
Quest'ultimo disporrà quindi della sua propria zona per configurare i propri record DNS.

> [!success]
>
> Per ricordo :
>
> - Un nome a dominio ha generalmente questa forma : **domain.tld**. Ad esempio : ovhcloud.com.
> - Un sottodominio ha generalmente questa forma : **sub.domain.tld**. Ad esempio : help.ovhcloud.com.
>
> Per funzionare, un sottodominio dipende di default da un nome a dominio.
> Concretamente, non potrai utilizzare il sottodominio **sub.domain.tld** se non hai accesso alla gestione del nome a dominio **domain.tld**.
>
> Se desideri creare una zona DNS per un nome a dominio, consulta direttamente [questa guida](/pages/web_cloud/domains/dns_zone_create).

**Scopri come creare una zona DNS OVHcloud per un sottodominio di un nome a dominio tramite il tuo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre del nome a dominio da cui dipenderà il sottodominio scelto.
- Il sottodominio in questione non deve già disporre di una zona DNS (attiva o meno) su OVHcloud o essere oggetto di un'operazione o di un ordine in corso su OVHcloud.
- Essere connessi al vostro [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### 1 - Creare la zona DNS tramite lo Spazio Cliente OVHcloud

> **Passo 2**
>>
>> Clicca sul menu `Zones DNS`{.action}, quindi sul pulsante `Acquista`{.action}.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina che appare, inserisci il sottodominio (ad esempio : *sub.domain.tld*) per cui desideri creare una zona DNS OVHcloud. Aspetta alcuni istanti mentre lo strumento effettua controlli sul sottodominio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se un messaggio indica che la zona DNS non può essere creata, verifica che il sottodominio rispetti i prerequisiti necessari o contatta la persona che lo gestisce. Appena tutto sarà corretto, riprova l'operazione.
>>
> **Passo 4**
>>
>> Una volta completata la verifica, scegli di attivare o meno le voci minime per la zona DNS che stai per creare. Questa scelta non è definitiva, potrai sempre [modificare i record della zona DNS](/pages/web_cloud/domains/dns_zone_edit) in seguito.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Attivare le voci minime?|Dettagli|
>> |---|---|
>> |Sì|Seleziona **Sì** se desideri personalizzare da solo la zona DNS in seguito.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Seleziona **No** se prevedi di utilizzare servizi OVHcloud come un [ospedalità web](/links/web/hosting), poiché la zona DNS sarà automaticamente preconfigurata per questi servizi.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Una volta effettuata la tua scelta, segui le fasi visualizzate nel tuo Spazio Cliente OVHcloud fino alla creazione della zona DNS.

### 2 - Modificare la zona DNS (facoltativo)

La zona DNS per il tuo sottodominio è ora creata, puoi modificarla immediatamente. Questa operazione è facoltativa, ma potrebbe rivelarsi necessaria se desideri assicurare la continuità della disponibilità dei servizi collegati a questo sottodominio (come un sito web e/o delle e-mail).

Per modificare questa zona DNS, consulta la nostra guida « [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> Se hai appena creato la zona DNS e il sottodominio non appare ancora nell'elenco dei vostri servizi (nella parte `Web Cloud`{.action} dello Spazio Cliente OVHcloud e poi nella sezione `Zones DNS`{.action}), attendi 15 a 20 minuti e ricarica la pagina.

### 3 - Dichiarare i server DNS nella zona DNS attiva del nome a dominio a cui appartiene il sottodominio scelto

L'attivazione di una zona DNS per un sottodominio differisce da quella di un nome a dominio, poiché un sottodominio dipende obbligatoriamente da un nome a dominio per funzionare.

Devi prima recuperare il nome dei **server DNS** OVHcloud associati alla zona DNS creata per il tuo sottodominio.

Per trovarli, clicca sui tab qui sotto per visualizzare successivamente ciascuna delle **3** fasi.

**Passo 2**
>>
>> Clicca sul menu `Zones DNS`{.action}, quindi seleziona il sottodominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella tabella presente sulla pagina che appare, individua le 2 colonne **Tipo** e **Obiettivo**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Cerca le 2 righe di tipo **NS** e recupera le 2 valori presenti nella colonna **Obiettivo**.
>> I nomi dei server DNS devono avere una delle 3 forme seguenti :
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` o, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ogni `X` rappresenta un numero compreso tra **0** e **9**).
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (dove ogni `X` rappresenta un numero compreso tra **0** e **9**).
>> - `ns200.anycast.me` e `dns200.anycast.me` (se hai sottoscritto l'opzione [DNS anycast](/links/web/domains-Opzioni)).

Una volta recuperati i 2 nomi dei server DNS, 2 situazioni sono possibili :

**Clicca su una delle 2 situazioni per visualizzare il contenuto.**

/// details | Il nome a dominio da cui dipende il tuo sottodominio ha la sua zona DNS attiva su OVHcloud

Clicca sui tab qui sotto per visualizzare successivamente ciascuna delle **5** fasi.

> **Passo 3**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un'entrata`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nella finestra che si apre, seleziona l'entrata DNS di tipo `NS`{.action}, quindi clicca su `Avanti`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Passo 5**
>>
>> Inserisci quindi nel campo `Sottodominio *` il sottodominio interessato (ad esempio : `sub` per il sottodominio `sub.domain.tld`), e nel campo `Obiettivo *`, uno dei 2 server DNS precedentemente recuperati (ad esempio : `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Clicca infine su `Avanti`{.action}.
>>
>> Verifica il riepilogo, quindi clicca su `Conferma`{.action}.
>>
>> **Ripeti l'intera procedura per il secondo server DNS.**
>>
>> Se necessario, consulta inoltre la nostra guida « [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | Il nome a dominio da cui dipende il tuo sottodominio ha la sua zona DNS attiva da un altro fornitore

In questo caso specifico, contatta il tuo fornitore DNS specificandogli che desideri aggiungere 2 record DNS di tipo NS per il tuo sottodominio. 

Ecco un esempio di richiesta da formulare al tuo fornitore DNS :

<pre class="bgwhite"><code>
Buongiorno,

Desidero aggiungere nella zona DNS attiva del nome a dominio <b>domain.tld</b> i seguenti record DNS di tipo NS per il mio sottodominio <b>sub.domain.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Al fine di attivare una zona DNS specifica per il mio sottodominio <b>sub.domain.tld</b>.

Cordiali saluti,
</code></pre>

Nell'esempio sopra, sostituisci i valori **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** con i tuoi valori personali.

///

> [!warning]
>
> **L'attenzione che segue non riguarda i 2 record DNS di tipo NS che hai appena aggiunto.** 
>
> Se erano presenti altri record DNS nella zona DNS attiva del nome a dominio da cui dipende il tuo sottodominio :
>
> 1. Non dimenticare di duplicarli nella zona DNS creata per il tuo sottodominio.
> 2. Una volta duplicati, rimuovili dalla zona DNS attiva del tuo nome a dominio.
>
> Infatti, potrebbe verificarsi un conflitto nella risoluzione DNS.

Dopo la modifica della zona DNS del nome a dominio da cui dipende il tuo sottodominio, la propagazione delle modifiche può richiedere fino a **48 ore**.

## Per saperne di più

[Tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)