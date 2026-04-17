---
title: "Modificare i server DNS di un nome di dominio OVHcloud"
excerpt: "Scopri come modificare i server DNS del tuo nome di dominio registrato in OVHcloud"
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

L'acronimo **DNS** (**D**omain **N**ame **S**ystem) indica un insieme di elementi (server DNS, zone DNS, ecc.) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

Per maggiori informazioni, consulta le nostre guide "[Sapere tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Questa guida ti mostra come modificare i server DNS del tuo nome di dominio OVHcloud in 3 step.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Essere intestatario di un [nome di dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle autorizzazioni [appropriate per gestire](/pages/account_and_service_management/account_information/managing_contacts) il nome di dominio.

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Un **Registrar** è un'organizzazione autorizzata a vendere nomi di dominio. Anche OVHcloud fa parte di questi **Registrar**.
>
> Se il tuo nome di dominio non è registrato presso OVHcloud, è necessario modificare i server DNS presso il **Registrar** in cui è attualmente registrato il nome di dominio.
>

## Procedura

> [!alert]
>
> **Presta la massima attenzione quando modifichi i server DNS di un nome di dominio.**
>
> Un errore di manipolazione potrebbe rendere il tuo sito Web inaccessibile o impedire ai tuoi indirizzi e-mail di ricevere nuovi messaggi. Comprendere le conseguenze di una tale modifica ti permetterà di affrontare con maggiore consapevolezza le operazioni che stai per effettuare.

Quando modifichi i server DNS del tuo nome di dominio, ne modifichi la configurazione DNS. La nuova configurazione DNS sostituisce quella precedente e viene archiviata sui server DNS appena definiti. Tecnicamente, il nome di dominio utilizza una nuova zona DNS.

Tuttavia, è essenziale tenere conto dei seguenti punti:

- In caso di modifica del server DNS (ad esempio, un DNS esterno tramite un DNS OVHcloud), il contenuto della precedente configurazione/zona DNS non viene replicato automaticamente nella nuova. Assicurati che la nuova zona DNS contenga tutti i record DNS necessari al corretto funzionamento dei servizi associati al tuo nome di dominio (ad esempio, il sito Web e gli indirizzi e-mail).
- Se non vuoi modificare i server DNS ma uno o più record della configurazione/zona DNS attuale, consulta la nostra guida: "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Alcune organizzazioni, i Registry, che gestiscono le estensioni dei nomi di dominio, hanno requisiti particolari relativi ai server DNS (quantità di server dei nomi, valore dei record, ecc.). In caso di dubbio, verifica presso il Registry responsabile del nome di dominio.

### 1 - Modificare i server DNS <a name="modify-dns-servers"></a>

La modifica dei server DNS del tuo nome di dominio può essere necessaria nelle seguenti situazioni:

- Vuoi utilizzare i server DNS proposti da OVHcloud.
- Vuoi utilizzare i tuoi server DNS (o quelli forniti da un provider DNS esterno).
- Vuoi combinare i server DNS proposti da OVHcloud con i tuoi server DNS.

> [!primary]
>
> Quando utilizzi i server DNS OVHcloud, i numeri presenti nei nomi dei server non hanno alcun legame con il servizio o i servizi che utilizzi. Solo l'opzione [DNS anycast](/links/web/domains-options) utilizza server DNS specifici (`ns200.anycast.me` e `dns200.anycast.me`). Una volta sottoscritti, vengono assegnati automaticamente.

**Clicca sulle opzioni qui sotto per visualizzare il contenuto.**

/// details | Opzione 1 - Utilizzare i DNS predefiniti di OVHcloud

Questa opzione consente di applicare automaticamente la configurazione della zona DNS OVHcloud esistente per il tuo nome di dominio. Assicurati prima che esista una zona DNS in OVHcloud per il tuo nome di dominio.

