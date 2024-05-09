---
title: Come connettere un dominio OVHcloud a un hosting Wix
excerpt: Prepara e configura la zona DNS del dominio OVHcloud per connetterla a un hosting Wix
updated: 2024-04-17
---

## Obiettivo

Se il dominio è registrato in OVHcloud e vuoi connetterlo a un hosting Wix. Questa guida ti mostra la procedura da seguire per preparare e configurare la zona DNS di OVHcloud e configurare il tuo hosting Wix.

**Come connettere un dominio OVHcloud a un hosting Wix**

> [!warning]
>
> - L’assistenza Wix non ha accesso ai parametri del dominio OVHcloud e non può quindi consigliarti quali informazioni è necessario fornire.
>
> - OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.<br><br> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](partner.) o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne](how_to_connect_domain_to_wix_#gofurther.) di più.
>

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](manager.){.external}
- Disporre di un [dominio](domains.){.external} registrato in OVHcloud.
- Disporre delle [autorizzazioni necessarie per gestire](managing_contacts1.) il dominio dallo [Spazio Cliente OVHcloud](manager.){.external}.
- Disporre di un hosting in Wix.
- Avere accesso alla gestione di questo hosting presso Wix.

## Procedura

Prima di eseguire i due passaggi di questa guida, ti consigliamo di familiarizzare con la configurazione di una zona DNS utilizzando la nostra guida "[Modificare una zona DNS in OVHcloud](dns_zone_edit1.)".

> [!warning]
>
> La tua zona DNS è potenzialmente già preconfigurata o collegata a un hosting. Ti mostreremo come identificare ogni record DNS necessario alla connessione con il tuo hosting Wix. Alcuni dovranno essere eliminati per evitare conflitti con i record DNS necessari in questa configurazione. Altri saranno semplicemente da modificare o creare. Per una migliore comprensione, utilizzeremo come esempio il dominio "**mydomain.ovh**". Sostituiscilo con il tuo dominio durante la configurazione.

### 1. Configura il tuo hosting Wix

Quando utilizzi un hosting Wix con un dominio OVHcloud, devi prima preparare il tuo hosting seguendo le istruzioni **dello step 1** da [**questa pagina della documentazione Wix**](https://support.wix.com/it/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).

### 2. Configurare i record DNS su un account OVHcloud

> [!warning]
>
> Prima di continuare: <br>
> - Apri una scheda in parallelo sul tuo browser internet.
> - Apri [**questa pagina della documentazione Wix**](https://support.wix.com/it/article/connected-un-domaine-%C3%A0-wix-par-pointage-5727882){.external}.
> - Posizionati sulla sezione "**Step 2 | Aggiorna record DNS nell'account dell'hosting di dominio**" nella documentazione di Wix.<br>
> Le istruzioni seguenti ti aiuteranno a configurare la tua zona DNS OVHcloud.

Accedi allo [Spazio Cliente OVHcloud](manager.){.external}, sezione `Web Cloud`{.action}. Clicca su `Domini`{.action} e poi seleziona il dominio interessato. e clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con tutti i record DNS del dominio selezionato.

![dnszone](how_to_connect_domain_to_wix_images_tab.png){.thumbnail}

Ogni record DNS può essere modificato cliccando sul pulsante `...`{.action} a destra della riga della tabella in questione e poi su `Modifica il record`{.action}.

Segui i passaggi in sequenza nelle seguenti schede:

> [!tabs]
> **Step 1**
>> **Record A**<br><br>
>> Per identificare i record A esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `A`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-a.png){.thumbnail}<br>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella che corrisponde al tuo dominio senza sottodominio (esempio: `mydomain.ovh.`) e poi clicca su `Modifica il record`{.action}.<br>
>> - Se è presente un record per il sottodominio "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarlo affinché non entri in conflitto con il record CNAME che inserirai allo Step 3. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio e con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.<br>
>> - Se non disponi di un record "A", clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Campo di puntamento" `A`{.action}<br><br>
>> Lascia il campo **Sottodominio** vuoto e inserisci l'indirizzo IPv4 *rilevato dall'interfaccia Wix* nel campo **Destinazione**.
>> Clicca su `Avanti`{.action}, conferma il record "A" e passa allo Step 2.
> **Step 2**
>> **Record AAAA**<br><br>
>>  Per identificare i record AAAA esistenti, fare clic sul menu dei filtri nella parte superiore della tabella dei record DNS e selezionare `AAAA`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-aaaa.png){.thumbnail}<br>
>> - Se sono presenti record "AAAA" per il solo dominio (esempio: `mydomain.ovh.`) e per il suo sottodominio in "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarli affinché non entrino in conflitto con i record "A" e "CNAME" che inserirai allo Step 4. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio e con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.<br>
> **Step 3**
>> **Record TXT**<br><br>
>>  Per identificare i record "TXT" esistenti, fare clic sul menu dei filtri nella parte superiore della tabella di record DNS e selezionare `TXT`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-txt.png){.thumbnail}<br>
>> - Se sono presenti record "TXT" per il solo dominio (esempio: `mydomain.ovh.`) e per il suo sottodominio in "www." (esempio: `www.mydomain.ovh.`), è necessario eliminarli affinché non entrino in conflitto con il record CNAME che inserirai allo Step 3. Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo dominio con il sottodominio "www." e poi clicca su `Elimina il record`{.action}.<br>
> **Step 4**
>> **Record CNAME**<br><br>
>>  Per identificare i record "CNAME" esistenti, clicca sul menu dei filtri in alto nella tabella dei record DNS e seleziona `CNAME`.<br>
>> ![dnszone](how_to_connect_domain_to_wix_images_filter-cname.png){.thumbnail}<br>
>> - Clicca sul pulsante `...`{.action} a destra della riga della tabella corrispondente al tuo sottodominio in "www." (esempio: `mydomain.ovh.`) e poi clicca su `Modifica il record`{.action}.<br>
>> - Se non disponi di un record "CNAME", clicca sul pulsante `Aggiungi un record`{.action} in alto a destra e seleziona il "Record di puntamento" `CNAME`{.action}.
>> Inserisci nel campo **Sottodominio** il valore `www` e il valore registrato dall’interfaccia Wix nel campo **Destinazione**.<br>
>> Clicca su `Seguente`{.action} e conferma la tua registrazione "CNAME".

A questo punto la zona DNS è configurata per essere collegata a un hosting Wix.

> [!primary]
>
> La verifica del dominio può richiedere fino a 48 ore.

Se utilizzi un servizio di posta elettronica OVHcloud o prevedi di sottoscrivere una delle [nostre soluzioni email](emails.), è necessario preparare la zona DNS in modo adeguato. Consulta la nostra guida sulla [configurazione di un record MX](dns_zone_mx1.).

## Per saperne di più <a name="go-further"></a>

[Modificare i server DNS di un dominio OVHcloud](dns_server_general_information1.)

[Creare una zona DNS OVHcloud per un dominio](dns_zone_create1.)

[Modificare una zona DNS in OVHcloud](dns_zone_edit1.)

Per modificare la gestione del dominio verso un altro account cliente OVHcloud, segui la guida "[Gestire i contatti dei servizi](managing_contacts1.) OVHcloud".

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](partner.).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](support.).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
