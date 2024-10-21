---
title: "Come connettere un dominio OVHcloud a un Google Site"
excerpt: "Prepara e configura la zona DNS del dominio OVHcloud per connetterla a un Google Site"
updated: 2024-10-03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Se il dominio è registrato in OVHcloud e vuoi connetterlo a un Google Site. Questa guida ti mostra la procedura da seguire per preparare e configurare la zona DNS di OVHcloud e configurare il tuo Google Site.

**Come connettere un dominio OVHcloud a un Google Site**

> [!warning]
>
> - L’assistenza Google Site non ha accesso ai parametri del dominio OVHcloud e non può quindi consigliarti quali informazioni è necessario fornire.
>
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther).
>

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre di un [dominio](/links/web/domains) registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie per gestire](/pages/account_and_service_management/account_information/managing_contacts) il dominio dallo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di un Google Site e esserne il proprietario.

## Procedura

Prima di eseguire i due passaggi di questa guida, ti consigliamo di familiarizzare con la configurazione di una zona DNS utilizzando la nostra guida "[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo Google Site. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri saranno semplicemente da modificare o creare. Per una migliore comprensione, utilizzeremo come esempio il dominio "**mydomain.ovh**". Sostituiscilo con il tuo dominio durante la configurazione.

### 1. Configura il tuo Google Site

> [!warning]
>
> Solo il proprietario di un sito Google può collegarlo ad un dominio. Se necessario, scopri come [modificare il proprietario del sito Google](https://support.google.com/sites/answer/97934).

Quando utilizzi un Google Site con un dominio OVHcloud, per prima cosa prepara l’hosting seguendo le istruzioni riportate nella sezione **Configurare un dominio personalizzato** dal [**questa pagina del supporto Google**](https://support.google.com/sites/answer/9068867?hl=it#zippy=).

### 2. Configurare i record DNS su un account OVHcloud

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Web Cloud`{.action}. Clicca su `Domini`{.action} e poi seleziona il dominio interessato. e clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con tutti i record DNS del dominio selezionato.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Ogni record DNS può essere modificato cliccando sul pulsante `...`{.action} a destra della riga della tabella in questione e poi su `Modifica il record`{.action}.

Segui i passaggi in sequenza nelle seguenti schede:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> Per identificare i record A esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `A`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella che corrisponde al tuo dominio, senza sottodominio (esempio: `mydomain.ovh.`), poi clicca su `Modifica il record`{.action}.<br>
>> - Se è presente un record per il sottodominio "www" (esempio: `wwww.mydomain.ovh.`), eliminalo in modo che non entri in conflitto con il record CNAME che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www" e poi clicca su `Elimina il record`{.action}.<br>
>> - Se non disponi di un record "A" esistente, clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Campo di puntamento" `A`{.action}<br><br>
>> Crea 4 record di tipo "A" in successione per inserire i 4 indirizzi IPv4 relativi a Google Site.
>> Lascia vuoto il campo **Sottodominio** e inserisci il primo indirizzo IPv4 di Google Site `216.239.32.21` nel campo **Destinazione**.
>> Clicca su `Continua`{.action} e conferma la tua registrazione "A". Ripeti l’operazione per gli altri tre indirizzi IPv4 `216.239.34.21`, `216.239.36.21` e `216.239.38.21`, poi passa allo Step 2. Poiché i valori di questi indirizzi IP possono cambiare, consulta la documentazione ufficiale [il valore dei record A](https://support.google.com/a/answer/2579934?hl=it&ref_topic=2721296&sjid=1037374977980680534-EU).
>>
> **Step 2**
>> **Record AAAA**<br><br>
>> Per identificare i record AAAA esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `AAAA`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio, senza sottodominio (esempio: `mydomain.ovh.`), poi clicca su `Elimina il record`{.action}.<br>
>> - Se è presente un record per il sottodominio "www" (esempio: `wwww.mydomain.ovh.`), eliminalo in modo che non entri in conflitto con il record CNAME che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www" e poi clicca su `Elimina il record`{.action}.<br>
>> - Se non disponi di un record "AAAA" esistente, passa allo Step 3.
>>
> **Step 3**
>> **Record TXT**<br><br>
>> Per identificare i record "TXT" esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `TXT`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Se sono presenti record "TXT" solo per il dominio (esempio: `mydomain.ovh.`) e per il suo sottodominio in "www" (esempio: `wwww.mydomain.ovh.`), eliminali affinché non entrino in conflitto con il record CNAME che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www" e poi clicca su `Elimina il record`{.action}.<br>
>> - È necessario creare un record TXT. Clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Campo di puntamento" `TXT`{.action}.
>> Completa i campi **Sottodominio** e **Destinazione** con le informazioni presenti nella pagina "[Valori dei record TXT](https://support.google.com/a/answer/2716802?hl=it&ref_topic=2716886&sjid=3052810298579211755-EU)" della documentazione ufficiale. In genere, il valore del campo **Sottodominio** è vuoto e il valore del campo **Destinazione** è di tipo `google-site-verification=XXXXXXXXXXXX`.<br>
>> Clicca su `Continua`{.action} per confermare il record "TXT" e andare al passaggio 4.
>>
> **Step 4**
>> **Record CNAME**<br><br>
>> Per identificare i record "CNAME" esistenti, clicca sul menu dei filtri in alto nella tabella dei record DNS e seleziona `CNAME`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www" (esempio: `wwww.mydomain.ovh.`) e poi clicca su `Modifica il record`{.action}.<br>
>> - Se non disponi di un record "CNAME", clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Campo di puntamento" `CNAME`{.action}.
>>
>> Inserisci nel campo **Sottodominio** il valore `www` e inserisci `ghs.googlehosted.com.` nel campo **Destinazione**. Poiché questi valori sono destinati a cambiare, consultali nella pagina "[Valori record CNAME](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU)" della documentazione ufficiale<br>
>> Clicca su `Continua`{.action} per confermare la tua registrazione "CNAME".

A questo punto la zona DNS è configurata per essere collegata a un Google Site.

> [!primary]
>
> La verifica del dominio può richiedere fino a 48 ore.

Se utilizzi un servizio di posta elettronica OVHcloud o prevedi di sottoscrivere una delle [nostre soluzioni email](/links/web/emails), è necessario preparare la zona DNS in modo adeguato. Consulta la nostra guida sulla [configurazione di un record MX](/pages/web_cloud/domains/dns_zone_mx).

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per modificare la gestione del dominio verso un altro account cliente OVHcloud, segui la guida "[Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts) OVHcloud".

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).