> [!primary]
>
> Se necessario, consulta le guide "[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" e/o "[Creare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)" per verificare se esiste una zona DNS OVHcloud per il tuo nome di dominio.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>>
> **Step 3**
>>
>> La tabella visualizzata contiene i server DNS attualmente configurati da OVHcloud per il tuo nome di dominio. Possono essere elencati diversi server DNS, ciascuno con la propria riga nella tabella.
>>
>> ![Server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} a destra della tabella "server DNS". In base alla risoluzione dello schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
> **Step 4**
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Per utilizzare i server DNS predefiniti di OVHcloud, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la finestra seguente:
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Essa riepiloga il nome dei 2 server DNS che saranno applicati al tuo nome di dominio. Devono avere una delle 3 forme seguenti:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` o, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ogni `X` rappresenta una cifra compresa tra **0** e **9**)
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (dove ogni `X` rappresenta una cifra compresa tra **0** e **9**)
>> - `ns200.anycast.me` e `dns200.anycast.me` (se hai sottoscritto l'opzione [DNS anycast](/links/web/domains-options))
>>
>> Se corrispondono a quelli che desideri applicare, clicca su `Applica`{.action}.
>>
>> In questo modo, i 2 server DNS dichiarati (nei record di tipo NS della zona DNS OVHcloud) saranno utilizzati per il tuo nome di dominio.

I server DNS dichiarati in precedenza e la configurazione DNS da essi applicata saranno disattivati per il tuo nome di dominio. La zona DNS OVHcloud diventerà la zona DNS attiva per il tuo nome di dominio.

///

/// details | Opzione 2 - Utilizzare i propri DNS

Questa opzione consente di dichiarare i server DNS di una zona DNS non gestita dallo Spazio Cliente OVHcloud.

Può trattarsi, ad esempio, di:

- server DNS esterni forniti da uno dei nostri concorrenti;
- i tuoi server DNS se ospiti la tua zona DNS su uno dei tuoi server. Questi server DNS possono anche essere ospitati su un'infrastruttura OVHcloud (server dedicato, VPS, ecc.).

> [!success]
>
> Prima di aggiungere un server DNS, assicurati che **sia raggiungibile** e che contenga una zona DNS per il tuo nome di dominio. Assicurati inoltre che la zona DNS contenga tutti i record di tipo "NS" verso tutti i server DNS che intendi dichiarare per il tuo nome di dominio.
>
> Ad esempio: vuoi dichiarare i server DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* e *ns3.dns-server.tld* per il tuo nome di dominio. Dovrai quindi verificare che i tre record di tipo "NS" seguenti siano presenti nelle 3 zone DNS ospitate su questi 3 server DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.

Clicca sulle schede qui sotto per visualizzare i **5** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>>
> **Step 3**
>>
>> La tabella visualizzata contiene i server DNS attualmente configurati da OVHcloud per il tuo nome di dominio. Possono essere elencati diversi server DNS, ciascuno con la propria riga nella tabella.
>>
>> ![Server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} a destra della tabella "server DNS". In base alla risoluzione dello schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
> **Step 4**
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Per inserire uno dei tuoi server DNS, compila i 2 campi del riquadro come indicato di seguito:
>>
>> - `Server DNS`: nome del server DNS da applicare al tuo nome di dominio.
>> - `IP associato (facoltativo)`: indirizzo IP (IPv4 o IPv6) del server DNS inserito. In questo campo è possibile inserire **un solo indirizzo IP**.
>>
>> > [!warning]
>> >
>> > Ogni riquadro di inserimento (visibile nella schermata precedente) può contenere **un solo** server DNS alla volta. Un server DNS corrisponde quindi a un riquadro.
>> >
>> > Inoltre, una nota informativa su sfondo blu, situata sopra il primo riquadro, indica l'intervallo di server DNS che è possibile dichiarare per il tuo nome di dominio. Questi valori variano in base all'estensione del nome di dominio.
>>
> **Step 5**
>>
>> Una volta inserite le informazioni, clicca sul pulsante `+`{.action} a destra dei 2 campi. Questo permette di aggiungere il server DNS e fa comparire un nuovo riquadro di inserimento sotto il precedente.
>>
>> Ripeti l'operazione per tutti i server DNS da aggiungere, rispettando i limiti indicati nella nota informativa.
>> Clicca sul pulsante `+`{.action} per ogni server DNS per confermarne l'inserimento e l'aggiunta.
>>
>> Una volta aggiunti tutti i tuoi server DNS, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la finestra seguente:
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Essa riepiloga i nomi dei server DNS che saranno applicati al tuo nome di dominio.
>> Se corrispondono a quelli che desideri applicare, clicca su `Applica`{.action}.

I server DNS dichiarati in precedenza e la configurazione DNS da essi applicata saranno disattivati per il tuo nome di dominio. La zona DNS dichiarata sui tuoi server DNS diventerà la zona DNS attiva per il tuo nome di dominio.

///

/// details | Opzione 3 - Utilizzare i DNS OVHcloud e i propri DNS

Questa opzione consente di combinare l'utilizzo dei tuoi server DNS mantenendo attivi i server DNS OVHcloud per il tuo nome di dominio. Questa combinazione permette, ad esempio, di garantire maggiormente l'accesso ai diversi servizi associati al tuo nome di dominio (hosting Web, server e-mail, ecc.). Infatti, se un gruppo di server DNS diventa indisponibile per qualche minuto, gli altri server DNS dichiarati possono subentrare.

Tuttavia, assicurati che le configurazioni delle zone DNS presenti sui diversi server DNS siano correttamente parametrizzate per funzionare tutte insieme. Nella maggior parte dei casi, tutti i server DNS saranno operativi. Saranno tutti in grado di rispondere alle richieste che verranno loro inviate in modo casuale sulla rete DNS.

> [!warning]
>
> 1. Presta la massima attenzione se decidi di utilizzare quest'ultima opzione. Richiede infatti conoscenze avanzate sul funzionamento della rete DNS, dei server DNS e delle zone DNS.
> 2. L'opzione [DNSSEC](/pages/web_cloud/domains/dns_dnssec) deve essere disattivata per combinare l'utilizzo dei tuoi server DNS con i DNS di OVHcloud.
> 3. Assicurati di non mescolare un gruppo di server DNS OVHcloud con un altro gruppo di server DNS OVHcloud. Ad esempio, *dns19.ovh.net* e *ns19.ovh.net* corrispondono a un gruppo di server DNS OVHcloud, vanno di pari passo e sono sincronizzati. In OVHcloud, i gruppi di server DNS sono identificabili tramite il numero presente nei nomi dei server. Due server DNS OVHcloud fanno parte dello stesso gruppo di server DNS quando condividono lo stesso numero. Ad esempio, *dns19.ovh.net* e *ns19.ovh.net*.

> [!success]
>
> Prima di aggiungere un server DNS, assicurati che **sia raggiungibile** e che contenga una zona DNS per il tuo nome di dominio. Assicurati inoltre che la zona DNS contenga tutti i record di tipo "NS" verso tutti i server DNS che intendi dichiarare per il tuo nome di dominio.
>
> Ad esempio: vuoi dichiarare i server DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* e *nsXX.ovh.net* per il tuo nome di dominio. Dovrai quindi verificare che i tre record di tipo "NS" seguenti siano presenti nelle 3 zone DNS ospitate su questi 3 server DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.

Clicca sulle schede qui sotto per visualizzare i **5** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>>
> **Step 3**
>>
>> La tabella visualizzata contiene i server DNS attualmente configurati da OVHcloud per il tuo nome di dominio. Possono essere elencati diversi server DNS, ciascuno con la propria riga nella tabella.
>>
>> ![Server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clicca sul pulsante `Modifica i server DNS`{.action} a destra della tabella "server DNS". In base alla risoluzione dello schermo, il pulsante potrebbe trovarsi sotto la tabella.
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Step 4**
>>
>> Per inserire uno dei tuoi server DNS, compila i 2 campi del riquadro come indicato di seguito:
>>
>> - `Server DNS`: nome del server DNS da applicare al tuo nome di dominio.
>> - `IP associato (facoltativo)`: indirizzo IP (IPv4 o IPv6) del server DNS inserito. In questo campo è possibile inserire **un solo indirizzo IP**.
>>
>> > [!warning]
>> >
>> > Ogni riquadro di inserimento (visibile nella schermata precedente) può contenere **un solo** server DNS alla volta. Un server DNS corrisponde quindi a un riquadro.
>> >
>> > Inoltre, una nota informativa su sfondo blu, situata sopra il primo riquadro, indica l'intervallo di server DNS che è possibile dichiarare per il tuo nome di dominio. Questi valori variano in base all'estensione del nome di dominio.
>>
>> Una volta inserite le informazioni, clicca sul pulsante `+`{.action} a destra dei 2 campi. Questo permette di aggiungere il server DNS e fa comparire un nuovo riquadro di inserimento sotto il precedente.
>>
>> Ripeti l'operazione per tutti i server DNS da aggiungere, rispettando i limiti indicati nella nota informativa.
>> Clicca sul pulsante `+`{.action} per ogni server DNS per confermarne l'inserimento e l'aggiunta.
>>
> **Step 5**
>>
>> Una volta aggiunti tutti i tuoi server DNS, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la finestra seguente:
>>
>> ![Modifica dei server DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Essa riepiloga i nomi dei server DNS che saranno applicati al tuo nome di dominio.
>> Se corrispondono a quelli che desideri applicare, clicca su `Applica`{.action}.

I server DNS dichiarati in precedenza e la configurazione DNS da essi applicata saranno disattivati per il tuo nome di dominio. Le zone DNS presenti sui tuoi server DNS e sui server DNS OVHcloud diventeranno quelle attive per il tuo nome di dominio.

///

### 2 - Presa in carico della modifica dei server DNS

Una volta effettuate le modifiche, è necessario tenere conto di due periodi successivi:

- Il *Registry* che gestisce l'estensione del tuo nome di dominio (ad esempio, il Registry delle estensioni *.fr*) deve essere informato della modifica DNS apportata lato OVHcloud. Segui l'avanzamento dell'operazione sulla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
- Una volta aggiornate le informazioni del *Registry*, attendi un massimo di **48 ore** affinché le modifiche apportate siano completamente propagate ed effettive.

## Per saperne di più

[Sapere tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Sapere tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
