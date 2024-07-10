---
title: Come connettere un dominio OVHcloud a un hosting Wix
excerpt: Prepara e configura la zona DNS del dominio OVHcloud per connetterla a un hosting Wix
updated: 2024-04-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Se il dominio è registrato in OVHcloud e vuoi connetterlo a un hosting Wix. Questa guida ti mostra la procedura da seguire per preparare e configurare la zona DNS di OVHcloud e configurare il tuo hosting Wix.

**Come connettere un dominio OVHcloud a un hosting Wix**

> [!warning]
>
> - L’assistenza Wix non ha accesso ai parametri del dominio OVHcloud e non può quindi consigliarti quali informazioni è necessario fornire.
>
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne](#gofurther) di più.
>

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}
- Disporre di un [dominio](/links/web/domains){.external} registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie per gestire](/pages/account_and_service_management/account_information/managing_contacts) il dominio dallo [Spazio Cliente OVHcloud](/links/manager){.external}.
- Disporre di un hosting in Wix.
- Avere accesso alla gestione di questo hosting presso Wix.

## Procedura

Prima di eseguire i due passaggi di questa guida, ti consigliamo di familiarizzare con la configurazione di una zona DNS utilizzando la nostra guida "[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo hosting Wix. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri saranno semplicemente da modificare o creare. Per una migliore comprensione, utilizzeremo come esempio il dominio "**mydomain.ovh**". Sostituiscilo con il tuo dominio durante la configurazione.

### 1. Configura il tuo hosting Wix

Quando utilizzi un hosting Wix con un dominio OVHcloud, devi prima preparare il tuo hosting seguendo le istruzioni **dello step 1** da [**questa pagina della documentazione Wix**](https://support.wix.com/it/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).

### 2. Configurare i record DNS su un account OVHcloud

> [!warning]
>
> Prima di continuare: <br>
>
> - Apri una scheda in parallelo sul tuo browser internet.
> - Apri [**questa pagina della documentazione Wix**](https://support.wix.com/it/article/connected-un-domaine-%C3%A0-wix-par-pointage-5727882){.external}.
> - Posizionati sulla sezione "**Step 2 | Aggiorna record DNS nell'account dell'hosting di dominio**" nella documentazione di Wix.<br>
> Le istruzioni seguenti ti aiuteranno a configurare la tua zona DNS OVHcloud.

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Web Cloud`{.action}. Clicca su `Domini`{.action} e poi seleziona il dominio interessato. e clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con tutti i record DNS del dominio selezionato.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Ogni record DNS può essere modificato cliccando sul pulsante `...`{.action} a destra della riga della tabella in questione e poi su `Modifica il record`{.action}.

Segui i passaggi in sequenza nelle seguenti schede:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> Per identificare i record A esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella che corrisponde al tuo dominio senza sottodominio (esempio: `mydomain.ovh.`) e poi clicca su `Modifica il record`{.action}.
>> - Se è presente un record per il sottodominio "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarlo affinché non entri in conflitto con il record CNAME che inserirai allo Step 3. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio e con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.
>> - Se non disponi di un record "A", clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Campo di puntamento" `A`{.action}<br><br>
>> Lascia il campo **Sottodominio** vuoto e inserisci l'indirizzo IPv4 *rilevato dall'interfaccia Wix* nel campo **Destinazione**.
>> Clicca su `Avanti`{.action}, conferma il record "A" e passa allo Step 2.
> **Step 2**
>> **Record AAAA**<br><br>
>>  Per identificare i record AAAA esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Se sono presenti record "AAAA" per il solo dominio (esempio: `mydomain.ovh.`) e per il suo sottodominio in "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarli affinché non entrino in conflitto con i record "A" e "CNAME" che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio e con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.<br>
> **Step 3**
>> **Record TXT**<br><br>
>> Per identificare i record "TXT" esistenti, fare clic sul menu dei filtri nella parte superiore della tabella di record DNS e selezionare `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Se sono presenti record "TXT" per il solo dominio (esempio: `mydomain.ovh.`) e per il suo sottodominio in "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarli affinché non entrino in conflitto con il record CNAME che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.<br>
> **Step 4**
>> **Record CNAME**<br><br>
>>  Per identificare i record "CNAME" esistenti, clicca sul menu dei filtri in alto nella tabella dei record DNS e seleziona `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www." (esempio: `mydomain.ovh.`) e poi clicca su `Modifica il record`{.action}.
>> - Se non disponi di un record "CNAME", clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Record di puntamento" `CNAME`{.action}.
>> Inserisci nel campo **Sottodominio** il valore `www` e il valore registrato dall’interfaccia Wix nel campo **Destinazione**.<br>
>> Clicca su `Seguente`{.action} e conferma la tua registrazione "CNAME".

A questo punto la zona DNS è configurata per essere collegata a un hosting Wix.

> [!primary]
>
> La verifica del dominio può richiedere fino a 48 ore.

Se utilizzi un servizio di posta elettronica OVHcloud o prevedi di sottoscrivere una delle [nostre soluzioni email](/links/web/emails), è necessario preparare la zona DNS in modo adeguato. Consulta la nostra guida sulla [configurazione di un record MX](/pages/web_cloud/domains/dns_zone_mx).

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Creare una zona DNS OVHcloud per un dominio](/pages/web_cloud/domains/dns_zone_create)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per modificare la gestione del dominio verso un altro account cliente OVHcloud, segui la guida "[Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts) OVHcloud".

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
