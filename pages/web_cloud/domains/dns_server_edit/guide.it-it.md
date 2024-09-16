---
title: "Modificare i server DNS di un dominio OVHcloud"
excerpt: "Scopri come modificare i server DNS di un dominio registrato in OVHcloud"
updated: 2024-09-16
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'acronimo **DNS** (**D**omain **N**ame **S**ystem), è un insieme di elementi (server DNS, zone DNS, ecc...) che permettono di far corrispondere un nome di dominio con un indirizzo IP.

Per maggiori informazioni, consulta le nostre guide "[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Questa guida ti mostra come modificare i server DNS in 3 step.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un [dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle autorizzazioni [appropriate per gestire](/pages/account_and_service_management/account_information/managing_contacts) per il dominio dallo [Spazio Cliente OVHcloud](/links/manager).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

> [!primary]
>
> **Registrar** è un'organizzazione autorizzata a vendere domini. Tra questi **Registrars** anche OVHcloud.
>
> Se il dominio non è registrato presso OVHcloud, è necessario modificare i server DNS presso il **Registrar** in cui è attualmente registrato il dominio.
>

## Procedura

> [!alert]
>
> **Ricordati di prestare attenzione quando modifichi i server DNS di un dominio.**
>
> Un errore di modifica potrebbe rendere inaccessibile il tuo sito Web o impedire agli indirizzi di posta elettronica di ricevere nuove email. Comprendere le conseguenze di una modifica è importante per effettuare l’operazione con la massima consapevolezza.

La modifica dei server DNS di un dominio comporta la modifica della sua configurazione. La nuova configurazione DNS sostituisce la precedente ed è archiviata sui server DNS appena definiti. Tecnicamente, il dominio utilizza una nuova zona DNS.

Tuttavia, è essenziale tenere conto dei seguenti punti:

- In caso di modifica del server DNS (ad esempio, un DNS esterno tramite un DNS OVHcloud), il contenuto della configurazione precedente/zona DNS non viene automaticamente replicato nella nuova. Assicurati che la nuova zona DNS contenga tutti i record DNS necessari al corretto funzionamento dei servizi associati al dominio (ad esempio, il sito Web e gli indirizzi di posta elettronica).
- Se non vuoi modificare i server DNS ma uno o più record della tua configurazione/zona DNS attuale, consulta la nostra guida: "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Alcune organizzazioni, i Registri, che gestiscono le estensioni dei domini, hanno dei requisiti particolari riguardo ai server DNS (quantità di server dei nomi, valore dei record, ecc...). In caso di dubbi, contatta il Registro responsabile del dominio.

### Step 1 - Accedi alla gestione dei server DNS OVHcloud <a name="access-dns-servers"></a>

Per effettuare questa operazione, esegui le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
4. Seleziona il dominio.
5. Clicca sulla scheda `Server DNS`{.action}.

Visualizzi una tabella con tutti i server DNS configurati da OVHcloud per il tuo dominio. A ogni riga corrisponde un server DNS.

> [!primary]
>
> Quando utilizzi i server DNS OVHcloud, i numeri presenti nei nomi dei server non hanno alcun legame con il servizio o i servizi che utilizzi. Solo l’opzione [DNS anycast](/links/web/domains-options) utilizza server DNS specifici (`ns200.anycast.me` e `dns200.anycast.me`). Quando vengono sottoscritti, vengono automaticamente assegnati all'utente.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Step 2 - Modifica i server DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> Tutte le funzionalità descritte in questa guida sono disponibili nella scheda `Server DNS`{.action} indicata nello [step 1](#access-dns-servers).
>

Per modificare i server DNS, clicca sul pulsante `Modifica i server DNS`{.action} a destra della tabella "server DNS". In base alla risoluzione dello schermo, il pulsante potrebbe trovarsi sotto la tabella.

Verrà visualizzata una nuova pagina con tre opzioni di modifica.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Opzione 1 - Utilizza i DNS predefiniti di OVHcloud

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Questa opzione permette di applicare automaticamente la configurazione della zona DNS OVHcloud esistente per il dominio. Per prima cosa, assicurati che il dominio contenga una zona DNS.

> [!primary]
>
> In caso di necessità, consulta le guide "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" e/o "[Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)" per verificare se esiste una zona DNS OVHcloud per il tuo dominio.

