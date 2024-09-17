---
title: Aggiungi un record CNAME per convalidare il tuo dominio sul tuo servizio di posta
excerpt: Questa guida ti mostra come configurare un dominio sulla piattaforma di posta aggiungendo un record CNAME
updated: 2023-08-29
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Quando aggiungi un dominio sulla tua piattaforma di posta, potrebbe esserti richiesta la configurazione di un record CNAME nella zona DNS. con lo scopo di garantire che il dominio in questione sia legittimo per essere utilizzato sulla piattaforma email.

> [!primary]
>
> Se il dominio aggiunto è gestito nello stesso account cliente della piattaforma email e in particolare nella sua zona DNS, non è necessario configurare alcun record CNAME.

**Questa guida ti mostra come configurare un dominio sulla piattaforma di posta aggiungendo un record CNAME.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Web Cloud`{.action}.
- Disporre di una soluzione [Exchange](https://www.ovhcloud.com/it/emails/) o [Email Pro](/links/web/email-pro).
- Aver aggiunto un dominio sulla piattaforma di posta. Per maggiori informazioni, consulta la guida "[Aggiungere un dominio su una piattaforma email](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".
- Essere in grado di [configurare la zona DNS](/pages/web_cloud/domains/dns_zone_edit) del dominio dallo Spazio Cliente OVHcloud o dall’interfaccia di gestione in cui è registrato.

## Procedura

### Perché creare un record CNAME?

Il record CNAME viene utilizzato qui in quanto alias, punta verso una destinazione che, a sua volta, restituisce verso un indirizzo IP. Non si tratta quindi, di per sé, di un record associato a un servizio di posta elettronica.

Nell'ambito delle nostre offerte [**Hosted Exchange**](https://www.ovhcloud.com/it/emails/hosted-exchange/) e [**Email Pro**](/links/web/email-pro), il record CNAME viene utilizzato come codice di conferma (token) che sarà visibile nella zona DNS del dominio da convalidare. con lo scopo di verificare che l’utente della piattaforma email sia il gestore del dominio aggiunto.

Nel diagramma che segue, la piattaforma di posta elettronica ([Exchange](https://www.ovhcloud.com/it/emails/) o [Email Pro](/links/web/email-pro)) è rappresentata dal frame verde.<br>
Per formare gli indirizzi email aggiungi account (rappresentati da "**contact**", "**john.smith**" e "**mary.johnson**").<br>
Il dominio **mydomain.ovh** è stato aggiunto alla piattaforma email (consulta la guida "[Aggiungere un dominio su una piattaforma email](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)").<br>
Un codice di conferma viene generato dalla piattaforma (nel nostro esempio, sotto forma di "**abcd1-check**").<br>
Se la zona DNS del dominio **mydomain.ovh** non è gestita nello stesso account cliente OVHcloud o da un’interfaccia di gestione esterna, il codice deve essere aggiunto sotto forma di record CNAME. Questo record è rappresentato dal riquadro blu nell'esempio.<br>
La piattaforma email è in grado di osservare i record DNS del dominio **mydomain.ovh** per verificare la presenza del codice di conferma.

![email](images/email-dns-conf-cname01.png){.thumbnail}

Una volta che la piattaforma email avrà letto il codice di conferma nella zona DNS del dominio **mydomain.ovh**, sarà possibile formare gli indirizzi **contact@mydomain.ovh**, **john.smith@mydomain.ovh** e **mary.johnson@mydomain.ovh**.

### Step 1 - Comprendere la diagnostica CNAME di OVHcloud <a name="step1"></a>

Dopo aver aggiunto il dominio, la casellina di diagnostica **CNAME** appare nella scheda `Domini associati`{.action} della piattaforma di posta.

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

Nell'esempio precedente, la casellina è rossa. Ecco le possibili ragioni di questa diagnosi:

- **il dominio dichiarato non è associato allo stesso account cliente OVHcloud della piattaforma di posta**: esegui [lo step 3](#step3) di questa guida dallo Spazio Cliente dell’account OVHcloud che gestisce la zona DNS del dominio.
- **il dominio dichiarato utilizza server DNS esterni a OVHcloud**: il dominio è registrato in OVHcloud ma utilizza server DNS "personalizzati". Per verificarlo, seleziona il dominio nella sezione `Domini`{.action} della colonna di sinistra. Nella scheda `Informazioni generali`{.action}, verifica la voce "Server DNS". Se il campo `Personalizzato`{.action} viene visualizzato, è necessario accedere all'interfaccia di gestione dei server DNS registrati nella scheda `Server DNS`{.action}

![email](images/email-dns-conf-cname02.png){.thumbnail}

- **il dominio dichiarato non è registrato in OVHcloud e non utilizza server DNS OVHcloud**: il dominio è registrato presso un altro Registrar. È necessario verificare tramite l’interfaccia del Registrar del dominio i server DNS utilizzati per identificare la posizione in cui configurare la zona DNS.

### Step 2 - Recupera il codice di conferma <a name="step2"></a>

Seleziona la scheda `Domini associati`{.action} e clicca sulla casellina rossa `CNAME` nella colonna "Diagnostica" per recuperare le informazioni necessarie.

Il record CNAME è descritto nella finestra di dialogo che appare.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

Recupera il codice unico visibile sulla linea centrale (`a1bcd-check.mydomain.ovh to ovh.com.` nell’esempio).

### Step 3 - Crea il record CNAME <a name="step3"></a>

Seleziona la scheda corrispondente alla tua situazione:

> [!tabs]
> **Dallo Spazio Cliente**
>> Nella sezione `Web Cloud`{.action}, clicca su `Domini`{.action} e poi sul dominio interessato. e clicca sulla scheda `Zona DNS`{.action}.<br>
>> Viene visualizzata la configurazione della zona DNS. Per aggiungere un record CNAME, clicca sul pulsante `Aggiungi un record`{.action} a destra.<br>
>> Nella nuova finestra, ti vengono proposti diversi record DNS. Clicca su `CNAME`{.action} e completa i campi con le informazioni recuperate nello [step 2](#step2) di questa guida.<br>
>> Ad esempio, se il codice di convalida è **a1bcd-check**, è necessario inserirlo nella casella sottodominio. Infine, inserisci "**ovh.com.**" nella sezione "destinazione", tenendo presente il "**.**" finale.
>>
>> ![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Una volta inseriti i dati richiesti, clicca su `Continua`{.action}, Verifica la correttezza delle informazioni e clicca su `Conferma`{.action}.<br>
>>
>> > [!warning]
>> >
>> > La modifica richiede un tempo di propagazione generalmente di pochi minuti. Tuttavia, può durare fino a 24 ore.
>>
> **Da un'interfaccia esterna a OVHcloud**
>>
>> Accedi all’interfaccia che gestisce la zona DNS del dominio e aggiungi un record di tipo CNAME con queste impostazioni:
>>
>> - **sottodominio**: inserisci il valore in "**xxxxx-check**" sostituendo "**x**" con il codice univoco indicato al passaggio 2 [di questa guida](#step2).
>> - **target** : inserisci il valore "**ovh.com.**" tenendo presente il " **.**" finale se l’interfaccia di inserimento non lo fa automaticamente.
>>
>> Conferma la modifica nella tua zona DNS.
>>
>> > [!warning]
>> >
>> > Questa modifica richiede un tempo di propagazione, generalmente applicato in pochi minuti. Tuttavia, può durare fino a 24 ore.
>> >
>>
>> Ecco un esempio di risposta DNS dopo l’aggiunta di un record CNAME di convalida:
>>
>> ```bash
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

Per verificare che la configurazione del record CNAME sia stata letta correttamente dalla tua piattaforma di posta, torna su questa e clicca sulla scheda `Domini associati`{.action}. Se la casellina `CNAME` non è più presente nella colonna "diagnostica", il dominio è aggiunto correttamente. In caso contrario, è possibile che la propagazione delle modifiche non sia ancora terminata.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.