Per utilizzare i server DNS predefiniti di OVHcloud, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la seguente finestra:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

che riepiloga i nomi dei 2 server DNS che saranno applicati al dominio. Devono avere una delle 3 forme seguenti:

- `nsXX.ovh.net` e `dnsXX.ovh.net` o, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ogni `X` rappresenta una cifra compresa tra **0** e **9**)
- `nsXX.ovh.ca` e `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (dove ogni `X` rappresenta una cifra compresa tra **0** e **9**)
- `ns200.anycast.me` e `dns200.anycast.me` (se avete attivato l’opzione [DNS anycast](/links/web/domains-options))

Se corrispondono a quelli che vuoi applicare, clicca su `Applica`{.action}.

In questo modo, i 2 server DNS dichiarati (nei record di tipo NS della zona DNS di OVHcloud) saranno utilizzati per il dominio.

I server DNS dichiarati e la configurazione DNS applicata verranno disattivati per il dominio. La zona DNS di OVHcloud diventerà la zona DNS attiva per il tuo dominio.

#### Opzione 2 - Utilizza i tuoi DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

Questa opzione permette di dichiarare i server DNS di una zona DNS non gestita dallo Spazio Cliente OVHcloud.

Questo può essere, ad esempio:

- server DNS esterni forniti da uno dei nostri concorrenti;
- i tuoi server DNS se ospiti la tua zona DNS su uno dei tuoi server. I server DNS possono anche essere ospitati su un'infrastruttura OVHcloud (server dedicato, VPS, ecc...).

> [!success]
>
> Prima di aggiungere un server DNS, assicurati che **sia raggiungibile** e che contenga una zona DNS per il tuo dominio. Assicurati inoltre che la zona DNS contenga tutti i record di tipo "NS" in tutti i server DNS dichiarati per il dominio.
>
> Ad esempio: vuoi dichiarare i server DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* e *ns3.dns-server.tld* per il tuo dominio. A questo punto verifica che i tre record di tipo "NS" seguenti siano presenti nelle 3 zone DNS ospitate su questi 3 server DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.
>

Per compilare uno dei tuoi server DNS, compila i 2 form del riquadro come indicato qui di seguito:

- `Server DNS`: nome del server DNS da applicare al dominio.
- `IP associato (facoltativo)`: indirizzo IP (IPv4 o IPv6) del server DNS inserito. In questo modulo è possibile inserire **un solo indirizzo IP**.

> [!warning]
>
> Ogni riquadro di input (visualizzato nella schermata precedente) può contenere un solo** server DNS alla volta. Un server DNS corrisponde quindi a un riquadro.
>
> Inoltre, una nota informativa su sfondo blu, situata sopra il primo riquadro, indica l'intervallo di server DNS che è possibile dichiarare per il tuo nome di dominio. Questi valori variano in base all'estensione del dominio.

Una volta inserite le informazioni, clicca sul pulsante `+`{.action} a destra dei 2 moduli. che permette di aggiungere il server DNS e visualizzare un nuovo riquadro di inserimento sotto quello precedente.

Ripeti l’operazione per tutti i server DNS da aggiungere, rispettando i limiti indicati nella nota informativa.
Clicca sul pulsante `+`{.action} per ogni server DNS per confermare l’inserimento e l’aggiunta.

Una volta aggiunti tutti i server DNS, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la seguente finestra:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Che riepiloga i nomi dei server DNS applicati al dominio.
Se corrispondono a quelli che vuoi applicare, clicca su `Applica`{.action}.

I server DNS dichiarati e la configurazione DNS applicata verranno disattivati per il dominio. La zona DNS dichiarata sui tuoi server DNS diventerà la zona DNS attiva per il tuo dominio.

#### Opzione 3 - Utilizza i DNS OVHcloud e i tuoi DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Questa opzione permette di combinare l'utilizzo dei propri server DNS conservando i server DNS OVHcloud attivi per il dominio. Questa combinazione permette, ad esempio, di assicurare un maggiore accesso ai diversi servizi associati al dominio (hosting Web, server di posta, ecc...). Infatti, se un gruppo di server DNS diventa indisponibile per qualche minuto, gli altri server DNS dichiarati possono subentrare.

E verifica che le configurazioni delle zone DNS dei diversi server siano configurate correttamente per funzionare tutte insieme. Nella maggior parte dei casi, tutti i server DNS saranno operativi. Saranno tutti in grado di rispondere alle richieste che verranno loro fatte in modo casuale sulla rete DNS.

> [!warning]
>
> 1. Presta particolare attenzione se decidi di utilizzare quest’ultima opzione. richiede infatti conoscenze avanzate sul funzionamento della rete DNS, dei server DNS e delle zone DNS.<br>
> 2. L'opzione [DNSSEC](/pages/web_cloud/domains/dns_dnssec) deve essere disattivata per combinare l'utilizzo dei propri server DNS con i DNS di OVHcloud.<br>
> 3. È importante non mescolare un gruppo di server DNS di OVHcloud con un altro gruppo di server DNS di OVHcloud. Ad esempio, *dns19.ovh.net* e *ns19.ovh.net* corrispondono a un gruppo di server DNS di OVHcloud, vanno di pari passo e sono sincronizzati. In OVHcloud, i gruppi di server DNS sono identificabili tramite il numero presente nei nomi dei server. Due server DNS OVHcloud fanno parte dello stesso gruppo di server DNS quando condividono lo stesso numero. *dns19.ovh.net* e *ns19.ovh.net*.

> [!success]
>
> Prima di aggiungere un server DNS, assicurati che **sia raggiungibile** e che contenga una zona DNS per il tuo dominio. Assicurati inoltre che la zona DNS contenga tutti i record di tipo "NS" in tutti i server DNS dichiarati per il dominio.
>
> Ad esempio: vuoi dichiarare i server DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* e *nsXX.ovh.net* per il tuo dominio. A questo punto verifica che i tre record di tipo "NS" seguenti siano presenti nelle 3 zone DNS ospitate su questi 3 server DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.
>

Per compilare uno dei tuoi server DNS, compila i 2 form del riquadro come indicato qui di seguito:

- `Server DNS`: nome del server DNS da applicare al dominio.
- `IP associato (facoltativo)`: indirizzo IP (IPv4 o IPv6) del server DNS inserito. In questo modulo è possibile inserire **un solo indirizzo IP**.

> [!warning]
>
> Ogni riquadro di input (visualizzato nella schermata precedente) può contenere **un solo** server DNS alla volta. Un server DNS corrisponde quindi a un riquadro.
>
> Inoltre, una nota informativa su sfondo blu, situata sopra il primo riquadro, indica l'intervallo di server DNS che è possibile dichiarare per il tuo nome di dominio. Questi valori variano in base all'estensione del dominio.

Una volta inserite le informazioni, clicca sul pulsante `+`{.action} a destra dei 2 moduli. che permette di aggiungere il server DNS e visualizzare un nuovo riquadro di inserimento sotto quello precedente.

Ripeti l’operazione per tutti i server DNS da aggiungere, rispettando i limiti indicati nella nota informativa.
Clicca sul pulsante `+`{.action} per ogni server DNS per confermare l’inserimento e l’aggiunta.

Una volta aggiunti tutti i server DNS, clicca su `Applicare la configurazione`{.action}. Viene visualizzata la seguente finestra:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

che riepiloga i nomi dei server DNS applicati al dominio.
Se corrispondono a quelli che vuoi applicare, clicca su `Applica`{.action}.

I server DNS dichiarati e la configurazione DNS applicata verranno disattivati per il dominio. Le zone DNS presenti sui server DNS OVHcloud e sui server DNS diventano quelle attive per il dominio.

### Step 3 - Presa in carico della modifica dei server DNS

Una volta effettuate le modifiche, è necessario considerare due periodi successivi:

- *Il registro* che gestisce l’estensione del dominio (ad esempio, il registro delle estensioni con estensione *.fr*) deve essere informato della modifica DNS apportata da parte di OVHcloud. Segui lo stato di avanzamento dell’operazione nello [Spazio Cliente OVHcloud](/links/manager). Accedi alla sezione `Web Cloud`{.action}, clicca su `Domini`{.action} nella colonna di sinistra e seleziona `Operazioni in corso`{.action}.
- Una volta aggiornate le informazioni del *Registro*, attendi fino a **48 ore** affinché le modifiche apportate siano completamente propagate ed effettive.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).